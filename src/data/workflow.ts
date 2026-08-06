export type Agent = {
  id: string;
  name: string;
  emoji: string;
  color: string;
  tagline: string;
  prompt: string;
};

export type Stage = {
  id: string;
  title: string;
  summary: string;
  agents: Agent[];
};

export type BusinessType = {
  id: string;
  name: string;
  emoji: string;
  available: boolean;
  stages?: Stage[];
};

const saasStages: Stage[] = [
  {
    id: "research",
    title: "Research",
    summary: "Find out if this is worth building before you build anything.",
    agents: [
      {
        id: "market-researcher",
        name: "Market Researcher",
        emoji: "🔭",
        color: "#FFD400",
        tagline: "Is this worth building?",
        prompt: `You are acting as a Market Researcher. I have a rough SaaS idea and need an honest read on whether it's worth pursuing before I spend real time on it.

Here is my idea:
"""
[PASTE YOUR SAAS IDEA HERE]
"""

Do the following:
1. Restate the problem this solves and who has it, in plain language.
2. Estimate the size of the market in rough terms (TAM/SAM if you can reason about it, otherwise a directional read: niche / mid-size / large).
3. List the 3-5 most likely existing competitors or alternatives (including "do nothing" or spreadsheets/manual workarounds), and how this idea would need to be different or better.
4. Identify the strongest reason this could fail (market timing, distribution difficulty, incumbent lock-in, etc).
5. Give a blunt verdict: worth pursuing as-is, worth pursuing with a specific pivot (name it), or not worth pursuing and why.

Be direct — I'd rather hear a hard truth now than after I've built something.`,
      },
      {
        id: "customer-discovery",
        name: "Customer Discovery Agent",
        emoji: "🗣️",
        color: "#FF6B6B",
        tagline: "Define who you're building for",
        prompt: `You are acting as a Customer Discovery specialist. Help me define exactly who I'm building for and how to find out if they actually have this problem.

Here is my idea and who I think it's for:
"""
[PASTE YOUR IDEA AND YOUR BEST GUESS AT THE TARGET USER HERE]
"""

Do the following:
1. Write a specific ideal customer profile (ICP): role, company size/context, and the situation that triggers this pain.
2. Write 8-10 open-ended customer interview questions that avoid leading the witness (no "would you use a product that...") — focus on their current behavior and workarounds.
3. Tell me what answers would validate the idea, and what answers would be a red flag.
4. Suggest 3 realistic, low-effort ways to find 5-10 people matching this ICP to talk to this week.

Format as a short discovery plan I can execute immediately.`,
      },
    ],
  },
  {
    id: "validation",
    title: "Validation",
    summary: "Turn interest into a defensible business case.",
    agents: [
      {
        id: "business-analyst",
        name: "Business Analyst",
        emoji: "📊",
        color: "#4D96FF",
        tagline: "Sanity-check the business case",
        prompt: `You are acting as a Business Analyst. Help me sanity-check whether this SaaS idea can actually be a business, not just a useful tool.

Here is the idea and what I've learned from research/customer discovery so far:
"""
[PASTE YOUR IDEA + RESEARCH FINDINGS HERE]
"""

Do the following:
1. Propose a plausible pricing model (per-seat, usage-based, flat tier, etc.) and a rough price point, with reasoning.
2. Estimate rough unit economics: what would it cost to acquire a customer vs. what they'd likely pay over a year — flag if this looks structurally hard (e.g. high CAC, low willingness to pay).
3. Identify the business model risk that matters most right now (not technical risk — business risk: will people pay, will it retain, is the market big enough).
4. List the 3 assumptions that, if wrong, would kill this business — and how cheaply each could be tested before building anything expensive.

Keep it grounded and specific to this idea, not generic startup advice.`,
      },
      {
        id: "product-strategist",
        name: "Product Strategist",
        emoji: "🧩",
        color: "#6BCB77",
        tagline: "Find your wedge — why you, why now",
        prompt: `You are acting as a Product Strategist. Help me find a sharp, defensible wedge for this SaaS idea — the specific angle that lets a small team win against incumbents.

Here is the idea, market context, and what I've validated so far:
"""
[PASTE YOUR IDEA + WHAT YOU'VE LEARNED SO FAR HERE]
"""

Do the following:
1. State the "why now" — what's changed (technology, behavior, market) that makes this the right time to build this.
2. Propose a specific wedge: the narrowest version of this that could win a first beachhead segment, rather than trying to serve everyone.
3. Write a one-sentence positioning statement: "For [specific user], who [has this problem], [product] is the [category] that [key differentiator], unlike [alternative]."
4. Identify what would need to be true for this wedge to expand into a bigger business later.

Output should read like a strategy memo I could share with a cofounder or early team.`,
      },
    ],
  },
  {
    id: "planning",
    title: "Planning",
    summary: "Scope the MVP and the numbers behind it.",
    agents: [
      {
        id: "product-manager",
        name: "Product Manager",
        emoji: "🎯",
        color: "#FFD400",
        tagline: "Turn validated idea into a scoped MVP",
        prompt: `You are acting as a senior Product Manager helping me turn a validated SaaS idea into a clear, buildable MVP requirement.

Here is the idea, positioning, and validation findings so far:
"""
[PASTE YOUR IDEA, POSITIONING, AND VALIDATION NOTES HERE]
"""

Do the following, in order:
1. Restate the problem in one sentence, and name the exact user/segment it's for.
2. Ask me up to 5 clarifying questions ONLY if something is genuinely ambiguous or high-risk to guess wrong on. Skip questions you can reasonably infer.
3. Propose a v1 (MVP) scope vs. a "later" list — be ruthless about cutting scope for a fast launch. The MVP should prove the core value prop with the least possible surface area.
4. Write user stories in the format: "As a [user], I want [action], so that [benefit]."
5. List acceptance criteria for each story.
6. Flag any risks, dependencies, or open decisions that need an answer before engineering starts.

Keep the output structured with headings so I can copy it straight into a doc or ticket.`,
      },
      {
        id: "financial-modeler",
        name: "Startup Financial Modeler",
        emoji: "💰",
        color: "#B983FF",
        tagline: "Build the bare-bones numbers",
        prompt: `You are acting as a startup Financial Modeler. Help me build a bare-bones financial model for this SaaS MVP — just enough to make informed pricing and runway decisions, not a full 5-year model.

Here is the idea, pricing thoughts, and MVP scope:
"""
[PASTE YOUR IDEA, PRICING IDEAS, AND MVP SCOPE HERE]
"""

Do the following:
1. Propose a simple pricing structure (tiers or usage-based) with actual price points.
2. Estimate rough monthly costs to run the MVP (infra, tooling, any contractors) at a small scale (e.g. first 100 users).
3. Calculate how many paying customers, at the proposed price, would cover those costs (break-even point).
4. Give a rough read on runway: if I have [ask me my budget/timeline if not stated], how long can I operate before needing revenue or funding.
5. Flag the single biggest financial risk in this plan.

Keep the math simple and show your work so I can adjust the assumptions myself.`,
      },
    ],
  },
  {
    id: "design",
    title: "Design",
    summary: "Give the product a shape, a name, and a feel.",
    agents: [
      {
        id: "product-designer",
        name: "Product Designer",
        emoji: "🎨",
        color: "#FF6B6B",
        tagline: "Go from requirement to a UX/UI plan",
        prompt: `You are acting as a senior Product Designer. I need to go from a scoped MVP requirement to a UX/UI plan fast, for a launch we want to ship soon.

Here is the MVP requirement:
"""
[PASTE THE MVP REQUIREMENT HERE]
"""

Do the following:
1. Identify the core user flow(s) in plain language (step by step, no jargon).
2. Call out the single most important screen/state and why it matters most for this launch.
3. Recommend a simple information architecture (what's on screen, what's hidden behind a click).
4. Recommend a visual direction that fits a fast MVP (mention 1-2 design styles/component patterns that would suit it, with a one-line reason).
5. List edge cases and empty/error/loading states I need designs for.
6. List what can be deferred post-launch without hurting first impressions.

Format as a short design brief I can hand to an engineer or use myself.`,
      },
      {
        id: "brand-agent",
        name: "Brand & Naming Agent",
        emoji: "🏷️",
        color: "#4ECDC4",
        tagline: "Name it and give it a voice",
        prompt: `You are acting as a Brand Strategist. Help me name this SaaS product and define its voice before launch.

Here is the product and positioning:
"""
[PASTE YOUR PRODUCT DESCRIPTION AND POSITIONING STATEMENT HERE]
"""

Do the following:
1. Suggest 10 candidate names — mix of descriptive, invented/coined, and metaphor-based. Avoid names that are hard to spell from hearing them once.
2. For your top 3 picks, note likely .com/domain availability concerns to check manually and why each name fits the positioning.
3. Write a one-line tagline for each of the top 3 names.
4. Define the brand voice in 3-4 adjectives (e.g. "direct, a little irreverent, no jargon") and one sentence each of what that means in practice for copy.

Keep it opinionated — give me a clear top pick, not just a list.`,
      },
    ],
  },
  {
    id: "build",
    title: "Build",
    summary: "Ship the MVP — frontend, backend, and the plan connecting them.",
    agents: [
      {
        id: "tech-lead",
        name: "Tech Lead / Architect",
        emoji: "🧭",
        color: "#FF9F40",
        tagline: "Sanity-check the plan before committing to it",
        prompt: `You are acting as a Tech Lead / Architect. I want a sanity check on the overall build plan before the team commits to it.

Here is the MVP requirement and design brief:
"""
[PASTE THE MVP REQUIREMENT AND DESIGN BRIEF HERE]
"""

Do the following:
1. Summarize the plan back to me in your own words, so I can confirm you understood it correctly.
2. Identify the riskiest technical assumption in the plan — the one thing that, if wrong, would cost us the most time.
3. Suggest the simplest architecture that could work for an MVP launch (avoid over-engineering; call out anything that looks like premature complexity).
4. Flag dependencies between frontend, backend, and design work, and suggest a sensible build order.
5. Identify what corners are safe to cut for a fast MVP vs. what corners will create real pain later (data model, auth, security basics).
6. Give a rough complexity estimate per major piece of work (small / medium / large), with a one-line reason.

Keep the tone direct and practical — I need a go/no-go read, not a lecture.`,
      },
      {
        id: "frontend-engineer",
        name: "Frontend Engineer",
        emoji: "💻",
        color: "#4D96FF",
        tagline: "Plan the build before writing code",
        prompt: `You are acting as a senior Frontend Engineer. Before I write any code, help me plan the implementation.

Here is the MVP requirement and design brief:
"""
[PASTE THE MVP REQUIREMENT AND DESIGN BRIEF HERE]
"""

Do the following:
1. Restate what "done" looks like from a frontend perspective in 2-3 sentences.
2. Break the work into a component/page checklist (smallest reasonable units).
3. Identify state that needs to live where (local component state vs. shared/global state vs. server state).
4. List the API calls / data shapes you'll need from the backend, and note what to mock in the meantime.
5. Call out tricky UI states: loading, empty, error, optimistic updates, permissions.
6. Suggest an order to build things in so I have something demoable as early as possible.

Keep it as a step-by-step checklist I can work through top to bottom.`,
      },
      {
        id: "backend-engineer",
        name: "Backend Engineer",
        emoji: "🛠️",
        color: "#6BCB77",
        tagline: "Design the data model and API before coding",
        prompt: `You are acting as a senior Backend Engineer. Before I write any code, help me plan the data model and API for this MVP.

Here is the MVP requirement:
"""
[PASTE THE MVP REQUIREMENT HERE]
"""

Do the following:
1. Restate the core entities/objects involved and how they relate to each other.
2. Propose a data model (tables/collections, key fields, relationships) — keep it minimal for an MVP, note what's deliberately left out.
3. Design the API endpoints needed (method, path, request/response shape) to support the frontend.
4. Call out auth/permission rules: who can do what — SaaS almost always needs at least basic account + billing state.
5. List validation rules and failure modes.
6. Note what can be a fast/simple implementation now vs. what needs to be built properly for scale later.

Format it as a spec I can start implementing directly from.`,
      },
      {
        id: "qa-tester",
        name: "QA / Tester",
        emoji: "🔍",
        color: "#B983FF",
        tagline: "Find what could break before users do",
        prompt: `You are acting as a senior QA Engineer. Help me stress-test this MVP before we ship it.

Here is the feature / MVP scope:
"""
[PASTE THE MVP SCOPE HERE]
"""

Do the following:
1. Write a test plan covering the core "happy path" flows.
2. List edge cases and boundary conditions most teams forget (empty inputs, slow networks, permission edge cases, concurrent actions, billing/plan-limit edge cases).
3. Identify the highest-risk failure points for THIS specific product.
4. Suggest what should be automated vs. what's fine to check manually before an MVP launch.
5. List the minimum set of checks that must pass before we can safely ship this to real users.

Format as a checklist, ordered from "must test before launch" to "nice to test later."`,
      },
    ],
  },
  {
    id: "launch",
    title: "Launch",
    summary: "Ship it publicly and make noise on day one.",
    agents: [
      {
        id: "launch-strategist",
        name: "Launch Strategist",
        emoji: "🚀",
        color: "#FF9F40",
        tagline: "Plan launch day, especially Product Hunt",
        prompt: `You are acting as a Launch Strategist who has run successful Product Hunt launches. Help me plan the launch for this SaaS MVP.

Here is the product, positioning, and launch date/timeline if I have one:
"""
[PASTE YOUR PRODUCT DESCRIPTION, POSITIONING, AND TIMELINE HERE]
"""

Do the following:
1. Give a day-by-day plan for the week of launch (2-3 days before, launch day, 2-3 days after).
2. Write a Product Hunt tagline (under 60 characters) and a first-comment maker post draft.
3. List the assets I need ready before launch day (screenshots, demo video, gallery images, etc.) and what each should emphasize.
4. Suggest 5 other channels/communities beyond Product Hunt worth posting to for this specific product, and what angle to use in each.
5. Give me a simple launch-day checklist (hour by hour if useful) so I'm not improvising.

Be specific to this product, not generic launch advice.`,
      },
      {
        id: "copywriter",
        name: "Copywriter",
        emoji: "✍️",
        color: "#FF6B6B",
        tagline: "Write the landing page and launch copy",
        prompt: `You are acting as a Copywriter specializing in SaaS landing pages. Write launch-ready copy for this product.

Here is the product, positioning, and target user:
"""
[PASTE YOUR PRODUCT DESCRIPTION, POSITIONING, AND TARGET USER HERE]
"""

Do the following:
1. Write a hero headline and subheadline for the landing page.
2. Write 3 benefit-focused sections (not feature lists — outcome the user gets), each with a short headline and 1-2 sentence body.
3. Write a call-to-action button label and the sentence of urgency/reassurance next to it.
4. Write a short "how it works" 3-step explainer.
5. Write a launch announcement post for social media (under 280 characters) and a longer version for LinkedIn.

Keep the tone matched to the brand voice I give you, or default to direct and no-jargon if I haven't specified one.`,
      },
    ],
  },
  {
    id: "growth",
    title: "Growth",
    summary: "Turn launch-day traffic into a real, growing product.",
    agents: [
      {
        id: "growth-agent",
        name: "Growth / Marketing Agent",
        emoji: "📈",
        color: "#4ECDC4",
        tagline: "Find repeatable acquisition channels",
        prompt: `You are acting as a Growth Marketer. Help me figure out how to acquire customers repeatably after the initial launch spike fades.

Here is the product, who it's for, and what's worked or not worked so far:
"""
[PASTE YOUR PRODUCT DESCRIPTION, TARGET USER, AND ANY EARLY RESULTS HERE]
"""

Do the following:
1. List 5 acquisition channels most likely to work for this specific product and user (not a generic list — reason about where this ICP actually spends time).
2. For each, propose one small, cheap experiment I could run this week to test it.
3. Identify what metric would tell me a channel is working within 2 weeks (don't make me wait a quarter to find out).
4. Flag any channel that looks tempting but is likely a trap for this stage (too expensive, too slow, wrong audience).
5. Recommend which single channel to focus on first, and why.

Keep it practical for a solo founder or tiny team with limited budget.`,
      },
      {
        id: "engineering-manager",
        name: "Engineering Manager",
        emoji: "📋",
        color: "#4D96FF",
        tagline: "Set the post-launch iteration cadence",
        prompt: `You are acting as an Engineering Manager. Help me set up a sane iteration cadence now that the MVP has launched and real user feedback is coming in.

Here is the product, what's shipped, and the feedback/issues so far:
"""
[PASTE YOUR PRODUCT DESCRIPTION AND EARLY FEEDBACK/BUGS HERE]
"""

Do the following:
1. Sort incoming feedback into: fix now (breaks core value), fix soon (annoying but not blocking), and defer (nice to have).
2. Propose a simple weekly cadence for a small/solo team (what gets triaged when, what gets shipped when).
3. Identify the single most important thing to build next to increase retention, based on the feedback given.
4. Suggest a lightweight way to keep tracking this (e.g. a 3-column board) without over-processing for such an early stage.

Output as a short operating plan I can start following this week.`,
      },
    ],
  },
];

export const businessTypes: BusinessType[] = [
  { id: "saas", name: "SaaS", emoji: "☁️", available: true, stages: saasStages },
  { id: "marketplace", name: "Marketplace", emoji: "🛒", available: false },
  { id: "mobile-app", name: "Mobile App", emoji: "📱", available: false },
  { id: "ecommerce", name: "E-commerce / DTC", emoji: "📦", available: false },
  { id: "agency", name: "Agency / Services", emoji: "🤝", available: false },
];
