"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { INTERNATIONAL_STUDENTS } from "@/constants/admissions-page";
import { IMAGES } from "@/constants/images";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function InternationalStudents() {
  return (
    <SectionContainer id="international" className="bg-white">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-6"
        >
          <div className="relative overflow-hidden rounded-card shadow-lift">
            <div className="relative aspect-4/3">
              <Image
                src={IMAGES.admissions.internationalStudents}
                alt="International students at COMSATS University Islamabad"
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

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-6"
        >
          <span className="text-sm font-semibold tracking-[0.2em] text-blue uppercase">
            Global Community
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {INTERNATIONAL_STUDENTS.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            {INTERNATIONAL_STUDENTS.description}
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
