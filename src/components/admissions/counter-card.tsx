"use client";

import { motion } from "framer-motion";
import { StatCountUp } from "@/components/ui/stat-count-up";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { AdmissionStat } from "@/types";

interface CounterCardProps {
  stat: AdmissionStat;
  className?: string;
}

export function CounterCard({ stat, className }: CounterCardProps) {
  const Icon = stat.icon;

  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "group relative overflow-hidden border border-line/60 bg-white px-4 py-8 text-center shadow-soft transition-all duration-300 hover:border-purple/30 hover:shadow-lift sm:px-8 sm:py-10",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-purple/5 via-transparent to-blue/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <Icon
        className="relative mx-auto h-6 w-6 text-purple sm:h-8 sm:w-8"
        aria-hidden="true"
      />
      <p className="relative mt-3 text-3xl font-bold leading-none text-ink sm:mt-4 sm:text-4xl lg:text-5xl">
        <StatCountUp value={stat.value} />
      </p>
      <p className="relative mt-2 text-[11px] font-semibold tracking-wider text-blue uppercase sm:mt-3 sm:text-sm">
        {stat.label}
      </p>
      {stat.helper && (
        <p className="relative mx-auto mt-2 hidden max-w-xs text-sm leading-relaxed text-muted sm:mt-3 sm:block">
          {stat.helper}
        </p>
      )}
    </motion.div>
  );
}
