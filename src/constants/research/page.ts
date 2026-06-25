import {
  Atom,
  Beaker,
  BookOpen,
  Briefcase,
  Building2,
  Cpu,
  FlaskConical,
  Globe2,
  GraduationCap,
  Handshake,
  Landmark,
  Lightbulb,
  Microscope,
  Network,
  Scale,
  Sparkles,
  Zap,
} from "lucide-react";
import { IMAGES } from "@/constants/shared/images";
import type {
  CollaborationFeature,
  ConferenceItem,
  PublicationMetric,
  ResearchCenter,
  ResearchHighlight,
  ResearchOpportunity,
  ResearchStat,
} from "@/types";

export const RESEARCH_HERO = {
  label: "Research",
  heading: "Shaping Tomorrow's World Through Research & Innovation",
  description:
    "COMSATS University Islamabad is committed to advancing knowledge through impactful research, innovation, interdisciplinary collaboration, and academic excellence. Our researchers, faculty, and students contribute to solving global challenges through cutting-edge discoveries and transformative ideas.",
  primaryCta: { label: "Explore Research Centers", href: "#research-centers" },
  secondaryCta: { label: "View Publications", href: "#research-output" },
  tertiaryCta: { label: "Meet Our Researchers", href: "#research-highlights" },
};

export const PUBLICATION_OUTPUT: PublicationMetric[] = [
  { department: "Computer Science", count: 1785 },
  { department: "Bio Sciences", count: 1409 },
  { department: "Electrical & Computer Engineering", count: 1132 },
  { department: "Physics", count: 755 },
  { department: "Chemistry", count: 613 },
  { department: "Humanities", count: 418 },
  { department: "Economics", count: 397 },
  { department: "Management Sciences", count: 386 },
];

export const RESEARCH_IMPACT_STATS: ResearchStat[] = PUBLICATION_OUTPUT.map(
  (item) => ({
    value: `${item.count.toLocaleString()}+`,
    label: `${item.department} Publications`,
    icon: getDepartmentIcon(item.department),
  }),
);

function getDepartmentIcon(department: string) {
  const icons: Record<string, typeof Cpu> = {
    "Computer Science": Cpu,
    "Bio Sciences": Microscope,
    "Electrical & Computer Engineering": Zap,
    Physics: Atom,
    Chemistry: FlaskConical,
    Humanities: BookOpen,
    Economics: Scale,
    "Management Sciences": Briefcase,
  };
  return icons[department] ?? Beaker;
}

export const RESEARCH_CENTERS_SECTION = {
  label: "Research Centers & Labs",
  heading: "Research Centers & Labs",
  description:
    "COMSATS University Islamabad hosts specialized research centers and laboratories dedicated to addressing contemporary scientific, technological, social, and policy challenges through interdisciplinary research and innovation.",
};

export const RESEARCH_CENTERS: ResearchCenter[] = [
  {
    id: "cps",
    name: "Centre for Policy Studies (CPS)",
    description:
      "The Centre for Policy Studies (CPS) aims to bridge the gap between academia, research, and public policy-making processes. Its mission is to strengthen evidence-based policymaking through research, collaboration, and strategic partnerships.",
    highlights: [
      "Combines academicians, researchers, policy experts, and public sector practitioners",
      "Evaluates Pakistan's policy alternatives using international best practices",
      "Collaborates with leading policy institutions and think tanks worldwide",
    ],
    researchAreas: [
      "Public Policy",
      "Governance",
      "Comparative Research",
      "Evidence-Based Policy",
    ],
    href: "#",
    image: IMAGES.research.physicsDepartment,
  },
];

export const RESEARCH_OUTPUT_SECTION = {
  label: "Research Output",
  heading: "Research Output",
  description:
    "Explore department-wise research contributions and publication output across COMSATS University Islamabad.",
  cta: { label: "View Complete Research Output", href: "#" },
};

export const CONFERENCES_SECTION = {
  label: "Conferences & Workshops",
  heading: "Conferences & Workshops",
  description:
    "COMSATS regularly hosts conferences, forums, seminars, and workshops that foster collaboration, knowledge sharing, and innovation.",
};

export const CONFERENCES: ConferenceItem[] = [
  {
    name: "SAICON",
    tagline: "Annual international conference on applied sciences",
  },
  {
    name: "PAK-CHINA BUSINESS FORUM",
    tagline: "Cross-border business and innovation dialogue",
  },
  {
    name: "Vice Chancellor's Forum",
    tagline: "Leadership and academic policy discourse",
  },
  {
    name: "Frontiers of Information Technology (FIT)",
    tagline: "Premier IT research and industry forum",
  },
];

