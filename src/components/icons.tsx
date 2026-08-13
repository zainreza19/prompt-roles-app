const TIER_BG: Record<"A" | "B" | "C", string> = {
  A: "#4ECDC4",
  B: "#FF9F40",
  C: "#FF6B6B",
};

export function TierAvatar({
  tier,
  size = 40,
}: {
  tier: "A" | "B" | "C";
  size?: number;
}) {
  return (
    <span
      className="nb-border shrink-0 flex items-center justify-center"
      style={{ width: size, height: size, background: TIER_BG[tier] }}
      aria-hidden="true"
    >
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none">
        {tier === "A" && (
          <>
            <circle cx="12" cy="7" r="4" fill="#111111" />
            <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="#111111" />
          </>
        )}
        {tier === "B" && (
          <>
            <rect x="2" y="9" width="13" height="7" fill="#111111" />
            <path d="M15 11h4l3 3v2h-7v-5Z" fill="#111111" />
            <circle cx="6" cy="18" r="2.3" fill="#111111" />
            <circle cx="17" cy="18" r="2.3" fill="#111111" />
            <circle cx="6" cy="18" r="0.9" fill={TIER_BG.B} />
            <circle cx="17" cy="18" r="0.9" fill={TIER_BG.B} />
          </>
        )}
        {tier === "C" && (
          <>
            <rect x="7" y="2" width="10" height="19" fill="#111111" />
            <rect x="9" y="5" width="2" height="2" fill={TIER_BG.C} />
            <rect x="13" y="5" width="2" height="2" fill={TIER_BG.C} />
            <rect x="9" y="9" width="2" height="2" fill={TIER_BG.C} />
            <rect x="13" y="9" width="2" height="2" fill={TIER_BG.C} />
            <rect x="9" y="13" width="2" height="2" fill={TIER_BG.C} />
            <rect x="13" y="13" width="2" height="2" fill={TIER_BG.C} />
          </>
        )}
      </svg>
    </span>
  );
}

export const TIER_LABEL: Record<"A" | "B" | "C", string> = {
  A: "Small / Independent",
  B: "Regional / Mid-size",
  C: "National / Institutional",
};

type IconKey =
  | "handshake"
  | "door"
  | "crane"
  | "gear-house"
  | "chart-up"
  | "wrench"
  | "hammer"
  | "clipboard"
  | "bolt"
  | "star";

const WORKFLOW_ICON: Record<string, IconKey> = {
  // real estate
  brokerage: "handshake",
  leasing: "door",
  development: "crane",
  "property-management": "gear-house",
  investment: "chart-up",
  // trades
  "residential-service": "wrench",
  "new-construction": "hammer",
  "commercial-contracts": "clipboard",
  "emergency-service": "bolt",
  "membership-plans": "star",
};

function IconGlyph({ icon }: { icon: IconKey }) {
  switch (icon) {
    case "handshake":
      return (
        <>
          <rect x="2" y="14" width="7" height="4" fill="#111111" />
          <rect x="15" y="14" width="7" height="4" fill="#111111" />
          <path d="M9 16h6" stroke="#111111" strokeWidth="3" />
          <path d="M4 14V9l4-3 4 3v5" stroke="#111111" strokeWidth="2" fill="none" />
        </>
      );
    case "door":
      return (
        <>
          <rect x="5" y="3" width="14" height="19" stroke="#111111" strokeWidth="2.5" fill="none" />
          <circle cx="15" cy="13" r="1.4" fill="#111111" />
        </>
      );
    case "crane":
      return (
        <>
          <path d="M5 22V4" stroke="#111111" strokeWidth="2.5" />
          <path d="M5 5h15" stroke="#111111" strokeWidth="2.5" />
          <path d="M17 5v4" stroke="#111111" strokeWidth="2.5" />
          <rect x="2" y="20" width="6" height="2.5" fill="#111111" />
        </>
      );
    case "gear-house":
      return (
        <>
          <path d="M12 3 3 10h18L12 3Z" fill="#111111" />
          <rect x="5" y="10" width="14" height="11" fill="#111111" />
          <circle cx="12" cy="15.5" r="3" fill="white" />
          <circle cx="12" cy="15.5" r="1.1" fill="#111111" />
        </>
      );
    case "chart-up":
      return (
        <>
          <rect x="3" y="14" width="4" height="8" fill="#111111" />
          <rect x="10" y="9" width="4" height="13" fill="#111111" />
          <rect x="17" y="3" width="4" height="19" fill="#111111" />
        </>
      );
    case "wrench":
      return (
        <>
          <circle cx="7" cy="7" r="4.5" stroke="#111111" strokeWidth="2.5" fill="none" />
          <rect
            x="9.3"
            y="9.3"
            width="3.4"
            height="14"
            rx="1"
            fill="#111111"
            transform="rotate(45 11 16.3)"
          />
        </>
      );
    case "hammer":
      return (
        <>
          <rect x="10.5" y="9" width="3" height="13" fill="#111111" />
          <path d="M6 3l9 9-4 4-9-9 4-4Z" fill="#111111" />
        </>
      );
    case "clipboard":
      return (
        <>
          <rect x="4" y="4" width="16" height="18" stroke="#111111" strokeWidth="2.5" fill="none" />
          <rect x="8" y="2" width="8" height="4" fill="#111111" />
          <path d="M7 11h10M7 15h10M7 19h6" stroke="#111111" strokeWidth="2" />
        </>
      );
    case "bolt":
      return <path d="M13 2 4 14h6l-2 8 10-13h-6l1-7Z" fill="#111111" />;
    case "star":
      return (
        <path
          d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.7 7-6.3-3.8-6.3 3.8 1.7-7-5.4-4.8 7.1-.7L12 2Z"
          fill="#111111"
        />
      );
  }
}

export function WorkflowIcon({
  workflowId,
  size = 28,
  bg = "#ffffff",
}: {
  workflowId: string;
  size?: number;
  bg?: string;
}) {
  const icon = WORKFLOW_ICON[workflowId] ?? "star";
  return (
    <span
      className="nb-border shrink-0 flex items-center justify-center"
      style={{ width: size, height: size, background: bg }}
      aria-hidden="true"
    >
      <svg width={size * 0.62} height={size * 0.62} viewBox="0 0 24 24">
        <IconGlyph icon={icon} />
      </svg>
    </span>
  );
}
