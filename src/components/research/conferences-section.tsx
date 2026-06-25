"use client";

import { motion } from "framer-motion";
import { ConferencePointList } from "@/components/research/conference-point-list";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import {
  CONFERENCES,
  CONFERENCES_SECTION,
} from "@/constants/research/page";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function ConferencesSection() {
  return (
    <SectionContainer className="bg-white">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-5"
        >
          <SectionHeader
            label={CONFERENCES_SECTION.label}
            heading={CONFERENCES_SECTION.heading}
            description={CONFERENCES_SECTION.description}
            align="left"
          />
        </motion.div>

        <div className="lg:col-span-7">
          <ConferencePointList items={CONFERENCES} />
        </div>
      </div>
    </SectionContainer>
  );
}
