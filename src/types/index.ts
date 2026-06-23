import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

/** Any icon component (lucide or custom brand SVG) usable with a className. */
export type IconType = ComponentType<
  { className?: string } & SVGProps<SVGSVGElement>
>;

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface MediaItem {
  title: string;
  thumbnail: string;
  videoUrl: string;
  type: "video" | "image";
}

export interface ProgramCard {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
  deadline: string;
  ctaLabel: string;
  accent: "purple" | "blue" | "amber";
}

export interface CampusLifeCard {
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
}

export interface ContentItem {
  title: string;
  description?: string;
  image: string;
  date?: string;
  href?: string;
  category?: string;
  categoryColor?: "purple" | "blue";
}

export interface Department {
  name: string;
  icon: LucideIcon;
  description: string;
  accent:
    | "purple"
    | "blue"
    | "amber"
    | "emerald"
    | "rose"
    | "indigo"
    | "cyan"
    | "teal";
}

export interface AcademicCard {
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  accent:
    | "purple"
    | "blue"
    | "amber"
    | "emerald"
    | "rose"
    | "cyan"
    | "teal"
    | "indigo"
    | "orange";
}

export interface Statistic {
  value: string;
  label: string;
  subtitle?: string;
  helper?: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  program: string;
  quote: string;
  image?: string;
}

export interface ContactCard {
  icon: LucideIcon;
  title: string;
  label: string;
  value: string;
  meta?: string;
  href?: string;
  accent: "purple" | "blue" | "emerald" | "amber";
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
