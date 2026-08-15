import SiteHeader from "@/components/SiteHeader";
import BusinessWorkflowsExplorer from "@/components/BusinessWorkflowsExplorer";
import { financialServicesWorkflows } from "@/data/industries/financial-services";

export default function FinancialServicesWorkflows() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-4xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Industry 05 · Financial Services
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Financial Services
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          Every card swipe, mortgage, retirement account, and insurance
          claim runs through a machine that looks completely different at
          a community bank than it does at JPMorgan or Visa. Pick a
          workflow, then step through Tier A → B → C to see the actual
          mechanics.
        </p>
      </header>

      <main className="w-full pb-16">
        <BusinessWorkflowsExplorer workflows={financialServicesWorkflows} />
      </main>
    </div>
  );
}
