"use client";

import { CTASection } from "@/components/admissions/cta-section";
import { FINAL_CTA } from "@/constants/admissions-page";

export function FinalCTA() {
  return (
    <CTASection
      heading={FINAL_CTA.heading}
      description={FINAL_CTA.description}
      primaryCta={FINAL_CTA.primaryCta}
      secondaryCta={FINAL_CTA.secondaryCta}
      layout="fullWidth"
      tone="purple"
    />
  );
}
