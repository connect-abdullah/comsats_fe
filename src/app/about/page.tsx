import type { Metadata } from "next";
import { AboutHistory } from "@/components/about/about-history";
import { AboutIntro } from "@/components/about/about-intro";
import { AboutLeadership } from "@/components/about/about-leadership";
import { AdminOffices } from "@/components/about/admin-offices";
import { PageHero } from "@/components/ui/page-hero";
import { ABOUT_HERO } from "@/constants/about/page";
import { IMAGES } from "@/constants/shared/images";

export const metadata: Metadata = {
  title: "About Islamabad Campus",
  description:
    "Discover your potential and shape your future at COMSATS University Islamabad. Learn about our vision, mission, history, leadership, and administrative offices.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge={ABOUT_HERO.label}
        title={ABOUT_HERO.heading}
        tagline={ABOUT_HERO.tagline}
        backgroundImage={IMAGES.aboutUs.parkingBuilding}
        imageAlt="COMSATS University Islamabad campus"
        showBadgePulse={false}
      />
      <AboutIntro />
      <AboutHistory />
      <AboutLeadership />
      <AdminOffices />
    </>
  );
}
