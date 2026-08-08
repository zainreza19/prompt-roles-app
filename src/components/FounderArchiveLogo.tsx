export default function FounderArchiveLogo({ size = 72 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 72 72"
        className="nb-border bg-[#111111] shrink-0"
        style={{ boxShadow: "4px 4px 0px 0px #111111" }}
      >
        <rect x="0" y="0" width="72" height="72" fill="#111111" />
        <path d="M10 16 H34 V56 H10 Z" fill="#4ECDC4" stroke="#ffffff" strokeWidth="2" />
        <path d="M38 16 H62 V56 H38 Z" fill="#FFD400" stroke="#ffffff" strokeWidth="2" />
        <line x1="16" y1="26" x2="28" y2="26" stroke="#111111" strokeWidth="2" />
        <line x1="16" y1="34" x2="28" y2="34" stroke="#111111" strokeWidth="2" />
        <line x1="16" y1="42" x2="24" y2="42" stroke="#111111" strokeWidth="2" />
        <line x1="44" y1="26" x2="56" y2="26" stroke="#111111" strokeWidth="2" />
        <line x1="44" y1="34" x2="56" y2="34" stroke="#111111" strokeWidth="2" />
        <line x1="44" y1="42" x2="52" y2="42" stroke="#111111" strokeWidth="2" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-bold uppercase text-2xl tracking-tight">
          Founder Archive
        </span>
        <span className="font-bold uppercase text-xs tracking-widest opacity-60">
          Distilled from 1,000s of founder stories
        </span>
      </span>
    </div>
  );
}
