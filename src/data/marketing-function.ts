import type { Agent } from "@/data/workflow";

// Scoped deliberately: not "all of marketing," but the specific blocker
// most builders hit first — nobody to sell to on launch day because no
// audience/demand was built while the thing was being built. Distribution
// research methods live on the Research Methods page; this is the
// dedicated playbook for turning "an idea" into "a list of people who
// already said they want it," before a line of product code exists.

export type Principle = { title: string; detail: string };

export const demandPrinciples: Principle[] = [
  { title: "Demand is a queue, not a database", detail: "A waitlist isn't just an email list — it's proof, in advance, that strangers will act (hand over an email, refer a friend) for something that doesn't exist yet. Treat the number as a validation metric, not a marketing vanity metric." },
  { title: "Build the audience and the product in parallel, not in sequence", detail: "Waiting until the product is done to start building an audience means launch day starts an audience-building process that should have started months earlier." },
  { title: "A waitlist without a mechanic is just a form", detail: "Email capture alone barely moves. What makes a waitlist grow itself is a mechanic on top of it — a referral queue-jump, a position counter, scarcity, or an application that filters for the right people." },
  { title: "Position and scarcity are honest, or they backfire", detail: "A real queue works because it's real. A fake one gets found out and costs trust exactly when a founder can least afford it." },
  { title: "The channel has to match the audience, not the founder's comfort zone", detail: "A B2B tool for accountants and a consumer app for teenagers will never grow on the same channel — pick where the audience already spends time, not where content is easiest for you to make." },
  { title: "Every signup should know what happens next", detail: "The moment after someone joins a waitlist is the highest-attention moment you'll ever have with them — wasting it on a generic \"thanks, we'll be in touch\" throws away the easiest engagement you'll get." },
];

export type ProcessStep = { step: string; title: string; detail: string };

export const prelaunchPlaybook: ProcessStep[] = [
  { step: "1", title: "Nail the one-sentence positioning", detail: "Before a single word of landing page copy: who is this for, what outcome do they get, and why now — if you can't say it in one sentence, the page won't convert no matter how well it's designed." },
  { step: "2", title: "Ship a landing page, not a product teaser", detail: "Headline (the outcome), subhead (who it's for), 3 bullets (how), one CTA (join the waitlist) — built and live in days, not weeks. The page's only job is converting a visitor into an email." },
  { step: "3", title: "Choose one waitlist mechanic on purpose", detail: "Referral queue-jump, position/scarcity counter, invite-only application, or tiered rewards — pick the one that fits your audience and price point (see the mechanics comparison below), don't default to plain email capture." },
  { step: "4", title: "Seed it before you promote it", detail: "Get the first 20-50 signups yourself — friends, existing community, a relevant subreddit or forum post — before turning on any channel, so a referral loop has something to work with instead of starting at zero." },
  { step: "5", title: "Pick the channel that matches the audience, not the trend", detail: "Developer tool → build in public on X/dev communities. Local/physical business → in-person and local partnerships. B2B SaaS → content/SEO and direct outreach. Consumer app → short-form video and community. See the channel-fit table below." },
  { step: "6", title: "Keep a visible cadence while you build", detail: "Weekly build-in-public updates, a changelog, or a content series — the waitlist should see the thing getting closer to real, not go silent for three months after signing up." },
  { step: "7", title: "Turn the list into launch day, deliberately", detail: "Segment by engagement (referrers vs. passive signups), give early access to the most engaged first, and give everyone a specific reason to act on launch day — a list that isn't activated on day one decays fast." },
];

export type StatBlock = { id: string; stat: string; label: string };

export const waitlistBenchmarks: StatBlock[] = [
  { id: "median-conversion", stat: "~11%", label: "median share of landing page visitors who convert to a waitlist signup, across categories (Waitlister 2026 data)" },
  { id: "saas-conversion", stat: "~3.4%", label: "typical SaaS landing-page-to-waitlist conversion rate — AI tools run higher (~4.6%), consumer apps ~4.1%" },
  { id: "top-decile", stat: "8-20%", label: "conversion rate for a well-targeted page with real social proof; elite performers (strong existing audience, tight targeting) clear 25%+" },
  { id: "referral-multiplier", stat: "~3x", label: "additional signups driven per person through a working referral mechanic (Robinhood's queue-jump waitlist) — the difference between a list and a growth loop" },
];

