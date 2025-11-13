# Cloudflare R2 Bucket Setup for Videos

## Step 1: Create R2 Bucket

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c
   - Or: https://dash.cloudflare.com → **R2** → **Create bucket**

2. **Create New Bucket**
   - Click **"Create bucket"**
   - **Bucket name:** `ashlee-motors-videos`
   - **Location:** Choose closest to your users (or default)
   - Click **"Create bucket"**

## Step 2: Upload Videos to R2

### Option A: Using Cloudflare Dashboard (Easiest)

1. Go to your bucket: **R2** → **ashlee-motors-videos**
2. Click **"Upload"**
3. Upload these files:
   - `Ash-Lee Reel 1.mp4` (rename to `hero-video.mp4` for clarity)
   - `Ash-Lee reel 2.mp4` (rename to `about-video.mp4` for clarity)
4. Wait for uploads to complete

### Option B: Using Wrangler CLI (Recommended for automation)

```bash
# Install Wrangler (if not already installed)
npm install -g wrangler

# Login to Cloudflare
npx wrangler login

# Upload videos
npx wrangler r2 object put ashlee-motors-videos/hero-video.mp4 --file="assets/Ash-Lee Reel 1.mp4"
npx wrangler r2 object put ashlee-motors-videos/about-video.mp4 --file="assets/Ash-Lee reel 2.mp4"
```

## Step 3: Create Public R2 Domain (Custom Domain)

To serve videos publicly, you need to create a public domain:

1. **In R2 Dashboard:**
   - Go to **R2** → **ashlee-motors-videos**
   - Click **"Settings"** tab
   - Scroll to **"Public access"** section
   - Click **"Connect domain"** or **"Create public bucket"**

2. **Create Custom Domain:**
   - **Domain:** `videos.ash-leemotors.co.za` (or your preferred subdomain)
   - Or use Cloudflare's default: `ashlee-motors-videos.r2.dev` (if available)

3. **Note the Public URL:**
   - Your videos will be accessible at:
     - `https://videos.ash-leemotors.co.za/hero-video.mp4`
     - `https://videos.ash-leemotors.co.za/about-video.mp4`
   - Or if using R2.dev domain:
     - `https://ashlee-motors-videos.r2.dev/hero-video.mp4`
     - `https://ashlee-motors-videos.r2.dev/about-video.mp4`

## Step 4: Configure Environment Variables in Cloudflare Pages

1. **Go to Cloudflare Pages:**
   - Navigate to your **ashlee-motors** project
   - Go to **Settings** → **Environment variables**

2. **Add Variables:**
   - **Variable name:** `VITE_R2_HERO_VIDEO_URL`
   - **Value:** `https://videos.ash-leemotors.co.za/hero-video.mp4` (or your R2 URL)
   - Click **"Save"**
   
   - **Variable name:** `VITE_R2_ABOUT_VIDEO_URL`
   - **Value:** `https://videos.ash-leemotors.co.za/about-video.mp4` (or your R2 URL)
   - Click **"Save"**

3. **Redeploy:**
   - Go to **Deployments**
   - Click **"Retry deployment"** or wait for next auto-deploy

## Step 5: Update Local Development (Optional)

Create a `.env.local` file in the project root:

```env
VITE_R2_HERO_VIDEO_URL=https://videos.ash-leemotors.co.za/hero-video.mp4
VITE_R2_ABOUT_VIDEO_URL=https://videos.ash-leemotors.co.za/about-video.mp4
```

**Note:** `.env.local` is already in `.gitignore`, so it won't be committed.

## Alternative: Using R2 Public Access (No Custom Domain)

If you don't want to set up a custom domain:

1. **Enable Public Access:**
   - Go to R2 bucket → **Settings**
   - Enable **"Public access"**
   - This creates a public URL for your bucket

2. **Get Public URLs:**
   - Each file will have a public URL like:
     - `https://pub-xxxxx.r2.dev/hero-video.mp4`
   - Copy these URLs and use them in environment variables

## Cost

- **R2 Storage:** $0.015 per GB/month (very cheap!)
- **R2 Egress (bandwidth):** $0.09 per GB (free for first 10GB/month)
- **Total cost for your videos:** ~$0.50-2/month (depending on views)

## Troubleshooting

### Videos not loading?
- Check that public access is enabled on the bucket
- Verify the URLs in environment variables are correct
- Check browser console for CORS errors (R2 should handle CORS automatically)

### CORS Issues?
- R2 public buckets handle CORS automatically
- If using custom domain, ensure DNS is properly configured

### Large upload fails?
- Use Wrangler CLI for large files (more reliable)
- Or use Cloudflare dashboard (supports up to 100MB per file)

## Quick Reference

**Bucket Name:** `ashlee-motors-videos`
**Video Files:**
- `hero-video.mp4` (Ash-Lee Reel 1.mp4)
- `about-video.mp4` (Ash-Lee reel 2.mp4)

**Environment Variables:**
- `VITE_R2_HERO_VIDEO_URL`
- `VITE_R2_ABOUT_VIDEO_URL`

