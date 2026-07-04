"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { PORTFOLIO_FILTERS, PORTFOLIO_ITEMS } from "@/lib/data";

export function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<(typeof PORTFOLIO_ITEMS)[number] | null>(null);

  useEffect(() => {
    if (!lightbox) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightbox]);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((item) => item.category === filter),
    [filter],
  );

  return (
    <section id="portfolio" className="relative scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
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
            Real DJI aerial photos and video from Airmets flights across Southern California — landscapes, homes, and communities.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {PORTFOLIO_FILTERS.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`touch-target rounded-full px-4 py-2.5 text-sm font-medium transition sm:px-5 ${
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
                  {"video" in item && item.video && (
                    <span className="absolute right-3 top-3 rounded-full bg-air-black/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Video
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-air-black/80 via-transparent to-transparent opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-100 transition sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                    <p className="text-xs uppercase tracking-wider text-air-red">{item.category}</p>
                    <p className="font-display text-sm font-semibold sm:text-base">{item.title}</p>
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
            className="fixed inset-0 z-[100] flex items-end justify-center bg-air-black/95 p-0 backdrop-blur-sm sm:items-center sm:p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 16 }}
              role="dialog"
              aria-modal="true"
              aria-label={lightbox.title}
              className="relative flex max-h-[100dvh] w-full max-w-5xl flex-col overflow-hidden rounded-t-2xl border border-air-border sm:max-h-[90dvh] sm:rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative min-h-0 flex-1 overflow-auto">
                {"video" in lightbox && lightbox.video ? (
                  <video
                    src={lightbox.video}
                    poster={lightbox.image}
                    controls
                    playsInline
                    className="max-h-[55dvh] w-full bg-air-black object-contain sm:max-h-[65dvh]"
                  />
                ) : (
                  <Image
                    src={lightbox.image}
                    alt={lightbox.title}
                    width={1600}
                    height={1000}
                    className="mx-auto max-h-[55dvh] w-full object-contain sm:max-h-[65dvh] sm:w-auto"
                  />
                )}
              </div>
              <div className="shrink-0 border-t border-air-border bg-air-card p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6">
                <p className="text-sm text-air-red">{lightbox.category} · {lightbox.location}</p>
                <h3 className="font-display mt-1 text-xl font-bold sm:text-2xl">{lightbox.title}</h3>
                <p className="mt-2 text-xs text-air-muted">
                  Airmets DJI capture · {lightbox.location}. All portfolio media is from real Part 107 flights.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="touch-target absolute right-3 top-3 flex items-center justify-center rounded-full bg-air-black/80 text-xl hover:bg-air-red sm:right-4 sm:top-4"
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