"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface StatisticCardProps {
  value: string;
  label: string;
}

export function StatisticCard({ value, label }: StatisticCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="glass rounded-card p-6 text-center shadow-soft"
    >
      <p className="text-2xl font-bold leading-tight text-white sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-sm font-medium text-white/80">{label}</p>
    </motion.div>
  );
}
