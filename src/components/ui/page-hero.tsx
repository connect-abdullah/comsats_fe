"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { getImageLoadingProps } from "@/lib/image-loading";
import { cn } from "@/lib/utils";
import type { HeroCta, PageHeroProps } from "@/types";

function HeroCtaButton({ cta }: { cta: HeroCta }) {
  const variant = cta.variant ?? "primary";
  const isExternal = cta.external ?? cta.href.startsWith("http");

  if (variant === "shimmer") {
    return (
      <Link
        href={cta.href}
        className="w-full sm:w-auto"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <ShimmerButton
          className="w-full px-7 py-3.5 text-base font-semibold shadow-glow sm:w-auto"
          background="linear-gradient(120deg, #4c227b 0%, #0f5ea6 100%)"
          shimmerColor="#ffffff"
          shimmerDuration="3s"
          borderRadius="999px"
        >
          {cta.label}
        </ShimmerButton>
      </Link>
    );
  }

  if (variant === "text-link") {
    return (
      <Link
        href={cta.href}
        className="inline-flex min-h-[44px] w-full items-center justify-center text-sm font-semibold text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline sm:w-auto sm:justify-start"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {cta.label}
      </Link>
    );
  }

  if (variant === "secondary") {
    return (
      <SecondaryButton
        href={cta.href}
        variant="light"
        className="w-full border-none sm:w-auto"
      >
        {cta.label}
      </SecondaryButton>
    );
  }

  return (
    <PrimaryButton href={cta.href} className="w-full sm:w-auto">
      {cta.label}
    </PrimaryButton>
  );
}

export function PageHero({
  badge,
  title,
  backgroundImage,
  imageAlt = "",
  tagline,
  description,
  subDescription,
  align = "left",
  size = "screen",
  showBadgePulse = true,
  ctas,
  overlay = "default",
  id,
}: PageHeroProps) {
  const isCentered = align === "center";
  const isCompact = size === "compact";

  return (
    <section
      id={id}
      className={cn(
        "relative flex items-center overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40",
        isCompact
          ? "min-h-[480px] sm:min-h-[520px]"
          : "min-h-screen pb-20",
      )}
    >
      <Image
        src={backgroundImage}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden={!imageAlt}
        {...getImageLoadingProps({ priority: true })}
      />
      <div className="absolute inset-0 bg-purple/55" aria-hidden="true" />
      <div className="absolute inset-0 bg-ink/25" aria-hidden="true" />
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-r",
          overlay === "strong"
            ? "from-ink/70 via-purple/35 to-transparent"
            : "from-ink/60 via-purple/30 to-transparent",
        )}
        aria-hidden="true"
      />

      <div className="container-cui relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className={cn(
            "flex max-w-3xl flex-col gap-5 sm:gap-6",
            isCentered
              ? "mx-auto items-center text-center"
              : "items-start pt-4 sm:gap-8 sm:pt-8 lg:pt-14",
          )}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-pill border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-sm"
          >
            {showBadgePulse && (
              <span
                className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-blue-400"
                aria-hidden="true"
              />
            )}
            {badge}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          {tagline && (
            <motion.p
              variants={fadeUp}
              className="text-xl font-semibold text-white/95 sm:text-2xl"
            >
              {tagline}
            </motion.p>
          )}

          {description && (
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-lg leading-relaxed text-white/85"
            >
              {description}
            </motion.p>
          )}

          {subDescription && (
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-base leading-relaxed text-white/80"
            >
              {subDescription}
            </motion.p>
          )}

          {ctas && ctas.length > 0 && (
            <motion.div
              variants={fadeUp}
              className={cn(
                "flex w-full flex-wrap items-center gap-4",
                !isCentered && "pt-2",
              )}
            >
              {ctas.map((cta) => (
                <HeroCtaButton key={`${cta.href}-${cta.label}`} cta={cta} />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
