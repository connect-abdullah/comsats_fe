"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { EditorialCard } from "@/components/ui/editorial-card";
import { CAMPUS_LIFE_CARDS } from "@/constants/home/academics";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export function CampusLife() {
  return (
    <SectionContainer id="campus-life">
      <SectionHeader
        label="Campus Life"
        heading="Discover a Vibrant Campus Environment"
        description="Uncover a dynamic lifestyle shaped for physical wellbeing, professional service, and highly interactive social networks."
        align="center"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 -mx-6 flex gap-4 overflow-x-auto px-6 pb-2 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-3 md:items-stretch md:gap-8 md:overflow-visible md:px-0 md:pb-0"
      >
        {CAMPUS_LIFE_CARDS.map((card, index) => (
          <div
            key={card.title}
            className="w-[85vw] shrink-0 snap-center sm:w-[70vw] md:w-auto md:shrink"
          >
            <EditorialCard
              variant="feature"
              image={card.image}
              title={card.title}
              description={card.description}
              ctaLabel={card.ctaLabel}
              href="#campus-life"
              elevated={index === 1}
            />
          </div>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Link
          href="#campus-life"
          className="inline-flex items-center justify-center rounded-pill bg-purple px-8 py-4 text-sm font-semibold text-white shadow-md shadow-purple/20 transition-colors hover:bg-blue"
        >
          Explore Campus Life
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </SectionContainer>
  );
}
