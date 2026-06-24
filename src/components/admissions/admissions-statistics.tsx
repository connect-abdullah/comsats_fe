"use client";

import { motion } from "framer-motion";
import { CounterCard } from "@/components/admissions/counter-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { ADMISSION_STATS } from "@/constants/admissions-page";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export function AdmissionsStatistics() {
  return (
    <SectionContainer className="bg-surface">
      <SectionHeader
        label="By The Numbers"
        heading="A Community of Excellence"
        description="Join thousands of students and scholars at one of Pakistan's leading universities."
        align="center"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 overflow-hidden rounded-card border border-line/60 bg-white shadow-soft"
      >
        <div className="grid grid-cols-2 divide-x divide-y divide-line/60 lg:grid-cols-4 lg:divide-y-0">
          {ADMISSION_STATS.map((stat) => (
            <CounterCard key={stat.label} stat={stat} />
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}
