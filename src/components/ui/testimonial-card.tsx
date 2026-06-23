import Image from "next/image";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

export function TestimonialCard({ name, program, quote, image }: Testimonial) {
  return (
    <figure
      className={cn(
        "flex h-full w-[340px] shrink-0 flex-col overflow-hidden rounded-card border border-white/10 bg-white/8 shadow-feature backdrop-blur-md sm:w-[400px]",
      )}
    >
      {image && (
        <div className="relative h-32 w-full overflow-hidden">
          <Image
            src={image}
            alt=""
            fill
            sizes="400px"
            className="object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <Quote className="h-6 w-6 text-blue-400" aria-hidden="true" />
        <blockquote className="flex-1 text-base leading-relaxed text-white/90">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <figcaption className="flex items-center gap-3 border-t border-white/15 pt-4">
          {image && (
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20">
              <Image src={image} alt={name} fill sizes="44px" className="object-cover" />
            </div>
          )}
          <div>
            <p className="text-sm font-semibold text-white">{name}</p>
            <p className="text-xs text-white/65">{program}</p>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