export const RESEARCH_OPPORTUNITIES_SECTION = {
  label: "Research Opportunities",
  heading: "Research Opportunities",
  description:
    "Students and faculty are encouraged to participate in research projects, innovation initiatives, funded programs, and interdisciplinary collaborations.",
};

export const RESEARCH_OPPORTUNITIES: ResearchOpportunity[] = [
  {
    title: "Undergraduate Research",
    description: "Early exposure to academic research.",
    icon: GraduationCap,
    accent: "purple",
  },
  {
    title: "Graduate Research",
    description: "Advanced research projects and thesis opportunities.",
    icon: BookOpen,
    accent: "blue",
  },
  {
    title: "PhD Research",
    description: "High-impact research under expert supervision.",
    icon: Microscope,
    accent: "amber",
  },
  {
    title: "Industry Collaboration",
    description:
      "Research partnerships with industry and government organizations.",
    icon: Handshake,
    accent: "emerald",
  },
];

export const COLLABORATION_SECTION = {
  label: "Innovation & Collaboration",
  heading: "Innovation & Collaboration",
  description:
    "COMSATS fosters a vibrant research ecosystem through global partnerships, funding support, and interdisciplinary innovation.",
};

export const COLLABORATION_FEATURES: CollaborationFeature[] = [
  {
    title: "International Collaborations",
    description: "Global academic partnerships.",
    icon: Globe2,
  },
  {
    title: "Industry Partnerships",
    description: "Applied research and innovation.",
    icon: Building2,
  },
  {
    title: "Research Grants",
    description: "Funding support for impactful research.",
    icon: Landmark,
  },
  {
    title: "Innovation Ecosystem",
    description: "Promoting entrepreneurship and commercialization.",
    icon: Lightbulb,
  },
  {
    title: "Knowledge Exchange",
    description: "Collaborative learning and research networks.",
    icon: Network,
  },
  {
    title: "Interdisciplinary Research",
    description: "Cross-department research initiatives.",
    icon: Sparkles,
  },
];

export const RESEARCH_HIGHLIGHTS_SECTION = {
  label: "Research Highlights",
  heading: "Research Highlights",
  description:
    "Discover breakthrough research, student innovations, faculty achievements, awards, and funded projects from across COMSATS University Islamabad.",
  viewAllCta: { label: "View All Research News", href: "/news" },
};

export const RESEARCH_HIGHLIGHTS: ResearchHighlight[] = [
  {
    id: "featured-neural-grid",
    title: "Breakthrough in Neural Grid Computing Earns National Recognition",
    description:
      "COMSATS faculty lead a pioneering AI research initiative recognized for advancing sustainable energy systems through intelligent grid optimization.",
    image: IMAGES.research.researcher,
    category: "Breakthrough Research",
    categoryColor: "purple",
    href: "/news",
    ctaLabel: "Read Story",
    featured: true,
  },
  {
    id: "student-innovation-award",
    title: "Student Team Wins Innovation Challenge for Biomedical Device",
    description:
      "Undergraduate researchers develop a low-cost diagnostic tool earning acclaim at a national student innovation competition.",
    image: IMAGES.academic.facultiesAndDepartments,
    category: "Student Innovations",
    categoryColor: "blue",
    href: "/news",
  },
  {
    id: "hec-research-grant",
    title: "Faculty Secure Multi-Million HEC Research Grant",
    description:
      "Interdisciplinary team awarded funding for advanced materials research with applications in renewable energy and healthcare.",
    image: IMAGES.academic.centersAndOffices,
    category: "Funded Projects",
    categoryColor: "purple",
    href: "/news",
  },
  {
    id: "international-collaboration",
    title: "COMSATS Partners with Global Universities on Climate Research",
    description:
      "New international collaboration expands climate modeling capabilities and joint publication output across partner institutions.",
    image: IMAGES.research.physicsDepartment,
    category: "Faculty Achievements",
    categoryColor: "blue",
    href: "/news",
  },
];

export const RESEARCH_FINAL_CTA = {
  heading: "Join a Community of Researchers and Innovators",
  description:
    "Discover opportunities to contribute to groundbreaking research, collaborate with distinguished faculty, and shape solutions for the challenges of tomorrow.",
  primaryCta: {
    label: "Explore Research Opportunities",
    href: "#research-opportunities",
  },
  secondaryCta: {
    label: "Meet Our Researchers",
    href: "#research-highlights",
  },
};
