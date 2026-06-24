"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

type EditorialVariant = "feature" | "news" | "event" | "academic";

interface EditorialCardProps {
  image: string;
  title: string;
  description?: string;
  date?: string;
  category?: string;
  categoryColor?: "purple" | "blue";
  ctaLabel?: string;
  href?: string;
  variant?: EditorialVariant;
  elevated?: boolean;
  className?: string;
  priority?: boolean;
}

const aspectMap: Record<EditorialVariant, string> = {
  feature: "aspect-[4/3]",
  news: "aspect-[16/10]",
  event: "aspect-[16/10]",
  academic: "aspect-[16/11]",
};

export function EditorialCard({
  image,
  title,
  description,
  date,
  category,
  categoryColor = "purple",
  ctaLabel,
  href = "#",
  variant = "feature",
  elevated = false,
  className,
  priority = false,
}: EditorialCardProps) {
  const isCream =
    variant === "feature" ||
    variant === "news" ||
    variant === "event" ||
    variant === "academic";

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: elevated ? -4 : -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-card border border-line shadow-soft transition-shadow duration-300 hover:shadow-lift",
        isCream ? "bg-cream" : "bg-white",
        elevated && "md:-translate-y-4 md:shadow-lift",
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full shrink-0 overflow-hidden",
          aspectMap[variant],
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes={
            variant === "event"
              ? "280px"
              : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {category && (
          <span
            className={cn(
              "absolute top-4 left-4 rounded-pill px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase",
              categoryColor === "blue" ? "bg-blue" : "bg-purple",
            )}
          >
            {category}
          </span>
        )}
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col",
          variant === "event"
            ? "min-h-0 justify-start p-5"
            : "justify-between p-5 md:p-8",
        )}
      >
        <div className={variant === "event" ? "min-h-0 flex-1" : "space-y-4"}>
          {variant === "event" && date && (
            <p className="min-h-4 truncate text-xs font-bold tracking-wider text-blue uppercase">
              {date}
            </p>
          )}
          {variant === "news" && date && (
            <p className="text-xs text-muted">{date}</p>
          )}
          <h3
            className={cn(
              "font-bold leading-snug text-ink",
              variant === "news" || variant === "event"
                ? "text-lg group-hover:text-purple md:text-[22px]"
                : "text-xl md:text-2xl",
              variant === "event" &&
                "mt-3 line-clamp-2 min-h-[3.25rem] md:min-h-[3.5rem]",
            )}
          >
            {title}
          </h3>
          {description && (
            <p
              className={cn(
                "text-sm leading-relaxed text-muted",
                variant === "event" && "mt-2 line-clamp-3 min-h-[3.75rem]",
              )}
            >
              {description}
            </p>
          )}
        </div>

        {ctaLabel && (
          <Link
            href={href}
            className={cn(
              "mt-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors",
              variant === "news"
                ? "text-xs tracking-wider text-ink uppercase group-hover:text-purple"
                : "text-purple group-hover:text-blue",
            )}
          >
            {ctaLabel}
            <ChevronRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        )}
      </div>
    </motion.article>
  );
}
