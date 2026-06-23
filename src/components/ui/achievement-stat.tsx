"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AchievementStatProps {
  value: string;
  label: string;
  className?: string;
  variant?: "light" | "dark";
}

export function AchievementStat({
  value,
  label,
  className,
  variant = "light",
}: AchievementStatProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "flex flex-col gap-2 rounded-card border p-8 shadow-achievement transition-shadow duration-300 hover:shadow-lift",
        variant === "light"
          ? "border-line bg-white"
          : "border-white/20 bg-white/10 backdrop-blur-md",
        className,
      )}
    >
      <span
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl",
          variant === "light" ? "text-purple" : "text-white",
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          "text-sm font-medium leading-snug sm:text-base",
          variant === "light" ? "text-muted" : "text-white/80",
        )}
      >
        {label}
      </span>
    </motion.div>
  );
}
