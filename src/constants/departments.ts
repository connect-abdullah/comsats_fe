import {
  Cpu,
  Zap,
  Building2,
  Palette,
  Briefcase,
  Sigma,
  Atom,
  FlaskConical,
} from "lucide-react";
import type { Department } from "@/types";

export const DEPARTMENTS: Department[] = [
  {
    name: "Computer Science",
    icon: Cpu,
    description:
      "Software Engineering, Cybersecurity, Data Science, & Artificial Intelligence frameworks.",
    accent: "purple",
  },
  {
    name: "Electrical Engineering",
    icon: Zap,
    description:
      "Power Systems, Telecommunications, Smart Grids, & hardware design infrastructure.",
    accent: "blue",
  },
  {
    name: "Architecture",
    icon: Building2,
    description:
      "Sustainable urban architecture, physical design modeling, and modern landscape structures.",
    accent: "amber",
  },
  {
    name: "Art & Design",
    icon: Palette,
    description:
      "Visual arts, media design, digital content production, and cultural preservation pathways.",
    accent: "emerald",
  },
  {
    name: "Management Sciences",
    icon: Briefcase,
    description:
      "Global trade administration, fintech operations, business strategy, & creative branding.",
    accent: "rose",
  },
  {
    name: "Mathematics",
    icon: Sigma,
    description:
      "Statistical calculation, quantum mechanics mapping, algorithms, and analytical theory modeling.",
    accent: "indigo",
  },
  {
    name: "Physics",
    icon: Atom,
    description:
      "Applied physics, quantum systems, materials science, and advanced laboratory research.",
    accent: "cyan",
  },
  {
    name: "Chemistry",
    icon: FlaskConical,
    description:
      "Organic synthesis, analytical chemistry, environmental science, and industrial applications.",
    accent: "teal",
  },
];
