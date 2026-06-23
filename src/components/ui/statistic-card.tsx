"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { fadeUp } from "@/lib/animations";

interface StatisticCardProps {
  value: string;
  label: string;
  subtitle?: string;
  helper?: string;
  icon: LucideIcon;
}

export function StatisticCard({
  value,
  label,
  subtitle,
  helper,
  icon: Icon,
}: StatisticCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-card border border-line bg-white p-8 transition-all duration-300 hover:shadow-soft"
    >
      <Icon className="mb-4 h-8 w-8 text-amber-500" aria-hidden="true" />
      <p className="text-3xl font-bold text-ink">{value}</p>
      <p className="mt-2 text-sm font-medium text-ink">{subtitle ?? label}</p>
      {helper && <p className="mt-1 text-xs text-muted">{helper}</p>}
    </motion.div>
  );
}
