"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SERVICES } from "@/lib/data";

function ServiceIcon({ type }: { type: string }) {
  const paths: Record<string, string> = {
    camera: "M4 7h4l2-2h4l2 2h4v12H4V7zm8 10a4 4 0 100-8 4 4 0 000 8z",
    home: "M3 11l9-7 9 7v10H5V11zm6 8h4v-6h-4v6z",
    film: "M4 5h16v14H4V5zm2 2v10h12V7H6zm2 2h2v2H8V9zm6 0h2v2h-2V9z",
    spark: "M12 2l2.4 7.2H22l-6 4.6 2.4 7.2L12 17l-6.4 4 2.4-7.2-6-4.6h7.6L12 2z",
  };
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-air-red" aria-hidden>
      <path d={paths[type] ?? paths.spark} />
    </svg>
  );
}

function ServiceBlock({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section ref={ref} className="relative min-h-[85vh] overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-air-black/75" />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className={`relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24 lg:px-8 ${
          index % 2 === 1 ? "lg:justify-end" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glow-border max-w-xl rounded-2xl border border-air-border bg-air-card/80 p-8 backdrop-blur-md sm:p-10"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-air-red/10">
              <ServiceIcon type={service.icon} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-air-red">
              0{index + 1}
            </span>
          </div>
          <h3 className="font-display mb-4 text-2xl font-bold sm:text-3xl">{service.title}</h3>
          <p className="mb-6 leading-relaxed text-air-silver">{service.description}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-air-red transition hover:gap-3"
          >
            Learn More
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function Services() {
  return (
    <div id="services">
      <div className="border-y border-air-border bg-air-black px-6 py-20 text-center lg:px-8">
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
          Mission-Capable Aerial Media
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-air-muted">
          Parallax-powered service showcases engineered for luxury real estate, commercial brands,
          and bespoke production workflows.
        </p>
      </div>
      {SERVICES.map((service, index) => (
        <ServiceBlock key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}