#!/bin/bash

# Image optimization script using sharp (Node.js) or ImageMagick/sips
# Optimizes JPEG images for web: reduces size while maintaining quality

GALLERY_DIR="public/assets/gallery"
OUTPUT_DIR="public/assets/gallery/optimized"
QUALITY=85
MAX_WIDTH=1920
MAX_HEIGHT=1920

echo "🖼️  Optimizing images for web..."

# Create optimized directory
mkdir -p "$OUTPUT_DIR"

# Check for sharp (Node.js image library)
if command -v node &> /dev/null; then
    echo "Using Node.js sharp for optimization..."
    
    # Create optimization script
    cat > optimize-images-node.cjs << 'NODE_SCRIPT'
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const GALLERY_DIR = 'public/assets/gallery';
const OUTPUT_DIR = 'public/assets/gallery/optimized';
const QUALITY = 85;
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1920;

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = await fs.promises.stat(inputPath);
    const originalSize = stats.size;
    
    await sharp(inputPath)
      .resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ 
        quality: QUALITY,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);
    
    const newStats = await fs.promises.stat(outputPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ ${path.basename(inputPath)}: ${(originalSize/1024/1024).toFixed(1)}MB → ${(newSize/1024/1024).toFixed(1)}MB (${savings}% smaller)`);
    
    return { originalSize, newSize, savings };
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  const files = fs.readdirSync(GALLERY_DIR)
    .filter(f => f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.jpg'));
  
  console.log(`Found ${files.length} images to optimize...\n`);
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  for (const file of files) {
    const inputPath = path.join(GALLERY_DIR, file);
    const outputPath = path.join(OUTPUT_DIR, file);
    
    const result = await optimizeImage(inputPath, outputPath);
    if (result) {
      totalOriginal += result.originalSize;
      totalOptimized += result.newSize;
    }
  }
  
  const totalSavings = ((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1);
  console.log(`\n✅ Optimization complete!`);
  console.log(`Total: ${(totalOriginal/1024/1024).toFixed(1)}MB → ${(totalOptimized/1024/1024).toFixed(1)}MB (${totalSavings}% smaller)`);
}

main().catch(console.error);
NODE_SCRIPT

    # Install sharp if needed
    if ! node -e "require('sharp')" 2>/dev/null; then
        echo "Installing sharp..."
        npm install sharp --save-dev
    fi
    
    # Run optimization
    node optimize-images-node.cjs
    rm optimize-images-node.cjs
    
elif command -v sips &> /dev/null; then
    echo "Using macOS sips for optimization..."
    
    total_original=0
    total_optimized=0
    
    for img in "$GALLERY_DIR"/*.{jpeg,jpg}; do
        if [ -f "$img" ]; then
            filename=$(basename "$img")
            output="$OUTPUT_DIR/$filename"
            
            # Get original size
            original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
            
            # Resize and optimize
            sips -s format jpeg -s formatOptions "$QUALITY" --resampleHeightWidthMax "$MAX_HEIGHT" "$MAX_WIDTH" "$img" --out "$output" > /dev/null 2>&1
            
            if [ -f "$output" ]; then
                new_size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
                savings=$(echo "scale=1; ($original_size - $new_size) * 100 / $original_size" | bc)
                
                original_mb=$(echo "scale=1; $original_size / 1024 / 1024" | bc)
                new_mb=$(echo "scale=1; $new_size / 1024 / 1024" | bc)
                
                echo "✓ $filename: ${original_mb}MB → ${new_mb}MB (${savings}% smaller)"
                
                total_original=$((total_original + original_size))
                total_optimized=$((total_optimized + new_size))
            fi
        fi
    done
    
    if [ $total_original -gt 0 ]; then
        total_savings=$(echo "scale=1; ($total_original - $total_optimized) * 100 / $total_original" | bc)
        total_original_mb=$(echo "scale=1; $total_original / 1024 / 1024" | bc)
        total_optimized_mb=$(echo "scale=1; $total_optimized / 1024 / 1024" | bc)
        echo ""
        echo "✅ Optimization complete!"
        echo "Total: ${total_original_mb}MB → ${total_optimized_mb}MB (${total_savings}% smaller)"
    fi
    
else
    echo "❌ No image optimization tools found!"
    echo "Install one of:"
    echo "  - sharp (npm install sharp --save-dev)"
    echo "  - ImageMagick (brew install imagemagick)"
    echo "  - macOS sips (built-in)"
    exit 1
fi

echo ""
echo "📝 Next: Update image paths to use optimized versions"

