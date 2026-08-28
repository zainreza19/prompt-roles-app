import Link from "next/link";
import RoleCard from "@/components/RoleCard";
import SiteHeader from "@/components/SiteHeader";
import {
  channelFitTable,
  commonMistakes,
  demandPrinciples,
  historicalExamples,
  marketingAgents,
  prelaunchChecklist,
  prelaunchPlaybook,
  waitlistBenchmarks,
  waitlistMechanics,
} from "@/data/marketing-function";

export default function MarketingFunction() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-6 flex flex-col items-center text-center gap-5">
        <Link href="/functions" className="text-xs font-bold uppercase opacity-60 hover:underline">
          ← All functions
        </Link>
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Function: Marketing
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Build the audience
          <br />
          before you build the thing.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          The most common reason a finished product goes nowhere isn&rsquo;t
          the product — it&rsquo;s that nobody was waiting for it. This is
          the playbook for creating real demand (a waitlist, an audience, a
          referral loop) before or while you build, with the real mechanics
          Robinhood, Superhuman, Mailbox, and others actually used.
        </p>
        <p className="text-xs font-bold uppercase opacity-60 max-w-md">
          Testing whether an idea is worth building at all? See{" "}
          <Link href="/research-methods" className="underline">
            Research Methods
          </Link>{" "}
          for validation techniques — this page is the deeper playbook
          specifically for the demand-generation piece.
        </p>
      </header>

      {/* Core principles */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">Core principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {demandPrinciples.map((p) => (
            <div key={p.title} className="nb-border bg-white p-4" style={{ boxShadow: "3px 3px 0px 0px #111111" }}>
              <p className="font-bold uppercase text-sm mb-1">{p.title}</p>
              <p className="text-sm font-medium opacity-80">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pre-launch playbook */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-2">The pre-launch demand playbook</h2>
        <p className="text-center text-sm font-medium opacity-70 mb-6">7 steps, in order, before or alongside the build</p>
        <div className="flex flex-col gap-3">
          {prelaunchPlaybook.map((s) => (
            <div key={s.step} className="nb-border nb-shadow bg-white p-4 flex gap-4 items-start">
              <span className="nb-border bg-black text-white w-8 h-8 flex items-center justify-center font-bold shrink-0">
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

      {/* Waitlist benchmarks */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">Waitlist conversion benchmarks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {waitlistBenchmarks.map((b) => (
            <div key={b.id} className="nb-border nb-shadow bg-[#FFF9E8] p-4 flex gap-4 items-center">
              <span className="text-2xl font-bold shrink-0" style={{ color: "#FFD400", WebkitTextStroke: "1px #111111" }}>
                {b.stat}
              </span>
              <p className="text-sm font-medium">{b.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist mechanics */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-2">Waitlist mechanics, compared</h2>
        <p className="text-center text-sm font-medium opacity-70 mb-6 max-w-2xl mx-auto">
          Email capture alone barely converts. Pick the mechanic that fits your audience and price point.
        </p>
        <div className="flex flex-col gap-4">
          {waitlistMechanics.map((m) => (
            <div key={m.name} className="nb-border nb-shadow bg-white p-4">
              <p className="font-bold uppercase text-sm mb-2">{m.name}</p>
              <p className="text-sm font-medium opacity-80 mb-2">{m.howItWorks}</p>
              <p className="text-sm font-medium mb-2">
                <span className="font-bold" style={{ color: "#FF9F40" }}>Best for: </span>
                {m.bestFor}
              </p>
              <p className="text-sm font-medium opacity-70 italic">{m.example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Historical examples */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">Who actually did this, and how</h2>
        <div className="flex flex-col gap-4">
          {historicalExamples.map((h) => (
            <div key={h.company} className="nb-border nb-shadow bg-white p-4">
              <p className="font-bold uppercase text-sm mb-1">{h.company}</p>
              <p className="text-sm font-medium mb-2" style={{ color: "#4D96FF" }}>
                {h.tactic}
              </p>
              <p className="text-sm font-medium opacity-80 mb-2">{h.detail}</p>
              <p className="text-sm font-medium mb-2">
                <span className="font-bold">Lesson: </span>
                {h.lesson}
              </p>
              <p className="text-xs font-medium opacity-60">Source: {h.source}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Channel fit table */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-2">Which channel fits which idea</h2>
        <p className="text-center text-sm font-medium opacity-70 mb-6 max-w-2xl mx-auto">
          The channel has to match where the audience already is — not the founder&rsquo;s comfort zone.
        </p>
        <div className="flex flex-col gap-3">
          {channelFitTable.map((c) => (
            <div key={c.audienceType} className="nb-border bg-white p-4 flex flex-col md:flex-row gap-3 md:gap-5">
              <span className="nb-border bg-[#6BCB77] px-3 py-1.5 font-bold uppercase text-xs shrink-0 h-fit md:w-[220px]">
                {c.audienceType}
              </span>
              <div>
                <p className="font-bold text-sm mb-1">{c.bestChannel}</p>
                <p className="text-sm font-medium opacity-80">{c.why}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Checklist */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">The pre-launch checklist</h2>
        <div className="nb-border nb-shadow bg-white p-5 grid grid-cols-1 md:grid-cols-2 gap-2">
          {prelaunchChecklist.map((item) => (
            <div key={item} className="flex items-start gap-2">
              <span className="nb-border bg-white w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                ✓
              </span>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mistakes */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">Mistakes founders make with pre-launch demand</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {commonMistakes.map((m) => (
            <div key={m.title} className="nb-border bg-white p-4" style={{ boxShadow: "3px 3px 0px 0px #111111" }}>
              <p className="font-bold uppercase text-sm mb-1">{m.title}</p>
              <p className="text-sm font-medium opacity-80">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prompts */}
      <section className="w-full max-w-5xl pb-16">
        <h2 className="text-2xl font-bold uppercase text-center mb-2">Apply it</h2>
        <p className="text-center text-sm font-medium opacity-70 mb-6 max-w-2xl mx-auto">
          One prompt per step of the playbook above — copy, paste, and run it against your own idea.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {marketingAgents.map((agent) => (
            <RoleCard key={agent.id} role={agent} />
          ))}
        </div>
      </section>
    </div>
  );
}
