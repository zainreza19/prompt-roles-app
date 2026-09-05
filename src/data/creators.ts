export type Platform =
  | "youtube"
  | "twitter"
  | "instagram"
  | "tiktok"
  | "linkedin"
  | "newsletter"
  | "podcast";

export type CreatorTier = "mega" | "macro" | "micro" | "nano";

export type Creator = {
  id: string;
  name: string;
  handle: string;
  platform: Platform;
  url: string;
  followers: string;
  tier: CreatorTier;
  niche: string;
  bio: string;
  whyReachOut: string;
  // A link to one specific, representative piece of content (a video where
  // possible, otherwise a podcast episode or post) — distinct from `url`,
  // which just points at their profile/homepage. Optional: not every
  // creator (and none of the entries shipped before this field existed)
  // has one set.
  featuredContentUrl?: string;
};

export type CreatorIndustry = {
  id: string;
  name: string;
  emoji: string;
  status: "live" | "queued";
  blurb: string;
};

export const TIER_ORDER: CreatorTier[] = ["mega", "macro", "micro", "nano"];

export const TIER_INFO: Record<
  CreatorTier,
  { label: string; range: string; color: string }
> = {
  mega: { label: "Mega", range: "1M+ followers", color: "#FF6B6B" },
  macro: { label: "Macro", range: "100K – 1M followers", color: "#FF9F40" },
  micro: { label: "Micro", range: "10K – 100K followers", color: "#4ECDC4" },
  // Light lavender rather than a saturated violet so black label text on
  // top of it actually clears AA contrast (the three tiers above predate
  // that check and are a known, separately-tracked gap — see the PRD).
  nano: { label: "Nano", range: "1K – 10K followers", color: "#C9BBFF" },
};

// Tiers are the standard influencer-marketing bands (rounded to each
// creator's primary platform). Follower counts are approximate snapshots —
// treat this as a starter list to verify and expand over time, not a
// live-synced database.
export const creatorIndustries: CreatorIndustry[] = [
  {
    id: "tech-saas",
    name: "Tech & SaaS / Startups",
    emoji: "💻",
    status: "live",
    blurb:
      "Indie hackers, SaaS builders, and startup-Twitter voices — already talking to your exact buyer.",
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    emoji: "🤖",
    status: "live",
    blurb:
      "AI news, tools, and prompting creators with audiences hungry for whatever's new.",
  },
  {
    id: "marketing-growth",
    name: "Marketing & Growth",
    emoji: "📈",
    status: "live",
    blurb:
      "Growth hackers, GTM operators, and content marketers who make distribution their whole job.",
  },
  {
    id: "business-entrepreneurship",
    name: "Business & Entrepreneurship",
    emoji: "💼",
    status: "live",
    blurb:
      "General business and founder-story creators with the broadest reach into people building things.",
  },
  {
    id: "personal-finance",
    name: "Personal Finance & Investing",
    emoji: "💰",
    status: "live",
    blurb:
      "Money creators whose audience skews toward side hustles, freelancing, and financial independence.",
  },
  {
    id: "productivity",
    name: "Productivity & Tools",
    emoji: "⚡",
    status: "live",
    blurb:
      "\"Tools I use\" and workflow creators — a natural home for any new app review or roundup.",
  },
  {
    id: "design-ux",
    name: "Design & UX",
    emoji: "🎨",
    status: "live",
    blurb:
      "Product design and UI/UX creators with a direct line to design-minded early adopters.",
  },
  {
    id: "ecommerce-dtc",
    name: "E-commerce & DTC",
    emoji: "🛍️",
    status: "live",
    blurb:
      "Shopify, dropshipping, and DTC brand-building creators for commerce-adjacent products.",
  },
  {
    id: "health-fitness",
    name: "Health & Fitness",
    emoji: "💪",
    status: "live",
    blurb:
      "Fitness and wellness creators — high-engagement audiences for health-adjacent tools.",
  },
  {
    id: "personal-development",
    name: "Personal Development",
    emoji: "🧠",
    status: "live",
    blurb:
      "Habits, mindset, and self-improvement creators with broad, highly engaged followings.",
  },
  {
    id: "mac-indie-software",
    name: "Mac & Indie Software",
    emoji: "🍎",
    status: "live",
    blurb:
      "Blogs, podcasts, and YouTubers covering Mac and Apple-platform apps specifically — a different, more editorial crowd than startup Twitter.",
  },
];
