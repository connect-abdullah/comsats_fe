"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { WHY_CHOOSE_COMSATS } from "@/constants/admissions/page";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function WhyChooseComsats() {
  return (
    <SectionContainer className="bg-surface">
      <SectionHeader
        label="Why COMSATS"
        heading="Why Choose COMSATS"
        description="Experience merit-based admissions, world-class faculty, and opportunities that prepare you for global success."
        align="center"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line/60 bg-line/60 lg:grid-cols-3"
      >
        {WHY_CHOOSE_COMSATS.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={fadeUp}
            className="bg-white p-5 sm:p-10"
          >
            <span className="text-2xl font-bold text-purple/20 sm:text-3xl">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-base font-bold text-ink sm:mt-3 sm:text-xl">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3 sm:text-base">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
