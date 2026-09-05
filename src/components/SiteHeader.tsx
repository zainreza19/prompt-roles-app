import Link from "next/link";

function NavGroup({
  label,
  color,
  links,
}: {
  label: string;
  color: string;
  links: { href: string; label: string }[];
}) {
  return (
    <details className="relative group">
      <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer px-3 py-1.5 flex items-center gap-1.5 hover:underline">
        {label}
        <span className="text-[9px] opacity-50 group-open:rotate-180 transition-transform">
          ▾
        </span>
      </summary>
      <div
        className="absolute left-0 top-[calc(100%+8px)] nb-border nb-shadow bg-white min-w-[210px] flex flex-col p-1.5 z-20"
        style={{ borderTopColor: color, borderTopWidth: "4px" }}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="px-3 py-2 text-left normal-case font-bold text-sm hover:bg-[#FFF9E8] whitespace-nowrap"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export default function SiteHeader() {
  return (
    <div className="w-full flex justify-center pt-6">
      <nav className="nb-border nb-shadow bg-white px-4 py-2 flex flex-wrap items-center justify-center gap-x-1 gap-y-1 text-sm font-bold uppercase max-w-[95vw]">
        <Link href="/" className="px-3 py-1.5 hover:underline">
          PromptRoles
        </Link>

        <NavGroup
          label="Build"
          color="#FF6B6B"
          links={[
            { href: "/", label: "Workflow — idea to launch" },
            { href: "/functions", label: "Functions — deep frameworks" },
            { href: "/library", label: "Prompt Library — quick role prompts" },
          ]}
        />

        <NavGroup
          label="Research"
          color="#4D96FF"
          links={[
            { href: "/yc-guide", label: "YC Guide" },
            { href: "/founder-archive", label: "Founder Archive" },
            { href: "/research-methods", label: "Research Methods" },
            { href: "/human-psyche", label: "Human Psyche" },
            { href: "/pain-points", label: "Pain Points" },
            { href: "/ideas-generator", label: "Ideas Generator" },
          ]}
        />

        <Link href="/business-workflows" className="px-3 py-1.5 hover:underline">
          Industry Knowledge
        </Link>

        <Link href="/creators" className="px-3 py-1.5 hover:underline">
          Creators
        </Link>

        <Link href="/creativity" className="px-3 py-1.5 hover:underline">
          Creativity
        </Link>

        <Link href="/productivity" className="px-3 py-1.5 hover:underline">
          Productivity
        </Link>

        <Link href="/obstacle-map" className="px-3 py-1.5 hover:underline">
          Stuck?
        </Link>
      </nav>
    </div>
  );
}
