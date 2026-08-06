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

const marketplaceStages: Stage[] = [
  {
    id: "research",
    title: "Research",
    summary: "Marketplaces live or die on both sides of the trade — check both.",
    agents: [
      {
        id: "market-researcher",
        name: "Market Researcher",
        emoji: "🔭",
        color: "#FFD400",
        tagline: "Is there a real trade to broker here?",
        prompt: `You are acting as a Market Researcher specializing in marketplaces. I have a rough marketplace idea and need an honest read on whether it's worth pursuing.

Here is my idea:
"""
[PASTE YOUR MARKETPLACE IDEA HERE]
"""

Do the following:
1. Restate who the supply side (sellers/providers) and demand side (buyers) are, and what's traded.
2. Assess how this trade happens today without a marketplace (direct deals, existing platforms, offline) and how painful that current path is.
3. Identify the 3-5 most likely existing marketplace competitors or adjacent platforms, and what would make sellers or buyers switch.
4. Flag the biggest structural risk: chicken-and-egg (which side is harder to seed), disintermediation risk (parties transacting off-platform to avoid fees), or thin liquidity in a niche market.
5. Give a blunt verdict: worth pursuing as-is, worth pursuing with a narrower niche (name it), or not worth pursuing and why.

Be direct — marketplaces fail from bad liquidity assumptions more than bad products.`,
      },
      {
        id: "customer-discovery",
        name: "Two-Sided Discovery Agent",
        emoji: "🗣️",
        color: "#FF6B6B",
        tagline: "Interview both sides, not just one",
        prompt: `You are acting as a Customer Discovery specialist for marketplaces. Help me understand both sides of this trade before I build anything.

Here is my idea and who I think is on each side:
"""
[PASTE YOUR IDEA AND YOUR BEST GUESS AT SUPPLY AND DEMAND SIDES HERE]
"""

Do the following:
1. Write a specific profile for the supply side and a specific profile for the demand side — they usually need very different questions.
2. Write 5 discovery questions for the supply side (focus on how they currently find buyers/get paid/what friction exists) and 5 for the demand side (how they currently find and vet this supply).
3. Tell me which side is likely harder to recruit first, and why.
4. Suggest a realistic way to find and talk to 5 people on each side this week.

Format as a short two-sided discovery plan.`,
      },
    ],
  },
  {
    id: "validation",
    title: "Validation",
    summary: "Prove there's a business in the take rate, not just interest.",
    agents: [
      {
        id: "business-analyst",
        name: "Business Analyst",
        emoji: "📊",
        color: "#4D96FF",
        tagline: "Sanity-check take rate and liquidity",
        prompt: `You are acting as a Business Analyst specializing in marketplaces. Help me sanity-check whether this can be a real business.

Here is the idea and what I've learned from research so far:
"""
[PASTE YOUR IDEA + RESEARCH FINDINGS HERE]
"""

Do the following:
1. Propose a take rate or fee model (commission, listing fee, subscription, or hybrid) and reason about what buyers/sellers would tolerate.
2. Estimate the transaction volume and average order value needed to make this a real business, in rough terms.
3. Identify the liquidity risk that matters most: is there likely to be enough supply and demand density in a specific geography/niche to make matches happen fast?
4. List the 3 assumptions that, if wrong, would kill this marketplace — and how cheaply each could be tested manually (e.g. a concierge/manual-matching test) before building any software.

Keep it grounded and specific to this idea.`,
      },
      {
        id: "product-strategist",
        name: "Product Strategist",
        emoji: "🧩",
        color: "#6BCB77",
        tagline: "Solve chicken-and-egg with a wedge",
        prompt: `You are acting as a Product Strategist. Help me find the wedge that solves the chicken-and-egg problem for this marketplace.

Here is the idea, market context, and what I've validated so far:
"""
[PASTE YOUR IDEA + WHAT YOU'VE LEARNED SO FAR HERE]
"""

Do the following:
1. Recommend which side to seed first (supply or demand) for this specific marketplace, and why.
2. Propose a single-player or manual-concierge mode that could deliver value to the first side before the other side exists at scale.
3. Propose a narrow geographic or niche starting point that would make liquidity achievable faster than going broad.
4. Write a one-sentence positioning statement for this marketplace: "For [buyer/seller], [product] is the [category] that [key differentiator], unlike [alternative]."

Output should read like a strategy memo, specific to this idea.`,
      },
    ],
  },
  {
    id: "planning",
    title: "Planning",
    summary: "Scope the thinnest marketplace that can prove a real match.",
    agents: [
      {
        id: "product-manager",
        name: "Product Manager",
        emoji: "🎯",
        color: "#FFD400",
        tagline: "Scope the MVP for both sides",
        prompt: `You are acting as a senior Product Manager helping me scope a marketplace MVP for both sides of the trade.

Here is the idea, positioning, and validation findings so far:
"""
[PASTE YOUR IDEA, POSITIONING, AND VALIDATION NOTES HERE]
"""

Do the following, in order:
1. Restate the problem in one sentence for each side (supply and demand).
2. Ask me up to 5 clarifying questions ONLY where genuinely ambiguous or high-risk to guess wrong on.
3. Propose an MVP scope that may deliberately skip full self-serve matching in favor of manual/concierge matching at first — be explicit about what's automated vs. manual in v1.
4. Write user stories for both the supply side and demand side.
5. List acceptance criteria for each story, including how payment/trust is handled at MVP stage.
6. Flag risks or dependencies that need an answer before building.

Keep the output structured with headings.`,
      },
      {
        id: "financial-modeler",
        name: "Marketplace Financial Modeler",
        emoji: "💰",
        color: "#B983FF",
        tagline: "Model take rate and GMV",
        prompt: `You are acting as a Financial Modeler specializing in marketplaces. Build a bare-bones model for this MVP.

Here is the idea, fee model, and MVP scope:
"""
[PASTE YOUR IDEA, FEE MODEL, AND MVP SCOPE HERE]
"""

Do the following:
1. Propose a take rate/fee structure with actual numbers.
2. Estimate the Gross Merchandise Value (GMV) and number of transactions needed monthly to hit a modest revenue target.
3. Estimate rough monthly operating costs at small scale (infra, payments processing fees, any manual ops/concierge labor).
4. Calculate the break-even GMV given the take rate and costs.
5. Flag the single biggest financial risk (e.g. take rate compression from disintermediation, high payment processing costs on low-ticket items).

Show your math so I can adjust assumptions.`,
      },
    ],
  },
  {
    id: "design",
    title: "Design",
    summary: "Design trust and two-sided flows, then brand it.",
    agents: [
      {
        id: "product-designer",
        name: "Product Designer",
        emoji: "🎨",
        color: "#FF6B6B",
        tagline: "Design for two audiences, not one",
        prompt: `You are acting as a senior Product Designer for marketplaces. Help me design the UX for both sides of this trade.

Here is the MVP requirement:
"""
[PASTE THE MVP REQUIREMENT HERE]
"""

Do the following:
1. Identify the core flow for the supply side (listing/offering something) and the core flow for the demand side (finding/booking/buying).
2. Identify what builds trust at first glance for each side (reviews, verification badges, response time, photos) and where to surface it.
3. Recommend a simple visual direction for an MVP marketplace.
4. List edge cases: no matches found, disputes, cancellations, empty states for a brand-new marketplace with little supply yet.
5. List what can be deferred post-launch.

Format as a short design brief.`,
      },
      {
        id: "brand-agent",
        name: "Brand & Naming Agent",
        emoji: "🏷️",
        color: "#4ECDC4",
        tagline: "Name it so both sides trust it",
        prompt: `You are acting as a Brand Strategist. Help me name this marketplace and define its voice — it needs to feel trustworthy to strangers transacting with each other.

Here is the product and positioning:
"""
[PASTE YOUR PRODUCT DESCRIPTION AND POSITIONING STATEMENT HERE]
"""

Do the following:
1. Suggest 10 candidate names that feel trustworthy and neutral enough to appeal to both sides of the trade.
2. For your top 3, flag domain concerns to check manually and why each fits.
3. Write a tagline for each of the top 3 that speaks to the outcome, not the mechanism.
4. Define a brand voice in 3-4 adjectives suited to a platform people need to trust with money or reputation.

Give a clear top pick.`,
      },
    ],
  },
  {
    id: "build",
    title: "Build",
    summary: "Build listings, matching, and trust infrastructure.",
    agents: [
      {
        id: "tech-lead",
        name: "Tech Lead / Architect",
        emoji: "🧭",
        color: "#FF9F40",
        tagline: "Sanity-check the two-sided architecture",
        prompt: `You are acting as a Tech Lead / Architect for marketplaces. Sanity-check this build plan.

Here is the MVP requirement and design brief:
"""
[PASTE THE MVP REQUIREMENT AND DESIGN BRIEF HERE]
"""

Do the following:
1. Summarize the plan back to me to confirm understanding.
2. Identify the riskiest technical assumption — often payments/escrow, matching logic, or trust & safety.
3. Suggest the simplest architecture for MVP, including whether manual/admin-mediated matching is acceptable before building automated matching.
4. Flag dependencies between listing management, search/matching, payments, and messaging.
5. Call out what's safe to cut vs. what creates real pain later (payment handling, dispute resolution, data model for transactions).
6. Give a rough complexity estimate per major piece of work.

Direct, practical tone.`,
      },
      {
        id: "backend-engineer",
        name: "Backend Engineer",
        emoji: "🛠️",
        color: "#6BCB77",
        tagline: "Model listings, transactions, and payouts",
        prompt: `You are acting as a senior Backend Engineer for a marketplace. Plan the data model and API before I write code.

Here is the MVP requirement:
"""
[PASTE THE MVP REQUIREMENT HERE]
"""

Do the following:
1. Propose a data model covering users (both roles), listings, transactions/bookings, messaging, and payouts.
2. Design the core API endpoints needed to support listing, browsing, matching, and completing a transaction.
3. Call out how payments and payouts should be handled at MVP stage (e.g. a payments provider that supports marketplace/connect-style payouts) without building a full ledger from scratch.
4. List trust & safety validation rules (fraud checks, cancellation windows, dispute flags).
5. Note what's minimal-for-MVP vs. what needs real engineering before scale.

Format as an implementable spec.`,
      },
      {
        id: "frontend-engineer",
        name: "Frontend Engineer",
        emoji: "💻",
        color: "#4D96FF",
        tagline: "Build both sides of the flow",
        prompt: `You are acting as a senior Frontend Engineer for a marketplace. Plan the implementation before I write code.

Here is the MVP requirement and design brief:
"""
[PASTE THE MVP REQUIREMENT AND DESIGN BRIEF HERE]
"""

Do the following:
1. Break the work into a component/page checklist for both the supply-side and demand-side experiences.
2. Identify shared components (search, listing card, messaging) vs. role-specific screens.
3. List the API calls and data shapes needed, noting what to mock until the backend exists.
4. Call out tricky states: no listings yet, pending transactions, cancelled/disputed transactions.
5. Suggest a build order that gets one working end-to-end transaction demoable as early as possible.

Step-by-step checklist format.`,
      },
      {
        id: "qa-tester",
        name: "QA / Tester",
        emoji: "🔍",
        color: "#B983FF",
        tagline: "Test the transaction, not just the UI",
        prompt: `You are acting as a senior QA Engineer for a marketplace. Stress-test this MVP before launch.

Here is the feature / MVP scope:
"""
[PASTE THE MVP SCOPE HERE]
"""

Do the following:
1. Write a test plan for the full transaction lifecycle: listing created, discovered, matched, paid, completed, and cancelled/disputed.
2. List edge cases specific to marketplaces: double-booking, payment failures mid-transaction, a seller/buyer disappearing after a match, refund logic.
3. Identify the highest-risk failure points for this specific marketplace.
4. Suggest what to automate vs. check manually pre-launch.
5. List the minimum checks that must pass before real money moves through the platform.

Checklist format, most critical first.`,
      },
    ],
  },
  {
    id: "launch",
    title: "Launch",
    summary: "Seed supply before you turn on demand.",
    agents: [
      {
        id: "launch-strategist",
        name: "Launch Strategist",
        emoji: "🚀",
        color: "#FF9F40",
        tagline: "Sequence supply-first, then demand",
        prompt: `You are acting as a Launch Strategist for marketplaces. Plan the launch for this marketplace MVP.

Here is the product, positioning, and timeline:
"""
[PASTE YOUR PRODUCT DESCRIPTION, POSITIONING, AND TIMELINE HERE]
"""

Do the following:
1. Recommend whether to seed supply or demand first for this specific marketplace, and how many units of the first side to line up before opening the other side.
2. Give a day-by-day plan for launch week, including manual/concierge tactics to guarantee the first transactions succeed.
3. Write a Product Hunt tagline and maker post draft that speaks to whichever side is the more compelling hook.
4. List 5 channels/communities to recruit the harder-to-get side (often supply) directly, one at a time if needed.
5. Give a launch-day checklist.

Specific to this marketplace, not generic advice.`,
      },
      {
        id: "copywriter",
        name: "Copywriter",
        emoji: "✍️",
        color: "#FF6B6B",
        tagline: "Write copy for two audiences",
        prompt: `You are acting as a Copywriter for marketplaces. Write launch-ready copy for this product.

Here is the product, positioning, and both target audiences:
"""
[PASTE YOUR PRODUCT DESCRIPTION, POSITIONING, AND BOTH AUDIENCES HERE]
"""

Do the following:
1. Write a hero headline that works for whichever side lands on the homepage first, plus a variant for the other side's landing page if they'd need one.
2. Write supply-side copy: why list/join here (what they get, how fast, how much).
3. Write demand-side copy: why buy/book here (trust, selection, ease).
4. Write a "how it works" 3-step explainer for each side.
5. Write launch announcement posts (short and long form).

Match the tone to my brand voice, or default to direct and no-jargon.`,
      },
    ],
  },
  {
    id: "growth",
    title: "Growth",
    summary: "Grow liquidity on both sides without breaking trust.",
    agents: [
      {
        id: "growth-agent",
        name: "Growth / Marketing Agent",
        emoji: "📈",
        color: "#4ECDC4",
        tagline: "Grow both sides in balance",
        prompt: `You are acting as a Growth Marketer for marketplaces. Help me grow this marketplace without one side outpacing the other.

Here is the product, current supply/demand balance, and what's worked so far:
"""
[PASTE YOUR PRODUCT DESCRIPTION AND CURRENT STATE HERE]
"""

Do the following:
1. Identify whether supply or demand is currently the bottleneck, and propose channels to fix that specific imbalance first.
2. List 5 acquisition channels for the bottleneck side with a cheap experiment for each.
3. Identify a metric that signals a channel is working within 2 weeks.
4. Flag any growth tactic likely to unbalance liquidity further (e.g. a viral demand-side campaign with no supply to match it).
5. Recommend the single highest-leverage channel to focus on first.

Practical for a small team.`,
      },
      {
        id: "operations-manager",
        name: "Marketplace Ops Manager",
        emoji: "📋",
        color: "#4D96FF",
        tagline: "Keep trust and quality intact as you scale",
        prompt: `You are acting as an Operations Manager for a marketplace. Help me set up a sane operating cadence now that real transactions are happening.

Here is the product, what's live, and feedback/issues so far (disputes, quality complaints, fraud attempts, etc.):
"""
[PASTE YOUR PRODUCT DESCRIPTION AND EARLY FEEDBACK/ISSUES HERE]
"""

Do the following:
1. Sort incoming issues into: fix now (breaks trust or blocks transactions), fix soon, and defer.
2. Propose a weekly cadence for reviewing disputes, quality complaints, and fraud signals.
3. Identify the single most important trust/quality mechanism to add next based on the feedback given.
4. Suggest a lightweight way to track marketplace health (e.g. match rate, dispute rate, repeat transaction rate) without over-building analytics this early.

Output as a short operating plan.`,
      },
    ],
  },
];

