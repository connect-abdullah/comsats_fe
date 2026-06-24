"use client";

import { motion } from "framer-motion";
import { ProgramCategoryCard } from "@/components/admissions/program-category-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { PROGRAM_CATEGORIES } from "@/constants/admissions-page";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export function ProgramCategories() {
  return (
    <SectionContainer id="programs" className="bg-white">
      <SectionHeader
        label="Academic Pathways"
        heading="Program Categories"
        description="Choose the degree level that matches your academic and career ambitions."
        align="center"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 -mx-6 flex gap-4 overflow-x-auto px-6 pb-2 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-2 md:items-stretch md:gap-8 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
      >
        {PROGRAM_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="w-[85vw] shrink-0 snap-center sm:w-[70vw] md:w-auto md:shrink"
          >
            <ProgramCategoryCard category={category} />
          </div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
