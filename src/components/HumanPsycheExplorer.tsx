"use client";

import { useState } from "react";
import { desireRoots } from "@/data/human-psyche";

export default function HumanPsycheExplorer() {
  const [rootId, setRootId] = useState(desireRoots[0].id);
  const [openSubId, setOpenSubId] = useState<string | null>(null);

  const root = desireRoots.find((r) => r.id === rootId) ?? desireRoots[0];

  function selectRoot(id: string) {
    setRootId(id);
    setOpenSubId(null);
  }

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* Level 1: pick a core desire */}
      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-3">
        {desireRoots.map((r) => {
          const isSelected = r.id === rootId;
          return (
            <button
              key={r.id}
              onClick={() => selectRoot(r.id)}
              className="nb-press nb-border px-4 py-2 font-bold uppercase text-sm flex items-center gap-2"
              style={{
                background: isSelected ? r.color : "#ffffff",
                boxShadow: isSelected ? "4px 4px 0px 0px #111111" : undefined,
              }}
            >
              <span>{r.emoji}</span>
              {r.title}
            </button>
          );
        })}
      </div>

      {/* Selected root detail */}
      <div className="w-full max-w-4xl flex flex-col gap-4">
        <div
          className="nb-border nb-shadow bg-white px-5 py-4 text-center"
          style={{ borderTopColor: root.color, borderTopWidth: "6px" }}
        >
          <p className="font-bold uppercase text-lg">
            {root.emoji} {root.title}
          </p>
          <p className="text-sm font-medium opacity-80 mt-1">{root.summary}</p>
        </div>

        {/* Level 2: sub-desires, click to expand */}
        <div className="flex flex-col gap-3">
          {root.subs.map((sub) => {
            const isOpen = sub.id === openSubId;
            return (
              <div key={sub.id} className="nb-border bg-white overflow-hidden">
                <button
                  onClick={() => setOpenSubId(isOpen ? null : sub.id)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3"
                  style={{ background: isOpen ? "#FFF9E8" : "#ffffff" }}
                >
                  <span>
                    <span className="block font-bold uppercase text-sm">{sub.title}</span>
                    <span className="block text-sm font-medium opacity-70 mt-0.5">
                      {sub.summary}
                    </span>
                  </span>
                  <span className="nb-border bg-white w-7 h-7 flex items-center justify-center font-bold shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t-2 border-black p-4 flex flex-col gap-3">
                    {sub.sexNote && (
                      <p className="text-xs font-medium opacity-80 nb-border bg-[#FFF9E8] p-3">
                        🔬 {sub.sexNote}
                      </p>
                    )}

                    {/* Level 3: leaves, with the idea angle */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {sub.leaves.map((leaf) => (
                        <div
                          key={leaf.id}
                          className="nb-border p-3"
                          style={{ boxShadow: "2px 2px 0px 0px #111111", borderLeft: `5px solid ${root.color}` }}
                        >
                          <p className="font-bold text-sm mb-1">{leaf.title}</p>
                          <p className="text-xs font-medium opacity-80 mb-2">{leaf.summary}</p>
                          <p className="text-xs font-bold">💡 {leaf.ideaAngle}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