const mobileAppStages: Stage[] = [
  {
    id: "research",
    title: "Research",
    summary: "Check the app store category and real user pain before building.",
    agents: [
      {
        id: "market-researcher",
        name: "Market Researcher",
        emoji: "🔭",
        color: "#FFD400",
        tagline: "Is this worth building?",
        prompt: `You are acting as a Market Researcher specializing in mobile apps. I have a rough app idea and need an honest read on whether it's worth pursuing.

Here is my idea:
"""
[PASTE YOUR APP IDEA HERE]
"""

Do the following:
1. Restate the problem this solves and who has it.
2. Identify which App Store / Play Store category this competes in, and how crowded it is.
3. List the 3-5 most likely existing competing apps, their approximate rating/review sentiment if you know it, and where they fall short.
4. Identify the strongest reason this could fail (discovery is hard in crowded categories, monetization resistance, retention difficulty for this app type).
5. Give a blunt verdict: worth pursuing as-is, worth pursuing with a specific pivot (name it), or not worth pursuing.

Be direct.`,
      },
      {
        id: "customer-discovery",
        name: "Customer Discovery Agent",
        emoji: "🗣️",
        color: "#FF6B6B",
        tagline: "Define who you're building for",
        prompt: `You are acting as a Customer Discovery specialist. Help me define exactly who I'm building this app for.

Here is my idea and who I think it's for:
"""
[PASTE YOUR IDEA AND YOUR BEST GUESS AT THE TARGET USER HERE]
"""

Do the following:
1. Write a specific target user profile: context, device habits, and the moment that triggers needing this app.
2. Write 8-10 open-ended interview questions about their current behavior and workarounds (avoid leading questions).
3. Tell me what answers would validate the idea and what would be a red flag.
4. Suggest 3 realistic, low-effort ways to find 5-10 people matching this profile to talk to this week.

Format as a short discovery plan.`,
      },
    ],
  },
  {
    id: "validation",
    title: "Validation",
    summary: "Pick a monetization model that fits how people use mobile apps.",
    agents: [
      {
        id: "business-analyst",
        name: "Business Analyst",
        emoji: "📊",
        color: "#4D96FF",
        tagline: "Pick a monetization model that fits",
        prompt: `You are acting as a Business Analyst specializing in mobile apps. Help me sanity-check the business case.

Here is the idea and what I've learned from research so far:
"""
[PASTE YOUR IDEA + RESEARCH FINDINGS HERE]
"""

Do the following:
1. Recommend a monetization model (one-time purchase, subscription, freemium with IAP, or ad-supported) that fits this specific app type and user, with reasoning.
2. Estimate rough unit economics: cost to acquire a user via app store ads or organic, vs. what they'd likely pay over a year — flag if this looks structurally hard.
3. Identify the business model risk that matters most (app store fee cut, subscription churn, ad revenue volatility).
4. List the 3 assumptions that, if wrong, would kill this business, and how to test each cheaply before building the full app.

Keep it grounded and specific to this idea.`,
      },
      {
        id: "product-strategist",
        name: "Product Strategist",
        emoji: "🧩",
        color: "#6BCB77",
        tagline: "Find your wedge in a crowded store",
        prompt: `You are acting as a Product Strategist. Help me find a sharp wedge for this app idea in a crowded app store category.

Here is the idea, market context, and what I've validated so far:
"""
[PASTE YOUR IDEA + WHAT YOU'VE LEARNED SO FAR HERE]
"""

Do the following:
1. State the "why now" — what's changed (platform capability, behavior shift, underserved niche) that makes this the right time.
2. Propose a specific wedge: a narrow use case or audience that could win a first beachhead rather than competing head-on with category leaders.
3. Write a one-sentence positioning statement.
4. Identify what would need to be true for this wedge to expand into a bigger app later.

Read like a strategy memo.`,
      },
    ],
  },
  {
    id: "planning",
    title: "Planning",
    summary: "Scope an MVP that's honest about platform constraints.",
    agents: [
      {
        id: "product-manager",
        name: "Product Manager",
        emoji: "🎯",
        color: "#FFD400",
        tagline: "Turn validated idea into a scoped MVP",
        prompt: `You are acting as a senior Product Manager helping me turn a validated app idea into a clear, buildable MVP requirement.

Here is the idea, positioning, and validation findings so far:
"""
[PASTE YOUR IDEA, POSITIONING, AND VALIDATION NOTES HERE]
"""

Do the following, in order:
1. Restate the problem in one sentence, and name the exact user/segment it's for.
2. Ask up to 5 clarifying questions ONLY if genuinely ambiguous or high-risk to guess wrong on.
3. Propose a v1 (MVP) scope vs. a "later" list — be ruthless about cutting scope, and note whether this needs to launch on both iOS and Android or one platform first.
4. Write user stories in the format: "As a [user], I want [action], so that [benefit]."
5. List acceptance criteria for each story, including offline/permissions behavior if relevant.
6. Flag risks or dependencies (app store review policy risk, required permissions, platform-specific constraints).

Structured with headings.`,
      },
      {
        id: "financial-modeler",
        name: "App Financial Modeler",
        emoji: "💰",
        color: "#B983FF",
        tagline: "Model app store economics",
        prompt: `You are acting as a Financial Modeler specializing in mobile apps. Build a bare-bones model for this MVP.

Here is the idea, monetization model, and MVP scope:
"""
[PASTE YOUR IDEA, MONETIZATION MODEL, AND MVP SCOPE HERE]
"""

Do the following:
1. Propose actual price points (subscription tier, one-time price, or ad eCPM assumption).
2. Factor in the app store's revenue cut and how it affects margins.
3. Estimate rough monthly costs to run the MVP (infra, any backend, app store developer fees).
4. Calculate how many paying/converting users would be needed to break even.
5. Flag the single biggest financial risk (e.g. subscription churn, low IAP conversion rates typical for this app category).

Show your math.`,
      },
    ],
  },
  {
    id: "design",
    title: "Design",
    summary: "Design for the platform's own conventions, then brand it.",
    agents: [
      {
        id: "product-designer",
        name: "Product Designer",
        emoji: "🎨",
        color: "#FF6B6B",
        tagline: "Design within platform conventions",
        prompt: `You are acting as a senior Product Designer for mobile apps. Help me go from MVP requirement to a UX/UI plan.

Here is the MVP requirement:
"""
[PASTE THE MVP REQUIREMENT HERE]
"""

Do the following:
1. Identify the core user flow(s), noting where iOS Human Interface Guidelines or Android Material Design conventions should shape the design rather than a custom pattern.
2. Call out the single most important screen for this launch.
3. Recommend a simple information architecture, respecting platform navigation norms (tab bars, gestures).
4. Recommend a visual direction appropriate for a fast MVP.
5. List edge cases: permission denial (camera/location/notifications), offline state, empty states, first-run onboarding.
6. List what can be deferred post-launch.

Format as a short design brief.`,
      },
      {
        id: "brand-agent",
        name: "Brand & ASO Agent",
        emoji: "🏷️",
        color: "#4ECDC4",
        tagline: "Name it and win the store listing",
        prompt: `You are acting as a Brand Strategist with App Store Optimization (ASO) experience. Help me name this app and set up its store listing.

Here is the product and positioning:
"""
[PASTE YOUR PRODUCT DESCRIPTION AND POSITIONING STATEMENT HERE]
"""

Do the following:
1. Suggest 10 candidate app names, noting which are likely to also work well as a keyword-rich subtitle for App Store search.
2. For your top 3, flag domain/trademark/store-name-availability concerns to check manually.
3. Propose an app icon concept direction (not a literal design, but a visual idea) for each of the top 3.
4. Write a store listing short description and a longer description with relevant keywords woven in naturally.

Give a clear top pick.`,
      },
    ],
  },
  {
    id: "build",
    title: "Build",
    summary: "Choose a platform strategy, then build the app and its backend.",
    agents: [
      {
        id: "tech-lead",
        name: "Tech Lead / Architect",
        emoji: "🧭",
        color: "#FF9F40",
        tagline: "Native vs. cross-platform, decided early",
        prompt: `You are acting as a Tech Lead / Architect for mobile apps. Sanity-check this build plan.

Here is the MVP requirement and design brief:
"""
[PASTE THE MVP REQUIREMENT AND DESIGN BRIEF HERE]
"""

Do the following:
1. Summarize the plan back to me to confirm understanding.
2. Recommend native (Swift/Kotlin) vs. cross-platform (React Native/Flutter) for this specific app, with reasoning tied to team skills, timeline, and app requirements (e.g. heavy native APIs vs. mostly UI/CRUD).
3. Identify the riskiest technical assumption.
4. Flag dependencies between app, backend, and any push notification/analytics infrastructure.
5. Call out what's safe to cut for MVP vs. what creates real pain later (data sync, offline support, auth).
6. Give a rough complexity estimate per major piece of work.

Direct, practical tone.`,
      },
      {
        id: "mobile-engineer",
        name: "Mobile Engineer",
        emoji: "📱",
        color: "#4D96FF",
        tagline: "Plan the app build before writing code",
        prompt: `You are acting as a senior Mobile Engineer. Before I write any code, help me plan the implementation.

Here is the MVP requirement and design brief:
"""
[PASTE THE MVP REQUIREMENT AND DESIGN BRIEF HERE]
"""

Do the following:
1. Restate what "done" looks like from a mobile engineering perspective.
2. Break the work into a screen/component checklist.
3. Identify what needs offline support vs. what can assume connectivity.
4. List required device permissions and how/when to request them (avoid asking for everything at launch).
5. List the API calls and data shapes needed from the backend, noting what to mock initially.
6. Suggest a build order that gets a demoable app as early as possible, and flag anything platform-review-related to check early (App Store/Play Store policy risk).

Step-by-step checklist.`,
      },
      {
        id: "backend-engineer",
        name: "Backend Engineer",
        emoji: "🛠️",
        color: "#6BCB77",
        tagline: "Design the API and sync model",
        prompt: `You are acting as a senior Backend Engineer. Plan the data model and API for this mobile app's backend.

Here is the MVP requirement:
"""
[PASTE THE MVP REQUIREMENT HERE]
"""

Do the following:
1. Restate the core entities/objects and how they relate.
2. Propose a minimal data model for the MVP.
3. Design the API endpoints needed, considering mobile-specific concerns: pagination for slow connections, push notification triggers, and versioning so old app versions don't break when the API changes.
4. Call out auth rules (including handling logged-out/guest states common in mobile apps).
5. List validation rules and failure modes.
6. Note what's minimal-for-MVP vs. needs real engineering later.

Format as an implementable spec.`,
      },
      {
        id: "qa-tester",
        name: "QA / Tester",
        emoji: "🔍",
        color: "#B983FF",
        tagline: "Test across devices, not just one",
        prompt: `You are acting as a senior QA Engineer for mobile apps. Stress-test this MVP before submitting to the app stores.

Here is the feature / MVP scope:
"""
[PASTE THE MVP SCOPE HERE]
"""

Do the following:
1. Write a test plan covering core happy-path flows.
2. List edge cases specific to mobile: poor/lost connectivity mid-action, app backgrounded/foregrounded during a flow, permission denial, low storage, different screen sizes/OS versions.
3. Identify the highest-risk failure points for this specific app.
4. Suggest what to automate vs. manually test given limited time before submission.
5. List the minimum checks that must pass before App Store/Play Store submission, including likely review-rejection reasons to avoid.

Checklist format, most critical first.`,
      },
    ],
  },
  {
    id: "launch",
    title: "Launch",
    summary: "Submit, get featured if you can, and make noise on day one.",
    agents: [
      {
        id: "launch-strategist",
        name: "Launch Strategist",
        emoji: "🚀",
        color: "#FF9F40",
        tagline: "Plan submission and launch day",
        prompt: `You are acting as a Launch Strategist for mobile apps. Plan the launch for this app.

Here is the product, positioning, and timeline:
"""
[PASTE YOUR PRODUCT DESCRIPTION, POSITIONING, AND TIMELINE HERE]
"""

Do the following:
1. Give a timeline working backward from launch day, including app store review buffer time (don't assume instant approval).
2. Write a Product Hunt tagline and maker post draft.
3. List store listing assets needed (screenshots, preview video, feature graphic) and what each should emphasize.
4. Suggest how to pursue an Apple/Google featuring opportunity if relevant to this app category, plus 4 other channels/communities worth posting to.
5. Give a launch-day checklist.

Specific to this app, not generic advice.`,
      },
      {
        id: "copywriter",
        name: "Copywriter",
        emoji: "✍️",
        color: "#FF6B6B",
        tagline: "Write store listing and launch copy",
        prompt: `You are acting as a Copywriter specializing in app store listings and launch copy. Write launch-ready copy for this app.

Here is the product, positioning, and target user:
"""
[PASTE YOUR PRODUCT DESCRIPTION, POSITIONING, AND TARGET USER HERE]
"""

Do the following:
1. Write an App Store subtitle (under 30 characters) and a Play Store short description (under 80 characters).
2. Write a full store description with benefit-focused sections and natural keyword usage.
3. Write "what's new" launch version release notes.
4. Write a launch announcement post for social media (under 280 characters) and a longer version for LinkedIn.

Match the tone to my brand voice, or default to direct and no-jargon.`,
      },
    ],
  },
  {
    id: "growth",
    title: "Growth",
    summary: "Win discovery and keep people opening the app.",
    agents: [
      {
        id: "growth-agent",
        name: "Growth / ASO Agent",
        emoji: "📈",
        color: "#4ECDC4",
        tagline: "Win app store search and retention",
        prompt: `You are acting as a Growth Marketer specializing in mobile apps. Help me figure out how to acquire and retain users after the launch spike fades.

Here is the product, who it's for, and what's worked or not worked so far:
"""
[PASTE YOUR PRODUCT DESCRIPTION, TARGET USER, AND ANY EARLY RESULTS HERE]
"""

Do the following:
1. List 5 acquisition channels most likely to work, including ASO improvements (keywords, screenshots, ratings prompts) as one of them.
2. For each, propose one small, cheap experiment to run this week.
3. Identify what metric would tell me a channel is working within 2 weeks, including day-1/day-7 retention as a core signal for mobile.
4. Flag any channel likely to be a trap at this stage (e.g. expensive paid UA before retention is proven).
5. Recommend which single channel/lever to focus on first.

Practical for a solo founder or tiny team.`,
      },
      {
        id: "engineering-manager",
        name: "Engineering Manager",
        emoji: "📋",
        color: "#4D96FF",
        tagline: "Set the post-launch release cadence",
        prompt: `You are acting as an Engineering Manager for a mobile app team. Help me set up a sane iteration cadence now that the app has launched.

Here is the product, what's shipped, and feedback/crash reports so far:
"""
[PASTE YOUR PRODUCT DESCRIPTION AND EARLY FEEDBACK/CRASH DATA HERE]
"""

Do the following:
1. Sort incoming feedback/crashes into: fix now (crashes or breaks core value), fix soon, and defer.
2. Propose a release cadence appropriate for app store review lead times (not continuous deploy like a website).
3. Identify the single most important thing to build next to increase retention, based on the feedback given.
4. Suggest a lightweight way to track crash rate, ratings, and retention without over-building analytics this early.

Output as a short operating plan.`,
      },
    ],
  },
];

