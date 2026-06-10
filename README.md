# Airmets — airmets.com

Professional real estate + drone photography website (black & red cinematic theme).

## Fresh Grok Imagine Content Only (as requested)

All photos and short videos on the site were **created brand new** using Grok Imagine:

- **image_gen** for the 7 photorealistic stills
- **image_to_video** for the 3 short cinematic drone clips

**No files were pulled from previous project versions or any of your Desktop folders** (the 35645 Avenue E Yucaipa property was used only as creative inspiration for the generation prompts, per your permission).

### Current assets (all new)
**images/**
- 35645-yucaipa-drone-aerial.jpg
- 35645-yucaipa-front-approach-drone.jpg
- 35645-yucaipa-interior-hdr.jpg
- 35645-yucaipa-pool-drone.jpg
- 35645-yucaipa-side-aerial.jpg
- 35645-yucaipa-topdown-drone.jpg
- 35645-yucaipa-twilight-exterior.jpg

**videos/**
- 35645-yucaipa-drone-flyin.mp4 (6s)
- 35645-yucaipa-pool-orbit.mp4 (6s)
- 35645-yucaipa-topdown-reveal.mp4 (6s)

These are web-optimized in size and already wired into:
- The filterable Portfolio grid + lightbox
- The new "Cinematic Aerials" / Drone Films section

## Quick start
1. Open the folder `airmets-website`
2. Double-click `index.html`
3. Browse the site (refresh if you just edited).

The site remains fully self-contained.

## Black + Red Theme
- Deep black backgrounds (#050505 and variants)
- Signature red accent: #E11D2A (and softer #ff3a48)
- All typography, buttons, hover states, and accents use this palette.

## Regenerating more content
If you'd like:
- More angles of the 35645 Avenue E Yucaipa property
- Different times of day (blue hour, night drone, bright midday)
- Additional video clips (different movements, longer, different resolutions)
- Variations for other properties

Just describe what you want and I'll generate fresh ones with Grok Imagine and update the site.

## Current features
- Fixed glassmorphic header with mobile menu
- Cinematic hero with red glows + subtle parallax + scroll prompt
- 4 service cards (Drone Photography, Aerial Cinematography, Real Estate Photography, Event Coverage)
- Filterable portfolio with lightbox (All / Drone / Real Estate / Aerial)
- "Cinematic Aerials" section with 3 embedded short drone videos
- About section (with your name)
- Contact form (frontend demo)

All visuals are now 100% Grok Imagine generated for this version.

Let me know the next edits!

## Deployment (Railway)

This is a pure static site (single `index.html` + assets). We use a `Dockerfile` (nginx:alpine) + custom `nginx.conf` for production (security headers, gzip, long-term asset caching for images/videos).

### 1. Quick local test (recommended first)

```bash
cd ~/airmets-website
railway login          # one-time, opens browser
railway whoami         # verify auth
railway up             # builds & deploys from local (uses Dockerfile)
```

After `railway up`, you'll get a URL like `https://airmets-xxx.up.railway.app` with automatic HTTPS.

### 2. Connect GitHub for auto-deploys (best for ongoing)

1. Push everything (including images/videos):
   ```bash
   cd ~/airmets-website
   git push origin main --force-with-lease   # first time may need force
   ```
2. In [railway.app](https://railway.app) → New Project → "Deploy from GitHub repo".
3. Select `nickv107/Airmets`.
4. Railway will auto-detect `Dockerfile` and deploy on every push to `main`.

### 3. Add custom domain (airmets.com) + SSL

1. Deploy the service first (step 1 or 2 above).
2. In Railway dashboard for the service:
   - Go to **Settings → Domains**
   - Click **Add Domain**
   - Enter `airmets.com` (and `www.airmets.com`)
3. Railway will show the required DNS records (usually a **CNAME** record pointing to your Railway service hostname, e.g. `airmets-xxx.up.railway.app`).
4. Go to your domain registrar (currently Automattic/WordPress.com nameservers for airmets.com) and add the exact records Railway provides.
5. Wait for DNS propagation (use whatsmydns.net or `dig airmets.com`).
6. Back in Railway, the domain should verify and Railway will automatically provision a Let's Encrypt cert (free, auto-renewing). No manual SSL setup needed.

**Troubleshooting custom domain:**
- If DNS is still on WordPress nameservers, you may need to add the CNAME there (or switch nameservers to Cloudflare for easier management).
- Common record: `CNAME @` or `CNAME www` → your Railway target.
- After adding, it can take 5-60 mins for Railway to detect and issue cert.
- Check status in Railway Domains tab.

### 4. Verify & monitor

```bash
railway logs          # live logs
railway status
railway open          # open dashboard
```

The `railway.json` in the repo configures the Docker build + basic deploy settings.

### Switching providers later

Because this is a standard static site + Dockerfile, you can easily move it to Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc. with minimal changes. The `Dockerfile` makes Railway (and any Docker-based host) straightforward.