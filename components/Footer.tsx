import Link from "next/link";
import company from "@/data/company.json";
import { NAV_LINKS, telHref } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import { Logo } from "./Logo";

export function Footer() {
  const { addresses, contact } = company;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-sm text-ink-200">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo dark link={false} />
          <p className="mt-4 max-w-xs">
            Established in {company.founded} in Chennai. Feed supplements for aqua, poultry and
            livestock nutrition, made at our unit in Erode.
          </p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold text-white">Pages</h2>
          <ul className="mt-3 space-y-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="focus-ring inline-block rounded py-1.5 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold text-white">Products</h2>
          <ul className="mt-3 space-y-1">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="focus-ring inline-block rounded py-1.5 hover:text-white">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold text-white">Contact</h2>
          <address className="mt-3 space-y-3 not-italic">
            <p>
              <span className="block text-ink-300">{addresses.office.label}</span>
              {addresses.office.lines.slice(0, 3).join(", ")}
            </p>
            <p>
              <span className="block text-ink-300">{addresses.plant.label}</span>
              {addresses.plant.lines.slice(0, 3).join(", ")}
            </p>
            <p>
              {contact.mobiles.slice(0, 2).map((n) => (
                <a key={n} href={telHref(n)} className="focus-ring block rounded py-1.5 hover:text-white">
                  {n}
                </a>
              ))}
              <a href={`mailto:${contact.email}`} className="focus-ring block break-all rounded py-1.5 hover:text-white">
                {contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-ink-700">
        <div className="container-page flex flex-col gap-1 py-4 text-xs text-ink-300 sm:flex-row sm:justify-between">
          <p>&copy; {year} {company.name}</p>
          <p>GSTIN {company.gstin}</p>
        </div>
      </div>
    </footer>
  );
}