export type WaitlistMechanic = { name: string; howItWorks: string; bestFor: string; example: string };

export const waitlistMechanics: WaitlistMechanic[] = [
  {
    name: "Referral queue-jump",
    howItWorks: "Every signup gets a position number; referring friends moves you up the list. No monetary reward — the position itself is the incentive.",
    bestFor: "Consumer products with mass appeal and a low-friction ask (just an email) — works best when the product itself is inherently shareable/talkable-about.",
    example: "Robinhood reached 1 million waitlist signups before launch this way — no ads, no product yet, just a landing page and a referral mechanic; each user brought in ~3 more.",
  },
  {
    name: "Position / scarcity counter",
    howItWorks: "A visible, real-time counter shows exactly how many people are ahead of and behind you, turning the wait itself into something to watch and share.",
    bestFor: "Products with a real capacity constraint (limited server capacity, limited onboarding bandwidth) where the scarcity is genuine, not staged.",
    example: "Mailbox's in-app position counter helped it hit 800,000+ signups within weeks in 2013 — users returned repeatedly just to watch their position move.",
  },
  {
    name: "Invite-only application",
    howItWorks: "Signups fill out a short form (not just an email); the founder personally reviews/interviews a subset, often with a live onboarding call before granting access.",
    bestFor: "Premium, high-price-point products where exclusivity itself is part of the value proposition, and where founders can learn from every early user personally.",
    example: "Superhuman capped growth at 100 new users/week with a mandatory 30-minute onboarding call for each — deliberately slow, but built an $825M company with the highest retention in SaaS.",
  },
  {
    name: "Tiered referral rewards",
    howItWorks: "Referring a set number of people unlocks escalating rewards (e.g. branded merch, early access tiers) — gamifying sharing like leveling up, not a flat discount.",
    bestFor: "Content/community products (newsletters, communities) where the product is inherently forwardable and rewards reinforce identity, not just discount price.",
    example: "Morning Brew's tiered referral program (mug → t-shirt → sweatshirt) drove 80% of early growth and helped take it from 100K to 4.5M+ subscribers.",
  },
  {
    name: "Closed beta via existing audience",
    howItWorks: "Skip a public waitlist page entirely — recruit the first cohort directly from a founder's existing following, then keep the beta closed for months while iterating with that group.",
    bestFor: "Technical/developer tools where an opinionated, iteration-heavy build benefits from a small, engaged, easy-to-reach group instead of a large anonymous list.",
    example: "Linear's founders used their existing Twitter following to line up 10,000 people for a closed beta, then spent a full year iterating before going public — arriving with 1,000+ customers and polish already in place.",
  },
  {
    name: "Fake-door / pricing page test",
    howItWorks: "A 2-page test: a pitch page leading to a fake pricing page, measuring how many people click 'buy' on something that doesn't exist yet — a stronger signal than a plain waitlist email.",
    bestFor: "Any idea where a founder wants to prove willingness to pay, not just willingness to sign up, before writing a line of product code.",
    example: "Buffer's Joel Gascoigne ran this exact test for 7 weeks, got 120 email signups, and got his first paying customer within 4 days of tweeting about it — before any product existed.",
  },
];

export type HistoricalExample = {
  company: string;
  tactic: string;
  detail: string;
  lesson: string;
  source: string;
};

