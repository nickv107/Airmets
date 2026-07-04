# Airmets.com — Premium Single-Page Website

Cinematic drone media company site built with **Next.js 15**, **Tailwind CSS 4**, and **Framer Motion**.

## Quick Start

```bash
export PATH="$HOME/.local/node/bin:$PATH"
cd airmets-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy to **Vercel**, **Netlify**, or connect `airmets.com` via Cloudflare Pages:

1. Point `airmets.com` DNS to your hosting provider
2. Set primary domain in hosting dashboard
3. Enable HTTPS

## Project Structure

- `src/app/` — Next.js App Router pages & layout
- `src/components/` — UI sections (Hero, Services, Portfolio, etc.)
- `src/lib/data.ts` — Content configuration
- `public/images/` — Generated aerial portfolio imagery
- `public/logo-*.png` — Airmets brand assets

## Customization

Edit `src/lib/data.ts` to update services, portfolio items, testimonials, and contact info.
