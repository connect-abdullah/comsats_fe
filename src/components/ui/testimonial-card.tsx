import Image from "next/image";
import { Quote } from "lucide-react";
import { getInitials } from "@/lib/utils";
import { getImageLoadingProps } from "@/lib/image-loading";
import type { Testimonial } from "@/types";

export function TestimonialCard({ name, program, quote, image }: Testimonial) {
  return (
    <figure className="flex h-full w-[260px] shrink-0 flex-col gap-4 rounded-card border border-white/10 bg-white/10 p-5 backdrop-blur-xl sm:w-[300px] sm:p-6 md:w-[360px]">
      <Quote className="h-7 w-7 text-blue-400" aria-hidden="true" />
      <blockquote className="flex-1 text-sm leading-relaxed text-white/90">
        “{quote}”
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-white/15 pt-4">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
            {...getImageLoadingProps()}
          />
        ) : (
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-purple text-sm font-bold text-white">
            {getInitials(name)}
          </span>
        )}
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-white/70">{program}</p>
        </div>
      </figcaption>
    </figure>
  );
}
