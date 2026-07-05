import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { BUSINESS } from "@/lib/legal";

type LegalPageProps = {
  title: string;
  effectiveDate: string;
  children: ReactNode;
};

export function LegalPage({ title, effectiveDate, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-air-black text-white">
      <header className="border-b border-air-border px-6 py-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link href="/" className="font-display text-lg font-bold text-air-red transition hover:text-air-red-glow">
            ← {BUSINESS.name}
          </Link>
          <p className="text-xs text-air-muted">Effective {effectiveDate}</p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <h1 className="font-display mb-10 text-3xl font-bold sm:text-4xl">{title}</h1>
        <div className="legal-prose space-y-6 text-air-silver leading-relaxed">{children}</div>
      </main>

      <SiteFooter />
    </div>
  );
}