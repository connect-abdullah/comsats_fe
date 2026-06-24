"use client";

import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQSearchProps {
  query: string;
  onQueryChange: (query: string) => void;
  onExpandAll?: () => void;
  onCollapseAll?: () => void;
  sectionFilters?: { id: string; label: string }[];
  activeSection?: string;
  onSectionChange?: (sectionId: string) => void;
  resultCount?: number;
  className?: string;
}

export function FAQSearch({
  query,
  onQueryChange,
  onExpandAll,
  onCollapseAll,
  sectionFilters,
  activeSection,
  onSectionChange,
  resultCount,
  className,
}: FAQSearchProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search questions..."
            aria-label="Search FAQs"
            className="w-full rounded-card border border-line/60 bg-white py-3.5 pl-12 pr-12 text-base text-ink shadow-soft outline-none transition-colors focus:border-purple/40 focus:ring-2 focus:ring-purple/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {(onExpandAll || onCollapseAll) && (
          <div className="flex w-full gap-2 sm:w-auto">
            {onExpandAll && (
              <button
                type="button"
                onClick={onExpandAll}
                className="flex-1 rounded-pill border border-line px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-purple/30 hover:text-purple sm:flex-none"
              >
                Expand All
              </button>
            )}
            {onCollapseAll && (
              <button
                type="button"
                onClick={onCollapseAll}
                className="flex-1 rounded-pill border border-line px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-purple/30 hover:text-purple sm:flex-none"
              >
                Collapse All
              </button>
            )}
          </div>
        )}
      </div>

      {sectionFilters && sectionFilters.length > 0 && onSectionChange && (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onSectionChange("")}
            className={cn(
              "rounded-pill px-3 py-1.5 text-xs font-semibold transition-colors sm:text-sm",
              !activeSection
                ? "bg-purple text-white"
                : "bg-surface text-muted hover:text-purple",
            )}
          >
            All Sections
          </button>
          {sectionFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => onSectionChange(filter.id)}
              className={cn(
                "rounded-pill px-3 py-1.5 text-xs font-semibold transition-colors sm:text-sm",
                activeSection === filter.id
                  ? "bg-purple text-white"
                  : "bg-surface text-muted hover:text-purple",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}

      {query && resultCount !== undefined && (
        <p className="text-sm text-muted">
          {resultCount === 0
            ? "No results found. Try a different search term."
            : `${resultCount} result${resultCount === 1 ? "" : "s"} found`}
        </p>
      )}
    </div>
  );
}
