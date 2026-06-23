"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { EditorialCard } from "@/components/ui/editorial-card";
import { CAMPUS_LIFE_CARDS } from "@/constants/academics";
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
        className="mt-14 grid items-stretch gap-8 md:grid-cols-3"
      >
        {CAMPUS_LIFE_CARDS.map((card, index) => (
          <EditorialCard
            key={card.title}
            variant="feature"
            image={card.image}
            title={card.title}
            description={card.description}
            ctaLabel={card.ctaLabel}
            href="#campus-life"
            elevated={index === 1}
          />
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
