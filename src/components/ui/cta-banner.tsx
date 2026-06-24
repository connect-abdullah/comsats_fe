"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

export type CtaBannerLayout = "rounded" | "fullWidth";

interface CtaBannerProps {
  layout?: CtaBannerLayout;
  className?: string;
  children: ReactNode;
}

function DotsOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-10"
      style={{
        backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    />
  );
}

export function CtaBanner({
  layout = "rounded",
  className,
  children,
}: CtaBannerProps) {
  if (layout === "fullWidth") {
    return (
      <section
        className={cn(
          "relative overflow-hidden bg-purple section-pad",
          className,
        )}
      >
        <DotsOverlay />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="container-cui relative z-10"
        >
          {children}
        </motion.div>
      </section>
    );
  }

  return (
    <section className={cn("section-pad", className)}>
      <div className="container-cui">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-section bg-purple px-6 py-12 text-center sm:px-10 lg:py-16"
        >
          <DotsOverlay />
          <div className="relative z-10">{children}</div>
        </motion.div>
      </div>
    </section>
  );
}
