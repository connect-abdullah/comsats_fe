"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { getYouTubeId } from "@/lib/utils";

interface VideoModalProps {
  videoUrl: string | null;
  title?: string;
  onClose: () => void;
}

export function VideoModal({ videoUrl, title, onClose }: VideoModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (videoUrl) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [videoUrl, onClose]);

  const id = videoUrl ? getYouTubeId(videoUrl) : null;

  return (
    <AnimatePresence>
      {videoUrl && id && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={title ?? "Video player"}
        >
          <button
            type="button"
            aria-label="Close video"
            onClick={onClose}
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
          />
          <motion.div
            className="relative z-10 w-full max-w-4xl"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={onClose}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-image shadow-lift">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                title={title ?? "YouTube video player"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
