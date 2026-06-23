"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { ContentCard } from "@/components/ui/content-card";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { LATEST_NEWS } from "@/constants/news";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export function LatestNews() {
  return (
    <SectionContainer id="news">
      <SectionHeader label="Newsroom" heading="Latest News" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {LATEST_NEWS.map((item) => (
          <ContentCard
            key={item.title}
            image={item.image}
            title={item.title}
            date={item.date}
            ctaLabel="Read More"
            href={item.href}
          />
        ))}
      </motion.div>

      <div className="mt-10 flex justify-center">
        <SecondaryButton href="#news" variant="ghost">
          Explore More COMSATS News
        </SecondaryButton>
      </div>
    </SectionContainer>
  );
}
