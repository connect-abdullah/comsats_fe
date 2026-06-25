"use client";

import { cn } from "@/lib/utils";
import { getDegreeLevel } from "@/lib/academic-degrees";
import {
  degreeLevelCapsuleStyles,
  departmentAccentStyles,
} from "@/lib/department-accent";
import type { AcademicDegree, AcademicDepartment } from "@/types";

interface DegreeProgramCardProps {
  degree: AcademicDegree;
  accent: AcademicDepartment["accent"];
}

export function DegreeProgramCard({ degree, accent }: DegreeProgramCardProps) {
  const level = getDegreeLevel(degree);
  const styles = departmentAccentStyles[accent];

  return (
    <article
      className={cn(
        "flex min-h-[120px] flex-col items-center justify-center rounded-card border bg-white p-5 text-center transition-colors duration-300 hover:border-purple/30 hover:shadow-soft sm:min-h-[140px] sm:p-6",
        styles.border,
      )}
    >
      <h4 className="text-sm font-bold leading-snug text-ink sm:text-base">
        {degree.name}
      </h4>
      <span
        className={cn(
          "mt-3 inline-flex rounded-pill px-2.5 py-0.5 text-xs font-bold",
          degreeLevelCapsuleStyles[level],
        )}
      >
        {level}
      </span>
    </article>
  );
}
