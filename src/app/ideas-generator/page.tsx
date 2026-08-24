import SiteHeader from "@/components/SiteHeader";
import { startupIdeas } from "@/data/ideas-generator";

function ycFitColor(fit: string) {
  if (fit === "Strong") return "#6BCB77";
  if (fit === "Possible") return "#FFD400";
  return "#FF6B6B";
}

function competitivenessColor(level: string) {
  if (level === "Low") return "#6BCB77";
  if (level === "Medium") return "#FFD400";
  return "#FF6B6B";
}

export default function IdeasGenerator() {
  return (
    <div className="flex-1 flex flex-col items-center px-4 sm:px-8">
      <SiteHeader />

      <header className="w-full max-w-6xl pt-8 pb-8 flex flex-col items-center text-center gap-5">
        <div className="nb-border nb-shadow bg-[#FFD400] px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
          Manually curated, updated weekly
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight leading-[1.05]">
          Ideas, synthesized
          <br />
          from everything above.
        </h1>
        <p className="max-w-2xl text-base sm:text-lg font-medium">
          Every row here combines a pattern from the YC Guide, Founder
          Archive, or a business-type playbook into one concrete idea —
          scored for distribution ease and YC fit so you can scan for what's
          actually worth researching next.
        </p>
        <p className="text-xs font-bold uppercase opacity-50 max-w-xl">
          Not auto-generated. This list is hand-updated roughly weekly, not
          a live feed — treat it as a curated starting point, not a
          real-time database.
        </p>
      </header>

      <main className="w-full max-w-6xl pb-16">
        <div className="nb-border nb-shadow bg-white overflow-x-auto">
          <table className="w-full border-collapse text-sm" style={{ minWidth: "2100px" }}>
            <thead>
              <tr className="bg-[#111111] text-white">
                <th className="text-left font-bold uppercase p-3 border-r-2 border-white/20 min-w-[160px]">Idea</th>
                <th className="text-left font-bold uppercase p-3 border-r-2 border-white/20 min-w-[220px]">Description</th>
                <th className="text-left font-bold uppercase p-3 border-r-2 border-white/20 min-w-[220px]">User Story</th>
                <th className="text-left font-bold uppercase p-3 border-r-2 border-white/20 min-w-[260px]">Press Release</th>
                <th className="text-left font-bold uppercase p-3 border-r-2 border-white/20 min-w-[180px]">Target Audience</th>
                <th className="text-left font-bold uppercase p-3 border-r-2 border-white/20 min-w-[200px]">Market Size</th>
                <th className="text-left font-bold uppercase p-3 border-r-2 border-white/20 min-w-[220px]">Who's Already Working On This</th>
                <th className="text-left font-bold uppercase p-3 border-r-2 border-white/20 min-w-[130px]">Competitiveness</th>
                <th className="text-left font-bold uppercase p-3 border-r-2 border-white/20 min-w-[110px]">Distribution</th>
                <th className="text-left font-bold uppercase p-3 border-r-2 border-white/20 min-w-[200px]">Best Channel</th>
                <th className="text-left font-bold uppercase p-3 border-r-2 border-white/20 min-w-[100px]">YC Fit</th>
                <th className="text-left font-bold uppercase p-3 border-r-2 border-white/20 min-w-[150px]">Business Type</th>
                <th className="text-left font-bold uppercase p-3 min-w-[220px]">Source / Pattern</th>
              </tr>
            </thead>
            <tbody>
              {startupIdeas.map((row, i) => (
                <tr
                  key={row.id}
                  className="border-t-2 border-black align-top"
                  style={{ background: i % 2 === 0 ? "#ffffff" : "#FFF9E8" }}
                >
                  <td className="p-3 border-r-2 border-black font-bold">{row.idea}</td>
                  <td className="p-3 border-r-2 border-black font-medium">{row.description}</td>
                  <td className="p-3 border-r-2 border-black font-medium">{row.userStory}</td>
                  <td className="p-3 border-r-2 border-black font-medium italic">{row.pressRelease}</td>
                  <td className="p-3 border-r-2 border-black font-medium">{row.targetAudience}</td>
                  <td className="p-3 border-r-2 border-black font-medium">{row.marketSize}</td>
                  <td className="p-3 border-r-2 border-black font-medium">{row.competitors}</td>
                  <td className="p-3 border-r-2 border-black">
                    <span
                      className="nb-border px-2 py-0.5 font-bold text-xs whitespace-nowrap"
                      style={{ background: competitivenessColor(row.competitiveness) }}
                    >
                      {row.competitiveness}
                    </span>
                  </td>
                  <td className="p-3 border-r-2 border-black">
                    <span className="nb-border px-2 py-0.5 font-bold text-xs bg-[#111111] text-white whitespace-nowrap">
                      {row.distributionEase}/5
                    </span>
                  </td>
                  <td className="p-3 border-r-2 border-black font-medium">{row.bestChannel}</td>
                  <td className="p-3 border-r-2 border-black">
                    <span
                      className="nb-border px-2 py-0.5 font-bold text-xs whitespace-nowrap"
                      style={{ background: ycFitColor(row.ycFit) }}
                    >
                      {row.ycFit}
                    </span>
                  </td>
                  <td className="p-3 border-r-2 border-black font-medium">{row.businessType}</td>
                  <td className="p-3 font-medium text-xs opacity-70">{row.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="w-full max-w-5xl pb-12 flex flex-col items-center text-center gap-3">
        <div className="nb-border nb-shadow-lg bg-black text-white px-6 py-4 max-w-lg">
          <p className="text-xs opacity-70">
            Market size figures are directional, pulled from public market
            research where a clean category exists — several niches here
            (productized services, async coaching, emerging categories like
            "small software cloud") have no single sizing source, and that's
            noted in the cell rather than invented. Distribution ease uses
            the same 1-5 scale as the Research Methods page. YC Fit reflects
            whether the idea maps to a current publicly stated YC thesis,
            not a guarantee of acceptance. Last updated August 25, 2026.
          </p>
        </div>
      </footer>
    </div>
  );
}
