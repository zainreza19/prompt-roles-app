"use client";

import { useState } from "react";
import type { ResearchMethod } from "@/data/research-methods";

export default function ResearchMethodCard({ method }: { method: ResearchMethod }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(method.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="nb-border nb-shadow bg-white flex flex-col overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-4 p-5 text-left w-full"
        style={{ background: method.color }}
      >
        <span className="text-3xl leading-none">{method.emoji}</span>
        <span className="flex-1">
          <span className="block text-lg font-bold uppercase tracking-tight">
            {method.name}
          </span>
          <span className="block text-sm font-medium opacity-80">
            {method.description}
          </span>
        </span>
        <span className="nb-border bg-white w-8 h-8 flex items-center justify-center font-bold text-lg shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>

      <div className="flex items-center gap-2 px-5 py-2 border-t-3 nb-border border-b-0 bg-white text-xs font-bold uppercase">
        <span className="nb-border px-2 py-0.5 bg-[#111111] text-white">
          {method.distributionScore}/5 distribution ease
        </span>
        <span className="nb-border px-2 py-0.5">
          {method.location === "remote" ? "🌍 Remote" : "📍 Physical"}
        </span>
        <span className="nb-border px-2 py-0.5">
          {method.timeMode === "async" ? "🌙 Async" : "⏰ Scheduled"}
        </span>
      </div>

      {open && (
        <div className="border-t-3 nb-border border-t-0 flex flex-col">
          <pre className="whitespace-pre-wrap text-sm leading-relaxed p-5 font-mono bg-[#fdfdfd] max-h-96 overflow-y-auto border-b-3 border-black">
            {method.prompt}
          </pre>
          <button
            onClick={handleCopy}
            className="nb-press nb-border nb-shadow m-4 self-start px-5 py-2 font-bold uppercase text-sm bg-black text-white"
          >
            {copied ? "Copied ✓" : "Copy prompt"}
          </button>
        </div>
      )}
    </div>
  );
}
