"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_HERO } from "@/constants/about-page";
import { IMAGES } from "@/constants/images";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function AboutHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.aboutUs.parkingBuilding}
          alt="COMSATS University Islamabad campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-purple/55" aria-hidden="true" />
        <div className="absolute inset-0 bg-ink/25" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-linear-to-r from-ink/60 via-purple/30 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 flex min-h-screen w-full items-center pt-32 pb-16 sm:pt-36 lg:pt-40">
        <div className="container-cui w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex max-w-3xl flex-col items-start gap-5 pt-4 sm:pt-8"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-pill border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-sm"
            >
              {ABOUT_HERO.label}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {ABOUT_HERO.heading}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl font-semibold text-white/95 sm:text-2xl"
            >
              {ABOUT_HERO.tagline}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
