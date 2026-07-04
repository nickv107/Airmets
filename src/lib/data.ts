export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    id: "drone-aerial",
    title: "Drone Aerial Photography & Videography",
    description:
      "Cinematic 4K aerial capture with precision flight planning, color-graded delivery, and web-optimized assets for marketing campaigns.",
    image: "/images/hero-mansion.jpg",
    icon: "camera",
  },
  {
    id: "real-estate",
    title: "Luxury Real Estate Aerial Tours",
    description:
      "Virtual property showcases for listings across Corona, Temecula, Palm Springs, and the Inland Empire — formatted for agent and brokerage marketing workflows.",
    image: "/images/vineyards.jpg",
    icon: "home",
  },
  {
    id: "commercial",
    title: "Commercial & Event Videography",
    description:
      "Dynamic brand films, venue coverage, and event storytelling with smooth tracking shots and professional post-production.",
    image: "/images/event-venue.jpg",
    icon: "film",
  },
  {
    id: "custom",
    title: "Custom Media Production",
    description:
      "Tailored aerial and ground-based photo/video packages for developers, hospitality, construction progress, and private clients.",
    image: "/images/coastal-cliff.jpg",
    icon: "spark",
  },
] as const;

export const PORTFOLIO_ITEMS = [
  {
    id: "mansion",
    title: "Hillside Estate — Golden Hour",
    category: "Real Estate",
    image: "/images/hero-mansion.jpg",
    location: "Southern California (sample)",
  },
  {
    id: "joshua",
    title: "Joshua Tree — Twilight",
    category: "Landscape",
    image: "/images/joshua-tree.jpg",
    location: "Joshua Tree, CA (sample)",
  },
  {
    id: "la",
    title: "LA Skyline — Night Flight",
    category: "Commercial",
    image: "/images/la-night.jpg",
    location: "Los Angeles, CA (sample)",
  },
  {
    id: "vineyards",
    title: "Temecula Vineyards — Sunrise",
    category: "Real Estate",
    image: "/images/vineyards.jpg",
    location: "Temecula, CA (sample)",
  },
  {
    id: "coastal",
    title: "Coastal Cliff Residence",
    category: "Real Estate",
    image: "/images/coastal-cliff.jpg",
    location: "SoCal Coast (sample)",
  },
  {
    id: "event",
    title: "Desert Venue — Sunset Event",
    category: "Events",
    image: "/images/event-venue.jpg",
    location: "Palm Springs, CA (sample)",
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