import { SITE_MEDIA } from "@/lib/media";

export type ServiceDetail = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: "camera" | "home" | "film" | "spark" | "lens";
  overview: string;
  idealFor: string[];
  deliverables: string[];
  process: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "drone-aerial",
    title: "Drone Aerial Photography & Videography",
    tagline: "Cinematic 4K capture for campaigns that need altitude and impact.",
    description:
      "Cinematic 4K aerial capture with precision flight planning, color-graded delivery, and web-optimized assets for marketing campaigns.",
    image: SITE_MEDIA.services.drone,
    icon: "camera",
    overview:
      "Airmets delivers FAA Part 107–compliant drone photography and videography for brands, developers, and production teams that need elevated perspectives without compromising safety or quality. Every mission is planned around your location, airspace restrictions, and creative goals — from single hero shots to full campaign asset packages.",
    idealFor: [
      "Marketing teams launching location-based campaigns",
      "Developers documenting sites before and during construction",
      "Hospitality and venue operators showcasing property scale",
      "Agencies needing web-ready photo and video deliverables",
    ],
    deliverables: [
      "4K HDR aerial video (edited and color-graded)",
      "High-resolution aerial photo sets (RAW + edited JPEG)",
      "Web- and social-optimized export formats",
      "Flight planning summary and airspace compliance notes",
      "Optional vertical crops for reels and short-form content",
    ],
    process: [
      {
        title: "Discovery & Location Review",
        body: "We review your property address, creative brief, and timeline, then check FAA airspace, local ordinances, and access requirements before confirming flight feasibility.",
      },
      {
        title: "Pre-Flight Planning",
        body: "We coordinate LAANC or other FAA authorizations when required, confirm weather windows, and align shot lists so shoot day runs efficiently.",
      },
      {
        title: "Capture Day",
        body: "A certificated remote pilot executes the mission on a DJI Air 3S with safety-first procedures, capturing photo and video sequences per your approved shot list.",
      },
      {
        title: "Post-Production & Delivery",
        body: "Edited assets are color-graded, exported in your requested formats, and delivered through a secure download link — typically within agreed turnaround windows.",
      },
    ],
    faqs: [
      {
        question: "Do you fly in controlled airspace near airports?",
        answer:
          "Yes, when FAA authorization is available. We handle LAANC requests where applicable and will advise if a location requires additional lead time or cannot be flown legally.",
      },
      {
        question: "What weather cancels a shoot?",
        answer:
          "High winds, precipitation, low visibility, or conditions that affect aircraft safety or image quality may require rescheduling. We communicate early if a weather hold is likely.",
      },
    ],
  },
  {
    id: "real-estate",
    title: "Luxury Real Estate Aerial Tours",
    tagline: "Listing media that shows context, curb appeal, and neighborhood lifestyle.",
    description:
      "Virtual property showcases for listings across Corona, Temecula, Palm Springs, and the Inland Empire — formatted for agent and brokerage marketing workflows.",
    image: SITE_MEDIA.services.realEstate,
    icon: "home",
    overview:
      "Luxury listings deserve more than ground-level photos. Airmets creates aerial photo and video packages that highlight lot position, architectural scale, nearby amenities, and the surrounding neighborhood — helping buyers understand value before they schedule a showing.",
    idealFor: [
      "Luxury agents marketing hillside estates and view properties",
      "Brokerages needing consistent aerial branding across listings",
      "New construction and model home marketing",
      "Property managers showcasing community amenities",
    ],
    deliverables: [
      "Exterior aerial photo sets (multiple angles and elevations)",
      "Cinematic listing video with smooth orbit and reveal shots",
      "MLS-compatible still image exports where supported by your board",
      "Social-ready vertical clips for Instagram and TikTok",
      "Optional twilight or golden-hour capture when scheduled in advance",
    ],
    process: [
      {
        title: "Listing Intake",
        body: "Share the property address, listing status, HOA or community rules, and your MLS or brokerage delivery requirements so we align formats from the start.",
      },
      {
        title: "Shot List & Access",
        body: "We plan exterior coverage that respects privacy boundaries and highlights selling features — pools, views, lot size, and neighborhood context.",
      },
      {
        title: "On-Site Capture",
        body: "Flights are conducted with minimal on-site disruption. We coordinate with agents or sellers for property access and timing.",
      },
      {
        title: "Agent-Ready Delivery",
        body: "You receive edited media packaged for listing uploads, email campaigns, and social promotion — with fast turnaround for active listings.",
      },
    ],
    faqs: [
      {
        question: "Can you fly over gated communities or HOA properties?",
        answer:
          "Yes, with proper access permission from the seller, agent, or HOA. Share any community drone policies when booking so we can plan accordingly.",
      },
      {
        question: "Will my MLS accept the file sizes you deliver?",
        answer:
          "We export MLS-friendly dimensions and compression when your board supports it. Tell us your MLS name and we will match their published media guidelines.",
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial & Event Videography",
    tagline: "Brand films, venues, and events captured with dynamic aerial motion.",
    description:
      "Dynamic brand films, venue coverage, and event storytelling with smooth tracking shots and professional post-production.",
    image: SITE_MEDIA.services.commercial,
    icon: "film",
    overview:
      "From corporate campuses and retail centers to community events and venue marketing, Airmets combines aerial and ground-based capture to tell a cohesive visual story. We focus on smooth cinematic motion, clean composition, and deliverables your marketing team can deploy immediately.",
    idealFor: [
      "Commercial properties and business parks",
      "Hotels, resorts, and event venues",
      "Community openings, fundraisers, and outdoor events",
      "Brands needing b-roll for ads and website hero content",
    ],
    deliverables: [
      "Edited hero film (30–90 seconds, platform-ready)",
      "Extended b-roll selects for internal marketing teams",
      "Aerial stills for print, web, and presentation decks",
      "Logo-free architectural and environmental coverage",
      "Optional D-Log / flat profile source files on request",
    ],
    process: [
      {
        title: "Creative Brief",
        body: "We align on story goals, key messages, locations to feature, and any brand guidelines or shot restrictions before scheduling.",
      },
      {
        title: "Logistics & Permits",
        body: "For events and public venues, we confirm crowd safety buffers, property permissions, and any film permits required by the city or venue operator.",
      },
      {
        title: "Production",
        body: "Our team captures planned aerial sequences and supporting ground angles, adapting to live event timing or business-hour access windows.",
      },
      {
        title: "Edit & Review",
        body: "You receive a polished cut with licensed-music-ready structure (music licensing is client-provided unless otherwise agreed). One revision round is included for standard packages.",
      },
    ],
    faqs: [
      {
        question: "Can you film during a live event with people present?",
        answer:
          "Yes, with venue permission. We maintain safe standoff distances and follow FAA and venue safety rules. We do not capture identifiable individuals for promotional use without appropriate releases when required.",
      },
      {
        question: "Do you provide on-site ground videography too?",
        answer:
          "Aerial is our specialty, but we can coordinate hybrid packages that combine drone and ground capture for a unified deliverable. Ask when requesting a quote.",
      },
    ],
  },
  {
    id: "custom",
    title: "Custom Media Production",
    tagline: "Flexible aerial packages built around your timeline and deliverables.",
    description:
      "Tailored aerial and ground-based photo/video packages for developers, hospitality, construction progress, and private clients.",
    image: SITE_MEDIA.services.custom,
    icon: "spark",
    overview:
      "Not every project fits a standard package. Airmets builds custom aerial media workflows for construction progress documentation, multi-site portfolios, recurring flyovers, and private clients who need a dedicated production partner across several locations in Southern California.",
    idealFor: [
      "Construction and development progress tracking",
      "Multi-property portfolio shoots in one production day",
      "Hospitality groups needing consistent visual language",
      "Private landowners requesting discreet, professional capture",
    ],
    deliverables: [
      "Custom shot lists and recurring flight schedules",
      "Progress comparison sets (date-stamped aerial sequences)",
      "Branded export presets for your internal teams",
      "Priority turnaround options for time-sensitive projects",
      "Volume pricing for multi-site or retainer engagements",
    ],
    process: [
      {
        title: "Scope Workshop",
        body: "We document every location, deliverable format, revision expectation, and stakeholder involved so the proposal reflects real production requirements.",
      },
      {
        title: "Proposal & Schedule",
        body: "You receive a written scope with pricing, flight dates, and delivery milestones. Retainer and multi-month documentation plans are available.",
      },
      {
        title: "Ongoing Production",
        body: "For repeat flyovers, we match altitude, heading, and framing so progress comparisons stay visually consistent month over month.",
      },
      {
        title: "Account Delivery",
        body: "Assets are organized by site and date in a structure your project managers or marketing team can navigate without extra sorting.",
      },
    ],
    faqs: [
      {
        question: "Can you service multiple cities in one day?",
        answer:
          "Often yes, when drive times and airspace rules allow. Share all addresses during intake and we will propose an efficient routing and schedule.",
      },
      {
        question: "Do you sign NDAs for private estates or unreleased developments?",
        answer:
          "Yes. Confidential projects are welcome. Note any NDA or embargo requirements when you submit a quote request.",
      },
    ],
  },
  {
    id: "general-photography",
    title: "General Photography",
    tagline: "Ground-based DSLR capture for portraits, landscapes, travel, and brand storytelling.",
    description:
      "Professional on-location photography with full-frame DSLR and mirrorless cameras — portraits, landscapes, architecture, and editorial coverage beyond the drone.",
    image: SITE_MEDIA.services.generalPhotography,
    icon: "lens",
    overview:
      "Airmets extends beyond aerial work with ground-based photography for clients who need polished still imagery on location. From maternity and portrait sessions to travel landscapes and architectural coverage, we deliver color-graded, web-ready files with the same production standards as our drone missions.",
    idealFor: [
      "Portrait, maternity, and lifestyle sessions on location",
      "Travel and landscape photography for brands and publications",
      "Architectural and heritage site documentation",
      "Marketing teams needing both aerial and ground photo packages",
    ],
    deliverables: [
      "High-resolution edited JPEG sets (web and print-ready)",
      "RAW source files on request",
      "Color-graded exports matched to your brand palette",
      "Vertical and horizontal crops for social and web layouts",
      "Optional same-day shoot combining drone and ground coverage",
    ],
    process: [
      {
        title: "Creative Brief",
        body: "We align on locations, wardrobe or styling notes, shot list priorities, and how stills will be used across web, print, and social channels.",
      },
      {
        title: "Location Scout",
        body: "We confirm access, golden-hour timing, permits when required, and backup indoor or covered options for weather-sensitive sessions.",
      },
      {
        title: "On-Site Capture",
        body: "Using professional DSLR and mirrorless bodies with a range of focal lengths, we capture the compositions and lighting your project needs.",
      },
      {
        title: "Edit & Delivery",
        body: "Selected images are culled, color-graded, and delivered in organized folders with filenames suited to your workflow.",
      },
    ],
    faqs: [
      {
        question: "Can you combine drone and ground photography in one booking?",
        answer:
          "Yes. Many clients book a unified production day so aerial and ground stills share consistent lighting, location access, and delivery timelines.",
      },
      {
        question: "Do you shoot events or interiors?",
        answer:
          "We focus on on-location exteriors, portraits, landscapes, and architectural coverage. Share your venue or event details and we will confirm fit during intake.",
      },
    ],
  },
];

export const SERVICE_BY_ID = Object.fromEntries(
  SERVICE_DETAILS.map((service) => [service.id, service]),
) as Record<string, ServiceDetail>;

export function getServiceById(id: string) {
  return SERVICE_BY_ID[id] ?? null;
}