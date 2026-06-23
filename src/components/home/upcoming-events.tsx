import { SectionHeader } from "@/components/ui/section-header";
import { ContentCard } from "@/components/ui/content-card";
import { Marquee } from "@/components/ui/marquee";
import { UPCOMING_EVENTS } from "@/constants/events";

export function UpcomingEvents() {
  return (
    <section id="events" className="section-pad scroll-mt-24 bg-surface">
      <div className="container-cui">
        <SectionHeader label="What's On" heading="Upcoming Events" />
      </div>

      <div className="mt-14">
        <Marquee duration={50} gap="1.5rem">
          {UPCOMING_EVENTS.map((event) => (
            <ContentCard
              key={event.title}
              image={event.image}
              title={event.title}
              description={event.description}
              date={event.date}
              className="w-[320px] shrink-0 sm:w-[360px]"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
