#!/bin/bash

# Compress Videos for Cloudflare Pages (25MB limit per file)
# This compresses videos to fit within Cloudflare Pages free hosting

echo "🎬 Compressing Videos for Cloudflare Pages"
echo "=========================================="
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ FFmpeg not found!"
    echo ""
    echo "Install FFmpeg:"
    echo "  macOS: brew install ffmpeg"
    echo "  Linux: sudo apt install ffmpeg"
    echo "  Windows: Download from https://ffmpeg.org/"
    exit 1
fi

echo "✅ FFmpeg found"
echo ""

# Create compressed directory
mkdir -p public/assets/compressed

# Compress hero video
if [ -f "assets/Ash-Lee Reel 1.mp4" ]; then
    echo "📹 Compressing hero video (this may take a few minutes)..."
    ffmpeg -i "assets/Ash-Lee Reel 1.mp4" \
        -vcodec libx264 \
        -crf 28 \
        -preset slow \
        -vf "scale=1280:-1" \
        -acodec aac \
        -b:a 128k \
        -movflags +faststart \
        "public/assets/compressed/hero-video.mp4" 2>&1 | grep -E "Duration|time=" || true
    
    SIZE=$(du -h "public/assets/compressed/hero-video.mp4" | cut -f1)
    echo "✅ Hero video compressed: $SIZE"
else
    echo "⚠️  Hero video not found"
fi

echo ""

# Compress about video
if [ -f "assets/Ash-Lee reel 2.mp4" ]; then
    echo "📹 Compressing about video (this may take a few minutes)..."
    ffmpeg -i "assets/Ash-Lee reel 2.mp4" \
        -vcodec libx264 \
        -crf 28 \
        -preset slow \
        -vf "scale=1280:-1" \
        -acodec aac \
        -b:a 128k \
        -movflags +faststart \
        "public/assets/compressed/about-video.mp4" 2>&1 | grep -E "Duration|time=" || true
    
    SIZE=$(du -h "public/assets/compressed/about-video.mp4" | cut -f1)
    echo "✅ About video compressed: $SIZE"
else
    echo "⚠️  About video not found"
fi

echo ""
echo "✅ Compression complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Check file sizes (should be under 25MB each):"
echo "      ls -lh public/assets/compressed/"
echo ""
echo "   2. Update videoUrls.js to use compressed videos:"
echo "      heroVideo: '/assets/compressed/hero-video.mp4'"
echo "      aboutVideo: '/assets/compressed/about-video.mp4'"
echo ""
echo "   3. Videos will be served from Cloudflare Pages (free!)"

