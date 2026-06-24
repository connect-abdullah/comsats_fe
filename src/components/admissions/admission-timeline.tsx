"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { TimelineEvent } from "@/types";

interface AdmissionTimelineProps {
  events: TimelineEvent[];
  className?: string;
}

function parseTimelineDate(date: string) {
  const [day, ...monthParts] = date.split(" ");
  return { day, month: monthParts.join(" ") };
}

function TimelineItem({
  event,
  variant,
}: {
  event: TimelineEvent;
  variant: "mobile" | "desktop";
}) {
  const { day, month } = parseTimelineDate(event.date);
  const isMobile = variant === "mobile";

  return (
    <div
      className={cn(
        "flex flex-col items-center text-center",
        isMobile && "w-[7.5rem] shrink-0 snap-center",
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-center",
          isMobile ? "h-20 w-full" : "h-24 w-full",
        )}
      >
        <div
          className={cn(
            "relative z-10 flex flex-col items-center justify-center rounded-full border-2 border-purple bg-white shadow-soft",
            isMobile ? "h-16 w-16" : "h-20 w-20",
          )}
        >
          <span
            className={cn(
              "font-bold leading-none text-purple",
              isMobile ? "text-lg" : "text-xl",
            )}
          >
            {day}
          </span>
          <span className="mt-0.5 max-w-[4rem] text-center text-[9px] font-semibold uppercase leading-tight tracking-wide text-purple/80 sm:text-[10px]">
            {month}
          </span>
        </div>
      </div>

      <h4
        className={cn(
          "mt-3 font-bold leading-snug text-ink",
          isMobile
            ? "max-w-[7rem] text-sm"
            : "mt-4 min-h-14 max-w-36 text-base sm:text-lg",
        )}
      >
        {event.title}
      </h4>
      {event.description && (
        <p className="mt-1 text-sm text-muted">{event.description}</p>
      )}
    </div>
  );
}

export function AdmissionTimeline({
  events,
  className,
}: AdmissionTimelineProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn("relative", className)}
    >
      {/* Mobile: horizontal scroll */}
      <div className="-mx-6 flex gap-6 overflow-x-auto px-6 pb-2 snap-x snap-mandatory lg:hidden">
        {events.map((event) => (
          <motion.div key={`mobile-${event.title}`} variants={fadeUp}>
            <TimelineItem event={event} variant="mobile" />
          </motion.div>
        ))}
      </div>

      {/* Desktop: 5-column timeline */}
      <div className="relative hidden lg:block">
        <div
          className="pointer-events-none absolute inset-x-[10%] top-12 h-0.5 bg-linear-to-r from-purple via-blue to-purple"
          aria-hidden="true"
        />
        <div className="grid grid-cols-5 gap-6">
          {events.map((event) => (
            <motion.div key={`desktop-${event.title}`} variants={fadeUp}>
              <TimelineItem event={event} variant="desktop" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
