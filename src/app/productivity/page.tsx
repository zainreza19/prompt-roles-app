import RoleCard from "@/components/RoleCard";
import SiteHeader from "@/components/SiteHeader";
import { productivityRoles } from "@/data/productivity";

export default function Productivity() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Productivity
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Turn the noise of
          <br />
          the job into output.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          The unglamorous middle of the job — messy transcripts, half-baked
          designs, and a backlog that needs owning — is where the most time
          gets lost. These prompts are built for exactly that grind, by role.
        </p>
      </header>

      {/* Prompts */}
      <section className="w-full max-w-5xl pb-6">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase text-center mb-2">
          Prompts
        </h2>
        <p className="text-center text-sm font-medium opacity-70 mb-10 max-w-2xl mx-auto">
          Pick your role, then the moment in your workflow you're in —
          fresh off a call, staring at a design, or about to write tickets.
        </p>

        <div className="flex flex-col gap-16">
          {productivityRoles.map((role) => (
            <div key={role.id} className="flex flex-col gap-8">
              <div
                className="nb-border nb-shadow flex items-center gap-4 p-5"
                style={{ background: role.color }}
              >
                <span className="text-4xl leading-none">{role.emoji}</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">
                    {role.name}
                  </h3>
                  <p className="text-sm font-medium opacity-80">
                    {role.tagline}
                  </p>
                </div>
              </div>

              {role.categories.map((category) => {
                const prompts = role.prompts.filter(
                  (p) => p.category === category
                );
                if (prompts.length === 0) return null;
                return (
                  <div key={category} className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-wide bg-black text-white px-2.5 py-1 nb-border">
                        {category}
                      </span>
                      <span className="flex-1 h-[3px] bg-black" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {prompts.map((prompt) => (
                        <RoleCard key={prompt.id} role={prompt} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