export const historicalExamples: HistoricalExample[] = [
  {
    company: "Robinhood — the referral waitlist",
    tactic: "A landing page, an email field, and a referral queue-jump — nothing else",
    detail: "With no product built yet, no ads, and no team to speak of, Robinhood's founders put up a simple page: sign up, see your position, refer friends to move up. Each signup drove roughly three more.",
    lesson: "A mechanic (not the product) can be the thing that goes viral. The waitlist itself became the growth engine, a full year before there was anything to actually use.",
    source: "Viral Loops case study; Prefinery",
  },
  {
    company: "Superhuman — deliberately slow, invite-only growth",
    tactic: "Capped growth at 100 new users/week, each gated behind a 30-minute onboarding call",
    detail: "Rahul Vohra refused to let growth outpace quality. Every new user got a live call; every response fed a product-market-fit survey that reshaped who Superhuman targeted next.",
    lesson: "A waitlist can be a research instrument, not just a queue — the friction of the invite process was what let them learn who actually loved the product before scaling to everyone.",
    source: "Forbes; Waitlister case study",
  },
  {
    company: "Mailbox — the visible virtual queue",
    tactic: "A real-time position counter showing exactly how many people were ahead of and behind you",
    detail: "Mailbox's onboarding queue was framed as a server-capacity necessity, but it also turned waiting itself into something people checked daily and talked about — 800,000+ signups within its first weeks.",
    lesson: "When scarcity is real, making it visible turns a limitation into a marketing asset instead of a complaint.",
    source: "TechCrunch; HuffPost",
  },
  {
    company: "Morning Brew — gamified referrals",
    tactic: "Tiered physical rewards (mug → t-shirt → sweatshirt) for hitting referral milestones",
    detail: "Instead of a flat 'refer a friend, get $5,' Morning Brew built escalating tiers that felt like leveling up — surfaced naturally in the footer of a newsletter people were already forwarding.",
    lesson: "The best referral mechanics amplify sharing behavior that's already happening organically, rather than trying to manufacture sharing from nothing.",
    source: "ReferralCandy; GrowSurf",
  },
  {
    company: "Linear — closed beta, built from an existing following",
    tactic: "Recruited the first 10,000 waitlist members straight from the founders' existing audience, then stayed closed for a year",
    detail: "Rather than opening a public funnel, Linear used founder credibility to seed a beta, then iterated privately with that group for a full year before ever launching publicly.",
    lesson: "If you already have any audience — even a following, not customers — it can seed an entire pre-launch process instead of starting from zero strangers.",
    source: "Eleken case study",
  },
  {
    company: "Buffer — proving willingness to pay before code",
    tactic: "A 2-page fake-pricing test instead of a waitlist form",
    detail: "Joel Gascoigne refused to write a line of Buffer's code until a landing page → fake pricing page test proved real demand. 120 signups over 7 weeks, first paying customer within 4 days of going public about it.",
    lesson: "A waitlist proves interest; a fake pricing page proves something stronger — willingness to actually pay. Worth the extra step before committing months to a build.",
    source: "Buffer's own blog (also referenced on this site's Obstacle Map)",
  },
];

export type ChannelFit = { audienceType: string; bestChannel: string; why: string };

export const channelFitTable: ChannelFit[] = [
  { audienceType: "Developer / technical tool", bestChannel: "Build-in-public on X/dev communities, Hacker News, GitHub — plus a closed beta seeded from any existing following", why: "This audience distrusts polished marketing but responds to transparent, technical build updates from a real person shipping in front of them." },
  { audienceType: "B2B SaaS (SMB/mid-market buyer)", bestChannel: "SEO/content answering their exact search queries, plus direct cold outreach to a tight, qualified list", why: "B2B buyers research before they ever talk to a human — owning the search terms they use when the pain is acute compounds slower but converts higher-intent traffic." },
  { audienceType: "Consumer mobile app", bestChannel: "Short-form video (TikTok/Reels/Shorts) + referral-driven waitlist mechanic", why: "Consumer attention lives in short-form feeds, and a strong hook can carry a waitlist link the way it would carry an app-store link." },
  { audienceType: "Local / physical-world business", bestChannel: "In-person events, local partnerships, and direct canvassing — not paid social", why: "Trust in local/physical categories is built face-to-face; digital ads rarely beat a credible local partner's introduction for this audience." },
  { audienceType: "Marketplace (two-sided)", bestChannel: "Seed the harder-to-attract side manually and directly, then let the easier side follow — never open both sides to cold traffic at once", why: "A marketplace with no supply (or no demand) on one side kills trust in the very first session; sequencing matters more than channel choice here." },
  { audienceType: "Content / community product (newsletter, community)", bestChannel: "Referral rewards layered on top of content people are already forwarding organically", why: "The product IS the content — the fastest channel is amplifying sharing behavior that's already happening, not inventing a separate acquisition motion." },
];

export type Mistake = { title: string; detail: string };

