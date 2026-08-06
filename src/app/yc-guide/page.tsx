import RoleCard from "@/components/RoleCard";
import SiteHeader from "@/components/SiteHeader";
import YCGuideLogo from "@/components/YCGuideLogo";
import {
  applicationTips,
  bestPaths,
  fundingStats,
  notableCompanies,
  rfsCategories,
  ycIndustryAgents,
} from "@/data/yc-guide";

export default function YCGuide() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-8 flex flex-col items-center text-center gap-6">
        <YCGuideLogo />
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          What YC actually funds.
          <br />
          What to build next.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          An independent breakdown of Y Combinator's current thesis — the
          exact problem areas they've asked founders to tackle, where the
          money is actually going, what gets an application accepted, and
          copy-paste prompts to plan a business in the categories they're
          betting on right now.
        </p>
        <p className="text-xs font-bold uppercase opacity-50 max-w-xl">
          Independent analysis based on Y Combinator's public Requests for
          Startups and reporting on recent batches — not an official YC
          publication.
        </p>
      </header>

      {/* Funding stats */}
      <section className="w-full max-w-5xl pb-14">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">
          Where the money is going
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {fundingStats.map((s) => (
            <div
              key={s.id}
              className="nb-border nb-shadow bg-white p-4 flex flex-col gap-1"
            >
              <span className="text-3xl font-bold" style={{ color: "#FF6B6B" }}>
                {s.stat}
              </span>
              <span className="text-sm font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* RFS categories */}
      <section className="w-full max-w-5xl pb-14">
        <h2 className="text-2xl font-bold uppercase text-center mb-2">
          YC's Fall 2026 Requests for Startups
        </h2>
        <p className="text-center text-sm font-medium opacity-70 mb-6 max-w-2xl mx-auto">
          The 13 problem areas Y Combinator has publicly said it most wants
          founders to build in right now, each proposed by a YC partner or
          outside expert.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rfsCategories.map((rfs, i) => (
            <div key={rfs.id} className="nb-border nb-shadow bg-white p-5 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="nb-border bg-[#FFD400] w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <span className="font-bold uppercase text-sm">{rfs.title}</span>
              </div>
              <p className="text-sm font-medium">{rfs.summary}</p>
              <p className="text-xs font-bold uppercase opacity-50">
                — {rfs.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Notable companies */}
      <section className="w-full max-w-5xl pb-14">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">
          Who's already winning in these categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notableCompanies.map((c) => (
            <div
              key={c.name}
              className="nb-border bg-white p-4 flex flex-col gap-1"
              style={{ boxShadow: "3px 3px 0px 0px #111111" }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold uppercase text-sm">{c.name}</span>
                <span className="text-[10px] font-bold uppercase bg-[#4ECDC4] nb-border px-1.5 py-0.5">
                  {c.category}
                </span>
              </div>
              <p className="text-sm font-medium opacity-80">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best paths */}
      <section className="w-full max-w-5xl pb-14">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">
          The best paths right now
        </h2>
        <div className="flex flex-col gap-4">
          {bestPaths.map((p, i) => (
            <div key={p.id} className="nb-border nb-shadow bg-white p-5 flex gap-4">
              <span className="nb-border bg-black text-white w-9 h-9 flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <div>
                <p className="font-bold uppercase text-sm mb-1">{p.title}</p>
                <p className="text-sm font-medium">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application tips */}
      <section className="w-full max-w-5xl pb-14">
        <h2 className="text-2xl font-bold uppercase text-center mb-6">
          What actually gets an application in
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {applicationTips.map((t) => (
            <div key={t.title} className="nb-border bg-[#FFF9E8] p-4">
              <p className="font-bold uppercase text-sm mb-1">{t.title}</p>
              <p className="text-sm font-medium opacity-80">{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry prompts */}
      <section className="w-full max-w-5xl pb-16">
        <h2 className="text-2xl font-bold uppercase text-center mb-2">
          Prompts to plan and unlock users
        </h2>
        <p className="text-center text-sm font-medium opacity-70 mb-6 max-w-2xl mx-auto">
          One prompt per current YC thesis — copy, paste, and adapt to your
          idea to get a concrete plan and a first-users motion.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ycIndustryAgents.map((agent) => (
            <RoleCard key={agent.id} role={agent} />
          ))}
        </div>
      </section>

      <footer className="w-full max-w-5xl pb-12 flex flex-col items-center text-center gap-3">
        <div className="nb-border nb-shadow-lg bg-black text-white px-6 py-4 max-w-lg">
          <p className="text-xs opacity-70">
            Sourced from Y Combinator's public Requests for Startups
            (ycombinator.com/rfs) and public reporting on recent batches, as
            of August 2026. YC's list changes each season — check
            ycombinator.com/rfs directly before applying.
          </p>
        </div>
      </footer>
    </div>
  );
}
