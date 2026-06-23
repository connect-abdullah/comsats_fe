import { BookOpen, Monitor, Users } from "lucide-react";
import type { LibraryResource, LibraryStat } from "@/types";

export const LIBRARY_STATS: LibraryStat[] = [
  { value: "120,000+", label: "Print Volumes" },
  { value: "50,000+", label: "Digital Resources" },
  { value: "800+", label: "Study Seats" },
];

export const LIBRARY_RESOURCES: LibraryResource[] = [
  {
    title: "Digital Catalogue",
    description: "Access thousands of e-journals, databases, and research papers online.",
    icon: Monitor,
  },
  {
    title: "Research Support",
    description: "Dedicated librarians assisting faculty and doctoral researchers.",
    icon: BookOpen,
  },
  {
    title: "Study Spaces",
    description: "Quiet zones, group rooms, and 24/7 access during exam periods.",
    icon: Users,
  },
];
