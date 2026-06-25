"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DegreeProgramCard } from "@/components/academics/degree-program-card";
import { DepartmentTabNav } from "@/components/academics/department-tab-nav";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { ACADEMIC_DEPARTMENTS } from "@/constants/academics/page";
import { getDepartmentLevels } from "@/lib/academic-degrees";
import { degreeLevelCapsuleStyles } from "@/lib/department-accent";
import { cn } from "@/lib/utils";

export function DepartmentShowcase() {
  const [activeId, setActiveId] = useState(ACADEMIC_DEPARTMENTS[0].id);
  const activeDepartment =
    ACADEMIC_DEPARTMENTS.find((department) => department.id === activeId) ??
    ACADEMIC_DEPARTMENTS[0];
  const departmentLevels = getDepartmentLevels(activeDepartment.degrees);

  return (
    <SectionContainer id="departments" className="bg-white">
      <SectionHeader
        heading="Program Density"
        description="Thirteen specialized departments offering undergraduate, graduate, and doctoral pathways across the Islamabad campus."
        align="center"
        className="mb-12"
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
        <DepartmentTabNav
          departments={ACADEMIC_DEPARTMENTS}
          activeId={activeId}
          onSelect={setActiveId}
        />

        <div
          role="tabpanel"
          id={`panel-${activeDepartment.id}`}
          aria-labelledby={`tab-${activeDepartment.id}`}
        >
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-ink sm:text-2xl">
                {activeDepartment.name}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {activeDepartment.overview}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              {departmentLevels.map((level) => (
                <span
                  key={level}
                  className={cn(
                    "inline-flex rounded-pill px-3 py-1 text-xs font-bold",
                    degreeLevelCapsuleStyles[level],
                  )}
                >
                  {level}
                </span>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDepartment.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {activeDepartment.degrees.map((degree) => (
                <DegreeProgramCard
                  key={degree.name}
                  degree={degree}
                  accent={activeDepartment.accent}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionContainer>
  );
}
