"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { EditorialCard } from "@/components/ui/editorial-card";
import { Marquee } from "@/components/ui/marquee";
import { UPCOMING_EVENTS } from "@/constants/events";
import { fadeUp, viewportOnce } from "@/lib/animations";

export function UpcomingEvents() {
  return (
    <section id="events" className="section-pad scroll-mt-24 bg-surface">
      <div className="container-cui">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <SectionHeader label="Calendar" heading="Upcoming Events" />
          </motion.div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-xl text-lg leading-relaxed text-muted"
          >
            Register and join active forums, tech bootcamps, architectural
            shows, and community dialogue platforms across the campus.
          </motion.p>
        </div>
      </div>

      <div className="mt-2">
        <Marquee duration={50} gap="1.5rem">
          {UPCOMING_EVENTS.map((event) => (
            <EditorialCard
              key={event.title}
              variant="event"
              image={event.image}
              title={event.title}
              description={event.description}
              date={event.date}
              category={event.category}
              categoryColor={event.categoryColor}
              className="w-[320px] shrink-0 md:w-[420px]"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
