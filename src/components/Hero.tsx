import Image from "next/image";
import Link from "next/link";
import { HeroBackground } from "@/components/HeroBackground";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#0A0A0A] scroll-mt-20"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <Image
          src="/logo-full.png"
          alt="Airmets"
          width={320}
          height={80}
          className="mx-auto mb-8 h-auto w-48 drop-shadow-[0_0_30px_rgba(255,0,0,0.35)] sm:w-64 md:w-80"
          priority
        />

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-air-red">
          Southern California
        </p>
        <h1 className="font-display text-[2rem] font-bold leading-[1.15] text-white sm:text-5xl md:text-6xl">
          Aircraft, listing, and aerial photography.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          Listing photos for aircraft, homes, and aviation facilities across Southern California.
          Drone stills and 4K video are added when FAA rules and the location allow the flight.
        </p>
        <p className="mt-4 text-sm text-white/60">
          Inland Empire · Corona · Los Angeles · Palm Springs · Joshua Tree · Temecula
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="/contact"
            className="tech-cta-primary touch-target flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider text-white"
          >
            Request a quote
          </Link>
          <Link
            href="/portfolio"
            className="tech-cta-secondary touch-target flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition hover:border-air-red/50 hover:bg-white/5"
          >
            View portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
