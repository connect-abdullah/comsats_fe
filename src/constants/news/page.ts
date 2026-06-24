import { IMAGES } from "@/constants/shared/images";
import type { FeaturedNewsArticle, NewsArticle } from "@/types";

export const FEATURED_NEWS: FeaturedNewsArticle[] = [
  {
    id: "hec-research-award",
    title: "COMSATS Faculty Wins Prestigious HEC Research Award",
    description:
      "The Higher Education Commission honors CUI's top AI lab for path-breaking neural grid innovations and applied research excellence.",
    image: IMAGES.academic.centersAndOffices,
    category: "RESEARCH",
    categoryColor: "purple",
    date: { day: 14, month: "October", year: 2026 },
    href: "#",
    ctaLabel: "Read Story",
  },
  {
    id: "ai-symposium-2026",
    title: "International AI Symposium 2026 Begins at CUI",
    description:
      "Elite minds from 15+ global universities gather at COMSATS to map next-generation deep-tech standards and collaborative research.",
    image: IMAGES.academic.facultiesAndDepartments,
    category: "ACADEMIC CAMPUS",
    categoryColor: "blue",
    date: { day: 8, month: "October", year: 2026 },
    href: "#",
    ctaLabel: "Read Story",
  },
  {
    id: "corporate-placements",
    title: "Fall Corporate Placement Program Records 94% Match",
    description:
      "Leading global companies lock outstanding talent directly from our graduating class through the Career Development Center.",
    image: IMAGES.campusLife.studentServiceCenter,
    category: "PLACEMENTS",
    categoryColor: "purple",
    date: { day: 29, month: "September", year: 2026 },
    href: "#",
    ctaLabel: "Read Story",
  },
  {
    id: "qawali-night-2026",
    title: "Qawali Night 2026 Lights Up the Islamabad Campus",
    description:
      "Students, faculty, and alumni came together for an unforgettable evening of culture, music, and community celebration.",
    image: IMAGES.mediaInsights.qawaliNight,
    category: "EVENTS",
    categoryColor: "blue",
    date: { day: 22, month: "September", year: 2026 },
    href: "#",
    ctaLabel: "Read Story",
  },
  {
    id: "sports-week-champions",
    title: "CUI Sports Week Crowns New Inter-Department Champions",
    description:
      "Athletes from across faculties competed in cricket, football, and athletics during the annual campus sports festival.",
    image: IMAGES.mediaInsights.sportsWeek,
    category: "STUDENT LIFE",
    categoryColor: "purple",
    date: { day: 15, month: "September", year: 2026 },
    href: "#",
    ctaLabel: "Read Story",
  },
  {
    id: "admissions-fall-2026",
    title: "Admissions Fall 2026 Now Open Across All Faculties",
    description:
      "Prospective students can explore programs, scholarships, and application deadlines for the upcoming academic session.",
    image: IMAGES.hero.background,
    category: "ANNOUNCEMENTS",
    categoryColor: "blue",
    date: { day: 1, month: "September", year: 2026 },
    href: "/admissions",
    ctaLabel: "Apply Now",
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  ...FEATURED_NEWS,
  {
    id: "student-week-2026",
    title: "Student Week 2026 Kicks Off with Innovation Showcase",
    description:
      "Campus buzzes with project exhibitions, hackathons, and student-led workshops across engineering and sciences.",
    image: IMAGES.mediaInsights.studentWeek,
    category: "STUDENT LIFE",
    categoryColor: "blue",
    date: { day: 10, month: "September", year: 2026 },
    href: "#",
  },
  {
    id: "library-digital-expansion",
    title: "Junaid Zaidi Library Expands Digital Research Access",
    description:
      "New e-journal subscriptions and study spaces strengthen research support for faculty and postgraduate scholars.",
    image: IMAGES.library.junaidZaidi,
    category: "ACADEMIC CAMPUS",
    categoryColor: "purple",
    date: { day: 5, month: "September", year: 2026 },
    href: "#",
  },
  {
    id: "healthcare-initiative",
    title: "Campus Healthcare Center Launches Wellness Program",
    description:
      "A new preventive health initiative offers screenings, counseling, and fitness guidance for the university community.",
    image: IMAGES.campusLife.healthCare,
    category: "ANNOUNCEMENTS",
    categoryColor: "blue",
    date: { day: 28, month: "August", year: 2026 },
    href: "#",
  },
  {
    id: "research-grant-physics",
    title: "Physics Department Secures Major Research Grant",
    description:
      "Funding will support quantum materials research and advanced laboratory instrumentation at the Islamabad campus.",
    image: IMAGES.academic.facultiesAndDepartments,
    category: "RESEARCH",
    categoryColor: "purple",
    date: { day: 20, month: "August", year: 2026 },
    href: "#",
  },
  {
    id: "international-faculty-exchange",
    title: "International Faculty Exchange Program Announced",
    description:
      "COMSATS partners with leading universities to enable cross-border teaching and collaborative research visits.",
    image: IMAGES.campus.overview,
    category: "ACADEMIC CAMPUS",
    categoryColor: "blue",
    date: { day: 12, month: "August", year: 2026 },
    href: "#",
  },
  {
    id: "heroes-of-the-mountains",
    title: "Heroes of the Mountains Documentary Premieres at CUI",
    description:
      "A student-produced documentary highlighting resilience and adventure premiered to a packed campus auditorium.",
    image: IMAGES.mediaInsights.heroesOfMountains,
    category: "EVENTS",
    categoryColor: "purple",
    date: { day: 3, month: "August", year: 2026 },
    href: "#",
  },
  {
    id: "sports-wellness-center",
    title: "Sports & Wellness Center Opens Extended Hours",
    description:
      "Facilities now offer evening access for students balancing academic schedules with fitness and recreation.",
    image: IMAGES.campusLife.sportsWellness,
    category: "STUDENT LIFE",
    categoryColor: "blue",
    date: { day: 25, month: "July", year: 2026 },
    href: "#",
  },
  {
    id: "startup-incubator",
    title: "SSBC Incubator Welcomes Five New Student Startups",
    description:
      "The Student Startup Business Center mentors early-stage ventures in fintech, health tech, and ed-tech.",
    image: IMAGES.academic.centersAndOffices,
    category: "RESEARCH",
    categoryColor: "purple",
    date: { day: 18, month: "July", year: 2026 },
    href: "#",
  },
  {
    id: "leadership-address",
    title: "Rector Addresses Faculty on Strategic Vision 2030",
    description:
      "Leadership outlined priorities for research commercialization, internationalization, and academic quality enhancement.",
    image: IMAGES.leadership.director,
    category: "ANNOUNCEMENTS",
    categoryColor: "blue",
    date: { day: 10, month: "July", year: 2026 },
    href: "#",
  },
  {
    id: "student-affairs-orientation",
    title: "New Student Orientation Welcomes Fall 2026 Cohort",
    description:
      "Freshmen participated in campus tours, faculty meet-and-greets, and student society introductions.",
    image: IMAGES.campusLife.studentAffairs,
    category: "STUDENT LIFE",
    categoryColor: "purple",
    date: { day: 2, month: "July", year: 2026 },
    href: "#",
  },
];
