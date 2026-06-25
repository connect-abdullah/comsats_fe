import type { Metadata } from "next";
import { FeaturedNewsCarousel } from "@/components/news/featured-news-carousel";
import { NewsGrid } from "@/components/news/news-grid";
import { PageHero } from "@/components/ui/page-hero";
import { IMAGES } from "@/constants/shared/images";

export const metadata: Metadata = {
  title: "News",
  description:
    "Stay informed with campus news, research highlights, events, and announcements from COMSATS University Islamabad.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        badge="Islamabad News"
        title="Campus News"
        tagline="Your University, Your News"
        description="Stay informed with the latest announcements, research, events, and campus stories from COMSATS University Islamabad."
        backgroundImage={IMAGES.campus.overview}
      />
      <FeaturedNewsCarousel />
      <NewsGrid />
    </>
  );
}
