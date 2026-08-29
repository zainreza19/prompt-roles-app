import Link from "next/link";
import HumanPsycheExplorer from "@/components/HumanPsycheExplorer";
import SiteHeader from "@/components/SiteHeader";

export default function HumanPsyche() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-5xl pt-8 pb-6 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#B983FF] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          The desire underneath every idea
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Every product serves
          <br />
          a human desire.
          <br />
          Find out which.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          7 core human desires, drilled down into the specific sub-desires
          and everyday expressions underneath them — click a desire, then
          click again to go deeper. Each one ends in a concrete startup
          angle, so you leave with more than self-knowledge.
        </p>
      </header>

      {/* How to read the research notes — up front, not buried */}
      <div className="w-full max-w-4xl pb-10">
        <div className="nb-border nb-shadow-lg bg-black text-white p-5">
          <p className="font-bold uppercase text-sm mb-2">🔬 How to read the research notes</p>
          <p className="text-sm opacity-85 leading-relaxed">
            Some desires below include a note on where behavioral-science
            research (evolutionary psychology, mate-preference studies,
            stress-response research) finds an average difference between
            men and women. Every one of these is a <strong>population-level
            tendency with large overlap between the sexes</strong> — not a
            rule for any individual. Individual personality, culture, and
            circumstance explain far more than sex does. Use these as
            sharper lenses for thinking about an audience, never as a
            claim about any one person.
          </p>
        </div>
      </div>

      <main className="w-full pb-12">
        <HumanPsycheExplorer />
      </main>

      <footer className="w-full max-w-3xl pb-16 flex flex-col items-center text-center gap-4">
        <div className="nb-border nb-shadow bg-[#FFF9E8] px-6 py-5 max-w-xl">
          <p className="font-bold uppercase text-sm mb-1">
            Found a desire that clicked?
          </p>
          <p className="text-sm font-medium opacity-80 mb-3">
            The Ideas Generator has concrete startup ideas — see which
            desire each one is really selling, or use what you found here
            to sharpen your own.
          </p>
          <Link
            href="/ideas-generator"
            className="nb-press nb-border nb-shadow inline-block px-5 py-2 font-bold uppercase text-sm bg-black text-white"
          >
            Go to Ideas Generator →
          </Link>
        </div>

        <p className="text-xs font-medium opacity-50 max-w-xl">
          Frameworks referenced: Kenrick, Neuberg, Griskevicius & Schaller
          (2010) on fundamental human motives; Buss (1989) on mate
          preferences across 37 cultures; Trivers (1972) on Parental
          Investment Theory; Hawley (1999) on Resource Control Theory;
          Taylor et al. (2000) on tend-and-befriend stress responses; and
          Deci & Ryan's Self-Determination Theory.
        </p>
      </footer>
    </div>
  );
}
