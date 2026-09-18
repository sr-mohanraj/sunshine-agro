import Link from "next/link";

type Crumb = { label: string; href?: string };

export function PageHeader({
  title,
  lead,
  crumbs,
}: {
  title: React.ReactNode;
  lead?: React.ReactNode;
  crumbs?: Crumb[];
}) {
  return (
    <section className="border-b border-ink-100 bg-bone-200">
      <div className="container-page py-8 md:py-12">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-3 text-sm text-ink-400">
            <ol className="flex flex-wrap items-center gap-x-2">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden>/</span>}
                  {c.href ? (
                    <Link href={c.href} className="focus-ring inline-block rounded py-1.5 hover:text-sun-700">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-3xl font-semibold md:text-4xl">{title}</h1>
        {lead && <p className="mt-3 max-w-2xl text-base text-ink-500">{lead}</p>}
      </div>
    </section>
  );
}
