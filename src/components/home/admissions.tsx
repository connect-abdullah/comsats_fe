"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import {
  ADMISSIONS_HEADLINE,
  ADMISSIONS_NARRATIVE,
  ADMISSION_PATHWAYS,
  TRUST_BULLETS,
} from "@/constants/admissions";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function Admissions() {
  return (
    <section id="admissions" className="section-pad scroll-mt-28 bg-white">
      <div className="container-cui">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: trust narrative + photo */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-8"
          >
            <div>
              <SectionEyebrow>Admissions</SectionEyebrow>
              <h2 className="text-section-title mt-4 text-ink">
                {ADMISSIONS_HEADLINE}
              </h2>
              <p className="text-body-lg mt-5 text-muted">{ADMISSIONS_NARRATIVE}</p>
            </div>

            <ul className="flex flex-col gap-3">
              {TRUST_BULLETS.map((bullet) => (
                <motion.li
                  key={bullet}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-sm font-medium text-ink sm:text-base"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                  {bullet}
                </motion.li>
              ))}
            </ul>

            <motion.div
              variants={fadeUp}
              className="relative aspect-[4/3] overflow-hidden rounded-section shadow-feature"
            >
              <Image
                src="/campus_life/student_affairs.jpg"
                alt="Students at COMSATS University Islamabad"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right: stacked pathway panels */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            {ADMISSION_PATHWAYS.map((pathway) => {
              const Icon = pathway.icon;
              return (
                <motion.div
                  key={pathway.title}
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="group flex gap-5 rounded-card border border-line bg-surface p-6 shadow-card transition-shadow duration-300 hover:shadow-lift sm:p-8"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple text-white shadow-achievement">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="text-xl font-semibold text-ink">{pathway.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {pathway.description}
                    </p>
                    <Link
                      href={pathway.href ?? "#admissions"}
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-purple transition-colors group-hover:text-blue"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Action rail */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 flex flex-wrap items-center justify-center gap-4 border-t border-line pt-12"
        >
          <PrimaryButton href="#admissions" className="px-10 py-4 text-lg">
            Apply Now
          </PrimaryButton>
          <SecondaryButton href="#admissions">How To Apply</SecondaryButton>
          <SecondaryButton href="#admissions" tone="ghost">
            Fee Structure
          </SecondaryButton>
        </motion.div>
      </div>
    </section>
  );
}
