import SiteHeader from "@/components/SiteHeader";
import BusinessWorkflowsExplorer from "@/components/BusinessWorkflowsExplorer";
import { tradesWorkflows } from "@/data/business-workflows";

export default function TradesWorkflows() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-4xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Industry 02 · Trades / Home Services
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Trades / Home Services
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          Electricians, plumbers, and HVAC technicians run five genuinely
          different businesses under one license — a service call, an
          installation job, a commercial contract, an emergency dispatch,
          and a subscription. Pick a workflow type below, then step through
          Tier A → B → C to see how the software stack, the pricing, and
          the failure points all change with scale.
        </p>
      </header>

      <main className="w-full pb-16">
        <BusinessWorkflowsExplorer workflows={tradesWorkflows} />
      </main>
    </div>
  );
}
