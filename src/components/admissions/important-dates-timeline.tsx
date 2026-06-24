"use client";

import { AdmissionTimeline } from "@/components/admissions/admission-timeline";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { IMPORTANT_DATES } from "@/constants/admissions-page";

export function ImportantDatesTimeline() {
  return (
    <SectionContainer className="bg-white">
      <SectionHeader
        label="Key Dates"
        heading="Important Dates"
        description="Mark your calendar for admissions milestones and the start of your academic journey."
        align="center"
      />
      <div className="mt-14">
        <AdmissionTimeline events={IMPORTANT_DATES} />
      </div>
    </SectionContainer>
  );
}
