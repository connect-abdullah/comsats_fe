"use client";

import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { CtaBanner, type CtaBannerLayout } from "@/components/ui/cta-banner";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  heading: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  className?: string;
  layout?: CtaBannerLayout;
  tone?: "purple" | "surface";
}

export function CTASection({
  heading,
  description,
  primaryCta,
  secondaryCta,
  className,
  layout = "fullWidth",
  tone = "purple",
}: CTASectionProps) {
  const isPurple = tone === "purple";

  if (!isPurple) {
    return (
      <section
        className={cn(
          "relative overflow-hidden section-pad bg-surface",
          className,
        )}
      >
        <div className="container-cui relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {description}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton href={primaryCta.href}>
                {primaryCta.label}
              </PrimaryButton>
              <SecondaryButton href={secondaryCta.href} variant="outline">
                {secondaryCta.label}
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <CtaBanner layout={layout} className={className}>
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {heading}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90"
        >
          {description}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <PrimaryButton href={primaryCta.href}>
            {primaryCta.label}
          </PrimaryButton>
          <SecondaryButton href={secondaryCta.href} variant="light">
            {secondaryCta.label}
          </SecondaryButton>
        </motion.div>
      </div>
    </CtaBanner>
  );
}
