const DRONE_PHOTOS = "/images/drone/photos";

/** Every image below is used exactly once across the single-page site. */
export const SITE_MEDIA = {
  heroBackground: `${DRONE_PHOTOS}/hero-background.jpg`,
  heroVideos: [
    { src: "/videos/solar.mp4", holdMs: 5000 },
    { src: "/videos/drone-flying-up.mp4", holdMs: 5000 },
    { src: "/videos/hillside-neighborhood.mp4", holdMs: 8000 },
    { src: "/videos/baseball-game-high.mp4", holdMs: 3700 },
    { src: "/videos/park-roll.mp4", holdMs: 5000 },
    { src: "/videos/diamond-bar-ca.mp4", holdMs: 5000 },
    { src: "/videos/chino-ca.mp4", holdMs: 5000 },
  ] as const,
  services: {
    drone: `${DRONE_PHOTOS}/aerial-solar-campus.jpg`,
    realEstate: `${DRONE_PHOTOS}/aerial-estate-front.jpg`,
    commercial: `${DRONE_PHOTOS}/aerial-genoptix-campus.jpg`,
    custom: `${DRONE_PHOTOS}/aerial-diamond-bar-valley.jpg`,
    aircraftForSale: "/images/dslr/photo-dsc09871.jpg",
    aviationFacilities: "/images/services/aviation-facilities.jpg",
    generalPhotography: "/images/dslr/photo-dsc09003.jpg",
    websiteDevelopment: "/images/services/website-development.jpg",
  },
  portfolio: {
    townhomesCorona: `${DRONE_PHOTOS}/aerial-townhomes-corona.jpg`,
    diamondBarWide: `${DRONE_PHOTOS}/aerial-diamond-bar-wide.jpg`,
    graybarCampus: `${DRONE_PHOTOS}/aerial-graybar-campus.jpg`,
    playgroundCorona: `${DRONE_PHOTOS}/aerial-playground-corona.jpg`,
    mountainLake: `${DRONE_PHOTOS}/aerial-mountain-lake.jpg`,
    plannedCommunity: `${DRONE_PHOTOS}/aerial-planned-community.jpg`,
    valleyGrid: `${DRONE_PHOTOS}/aerial-valley-grid.jpg`,
    curvedStreets: `${DRONE_PHOTOS}/aerial-curved-streets.jpg`,
    parkPathways: `${DRONE_PHOTOS}/aerial-park-pathways.jpg`,
    diamondBarHomes: "/images/services/real-estate-photography.jpg",
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

const HERO_VIDEO_SRCS = SITE_MEDIA.heroVideos.map((video) => video.src);
if (new Set(HERO_VIDEO_SRCS).size !== HERO_VIDEO_SRCS.length) {
  throw new Error("Duplicate hero video paths detected in SITE_MEDIA.");
}