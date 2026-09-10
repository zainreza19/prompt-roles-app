"use client";

import {
  SCORE_FIELDS,
  categoryMeta,
  nicheToMarkdown,
  statusMeta,
  totalScore,
  type Niche,
} from "@/data/niche-explorer";
import ScorePips from "@/components/ScorePips";

export default function NicheCard({
  niche,
  onEdit,
  onDelete,
  onDuplicate,
}: {
  niche: Niche;
  onEdit: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
}) {
  const cat = categoryMeta(niche.category);
  const st = statusMeta(niche.status);
  const committed = niche.status === "Committed";
  const rejected = niche.status === "Rejected";

  async function copyMarkdown() {
    try {
      await navigator.clipboard.writeText(nicheToMarkdown(niche));
    } catch {
      // clipboard unavailable — silently no-op, nothing else to fall back to
    }
  }

  return (
    <div
      className="nb-border nb-shadow bg-white flex flex-col"
      style={{
        borderTopColor: cat.color,
        borderTopWidth: "6px",
        opacity: rejected ? 0.55 : 1,
      }}
    >
      <div className="p-4 border-b-2 border-black flex items-start justify-between gap-2">
        <div>
          <p className="font-bold text-lg flex items-center gap-2">
            {cat.emoji} {niche.name}
            {committed && <span title="Committed">🔒</span>}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            <span
              className="nb-border px-2 py-0.5 font-bold text-[10px] uppercase"
              style={{ background: st.color }}
            >
              {niche.status}
            </span>
            {niche.ventureTags.map((t) => (
              <span key={t} className="nb-border px-2 py-0.5 font-bold text-[10px] uppercase bg-[#FFF9E8]">
                {t}
              </span>
            ))}
          </div>
        </div>
        <span className="nb-border px-3 py-1 font-bold text-sm shrink-0 bg-[#FFF9E8]">
          {totalScore(niche)}/20
        </span>
      </div>

      <div className="p-4 flex flex-col gap-3 flex-1">
        {SCORE_FIELDS.map((f) => (
          <div key={f.key}>
            <div className="flex items-center justify-between mb-1">
              <p className="font-bold uppercase text-xs opacity-60">{f.label}</p>
              <ScorePips value={niche[f.key] as number} />
            </div>
            <p className="text-sm font-medium">{(niche[f.notesKey] as string) || "—"}</p>
          </div>
        ))}
        <div>
          <p className="font-bold uppercase text-xs opacity-60 mb-1">Already targeting this</p>
          <p className="text-sm font-medium">{niche.alreadyTargetingNotes || "—"}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 p-4 border-t-2 border-black">
        <button onClick={onEdit} className="nb-press nb-border px-3 py-1.5 font-bold uppercase text-xs bg-white">
          Edit
        </button>
        <button onClick={onDuplicate} className="nb-press nb-border px-3 py-1.5 font-bold uppercase text-xs bg-white">
          Duplicate
        </button>
        <button onClick={copyMarkdown} className="nb-press nb-border px-3 py-1.5 font-bold uppercase text-xs bg-white">
          Copy as Markdown
        </button>
        <button
          onClick={onDelete}
          className="nb-press nb-border px-3 py-1.5 font-bold uppercase text-xs bg-white ml-auto"
          style={{ color: "#B00020" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
