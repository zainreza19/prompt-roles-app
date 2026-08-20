import SiteHeader from "@/components/SiteHeader";
import RoleCard from "@/components/RoleCard";
import { creativityPrompts } from "@/data/creativity";

export default function Creativity() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#B983FF] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          20 directions, one app idea
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Stop getting the
          <br />
          same design back.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          Asking an AI for &ldquo;an iPhone app design&rdquo; gets you the same
          safe, generic screen every time. Each card below locks in a
          different visual language — Neubrutalist, Glassmorphism, Editorial,
          Vaporwave, Fintech Dashboard, and 15 more — paired with its own
          specific font combination. Pick one, paste in your app, and get a
          genuinely distinct concept back. Run a few side by side to find the
          design personality that actually fits your product.
        </p>
      </header>

      <main className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
        {creativityPrompts.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}
      </main>
    </div>
  );
}
