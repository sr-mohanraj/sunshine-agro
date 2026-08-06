import type { SpecGroup } from "@/lib/types";

export function SpecTable({ group }: { group: SpecGroup }) {
  return (
    <div className="overflow-hidden rounded-xl border border-ink-100 dark:border-ink-700">
      <div className="flex items-baseline justify-between gap-3 border-b border-ink-100 bg-bone-200/70 px-4 py-2.5 dark:border-ink-700 dark:bg-ink-800">
        <h4 className="font-display text-[13px] font-bold text-ink-900 dark:text-bone-100">
          {group.group}
        </h4>
        {group.unit && (
          <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-400 dark:text-bone-200/45">
            {group.unit}
          </span>
        )}
      </div>
      <dl className="divide-y divide-ink-100 dark:divide-ink-700">
        {group.rows.map((row) => (
          <div
            key={row.k}
            className="flex items-baseline justify-between gap-4 px-4 py-2.5 text-sm"
          >
            <dt className="text-ink-500 dark:text-bone-200/65">{row.k}</dt>
            <dd className="shrink-0 text-right font-mono text-[13px] font-medium text-ink-900 dark:text-bone-100">
              {row.v}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
