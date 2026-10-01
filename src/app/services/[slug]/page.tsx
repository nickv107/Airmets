import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { BUSINESS } from "@/lib/legal";
import { getServiceById, SERVICE_DETAILS, type ServiceDetail } from "@/lib/services";

const SITE_URL = "https://www.airmets.com";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICE_DETAILS.map((service) => ({ slug: service.id }));
}

function serviceUrl(service: ServiceDetail) {
  return `${SITE_URL}/services/${service.id}`;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const title = service.seoTitle ?? service.title;
  const description = service.seoDescription ?? service.tagline;
  const url = serviceUrl(service);

  return {
    title,
    description,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: service.image, alt: service.title }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    notFound();
  }

  const url = serviceUrl(service);
  const description = service.seoDescription ?? service.overview;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.seoTitle ?? service.title,
    serviceType: service.title,
    description,
    url,
    image: `${SITE_URL}${service.image}`,
    provider: {
      "@type": "ProfessionalService",
      name: BUSINESS.name,
      url: SITE_URL,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      areaServed: { "@type": "AdministrativeArea", name: "Southern California" },
    },
    areaServed: { "@type": "AdministrativeArea", name: "Southern California" },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <ServicePageLayout service={service} />
    </>
  );
}