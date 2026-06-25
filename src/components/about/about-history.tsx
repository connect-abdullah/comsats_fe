"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { ABOUT_HISTORY } from "@/constants/about/page";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { getImageLoadingProps } from "@/lib/image-loading";

export function AboutHistory() {
  return (
    <SectionContainer id="history" className="bg-white">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-7"
        >
          <span className="text-sm font-semibold tracking-[0.2em] text-purple uppercase">
            {ABOUT_HISTORY.label}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {ABOUT_HISTORY.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {ABOUT_HISTORY.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <SecondaryButton href={ABOUT_HISTORY.ctaHref} className="mt-8">
            {ABOUT_HISTORY.ctaLabel}
          </SecondaryButton>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-5"
        >
          <div className="relative overflow-hidden rounded-card shadow-lift">
            <div className="relative aspect-[4/5] sm:aspect-[3/4]">
              <Image
                src={ABOUT_HISTORY.image}
                alt={ABOUT_HISTORY.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                {...getImageLoadingProps()}
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-ink/40 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
