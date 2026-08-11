import Link from "next/link";
import RoleCard from "@/components/RoleCard";
import SiteHeader from "@/components/SiteHeader";
import {
  businessOutcomeLinks,
  cognitiveRules,
  corePrinciples,
  critiqueFramework,
  designAgents,
  designSprint,
  designSystemStructure,
  designTools,
  founderMistakes,
  onboardingFramework,
  uiChecklist,
  uxFlowSteps,
} from "@/data/design-function";

export default function DesignFunction() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-6 flex flex-col items-center text-center gap-5">
        <Link href="/functions" className="text-xs font-bold uppercase opacity-60 hover:underline">
          ← All functions
        </Link>
        <div className="nb-border nb-shadow bg-[#FF6B6B] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Function: Design
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Design, structured
          <br />
          like a real function.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          Not a mood board — the actual frameworks a design org runs on:
          principles, process, critique, systems, and where it connects to
          revenue. Read it once, then use the prompts to apply it.
        </p>
      </header>

      {/* Core principles */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">Core principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {corePrinciples.map((p) => (
            <div key={p.title} className="nb-border bg-white p-4" style={{ boxShadow: "3px 3px 0px 0px #111111" }}>
              <p className="font-bold uppercase text-sm mb-1">{p.title}</p>
              <p className="text-sm font-medium opacity-80">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cognitive rules */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">The cognitive load rules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cognitiveRules.map((r) => (
            <div key={r.title} className="nb-border bg-[#FFF9E8] p-4">
              <p className="font-bold uppercase text-sm mb-1">{r.title}</p>
              <p className="text-sm font-medium opacity-80">{r.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design sprint process */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-2">The design process</h2>
        <p className="text-center text-sm font-medium opacity-70 mb-6">The classic 5-day design sprint</p>
        <div className="flex flex-col gap-3">
          {designSprint.map((d) => (
            <div key={d.day} className="nb-border nb-shadow bg-white p-4 flex gap-4 items-start">
              <span className="nb-border bg-black text-white px-3 py-1 font-bold uppercase text-xs shrink-0">
                {d.day}
              </span>
              <div>
                <p className="font-bold uppercase text-sm mb-1">{d.focus}</p>
                <p className="text-sm font-medium opacity-80">{d.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UX Flow steps */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">The UX flow framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {uxFlowSteps.map((s, i) => (
            <div key={s.step} className="nb-border bg-white p-4">
              <p className="font-bold uppercase text-xs mb-1" style={{ color: "#4D96FF" }}>
                {i + 1}. {s.step}
              </p>
              <p className="text-sm font-medium">{s.question}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Onboarding framework */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">The first 5 minutes: onboarding</h2>
        <div className="flex flex-col gap-3">
          {onboardingFramework.map((o) => (
            <div key={o.screen} className="nb-border nb-shadow bg-white p-4">
              <p className="font-bold uppercase text-sm mb-1">{o.screen}</p>
              <p className="text-sm font-medium mb-1" style={{ color: "#FF6B6B" }}>
                {o.goal}
              </p>
              <p className="text-sm font-medium opacity-80">{o.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design system structure */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">What a real design system contains</h2>
        <div className="flex flex-col gap-3">
          {designSystemStructure.map((l) => (
            <div key={l.layer} className="nb-border bg-white p-4 flex gap-4">
              <span className="nb-border bg-[#6BCB77] px-3 py-1 font-bold uppercase text-xs shrink-0 h-fit">
                {l.layer}
              </span>
              <p className="text-sm font-medium">{l.contains}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Critique framework */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">The critique framework</h2>
        <div className="flex flex-col gap-3">
          {critiqueFramework.map((c, i) => (
            <div key={c.step} className="nb-border nb-shadow bg-white p-4 flex gap-4 items-start">
              <span className="nb-border bg-black text-white w-8 h-8 flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <div>
                <p className="font-bold uppercase text-sm mb-1">{c.step}</p>
                <p className="text-sm font-medium opacity-80 italic">{c.example}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UI checklist */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">The pre-ship checklist</h2>
        <div className="nb-border nb-shadow bg-white p-5 grid grid-cols-1 md:grid-cols-2 gap-2">
          {uiChecklist.map((item) => (
            <div key={item} className="flex items-start gap-2">
              <span className="nb-border bg-white w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                ✓
              </span>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Founder mistakes */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">Mistakes founders make with design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {founderMistakes.map((m) => (
            <div key={m.title} className="nb-border bg-white p-4" style={{ boxShadow: "3px 3px 0px 0px #111111" }}>
              <p className="font-bold uppercase text-sm mb-1">{m.title}</p>
              <p className="text-sm font-medium opacity-80">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business outcome links */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">How design connects to the business</h2>
        <div className="flex flex-col gap-3">
          {businessOutcomeLinks.map((b) => (
            <div key={b.title} className="nb-border nb-shadow bg-[#FFF9E8] p-4">
              <p className="font-bold uppercase text-sm mb-1">{b.title}</p>
              <p className="text-sm font-medium opacity-80">{b.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="w-full max-w-5xl pb-12">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">Tools of the trade</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {designTools.map((t) => (
            <div key={t.category} className="nb-border bg-white p-4">
              <p className="font-bold uppercase text-xs mb-1" style={{ color: "#B983FF" }}>
                {t.category}
              </p>
              <p className="text-sm font-medium">{t.tools}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prompts */}
      <section className="w-full max-w-5xl pb-16">
        <h2 className="text-2xl font-bold uppercase text-center mb-2">Apply it</h2>
        <p className="text-center text-sm font-medium opacity-70 mb-6 max-w-2xl mx-auto">
          One prompt per framework above — copy, paste, and run it against your own product.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {designAgents.map((agent) => (
            <RoleCard key={agent.id} role={agent} />
          ))}
        </div>
      </section>
    </div>
  );
}
