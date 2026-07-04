import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { getServiceById, SERVICE_DETAILS } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICE_DETAILS.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    return { title: "Service Not Found | Airmets" };
  }

  return {
    title: `${service.title} | Airmets`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    notFound();
  }

  return <ServicePageLayout service={service} />;
}