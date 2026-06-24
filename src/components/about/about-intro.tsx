"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import {
  ABOUT_INTRO,
  ABOUT_MISSION,
  ABOUT_VISION,
  MISSION_PILLARS,
} from "@/constants/about-page";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function AboutIntro() {
  return (
    <>
      <SectionContainer id="about-campus" className="bg-white">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-6"
          >
            <span className="text-sm font-semibold tracking-[0.2em] text-blue uppercase">
              {ABOUT_INTRO.label}
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {ABOUT_INTRO.heading}
            </h2>
            <div className="mt-6 space-y-4">
              {ABOUT_INTRO.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-card shadow-lift">
              <div className="relative aspect-[16/10]">
                <Image
                  src={ABOUT_INTRO.image}
                  alt={ABOUT_INTRO.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-purple/25 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface">
        <SectionHeader
          label="Our Purpose"
          heading="Vision & Mission"
          align="left"
          className="mb-10"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="rounded-card border-l-4 border-purple bg-white p-8 shadow-soft sm:p-10"
          >
            <h3 className="text-2xl font-bold text-ink sm:text-3xl">
              {ABOUT_VISION.heading}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {ABOUT_VISION.text}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="rounded-card border-l-4 border-blue bg-white p-8 shadow-soft sm:p-10"
          >
            <h3 className="text-2xl font-bold text-ink sm:text-3xl">
              {ABOUT_MISSION.heading}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {ABOUT_MISSION.intro}
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 overflow-hidden rounded-card border border-line/60 bg-white shadow-soft"
        >
          <div className="grid grid-cols-1 divide-y divide-line/60 sm:grid-cols-2 md:grid-cols-3 md:divide-x md:divide-y-0">
            {MISSION_PILLARS.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                className="px-5 py-8 sm:px-8 sm:py-10"
              >
                <span className="text-3xl font-bold text-purple/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-3 text-xl font-bold text-ink">
                  {pillar.title}
                </h4>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionContainer>
    </>
  );
}
