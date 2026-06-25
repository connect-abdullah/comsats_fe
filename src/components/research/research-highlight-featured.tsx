"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { getImageLoadingProps } from "@/lib/image-loading";
import { cn } from "@/lib/utils";
import type { ResearchHighlight } from "@/types";

interface ResearchHighlightFeaturedProps {
  highlight: ResearchHighlight;
  className?: string;
}

export function ResearchHighlightFeatured({
  highlight,
  className,
}: ResearchHighlightFeaturedProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        "group relative overflow-hidden rounded-section bg-ink shadow-lift",
        className,
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
          <Image
            src={highlight.image}
            alt={highlight.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            {...getImageLoadingProps({ priority: true })}
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-ink/60 via-ink/10 to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-ink/40"
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
          <span
            className={cn(
              "inline-flex w-fit rounded-pill px-4 py-1.5 text-[11px] font-bold tracking-wider text-white uppercase",
              highlight.categoryColor === "blue" ? "bg-blue" : "bg-purple",
            )}
          >
            {highlight.category}
          </span>
          <h3 className="mt-5 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            {highlight.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            {highlight.description}
          </p>
          <div className="mt-8">
            <PrimaryButton href={highlight.href}>
              {highlight.ctaLabel ?? "Read Story"}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

interface ResearchHighlightGridProps {
  highlights: ResearchHighlight[];
  className?: string;
}

export function ResearchHighlightGrid({
  highlights,
  className,
}: ResearchHighlightGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8",
        className,
      )}
    >
      {highlights.map((highlight) => (
        <motion.article
          key={highlight.id}
          variants={fadeUp}
          className="group overflow-hidden rounded-card border border-line/60 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={highlight.image}
              alt={highlight.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              {...getImageLoadingProps()}
            />
            <span
              className={cn(
                "absolute top-4 left-4 rounded-pill px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase",
                highlight.categoryColor === "blue" ? "bg-blue" : "bg-purple",
              )}
            >
              {highlight.category}
            </span>
          </div>
          <div className="p-5 sm:p-6">
            <h3 className="font-heading text-lg font-bold leading-snug text-ink sm:text-xl">
              {highlight.title}
            </h3>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
              {highlight.description}
            </p>
            <Link
              href={highlight.href}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-purple transition-colors hover:text-purple-600"
            >
              Read more
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
