"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import type { VideoTestimonial } from "@/types";

interface VideoTestimonialCardProps {
  testimonial: VideoTestimonial;
  className?: string;
}

export function VideoTestimonialCard({
  testimonial,
  className,
}: VideoTestimonialCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className={cn(
          "group relative w-[260px] shrink-0 overflow-hidden rounded-[24px] shadow-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-12px_rgba(76,34,123,0.35)] sm:w-[300px] md:w-[360px]",
          className,
        )}
        aria-label={`Play testimonial from ${testimonial.name}`}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={testimonial.thumbnail}
            alt=""
            fill
            sizes="360px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
              <Play
                className="ml-1 h-6 w-6 fill-white text-white"
                aria-hidden="true"
              />
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 text-left">
            <p className="text-base font-bold text-white">{testimonial.name}</p>
            <p className="mt-1 text-sm text-white/80">
              {testimonial.designation}
            </p>
          </div>
        </div>
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Video testimonial from ${testimonial.name}`}
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative max-w-2xl rounded-card bg-white p-8 text-center shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xl font-bold text-ink">{testimonial.name}</p>
            <p className="mt-2 text-muted">{testimonial.designation}</p>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Video playback will be available soon. This modal is ready for
              YouTube or Vimeo integration.
            </p>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="mt-6 rounded-pill bg-purple px-6 py-3 text-sm font-semibold text-white hover:bg-blue"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
