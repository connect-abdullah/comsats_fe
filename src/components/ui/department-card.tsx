"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { fadeUp } from "@/lib/animations";

interface DepartmentCardProps {
  name: string;
  icon: LucideIcon;
}

export function DepartmentCard({ name, icon: Icon }: DepartmentCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex flex-col items-center gap-4 rounded-card border border-line bg-white p-6 text-center shadow-soft transition-shadow duration-300 hover:shadow-lift"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple/10 text-purple transition-colors duration-300 group-hover:bg-purple group-hover:text-white">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>
      <span className="text-base font-semibold text-ink">{name}</span>
    </motion.div>
  );
}
