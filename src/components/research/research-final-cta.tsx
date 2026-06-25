"use client";

import { CTASection } from "@/components/admissions/cta-section";
import { RESEARCH_FINAL_CTA } from "@/constants/research/page";

export function ResearchFinalCta() {
  return (
    <CTASection
      heading={RESEARCH_FINAL_CTA.heading}
      description={RESEARCH_FINAL_CTA.description}
      primaryCta={RESEARCH_FINAL_CTA.primaryCta}
      secondaryCta={RESEARCH_FINAL_CTA.secondaryCta}
      layout="fullWidth"
      tone="purple"
    />
  );
}
