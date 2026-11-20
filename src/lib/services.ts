import { SITE_MEDIA } from "@/lib/media";

export type ServiceDetail = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: "camera" | "home" | "film" | "spark" | "lens" | "code" | "plane" | "frame" | "hangar";
  imageAlt?: string;
  overview: string;
  idealFor: string[];
  deliverables: string[];
  process: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  quoteTitle?: string;
  quoteBody?: string;
  related?: { href: string; label: string }[];
  /** Shown in the main menu, homepage, and quote form. */
  primary?: boolean;
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "drone-aerial",
    title: "Drone Aerial Photography & Videography",
    primary: true,
    tagline: "The aerial layer for aircraft, listings, and facilities, flown only when the site allows it.",
    description:
      "FAA Part 107 drone stills and 4K video that support the listing and facility work, plus standalone aerials when a Southern California site can be flown.",
    image: SITE_MEDIA.services.drone,
    icon: "camera",
    overview:
      "Drone work at Airmets supports the aircraft, listing, and facility jobs. It is also available on its own when a Southern California site can be flown. Every flight is planned under FAA Part 107, with the airspace check finished before the day is confirmed. If the location cannot be flown, we say so before you book.",
    idealFor: [
      "Aircraft, listing, and facility clients who need an aerial pass on the same job",
      "Developers documenting a site from above",
      "Agents who need lot, view, and neighborhood context",
      "Teams who need 4K aerial video and stills for the web",
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
        body: "A certificated remote pilot executes the mission with safety-first procedures, capturing photo and video sequences per your approved shot list.",
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
    related: [
      { href: "/services/aircraft-for-sale", label: "Aircraft for sale photography" },
      { href: "/services/aviation-facilities", label: "FBO, hangar, and flight school media" },
      { href: "/services/real-estate", label: "Real estate listing media" },
    ],
  },
  {
    id: "aircraft-for-sale",
    primary: true,
    title: "Aircraft for Sale Photography",
    seoTitle: "Aircraft for Sale Photography in Southern California",
    tagline: "Ramp and hangar listing photos that show the aircraft the way a buyer needs to see it.",
    seoDescription:
      "Aircraft for sale photography in Southern California. Exterior, cabin, flight deck, and detail sets for brokers, owners, and flight departments.",
    description:
      "Listing photography for aircraft on the ramp or in the hangar — exterior, cabin, flight deck, and detail coverage prepared for broker pages and sales listings.",
    keywords: [
      "aircraft for sale photography",
      "aircraft listing photographer Southern California",
      "aircraft broker photography",
      "cabin and cockpit photography",
      "Inland Empire aircraft photographer",
      "Chino aircraft photography",
    ],
    image: SITE_MEDIA.services.aircraftForSale,
    imageAlt: "Sunrise above a cloud layer",
    icon: "plane",
    overview:
      "Airmets photographs aircraft that are for sale or due for a marketing refresh. A standard session is shot from the ground, on the ramp or inside the hangar, with permission from the owner, FBO, or airport. Coverage walks a buyer from the first exterior angle through the cabin, flight deck, and the details that support the listing. A drone orbit is added only when FAA authorization and the airport both allow it.",
    idealFor: [
      "Aircraft brokers preparing a listing or a fleet refresh",
      "Owners selling a personal or business aircraft",
      "Flight schools and clubs marketing trainers",
      "Charter operators and flight departments updating fleet photos",
    ],
    deliverables: [
      "Exterior walkaround stills, edited and sized for broker pages and print",
      "Cabin, galley, and seating stills when that scope is booked",
      "Flight-deck stills, with avionics powered when you want them shown",
      "Detail stills of paint, materials, and the areas you ask us to include",
      "Web files and vertical social crops from the same edit",
    ],
    process: [
      {
        title: "Listing Intake",
        body: "Share the airport, the aircraft's availability window, who grants ramp or hangar access, and whether the set is exterior only or a full interior and exterior package.",
      },
      {
        title: "Access & Prep",
        body: "We confirm FBO or airport rules before the day. You receive a short prep list: clean exterior, cabin staged, covers and clutter out of the hero angles, and a plan for powering the panel.",
      },
      {
        title: "On-Site Capture",
        body: "We work around the ramp schedule and photograph the agreed shot list from the ground. If a drone flight was cleared in advance, that pass is flown under Part 107 with the required authorization.",
      },
      {
        title: "Listing Delivery",
        body: "Edited stills are color-graded and delivered in a set your broker page, listing site, and print pieces can use. Turnaround is stated in the proposal.",
      },
    ],
    faqs: [
      {
        question: "Can you fly a drone on the airport?",
        answer:
          "Only when the FAA and the airport both allow it. Many ramps sit in controlled airspace where a drone is not the right tool. The listing set is planned as ground photography, and a drone pass is an add-on we confirm before shoot day.",
      },
      {
        question: "Do you shoot air-to-air?",
        answer:
          "A standard session stays on the ground. Air-to-air needs another aircraft, a formation plan, and its own quote. Tell us if you need it and we will say whether that production is a fit.",
      },
      {
        question: "What has to be ready before you arrive?",
        answer:
          "A clean exterior, the cabin staged the way you want it shown, covers and loose items moved out of the hero angles, and someone who can power the avionics for flight-deck photos. We send the prep list with the proposal.",
      },
      {
        question: "Will you name the aircraft type on your website?",
        answer:
          "No. Portfolio use is separate from the listing delivery and only happens with your written permission. We do not publish tail numbers or model names from a client aircraft.",
      },
    ],
    quoteTitle: "Ready to photograph an aircraft?",
    quoteBody:
      "Share the airport, when the aircraft is available, and whether you need exterior, cabin, or both. We typically respond within one business day.",
    related: [
      { href: "/services/aviation-facilities", label: "FBO, hangar, and flight school media" },
      { href: "/services/drone-aerial", label: "Drone aerial photography" },
      { href: "/services/website-development", label: "Website for the photos (add-on)" },
      { href: "/contact", label: "Request a quote" },
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate Listing Media",
    primary: true,
    seoTitle: "Real Estate Listing Media in Southern California",
    tagline: "Ground listing photos and aerial coverage, booked as one visit when the address allows both.",
    seoDescription:
      "Real estate listing media in Southern California. Interiors, exteriors, twilight, and FAA Part 107 aerial stills and 4K video for agents and builders.",
    description:
      "Interior, exterior, and twilight listing photos, plus aerial stills and 4K video when the property can be flown.",
    keywords: [
      "real estate photographer Inland Empire",
      "listing photography Corona",
      "luxury home photographer Temecula",
      "twilight real estate photography",
      "real estate drone Los Angeles",
      "real estate photography Palm Springs",
    ],
    image: SITE_MEDIA.services.realEstate,
    imageAlt: "Estate frontage from the air",
    icon: "home",
    overview:
      "Airmets builds the listing set from the ground and from the air. Ground photos cover interiors, exteriors, and the details a buyer uses to judge the house. Twilight is available when it is on the schedule. Aerial stills and a short 4K clip show the lot, the approach, and the surroundings, and they are included only after the airspace check says the address can be flown. One booking can cover both when daylight and access allow.",
    idealFor: [
      "Agents preparing a listing for the MLS and their own marketing",
      "Brokerages that want interiors and aerials from one team",
      "View properties that need twilight",
      "Builders documenting a model or a new release",
    ],
    deliverables: [
      "Edited interior and exterior stills, named for listing upload",
      "Detail stills of the rooms and finishes you flag",
      "Twilight exteriors when scheduled",
      "Aerial stills and a short 4K listing clip when the address can be flown",
      "MLS-sized exports when you tell us which board you use",
      "Vertical crops for agent posts",
    ],
    process: [
      {
        title: "Listing Intake",
        body: "Share the address, the go-live date, occupancy, and whether you want interiors, twilight, aerials, or all three. Note HOA rules and any rooms that should stay out of frame.",
      },
      {
        title: "Shot Plan",
        body: "We plan the ground set around the light. If aerial is requested, we check airspace before we confirm a flight, so the photo day does not depend on a flight that cannot happen.",
      },
      {
        title: "On-Site Capture",
        body: "Ground photos are made with professional cameras and lighting suited to the rooms. A cleared drone pass is flown under Part 107 during the same visit when the schedule allows.",
      },
      {
        title: "Agent-Ready Delivery",
        body: "You receive a culled, color-graded set for the listing, email, and social. The proposal states the turnaround before you book.",
      },
    ],
    faqs: [
      {
        question: "Is the aerial a separate service?",
        answer:
          "No. Ground photos and aerial coverage are one listing offer. The drone portion is confirmed only when FAA rules and the property allow it. If they do not, you still receive the ground set.",
      },
      {
        question: "Do you photograph twilight?",
        answer:
          "Yes, when it is on the schedule. Twilight needs a later arrival and a clear weather window, so request it when you book.",
      },
      {
        question: "Will my MLS accept the files?",
        answer:
          "Tell us which MLS you use and we export sizes and compression that match that board's published photo rules. We do not promise that a board will accept a file.",
      },
      {
        question: "Can interiors and the drone happen on one visit?",
        answer:
          "Often yes, when daylight and airspace allow. We confirm the flight before shoot day.",
      },
    ],
    quoteTitle: "Ready to photograph a listing?",
    quoteBody:
      "Share the address, the listing date, and whether you want interiors, twilight, or aerials. We reply with a written quote, usually within one business day.",
    related: [
      { href: "/services/drone-aerial", label: "Drone aerial photography" },
      { href: "/services/website-development", label: "Website for the photos (add-on)" },
      { href: "/service-area", label: "Southern California service area" },
      { href: "/contact", label: "Request a quote" },
    ],
  },
  {
    id: "aviation-facilities",
    title: "FBO, Hangar & Flight School Media",
    primary: true,
    seoTitle: "FBO and Hangar Photography in Southern California",
    tagline: "Facility photography for the ramp, the lobby, the training floor, and the shop.",
    seoDescription:
      "Photography for FBOs, hangars, flight schools, and maintenance shops across Southern California. Ramp, lobby, classroom, and shop coverage.",
    description:
      "Photography for FBOs, hangars, flight schools, and maintenance shops, including lobbies, ramps, and training or shop spaces.",
    keywords: [
      "FBO photography",
      "hangar photography Southern California",
      "flight school photographer",
      "aviation facility photography",
      "aircraft maintenance shop photos",
      "Chino FBO photographer",
    ],
    image: SITE_MEDIA.services.aviationFacilities,
    imageAlt: "Shop buildings and a work yard below green hills",
    icon: "hangar",
    overview:
      "Airmets photographs aviation businesses that need current pictures of the place itself. That includes FBO lobbies and ramps, hangar interiors, flight-school classrooms and aircraft lines, and maintenance shops. The work is planned around badges, escorts, and the parts of the field that are off limits. Drone coverage of an airport is included only when FAA authorization and the airport both allow it. Most facility sessions are ground photography for that reason.",
    idealFor: [
      "FBOs updating a website, brochure, or broker presentation",
      "Hangar and flight-department operators",
      "Flight schools marketing training, aircraft, and facilities",
      "Maintenance shops documenting the floor, the team space, and the ramp",
    ],
    deliverables: [
      "Ramp and exterior stills",
      "Lobby, office, and customer-area stills",
      "Hangar, classroom, or shop-floor stills, as access allows",
      "Web, print, and social crops from the same edit",
      "Drone stills or 4K only when the FAA and the airport both allow the flight",
    ],
    process: [
      {
        title: "Facility Intake",
        body: "Share the airport or address, the spaces to cover, and who will escort the shoot. Note badge rules, customer privacy, and any aircraft that must stay out of frame.",
      },
      {
        title: "Access Plan",
        body: "We confirm what can be photographed and whether a drone flight is even legal at that field. If it is not, the proposal stays on the ground and says so.",
      },
      {
        title: "On-Site Capture",
        body: "We work inside the escort and the operating schedule, covering the agreed spaces without blocking customers, students, or maintenance.",
      },
      {
        title: "Delivery",
        body: "Edited photos are delivered by location and space so a website, listing, or sales deck can use them without a second sort.",
      },
    ],
    faqs: [
      {
        question: "Can you photograph inside a hangar or FBO?",
        answer:
          "Yes, with access from the facility. Tell us about badges, escorts, and rooms or ramps that are off limits when you request the quote.",
      },
      {
        question: "Can you fly a drone over the airport?",
        answer:
          "Only with FAA authorization and airport permission. Many of these projects are ground sessions because the field cannot be flown. We answer that before shoot day.",
      },
      {
        question: "Do you photograph flight schools and maintenance shops?",
        answer:
          "Yes. A visit can cover the ramp, lobby, training space, shop floor, and exterior when those areas are cleared in advance.",
      },
      {
        question: "Can aircraft on the ramp be included?",
        answer:
          "Only with permission from the operator of each aircraft. If a tail number or a specific airplane should not appear, say so in the shot list and we will frame around it.",
      },
    ],
    quoteTitle: "Ready to photograph your facility?",
    quoteBody:
      "Tell us the airport or address, the spaces you want covered, and any badge or escort requirements. We typically respond within one business day.",
    related: [
      { href: "/services/aircraft-for-sale", label: "Aircraft for sale photography" },
      { href: "/services/drone-aerial", label: "Drone aerial photography" },
      { href: "/services/website-development", label: "Website for the photos (add-on)" },
      { href: "/contact", label: "Request a quote" },
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
        question: "Do you shoot listing interiors or aircraft?",
        answer:
          "Listing interiors, exteriors, and twilight are covered under real estate photography. Aircraft listing photos are covered under aircraft for sale photography. General photography stays with portraits, landscapes, and on-location editorial work.",
      },
    ],
  },
  {
    id: "website-development",
    title: "Website Development",
    seoTitle: "Website Development in Southern California",
    tagline: "Custom marketing websites built to load fast and show up in search.",
    seoDescription:
      "Website development for Southern California businesses. Airmets designs and builds fast marketing sites for real estate, practices, and local brands.",
    description:
      "Custom marketing websites for real estate teams, professional practices, and local brands — with search-ready pages, mobile layouts, and a clear way to request a quote.",
    keywords: [
      "website development Southern California",
      "custom website design Inland Empire",
      "business website developer Los Angeles",
      "real estate website development",
      "small business website Corona",
      "marketing website Orange County",
    ],
    image: SITE_MEDIA.services.websiteDevelopment,
    icon: "code",
    overview:
      "Airmets designs and builds custom marketing websites for businesses that need a clear, fast site. Pages are written around the services you sell and the places you serve, laid out for phones, and connected to an inquiry path that reaches you. When a project also needs photography or aerial media, capture and the website are planned together so the images have a page to live on.",
    idealFor: [
      "Real estate teams and brokerages that need a site beyond a listing portal",
      "Professional practices and local service businesses",
      "Brands replacing a template site that is hard to update or hard to find",
      "Clients who want photography, video, and the website handled in one engagement",
    ],
    deliverables: [
      "Custom marketing website organized around your services and service area",
      "Mobile layouts and pages built for fast loading",
      "Unique titles, descriptions, and a sitemap for public pages",
      "Contact or inquiry forms that reach your inbox",
      "Your photography and video placed on the pages that need them",
      "Launch on your domain with HTTPS",
    ],
    process: [
      {
        title: "Scope",
        body: "We confirm the pages, offers, locations, and anything the site should not collect. You leave with a written page list before design starts.",
      },
      {
        title: "Structure",
        body: "We map the sitemap, draft the page copy, and choose the searches each page should answer so the build has a search plan, not only a layout.",
      },
      {
        title: "Design & Build",
        body: "The site is designed around your brand and your photos. Layouts are checked on desktop and phone before anything goes live.",
      },
      {
        title: "Launch",
        body: "We connect your domain, test the inquiry form, and walk through how to request updates. You keep ownership of the domain and accounts.",
      },
    ],
    faqs: [
      {
        question: "Do you only build websites for aerial clients?",
        answer:
          "No. Website development is its own service. Aerial or ground photography can be added when the project needs original images, and it is not required to start.",
      },
      {
        question: "Can you take over a site you did not build?",
        answer:
          "We review the current site and recommend either a focused update or a rebuild. If the foundation cannot support the pages you need, we say so before work starts.",
      },
      {
        question: "Will the site be set up for search?",
        answer:
          "Yes. Each public page gets its own title, description, and canonical URL, and the site publishes a sitemap. Copy is written for the services and cities you actually serve.",
      },
      {
        question: "How long does a marketing website take?",
        answer:
          "A focused service site is often a few weeks after copy, logos, and photos are in hand. Sites with many location or service pages take longer, and the proposal states the schedule.",
      },
    ],
    quoteTitle: "Ready to plan your website?",
    quoteBody:
      "Tell us about the business, the pages you need, and when you want to launch. We typically respond within one business day.",
    related: [
      { href: "/service-area", label: "Southern California service area" },
      { href: "/services/real-estate", label: "Real estate listing media" },
      { href: "/services/aircraft-for-sale", label: "Aircraft for sale photography" },
      { href: "/services/drone-aerial", label: "Drone aerial photography" },
      { href: "/contact", label: "Request a quote" },
    ],
  },
];

export const SERVICE_BY_ID = Object.fromEntries(
  SERVICE_DETAILS.map((service) => [service.id, service]),
) as Record<string, ServiceDetail>;

export function getServiceById(id: string) {
  return SERVICE_BY_ID[id] ?? null;
}