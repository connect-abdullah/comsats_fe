"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const CTA_STATS = [
  { value: "Top Ranked", label: "In Pakistan" },
  { value: "7 Campuses", label: "Nationwide" },
  { value: "Research", label: "Excellence" },
];

export function UniversityCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/campus_life/sports_wellness.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple/40 to-blue/30 mix-blend-multiply" />
      </div>

      <div className="container-cui relative z-10 section-pad-lg">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <SectionEyebrow tone="light">Join COMSATS</SectionEyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-editorial mt-5 text-white"
          >
            Join One of Pakistan&apos;s Leading Universities
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-body-lg mt-6 text-white/85"
          >
            COMSATS University Islamabad continues to shape future leaders through
            innovation, academic excellence, and a vibrant campus community. Your
            journey begins here.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <PrimaryButton href="#admissions" tone="onDark">
              Apply Now
            </PrimaryButton>
            <SecondaryButton href="#campus-life" tone="onPhoto">
              Explore Campus
            </SecondaryButton>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="mt-14 flex flex-wrap gap-8 border-t border-white/20 pt-10"
          >
            {CTA_STATS.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
