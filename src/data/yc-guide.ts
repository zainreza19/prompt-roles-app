import type { Agent } from "@/data/workflow";

export type RfsCategory = {
  id: string;
  title: string;
  author: string;
  summary: string;
};

// Y Combinator's Fall 2026 "Requests for Startups" — the 13 problem areas
// YC has publicly said it most wants founders to tackle right now.
// Source: ycombinator.com/rfs (Fall 2026 edition), fetched Aug 2026.
export const rfsCategories: RfsCategory[] = [
  {
    id: "the-primer",
    title: "The Primer",
    author: "Andrew Miklas",
    summary:
      "Adaptive AI tutoring for children that teaches reading, writing, and arithmetic at private-tutor quality — an educational tool that evolves with the learner.",
  },
  {
    id: "future-of-defense",
    title: "The Future of American Defense",
    author: "Daniel P. Driscoll, US Secretary of the Army",
    summary:
      "Military technology that lowers the cost per kill: next-gen sensors, software, drones, logistics, and advanced manufacturing for ground combat.",
  },
  {
    id: "cloud-for-small-software",
    title: "A Cloud for Small Software",
    author: "Pete Koomen",
    summary:
      "Infrastructure for small, bespoke software built by agents rather than platforms built for massive scale — deployment, sharing, auth, and security for single-user or small-team apps.",
  },
  {
    id: "multiplayer-ai",
    title: "Multiplayer AI",
    author: "Aaron Epstein",
    summary:
      "Collaborative AI agent platforms where teams work with AI in real time — shared live sessions where multiple people monitor, redirect, and hand off agent tasks.",
  },
  {
    id: "compute-at-sea",
    title: "Compute at Sea",
    author: "Francois Chaubard",
    summary:
      "Offshore data centers — standardized, modular vessel \"compute flotillas\" operating as one global cloud to route around electricity, land, and permitting constraints.",
  },
  {
    id: "ai-consumer-billion",
    title: "AI-Powered Consumer Products for 1 Billion People",
    author: "Raphael Schaad",
    summary:
      "Consumer apps riding the collapse in AI cost/capability — transportation, learning, healthcare, finance, entertainment, and social connection at global scale.",
  },
  {
    id: "aging-population",
    title: "AI for the Aging Population",
    author: "Max Kolysh",
    summary:
      "Voice interfaces, monitoring, robotics, and caregiver coordination software built specifically for seniors, ahead of a projected caregiver shortage by 2030.",
  },
  {
    id: "physical-world-os",
    title: "New Operating Systems for the Physical World",
    author: "Charlie Warren",
    summary:
      "Software that manages mixed teams of AI agents, robots, and human workers in construction, maintenance, and fleet operations — beyond traditional dispatch.",
  },
  {
    id: "crypto-downturn",
    title: "The Best Time to Build in Crypto",
    author: "Nemil Dalal",
    summary:
      "Infrastructure plays — capital raising, stablecoins, agentic commerce, trading, institutional products, private blockchains — while a downturn thins the field.",
  },
  {
    id: "data-real-world",
    title: "Data for the Real World",
    author: "Austin Tindle & Diana Hu",
    summary:
      "Dense physical-world data collection via robotics and autonomous systems for energy, agriculture, logistics, and construction — data precise enough to model and control.",
  },
  {
    id: "proving-human",
    title: "Proving You're Human",
    author: "Max Kolysh",
    summary:
      "Verification systems that authenticate humans in digital interactions — countering deepfakes and voice clones while preserving privacy, rebuilding trust in calls, messages, transactions.",
  },
  {
    id: "compliance-infra",
    title: "AI-Native Compliance Infrastructure",
    author: "Daivik Goel",
    summary:
      "Compliance platforms that consolidate fragmented tools and cut manual work in regulatory monitoring, reporting, and audit trails across jurisdictions.",
  },
  {
    id: "self-maintaining-apis",
    title: "Self-Maintaining APIs",
    author: "Harsha Gaddipati",
    summary:
      "API providers whose agents scan customer codebases, detect usages affected by a breaking change, and open a PR with the fix automatically.",
  },
];

export type StatBlock = {
  id: string;
  stat: string;
  label: string;
};

