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
  href?: string;
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

export interface NewsDate {
  day: number;
  month: string;
  year: number;
}

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: "purple" | "blue";
  date: NewsDate;
  href: string;
}

export interface FeaturedNewsArticle extends NewsArticle {
  ctaLabel: string;
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

export interface AcademicDegree {
  name: string;
  abbreviation?: string;
}

export type DegreeLevel = "BS" | "MS" | "PhD";

export interface AcademicDepartment {
  id: string;
  name: string;
  overview: string;
  degrees: AcademicDegree[];
  icon: LucideIcon;
  accent: Department["accent"];
}

export interface CenterOffice {
  name: string;
  abbreviation?: string;
  icon: LucideIcon;
}

export interface AcademicStat {
  value: string;
  label: string;
  helper: string;
  icon: LucideIcon;
  animate?: boolean;
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

export interface MissionPillar {
  title: string;
  description: string;
}

export interface AdminOffice {
  name: string;
}

export type FaqTabId = "general" | "admission" | "scholarships";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqSection {
  id: string;
  title: string;
  items: FaqItem[];
}

export interface QuickActionCard {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  accent: "purple" | "blue" | "amber" | "emerald" | "cyan" | "indigo";
}

export interface AdmissionStat {
  value: string;
  label: string;
  helper?: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description?: string;
}

export interface ProgramCategory {
  title: string;
  description: string;
  disciplines: string[];
  ctaLabel: string;
  href: string;
  accent: "purple" | "blue" | "amber";
  icon: LucideIcon;
}

export interface ScholarshipTier {
  label: string;
  benefit: string;
  criteria: string;
}

export interface ScholarshipCardData {
  id: string;
  title: string;
  description: string;
  eligibility?: string[];
  benefits?: string[];
  requirements?: string[];
  duration?: string;
  tiers?: ScholarshipTier[];
  programs?: string[];
}

export interface WhyChooseFeature {
  title: string;
  description: string;
}

export interface VideoTestimonial {
  id: string;
  name: string;
  designation: string;
  thumbnail: string;
  videoUrl?: string;
}

export interface ResearchStat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface ResearchCenter {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  researchAreas: string[];
  href: string;
  image?: string;
}

export interface PublicationMetric {
  department: string;
  count: number;
}

export interface ConferenceItem {
  name: string;
  tagline?: string;
}

export interface ResearchOpportunity {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "purple" | "blue" | "amber" | "emerald";
}

export interface CollaborationFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ResearchHighlight {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: "purple" | "blue";
  href: string;
  ctaLabel?: string;
  featured?: boolean;
}

export type HeroCtaVariant = "primary" | "secondary" | "shimmer" | "text-link";

export interface HeroCta {
  label: string;
  href: string;
  variant?: HeroCtaVariant;
  external?: boolean;
}

export type PageHeroAlign = "left" | "center";
export type PageHeroSize = "screen" | "compact";
export type PageHeroOverlay = "default" | "strong";

export interface PageHeroProps {
  badge: string;
  title: string;
  backgroundImage: string;
  imageAlt?: string;
  tagline?: string;
  description?: string;
  subDescription?: string;
  align?: PageHeroAlign;
  size?: PageHeroSize;
  showBadgePulse?: boolean;
  ctas?: HeroCta[];
  overlay?: PageHeroOverlay;
  id?: string;
}

export type ShowcaseListType = "chevron" | "check";

export interface ShowcaseList {
  type: ShowcaseListType;
  items: string[];
}

export type ContentShowcaseImageAspect = "16/10" | "4/3";
export type ContentShowcaseImagePosition = "left" | "right";
export type ContentShowcaseImageOverlay = "purple" | "ink";
export type ContentShowcaseBackground = "white" | "surface";
export type ContentShowcaseHeaderVariant = "sectionHeader" | "inline";

export interface ContentShowcaseCta {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export interface ContentShowcaseProps {
  id?: string;
  sectionLabel?: string;
  heading: string;
  description?: string;
  paragraphs?: string[];
  image: string;
  imageAlt: string;
  imageAspect?: ContentShowcaseImageAspect;
  imagePosition?: ContentShowcaseImagePosition;
  imageOverlay?: ContentShowcaseImageOverlay;
  background?: ContentShowcaseBackground;
  list?: ShowcaseList;
  cta?: ContentShowcaseCta;
  headerVariant?: ContentShowcaseHeaderVariant;
  reverseLayout?: boolean;
  priority?: boolean;
}