export const commonMistakes: Mistake[] = [
  { title: "Building the product first, distribution second", detail: "By the time the product is 'done,' there's no audience waiting — launch day becomes day one of marketing instead of the payoff of months of it." },
  { title: "Email capture with no mechanic on top", detail: "A plain 'join our waitlist' form converts and then goes nowhere — no referral loop, no position, no reason for a signup to ever mention it to anyone else." },
  { title: "Treating every signup as equal", detail: "A referrer who brought 5 friends and a passive signup who forgot they joined are not the same lead — without segmenting by engagement, launch-day activation targets the wrong people first." },
  { title: "Picking a channel because it's trendy, not because the audience is there", detail: "Short-form video won't move a niche B2B compliance tool; cold outreach won't move a mass-consumer app — matching audience to channel matters more than any single tactic." },
  { title: "Faking scarcity that isn't real", detail: "A fake 'only 50 spots left' gets noticed, especially by the exact early-adopter audience most likely to call it out publicly — real constraints (Superhuman's onboarding calls, Mailbox's server capacity) work because they're true." },
  { title: "Going silent after the signup", detail: "Months of no updates between 'you're on the list' and launch day lets interest fully decay — a visible build-in-public cadence keeps a waitlist warm instead of cold by the time it matters." },
];

export const prelaunchChecklist: string[] = [
  "One-sentence positioning nailed before writing any landing page copy",
  "Landing page live with a single, clear CTA — no product screenshots of something that doesn't exist yet",
  "One waitlist mechanic chosen deliberately (referral, scarcity, application, or tiered rewards) — not just a bare email field",
  "First 20-50 signups seeded manually before turning on any channel",
  "Primary channel chosen based on where the audience already is, not founder comfort",
  "A visible cadence planned (weekly updates, changelog, or content) to keep the list warm until launch",
  "Signups segmented by engagement so the most engaged get early access first on launch day",
  "A specific, dated call-to-action ready for launch day — not a vague 'we're live, check it out'",
];

