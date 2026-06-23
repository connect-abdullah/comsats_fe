"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  image: string;
  title: string;
  description?: string;
  date?: string;
  ctaLabel?: string;
  href?: string;
  className?: string;
  priority?: boolean;
}

export function ContentCard({
  image,
  title,
  description,
  date,
  ctaLabel,
  href = "#",
  className,
  priority = false,
}: ContentCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift",
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {date && (
          <span className="absolute left-4 top-4 rounded-pill bg-white/90 px-3 py-1 text-xs font-semibold text-purple shadow-soft backdrop-blur">
            {date}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl font-semibold leading-snug text-ink">{title}</h3>
        {description && (
          <p className="text-sm leading-relaxed text-muted">{description}</p>
        )}
        {ctaLabel && (
          <Link
            href={href}
            className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-purple transition-colors hover:text-blue"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        )}
      </div>
    </motion.article>
  );
}
