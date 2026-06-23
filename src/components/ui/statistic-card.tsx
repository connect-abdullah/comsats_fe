"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { StatCountUp } from "@/components/ui/stat-count-up";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface StatisticCardProps {
  value: string;
  label: string;
  subtitle?: string;
  helper?: string;
  icon: LucideIcon;
  className?: string;
  valueClassName?: string;
  variant?: "light" | "glass";
  compact?: boolean;
}

export function StatisticCard({
  value,
  label,
  subtitle,
  helper,
  icon: Icon,
  className,
  valueClassName,
  variant = "glass",
  compact = false,
}: StatisticCardProps) {
  const isGlass = variant === "glass";

  return (
    <motion.div variants={fadeUp} className={className}>
      <GlassCard
        tone={isGlass ? "dark" : "light"}
        className={cn(
          "flex flex-col transition-all duration-300",
          compact ? "p-0" : "p-6 sm:p-8",
          isGlass
            ? "hover:bg-white/12 hover:shadow-lift"
            : "border border-line bg-white hover:shadow-soft",
        )}
      >
        <div className={cn(compact && "p-4 sm:p-5")}>
          <Icon
            className={cn(
              isGlass ? "text-amber-400" : "text-amber-500",
              compact ? "mb-2 h-6 w-6" : "mb-4 h-8 w-8",
            )}
            aria-hidden="true"
          />
          <StatCountUp
            value={value}
            className={cn(
              "font-bold",
              isGlass ? "text-white" : "text-ink",
              valueClassName ?? (compact ? "text-2xl sm:text-3xl" : "text-3xl"),
            )}
          />
          <p
            className={cn(
              "font-medium",
              compact ? "mt-1 text-xs" : "mt-2 text-sm",
              isGlass ? "text-white/90" : "text-ink",
            )}
          >
            {subtitle ?? label}
          </p>
          {helper && (
            <p
              className={cn(
                compact ? "mt-0.5 text-[11px] leading-snug" : "mt-1 text-xs",
                isGlass ? "text-white/70" : "text-muted",
              )}
            >
              {helper}
            </p>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}
