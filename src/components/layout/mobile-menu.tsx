"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { MOBILE_NAV_SECTIONS } from "@/constants/navigation";
import { PrimaryButton } from "@/components/ui/primary-button";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={onClose}
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
          />
          <motion.div
            className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-lift"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
          >
            <div className="flex items-center justify-between border-b border-line p-5">
              <span className="flex items-center gap-2.5">
                <Image
                  src="/COMSATS-logo.png"
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                  aria-hidden="true"
                />
                <span className="text-sm font-bold text-ink">CUI Islamabad</span>
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-ink"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto p-5">
              {MOBILE_NAV_SECTIONS[0].items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-xl px-4 py-3.5 text-base font-medium text-ink hover:bg-surface"
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => setAboutOpen((v) => !v)}
                className="mt-1 flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-ink hover:bg-surface"
              >
                About
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", aboutOpen && "rotate-180")}
                  aria-hidden="true"
                />
              </button>
              {aboutOpen && (
                <div className="ml-4 border-l border-line pl-4">
                  {MOBILE_NAV_SECTIONS[1].items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      className="block rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-surface hover:text-purple"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </nav>

            <div className="border-t border-line p-5">
              <PrimaryButton href="#admissions" className="w-full">
                Apply Now
              </PrimaryButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
