"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/types";

interface ProcessStepProps {
  step: ProcessStep;
  isLast?: boolean;
}

export function ProcessStepComponent({ step, isLast }: ProcessStepProps) {
  return (
    <motion.div variants={fadeUp} className="relative flex gap-6 pb-10 last:pb-0">
      {!isLast && (
        <div
          className="absolute left-5 top-12 h-[calc(100%-1rem)] w-0.5 bg-linear-to-b from-purple to-blue/30"
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple text-sm font-bold text-white shadow-md shadow-purple/30">
        {step.step}
      </div>
      <div className="pt-1">
        <h4 className="text-xl font-bold text-ink">{step.title}</h4>
        <p className="mt-2 text-base leading-relaxed text-muted">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  className?: string;
}

export function ProcessTimeline({ steps, className }: ProcessTimelineProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {steps.map((step, index) => (
        <ProcessStepComponent
          key={step.step}
          step={step}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}
