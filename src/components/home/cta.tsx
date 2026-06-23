"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function UniversityCta() {
  return (
    <section className="section-pad">
      <div className="container-cui">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-section bg-purple px-6 py-12 text-center sm:px-10 lg:py-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          <motion.div
            variants={fadeUp}
            className="relative mx-auto mb-5 inline-flex items-center gap-2 rounded-pill border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Fall 2026 Admissions Now Open
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative mx-auto mb-5 flex justify-center"
          >
            <div className="rounded-full bg-white p-1 shadow-lg shadow-black/10 ring-2 ring-white/20">
              <BrandLogo size={64} />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="relative mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl"
          >
            Join Our Amazing Campus Community
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90"
          >
            Pakistan&apos;s leading university for innovation, research, and
            world-class education.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="relative mt-8 flex justify-center"
          >
            <Link
              href="#admissions"
              className="group inline-flex items-center justify-center gap-2 rounded-pill bg-white px-9 py-4 text-base font-bold tracking-wide text-purple shadow-lg shadow-black/10 transition-all duration-300 hover:bg-zinc-50"
            >
              Apply Now
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
