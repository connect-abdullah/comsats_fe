"use client";

import { ContentShowcase } from "@/components/ui/content-showcase";
import {
  CENTERS_DESCRIPTION,
  CENTERS_OFFICES,
} from "@/constants/academics/page";
import { IMAGES } from "@/constants/shared/images";

export function CentersOffices() {
  const centerItems = CENTERS_OFFICES.map((center) =>
    center.abbreviation
      ? `${center.name} · ${center.abbreviation}`
      : center.name,
  );

  return (
    <ContentShowcase
      id="centers-offices"
      sectionLabel="Centers & Offices"
      heading="Supporting the Academic Ecosystem"
      description={CENTERS_DESCRIPTION}
      image={IMAGES.academic.centersAndOffices}
      imageAlt="COMSATS University campus — academic centers and offices"
      imageAspect="16/10"
      imageOverlay="purple"
      background="surface"
      headerVariant="sectionHeader"
      list={{ type: "chevron", items: centerItems }}
    />
  );
}
