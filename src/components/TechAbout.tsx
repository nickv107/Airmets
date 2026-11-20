"use client";

import { motion } from "framer-motion";
import { TECH_SPECS } from "@/lib/data";

export function TechAbout() {
  return (
    <>
      <section id="technology" className="scroll-mt-20 border-y border-air-border bg-air-card/50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-air-red">Technology</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Precision Flight. Proven Results.</h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TECH_SPECS.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glow-border rounded-2xl border border-air-border bg-air-black p-6"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-air-red">{spec.label}</p>
                <p className="font-display text-lg font-semibold leading-snug">{spec.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid gap-8 lg:grid-cols-3"
          >
            {[
              {
                title: "FAA Part 107 Operations",
                body: "Commercial flights are conducted under FAA Part 107 by a certificated remote pilot, with safety-first planning on every mission.",
              },
              {
                title: "Professional UAS Platform",
                body: "Commercial-grade aerial systems for cinematic 4K HDR video and high-resolution stills in challenging environments.",
              },
              {
                title: "Listing-Ready Delivery",
                body: "Photo sets are prepared for MLS boards, aircraft listings, and facility websites, in the sizes each workflow needs.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-air-border p-6">
                <h3 className="font-display mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-air-silver">{item.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-air-red">About</p>
            <h2 className="font-display mb-6 text-3xl font-bold sm:text-4xl">Aircraft, listings, and the fields they live on.</h2>
            <p className="mb-4 leading-relaxed text-air-silver">
              Airmets photographs aircraft for sale, homes and estates, and FBOs, hangars, and flight schools.
              Ground photos and Part 107 drone flights are planned as one job.
            </p>
            <p className="mb-6 leading-relaxed text-air-muted">
              You get a written quote before the shoot. A flight is confirmed only when the airspace, the airport,
              and the weather allow it.
            </p>
            <a
              href="/about"
              className="touch-target inline-flex items-center justify-center rounded-full border border-air-red/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-air-red"
            >
              About Airmets
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glow-border relative overflow-hidden rounded-2xl border border-air-border bg-gradient-to-br from-air-card to-air-black p-8 sm:p-12"
          >
            <div className="grid-overlay absolute inset-0 opacity-20" />
            <div className="relative">
              <p className="font-display mb-2 text-5xl font-bold text-air-red">107</p>
              <p className="mb-6 text-sm uppercase tracking-wider text-air-muted">Part 107 Certificated Remote Pilot</p>
              <div className="space-y-4 border-t border-air-border pt-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-air-muted">Coverage</p>
                  <p className="font-semibold">Inland Empire, Corona, LA, Palm Springs, Joshua Tree, Temecula</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-air-muted">Specialties</p>
                  <p className="font-semibold">Aircraft · Listings · Facilities · Drone</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}