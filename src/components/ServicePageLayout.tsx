import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";
import { BUSINESS } from "@/lib/legal";
import type { ServiceDetail } from "@/lib/services";

type ServicePageLayoutProps = {
  service: ServiceDetail;
  children?: ReactNode;
};

export function ServicePageLayout({ service, children }: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen bg-air-black text-white">
      <header className="border-b border-air-border px-6 py-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <Link href="/" className="font-display text-lg font-bold text-air-red transition hover:text-air-red-glow">
            ← {BUSINESS.name}
          </Link>
          <Link href="/#services" className="text-sm text-air-muted transition hover:text-white">
            All Services
          </Link>
        </div>
      </header>

      <section className="relative min-h-[42vh] overflow-hidden border-b border-air-border">
        <Image src={service.image} alt={service.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-air-black via-air-black/70 to-air-black/30" />
        <div className="relative mx-auto flex min-h-[42vh] max-w-5xl items-end px-6 py-12 lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-air-red">Service</p>
            <h1 className="font-display max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">{service.title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-air-silver">{service.tagline}</p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="legal-prose space-y-12 text-air-silver leading-relaxed">
          <section>
            <h2 className="font-display mb-4 text-2xl font-bold text-white">Overview</h2>
            <p>{service.overview}</p>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-air-border bg-air-card p-6">
              <h2 className="font-display mb-4 text-xl font-bold text-white">Ideal For</h2>
              <ul className="list-disc space-y-2 pl-5">
                {service.idealFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-air-border bg-air-card p-6">
              <h2 className="font-display mb-4 text-xl font-bold text-white">Deliverables</h2>
              <ul className="list-disc space-y-2 pl-5">
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-display mb-6 text-2xl font-bold text-white">How It Works</h2>
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-air-border bg-air-card/60 p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-air-red">
                    Step {index + 1}
                  </p>
                  <h3 className="font-display mb-2 text-lg font-semibold text-white">{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display mb-6 text-2xl font-bold text-white">Common Questions</h2>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-air-border p-6">
                  <h3 className="font-display mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {children}

          <section className="rounded-2xl border border-air-red/30 bg-air-card p-8 text-center">
            <h2 className="font-display mb-3 text-2xl font-bold text-white">Ready for a Quote?</h2>
            <p className="mx-auto mb-6 max-w-xl text-air-silver">
              Tell us about your property, timeline, and deliverables. We typically respond within one business day.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={`/?service=${encodeURIComponent(service.title)}#contact`}
                className="rounded-full bg-air-red px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_24px_rgba(255,0,0,0.35)] transition hover:bg-air-red-glow"
              >
                Get Quote
              </Link>
              <Link
                href={`tel:${BUSINESS.phoneTel}`}
                className="rounded-full border border-air-border px-8 py-3 text-sm font-semibold text-air-silver transition hover:border-air-red/50 hover:text-white"
              >
                {BUSINESS.phone}
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-air-border px-6 py-8 text-center text-xs text-air-muted lg:px-8">
        <p>
          © {new Date().getFullYear()} {BUSINESS.name}.{" "}
          <Link href="/privacy" className="text-air-red hover:underline">
            Privacy
          </Link>
          {" · "}
          <Link href="/terms" className="text-air-red hover:underline">
            Terms
          </Link>
          {" · "}
          <CookiePreferencesButton className="text-air-red hover:underline" />
        </p>
      </footer>
    </div>
  );
}