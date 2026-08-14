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
  | "star"
  | "code"
  | "headset"
  | "cross"
  | "shield"
  | "flask"
  | "tag"
  | "cart"
  | "storefront"
  | "box-stack"
  | "truck"
  | "gear"
  | "scale"
  | "briefcase"
  | "bank"
  | "card";

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
  // technology / saas
  "product-development": "code",
  "sales-gtm": "handshake",
  "customer-success": "headset",
  fundraising: "chart-up",
  // healthcare
  "patient-care": "cross",
  "medical-billing": "clipboard",
  "health-insurance": "shield",
  "pharma-commercialization": "flask",
  // financial services
  "retail-banking": "bank",
  "payments-processing": "card",
  "wealth-management": "chart-up",
  "insurance-underwriting": "shield",
  // retail / e-commerce
  merchandising: "tag",
  "ecommerce-operations": "cart",
  "store-operations": "storefront",
  "retail-supply-chain": "box-stack",
  // manufacturing
  "product-engineering": "hammer",
  "production-assembly": "gear",
  "quality-compliance": "shield",
  "procurement-supplier": "handshake",
  // logistics & supply chain
  "freight-trucking": "truck",
  "warehousing-fulfillment": "box-stack",
  "last-mile-delivery": "bolt",
  "supply-chain-planning": "chart-up",
  // legal services
  litigation: "scale",
  "transactional-law": "briefcase",
  "legal-ops-billing": "clipboard",
  "compliance-regulatory": "shield",
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
    case "code":
      return (
        <path
          d="M8 6 2 12l6 6M16 6l6 6-6 6M14 3l-4 18"
          stroke="#111111"
          strokeWidth="2.3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    case "headset":
      return (
        <>
          <path d="M4 14v-2a8 8 0 0 1 16 0v2" stroke="#111111" strokeWidth="2.3" fill="none" />
          <rect x="2.5" y="13" width="4.5" height="7" rx="1.2" fill="#111111" />
          <rect x="17" y="13" width="4.5" height="7" rx="1.2" fill="#111111" />
          <path d="M19.2 20v.5a3 3 0 0 1-3 3h-3" stroke="#111111" strokeWidth="2" fill="none" />
        </>
      );
    case "cross":
      return (
        <>
          <circle cx="12" cy="12" r="10" fill="#111111" />
          <path d="M12 7v10M7 12h10" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
        </>
      );
    case "shield":
      return (
        <path
          d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z"
          fill="#111111"
        />
      );
    case "flask":
      return (
        <>
          <path d="M10 2v7l-6 11a1.5 1.5 0 0 0 1.3 2.2h13.4A1.5 1.5 0 0 0 20 20l-6-11V2" stroke="#111111" strokeWidth="2.2" fill="none" strokeLinejoin="round" />
          <path d="M9 2h6" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M6.5 16h11" stroke="#111111" strokeWidth="2" />
        </>
      );
    case "tag":
      return (
        <>
          <path d="M12 3h7a2 2 0 0 1 2 2v7l-10 10-9-9L12 3Z" fill="#111111" />
          <circle cx="16.5" cy="7.5" r="1.6" fill="white" />
        </>
      );
    case "cart":
      return (
        <>
          <path d="M2 3h3l2.4 12.4a2 2 0 0 0 2 1.6h8a2 2 0 0 0 2-1.6L21 7H6" stroke="#111111" strokeWidth="2.2" fill="none" strokeLinejoin="round" />
          <circle cx="9" cy="21" r="1.6" fill="#111111" />
          <circle cx="17" cy="21" r="1.6" fill="#111111" />
        </>
      );
    case "storefront":
      return (
        <>
          <path d="M3 9 4.5 3h15L21 9" stroke="#111111" strokeWidth="2.2" fill="none" strokeLinejoin="round" />
          <rect x="4" y="9" width="16" height="12" stroke="#111111" strokeWidth="2.2" fill="none" />
          <rect x="10" y="14" width="4" height="7" fill="#111111" />
        </>
      );
    case "box-stack":
      return (
        <>
          <rect x="3" y="13" width="8" height="8" stroke="#111111" strokeWidth="2" fill="none" />
          <rect x="13" y="13" width="8" height="8" stroke="#111111" strokeWidth="2" fill="none" />
          <rect x="8" y="4" width="8" height="8" fill="#111111" />
        </>
      );
    case "truck":
      return (
        <>
          <rect x="1" y="9" width="12" height="8" fill="#111111" />
          <path d="M13 12h5l4 3v2h-9v-5Z" fill="#111111" />
          <circle cx="6" cy="19" r="2" fill="#111111" />
          <circle cx="17" cy="19" r="2" fill="#111111" />
        </>
      );
    case "gear":
      return (
        <path
          d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm9 2.3-2.1-.4a6.8 6.8 0 0 0-.6-1.5l1.3-1.7-1.8-1.8-1.7 1.3a6.8 6.8 0 0 0-1.5-.6L14.4 3h-2.6l-.4 2.1a6.8 6.8 0 0 0-1.5.6L8.2 4.4 6.4 6.2l1.3 1.7c-.3.5-.5 1-.6 1.5L5 9.8v2.6l2.1.4c.1.5.3 1 .6 1.5l-1.3 1.7 1.8 1.8 1.7-1.3c.5.3 1 .5 1.5.6l.4 2.1h2.6l.4-2.1c.5-.1 1-.3 1.5-.6l1.7 1.3 1.8-1.8-1.3-1.7c.3-.5.5-1 .6-1.5l2.1-.4V10.8Z"
          fill="#111111"
        />
      );
    case "scale":
      return (
        <>
          <path d="M12 2v18M6 21h12" stroke="#111111" strokeWidth="2.3" strokeLinecap="round" />
          <path d="M4 6h8M12 6h8" stroke="#111111" strokeWidth="2" />
          <path d="M2 10a3 3 0 0 0 4 0L4 6l-2 4ZM18 10a3 3 0 0 0 4 0l-2-4-2 4Z" fill="#111111" />
        </>
      );
    case "briefcase":
      return (
        <>
          <rect x="2" y="8" width="20" height="13" stroke="#111111" strokeWidth="2.3" fill="none" />
          <path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" stroke="#111111" strokeWidth="2.3" fill="none" />
          <path d="M2 13h20" stroke="#111111" strokeWidth="2" />
        </>
      );
    case "bank":
      return (
        <>
          <path d="M12 2 2 8h20L12 2Z" fill="#111111" />
          <rect x="2" y="20" width="20" height="2" fill="#111111" />
          <rect x="4" y="10" width="2.5" height="9" fill="#111111" />
          <rect x="10.75" y="10" width="2.5" height="9" fill="#111111" />
          <rect x="17.5" y="10" width="2.5" height="9" fill="#111111" />
        </>
      );
    case "card":
      return (
        <>
          <rect x="2" y="5" width="20" height="14" rx="1.5" stroke="#111111" strokeWidth="2.2" fill="none" />
          <rect x="2" y="9" width="20" height="3.5" fill="#111111" />
          <rect x="4.5" y="15" width="6" height="1.8" fill="#111111" />
        </>
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
