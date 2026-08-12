"use client";

import { useState } from "react";
import type { WorkflowType } from "@/data/business-workflows";

export default function BusinessWorkflowsExplorer({
  workflows,
}: {
  workflows: WorkflowType[];
}) {
  const [wfId, setWfId] = useState(workflows[0].id);
  const [tierKey, setTierKey] = useState<"A" | "B" | "C">("A");

  const workflow = workflows.find((w) => w.id === wfId) ?? workflows[0];
  const tier = workflow.tiers.find((t) => t.key === tierKey) ?? workflow.tiers[0];

  function selectWorkflow(id: string) {
    setWfId(id);
    setTierKey("A");
  }

  return (
    <div className="w-full flex flex-col items-center gap-8">
      {/* Workflow tabs */}
      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-2">
        {workflows.map((w, i) => {
          const isSelected = w.id === wfId;
          return (
            <button
              key={w.id}
              onClick={() => selectWorkflow(w.id)}
              className="nb-press nb-border px-3 py-1.5 font-bold uppercase text-xs sm:text-sm flex items-center gap-2"
              style={{ background: isSelected ? "#FFD400" : "#ffffff" }}
            >
              <span className="nb-border bg-white w-5 h-5 flex items-center justify-center text-[10px] shrink-0">
                {i + 1}
              </span>
              {w.label}
            </button>
          );
        })}
      </div>

      <p className="max-w-2xl text-center text-sm sm:text-base font-medium px-4">
        {workflow.intro}
      </p>

      {/* Compare table */}
      <div className="w-full max-w-5xl overflow-x-auto px-4">
        <table className="w-full nb-border bg-white text-xs sm:text-sm min-w-[640px]">
          <thead>
            <tr className="border-b-[3px] border-black">
              <th className="text-left font-bold uppercase p-2.5 opacity-60">Dimension</th>
              <th className="text-left font-bold uppercase p-2.5" style={{ color: "#0A8A7F" }}>
                Tier A
              </th>
              <th className="text-left font-bold uppercase p-2.5" style={{ color: "#C96A00" }}>
                Tier B
              </th>
              <th className="text-left font-bold uppercase p-2.5" style={{ color: "#C23B3B" }}>
                Tier C
              </th>
            </tr>
          </thead>
          <tbody>
            {workflow.compare.map((row, i) => (
              <tr key={row.label} className={i > 0 ? "border-t border-black/15" : ""}>
                <th className="text-left font-bold p-2.5 align-top whitespace-nowrap">{row.label}</th>
                <td className="p-2.5 align-top font-mono">{row.a}</td>
                <td className="p-2.5 align-top font-mono">{row.b}</td>
                <td className="p-2.5 align-top font-mono">{row.c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tier switch */}
      <div className="flex gap-2">
        {workflow.tiers.map((t) => {
          const isSelected = t.key === tierKey;
          return (
            <button
              key={t.key}
              onClick={() => setTierKey(t.key)}
              className="nb-press nb-border px-4 py-1.5 font-bold uppercase text-xs sm:text-sm"
              style={{ background: isSelected ? t.color : "#ffffff" }}
            >
              Tier {t.key}
            </button>
          );
        })}
      </div>

      {/* Dossier */}
      <div className="w-full max-w-4xl nb-border nb-shadow-lg bg-white p-5 sm:p-7 flex flex-col gap-5">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">{tier.name}</h3>
          </div>
          <span
            className="inline-block mt-2 text-[11px] font-bold uppercase nb-border px-2 py-0.5"
            style={{ background: tier.color }}
          >
            {tier.tag}
          </span>
        </div>

        <DossierRow label="Profile">
          <p className="text-sm font-medium leading-relaxed">{tier.profile}</p>
        </DossierRow>

        <DossierRow label="Workflow">
          <ol className="flex flex-col gap-2.5">
            {tier.steps.map((s, i) => (
              <li key={s.title} className="text-sm font-medium leading-relaxed">
                <span className="font-bold">
                  {i + 1}. {s.title} —{" "}
                </span>
                {s.text}
              </li>
            ))}
          </ol>
        </DossierRow>

        <DossierRow label="Roles">
          <p className="text-sm font-medium leading-relaxed">{tier.roles}</p>
        </DossierRow>

        <DossierRow label="Timeline">
          <p className="text-sm font-medium leading-relaxed">{tier.timeline}</p>
        </DossierRow>

        <DossierRow label="Software & Solutions">
          <p className="text-sm font-medium leading-relaxed">{tier.tools}</p>
        </DossierRow>

        <DossierRow label="Money flow">
          <p className="text-sm font-medium leading-relaxed">{tier.moneyFlow}</p>
        </DossierRow>

        <DossierRow label="Failure points">
          <ul className="flex flex-col gap-2">
            {tier.failurePoints.map((f) => (
              <li key={f} className="text-sm font-medium leading-relaxed flex gap-2">
                <span aria-hidden="true">⚠</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </DossierRow>
      </div>
    </div>
  );
}

function DossierRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-2 sm:gap-4 pt-4 border-t-[3px] border-black first:border-t-0 first:pt-0">
      <span className="text-[11px] font-bold uppercase tracking-wide opacity-50 sm:pt-0.5">
        {label}
      </span>
      <div>{children}</div>
    </div>
  );
}
