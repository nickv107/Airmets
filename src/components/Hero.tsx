"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/HeroBackground";
import { TechDecode, TechHeadline, TechLabel, TechStatusPills } from "@/components/TechText";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A]">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/logo-full.png"
            alt="Airmets"
            width={320}
            height={80}
            className="mx-auto mb-8 h-auto w-48 drop-shadow-[0_0_30px_rgba(255,0,0,0.35)] sm:w-64 md:w-80"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-3 font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 sm:text-xs"
        >
          <TechLabel>TRANSMISSION</TechLabel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-6"
        >
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] sm:text-base md:tracking-[0.28em]">
            <TechDecode
              text="ELEVATING PERSPECTIVES • PRECISION AERIAL MEDIA"
              delayMs={200}
              accent
            />
          </p>
          <TechStatusPills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mb-8"
        >
          <TechHeadline
            primary="DRONE PHOTOGRAPHY & VIDEOGRAPHY"
            secondary="FOR REAL ESTATE, BUSINESS & BEYOND"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-air-muted sm:text-lg"
        >
          Southern California drone media for real estate, commercial, and custom production — serving the
          Inland Empire, Corona, Los Angeles, Palm Springs, and Joshua Tree.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="tech-cta-primary rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider text-white"
          >
            Launch a Mission
          </a>
          <a
            href="#portfolio"
            className="tech-cta-secondary rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition hover:border-air-red/50 hover:bg-white/5"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-air-red/40 p-2 shadow-[0_0_12px_rgba(255,0,0,0.3)]">
          <div className="h-2 w-1 rounded-full bg-air-red" />
        </div>
      </motion.div>
    </section>
  );
}