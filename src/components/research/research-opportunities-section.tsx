"use client";

import { motion } from "framer-motion";
import { OpportunityCard } from "@/components/research/opportunity-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import {
  RESEARCH_OPPORTUNITIES,
  RESEARCH_OPPORTUNITIES_SECTION,
} from "@/constants/research/page";
import { staggerContainer, viewportOnce } from "@/lib/animations";

interface ResearchOpportunitiesSectionProps {
  id?: string;
}

export function ResearchOpportunitiesSection({
  id,
}: ResearchOpportunitiesSectionProps) {
  return (
    <SectionContainer id={id ?? "research-opportunities"} className="bg-surface">
      <SectionHeader
        label={RESEARCH_OPPORTUNITIES_SECTION.label}
        heading={RESEARCH_OPPORTUNITIES_SECTION.heading}
        description={RESEARCH_OPPORTUNITIES_SECTION.description}
        align="center"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
      >
        {RESEARCH_OPPORTUNITIES.map((opportunity) => (
          <OpportunityCard key={opportunity.title} opportunity={opportunity} />
        ))}
      </motion.div>
    </SectionContainer>
  );
}
