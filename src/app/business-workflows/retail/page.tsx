import SiteHeader from "@/components/SiteHeader";
import BusinessWorkflowsExplorer from "@/components/BusinessWorkflowsExplorer";
import { retailWorkflows } from "@/data/industries/retail";

export default function RetailWorkflows() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-4xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Industry 06 · Retail / E-commerce
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Retail / E-commerce
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          Deciding what to sell, running the store, and getting product to
          the customer look nothing alike at a solo Etsy shop versus a
          national chain versus Amazon. Pick a workflow, then step through
          Tier A → B → C to see how the same business actually scales.
        </p>
      </header>

      <main className="w-full pb-16">
        <BusinessWorkflowsExplorer workflows={retailWorkflows} />
      </main>
    </div>
  );
}
