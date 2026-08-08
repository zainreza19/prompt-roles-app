"use client";

import { useState } from "react";
import { obstacleStages, stuckStories } from "@/data/obstacle-map";

export default function ObstacleMapExplorer() {
  const [stageId, setStageId] = useState(obstacleStages[0].id);

  const stage = obstacleStages.find((s) => s.id === stageId) ?? obstacleStages[0];
  const stories = stuckStories.filter((s) => s.stage === stageId);

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="w-full max-w-4xl flex flex-wrap justify-center gap-2">
        {obstacleStages.map((s, i) => {
          const isSelected = s.id === stageId;
          return (
            <button
              key={s.id}
              onClick={() => setStageId(s.id)}
              className="nb-press nb-border px-3 py-1.5 font-bold uppercase text-xs sm:text-sm flex items-center gap-2"
              style={{ background: isSelected ? "#FF9F40" : "#ffffff" }}
            >
              <span className="nb-border bg-white w-5 h-5 flex items-center justify-center text-[10px] shrink-0">
                {i + 1}
              </span>
              {s.title}
            </button>
          );
        })}
      </div>

      <div className="w-full max-w-4xl nb-border nb-shadow bg-black text-white px-5 py-4 text-center">
        <p className="font-bold uppercase text-sm opacity-70 mb-1">
          What it feels like at this stage
        </p>
        <p className="text-lg font-bold">{stage.feeling}</p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-5">
        {stories.map((story) => (
          <div key={story.id} className="nb-border nb-shadow bg-white p-5 flex flex-col gap-2">
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold uppercase text-sm">{story.company}</span>
              <span
                className="text-[10px] font-bold uppercase nb-border px-1.5 py-0.5"
                style={{ background: story.era === "classic" ? "#FFD400" : "#4ECDC4" }}
              >
                {story.era === "classic" ? "Well-known" : "Indie founder"}
              </span>
            </div>
            <p className="text-sm font-medium">
              <span className="font-bold uppercase text-xs opacity-50 block mb-0.5">
                The roadblock
              </span>
              {story.roadblock}
            </p>
            <p className="text-sm font-medium">
              <span className="font-bold uppercase text-xs opacity-50 block mb-0.5">
                How bad it got
              </span>
              {story.duration}
            </p>
            <p className="text-sm font-medium">
              <span className="font-bold uppercase text-xs opacity-50 block mb-0.5">
                What got them unstuck
              </span>
              {story.resolution}
            </p>
            <p className="text-sm font-medium">
              <span className="font-bold uppercase text-xs opacity-50 block mb-0.5">
                Where they ended up
              </span>
              {story.outcome}
            </p>
            {story.source && (
              <p className="text-xs font-bold uppercase opacity-40 mt-1">
                Source: {story.source}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
