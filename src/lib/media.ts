/** Every image below is used exactly once across the single-page site. */
export const SITE_MEDIA = {
  heroBackground: "/images/hero-background.jpg",
  services: {
    drone: "/images/aerial-solar-campus.jpg",
    realEstate: "/images/aerial-estate-front.jpg",
    commercial: "/images/aerial-genoptix-campus.jpg",
    custom: "/images/aerial-diamond-bar-valley.jpg",
  },
  portfolio: {
    townhomesCorona: "/images/aerial-townhomes-corona.jpg",
    diamondBarWide: "/images/aerial-diamond-bar-wide.jpg",
    graybarCampus: "/images/aerial-graybar-campus.jpg",
    playgroundCorona: "/images/aerial-playground-corona.jpg",
    mountainLake: "/images/aerial-mountain-lake.jpg",
  },
} as const;

const ALL_SITE_IMAGES = [
  SITE_MEDIA.heroBackground,
  ...Object.values(SITE_MEDIA.services),
  ...Object.values(SITE_MEDIA.portfolio),
] as const;

if (new Set(ALL_SITE_IMAGES).size !== ALL_SITE_IMAGES.length) {
  throw new Error("Duplicate image paths detected in SITE_MEDIA.");
}
