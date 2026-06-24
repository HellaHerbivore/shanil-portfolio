export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  category: string;
  year: string;
  role: string;
  /** External link to the live project. Opens in a new tab via the card button. */
  liveUrl?: string;
  /** Local MP4 path. When set, the card button opens this in a lightbox instead. */
  demoVideo?: string;
  /** Card thumbnail shown on the home grid. */
  thumbnail: string;
  /** 2-3 images shown at the top of the case-study page. */
  gallery: string[];
  sections: ProjectSection[];
};

const LOREM_STRATEGY =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const LOREM_METHOD =
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.";

const LOREM_ELEMENTS =
  "Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.";

function sections(): ProjectSection[] {
  return [
    { heading: "Strategy", body: LOREM_STRATEGY },
    { heading: "Design Method", body: LOREM_METHOD },
    { heading: "Elements of the Design", body: LOREM_ELEMENTS },
  ];
}

export const projects: Project[] = [
  {
    slug: "playthical",
    title: "Playthical",
    blurb: "Gamified volunteer platform.",
    category: "Product / Web",
    year: "2025",
    role: "Design & Front-End",
    liveUrl: "https://www.playthical.com/",
    thumbnail: "/projects/playthical.png",
    gallery: [
      "/placeholders/playthical.svg",
      "/placeholders/playthical-2.svg",
      "/placeholders/playthical-3.svg",
    ],
    sections: sections(),
  },
  {
    slug: "antagonist",
    title: "Antagonist",
    blurb: "Addiction documentary landing page.",
    category: "Marketing / Web",
    year: "2025",
    role: "Art Direction & Build",
    liveUrl: "https://www.antagonistfilm.com/",
    thumbnail: "/projects/antagonist.png",
    gallery: [
      "/placeholders/antagonist.svg",
      "/placeholders/antagonist-2.svg",
      "/placeholders/antagonist-3.svg",
    ],
    sections: sections(),
  },
  {
    slug: "yoga-with-lali",
    title: "Yoga With Lali",
    blurb: "Wellness and meditation guide.",
    category: "Brand / Web",
    year: "2024",
    role: "Design & Front-End",
    liveUrl: "https://yoga-with-lali.vercel.app/",
    thumbnail: "/projects/yoga-with-lali.png",
    gallery: [
      "/placeholders/yoga-with-lali.svg",
      "/placeholders/yoga-with-lali-2.svg",
      "/placeholders/yoga-with-lali-3.svg",
    ],
    sections: sections(),
  },
  {
    slug: "animal-profiles",
    title: "Animal Profiles — Impact of a Donation",
    blurb: "Interactive donation impact tracker.",
    category: "Data Viz / Web",
    year: "2024",
    role: "Design & Front-End",
    liveUrl: "https://animal-profiles.vercel.app/",
    thumbnail: "/projects/animal-profiles.png",
    gallery: [
      "/placeholders/animal-profiles.svg",
      "/placeholders/animal-profiles-2.svg",
      "/placeholders/animal-profiles-3.svg",
    ],
    sections: sections(),
  },
  {
    slug: "pocket-sanctuary",
    title: "Pocket Sanctuary",
    blurb: "Cozy animal sanctuary game.",
    category: "Game / Interactive",
    year: "2024",
    role: "Concept & Design",
    demoVideo: "/projects/pocket-sanctuary-demo.mp4",
    thumbnail: "/projects/pocket-sanctuary.png",
    gallery: [
      "/placeholders/pocket-sanctuary.svg",
      "/placeholders/pocket-sanctuary-2.svg",
      "/placeholders/pocket-sanctuary-3.svg",
    ],
    sections: sections(),
  },
  {
    slug: "cozy-haunted-house",
    title: "Cozy Haunted House",
    blurb: "Quirky haunted house simulation.",
    category: "Game / 3D",
    year: "2023",
    role: "Concept & Design",
    liveUrl: "https://cozy-haunted-house.vercel.app/",
    thumbnail: "/projects/cozy-haunted-house.png",
    gallery: [
      "/placeholders/cozy-haunted-house.svg",
      "/placeholders/cozy-haunted-house-2.svg",
      "/placeholders/cozy-haunted-house-3.svg",
    ],
    sections: sections(),
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
