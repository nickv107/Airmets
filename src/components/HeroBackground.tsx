"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { SITE_MEDIA } from "@/lib/media";

const FLIGHT_PATHS = [
  "M 0 400 Q 200 200 400 350 T 800 280 T 1200 320 T 1600 240",
  "M 0 600 Q 300 450 600 520 T 1200 480 T 1800 400",
  "M 200 800 Q 500 650 800 720 T 1400 600",
];

const HERO_VIDEOS = SITE_MEDIA.heroVideos;
const ROTATE_MS = 5000;
const FADE_OUT_MS = 600;
const FADE_IN_MS = 600;
const VISIBLE_OPACITY = 0.5;

function prefetchVideo(url: string) {
  if (typeof document === "undefined") return;
  const existing = document.querySelector(`link[data-hero-prefetch="${url}"]`);
  if (existing) return;
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.as = "video";
  link.href = url;
  link.setAttribute("data-hero-prefetch", url);
  document.head.appendChild(link);
}

function waitForNextFrame() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
}

function clearInlineVideoStyles(el: HTMLVideoElement) {
  el.style.transition = "";
  el.style.opacity = "";
  el.style.visibility = "";
}

function fadeOpacity(el: HTMLVideoElement, from: number, to: number, duration: number) {
  return new Promise<void>((resolve) => {
    el.style.visibility = "visible";
    el.style.transition = `opacity ${duration}ms ease-in-out`;
    el.style.opacity = String(from);
    void el.offsetHeight;
    el.style.opacity = String(to);

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      el.removeEventListener("transitionend", onEnd);
      resolve();
    };

    const onEnd = (event: TransitionEvent) => {
      if (event.propertyName === "opacity") finish();
    };

    el.addEventListener("transitionend", onEnd);
    window.setTimeout(finish, duration + 100);
  });
}

