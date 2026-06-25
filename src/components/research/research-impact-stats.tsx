"use client";

import { motion } from "framer-motion";
import { ResearchMetricCard } from "@/components/research/research-metric-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { RESEARCH_IMPACT_STATS } from "@/constants/research/page";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export function ResearchImpactStats() {
  return (
    <SectionContainer className="bg-surface">
      <SectionHeader
        label="Research Impact"
        heading="Publication Excellence Across Disciplines"
        description="COMSATS University Islamabad demonstrates sustained research output across science, engineering, humanities, and social sciences."
        align="center"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 overflow-hidden rounded-card border border-line/60 bg-white shadow-soft"
      >
        <div className="grid grid-cols-2 divide-x divide-y divide-line/60 lg:grid-cols-4">
          {RESEARCH_IMPACT_STATS.map((stat) => (
            <ResearchMetricCard key={stat.label} stat={stat} />
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}
