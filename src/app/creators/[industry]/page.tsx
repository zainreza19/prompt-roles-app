import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import CreatorsExplorer from "@/components/CreatorsExplorer";
import { creatorIndustries } from "@/data/creators";
import { creatorsByIndustry } from "@/data/creators/index";

export function generateStaticParams() {
  return creatorIndustries
    .filter((i) => i.status === "live")
    .map((i) => ({ industry: i.id }));
}

export default async function CreatorIndustryPage(
  props: PageProps<"/creators/[industry]">
) {
  const { industry } = await props.params;
  const ind = creatorIndustries.find((i) => i.id === industry);
  const creators = creatorsByIndustry[industry];

  if (!ind || ind.status !== "live" || !creators) {
    notFound();
  }

  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-4xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <Link
          href="/creators"
          className="text-xs font-bold uppercase opacity-50 hover:opacity-100 hover:underline"
        >
          ← All industries
        </Link>
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide flex items-center gap-2">
          <span>{ind.emoji}</span>
          {ind.name}
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight leading-[1.05]">
          {ind.name}
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          {ind.blurb}
        </p>
      </header>

      <main className="w-full pb-16">
        <CreatorsExplorer creators={creators} />
      </main>
    </div>
  );
}