export function HeroBackground() {
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
  const indexRef = useRef(0);
  const layerRef = useRef(0);
  const warmedIndexRef = useRef<number | null>(null);
  const transitioningRef = useRef(false);
  const rotateTimeoutRef = useRef<number | null>(null);
  const [activeLayer, setActiveLayer] = useState(0);
  const [useVideo, setUseVideo] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setUseVideo(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const loadVideo = useCallback(async (el: HTMLVideoElement, src: string) => {
    const resolvedSrc = new URL(src, window.location.origin).href;
    if (el.src !== resolvedSrc) {
      el.src = src;
      el.load();
    }

    await new Promise<void>((resolve) => {
      if (el.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
        resolve();
        return;
      }

      const onReady = () => {
        el.removeEventListener("canplaythrough", onReady);
        resolve();
      };

      el.addEventListener("canplaythrough", onReady);
    });
  }, []);

  const warmHiddenLayer = useCallback(
    async (currentIndex: number) => {
      const nextIndex = (currentIndex + 1) % HERO_VIDEOS.length;
      const hiddenLayer = 1 - layerRef.current;
      const hidden = videoRefs[hiddenLayer].current;
      if (!hidden) return;

      prefetchVideo(HERO_VIDEOS[nextIndex]);
      prefetchVideo(HERO_VIDEOS[(nextIndex + 1) % HERO_VIDEOS.length]);

      hidden.pause();
      hidden.currentTime = 0;
      hidden.style.visibility = "hidden";
      hidden.style.opacity = "0";

      await loadVideo(hidden, HERO_VIDEOS[nextIndex]);
      warmedIndexRef.current = nextIndex;
    },
    [loadVideo],
  );

  const advanceToNext = useCallback(async () => {
    if (transitioningRef.current) return;
    transitioningRef.current = true;

    const nextIndex = (indexRef.current + 1) % HERO_VIDEOS.length;
    const outgoingLayer = layerRef.current;
    const incomingLayer = 1 - outgoingLayer;
    const outgoing = videoRefs[outgoingLayer].current;
    const incoming = videoRefs[incomingLayer].current;

    if (!outgoing || !incoming) {
      transitioningRef.current = false;
      return;
    }

    try {
      if (warmedIndexRef.current !== nextIndex) {
        await loadVideo(incoming, HERO_VIDEOS[nextIndex]);
      }

      incoming.pause();
      incoming.currentTime = 0;
      incoming.style.visibility = "hidden";
      incoming.style.opacity = "0";

      await fadeOpacity(outgoing, VISIBLE_OPACITY, 0, FADE_OUT_MS);

      outgoing.pause();
      outgoing.currentTime = 0;
      outgoing.style.visibility = "hidden";
      outgoing.style.opacity = "0";

      await incoming.play().catch(() => setUseVideo(false));
      await waitForNextFrame();

      layerRef.current = incomingLayer;
      indexRef.current = nextIndex;
      warmedIndexRef.current = null;
      setActiveLayer(incomingLayer);

      await fadeOpacity(incoming, 0, VISIBLE_OPACITY, FADE_IN_MS);

      clearInlineVideoStyles(incoming);
      clearInlineVideoStyles(outgoing);

      await warmHiddenLayer(nextIndex);
    } finally {
      transitioningRef.current = false;
    }
  }, [loadVideo, warmHiddenLayer]);

  const scheduleNextRotation = useCallback(() => {
    if (rotateTimeoutRef.current !== null) {
      window.clearTimeout(rotateTimeoutRef.current);
    }

    rotateTimeoutRef.current = window.setTimeout(() => {
      void advanceToNext().finally(() => {
        scheduleNextRotation();
      });
    }, ROTATE_MS);
  }, [advanceToNext]);

  useEffect(() => {
    if (!useVideo) return;

    const first = videoRefs[0].current;
    if (!first) return;

    let cancelled = false;

    void (async () => {
      await loadVideo(first, HERO_VIDEOS[0]);
      if (cancelled) return;

      await first.play().catch(() => setUseVideo(false));
      if (cancelled) return;

      clearInlineVideoStyles(first);
      setActiveLayer(0);
      layerRef.current = 0;
      indexRef.current = 0;

      await warmHiddenLayer(0);
      if (cancelled) return;

      scheduleNextRotation();
    })();

    return () => {
      cancelled = true;
      if (rotateTimeoutRef.current !== null) {
        window.clearTimeout(rotateTimeoutRef.current);
      }
    };
  }, [useVideo, loadVideo, warmHiddenLayer, scheduleNextRotation]);

  return (
    <div className="hero-bg absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {useVideo ? (
        <div className="absolute inset-0">
          {videoRefs.map((ref, i) => (
            <video
              key={i}
              ref={ref}
              muted
              loop
              playsInline
              autoPlay={i === 0}
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              className={`hero-video-layer absolute inset-0 h-full w-full scale-105 object-cover ${
                activeLayer === i ? "hero-video-layer--active" : "hero-video-layer--inactive"
              }`}
            />
          ))}
        </div>
      ) : (
        <div className="absolute inset-0 opacity-[0.35]">
          <Image
            src={SITE_MEDIA.heroBackground}
            alt=""
            fill
            priority
            className="scale-105 object-cover"
            sizes="100vw"
          />
        </div>
      )}

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

      <div className="hero-hud-corner hero-hud-corner--tl hidden sm:block" />
      <div className="hero-hud-corner hero-hud-corner--tr hidden sm:block" />
      <div className="hero-hud-corner hero-hud-corner--bl hidden sm:block" />
      <div className="hero-hud-corner hero-hud-corner--br hidden sm:block" />

      <div className="absolute left-6 top-24 hidden font-mono text-[10px] uppercase tracking-widest text-air-red/60 sm:block">
        <div className="hero-pulse-text">SYS::AIRMETS v2.0</div>
        <div className="mt-1 text-white/30">HUD DISPLAY · FAA 107 · 4K HDR</div>
        <div className="mt-1 text-white/20">LAT 33.8753° N · LON 117.5664° W</div>
      </div>

      <div className="absolute right-6 top-24 hidden text-right font-mono text-[10px] uppercase tracking-widest text-white/30 sm:block">
        <div>ALT — FT AGL</div>
        <div className="hero-pulse-text mt-1 text-air-red/70">● LIVE</div>
        <div className="mt-1">UAS ONLINE</div>
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