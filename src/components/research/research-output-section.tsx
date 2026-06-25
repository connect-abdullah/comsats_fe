"use client";

import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/primary-button";
import { PublicationBarChart } from "@/components/ui/publication-bar-chart";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import {
  PUBLICATION_OUTPUT,
  RESEARCH_OUTPUT_SECTION,
} from "@/constants/research/page";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface ResearchOutputSectionProps {
  id?: string;
}

export function ResearchOutputSection({ id }: ResearchOutputSectionProps) {
  return (
    <SectionContainer id={id} className="bg-surface">
      <SectionHeader
        label={RESEARCH_OUTPUT_SECTION.label}
        heading={RESEARCH_OUTPUT_SECTION.heading}
        description={RESEARCH_OUTPUT_SECTION.description}
        align="center"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 overflow-hidden rounded-card border border-line/60 bg-white p-4 shadow-soft sm:p-6"
      >
        <PublicationBarChart data={PUBLICATION_OUTPUT} />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 flex justify-center"
      >
        <PrimaryButton href={RESEARCH_OUTPUT_SECTION.cta.href}>
          {RESEARCH_OUTPUT_SECTION.cta.label}
        </PrimaryButton>
      </motion.div>
    </SectionContainer>
  );
}
