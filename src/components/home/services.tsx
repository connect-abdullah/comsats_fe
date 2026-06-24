"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { SERVICES } from "@/constants/home/services";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/types";

const INITIAL_COUNT = 6;

const accentStyles: Record<ServiceItem["accent"], string> = {
  purple: "bg-purple/5 text-purple",
  blue: "bg-blue/5 text-blue",
  amber: "bg-amber-500/5 text-amber-600",
  emerald: "bg-emerald-500/5 text-emerald-600",
  rose: "bg-rose-500/5 text-rose-600",
  cyan: "bg-cyan-500/5 text-cyan-600",
  teal: "bg-teal-500/5 text-teal-600",
  indigo: "bg-indigo-500/5 text-indigo-600",
  orange: "bg-orange-500/5 text-orange-600",
};

export function Services() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? SERVICES : SERVICES.slice(0, INITIAL_COUNT);

  return (
    <SectionContainer id="services" className="bg-surface">
      <SectionHeader
        label="Ecosystem & Support"
        heading="Our Services & Facilities"
        description="Everything a modern researcher, scholar, and innovator requires to scale new intellectual peaks."
        align="center"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-2 items-stretch gap-3 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence initial={false}>
          {visible.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                layout
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: 10 }}
                className="group flex h-full min-h-[200px] min-w-0 flex-col overflow-hidden rounded-card border border-line/80 bg-white p-4 transition-all duration-300 hover:shadow-lg sm:min-h-[240px] sm:p-6 lg:p-8"
              >
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12",
                    accentStyles[service.accent],
                  )}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-3 line-clamp-2 min-h-[2.5rem] text-sm font-bold leading-snug text-ink sm:mt-4 sm:min-h-[3rem] sm:text-base lg:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2 line-clamp-3 min-h-[3rem] flex-1 text-xs leading-snug text-muted sm:mt-3 sm:min-h-[3.75rem] sm:text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {SERVICES.length > INITIAL_COUNT && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-pill border border-purple px-8 py-4 text-sm font-semibold text-purple transition-all duration-300 hover:bg-purple hover:text-white"
          >
            {showAll ? "View Less Services" : "View More Services"}
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
