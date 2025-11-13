#!/bin/bash

# Compress gallery images to under 25MB for Cloudflare Pages
set -e

echo "🖼️  Compressing Gallery Images"
echo "============================="
echo ""

mkdir -p public/assets/gallery/compressed

# Use sips (built into macOS) to compress images
for img in public/assets/gallery/*.jpeg public/assets/gallery/*.jpg; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        output="public/assets/gallery/compressed/$filename"
        
        # Get file size in MB
        size_mb=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        size_mb=$((size_mb / 1024 / 1024))
        
        if [ $size_mb -gt 20 ]; then
            echo "📸 Compressing $filename ($size_mb MB)..."
            
            # Use sips to compress (macOS built-in)
            sips -s format jpeg -s formatOptions 70 --out "$output" "$img" > /dev/null 2>&1
            
            if [ -f "$output" ]; then
                new_size_mb=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
                new_size_mb=$((new_size_mb / 1024 / 1024))
                
                if [ $new_size_mb -lt 25 ]; then
                    echo "   ✅ Compressed to ${new_size_mb}MB"
                else
                    # More aggressive compression
                    sips -s format jpeg -s formatOptions 50 --out "$output" "$img" > /dev/null 2>&1
                    new_size_mb=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
                    new_size_mb=$((new_size_mb / 1024 / 1024))
                    echo "   ✅ Compressed to ${new_size_mb}MB (aggressive)"
                fi
            fi
        else
            # Copy smaller images as-is
            cp "$img" "$output" 2>/dev/null || true
        fi
    fi
done

echo ""
echo "✅ Image compression complete!"
echo "   Compressed images in: public/assets/gallery/compressed/"

