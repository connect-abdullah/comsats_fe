"use client";

import Link from "next/link";
import { Marquee } from "@/components/ui/marquee";
import { SectionHeader } from "@/components/ui/section-header";
import { VideoTestimonialCard } from "@/components/admissions/video-testimonial-card";
import {
  VIDEO_TESTIMONIALS,
  VIDEO_TESTIMONIALS_SECTION,
} from "@/constants/video-testimonials";

export function VideoTestimonials() {
  const mid = Math.ceil(VIDEO_TESTIMONIALS.length / 2);
  const rowOne = VIDEO_TESTIMONIALS.slice(0, mid);
  const rowTwo = VIDEO_TESTIMONIALS.slice(mid);

  return (
    <section className="relative scroll-mt-24 overflow-hidden bg-ink section-pad">
      <div
        className="absolute inset-0 bg-linear-to-b from-purple/20 via-transparent to-blue/10"
        aria-hidden="true"
      />

      <div className="container-cui relative z-10">
        <SectionHeader
          label={VIDEO_TESTIMONIALS_SECTION.label}
          heading={VIDEO_TESTIMONIALS_SECTION.heading}
          description={VIDEO_TESTIMONIALS_SECTION.description}
          tone="light"
          align="center"
        />
      </div>

      <div className="relative z-10 mt-10 flex flex-col gap-4 overflow-hidden sm:mt-14 sm:gap-6">
        <Marquee duration={75} gap="1rem" direction="right">
          {rowOne.map((t) => (
            <VideoTestimonialCard key={t.id} testimonial={t} />
          ))}
        </Marquee>
        <Marquee duration={85} gap="1rem" direction="left">
          {rowTwo.map((t) => (
            <VideoTestimonialCard key={t.id} testimonial={t} />
          ))}
        </Marquee>
      </div>

      <div className="container-cui relative z-10 mt-12 text-center">
        <Link
          href={VIDEO_TESTIMONIALS_SECTION.ctaHref}
          className="inline-flex items-center justify-center rounded-pill border border-white/25 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-ink"
        >
          {VIDEO_TESTIMONIALS_SECTION.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
