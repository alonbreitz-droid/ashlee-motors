#!/bin/bash

# Backblaze B2 Setup Script (Free, No Credit Card Required)
set -e

echo "🆓 Backblaze B2 Free Video Hosting Setup"
echo "========================================"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}💰 Backblaze B2 Free Tier:${NC}"
echo "   ✅ 10GB storage free"
echo "   ✅ 1GB/day download free"
echo "   ✅ No credit card required"
echo "   ✅ Your videos: ~300MB (well within limits)"
echo ""

echo -e "${YELLOW}📋 Step 1: Sign up for Backblaze B2${NC}"
echo "   1. Go to: https://www.backblaze.com/b2/sign-up.html"
echo "   2. Create free account (no credit card)"
echo "   3. Verify email"
echo ""
read -p "Press Enter once you've created your account..."

echo ""
echo -e "${YELLOW}📦 Step 2: Create a Bucket${NC}"
echo "   1. Go to: https://secure.backblaze.com/b2_buckets.htm"
echo "   2. Click 'Create a Bucket'"
echo "   3. Bucket name: ashlee-motors-videos"
echo "   4. Files in Bucket are: Public"
echo "   5. Click 'Create a Bucket'"
echo ""
read -p "Press Enter once bucket is created..."

echo ""
echo -e "${YELLOW}📤 Step 3: Upload Videos${NC}"
echo "   1. Click on your bucket: ashlee-motors-videos"
echo "   2. Click 'Upload Files'"
echo "   3. Upload:"
echo "      - assets/Ash-Lee Reel 1.mp4 → hero-video.mp4"
echo "      - assets/Ash-Lee reel 2.mp4 → about-video.mp4"
echo "   4. Wait for uploads to complete"
echo ""
read -p "Press Enter once videos are uploaded..."

echo ""
echo -e "${YELLOW}🔗 Step 4: Get Public URLs${NC}"
echo "   1. Click on each uploaded file"
echo "   2. Copy the 'Friendly URL' (looks like:)"
echo "      https://fXXX.backblazeb2.com/file/ashlee-motors-videos/hero-video.mp4"
echo ""
echo "   Write down the URLs:"
echo ""
read -p "Hero video URL: " HERO_URL
read -p "About video URL: " ABOUT_URL

echo ""
echo -e "${YELLOW}⚙️  Step 5: Add to Cloudflare Pages${NC}"
echo "   1. Go to: https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/pages/ashlee-motors"
echo "   2. Settings → Environment variables"
echo "   3. Add:"
echo "      Variable: VITE_HERO_VIDEO_URL"
echo "      Value: $HERO_URL"
echo ""
echo "      Variable: VITE_ABOUT_VIDEO_URL"
echo "      Value: $ABOUT_URL"
echo "   4. Save and redeploy"
echo ""

echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo "Your videos are now hosted on Backblaze B2 (free tier)"
echo "Add the URLs to Cloudflare Pages environment variables"

