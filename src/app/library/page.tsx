import RoleCard from "@/components/RoleCard";
import SiteHeader from "@/components/SiteHeader";
import { roles } from "@/data/roles";

export default function Library() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Browse by role
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Pick a role.
          <br />
          Copy the prompt.
          <br />
          Start planning.
        </h1>
        <p className="max-w-xl text-base sm:text-lg font-medium">
          Every role on a build team — Product, Design, Engineering, QA,
          Leadership — gets a ready-made prompt to hand a requirement to
          their AI assistant and get straight to a real plan.
        </p>
      </header>

      <main className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
        {roles.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}
      </main>
    </div>
  );
}
