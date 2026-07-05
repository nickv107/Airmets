import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { BUSINESS } from "@/lib/legal";

type ContentPageLayoutProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children: ReactNode;
  backHref?: string;
  backLabel?: string;
};

export function ContentPageLayout({
  title,
  subtitle,
  eyebrow,
  children,
  backHref = "/",
  backLabel,
}: ContentPageLayoutProps) {
  return (
    <div className="min-h-screen bg-air-black text-white">
      <header className="safe-top border-b border-air-border px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <Link
            href={backHref}
            className="touch-target font-display inline-flex items-center text-base font-bold text-air-red transition hover:text-air-red-glow sm:text-lg"
          >
            ← {backLabel ?? BUSINESS.name}
          </Link>
          <Link
            href="/#contact"
            className="touch-target inline-flex items-center text-sm font-semibold text-air-silver transition hover:text-white"
          >
            Get Quote
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-air-red">{eyebrow}</p>
        )}
        <h1 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-3xl text-lg text-air-silver">{subtitle}</p>}
        <div className="legal-prose mt-10 space-y-8 text-air-silver leading-relaxed">{children}</div>
      </main>

      <SiteFooter />
    </div>
  );
}