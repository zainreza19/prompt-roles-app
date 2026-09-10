"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { Niche } from "@/data/niche-explorer";
import {
  getServerSnapshot,
  getSnapshot,
  isNicheArray,
  setNiches as setStoredNiches,
  subscribe,
} from "@/lib/nicheStore";

function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `niche-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function useNicheStore() {
  const niches = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const addNiche = useCallback((data: Omit<Niche, "id" | "createdAt" | "updatedAt">) => {
    const now = new Date().toISOString();
    const niche: Niche = { ...data, id: newId(), createdAt: now, updatedAt: now };
    setStoredNiches((prev) => [niche, ...prev]);
    return niche;
  }, []);

  const updateNiche = useCallback((id: string, data: Partial<Omit<Niche, "id" | "createdAt">>) => {
    setStoredNiches((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, ...data, updatedAt: new Date().toISOString() } : n
      )
    );
  }, []);

  const deleteNiche = useCallback((id: string) => {
    setStoredNiches((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const duplicateNiche = useCallback((id: string) => {
    setStoredNiches((prev) => {
      const source = prev.find((n) => n.id === id);
      if (!source) return prev;
      const now = new Date().toISOString();
      const copy: Niche = {
        ...source,
        id: newId(),
        name: `${source.name} (copy)`,
        status: "Researching",
        createdAt: now,
        updatedAt: now,
      };
      return [copy, ...prev];
    });
  }, []);

  const exportAll = useCallback(() => {
    const blob = new Blob([JSON.stringify(niches, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `niche-explorer-export-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [niches]);

  const importAll = useCallback((file: File, mode: "merge" | "replace") => {
    return new Promise<{ ok: true; count: number } | { ok: false; error: string }>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(String(reader.result));
          if (!isNicheArray(parsed)) {
            resolve({ ok: false, error: "That file doesn't look like a niche export." });
            return;
          }
          setStoredNiches((prev) => {
            if (mode === "replace") return parsed;
            const existingIds = new Set(prev.map((n) => n.id));
            return [...prev, ...parsed.filter((n) => !existingIds.has(n.id))];
          });
          resolve({ ok: true, count: parsed.length });
        } catch {
          resolve({ ok: false, error: "Couldn't parse that file as JSON." });
        }
      };
      reader.onerror = () => resolve({ ok: false, error: "Couldn't read that file." });
      reader.readAsText(file);
    });
  }, []);

  return { niches, addNiche, updateNiche, deleteNiche, duplicateNiche, exportAll, importAll };
}
