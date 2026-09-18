import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import company from "@/data/company.json";
import { PRODUCTS } from "@/lib/products";
import { telHref } from "@/lib/site";

/** The standing product column: the full range, on /products and every product page. */
export function ProductSidebar({
  activeSlug,
  className,
}: {
  activeSlug?: string;
  className?: string;
}) {
  const phone = company.contact.mobiles[0];
  return (
    <aside aria-label="Product list" className={clsx("lg:sticky lg:top-24 lg:self-start", className)}>
      <h2 className="text-lg font-semibold">Our products</h2>
      <ul className="mt-3 divide-y divide-ink-100 rounded-md border border-ink-100 bg-white">
        {PRODUCTS.map((p) => {
          const active = p.slug === activeSlug;
          return (
            <li key={p.slug}>
              <Link
                href={`/products/${p.slug}`}
                aria-current={active ? "page" : undefined}
                className={clsx(
                  "focus-ring flex items-center gap-3 p-3 hover:bg-bone-200",
                  active && "bg-bone-200"
                )}
              >
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded bg-bone-200">
                  <Image src={p.image} alt="" fill sizes="48px" className="object-cover" />
                </span>
                <span className="min-w-0">
                  <span className={clsx("block text-sm text-ink-900", active ? "font-semibold" : "font-medium")}>
                    {p.name}
                  </span>
                  <span className="block truncate text-xs text-ink-400">{p.type}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-sm text-ink-500">
        For prices and orders call{" "}
        <a href={telHref(phone)} className="link">
          {phone}
        </a>
        .
      </p>
    </aside>
  );
}
