#!/bin/bash

# Cloudflare Setup Script for Ash-Lee Motors
# This script helps set up Cloudflare R2 and Pages

echo "🚀 Cloudflare Setup for Ash-Lee Motors"
echo "========================================"
echo ""

# Check if logged in
echo "📋 Checking Cloudflare login..."
npx wrangler whoami > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "❌ Not logged in. Please run: npx wrangler login"
    exit 1
fi
echo "✅ Logged in to Cloudflare"
echo ""

# Step 1: Enable R2 (manual step required)
echo "📦 Step 1: Enable R2 in Cloudflare Dashboard"
echo "   → Go to: https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/r2"
echo "   → Click 'Get Started' or 'Enable R2'"
echo "   → This is a one-time setup"
echo ""
read -p "Press Enter once R2 is enabled..."

# Step 2: Create R2 bucket
echo ""
echo "📦 Step 2: Creating R2 bucket..."
npx wrangler r2 bucket create ashlee-motors-videos
if [ $? -eq 0 ]; then
    echo "✅ Bucket 'ashlee-motors-videos' created"
else
    echo "❌ Failed to create bucket. Make sure R2 is enabled."
    exit 1
fi

# Step 3: Upload videos
echo ""
echo "📤 Step 3: Uploading videos to R2..."
if [ -f "assets/Ash-Lee Reel 1.mp4" ]; then
    echo "   Uploading hero video..."
    npx wrangler r2 object put ashlee-motors-videos/hero-video.mp4 --file="assets/Ash-Lee Reel 1.mp4"
    if [ $? -eq 0 ]; then
        echo "   ✅ Hero video uploaded"
    else
        echo "   ❌ Failed to upload hero video"
    fi
else
    echo "   ⚠️  Hero video not found at assets/Ash-Lee Reel 1.mp4"
fi

if [ -f "assets/Ash-Lee reel 2.mp4" ]; then
    echo "   Uploading about video..."
    npx wrangler r2 object put ashlee-motors-videos/about-video.mp4 --file="assets/Ash-Lee reel 2.mp4"
    if [ $? -eq 0 ]; then
        echo "   ✅ About video uploaded"
    else
        echo "   ❌ Failed to upload about video"
    fi
else
    echo "   ⚠️  About video not found at assets/Ash-Lee reel 2.mp4"
fi

# Step 4: List objects
echo ""
echo "📋 Step 4: Verifying uploads..."
npx wrangler r2 object list ashlee-motors-videos

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Enable public access for the bucket in Cloudflare Dashboard"
echo "   2. Get the public URLs for your videos"
echo "   3. Add environment variables to Cloudflare Pages:"
echo "      - VITE_R2_HERO_VIDEO_URL"
echo "      - VITE_R2_ABOUT_VIDEO_URL"
echo ""
echo "   See CLOUDFLARE-R2-SETUP.md for detailed instructions"

