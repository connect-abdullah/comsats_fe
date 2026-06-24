"use client";

import { motion } from "framer-motion";
import { ScholarshipCard } from "@/components/admissions/scholarship-card";
import { StatCountUp } from "@/components/ui/stat-count-up";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { SCHOLARSHIPS, SCHOLARSHIPS_HEADLINE } from "@/constants/admissions-page";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function ScholarshipsSection() {
  return (
    <SectionContainer id="scholarships" className="bg-surface">
      <SectionHeader
        label="Financial Aid"
        heading="Scholarships & Financial Aid"
        description="COMSATS offers extensive scholarship opportunities to support talented and deserving students."
        align="center"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mt-10 max-w-md rounded-card border border-purple/20 bg-white px-8 py-8 text-center shadow-soft"
      >
        <p className="text-4xl font-bold text-purple lg:text-5xl">
          <StatCountUp value={`${SCHOLARSHIPS_HEADLINE.stat}+`} />
        </p>
        <p className="mt-2 text-sm font-semibold tracking-wider text-blue uppercase">
          {SCHOLARSHIPS_HEADLINE.label}
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-8 lg:grid-cols-2"
      >
        {SCHOLARSHIPS.map((scholarship) => (
          <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
        ))}
      </motion.div>
    </SectionContainer>
  );
}
