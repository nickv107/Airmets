export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readMinutes: number;
  seoDescription: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "faa-part-107-explained",
    title: "FAA Part 107 Explained: Why It Matters for Your Aerial Project",
    excerpt:
      "Hiring a certificated remote pilot is not optional for most commercial drone work in the U.S. Here is what Part 107 means for your listing, brand film, or construction documentation.",
    category: "UAS Compliance",
    publishedAt: "2026-06-15",
    readMinutes: 6,
    seoDescription:
      "Learn what FAA Part 107 requires for commercial drone operations in Southern California and why certificated remote pilots matter for real estate and brand projects.",
    sections: [
      {
        heading: "What is FAA Part 107?",
        paragraphs: [
          "FAA Part 107 is the federal rule set that governs most commercial small unmanned aircraft systems (UAS) operations in the United States. If you are hiring aerial photography or videography for marketing, real estate, inspections, or events, the flight should be conducted under Part 107 by a certificated remote pilot unless a separate, specific authorization applies.",
          "Part 107 covers pilot certification, aircraft registration where required, operational limits, airspace compliance, and safety responsibilities. It exists to keep commercial drone work predictable, insurable, and aligned with national airspace rules.",
        ],
      },
      {
        heading: "Why clients should care",
        paragraphs: [
          "A Part 107 certificated remote pilot has passed an FAA knowledge exam and is accountable for pre-flight planning, weather decisions, and lawful operation. That reduces risk for property owners, agents, developers, and marketing teams who publish the resulting media.",
          "Unlicensed recreational flights used for commercial deliverables can create liability exposure, platform takedowns, and project delays if airspace or local rules are violated. Professional operators document airspace checks and fly with repeatable safety procedures.",
        ],
      },
      {
        heading: "What Part 107 does not automatically allow",
        paragraphs: [
          "Certification does not grant unlimited access to every location. Controlled airspace near airports, temporary flight restrictions, local ordinances, HOA rules, National Park boundaries, and private property permissions still govern whether a mission can proceed on a given day.",
          "Night operations, flights over people, beyond visual line of sight, and certain elevated-risk scenarios may require additional FAA authorizations or waivers. A professional operator will tell you upfront when a location needs extra lead time.",
        ],
      },
      {
        heading: "Questions to ask before you book",
        paragraphs: [
          "Ask whether your operator holds a current FAA Part 107 remote pilot certificate, how they check airspace for your address, and what happens if weather or TFRs delay the shoot. Request sample deliverables and turnaround times in writing.",
          "For Southern California projects, airspace complexity varies dramatically between coastal corridors, inland master-planned communities, and desert resort markets. Local planning experience matters as much as the certificate itself.",
        ],
      },
    ],
  },
  {
    slug: "aerial-media-for-real-estate-listings",
    title: "How Aerial Media Helps Luxury Real Estate Listings Stand Out",
    excerpt:
      "Ground photos show rooms. Aerial media shows context — lot position, views, neighborhood scale, and the story buyers feel before they schedule a showing.",
    category: "Real Estate",
    publishedAt: "2026-06-22",
    readMinutes: 5,
    seoDescription:
      "Discover how professional drone photo and video improves luxury real estate marketing in Corona, the Inland Empire, Los Angeles, and Palm Springs.",
    sections: [
      {
        heading: "Context sells before the walkthrough",
        paragraphs: [
          "Luxury buyers often preview dozens of listings online before contacting an agent. Aerial photography and video answer high-intent questions early: How private is the lot? What is the approach like? How close are amenities, hillsides, golf courses, or open land?",
          "Elevated stills and smooth orbit video communicate scale and setting in ways that wide-angle ground photography cannot replicate.",
        ],
      },
      {
        heading: "Deliverables that fit modern listing workflows",
        paragraphs: [
          "A professional aerial package typically includes edited photo sets, a cinematic listing video, and social-ready vertical clips. When supported by your MLS, stills can be exported in board-friendly dimensions so agents upload once and publish everywhere.",
          "Consistent aerial branding across a brokerage portfolio also helps luxury teams build a recognizable visual standard in competitive markets.",
        ],
      },
      {
        heading: "Planning for HOA, hillside, and view properties",
        paragraphs: [
          "Hillside estates, gated communities, and view lots introduce access, privacy, and airspace considerations. Scheduling during golden hour, coordinating with sellers, and respecting neighbor boundaries should be part of the production plan — not an afterthought.",
          "Share community drone policies, gate codes, and seller timing constraints during intake so the mission is efficient on shoot day.",
        ],
      },
      {
        heading: "When to add ground photography",
        paragraphs: [
          "Aerial media performs best alongside strong ground coverage. Many agents book combined drone and DSLR packages so interiors, architectural details, and lifestyle angles match the tone and color grade of exterior aerial sequences.",
        ],
      },
    ],
  },
  {
    slug: "airspace-planning-laanc-guide",
    title: "Airspace Planning 101: LAANC, TFRs, and SoCal Flight Logistics",
    excerpt:
      "Southern California airspace is busy. Here is how professional operators evaluate controlled airspace, temporary restrictions, and local rules before confirming your flight date.",
    category: "UAS Operations",
    publishedAt: "2026-07-01",
    readMinutes: 7,
    seoDescription:
      "A practical guide to drone airspace planning in Southern California, including LAANC authorizations, temporary flight restrictions, and mission scheduling.",
    sections: [
      {
        heading: "Why airspace planning starts with the address",
        paragraphs: [
          "Every commercial UAS mission should begin with the exact property or site coordinates, not just the city name. Controlled airspace classes, airport proximity, heliport activity, and local ordinances all depend on precise location data.",
          "In Southern California, operators may encounter complex airspace near LAX, Burbank, John Wayne, Ontario, Palm Springs, and military operations areas. Planning tools and FAA authorizations help lawful flights proceed on schedule.",
        ],
      },
      {
        heading: "LAANC and controlled airspace",
        paragraphs: [
          "Low Altitude Authorization and Notification Capability (LAANC) allows certificated remote pilots to request near-real-time authorization in many controlled airspace areas. Approval depends on altitude, location, and current FAA constraints.",
          "If LAANC is unavailable for a grid, the mission may require additional lead time or may not be feasible at the requested altitude. Professional operators communicate this during quoting — not on shoot day.",
        ],
      },
      {
        heading: "Temporary Flight Restrictions and breaking news",
        paragraphs: [
          "TFRs can appear with little notice for wildfires, major events, disaster response, and VIP movements. A flight that was legal yesterday may be prohibited today. Responsible operators monitor TFRs until takeoff and postpone when required.",
          "Clients should build modest weather and airspace buffers into marketing timelines, especially for multi-property campaigns.",
        ],
      },
      {
        heading: "Local ordinances and property permissions",
        paragraphs: [
          "Cities and counties may impose additional drone restrictions, particularly in parks, beaches, and public events. Private property access permission remains essential. Airspace authorization alone does not replace owner or venue consent.",
        ],
      },
    ],
  },
  {
    slug: "drone-vs-ground-photography",
    title: "Drone vs. Ground Photography: Choosing the Right Tool for Your Campaign",
    excerpt:
      "Aerial and ground media solve different problems. Here is how marketing teams, agents, and developers decide when to use each — or both.",
    category: "Production",
    publishedAt: "2026-07-08",
    readMinutes: 5,
    seoDescription:
      "Compare drone aerial photography and ground-based DSLR work for real estate, commercial, and brand campaigns in Southern California.",
    sections: [
      {
        heading: "When aerial media is the right choice",
        paragraphs: [
          "Choose aerial capture when geographic context drives the story: lot size, proximity to open land, resort amenities, campus scale, construction progress across acreage, or dramatic approach shots for luxury listings.",
          "Video especially benefits from elevated motion — slow orbits, reveals, and tracking sequences that ground cameras cannot safely or legally replicate.",
        ],
      },
      {
        heading: "When ground photography is the right choice",
        paragraphs: [
          "Ground-based DSLR or mirrorless work excels for portraits, architectural detail, interiors, street-level lifestyle scenes, and locations where low-altitude human perspective feels more intimate or editorial.",
          "Travel, hospitality, and brand campaigns often need both wide aerial context and tight ground storytelling in the same deliverable set.",
        ],
      },
      {
        heading: "Combining both in one production day",
        paragraphs: [
          "Unified production keeps color grade, scheduling, and file delivery consistent. Agents and developers reduce vendor coordination by booking aerial and ground coverage together, especially when golden-hour timing matters.",
          "Airmets offers drone aerial packages alongside general photography for clients who want one team, one timeline, and one post-production standard.",
        ],
      },
      {
        heading: "Accessibility and audience platform considerations",
        paragraphs: [
          "Publish aerial hero video on websites and social channels, but pair it with ground stills for print, email, and MLS grids. Vertical crops from both aerial and ground sources improve performance on short-form platforms.",
        ],
      },
    ],
  },
  {
    slug: "professional-uas-production-workflow",
    title: "Inside a Professional UAS Production Workflow: From Brief to Delivery",
    excerpt:
      "A reliable aerial vendor follows a repeatable process — discovery, airspace review, capture, and post-production. Here is what clients should expect at each stage.",
    category: "UAS Operations",
    publishedAt: "2026-07-12",
    readMinutes: 6,
    seoDescription:
      "Step-by-step overview of a professional commercial drone production workflow for real estate, commercial, and custom UAS projects.",
    sections: [
      {
        heading: "Discovery and feasibility",
        paragraphs: [
          "The workflow starts with your address, creative goals, deliverable formats, and deadline. Operators evaluate airspace, local rules, access requirements, and weather windows before confirming a shoot date.",
          "Transparent proposals list what is included — photo count ranges, video length, revision policy, and delivery formats — so stakeholders align before production begins.",
        ],
      },
      {
        heading: "Pre-flight preparation",
        paragraphs: [
          "Certificated remote pilots complete airspace authorizations when needed, confirm property permissions, charge batteries, and build a shot list matched to sun angle and client priorities. Safety briefings and emergency landing zones are identified in advance.",
        ],
      },
      {
        heading: "Capture day execution",
        paragraphs: [
          "On site, the operator balances efficiency with safety. Flights are adapted to wind, glare, pedestrian activity, and audio needs for video. Ground communication with agents, sellers, or site supervisors keeps the mission on track.",
        ],
      },
      {
        heading: "Post-production and delivery",
        paragraphs: [
          "Footage is culled, color-graded, stabilized where appropriate, and exported for web, social, and print use. Files are delivered through secure download links with logical naming so marketing teams can publish quickly.",
          "For recurring documentation — construction progress, portfolio properties, or seasonal resort campaigns — consistent framing month over month adds long-term value.",
        ],
      },
    ],
  },
];

export const BLOG_BY_SLUG = Object.fromEntries(BLOG_POSTS.map((post) => [post.slug, post])) as Record<
  string,
  BlogPost
>;

export function getBlogPost(slug: string) {
  return BLOG_BY_SLUG[slug] ?? null;
}