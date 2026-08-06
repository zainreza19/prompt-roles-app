"use client";

import { useState } from "react";
import type { Role } from "@/data/roles";

export default function RoleCard({ role }: { role: Role }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(role.prompt);
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
        style={{ background: role.color }}
      >
        <span className="text-3xl leading-none">{role.emoji}</span>
        <span className="flex-1">
          <span className="block text-lg font-bold uppercase tracking-tight">
            {role.name}
          </span>
          <span className="block text-sm font-medium opacity-80">
            {role.tagline}
          </span>
        </span>
        <span className="nb-border bg-white w-8 h-8 flex items-center justify-center font-bold text-lg shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="border-t-3 nb-border border-t-0 flex flex-col">
          <pre className="whitespace-pre-wrap text-sm leading-relaxed p-5 font-mono bg-[#fdfdfd] max-h-96 overflow-y-auto border-b-3 border-black">
            {role.prompt}
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
