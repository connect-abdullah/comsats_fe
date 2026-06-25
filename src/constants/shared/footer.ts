import type { FooterColumn } from "@/types";

const LEGACY_SITE = "https://ww2.comsats.edu.pk";

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
      {
        label: "HEC Refund Policy",
        href: `${LEGACY_SITE}/NEFiles/Notification-HEC-National-Fee-Refund-Policy-Revised-2024.pdf`,
      },
      {
        label: "Pollens Online",
        href: `${LEGACY_SITE}/pollensonline/`,
      },
      {
        label: "SoPs for Degree Verification",
        href: `${LEGACY_SITE}/NEFiles/SoPs-for-Verification-Process-13-02-2024.pdf`,
      },
      {
        label: "UG Admission",
        href: `${LEGACY_SITE}/Admissions/ApplyOnline-UG.doc`,
      },
      {
        label: "Graduate Admission",
        href: `${LEGACY_SITE}/Admissions/ApplyOnline-GRADed.docm`,
      },
    ],
  },
  {
    title: "Student Life",
    links: [
      {
        label: "Rules & Regulations",
        href: `${LEGACY_SITE}/studentaffairs/code-of-conduct.aspx`,
      },
      {
        label: "Hall Reservation",
        href: `${LEGACY_SITE}/halls-reservation-schedule.aspx`,
      },
      {
        label: "Telephone Directory",
        href: `${LEGACY_SITE}/telephonedirectory/`,
      },
      {
        label: "Readers Society",
        href: "https://ciitreaders.wordpress.com/",
      },
      {
        label: "QEC",
        href: `${LEGACY_SITE}/qec`,
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "Office 365 Setup",
        href: `${LEGACY_SITE}/NEFiles/Configuration%20Guide%20Mobile%20Devices.pdf`,
      },
      {
        label: "SECP Guide",
        href: "https://www.secp.gov.pk/media-center/guide-books/general-guide-books/",
      },
      {
        label: "Elections",
        href: `${LEGACY_SITE}/election.aspx`,
      },
    ],
  },
  {
    title: "Statutory Info",
    links: [
      {
        label: "CUI Act - 2018",
        href: "https://www.comsats.edu.pk/rules/CUI-Act.pdf",
      },
      {
        label: "Rules of Business of the Meetings of CUI Authorities - 2018",
        href: "https://www.comsats.edu.pk/rules/Rules-of-Business-of-the-Meetings-of-CUI-Authorities-2018.pdf",
      },
      {
        label:
          "Statutes of the Authorities, Committees, Principal Officers, and Teachers of CUI - 2019",
        href: "https://www.comsats.edu.pk/rules/",
      },
    ],
  },
];

export const COPYRIGHT =
  "© 2026 COMSATS University Islamabad. All Rights Reserved.";
