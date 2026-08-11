import Link from "next/link";
import RoleCard from "@/components/RoleCard";
import SiteHeader from "@/components/SiteHeader";
import {
  followUpCadence,
  hardTruths,
  historicalExamples,
  moonlightingPlan,
  objectionCategories,
  outreachBenchmarks,
  outreachPrinciples,
  qualificationFrameworks,
  salesAgents,
  salesProcessSteps,
} from "@/data/sales-function";

export default function SalesFunction() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-6 flex flex-col items-center text-center gap-5">
        <Link href="/functions" className="text-xs font-bold uppercase opacity-60 hover:underline">
          ← All functions
        </Link>
        <div className="nb-border nb-shadow bg-[#4D96FF] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Function: Sales
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Distribution is the job.
          <br />
          Sales is how you do it.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          The real tech sales process, how to actually reach out, the hard
          truths founders avoid, how to run it around a day job, and how
          the best-known entrepreneurs did their own sales before they ever
          had a sales team.
        </p>
      </header>

      {/* Process */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">The tech sales process, step by step</h2>
        <div className="flex flex-col gap-3">
          {salesProcessSteps.map((s) => (
            <div key={s.step} className="nb-border nb-shadow bg-white p-4 flex gap-4 items-start">
              <span className="nb-border bg-black text-white w-9 h-9 flex items-center justify-center font-bold shrink-0">
                {s.step}
              </span>
              <div>
                <p className="font-bold uppercase text-sm mb-1">{s.title}</p>
                <p className="text-sm font-medium opacity-80">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outreach principles */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">How to actually reach out</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {outreachPrinciples.map((p) => (
            <div key={p.title} className="nb-border bg-white p-4" style={{ boxShadow: "3px 3px 0px 0px #111111" }}>
              <p className="font-bold uppercase text-sm mb-1">{p.title}</p>
              <p className="text-sm font-medium opacity-80">{p.detail}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {outreachBenchmarks.map((b) => (
            <div key={b.id} className="nb-border nb-shadow bg-[#111111] text-white p-4 flex flex-col gap-1">
              <span className="text-2xl font-bold" style={{ color: "#FFD400" }}>
                {b.stat}
              </span>
              <span className="text-xs font-medium opacity-80">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Follow-up cadence */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">The follow-up sequence</h2>
        <div className="nb-border nb-shadow bg-[#FFF9E8] p-5 flex flex-col gap-2">
          {followUpCadence.map((item) => (
            <div key={item} className="flex items-start gap-2">
              <span className="nb-border bg-white w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                →
              </span>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Qualification frameworks */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">Qualification frameworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {qualificationFrameworks.map((f) => (
            <div key={f.name} className="nb-border bg-white p-4">
              <p className="font-bold uppercase text-sm mb-1">{f.name}</p>
              <p className="text-xs font-bold uppercase opacity-50 mb-2">{f.expandsTo}</p>
              <p className="text-sm font-medium opacity-80">{f.useWhen}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Objection categories */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">The 6 objection categories</h2>
        <div className="nb-border nb-shadow bg-white overflow-x-auto">
          <table className="w-full border-collapse text-sm" style={{ minWidth: "600px" }}>
            <tbody>
              {objectionCategories.map((o, i) => (
                <tr key={o.category} style={{ background: i % 2 === 0 ? "#ffffff" : "#FFF9E8" }}>
                  <td className="p-3 border-b-2 border-black font-bold uppercase text-xs w-40">{o.category}</td>
                  <td className="p-3 border-b-2 border-black font-medium">{o.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Hard truths */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">Hard pills to swallow</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hardTruths.map((h) => (
            <div key={h.title} className="nb-border nb-shadow bg-black text-white p-4">
              <p className="font-bold uppercase text-sm mb-1" style={{ color: "#FFD400" }}>
                {h.title}
              </p>
              <p className="text-sm font-medium opacity-80">{h.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Moonlighting plan */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-2">Selling while keeping your day job</h2>
        <p className="text-center text-sm font-medium opacity-70 mb-6">A weekly cadence built around evenings and weekends</p>
        <div className="flex flex-col gap-3">
          {moonlightingPlan.map((m) => (
            <div key={m.when} className="nb-border bg-white p-4 flex gap-4">
              <span className="nb-border bg-[#6BCB77] px-3 py-1 font-bold uppercase text-xs shrink-0 h-fit whitespace-nowrap">
                {m.when}
              </span>
              <p className="text-sm font-medium">{m.what}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Historical examples */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-2">How the best entrepreneurs actually did this</h2>
        <p className="text-center text-sm font-medium opacity-70 mb-6 max-w-2xl mx-auto">
          Before any of these companies had a sales team, the founders did it themselves — by hand.
        </p>
        <div className="flex flex-col gap-4">
          {historicalExamples.map((h) => (
            <div key={h.company} className="nb-border nb-shadow bg-white p-5">
              <p className="font-bold uppercase text-base mb-1">{h.company}</p>
              <p className="text-sm font-bold mb-2" style={{ color: "#FF6B6B" }}>
                {h.tactic}
              </p>
              <p className="text-sm font-medium mb-2">{h.detail}</p>
              <p className="text-sm font-medium opacity-80 italic mb-2">{h.lesson}</p>
              <p className="text-xs font-bold uppercase opacity-40">Source: {h.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prompts */}
      <section className="w-full max-w-5xl pb-16">
        <h2 className="text-2xl font-bold uppercase text-center mb-2">Apply it</h2>
        <p className="text-center text-sm font-medium opacity-70 mb-6 max-w-2xl mx-auto">
          One prompt per part of the process above — copy, paste, and run it against your own product.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {salesAgents.map((agent) => (
            <RoleCard key={agent.id} role={agent} />
          ))}
        </div>
      </section>
    </div>
  );
}
