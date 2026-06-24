"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildFaqShareUrl, copyToClipboard } from "@/lib/faq-utils";
import type { FaqItem, FaqTabId } from "@/types";

interface FAQAccordionProps {
  items: FaqItem[];
  openId?: string | null;
  openIds?: string[];
  onOpenChange?: (id: string | null) => void;
  allowMultiple?: boolean;
  tab?: FaqTabId;
  basePath?: string;
  showShareLink?: boolean;
  className?: string;
}

export function FAQAccordion({
  items,
  openId: controlledOpenId,
  openIds = [],
  onOpenChange,
  allowMultiple = false,
  tab = "general",
  basePath = "/admissions/faq",
  showShareLink = true,
  className,
}: FAQAccordionProps) {
  const [internalOpenId, setInternalOpenId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const openId = controlledOpenId !== undefined ? controlledOpenId : internalOpenId;
  const useMultiple = allowMultiple || openIds.length > 0;

  const handleToggle = (id: string) => {
    const next = openId === id ? null : id;
    if (onOpenChange) onOpenChange(next);
    else setInternalOpenId(next);
  };

  const isItemOpen = (id: string) => {
    if (useMultiple) return openIds.includes(id);
    return openId === id;
  };

  const handleCopyLink = async (id: string) => {
    const url = buildFaqShareUrl(basePath, tab, id);
    const ok = await copyToClipboard(url);
    if (ok) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  if (items.length === 0) return null;

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = isItemOpen(item.id);

        return (
          <div
            key={item.id}
            id={item.id}
            className={cn(
              "scroll-mt-36 overflow-hidden rounded-card border transition-all duration-300",
              isOpen
                ? "border-purple/30 bg-white shadow-soft"
                : "border-line/60 bg-white hover:border-purple/20",
            )}
          >
            <button
              type="button"
              onClick={() => handleToggle(item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
            >
              <span
                className={cn(
                  "text-base font-semibold leading-snug sm:text-lg",
                  isOpen ? "text-purple" : "text-ink",
                )}
              >
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "mt-1 h-5 w-5 shrink-0 text-purple transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-line/40 px-6 pb-5 pt-4">
                    <p className="whitespace-pre-line text-base leading-relaxed text-muted">
                      {item.answer}
                    </p>
                    {showShareLink && (
                      <button
                        type="button"
                        onClick={() => handleCopyLink(item.id)}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-purple transition-colors hover:text-blue"
                      >
                        <Link2 className="h-4 w-4" aria-hidden="true" />
                        {copiedId === item.id ? "Link copied!" : "Copy link"}
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
