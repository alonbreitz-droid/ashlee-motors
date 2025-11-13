# Deploy to Cloudflare Pages

## Step 1: Push to GitHub (if not done)
```bash
git push origin main
```

## Step 2: Connect to Cloudflare Pages

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c
   - Or go to: https://dash.cloudflare.com → Pages

2. **Create a New Project**
   - Click "Create a project"
   - Click "Connect to Git"

3. **Authorize GitHub**
   - Select GitHub
   - Authorize Cloudflare to access your repositories
   - Select the repository: `ZombieDuckling/ashlee-motors`

4. **Configure Build Settings**
   - **Project name:** `ashlee-motors` (or your preferred name)
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave as default)

5. **Environment Variables** (Optional)
   - No environment variables needed for this project

6. **Click "Save and Deploy"**

## Step 3: Custom Domain (Optional)

After deployment:
1. Go to your project settings
2. Click "Custom domains"
3. Add your domain (e.g., `ash-leemotors.co.za`)
4. Follow DNS instructions

## Build Configuration

Your project is already configured with:
- ✅ Vite build system
- ✅ React SPA routing
- ✅ Optimized production builds

## Important Notes

⚠️ **Large Video Files**: Your video files (`Ash-Lee Reel 1.mp4` - 137MB, `Ash-Lee reel 2.mp4` - 162MB) are very large. Cloudflare Pages has a 25MB file size limit for free tier. Consider:
- Hosting videos separately (YouTube, Cloudflare Stream)
- Compressing videos before deployment
- Using Git LFS (though Cloudflare Pages doesn't support LFS)

## Quick Deploy URL

Once deployed, your site will be available at:
`https://ashlee-motors.pages.dev` (or your custom domain)

## Troubleshooting

If build fails:
- Check build logs in Cloudflare dashboard
- Ensure `package.json` has correct build script
- Verify Node.js version (Cloudflare uses Node 18 by default)


