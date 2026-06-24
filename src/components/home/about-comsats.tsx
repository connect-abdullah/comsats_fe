"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StatisticCard } from "@/components/ui/statistic-card";
import { ABOUT_STATS } from "@/constants/home/stats";
import { IMAGES } from "@/constants/shared/images";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

const BENTO_LAYOUT = [
  {
    className: "col-start-1 row-span-3 row-start-1 sm:row-span-2",
    valueClassName: "text-2xl sm:text-4xl",
    featured: true,
    horizontal: false,
  },
  {
    className: "col-start-2 row-start-1",
    valueClassName: "text-base sm:text-2xl",
    featured: false,
    horizontal: true,
  },
  {
    className: "col-start-2 row-start-2",
    valueClassName: "text-base sm:text-2xl",
    featured: false,
    horizontal: true,
  },
  {
    className:
      "col-start-2 row-start-3 sm:col-span-2 sm:col-start-1 sm:row-start-3",
    valueClassName: "text-base sm:text-2xl",
    featured: false,
    horizontal: true,
  },
] as const;

export function AboutComsats() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden section-pad"
    >
      <Image
        src={IMAGES.campus.overview}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-purple/60" aria-hidden="true" />
      <div className="absolute inset-0 bg-ink/20" aria-hidden="true" />

      <div className="container-cui relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-5 lg:col-span-6"
          >
            <motion.span
              variants={fadeUp}
              className="text-sm font-semibold tracking-wider text-white/80 uppercase"
            >
              About COMSATS University Islamabad
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl"
            >
              A Legacy of Academic and Research Prominence
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-white/85"
            >
              COMSATS University Islamabad stands as a pillar of intellectual
              rigor in Pakistan. Recognized globally for excellence, our
              multi-campus framework inspires scientific breakthroughs,
              technological prowess, and prepares student cohorts for highly
              competitive futures.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-sm leading-relaxed text-white/85 font-semibold"
            >
              We connect local leadership with global educational networks,
              partnering with top institutions to build academic ecosystems that
              drive the economy and fuel transformative progress.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="about-bento-grid lg:col-span-6"
          >
            {ABOUT_STATS.map((stat, index) => {
              const layout = BENTO_LAYOUT[index];
              return (
                <StatisticCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  subtitle={stat.subtitle}
                  helper={stat.helper}
                  icon={stat.icon}
                  variant="glass"
                  compact
                  featured={layout?.featured}
                  horizontal={layout?.horizontal}
                  className={cn(layout?.className)}
                  valueClassName={layout?.valueClassName}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
