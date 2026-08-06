import RoleCard from "@/components/RoleCard";
import { roles } from "@/data/roles";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <header className="w-full max-w-5xl pt-10 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Built for shipping MVPs fast
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Pick a role.
          <br />
          Copy the prompt.
          <br />
          Start planning.
        </h1>
        <p className="max-w-xl text-base sm:text-lg font-medium">
          PromptRoles gives every person on a build team — Product, Design,
          Engineering, QA, Leadership — a ready-made prompt to hand a
          requirement to their AI assistant and get straight to a real plan.
          No blank page. No prompt engineering. Just copy, paste, go.
        </p>
      </header>

      <main className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
        {roles.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}
      </main>

      <footer className="w-full max-w-5xl pb-12 flex flex-col items-center text-center gap-3">
        <div className="nb-border nb-shadow-lg bg-black text-white px-6 py-4 max-w-md">
          <p className="font-bold uppercase text-sm">
            Launching on Product Hunt soon 🚀
          </p>
          <p className="text-sm opacity-80 mt-1">
            Built to help every role understand the requirement and start
            planning in minutes, not meetings.
          </p>
        </div>
      </footer>
    </div>
  );
}
