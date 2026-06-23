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
  const isCream = variant === "feature" || variant === "news" || variant === "event" || variant === "academic";

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
      <div className={cn("relative w-full overflow-hidden", aspectMap[variant])}>
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
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

      <div className="flex flex-1 flex-col justify-between p-8">
        <div className="space-y-4">
          {variant === "event" && date && (
            <p className="text-xs font-bold tracking-wider text-blue uppercase">{date}</p>
          )}
          {variant === "news" && date && (
            <p className="text-xs text-muted">{date}</p>
          )}
          <h3
            className={cn(
              "font-bold leading-snug text-ink",
              variant === "news" || variant === "event"
                ? "text-[22px] group-hover:text-purple"
                : "text-2xl",
            )}
          >
            {title}
          </h3>
          {description && (
            <p className="text-sm leading-relaxed text-muted">{description}</p>
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
