import type { Metadata } from "next";
import { Suspense } from "react";
import { Contact } from "@/components/Contact";
import { SiteFrame } from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a quote from Airmets for aircraft listing photography, real estate listing media, aviation facilities, or FAA Part 107 drone work in Southern California.",
  alternates: { canonical: "/contact" },
};

const STEPS = [
  "Send the airport or the property address, the date, and who grants access.",
  "Say whether the set is exterior only, interiors as well, or a facility walk-through.",
  "If you want a drone pass, we check airspace and airport rules before we include it.",
  "You receive a written quote that lists the files and the turnaround, usually within one business day.",
];

export default function ContactPage() {
  return (
    <SiteFrame>
      <section className="mx-auto max-w-3xl px-4 pt-14 sm:px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-air-red">Quote</p>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Request a quote</h1>
        <p className="mt-4 text-lg text-air-silver">
          Airmets does not publish a rate card. The quote is based on the visit. Interior coverage, a second
          visit, and air-to-air are priced separately when you need them.
        </p>
        <ol className="mt-8 space-y-3">
          {STEPS.map((step, index) => (
            <li key={step} className="flex gap-4 text-air-silver">
              <span className="font-display text-sm font-bold text-air-red">0{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </SiteFrame>
  );
}
