"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { StatCountUp } from "@/components/ui/stat-count-up";
import { cn } from "@/lib/utils";
import { getImageLoadingProps } from "@/lib/image-loading";
import { IMAGES } from "@/constants/shared/images";

const LIBRARY_STATS = [
  { value: "150,000+", label: "Print Volumes", color: "text-purple" },
  { value: "50,000+", label: "E-Journals", color: "text-blue" },
  { value: "24/7", label: "Digital Access", color: "text-amber-600" },
];

export function Library() {
  return (
    <section id="library" className="scroll-mt-24 overflow-hidden section-pad">
      <div className="container-cui">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-6 lg:col-span-7"
          >
            <motion.span
              variants={fadeUp}
              className="text-sm font-semibold tracking-wider text-purple uppercase"
            >
              Academic Treasury
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl"
            >
              Junaid Zaidi Library
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed text-muted sm:text-lg"
            >
              The Junaid Zaidi Library serves as a vital part of COMSATS
              University Islamabad&apos;s academic mission. It provides access
              to extensive print and digital resources, supports curriculum
              requirements, and offers an environment that encourages learning,
              research, and intellectual growth.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-sm leading-relaxed text-muted"
            >
              The library delivers customized information services tailored to
              the needs of students, faculty, and researchers. With quiet study
              areas, high-speed computational research hubs, and vast databases
              of digital publications, the library acts as an active catalyst
              for academic discovery.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-3 pt-2 sm:gap-6 sm:pt-4"
            >
              {LIBRARY_STATS.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <StatCountUp
                    value={stat.value}
                    className={cn(
                      "block text-2xl font-bold sm:text-3xl",
                      stat.color,
                    )}
                  />
                  <span className="mt-1 block text-xs text-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="pt-2">
              <Link
                href="/library"
                className="inline-flex items-center text-sm font-semibold text-purple transition-colors hover:text-blue"
              >
                Launch Library OPAC Search
                <ArrowUpRight
                  className="ml-1 h-4 w-4 shrink-0"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] border-2 border-purple/40 bg-purple/10 sm:translate-x-4 sm:translate-y-4"
            />
            <div className="relative overflow-hidden rounded-card shadow-lift">
              <div className="relative aspect-[4/3] w-full sm:aspect-[4/5]">
                <Image
                  src={IMAGES.library.junaidZaidi}
                  alt="Junaid Zaidi Library at COMSATS University Islamabad"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 40vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  {...getImageLoadingProps()}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
