"use client";

import { motion } from "framer-motion";
import { QuickActionCardComponent } from "@/components/admissions/quick-action-card";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { QUICK_ACTIONS } from "@/constants/admissions/page";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export function QuickActions() {
  return (
    <SectionContainer className="bg-white">
      <SectionHeader
        label="Quick Access"
        heading="Everything You Need to Apply"
        description="Navigate admissions resources, programs, and support in one place."
        align="center"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4"
      >
        {QUICK_ACTIONS.map((action) => (
          <QuickActionCardComponent key={action.title} action={action} />
        ))}
      </motion.div>
    </SectionContainer>
  );
}
