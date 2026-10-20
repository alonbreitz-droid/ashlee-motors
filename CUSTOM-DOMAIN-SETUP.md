# Custom Domain Setup: xneelo → Cloudflare Pages

## Overview
To connect your domain from xneelo to Cloudflare Pages, you need to:
1. Add your domain in Cloudflare Pages
2. Get DNS records from Cloudflare
3. Update DNS at xneelo (your domain registrar)

---

## Step 1: Add Custom Domain in Cloudflare Pages

1. **Go to Cloudflare Pages Dashboard**
   - Visit: https://dash.cloudflare.com/7ace95d9930dba4cb1906ea975124c0c/pages
   - Click on your **ashlee-motors** project

2. **Add Custom Domain**
   - Go to **Settings** → **Custom domains**
   - Click **"Set up a custom domain"**
   - Enter your domain (e.g., `ash-leemotors.co.za` or `www.ash-leemotors.co.za`)
   - Click **"Continue"**

3. **Cloudflare will show you DNS records**
   - You'll see either:
     - **Option A:** Nameservers (if domain not in Cloudflare)
     - **Option B:** DNS records (CNAME or A records)

---

## Step 2: Get Your Domain's Current Nameservers from xneelo

### If your domain is registered with xneelo:

1. **Log in to xneelo Control Panel**
   - Go to: https://www.xneelo.co.za/
   - Log in to your account

2. **Find Domain Management**
   - Navigate to **Domains** or **Domain Management**
   - Select your domain (e.g., `ash-leemotors.co.za`)

3. **View Current Nameservers**
   - Look for **"Nameservers"** or **"DNS Settings"**
   - Note the current nameservers (usually xneelo's):
     - `ns1.host-h.net`
     - `ns2.host-h.net`
     - `ns1.dns-h.com`
     - `ns2.dns-h.com`

---

## Step 3: Configure DNS (Choose One Method)

### Method A: Use Cloudflare Nameservers (Recommended)

**If Cloudflare gives you nameservers:**

1. **In xneelo Control Panel:**
   - Go to your domain settings
   - Find **"Nameservers"** or **"DNS Management"**
   - Replace xneelo's nameservers with Cloudflare's:
     - Cloudflare will provide 2 nameservers like:
       - `alice.ns.cloudflare.com`
       - `bob.ns.cloudflare.com`

2. **Save Changes**
   - Wait 24-48 hours for DNS propagation

### Method B: Use DNS Records (If keeping xneelo nameservers)

**If Cloudflare gives you DNS records (CNAME/A records):**

1. **In xneelo Control Panel:**
   - Go to your domain → **DNS Management** or **DNS Records**
   - Add the DNS records Cloudflare provided:
     - **Type:** CNAME (or A record)
     - **Name:** `@` or `www` (or both)
     - **Value:** The Cloudflare Pages URL (e.g., `ashlee-motors.pages.dev`)
     - **TTL:** 3600 (or auto)

2. **Example DNS Records:**
   ```
   Type: CNAME
   Name: @
   Value: ashlee-motors.pages.dev
   
   Type: CNAME
   Name: www
   Value: ashlee-motors.pages.dev
   ```

3. **Save Changes**
   - Wait 1-24 hours for DNS propagation

---

## Step 4: Verify Setup

1. **Check DNS Propagation**
   - Use: https://dnschecker.org/
   - Enter your domain
   - Check if nameservers/DNS records have propagated

2. **Test Your Site**
   - Visit: `https://yourdomain.co.za`
   - Should load your Cloudflare Pages site

---

## Quick Reference: xneelo Nameservers

**xneelo's Default Nameservers:**
- `ns1.host-h.net`
- `ns2.host-h.net`
- `ns1.dns-h.com`
- `ns2.dns-h.com`

**You'll replace these with Cloudflare's nameservers** (if using Method A)

---

## Troubleshooting

### Domain not resolving after 48 hours
- Check DNS records are correct
- Verify nameservers are updated
- Clear browser cache
- Try different DNS servers (8.8.8.8, 1.1.1.1)

### SSL Certificate Issues
- Cloudflare automatically provisions SSL certificates
- Wait 24 hours after DNS setup
- Check SSL status in Cloudflare dashboard

### Still seeing xneelo's default page
- DNS hasn't propagated yet
- Check DNS records are pointing to Cloudflare Pages
- Verify domain is added in Cloudflare Pages dashboard

---

## Need Help?

1. **xneelo Support:** https://www.xneelo.co.za/support/
2. **Cloudflare Support:** https://support.cloudflare.com/
3. **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages/


