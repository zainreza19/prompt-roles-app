import SiteHeader from "@/components/SiteHeader";
import NicheExplorer from "@/components/NicheExplorer";

export default function NicheExplorerPage() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#6BCB77] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Pick a niche. Commit. Stop second-guessing.
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Niche Market
          <br />
          Explorer
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          Log every niche idea — for Tehvaar, Silikos, or anything personal — and
          score it against Hormozi&apos;s four variables: Pain, Purchasing Power,
          Targetability, Growth. Compare options, then mark one Committed and stop
          re-litigating the decision.
        </p>
      </header>

      <main className="w-full pb-16">
        <NicheExplorer />
      </main>
    </div>
  );
}
