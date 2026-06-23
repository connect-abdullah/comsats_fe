import { GraduationCap, BookOpen, Award } from "lucide-react";
import type { AdmissionPathway } from "@/types";

export const ADMISSIONS_HEADLINE = "Why COMSATS University Islamabad?";

export const ADMISSIONS_NARRATIVE =
  "Ranked among Pakistan's leading universities, COMSATS University Islamabad combines rigorous academic standards with cutting-edge research, industry partnerships, and a vibrant campus community that prepares graduates for global success.";

export const TRUST_BULLETS = [
  "HEC recognized degree programs",
  "Globally connected faculty and research",
  "Strong graduate employment outcomes",
  "Seven campuses across Pakistan",
];

export const ADMISSION_PATHWAYS: AdmissionPathway[] = [
  {
    icon: GraduationCap,
    title: "Undergraduate Programs",
    description:
      "Build strong foundations with industry-relevant bachelor's degrees across engineering, sciences, business, and design.",
    href: "#admissions",
  },
  {
    icon: BookOpen,
    title: "Graduate Programs",
    description:
      "Advance your expertise through master's programs blending rigorous coursework with cutting-edge research.",
    href: "#admissions",
  },
  {
    icon: Award,
    title: "PhD Programs",
    description:
      "Push the boundaries of knowledge with doctoral research guided by globally recognized faculty.",
    href: "#admissions",
  },
];
