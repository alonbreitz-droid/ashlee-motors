# Hosting Recommendations for Ash-lee Motors

## 🏆 **Top Recommendations**

### 1. **Netlify** (Best Overall - Recommended)
**Why it's perfect for you:**
- ✅ **Free tier** is generous (100GB bandwidth/month)
- ✅ **Automatic deployments** from GitHub
- ✅ **Global CDN** - fast worldwide (including South Africa)
- ✅ **Easy setup** - just connect your GitHub repo
- ✅ **Free SSL** certificates
- ✅ **Built-in form handling** (if you add forms later)
- ✅ **Preview deployments** for testing

**Setup:**
1. Push code to GitHub
2. Sign up at [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repo
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

**Cost:** Free for starter, $19/month for Pro (if you need more)

**Note:** Large video files (>100MB) should be hosted separately (see below)

---

### 2. **Vercel** (Best for React)
**Why it's great:**
- ✅ **Optimized for React/Next.js**
- ✅ **Free tier** (100GB bandwidth)
- ✅ **Automatic deployments** from GitHub
- ✅ **Global CDN** with edge functions
- ✅ **Zero-config** deployment
- ✅ **Preview deployments**

**Setup:**
1. Push code to GitHub
2. Sign up at [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. It auto-detects Vite/React
5. Deploy!

**Cost:** Free for hobby, $20/month for Pro

---

### 3. **Cloudflare Pages** (Best Performance)
**Why it's excellent:**
- ✅ **Free unlimited bandwidth** (yes, unlimited!)
- ✅ **Fastest global CDN** (Cloudflare network)
- ✅ **Free SSL**
- ✅ **Automatic deployments**
- ✅ **Great for South Africa** (Cloudflare has SA presence)

**Setup:**
1. Push code to GitHub
2. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
3. Connect GitHub repo
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy!

**Cost:** Completely FREE (unlimited bandwidth!)

---

## 📹 **Handling Large Video Files**

Your videos (`Ash-Lee Reel 1.mp4` - 137MB, `Ash-Lee reel 2.mp4` - 162MB) are too large for most free tiers.

### Option A: Host Videos Separately (Recommended)
1. **Cloudflare Stream** - Free for first 10,000 minutes
2. **YouTube** (unlisted) - Free, embed with iframe
3. **Vimeo** - Free tier available
4. **AWS S3 + CloudFront** - Pay-as-you-go

### Option B: Optimize Videos First
- Compress videos to <50MB using HandBrake or similar
- Convert to WebM format (smaller file size)
- Use lower bitrate for background videos

---

## 🚀 **Quick Start Guide (Netlify - Recommended)**

### Step 1: Prepare Your Repo
```bash
# Make sure everything is committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Netlify
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and authorize
4. Select your `ashlee-motors` repo
5. Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Step 3: Custom Domain (Optional)
1. In Netlify dashboard → Domain settings
2. Add your custom domain (e.g., `ash-leemotors.co.za`)
3. Follow DNS instructions

---

## 💰 **Cost Comparison**

| Platform | Free Tier | Paid Tier | Best For |
|----------|-----------|-----------|----------|
| **Netlify** | 100GB/mo | $19/mo | Ease of use |
| **Vercel** | 100GB/mo | $20/mo | React apps |
| **Cloudflare Pages** | Unlimited | Free! | High traffic |
| **GitHub Pages** | 1GB storage | Free | Simple sites |

---

## 🎯 **My Recommendation**

**For Ash-lee Motors, I recommend: Cloudflare Pages**

**Why:**
1. ✅ **Unlimited bandwidth** - perfect for image-heavy gallery
2. ✅ **Free forever** - no surprise costs
3. ✅ **Fast in South Africa** - Cloudflare has local presence
4. ✅ **Easy setup** - similar to Netlify
5. ✅ **Great performance** - best CDN in the world

**For videos:** Use YouTube (unlisted) or Cloudflare Stream

---

## 📝 **Deployment Checklist**

Before deploying:
- [ ] Run `npm run build` locally to test
- [ ] Check that all images load correctly
- [ ] Test on mobile devices
- [ ] Verify WhatsApp links work
- [ ] Test all navigation links
- [ ] Check Google Maps embed
- [ ] Optimize large videos or host separately

---

## 🔧 **Alternative: Traditional Web Hosting**

If you prefer traditional hosting (cPanel, etc.):

**South African Hosting Providers:**
- **Afrihost** - Good local support
- **HostGator SA** - Popular option
- **xneelo** (formerly Hetzner) - Reliable

**Setup:**
1. Build: `npm run build`
2. Upload `dist/` folder contents to `public_html/`
3. Add `.htaccess` for SPA routing (I can create this)

---

## 🆘 **Need Help?**

I can help you:
1. Set up automatic deployments
2. Configure custom domains
3. Optimize video files
4. Set up video hosting
5. Create deployment scripts

Let me know which option you'd like to go with!