// Directional funding/composition stats synthesized from recent public
// reporting on YC batches (Winter 2024 → Spring 2025 → 2025 fintech pace).
export const fundingStats: StatBlock[] = [
  { id: "ai-share", stat: "50%+", label: "of recent-batch companies are building AI/ML-first products" },
  { id: "b2b-share", stat: "~35%", label: "of companies are B2B SaaS — still the largest single category" },
  { id: "agent-oneliners", stat: "60%", label: "of one-liners in recent batches mention AI or agents" },
  { id: "vertical-ai-funding", stat: "$15B+", label: "poured into vertical (industry-specific) AI startups in 2025 alone" },
  { id: "fintech-deals", stat: "100+", label: "fintech deals YC participated in through Sept 2025 — a sharp resurgence" },
  { id: "idea-stage", stat: "~40%", label: "of accepted companies each batch are pre-revenue, idea-stage founders" },
];

export type NotableCompany = {
  name: string;
  category: string;
  description: string;
};

// A representative cross-section of YC-backed companies, spanning the
// categories currently pulling the most funding and attention.
export const notableCompanies: NotableCompany[] = [
  { name: "Harvey", category: "Vertical AI — Legal", description: "AI built specifically for law firms and legal teams — research, drafting, and review." },
  { name: "Glean", category: "Vertical AI — Enterprise Search", description: "AI-powered enterprise search and knowledge assistant across a company's internal tools." },
  { name: "Runway", category: "Vertical AI — Media", description: "AI video generation and editing tools built for creative and production teams." },
  { name: "Scale AI", category: "AI Infrastructure", description: "Data-centric infrastructure and RLHF pipelines that help organizations train stronger models." },
  { name: "Solo Labs", category: "AI-Native Services", description: "Open-source coding agent capable of parallel task execution at state-of-the-art benchmarks." },
  { name: "Stratum Industries", category: "Government / Compliance", description: "AI agents that process government permit backlogs and speed up administrative review." },
  { name: "Decawork", category: "Enterprise AI Ops", description: "Platform for IT teams to deploy, govern, and maintain AI agents across an organization." },
  { name: "Zaplar", category: "Industry-Specific SaaS", description: "AI-native operating system replacing legacy hotel software with autonomous operations." },
  { name: "Last Accounting Company", category: "AI-Native Services", description: "A full-stack AI accounting firm automating bookkeeping and tax filing end to end." },
  { name: "Lamb Labs", category: "Physical AI / Hardware", description: "Custom silicon chips for AI inference, using diffusion-based architecture optimization." },
  { name: "Podium", category: "Vertical AI — SMB", description: "AI employee that responds to customer inquiries and manages leads for local businesses." },
  { name: "Checkr", category: "Vertical AI — HR/Trust", description: "AI-driven background screening and identity infrastructure for hiring." },
];

export type ApplicationTip = {
  title: string;
  detail: string;
};

export const applicationTips: ApplicationTip[] = [
  {
    title: "Traction matters less than you think",
    detail: "About 40% of accepted companies each batch are idea-stage with no revenue. What gets applications rejected is being vague — and that's entirely fixable.",
  },
  {
    title: "Five things partners actually weigh",
    detail: "Professionalism, clarity of thought, ability to execute, self-awareness, and trustworthiness. Not pedigree, not a polished deck.",
  },
  {
    title: "The video outweighs the writing",
    detail: "The one-minute application video matters more than the written application. Be direct and authentic, not rehearsed — show real traction (revenue, users, growth rate) if you have it.",
  },
  {
    title: "Problem first, in one sentence",
    detail: "State the problem in a single sentence before you touch the solution. If a reader needs a paragraph to understand the problem, the idea isn't sharp enough yet.",
  },
  {
    title: "Prove founder-market fit",
    detail: "Answer \"why you\" directly — what specific experience, obsession, or unfair insight makes you the right person to solve this problem, not just a person solving it.",
  },
];

export type BestPath = {
  id: string;
  title: string;
  description: string;
};

