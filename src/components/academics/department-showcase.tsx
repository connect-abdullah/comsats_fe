"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { ExpandableDepartmentCard } from "@/components/academics/expandable-department-card";
import { ACADEMIC_DEPARTMENTS } from "@/constants/academics-page";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export function DepartmentShowcase() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <SectionContainer id="departments" className="bg-white">
      <SectionHeader
        heading="Program Density"
        description="Thirteen specialized departments offering undergraduate, graduate, and doctoral pathways across the Islamabad campus."
        align="center"
        className="mb-12"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="space-y-4"
      >
        {ACADEMIC_DEPARTMENTS.map((department) => (
          <ExpandableDepartmentCard
            key={department.id}
            department={department}
            isOpen={openId === department.id}
            onToggle={() => handleToggle(department.id)}
          />
        ))}
      </motion.div>
    </SectionContainer>
  );
}
