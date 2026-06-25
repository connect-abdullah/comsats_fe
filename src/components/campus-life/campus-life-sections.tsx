"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTASection } from "@/components/admissions/cta-section";
import { ContentShowcase } from "@/components/ui/content-showcase";
import { SectionContainer } from "@/components/ui/section-container";
import {
  CAFETERIA,
  CAMPUS_LIFE_FINAL_CTA,
  HARASSMENT_POLICY,
  MEDICAL_CENTER,
  SPORTS_WELLNESS,
  STUDENT_AFFAIRS,
  STUDENT_SOCIETIES,
  TRANSPORTATION,
} from "@/constants/campus-life/page";
import { IMAGES } from "@/constants/shared/images";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { getImageLoadingProps } from "@/lib/image-loading";

export function StudentAffairsSection() {
  return (
    <ContentShowcase
      id="student-affairs"
      sectionLabel={STUDENT_AFFAIRS.label}
      heading={STUDENT_AFFAIRS.heading}
      paragraphs={STUDENT_AFFAIRS.paragraphs}
      image={IMAGES.campusLife.studentAffairs}
      imageAlt={STUDENT_AFFAIRS.imageAlt}
      imageAspect="16/10"
      imageOverlay="purple"
      background="white"
      priority
    />
  );
}

export function HarassmentPolicySection() {
  return (
    <ContentShowcase
      id="harassment-policy"
      sectionLabel={HARASSMENT_POLICY.label}
      heading={HARASSMENT_POLICY.heading}
      description={HARASSMENT_POLICY.description}
      image={IMAGES.campusLife.harassmentPolicy}
      imageAlt={HARASSMENT_POLICY.imageAlt}
      imageAspect="16/10"
      imageOverlay="purple"
      background="white"
      reverseLayout
    />
  );
}

export function SportsWellnessSection() {
  return (
    <ContentShowcase
      id="sports-wellness"
      sectionLabel={SPORTS_WELLNESS.label}
      heading={SPORTS_WELLNESS.heading}
      description={SPORTS_WELLNESS.description}
      image={IMAGES.campusLife.sportsWellness}
      imageAlt={SPORTS_WELLNESS.imageAlt}
      imageAspect="16/10"
      imageOverlay="purple"
      background="surface"
    />
  );
}

export function MedicalCenterSection() {
  return (
    <ContentShowcase
      id="medical-center"
      sectionLabel={MEDICAL_CENTER.label}
      heading={MEDICAL_CENTER.heading}
      description={MEDICAL_CENTER.description}
      image={IMAGES.campusLife.medicalCenter}
      imageAlt={MEDICAL_CENTER.imageAlt}
      imageAspect="16/10"
      imageOverlay="purple"
      background="white"
      reverseLayout
    />
  );
}

export function TransportationSection() {
  return (
    <ContentShowcase
      id="transportation"
      sectionLabel={TRANSPORTATION.label}
      heading={TRANSPORTATION.heading}
      description={TRANSPORTATION.description}
      image={IMAGES.campusLife.transport}
      imageAlt={TRANSPORTATION.imageAlt}
      imageAspect="16/10"
      imageOverlay="purple"
      background="surface"
      list={{ type: "check", items: TRANSPORTATION.highlights }}
    />
  );
}

export function StudentSocietiesSection() {
  return (
    <SectionContainer id="student-societies" className="bg-white">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-card shadow-lift"
        >
          <div className="relative aspect-16/10 overflow-hidden">
            <Image
              src={IMAGES.campusLife.societies}
              alt={STUDENT_SOCIETIES.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              {...getImageLoadingProps()}
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-purple/25 via-transparent to-transparent"
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
            {STUDENT_SOCIETIES.label}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            {STUDENT_SOCIETIES.heading}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base leading-relaxed text-muted sm:text-lg"
          >
            {STUDENT_SOCIETIES.description}
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line/60 bg-line/60 sm:grid-cols-2 lg:grid-cols-3"
      >
        {STUDENT_SOCIETIES.societies.map((society, index) => (
          <motion.div
            key={society}
            variants={fadeUp}
            className="bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft sm:p-8"
          >
            <span className="text-2xl font-bold text-purple/20 sm:text-3xl">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-base font-bold text-ink sm:mt-3 sm:text-lg">
              {society}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}

export function CafeteriaSection() {
  return (
    <ContentShowcase
      id="cafeteria"
      sectionLabel={CAFETERIA.label}
      heading={CAFETERIA.heading}
      description={CAFETERIA.description}
      image={IMAGES.campusLife.cafeteria}
      imageAlt={CAFETERIA.imageAlt}
      imageAspect="16/10"
      imageOverlay="purple"
      background="surface"
      reverseLayout
    />
  );
}

export function CampusLifeFinalCta() {
  return (
    <CTASection
      heading={CAMPUS_LIFE_FINAL_CTA.heading}
      description={CAMPUS_LIFE_FINAL_CTA.description}
      primaryCta={CAMPUS_LIFE_FINAL_CTA.primaryCta}
      secondaryCta={CAMPUS_LIFE_FINAL_CTA.secondaryCta}
      layout="fullWidth"
      tone="purple"
    />
  );
}
