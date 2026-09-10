"use client";

import { useState } from "react";
import {
  CATEGORIES,
  SCORE_FIELDS,
  STATUSES,
  VENTURE_TAGS,
  type Category,
  type Niche,
  type Status,
  type VentureTag,
  totalScore,
} from "@/data/niche-explorer";
import ScorePips from "@/components/ScorePips";

type Draft = Omit<Niche, "id" | "createdAt" | "updatedAt">;

const EMPTY_DRAFT: Draft = {
  name: "",
  category: "Wealth",
  ventureTags: [],
  painNotes: "",
  painScore: 3,
  purchasingPowerNotes: "",
  purchasingPowerScore: 3,
  targetingNotes: "",
  targetingScore: 3,
  growthNotes: "",
  growthScore: 3,
  alreadyTargetingNotes: "",
  status: "Researching",
};

export default function NicheForm({
  initial,
  onCancel,
  onSave,
}: {
  initial: Niche | null;
  onCancel: () => void;
  onSave: (draft: Draft) => void;
}) {
  const [draft, setDraft] = useState<Draft>(
    initial
      ? {
          name: initial.name,
          category: initial.category,
          ventureTags: initial.ventureTags,
          painNotes: initial.painNotes,
          painScore: initial.painScore,
          purchasingPowerNotes: initial.purchasingPowerNotes,
          purchasingPowerScore: initial.purchasingPowerScore,
          targetingNotes: initial.targetingNotes,
          targetingScore: initial.targetingScore,
          growthNotes: initial.growthNotes,
          growthScore: initial.growthScore,
          alreadyTargetingNotes: initial.alreadyTargetingNotes,
          status: initial.status,
        }
      : EMPTY_DRAFT
  );

  function toggleVenture(tag: VentureTag) {
    setDraft((d) => ({
      ...d,
      ventureTags: d.ventureTags.includes(tag)
        ? d.ventureTags.filter((t) => t !== tag)
        : [...d.ventureTags, tag],
    }));
  }

  function submit() {
    if (!draft.name.trim()) return;
    onSave(draft);
  }

  const preview = totalScore(draft as Niche);

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="nb-border nb-shadow-lg bg-[#fef6e4] w-full max-w-2xl my-8">
        <div className="flex items-center justify-between px-5 py-4 border-b-[3px] border-black bg-white">
          <h2 className="font-bold uppercase text-lg">
            {initial ? "Edit niche" : "New niche"}
          </h2>
          <span className="nb-border px-3 py-1 font-bold text-sm bg-[#FFF9E8]">
            Total: {preview} / 20
          </span>
        </div>

        <div className="p-5 flex flex-col gap-5">
          <div>
            <label className="block font-bold uppercase text-xs mb-1.5">Niche name</label>
            <input
              autoFocus
              value={draft.name}
              onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
              placeholder="e.g. Postpartum recovery for new dads"
              className="nb-border w-full px-3 py-2 font-medium bg-white"
            />
          </div>

          <div className="flex flex-wrap gap-6">
            <div>
              <label className="block font-bold uppercase text-xs mb-1.5">Category</label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setDraft((d) => ({ ...d, category: c.value as Category }))}
                    className="nb-press nb-border px-3 py-1.5 font-bold text-sm flex items-center gap-1.5"
                    style={{
                      background: draft.category === c.value ? c.color : "#ffffff",
                    }}
                  >
                    <span>{c.emoji}</span>
                    {c.value}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-bold uppercase text-xs mb-1.5">Status</label>
              <div className="flex flex-wrap gap-2">
                {STATUSES.map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => setDraft((d) => ({ ...d, status: s.value as Status }))}
                    className="nb-press nb-border px-3 py-1.5 font-bold text-sm"
                    style={{ background: draft.status === s.value ? s.color : "#ffffff" }}
                  >
                    {s.value}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block font-bold uppercase text-xs mb-1.5">
              Venture(s) considering this for
            </label>
            <div className="flex flex-wrap gap-2">
              {VENTURE_TAGS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => toggleVenture(t)}
                  className="nb-press nb-border px-3 py-1.5 font-bold text-sm"
                  style={{ background: draft.ventureTags.includes(t) ? "#111111" : "#ffffff", color: draft.ventureTags.includes(t) ? "#ffffff" : "#111111" }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {SCORE_FIELDS.map((f) => (
            <div key={f.key} className="nb-border bg-white p-4">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <label className="font-bold uppercase text-sm">{f.notesLabel}</label>
                <ScorePips
                  value={draft[f.key] as number}
                  onChange={(v) => setDraft((d) => ({ ...d, [f.key]: v }))}
                />
              </div>
              <p className="text-xs font-medium opacity-60 mb-2">{f.rubric}</p>
              <textarea
                value={draft[f.notesKey] as string}
                onChange={(e) => setDraft((d) => ({ ...d, [f.notesKey]: e.target.value }))}
                placeholder={f.notesPlaceholder}
                rows={2}
                className="nb-border w-full px-3 py-2 text-sm font-medium bg-[#fef6e4]"
              />
            </div>
          ))}

          <div>
            <label className="block font-bold uppercase text-xs mb-1.5">
              Already targeting this (who&apos;s proving the market pays)
            </label>
            <textarea
              value={draft.alreadyTargetingNotes}
              onChange={(e) => setDraft((d) => ({ ...d, alreadyTargetingNotes: e.target.value }))}
              placeholder="Existing companies, creators, or products"
              rows={2}
              className="nb-border w-full px-3 py-2 text-sm font-medium bg-white"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 px-5 py-4 border-t-[3px] border-black bg-white">
          <button
            type="button"
            onClick={onCancel}
            className="nb-press nb-border px-5 py-2 font-bold uppercase text-sm bg-white"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={submit}
            disabled={!draft.name.trim()}
            className="nb-press nb-border px-5 py-2 font-bold uppercase text-sm bg-black text-white disabled:opacity-40"
          >
            {initial ? "Save changes" : "Add niche"}
          </button>
        </div>
      </div>
    </div>
  );
}
