"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { AchievementStat } from "@/components/ui/achievement-stat";
import { PrimaryButton } from "@/components/ui/primary-button";
import { LIBRARY_STATS, LIBRARY_RESOURCES } from "@/constants/library";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function Library() {
  return (
    <section id="library" className="section-pad scroll-mt-28 bg-institutional">
      <div className="container-cui">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: gallery + stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-section shadow-feature">
              <Image
                src="/Junaid_Zaidi_Library.jpg"
                alt="Junaid Zaidi Library exterior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="relative aspect-square overflow-hidden rounded-card shadow-card">
                <Image
                  src="/academic/course-catalog.jpg"
                  alt="Library resources"
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-card shadow-card">
                <Image
                  src="/academic/center_and_offices.jpg"
                  alt="Research support"
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-card shadow-card">
                <Image
                  src="/academic/faculties_and_departments.jpg"
                  alt="Study spaces"
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {LIBRARY_STATS.map((stat) => (
                <AchievementStat
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  variant="light"
                  className="p-4 sm:p-5"
                />
              ))}
            </div>
          </motion.div>

          {/* Right: narrative + resources */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-8"
          >
            <div>
              <SectionEyebrow>Library</SectionEyebrow>
              <h2 className="text-section-title mt-4 text-ink">
                Junaid Zaidi Library
              </h2>
              <p className="text-body-lg mt-5 text-muted">
                The Junaid Zaidi Library serves as a vital part of COMSATS University
                Islamabad&apos;s academic mission. It provides access to extensive print
                and digital resources, supports curriculum requirements, and offers an
                environment that encourages learning, research, and intellectual growth.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {LIBRARY_RESOURCES.map((resource) => {
                const Icon = resource.icon;
                return (
                  <motion.div
                    key={resource.title}
                    variants={fadeUp}
                    className="flex gap-4 rounded-card border border-line bg-white p-5 shadow-card transition-shadow hover:shadow-lift"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple/10 text-purple">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink">{resource.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {resource.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={fadeUp}>
              <PrimaryButton href="#library">Visit the Library</PrimaryButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
