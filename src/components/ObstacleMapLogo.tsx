export default function ObstacleMapLogo({ size = 72 }: { size?: number }) {
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
        <path d="M4 58 L24 26 L34 40 L44 18 L68 58 Z" fill="#FF9F40" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="44" cy="18" r="4" fill="#FFD400" stroke="#ffffff" strokeWidth="2" />
        <path
          d="M10 52 C 18 48, 22 44, 27 38 S 36 34, 40 30 S 48 24, 52 22"
          fill="none"
          stroke="#111111"
          strokeWidth="2"
          strokeDasharray="3 3"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-bold uppercase text-2xl tracking-tight">
          Obstacle Map
        </span>
        <span className="font-bold uppercase text-xs tracking-widest opacity-60">
          You&apos;re not the first to get stuck here
        </span>
      </span>
    </div>
  );
}
