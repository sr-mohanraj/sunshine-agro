"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, X } from "lucide-react";
import clsx from "clsx";
import { NAV_LINKS } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import company from "@/data/company.json";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on route change - the link click itself doesn't unmount the panel.
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 h-full w-full bg-ink-900/70 backdrop-blur-sm"
          />
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col overflow-y-auto bg-ink-900 outline-none"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <Logo inverted />
              <div className="flex items-center gap-1">
                <ThemeToggle inverted />
                <button
                  type="button"
                  onClick={onClose}
                  className="focus-ring flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/15"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>
            </div>

            <nav className="flex flex-col px-3 py-4" aria-label="Mobile">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={clsx(
                      "focus-ring rounded-xl px-4 py-3.5 font-display text-lg font-semibold transition-colors",
                      active ? "bg-white/10 text-sun-300" : "text-bone-100 hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-white/10 px-6 py-5">
              <p className="eyebrow mb-3 text-sun-300">Product range</p>
              <ul className="space-y-1">
                {PRODUCTS.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/products/${p.slug}`}
                      onClick={onClose}
                      className="focus-ring flex items-center justify-between rounded-lg py-2 text-sm text-bone-200/80 transition-colors hover:text-sun-300"
                    >
                      {p.name}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto space-y-3 border-t border-white/10 px-6 py-6 text-sm">
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                className="focus-ring flex items-center gap-3 rounded-lg text-bone-200/85 hover:text-sun-300"
              >
                <Phone className="h-4 w-4 text-sun-400" aria-hidden />
                {company.contact.phone}
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="focus-ring flex items-center gap-3 break-all rounded-lg text-bone-200/85 hover:text-sun-300"
              >
                <Mail className="h-4 w-4 text-sun-400" aria-hidden />
                {company.contact.email}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
