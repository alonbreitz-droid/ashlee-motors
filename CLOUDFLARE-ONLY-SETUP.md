# Cloudflare-Only Video Hosting (No Credit Card)

## ✅ Solution: Compress Videos & Host on Cloudflare Pages

**Cloudflare Pages:**
- ✅ 25MB file size limit per file
- ✅ Unlimited bandwidth (FREE!)
- ✅ No credit card required
- ✅ Videos served from global CDN

## Step 1: Install FFmpeg

```bash
brew install ffmpeg
```

(Or download from: https://ffmpeg.org/download.html)

## Step 2: Compress Videos

Run the compression script:

```bash
./compress-videos.sh
```

Or manually:

```bash
# Create directory
mkdir -p public/assets/compressed

# Compress hero video (target: <25MB)
ffmpeg -i "assets/Ash-Lee Reel 1.mp4" \
  -vcodec libx264 \
  -crf 32 \
  -preset slow \
  -vf "scale=1280:-1" \
  -acodec aac \
  -b:a 96k \
  -movflags +faststart \
  "public/assets/compressed/hero-video.mp4"

# Compress about video (target: <25MB)
ffmpeg -i "assets/Ash-Lee reel 2.mp4" \
  -vcodec libx264 \
  -crf 32 \
  -preset slow \
  -vf "scale=1280:-1" \
  -acodec aac \
  -b:a 96k \
  -movflags +faststart \
  "public/assets/compressed/about-video.mp4"
```

## Step 3: Update Code

The code is already set up! Just update `src/config/videoUrls.js`:

```javascript
export const videoUrls = {
  heroVideo: '/assets/compressed/hero-video.mp4',
  aboutVideo: '/assets/compressed/about-video.mp4',
};
```

## Step 4: Deploy to Cloudflare Pages

1. Push to GitHub (videos will be in repo)
2. Cloudflare Pages will automatically deploy
3. Videos served from Pages CDN (free!)

## Compression Settings Explained

- **crf 32**: Higher quality loss, smaller file (28-32 is good for web)
- **scale=1280:-1**: Resize to 1280px width (maintains aspect ratio)
- **b:a 96k**: Lower audio bitrate (saves space)
- **movflags +faststart**: Optimizes for web streaming

## File Size Targets

- **Hero video**: <25MB (currently 138MB → target 20-24MB)
- **About video**: <25MB (currently 162MB → target 20-24MB)

## Alternative: Online Compression

If FFmpeg doesn't work, use online tools:
- https://www.freeconvert.com/video-compressor
- https://www.clipchamp.com/
- Upload → Compress → Download → Put in `public/assets/compressed/`

## Cost

- ✅ Cloudflare Pages: FREE (unlimited bandwidth)
- ✅ Storage: FREE (included in Pages)
- ✅ CDN: FREE (global CDN included)
- 💵 **Total: $0/month**

