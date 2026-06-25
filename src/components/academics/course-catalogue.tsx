"use client";

import { BookOpen } from "lucide-react";
import { ContentShowcase } from "@/components/ui/content-showcase";
import { COURSE_CATALOGUE } from "@/constants/academics/page";
import { IMAGES } from "@/constants/shared/images";

export function CourseCatalogue() {
  return (
    <ContentShowcase
      id="course-catalogue"
      sectionLabel="Academic Resources"
      heading={COURSE_CATALOGUE.heading}
      description={COURSE_CATALOGUE.description}
      image={IMAGES.academic.courseCatalog}
      imageAlt="COMSATS University course catalogue portal"
      imageAspect="4/3"
      imageOverlay="ink"
      background="white"
      list={{ type: "check", items: COURSE_CATALOGUE.features }}
      cta={{
        label: COURSE_CATALOGUE.ctaLabel,
        href: COURSE_CATALOGUE.ctaHref,
        icon: BookOpen,
      }}
    />
  );
}
