import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt = "",
  crumbs = [],
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink-900">
      <div className="absolute inset-0 -z-10">
        {image && (
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-900/90 to-ink-900/70" />
        <div className="absolute inset-0 bg-sun-radial" />
      </div>

      <div className="container-page relative pb-14 pt-16 sm:pb-20 sm:pt-20">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-bone-200/45">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3 w-3" aria-hidden />}
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="focus-ring rounded transition-colors hover:text-sun-300"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-bone-200/75">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <p className="eyebrow text-sun-300">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-[clamp(2rem,5.4vw,3.9rem)] font-extrabold leading-[1.03] tracking-[-0.03em] text-bone-100">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-bone-200/70 sm:text-[17px]">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
