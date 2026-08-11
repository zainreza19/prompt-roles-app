export type BusinessFunction = {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  available: boolean;
};

export const businessFunctions: BusinessFunction[] = [
  { id: "design", name: "Design", emoji: "🎨", tagline: "UX, UI, brand, and design systems", available: true },
  { id: "engineering", name: "Engineering", emoji: "🛠️", tagline: "Architecture, code quality, technical debt", available: false },
  { id: "marketing", name: "Marketing", emoji: "📣", tagline: "Positioning, content, paid, brand voice", available: false },
  { id: "sales", name: "Sales", emoji: "🤝", tagline: "Pipeline, outreach, closing, pricing", available: false },
  { id: "finance", name: "Finance", emoji: "💰", tagline: "Runway, unit economics, fundraising", available: false },
  { id: "operations", name: "Operations", emoji: "⚙️", tagline: "Process, tooling, hiring, delivery", available: false },
  { id: "legal", name: "Legal", emoji: "⚖️", tagline: "Incorporation, contracts, compliance", available: false },
  { id: "customer-success", name: "Customer Success", emoji: "💬", tagline: "Onboarding, retention, support", available: false },
];
