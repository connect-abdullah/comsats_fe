"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  stagger?: boolean;
}

/** Wraps content so it animates once when scrolled into view. */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  stagger = false,
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={stagger ? staggerContainer : variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
}

/** Child item for a staggered Reveal container. */
export function RevealItem({ children, className }: RevealItemProps) {
  return (
    <motion.div variants={fadeUp} className={cn(className)}>
      {children}
    </motion.div>
  );
}
