import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { businessFunctions } from "@/data/functions";

export default function Functions() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Knowledge + prompts, per function
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Every function a
          <br />
          real business needs.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          A successful business isn't just "the idea" — it needs Design,
          Engineering, Marketing, Sales, Finance, and more, all working.
          Each function here has real, structured knowledge plus prompts
          to apply it, so you're not guessing at what "good" looks like.
        </p>
        <p className="text-xs font-bold uppercase opacity-60 max-w-md">
          Just need one quick prompt instead of the full framework? Try the{" "}
          <Link href="/library" className="underline">
            Prompt Library
          </Link>
          .
        </p>
      </header>

      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-5 pb-16">
        {businessFunctions.map((fn) =>
          fn.available ? (
            <Link
              key={fn.id}
              href={`/functions/${fn.id}`}
              className="nb-press nb-border nb-shadow bg-white p-5 flex items-center gap-4"
            >
              <span className="text-3xl leading-none">{fn.emoji}</span>
              <span className="flex-1">
                <span className="block text-lg font-bold uppercase tracking-tight">
                  {fn.name}
                </span>
                <span className="block text-sm font-medium opacity-70">
                  {fn.tagline}
                </span>
              </span>
            </Link>
          ) : (
            <div
              key={fn.id}
              className="nb-border bg-white p-5 flex items-center gap-4 opacity-40"
            >
              <span className="text-3xl leading-none">{fn.emoji}</span>
              <span className="flex-1">
                <span className="block text-lg font-bold uppercase tracking-tight">
                  {fn.name}
                </span>
                <span className="block text-sm font-medium opacity-70">
                  {fn.tagline}
                </span>
              </span>
              <span className="text-[10px] font-bold uppercase bg-[#FFD400] text-black nb-border px-1.5 py-0.5 shrink-0">
                Soon
              </span>
            </div>
          )
        )}
      </main>
    </div>
  );
}
