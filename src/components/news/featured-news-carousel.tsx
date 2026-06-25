"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { FEATURED_NEWS } from "@/constants/news/page";
import { getImageLoadingProps } from "@/lib/image-loading";
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
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
            {...getImageLoadingProps()}
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/40 to-ink/20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-purple/20" aria-hidden="true" />
        </motion.div>
      </AnimatePresence>

      <div className="container-cui relative z-10 flex min-h-[480px] items-center justify-center px-3 py-16 sm:px-4 lg:min-h-[560px]">
        <div className="flex w-full max-w-4xl items-center justify-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:h-11 sm:w-11"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          </button>

          <div className="min-w-0 flex-1 rounded-card border border-white/25 bg-white/5 px-4 py-7 text-center backdrop-blur-sm sm:px-10 sm:py-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={slideTransition}
                className="mx-auto flex max-w-2xl flex-col items-center gap-4 sm:gap-5"
              >
                <span
                  className={cn(
                    "rounded-pill px-4 py-1.5 text-[11px] font-bold tracking-wider text-white uppercase",
                    slide.categoryColor === "blue" ? "bg-blue" : "bg-purple",
                  )}
                >
                  {slide.category}
                </span>
                <h2 className="font-heading text-xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  {slide.title}
                </h2>
                <p className="text-sm leading-relaxed text-white/85 sm:text-lg">
                  {slide.description}
                </p>
                <PrimaryButton href={slide.href} className="mt-1 sm:mt-2">
                  {slide.ctaLabel}
                </PrimaryButton>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:h-11 sm:w-11"
          >
            <ChevronRight
              className="h-4 w-4 sm:h-5 sm:w-5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

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
