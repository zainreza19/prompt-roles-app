import FounderArchiveLogo from "@/components/FounderArchiveLogo";
import RoleCard from "@/components/RoleCard";
import SiteHeader from "@/components/SiteHeader";
import {
  acquisitionChannels,
  archiveStats,
  caseStudies,
  founderArchiveAgents,
  frameworks,
  ideaPatterns,
  mistakesAndAdvice,
  toolGroups,
} from "@/data/founder-archive";

export default function FounderArchive() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-8 flex flex-col items-center text-center gap-6">
        <FounderArchiveLogo />
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Patterns from
          <br />
          thousands of founders.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          An independent distillation of Starter Story's founder-interview
          archive — the idea patterns, growth channels, tools, and named
          frameworks that keep showing up across real SaaS and mobile app
          case studies — plus prompts to apply each one to your own idea.
        </p>
        <p className="text-xs font-bold uppercase opacity-50 max-w-xl">
          Independent research summary, not affiliated with or published by
          Starter Story. See sources at the bottom of this page.
        </p>
      </header>

      {/* Stats */}
      <section className="w-full max-w-5xl pb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {archiveStats.map((s) => (
            <div key={s.id} className="nb-border nb-shadow bg-white p-4 flex flex-col gap-1">
              <span className="text-3xl font-bold" style={{ color: "#4D96FF" }}>
                {s.stat}
              </span>
              <span className="text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Idea patterns */}
      <section className="w-full max-w-5xl pb-14">
        <h2 className="text-2xl font-bold uppercase text-center mb-2">
          Where real ideas actually come from
        </h2>
        <p className="text-center text-sm font-medium opacity-70 mb-6 max-w-2xl mx-auto">
          Six patterns that keep recurring across founder interviews.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ideaPatterns.map((p) => (
            <div key={p.id} className="nb-border nb-shadow bg-white p-5 flex flex-col gap-2">
              <p className="font-bold uppercase text-sm">{p.title}</p>
              <p className="text-sm font-medium">{p.description}</p>
              <p className="text-xs font-bold uppercase opacity-50">{p.examples}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Acquisition channels */}
      <section className="w-full max-w-5xl pb-14">
        <h2 className="text-2xl font-bold uppercase text-center mb-2">
          How they actually got first customers
        </h2>
        <p className="text-center text-sm font-medium opacity-70 mb-6 max-w-2xl mx-auto">
          The channels that repeat across hundreds of case studies — most had nothing to do with paid ads.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {acquisitionChannels.map((c) => (
            <div key={c.id} className="nb-border nb-shadow bg-white p-5 flex flex-col gap-2">
              <p className="font-bold uppercase text-sm">{c.title}</p>
              <p className="text-sm font-medium">{c.description}</p>
              <p className="text-xs font-bold uppercase opacity-50">{c.examples}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Named frameworks */}
      <section className="w-full max-w-5xl pb-14">
        <h2 className="text-2xl font-bold uppercase text-center mb-2">
          Named frameworks worth stealing
        </h2>
        <p className="text-center text-sm font-medium opacity-70 mb-6 max-w-2xl mx-auto">
          Not just anecdotes — actual repeatable methods.
        </p>
        <div className="flex flex-col gap-5">
          {frameworks.map((f) => (
            <div key={f.id} className="nb-border nb-shadow bg-[#FFF9E8] p-5">
              <p className="font-bold uppercase text-base">{f.name}</p>
              <p className="text-xs font-bold uppercase opacity-50 mb-2">{f.source}</p>
              <p className="text-sm font-medium mb-3">{f.summary}</p>
              <ol className="list-decimal list-inside flex flex-col gap-1">
                {f.steps.map((s, i) => (
                  <li key={i} className="text-sm font-medium">
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Mistakes and advice */}
      <section className="w-full max-w-5xl pb-14">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">
          Mistakes that repeat the most
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mistakesAndAdvice.map((m) => (
            <div key={m.title} className="nb-border bg-white p-4" style={{ boxShadow: "3px 3px 0px 0px #111111" }}>
              <p className="font-bold uppercase text-sm mb-1">{m.title}</p>
              <p className="text-sm font-medium opacity-80">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="w-full max-w-5xl pb-14">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">
          Tools that keep showing up
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {toolGroups.map((t) => (
            <div key={t.category} className="nb-border bg-white p-4">
              <p className="font-bold uppercase text-xs mb-1" style={{ color: "#FF6B6B" }}>
                {t.category}
              </p>
              <p className="text-sm font-medium">{t.tools}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="w-full max-w-5xl pb-14">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">
          12 stories worth knowing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((c) => (
            <div
              key={c.name}
              className="nb-border bg-white p-4 flex flex-col gap-1"
              style={{ boxShadow: "3px 3px 0px 0px #111111" }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold uppercase text-sm">{c.name}</span>
                <span className="text-[10px] font-bold uppercase bg-[#FFD400] nb-border px-1.5 py-0.5">
                  {c.category}
                </span>
              </div>
              <p className="text-sm font-medium opacity-80">{c.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prompts */}
      <section className="w-full max-w-5xl pb-16">
        <h2 className="text-2xl font-bold uppercase text-center mb-2">
          Apply it to your own idea
        </h2>
        <p className="text-center text-sm font-medium opacity-70 mb-6 max-w-2xl mx-auto">
          One prompt per pattern above — copy, paste, and run it against your own idea.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {founderArchiveAgents.map((agent) => (
            <RoleCard key={agent.id} role={agent} />
          ))}
        </div>
      </section>

      <footer className="w-full max-w-5xl pb-12 flex flex-col items-center text-center gap-3">
        <div className="nb-border nb-shadow-lg bg-black text-white px-6 py-4 max-w-lg">
          <p className="text-xs opacity-70">
            Synthesized from Starter Story's public case studies, guides, and
            growth-channel breakdowns (starterstory.com), plus public
            reporting on its own growth, as of August 2026. Figures like
            revenue and follower counts are as reported at time of interview
            and may be dated. This page is independent analysis, not
            published or endorsed by Starter Story.
          </p>
        </div>
      </footer>
    </div>
  );
}
