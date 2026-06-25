import type { Metadata } from "next";
import { AdmissionProcess } from "@/components/admissions/admission-process";
import { AdmissionsStatistics } from "@/components/admissions/admissions-statistics";
import { FaqPreview } from "@/components/admissions/faq/faq-preview";
import { FinalCTA } from "@/components/admissions/final-cta";
import { ImportantDatesTimeline } from "@/components/admissions/important-dates-timeline";
import { InternationalStudents } from "@/components/admissions/international-students";
import { ProgramCategories } from "@/components/admissions/program-categories";
import { QuickActions } from "@/components/admissions/quick-actions";
import { ScholarshipsSection } from "@/components/admissions/scholarships-section";
import { WhyChooseComsats } from "@/components/admissions/why-choose-comsats";
import { VideoTestimonials } from "@/components/home/video-testimonials";
import { PageHero } from "@/components/ui/page-hero";
import { ADMISSIONS_HERO } from "@/constants/admissions/page";
import { IMAGES } from "@/constants/shared/images";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Start your journey at COMSATS University Islamabad. Explore programs, apply online, discover scholarships, and join a merit-based academic community.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        badge={ADMISSIONS_HERO.label}
        title={ADMISSIONS_HERO.heading}
        description={ADMISSIONS_HERO.description}
        subDescription={ADMISSIONS_HERO.subDescription}
        backgroundImage={IMAGES.admissions.hero}
        overlay="strong"
        ctas={[
          {
            label: ADMISSIONS_HERO.primaryCta.label,
            href: ADMISSIONS_HERO.primaryCta.href,
            variant: "shimmer",
            external: ADMISSIONS_HERO.primaryCta.href.startsWith("http"),
          },
          {
            label: ADMISSIONS_HERO.secondaryCta.label,
            href: ADMISSIONS_HERO.secondaryCta.href,
            variant: "secondary",
          },
          {
            label: ADMISSIONS_HERO.tertiaryCta.label,
            href: ADMISSIONS_HERO.tertiaryCta.href,
            variant: "text-link",
          },
        ]}
      />
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
