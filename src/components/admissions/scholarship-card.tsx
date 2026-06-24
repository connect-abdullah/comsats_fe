"use client";

import { cn } from "@/lib/utils";
import type { ScholarshipCardData } from "@/types";

interface ScholarshipCardProps {
  scholarship: ScholarshipCardData;
  className?: string;
}

export function ScholarshipCard({
  scholarship,
  className,
}: ScholarshipCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-card border border-line/60 bg-white p-8 shadow-soft transition-all duration-300 hover:border-purple/30 hover:shadow-lift sm:p-10",
        className,
      )}
    >
      <h3 className="text-xl font-bold text-ink sm:text-2xl">
        {scholarship.title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-muted">
        {scholarship.description}
      </p>

      {scholarship.duration && (
        <p className="mt-4 text-sm font-semibold text-purple">
          Duration: {scholarship.duration}
        </p>
      )}

      {scholarship.eligibility && scholarship.eligibility.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue">
            Conditions
          </p>
          <ul className="mt-3 space-y-2">
            {scholarship.eligibility.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-relaxed text-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {scholarship.programs && scholarship.programs.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue">
            Eligible Programs
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {scholarship.programs.map((program) => (
              <span
                key={program}
                className="rounded-pill bg-purple/5 px-3 py-1 text-xs font-semibold text-purple"
              >
                {program}
              </span>
            ))}
          </div>
        </div>
      )}

      {scholarship.tiers && scholarship.tiers.length > 0 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {scholarship.tiers.map((tier) => (
            <div
              key={tier.label}
              className="rounded-xl border border-purple/15 bg-purple/5 p-5"
            >
              <p className="text-sm font-bold text-purple">{tier.label}</p>
              <p className="mt-2 text-lg font-bold text-ink">{tier.benefit}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {tier.criteria}
              </p>
            </div>
          ))}
        </div>
      )}

      {scholarship.requirements && scholarship.requirements.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue">
            Requirements
          </p>
          <ul className="mt-3 space-y-2">
            {scholarship.requirements.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-relaxed text-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {scholarship.benefits && scholarship.benefits.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue">
            Benefits
          </p>
          <ul className="mt-3 space-y-2">
            {scholarship.benefits.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-relaxed text-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
