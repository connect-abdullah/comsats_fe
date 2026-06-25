"use client";

import { motion } from "framer-motion";
import { ResearchCenterCard } from "@/components/research/research-center-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import {
  RESEARCH_CENTERS,
  RESEARCH_CENTERS_SECTION,
} from "@/constants/research/page";
import { staggerContainer, viewportOnce } from "@/lib/animations";

interface ResearchCentersSectionProps {
  id?: string;
}

export function ResearchCentersSection({ id }: ResearchCentersSectionProps) {
  return (
    <SectionContainer id={id} className="bg-white">
      <SectionHeader
        label={RESEARCH_CENTERS_SECTION.label}
        heading={RESEARCH_CENTERS_SECTION.heading}
        description={RESEARCH_CENTERS_SECTION.description}
        align="center"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 space-y-8"
      >
        {RESEARCH_CENTERS.map((center) => (
          <ResearchCenterCard key={center.id} center={center} />
        ))}
      </motion.div>
    </SectionContainer>
  );
}
