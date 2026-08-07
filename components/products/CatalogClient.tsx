"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import clsx from "clsx";
import type { Product } from "@/lib/types";
import { ACTIVE_CATEGORIES, ACTIVE_SPECIES } from "@/lib/products";
import { ProductCard } from "./ProductCard";

type Props = { products: Product[] };

export function CatalogClient({ products }: Props) {
  const [category, setCategory] = useState<string | null>(null);
  const [species, setSpecies] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (!category || p.category === category) &&
          (!species || p.species.includes(species))
      ),
    [products, category, species]
  );

  const active = Boolean(category || species);

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-ink-100 pb-6 dark:border-ink-700">
        <div className="flex items-center justify-between gap-4">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400 dark:text-bone-200/45">
            <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden />
            Filter
          </p>
          {active && (
            <button
              type="button"
              onClick={() => {
                setCategory(null);
                setSpecies(null);
              }}
              className="focus-ring inline-flex items-center gap-1.5 rounded-full px-2 text-[12px] font-medium text-sun-600 hover:text-sun-700 dark:text-sun-300"
            >
              <X className="h-3.5 w-3.5" aria-hidden />
              Clear
            </button>
          )}
        </div>

        <FilterRow
          label="Category"
          options={ACTIVE_CATEGORIES.map((c) => ({ id: c.id, label: c.label }))}
          value={category}
          onChange={setCategory}
        />
        <FilterRow
          label="Species"
          options={ACTIVE_SPECIES.map((s) => ({ id: s.id, label: s.label }))}
          value={species}
          onChange={setSpecies}
        />
      </div>

      <p
        className="mt-6 text-[13px] text-ink-400 dark:text-bone-200/50"
        role="status"
        aria-live="polite"
      >
        Showing {filtered.length} of {products.length} products
      </p>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-ink-200 p-12 text-center dark:border-ink-600">
          <p className="font-display text-lg font-bold text-ink-900 dark:text-bone-100">
            No product matches that combination.
          </p>
          <p className="mt-2 text-sm text-ink-500 dark:text-bone-200/65">
            Clear a filter, or ask us about a custom blend for this species.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {filtered.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 2} className="h-full" />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: string; label: string }[];
  value: string | null;
  onChange: (v: string | null) => void;
}) {
  return (
    // fieldset defaults to min-width:min-content, which stops the chip row from
    // ever shrinking - without min-w-0 the whole page gains a horizontal scroll
    // on narrow screens instead of the chips scrolling inside their own track.
    <fieldset className="min-w-0">
      <legend className="sr-only">{label}</legend>
      <div className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        <Chip active={!value} onClick={() => onChange(null)}>
          All {label.toLowerCase()}
        </Chip>
        {options.map((o) => (
          <Chip
            key={o.id}
            active={value === o.id}
            onClick={() => onChange(value === o.id ? null : o.id)}
          >
            {o.label}
          </Chip>
        ))}
      </div>
    </fieldset>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={clsx(
        // No min-h-0 override here: these are the only real controls on the page
        // that would otherwise fall under the 44px touch target the rest of the
        // site keeps.
        "focus-ring shrink-0 whitespace-nowrap rounded-full border px-4 text-[12.5px] font-medium transition-colors",
        active
          ? "border-transparent bg-ink-900 text-bone-100 dark:bg-bone-100 dark:text-ink-900"
          : "border-ink-200 text-ink-500 hover:border-sun-400 hover:text-sun-600 dark:border-ink-600 dark:text-bone-200/70 dark:hover:border-sun-400 dark:hover:text-sun-300"
      )}
    >
      {children}
    </button>
  );
}
