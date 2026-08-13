import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { industries } from "@/data/business-workflows";
import { WorkflowIcon } from "@/components/icons";

export default function BusinessWorkflows() {
  const liveCount = industries.filter((i) => i.status === "live").length;
  const total = industries.length;

  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-6 flex flex-col items-center text-center gap-5">
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
          Who touches a deal, what it costs, and where it breaks — for
          every industry, at three sizes of company: small, regional, and
          national. Depth-first: one industry fully mapped before the next
          begins.
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
        {industries.map((ind) =>
          ind.status === "live" ? (
            <Link
              key={ind.id}
              href={`/business-workflows/${ind.id}`}
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
              {ind.workflowIds && (
                <div className="flex items-center gap-1.5 pt-2 border-t border-black/10">
                  {ind.workflowIds.map((wfId) => (
                    <WorkflowIcon key={wfId} workflowId={wfId} size={26} />
                  ))}
                  <span className="text-[10px] font-bold uppercase opacity-40 ml-1">
                    {ind.workflowIds.length} workflows
                  </span>
                </div>
              )}
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
