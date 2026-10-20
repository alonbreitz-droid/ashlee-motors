// Builds responsive WebP variants of the client's photos for srcset.
// Source: public/assets/gallery/optimized/*.jpeg (1920px) plus a few loose assets.
// Output: public/assets/img/<name>-<width>.webp and src/config/imageManifest.json
// Run: node scripts/build-images.mjs
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const outDir = path.join(root, 'public/assets/img');
const manifestPath = path.join(root, 'src/config/imageManifest.json');
fs.mkdirSync(outDir, { recursive: true });

const galleryDir = path.join(root, 'public/assets/gallery/optimized');
const sources = fs.readdirSync(galleryDir)
  .filter(f => /\.jpe?g$/i.test(f))
  .map(f => ({ file: path.join(galleryDir, f), name: f.replace(/\.jpe?g$/i, ''), widths: [480, 960, 1600] }));
sources.push(
  { file: path.join(root, 'public/assets/elfit.jpg'), name: 'elfit', widths: [480, 960] },
  { file: path.join(root, 'public/assets/GT-LTDM2-1_600x.jpg.webp'), name: 'diag-tool', widths: [480, 600] },
  { file: path.join(root, 'public/assets/logo.PNG'), name: 'logo', widths: [96, 192, 384], quality: 90 },
);

const manifest = {};
for (const s of sources) {
  const meta = await sharp(s.file).rotate().metadata();
  // .rotate() honours EXIF orientation, so swap dims for 90° orientations
  const portrait = meta.orientation >= 5;
  const w = portrait ? meta.height : meta.width;
  const h = portrait ? meta.width : meta.height;
  const widths = s.widths.filter(x => x < w).concat(s.widths.some(x => x >= w) ? [w] : []);
  manifest[s.name] = { w, h, widths };
  for (const width of widths) {
    const out = path.join(outDir, `${s.name}-${width}.webp`);
    if (fs.existsSync(out)) continue;
    await sharp(s.file).rotate().resize({ width }).webp({ quality: s.quality ?? 72, effort: 5 }).toFile(out);
  }
}
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 0) + '\n');
console.log(`images: ${Object.keys(manifest).length}, files: ${fs.readdirSync(outDir).length}`);
