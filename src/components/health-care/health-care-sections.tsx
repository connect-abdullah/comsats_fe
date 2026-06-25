"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/admissions/cta-section";
import { CounterCard } from "@/components/admissions/counter-card";
import { CollaborationFeatureCard } from "@/components/research/collaboration-feature-card";
import { OpportunityCard } from "@/components/research/opportunity-card";
import { ContentShowcase } from "@/components/ui/content-showcase";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import {
  AWARENESS_PROGRAMS,
  COUNSELLING_WELLNESS,
  DENTAL_SERVICES,
  EMERGENCY_SUPPORT,
  FACILITIES_RESOURCES,
  HEALTH_CARE_FINAL_CTA,
  HEALTH_CARE_STATS,
  HEALTHCARE_SERVICES,
  MEDICAL_CENTER,
  MEDICAL_CENTER_CAPACITY,
} from "@/constants/health-care/page";
import { IMAGES } from "@/constants/shared/images";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function HealthcareStatistics() {
  return (
    <SectionContainer className="bg-surface">
      <SectionHeader
        label="Healthcare Impact"
        heading="Serving Our Campus Community"
        description="The Inam-ul-Haq Medical Center provides accessible healthcare to students, faculty, and staff across COMSATS University Islamabad."
        align="center"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 overflow-hidden rounded-card border border-line/60 bg-white shadow-soft"
      >
        <div className="grid grid-cols-1 divide-y divide-line/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {HEALTH_CARE_STATS.map((stat) => (
            <CounterCard key={stat.label} stat={stat} />
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}

export function MedicalCenterOverview() {
  return (
    <ContentShowcase
      id="medical-center"
      sectionLabel={MEDICAL_CENTER.label}
      heading={MEDICAL_CENTER.heading}
      paragraphs={MEDICAL_CENTER.paragraphs}
      image={IMAGES.healthCare.medicalCenter}
      imageAlt={MEDICAL_CENTER.imageAlt}
      imageAspect="16/10"
      imageOverlay="purple"
      background="white"
      headerVariant="sectionHeader"
    />
  );
}

export function MedicalCenterCapacity() {
  return (
    <SectionContainer className="bg-surface">
      <SectionHeader
        label="Medical Center Capacity"
        heading="Equipped for Campus Healthcare"
        description="A dedicated team and facilities ensure timely medical support for the university community."
        align="center"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line/60 bg-line/60 sm:grid-cols-2 lg:grid-cols-3"
      >
        {MEDICAL_CENTER_CAPACITY.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="bg-white p-5 sm:p-10"
          >
            <span className="text-2xl font-bold text-purple/20 sm:text-3xl">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-base font-bold text-ink sm:mt-3 sm:text-xl">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3 sm:text-base">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}

export function HealthcareServices() {
  return (
    <SectionContainer id="healthcare-services" className="bg-white">
      <SectionHeader
        label="Medical Services"
        heading="Healthcare Services"
        description="Comprehensive on-campus medical services supporting consultation, emergency care, diagnostics, and treatment."
        align="center"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line/60 bg-line/60 sm:grid-cols-2 lg:grid-cols-3"
      >
        {HEALTHCARE_SERVICES.map((service, index) => (
          <CollaborationFeatureCard
            key={service.title}
            feature={service}
            index={index}
          />
        ))}
      </motion.div>
    </SectionContainer>
  );
}

export function EmergencyCareSupport() {
  return (
    <SectionContainer id="emergency-support" className="bg-surface">
      <SectionHeader
        label="Emergency Care"
        heading={EMERGENCY_SUPPORT.heading}
        description={EMERGENCY_SUPPORT.description}
        align="center"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 overflow-hidden rounded-card border border-blue/20 bg-white p-6 shadow-soft sm:p-10"
      >
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EMERGENCY_SUPPORT.cases.map((item) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="flex items-start gap-3 rounded-card border border-line/60 bg-surface px-4 py-4"
            >
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-blue"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-ink sm:text-base">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </SectionContainer>
  );
}

export function CounsellingWellnessSection() {
  return (
    <SectionContainer className="bg-white">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-6"
        >
          <SectionHeader
            label="Wellness"
            heading={COUNSELLING_WELLNESS.heading}
            description={COUNSELLING_WELLNESS.description}
            align="left"
            className="mb-2"
          />
          <motion.div variants={fadeUp}>
            <p className="mb-4 text-sm font-semibold tracking-wider text-purple uppercase">
              Future Programs
            </p>
            <ul className="space-y-3">
              {COUNSELLING_WELLNESS.futurePrograms.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-purple"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-ink sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <OpportunityCard opportunity={DENTAL_SERVICES} />
        </motion.div>
      </div>
    </SectionContainer>
  );
}

export function HealthcareAwareness() {
  return (
    <SectionContainer className="bg-surface">
      <SectionHeader
        label="Health Education"
        heading={AWARENESS_PROGRAMS.heading}
        description={AWARENESS_PROGRAMS.description}
        align="center"
      />
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {AWARENESS_PROGRAMS.programs.map((program) => (
          <motion.li
            key={program}
            variants={fadeUp}
            className="flex items-start gap-3 rounded-card border border-line/60 bg-white px-5 py-5 shadow-soft"
          >
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-purple"
              aria-hidden="true"
            />
            <span className="font-semibold text-ink">{program}</span>
          </motion.li>
        ))}
      </motion.ul>
    </SectionContainer>
  );
}

export function FacilitiesResources() {
  return (
    <SectionContainer className="bg-white">
      <SectionHeader
        label="Facilities"
        heading="Facilities & Resources"
        description="Comprehensive healthcare infrastructure supporting safety, wellness, and emergency preparedness across campus."
        align="center"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line/60 bg-line/60 sm:grid-cols-2 lg:grid-cols-4"
      >
        {FACILITIES_RESOURCES.map((feature, index) => (
          <CollaborationFeatureCard
            key={feature.title}
            feature={feature}
            index={index}
          />
        ))}
      </motion.div>
    </SectionContainer>
  );
}

export function HealthcareFinalCta() {
  return (
    <CTASection
      heading={HEALTH_CARE_FINAL_CTA.heading}
      description={HEALTH_CARE_FINAL_CTA.description}
      primaryCta={HEALTH_CARE_FINAL_CTA.primaryCta}
      secondaryCta={HEALTH_CARE_FINAL_CTA.secondaryCta}
      layout="fullWidth"
      tone="purple"
    />
  );
}
