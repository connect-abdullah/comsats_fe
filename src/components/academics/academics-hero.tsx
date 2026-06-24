"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { IMAGES } from "@/constants/images";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function AcademicsHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40">
      <Image
        src={IMAGES.academic.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-purple/55" aria-hidden="true" />
      <div className="absolute inset-0 bg-ink/25" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-linear-to-r from-ink/60 via-purple/30 to-transparent"
        aria-hidden="true"
      />

      <div className="container-cui relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex max-w-3xl flex-col items-start gap-8 pt-6 sm:pt-10 lg:pt-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-pill border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-sm"
          >
            <span
              className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-blue-400"
              aria-hidden="true"
            />
            Academics
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            World-Class Education, Research &amp; Innovation
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-lg leading-relaxed text-white/85"
          >
            Explore internationally recognized degree programs, distinguished
            faculty, cutting-edge research opportunities, and a learning
            environment designed to prepare future leaders.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex w-full flex-wrap items-center gap-4"
          >
            <PrimaryButton href="#departments">Explore Departments</PrimaryButton>
            <SecondaryButton href="#course-catalogue" variant="light">
              View Programs
            </SecondaryButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
