"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { NewsCard } from "@/components/news/news-card";
import { NEWS_ARTICLES } from "@/constants/news-page";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

const INITIAL_COUNT = 9;

export function NewsGrid() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll
    ? NEWS_ARTICLES
    : NEWS_ARTICLES.slice(0, INITIAL_COUNT);

  return (
    <SectionContainer id="all-news" className="bg-surface">
      <SectionHeader
        label="All News"
        heading="Latest from Campus"
        description="Browse recent announcements, research highlights, events, and student life stories from across COMSATS University Islamabad."
        align="center"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 lg:gap-8"
      >
        <AnimatePresence initial={false}>
          {visible.map((article, index) => (
            <motion.div
              key={article.id}
              variants={fadeUp}
              layout
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: 10 }}
            >
              <NewsCard
                article={article}
                priority={index < 3}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {NEWS_ARTICLES.length > INITIAL_COUNT && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex min-h-[44px] items-center justify-center rounded-pill border border-purple px-8 py-4 text-sm font-semibold text-white transition-all duration-300 bg-purple hover:bg-[#351658]"
          >
            {showAll ? "Show Less" : "Show More"}
            <ChevronDown
              className={cn(
                "ml-2 h-5 w-5 transition-transform",
                showAll && "rotate-180",
              )}
              aria-hidden="true"
            />
          </button>
        </div>
      )}
    </SectionContainer>
  );
}
