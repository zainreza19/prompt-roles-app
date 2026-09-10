"use client";

import { useMemo, useRef, useState } from "react";
import {
  CATEGORIES,
  STATUSES,
  VENTURE_TAGS,
  totalScore,
  type Category,
  type Niche,
  type Status,
  type VentureTag,
} from "@/data/niche-explorer";
import { useNicheStore } from "@/lib/useNicheStore";
import NicheForm from "@/components/NicheForm";
import NicheTable, { type SortKey } from "@/components/NicheTable";
import NicheCard from "@/components/NicheCard";
import NicheCompare from "@/components/NicheCompare";

type View = "table" | "card" | "compare";

function scoreFor(n: Niche, key: SortKey): number | string {
  if (key === "name") return n.name.toLowerCase();
  if (key === "total") return totalScore(n);
  return n[key];
}

export default function NicheExplorer() {
  const { niches, addNiche, updateNiche, deleteNiche, duplicateNiche, exportAll, importAll } =
    useNicheStore();

  const [view, setView] = useState<View>("table");
  const [formOpen, setFormOpen] = useState<"new" | Niche | null>(null);
  const [compareIds, setCompareIds] = useState<Set<string>>(new Set());
  const [sortKey, setSortKey] = useState<SortKey>("total");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const [categoryFilter, setCategoryFilter] = useState<Set<Category>>(new Set());
  const [ventureFilter, setVentureFilter] = useState<Set<VentureTag>>(new Set());
  const [statusFilter, setStatusFilter] = useState<Set<Status>>(new Set());

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importMsg, setImportMsg] = useState<string | null>(null);

  function toggleInSet<T>(set: Set<T>, value: T, setter: (s: Set<T>) => void) {
    const next = new Set(set);
    if (next.has(value)) {
      next.delete(value);
    } else {
      next.add(value);
    }
    setter(next);
  }

  const filtered = useMemo(() => {
    return niches.filter((n) => {
      if (categoryFilter.size > 0 && !categoryFilter.has(n.category)) return false;
      if (statusFilter.size > 0 && !statusFilter.has(n.status)) return false;
      if (ventureFilter.size > 0 && !n.ventureTags.some((t) => ventureFilter.has(t))) return false;
      return true;
    });
  }, [niches, categoryFilter, ventureFilter, statusFilter]);

  const sorted = useMemo(() => {
    const copy = [...filtered];
    copy.sort((a, b) => {
      const av = scoreFor(a, sortKey);
      const bv = scoreFor(b, sortKey);
      const cmp = av < bv ? -1 : av > bv ? 1 : 0;
      return sortDir === "asc" ? cmp : -cmp;
    });
    return copy;
  }, [filtered, sortKey, sortDir]);

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  function toggleCompare(id: string) {
    setCompareIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else if (next.size < 3) {
        next.add(id);
      }
      return next;
    });
  }

  function handleSave(draft: Omit<Niche, "id" | "createdAt" | "updatedAt">) {
    if (formOpen && formOpen !== "new") {
      updateNiche(formOpen.id, draft);
    } else {
      addNiche(draft);
    }
    setFormOpen(null);
  }

  function handleDelete(niche: Niche) {
    if (window.confirm(`Delete "${niche.name}"? This can't be undone.`)) {
      deleteNiche(niche.id);
    }
  }

  async function handleImportFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const mode = niches.length > 0
      ? (window.confirm(
          "Merge with your existing niches? Click Cancel to replace everything instead."
        ) ? "merge" : "replace")
      : "merge";
    if (mode === "replace" && !window.confirm("This will permanently replace all current niches. Continue?")) {
      return;
    }
    const result = await importAll(file, mode);
    setImportMsg(result.ok ? `Imported ${result.count} niche(s).` : result.error);
    setTimeout(() => setImportMsg(null), 4000);
  }

  const compareSelection = niches.filter((n) => compareIds.has(n.id));
  const committedCount = niches.filter((n) => n.status === "Committed").length;

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="w-full max-w-5xl flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {(["table", "card", "compare"] as View[]).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className="nb-press nb-border px-4 py-2 font-bold uppercase text-sm capitalize"
              style={{ background: view === v ? "#111111" : "#ffffff", color: view === v ? "#ffffff" : "#111111" }}
            >
              {v}
              {v === "compare" && compareIds.size > 0 ? ` (${compareIds.size})` : ""}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="nb-press nb-border px-4 py-2 font-bold uppercase text-sm bg-white"
          >
            Import
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json"
            onChange={handleImportFile}
            className="hidden"
          />
          <button
            onClick={exportAll}
            disabled={niches.length === 0}
            className="nb-press nb-border px-4 py-2 font-bold uppercase text-sm bg-white disabled:opacity-40"
          >
            Export all
          </button>
          <button
            onClick={() => setFormOpen("new")}
            className="nb-press nb-border px-4 py-2 font-bold uppercase text-sm bg-black text-white"
          >
            + Add Niche
          </button>
        </div>
      </div>

      {importMsg && (
        <div className="w-full max-w-5xl nb-border px-4 py-2 font-bold text-sm bg-[#FFF9E8]">
          {importMsg}
        </div>
      )}

      <div className="w-full max-w-5xl nb-border bg-white p-4 flex flex-wrap gap-6">
        <div>
          <p className="font-bold uppercase text-xs opacity-60 mb-1.5">Category</p>
          <div className="flex flex-wrap gap-1.5">
            {CATEGORIES.map((c) => (
              <button
                key={c.value}
                onClick={() => toggleInSet(categoryFilter, c.value as Category, setCategoryFilter)}
                className="nb-press nb-border px-2.5 py-1 font-bold text-xs flex items-center gap-1"
                style={{ background: categoryFilter.has(c.value as Category) ? c.color : "#ffffff" }}
              >
                {c.emoji} {c.value}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold uppercase text-xs opacity-60 mb-1.5">Venture</p>
          <div className="flex flex-wrap gap-1.5">
            {VENTURE_TAGS.map((t) => (
              <button
                key={t}
                onClick={() => toggleInSet(ventureFilter, t, setVentureFilter)}
                className="nb-press nb-border px-2.5 py-1 font-bold text-xs"
                style={{
                  background: ventureFilter.has(t) ? "#111111" : "#ffffff",
                  color: ventureFilter.has(t) ? "#ffffff" : "#111111",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold uppercase text-xs opacity-60 mb-1.5">Status</p>
          <div className="flex flex-wrap gap-1.5">
            {STATUSES.map((s) => (
              <button
                key={s.value}
                onClick={() => toggleInSet(statusFilter, s.value as Status, setStatusFilter)}
                className="nb-press nb-border px-2.5 py-1 font-bold text-xs"
                style={{ background: statusFilter.has(s.value as Status) ? s.color : "#ffffff" }}
              >
                {s.value}
              </button>
            ))}
          </div>
        </div>
        <div className="ml-auto self-center">
          <p className="text-xs font-bold uppercase opacity-60">
            {niches.length} logged · {committedCount} committed
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl">
        {view === "table" && (
          <NicheTable
            niches={sorted}
            sortKey={sortKey}
            sortDir={sortDir}
            onSort={handleSort}
            onOpen={(n) => setFormOpen(n)}
            compareIds={compareIds}
            onToggleCompare={toggleCompare}
          />
        )}

        {view === "card" && (
          sorted.length === 0 ? (
            <div className="nb-border bg-white px-6 py-10 text-center">
              <p className="font-bold uppercase">No niches match these filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sorted.map((n) => (
                <NicheCard
                  key={n.id}
                  niche={n}
                  onEdit={() => setFormOpen(n)}
                  onDelete={() => handleDelete(n)}
                  onDuplicate={() => duplicateNiche(n.id)}
                />
              ))}
            </div>
          )
        )}

        {view === "compare" && <NicheCompare niches={compareSelection} />}
      </div>

      {niches.length === 0 && (
        <div className="w-full max-w-5xl nb-border nb-shadow bg-[#FFF9E8] px-6 py-10 text-center">
          <p className="font-bold uppercase text-lg mb-2">No niches logged yet</p>
          <p className="text-sm font-medium opacity-70 mb-4">
            Score your first idea against Pain, Purchasing Power, Targetability, and Growth.
          </p>
          <button
            onClick={() => setFormOpen("new")}
            className="nb-press nb-border nb-shadow px-5 py-2 font-bold uppercase text-sm bg-black text-white"
          >
            + Add your first niche
          </button>
        </div>
      )}

      {formOpen && (
        <NicheForm
          initial={formOpen === "new" ? null : formOpen}
          onCancel={() => setFormOpen(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
