import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Marquee } from "@/components/ui/marquee";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TESTIMONIALS } from "@/constants/testimonials";

export function Testimonials() {
  const mid = Math.ceil(TESTIMONIALS.length / 2);
  const rowOne = TESTIMONIALS.slice(0, mid);
  const rowTwo = TESTIMONIALS.slice(mid);

  return (
    <section className="relative scroll-mt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/bg_image.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/88" />
      </div>

      <div className="relative z-10 section-pad-lg">
        <div className="container-cui mb-14">
          <SectionEyebrow tone="light">Student Voices</SectionEyebrow>
          <h2 className="text-section-title mt-4 max-w-xl text-white">
            What Our Students Say
          </h2>
          <p className="text-body-lg mt-5 max-w-2xl text-white/75">
            Hear from the students whose journeys were shaped at COMSATS University
            Islamabad.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <Marquee duration={60} gap="2rem" fade pauseOnHover direction="left">
            {rowOne.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </Marquee>
          <div className="translate-y-2">
            <Marquee duration={70} gap="2rem" fade pauseOnHover direction="right">
              {rowTwo.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
