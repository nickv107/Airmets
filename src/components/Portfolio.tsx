"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { PORTFOLIO_FILTERS, PORTFOLIO_ITEMS } from "@/lib/data";

export function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<(typeof PORTFOLIO_ITEMS)[number] | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((item) => item.category === filter),
    [filter],
  );

  return (
    <section id="portfolio" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-air-red">Portfolio</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">Aerial Impact Gallery</h2>
          <p className="mx-auto mt-4 max-w-2xl text-air-muted">
            Recent Airmets drone captures from Southern California — real FAA Part 107 flights with DJI Air 3S.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {PORTFOLIO_FILTERS.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                filter === cat
                  ? "bg-air-red text-white shadow-[0_0_20px_rgba(255,0,0,0.3)]"
                  : "border border-air-border text-air-silver hover:border-air-red/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                type="button"
                onClick={() => setLightbox(item)}
                className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-air-border bg-air-card text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-air-black/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs uppercase tracking-wider text-air-red">{item.category}</p>
                    <p className="font-display font-semibold">{item.title}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-air-black/95 p-6 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl border border-air-border"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.image}
                alt={lightbox.title}
                width={1600}
                height={1000}
                className="max-h-[75vh] w-auto object-contain"
              />
              <div className="border-t border-air-border bg-air-card p-6">
                <p className="text-sm text-air-red">{lightbox.category} · {lightbox.location}</p>
                <h3 className="font-display mt-1 text-2xl font-bold">{lightbox.title}</h3>
                <p className="mt-2 text-xs text-air-muted">Sample imagery for demonstration purposes.</p>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-air-black/80 text-xl hover:bg-air-red"
                aria-label="Close"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}