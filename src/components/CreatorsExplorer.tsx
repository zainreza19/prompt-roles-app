"use client";

import { useMemo, useState } from "react";
import type { Creator, CreatorTier } from "@/data/creators";
import { TIER_INFO, TIER_ORDER } from "@/data/creators";
import PlatformBadge from "@/components/PlatformBadge";
import CreatorAvatar from "@/components/CreatorAvatar";

export default function CreatorsExplorer({ creators }: { creators: Creator[] }) {
  const [tier, setTier] = useState<CreatorTier>("mega");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const c: Record<CreatorTier, number> = { mega: 0, macro: 0, micro: 0, nano: 0 };
    for (const creator of creators) c[creator.tier]++;
    return c;
  }, [creators]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return creators
      .filter((c) => c.tier === tier)
      .filter(
        (c) =>
          !q ||
          c.name.toLowerCase().includes(q) ||
          c.handle.toLowerCase().includes(q) ||
          c.niche.toLowerCase().includes(q)
      );
  }, [creators, tier, query]);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* Tier tabs */}
      <div className="flex flex-wrap justify-center gap-2 px-4">
        {TIER_ORDER.map((t) => {
          const isSelected = t === tier;
          const info = TIER_INFO[t];
          return (
            <button
              key={t}
              onClick={() => setTier(t)}
              className="nb-press nb-border px-4 py-2 font-bold uppercase text-xs sm:text-sm flex items-center gap-2"
              style={{ background: isSelected ? info.color : "#ffffff" }}
            >
              {info.label}
              <span className="text-[10px] opacity-60 font-mono">
                {counts[t]}
              </span>
            </button>
          );
        })}
      </div>

      <p className="text-xs font-bold uppercase opacity-50 -mt-3">
        {TIER_INFO[tier].range}
      </p>

      {/* Search */}
      <div className="w-full max-w-md px-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by name, handle, or niche…"
          className="nb-border w-full px-3 py-2 text-sm font-medium bg-white focus:outline-none"
        />
      </div>

      {/* Card grid */}
      {filtered.length === 0 ? (
        <p className="text-sm font-bold uppercase opacity-40 py-8">
          No creators match that filter yet.
        </p>
      ) : (
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-4">
          {filtered.map((c) => (
            <CreatorCard key={c.id} creator={c} />
          ))}
        </div>
      )}
    </div>
  );
}

function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <div className="nb-border nb-shadow bg-white p-4 flex flex-col gap-2.5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <CreatorAvatar creator={creator} size={40} />
          <div className="min-w-0">
            <p className="font-bold uppercase text-sm leading-snug truncate">
              {creator.name}
            </p>
            <p className="text-xs font-mono opacity-60 truncate">{creator.handle}</p>
          </div>
        </div>
        <span
          className="text-[10px] font-bold uppercase nb-border px-1.5 py-0.5 shrink-0"
          style={{ background: TIER_INFO[creator.tier].color }}
        >
          {creator.followers}
        </span>
      </div>

      <div className="flex items-center gap-1.5 flex-wrap">
        <PlatformBadge platform={creator.platform} />
        <span className="text-[10px] font-bold uppercase opacity-50">
          {creator.niche}
        </span>
      </div>

      <p className="text-sm text-black/80 leading-relaxed">{creator.bio}</p>

      <div className="bg-[#FFF9E8] nb-border px-3 py-2 mt-1">
        <p className="text-[9px] font-bold uppercase opacity-50 mb-0.5">
          Why reach out
        </p>
        <p className="text-xs font-medium leading-snug">
          {creator.whyReachOut}
        </p>
      </div>

      <div className="flex gap-2 mt-1">
        <a
          href={creator.url}
          target="_blank"
          rel="noopener noreferrer"
          className="nb-press nb-border flex-1 text-center font-bold uppercase text-xs px-3 py-2 bg-black text-white"
        >
          Visit profile →
        </a>
        {creator.featuredContentUrl && (
          <a
            href={creator.featuredContentUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch an example from ${creator.name}`}
            className="nb-press nb-border flex-1 text-center font-bold uppercase text-xs px-3 py-2 bg-white"
          >
            Watch example
          </a>
        )}
      </div>
    </div>
  );
}
