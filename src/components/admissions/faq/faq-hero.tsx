"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { FAQ_HERO } from "@/constants/admissions/page";
import { IMAGES } from "@/constants/shared/images";

export function FaqHero() {
  return (
    <section className="relative flex min-h-[480px] items-center overflow-hidden pt-32 pb-16 sm:min-h-[520px] sm:pt-36 lg:pt-40">
      <Image
        src={IMAGES.admissions.faq}
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
          className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-pill border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-sm"
          >
            FAQ
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {FAQ_HERO.heading}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-lg leading-relaxed text-white/85"
          >
            {FAQ_HERO.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
