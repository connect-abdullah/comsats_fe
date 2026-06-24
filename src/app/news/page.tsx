import type { Metadata } from "next";
import { NewsHero } from "@/components/news/news-hero";
import { FeaturedNewsCarousel } from "@/components/news/featured-news-carousel";
import { NewsGrid } from "@/components/news/news-grid";

export const metadata: Metadata = {
  title: "News",
  description:
    "Stay informed with campus news, research highlights, events, and announcements from COMSATS University Islamabad.",
};

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <FeaturedNewsCarousel />
      <NewsGrid />
    </>
  );
}
