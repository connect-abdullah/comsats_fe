"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { DepartmentCard } from "@/components/ui/department-card";
import { DEPARTMENTS } from "@/constants/departments";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export function AcademicDepartments() {
  return (
    <SectionContainer id="departments" className="bg-surface">
      <SectionHeader
        label="Faculties & Programs"
        heading="Islamabad Campus Academic Departments"
        description="Uncover specialized academic divisions run by elite research faculty, built to shape contemporary thinking and scientific enterprise."
        align="center"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {DEPARTMENTS.map((dept) => (
          <DepartmentCard
            key={dept.name}
            name={dept.name}
            icon={dept.icon}
            description={dept.description}
            accent={dept.accent}
          />
        ))}
      </motion.div>
    </SectionContainer>
  );
}
