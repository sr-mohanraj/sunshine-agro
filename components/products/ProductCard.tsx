import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="focus-ring group flex h-full flex-col overflow-hidden rounded-md border border-ink-100 bg-white hover:border-ink-300"
    >
      <span className="relative block aspect-[4/3] bg-bone-200">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 92vw"
          className="object-cover"
        />
      </span>
      <span className="flex flex-1 flex-col p-4">
        <span className="text-xs text-ink-400">{product.type}</span>
        <span className="mt-1 font-display text-lg font-semibold text-ink-900 group-hover:text-sun-700">
          {product.name}
          {product.trademark && <sup className="ml-0.5 text-[10px] font-normal text-ink-400">TM</sup>}
        </span>
        <span className="text-sm text-ink-400">{product.subtitle}</span>
        <span className="mt-2 flex-1 text-sm text-ink-600">{product.summary}</span>
        <span className="mt-3 text-sm font-semibold text-sun-700">View details</span>
      </span>
    </Link>
  );
}
