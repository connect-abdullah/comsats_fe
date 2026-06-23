"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu } from "lucide-react";
import {
  PRIMARY_NAV,
  ABOUT_DROPDOWN,
} from "@/constants/navigation";
import { NavDropdown } from "@/components/ui/nav-dropdown";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <nav
          aria-label="Primary"
          className={cn(
            "flex w-full max-w-[1280px] items-center justify-between border transition-all duration-500 ease-out",
            scrolled
              ? "rounded-dock border-line/80 bg-white/95 px-4 py-2 shadow-dock-scrolled backdrop-blur-xl lg:px-6"
              : "rounded-dock border-white/40 bg-white/80 px-4 py-3 shadow-dock backdrop-blur-xl lg:px-6",
          )}
        >
          <Link
            href="#home"
            className="flex items-center gap-3 shrink-0"
            aria-label="COMSATS University Islamabad home"
          >
            <Image
              src="/COMSATS-logo.png"
              alt="COMSATS University Islamabad"
              width={48}
              height={48}
              className={cn(
                "rounded-full transition-all duration-500",
                scrolled ? "h-10 w-10" : "h-12 w-12",
              )}
              priority
            />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-bold tracking-tight text-ink lg:text-[15px]">
                COMSATS University Islamabad
              </span>
              <span className="text-[11px] font-medium text-muted">
                Islamabad Campus
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {PRIMARY_NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-ink/85 transition-colors hover:bg-purple/8 hover:text-purple"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <NavDropdown label="About" items={ABOUT_DROPDOWN} scrolled={scrolled} />
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple/8 text-purple transition-colors hover:bg-purple/15"
            >
              <Search className="h-[18px] w-[18px]" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple/8 text-purple transition-colors hover:bg-purple/15 lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
