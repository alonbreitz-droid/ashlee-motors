#!/bin/bash

# Compress videos for Cloudflare Pages (25MB limit, no credit card needed)
set -e

echo "🎬 Compressing Videos for Cloudflare Pages"
echo "=========================================="
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ FFmpeg not found!"
    echo ""
    echo "Installing FFmpeg (this may take a few minutes)..."
    brew install ffmpeg
    
    # Check again
    if ! command -v ffmpeg &> /dev/null; then
        echo "❌ FFmpeg installation failed or not in PATH"
        echo ""
        echo "Please install manually:"
        echo "  brew install ffmpeg"
        echo "  Or download from: https://ffmpeg.org/download.html"
        exit 1
    fi
fi

echo "✅ FFmpeg found: $(ffmpeg -version | head -1)"
echo ""

# Create compressed directory
mkdir -p public/assets/compressed

# Function to compress video
compress_video() {
    local input="$1"
    local output="$2"
    local name="$3"
    
    if [ ! -f "$input" ]; then
        echo "⚠️  $name not found: $input"
        return 1
    fi
    
    echo "📹 Compressing $name..."
    echo "   Input: $(du -h "$input" | cut -f1)"
    echo "   This may take 5-10 minutes..."
    
    ffmpeg -i "$input" \
        -vcodec libx264 \
        -crf 32 \
        -preset slow \
        -vf "scale=1280:-1" \
        -acodec aac \
        -b:a 96k \
        -movflags +faststart \
        -y \
        "$output" 2>&1 | grep -E "Duration|time=|size=" || true
    
    if [ -f "$output" ]; then
        SIZE=$(du -h "$output" | cut -f1)
        echo "   ✅ Compressed: $SIZE"
        
        # Check if under 25MB
        SIZE_BYTES=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
        SIZE_MB=$((SIZE_BYTES / 1024 / 1024))
        
        if [ $SIZE_MB -lt 25 ]; then
            echo "   ✅ Under 25MB limit ($SIZE_MB MB)"
        else
            echo "   ⚠️  Warning: $SIZE_MB MB (over 25MB limit)"
            echo "   Trying more aggressive compression..."
            
            # More aggressive compression
            ffmpeg -i "$input" \
                -vcodec libx264 \
                -crf 35 \
                -preset slow \
                -vf "scale=960:-1" \
                -acodec aac \
                -b:a 64k \
                -movflags +faststart \
                -y \
                "$output" 2>&1 | grep -E "Duration|time=|size=" || true
            
            SIZE_BYTES=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
            SIZE_MB=$((SIZE_BYTES / 1024 / 1024))
            SIZE=$(du -h "$output" | cut -f1)
            
            if [ $SIZE_MB -lt 25 ]; then
                echo "   ✅ Now under 25MB: $SIZE ($SIZE_MB MB)"
            else
                echo "   ⚠️  Still over limit: $SIZE ($SIZE_MB MB)"
                echo "   You may need to use external hosting or further compression"
            fi
        fi
    else
        echo "   ❌ Compression failed"
        return 1
    fi
    
    echo ""
}

# Compress hero video
compress_video "assets/Ash-Lee Reel 1.mp4" "public/assets/compressed/hero-video.mp4" "Hero video"

# Compress about video
compress_video "assets/Ash-Lee reel 2.mp4" "public/assets/compressed/about-video.mp4" "About video"

echo "✅ Compression complete!"
echo ""
echo "📊 Summary:"
ls -lh public/assets/compressed/ | tail -n +2 | awk '{print "   " $5 " - " $9}'
echo ""
echo "📝 Next steps:"
echo "   1. Videos are ready in: public/assets/compressed/"
echo "   2. Code is already configured to use them"
echo "   3. Commit and push to GitHub:"
echo "      git add public/assets/compressed/"
echo "      git commit -m 'Add compressed videos for Cloudflare Pages'"
echo "      git push origin main"
echo ""
echo "   4. Cloudflare Pages will automatically deploy"
echo "   5. Videos will be served from Pages CDN (FREE!)"
echo ""
echo "💰 Cost: $0/month (completely free on Cloudflare Pages)"

