"use client";

import { motion } from "framer-motion";
import { IconBox } from "@/components/ui/icon-box";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { CollaborationFeature } from "@/types";

interface CollaborationFeatureCardProps {
  feature: CollaborationFeature;
  index: number;
  className?: string;
}

export function CollaborationFeatureCard({
  feature,
  index,
  className,
}: CollaborationFeatureCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn("bg-white p-5 sm:p-10", className)}
    >
      <span className="text-2xl font-bold text-purple/20 sm:text-3xl">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="mt-4 flex items-start gap-4">
        <IconBox icon={feature.icon} variant="soft" />
        <div>
          <h3 className="text-base font-bold text-ink sm:text-xl">
            {feature.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3 sm:text-base">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
