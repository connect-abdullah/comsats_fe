import { IMAGES } from "@/constants/images";
import type { VideoTestimonial } from "@/types";

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: "student-1",
    name: "Ayesha Khan",
    designation: "BS Computer Science, Class of 2025",
    thumbnail: IMAGES.mediaInsights.studentWeek,
  },
  {
    id: "alumni-1",
    name: "Dr. Hassan Ali",
    designation: "Alumni — Software Engineering Lead",
    thumbnail: IMAGES.campusLife.studentAffairs,
  },
  {
    id: "faculty-1",
    name: "Prof. Dr. Sarah Ahmed",
    designation: "Faculty of Engineering",
    thumbnail: IMAGES.academic.facultiesAndDepartments,
  },
  {
    id: "student-2",
    name: "Usman Malik",
    designation: "MS Artificial Intelligence",
    thumbnail: IMAGES.mediaInsights.sportsWeek,
  },
  {
    id: "industry-1",
    name: "Tech Industry Partner",
    designation: "Industry Collaboration",
    thumbnail: IMAGES.campusLife.studentServiceCenter,
  },
  {
    id: "student-3",
    name: "Fatima Noor",
    designation: "BS Electrical Engineering",
    thumbnail: IMAGES.mediaInsights.qawaliNight,
  },
  {
    id: "alumni-2",
    name: "Bilal Hussain",
    designation: "Alumni — Research Scientist",
    thumbnail: IMAGES.aboutUs.about1,
  },
  {
    id: "student-4",
    name: "Zainab Tariq",
    designation: "PhD Candidate, Computing",
    thumbnail: IMAGES.mediaInsights.heroesOfMountains,
  },
];

export const VIDEO_TESTIMONIALS_SECTION = {
  label: "Testimonials",
  heading: "Hear From Our Community",
  description:
    "Discover the experiences of students, alumni, faculty, and industry partners who have been part of the COMSATS University Islamabad journey.",
  ctaLabel: "View More Testimonials",
  ctaHref: "/admissions",
};
