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
  featured?: boolean;
  horizontal?: boolean;
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
  featured = false,
  horizontal = false,
}: StatisticCardProps) {
  const isGlass = variant === "glass";
  const showHelper = helper && (featured || !compact);

  return (
    <motion.div variants={fadeUp} className={cn("min-h-0 h-full", className)}>
      <GlassCard
        tone={isGlass ? "stat" : "light"}
        className={cn(
          "h-full transition-all duration-300",
          compact ? "p-0" : "p-6 sm:p-8",
          isGlass
            ? "hover:bg-white/20 hover:shadow-lift"
            : "border border-line bg-white hover:shadow-soft",
        )}
      >
        <div
          className={cn(
            compact && "p-2.5 sm:p-4",
            featured && "flex h-full flex-col justify-center",
            horizontal && "flex items-center gap-2 sm:gap-4",
          )}
        >
          <Icon
            className={cn(
              "shrink-0",
              isGlass ? "text-amber-400" : "text-amber-500",
              horizontal
                ? "h-4 w-4 sm:h-6 sm:w-6"
                : compact
                  ? featured
                    ? "mb-1.5 h-5 w-5 sm:mb-2 sm:h-6 sm:w-6"
                    : "mb-1.5 h-5 w-5"
                  : "mb-4 h-8 w-8",
            )}
            aria-hidden="true"
          />
          <div className={cn(horizontal && "min-w-0 flex-1")}>
            <StatCountUp
              value={value}
              className={cn(
                "font-bold leading-none",
                isGlass ? "text-white" : "text-ink",
                valueClassName ??
                  (compact ? "text-xl sm:text-2xl" : "text-3xl"),
              )}
            />
            <p
              className={cn(
                "font-medium leading-snug",
                horizontal
                  ? "mt-0.5 text-[10px] sm:text-sm"
                  : compact
                    ? "mt-1 text-[11px] sm:text-xs"
                    : "mt-2 text-sm",
                isGlass ? "font-semibold text-white/90" : "text-ink",
              )}
            >
              {subtitle ?? label}
            </p>
            {showHelper && (
              <p
                className={cn(
                  "line-clamp-2 leading-snug",
                  compact ? "mt-0.5 text-[10px] sm:text-xs" : "mt-1 text-xs",
                  isGlass ? "text-white/85 font-medium" : "text-muted",
                )}
              >
                {helper}
              </p>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
