#!/bin/bash

echo "🚀 Setting up automatic GitHub deployments to Cloudflare Pages..."
echo ""

# Account ID from wrangler
ACCOUNT_ID="7ace95d9930dba4cb1906ea975124c0c"
REPO="alonbreitz-droid/ashlee-motors"

echo "📋 Step 1: Create Cloudflare API Token"
echo "Opening Cloudflare API token page..."
open "https://dash.cloudflare.com/profile/api-tokens"

echo ""
echo "👉 Create a token with these permissions:"
echo "   - Account → Cloudflare Pages → Edit"
echo ""
read -p "Press Enter after you've created and copied the API token..."

echo ""
echo "📋 Step 2: Add secrets to GitHub"
echo "Opening GitHub secrets page..."
open "https://github.com/$REPO/settings/secrets/actions"

echo ""
echo "👉 Add these two secrets:"
echo ""
echo "   Secret 1:"
echo "   Name:  CLOUDFLARE_API_TOKEN"
echo "   Value: (paste your API token)"
echo ""
echo "   Secret 2:"
echo "   Name:  CLOUDFLARE_ACCOUNT_ID"
echo "   Value: $ACCOUNT_ID"
echo ""
read -p "Press Enter after you've added both secrets..."

echo ""
echo "📦 Committing and pushing workflow..."
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions auto-deploy to Cloudflare Pages" 2>/dev/null || echo "Already committed"
git push origin main 2>/dev/null || echo "Push failed - you may need to push manually"

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next push to main will automatically deploy to Cloudflare Pages!"
echo "Check status: https://github.com/$REPO/actions"

