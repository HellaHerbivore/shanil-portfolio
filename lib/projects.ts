export type ProjectSection = {
  heading: string;
  paragraphs: string[];
  /** Optional hex colors (without #) rendered as a palette of circles. */
  palette?: string[];
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
  /** YouTube video / Shorts ID. When set, the card button opens it in a lightbox. */
  youtubeId?: string;
  /**
   * What to show at the top of the case-study page.
   * Omitted -> the screenshot gallery. "site" -> embed liveUrl in an iframe.
   * "youtube" -> embed the youtubeId video.
   */
  heroEmbed?: "site" | "youtube";
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
    { heading: "Strategy", paragraphs: [LOREM_STRATEGY] },
    { heading: "Design Method", paragraphs: [LOREM_METHOD] },
    { heading: "Design Elements", paragraphs: [LOREM_ELEMENTS] },
  ];
}

const playthicalSections: ProjectSection[] = [
  {
    heading: "Strategy",
    paragraphs: [
      "After going vegan, I shifted my work to set up Playthical in 2023. My main goal for the website was to get people to reach out to me, since most of my client relationships start with personal chats. I placed a clear button right at the top that links smoothly to my booking page.",
      "At the same time, I needed the site to build trust. People often think of gaming as a playful extra rather than a powerful way to make a real difference for animals at scale. I wanted this digital front to show our weight, build credibility, and state exactly what we do in plain words.",
    ],
  },
  {
    heading: "Design Method",
    paragraphs: [
      "I began by looking at what charities in the animal advocacy movement expect to see. Most are used to clean, section-by-section websites, so I chose bold fonts and solid colours to ground the site in professionalism. Still, I had to walk a fine line between being playful and being serious. I drew a lot of inspiration from the layouts of Salesforce and Animals Australia to find that right mix of business and purpose.",
    ],
  },
  {
    heading: "Design Elements",
    paragraphs: [
      "The logo features a red fox, which is one of the most playful animals in the world. Because of the studio's roots in gaming, I wanted to give the fox a mythical twist, so I added traits of a deer to bring in some plant-eating energy. Along the way, I learned that foxes are omnivores and do not have to eat meat, meaning they have the potential to be vegan.",
      "For the palette, my favourite shade is a Byzantine red, but I softened it into a warm red-orange. This keeps the site from looking too alarming and instead signals warmth, trust, and depth. To complete the look, I paired it with a dark charcoal grey and a creamy white for high-contrast reading. I also chose to feature happy animals from WeAnimals, including a wonderful photograph of a fox playing with an orange frisbee.",
    ],
    palette: ["f14b32", "333333", "f5f3ef", "6a9d2c"],
  },
];

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
      "/projects/playthical/1.png",
      "/projects/playthical/2.png",
      "/projects/playthical/3.png",
    ],
    sections: playthicalSections,
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
      "/projects/antagonist/1.png",
      "/projects/antagonist/2.png",
      "/projects/antagonist/3.png",
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
      "/projects/yoga-with-lali/1.png",
      "/projects/yoga-with-lali/2.png",
      "/projects/yoga-with-lali/3.png",
      "/projects/yoga-with-lali/4.png",
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
    heroEmbed: "site",
    thumbnail: "/projects/animal-profiles.png",
    gallery: [
      "/projects/animal-profiles/1.png",
      "/projects/animal-profiles/2.png",
      "/projects/animal-profiles/3.png",
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
    youtubeId: "uSJ_FJRzZVk",
    heroEmbed: "youtube",
    thumbnail: "/projects/pocket-sanctuary.png",
    gallery: [
      "/projects/pocket-sanctuary/1.png",
      "/projects/pocket-sanctuary/2.png",
      "/projects/pocket-sanctuary/3.png",
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
    heroEmbed: "site",
    thumbnail: "/projects/cozy-haunted-house.png",
    gallery: [
      "/projects/cozy-haunted-house/1.png",
      "/projects/cozy-haunted-house/2.png",
      "/projects/cozy-haunted-house/3.png",
    ],
    sections: sections(),
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
