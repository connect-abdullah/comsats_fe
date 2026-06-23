"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { ContentCard } from "@/components/ui/content-card";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { CAMPUS_LIFE_CARDS } from "@/constants/academics";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export function CampusLife() {
  return (
    <SectionContainer id="campus-life">
      <SectionHeader
        label="Campus Life"
        heading="Discover a Vibrant Campus Environment"
        description="Discover a vibrant campus environment designed for growth, wellness and community."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {CAMPUS_LIFE_CARDS.map((card) => (
          <ContentCard
            key={card.title}
            image={card.image}
            title={card.title}
            description={card.description}
            ctaLabel="Explore"
            href="#campus-life"
          />
        ))}
      </motion.div>

      <div className="mt-10 flex justify-center">
        <SecondaryButton href="#campus-life" variant="ghost">
          Explore Campus Life
        </SecondaryButton>
      </div>
    </SectionContainer>
  );
}
