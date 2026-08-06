"use client";

import { useState } from "react";
import RoleCard from "@/components/RoleCard";
import { businessTypes } from "@/data/workflow";

export default function WorkflowExplorer() {
  const [businessTypeId, setBusinessTypeId] = useState("saas");
  const [stageIndex, setStageIndex] = useState(0);

  const businessType =
    businessTypes.find((b) => b.id === businessTypeId) ?? businessTypes[0];
  const stages = businessType.stages ?? [];
  const stage = stages[stageIndex];

  function selectBusinessType(id: string, available: boolean) {
    if (!available) return;
    setBusinessTypeId(id);
    setStageIndex(0);
  }

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="w-full max-w-4xl flex flex-wrap justify-center gap-3">
        {businessTypes.map((bt) => {
          const isSelected = bt.id === businessTypeId;
          return (
            <button
              key={bt.id}
              onClick={() => selectBusinessType(bt.id, bt.available)}
              disabled={!bt.available}
              className={`nb-border px-4 py-2 font-bold uppercase text-sm flex items-center gap-2 ${
                bt.available ? "nb-press cursor-pointer" : "opacity-40 cursor-not-allowed"
              }`}
              style={{
                background: isSelected ? "#111111" : "#ffffff",
                color: isSelected ? "#ffffff" : "#111111",
                boxShadow: isSelected ? "4px 4px 0px 0px #111111" : undefined,
              }}
            >
              <span>{bt.emoji}</span>
              {bt.name}
              {!bt.available && (
                <span className="text-[10px] bg-[#FFD400] text-black nb-border px-1.5 py-0.5">
                  SOON
                </span>
              )}
            </button>
          );
        })}
      </div>

      {stages.length > 0 && (
        <>
          <div className="w-full max-w-4xl flex flex-wrap justify-center gap-2">
            {stages.map((s, i) => {
              const isSelected = i === stageIndex;
              return (
                <button
                  key={s.id}
                  onClick={() => setStageIndex(i)}
                  className="nb-press nb-border px-3 py-1.5 font-bold uppercase text-xs sm:text-sm flex items-center gap-2"
                  style={{
                    background: isSelected ? "#FFD400" : "#ffffff",
                  }}
                >
                  <span className="nb-border bg-white w-5 h-5 flex items-center justify-center text-[10px] shrink-0">
                    {i + 1}
                  </span>
                  {s.title}
                </button>
              );
            })}
          </div>

          {stage && (
            <div className="w-full max-w-5xl flex flex-col gap-5">
              <div className="nb-border nb-shadow bg-white px-5 py-4 text-center">
                <p className="font-bold uppercase text-lg">
                  Stage {stageIndex + 1}: {stage.title}
                </p>
                <p className="text-sm font-medium opacity-80 mt-1">
                  {stage.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stage.agents.map((agent) => (
                  <RoleCard key={agent.id} role={agent} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
