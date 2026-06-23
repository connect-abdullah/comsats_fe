import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { Marquee } from "@/components/ui/marquee";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TESTIMONIALS } from "@/constants/testimonials";
import { IMAGES } from "@/constants/images";

export function Testimonials() {
  const mid = Math.ceil(TESTIMONIALS.length / 2);
  const rowOne = TESTIMONIALS.slice(0, mid);
  const rowTwo = TESTIMONIALS.slice(mid);

  return (
    <section className="relative scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.campus.overview}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/[0.85]" />
      </div>

      <div className="relative z-10 section-pad">
        <div className="container-cui">
          <SectionHeader
            label="Testimonials"
            heading="What Our Students Say"
            description="Hear from the students whose journeys were shaped at COMSATS University Islamabad."
            tone="light"
            align="center"
            className="px-0"
          />
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:mt-14 sm:gap-6">
          <Marquee
            duration={55}
            gap="1rem"
            direction="right"
            className="sm:[--marquee-gap:1.5rem]"
          >
            {rowOne.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </Marquee>
          <Marquee
            duration={65}
            gap="1rem"
            direction="left"
            className="sm:[--marquee-gap:1.5rem]"
          >
            {rowTwo.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
