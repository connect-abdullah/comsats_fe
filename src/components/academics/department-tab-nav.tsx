"use client";

import { cn } from "@/lib/utils";
import { formatDepartmentShortName } from "@/lib/academic-degrees";
import { departmentAccentStyles } from "@/lib/department-accent";
import type { AcademicDepartment } from "@/types";

interface DepartmentTabNavProps {
  departments: AcademicDepartment[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
}

function DepartmentTabButton({
  department,
  isActive,
  onSelect,
  variant,
}: {
  department: AcademicDepartment;
  isActive: boolean;
  onSelect: () => void;
  variant: "sidebar" | "pill";
}) {
  const Icon = department.icon;
  const styles = departmentAccentStyles[department.accent];
  const label = formatDepartmentShortName(department.name);

  if (variant === "pill") {
    return (
      <button
        type="button"
        role="tab"
        id={`tab-${department.id}`}
        aria-selected={isActive}
        aria-controls={`panel-${department.id}`}
        onClick={onSelect}
        className={cn(
          "shrink-0 snap-center rounded-pill px-4 py-2.5 text-sm font-semibold transition-all duration-300",
          isActive
            ? "bg-purple text-white shadow-md shadow-purple/20"
            : "bg-surface text-ink hover:bg-purple/5 hover:text-purple",
        )}
      >
        {label}
      </button>
    );
  }

  return (
    <button
      type="button"
      role="tab"
      id={`tab-${department.id}`}
      aria-selected={isActive}
      aria-controls={`panel-${department.id}`}
      onClick={onSelect}
      className={cn(
        "relative flex w-full items-center gap-3 border-b border-line/60 px-4 py-4 text-left transition-colors last:border-b-0",
        isActive
          ? "bg-purple/5 text-ink"
          : "text-muted hover:bg-surface hover:text-ink",
      )}
    >
      {isActive && (
        <span
          className="absolute inset-y-0 left-0 w-1 brand-gradient"
          aria-hidden="true"
        />
      )}
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
          isActive ? styles.icon : "bg-surface text-muted",
        )}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <span
        className={cn(
          "text-sm leading-snug",
          isActive ? "font-bold text-purple" : "font-medium",
        )}
      >
        {label}
      </span>
    </button>
  );
}

export function DepartmentTabNav({
  departments,
  activeId,
  onSelect,
  className,
}: DepartmentTabNavProps) {
  return (
    <>
      <nav
        aria-label="Academic departments"
        className={cn("lg:hidden", className)}
      >
        <div
          className="-mx-2 flex gap-2 overflow-x-auto px-2 pb-2 snap-x snap-mandatory"
          role="tablist"
        >
          {departments.map((department) => (
            <DepartmentTabButton
              key={department.id}
              department={department}
              isActive={activeId === department.id}
              onSelect={() => onSelect(department.id)}
              variant="pill"
            />
          ))}
        </div>
      </nav>

      <nav
        aria-label="Academic departments"
        className={cn(
          "hidden lg:block lg:sticky lg:top-28 lg:self-start",
          className,
        )}
      >
        <div
          className="overflow-hidden rounded-card border border-line/60 bg-white shadow-soft"
          role="tablist"
        >
          {departments.map((department) => (
            <DepartmentTabButton
              key={department.id}
              department={department}
              isActive={activeId === department.id}
              onSelect={() => onSelect(department.id)}
              variant="sidebar"
            />
          ))}
        </div>
      </nav>
    </>
  );
}
