"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CONTACT_CARDS, MAPS_EMBED_SRC } from "@/constants/home/contact";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { cn } from "@/lib/utils";

const accentStyles = {
  purple: "bg-purple/5 text-purple",
  blue: "bg-blue/5 text-blue",
  emerald: "bg-emerald-500/5 text-emerald-600",
  amber: "bg-amber-500/5 text-amber-600",
} as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 overflow-hidden bg-cream section-pad"
    >
      <div className="container-cui">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="order-1 space-y-4 lg:col-span-6 lg:col-start-7 lg:row-start-1"
          >
            <span className="text-sm font-semibold tracking-wider text-purple uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Contact Us
            </h2>
            <p className="leading-relaxed text-muted">
              Our specialized campus administrators are ready to respond to
              admissions inquiries, organizational planning, or visitor
              credentials.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="order-2 grid grid-cols-2 items-stretch gap-3 sm:gap-6 lg:col-span-6 lg:col-start-7 lg:row-start-2"
          >
            {CONTACT_CARDS.map((card) => {
              const Icon = card.icon;
              const cardClassName =
                "flex h-full min-h-[168px] min-w-0 flex-col overflow-hidden rounded-card border border-line/80 bg-white p-3 transition-shadow sm:min-h-[188px] sm:p-5";
              const content = (
                <>
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10",
                      accentStyles[card.accent],
                    )}
                  >
                    <Icon
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-2 line-clamp-2 min-h-[2.25rem] text-xs font-bold leading-snug text-ink sm:mt-3 sm:min-h-[2.75rem] sm:text-base">
                    {card.title}
                  </h3>
                  <p className="mt-1 line-clamp-3 min-h-[2.75rem] break-words text-[11px] leading-snug text-muted sm:mt-2 sm:min-h-[3rem] sm:text-xs">
                    {card.value}
                  </p>
                  <p className="mt-auto line-clamp-2 min-h-[1.75rem] pt-1 text-[10px] leading-snug text-muted">
                    {card.meta ? (
                      card.meta.includes("24 Hours") ? (
                        <>
                          Response SLA:{" "}
                          <span className="font-semibold text-purple">
                            24 Hours
                          </span>
                        </>
                      ) : (
                        card.meta
                      )
                    ) : (
                      <span className="invisible" aria-hidden="true">
                        &nbsp;
                      </span>
                    )}
                  </p>
                </>
              );

              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  className="min-w-0"
                >
                  {card.href ? (
                    <Link
                      href={card.href}
                      target={
                        card.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        card.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={cn(cardClassName, "hover:shadow-md")}
                    >
                      {content}
                    </Link>
                  ) : (
                    <div className={cardClassName}>{content}</div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative order-3 h-[320px] overflow-hidden rounded-section border border-line shadow-xl sm:h-[450px] lg:col-span-6 lg:row-span-2 lg:row-start-1 lg:h-auto lg:min-h-[600px]"
          >
            <iframe
              src={MAPS_EMBED_SRC}
              title="COMSATS University Islamabad location map"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
