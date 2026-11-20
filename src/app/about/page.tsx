import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/SiteFrame";
import { SERVICES } from "@/lib/data";
import { BUSINESS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Airmets is a Southern California studio for aircraft listing photography, real estate listing media, aviation facilities, and FAA Part 107 drone work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SiteFrame>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-air-red">About</p>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">The studio behind the four services</h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-air-silver">
          <p>
            Airmets photographs aircraft that are for sale, homes and estates that are going on the market, and
            the FBOs, hangars, flight schools, and shops those aircraft use. The work is based near Corona and
            covers the Inland Empire, Los Angeles, Palm Springs, Joshua Tree, Temecula, and the rest of the
            cities on the service-area page.
          </p>
          <p>
            Nick Valmores leads the studio. Listing photography and the drone flight are planned by the same
            person, so an agent or a broker is not splitting one job between a ground photographer and a separate
            aerial vendor.
          </p>
          <p>
            Commercial drone flights are conducted under FAA Part 107 by a certificated remote pilot. The
            certificate is the baseline. Airspace, airport permission, weather, and access still decide whether
            a flight happens on a given day. If a ramp or a neighborhood cannot be flown, the job stays on the
            ground and the quote says so before the shoot.
          </p>
          <p>
            Prices are not posted as a rate card. Each quote names the visit, what files you receive, and what
            is separate, including interiors, a second visit, and air-to-air. You hear back usually within one
            business day.
          </p>
        </div>

        <h2 className="font-display mt-14 text-2xl font-bold">What we shoot</h2>
        <ul className="mt-6 space-y-3">
          {SERVICES.map((service) => (
            <li key={service.id}>
              <Link href={service.href} className="text-air-red hover:underline">
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-air-muted">
          A marketing website for those photos is available as an add-on. It is not a primary service.{" "}
          <Link href="/services/website-development" className="text-air-red hover:underline">
            See website development
          </Link>
          .
        </p>

        <div className="mt-14 rounded-2xl border border-air-red/30 bg-air-card p-8">
          <h2 className="font-display text-2xl font-bold">Request a quote</h2>
          <p className="mt-3 text-air-silver">
            Call {BUSINESS.phone} or send the airport or address, the date, and the scope.
          </p>
          <Link
            href="/contact"
            className="touch-target mt-6 inline-flex items-center justify-center rounded-full bg-air-red px-8 py-3 text-sm font-bold uppercase tracking-wider text-white"
          >
            Request a quote
          </Link>
        </div>
      </article>
    </SiteFrame>
  );
}
