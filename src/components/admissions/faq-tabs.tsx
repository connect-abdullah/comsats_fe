"use client";

import { cn } from "@/lib/utils";
import type { FaqTabId } from "@/types";

interface FaqTab {
  id: FaqTabId;
  label: string;
}

interface FAQTabsProps {
  tabs: FaqTab[];
  activeTab: FaqTabId;
  onTabChange: (tab: FaqTabId) => void;
  className?: string;
}

export function FAQTabs({
  tabs,
  activeTab,
  onTabChange,
  className,
}: FAQTabsProps) {
  return (
    <nav
      aria-label="FAQ categories"
      className={cn(
        "sticky top-20 z-30 border-b border-line/60 bg-white/95 py-4 backdrop-blur-md",
        className,
      )}
    >
      <div className="container-cui">
        <div
          className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:pb-0"
          role="tablist"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                onClick={() => onTabChange(tab.id)}
                aria-selected={isActive}
                className={cn(
                  "shrink-0 rounded-pill px-4 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-6",
                  isActive
                    ? "bg-purple text-white shadow-md shadow-purple/20"
                    : "bg-surface text-ink hover:bg-purple/5 hover:text-purple",
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
