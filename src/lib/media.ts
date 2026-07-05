const DRONE_PHOTOS = "/images/drone/photos";

/** Every image below is used exactly once across the single-page site. */
export const SITE_MEDIA = {
  heroBackground: `${DRONE_PHOTOS}/hero-background.jpg`,
  heroVideos: [
    "/videos/drone-flying-up.mp4",
    "/videos/baseball-game-high.mp4",
    "/videos/baseball-game-low.mp4",
    "/videos/solar.mp4",
  ] as const,
  services: {
    drone: `${DRONE_PHOTOS}/aerial-solar-campus.jpg`,
    realEstate: `${DRONE_PHOTOS}/aerial-estate-front.jpg`,
    commercial: `${DRONE_PHOTOS}/aerial-genoptix-campus.jpg`,
    custom: `${DRONE_PHOTOS}/aerial-diamond-bar-valley.jpg`,
    generalPhotography: "/images/dslr/photo-dsc09003.jpg",
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
    jiufenTeaHouse: "/images/dslr/photo-dsc07163.jpg",
    moraineLake: "/images/dslr/photo-moraine_1.jpg",
    alpineLakeIsland: "/images/dslr/photo-dsc05340_2.jpg",
    monumentValleyRoad: "/images/dslr/photo-dsc08360_2.jpg",
    mistyLake: "/images/dslr/photo-dsc09040.jpg",
    desertArch: "/images/dslr/photo-gopr3462.jpg",
    maternityPortrait: "/images/dslr/photo-dsc00004.jpg",
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