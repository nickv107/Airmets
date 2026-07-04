"use client";

import { motion } from "framer-motion";
import { SERVICE_STANDARDS } from "@/lib/data";

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
            Clear operational and delivery standards for every project — from pre-flight planning through final
            media delivery.
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
              className="rounded-2xl border border-air-border bg-air-black p-8"
            >
              <h3 className="font-display mb-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="leading-relaxed text-air-silver">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}