export const bestPaths: BestPath[] = [
  {
    id: "vertical-ai",
    title: "Go vertical, not horizontal",
    description:
      "General-purpose AI wrappers are commoditizing fast. The $15B+ that went into vertical AI in 2025 rewarded startups that picked one industry (legal, hotels, accounting, HR) and went deep enough to replace — not just assist — an existing workflow.",
  },
  {
    id: "sell-service-not-software",
    title: "Sell the outcome, not the seat",
    description:
      "Global spend on services dwarfs spend on software, and most services are already outsourced — which makes them structurally easy to replace with an AI-native provider. YC's current thesis: build the AI-native service company, and price it like a service, not a SaaS subscription.",
  },
  {
    id: "legacy-modernization",
    title: "Attack the untouchable codebases",
    description:
      "Chip design software, ERPs, industrial control systems — 20-year-old systems too entrenched to rebuild until agentic engineering made rewrites cheap enough. Enterprise modernization is one of the few B2B categories left where incumbents are this exposed.",
  },
  {
    id: "physical-world",
    title: "Follow AI into the physical world",
    description:
      "Agriculture, hardware, defense, energy, and space are no longer \"too slow or regulated\" for venture-scale bets — they're where YC is actively pointing founders in 2026, precisely because software-only categories are getting crowded.",
  },
  {
    id: "regulated-trust",
    title: "Build the trust layer underneath everything",
    description:
      "Deepfakes, voice clones, and agent-driven fraud are forcing a rebuild of how humans and systems verify each other — proof-of-human, compliance automation, and audit infrastructure are quietly some of the least crowded categories on this list.",
  },
];

