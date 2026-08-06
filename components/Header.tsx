"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import clsx from "clsx";
import { NAV_LINKS } from "@/lib/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { TopBar } from "./TopBar";
import { Button } from "./ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    // Hysteresis: collapse past 32px, only re-expand below 8px. A single
    // threshold retriggers the transition when scroll hovers on the boundary,
    // which reads as the bar stuttering.
    const evaluate = () => {
      setScrolled((prev) => (prev ? window.scrollY > 8 : window.scrollY > 32));
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(evaluate);
    };
    evaluate();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  // The homepage hero is a full-bleed dark plate the nav can float over. Every
  // other route starts with light content, so the glass bar needs its own dark
  // fill there or the white nav type would be invisible.
  const transparentOverHero = isHome && !scrolled;

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {/* The homepage bar is `fixed` for the whole scroll, not just while it is
          transparent: switching fixed -> sticky mid-scroll pulls the header back
          into flow and lurches the page down by its own height. Inner routes are
          sticky throughout, so they never make that switch either. */}
      <header className={clsx(isHome ? "fixed" : "sticky", "top-0 z-30 w-full")}>
        {!isHome && (
          <div
            className={clsx(
              "overflow-hidden bg-ink-900 transition-[max-height,opacity] duration-300 ease-in-out",
              scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
            )}
          >
            <TopBar />
          </div>
        )}
        <div
          className={clsx(
            "transition-[padding] duration-300 ease-in-out",
            scrolled ? "px-2 py-2 sm:px-4 sm:py-3" : "px-3 py-3 sm:px-6 sm:py-4"
          )}
        >
          <div
            className={clsx(
              "mx-auto w-full max-w-8xl rounded-2xl border transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-in-out",
              transparentOverHero
                ? "border-white/10 bg-white/[0.06] backdrop-blur-md"
                : "border-white/10 bg-ink-900/90 shadow-card-hover backdrop-blur-xl"
            )}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-2 sm:px-6">
              <Logo inverted />

              <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
                {NAV_LINKS.map((link) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={clsx(
                        "focus-ring relative whitespace-nowrap rounded-full px-3.5 py-2.5 font-mono text-[12.5px] font-medium uppercase tracking-[0.08em] transition-colors duration-150",
                        active
                          ? "bg-white/10 text-sun-300"
                          : "text-white/80 hover:text-white"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <ThemeToggle inverted className="hidden sm:flex" />
                <Button href="/contact?intent=enquiry" size="sm" className="hidden lg:inline-flex">
                  Request a Quote
                </Button>
                <button
                  type="button"
                  onClick={() => setMenuOpen(true)}
                  className="focus-ring flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/15 lg:hidden"
                  aria-label="Open menu"
                  aria-haspopup="dialog"
                  aria-expanded={menuOpen}
                >
                  <Menu className="h-6 w-6" aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