export const marketingAgents: Agent[] = [
  {
    id: "positioning-statement-writer",
    name: "Positioning Statement Writer",
    emoji: "🎯",
    color: "#FFD400",
    tagline: "Get to one sentence before writing a word of copy",
    prompt: `You are acting as a Positioning strategist. Help me nail a one-sentence positioning statement before I write a single word of landing page or waitlist copy.

Here is my idea:
"""
[PASTE YOUR IDEA HERE — what it does, who you think it's for, and why now if you have a hypothesis]
"""

Do the following:
1. Write the positioning using this structure: "For [specific audience] who [specific problem/situation], [product] is a [category] that [key benefit] — unlike [current alternative], it [key differentiator]."
2. Give me 3 alternate versions targeting slightly different audience segments, so I can see which one is sharpest.
3. Stress-test each version: would a stranger in the target audience immediately understand who this is for and why they'd want it?
4. Flag if the positioning is trying to serve too many audiences at once, and tell me which one to cut for a pre-launch test.

The output should be tight enough to become my landing page headline almost as-is.`,
  },
  {
    id: "waitlist-landing-page-writer",
    name: "Waitlist Landing Page Copywriter",
    emoji: "📄",
    color: "#FF9F40",
    tagline: "One page, one CTA, built to convert a stranger into an email",
    prompt: `You are acting as a Conversion Copywriter. Write a waitlist landing page for an idea that doesn't have a built product yet — the page's only job is converting a visitor into an email signup.

Here is my positioning and target audience:
"""
[PASTE YOUR ONE-SENTENCE POSITIONING AND TARGET AUDIENCE HERE]
"""

Do the following:
1. Write a headline that leads with the outcome, not the feature list.
2. Write a subheadline naming exactly who this is for.
3. Write 3 bullets describing how it delivers that outcome, in the audience's language, not internal jargon.
4. Write the CTA button copy and the microcopy underneath it (what happens after they sign up).
5. Write the one-sentence confirmation message shown immediately after signup, that also introduces whatever waitlist mechanic (referral, position, etc.) is in play.

Keep total copy short enough to read in under 20 seconds — this is a pre-launch page, not a full marketing site.`,
  },
  {
    id: "waitlist-mechanic-designer",
    name: "Waitlist Mechanic Designer",
    emoji: "🔁",
    color: "#6BCB77",
    tagline: "Pick the referral/scarcity mechanic that fits this idea",
    prompt: `You are acting as a Growth strategist. Help me choose and design a waitlist mechanic — not just an email capture form — for this specific idea, choosing between: referral queue-jump, position/scarcity counter, invite-only application, or tiered referral rewards.

Here is my idea, audience, and price point (or expected price point):
"""
[PASTE YOUR IDEA, TARGET AUDIENCE, AND EXPECTED PRICE POINT HERE]
"""

Do the following:
1. Recommend the single best-fit mechanic for this idea, and explain why the other three would underperform for this specific audience/price point.
2. Design exactly how it works: what a signup sees, what action moves them up/unlocks access, and what (if anything) they're rewarded with.
3. Write the exact copy shown to a signup explaining the mechanic (so they understand what to do next).
4. Tell me the one way this specific mechanic could be perceived as fake or gimmicky for my audience, and how to keep it credible.
5. Define what early signal (referral rate, application quality, position-checking frequency) would tell me this mechanic is actually working within the first 2 weeks.`,
  },
  {
    id: "channel-selection-strategist",
    name: "Channel Selection Strategist",
    emoji: "🧭",
    color: "#4D96FF",
    tagline: "Find where this exact audience already is",
    prompt: `You are acting as a Growth/Distribution strategist. Help me pick the ONE channel most worth focusing on to build pre-launch demand for this idea, before spreading effort across many.

Here is my idea and target audience:
"""
[PASTE YOUR IDEA AND TARGET AUDIENCE HERE]
"""

Do the following:
1. Identify which category this audience falls into (developer/technical, B2B SaaS buyer, consumer, local/physical-world, marketplace-side, or content/community) and recommend the channel that fits best.
2. Name 3-5 specific places within that channel (specific subreddits, specific communities, specific search terms, specific event types) — not generic platform names.
3. Tell me honestly if my instinct for a channel (if I have one) is a mismatch for this audience, and why.
4. Propose the first concrete action to take on the recommended channel this week — not a strategy document, an actual first move.
5. Define what response in the first 2 weeks would tell me this channel is worth doubling down on vs. switching.`,
  },
  {
    id: "prelaunch-content-planner",
    name: "Pre-Launch Content Calendar Planner",
    emoji: "🗓️",
    color: "#B983FF",
    tagline: "Keep the waitlist warm without going quiet for months",
    prompt: `You are acting as a Content strategist. Help me plan a pre-launch content cadence that keeps my waitlist engaged between signup and launch day, without demanding a full-time content operation.

Here is my idea, chosen channel, and roughly how much time I have per week:
"""
[PASTE YOUR IDEA, PRIMARY CHANNEL, AND WEEKLY TIME AVAILABLE HERE]
"""

Do the following:
1. Propose a realistic posting cadence (e.g. 2-3x/week) sustainable for months on the time I actually have.
2. Give me 10 specific post/update ideas mixing build-in-public progress, audience-education content, and social proof (early user reactions, milestones).
3. Tell me which of these should go directly to the waitlist (email) vs. the public channel (to attract new signups) vs. both.
4. Suggest one recurring format (e.g. a weekly changelog, a Friday build update) that becomes a habit people expect, rather than one-off posts.
5. Define what engagement signals mean the content is actually working (replies, shares, new signups attributed to specific posts) vs. vanity metrics.`,
  },
  {
    id: "launch-day-activation-planner",
    name: "Launch Day Activation Planner",
    emoji: "🚀",
    color: "#FF6B6B",
    tagline: "Turn a warm list into real first users, deliberately",
    prompt: `You are acting as a Launch strategist. Help me turn my waitlist into an actual activation plan for launch day, instead of just flipping a switch and hoping the list notices.

Here is my idea, current waitlist size, and how it's been engaging (referrals, opens, etc. if known):
"""
[PASTE YOUR IDEA, WAITLIST SIZE, AND ANY ENGAGEMENT DATA YOU HAVE HERE]
"""

Do the following:
1. Propose how to segment the list (e.g. top referrers, active openers, passive signups) and in what order to grant access to each segment.
2. Write the exact launch email/message for the most-engaged segment, distinct from the message for passive signups.
3. Suggest a specific, dated call-to-action for launch day (not "we're live, check it out") that gives people a real reason to act immediately.
4. Identify what to do in the first 48 hours to convert launch-day attention into activated users, not just visitors.
5. Tell me what would count as a strong launch-day result for a list of this size, so I know if I need to adjust the plan mid-launch.`,
  },
];
