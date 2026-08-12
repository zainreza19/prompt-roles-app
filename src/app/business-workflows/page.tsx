import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { industries } from "@/data/business-workflows";

export default function BusinessWorkflows() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#4ECDC4] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Study guide, not a tool
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          How work actually
          <br />
          moves through an
          <br />
          industry.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          Origination to close, the people who touch a deal, what it costs,
          and where it breaks — for every industry, split into three
          company tiers: A (small / independent), B (regional / mid-size),
          and C (national / institutional). Depth-first: one industry fully
          mapped before the next begins.
        </p>
      </header>

      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-5 pb-16">
        {industries.map((ind) =>
          ind.status === "live" ? (
            <Link
              key={ind.id}
              href={`/business-workflows/${ind.id}`}
              className="nb-press nb-border nb-shadow bg-white p-5 flex items-center gap-4"
            >
              <span className="text-3xl leading-none">{ind.emoji}</span>
              <span className="flex-1">
                <span className="block text-lg font-bold uppercase tracking-tight">
                  {ind.name}
                </span>
                <span className="block text-sm font-medium opacity-70">
                  {ind.tagline}
                </span>
              </span>
            </Link>
          ) : (
            <div
              key={ind.id}
              className="nb-border bg-white p-5 flex items-center gap-4 opacity-40"
            >
              <span className="text-3xl leading-none">{ind.emoji}</span>
              <span className="flex-1">
                <span className="block text-lg font-bold uppercase tracking-tight">
                  {ind.name}
                </span>
              </span>
              <span className="text-[10px] font-bold uppercase bg-[#FFD400] text-black nb-border px-1.5 py-0.5 shrink-0">
                Soon
              </span>
            </div>
          )
        )}
      </main>
    </div>
  );
}
