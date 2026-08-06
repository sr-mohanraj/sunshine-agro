import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/products";

export default function NotFound() {
  return (
    <section className="grain relative overflow-hidden bg-ink-900 py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-sun-radial" aria-hidden />
      <div className="container-page relative max-w-3xl">
        <p className="eyebrow text-sun-300">Error 404</p>
        <h1 className="mt-3 font-display text-[clamp(2rem,5.4vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-bone-100">
          That page has been taken off the line.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-bone-200/70">
          The address you followed does not match anything on this site. The product
          range is below, or head back to the homepage.
        </p>

        <ul className="mt-8 grid gap-2 sm:grid-cols-2">
          {PRODUCTS.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/products/${p.slug}`}
                className="focus-ring flex items-center justify-between gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm text-bone-200/80 transition-colors hover:border-sun-400 hover:text-sun-300"
              >
                <span>
                  {p.name}
                  <span className="ml-1.5 text-bone-200/40">— {p.subtitle}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-sun-gradient px-6 py-3 text-sm font-semibold text-ink-900 transition-[filter] hover:brightness-105"
        >
          Back to the homepage
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
