import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutIntro } from "@/components/about/about-intro";
import { AboutHistory } from "@/components/about/about-history";
import { AboutLeadership } from "@/components/about/about-leadership";
import { AdminOffices } from "@/components/about/admin-offices";

export const metadata: Metadata = {
  title: "About Islamabad Campus",
  description:
    "Discover your potential and shape your future at COMSATS University Islamabad. Learn about our vision, mission, history, leadership, and administrative offices.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutHistory />
      <AboutLeadership />
      <AdminOffices />
    </>
  );
}
