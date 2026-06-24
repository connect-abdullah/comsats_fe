"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { PROGRAM_CARDS } from "@/constants/home/admissions";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

const accentStyles = {
  purple: {
    icon: "bg-purple/5 text-purple group-hover:bg-purple group-hover:text-white",
    badge: "bg-purple/10 text-purple",
    link: "text-blue",
  },
  blue: {
    icon: "bg-blue/5 text-blue group-hover:bg-blue group-hover:text-white",
    badge: "bg-blue/10 text-blue",
    link: "text-blue",
  },
  amber: {
    icon: "bg-amber-500/5 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
    badge: "bg-amber-500/10 text-amber-600",
    link: "text-blue",
  },
} as const;

export function Admissions() {
  return (
    <SectionContainer id="admissions" className="bg-surface">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="space-y-6 lg:sticky lg:top-32 lg:col-span-5"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm font-semibold tracking-wider text-purple uppercase"
          >
            Admissions &amp; Futures
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold leading-tight tracking-tight text-ink md:text-5xl"
          >
            Start Your <br />
            Journey With Us
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed text-muted"
          >
            COMSATS University Islamabad prepares elite candidates for
            transformative roles. Explore admissions timelines, program
            frameworks, and apply to join a network of elite scholars.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col gap-3 pt-4">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-between rounded-xl bg-purple px-6 py-4 font-semibold text-white shadow-lg shadow-purple/20 transition-colors hover:bg-blue"
            >
              <span>Start Online Application</span>
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/admissions"
                className="rounded-xl border border-line bg-white px-4 py-3 text-center text-sm font-semibold text-ink transition-colors hover:bg-surface"
              >
                How to Apply
              </Link>
              <Link
                href="/admissions"
                className="rounded-xl border border-line bg-white px-4 py-3 text-center text-sm font-semibold text-ink transition-colors hover:bg-surface"
              >
                Fee Structure
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="-mx-6 flex gap-4 overflow-x-auto px-6 pb-2 snap-x snap-mandatory lg:mx-0 lg:flex lg:flex-col lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 lg:col-span-7"
        >
          {PROGRAM_CARDS.map((card) => {
            const Icon = card.icon;
            const styles = accentStyles[card.accent];
            return (
              <div
                key={card.title}
                className="w-[85vw] shrink-0 snap-center sm:w-[70vw] lg:w-auto lg:shrink"
              >
                <motion.div
                  variants={fadeUp}
                  className="group h-full rounded-card border border-line/60 bg-white p-5 shadow-soft transition-all duration-500 hover:border-purple md:p-8 lg:p-10"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={cn(
                        "flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300",
                        styles.icon,
                      )}
                    >
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <span
                      className={cn(
                        "rounded-pill px-3 py-1 text-xs font-bold tracking-wider uppercase",
                        styles.badge,
                      )}
                    >
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">
                    {card.description}
                  </p>
                  <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
                    <Link
                      href="/admissions"
                      className={cn(
                        "inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1",
                        styles.link,
                      )}
                    >
                      {card.ctaLabel}
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <span className="text-xs text-muted">{card.deadline}</span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
