"use client";

import { motion } from "framer-motion";
import {
  ResearchHighlightFeatured,
  ResearchHighlightGrid,
} from "@/components/research/research-highlight-featured";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import {
  RESEARCH_HIGHLIGHTS,
  RESEARCH_HIGHLIGHTS_SECTION,
} from "@/constants/research/page";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

interface ResearchHighlightsSectionProps {
  id?: string;
}

export function ResearchHighlightsSection({
  id,
}: ResearchHighlightsSectionProps) {
  const featured = RESEARCH_HIGHLIGHTS.find((item) => item.featured);
  const supporting = RESEARCH_HIGHLIGHTS.filter((item) => !item.featured);

  return (
    <SectionContainer id={id} className="bg-surface">
      <SectionHeader
        label={RESEARCH_HIGHLIGHTS_SECTION.label}
        heading={RESEARCH_HIGHLIGHTS_SECTION.heading}
        description={RESEARCH_HIGHLIGHTS_SECTION.description}
        align="center"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 space-y-10"
      >
        {featured && <ResearchHighlightFeatured highlight={featured} />}
        <ResearchHighlightGrid highlights={supporting} />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 flex justify-center"
      >
        <SecondaryButton href={RESEARCH_HIGHLIGHTS_SECTION.viewAllCta.href}>
          {RESEARCH_HIGHLIGHTS_SECTION.viewAllCta.label}
        </SecondaryButton>
      </motion.div>
    </SectionContainer>
  );
}
