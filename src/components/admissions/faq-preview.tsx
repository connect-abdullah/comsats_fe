"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FAQAccordion } from "@/components/admissions/faq-accordion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { FAQ_PREVIEW_ITEMS } from "@/constants/admissions-faq";
import { FAQ_PREVIEW_SECTION } from "@/constants/admissions-page";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function FaqPreview() {
  return (
    <SectionContainer className="bg-white">
      <SectionHeader
        label={FAQ_PREVIEW_SECTION.label}
        heading={FAQ_PREVIEW_SECTION.heading}
        description={FAQ_PREVIEW_SECTION.description}
        align="center"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mt-14 max-w-3xl"
      >
        <FAQAccordion
          items={FAQ_PREVIEW_ITEMS}
          showShareLink={false}
        />
      </motion.div>

      <div className="mt-10 text-center">
        <Link
          href={FAQ_PREVIEW_SECTION.ctaHref}
          className="inline-flex items-center justify-center gap-2 rounded-pill border border-purple px-8 py-4 text-sm font-semibold text-purple transition-all duration-300 hover:bg-purple hover:text-white"
        >
          {FAQ_PREVIEW_SECTION.ctaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </SectionContainer>
  );
}
