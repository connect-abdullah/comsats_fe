import {
  ShieldCheck,
  CalendarClock,
  GraduationCap,
  Presentation,
  Coffee,
  Bus,
  Trophy,
  FlaskConical,
  LifeBuoy,
  Microscope,
} from "lucide-react";
import type { ServiceItem } from "@/types";

export const SERVICES: ServiceItem[] = [
  {
    title: "Safety First",
    description:
      "Comprehensive round-the-clock secured check-posts, digital entry checkpoints, and dedicated emergency response corps.",
    icon: ShieldCheck,
    accent: "purple",
  },
  {
    title: "Regular Classes",
    description:
      "Structured semesters and highly punctual schedules mapped to standard academic parameters.",
    icon: CalendarClock,
    accent: "blue",
  },
  {
    title: "Highly Qualified Teachers",
    description:
      "Learn from professors trained directly inside prestigious international institutions and research labs.",
    icon: GraduationCap,
    accent: "amber",
  },
  {
    title: "Modern Classrooms",
    description:
      "Fitted with smart screens, theater audio, active cooling, and comfortable ergonomic seating.",
    icon: Presentation,
    accent: "emerald",
  },
  {
    title: "Cafeteria",
    description:
      "Hygienic campus eateries serving fresh national delicacies, modern espresso bars, and active dining halls.",
    icon: Coffee,
    accent: "rose",
  },
  {
    title: "Transport",
    description:
      "Extensive fleet of buses traversing all prominent routes in Islamabad and Rawalpindi continuously.",
    icon: Bus,
    accent: "cyan",
  },
  {
    title: "Sports Facilities",
    description:
      "Lush green football stadiums, modern tennis courts, indoor gymnasium complexes, and track regions.",
    icon: Trophy,
    accent: "purple",
  },
  {
    title: "State-of-the-Art Labs",
    description:
      "NVIDIA computing rigs, heavy electric grid testing apparatus, bio-genetic modules, and chemical structures testing.",
    icon: FlaskConical,
    accent: "teal",
  },
  {
    title: "Student Support Services",
    description:
      "Dedicated assistance counseling desk aiding mental healthcare, stress regulation, and vocational pathways.",
    icon: LifeBuoy,
    accent: "orange",
  },
  {
    title: "Research Facilities",
    description:
      "Highly optimized workspace setups, computational server corridors, and extensive subscription credentials.",
    icon: Microscope,
    accent: "indigo",
  },
];
