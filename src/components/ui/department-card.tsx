"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { Department } from "@/types";

const accentStyles: Record<
  Department["accent"],
  { icon: string; hover: string }
> = {
  purple: {
    icon: "bg-purple/5 text-purple group-hover:bg-purple group-hover:text-white",
    hover: "group-hover:border-purple",
  },
  blue: {
    icon: "bg-blue/5 text-blue group-hover:bg-blue group-hover:text-white",
    hover: "group-hover:border-purple",
  },
  amber: {
    icon: "bg-amber-500/5 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
    hover: "group-hover:border-purple",
  },
  emerald: {
    icon: "bg-emerald-500/5 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white",
    hover: "group-hover:border-purple",
  },
  rose: {
    icon: "bg-rose-500/5 text-rose-600 group-hover:bg-rose-500 group-hover:text-white",
    hover: "group-hover:border-purple",
  },
  indigo: {
    icon: "bg-indigo-500/5 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white",
    hover: "group-hover:border-purple",
  },
  cyan: {
    icon: "bg-cyan-500/5 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white",
    hover: "group-hover:border-purple",
  },
  teal: {
    icon: "bg-teal-500/5 text-teal-600 group-hover:bg-teal-500 group-hover:text-white",
    hover: "group-hover:border-purple",
  },
};

interface DepartmentCardProps {
  name: string;
  icon: LucideIcon;
  description: string;
  accent: Department["accent"];
}

export function DepartmentCard({
  name,
  icon: Icon,
  description,
  accent,
}: DepartmentCardProps) {
  const styles = accentStyles[accent];

  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "group rounded-card border border-line/80 bg-white p-8 transition-all duration-300 hover:shadow-lg",
        styles.hover,
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300",
          styles.icon,
        )}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-xl font-bold text-ink">{name}</h3>
      <p className="mt-2 text-xs text-muted">{description}</p>
      <Link
        href="#departments"
        className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-blue transition-transform group-hover:translate-x-1"
      >
        Inquire Department
        <ChevronRight className="h-3 w-3" aria-hidden="true" />
      </Link>
    </motion.div>
  );
}
