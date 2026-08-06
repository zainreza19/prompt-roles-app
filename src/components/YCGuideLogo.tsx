export default function YCGuideLogo({ size = 72 }: { size?: number }) {
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
        <path
          d="M36 10 L58 36 L47 36 L47 62 L25 62 L25 36 L14 36 Z"
          fill="#FFD400"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-bold uppercase text-2xl tracking-tight">
          The Playbook
        </span>
        <span className="font-bold uppercase text-xs tracking-widest opacity-60">
          Startup formation, YC-style
        </span>
      </span>
    </div>
  );
}
