"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { fadeUp, fadeIn, viewportOnce } from "@/lib/animations";
import { getImageLoadingProps } from "@/lib/image-loading";
import { IMAGES } from "@/constants/shared/images";

export function LeadershipMessage() {
  return (
    <SectionContainer className="overflow-hidden bg-surface">
      <div className="grid items-center gap-12 lg:grid-cols-5">
        {/* Image: 40% */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mx-auto w-full max-w-md lg:col-span-2 lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -translate-x-3 translate-y-3 rounded-[28px] border-2 border-purple/40 bg-purple/10 sm:-translate-x-4 sm:translate-y-4"
          />
          <div className="relative overflow-hidden rounded-card shadow-lift">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={IMAGES.leadership.director}
                alt="Prof. Dr. Raheel Qamar, Director"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                {...getImageLoadingProps()}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
                <p className="text-lg font-semibold text-white">
                  Prof. Dr. Raheel Qamar
                </p>
                <p className="text-sm text-white/80">Director</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content: 60% */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-6 lg:col-span-3"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue">
            Leadership Message
          </span>
          <Quote className="h-10 w-10 text-purple/30" aria-hidden="true" />
          <blockquote className="text-xl font-medium leading-relaxed text-ink sm:text-2xl">
            “As the Director of this esteemed institution comprising seven
            campuses across Pakistan, it is my privilege to invite you to join
            COMSATS University Islamabad. Here, knowledge knows no bounds and
            possibilities are limitless. We take pride in fostering an
            environment that encourages creativity, critical thinking and
            lifelong learning.”
          </blockquote>
          <div>
            <p className="text-base font-semibold text-ink">
              Prof. Dr. Raheel Qamar
            </p>
            <p className="text-sm text-muted">
              Director, COMSATS University Islamabad
            </p>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
