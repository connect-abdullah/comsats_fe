"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import dynamic from "next/dynamic";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { PremiumMediaCard } from "@/components/ui/premium-media-card";
import { Marquee } from "@/components/ui/marquee";
import { MEDIA_ITEMS } from "@/constants/media";
import type { MediaItem } from "@/types";

const VideoModal = dynamic(
  () => import("./video-modal").then((m) => m.VideoModal),
  { ssr: false },
);

function MediaCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[70] hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-purple/90 text-xs font-semibold uppercase tracking-wider text-white shadow-lift lg:flex"
      style={{ left: springX, top: springY }}
      aria-hidden="true"
    >
      Play
    </motion.div>
  );
}

export function MediaInsights() {
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>();
  const [showCursor, setShowCursor] = useState(false);
  const zoneRef = useRef<HTMLDivElement>(null);

  const handlePlay = (item: MediaItem) => {
    setActiveUrl(item.videoUrl);
    setActiveTitle(item.title);
  };

  useEffect(() => {
    const zone = zoneRef.current;
    if (!zone) return;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;

    const enter = () => setShowCursor(true);
    const leave = () => setShowCursor(false);
    zone.addEventListener("mouseenter", enter);
    zone.addEventListener("mouseleave", leave);
    return () => {
      zone.removeEventListener("mouseenter", enter);
      zone.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section id="media" className="section-pad-lg scroll-mt-28 bg-institutional">
      <div className="container-cui mb-14">
        <SectionEyebrow>Media &amp; Insights</SectionEyebrow>
        <h2 className="text-section-title mt-4 max-w-2xl text-ink">
          Explore Campus Life
        </h2>
        <p className="text-body-lg mt-5 max-w-2xl text-muted">
          Watch highlights, lectures, student events, achievements, and campus
          experiences from COMSATS University Islamabad.
        </p>
      </div>

      <div ref={zoneRef} className="cursor-zone">
        {showCursor && <MediaCursor />}
        <Marquee duration={55} gap="2rem" fade pauseOnHover>
          {MEDIA_ITEMS.map((item) => (
            <PremiumMediaCard
              key={item.title}
              title={item.title}
              thumbnail={item.thumbnail}
              category={item.category}
              onClick={() => handlePlay(item)}
            />
          ))}
        </Marquee>
      </div>

      <VideoModal
        videoUrl={activeUrl}
        title={activeTitle}
        onClose={() => setActiveUrl(null)}
      />
    </section>
  );
}
