"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SecondaryButton } from "@/components/ui/secondary-button";
import {
  DepartmentShowcaseFeatured,
  DepartmentShowcaseCard,
} from "@/components/ui/department-showcase-card";
import {
  FEATURED_DEPARTMENT,
  SUPPORTING_DEPARTMENTS,
} from "@/constants/departments";
import { staggerContainer, viewportOnce } from "@/lib/animations";

export function AcademicDepartments() {
  return (
    <section id="departments" className="section-pad scroll-mt-28 bg-surface">
      <div className="container-cui">
        <div className="mb-14 max-w-2xl">
          <SectionEyebrow>Academic Excellence</SectionEyebrow>
          <h2 className="text-section-title mt-4 text-ink">
            Islamabad Campus Academic Departments
          </h2>
          <p className="text-body-lg mt-5 text-muted">
            Discover world-class departments driving innovation, research and future
            education across engineering, sciences, business, and design.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-6 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <DepartmentShowcaseFeatured
              name={FEATURED_DEPARTMENT.name}
              description={FEATURED_DEPARTMENT.description}
              image={FEATURED_DEPARTMENT.image}
              icon={FEATURED_DEPARTMENT.icon}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {SUPPORTING_DEPARTMENTS.slice(0, 3).map((dept) => (
              <DepartmentShowcaseCard
                key={dept.name}
                name={dept.name}
                description={dept.description}
                image={dept.image}
                icon={dept.icon}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SUPPORTING_DEPARTMENTS.slice(3).map((dept) => (
            <DepartmentShowcaseCard
              key={dept.name}
              name={dept.name}
              description={dept.description}
              image={dept.image}
              icon={dept.icon}
            />
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <SecondaryButton href="#departments">View All Departments</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
