"use client";

import { useEffect, useState, type ReactNode } from "react";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#%&";

function useDecodeText(text: string, delayMs: number, tickMs = 36) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!text) return;

    let intervalId: number | undefined;
    const startId = window.setTimeout(() => {
      let frame = 0;
      const totalFrames = Math.max(18, Math.floor(text.length * 0.55));

      intervalId = window.setInterval(() => {
        frame += 1;
        const progress = Math.min(1, frame / totalFrames);
        const revealed = Math.floor(text.length * progress);

        const next = text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < revealed) return char;
            return CHARSET[Math.floor(Math.random() * CHARSET.length)];
          })
          .join("");

        setOutput(next);

        if (frame >= totalFrames) {
          setOutput(text);
          setDone(true);
          if (intervalId) window.clearInterval(intervalId);
        }
      }, tickMs);
    }, delayMs);

    return () => {
      window.clearTimeout(startId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [text, delayMs, tickMs]);

  return { output, done };
}

type TechDecodeProps = {
  text: string;
  delayMs?: number;
  className?: string;
  accent?: boolean;
  showCursor?: boolean;
};

export function TechDecode({
  text,
  delayMs = 0,
  className = "",
  accent = false,
  showCursor = true,
}: TechDecodeProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const { output, done } = useDecodeText(text, reducedMotion ? 0 : delayMs);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const display = reducedMotion ? text : output || (delayMs > 0 ? "" : text);

  return (
    <span
      className={`tech-decode ${accent ? "tech-decode--accent" : ""} ${className}`}
      aria-label={text}
    >
      {display}
      {showCursor && !done && !reducedMotion && (
        <span className="tech-cursor" aria-hidden>
          _
        </span>
      )}
    </span>
  );
}

type TechLabelProps = {
  children: ReactNode;
  className?: string;
};

export function TechLabel({ children, className = "" }: TechLabelProps) {
  return (
    <span className={`tech-label ${className}`}>
      <span className="text-air-red/80">[</span>
      {children}
      <span className="text-air-red/80">]</span>
    </span>
  );
}

export function TechStatusPills() {
  const pills = ["4K HDR", "FAA PART 107", "DJI AIR 3S", "SOCAL OPS"];
  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
      {pills.map((pill) => (
        <span key={pill} className="tech-pill">
          {pill}
        </span>
      ))}
    </div>
  );
}

type TechHeadlineProps = {
  primary: string;
  secondary: string;
};

export function TechHeadline({ primary, secondary }: TechHeadlineProps) {
  return (
    <div className="tech-headline-block">
      <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
        <TechDecode text={primary} delayMs={400} className="tech-headline-primary block" showCursor={false} />
        <TechDecode
          text={secondary}
          delayMs={900}
          className="tech-headline-secondary mt-2 block text-xl sm:text-3xl md:text-4xl"
          showCursor={false}
        />
      </h1>
    </div>
  );
}