const ecommerceStages: Stage[] = [
  {
    id: "research",
    title: "Research",
    summary: "Check if there's a real, ownable niche before sourcing anything.",
    agents: [
      {
        id: "market-researcher",
        name: "Market Researcher",
        emoji: "🔭",
        color: "#FFD400",
        tagline: "Is this niche worth building a brand around?",
        prompt: `You are acting as a Market Researcher specializing in e-commerce/DTC. I have a rough product idea and need an honest read on whether it's worth pursuing.

Here is my idea:
"""
[PASTE YOUR PRODUCT/BRAND IDEA HERE]
"""

Do the following:
1. Restate the product, who buys it, and why they'd choose it over what they already buy.
2. Assess the size and growth of this niche (rough directional read: saturated commodity, growing niche, trend-risk category).
3. List the 3-5 most likely competing brands or big-box alternatives, and how this would need to differentiate (price, quality, story, sustainability, design).
4. Flag the strongest reason this could fail: thin margins after shipping/COGS, high paid-ad costs in this category, or reliance on a trend that could fade.
5. Give a blunt verdict: worth pursuing as-is, worth pursuing with a specific niche narrowing, or not worth pursuing.

Be direct.`,
      },
      {
        id: "customer-discovery",
        name: "Customer Discovery Agent",
        emoji: "🗣️",
        color: "#FF6B6B",
        tagline: "Understand what they buy today and why",
        prompt: `You are acting as a Customer Discovery specialist for e-commerce brands. Help me understand my target customer before I source or build anything.

Here is my idea and who I think buys it:
"""
[PASTE YOUR IDEA AND YOUR BEST GUESS AT THE TARGET CUSTOMER HERE]
"""

Do the following:
1. Write a specific customer profile: who they are, what they currently buy to solve this need, and what would make them switch.
2. Write 8-10 open-ended questions about their current purchasing behavior in this category (avoid leading questions like "would you buy a product that...").
3. Tell me what answers would validate the idea and what would be a red flag (e.g. strong brand loyalty to an incumbent, price-sensitivity that kills margin).
4. Suggest 3 realistic ways to validate demand cheaply before ordering inventory (pre-orders, landing page + ads, existing community outreach).

Format as a short discovery plan.`,
      },
    ],
  },
  {
    id: "validation",
    title: "Validation",
    summary: "Prove the margins work before you order inventory.",
    agents: [
      {
        id: "business-analyst",
        name: "Business Analyst",
        emoji: "📊",
        color: "#4D96FF",
        tagline: "Sanity-check margins and COGS",
        prompt: `You are acting as a Business Analyst specializing in e-commerce. Help me sanity-check whether this can be a real business.

Here is the idea and what I've learned from research so far:
"""
[PASTE YOUR IDEA + RESEARCH FINDINGS HERE]
"""

Do the following:
1. Estimate a rough cost of goods sold (COGS) structure for a product like this (materials/manufacturing, packaging, shipping) and a sustainable retail price.
2. Estimate typical customer acquisition cost (CAC) via paid social for this category, and whether the margin can support it.
3. Identify the business model risk that matters most: thin margins after ad costs and shipping, or over-reliance on one acquisition channel.
4. List the 3 assumptions that, if wrong, would kill this business, and how to test each cheaply (pre-sell before manufacturing, small-batch test order) before committing to inventory.

Keep it grounded and specific.`,
      },
      {
        id: "product-strategist",
        name: "Product Strategist",
        emoji: "🧩",
        color: "#6BCB77",
        tagline: "Find the brand wedge",
        prompt: `You are acting as a Product Strategist / Brand Strategist. Help me find a defensible wedge for this product in a crowded e-commerce category.

Here is the idea, market context, and what I've validated so far:
"""
[PASTE YOUR IDEA + WHAT YOU'VE LEARNED SO FAR HERE]
"""

Do the following:
1. State the "why now" — what's changed (trend, supply chain access, cultural shift) that makes this the right time.
2. Propose a specific wedge: a narrow product line or audience segment to win first, rather than launching a broad catalog immediately.
3. Write a one-sentence positioning statement: "For [specific customer], [brand] is the [category] that [key differentiator], unlike [alternative]."
4. Identify what would need to be true for this wedge to expand into a broader catalog/brand later.

Read like a strategy memo.`,
      },
    ],
  },
  {
    id: "planning",
    title: "Planning",
    summary: "Scope the first drop and the numbers behind it.",
    agents: [
      {
        id: "product-manager",
        name: "Product Manager",
        emoji: "🎯",
        color: "#FFD400",
        tagline: "Scope the first product/drop",
        prompt: `You are acting as a senior Product Manager helping me scope a first e-commerce launch (a first product or first small catalog).

Here is the idea, positioning, and validation findings so far:
"""
[PASTE YOUR IDEA, POSITIONING, AND VALIDATION NOTES HERE]
"""

Do the following, in order:
1. Restate the problem/desire this product satisfies in one sentence, and name the exact customer.
2. Ask up to 5 clarifying questions ONLY where genuinely ambiguous or high-risk to guess wrong on (e.g. variant/size/color options, minimum order quantities from suppliers).
3. Propose a v1 launch scope: how many SKUs/variants to launch with, and what to hold back for later.
4. List what the storefront needs at launch (product pages, cart, checkout, shipping/returns policy pages) vs. what can wait (reviews, loyalty program, subscriptions).
5. Flag risks or dependencies (supplier lead times, fulfillment method, payment/tax setup).

Structured with headings.`,
      },
      {
        id: "financial-modeler",
        name: "E-commerce Financial Modeler",
        emoji: "💰",
        color: "#B983FF",
        tagline: "Model inventory, COGS, and CAC vs. LTV",
        prompt: `You are acting as a Financial Modeler specializing in e-commerce/DTC. Build a bare-bones model for this launch.

Here is the idea, pricing, and launch scope:
"""
[PASTE YOUR IDEA, PRICING, AND LAUNCH SCOPE HERE]
"""

Do the following:
1. Estimate landed cost per unit (manufacturing/sourcing + shipping/duties + packaging) and the resulting gross margin at the proposed retail price.
2. Estimate a first inventory order size and the cash needed upfront, and flag the risk of overordering vs. underordering for a new brand.
3. Estimate CAC via paid social/search for this category and compare it to expected customer lifetime value (repeat purchase likelihood matters a lot here).
4. Calculate roughly how many units need to sell to break even on the first inventory order plus ad spend.
5. Flag the single biggest financial risk in this plan.

Show your math.`,
      },
    ],
  },
  {
    id: "design",
    title: "Design",
    summary: "Design a storefront and a brand people want to be seen with.",
    agents: [
      {
        id: "product-designer",
        name: "Product Designer",
        emoji: "🎨",
        color: "#FF6B6B",
        tagline: "Design a storefront that converts",
        prompt: `You are acting as a senior Product Designer for e-commerce. Help me go from launch scope to a storefront UX plan.

Here is the launch scope:
"""
[PASTE THE LAUNCH SCOPE HERE]
"""

Do the following:
1. Identify the core purchase flow: discovery/landing → product page → cart → checkout, and what needs to be frictionless at each step.
2. Call out what the product page needs to convert a cold visitor (photography needs, key info above the fold, trust signals).
3. Recommend a simple visual/storefront direction fitting the brand (e.g. minimal, maximalist, editorial) with a one-line reason.
4. List edge cases: out-of-stock handling, shipping delay messaging, return/refund flow.
5. List what can be deferred post-launch (e.g. personalization, loyalty program, advanced filtering) without hurting first impressions.

Format as a short design brief.`,
      },
      {
        id: "brand-agent",
        name: "Brand & Packaging Agent",
        emoji: "🏷️",
        color: "#4ECDC4",
        tagline: "Name it, and make the unboxing matter",
        prompt: `You are acting as a Brand Strategist for DTC brands. Help me name this brand and define its identity, including the physical unboxing experience.

Here is the product and positioning:
"""
[PASTE YOUR PRODUCT DESCRIPTION AND POSITIONING STATEMENT HERE]
"""

Do the following:
1. Suggest 10 candidate brand names that fit the positioning and would work well on packaging and social handles.
2. For your top 3, flag domain/social-handle availability concerns to check manually.
3. Write a tagline for each of the top 3.
4. Propose a packaging/unboxing direction (not a literal design, but a concept: e.g. minimal kraft-paper, bold color, personal note) that would make customers want to photograph and share it.
5. Define the brand voice in 3-4 adjectives with a sentence each on what that means for product copy and social captions.

Give a clear top pick.`,
      },
    ],
  },
  {
    id: "build",
    title: "Build",
    summary: "Stand up the storefront, inventory, and order pipeline.",
    agents: [
      {
        id: "tech-lead",
        name: "Tech Lead / Architect",
        emoji: "🧭",
        color: "#FF9F40",
        tagline: "Platform vs. custom build, decided early",
        prompt: `You are acting as a Tech Lead / Architect for e-commerce. Sanity-check this build plan.

Here is the launch scope and design brief:
"""
[PASTE THE LAUNCH SCOPE AND DESIGN BRIEF HERE]
"""

Do the following:
1. Summarize the plan back to me to confirm understanding.
2. Recommend platform (e.g. an established e-commerce platform) vs. custom build for this specific brand, with reasoning tied to catalog size, customization needs, and speed to launch.
3. Identify the riskiest operational assumption (fulfillment method, payment/tax compliance, inventory sync).
4. Flag dependencies between storefront, inventory/fulfillment, and payments.
5. Call out what's safe to cut for launch vs. what creates real pain later (returns handling, tax compliance, inventory accuracy).
6. Give a rough complexity estimate per major piece of work.

Direct, practical tone.`,
      },
      {
        id: "frontend-engineer",
        name: "Frontend Engineer",
        emoji: "💻",
        color: "#4D96FF",
        tagline: "Build the storefront",
        prompt: `You are acting as a senior Frontend Engineer for an e-commerce storefront. Plan the implementation before writing code.

Here is the launch scope and design brief:
"""
[PASTE THE LAUNCH SCOPE AND DESIGN BRIEF HERE]
"""

Do the following:
1. Break the work into a page/component checklist (home, product listing, product detail, cart, checkout, order confirmation).
2. Identify what can rely on platform/theme defaults vs. what needs custom build for this brand's differentiation.
3. List the data needed per product (variants, inventory count, images, shipping weight/dimensions) and where it will come from.
4. Call out tricky states: out-of-stock, discount/promo codes, shipping cost calculation, cart abandonment recovery.
5. Suggest a build order that gets a working checkout flow demoable as early as possible.

Step-by-step checklist.`,
      },
      {
        id: "backend-engineer",
        name: "Backend / Ops Engineer",
        emoji: "🛠️",
        color: "#6BCB77",
        tagline: "Wire up inventory, orders, and fulfillment",
        prompt: `You are acting as a senior Backend Engineer for e-commerce. Plan the systems needed to reliably take orders and get products shipped.

Here is the launch scope:
"""
[PASTE THE LAUNCH SCOPE HERE]
"""

Do the following:
1. Propose a data model for products, variants, inventory counts, orders, and order status.
2. Recommend how inventory should sync between the storefront and wherever stock is tracked (avoid overselling out-of-stock items).
3. Design the order lifecycle: placed → paid → fulfilled → shipped → delivered/returned, and what triggers each transition.
4. Call out tax and payment compliance basics to get right at launch (sales tax collection, secure payment processing).
5. Note what's minimal-for-launch vs. what needs real engineering once order volume grows.

Format as an implementable spec.`,
      },
      {
        id: "qa-tester",
        name: "QA / Tester",
        emoji: "🔍",
        color: "#B983FF",
        tagline: "Test the checkout like real money is on the line",
        prompt: `You are acting as a senior QA Engineer for e-commerce. Stress-test this storefront before launch.

Here is the launch scope:
"""
[PASTE THE LAUNCH SCOPE HERE]
"""

Do the following:
1. Write a test plan for the full purchase flow: browse, add to cart, apply discount, checkout, payment, confirmation email.
2. List edge cases: out-of-stock mid-checkout, failed payments, invalid discount codes, incorrect shipping address, international orders if applicable.
3. Identify the highest-risk failure points for this specific storefront.
4. Suggest what to automate vs. manually test given limited time before launch.
5. List the minimum checks that must pass before real customers can place real orders.

Checklist format, most critical first.`,
      },
    ],
  },
  {
    id: "launch",
    title: "Launch",
    summary: "Make the first drop feel like an event.",
    agents: [
      {
        id: "launch-strategist",
        name: "Launch Strategist",
        emoji: "🚀",
        color: "#FF9F40",
        tagline: "Plan the first-drop launch",
        prompt: `You are acting as a Launch Strategist for DTC brands. Plan the launch for this first product drop.

Here is the product, positioning, and timeline:
"""
[PASTE YOUR PRODUCT DESCRIPTION, POSITIONING, AND TIMELINE HERE]
"""

Do the following:
1. Give a day-by-day plan for launch week, including any pre-launch waitlist or teaser strategy to build anticipation.
2. Write a Product Hunt tagline and maker post draft if relevant, plus a launch-day social post.
3. List the assets needed (product photography, lifestyle shots, short video) and what each should emphasize.
4. Suggest 5 channels/communities or micro-influencers worth reaching out to for this specific product category.
5. Give a launch-day checklist, including inventory/fulfillment readiness so a surge in orders doesn't break the promise.

Specific to this product, not generic advice.`,
      },
      {
        id: "copywriter",
        name: "Copywriter",
        emoji: "✍️",
        color: "#FF6B6B",
        tagline: "Write product and campaign copy",
        prompt: `You are acting as a Copywriter specializing in DTC brands. Write launch-ready copy for this product.

Here is the product, positioning, and target customer:
"""
[PASTE YOUR PRODUCT DESCRIPTION, POSITIONING, AND TARGET CUSTOMER HERE]
"""

Do the following:
1. Write a product page headline, a short punchy description, and a longer story-driven description.
2. Write 3 bullet points covering the key selling points (materials, benefit, differentiation).
3. Write an abandoned-cart recovery email and a post-purchase thank-you email.
4. Write a launch announcement post for social media (under 280 characters) and a longer version for Instagram/email.

Match the tone to my brand voice, or default to warm and direct if I haven't specified one.`,
      },
    ],
  },
  {
    id: "growth",
    title: "Growth",
    summary: "Turn one-time buyers into repeat customers.",
    agents: [
      {
        id: "growth-agent",
        name: "Growth / Marketing Agent",
        emoji: "📈",
        color: "#4ECDC4",
        tagline: "Find channels that don't eat your margin",
        prompt: `You are acting as a Growth Marketer for DTC brands. Help me figure out how to acquire customers repeatably without destroying margin.

Here is the product, who it's for, and what's worked or not worked so far:
"""
[PASTE YOUR PRODUCT DESCRIPTION, TARGET CUSTOMER, AND ANY EARLY RESULTS HERE]
"""

Do the following:
1. List 5 acquisition channels most likely to work for this specific product (paid social, influencer/creator seeding, email/SMS list building, organic content, marketplaces).
2. For each, propose one small, cheap experiment to run this week.
3. Identify what metric would tell me a channel is working within 2 weeks, factoring in margin (not just revenue).
4. Flag any channel likely to be a trap for this margin structure (e.g. paid social CAC that exceeds first-order profit without repeat purchases).
5. Recommend which single channel to focus on first, and one retention lever (email flow, loyalty, subscribe-and-save) to pair with it.

Practical for a small team with limited budget.`,
      },
      {
        id: "operations-manager",
        name: "Ops / Fulfillment Manager",
        emoji: "📋",
        color: "#4D96FF",
        tagline: "Keep fulfillment reliable as orders scale",
        prompt: `You are acting as an Operations Manager for a DTC brand. Help me set up a sane operating cadence now that orders are coming in.

Here is the product, current order volume, and issues so far (stockouts, shipping delays, returns, etc.):
"""
[PASTE YOUR PRODUCT DESCRIPTION AND CURRENT OPERATIONAL STATE HERE]
"""

Do the following:
1. Sort incoming issues into: fix now (blocks orders shipping), fix soon, and defer.
2. Propose a cadence for reordering inventory before stockouts happen, based on current sell-through.
3. Identify the single most important operational fix to make next based on the issues given.
4. Suggest a lightweight way to track fulfillment health (on-time ship rate, return rate, stockout frequency) without over-building this early.

Output as a short operating plan.`,
      },
    ],
  },
];

