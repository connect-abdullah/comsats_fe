import { IMAGES } from "@/constants/shared/images";
import type { AdminOffice, MissionPillar } from "@/types";

export const ABOUT_HERO = {
  label: "About COMSATS",
  heading: "About Islamabad Campus",
  tagline: "Discover your Potential; Shape your Future",
  image: IMAGES.aboutUs.parkingBuilding,
};

export const ABOUT_INTRO = {
  label: "About COMSATS",
  heading: "About Islamabad Campus",
  paragraphs: [
    "COMSATS University Islamabad (CUI) is an innovative institution of learning and development. The main focus of CUI in the coming years will be to transform CUI to meet the challenges of a rapidly changing technological environment as well as societal needs through the best affordable academic programs at par with leading global standards, within Pakistan.",
    "The vision and mission of the CUI is given below:",
  ],
  image: IMAGES.aboutUs.about1,
  imageAlt: "COMSATS University Islamabad campus and academic facilities",
};

export const ABOUT_VISION = {
  heading: "Vision",
  text: "The COMSATS University Islamabad envisions assuming a truly national character for itself in the years to come. It envisions having presence in all provinces of the country. It sees for itself a position among the top five (5) universities in the country; among top 100 universities in the developing countries and top 300, 200, 100 universities in the world respectively in the 5, 10 and 15-years' time horizon.",
};

export const ABOUT_MISSION = {
  heading: "Mission",
  intro:
    "The COMSATS University Islamabad, founded in the belief that understanding enriches all people, is dedicated to the search for truth through advancement of learning and extending the frontiers of knowledge; to the sharing of this knowledge through education in an academically diverse range of disciplines and subjects; and to the application of this knowledge to benefit the people of Pakistan, the Muslim Ummah, and the World, at large. The University's mission is threefold:",
};

export const MISSION_PILLARS: MissionPillar[] = [
  {
    title: "Research and Discovery",
    description:
      "Generate and preserve knowledge, understanding, and creativity by triggering enquiry, conducting high-quality research, and promoting scholarship, that benefit students, scholars, and communities across the country, the Muslim Ummah, and the World, at large.",
  },
  {
    title: "Teaching and Learning",
    description:
      "Share that knowledge, understanding, and creativity by providing a broad range of educational programs in a diverse community of learners and teachers, and prepare graduate, professional, and undergraduate students, as well as non-degree-seeking students interested in continuing education and lifelong learning, for assuming active roles in competitive and culturally diverse environs.",
  },
  {
    title: "Outreach and Public Service",
    description:
      "Extend, apply, and exchange knowledge between the University and society by applying scholarly expertise to social and technological problems, helping organizations and individuals respond to their changing environments, and making the knowledge and resources created and preserved at the University accessible to the citizens. Using the resources of its multiple campuses in an integrated fashion, the University vies to strengthen the services to the state through the education of a modern workforce, research and development, technology commercialization, and establishing and promoting partnerships with business, government and community groups.",
  },
];

export const ABOUT_HISTORY = {
  label: "CUI History",
  heading: "History",
  paragraphs: [
    "The COMSATS University Islamabad (CUI) was established in 1998, as COMSATS Institute of Information Technology (CIIT), as a project of the Commission on Science and Technology for Sustainable Development in the South (COMSATS). Then, CIIT had the status of a public sector degree awarding higher education institution and was given charter by the Federal Government in August 2000. Later, CIIT has been upgraded to a Federally Chartered University in April 2018 under the COMSATS University Islamabad.",
    "The CUI functions under the governance of the Senate which is chaired by the Chancellor of the university. The President of Islamic Republic of Pakistan is the Chancellor of the University. Besides Islamabad, it has campuses in Lahore, Abbottabad, Wah, Attock, Sahiwal, Vehari and a Virtual campus as well.",
  ],
  image: IMAGES.aboutUs.about3,
  imageAlt: "COMSATS University Islamabad campus history and heritage",
  ctaLabel: "Read More",
  ctaHref: "#history",
};

export const ABOUT_LEADERSHIP = {
  label: "Islamabad Campus",
  heading: "Leadership & Governance",
  name: "Prof. Dr. Raheel Qamar, T.I.",
  title: "Rector",
  image: IMAGES.leadership.director,
  ctaLabel: "Learn More",
  ctaHref: "#",
};

export const ADMIN_OFFICES: AdminOffice[] = [
  { name: "Administration Department" },
  { name: "Admission Office" },
  { name: "Academics Department" },
  { name: "Accounts Office" },
  { name: "Business Incubation Center" },
  { name: "Career Development Center (CDC)" },
  { name: "Examination Department" },
  { name: "Internal Audit Department" },
  { name: "Human Resource Department" },
  { name: "Information Technology Center" },
  { name: "Junaid Zaidi Library" },
  { name: "Medical Center" },
  { name: "Procurement Office" },
  { name: "Repair and Maintenance Department" },
  { name: "Student Affairs Department" },
  { name: "Security Office" },
  { name: "Transport Office" },
];

export const ADMIN_OFFICES_SECTION = {
  label: "Administrative Offices",
  heading: "Non-Academic Departments / Centers / Offices",
  description:
    "Supporting the Islamabad campus through dedicated administrative, student services, and operational offices.",
  image: IMAGES.aboutUs.about2,
  imageAlt:
    "COMSATS University Islamabad campus building and administrative offices",
};
