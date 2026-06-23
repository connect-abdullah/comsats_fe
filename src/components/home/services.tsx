"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { SERVICES } from "@/constants/services";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/types";

const INITIAL_COUNT = 6;

const accentStyles: Record<
  ServiceItem["accent"],
  string
> = {
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
        className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
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
                className="group rounded-card border border-line/80 bg-white p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl",
                    accentStyles[service.accent],
                  )}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
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
              className={cn("ml-2 h-5 w-5 transition-transform", showAll && "rotate-180")}
              aria-hidden="true"
            />
          </button>
        </div>
      )}
    </SectionContainer>
  );
}
