import { SITE_MEDIA } from "@/lib/media";
import { SERVICE_DETAILS } from "@/lib/services";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = SERVICE_DETAILS.map((service) => ({
  id: service.id,
  title: service.title,
  description: service.description,
  image: service.image,
  icon: service.icon,
  href: `/services/${service.id}`,
}));

export const PORTFOLIO_ITEMS = [
  {
    id: "townhomes-corona",
    title: "Solar Townhomes — Community Overview",
    category: "Real Estate",
    image: SITE_MEDIA.portfolio.townhomesCorona,
    location: "Corona, CA",
  },
  {
    id: "diamond-bar-wide",
    title: "Hillside Streets — Neighborhood Aerial",
    category: "Real Estate",
    image: SITE_MEDIA.portfolio.diamondBarWide,
    location: "Diamond Bar, CA",
  },
  {
    id: "graybar-campus",
    title: "Office Campus — Aerial Survey",
    category: "Commercial",
    image: SITE_MEDIA.portfolio.graybarCampus,
    location: "Diamond Bar, CA",
  },
  {
    id: "playground",
    title: "Playground & Recreation Area",
    category: "Events",
    image: SITE_MEDIA.portfolio.playgroundCorona,
    location: "Corona, CA",
  },
  {
    id: "mountain-lake",
    title: "Mountain Lake — Aerial Vista",
    category: "Landscape",
    image: SITE_MEDIA.portfolio.mountainLake,
    location: "High Desert, CA",
  },
] as const;

export const PORTFOLIO_FILTERS = [
  "All",
  "Real Estate",
  "Commercial",
  "Events",
  "Landscape",
] as const;

export const TECH_SPECS = [
  { label: "Primary Aircraft", value: "DJI Air 3S" },
  { label: "Certification", value: "FAA Part 107 Certificated Remote Pilot" },
  { label: "Coverage Area", value: "Inland Empire · Corona · LA · Palm Springs · Joshua Tree" },
  { label: "Deliverables", value: "4K Video · RAW & Edited Photo Sets · MLS-Compatible Formats" },
] as const;

export const SERVICE_STANDARDS = [
  {
    title: "FAA-Compliant Operations",
    body: "Commercial flights are conducted under FAA Part 107 rules with safety-first planning, airspace checks, and weather assessments before every mission.",
  },
  {
    title: "Clear Project Scoping",
    body: "Each engagement includes defined deliverables, turnaround expectations, and flight constraints so clients know what to expect before shoot day.",
  },
  {
    title: "Professional Post-Production",
    body: "Edited photo and video packages are color-graded and exported in formats suited to web, social, and listing workflows.",
  },
] as const;

export const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;
