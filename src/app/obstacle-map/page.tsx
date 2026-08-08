import ObstacleMapExplorer from "@/components/ObstacleMapExplorer";
import ObstacleMapLogo from "@/components/ObstacleMapLogo";
import RoleCard from "@/components/RoleCard";
import SiteHeader from "@/components/SiteHeader";
import { obstacleAgents } from "@/data/obstacle-map";

export default function ObstacleMap() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-8 flex flex-col items-center text-center gap-6">
        <ObstacleMapLogo />
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          You&apos;re not failing.
          <br />
          You&apos;re at a stage.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          Pick the stage you're stuck at. See real, documented founders —
          famous and indie — who hit this exact wall, how bad it got, and
          what actually got them through it. The obstacle isn't a verdict.
          It's a waypoint almost everyone passes.
        </p>
      </header>

      <main className="w-full pb-16">
        <ObstacleMapExplorer />
      </main>

      <section className="w-full max-w-5xl pb-16">
        <h2 className="text-2xl font-bold uppercase text-center mb-2">
          Stuck right now? Reframe it.
        </h2>
        <p className="text-center text-sm font-medium opacity-70 mb-6 max-w-2xl mx-auto">
          Paste what's happening and get an honest read — is this the normal
          version of this stage, or a real signal to change course.
        </p>
        <div className="grid grid-cols-1 max-w-xl mx-auto">
          {obstacleAgents.map((agent) => (
            <RoleCard key={agent.id} role={agent} />
          ))}
        </div>
      </section>

      <footer className="w-full max-w-5xl pb-12 flex flex-col items-center text-center gap-3">
        <div className="nb-border nb-shadow-lg bg-black text-white px-6 py-4 max-w-lg">
          <p className="text-xs opacity-70">
            Stories are drawn from public interviews, articles, and founder
            accounts, cited where sourced. Some widely-repeated startup
            stories get exaggerated over time — where that's the case, we've
            noted it rather than repeating the myth.
          </p>
        </div>
      </footer>
    </div>
  );
}
