"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AcademicDepartment } from "@/types";

const accentStyles: Record<
  AcademicDepartment["accent"],
  { icon: string; badge: string; border: string }
> = {
  purple: {
    icon: "bg-purple/10 text-purple",
    badge: "bg-purple/10 text-purple",
    border: "border-purple/20",
  },
  blue: {
    icon: "bg-blue/10 text-blue",
    badge: "bg-blue/10 text-blue",
    border: "border-blue/20",
  },
  amber: {
    icon: "bg-amber-500/10 text-amber-700",
    badge: "bg-amber-500/10 text-amber-700",
    border: "border-amber-500/20",
  },
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-700",
    badge: "bg-emerald-500/10 text-emerald-700",
    border: "border-emerald-500/20",
  },
  rose: {
    icon: "bg-rose-500/10 text-rose-700",
    badge: "bg-rose-500/10 text-rose-700",
    border: "border-rose-500/20",
  },
  indigo: {
    icon: "bg-indigo-500/10 text-indigo-700",
    badge: "bg-indigo-500/10 text-indigo-700",
    border: "border-indigo-500/20",
  },
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-700",
    badge: "bg-cyan-500/10 text-cyan-700",
    border: "border-cyan-500/20",
  },
  teal: {
    icon: "bg-teal-500/10 text-teal-700",
    badge: "bg-teal-500/10 text-teal-700",
    border: "border-teal-500/20",
  },
};

interface ExpandableDepartmentCardProps {
  department: AcademicDepartment;
  isOpen: boolean;
  onToggle: () => void;
}

function isAccreditationBadge(abbreviation: string) {
  return abbreviation.includes("Accredited") || abbreviation.includes("NBEAC");
}

export function ExpandableDepartmentCard({
  department,
  isOpen,
  onToggle,
}: ExpandableDepartmentCardProps) {
  const styles = accentStyles[department.accent];
  const Icon = department.icon;
  const programCount = department.degrees.length;
  const programLabel = programCount === 1 ? "Program" : "Programs";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-card border transition-colors duration-300",
        isOpen ? "border-line/80 bg-white shadow-soft" : "border-line/60 bg-surface/50",
        styles.border,
      )}
    >
      <div
        className="absolute inset-y-0 left-0 w-1 brand-gradient"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-4 p-5 pl-6 sm:flex-row sm:items-center sm:justify-between sm:p-6 sm:pl-7">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex min-w-0 flex-1 items-start gap-4 text-left"
        >
          <div
            className={cn(
              "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl",
              styles.icon,
            )}
          >
            <Icon className="h-7 w-7" aria-hidden="true" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <h3 className="text-lg font-bold text-ink sm:text-xl">
                {department.name}
              </h3>
              <span
                className={cn(
                  "inline-flex shrink-0 items-center rounded-pill px-3 py-1 text-xs font-semibold",
                  styles.badge,
                )}
              >
                {programCount} {programLabel}
              </span>
            </div>
            <p className="mt-1.5 line-clamp-1 text-sm leading-relaxed text-muted">
              {department.overview}
            </p>
          </div>
        </button>

        <div className="flex shrink-0 items-center justify-end gap-2 pl-[4.5rem] sm:pl-0">
          <Link
            href={`#${department.id}`}
            onClick={(event) => event.stopPropagation()}
            className="group/link inline-flex min-h-[44px] items-center gap-1 rounded-pill border border-purple/25 px-4 py-2 text-sm font-semibold text-purple transition-colors hover:border-purple/40 hover:bg-purple/5 hover:text-blue"
          >
            Visit Department
            <ChevronRight
              className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>

          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse department" : "Expand department"}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line/80 bg-white text-muted transition-colors hover:border-purple/30 hover:text-purple"
          >
            <ChevronDown
              className={cn(
                "h-5 w-5 transition-transform duration-300",
                isOpen && "rotate-180",
              )}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-line/60 px-6 pb-6 pl-7 sm:px-8 sm:pb-8 sm:pl-9">
              <ul className="mt-4 space-y-3">
                {department.degrees.map((degree) => (
                  <li
                    key={degree.name}
                    className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
                  >
                    <span className="text-sm font-medium text-ink sm:text-base">
                      {degree.name}
                    </span>
                    {degree.abbreviation && (
                      <span
                        className={
                          isAccreditationBadge(degree.abbreviation)
                            ? "rounded-pill bg-purple/10 px-2.5 py-0.5 text-xs font-semibold text-purple"
                            : "text-xs font-semibold text-muted"
                        }
                      >
                        {degree.abbreviation}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
