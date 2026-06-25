"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { SectionContainer } from "@/components/ui/section-container";
import { LIBRARY_SHOWCASE } from "@/constants/library/page";
import { IMAGES } from "@/constants/shared/images";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { getImageLoadingProps } from "@/lib/image-loading";

function KnowledgePattern() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234c227b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  );
}

export function LibraryShowcase() {
  return (
    <SectionContainer
      id="library-resources"
      className="relative overflow-hidden bg-surface"
    >
      <KnowledgePattern />

      <div className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm font-semibold tracking-[0.2em] text-blue uppercase"
          >
            Academic Resources
          </motion.span>

          <motion.div variants={fadeUp} className="space-y-4">
            {LIBRARY_SHOWCASE.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-base leading-relaxed text-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="mb-4 text-sm font-semibold tracking-wider text-purple uppercase">
              Key Highlights
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-6">
              {LIBRARY_SHOWCASE.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-purple"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-ink sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <PrimaryButton href={LIBRARY_SHOWCASE.primaryCta.href}>
              {LIBRARY_SHOWCASE.primaryCta.label}
            </PrimaryButton>
            <SecondaryButton href={LIBRARY_SHOWCASE.secondaryCta.href}>
              {LIBRARY_SHOWCASE.secondaryCta.label}
            </SecondaryButton>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative lg:sticky lg:top-28"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-card border border-purple/15 bg-purple/5 sm:translate-x-4 sm:translate-y-4"
          />
          <div className="relative overflow-hidden rounded-card shadow-lift">
            <div className="relative aspect-[4/3] lg:aspect-[3/4]">
              <Image
                src={IMAGES.library.junaidZaidi}
                alt={LIBRARY_SHOWCASE.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                {...getImageLoadingProps({ priority: true })}
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-purple/30 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
