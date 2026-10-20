import React from 'react';
import manifest from '../config/imageManifest.json';

// Responsive WebP from public/assets/img (built by scripts/build-images.mjs).
// width/height come from the manifest so the browser reserves space (no layout shift).
export const srcFor = (name, width) => `/assets/img/${name}-${width}.webp`;
export const srcSetFor = (name) => manifest[name].widths.map(w => `${srcFor(name, w)} ${w}w`).join(', ');

export default function Img({ name, alt, sizes = '100vw', priority = false, className, ...rest }) {
  const m = manifest[name];
  const fallback = m.widths[Math.min(1, m.widths.length - 1)];
  return (
    <img
      src={srcFor(name, fallback)}
      srcSet={srcSetFor(name)}
      sizes={sizes}
      width={m.w}
      height={m.h}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : undefined}
      decoding={priority ? 'sync' : 'async'}
      className={className}
      {...rest}
    />
  );
}
