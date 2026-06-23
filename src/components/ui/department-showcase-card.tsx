"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface DepartmentShowcaseFeaturedProps {
  name: string;
  description: string;
  image: string;
  icon: LucideIcon;
  href?: string;
}

export function DepartmentShowcaseFeatured({
  name,
  description,
  image,
  icon: Icon,
  href = "#departments",
}: DepartmentShowcaseFeaturedProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative overflow-hidden rounded-section shadow-feature"
    >
      <div className="relative min-h-[420px] lg:min-h-[480px]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 scrim-photo-bottom" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 lg:p-12">
          <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md">
            <Icon className="h-7 w-7" aria-hidden="true" />
          </span>
          <p className="text-eyebrow mb-2 text-white/70">Featured Department</p>
          <h3 className="text-section-title max-w-xl text-white">{name}</h3>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85">
            {description}
          </p>
          <Link
            href={href}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-blue-400"
          >
            Explore Department
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

interface DepartmentShowcaseCardProps {
  name: string;
  description: string;
  image: string;
  icon: LucideIcon;
  href?: string;
  className?: string;
}

export function DepartmentShowcaseCard({
  name,
  description,
  image,
  icon: Icon,
  href = "#departments",
  className,
}: DepartmentShowcaseCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "group overflow-hidden rounded-card border border-line bg-white shadow-card transition-shadow duration-300 hover:shadow-lift",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-purple shadow-soft">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div className="p-5">
        <h4 className="text-lg font-semibold text-ink">{name}</h4>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
          {description}
        </p>
        <Link
          href={href}
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-purple hover:text-blue"
        >
          Learn more
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
