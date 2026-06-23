"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface PremiumMediaCardProps {
  title: string;
  thumbnail: string;
  category?: string;
  onClick?: () => void;
  className?: string;
  width?: string;
}

export function PremiumMediaCard({
  title,
  thumbnail,
  category = "Video",
  onClick,
  className,
  width = "w-[420px] sm:w-[480px]",
}: PremiumMediaCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Play ${title}`}
      className={cn(
        "group relative shrink-0 overflow-hidden rounded-card text-left shadow-feature transition-all duration-500 hover:-translate-y-2 hover:shadow-lift",
        width,
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="480px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
        <span className="absolute left-5 top-5 rounded-pill border border-white/25 bg-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
          {category}
        </span>
        <span className="absolute inset-0 flex items-center justify-center opacity-90 transition-opacity group-hover:opacity-100">
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-1 h-9 w-9 fill-white text-white" aria-hidden="true" />
          </span>
        </span>
        <div className="absolute inset-x-0 bottom-0 p-6 pt-16">
          <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
            {title}
          </h3>
        </div>
      </div>
    </button>
  );
}
