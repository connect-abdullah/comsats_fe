"use client";

import { motion } from "framer-motion";
import { IconBox } from "@/components/ui/icon-box";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { ResearchOpportunity } from "@/types";

const accentMap = {
  purple: "border-purple/15 hover:border-purple/30",
  blue: "border-blue/15 hover:border-blue/30",
  amber: "border-amber-500/15 hover:border-amber-500/30",
  emerald: "border-emerald-500/15 hover:border-emerald-500/30",
};

interface OpportunityCardProps {
  opportunity: ResearchOpportunity;
  className?: string;
}

export function OpportunityCard({
  opportunity,
  className,
}: OpportunityCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "rounded-card border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-8",
        accentMap[opportunity.accent],
        className,
      )}
    >
      <IconBox icon={opportunity.icon} variant="soft" size="lg" />
      <h3 className="mt-5 text-xl font-bold text-ink">{opportunity.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
        {opportunity.description}
      </p>
    </motion.div>
  );
}
