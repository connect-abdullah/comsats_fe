import type { Metadata } from "next";
import { AdmissionsHero } from "@/components/admissions/admissions-hero";
import { QuickActions } from "@/components/admissions/quick-actions";
import { AdmissionsStatistics } from "@/components/admissions/admissions-statistics";
import { ProgramCategories } from "@/components/admissions/program-categories";
import { AdmissionProcess } from "@/components/admissions/admission-process";
import { ImportantDatesTimeline } from "@/components/admissions/important-dates-timeline";
import { WhyChooseComsats } from "@/components/admissions/why-choose-comsats";
import { InternationalStudents } from "@/components/admissions/international-students";
import { ScholarshipsSection } from "@/components/admissions/scholarships-section";
import { FaqPreview } from "@/components/admissions/faq/faq-preview";
import { FinalCTA } from "@/components/admissions/final-cta";
import { VideoTestimonials } from "@/components/home/video-testimonials";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Start your journey at COMSATS University Islamabad. Explore programs, apply online, discover scholarships, and join a merit-based academic community.",
};

export default function AdmissionsPage() {
  return (
    <>
      <AdmissionsHero />
      <QuickActions />
      <AdmissionsStatistics />
      <ProgramCategories />
      <AdmissionProcess />
      <ImportantDatesTimeline />
      <WhyChooseComsats />
      <InternationalStudents />
      <ScholarshipsSection />
      <FaqPreview />
      <VideoTestimonials />
      <FinalCTA />
    </>
  );
}
