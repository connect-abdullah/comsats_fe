import type { Metadata } from "next";
import { AcademicsHero } from "@/components/academics/academics-hero";
import { AcademicStatistics } from "@/components/academics/academic-statistics";
import { DepartmentShowcase } from "@/components/academics/department-showcase";
import { CentersOffices } from "@/components/academics/centers-offices";
import { CourseCatalogue } from "@/components/academics/course-catalogue";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Explore internationally recognized degree programs, distinguished faculty, cutting-edge research opportunities, and academic departments at COMSATS University Islamabad.",
};

export default function AcademicsPage() {
  return (
    <>
      <AcademicsHero />
      <AcademicStatistics />
      <DepartmentShowcase />
      <CentersOffices />
      <CourseCatalogue />
    </>
  );
}
