"use client";

import { ContentShowcase } from "@/components/ui/content-showcase";
import { INTERNATIONAL_STUDENTS } from "@/constants/admissions/page";
import { IMAGES } from "@/constants/shared/images";

export function InternationalStudents() {
  return (
    <ContentShowcase
      id="international"
      sectionLabel="Global Community"
      heading={INTERNATIONAL_STUDENTS.heading}
      description={INTERNATIONAL_STUDENTS.description}
      image={IMAGES.admissions.internationalStudents}
      imageAlt="International students at COMSATS University Islamabad"
      imageAspect="4/3"
      imageOverlay="purple"
      background="white"
    />
  );
}
