import type { Metadata } from "next";
import { Suspense } from "react";
import { FaqContent } from "@/components/admissions/faq/faq-content";
import { PageHero } from "@/components/ui/page-hero";
import { FAQ_HERO } from "@/constants/admissions/page";
import { IMAGES } from "@/constants/shared/images";

export const metadata: Metadata = {
  title: "Admissions FAQ",
  description:
    "Find answers about COMSATS University Islamabad admissions, eligibility, scholarships, testing requirements, and application procedures.",
};

export default function AdmissionsFaqPage() {
  return (
    <>
      <PageHero
        badge="FAQ"
        title={FAQ_HERO.heading}
        description={FAQ_HERO.description}
        backgroundImage={IMAGES.admissions.faq}
        align="center"
        size="compact"
        showBadgePulse={false}
      />
      <Suspense fallback={<div className="min-h-[400px] bg-white" />}>
        <FaqContent />
      </Suspense>
    </>
  );
}
