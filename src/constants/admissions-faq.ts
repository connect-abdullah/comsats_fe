import type { FaqItem } from "@/types";
import { ADMISSION_RELATED_FAQS } from "@/constants/admissions-faq-admission";
import { SCHOLARSHIPS } from "@/constants/admissions-page";

export const GENERAL_FAQS: FaqItem[] = [
  {
    id: "full-name",
    question: "What is the full name of University?",
    answer: "COMSATS University Islamabad (CUI).",
  },
  {
    id: "comsats-abbreviation",
    question: "What is abbreviation of COMSATS?",
    answer:
      "Commission on Science and Technology for Sustainable Development in the South (COMSATS).",
  },
  {
    id: "private-or-public",
    question: "Is CUI a private or Public Sector University?",
    answer: "Federally Chartered Public Sector University.",
  },
  {
    id: "hec-recognized",
    question: "Is University recognized by HEC?",
    answer: "Yes.",
  },
  {
    id: "campuses",
    question: "How many campuses does university have?",
    answer: "Islamabad, Lahore, Abbottabad, Sahiwal, Vehari, Wah and Attock.",
  },
  {
    id: "education-system",
    question: "What education system is followed?",
    answer:
      "Semester System.\n\nSpring: February – June\n\nFall: September – January",
  },
  {
    id: "age-limit",
    question: "Is there any age limit?",
    answer: "No age limit.",
  },
  {
    id: "admission-frequency",
    question: "How frequently are admissions offered?",
    answer: "Twice every year.\n\nFall and Spring.",
  },
  {
    id: "pec-recognition",
    question: "Does PEC recognize Engineering Programs?",
    answer: "Yes.",
  },
  {
    id: "qualified-faculty",
    question: "Does COMSATS have highly qualified faculty?",
    answer: "Yes.",
  },
  {
    id: "accredited-programs",
    question: "Are CS and Management programs accredited?",
    answer: "Yes.",
  },
  {
    id: "laboratories",
    question: "Does COMSATS have laboratories?",
    answer: "Yes.",
  },
  {
    id: "computer-labs",
    question: "Does COMSATS have computer labs?",
    answer: "Yes.",
  },
  {
    id: "library",
    question: "Does COMSATS have library facilities?",
    answer: "Yes.",
  },
  {
    id: "dae-students",
    question: "Can DAE students apply in Engineering?",
    answer: "Yes.\n\n2% quota reserved.",
  },
  {
    id: "self-finance",
    question: "Is there self-finance or quota system?",
    answer: "No.\n\nOpen Merit.",
  },
  {
    id: "hostel",
    question: "Hostel Facilities?",
    answer: "Available in most campuses.",
  },
  {
    id: "transport",
    question: "Transport Facilities?",
    answer: "Yes.",
  },
  {
    id: "classes-commence",
    question: "When do classes commence?",
    answer: "September (Fall)\n\nFebruary (Spring)",
  },
  {
    id: "transfer-policy",
    question: "Transfer/Migration Policy?",
    answer: "No external credit transfer policy.",
  },
  {
    id: "program-duration",
    question: "Program Duration",
    answer:
      "Bachelor: 4 Years, 8–12 Semesters\n\nMS: 2 Years, 4–8 Semesters\n\nPhD: 3 Years, 6–14 Semesters",
  },
  {
    id: "medium-of-instruction",
    question: "Medium of Instruction?",
    answer: "English",
  },
  {
    id: "name-mismatch",
    question: "Name mismatch between CNIC and academic documents?",
    answer:
      "In case of a name mismatch between CNIC/B-Form and academic documents, the applicant must provide an affidavit on stamp paper explaining the discrepancy along with supporting documentation. The admission office verifies the affidavit before processing the application. Applicants are advised to ensure consistency across all documents to avoid delays.",
  },
  {
    id: "part-time",
    question: "Part-time programs?",
    answer: "No.\n\nFull-time only.",
  },
  {
    id: "weekend-programs",
    question: "Weekend programs?",
    answer: "Currently not offered.",
  },
  {
    id: "relevant-field",
    question: "What is a Relevant Field for MS/PhD?",
    answer:
      "A relevant field refers to an academic background that aligns with the MS/PhD program applied for. Eligibility is evaluated departmentally based on the applicant's prior degree, coursework, and research experience. Each department defines relevant fields according to its program requirements. Applicants should review departmental eligibility criteria on the admissions portal or contact the concerned department for specific guidance.",
  },
];

export const FAQ_PREVIEW_ITEMS = GENERAL_FAQS.slice(0, 5);

export { ADMISSION_RELATED_FAQS };

export const SCHOLARSHIP_FAQ_ITEMS = SCHOLARSHIPS;
