# Fix Cloudflare Pages Deployment

## Issue
Cloudflare Pages is trying to run `npx wrangler deploy` which is for Workers, not Pages.

## Solution

**In Cloudflare Pages Dashboard:**

1. Go to: https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/pages/ashlee-motors
2. Click **Settings** → **Builds & deployments**
3. Find **"Deploy command"** field
4. **DELETE/CLEAR it** (leave it completely empty)
5. Click **Save**

**That's it!** Cloudflare Pages will automatically deploy the `dist` folder after the build completes.

## Why This Happens
- `wrangler deploy` is for Cloudflare Workers (serverless functions)
- Cloudflare Pages automatically deploys static files from the build output directory
- The deploy command is optional and usually not needed

## After Fixing
1. Cloudflare Pages will automatically rebuild on the next push
2. Or manually trigger a new deployment from the dashboard
3. The site will deploy successfully with compressed images

