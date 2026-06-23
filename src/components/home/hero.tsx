"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CREDIBILITY_MARKERS } from "@/constants/navigation";
import { HERO_VIDEO_URL } from "@/constants/media";
import { fadeUp, staggerContainer } from "@/lib/animations";

const VideoModal = dynamic(
  () => import("./video-modal").then((m) => m.VideoModal),
  { ssr: false },
);

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{ minHeight: "max(100vh, 900px)" }}
    >
      {/* Full-bleed campus photography */}
      <div className="absolute inset-0">
        <Image
          src="/bg_image.jpg"
          alt="COMSATS University Islamabad campus aerial view"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 scrim-photo-bottom" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-transparent" />
      </div>

      <div className="container-cui relative z-10 flex min-h-[inherit] flex-col justify-center pt-28 pb-24 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Editorial left column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-8 lg:col-span-6 xl:col-span-5"
          >
            <motion.div variants={fadeUp}>
              <SectionEyebrow tone="light">Islamabad Campus</SectionEyebrow>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-display max-w-2xl text-white"
            >
              Empowering Future Leaders Through Innovation, Research &amp; World-Class
              Education
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-body-lg max-w-xl text-white/85"
            >
              COMSATS University Islamabad is a leading institution where academic
              excellence, groundbreaking research, and innovation converge to shape
              Pakistan&apos;s future.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <PrimaryButton href="#admissions" tone="onPhoto">
                Apply Now
              </PrimaryButton>
              <SecondaryButton href="#academics" tone="onPhoto">
                Explore Programs
              </SecondaryButton>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/20 pt-6"
            >
              {CREDIBILITY_MARKERS.map((marker) => (
                <span
                  key={marker}
                  className="text-sm font-medium text-white/70"
                >
                  {marker}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Dominant media panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-7"
          >
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Play campus showcase video"
              className="group relative block w-full overflow-hidden rounded-section shadow-feature"
            >
              <div className="relative aspect-[16/10] w-full lg:aspect-[16/9]">
                <Image
                  src="/media-insights/student_week_1.png"
                  alt="Campus life at COMSATS University Islamabad"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-24 w-24 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-1 h-10 w-10 fill-white text-white" aria-hidden="true" />
                  </span>
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-eyebrow mb-2 text-white/70">Campus Showcase</p>
                  <p className="text-xl font-semibold text-white sm:text-2xl">
                    Experience Life at COMSATS
                  </p>
                </div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#media"
        aria-label="Explore more campus"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 hover:text-white"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-eyebrow text-white/60">Explore Campus</span>
        <ArrowDown className="h-5 w-5" aria-hidden="true" />
      </motion.a>

      <VideoModal
        videoUrl={videoOpen ? HERO_VIDEO_URL : null}
        title="Campus Showcase"
        onClose={() => setVideoOpen(false)}
      />
    </section>
  );
}
