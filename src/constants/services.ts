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
      "A secure, monitored campus with round-the-clock safety protocols for every student.",
    icon: ShieldCheck,
  },
  {
    title: "Regular Classes",
    description:
      "A consistent academic calendar that keeps learning on track all year long.",
    icon: CalendarClock,
  },
  {
    title: "Highly Qualified Teachers",
    description:
      "Learn from PhD faculty and industry experts driving research and innovation.",
    icon: GraduationCap,
  },
  {
    title: "Modern Classrooms",
    description:
      "Smart, technology-enabled classrooms designed for interactive learning.",
    icon: Presentation,
  },
  {
    title: "Cafeteria",
    description:
      "Hygienic, diverse dining options to fuel your day on campus.",
    icon: Coffee,
  },
  {
    title: "Transport",
    description:
      "Reliable transport routes connecting students across Islamabad.",
    icon: Bus,
  },
  {
    title: "Sports Facilities",
    description:
      "Indoor and outdoor sports arenas promoting health and team spirit.",
    icon: Trophy,
  },
  {
    title: "State-of-the-Art Labs",
    description:
      "Advanced laboratories equipped for hands-on experimentation.",
    icon: FlaskConical,
  },
  {
    title: "Student Support Services",
    description:
      "Counseling, guidance and academic support whenever you need it.",
    icon: LifeBuoy,
  },
  {
    title: "Research Facilities",
    description:
      "Dedicated research centers powering breakthrough discoveries.",
    icon: Microscope,
  },
];
