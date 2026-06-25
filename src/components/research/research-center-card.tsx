"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { fadeUp } from "@/lib/animations";
import { getImageLoadingProps } from "@/lib/image-loading";
import { cn } from "@/lib/utils";
import type { ResearchCenter } from "@/types";

interface ResearchCenterCardProps {
  center: ResearchCenter;
  className?: string;
}

export function ResearchCenterCard({
  center,
  className,
}: ResearchCenterCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "overflow-hidden rounded-card border border-line/60 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift",
        className,
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {center.image && (
          <div className="relative aspect-[16/10] overflow-hidden lg:col-span-5 lg:aspect-auto lg:min-h-[360px]">
            <Image
              src={center.image}
              alt={center.name}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
              {...getImageLoadingProps()}
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-purple/30 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        )}

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-7 lg:p-10">
          <h3 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            {center.name}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {center.description}
          </p>

          <ul className="mt-6 space-y-3">
            {center.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <ChevronRight
                  className="mt-1 h-4 w-4 shrink-0 text-purple"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-ink/90 sm:text-base">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {center.researchAreas.map((area) => (
              <span
                key={area}
                className="rounded-pill bg-purple/8 px-3 py-1 text-xs font-semibold text-purple"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <PrimaryButton href={center.href}>View Details</PrimaryButton>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
