#!/bin/bash

# Free Tier Cloudflare Setup for Ash-Lee Motors
set -e

echo "🆓 Free Tier Cloudflare Setup"
echo "============================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}💰 Cloudflare Free Tier Limits:${NC}"
echo "   ✅ R2: 10GB storage free, 10GB egress/month free"
echo "   ✅ Pages: Unlimited bandwidth (FREE!)"
echo "   ✅ Your videos: ~300MB total (well within free tier)"
echo ""

# Step 1: Enable R2 (Free tier - just needs activation)
echo -e "${YELLOW}📦 Step 1: Enabling R2 (Free tier activation)${NC}"
echo "   Opening Cloudflare dashboard..."
echo "   This is FREE - just needs one-time activation"
echo ""
open "https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/r2" 2>/dev/null || \
    echo "   Please open: https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/r2"

echo ""
echo -e "${YELLOW}👉 In the browser:${NC}"
echo "   1. Click 'Get Started' or 'Enable R2'"
echo "   2. Accept terms (it's free!)"
echo "   3. Come back here and press Enter"
echo ""
read -p "Press Enter once R2 is enabled..."

# Step 2: Create bucket
echo ""
echo -e "${YELLOW}📦 Step 2: Creating R2 bucket (FREE)${NC}"
if npx wrangler r2 bucket create ashlee-motors-videos 2>&1; then
    echo -e "${GREEN}✅ Bucket created${NC}"
else
    echo -e "${YELLOW}⚠️  Bucket might already exist or R2 not enabled yet${NC}"
    echo "   Trying to continue..."
fi

# Step 3: Upload videos
echo ""
echo -e "${YELLOW}📤 Step 3: Uploading videos (FREE - within 10GB limit)${NC}"

if [ -f "assets/Ash-Lee Reel 1.mp4" ]; then
    echo "   Uploading hero video (138MB)..."
    npx wrangler r2 object put ashlee-motors-videos/hero-video.mp4 --file="assets/Ash-Lee Reel 1.mp4" 2>&1 && \
        echo -e "${GREEN}   ✅ Hero video uploaded${NC}" || \
        echo -e "${YELLOW}   ⚠️  Upload failed, might already exist${NC}"
fi

if [ -f "assets/Ash-Lee reel 2.mp4" ]; then
    echo "   Uploading about video (162MB)..."
    npx wrangler r2 object put ashlee-motors-videos/about-video.mp4 --file="assets/Ash-Lee reel 2.mp4" 2>&1 && \
        echo -e "${GREEN}   ✅ About video uploaded${NC}" || \
        echo -e "${YELLOW}   ⚠️  Upload failed, might already exist${NC}"
fi

# Step 4: Verify
echo ""
echo -e "${YELLOW}📋 Step 4: Verifying uploads...${NC}"
npx wrangler r2 object list ashlee-motors-videos 2>&1 || echo "   (Bucket might not be ready yet)"

# Step 5: Pages (already free and unlimited!)
echo ""
echo -e "${YELLOW}🌐 Step 5: Pages project (FREE & Unlimited!)${NC}"
if npx wrangler pages project list 2>&1 | grep -q "ashlee-motors"; then
    echo -e "${GREEN}✅ Pages project exists${NC}"
else
    echo "   Creating Pages project..."
    npx wrangler pages project create ashlee-motors --production-branch=main
fi

echo ""
echo -e "${GREEN}✅ Free tier setup complete!${NC}"
echo ""
echo -e "${BLUE}💰 Cost Summary:${NC}"
echo "   ✅ R2 Storage: FREE (under 10GB)"
echo "   ✅ R2 Bandwidth: FREE (first 10GB/month)"
echo "   ✅ Pages: FREE (unlimited bandwidth!)"
echo "   💵 Total cost: $0/month"
echo ""
echo "📝 Next steps (Dashboard - all FREE):"
echo "   1. Enable public access for R2:"
echo "      https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/r2/buckets/ashlee-motors-videos"
echo ""
echo "   2. Connect Git to Pages:"
echo "      https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/pages/ashlee-motors"
echo ""
echo "   3. Add environment variables with R2 URLs"

