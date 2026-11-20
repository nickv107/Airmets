"use client";

import { motion } from "framer-motion";
import { CASE_STUDIES, SERVICE_STANDARDS } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="border-y border-air-border bg-air-card/30 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-air-red">Service Standards</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">How We Work With Clients</h2>
          <p className="mx-auto mt-4 max-w-2xl text-air-muted">
            Every project starts with a written scope, an airspace check when a drone is involved, and files
            named for the way you will publish them.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {SERVICE_STANDARDS.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-air-border bg-air-black p-8 transition duration-300 hover:border-air-red/40"
            >
              <p className="mb-4 font-display text-sm font-bold tracking-[0.2em] text-air-red">0{i + 1}</p>
              <h3 className="font-display mb-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="leading-relaxed text-air-silver">{item.body}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <section className="rounded-2xl border border-dashed border-air-border p-6">
            <h3 className="font-display text-lg font-semibold text-white">Client notes</h3>
            <p className="mt-3 text-sm leading-relaxed text-air-silver">
              Quotes from agents, brokers, and facilities appear here only after written permission. None are
              published yet.
            </p>
          </section>
          <section className="rounded-2xl border border-dashed border-air-border p-6">
            <h3 className="font-display text-lg font-semibold text-white">Client logos</h3>
            <p className="mt-3 text-sm leading-relaxed text-air-silver">
              Brokerage and FBO marks appear here only after written permission. This row stays empty until then.
            </p>
          </section>
          <section className="rounded-2xl border border-dashed border-air-border p-6">
            <h3 className="font-display text-lg font-semibold text-white">Case studies</h3>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-air-silver">
              {CASE_STUDIES.map((study) => (
                <li key={study.title}>
                  <span className="font-semibold text-white">{study.title}. </span>
                  {study.body}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}