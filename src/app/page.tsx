import SiteHeader from "@/components/SiteHeader";
import WorkflowExplorer from "@/components/WorkflowExplorer";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          From idea to launch
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Pick a business.
          <br />
          Walk the stages.
          <br />
          Copy every prompt.
        </h1>
        <p className="max-w-xl text-base sm:text-lg font-medium">
          A guided prompt playbook for building a company from scratch —
          Research, Validation, Planning, Design, Build, Launch, Growth.
          Each stage hands you the exact agent prompts to run it.
        </p>
      </header>

      <main className="w-full pb-16">
        <WorkflowExplorer />
      </main>

      <footer className="w-full max-w-5xl pb-12 flex flex-col items-center text-center gap-3">
        <div className="nb-border nb-shadow-lg bg-black text-white px-6 py-4 max-w-md">
          <p className="font-bold uppercase text-sm">
            Launching on Product Hunt soon 🚀
          </p>
          <p className="text-sm opacity-80 mt-1">
            Built to help every stage of a build — from research to
            growth — happen in minutes, not meetings.
          </p>
        </div>
      </footer>
    </div>
  );
}
