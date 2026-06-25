import type { Metadata } from "next";
import {
  CounsellingWellnessSection,
  EmergencyCareSupport,
  FacilitiesResources,
  HealthcareAwareness,
  HealthcareFinalCta,
  HealthcareServices,
  HealthcareStatistics,
  MedicalCenterCapacity,
  MedicalCenterOverview,
} from "@/components/health-care/health-care-sections";
import { PageHero } from "@/components/ui/page-hero";
import { HEALTH_CARE_HERO } from "@/constants/health-care/page";
import { IMAGES } from "@/constants/shared/images";

export const metadata: Metadata = {
  title: "Health Care",
  description:
    "Explore healthcare services, emergency support, wellness programs, and medical facilities at COMSATS University Islamabad's Inam-ul-Haq Medical Center.",
};

export default function HealthCarePage() {
  return (
    <>
      <PageHero
        badge={HEALTH_CARE_HERO.label}
        title={HEALTH_CARE_HERO.heading}
        description={HEALTH_CARE_HERO.description}
        backgroundImage={IMAGES.healthCare.hero}
        ctas={[
          {
            label: HEALTH_CARE_HERO.primaryCta.label,
            href: HEALTH_CARE_HERO.primaryCta.href,
            variant: "primary",
          },
          {
            label: HEALTH_CARE_HERO.secondaryCta.label,
            href: HEALTH_CARE_HERO.secondaryCta.href,
            variant: "secondary",
          },
        ]}
      />
      <HealthcareStatistics />
      <MedicalCenterOverview />
      <MedicalCenterCapacity />
      <HealthcareServices />
      <EmergencyCareSupport />
      <CounsellingWellnessSection />
      <HealthcareAwareness />
      <FacilitiesResources />
      <HealthcareFinalCta />
    </>
  );
}
