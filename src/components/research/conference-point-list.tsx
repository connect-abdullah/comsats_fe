"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { ConferenceItem } from "@/types";

interface ConferencePointListProps {
  items: ConferenceItem[];
  className?: string;
}

export function ConferencePointList({
  items,
  className,
}: ConferencePointListProps) {
  return (
    <motion.ol
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn("relative space-y-0", className)}
    >
      {items.map((item, index) => (
        <motion.li
          key={item.name}
          variants={fadeUp}
          className="relative flex gap-6 pb-10 last:pb-0"
        >
          {index < items.length - 1 && (
            <span
              className="absolute top-12 left-5 h-[calc(100%-2rem)] w-px bg-linear-to-b from-purple/40 to-blue/20"
              aria-hidden="true"
            />
          )}
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-purple/20 bg-white text-sm font-bold text-purple shadow-soft">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="pt-1.5">
            <h3 className="font-heading text-xl font-bold text-ink sm:text-2xl">
              {item.name}
            </h3>
            {item.tagline && (
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {item.tagline}
              </p>
            )}
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
