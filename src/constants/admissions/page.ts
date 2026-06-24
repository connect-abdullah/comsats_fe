import {
  Award,
  BookOpen,
  FileText,
  Globe,
  GraduationCap,
  Megaphone,
  Microscope,
  MonitorPlay,
  PenLine,
  Users,
} from "lucide-react";
import type {
  AdmissionStat,
  ProcessStep,
  ProgramCategory,
  QuickActionCard,
  ScholarshipCardData,
  TimelineEvent,
  WhyChooseFeature,
} from "@/types";

export const ADMISSIONS_PORTAL_URL = "https://admissions.comsats.edu.pk";

export const ADMISSIONS_HERO = {
  label: "Admissions",
  heading: "Start Your Journey With Us",
  description:
    "COMSATS University Islamabad welcomes students from diverse socio-economic backgrounds through a merit-based admission process.",
  subDescription:
    "Our vibrant academic community brings together talented individuals from different cultures, interests, and disciplines while preparing them for lifelong learning, leadership, innovation, and research excellence.",
  primaryCta: { label: "Apply Now", href: ADMISSIONS_PORTAL_URL },
  secondaryCta: { label: "Explore Programs", href: "/academics" },
  tertiaryCta: { label: "How To Apply", href: "#process" },
};

export const QUICK_ACTIONS: QuickActionCard[] = [
  {
    title: "Admissions Advertisement",
    description: "View official admission notices and announcements.",
    href: ADMISSIONS_PORTAL_URL,
    icon: Megaphone,
    accent: "purple",
  },
  {
    title: "Undergraduate Programs",
    description: "Explore bachelor's degree pathways across all faculties.",
    href: "#programs",
    icon: GraduationCap,
    accent: "blue",
  },
  {
    title: "Graduate Programs",
    description: "Discover advanced master's programs and specializations.",
    href: "#programs",
    icon: BookOpen,
    accent: "amber",
  },
  {
    title: "PhD Programs",
    description:
      "Research-intensive doctoral programs with distinguished faculty.",
    href: "#programs",
    icon: Microscope,
    accent: "indigo",
  },
  {
    title: "How To Apply",
    description: "Step-by-step guide to the online application process.",
    href: "#process",
    icon: PenLine,
    accent: "cyan",
  },
  {
    title: "Apply Now",
    description: "Begin your application through the official portal.",
    href: ADMISSIONS_PORTAL_URL,
    icon: FileText,
    accent: "purple",
  },
  {
    title: "International Students",
    description: "Information for applicants from around the world.",
    href: "#international",
    icon: Globe,
    accent: "emerald",
  },
  {
    title: "Virtual Campus Tour",
    description: "Experience COMSATS campus life from anywhere.",
    href: "/#campus-life",
    icon: MonitorPlay,
    accent: "blue",
  },
];

export const ADMISSION_STATS: AdmissionStat[] = [
  {
    value: "8677+",
    label: "Undergraduate Students",
    helper: "Active learners across diverse programs",
    icon: GraduationCap,
  },
  {
    value: "1911+",
    label: "Graduate Students",
    helper: "Pursuing advanced degrees and research",
    icon: BookOpen,
  },
  {
    value: "357+",
    label: "PhD Faculty",
    helper: "Distinguished academics and researchers",
    icon: Users,
  },
  {
    value: "16231+",
    label: "Scholarships Awarded",
    helper: "Financial support for deserving students",
    icon: Award,
  },
];

export const PROGRAM_CATEGORIES: ProgramCategory[] = [
  {
    title: "Undergraduate Programs",
    description:
      "Explore bachelor's degree programs across engineering, computing, business, architecture, sciences, humanities, and emerging technologies.",
    disciplines: [
      "Engineering",
      "Computing",
      "Business",
      "Architecture",
      "Sciences",
      "Humanities",
      "Emerging Technologies",
    ],
    ctaLabel: "Explore Undergraduate Programs",
    href: ADMISSIONS_PORTAL_URL,
    accent: "purple",
    icon: GraduationCap,
  },
  {
    title: "Graduate Programs",
    description:
      "Advanced master's programs designed to develop leadership, professional expertise, and research capability.",
    disciplines: [
      "Leadership",
      "Professional Expertise",
      "Research Capability",
    ],
    ctaLabel: "Explore Graduate Programs",
    href: ADMISSIONS_PORTAL_URL,
    accent: "blue",
    icon: BookOpen,
  },
  {
    title: "PhD Programs",
    description:
      "Research-intensive doctoral programs supported by distinguished faculty, modern laboratories, and research facilities.",
    disciplines: [
      "Distinguished Faculty",
      "Modern Laboratories",
      "Research Facilities",
    ],
    ctaLabel: "Explore PhD Programs",
    href: ADMISSIONS_PORTAL_URL,
    accent: "amber",
    icon: Microscope,
  },
];

