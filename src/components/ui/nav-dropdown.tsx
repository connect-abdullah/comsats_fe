"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavDropdownProps {
  label: string;
  items: NavDropdownItem[];
  scrolled?: boolean;
}

export function NavDropdown({ label, items, scrolled = false }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <li ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors",
          scrolled
            ? "text-ink/85 hover:bg-purple/8 hover:text-purple"
            : "text-ink/90 hover:bg-black/5 hover:text-purple",
          open && "bg-purple/8 text-purple",
        )}
      >
        {label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 mt-2 min-w-[280px] overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-dock-scrolled"
        >
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 transition-colors hover:bg-surface"
            >
              <span className="block text-sm font-semibold text-ink">{item.label}</span>
              {item.description && (
                <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                  {item.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
