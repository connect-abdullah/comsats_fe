"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { FEATURED_NEWS } from "@/constants/news-page";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_MS = 3500;

const slideTransition = {
  duration: 0.7,
  ease: [0.4, 0, 0.2, 1] as const,
};

export function FeaturedNewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = FEATURED_NEWS.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(goNext, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused]);

  const slide = FEATURED_NEWS[activeIndex];

  return (
    <section
      className="relative min-h-[480px] overflow-hidden bg-ink lg:min-h-[90vh]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured news"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={slideTransition}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={activeIndex === 0}
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/40 to-ink/20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-purple/20" aria-hidden="true" />

          <div className="container-cui relative z-10 flex h-full min-h-[480px] flex-col items-center justify-center px-4 py-16 text-center lg:min-h-[560px]">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-card border border-white/25 bg-white/5 px-6 py-8 backdrop-blur-sm sm:px-10 sm:py-10">
              <span
                className={cn(
                  "rounded-pill px-4 py-1.5 text-[11px] font-bold tracking-wider text-white uppercase",
                  slide.categoryColor === "blue" ? "bg-blue" : "bg-purple",
                )}
              >
                {slide.category}
              </span>
              <h2 className="font-heading text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {slide.title}
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                {slide.description}
              </p>
              <PrimaryButton href={slide.href} className="mt-2">
                {slide.ctaLabel}
              </PrimaryButton>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:left-6"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next slide"
        className="absolute top-1/2 right-4 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:right-6"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {FEATURED_NEWS.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
            className={cn(
              "h-2.5 rounded-pill transition-all duration-300",
              index === activeIndex
                ? "w-8 bg-white"
                : "w-2.5 bg-white/40 hover:bg-white/70",
            )}
          />
        ))}
      </div>
    </section>
  );
}
