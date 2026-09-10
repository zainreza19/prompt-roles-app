import type { Niche } from "@/data/niche-explorer";

const STORAGE_KEY = "niche-explorer:v1";
const EMPTY: Niche[] = [];

let cache: Niche[] | null = null;
const listeners = new Set<() => void>();

function isNicheArray(value: unknown): value is Niche[] {
  return (
    Array.isArray(value) &&
    value.every(
      (v) => v && typeof v === "object" && "id" in v && "name" in v && "category" in v
    )
  );
}

function read(): Niche[] {
  if (cache) return cache;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (isNicheArray(parsed)) {
        cache = parsed;
        return cache;
      }
    }
  } catch {
    // corrupt/unavailable localStorage — fall through to empty
  }
  cache = [];
  return cache;
}

function write(next: Niche[]) {
  cache = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // storage full/unavailable — in-memory cache still updated for this session
  }
  listeners.forEach((l) => l());
}

export function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

export function getSnapshot(): Niche[] {
  return read();
}

export function getServerSnapshot(): Niche[] {
  return EMPTY;
}

export function setNiches(updater: Niche[] | ((prev: Niche[]) => Niche[])) {
  const prev = read();
  const next = typeof updater === "function" ? updater(prev) : updater;
  write(next);
}

export { isNicheArray };
