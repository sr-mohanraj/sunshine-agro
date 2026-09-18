import type { SpecGroup } from "@/lib/types";

export function SpecTable({ group }: { group: SpecGroup }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-plain">
        <caption className="mb-2 text-left font-display text-base font-semibold text-ink-900">
          {group.title}
          {group.unit && <span className="ml-2 font-sans text-sm font-normal text-ink-400">({group.unit})</span>}
        </caption>
        <tbody>
          {group.rows.map((row) => (
            <tr key={row.k}>
              <td>{row.k}</td>
              <td className="text-right font-medium tabular-nums text-ink-900">{row.v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
