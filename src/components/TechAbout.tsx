"use client";

import { motion } from "framer-motion";
import { TECH_SPECS } from "@/lib/data";

export function TechAbout() {
  return (
    <>
      <section id="technology" className="border-y border-air-border bg-air-card/50 px-6 py-24 lg:px-8">
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
                title: "DJI Air 3S Platform",
                body: "Dual-camera system with obstacle sensing for cinematic 4K HDR video and high-resolution stills in challenging environments.",
              },
              {
                title: "Real Estate Integration",
                body: "Deliverables can be exported in MLS-compatible formats where supported by your local board and listing workflow.",
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

      <section id="about" className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-air-red">About</p>
            <h2 className="font-display mb-6 text-3xl font-bold sm:text-4xl">Born from Aviation. Built for Vision.</h2>
            <p className="mb-4 leading-relaxed text-air-silver">
              Airmets was founded at the intersection of aviation precision and cinematic storytelling. We bring
              a technology-forward approach to every flight — from luxury estate tours in Corona and the Inland
              Empire to desert landscapes around Joshua Tree and Palm Springs.
            </p>
            <p className="mb-4 leading-relaxed text-air-silver">
              We combine FAA Part 107–compliant drone operations with professional photography and videography
              expertise, delivering media that doesn&apos;t just document — it elevates. Whether you&apos;re a
              luxury agent, developer, or brand, we translate aerial perspectives into compelling visual assets.
            </p>
            <p className="leading-relaxed text-air-muted">
              Serving Southern California with same-week turnaround, transparent pricing, and white-glove
              collaboration from pre-flight planning to final delivery.
            </p>
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
                  <p className="font-semibold">Inland Empire · Corona · LA · Palm Springs · Joshua Tree</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-air-muted">Specialties</p>
                  <p className="font-semibold">Real Estate · Commercial · Events · Custom Production</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}