// Agent-style prompts for turning YC's current thesis into a concrete plan
// and a first-users motion, one per major thrust above.
export const ycIndustryAgents: Agent[] = [
  {
    id: "vertical-ai-strategist",
    name: "Vertical AI Strategist",
    emoji: "🎯",
    color: "#FFD400",
    tagline: "Pick the vertical and the wedge inside it",
    prompt: `You are acting as a Vertical AI Strategist who tracks what Y Combinator is currently funding. Help me pick a specific vertical and a wedge inside it, instead of building a generic AI wrapper.

Here is my rough area of interest or existing idea:
"""
[PASTE YOUR INDUSTRY OF INTEREST OR ROUGH IDEA HERE]
"""

Do the following:
1. Name 3-5 specific workflows within this industry that are still done manually or through outdated software, and rank them by how replaceable (not just improvable) they are by an AI-native product.
2. For the most replaceable workflow, describe what "replace, don't assist" looks like in practice — what would the buyer stop doing entirely?
3. Identify who the economic buyer is (not just the user) and what budget line this would come out of.
4. Flag the incumbent(s) most likely to react, and what would make switching worth the pain for a first customer.
5. Give a one-sentence wedge statement: "For [specific buyer] in [industry], replace [specific manual workflow] with [category of product]."

Be specific to this industry — no generic AI startup advice.`,
  },
  {
    id: "ai-native-service-operator",
    name: "AI-Native Service Operator",
    emoji: "🤖",
    color: "#FF6B6B",
    tagline: "Sell the outcome like a service, not a seat",
    prompt: `You are acting as an operator who has built AI-native service companies (selling an outcome, staffed by AI + a thin human layer, not software seats). Help me design this as a service business.

Here is the service/outcome I'm considering replacing with AI:
"""
[PASTE THE SERVICE OR OUTSOURCED WORKFLOW YOU WANT TO REPLACE HERE]
"""

Do the following:
1. Describe exactly what the client currently pays a human vendor or agency to do, step by step.
2. Redesign the delivery so AI does the bulk of the work, with humans only where judgment or accountability is legally/practically required.
3. Propose pricing structured like a service (per-outcome, per-case, monthly retainer) rather than per-seat SaaS pricing, with reasoning.
4. Identify what would make this feel safe to a first client compared to their current vendor (accountability, SLAs, error correction process).
5. Suggest how to land the first 3 clients by directly displacing an existing vendor relationship rather than selling something new.

Ground this in the specific service you named — not generic AI-agency advice.`,
  },
  {
    id: "legacy-modernization-strategist",
    name: "Legacy Modernization Strategist",
    emoji: "🏛️",
    color: "#4D96FF",
    tagline: "Find the untouchable system worth rewriting",
    prompt: `You are acting as a Strategist specializing in modernizing entrenched enterprise systems (ERPs, industrial control software, chip design tools, and similar 20-year-old codebases). Help me evaluate an opportunity here.

Here is the legacy system or category I'm considering:
"""
[PASTE THE LEGACY SYSTEM/CATEGORY YOU'RE CONSIDERING HERE]
"""

Do the following:
1. Explain why this system has historically been "too entrenched to rebuild" — switching costs, compliance risk, integration surface area, or lack of engineering appetite for a full rewrite.
2. Identify what's changed (agentic engineering, cheaper compute, new interoperability standards) that makes a rewrite economically viable now.
3. Propose a narrow entry point: one module, workflow, or integration to modernize first rather than replacing the whole system on day one.
4. Identify the buyer who feels the most pain from the legacy system today (often not the exec sponsor who bought it originally) and how to reach them.
5. Flag the biggest risk specific to this category (regulatory certification, data migration risk, incumbent lock-in via long contracts).

Be concrete to this specific system, not generic "legacy software is bad" commentary.`,
  },
  {
    id: "physical-ai-strategist",
    name: "Physical-World AI Strategist",
    emoji: "🛰️",
    color: "#6BCB77",
    tagline: "Take AI off the screen and into the field",
    prompt: `You are acting as a Strategist for AI ventures that operate in the physical world — agriculture, hardware, defense, energy, logistics, construction, or space. Help me evaluate this opportunity.

Here is the physical-world problem or industry I'm considering:
"""
[PASTE YOUR PHYSICAL-WORLD IDEA OR INDUSTRY HERE]
"""

Do the following:
1. Identify what data currently doesn't exist or is too sparse in this domain, and how a robotics/sensor/autonomous system could generate dense, high-quality data for it.
2. Describe the minimum viable hardware or sensing setup needed to start collecting this data or delivering the service — avoid over-engineering the first version.
3. Identify who pays for this today (which budget line: capex, opex, defense procurement, ag input costs) and how long their buying cycle typically is.
4. Flag regulatory, safety, or manufacturing constraints specific to this domain that a purely software team might underestimate.
5. Propose a realistic path to a first paying pilot given hardware lead times.

Be specific to this physical domain, not generic "hardware is hard" advice.`,
  },
  {
    id: "trust-infrastructure-strategist",
    name: "Trust Infrastructure Strategist",
    emoji: "🔒",
    color: "#B983FF",
    tagline: "Build the layer that verifies what's real",
    prompt: `You are acting as a Strategist specializing in trust and verification infrastructure — proof-of-human systems, AI-native compliance, and fraud prevention against deepfakes and voice clones. Help me evaluate this opportunity.

Here is the trust/verification/compliance problem I'm considering:
"""
[PASTE YOUR IDEA OR PROBLEM AREA HERE]
"""

Do the following:
1. Describe the specific interaction being compromised (a call, a transaction, a document, a login) and how bad actors currently exploit it.
2. Propose a verification approach that preserves user privacy while still proving authenticity — avoid solutions that require handing over more personal data than necessary.
3. Identify who would integrate this (a platform, a bank, an enterprise compliance team) vs. who the end user is, since these are often different buyers.
4. Map the regulatory landscape this touches (data privacy laws, financial compliance, jurisdiction-specific rules) and where it's most and least friction to launch first.
5. Propose a first design partner profile and how to get one committed before building the full product.

Be specific to this trust/compliance niche, not generic "security is important" advice.`,
  },
  {
    id: "yc-application-coach",
    name: "YC Application Coach",
    emoji: "📝",
    color: "#4ECDC4",
    tagline: "Turn your idea into a sharp application",
    prompt: `You are acting as a YC Application Coach who knows what partners actually weigh: professionalism, clarity of thought, ability to execute, self-awareness, and trustworthiness — not pedigree or a polished deck.

Here is my idea and current traction (or lack of it):
"""
[PASTE YOUR IDEA, TEAM BACKGROUND, AND CURRENT TRACTION HERE]
"""

Do the following:
1. Write a one-sentence problem statement, tested against the rule: if it takes a paragraph to explain, it's not sharp enough yet.
2. Write the "why you" paragraph — the specific experience, obsession, or unfair insight that makes this founder (or team) the right one to solve this problem.
3. If there's no revenue yet, reframe the traction section around user signal (interviews, waitlist, pilot interest, usage of a prototype) rather than apologizing for the lack of revenue — about 40% of accepted founders are pre-revenue.
4. Draft a 60-second video application script: direct, unrehearsed in tone, leading with the problem and the founder's edge, not a pitch-deck voice.
5. List the 3 weakest points in my current story an interviewer would probe first, and how to answer each in one sentence.

Be blunt about what's vague or generic in what I've given you — that's what gets applications rejected.`,
  },
];
