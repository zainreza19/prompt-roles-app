"use client";

import { useState } from "react";
import ResearchMethodCard from "@/components/ResearchMethodCard";
import { researchMethods } from "@/data/research-methods";

export default function ResearchMethodsExplorer() {
  const [tab, setTab] = useState<"remote" | "physical">("remote");

  const methods = researchMethods
    .filter((m) => m.location === tab)
    .sort((a, b) => b.distributionScore - a.distributionScore);

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="w-full max-w-3xl flex justify-center gap-3">
        <button
          onClick={() => setTab("remote")}
          className="nb-press nb-border px-5 py-2.5 font-bold uppercase text-sm flex items-center gap-2"
          style={{
            background: tab === "remote" ? "#111111" : "#ffffff",
            color: tab === "remote" ? "#ffffff" : "#111111",
            boxShadow: tab === "remote" ? "4px 4px 0px 0px #111111" : undefined,
          }}
        >
          🌍 Remote & Async
        </button>
        <button
          onClick={() => setTab("physical")}
          className="nb-press nb-border px-5 py-2.5 font-bold uppercase text-sm flex items-center gap-2"
          style={{
            background: tab === "physical" ? "#111111" : "#ffffff",
            color: tab === "physical" ? "#ffffff" : "#111111",
            boxShadow: tab === "physical" ? "4px 4px 0px 0px #111111" : undefined,
          }}
        >
          📍 Requires Physical Presence
        </button>
      </div>

      <p className="text-sm font-medium opacity-70 text-center max-w-xl -mt-4">
        {tab === "remote"
          ? "Sorted highest distribution ease first — the top of this list doubles as your future growth channel, not just a way to validate."
          : "Sorted highest distribution ease first — these can produce strong signal, but only if you can actually be there in person."}
      </p>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {methods.map((m) => (
          <ResearchMethodCard key={m.id} method={m} />
        ))}
      </div>
    </div>
  );
}
