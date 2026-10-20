#!/bin/bash

# Compress hero video with crop to avoid watermark
# Usage: ./compress-hero-video-cropped.sh [input-video.mp4]

INPUT_VIDEO="${1:-assets/Ash-Lee Reel 1.mp4}"
OUTPUT_DIR="public/assets/compressed"
OUTPUT_FILE="$OUTPUT_DIR/hero-video.mp4"
MAX_SIZE_MB=20  # Target 20MB to be safe (Cloudflare limit is 25MB)

if [ ! -f "$INPUT_VIDEO" ]; then
    echo "❌ Video file not found: $INPUT_VIDEO"
    exit 1
fi

echo "🎬 Compressing hero video (cropped to avoid watermark)..."
echo "Input: $INPUT_VIDEO"
echo "Output: $OUTPUT_FILE"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Get video dimensions
WIDTH=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of default=noprint_wrappers=1:nokey=1 "$INPUT_VIDEO")
HEIGHT=$(ffprobe -v error -select_streams v:0 -show_entries stream=height -of default=noprint_wrappers=1:nokey=1 "$INPUT_VIDEO")

echo "Original dimensions: ${WIDTH}x${HEIGHT}"

# Crop from center, removing top 10% and bottom 10% to avoid watermark
# This focuses on the middle section of the video
CROP_HEIGHT=$((HEIGHT * 80 / 100))
CROP_Y=$((HEIGHT * 10 / 100))
CROP_WIDTH=$WIDTH

echo "Cropping to: ${CROP_WIDTH}x${CROP_HEIGHT} (removing top/bottom 10%)"

# Get video duration and calculate target bitrate
DURATION=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$INPUT_VIDEO")
TARGET_SIZE_BITS=$((MAX_SIZE_MB * 8 * 1024 * 1024))
TARGET_BITRATE=$((TARGET_SIZE_BITS / ${DURATION%.*} - 128000))  # Leave 128k for audio

# Ensure minimum bitrate
if [ $TARGET_BITRATE -lt 500000 ]; then
    TARGET_BITRATE=500000
fi

echo "Duration: ${DURATION}s"
echo "Target bitrate: ${TARGET_BITRATE}bps"

# Compress video with crop
ffmpeg -i "$INPUT_VIDEO" \
  -vf "crop=${CROP_WIDTH}:${CROP_HEIGHT}:0:${CROP_Y},scale=1920:-2" \
  -c:v libx264 \
  -preset slow \
  -crf 28 \
  -maxrate ${TARGET_BITRATE} \
  -bufsize $((TARGET_BITRATE * 2)) \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  -y \
  "$OUTPUT_FILE" 2>&1 | grep -E "(Duration|frame|size|bitrate)" | tail -5

# Check final size
FINAL_SIZE=$(stat -f%z "$OUTPUT_FILE" 2>/dev/null || stat -c%s "$OUTPUT_FILE" 2>/dev/null)
FINAL_SIZE_MB=$((FINAL_SIZE / 1024 / 1024))

echo ""
if [ $FINAL_SIZE_MB -lt 25 ]; then
    echo "✅ Success! Video compressed to ${FINAL_SIZE_MB}MB (under 25MB limit)"
    echo "📁 Output: $OUTPUT_FILE"
    echo "📐 Cropped to focus on center section (avoiding watermark)"
else
    echo "⚠️  Warning: Video is ${FINAL_SIZE_MB}MB (over 25MB limit)"
    echo "Trying more aggressive compression..."
    
    # More aggressive compression with crop
    ffmpeg -i "$INPUT_VIDEO" \
      -vf "crop=${CROP_WIDTH}:${CROP_HEIGHT}:0:${CROP_Y},scale=1280:-2" \
      -c:v libx264 \
      -preset slow \
      -crf 32 \
      -maxrate 2M \
      -bufsize 4M \
      -c:a aac \
      -b:a 96k \
      -movflags +faststart \
      -y \
      "$OUTPUT_FILE" 2>&1 | grep -E "(Duration|frame|size|bitrate)" | tail -5
    
    FINAL_SIZE=$(stat -f%z "$OUTPUT_FILE" 2>/dev/null || stat -c%s "$OUTPUT_FILE" 2>/dev/null)
    FINAL_SIZE_MB=$((FINAL_SIZE / 1024 / 1024))
    
    if [ $FINAL_SIZE_MB -lt 25 ]; then
        echo "✅ Success! Video compressed to ${FINAL_SIZE_MB}MB"
    else
        echo "❌ Still too large. Consider using external hosting."
    fi
fi

