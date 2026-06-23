import { GraduationCap, BookOpenCheck, Microscope } from "lucide-react";
import type { ProgramCard } from "@/types";

export const PROGRAM_CARDS: ProgramCard[] = [
  {
    icon: GraduationCap,
    title: "Undergraduate Programs",
    description:
      "Inquire into outstanding bachelor's degrees covering computer science, business management, architecture, artificial intelligence, and physical sciences.",
    badge: "4-YEAR DEGREES",
    deadline: "Deadline: Jan 15, 2026",
    ctaLabel: "Explore UG Options",
    accent: "purple",
  },
  {
    icon: BookOpenCheck,
    title: "Graduate Programs",
    description:
      "Broaden your research and functional boundaries. Highly integrated post-graduate training mapped directly to commercial and global academic fields.",
    badge: "2-YEAR MS / MBA",
    deadline: "Deadline: Jan 28, 2026",
    ctaLabel: "Explore GR Options",
    accent: "blue",
  },
  {
    icon: Microscope,
    title: "PhD Programs",
    description:
      "Drive original contributions to global science, high performance computing, cyber systems, nano-physics, and progressive architecture design.",
    badge: "DOCTORAL STUDIES",
    deadline: "Rolling Applications",
    ctaLabel: "Explore Doctoral Paths",
    accent: "amber",
  },
];
