export type ProjectSection = {
  heading: string;
  paragraphs: string[];
  /** Optional hex colors (without #) rendered as a palette of circles. */
  palette?: string[];
  /** Optional image shown to the right of the palette (e.g. a logo). */
  paletteImage?: string;
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
    paletteImage: "/projects/shanil-logo.png",
  },
];

const antagonistSections: ProjectSection[] = [
  {
    heading: "Strategy",
    paragraphs: [
      "This project is a website for an investigative documentary about how a life-saving drug called Naltrexone was held back while the fentanyl crisis tore through American cities. The film needed to find more financial backers and build up its standing for film festivals.",
      "To meet these goals, I advised the director to set up a Patreon page and funnel all web traffic toward it. We anchored a Patreon button at the top of the page and made it the final call to action at the end. I also looked for a strong way to grip visitors right away. The director had been interviewed on Joe Rogan's podcast, so I used an earnest quote from that talk to hook viewers and give the film instant weight.",
    ],
  },
  {
    heading: "Design Method",
    paragraphs: [
      "We began by locking in a dark, serious, and dramatic tone. Once the director agreed on this feeling, I looked to the documentary Christspiracy for inspiration, using similar fonts and placing a soft-edged, vignetted trailer at the top of the page.",
      "For the user flow, I chose to follow paths that already work well rather than starting from scratch. I researched how Netflix lays out the films it wants to feature, since they have spent a lot of time and money finding the best design. I used their framework to map out a smooth, gripping flow for our visitors.",
    ],
  },
  {
    heading: "Design Elements",
    paragraphs: [
      "The colour palette is built on deep, dark shades, with a dull gold that cuts through the darkness to highlight key areas. To build tension, the site opens with a scrolling animation. Visitors see a moving line of shocking quotes, facts, and figures before the movement settles to reveal the main film banner.",
    ],
    palette: ["1c1b1e", "222126", "eee9ea", "643f33", "a98e3f"],
  },
];

const yogaSections: ProjectSection[] = [
  {
    heading: "Strategy",
    paragraphs: [
      "Lali is my wife, and I thought it would be a wonderful birthday gift to build a website for her fast-maturing yoga practice. She needed to shift from setting up informal classes to showing a professional brand, especially as she began getting hired to teach larger groups holidaying in Sri Lanka. She also hopes to bring her love for children and her dedication to yoga together by teaching kids. Because of this, building trust was a guiding rule for the site. One way I did this was by showing that Lali teaches yoga rooted deeply in its true bedrock. For instance, most teachers today do not know the first yama of yoga, or they just gloss over it. But this first step, ahimsa, which means non-violence, is a baseline that takes years to master and calls for a dedication to a satvic, South Asian vegan diet.",
    ],
  },
  {
    heading: "Design Method",
    paragraphs: [
      "A big challenge Lali faces is that it is hard to stand out from other yoga teachers since the practice has become so widespread. To solve this, I leaned heavily into showcasing her true dedication to ahimsa all through the website. I have also noticed that a successful yoga teacher now wins over students through their own personality. This is why I chose to feature Lali's face clearly and worked to build a feeling that she is speaking straight to the reader.",
    ],
  },
  {
    heading: "Design Elements",
    paragraphs: [
      "To help build trust, I put in a moving number ticker that draws the eye to Lali's years of practice and the number of students she has taught. I also added a \"Tip of the Day\" space about yoga history and teachings. This lets Lali share the deeper roots of the practice that are often lost in white-washed Lululemon style. To truly honour the roots of yoga, I looked up exactly how to write ahimsa with both Devanagari script accents and Latin marks, and I picked a font that handles both beautifully. Finally, I used the colour palette to stand out. Most yoga influencer sites use soft pastel shades. To match Lali's grounded brand, I chose a bolder set of colours inspired by Mughal and South Indian medieval art. I even found old paintings that used a shade of lilac, which is Lali's favourite colour, and used it for the final call to action button.",
    ],
    palette: ["0b5c4a", "3d7f84", "a45241", "c2a14d", "f5eddb", "bd8f97"],
  },
];

