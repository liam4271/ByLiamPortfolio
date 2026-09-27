import aboutCreator from "@/assets/about-creator.jpg";

import heroTravel from "@/assets/hero-travel.jpg";

import destinationFilm from "@/assets/project-destination.jpg";
import foodFilm from "@/assets/project-food.jpg";
import hotelFilm from "@/assets/project-hotel.jpg";
import lifestyleFilm from "@/assets/project-lifestyle.jpg";

import pizza from "@/assets/pizza.mp4";
import alletto from "@/assets/alletto.mp4";
import tarot from "@/assets/tarot.mp4";
import rome from "@/assets/Rome.mp4";
import spaDuLac from "@/assets/spaDuLac.mp4"

import florence from "@/assets/florence.webp";
import forest from "@/assets/forest.webp";
import mole from "@/assets/mole.webp";
import mont from "@/assets/mont.webp";
import parasol from "@/assets/parasol.webp";
import rinjani from "@/assets/rinjani.webp";
import sunset from "@/assets/sunset.webp";
import sunset2 from "@/assets/sunset.mp4";
import volcano from "@/assets/volcano.webp";
import whale from "@/assets/whale.mp4";
import statut from "@/assets/statut.webp"
import sydney from "@/assets/sydney.webp"

// Edit this single file to replace portfolio copy, images, videos, and links.
export const portfolio = {
  identity: {
    name: "BY LIAM",
    location: "Based in Europe · Available worldwide",
    email: "byliamugc@gmail.com",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
  },
  hero: {
    image: heroTravel,
    imageAlt: "A secluded Mediterranean hotel overlooking the sea at sunset",
    eyebrow: "Travel stories · thoughtfully made",
    title: "Some places deserve more than a postcard.",
    statement:
      "I create intimate films and photographs for destinations, stays, and tables worth remembering.",
  },
  about: {
    image: aboutCreator,
    imageAlt: "Travel creator on top of Meteoria",
    title: "I follow the feeling of a place.",
    paragraphs: [
      "I combine a trained creative eye with a technical and strategic mindset to create content that goes beyond looking good. Over the years, I’ve developed a strong eye for photography, video and visual storytelling, while becoming highly comfortable with the tools used to create, edit and refine content.",
      "With a degree in Computer Science and a background in SEO and digital projects, I understand what happens beyond the content itself — how people discover a brand, what captures their attention, and what turns that attention into action. From concept and production to editing and distribution, I approach every project with one goal in mind: creating content that not only tells a story, but helps turn viewers into customers.",
    ],
  },
  services: [
    {
      number: "01",
      name: "Essential",
      price: "€180",
      description: "1 UGC vertical video · 5 lifestyle photos · Concept & script · Editing included · Instagram & TikTok format",
      position: "For a focused content piece",
    },
    {
      number: "02",
      name: "Experience",
      price: "€280",
      description: "2 UGC vertical videos · 10 lifestyle photos · 2 concepts & scripts · Immersive experience shots · Editing included",
      position: "For a complete experience",
    },
    {
      number: "03",
      name: "Signature",
      price: "€500",
      description: "4 UGC vertical videos · 15 lifestyle photos · 4 concepts & scripts · Mixed cinematic & UGC content · Raw footage included",
      position: "For a full content library",
    },
  ],
  hostedExperiences: {
    title: "Hosted experiences",
    description:
      "Open to selected collaborations with hotels, accommodations and travel experiences in exchange for a hosted stay or experience. Each collaboration is considered individually according to the experience and requested deliverables. Paid advertising usage is available as an add-on.",
  },
  projects: [
    {
      name: "All'Etto",
      location: "Otrante, Italy",
      type: "Restaurant · Short-form film",
      description: "A short visual story built around the textures, colours and atmosphere of an authentic Italian deli, where food feels uncomplicated, generous and deeply rooted in tradition.",
      media: alletto,
      mediaAlt: "All’Etto is the kind of place where the experience is found in the details — good wine, Italian charcuterie, freshly made sandwiches and a table made for sharing",
      format: "phone" as const,
      mediaType: "video" as const,
      deliverables: "1 Short-form film",
    },
    {
      name: "A Day in Rome",
      location: "Rome, Italy",
      type: "Travel · Mini vlog",
      description: "A short-form mini vlog capturing the rhythm of a day in Rome — from quiet morning moments to streets, food, architecture and the small details that make the city feel alive.",
      media: rome,
      mediaAlt: "A Day in Rome — a visual journey through the streets, atmosphere and everyday moments of the Italian capital.",
      format: "phone" as const,
      mediaType: "video" as const,
      deliverables: "1 Short-form film",
    },
    {
      name: "Pizza in trevi",
      location: "Rome, Italy",
      type: "Restaurant · Social story",
      description: "A set of three short-form Story videos created to communicate the restaurant’s opening hours in a simple, clear and visually engaging way.",
      media: pizza,
      mediaAlt: "A short visual story focused on the experience rather than the destination. Pizza in Trevi",
      format: "phone" as const,
      mediaType: "video" as const,
      deliverables: "3 instagram story",
    },
    {
      name: "Spa du Lac",
      location: "Greece",
      type: "Spa · Social story",
      description: "A short-form visual story created to capture the calm, atmosphere and experience of Spa du Lac through a refined and immersive sequence.",
      media: spaDuLac,
      mediaAlt: "A short visual story capturing the relaxing atmosphere and experience of Spa du Lac in Greece.",
      format: "phone" as const,
      mediaType: "video" as const,
      deliverables: "1 Instagram story",
    },
    {
      name: "Tarot Garden",
      location: "Capalbio, Tuscany, Italy",
      type: "Museum · Description film",
      description: "In the Tuscan hills, Niki de Saint Phalle built a world entirely of her own.",
      media: tarot,
      mediaAlt: "Inspired by the Tarot, Gaudí’s Park Güell and the fantastical gardens of Bomarzo, she spent more than twenty years transforming her vision into a garden of monumental sculptures, mirrors, colour and imagination.",
      format: "phone" as const,
      mediaType: "video" as const,
      deliverables: "2 films ",
    },

  ],
      gallery: {
      eyebrow: "Photography",
      title: "Still frames, same eye.",
      note: "A few favourites picked up between films — building, nature, and the last light of the day.",
      photos: [
        { media: florence, alt: "Cathédrale Santa Maria del Fiore, Italy" },
        { media: mont, alt: "Oratoire Saint-Joseph du Mont-Royal, Canada" },
        { media: mole, alt: "Mole di Narni, Italy" },
         { media: sydney, alt: "Bondi to Bronte, Australia" },
        { media: statut, alt: "Statue of Liberty, America" },
        { media: rinjani, alt: "Mount Rinjani, Indonesia" },
        { media: sunset, alt: "Sunset over the landscape" },

  
      ],
    },
  process: [
    ["01", "Discovery", "We clarify the audience, objectives, channels, and what the place should make people feel."],
    ["02", "Creative direction", "I shape the concept, visual language, story beats, and practical production plan."],
    ["03", "Production", "I film and photograph with a light footprint, leaving room for honest moments to happen."],
    ["04", "Editing", "The strongest details become polished, platform-ready stories with a consistent point of view."],
    ["05", "Delivery", "Final assets arrive organised, formatted, and ready for social and digital use."],
  ],
  statement: {
    eyebrow: "Why it works",
    title: "Content that feels real.",
    body: "People don't just want to see a destination. They want to imagine themselves there. Authentic storytelling, strong visual direction and social-first formats make the moment feel possible.",
    images: [
      { media: destinationFilm, alt: "Coastal destination seen from above" },
      { media: aboutCreator, alt: "Portrait of Liam while travelling" },
    
    ],
  },
};
