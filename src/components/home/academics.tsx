"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { ContentCard } from "@/components/ui/content-card";
import { ACADEMIC_CARDS } from "@/constants/academics";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export function Academics() {
  return (
    <SectionContainer id="academics" className="bg-surface">
      <SectionHeader
        label="Academics"
        heading="Academic Excellence at Every Level"
        description="Explore the faculties, centers and programs that power a world-class education at COMSATS University Islamabad."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {ACADEMIC_CARDS.map((card) => (
          <ContentCard
            key={card.title}
            image={card.image}
            title={card.title}
            description={card.description}
            ctaLabel="Read More"
            href="#academics"
          />
        ))}
      </motion.div>
    </SectionContainer>
  );
}
