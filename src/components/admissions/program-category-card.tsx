"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { ProgramCategory } from "@/types";

const accentStyles: Record<
  ProgramCategory["accent"],
  { border: string; icon: string; badge: string }
> = {
  purple: {
    border: "border-purple/20 hover:border-purple/40",
    icon: "bg-purple/10 text-purple",
    badge: "bg-purple/10 text-purple",
  },
  blue: {
    border: "border-blue/20 hover:border-blue/40",
    icon: "bg-blue/10 text-blue",
    badge: "bg-blue/10 text-blue",
  },
  amber: {
    border: "border-amber-500/20 hover:border-amber-500/40",
    icon: "bg-amber-500/10 text-amber-700",
    badge: "bg-amber-500/10 text-amber-700",
  },
};

interface ProgramCategoryCardProps {
  category: ProgramCategory;
}

export function ProgramCategoryCard({ category }: ProgramCategoryCardProps) {
  const Icon = category.icon;
  const styles = accentStyles[category.accent];
  const isExternal = category.href.startsWith("http");

  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "group flex h-full flex-col rounded-card border bg-white p-5 shadow-soft transition-all duration-300 hover:shadow-lift sm:p-8 md:p-10",
        styles.border,
      )}
    >
      <div
        className={cn(
          "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl",
          styles.icon,
        )}
      >
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-xl font-bold text-ink sm:mt-6 sm:text-2xl">
        {category.title}
      </h3>
      <p className="mt-3 leading-relaxed text-muted sm:mt-4 md:min-h-18">
        {category.description}
      </p>
      <ul className="mt-4 flex flex-wrap content-start gap-2 sm:mt-6 md:min-h-30 md:flex-1">
        {category.disciplines.map((discipline) => (
          <li
            key={discipline}
            className={cn(
              "rounded-pill px-3 py-1 text-xs font-semibold",
              styles.badge,
            )}
          >
            {discipline}
          </li>
        ))}
      </ul>
      <div className="mt-auto border-t border-line pt-6">
        <Link
          href={category.href}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="inline-flex items-center gap-1 text-sm font-semibold text-purple transition-transform group-hover:translate-x-1 hover:text-blue"
        >
          {category.ctaLabel}
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
}
