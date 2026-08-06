"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import { PRODUCTS } from "@/lib/products";
import { CATEGORIES } from "@/lib/taxonomy";

/**
 * The standing product column. It repeats on every /products route so the full
 * range is always one click away — the catalogue never disappears behind a
 * "back" button once you're reading a spec sheet.
 */
export function ProductColumn({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside
      className={clsx("lg:sticky lg:top-28 lg:self-start", className)}
      aria-label="Product range"
    >
      <div className="card overflow-hidden">
        <div className="border-b border-ink-100 bg-ink-900 px-5 py-4 dark:border-ink-700">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-sun-300">
            Product range
          </p>
          <p className="mt-1 font-display text-base font-bold text-bone-100">
            {PRODUCTS.length} lines · {CATEGORIES.length} categories
          </p>
        </div>

        <nav className="divide-y divide-ink-100 dark:divide-ink-700">
          {CATEGORIES.map((cat) => {
            const items = PRODUCTS.filter((p) => p.category === cat.id);
            if (!items.length) return null;

            return (
              <div key={cat.id} className="px-4 py-4">
                <p className="px-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400 dark:text-bone-200/40">
                  {cat.label}
                </p>
                <ul className="mt-2 space-y-1">
                  {items.map((p) => {
                    const href = `/products/${p.slug}`;
                    const active = pathname === href;
                    return (
                      <li key={p.slug}>
                        <Link
                          href={href}
                          aria-current={active ? "page" : undefined}
                          className={clsx(
                            "focus-ring group flex items-center gap-3 rounded-xl p-2 transition-colors",
                            active
                              ? "bg-sun-50 dark:bg-sun-900/25"
                              : "hover:bg-ink-50 dark:hover:bg-white/5"
                          )}
                        >
                          <span
                            className={clsx(
                              "relative h-11 w-11 shrink-0 overflow-hidden rounded-lg ring-1",
                              active
                                ? "ring-sun-400"
                                : "ring-ink-100 dark:ring-ink-600"
                            )}
                          >
                            <Image
                              src={p.image}
                              alt=""
                              fill
                              sizes="44px"
                              className="object-cover"
                            />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span
                              className={clsx(
                                "block truncate text-sm font-semibold",
                                active
                                  ? "text-sun-700 dark:text-sun-300"
                                  : "text-ink-800 dark:text-bone-100"
                              )}
                            >
                              {p.name}
                            </span>
                            <span className="block truncate text-[11.5px] text-ink-400 dark:text-bone-200/50">
                              {p.subtitle}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </nav>

        <div className="border-t border-ink-100 p-4 dark:border-ink-700">
          <Link
            href="/contact?intent=enquiry"
            className="focus-ring flex items-center justify-between rounded-xl bg-sun-gradient px-4 py-3 text-sm font-semibold text-ink-900 transition-[filter] hover:brightness-105"
          >
            Request pricing & samples
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </aside>
  );
}
