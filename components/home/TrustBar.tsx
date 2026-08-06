import company from "@/data/company.json";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";

export function TrustBar() {
  return (
    <section className="border-b border-ink-100 bg-bone-200 dark:border-ink-700 dark:bg-ink-800">
      <div className="container-page grid grid-cols-2 gap-px overflow-hidden py-0 lg:grid-cols-4">
        {company.stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.07}
            className="border-ink-100 px-1 py-8 dark:border-ink-700 sm:px-4 sm:py-10 [&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0"
          >
            <p className="font-display text-[clamp(1.85rem,4.2vw,2.75rem)] font-extrabold leading-none tracking-[-0.03em] text-ink-900 dark:text-bone-100">
              <CountUp to={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-sun-600 dark:text-sun-300">
              {stat.label}
            </p>
            <p className="mt-1 text-[13px] leading-snug text-ink-400 dark:text-bone-200/50">
              {stat.note}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
