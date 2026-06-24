"use client";

import { SectionContainer } from "@/components/ui/section-container";
import { StatCountUp } from "@/components/ui/stat-count-up";
import { ACADEMIC_STATS } from "@/constants/academics/page";

export function AcademicStatistics() {
  return (
    <SectionContainer id="academic-stats" className="bg-surface">
      <div className="overflow-hidden rounded-card border border-line/60 bg-white shadow-soft">
        <div className="grid grid-cols-2 divide-x divide-y divide-line/60 md:grid-cols-3 md:divide-y-0">
          {ACADEMIC_STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="px-4 py-8 text-center sm:px-8 sm:py-10"
              >
                <Icon
                  className="mx-auto h-7 w-7 text-purple"
                  aria-hidden="true"
                />
                <p className="mt-3 min-h-12 text-3xl font-bold leading-none text-ink sm:mt-4 sm:min-h-[3rem] sm:text-4xl lg:text-5xl">
                  <StatCountUp value={stat.value} />
                </p>
                <p className="mt-3 text-sm font-semibold tracking-wider text-blue uppercase">
                  {stat.label}
                </p>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">
                  {stat.helper}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
