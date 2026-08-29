import Link from "next/link";
import PainPointsExplorer from "@/components/PainPointsExplorer";
import SiteHeader from "@/components/SiteHeader";
import { lastUpdated, painPointDomains } from "@/data/pain-points";

export default function PainPoints() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-6 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FF6B6B] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Researched, sourced, updated regularly
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Real pain points,
          <br />
          by domain.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          Not guessed — researched. Each pain point below is dug out of
          real developer forums, official docs, and industry reporting,
          with the sources linked so you can verify it yourself, plus the
          concrete startup angle it points toward.
        </p>
        <p className="text-xs font-bold uppercase opacity-60">
          Last updated: {lastUpdated}
        </p>
      </header>

      {/* Domain picker — only Marketplace Platforms is live for now */}
      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-3 pb-10">
        {painPointDomains.map((d) =>
          d.available ? (
            <span
              key={d.id}
              className="nb-border nb-shadow px-4 py-2 font-bold uppercase text-sm flex items-center gap-2 bg-[#111111] text-white"
            >
              <span>{d.emoji}</span>
              {d.name}
            </span>
          ) : (
            <span
              key={d.id}
              className="nb-border px-4 py-2 font-bold uppercase text-sm flex items-center gap-2 bg-white opacity-40"
            >
              <span>{d.emoji}</span>
              {d.name}
              <span className="text-[10px] bg-[#FFD400] text-black nb-border px-1.5 py-0.5">
                Soon
              </span>
            </span>
          )
        )}
      </div>

      <main className="w-full pb-12">
        <PainPointsExplorer />
      </main>

      <footer className="w-full max-w-3xl pb-16 flex flex-col items-center text-center gap-4">
        <div className="nb-border nb-shadow bg-[#FFF9E8] px-6 py-5 max-w-xl">
          <p className="font-bold uppercase text-sm mb-1">Ready to build on one of these?</p>
          <p className="text-sm font-medium opacity-80 mb-3">
            Every pain point above ends in a startup angle — take it to the
            Ideas Generator or Human Psyche map to sharpen it into a real
            concept.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/ideas-generator"
              className="nb-press nb-border nb-shadow inline-block px-5 py-2 font-bold uppercase text-sm bg-black text-white"
            >
              Ideas Generator →
            </Link>
            <Link
              href="/human-psyche"
              className="nb-press nb-border nb-shadow inline-block px-5 py-2 font-bold uppercase text-sm bg-white"
            >
              Human Psyche →
            </Link>
          </div>
        </div>
        <p className="text-xs font-medium opacity-50 max-w-xl">
          This page is updated on a rolling basis, not a live feed —
          treat it as a curated, sourced starting point. More domains
          (Fintech, Healthtech, Dev Tools) are planned; each pain point
          links directly to its sources so you can dig further yourself.
        </p>
      </footer>
    </div>
  );
}
