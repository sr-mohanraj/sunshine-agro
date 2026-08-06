import company from "@/data/company.json";

export function IndustriesMarquee() {
  // Duplicated once so the -50% keyframe loop is seamless; aria-hidden on the
  // whole strip because the same list is already in the footer as real text.
  const items = [...company.industriesServed, ...company.industriesServed];

  return (
    <section
      className="marquee-fade overflow-hidden border-y border-ink-100 bg-bone-100 py-5 dark:border-ink-700 dark:bg-ink-900"
      aria-hidden
    >
      <div className="animate-marquee flex w-[200%] items-center gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink-400 dark:text-bone-200/45">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-sun-500" />
          </span>
        ))}
      </div>
    </section>
  );
}
