#!/bin/bash

# Automated Cloudflare Setup for Ash-Lee Motors
set -e

echo "🚀 Automated Cloudflare Setup"
echo "============================"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Check login
echo "📋 Checking Cloudflare login..."
if ! npx wrangler whoami > /dev/null 2>&1; then
    echo -e "${RED}❌ Not logged in. Logging in now...${NC}"
    npx wrangler login
fi
echo -e "${GREEN}✅ Logged in${NC}"
echo ""

# Step 2: Enable R2 (opens browser)
echo -e "${YELLOW}📦 Step 2: Enabling R2${NC}"
echo "   Opening Cloudflare dashboard..."
echo "   Please click 'Get Started' or 'Enable R2' in the browser"
echo ""
open "https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/r2" 2>/dev/null || \
    xdg-open "https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/r2" 2>/dev/null || \
    echo "   Please open: https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/r2"

echo ""
read -p "Press Enter once R2 is enabled in the dashboard..."

# Step 3: Create R2 bucket
echo ""
echo -e "${YELLOW}📦 Step 3: Creating R2 bucket...${NC}"
if npx wrangler r2 bucket create ashlee-motors-videos 2>&1; then
    echo -e "${GREEN}✅ Bucket created${NC}"
else
    echo -e "${RED}❌ Failed to create bucket. Make sure R2 is enabled.${NC}"
    exit 1
fi

# Step 4: Upload videos
echo ""
echo -e "${YELLOW}📤 Step 4: Uploading videos (this will take a few minutes)...${NC}"

if [ -f "assets/Ash-Lee Reel 1.mp4" ]; then
    echo "   Uploading hero video (138MB)..."
    if npx wrangler r2 object put ashlee-motors-videos/hero-video.mp4 --file="assets/Ash-Lee Reel 1.mp4" 2>&1; then
        echo -e "${GREEN}   ✅ Hero video uploaded${NC}"
    else
        echo -e "${RED}   ❌ Failed to upload hero video${NC}"
    fi
else
    echo -e "${YELLOW}   ⚠️  Hero video not found${NC}"
fi

if [ -f "assets/Ash-Lee reel 2.mp4" ]; then
    echo "   Uploading about video (162MB)..."
    if npx wrangler r2 object put ashlee-motors-videos/about-video.mp4 --file="assets/Ash-Lee reel 2.mp4" 2>&1; then
        echo -e "${GREEN}   ✅ About video uploaded${NC}"
    else
        echo -e "${RED}   ❌ Failed to upload about video${NC}"
    fi
else
    echo -e "${YELLOW}   ⚠️  About video not found${NC}"
fi

# Step 5: Verify uploads
echo ""
echo -e "${YELLOW}📋 Step 5: Verifying uploads...${NC}"
npx wrangler r2 object list ashlee-motors-videos

# Step 6: Pages project (already created, but verify)
echo ""
echo -e "${YELLOW}🌐 Step 6: Checking Pages project...${NC}"
if npx wrangler pages project list 2>&1 | grep -q "ashlee-motors"; then
    echo -e "${GREEN}✅ Pages project exists${NC}"
else
    echo "   Creating Pages project..."
    npx wrangler pages project create ashlee-motors --production-branch=main
fi

echo ""
echo -e "${GREEN}✅ Automated setup complete!${NC}"
echo ""
echo "📝 Next steps (Dashboard):"
echo "   1. Enable public access for R2 bucket:"
echo "      https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/r2/buckets/ashlee-motors-videos"
echo ""
echo "   2. Connect Git to Pages:"
echo "      https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/pages/ashlee-motors"
echo "      - Connect to: alonbreitz-droid/ashlee-motors"
echo "      - Build command: npm run build"
echo "      - Output directory: dist"
echo "      - Deploy command: (leave empty)"
echo ""
echo "   3. Add environment variables in Pages:"
echo "      - VITE_R2_HERO_VIDEO_URL"
echo "      - VITE_R2_ABOUT_VIDEO_URL"
echo "      (Use R2 public URLs after enabling public access)"

