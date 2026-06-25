import type { Metadata } from "next";
import {
  CafeteriaSection,
  CampusLifeFinalCta,
  HarassmentPolicySection,
  MedicalCenterSection,
  SportsWellnessSection,
  StudentAffairsSection,
  StudentSocietiesSection,
  TransportationSection,
} from "@/components/campus-life/campus-life-sections";
import { PageHero } from "@/components/ui/page-hero";
import { CAMPUS_LIFE_HERO } from "@/constants/campus-life/page";
import { IMAGES } from "@/constants/shared/images";

export const metadata: Metadata = {
  title: "Campus Life",
  description:
    "Discover student engagement, wellness, facilities, and community at COMSATS University Islamabad.",
};

export default function CampusLifePage() {
  return (
    <>
      <PageHero
        badge={CAMPUS_LIFE_HERO.label}
        title={CAMPUS_LIFE_HERO.heading}
        tagline={CAMPUS_LIFE_HERO.tagline}
        description={CAMPUS_LIFE_HERO.description}
        backgroundImage={IMAGES.campusLife.hero}
      />
      <StudentAffairsSection />
      <HarassmentPolicySection />
      <SportsWellnessSection />
      <MedicalCenterSection />
      <TransportationSection />
      <StudentSocietiesSection />
      <CafeteriaSection />
      <CampusLifeFinalCta />
    </>
  );
}
