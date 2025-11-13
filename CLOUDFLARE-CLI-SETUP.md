# Cloudflare CLI Setup Guide

## Prerequisites

✅ **Already completed:**
- Wrangler CLI installed (via npx)
- Logged in to Cloudflare

## Step 1: Enable R2 (One-time, via Dashboard)

R2 must be enabled in the dashboard before using CLI:

1. **Go to Cloudflare Dashboard:**
   - Visit: https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/r2
   - Or: Dashboard → R2 → Get Started

2. **Enable R2:**
   - Click "Get Started" or "Enable R2"
   - Accept terms (if prompted)
   - This is a one-time setup

3. **Verify:**
   - You should see the R2 dashboard
   - Bucket creation should now work via CLI

## Step 2: Create R2 Bucket (CLI)

```bash
npx wrangler r2 bucket create ashlee-motors-videos
```

## Step 3: Upload Videos (CLI)

```bash
# Upload hero video
npx wrangler r2 object put ashlee-motors-videos/hero-video.mp4 --file="assets/Ash-Lee Reel 1.mp4"

# Upload about video
npx wrangler r2 object put ashlee-motors-videos/about-video.mp4 --file="assets/Ash-Lee reel 2.mp4"
```

**Note:** Large files (100MB+) may take several minutes to upload.

## Step 4: Verify Uploads (CLI)

```bash
npx wrangler r2 object list ashlee-motors-videos
```

## Step 5: Enable Public Access (Dashboard)

Public access must be configured via dashboard:

1. Go to: https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/r2/buckets/ashlee-motors-videos
2. Click **"Settings"** tab
3. Scroll to **"Public access"** section
4. Click **"Allow Access"** or **"Connect domain"**
5. Choose one:
   - **Option A:** Use custom domain (e.g., `videos.ash-leemotors.co.za`)
   - **Option B:** Use R2.dev public URL (if available)

## Step 6: Get Public URLs

After enabling public access, your videos will be available at:
- `https://your-domain.com/hero-video.mp4`
- `https://your-domain.com/about-video.mp4`

Or if using R2.dev:
- `https://ashlee-motors-videos.r2.dev/hero-video.mp4`
- `https://ashlee-motors-videos.r2.dev/about-video.mp4`

## Step 7: Create Cloudflare Pages Project (CLI)

```bash
# Create Pages project
npx wrangler pages project create ashlee-motors \
  --production-branch=main \
  --compatibility-date=2024-01-01
```

## Step 8: Connect Git Repository (Dashboard)

1. Go to: https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/pages
2. Click on **ashlee-motors** project
3. Go to **Settings** → **Builds & deployments**
4. Click **"Connect to Git"**
5. Select: `alonbreitz-droid/ashlee-motors`
6. Configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Deploy command:** (leave empty)
7. Click **"Save and Deploy"**

## Step 9: Add Environment Variables (Dashboard)

1. Go to: Pages project → **Settings** → **Environment variables**
2. Add:
   - **Variable:** `VITE_R2_HERO_VIDEO_URL`
   - **Value:** `https://your-r2-domain.com/hero-video.mp4`
   - **Environment:** Production (and Preview if needed)
3. Add:
   - **Variable:** `VITE_R2_ABOUT_VIDEO_URL`
   - **Value:** `https://your-r2-domain.com/about-video.mp4`
   - **Environment:** Production (and Preview if needed)
4. Click **"Save"**

## Step 10: Deploy (Automatic)

Once connected to Git, Cloudflare Pages will:
- Automatically build on every push to `main`
- Deploy the site
- Use environment variables for video URLs

## Quick Setup Script

You can also use the provided script:

```bash
./setup-cloudflare.sh
```

This script will guide you through the CLI steps.

## Troubleshooting

### "R2 not enabled" error
- Enable R2 in dashboard first (Step 1)

### Upload fails for large files
- Use dashboard upload for files >100MB
- Or use `wrangler r2 object put` with `--content-type` flag

### Public access not working
- Ensure public access is enabled in bucket settings
- Check CORS settings if needed
- Verify domain DNS if using custom domain

### Pages deployment fails
- Check build logs in Cloudflare dashboard
- Ensure deploy command is empty (not `wrangler deploy`)
- Verify Node.js version (Cloudflare uses Node 18 by default)

## Useful Commands

```bash
# List all R2 buckets
npx wrangler r2 bucket list

# List objects in bucket
npx wrangler r2 object list ashlee-motors-videos

# Delete an object
npx wrangler r2 object delete ashlee-motors-videos/hero-video.mp4

# List Pages projects
npx wrangler pages project list

# View deployment logs
npx wrangler pages deployment tail ashlee-motors
```

