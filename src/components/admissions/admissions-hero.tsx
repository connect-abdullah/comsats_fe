"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ADMISSIONS_HERO } from "@/constants/admissions/page";
import { IMAGES } from "@/constants/shared/images";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function AdmissionsHero() {
  const isExternalApply = ADMISSIONS_HERO.primaryCta.href.startsWith("http");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-40">
      <Image
        src={IMAGES.admissions.hero}
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
        className="absolute inset-0 bg-linear-to-r from-ink/70 via-purple/35 to-transparent"
        aria-hidden="true"
      />

      <div className="container-cui relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex max-w-3xl flex-col items-start gap-6 pt-6 sm:gap-8 sm:pt-10 lg:pt-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-pill border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-sm"
          >
            <span
              className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-blue-400"
              aria-hidden="true"
            />
            {ADMISSIONS_HERO.label}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            {ADMISSIONS_HERO.heading}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-lg leading-relaxed text-white/90"
          >
            {ADMISSIONS_HERO.description}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-base leading-relaxed text-white/80"
          >
            {ADMISSIONS_HERO.subDescription}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex w-full flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href={ADMISSIONS_HERO.primaryCta.href}
              className="w-full sm:w-auto"
              {...(isExternalApply
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <ShimmerButton
                className="w-full px-7 py-3.5 text-base font-semibold shadow-glow sm:w-auto"
                background="linear-gradient(120deg, #4c227b 0%, #0f5ea6 100%)"
                shimmerColor="#ffffff"
                shimmerDuration="3s"
                borderRadius="999px"
              >
                {ADMISSIONS_HERO.primaryCta.label}
              </ShimmerButton>
            </Link>
            <SecondaryButton
              href={ADMISSIONS_HERO.secondaryCta.href}
              variant="light"
              className="w-full sm:w-auto border-none"
            >
              {ADMISSIONS_HERO.secondaryCta.label}
            </SecondaryButton>
            <Link
              href={ADMISSIONS_HERO.tertiaryCta.href}
              className="inline-flex min-h-[44px] w-full items-center justify-center text-sm font-semibold text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline sm:w-auto sm:justify-start"
            >
              {ADMISSIONS_HERO.tertiaryCta.label}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
