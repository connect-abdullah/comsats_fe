"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NewsArticle } from "@/types";

interface NewsCardProps {
  article: NewsArticle;
  className?: string;
  priority?: boolean;
}

export function NewsCard({ article, className, priority = false }: NewsCardProps) {
  const monthShort = article.date.month.slice(0, 3).toUpperCase();

  return (
    <Link
      href={article.href}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-card border border-line/80 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-ink/30 via-transparent to-transparent"
          aria-hidden="true"
        />
        {article.category && (
          <span
            className={cn(
              "absolute top-2 left-2 rounded-pill px-2 py-0.5 text-[8px] font-bold tracking-wider text-white uppercase sm:top-4 sm:left-4 sm:px-3 sm:py-1 sm:text-[10px]",
              article.categoryColor === "blue" ? "bg-blue" : "bg-purple",
            )}
          >
            {article.category}
          </span>
        )}
      </div>

      <div className="flex flex-1 gap-2 p-3 sm:gap-4 sm:p-6">
        <div className="flex shrink-0 flex-col items-center border-r border-line/60 pr-2 text-center sm:pr-4">
          <span className="text-xl font-bold leading-none text-ink sm:text-3xl">
            {article.date.day}
          </span>
          <span className="mt-0.5 text-[9px] font-semibold tracking-wider text-blue uppercase sm:mt-1 sm:text-[11px]">
            {monthShort}
          </span>
          <span className="mt-0.5 text-[10px] text-muted sm:text-sm">
            {article.date.year}
          </span>
        </div>
        <h3 className="line-clamp-3 text-xs font-bold leading-snug text-ink transition-colors group-hover:text-purple sm:text-lg">
          {article.title}
        </h3>
      </div>
    </Link>
  );
}
