import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/data";
import { BUSINESS } from "@/lib/legal";

export function Footer() {
  return (
    <footer className="border-t border-air-border bg-air-black px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <Image src="/logo-full.png" alt="Airmets" width={140} height={40} className="h-8 w-auto" />
          <p className="text-xs text-air-muted">{BUSINESS.tagline}</p>
          <p className="text-xs text-air-muted">{BUSINESS.region}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-air-silver transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-2 sm:items-end">
          <a
            href={`mailto:${BUSINESS.email}`}
            className="text-sm text-air-silver transition hover:text-air-red"
          >
            {BUSINESS.email}
          </a>
          <a
            href={`mailto:${BUSINESS.email}?subject=${encodeURIComponent("Accessibility request")}`}
            className="text-xs text-air-muted transition hover:text-white"
          >
            Accessibility inquiries
          </a>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-7xl text-center text-xs leading-relaxed text-air-muted">
        © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. Commercial UAS operations conducted
        under FAA Part 107 by a certificated remote pilot. Sample portfolio imagery is for demonstration unless
        otherwise noted.
      </p>
    </footer>
  );
}