import {
  Atom,
  BookOpen,
  Briefcase,
  Building2,
  CircuitBoard,
  Cloud,
  Cpu,
  FlaskConical,
  HeartPulse,
  Layers,
  Palette,
  Ratio,
  Sigma,
  TrendingUp,
  Users,
  Zap,
  Globe,
  Lightbulb,
  Award,
  Rocket,
  Monitor,
  BookMarked,
} from "lucide-react";
import type {
  AcademicDepartment,
  AcademicStat,
  CenterOffice,
} from "@/types";

export const ACADEMIC_STATS: AcademicStat[] = [
  {
    value: "2767",
    label: "Faculty Members",
    helper:
      "Experienced faculty members dedicated to teaching, research, and innovation.",
    icon: Users,
    animate: false,
  },
  {
    value: "4032",
    label: "Student–Teacher Ratio",
    helper:
      "Personalized learning experience through strong academic engagement.",
    icon: Ratio,
    animate: false,
  },
  {
    value: "20",
    label: "Degree Programs",
    helper:
      "Undergraduate, Graduate, and Doctoral programs across multiple disciplines.",
    icon: Layers,
    animate: false,
  },
];

export const ACADEMIC_DEPARTMENTS: AcademicDepartment[] = [
  {
    id: "architecture",
    name: "Department of Architecture",
    overview:
      "Shaping built environments through sustainable design, spatial planning, and creative architectural practice grounded in research and professional standards.",
    icon: Building2,
    accent: "amber",
    degrees: [
      { name: "Bachelor of Architecture", abbreviation: "B.Arch" },
      { name: "Bachelor of Interior Design", abbreviation: "BID" },
      {
        name: "Master of Science in Interior & Spatial Design",
        abbreviation: "MS",
      },
    ],
  },
  {
    id: "art-design",
    name: "Department of Art & Design",
    overview:
      "Cultivating visual literacy, creative expression, and design thinking across fine arts, media, and contemporary visual culture.",
    icon: Palette,
    accent: "emerald",
    degrees: [
      { name: "Bachelor of Fine Arts", abbreviation: "BFA" },
      { name: "Bachelor of Design", abbreviation: "B.Des" },
    ],
  },
  {
    id: "economics",
    name: "Department of Economics",
    overview:
      "Advancing analytical rigor in economic theory, policy analysis, and data-driven decision-making for complex global challenges.",
    icon: TrendingUp,
    accent: "rose",
    degrees: [
      {
        name: "Bachelor of Science in Economics with Data Science",
        abbreviation: "BS",
      },
      { name: "Bachelor of Science in Economics", abbreviation: "BS" },
      { name: "Master of Science in Economics", abbreviation: "MS" },
      { name: "Doctor of Philosophy in Economics", abbreviation: "PhD" },
    ],
  },
  {
    id: "management-sciences",
    name: "Department of Management Sciences",
    overview:
      "Developing business leaders through accredited programs in administration, finance, analytics, and strategic management.",
    icon: Briefcase,
    accent: "indigo",
    degrees: [
      {
        name: "Bachelor of Science in Business Administration",
        abbreviation: "NBEAC Accredited",
      },
      {
        name: "Bachelor of Science in Accounting & Finance",
        abbreviation: "NBEAC Accredited",
      },
      {
        name: "Bachelor of Science in Business Data Analytics",
        abbreviation: "BS",
      },
      { name: "Master of Science in Management Sciences", abbreviation: "MS" },
      {
        name: "Master of Science in Project Management",
        abbreviation: "MSPM",
      },
      { name: "Master of Business Administration", abbreviation: "MBA" },
      {
        name: "Doctor of Philosophy in Management Sciences",
        abbreviation: "PhD",
      },
    ],
  },
  {
    id: "computer-science",
    name: "Department of Computer Science",
    overview:
      "Pioneering software engineering, artificial intelligence, cybersecurity, and data science through industry-aligned curricula and research.",
    icon: Cpu,
    accent: "purple",
    degrees: [
      { name: "Bachelor of Science in Computer Science", abbreviation: "BS" },
      { name: "Bachelor of Science in Software Engineering", abbreviation: "BS" },
      { name: "Bachelor of Science in Artificial Intelligence", abbreviation: "BS" },
      { name: "Bachelor of Science in Cyber Security", abbreviation: "BS" },
      { name: "Bachelor of Science in Data Science", abbreviation: "BS" },
      { name: "Master of Science in Computer Science", abbreviation: "MS" },
      { name: "Master of Science in Artificial Intelligence", abbreviation: "MS" },
      {
        name: "Doctor of Philosophy in Computer Science",
        abbreviation: "PhD",
      },
    ],
  },
  {
    id: "humanities",
    name: "Department of Humanities",
    overview:
      "Exploring language, culture, media, psychology, and international relations to foster critical thinking and global citizenship.",
    icon: BookOpen,
    accent: "teal",
    degrees: [
      {
        name: "Bachelor of Science in International Relations",
        abbreviation: "BS",
      },
      {
        name: "Bachelor of Science in Media & Communication Studies",
        abbreviation: "BS",
      },
      { name: "Bachelor of Science in English", abbreviation: "BS" },
      { name: "Bachelor of Science in Psychology", abbreviation: "BS" },
      { name: "Master of Science in Education", abbreviation: "MS" },
      { name: "Master of Science in English Literature", abbreviation: "MS" },
      { name: "Master of Science in English Linguistics", abbreviation: "MS" },
      {
        name: "Master of Science in International Relations",
        abbreviation: "MS",
      },
      { name: "Master of Science in Seerah Studies", abbreviation: "MS" },
      {
        name: "Doctor of Philosophy in International Relations",
        abbreviation: "PhD",
      },
    ],
  },
  {
    id: "electrical-engineering",
    name: "Department of Electrical Engineering",
    overview:
      "Engineering power systems, telecommunications, and electronics through rigorous laboratory work and applied research.",
    icon: Zap,
    accent: "blue",
    degrees: [
      {
        name: "Bachelor of Science in Electrical Engineering",
        abbreviation: "BS",
      },
      { name: "Bachelor of Science in Electronics", abbreviation: "BS" },
      {
        name: "Master of Science in Electrical Engineering",
        abbreviation: "MS",
      },
      {
        name: "Doctor of Philosophy in Electrical Engineering",
        abbreviation: "PhD",
      },
    ],
  },
  {
    id: "computer-engineering",
    name: "Department of Computer Engineering",
    overview:
      "Integrating hardware and software design for embedded systems, computing architectures, and next-generation digital infrastructure.",
    icon: CircuitBoard,
    accent: "cyan",
    degrees: [
      {
        name: "Bachelor of Science in Computer Engineering",
        abbreviation: "BS",
      },
      {
        name: "Master of Science in Computer Engineering",
        abbreviation: "MS",
      },
      {
        name: "Doctor of Philosophy in Computer Engineering",
        abbreviation: "PhD",
      },
    ],
  },
  {
    id: "health-informatics",
    name: "Department of Health Informatics",
    overview:
      "Bridging healthcare and information technology to improve clinical systems, health data management, and patient outcomes.",
    icon: HeartPulse,
    accent: "rose",
    degrees: [
      {
        name: "Master of Science in Health Informatics",
        abbreviation: "MS",
      },
    ],
  },
  {
    id: "biosciences",
    name: "Department of Biosciences",
    overview:
      "Advancing life sciences through molecular biology, bioinformatics, microbiology, and interdisciplinary biomedical research.",
    icon: FlaskConical,
    accent: "emerald",
    degrees: [
      { name: "Bachelor of Science in Biosciences", abbreviation: "BS" },
      { name: "Bachelor of Science in Bioinformatics", abbreviation: "BS" },
      {
        name: "Master of Science in Biochemistry & Molecular Biology",
        abbreviation: "MS",
      },
      { name: "Master of Science in Biosciences", abbreviation: "MS" },
      {
        name: "Master of Science in Microbiology & Immunology",
        abbreviation: "MS",
      },
      { name: "Master of Science in Molecular Genetics", abbreviation: "MS" },
      { name: "Master of Science in Bioinformatics", abbreviation: "MS" },
      {
        name: "Doctor of Philosophy in Biochemistry & Molecular Biology",
        abbreviation: "PhD",
      },
      { name: "Doctor of Philosophy in Biosciences", abbreviation: "PhD" },
      {
        name: "Doctor of Philosophy in Microbiology & Immunology",
        abbreviation: "PhD",
      },
      {
        name: "Doctor of Philosophy in Molecular Genetics",
        abbreviation: "PhD",
      },
      { name: "Doctor of Philosophy in Bioinformatics", abbreviation: "PhD" },
    ],
  },
  {
    id: "mathematics",
    name: "Department of Mathematics",
    overview:
      "Building analytical foundations in pure and applied mathematics, statistics, and computational modeling for science and industry.",
    icon: Sigma,
    accent: "indigo",
    degrees: [
      {
        name: "Bachelor of Science in Mathematics with Data Science",
        abbreviation: "BS",
      },
      { name: "Bachelor of Science in Mathematics", abbreviation: "BS" },
      {
        name: "Bachelor of Science in Mathematics (Information Technology Specialization)",
        abbreviation: "BS",
      },
      { name: "Master of Science in Mathematics", abbreviation: "MS" },
      { name: "Doctor of Philosophy in Mathematics", abbreviation: "PhD" },
    ],
  },
  {
    id: "meteorology",
    name: "Department of Meteorology",
    overview:
      "Studying atmospheric science, remote sensing, and GIS to address climate, weather forecasting, and environmental monitoring.",
    icon: Cloud,
    accent: "cyan",
    degrees: [
      {
        name: "Bachelor of Science in Remote Sensing & GIS",
        abbreviation: "BS",
      },
      { name: "Master of Science in Meteorology", abbreviation: "MS" },
      {
        name: "Master of Science in Remote Sensing & GIS",
        abbreviation: "MS",
      },
      { name: "Doctor of Philosophy in Meteorology", abbreviation: "PhD" },
      {
        name: "Doctor of Philosophy in Remote Sensing & GIS",
        abbreviation: "PhD",
      },
    ],
  },
  {
    id: "physics",
    name: "Department of Physics",
    overview:
      "Exploring fundamental and applied physics through advanced laboratory research, computational methods, and interdisciplinary science.",
    icon: Atom,
    accent: "purple",
    degrees: [
      { name: "Bachelor of Science in Physics", abbreviation: "BS" },
      {
        name: "Bachelor of Science in Electronics & Computing",
        abbreviation: "BS",
      },
      { name: "Master of Science in Physics", abbreviation: "MS" },
      { name: "Doctor of Philosophy in Physics", abbreviation: "PhD" },
    ],
  },
];

