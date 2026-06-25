import type { Metadata } from "next";
import { AcademicStatistics } from "@/components/academics/academic-statistics";
import { CentersOffices } from "@/components/academics/centers-offices";
import { CourseCatalogue } from "@/components/academics/course-catalogue";
import { DepartmentShowcase } from "@/components/academics/department-showcase";
import { PageHero } from "@/components/ui/page-hero";
import { IMAGES } from "@/constants/shared/images";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Explore internationally recognized degree programs, distinguished faculty, cutting-edge research opportunities, and academic departments at COMSATS University Islamabad.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        badge="Academics"
        title="World-Class Education, Research & Innovation"
        description="Explore internationally recognized degree programs, distinguished faculty, cutting-edge research opportunities, and a learning environment designed to prepare future leaders."
        backgroundImage={IMAGES.academic.hero}
        ctas={[
          {
            label: "Explore Departments",
            href: "#departments",
            variant: "primary",
          },
          {
            label: "View Programs",
            href: "#course-catalogue",
            variant: "secondary",
          },
        ]}
      />
      <AcademicStatistics />
      <DepartmentShowcase />
      <CentersOffices />
      <CourseCatalogue />
    </>
  );
}
