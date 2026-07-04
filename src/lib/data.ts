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
    image: "/images/service-drone.jpg",
    icon: "camera",
  },
  {
    id: "real-estate",
    title: "Luxury Real Estate Aerial Tours",
    description:
      "Virtual property showcases for listings across Corona, Temecula, Palm Springs, and the Inland Empire — formatted for agent and brokerage marketing workflows.",
    image: "/images/service-realestate.jpg",
    icon: "home",
  },
  {
    id: "commercial",
    title: "Commercial & Event Videography",
    description:
      "Dynamic brand films, venue coverage, and event storytelling with smooth tracking shots and professional post-production.",
    image: "/images/service-commercial.jpg",
    icon: "film",
  },
  {
    id: "custom",
    title: "Custom Media Production",
    description:
      "Tailored aerial and ground-based photo/video packages for developers, hospitality, construction progress, and private clients.",
    image: "/images/service-custom.jpg",
    icon: "spark",
  },
] as const;

export const PORTFOLIO_ITEMS = [
  {
    id: "townhomes-corona",
    title: "Solar Townhomes — Community Overview",
    category: "Real Estate",
    image: "/images/aerial-townhomes-corona.jpg",
    location: "Corona, CA",
  },
  {
    id: "hillside-diamond-bar",
    title: "Hillside Neighborhood — Pool Estates",
    category: "Real Estate",
    image: "/images/aerial-hillside-neighborhood.jpg",
    location: "Diamond Bar, CA",
  },
  {
    id: "pathfinder",
    title: "Pathfinder — Suburban Aerial",
    category: "Real Estate",
    image: "/images/aerial-pathfinder-neighborhood.jpg",
    location: "Diamond Bar, CA",
  },
  {
    id: "estate-front",
    title: "Residential Estate — Front Aerial",
    category: "Real Estate",
    image: "/images/aerial-estate-front.jpg",
    location: "Yucaipa, CA",
  },
  {
    id: "graybar-campus",
    title: "Office Campus — Aerial Survey",
    category: "Commercial",
    image: "/images/aerial-graybar-campus.jpg",
    location: "Diamond Bar, CA",
  },
  {
    id: "cognizant-campus",
    title: "Corporate Campus — Overhead View",
    category: "Commercial",
    image: "/images/aerial-cognizant-campus.jpg",
    location: "Diamond Bar, CA",
  },
  {
    id: "park-trails",
    title: "Park Trails — Landscape Design",
    category: "Landscape",
    image: "/images/aerial-park-trails.jpg",
    location: "Corona, CA",
  },
  {
    id: "community-amenity",
    title: "Community Amenity Courtyard",
    category: "Events",
    image: "/images/aerial-community-amenity.jpg",
    location: "Corona, CA",
  },
  {
    id: "playground",
    title: "Playground & Recreation Area",
    category: "Events",
    image: "/images/aerial-playground-corona.jpg",
    location: "Corona, CA",
  },
  {
    id: "landscaping",
    title: "Community Landscaping — Aerial",
    category: "Landscape",
    image: "/images/aerial-landscaping-corona.jpg",
    location: "Corona, CA",
  },
  {
    id: "mountain-lake",
    title: "Mountain Lake — Aerial Vista",
    category: "Landscape",
    image: "/images/aerial-mountain-lake.jpg",
    location: "High Desert, CA",
  },
  {
    id: "carbon-canyon-video",
    title: "Carbon Canyon — Aerial Flythrough",
    category: "Commercial",
    image: "/images/video-carbon-canyon-poster.jpg",
    video: "/videos/carbon-canyon-aerial.mp4",
    location: "Carbon Canyon, CA",
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