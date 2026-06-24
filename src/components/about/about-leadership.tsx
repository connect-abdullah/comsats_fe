"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { ABOUT_LEADERSHIP } from "@/constants/about/page";
import { fadeIn, fadeUp, viewportOnce } from "@/lib/animations";

export function AboutLeadership() {
  return (
    <SectionContainer className="bg-surface">
      <div className="grid items-center gap-12 lg:grid-cols-5">
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
                src={ABOUT_LEADERSHIP.image}
                alt={ABOUT_LEADERSHIP.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/80 to-transparent p-6">
                <p className="text-lg font-semibold text-white">
                  {ABOUT_LEADERSHIP.name}
                </p>
                <p className="text-sm text-white/80">
                  {ABOUT_LEADERSHIP.title}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-6 lg:col-span-3"
        >
          <span className="text-sm font-semibold tracking-[0.2em] text-blue uppercase">
            {ABOUT_LEADERSHIP.label}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {ABOUT_LEADERSHIP.heading}
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Under the governance of the Senate, chaired by the Chancellor of the
            University, COMSATS University Islamabad is led by distinguished
            academic leadership committed to national excellence and global
            standards in higher education.
          </p>
          <div>
            <p className="text-xl font-bold text-ink">
              {ABOUT_LEADERSHIP.name}
            </p>
            <p className="mt-1 text-sm font-semibold text-purple">
              {ABOUT_LEADERSHIP.title}
            </p>
          </div>
          <Link
            href={ABOUT_LEADERSHIP.ctaHref}
            className="group inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-purple transition-colors hover:text-blue"
          >
            {ABOUT_LEADERSHIP.ctaLabel}
            <ChevronRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
