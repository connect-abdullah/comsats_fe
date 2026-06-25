"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import { ADMIN_OFFICES, ADMIN_OFFICES_SECTION } from "@/constants/about/page";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { getImageLoadingProps } from "@/lib/image-loading";

export function AdminOffices() {
  return (
    <SectionContainer className="bg-white">
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex lg:col-span-6"
        >
          <div className="relative min-h-[28rem] flex-1 overflow-hidden rounded-card shadow-lift sm:min-h-[32rem]">
            <Image
              src={ADMIN_OFFICES_SECTION.image}
              alt={ADMIN_OFFICES_SECTION.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              {...getImageLoadingProps()}
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-purple/20 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </motion.div>

        <div className="lg:col-span-6">
          <SectionHeader
            label={ADMIN_OFFICES_SECTION.label}
            heading={ADMIN_OFFICES_SECTION.heading}
            description={ADMIN_OFFICES_SECTION.description}
            align="left"
            className="mb-10"
          />

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2"
          >
            {ADMIN_OFFICES.map((office) => (
              <motion.li
                key={office.name}
                variants={fadeUp}
                className="flex items-start gap-3"
              >
                <ChevronRight
                  className="mt-1 h-4 w-4 shrink-0 text-purple"
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold text-ink sm:text-base">
                  {office.name}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </SectionContainer>
  );
}
