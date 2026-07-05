import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageLayout } from "@/components/ContentPageLayout";
import { BUSINESS } from "@/lib/legal";
import { ALL_SERVICE_CITIES, SERVICE_AREA_INTRO, SERVICE_REGIONS } from "@/lib/service-areas";

const SITE_URL = "https://www.airmets.com";

export const metadata: Metadata = {
  title: "Service Area — Southern California Drone & Aerial Photography | Airmets",
  description:
    "Airmets serves Los Angeles, Orange County, the Inland Empire, San Diego, Ventura, Palm Springs, Joshua Tree, and cities across Southern California with FAA Part 107 aerial media.",
  keywords: [
    "drone photography Southern California",
    "aerial videography Los Angeles",
    "Inland Empire drone services",
    "Palm Springs aerial photography",
    "Corona real estate drone",
    "Orange County UAS",
    "San Diego drone photographer",
  ],
  alternates: { canonical: `${SITE_URL}/service-area` },
  openGraph: {
    title: "Southern California Service Area | Airmets",
    description:
      "Professional drone photography and aerial videography across Southern California cities and counties.",
    url: `${SITE_URL}/service-area`,
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BUSINESS.name,
  url: SITE_URL,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  areaServed: ALL_SERVICE_CITIES.map((city) => ({
    "@type": "City",
    name: city,
    containedInPlace: { "@type": "State", name: "California" },
  })),
  serviceType: [
    "Drone Aerial Photography",
    "Aerial Videography",
    "Real Estate Aerial Media",
    "Commercial UAS Production",
    "General Photography",
  ],
};

export default function ServiceAreaPage() {
  return (
    <ContentPageLayout
      eyebrow="Service Area"
      title="Southern California Aerial Media Coverage"
      subtitle={SERVICE_AREA_INTRO}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <section>
        <h2 className="font-display mb-4 text-2xl font-bold text-white">Counties &amp; Cities We Serve</h2>
        <p>
          Airmets regularly flies in the regions below. If your city is not listed,{" "}
          <Link href="/#contact" className="text-air-red hover:underline">
            contact us
          </Link>{" "}
          — many nearby locations are available with standard airspace and access planning.
        </p>
      </section>

      <div className="space-y-8">
        {SERVICE_REGIONS.map((region) => (
          <section key={region.id} id={region.id} className="rounded-2xl border border-air-border bg-air-card/50 p-6">
            <h3 className="font-display mb-2 text-xl font-bold text-white">{region.name}</h3>
            <p className="mb-4 text-sm text-air-muted">{region.description}</p>
            <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
              {region.cities.map((city) => (
                <li key={city} className="text-sm text-air-silver">
                  {city}, CA
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="rounded-2xl border border-air-red/30 bg-air-card p-8">
        <h2 className="font-display mb-3 text-2xl font-bold text-white">Book an Aerial Mission</h2>
        <p className="mb-6 text-air-silver">
          Share your property address, timeline, and deliverables. We confirm airspace feasibility and respond with
          next steps — usually within one business day.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#contact"
            className="touch-target inline-flex items-center justify-center rounded-full bg-air-red px-8 py-3 text-sm font-bold uppercase tracking-wider text-white"
          >
            Request a Quote
          </Link>
          <Link
            href="/services/drone-aerial"
            className="touch-target inline-flex items-center justify-center rounded-full border border-air-border px-8 py-3 text-sm font-semibold text-air-silver transition hover:border-air-red/50 hover:text-white"
          >
            Drone Services
          </Link>
        </div>
      </section>
    </ContentPageLayout>
  );
}