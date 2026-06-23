"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { AchievementStat } from "@/components/ui/achievement-stat";
import { ABOUT_STATS } from "@/constants/stats";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";

export function AboutComsats() {
  return (
    <section id="about" className="relative scroll-mt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/bg_image.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 scrim-photo" />
      </div>

      <div className="container-cui relative z-10 section-pad-lg">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-20">
          {/* Editorial narrative */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <SectionEyebrow tone="light">About COMSATS</SectionEyebrow>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-editorial text-white"
            >
              A Leading Institution Advancing Education, Research &amp; Innovation
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg text-white/85"
            >
              COMSATS University Islamabad is a leading institution dedicated to
              advancing education, research and innovation. With a strong national
              presence and global outlook, the university empowers students through
              academic excellence, technological advancement and impactful research.
            </motion.p>
          </motion.div>

          {/* Achievement panels */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 sm:grid-cols-2"
          >
            {ABOUT_STATS.map((stat) => (
              <AchievementStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                variant="light"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
