"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeader } from "@/components/ui/section-header";
import {
  CENTERS_DESCRIPTION,
  CENTERS_OFFICES,
} from "@/constants/academics-page";
import { IMAGES } from "@/constants/images";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function CentersOffices() {
  return (
    <SectionContainer id="centers-offices" className="bg-surface">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-6"
        >
          <div className="relative overflow-hidden rounded-card shadow-lift">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={IMAGES.academic.centersAndOffices}
                alt="COMSATS University campus — academic centers and offices"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-purple/20 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-6">
          <SectionHeader
            label="Centers & Offices"
            heading="Supporting the Academic Ecosystem"
            description={CENTERS_DESCRIPTION}
            align="left"
            className="mb-10"
          />

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2"
          >
            {CENTERS_OFFICES.map((center) => (
              <motion.li
                key={center.name}
                variants={fadeUp}
                className="flex items-start gap-3"
              >
                <ChevronRight
                  className="mt-1 h-4 w-4 shrink-0 text-purple"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-ink">
                    {center.name}
                    {center.abbreviation && (
                      <span className="font-medium text-muted">
                        {" "}
                        · {center.abbreviation}
                      </span>
                    )}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </SectionContainer>
  );
}
