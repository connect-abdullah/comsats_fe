"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  heading: string;
  description?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeader({
  label,
  heading,
  description,
  align = "center",
  tone = "dark",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {label && (
        <motion.span
          variants={fadeUp}
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.2em]",
            tone === "light" ? "text-white/80" : "text-blue",
          )}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={cn(
          "max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        {heading}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-white/80" : "text-muted",
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
