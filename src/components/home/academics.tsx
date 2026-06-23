"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { EditorialCard } from "@/components/ui/editorial-card";
import { ACADEMIC_CARDS } from "@/constants/academics";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function Academics() {
  return (
    <SectionContainer id="academics" className="bg-white">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <span className="text-sm font-semibold tracking-wider text-purple uppercase">
          Academics &amp; Frameworks
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-5xl">
          Unparalleled Academic Portals
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-8 md:grid-cols-3"
      >
        {ACADEMIC_CARDS.map((card) => (
          <EditorialCard
            key={card.title}
            variant="academic"
            image={card.image}
            title={card.title}
            description={card.description}
            ctaLabel={card.ctaLabel}
            href="#academics"
          />
        ))}
      </motion.div>
    </SectionContainer>
  );
}
