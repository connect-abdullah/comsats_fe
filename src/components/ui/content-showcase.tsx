"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { getImageLoadingProps } from "@/lib/image-loading";
import { cn } from "@/lib/utils";
import type { ContentShowcaseProps } from "@/types";

const aspectClasses = {
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-4/3",
} as const;

const overlayClasses = {
  purple: "from-purple/25 via-transparent to-transparent",
  ink: "from-ink/40 via-transparent to-transparent",
} as const;

function ShowcaseImagePanel({
  image,
  imageAlt,
  aspect,
  overlay,
  priority = false,
}: {
  image: string;
  imageAlt: string;
  aspect: ContentShowcaseProps["imageAspect"];
  overlay: ContentShowcaseProps["imageOverlay"];
  priority?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="relative overflow-hidden rounded-card shadow-lift"
    >
      <div
        className={cn(
          "relative overflow-hidden",
          aspectClasses[aspect ?? "16/10"],
        )}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          {...getImageLoadingProps({ priority })}
        />
        <div
          className={cn(
            "absolute inset-0 bg-linear-to-t",
            overlayClasses[overlay ?? "purple"],
          )}
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}

function InlineHeader({
  sectionLabel,
  heading,
  description,
  paragraphs,
}: Pick<
  ContentShowcaseProps,
  "sectionLabel" | "heading" | "description" | "paragraphs"
>) {
  return (
    <>
      {sectionLabel && (
        <motion.span
          variants={fadeUp}
          className="text-sm font-semibold tracking-[0.2em] text-blue uppercase"
        >
          {sectionLabel}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
      >
        {heading}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-6 text-base leading-relaxed text-muted sm:text-lg"
        >
          {description}
        </motion.p>
      )}
      {paragraphs && paragraphs.length > 0 && (
        <motion.div variants={fadeUp} className="mt-6 space-y-4">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-base leading-relaxed text-muted sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      )}
    </>
  );
}

export function ContentShowcase({
  id,
  sectionLabel,
  heading,
  description,
  paragraphs,
  image,
  imageAlt,
  imageAspect = "16/10",
  imagePosition,
  imageOverlay = "purple",
  background = "white",
  list,
  cta,
  headerVariant = "inline",
  reverseLayout = false,
  priority = false,
}: ContentShowcaseProps) {
  const resolvedImagePosition =
    imagePosition ?? (reverseLayout ? "right" : "left");
  const imageFirst = resolvedImagePosition === "left";

  const imagePanel = (
    <ShowcaseImagePanel
      image={image}
      imageAlt={imageAlt}
      aspect={imageAspect}
      overlay={imageOverlay}
      priority={priority}
    />
  );

  const contentPanel = (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="flex flex-col gap-6"
    >
      {headerVariant === "sectionHeader" ? (
        <>
          <SectionHeader
            label={sectionLabel}
            heading={heading}
            description={description}
            align="left"
            className="mb-4"
          />
        </>
      ) : (
        <InlineHeader
          sectionLabel={sectionLabel}
          heading={heading}
          description={description}
          paragraphs={paragraphs}
        />
      )}

      {list && list.type === "check" && (
        <motion.ul variants={fadeUp} className="space-y-3">
          {list.items.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-purple"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-ink sm:text-base">
                {item}
              </span>
            </li>
          ))}
        </motion.ul>
      )}

      {list && list.type === "chevron" && (
        <motion.ul
          variants={staggerContainer}
          className="grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2"
        >
          {list.items.map((item) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="flex items-start gap-3"
            >
              <ChevronRight
                className="mt-1 h-4 w-4 shrink-0 text-purple"
                aria-hidden="true"
              />
              <p className="font-semibold text-ink">{item}</p>
            </motion.li>
          ))}
        </motion.ul>
      )}

      {cta && (
        <motion.div variants={fadeUp}>
          <PrimaryButton href={cta.href}>
            {cta.icon && <cta.icon className="h-4 w-4" aria-hidden="true" />}
            {cta.label}
          </PrimaryButton>
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <SectionContainer
      id={id}
      className={background === "surface" ? "bg-surface" : "bg-white"}
    >
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {imageFirst ? (
          <>
            {imagePanel}
            {contentPanel}
          </>
        ) : (
          <>
            {contentPanel}
            {imagePanel}
          </>
        )}
      </div>
    </SectionContainer>
  );
}
