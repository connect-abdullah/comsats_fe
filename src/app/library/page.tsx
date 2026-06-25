import type { Metadata } from "next";
import { LibraryShowcase } from "@/components/library/library-showcase";
import { PageHero } from "@/components/ui/page-hero";
import { LIBRARY_HERO } from "@/constants/library/page";
import { IMAGES } from "@/constants/shared/images";

export const metadata: Metadata = {
  title: "Junaid Zaidi Library",
  description:
    "Explore the Junaid Zaidi Library at COMSATS University Islamabad — print and digital collections, research databases, study spaces, and academic support services.",
};

export default function LibraryPage() {
  return (
    <>
      <PageHero
        badge={LIBRARY_HERO.label}
        title={LIBRARY_HERO.heading}
        tagline={LIBRARY_HERO.tagline}
        backgroundImage={IMAGES.library.hero}
        ctas={[
          {
            label: "Explore Library Resources",
            href: "#library-resources",
            variant: "primary",
          },
          {
            label: "Digital Library Access",
            href: "#",
            variant: "secondary",
          },
        ]}
      />
      <LibraryShowcase />
    </>
  );
}