const pocketSanctuarySections: ProjectSection[] = [
  {
    heading: "Strategy",
    paragraphs: [
      "I believe that video game design has huge power to help the animal advocacy movement in many ways, whether we are showing impact reports or building interactive donation pages. Right now, a big struggle in our movement is that people get deeply tired and burned out from online pressure campaigns. When a supporter writes a complaint on Instagram about a company, it can take years to see any shift, if it happens at all.",
      "Pocket Animal Sanctuary is a project I am building to change this. It acts as a virtual space where your real-world actions, like signing a petition, leaving a comment, or giving a donation, feed into a virtual sanctuary that grows and thrives. This gives people a clear, uplifting digital footprint of their personal work for animals.",
    ],
  },
  {
    heading: "Design Method",
    paragraphs: [
      "My vision was to make a game that spreads far beyond the core animal advocacy crowd and normalises taking action for animals. To reach a broad audience, I chose a cosy style. I drew a lot of inspiration from cosy games that I am personally drawn to and that are trending right now, like Tiny Glade, Townscaper, Animal Crossing, and Stardew Valley.",
      "To keep the gameplay relaxing and lower the mental load, the player's choices are purposefully small. You choose from just three actions that change from time to time. Some are simple, like eating plant-based for the day, while harder ones involve making a public comment or donating to a featured charity. The sanctuary then shapes itself based on these choices.",
    ],
  },
  {
    heading: "Design Elements",
    paragraphs: [
      "The visual style relies on cosy, warm, and subdued colours with soft lighting to create a calm space. The main screen shows an uncluttered open field with grass that sways gently in the wind. To add a deep personal touch to the setting, I used real sounds of the wind that I recorded on the island of Lanka. The interface stays very clean, showing only one to three buttons on the screen at any given time so the player never feels overwhelmed.",
    ],
  },
];

const animalProfilesSections: ProjectSection[] = [
  {
    heading: "Strategy",
    paragraphs: [
      "This project is not a finished product, but a simple exercise I made while learning web-based game design tools. As I was building Pocket Sanctuary, I hit a few walls. That game needs to live on app stores where you have to fight for attention. More importantly, it is a heavy download that does not run well on older or cheaper phones. To solve this, I began learning Three.JS, a web framework that lets me build pieces straight for the internet, skipping the app store entirely. These works can be tucked in anywhere, from a QR code to a donation checkout page. They are lightning fast and make it very easy for someone to start helping animals.",
      "For this exercise, I was teaching myself how to handle a spinning camera and how to show many pictures at once while keeping the quality sharp. This early practice grew into a bigger product because I started thinking about how this could be a fresh way for animal charities to thank their donors.",
    ],
  },
  {
    heading: "Design Method",
    paragraphs: [
      "I wanted to showcase happy animals using photographs from WeAnimals. However, I ran into a hurdle with sea life. Most pictures of sea animals, like shrimp, show them in captivity. To get around this, I used AI tools to create images that show people what a thriving, free sea being looks like in the wild.",
    ],
  },
  {
    heading: "Design Elements",
    paragraphs: [
      "The piece features an orbiting camera that lets the user glide smoothly around the space. I set the animals against a soft gradient background to keep the focus on them. Even with high-resolution images, the page is built to load fast and give the user a lag-free experience.",
    ],
  },
];

const cozyHauntedHouseSections: ProjectSection[] = [
  {
    heading: "Strategy",
    paragraphs: [
      "This project is another exercise in technical learning rather than a way to show off my design skills. I used it to keep working with the Three.JS web framework to learn how to bring deep, interactive web experiences to life. My goal was to find ways to deliver these immersive spaces to any device, anywhere, at any time, lightning fast.",
    ],
  },
  {
    heading: "Design Method",
    paragraphs: [
      "For this piece, I wanted to test how to bring detailed textures and rich lighting into a web scene without making the file size too heavy or slowing down how it runs. I also wanted to play around with the code to make the sun move around the house, which casts long, dramatic shadows across the ground.",
      "Also, since it's probably not obvious, the geometry jutting out of the ground are gravestones wrapped in a tablecloth texture... Hence, the title \"Cozy Haunted House.\"",
    ],
  },
  {
    heading: "Design Elements",
    paragraphs: [
      "The work features detailed textures that you can zoom right into to look at closely, alongside moving lighting and shifting shadows. Everything is built to load fast and operate smoothly without any lag, no matter the device or the speed of the internet connection.",
    ],
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
    sections: antagonistSections,
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
    ],
    sections: yogaSections,
  },
  {
    slug: "animal-profiles",
    title: "Animal Profiles — Impact of a Donation (Exercise)",
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
    sections: animalProfilesSections,
  },
  {
    slug: "pocket-sanctuary",
    title: "Pocket Sanctuary (Work in Progress)",
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
    sections: pocketSanctuarySections,
  },
  {
    slug: "cozy-haunted-house",
    title: "Cozy Haunted House (Exercise)",
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
    sections: cozyHauntedHouseSections,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
