import { IMAGES } from "@/constants/images";
import type { AcademicCard, CampusLifeCard } from "@/types";

export const ACADEMIC_CARDS: AcademicCard[] = [
  {
    title: "Faculty & Departments",
    description:
      "Get in touch with over 500+ esteemed PhD instructors, world-class researchers, and dedicated laboratory technicians.",
    image: IMAGES.academic.facultiesAndDepartments,
    ctaLabel: "Browse Faculty Directory",
  },
  {
    title: "Centers & Offices",
    description:
      "Find strategic organizational offices, executive boards, planning desks, registrars, and active external relations divisions.",
    image: IMAGES.academic.centersAndOffices,
    ctaLabel: "Explore Corporate Offices",
  },
  {
    title: "Course Catalogue",
    description:
      "Interrogate our comprehensive course structures, prerequisites, syllabus definitions, and credit hours distributions.",
    image: IMAGES.academic.courseCatalog,
    ctaLabel: "Launch Program Finder",
  },
];

export const CAMPUS_LIFE_CARDS: CampusLifeCard[] = [
  {
    title: "Student Affairs",
    description:
      "Supporting over 40+ dynamic leadership societies, artistic fraternities, digital gaming groups, and community volunteer programs.",
    image: IMAGES.campusLife.studentAffairs,
    ctaLabel: "Explore Society Directory",
  },
  {
    title: "Modern Wellness",
    description:
      "Fully staffed 24/7 medical centers, on-site diagnostics, counseling clinics, and state-of-the-art sports therapy complexes.",
    image: IMAGES.campusLife.healthCare,
    ctaLabel: "View Health Portal",
  },
  {
    title: "Student Service Center",
    description:
      "Single-point assistance for financial aid planning, documentation, hostel booking, transcripts, and modern transport routing.",
    image: IMAGES.campusLife.studentServiceCenter,
    ctaLabel: "Launch Helpdesk",
  },
];
