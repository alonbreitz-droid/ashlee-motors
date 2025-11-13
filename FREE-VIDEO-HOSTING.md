# Free Video Hosting Options (No Credit Card Required)

## Option 1: Backblaze B2 (Recommended - 100% Free)

**Free Tier:**
- ✅ 10GB storage free
- ✅ 1GB/day download free (enough for ~30 views/day)
- ✅ No credit card required
- ✅ Public URLs available

**Setup:**
1. Sign up at: https://www.backblaze.com/b2/sign-up.html
2. Create a bucket (public)
3. Upload videos
4. Get public URLs
5. Use URLs in environment variables

**Cost:** $0/month (well within free tier)

---

## Option 2: Compress Videos & Host on Cloudflare Pages

**Limitation:** Cloudflare Pages has 25MB file limit per file

**Solution:** Compress videos to under 25MB each

**Tools:**
- HandBrake (free): https://handbrake.fr/
- FFmpeg (command line)

**Compression commands:**
```bash
# Install FFmpeg (if not installed)
brew install ffmpeg  # macOS
# or download from https://ffmpeg.org/

# Compress hero video
ffmpeg -i "assets/Ash-Lee Reel 1.mp4" -vcodec libx264 -crf 28 -preset slow -vf scale=1280:-1 -acodec aac -b:a 128k "assets/hero-compressed.mp4"

# Compress about video  
ffmpeg -i "assets/Ash-Lee reel 2.mp4" -vcodec libx264 -crf 28 -preset slow -vf scale=1280:-1 -acodec aac -b:a 128k "assets/about-compressed.mp4"
```

**Then:** Put compressed videos in `public/assets/` and they'll be served from Pages

**Cost:** $0 (completely free)

---

## Option 3: Bunny CDN (Free Tier)

**Free Tier:**
- ✅ 1TB storage free
- ✅ 50GB bandwidth/month free
- ✅ No credit card required

**Setup:**
1. Sign up at: https://bunny.net/
2. Create storage zone
3. Upload videos
4. Get CDN URLs

**Cost:** $0/month (within free tier)

---

## Option 4: GitHub Releases (Free but Limited)

**Limitation:** 2GB per file, but not ideal for video hosting

**Not recommended** for production sites.

---

## Recommendation: Backblaze B2

**Why:**
- ✅ No credit card required
- ✅ Generous free tier
- ✅ Fast CDN
- ✅ Public URLs
- ✅ Easy setup

**Your usage:** ~300MB videos = well within 10GB free storage

