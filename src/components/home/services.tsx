"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { IconBox } from "@/components/ui/icon-box";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { SERVICES } from "@/constants/services";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const INITIAL_COUNT = 6;

export function Services() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? SERVICES : SERVICES.slice(0, INITIAL_COUNT);

  return (
    <SectionContainer id="services">
      <SectionHeader
        label="Facilities"
        heading="Our Services & Facilities"
        description="Everything you need to learn, grow and thrive — all on one connected campus."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence initial={false}>
          {visible.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              layout
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: 10 }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="flex flex-col gap-4 rounded-card border border-line bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift"
            >
              <IconBox icon={service.icon} variant="soft" />
              <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {SERVICES.length > INITIAL_COUNT && (
        <div className="mt-10 flex justify-center">
          <SecondaryButton
            variant="outline"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "View Less" : "View More"}
          </SecondaryButton>
        </div>
      )}
    </SectionContainer>
  );
}
