import SiteHeader from "@/components/SiteHeader";
import BusinessWorkflowsExplorer from "@/components/BusinessWorkflowsExplorer";
import { healthcareWorkflows } from "@/data/industries/healthcare";

export default function HealthcareWorkflows() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-4xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Industry 04 · Healthcare
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Healthcare
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          Getting diagnosed, getting billed, getting insured, and getting a
          drug approved are four completely different machines running
          side by side — each one shaped almost beyond recognition by
          whether you're a solo clinic or a national system. Pick a
          workflow, then step through Tier A → B → C.
        </p>
      </header>

      <main className="w-full pb-16">
        <BusinessWorkflowsExplorer workflows={healthcareWorkflows} />
      </main>
    </div>
  );
}
