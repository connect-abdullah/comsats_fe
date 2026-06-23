import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

export type IconType = ComponentType<{ className?: string } & SVGProps<SVGSVGElement>>;

export interface NavItem {
  label: string;
  href: string;
}

export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
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
  category?: string;
}

export interface AdmissionPathway {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export interface CampusLifeCard {
  title: string;
  description: string;
  image: string;
}

export interface ContentItem {
  title: string;
  description?: string;
  image: string;
  date?: string;
  href?: string;
}

export interface Department {
  name: string;
  icon: LucideIcon;
  description: string;
  image: string;
  featured?: boolean;
}

export interface AcademicCard {
  title: string;
  description: string;
  image: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  program: string;
  quote: string;
  image?: string;
}

export interface ContactCard {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  primary?: boolean;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface LibraryStat {
  value: string;
  label: string;
}

export interface LibraryResource {
  title: string;
  description: string;
  icon: LucideIcon;
}
