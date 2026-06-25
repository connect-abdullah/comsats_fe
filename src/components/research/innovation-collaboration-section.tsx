"use client";

import { motion } from "framer-motion";
import { CollaborationFeatureCard } from "@/components/research/collaboration-feature-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import {
  COLLABORATION_FEATURES,
  COLLABORATION_SECTION,
} from "@/constants/research/page";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export function InnovationCollaborationSection() {
  return (
    <SectionContainer className="bg-white">
      <SectionHeader
        label={COLLABORATION_SECTION.label}
        heading={COLLABORATION_SECTION.heading}
        description={COLLABORATION_SECTION.description}
        align="center"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line/60 bg-line/60 sm:grid-cols-2 lg:grid-cols-3"
      >
        {COLLABORATION_FEATURES.map((feature, index) => (
          <CollaborationFeatureCard
            key={feature.title}
            feature={feature}
            index={index}
          />
        ))}
      </motion.div>
    </SectionContainer>
  );
}
