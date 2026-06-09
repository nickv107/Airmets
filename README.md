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

## Deployment

This is a pure static site (single `index.html` + assets).

### Railway (current)

Configured with a minimal `Dockerfile` (nginx:alpine) for reliable static serving.

**Deploy from GitHub (recommended):**

1. Make sure everything is pushed (see command below).
2. Go to [railway.app](https://railway.app) → New Project → "Deploy from GitHub repo".
3. Choose the `Airmets` repository.
4. Railway detects the `Dockerfile` and builds/serves the site automatically.
5. You'll get a public URL (e.g. `https://airmets-xxx.up.railway.app`) with automatic HTTPS.

**Custom domain (airmets.com) + SSL:**

1. In your Railway project/service → **Settings → Domains**.
2. Add `airmets.com` and `www.airmets.com`.
3. Railway will give you the exact DNS record(s) to set at your registrar.
4. Set the records (usually a CNAME).
5. Railway automatically provisions a Let's Encrypt certificate. No manual SSL configuration needed.

**Using Railway CLI (optional, for logs / quick deploys):**

```bash
# One-time setup
railway login

# Link this folder to your Railway project
railway link

# Deploy current code directly (alternative to GitHub deploys)
railway up
```

### Push the latest code

```bash
cd ~/airmets-website
git push origin main --force-with-lease
```

After pushing, trigger a new deploy on Railway (or enable "Deploy on push" in the repo settings).

### Switching providers later

Because this is a standard static site + Dockerfile, you can easily move it to Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc. with minimal changes. The `Dockerfile` makes Railway (and any Docker-based host) straightforward.