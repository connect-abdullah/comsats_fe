"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/constants/shared/images";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function NewsHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40">
      <Image
        src={IMAGES.campus.overview}
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
          className="flex max-w-3xl flex-col items-start gap-5 pt-4 sm:pt-8"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-pill border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-sm"
          >
            <span
              className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-blue-400"
              aria-hidden="true"
            />
            Islamabad News
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Campus News
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl font-semibold text-white/95 sm:text-2xl"
          >
            Your University, Your News
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-lg leading-relaxed text-white/85"
          >
            Stay informed with the latest announcements, research, events, and
            campus stories from COMSATS University Islamabad.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
