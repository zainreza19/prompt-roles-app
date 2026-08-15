import SiteHeader from "@/components/SiteHeader";
import BusinessWorkflowsExplorer from "@/components/BusinessWorkflowsExplorer";
import { logisticsWorkflows } from "@/data/industries/logistics";

export default function LogisticsWorkflows() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-4xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Industry 08 · Logistics &amp; Supply Chain
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Logistics &amp; Supply Chain
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          Moving goods by truck, warehousing them, getting them to a
          doorstep, and planning the whole network look totally different
          at an owner-operator's one truck versus UPS's national fleet.
          Pick a workflow, then step through Tier A → B → C.
        </p>
      </header>

      <main className="w-full pb-16">
        <BusinessWorkflowsExplorer workflows={logisticsWorkflows} />
      </main>
    </div>
  );
}
