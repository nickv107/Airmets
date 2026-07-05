import Link from "next/link";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";
import { FOOTER_LINKS } from "@/lib/data";
import { BUSINESS } from "@/lib/legal";

export function SiteFooter() {
  return (
    <footer className="border-t border-air-border px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] text-center text-xs text-air-muted sm:px-6 lg:px-8">
      <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2" aria-label="Footer">
        {FOOTER_LINKS.map((link) => (
          <Link key={link.label} href={link.href} className="text-air-silver transition hover:text-white">
            {link.label}
          </Link>
        ))}
        <CookiePreferencesButton className="text-air-silver transition hover:text-white" />
      </nav>
      <p>
        © {new Date().getFullYear()} {BUSINESS.name}. Commercial UAS operations conducted under FAA Part 107 by a
        certificated remote pilot.
      </p>
    </footer>
  );
}