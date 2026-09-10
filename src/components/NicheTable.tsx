"use client";

import { categoryMeta, statusMeta, totalScore, type Niche } from "@/data/niche-explorer";
import ScorePips from "@/components/ScorePips";

export type SortKey = "name" | "painScore" | "purchasingPowerScore" | "targetingScore" | "growthScore" | "total";

const COLUMNS: { key: SortKey; label: string }[] = [
  { key: "name", label: "Niche" },
  { key: "painScore", label: "Pain" },
  { key: "purchasingPowerScore", label: "Purch. Power" },
  { key: "targetingScore", label: "Targeting" },
  { key: "growthScore", label: "Growth" },
  { key: "total", label: "Total" },
];

export default function NicheTable({
  niches,
  sortKey,
  sortDir,
  onSort,
  onOpen,
  compareIds,
  onToggleCompare,
}: {
  niches: Niche[];
  sortKey: SortKey;
  sortDir: "asc" | "desc";
  onSort: (key: SortKey) => void;
  onOpen: (niche: Niche) => void;
  compareIds: Set<string>;
  onToggleCompare: (id: string) => void;
}) {
  if (niches.length === 0) {
    return (
      <div className="nb-border bg-white px-6 py-10 text-center">
        <p className="font-bold uppercase">No niches match these filters</p>
      </div>
    );
  }

  return (
    <div className="nb-border bg-white overflow-x-auto">
      <table className="w-full text-sm min-w-[720px]">
        <thead>
          <tr className="border-b-[3px] border-black bg-[#FFF9E8]">
            <th className="p-3 text-left font-bold uppercase text-xs w-10">Cmp</th>
            {COLUMNS.map((c) => (
              <th key={c.key} className="p-3 text-left font-bold uppercase text-xs">
                <button
                  onClick={() => onSort(c.key)}
                  className="flex items-center gap-1 hover:underline"
                >
                  {c.label}
                  {sortKey === c.key && <span>{sortDir === "asc" ? "▲" : "▼"}</span>}
                </button>
              </th>
            ))}
            <th className="p-3 text-left font-bold uppercase text-xs">Status</th>
          </tr>
        </thead>
        <tbody>
          {niches.map((n) => {
            const cat = categoryMeta(n.category);
            const st = statusMeta(n.status);
            const rejected = n.status === "Rejected";
            return (
              <tr
                key={n.id}
                className="border-b-2 border-black last:border-b-0 cursor-pointer hover:bg-[#FFF9E8]"
                style={{ opacity: rejected ? 0.5 : 1 }}
                onClick={() => onOpen(n)}
              >
                <td className="p-3" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={compareIds.has(n.id)}
                    onChange={() => onToggleCompare(n.id)}
                    className="w-4 h-4"
                  />
                </td>
                <td className="p-3 font-bold">
                  <span className="flex items-center gap-2">
                    <span
                      className="nb-border w-3 h-3 inline-block shrink-0"
                      style={{ background: cat.color }}
                    />
                    {n.name}
                    {n.status === "Committed" && <span title="Committed">🔒</span>}
                  </span>
                </td>
                <td className="p-3"><ScorePips value={n.painScore} /></td>
                <td className="p-3"><ScorePips value={n.purchasingPowerScore} /></td>
                <td className="p-3"><ScorePips value={n.targetingScore} /></td>
                <td className="p-3"><ScorePips value={n.growthScore} /></td>
                <td className="p-3 font-bold">{totalScore(n)}/20</td>
                <td className="p-3">
                  <span
                    className="nb-border px-2 py-0.5 font-bold text-[10px] uppercase"
                    style={{ background: st.color }}
                  >
                    {n.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