export const CENTERS_OFFICES: CenterOffice[] = [
  {
    name: "Career Development Center",
    abbreviation: "CDC",
    icon: Rocket,
  },
  {
    name: "Information Technology Center",
    icon: Monitor,
  },
  {
    name: "International Office",
    icon: Globe,
  },
  {
    name: "Office of Research Innovation & Commercialization",
    abbreviation: "ORIC",
    icon: Lightbulb,
  },
  {
    name: "Professional Development",
    icon: Award,
  },
  {
    name: "POLs Online",
    icon: BookMarked,
  },
  {
    name: "Quality Enhancement Cell",
    abbreviation: "QEC",
    icon: Award,
  },
  {
    name: "Student Startup Business Center",
    abbreviation: "SSBC",
    icon: Rocket,
  },
];

export const CENTERS_DESCRIPTION =
  "The CUI academic ecosystem is supported through specialized centers and offices that provide career guidance, international collaboration opportunities, innovation support, quality assurance, professional development, and student entrepreneurship resources.";

export const COURSE_CATALOGUE = {
  heading: "Course Catalogue",
  description:
    "The CUI Course Catalogue Portal serves as a dedicated information and support platform designed specifically for faculty and staff. It acts as a centralized hub for academic resources, helping users access schemes of study, available courses, and comprehensive program information across the university.",
  features: [
    "Scheme of Studies",
    "Course Information",
    "Academic Resources",
    "Faculty Support",
    "Curriculum Access",
  ],
  ctaLabel: "Explore Course Catalogue",
  ctaHref: "#",
};
