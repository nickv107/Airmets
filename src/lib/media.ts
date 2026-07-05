/** Every image below is used exactly once across the single-page site. */
export const SITE_MEDIA = {
  heroBackground: "/images/drone/hero-background.jpg",
  heroVideo: "/videos/drone-flying-up.mp4",
  services: {
    drone: "/images/drone/aerial-solar-campus.jpg",
    realEstate: "/images/drone/aerial-estate-front.jpg",
    commercial: "/images/drone/aerial-genoptix-campus.jpg",
    custom: "/images/drone/aerial-diamond-bar-valley.jpg",
    generalPhotography: "/images/dslr/photo-dsc09003.jpg",
  },
  portfolio: {
    townhomesCorona: "/images/drone/aerial-townhomes-corona.jpg",
    diamondBarWide: "/images/drone/aerial-diamond-bar-wide.jpg",
    graybarCampus: "/images/drone/aerial-graybar-campus.jpg",
    playgroundCorona: "/images/drone/aerial-playground-corona.jpg",
    mountainLake: "/images/drone/aerial-mountain-lake.jpg",
    plannedCommunity: "/images/drone/aerial-planned-community.jpg",
    valleyGrid: "/images/drone/aerial-valley-grid.jpg",
    curvedStreets: "/images/drone/aerial-curved-streets.jpg",
    parkPathways: "/images/drone/aerial-park-pathways.jpg",
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