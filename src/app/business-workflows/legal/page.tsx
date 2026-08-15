import SiteHeader from "@/components/SiteHeader";
import BusinessWorkflowsExplorer from "@/components/BusinessWorkflowsExplorer";
import { legalWorkflows } from "@/data/industries/legal";

export default function LegalWorkflows() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-4xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Industry 09 · Legal Services
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Legal Services
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          Litigation, deals, billing, and compliance all run completely
          differently at a solo practitioner's office than at a Big Law
          firm running a billion-dollar merger. Pick a workflow, then step
          through Tier A → B → C to see how the actual work changes.
        </p>
      </header>

      <main className="w-full pb-16">
        <BusinessWorkflowsExplorer workflows={legalWorkflows} />
      </main>
    </div>
  );
}
