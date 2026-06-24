import type { FooterColumn } from "@/types";

export const UNIVERSITY_INFO = {
  name: "COMSATS University Islamabad",
  address: "Park Road, Islamabad, Pakistan",
  phone: "+92 51 90495032-5",
  admissionsEmail: "admissions@comsats.edu.pk",
  admissionsPhone: "+92 51 9247000-3",
} as const;

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Resources",
    links: [
      { label: "HEC", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "POLs", href: "#" },
      { label: "Online SOPs", href: "#" },
      { label: "Degree Verification", href: "#" },
      { label: "Undergraduate Admissions", href: "/admissions" },
      { label: "Graduate Admissions", href: "/admissions" },
      { label: "Admissions FAQ", href: "/admissions/faq" },
    ],
  },
  {
    title: "Student Life",
    links: [
      { label: "Rules & Regulations", href: "#" },
      { label: "Hostel Reservation", href: "#" },
      { label: "Telephone Directory", href: "#" },
      { label: "Reader Society", href: "#" },
      { label: "QEC", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Office 365 Setup", href: "#" },
      { label: "SECP Guide", href: "#" },
      { label: "Statutory Information", href: "#" },
      { label: "Elections", href: "#" },
    ],
  },
];

export const COPYRIGHT =
  "© 2026 COMSATS University Islamabad. All Rights Reserved.";
