"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { QuickActionCard } from "@/types";

const accentStyles: Record<
  QuickActionCard["accent"],
  { icon: string; glow: string }
> = {
  purple: {
    icon: "bg-purple/10 text-purple group-hover:bg-purple group-hover:text-white",
    glow: "group-hover:shadow-[0_0_40px_-8px_rgba(76,34,123,0.5)]",
  },
  blue: {
    icon: "bg-blue/10 text-blue group-hover:bg-blue group-hover:text-white",
    glow: "group-hover:shadow-[0_0_40px_-8px_rgba(15,94,166,0.5)]",
  },
  amber: {
    icon: "bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
    glow: "group-hover:shadow-[0_0_40px_-8px_rgba(245,158,11,0.4)]",
  },
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white",
    glow: "group-hover:shadow-[0_0_40px_-8px_rgba(16,185,129,0.4)]",
  },
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white",
    glow: "group-hover:shadow-[0_0_40px_-8px_rgba(6,182,212,0.4)]",
  },
  indigo: {
    icon: "bg-indigo-500/10 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white",
    glow: "group-hover:shadow-[0_0_40px_-8px_rgba(99,102,241,0.4)]",
  },
};

interface QuickActionCardComponentProps {
  action: QuickActionCard;
}

export function QuickActionCardComponent({ action }: QuickActionCardComponentProps) {
  const Icon = action.icon;
  const styles = accentStyles[action.accent];
  const isExternal = action.href.startsWith("http");

  return (
    <motion.div variants={fadeUp}>
      <Link
        href={action.href}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className={cn(
          "group flex h-full flex-col rounded-card border border-line/60 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-purple/30 hover:shadow-lift sm:p-8",
          styles.glow,
        )}
      >
        <div className="flex items-start justify-between">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 sm:h-12 sm:w-12",
              styles.icon,
            )}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
          </div>
          <ArrowUpRight
            className="h-4 w-4 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-purple sm:h-5 sm:w-5"
            aria-hidden="true"
          />
        </div>
        <h3 className="mt-4 text-base font-bold text-ink sm:mt-5 sm:text-lg">{action.title}</h3>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-muted line-clamp-2 sm:text-sm sm:line-clamp-none">
          {action.description}
        </p>
      </Link>
    </motion.div>
  );
}
