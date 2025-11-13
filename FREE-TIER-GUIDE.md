# 🆓 100% FREE Cloudflare Setup Guide

## ✅ Everything is FREE!

**Cloudflare Free Tier includes:**
- ✅ **R2 Storage:** 10GB free (your videos: ~300MB)
- ✅ **R2 Bandwidth:** 10GB/month free
- ✅ **Pages:** Unlimited bandwidth (completely free!)
- ✅ **Total cost: $0/month** 🎉

## Quick Setup (5 minutes)

### Step 1: Enable R2 (One-time, FREE)

1. **Click this link:** https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/r2
2. Click **"Get Started"** or **"Enable R2"**
3. Accept terms (it's free!)
4. That's it - R2 is now enabled

### Step 2: Run the Setup Script

```bash
./free-setup.sh
```

The script will:
- ✅ Create R2 bucket
- ✅ Upload your videos (free!)
- ✅ Set up Pages project
- ✅ Everything automated

### Step 3: Enable Public Access (Dashboard)

1. Go to: https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/r2/buckets/ashlee-motors-videos
2. Click **"Settings"** tab
3. Enable **"Public access"** or **"Connect domain"**
4. Copy the public URLs for your videos

### Step 4: Connect Git to Pages (Dashboard)

1. Go to: https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/pages/ashlee-motors
2. Click **"Connect to Git"**
3. Select: `alonbreitz-droid/ashlee-motors`
4. Settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Deploy command:** (leave empty!)
5. Click **"Save and Deploy"**

### Step 5: Add Environment Variables (Dashboard)

1. Pages → Settings → Environment variables
2. Add:
   - `VITE_R2_HERO_VIDEO_URL` = your R2 video URL
   - `VITE_R2_ABOUT_VIDEO_URL` = your R2 video URL
3. Save

## 💰 Cost Breakdown

| Service | Free Tier | Your Usage | Cost |
|---------|-----------|------------|------|
| R2 Storage | 10GB | ~300MB | **$0** |
| R2 Bandwidth | 10GB/month | <1GB/month | **$0** |
| Pages | Unlimited | Unlimited | **$0** |
| **TOTAL** | | | **$0/month** |

## 🚀 What You Get

- ✅ Fast global CDN (Cloudflare network)
- ✅ Unlimited bandwidth on Pages
- ✅ Free SSL certificates
- ✅ Automatic deployments from Git
- ✅ Custom domain support (free)
- ✅ No credit card required

## 📝 Manual Commands (if script doesn't work)

```bash
# Create bucket
npx wrangler r2 bucket create ashlee-motors-videos

# Upload videos
npx wrangler r2 object put ashlee-motors-videos/hero-video.mp4 --file="assets/Ash-Lee Reel 1.mp4"
npx wrangler r2 object put ashlee-motors-videos/about-video.mp4 --file="assets/Ash-Lee reel 2.mp4"

# Verify
npx wrangler r2 object list ashlee-motors-videos
```

## ⚠️ Important Notes

- R2 activation is **one-time only** (takes 30 seconds)
- Everything else is automated
- No credit card needed
- Completely free forever (within limits)
- Your usage is well within free tier limits

## 🎯 After Setup

Your site will be live at:
- **Pages URL:** https://ashlee-motors.pages.dev
- **Custom domain:** (add in Pages settings)

Videos will load from R2 (fast and free!)

