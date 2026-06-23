"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { CONTACT_CARDS, MAPS_EMBED_SRC } from "@/constants/contact";
import { fadeUp, fadeIn, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Contact() {
  const primaryCard = CONTACT_CARDS.find((c) => c.primary) ?? CONTACT_CARDS[3];
  const secondaryCards = CONTACT_CARDS.filter((c) => c !== primaryCard);

  return (
    <section id="contact" className="section-pad scroll-mt-28 bg-white">
      <div className="container-cui">
        <div className="mb-14 max-w-2xl">
          <SectionEyebrow>Get in Touch</SectionEyebrow>
          <h2 className="text-section-title mt-4 text-ink">Campus Contact Hub</h2>
          <p className="text-body-lg mt-5 text-muted">
            Reach our admissions team, visit our Islamabad campus, or connect with
            university services.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Map with photo header */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="overflow-hidden rounded-section border border-line shadow-feature"
          >
            <div className="relative h-32 overflow-hidden">
              <Image
                src="/bg_image.jpg"
                alt="COMSATS University Islamabad campus"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-purple/60 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-end p-6">
                <p className="text-lg font-semibold text-white">Park Road, Islamabad</p>
              </div>
            </div>
            <iframe
              src={MAPS_EMBED_SRC}
              title="COMSATS University Islamabad location map"
              className="h-[320px] w-full lg:h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          {/* Contact hub */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-5"
          >
            {/* Primary admissions card */}
            <motion.div variants={fadeUp}>
              <div className="rounded-card border-2 border-purple/20 bg-surface p-8 shadow-achievement">
                <p className="text-eyebrow text-purple">Admissions Office</p>
                <p className="mt-3 text-2xl font-bold text-ink">
                  Start Your Application
                </p>
                <p className="mt-2 text-muted">
                  Contact our admissions team for program guidance, eligibility, and
                  application support.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="mailto:admissions@comsats.edu.pk">
                    Email Admissions
                  </PrimaryButton>
                  <SecondaryButton href="tel:+9251924700">
                    +92 51 9247000-3
                  </SecondaryButton>
                </div>
              </div>
            </motion.div>

            {/* Secondary cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {secondaryCards.map((card) => {
                const Icon = card.icon;
                const inner = (
                  <>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple/10 text-purple">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue">
                        {card.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink">
                        {card.value}
                      </p>
                    </div>
                  </>
                );
                return (
                  <motion.div key={card.label} variants={fadeUp}>
                    {card.href ? (
                      <a
                        href={card.href}
                        target={card.href.startsWith("http") ? "_blank" : undefined}
                        rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex h-full flex-col gap-3 rounded-card border border-line bg-white p-5 shadow-card transition-shadow hover:shadow-lift"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex h-full flex-col gap-3 rounded-card border border-line bg-white p-5 shadow-card">
                        {inner}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Quick actions */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 border-t border-line pt-6"
            >
              <Link
                href="#admissions"
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple hover:text-blue"
              >
                Apply Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="https://maps.google.com/?q=COMSATS+University+Islamabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple hover:text-blue"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" /> Get Directions
              </Link>
              <Link
                href="mailto:admissions@comsats.edu.pk"
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple hover:text-blue"
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> Email Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
