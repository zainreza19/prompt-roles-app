import SiteHeader from "@/components/SiteHeader";
import BusinessWorkflowsExplorer from "@/components/BusinessWorkflowsExplorer";
import { realEstateWorkflows } from "@/data/business-workflows";

export default function RealEstateWorkflows() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-4xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Industry 01 · Real Estate
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Real Estate
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          Real estate isn&apos;t one workflow — it&apos;s five, and a
          company&apos;s tier changes each one almost beyond recognition.
          Pick a workflow type below, then step through Tier A → B → C to
          see how the same category of deal is actually run at different
          scales.
        </p>
      </header>

      <main className="w-full pb-16">
        <BusinessWorkflowsExplorer workflows={realEstateWorkflows} />
      </main>
    </div>
  );
}
