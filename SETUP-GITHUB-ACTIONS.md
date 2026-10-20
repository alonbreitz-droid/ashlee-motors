# Setup GitHub Actions for Auto-Deploy

## Quick Setup (2 steps)

### 1. Get Cloudflare API Token
1. Go to: https://dash.cloudflare.com/profile/api-tokens
2. Click **"Create Token"**
3. Use **"Edit Cloudflare Workers"** template
4. Or create custom token with these permissions:
   - **Account** → **Cloudflare Pages** → **Edit**
5. Copy the token

### 2. Add Secrets to GitHub
1. Go to: https://github.com/alonbreitz-droid/ashlee-motors/settings/secrets/actions
2. Click **"New repository secret"**
3. Add these two secrets:

   **Secret 1:**
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: (paste your API token from step 1)

   **Secret 2:**
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: `7ace95d9930dba4cb1906ea975124c0c`

### 3. Push to GitHub
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions auto-deploy"
git push origin main
```

## What This Does
- ✅ Automatically builds and deploys on every push to `main`
- ✅ Uses Cloudflare Pages GitHub Action
- ✅ No manual deployments needed

## Account ID
Your Cloudflare Account ID: `7ace95d9930dba4cb1906ea975124c0c`

