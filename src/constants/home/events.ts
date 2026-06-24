import { IMAGES } from "@/constants/shared/images";
import type { ContentItem } from "@/types";

export const UPCOMING_EVENTS: ContentItem[] = [
  {
    title: "CUI National Cyber Cryptography Hackathon",
    description:
      "An intense challenge mapping modern encryption protocols and secure database designs.",
    image: IMAGES.mediaInsights.studentWeek,
    date: "OCTOBER 21, 2026",
    category: "CYBER SECURITY",
    categoryColor: "purple",
  },
  {
    title: "Islamabad Architecture Exhibition",
    description:
      "Highlighting futuristic urban micro-housing plans curated by students and top sector guilds.",
    image: IMAGES.mediaInsights.sportsWeek,
    date: "NOVEMBER 04, 2026",
    category: "CREATIVE DESIGN",
    categoryColor: "blue",
  },
  {
    title: "Graduate Research Exposition",
    description:
      "Showcasing progressive research in biotechnology, computer hardware, and applied sciences.",
    image: IMAGES.mediaInsights.qawaliNight,
    date: "NOVEMBER 12, 2026",
    category: "GRADUATE THESIS",
    categoryColor: "purple",
  },
  {
    title: "Heroes of the Mountains Screening",
    description:
      "A cinematic student documentative expedition through the Karakoram peak ranges.",
    image: IMAGES.mediaInsights.heroesOfMountains,
    date: "DECEMBER 05, 2026",
    category: "ADVENTURE",
    categoryColor: "blue",
  },
];
