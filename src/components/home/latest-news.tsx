"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { EditorialCard } from "@/components/ui/editorial-card";
import { LATEST_NEWS } from "@/constants/home/news";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function LatestNews() {
  return (
    <SectionContainer id="news">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="text-sm font-semibold tracking-wider text-purple uppercase">
            Announcements &amp; News
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Latest News
          </h2>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <Link
            href="/news"
            className="inline-flex items-center text-sm font-semibold text-blue transition-colors hover:text-purple"
          >
            Explore More COMSATS News
            <ArrowUpRight className="ml-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="-mx-6 flex gap-4 overflow-x-auto px-6 pb-2 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
      >
        {LATEST_NEWS.map((item) => (
          <div
            key={item.title}
            className="w-[85vw] shrink-0 snap-center sm:w-[70vw] md:w-auto md:shrink"
          >
            <EditorialCard
              variant="news"
              image={item.image}
              title={item.title}
              description={item.description}
              date={item.date}
              category={item.category}
              categoryColor={item.categoryColor}
              ctaLabel="Read Entire Story"
              href={item.href}
            />
          </div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
