import SiteHeader from "@/components/SiteHeader";
import BusinessWorkflowsExplorer from "@/components/BusinessWorkflowsExplorer";
import { technologyWorkflows } from "@/data/industries/technology";

export default function TechnologyWorkflows() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-4xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Industry 03 · Technology / SaaS
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Technology / SaaS
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          A solo founder shipping code with AI tools and a hyperscaler with
          thousands of engineers are running the same four jobs — building
          product, selling it, keeping customers, and raising money — at
          wildly different scale. Pick a workflow, then step through Tier
          A → B → C to see exactly what changes.
        </p>
      </header>

      <main className="w-full pb-16">
        <BusinessWorkflowsExplorer workflows={technologyWorkflows} />
      </main>
    </div>
  );
}
