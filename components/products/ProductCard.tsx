import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import type { Product } from "@/lib/types";
import { categoryShort, speciesLabel } from "@/lib/taxonomy";

export function ProductCard({
  product,
  priority = false,
  className,
}: {
  product: Product;
  priority?: boolean;
  className?: string;
}) {
  return (
    <article
      className={clsx(
        "card hover-lift group relative flex flex-col overflow-hidden transition-shadow duration-300",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-50 dark:bg-ink-700">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 92vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink-900/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-sun-300 backdrop-blur-sm">
          {categoryShort(product.category)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-bold tracking-[-0.01em] text-ink-900 dark:text-bone-100">
          {product.name}
          {product.trademark && (
            <sup className="ml-0.5 align-super text-[9px] font-medium text-ink-400">TM</sup>
          )}
        </h3>
        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-sun-600 dark:text-sun-300">
          {product.subtitle}
        </p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500 dark:text-bone-200/70">
          {product.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {product.species.map((s) => (
            <li
              key={s}
              className="rounded-md bg-leaf-50 px-2 py-1 text-[11px] font-medium text-leaf-600 dark:bg-leaf-800/40 dark:text-leaf-200"
            >
              {speciesLabel(s)}
            </li>
          ))}
        </ul>

        <Link
          href={`/products/${product.slug}`}
          className="focus-ring mt-5 inline-flex items-center gap-1.5 self-start rounded text-sm font-semibold text-ink-900 transition-colors hover:text-sun-600 dark:text-bone-100 dark:hover:text-sun-300"
        >
          {/* Stretched link: the whole card is the hit target, but only this
              text is announced, so the accessible name stays meaningful. */}
          <span className="after:absolute after:inset-0 after:content-['']">
            Specifications
          </span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}
