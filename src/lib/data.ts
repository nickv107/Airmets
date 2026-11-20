import { SITE_MEDIA } from "@/lib/media";
import { SERVICE_DETAILS } from "@/lib/services";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Service Area", href: "/service-area" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
] as const;

const PRIMARY_SERVICE_IDS = [
  "aircraft-for-sale",
  "real-estate",
  "aviation-facilities",
  "drone-aerial",
] as const;

export const SERVICES = PRIMARY_SERVICE_IDS.map((id) => {
  const service = SERVICE_DETAILS.find((item) => item.id === id);
  if (!service) {
    throw new Error(`Missing primary service: ${id}`);
  }
  return {
    id: service.id,
    title: service.title,
    description: service.description,
    image: service.image,
    imageAlt: service.imageAlt,
    icon: service.icon,
    href: `/services/${service.id}`,
  };
});

export const QUOTE_SERVICES = [
  ...SERVICES.map((service) => service.title),
  "Website development (add-on)",
] as const;

export const PORTFOLIO_ITEMS = [
  {
    id: "townhomes-corona",
    title: "Townhome community",
    category: "Listings",
    image: SITE_MEDIA.portfolio.townhomesCorona,
    location: "Corona, CA",
  },
  {
    id: "diamond-bar-homes",
    title: "Hillside homes and pools",
    category: "Listings",
    image: SITE_MEDIA.portfolio.diamondBarHomes,
    location: "Diamond Bar, CA",
  },
  {
    id: "diamond-bar-wide",
    title: "Hillside streets",
    category: "Listings",
    image: SITE_MEDIA.portfolio.diamondBarWide,
    location: "Diamond Bar, CA",
  },
  {
    id: "planned-community",
    title: "Planned community",
    category: "Listings",
    image: SITE_MEDIA.portfolio.plannedCommunity,
    location: "Inland Empire, CA",
  },
  {
    id: "valley-grid",
    title: "Residential grid",
    category: "Listings",
    image: SITE_MEDIA.portfolio.valleyGrid,
    location: "Inland Empire, CA",
  },
  {
    id: "curved-streets",
    title: "Neighborhood streets",
    category: "Listings",
    image: SITE_MEDIA.portfolio.curvedStreets,
    location: "Southern California",
  },
  {
    id: "graybar-campus",
    title: "Office campus",
    category: "Aerial",
    image: SITE_MEDIA.portfolio.graybarCampus,
    location: "Diamond Bar, CA",
  },
  {
    id: "playground",
    title: "Community recreation area",
    category: "Aerial",
    image: SITE_MEDIA.portfolio.playgroundCorona,
    location: "Corona, CA",
  },
  {
    id: "park-pathways",
    title: "Community park",
    category: "Aerial",
    image: SITE_MEDIA.portfolio.parkPathways,
    location: "Southern California",
  },
  {
    id: "mountain-lake",
    title: "High-desert aerial",
    category: "Aerial",
    image: SITE_MEDIA.portfolio.mountainLake,
    location: "High Desert, CA",
  },
] as const;

export const PORTFOLIO_FILTERS = ["All", "Listings", "Aerial"] as const;

export const CASE_STUDIES = [
  {
    title: "Aircraft listing",
    body: "A written case study is added here after the owner approves public use. Tail numbers and model names stay off the site.",
  },
  {
    title: "Home listing",
    body: "A written case study is added here after the agent approves public use of the address and the photos.",
  },
  {
    title: "FBO or hangar",
    body: "A written case study is added here after the facility approves public use of the spaces.",
  },
] as const;

export const TECH_SPECS = [
  { label: "Flight Platform", value: "Professional Commercial UAS" },
  { label: "Certification", value: "FAA Part 107 Certificated Remote Pilot" },
  { label: "Coverage Area", value: "Inland Empire · Corona · LA · Palm Springs · Joshua Tree · Temecula" },
  { label: "Deliverables", value: "MLS-ready stills · 4K aerial video · Aircraft and facility sets" },
] as const;

export const SERVICE_STANDARDS = [
  {
    title: "FAA-Compliant Operations",
    body: "Commercial flights are conducted under FAA Part 107 rules with safety-first planning, airspace checks, and weather assessments before every mission.",
  },
  {
    title: "Clear Project Scoping",
    body: "Each engagement includes defined deliverables, turnaround expectations, and location or flight constraints so clients know what to expect before shoot day.",
  },
  {
    title: "Professional Post-Production",
    body: "Edited photo and video packages are color-graded and exported in formats suited to web, social, and listing workflows.",
  },
] as const;

export const FOOTER_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Service Area", href: "/service-area" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;
