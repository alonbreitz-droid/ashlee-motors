# Quick Cloudflare Setup - Next Steps

## ✅ Completed via CLI

1. ✅ Logged in to Cloudflare
2. ✅ Created Cloudflare Pages project: `ashlee-motors`
   - URL: https://ashlee-motors.pages.dev/

## 🔴 Action Required: Enable R2 (Dashboard)

**R2 must be enabled in the dashboard before using CLI commands.**

### Quick Steps:

1. **Open this link:**
   https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/r2

2. **Click "Get Started" or "Enable R2"**
   - This is a one-time setup
   - Accept any terms if prompted

3. **Once enabled, run these commands:**

```bash
# Create bucket
npx wrangler r2 bucket create ashlee-motors-videos

# Upload videos (this will take a few minutes for large files)
npx wrangler r2 object put ashlee-motors-videos/hero-video.mp4 --file="assets/Ash-Lee Reel 1.mp4"
npx wrangler r2 object put ashlee-motors-videos/about-video.mp4 --file="assets/Ash-Lee reel 2.mp4"

# Verify uploads
npx wrangler r2 object list ashlee-motors-videos
```

## 📋 Next Steps After R2 Setup

### 1. Enable Public Access (Dashboard)

1. Go to: https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/r2/buckets/ashlee-motors-videos
2. Click **"Settings"** tab
3. Enable **"Public access"**
4. Note the public URLs for your videos

### 2. Connect Git to Pages (Dashboard)

1. Go to: https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/pages/ashlee-motors
2. Click **"Connect to Git"**
3. Select: `alonbreitz-droid/ashlee-motors`
4. Configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Deploy command:** (leave empty - important!)
5. Click **"Save and Deploy"**

### 3. Add Environment Variables (Dashboard)

1. Go to: Pages → Settings → Environment variables
2. Add:
   - `VITE_R2_HERO_VIDEO_URL` = your R2 video URL
   - `VITE_R2_ABOUT_VIDEO_URL` = your R2 video URL
3. Save and redeploy

## 🚀 Current Status

- ✅ Cloudflare Pages project created
- ✅ Logged in to Cloudflare CLI
- ⏳ R2 needs to be enabled (dashboard)
- ⏳ Videos need to be uploaded to R2
- ⏳ Git needs to be connected to Pages
- ⏳ Environment variables need to be set

## 📚 Full Documentation

- **CLI Setup:** `CLOUDFLARE-CLI-SETUP.md`
- **R2 Setup:** `CLOUDFLARE-R2-SETUP.md`
- **Pages Fix:** `CLOUDFLARE-PAGES-FIX.md`

