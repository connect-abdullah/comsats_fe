import { MapPin, Award, Rocket, Cpu } from "lucide-react";
import type { Statistic } from "@/types";

export const ABOUT_STATS: Statistic[] = [
  {
    value: "7+",
    label: "Nationwide Campuses",
    subtitle: "Nationwide Campuses",
    helper: "Providing decentralized world-class access.",
    icon: MapPin,
  },
  {
    value: "Top Ranked",
    label: "University in Pakistan",
    subtitle: "University in Pakistan",
    helper: "Constantly certified by local and global boards.",
    icon: Award,
  },
  {
    value: "Future Ready",
    label: "Interactive Education",
    subtitle: "Interactive Education",
    helper: "Curriculum optimized for emerging career sectors.",
    icon: Rocket,
  },
  {
    value: "AI Driven",
    label: "Innovation Research Labs",
    subtitle: "Innovation Research Labs",
    helper: "Deep tech research applied to global frameworks.",
    icon: Cpu,
  },
];
