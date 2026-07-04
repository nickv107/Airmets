"use client";

import Image from "next/image";
import { SITE_MEDIA } from "@/lib/media";

const FLIGHT_PATHS = [
  "M 0 400 Q 200 200 400 350 T 800 280 T 1200 320 T 1600 240",
  "M 0 600 Q 300 450 600 520 T 1200 480 T 1800 400",
  "M 200 800 Q 500 650 800 720 T 1400 600",
];

export function HeroBackground() {
  return (
    <div className="hero-bg absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      <div className="absolute inset-0 opacity-[0.12] mix-blend-screen">
        <Image
          src={SITE_MEDIA.heroBackground}
          alt=""
          fill
          priority
          className="scale-105 object-cover"
          sizes="100vw"
        />
      </div>

      <div className="hero-bg-radial absolute inset-0" />
      <div className="hero-bg-vignette absolute inset-0" />
      <div className="hero-bg-perspective absolute inset-0" />
      <div className="hero-bg-grid absolute inset-0 opacity-40" />
      <div className="hero-bg-scanline absolute inset-0" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,0,0,0)" />
            <stop offset="40%" stopColor="rgba(255,0,0,0.7)" />
            <stop offset="100%" stopColor="rgba(255,0,0,0)" />
          </linearGradient>
        </defs>

        {[180, 280, 380].map((r) => (
          <circle
            key={r}
            cx={1312}
            cy={648}
            r={r}
            fill="none"
            stroke="rgba(255,0,0,0.1)"
            strokeWidth="1"
            className="hero-radar-ring"
          />
        ))}

        <g className="hero-radar-sweep" style={{ transformOrigin: "1312px 648px" }}>
          <line x1={1312} y1={648} x2={1312} y2={270} stroke="rgba(255,0,0,0.25)" strokeWidth="1" />
        </g>

        {FLIGHT_PATHS.map((d, i) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="url(#pathGrad)"
            strokeWidth={i === 0 ? 2 : 1.5}
            strokeDasharray="8 12"
            className="hero-flight-path"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}

        <g transform="translate(800, 450)" opacity="0.25">
          <circle r="60" fill="none" stroke="rgba(255,0,0,0.4)" strokeWidth="1" />
          <line x1="-80" y1="0" x2="80" y2="0" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="0" y1="-80" x2="0" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </g>
      </svg>

      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="hero-bg-node absolute rounded-full bg-air-red"
          style={{
            left: `${8 + ((i * 37) % 84)}%`,
            top: `${12 + ((i * 23) % 76)}%`,
            width: i % 3 === 0 ? 3 : 2,
            height: i % 3 === 0 ? 3 : 2,
            animationDelay: `${(i % 6) * 0.4}s`,
          }}
        />
      ))}

      <div className="hero-hud-corner hero-hud-corner--tl" />
      <div className="hero-hud-corner hero-hud-corner--tr" />
      <div className="hero-hud-corner hero-hud-corner--bl" />
      <div className="hero-hud-corner hero-hud-corner--br" />

      <div className="absolute left-6 top-24 hidden font-mono text-[10px] uppercase tracking-widest text-air-red/60 sm:block">
        <div className="hero-pulse-text">SYS::AIRMETS v2.0</div>
        <div className="mt-1 text-white/30">HUD DISPLAY · FAA 107 · 4K HDR</div>
        <div className="mt-1 text-white/20">LAT 33.8753° N · LON 117.5664° W</div>
      </div>

      <div className="absolute right-6 top-24 hidden text-right font-mono text-[10px] uppercase tracking-widest text-white/30 sm:block">
        <div>ALT — FT AGL</div>
        <div className="hero-pulse-text mt-1 text-air-red/70">● DEMO</div>
        <div className="mt-1">DJI AIR 3S</div>
      </div>

      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="hero-data-stream absolute h-px bg-gradient-to-r from-transparent via-air-red/50 to-transparent"
          style={{ top: `${12 + i * 14}%`, animationDelay: `${i * 0.8}s` }}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </div>
  );
}