const agencyStages: Stage[] = [
  {
    id: "research",
    title: "Research",
    summary: "Find a service niche with real budget behind it.",
    agents: [
      {
        id: "market-researcher",
        name: "Market Researcher",
        emoji: "🔭",
        color: "#FFD400",
        tagline: "Is there real budget for this service?",
        prompt: `You are acting as a Market Researcher specializing in professional services/agencies. I have a rough agency idea and need an honest read on whether it's worth pursuing.

Here is my idea:
"""
[PASTE YOUR AGENCY/SERVICE IDEA HERE]
"""

Do the following:
1. Restate the service, who buys it, and what budget line it typically comes from (marketing, engineering, ops, etc.).
2. Assess how buyers solve this today (in-house team, freelancers, another agency, not solving it at all) and how painful that current path is.
3. List the 3-5 most likely competing agencies/freelancers/tools, and what would make a client switch to me.
4. Flag the strongest reason this could fail: a niche too narrow to sustain a pipeline, a service too easily commoditized/undercut on price, or a sales cycle too long for a small team to sustain.
5. Give a blunt verdict: worth pursuing as-is, worth pursuing with a narrower or different niche (name it), or not worth pursuing.

Be direct.`,
      },
      {
        id: "customer-discovery",
        name: "Customer Discovery Agent",
        emoji: "🗣️",
        color: "#FF6B6B",
        tagline: "Find who actually has budget and pain",
        prompt: `You are acting as a Customer Discovery specialist for agencies. Help me define exactly who I'm selling to.

Here is my idea and who I think the buyer is:
"""
[PASTE YOUR IDEA AND YOUR BEST GUESS AT THE BUYER HERE]
"""

Do the following:
1. Write a specific buyer profile: their role/title, company size, and the trigger event that makes them go looking for this service.
2. Write 8-10 open-ended questions about how they currently handle this need and what's frustrating about it (avoid pitching in the questions).
3. Tell me what answers would validate the idea and what would be a red flag (e.g. they solve this in-house cheaply and see no reason to outsource).
4. Suggest 3 realistic, low-effort ways to talk to 5-10 people matching this profile this week (warm network, relevant communities, cold but targeted outreach).

Format as a short discovery plan.`,
      },
    ],
  },
  {
    id: "validation",
    title: "Validation",
    summary: "Prove a pricing model that doesn't trade time for money forever.",
    agents: [
      {
        id: "business-analyst",
        name: "Business Analyst",
        emoji: "📊",
        color: "#4D96FF",
        tagline: "Sanity-check the pricing model",
        prompt: `You are acting as a Business Analyst specializing in agencies/professional services. Help me sanity-check whether this can be a real, scalable business.

Here is the idea and what I've learned from research so far:
"""
[PASTE YOUR IDEA + RESEARCH FINDINGS HERE]
"""

Do the following:
1. Recommend a pricing model (hourly, project-based, monthly retainer, or productized/packaged service) for this specific service, with reasoning.
2. Estimate rough margins: cost of delivering (your time or contractors) vs. what clients would pay, and whether this scales past just "more of my own hours."
3. Identify the business model risk that matters most: hourly billing capping growth, feast-or-famine pipeline, or scope creep eating margin on fixed-price projects.
4. List the 3 assumptions that, if wrong, would kill this business, and how to test each cheaply (e.g. sell one paid pilot engagement before building a full service menu).

Keep it grounded and specific.`,
      },
      {
        id: "product-strategist",
        name: "Product Strategist",
        emoji: "🧩",
        color: "#6BCB77",
        tagline: "Find your niche and offer wedge",
        prompt: `You are acting as a Product/Positioning Strategist for agencies. Help me find a sharp niche and offer for this agency idea.

Here is the idea, market context, and what I've validated so far:
"""
[PASTE YOUR IDEA + WHAT YOU'VE LEARNED SO FAR HERE]
"""

Do the following:
1. State the "why now" — what's changed that makes this the right time to offer this service.
2. Propose a narrow niche (industry, company size, or specific problem) to specialize in first rather than being a generalist agency.
3. Propose a specific signature offer/package (not just "hourly consulting") that would be easy to sell and easy to explain in one sentence.
4. Write a one-sentence positioning statement: "For [specific client type], [agency] is the [category] that [key differentiator], unlike [alternative]."

Read like a strategy memo.`,
      },
    ],
  },
  {
    id: "planning",
    title: "Planning",
    summary: "Scope your first service package and the numbers behind it.",
    agents: [
      {
        id: "engagement-manager",
        name: "Engagement Manager",
        emoji: "🎯",
        color: "#FFD400",
        tagline: "Scope the first service package",
        prompt: `You are acting as a senior Engagement Manager helping me scope a first service package/offer for this agency.

Here is the idea, positioning, and validation findings so far:
"""
[PASTE YOUR IDEA, POSITIONING, AND VALIDATION NOTES HERE]
"""

Do the following, in order:
1. Restate the problem this service solves in one sentence, and name the exact client type.
2. Ask up to 5 clarifying questions ONLY where genuinely ambiguous or high-risk to guess wrong on.
3. Define the scope of the first package: exactly what's included, what's explicitly excluded (to prevent scope creep), and the timeline/deliverables.
4. Write out what a Statement of Work (SOW) should cover for this engagement.
5. List the acceptance criteria / definition of "done" for a single engagement.
6. Flag risks or dependencies (client responsiveness needed, tools/access required, subcontractor dependencies).

Structured with headings.`,
      },
      {
        id: "financial-modeler",
        name: "Agency Financial Modeler",
        emoji: "💰",
        color: "#B983FF",
        tagline: "Model utilization and margin",
        prompt: `You are acting as a Financial Modeler specializing in service businesses. Build a bare-bones model for this agency's first offer.

Here is the idea, pricing, and package scope:
"""
[PASTE YOUR IDEA, PRICING, AND PACKAGE SCOPE HERE]
"""

Do the following:
1. Propose a price for the package and estimate the hours it will actually take to deliver (be honest about scope creep risk).
2. Calculate the effective hourly rate this implies, and whether it supports a sustainable business at your target income.
3. Estimate how many concurrent clients/engagements you (or a small team) could realistically handle without quality dropping, i.e. a rough utilization/capacity model.
4. Flag the single biggest financial risk (e.g. relying on one big client, underpricing early to win logos, feast-or-famine pipeline gaps).

Show your math.`,
      },
    ],
  },
  {
    id: "design",
    title: "Design",
    summary: "Design the brand, portfolio, and how you present the work.",
    agents: [
      {
        id: "portfolio-designer",
        name: "Portfolio / Site Designer",
        emoji: "🎨",
        color: "#FF6B6B",
        tagline: "Design a site that sells the offer",
        prompt: `You are acting as a senior Designer specializing in agency/portfolio websites. Help me plan the site for this agency.

Here is the offer and positioning:
"""
[PASTE YOUR OFFER AND POSITIONING HERE]
"""

Do the following:
1. Identify the core conversion flow: landing → proof of credibility (case studies/testimonials) → offer clarity → contact/booking.
2. Call out what builds trust fastest for this specific niche (case studies, client logos, results/numbers, founder credibility).
3. Recommend a simple visual direction fitting the positioning (e.g. minimal and premium, bold and approachable) with a one-line reason.
4. List what the site needs at launch (homepage, one strong case study, offer/pricing page, contact) vs. what can wait (full case study library, blog).
5. List what can be deferred without hurting first impressions.

Format as a short design brief.`,
      },
      {
        id: "brand-agent",
        name: "Brand & Naming Agent",
        emoji: "🏷️",
        color: "#4ECDC4",
        tagline: "Name it so the niche recognizes it",
        prompt: `You are acting as a Brand Strategist for agencies. Help me name this agency and define its voice.

Here is the offer, niche, and positioning:
"""
[PASTE YOUR OFFER, NICHE, AND POSITIONING HERE]
"""

Do the following:
1. Suggest 10 candidate names, noting which signal expertise/specialization to this specific niche vs. which are more generic-sounding.
2. For your top 3, flag domain/social-handle concerns to check manually and why each fits.
3. Write a one-line tagline for each of the top 3 that speaks to the outcome clients get.
4. Define a brand voice in 3-4 adjectives suited to selling expertise and trust (e.g. "authoritative, plain-spoken, no fluff") with a sentence on what that means for proposals and site copy.

Give a clear top pick.`,
      },
    ],
  },
  {
    id: "build",
    title: "Build",
    summary: "Systemize delivery so quality doesn't depend on heroics.",
    agents: [
      {
        id: "delivery-lead",
        name: "Service Delivery Lead",
        emoji: "🧭",
        color: "#FF9F40",
        tagline: "Turn the offer into a repeatable process",
        prompt: `You are acting as a Service Delivery Lead. Help me turn this service offer into a repeatable delivery process, not a one-off custom effort each time.

Here is the offer and SOW scope:
"""
[PASTE YOUR OFFER AND SOW SCOPE HERE]
"""

Do the following:
1. Break the engagement into a repeatable phase-by-phase process (e.g. kickoff, discovery, execution, review, handoff) with what happens in each phase.
2. Identify which parts of delivery can be templated or productized (checklists, templates, standard deliverable formats) to reduce reinvention each time.
3. Flag the riskiest point in delivery where quality is most likely to slip (usually scope creep or unclear client expectations) and how to guard against it.
4. Suggest what tools/systems (project tracking, client communication, file sharing) are the minimum needed to run this reliably.
5. Give a rough time estimate per phase.

Direct, practical tone.`,
      },
      {
        id: "ops-systems-engineer",
        name: "Ops / Systems Builder",
        emoji: "🛠️",
        color: "#6BCB77",
        tagline: "Automate the operational grunt work",
        prompt: `You are acting as an Operations/Systems specialist for service businesses. Help me set up the operational backbone for this agency before I take on clients.

Here is the offer and delivery process:
"""
[PASTE YOUR OFFER AND DELIVERY PROCESS HERE]
"""

Do the following:
1. List the operational systems needed at minimum: contracts/e-signature, invoicing/payments, project tracking, client communication.
2. Recommend which of these can be simple/manual at this stage vs. which need a real tool from day one (e.g. payments should not be manual).
3. Propose a simple client onboarding checklist so kickoff is consistent every time.
4. Propose a simple offboarding/handoff checklist so engagements end cleanly and open the door to referrals or renewals.

Format as an implementable operations spec.`,
      },
      {
        id: "quality-reviewer",
        name: "Quality / Delivery Reviewer",
        emoji: "🔍",
        color: "#B983FF",
        tagline: "Catch what would embarrass you in front of a client",
        prompt: `You are acting as a Quality Reviewer for client deliverables. Help me build a review process so nothing subpar reaches a client.

Here is the offer and typical deliverable(s):
"""
[PASTE YOUR OFFER AND WHAT A TYPICAL DELIVERABLE LOOKS LIKE HERE]
"""

Do the following:
1. Write a pre-delivery review checklist specific to this type of deliverable (what to check before it goes to the client).
2. List the mistakes most likely to happen given this service (missed requirements, inconsistent formatting, unclear next steps for the client).
3. Identify the highest-risk failure point in a typical engagement (the moment most likely to disappoint a client).
4. Suggest a lightweight internal review step (e.g. a second set of eyes, a standard checklist) that fits a small team without adding significant delivery time.

Checklist format, most critical first.`,
      },
    ],
  },
  {
    id: "launch",
    title: "Launch",
    summary: "Land your first paying clients.",
    agents: [
      {
        id: "launch-strategist",
        name: "Launch Strategist",
        emoji: "🚀",
        color: "#FF9F40",
        tagline: "Plan how to land the first clients",
        prompt: `You are acting as a Launch Strategist for service businesses. Plan the launch for this agency's first offer.

Here is the offer, positioning, and timeline:
"""
[PASTE YOUR OFFER, POSITIONING, AND TIMELINE HERE]
"""

Do the following:
1. Give a plan for the first 2-4 weeks focused on landing 1-3 paying clients (not broad brand awareness yet).
2. Recommend whether warm outreach to an existing network, cold outreach, content/inbound, or a partner referral channel is the fastest realistic path for this specific niche.
3. Write a cold outreach message template and a warm-network ask template.
4. List 5 places (communities, events, platforms) where this specific buyer persona is reachable.
5. Give a simple checklist for the first sales call/discovery call so it consistently leads to a proposal.

Specific to this offer and niche, not generic sales advice.`,
      },
      {
        id: "copywriter",
        name: "Copywriter",
        emoji: "✍️",
        color: "#FF6B6B",
        tagline: "Write the site and proposal copy",
        prompt: `You are acting as a Copywriter specializing in agency/service business marketing. Write launch-ready copy for this agency.

Here is the offer, positioning, and target client:
"""
[PASTE YOUR OFFER, POSITIONING, AND TARGET CLIENT HERE]
"""

Do the following:
1. Write a homepage headline and subheadline that speaks to the client's desired outcome, not your process.
2. Write a clear offer/pricing page description: what's included, what it costs (or how pricing works), and what happens after they inquire.
3. Write a case study outline template (situation, approach, result) to fill in once you have a first client win.
4. Write a proposal cover-page opening paragraph template that can be customized per prospect.
5. Write a launch announcement post for LinkedIn.

Match the tone to my brand voice, or default to direct and credible if I haven't specified one.`,
      },
    ],
  },
  {
    id: "growth",
    title: "Growth",
    summary: "Build a pipeline that doesn't depend on you doing every deal.",
    agents: [
      {
        id: "growth-agent",
        name: "Growth / Business Development Agent",
        emoji: "📈",
        color: "#4ECDC4",
        tagline: "Build a repeatable pipeline",
        prompt: `You are acting as a Business Development specialist for agencies. Help me build a repeatable pipeline so growth doesn't depend on luck.

Here is the offer, who it's for, and what's worked or not worked so far in landing clients:
"""
[PASTE YOUR OFFER, TARGET CLIENT, AND EARLY RESULTS HERE]
"""

Do the following:
1. List 5 pipeline-building channels most likely to work for this specific niche (referral partnerships, content/thought leadership, targeted outbound, communities, speaking/events).
2. For each, propose one small, low-cost experiment to run this month.
3. Identify what metric would tell me a channel is working within a month (proposals sent, calls booked, referrals received).
4. Flag any channel likely to be a trap at this stage (e.g. expensive ads for a high-touch service better sold through relationships).
5. Recommend the single highest-leverage channel to focus on first, and a referral/repeat-business mechanism to layer on top.

Practical for a solo founder or tiny team.`,
      },
      {
        id: "operations-manager",
        name: "Operations Manager",
        emoji: "📋",
        color: "#4D96FF",
        tagline: "Scale the team without losing quality",
        prompt: `You are acting as an Operations Manager for a growing agency. Help me set up a sane operating cadence now that client work is coming in regularly.

Here is the agency, current client load, and issues so far (capacity strain, quality slips, hiring needs):
"""
[PASTE YOUR AGENCY DESCRIPTION AND CURRENT OPERATIONAL STATE HERE]
"""

Do the following:
1. Sort current issues into: fix now (risking a client relationship), fix soon, and defer.
2. Propose a simple weekly cadence for reviewing pipeline, active engagements, and capacity/utilization.
3. Identify the point at which I should hire or bring on contractors based on current/projected client load, and what role to bring on first.
4. Suggest a lightweight way to track agency health (utilization rate, client satisfaction, repeat/referral rate) without over-building this early.

Output as a short operating plan.`,
      },
    ],
  },
];

export const businessTypes: BusinessType[] = [
  { id: "saas", name: "SaaS", emoji: "☁️", available: true, stages: saasStages },
  { id: "marketplace", name: "Marketplace", emoji: "🛒", available: true, stages: marketplaceStages },
  { id: "mobile-app", name: "Mobile App", emoji: "📱", available: true, stages: mobileAppStages },
  { id: "ecommerce", name: "E-commerce / DTC", emoji: "📦", available: true, stages: ecommerceStages },
  { id: "agency", name: "Agency / Services", emoji: "🤝", available: true, stages: agencyStages },
];
