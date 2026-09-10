// Niche Market Explorer — personal tool to log, score (Hormozi's 4-variable
// framework), and compare niche ideas across ventures. Unlike every other
// module in this app, this data is NOT curated/static — it's created by the
// user at runtime and persisted client-side (see src/lib/useNicheStore.ts).
// This file only holds types, enums, and their display metadata.

export type Category = "Health" | "Wealth" | "Relationships" | "Other";

export const CATEGORIES: { value: Category; emoji: string; color: string }[] = [
  { value: "Health", emoji: "🩺", color: "#FF6B6B" },
  { value: "Wealth", emoji: "💰", color: "#FFD400" },
  { value: "Relationships", emoji: "❤️", color: "#4D96FF" },
  { value: "Other", emoji: "🔀", color: "#6BCB77" },
];

export type VentureTag = "Tehvaar" | "Silikos" | "Personal" | "Other";

export const VENTURE_TAGS: VentureTag[] = ["Tehvaar", "Silikos", "Personal", "Other"];

export type Status = "Researching" | "Considering" | "Committed" | "Rejected";

export const STATUSES: { value: Status; color: string }[] = [
  { value: "Researching", color: "#FFF9E8" },
  { value: "Considering", color: "#FFD400" },
  { value: "Committed", color: "#6BCB77" },
  { value: "Rejected", color: "#D9D9D9" },
];

export type ScoreKey = "painScore" | "purchasingPowerScore" | "targetingScore" | "growthScore";

export const SCORE_FIELDS: {
  key: ScoreKey;
  notesKey: "painNotes" | "purchasingPowerNotes" | "targetingNotes" | "growthNotes";
  label: string;
  notesLabel: string;
  notesPlaceholder: string;
  rubric: string;
}[] = [
  {
    key: "painScore",
    notesKey: "painNotes",
    label: "Pain",
    notesLabel: "Pain description",
    notesPlaceholder: "Why does this group need the solution?",
    rubric: "1 = mild annoyance · 3 = real friction, workarounds exist · 5 = urgent, actively searching for a fix",
  },
  {
    key: "purchasingPowerScore",
    notesKey: "purchasingPowerNotes",
    label: "Purchasing Power",
    notesLabel: "Purchasing power notes",
    notesPlaceholder: "Evidence they can and will pay",
    rubric: "1 = broke/price-sensitive · 3 = some discretionary budget · 5 = spends freely, has a budget line for this",
  },
  {
    key: "targetingScore",
    notesKey: "targetingNotes",
    label: "Targetability",
    notesLabel: "Targeting notes",
    notesPlaceholder: "Channels, communities, how to reach them",
    rubric: "1 = scattered, no shared channel · 3 = a few identifiable communities · 5 = dense, addressable channels (lists, forums, hashtags)",
  },
  {
    key: "growthScore",
    notesKey: "growthNotes",
    label: "Growth",
    notesLabel: "Growth notes",
    notesPlaceholder: "Is this segment expanding?",
    rubric: "1 = shrinking/flat · 3 = steady · 5 = clearly expanding, tailwinds visible",
  },
];

export type Niche = {
  id: string;
  name: string;
  category: Category;
  ventureTags: VentureTag[];
  painNotes: string;
  painScore: number;
  purchasingPowerNotes: string;
  purchasingPowerScore: number;
  targetingNotes: string;
  targetingScore: number;
  growthNotes: string;
  growthScore: number;
  alreadyTargetingNotes: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
};

export function totalScore(n: Niche): number {
  return n.painScore + n.purchasingPowerScore + n.targetingScore + n.growthScore;
}

export function categoryMeta(category: Category) {
  return CATEGORIES.find((c) => c.value === category) ?? CATEGORIES[3];
}

export function statusMeta(status: Status) {
  return STATUSES.find((s) => s.value === status) ?? STATUSES[0];
}

export function nicheToMarkdown(n: Niche): string {
  const lines = [
    `# ${n.name}`,
    "",
    `**Category:** ${n.category} · **Ventures:** ${n.ventureTags.join(", ") || "—"} · **Status:** ${n.status}`,
    `**Total score:** ${totalScore(n)} / 20`,
    "",
    `## Pain (${n.painScore}/5)`,
    n.painNotes || "—",
    "",
    `## Purchasing Power (${n.purchasingPowerScore}/5)`,
    n.purchasingPowerNotes || "—",
    "",
    `## Targetability (${n.targetingScore}/5)`,
    n.targetingNotes || "—",
    "",
    `## Growth (${n.growthScore}/5)`,
    n.growthNotes || "—",
    "",
    `## Already targeting this`,
    n.alreadyTargetingNotes || "—",
  ];
  return lines.join("\n");
}
