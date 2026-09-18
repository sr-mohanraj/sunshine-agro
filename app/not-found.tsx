import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

export default function NotFound() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page max-w-2xl">
        <h1 className="text-3xl font-semibold md:text-4xl">Page not found</h1>
        <p className="mt-4 text-ink-600">
          The page you are looking for does not exist or has moved. You can go to the home page or pick a
          product below.
        </p>
        <ul className="mt-6 space-y-1">
          {PRODUCTS.map((p) => (
            <li key={p.slug}>
              <Link href={`/products/${p.slug}`} className="link inline-block py-1.5">
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="btn btn-primary mt-8">
          Go to the home page
        </Link>
      </div>
    </section>
  );
}
