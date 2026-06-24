"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { PrimaryButton } from "@/components/ui/primary-button";
import { COURSE_CATALOGUE } from "@/constants/academics-page";
import { IMAGES } from "@/constants/images";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function CourseCatalogue() {
  return (
    <SectionContainer id="course-catalogue" className="bg-white">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-card shadow-lift"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={IMAGES.academic.courseCatalog}
              alt="COMSATS University course catalogue portal"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-ink/40 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm font-semibold tracking-[0.2em] text-blue uppercase"
          >
            Academic Resources
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            {COURSE_CATALOGUE.heading}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base leading-relaxed text-muted sm:text-lg"
          >
            {COURSE_CATALOGUE.description}
          </motion.p>

          <motion.ul variants={fadeUp} className="space-y-3">
            {COURSE_CATALOGUE.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle2
                  className="h-5 w-5 shrink-0 text-purple"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-ink sm:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp}>
            <PrimaryButton href={COURSE_CATALOGUE.ctaHref}>
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              {COURSE_CATALOGUE.ctaLabel}
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
