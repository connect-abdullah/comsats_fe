import { IMAGES } from "@/constants/shared/images";
import type { ContentItem } from "@/types";

export const LATEST_NEWS: ContentItem[] = [
  {
    title: "COMSATS Faculty Wins Prestigious HEC Research Award",
    description:
      "The High Commission honors CUI's top AI lab for path-breaking neural grid innovations.",
    image: IMAGES.academic.centersAndOffices,
    date: "October 14, 2026",
    category: "RESEARCH",
    categoryColor: "purple",
    href: "#news",
  },
  {
    title: "International AI Symposium 2026 Begins",
    description:
      "CUI hosts elite minds from 15+ global universities to map next-gen deep-tech standards.",
    image: IMAGES.academic.facultiesAndDepartments,
    date: "October 08, 2026",
    category: "ACADEMIC CAMPUS",
    categoryColor: "blue",
    href: "#news",
  },
  {
    title: "Fall Corporate Placement Program Records 94% Match",
    description:
      "Leading global companies lock outstanding talent directly from our graduating class.",
    image: IMAGES.campusLife.studentServiceCenter,
    date: "September 29, 2026",
    category: "PLACEMENTS",
    categoryColor: "purple",
    href: "#news",
  },
];
