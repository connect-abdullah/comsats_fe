"use client";

import { motion } from "framer-motion";
import { ProcessTimeline } from "@/components/admissions/process-step";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { ADMISSION_PROCESS } from "@/constants/admissions/page";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function AdmissionProcess() {
  return (
    <SectionContainer id="process" className="bg-surface">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-5"
        >
          <SectionHeader
            label="How To Apply"
            heading="Admission Process"
            description="Follow these six steps from exploring programs to confirming your enrollment at COMSATS University Islamabad."
            align="left"
          />
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-7"
        >
          <ProcessTimeline steps={ADMISSION_PROCESS} />
        </motion.div>
      </div>
    </SectionContainer>
  );
}
