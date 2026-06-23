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
    featured: true,
    image: "/academic/faculties_and_departments.jpg",
    description:
      "Pioneering software engineering, artificial intelligence, and computational research at the forefront of Pakistan's tech revolution.",
  },
  {
    name: "Electrical Engineering",
    icon: Zap,
    image: "/academic/center_and_offices.jpg",
    description: "Power systems, electronics, and embedded technologies.",
  },
  {
    name: "Architecture",
    icon: Building2,
    image: "/campus_life/student_service_center.jpg",
    description: "Design studios shaping the built environment.",
  },
  {
    name: "Art & Design",
    icon: Palette,
    image: "/campus_life/student_affairs.jpg",
    description: "Creative expression and visual communication.",
  },
  {
    name: "Management Sciences",
    icon: Briefcase,
    image: "/academic/course-catalog.jpg",
    description: "Business leadership and strategic management.",
  },
  {
    name: "Mathematics",
    icon: Sigma,
    image: "/academic/faculties_and_departments.jpg",
    description: "Pure and applied mathematical sciences.",
  },
  {
    name: "Physics",
    icon: Atom,
    image: "/campus_life/sports_wellness.jpg",
    description: "Fundamental research and applied physics.",
  },
  {
    name: "Chemistry",
    icon: FlaskConical,
    image: "/campus_life/health-care.jpg",
    description: "Materials science and chemical research.",
  },
];

export const FEATURED_DEPARTMENT = DEPARTMENTS.find((d) => d.featured)!;
export const SUPPORTING_DEPARTMENTS = DEPARTMENTS.filter((d) => !d.featured);
