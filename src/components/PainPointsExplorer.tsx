"use client";

import { useState } from "react";
import { marketplacePlatforms } from "@/data/pain-points";

function severityColor(level: string) {
  if (level === "High") return "#FF6B6B";
  if (level === "Medium") return "#FFD400";
  return "#6BCB77";
}

export default function PainPointsExplorer() {
  const [platformId, setPlatformId] = useState(marketplacePlatforms[0].id);
  const [openPainId, setOpenPainId] = useState<string | null>(null);

  const platform =
    marketplacePlatforms.find((p) => p.id === platformId) ?? marketplacePlatforms[0];

  function selectPlatform(id: string) {
    setPlatformId(id);
    setOpenPainId(null);
  }

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* Platform picker */}
      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-3">
        {marketplacePlatforms.map((p) => {
          const isSelected = p.id === platformId;
          return (
            <button
              key={p.id}
              onClick={() => selectPlatform(p.id)}
              className="nb-press nb-border px-4 py-2 font-bold uppercase text-sm flex items-center gap-2"
              style={{
                background: isSelected ? p.color : "#ffffff",
                boxShadow: isSelected ? "4px 4px 0px 0px #111111" : undefined,
              }}
            >
              <span>{p.emoji}</span>
              {p.name}
            </button>
          );
        })}
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-4">
        {/* Platform detail */}
        <div
          className="nb-border nb-shadow bg-white px-5 py-4 text-center"
          style={{ borderTopColor: platform.color, borderTopWidth: "6px" }}
        >
          <p className="font-bold uppercase text-lg">
            {platform.emoji} {platform.name}
          </p>
          <p className="text-sm font-medium opacity-80 mt-1">{platform.description}</p>
        </div>

        {/* Pain points, click to expand */}
        <div className="flex flex-col gap-3">
          {platform.painPoints.map((pp) => {
            const isOpen = pp.id === openPainId;
            return (
              <div key={pp.id} className="nb-border bg-white overflow-hidden">
                <button
                  onClick={() => setOpenPainId(isOpen ? null : pp.id)}
                  className="w-full text-left p-4 flex items-start justify-between gap-3"
                  style={{ background: isOpen ? "#FFF9E8" : "#ffffff" }}
                >
                  <span className="flex-1">
                    <span className="flex items-center gap-2 flex-wrap mb-1">
                      <span
                        className="nb-border px-2 py-0.5 font-bold text-[10px] uppercase shrink-0"
                        style={{ background: severityColor(pp.severity) }}
                      >
                        {pp.severity} severity
                      </span>
                    </span>
                    <span className="block font-bold text-sm">{pp.title}</span>
                    <span className="block text-sm font-medium opacity-70 mt-1">
                      {pp.summary}
                    </span>
                  </span>
                  <span className="nb-border bg-white w-7 h-7 flex items-center justify-center font-bold shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t-2 border-black p-4 flex flex-col gap-3">
                    <div>
                      <p className="font-bold uppercase text-xs mb-1 opacity-60">Who it affects</p>
                      <p className="text-sm font-medium">{pp.whoItAffects}</p>
                    </div>

                    <div>
                      <p className="font-bold uppercase text-xs mb-1 opacity-60">The evidence</p>
                      <p className="text-sm font-medium opacity-90 leading-relaxed">{pp.evidence}</p>
                    </div>

                    <div className="nb-border p-3" style={{ background: "#FFF9E8" }}>
                      <p className="font-bold uppercase text-xs mb-1" style={{ color: platform.color }}>
                        💡 Startup angle
                      </p>
                      <p className="text-sm font-medium">{pp.ideaAngle}</p>
                    </div>

                    <div>
                      <p className="font-bold uppercase text-xs mb-2 opacity-60">
                        Sources ({pp.sources.length})
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {pp.sources.map((s) => (
                          <li key={s.url}>
                            <a
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-medium underline break-words hover:opacity-70"
                            >
                              {s.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                      {pp.sourceNote && (
                        <p className="text-xs font-medium opacity-60 italic mt-3 border-t-2 border-black pt-2">
                          ⚠️ {pp.sourceNote}
                        </p>
                      )}
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
