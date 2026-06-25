"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Play } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Marquee } from "@/components/ui/marquee";
import { MEDIA_ITEMS } from "@/constants/home/media";
import { getImageLoadingProps } from "@/lib/image-loading";
import type { MediaItem } from "@/types";

const VideoModal = dynamic(
  () => import("./video-modal").then((m) => m.VideoModal),
  { ssr: false },
);

function MediaCard({
  item,
  onPlay,
}: {
  item: MediaItem;
  onPlay: (item: MediaItem) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onPlay(item)}
      aria-label={`Play ${item.title}`}
      className="group relative w-[300px] shrink-0 overflow-hidden rounded-card border border-line bg-white text-left shadow-soft transition-shadow duration-300 hover:shadow-lift sm:w-[360px]"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          sizes="360px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          {...getImageLoadingProps()}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-pill bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
          Video
        </span>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
            <Play
              className="ml-0.5 h-7 w-7 fill-white text-white"
              aria-hidden="true"
            />
          </span>
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
      </div>
    </button>
  );
}

export function MediaInsights() {
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>();

  const handlePlay = (item: MediaItem) => {
    setActiveUrl(item.videoUrl);
    setActiveTitle(item.title);
  };

  return (
    <section id="media" className="section-pad scroll-mt-24">
      <div className="container-cui">
        <SectionHeader
          label="Media & Insights"
          heading="Explore Campus"
          description="Watch highlights, lectures, student events, achievements, and campus experiences from COMSATS University Islamabad."
        />
      </div>

      <div className="mt-14">
        <Marquee duration={45} gap="1.5rem">
          {MEDIA_ITEMS.map((item) => (
            <MediaCard key={item.title} item={item} onPlay={handlePlay} />
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
