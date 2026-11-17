"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";

function ServiceIcon({ type }: { type: string }) {
  const paths: Record<string, string> = {
    camera: "M4 7h4l2-2h4l2 2h4v12H4V7zm8 10a4 4 0 100-8 4 4 0 000 8z",
    home: "M3 11l9-7 9 7v10H5V11zm6 8h4v-6h-4v6z",
    film: "M4 5h16v14H4V5zm2 2v10h12V7H6zm2 2h2v2H8V9zm6 0h2v2h-2V9z",
    spark: "M12 2l2.4 7.2H22l-6 4.6 2.4 7.2L12 17l-6.4 4 2.4-7.2-6-4.6h7.6L12 2z",
    lens: "M12 8a4 4 0 110 8 4 4 0 010-8zm8-2h-1.2l-.8-1.6a1 1 0 00-.9-.6H8.9a1 1 0 00-.9.6L7.2 6H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2zm-8 10a6 6 0 100-12 6 6 0 000 12z",
    code: "M3 4h18a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1zm1 3v8h16V7H4zm4 13h8v1.5H8z",
    plane: "M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
    frame: "M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v8H8V8z",
    hangar: "M2 20V9.5L12 3l10 6.5V20H2zm2-1.5h16v-8.2L12 5.2 4 10.3v8.2zM8 18v-5h8v5H8z",
  };
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-air-red" aria-hidden>
      <path d={paths[type] ?? paths.spark} fillRule={type === "code" ? "evenodd" : "nonzero"} />
    </svg>
  );
}

export function Services() {
  return (
    <div id="services" className="scroll-mt-20">
      <div className="border-y border-air-border bg-air-black px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-air-red"
        >
          Services
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          Aviation, Listing & Aerial Media
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-air-muted">
          Aircraft sales photography, real estate listings, FBO and hangar media, drone capture, and
          marketing websites for clients across Southern California.
        </p>
        <nav aria-label="Jump to a service" className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <a
              key={service.id}
              href={`#service-${service.id}`}
              className="group flex items-center gap-3 rounded-xl border border-air-border bg-air-card px-4 py-3 text-left transition hover:border-air-red/50 hover:bg-air-black"
            >
              <span className="font-display w-7 shrink-0 text-sm font-bold text-air-red">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium leading-snug text-air-silver transition group-hover:text-white">
                {service.title}
              </span>
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 sm:py-16 lg:grid-cols-3 lg:px-8">
        {SERVICES.map((service, index) => (
          <article
            key={service.id}
            id={`service-${service.id}`}
            className="glow-border flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-air-border bg-air-card"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={service.image}
                alt={service.imageAlt ?? service.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-air-black/80 via-air-black/10 to-transparent" />
              <span className="font-display absolute left-4 top-4 text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex items-start gap-3">
                <span className="mt-0.5 shrink-0">
                  <ServiceIcon type={service.icon} />
                </span>
                <h3 className="font-display text-xl font-bold leading-snug">{service.title}</h3>
              </div>
              <p className="mb-6 flex-1 leading-relaxed text-air-silver">{service.description}</p>
              <Link
                href={service.href}
                className="touch-target inline-flex items-center gap-2 self-start rounded-full border border-air-red/50 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-air-red"
              >
                View service
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
