import type { Metadata } from "next";
import { ConferencesSection } from "@/components/research/conferences-section";
import { InnovationCollaborationSection } from "@/components/research/innovation-collaboration-section";
import { ResearchCentersSection } from "@/components/research/research-centers-section";
import { ResearchFinalCta } from "@/components/research/research-final-cta";
import { ResearchHighlightsSection } from "@/components/research/research-highlights-section";
import { ResearchImpactStats } from "@/components/research/research-impact-stats";
import { ResearchOpportunitiesSection } from "@/components/research/research-opportunities-section";
import { ResearchOutputSection } from "@/components/research/research-output-section";
import { PageHero } from "@/components/ui/page-hero";
import { RESEARCH_HERO } from "@/constants/research/page";
import { IMAGES } from "@/constants/shared/images";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore COMSATS University Islamabad's research ecosystem — publications, centers, innovation, collaborations, and opportunities for students and faculty.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        badge={RESEARCH_HERO.label}
        title={RESEARCH_HERO.heading}
        description={RESEARCH_HERO.description}
        backgroundImage={IMAGES.research.hero}
        ctas={[
          {
            label: RESEARCH_HERO.primaryCta.label,
            href: RESEARCH_HERO.primaryCta.href,
            variant: "primary",
          },
          {
            label: RESEARCH_HERO.secondaryCta.label,
            href: RESEARCH_HERO.secondaryCta.href,
            variant: "secondary",
          },
          {
            label: RESEARCH_HERO.tertiaryCta.label,
            href: RESEARCH_HERO.tertiaryCta.href,
            variant: "secondary",
          },
        ]}
      />
      <ResearchImpactStats />
      <ResearchCentersSection id="research-centers" />
      <ResearchOutputSection id="research-output" />
      <ConferencesSection />
      <ResearchOpportunitiesSection id="research-opportunities" />
      <InnovationCollaborationSection />
      <ResearchHighlightsSection id="research-highlights" />
      <ResearchFinalCta />
    </>
  );
}
