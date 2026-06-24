"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/constants/navigation";
import { BrandLogo } from "@/components/ui/brand-logo";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

function MobileNavItem({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  if (item.children) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-purple/10 hover:text-purple"
        >
          {item.label}
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              expanded && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>
        {expanded && (
          <div className="ml-4 flex flex-col gap-1 border-l border-line pl-3">
            {item.children.map((child) => (
              <Link
                key={child.label}
                href={child.href ?? "#"}
                onClick={onClose}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-purple/10 hover:text-purple"
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href ?? "#"}
      onClick={onClose}
      className="rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-purple/10 hover:text-purple"
    >
      {item.label}
    </Link>
  );
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] xl:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={onClose}
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          />
          <motion.div
            className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white p-6 shadow-lift"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <BrandLogo size={40} />
                <span className="text-sm font-bold text-ink">
                  CUI Islamabad
                </span>
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink hover:bg-purple/10 hover:text-purple"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <MobileNavItem key={item.label} item={item} onClose={onClose} />
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-5 pt-6">
              <Link
                href="/admissions"
                onClick={onClose}
                className="inline-flex w-full items-center justify-center rounded-pill bg-purple px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue"
              >
                Apply Now
              </Link>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-purple hover:text-purple"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
