"use client";

import { SCORE_FIELDS, categoryMeta, totalScore, type Niche } from "@/data/niche-explorer";
import ScorePips from "@/components/ScorePips";

export default function NicheCompare({ niches }: { niches: Niche[] }) {
  if (niches.length < 2) {
    return (
      <div className="nb-border bg-white px-6 py-10 text-center">
        <p className="font-bold uppercase">Select 2–3 niches in Table view</p>
        <p className="text-sm font-medium opacity-70 mt-1">
          Check the &quot;Cmp&quot; box next to each niche you want to compare side by side.
        </p>
      </div>
    );
  }

  return (
    <div className="nb-border bg-white overflow-x-auto">
      <table className="w-full text-sm min-w-[560px]">
        <thead>
          <tr className="border-b-[3px] border-black bg-[#FFF9E8]">
            <th className="p-3 text-left font-bold uppercase text-xs w-40">Niche</th>
            {niches.map((n) => {
              const cat = categoryMeta(n.category);
              return (
                <th key={n.id} className="p-3 text-left font-bold text-sm">
                  <span className="flex items-center gap-1.5">
                    <span className="nb-border w-3 h-3 inline-block shrink-0" style={{ background: cat.color }} />
                    {n.name}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2 border-black">
            <td className="p-3 font-bold uppercase text-xs opacity-60">Status</td>
            {niches.map((n) => (
              <td key={n.id} className="p-3 font-bold">{n.status}</td>
            ))}
          </tr>
          {SCORE_FIELDS.map((f) => (
            <tr key={f.key} className="border-b-2 border-black">
              <td className="p-3 font-bold uppercase text-xs opacity-60">{f.label}</td>
              {niches.map((n) => (
                <td key={n.id} className="p-3">
                  <div className="flex flex-col gap-1.5">
                    <ScorePips value={n[f.key] as number} />
                    <p className="text-xs font-medium opacity-70">{(n[f.notesKey] as string) || "—"}</p>
                  </div>
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="p-3 font-bold uppercase text-xs opacity-60">Total</td>
            {niches.map((n) => (
              <td key={n.id} className="p-3 font-bold text-base">{totalScore(n)}/20</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
