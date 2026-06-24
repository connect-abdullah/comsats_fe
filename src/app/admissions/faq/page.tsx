import type { Metadata } from "next";
import { Suspense } from "react";
import { FaqHero } from "@/components/admissions/faq/faq-hero";
import { FaqContent } from "@/components/admissions/faq/faq-content";

export const metadata: Metadata = {
  title: "Admissions FAQ",
  description:
    "Find answers about COMSATS University Islamabad admissions, eligibility, scholarships, testing requirements, and application procedures.",
};

export default function AdmissionsFaqPage() {
  return (
    <>
      <FaqHero />
      <Suspense fallback={<div className="min-h-[400px] bg-white" />}>
        <FaqContent />
      </Suspense>
    </>
  );
}
