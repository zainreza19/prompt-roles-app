import Link from "next/link";
import ResearchMethodsExplorer from "@/components/ResearchMethodsExplorer";
import SiteHeader from "@/components/SiteHeader";

export default function ResearchMethods() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          For founders keeping the day job
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Research methods
          <br />
          that fit your life.
        </h1>
        <p className="max-w-xl text-base sm:text-lg font-medium">
          Every method here is ranked by how easily it becomes a real
          distribution channel later — not just a way to learn something.
          Filter by what you can actually do: remote and async, or in
          person on a schedule.
        </p>
        <p className="text-xs font-bold uppercase opacity-60 max-w-md">
          Ready to actually build a waitlist, not just test one method? The{" "}
          <Link href="/functions/marketing" className="underline">
            Marketing function
          </Link>{" "}
          has the full pre-launch demand playbook — mechanics, real case
          studies, and channel fit.
        </p>
      </header>

      <main className="w-full pb-16">
        <ResearchMethodsExplorer />
      </main>
    </div>
  );
}
