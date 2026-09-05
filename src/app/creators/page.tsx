import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { creatorIndustries } from "@/data/creators";
import { creatorsByIndustry } from "@/data/creators/index";

export default function CreatorsIndex() {
  const liveCount = creatorIndustries.filter((i) => i.status === "live").length;
  const total = creatorIndustries.length;

  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-6 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#4ECDC4] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Distribution, not discovery
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Find the creators
          <br />
          who reach your
          <br />
          exact buyer.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          Ten Mega, ten Macro, and ten Micro creators per industry — a
          starting list of real people to pitch for reviews, sponsorships,
          and newsletter mentions. Verify before outreach; expand it as you
          learn who actually converts.
        </p>

        <div className="flex items-center gap-3 mt-1">
          <div className="flex gap-1" aria-hidden="true">
            {Array.from({ length: total }).map((_, i) => (
              <span
                key={i}
                className="nb-border w-4 h-4"
                style={{ background: i < liveCount ? "#FFD400" : "#ffffff" }}
              />
            ))}
          </div>
          <span className="text-xs font-bold uppercase opacity-60">
            {liveCount} of {total} industries mapped
          </span>
        </div>
      </header>

      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-5 pb-16">
        {creatorIndustries.map((ind) => {
          const list = creatorsByIndustry[ind.id] ?? [];
          const count = list.length;
          return ind.status === "live" ? (
            <Link
              key={ind.id}
              href={`/creators/${ind.id}`}
              className="nb-press nb-border nb-shadow bg-white p-5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl leading-none">{ind.emoji}</span>
                <span className="flex-1">
                  <span className="block text-lg font-bold uppercase tracking-tight">
                    {ind.name}
                  </span>
                  <span className="block text-sm font-medium opacity-70">
                    {ind.blurb}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 pt-2 border-t border-black/10">
                <span className="text-[10px] font-bold uppercase bg-[#FFD400] nb-border px-1.5 py-0.5">
                  {count} creators
                </span>
              </div>
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
          );
        })}
      </main>
    </div>
  );
}
