import SiteHeader from "@/components/SiteHeader";
import BusinessWorkflowsExplorer from "@/components/BusinessWorkflowsExplorer";
import { manufacturingWorkflows } from "@/data/industries/manufacturing";

export default function ManufacturingWorkflows() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-4xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Industry 07 · Manufacturing
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Manufacturing
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          Designing, building, quality-checking, and sourcing for a product
          looks completely different at a 2-person job shop than at Boeing
          — same four jobs, radically different machinery underneath. Pick
          a workflow, then step through Tier A → B → C.
        </p>
      </header>

      <main className="w-full pb-16">
        <BusinessWorkflowsExplorer workflows={manufacturingWorkflows} />
      </main>
    </div>
  );
}
