"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SocialButton } from "@/components/ui/social-button";
import { SOCIAL_LINKS } from "@/constants/shared/navigation";
import { IMAGES } from "@/constants/shared/images";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-26 pb-20 lg:pt-32"
    >
      <Image
        src={IMAGES.hero.background}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-purple/55" aria-hidden="true" />
      <div className="absolute inset-0 bg-ink/20" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-linear-to-r from-ink/50 via-purple/25 to-purple/10"
        aria-hidden="true"
      />

      <div className="container-cui relative z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left content — 60% */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-8 lg:col-span-7"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex max-w-full items-center gap-1.5 rounded-pill border border-white/25 bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide whitespace-normal text-white uppercase backdrop-blur-sm sm:gap-2 sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-wider sm:whitespace-nowrap md:gap-2 md:px-3 md:py-2 md:text-[11px] md:tracking-wider"
          >
            <span
              className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-blue-400 sm:h-2 sm:w-2"
              aria-hidden="true"
            />
            Leading University of Pakistan
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white md:text-[3.5rem] lg:text-[4.5rem]"
          >
            Empowering Future <br className="hidden md:block" />
            Leaders Through{" "}
            <span className="font-medium italic text-blue-300">Innovation</span>
            , Research &amp;{" "}
            <span className="font-semibold italic text-purple-200">
              World-Class
            </span>{" "}
            Education.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl font-sans text-lg leading-relaxed text-white/85"
          >
            COMSATS University Islamabad combines elite academic rigor with an
            energetic research community. Step onto Pakistan&apos;s premier
            campus designed to spark discovery and shape global impact.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex w-full flex-wrap items-center gap-4 sm:w-auto"
          >
            <Link href="/admissions" className="w-full sm:w-auto">
              <ShimmerButton
                className="w-full px-7 py-3.5 text-base font-semibold shadow-glow sm:w-auto"
                background="linear-gradient(120deg, #4c227b 0%, #0f5ea6 100%)"
                shimmerColor="#ffffff"
                shimmerDuration="3s"
                borderRadius="999px"
              >
                Apply Now
              </ShimmerButton>
            </Link>
            <SecondaryButton
              href="/academics"
              variant="light"
              className="border-none w-full sm:w-auto"
            >
              Explore Programs
            </SecondaryButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 pt-2"
          >
            {SOCIAL_LINKS.map((social) => (
              <SocialButton
                key={social.label}
                href={social.href}
                label={social.label}
                icon={social.icon}
                variant="glass"
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Right media — 40% */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-section border border-white/20 bg-white/5 shadow-lift lg:aspect-[4/5]">
            <Image
              src={IMAGES.hero.showcase}
              alt="Junaid Zaidi Library at COMSATS University Islamabad"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple/40 via-transparent to-transparent" />

            <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between rounded-card border border-white/20 bg-white/90 p-3 shadow-lift backdrop-blur-md md:right-6 md:bottom-6 md:left-6 md:p-6">
              <div>
                <p className="font-sans text-[10px] font-semibold tracking-wider text-blue uppercase md:text-xs">
                  Latest Update
                </p>
                <h2 className="mt-0.5 font-sans text-xs font-bold text-ink md:mt-1 md:text-sm">
                  Admissions Fall 2026 are Open
                </h2>
              </div>
              <Link
                href="/admissions"
                aria-label="View admissions"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple text-white transition-colors hover:bg-blue md:h-10 md:w-10"
              >
                <ArrowRight
                  className="h-4 w-4 md:h-5 md:w-5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#media"
        aria-label="Explore campus"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/80 hover:text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-sans text-[11px] font-semibold tracking-widest uppercase">
          Explore Campus
        </span>
        <ChevronDown className="h-5 w-5" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