export const ADMISSION_PROCESS: ProcessStep[] = [
  {
    step: 1,
    title: "Explore Programs",
    description: "Browse undergraduate, graduate, and doctoral offerings.",
  },
  {
    step: 2,
    title: "Check Eligibility",
    description: "Review admission requirements and criteria.",
  },
  {
    step: 3,
    title: "Apply Online",
    description: "Submit application through the admissions portal.",
  },
  {
    step: 4,
    title: "Entry Test / Evaluation",
    description: "Complete required admission assessments.",
  },
  {
    step: 5,
    title: "Merit List",
    description: "Monitor merit list announcements.",
  },
  {
    step: 6,
    title: "Confirm Admission",
    description: "Complete fee submission and enrollment.",
  },
];

export const IMPORTANT_DATES: TimelineEvent[] = [
  { date: "31 May", title: "Admissions Open" },
  { date: "08 July", title: "Application Deadline" },
  { date: "28 July", title: "1st Merit List" },
  { date: "06 September", title: "Orientation" },
  { date: "07 September", title: "Classes Begin" },
];

export const WHY_CHOOSE_COMSATS: WhyChooseFeature[] = [
  {
    title: "Merit-Based Admissions",
    description: "Transparent and fair admission process.",
  },
  {
    title: "Distinguished Faculty",
    description: "Highly qualified academics and researchers.",
  },
  {
    title: "Research Excellence",
    description: "Access modern research facilities and opportunities.",
  },
  {
    title: "Scholarships & Financial Support",
    description: "Extensive financial assistance opportunities.",
  },
  {
    title: "Global Exposure",
    description: "International collaborations and exchange opportunities.",
  },
  {
    title: "Industry-Relevant Education",
    description: "Programs aligned with modern industry needs.",
  },
];

export const INTERNATIONAL_STUDENTS = {
  heading: "International Students",
  description:
    "COMSATS University Islamabad welcomes students from around the world and provides an inclusive academic environment that supports cultural diversity, global collaboration, and international learning experiences.",
};

export const SCHOLARSHIPS_HEADLINE = {
  stat: "16,231",
  label: "Scholarships Awarded",
};

export const SCHOLARSHIPS: ScholarshipCardData[] = [
  {
    id: "top-merit",
    title: "CUI ISB Undergraduate Top Merit Scholarship",
    description:
      "Awarded to candidates topping the merit list of each program.",
    eligibility: [
      "Valid for 8 semesters",
      "Subject to eligibility requirements",
      "Non-transferable",
      "Not applicable after program changes",
    ],
    benefits: ["Awarded to top merit list candidates per program"],
    duration: "8 semesters",
  },
  {
    id: "merit-fee-waiver",
    title: "CUI ISB Merit-Based Fee Waiver Scholarship",
    description: "Merit-based tuition fee waivers for eligible programs.",
    programs: [
      "BS English",
      "BS Chemistry",
      "BS Mathematics",
      "BS Media & Communication Studies",
      "BS Physics",
      "BS Economics",
      "BS International Relations",
      "BS Electrical Engineering",
      "BS Electrical Electronics Engineering",
    ],
    tiers: [
      {
        label: "100% Waiver",
        benefit: "100% Tuition Fee Waiver",
        criteria: "Aggregate Merit ≥ 75 — Top 5 students",
      },
      {
        label: "50% Waiver",
        benefit: "50% Tuition Fee Waiver",
        criteria: "Aggregate Merit ≥ 65 and < 75 — Top 5 students",
      },
    ],
  },
  {
    id: "pwwf",
    title: "Punjab Worker Welfare Fund Talent Scholarship",
    description: "Scholarship for eligible candidates through PWWF.",
    requirements: [
      "Apply through Online Admission Portal",
      "Select PWWF option",
      "Upload required documents",
      "Complete process before deadline",
    ],
  },
  {
    id: "external",
    title: "External Scholarships",
    description:
      "Numerous government-funded and externally funded scholarships are announced throughout academic sessions.",
    benefits: [
      "Government-funded scholarships",
      "Externally funded opportunities",
      "Session-based announcements",
    ],
  },
];

export const FAQ_PREVIEW_SECTION = {
  label: "FAQ",
  heading: "Frequently Asked Questions",
  description: "Quick answers to common admissions questions.",
  ctaLabel: "View All FAQs",
  ctaHref: "/admissions/faq",
};

export const FINAL_CTA = {
  heading: "Your Future Starts Here",
  description:
    "Join one of Pakistan's leading universities and become part of a community committed to innovation, research, academic excellence, and future leadership.",
  primaryCta: { label: "Apply Now", href: ADMISSIONS_PORTAL_URL },
  secondaryCta: { label: "View Programs", href: "/academics" },
};

export const FAQ_HERO = {
  heading: "Frequently Asked Questions",
  description:
    "Find answers regarding admissions, eligibility, scholarships, application procedures, testing requirements, and university policies.",
};

export const FAQ_TABS = [
  { id: "general" as const, label: "General Information" },
  { id: "admission" as const, label: "Admission Related Information" },
  { id: "scholarships" as const, label: "Scholarships" },
];
