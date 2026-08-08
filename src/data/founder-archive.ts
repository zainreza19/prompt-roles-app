import type { Agent } from "@/data/workflow";

export type StatBlock = { id: string; stat: string; label: string };

// Directional figures on Starter Story's own scale, from public reporting.
export const archiveStats: StatBlock[] = [
  { id: "case-studies", stat: "2,900+", label: "founder case studies published, across ~39 idea/model categories" },
  { id: "monthly-new", stat: "~50", label: "new interviews added per month, all from the same reusable question template" },
  { id: "visitors", stat: "1.4M+", label: "monthly visitors at the archive's peak scale" },
  { id: "acquired", stat: "2026", label: "the year Starter Story itself was acquired by HubSpot" },
];

export type IdeaPattern = {
  id: string;
  title: string;
  description: string;
  examples: string;
};

export const ideaPatterns: IdeaPattern[] = [
  {
    id: "frustration-incumbent",
    title: "Frustration with an existing tool",
    description: "Founders read complaints about a big incumbent and built the version that fixes the specific gap, not the whole category.",
    examples: "ConvertKit — Nathan Barry saw professional bloggers underserved by Mailchimp's generic tooling, grew it to $25M/year.",
  },
  {
    id: "day-job-gap",
    title: "A gap noticed from inside a day job",
    description: "Working in ops, sales, or consulting exposes workflow problems no software solves yet — the idea comes from being inside the pain, not researching it from outside.",
    examples: "Locale.ai (data-analytics consultants noticed Ops/Data teams lacked tooling) — Autoklose (a VP of Sales built a fix for bad purchased contact lists).",
  },
  {
    id: "scratch-own-itch",
    title: "Side project scratching your own itch",
    description: "Built first as a personal tool with no business intent, then kept because it quietly worked well enough to replace a salary.",
    examples: "Prerender.io, Buttondown, Leave Me Alone, Carrd, Dorik ($11.9M/yr), TextMagic (started 2001 as a niche side project).",
  },
  {
    id: "productize-freelance",
    title: "Productizing a freelance or agency service",
    description: "Turn a one-off billable service into a fixed-scope, recurring-price subscription — same skill, radically different business model.",
    examples: "Scribly.io ($14K/mo, copywriting), heylexi ($10K/mo, content), Draftss.com (design+code subscription), WP-OK (WordPress support).",
  },
  {
    id: "personal-pain",
    title: "A personal, non-career pain point",
    description: "Especially common in mobile apps — the idea comes from a life moment (a habit, a health event, an annoyance), not a professional context.",
    examples: "1Page (sales-meeting-prep pain), Christian Hypnobirthing ($120K/yr, solo founder), Lotus (GitHub notification annoyance), Sunnah Helper.",
  },
  {
    id: "niche-marketplace-hunt",
    title: "Deliberately hunting niche marketplaces",
    description: "Browsing app-store or marketplace listings specifically looking for poorly-reviewed tools serving a paying audience — reverse-engineering demand instead of waiting for inspiration.",
    examples: "SuperLemon — found inside the Shopify App Store's 3,000+ listings by looking for weak incumbents with a proven paying audience.",
  },
];

export type AcquisitionChannel = {
  id: string;
  title: string;
  description: string;
  examples: string;
};

export const acquisitionChannels: AcquisitionChannel[] = [
  {
    id: "manual-dms",
    title: "Founder-driven manual DMs",
    description: "No formal marketing — the founder personally messages prospects on social platforms until a base of paying users exists.",
    examples: "A solo SaaS founder grew a trading-community platform to $125-142K MRR this way before selling it on Flippa for $3.5M.",
  },
  {
    id: "community-posting",
    title: "Community posting & building in public",
    description: "A single well-placed Reddit or forum post, or a public build log, becomes the entire early customer-acquisition channel.",
    examples: "helpkit's origin story is literally titled \"How 'Sharing In Public' Led Me To My First Customers,\" with zero paid acquisition.",
  },
  {
    id: "upwork-reputation",
    title: "Freelance-platform reputation bootstrapping",
    description: "Take cheap or free jobs on Upwork purely to bank five-star reviews, then convert that reputation into higher-rate clients or a productized offer.",
    examples: "Multiple agency founders describe this exact path from Upwork gigs to a full-scale business.",
  },
  {
    id: "cold-email",
    title: "Cold email as a primary channel",
    description: "Personalized, often semi-automated cold email sequences — sometimes the product's own users are acquired by the product itself (dogfooding).",
    examples: "lemlist grew to $600K ARR / 8,000+ customers largely by cold-emailing prospects with lemlist; RampTshirts bootstrapped to six figures the same way.",
  },
  {
    id: "seo-content",
    title: "SEO / content as a compounding channel",
    description: "The single most repeated growth channel in the SaaS category — heavy investment in topic clusters and free tools that rank and compound over years.",
    examples: "TextMagic drove itself to a Nasdaq IPO largely on content/SEO; Starter Story itself grew to 1.4M monthly visitors the same way.",
  },
  {
    id: "shortform-video",
    title: "Short-form video, validate before you pay",
    description: "Post organic content daily, let the platform tell you which creative resonates, and only put paid budget behind formats already proven for free.",
    examples: "The $1M Mobile App Playbook: 120K organic TikTok followers and 50M+ views before any ad spend, then $82K spend → $44K MRR.",
  },
  {
    id: "support-driven-growth",
    title: "Support tickets as a growth/retention loop",
    description: "Major features get built directly from what support conversations reveal, turning retention work into a de facto growth channel.",
    examples: "TextMagic built SMS Chat and its Zapier integration directly from recurring support-ticket requests.",
  },
];

export type MistakeAdvice = { title: string; detail: string };

export const mistakesAndAdvice: MistakeAdvice[] = [
  { title: "Trying to serve everyone", detail: "Agency founders repeatedly cite generalizing across every industry as their single biggest mistake — the market rewards specialists, not broad service menus." },
  { title: "Building in private for too long", detail: "Not sharing the build publicly limits both feedback and the free marketing surface area that public building creates." },
  { title: "Half-measuring the first version", detail: "One founder spent real money on \"the crappiest MVP imaginable\" that crashed constantly — the lesson isn't spend more, it's commit to one lane: invest properly, or launch scrappier and iterate faster." },
  { title: "Scaling cost ahead of revenue", detail: "Growing a team (especially creative/production headcount) faster than revenue actually justifies is named directly as a worst mistake by more than one founder." },
  { title: "Deferring brand and positioning", detail: "\"I'll fix the brand once I have money\" is a recurring regret — the advice is to build even a lightweight version of the intended brand from day one." },
  { title: "Moving too slowly on expansion", detail: "TextMagic's founder explicitly regrets not pursuing platform expansion earlier, saying more could have been achieved by starting sooner." },
];

export type ToolGroup = { category: string; tools: string };

export const toolGroups: ToolGroup[] = [
  { category: "SEO / Content", tools: "Ahrefs, Semrush, Google Search Console, Google Analytics" },
  { category: "No-code / Website", tools: "Carrd, no-code SaaS builders (Dorik-style), Webflow-adjacent tools" },
  { category: "Payments", tools: "Stripe, PayPal, plus Venmo/Apple Pay/Google Pay for consumer products" },
  { category: "Support / CRM", tools: "Zendesk (incl. Zendesk Sell), Atlassian/Jira, GitHub" },
  { category: "Automation", tools: "Zapier, Mailgun" },
  { category: "Analytics / BI", tools: "Metabase, Google Analytics" },
  { category: "Design", tools: "Figma" },
  { category: "Freelance sourcing", tools: "Upwork — used both to find early customers and to hire cheap dev/design help" },
  { category: "Mobile attribution", tools: "Adjust, AppsFlyer — for tracking paid UA once organic creative is proven" },
];

export type Framework = {
  id: string;
  name: string;
  source: string;
  summary: string;
  steps: string[];
};

export const frameworks: Framework[] = [
  {
    id: "mvc",
    name: "Minimum Viable Content (Lean SEO)",
    source: "Starter Story's own internal content method",
    summary: "Test a topic cheaply before over-investing — the same MVP logic applied to content instead of product.",
    steps: [
      "Identify an opportunity via keyword/competitor research",
      "Publish a lightweight test article, not a full pillar piece",
      "Assess performance after ~30 days",
      "Pivot, persevere, or scale into a full content cluster based on the data",
    ],
  },
  {
    id: "micro-saas-validation",
    name: "The 4-Filter Micro-SaaS Validator",
    source: "Illustrated by the SuperLemon case study",
    summary: "A repeatable way to find and validate a micro-SaaS idea instead of starting from a blank page.",
    steps: [
      "Find an audience already proven to pay for something adjacent",
      "Look for existing solutions that are underserved or poorly reviewed",
      "Confirm a realistic path to at least $3K MRR",
      "Hunt inside niche app marketplaces (e.g. the Shopify App Store) rather than inventing from scratch",
    ],
  },
  {
    id: "mobile-app-playbook",
    name: "The 3-Phase Mobile App Playbook",
    source: "Steven Cravotta (Puffcount) — The $1M Mobile App Playbook",
    summary: "Validate creative for free before spending a dollar on ads, then scale only what's proven.",
    steps: [
      "Market Research: mine your niche's most-liked short-form videos of all time, log the hook/storyline/CTA pattern",
      "Organic Growth: post daily, replicate proven formats, distribute cross-platform, pin winners",
      "Paid Ads: scale only organically-validated creative, track full-funnel (view → click → install → trial → subscription) via Adjust/AppsFlyer, and treat an LTV:CAC of ~3:1 as the threshold worth scaling",
    ],
  },
];

export type CaseStudy = { name: string; category: string; summary: string };

export const caseStudies: CaseStudy[] = [
  { name: "ConvertKit", category: "SaaS", summary: "Filled a gap Mailchimp left for professional creators — grew to $25M/year." },
  { name: "TextMagic", category: "SaaS", summary: "A 2001 side project driven to a Nasdaq IPO almost entirely through SEO/content." },
  { name: "Prerender.io", category: "SaaS", summary: "Solo founder fixed his own JS-SEO problem on the side, scaled to $2.64M/yr." },
  { name: "Trading Community Platform", category: "SaaS", summary: "Built to run the founder's own community, grew via manual DMs to $125-142K MRR, sold for $3.5M." },
  { name: "lemlist", category: "SaaS", summary: "Grew to $600K ARR / 8,000+ customers by cold-emailing prospects with its own product." },
  { name: "Dorik", category: "SaaS", summary: "A 2019 no-code website builder side project, now $11.9M/yr." },
  { name: "Scribly.io", category: "Productized Service", summary: "Freelance copywriting turned into a $14K/mo recurring subscription." },
  { name: "Puffcount", category: "Mobile App", summary: "Quit-vaping app scaled via free organic TikTok (120K followers) before spending on ads — $44K MRR." },
  { name: "FitSW", category: "Mobile App / SaaS", summary: "Solo-bootstrapped personal-trainer management app, $25K/mo serving 20,000+ trainers." },
  { name: "1Page", category: "Mobile App", summary: "Built to fix the founder's own sales-meeting-prep pain point, reached $120K/yr." },
  { name: "Christian Hypnobirthing", category: "Mobile App", summary: "Solo founder, personal-life-stage pain point, $120K/yr with no team." },
  { name: "BACH", category: "Mobile App", summary: "Bachelorette-party planning/booking app, $6M/year with a 12-person team." },
];

export const founderArchiveAgents: Agent[] = [
  {
    id: "idea-pattern-matcher",
    name: "Idea Pattern Matcher",
    emoji: "🧭",
    color: "#FFD400",
    tagline: "Find out which proven pattern your idea fits",
    prompt: `You are acting as a Startup Idea Analyst who has studied thousands of founder case studies (in the style of Starter Story interviews). Help me figure out which proven idea-origin pattern my idea fits, and what that implies.

Here is my idea and how I came up with it:
"""
[PASTE YOUR IDEA AND HOW YOU CAME UP WITH IT HERE]
"""

Do the following:
1. Identify which pattern this idea matches: frustration with an existing tool, a gap noticed from inside a day job, a side project scratching your own itch, productizing a freelance skill, a personal non-career pain point, or a niche-marketplace hunt.
2. Based on real founders who followed that same pattern, tell me what tends to go right and wrong for ideas that start this way.
3. Ask me the 2-3 questions a skeptical founder-interviewer would ask to test whether this is a real opportunity or just an interesting observation.
4. Recommend the fastest way for someone with my exact origin story to get first evidence this is worth pursuing.

Ground your answer in how real founders with this pattern actually validated their idea, not generic startup advice.`,
  },
  {
    id: "micro-saas-validator",
    name: "Micro-SaaS Validator",
    emoji: "🔬",
    color: "#4D96FF",
    tagline: "Run your idea through the 4-filter test",
    prompt: `You are acting as a Micro-SaaS Validator using a 4-filter framework distilled from real founder case studies: (1) an audience already proven to pay for something adjacent, (2) existing solutions that are underserved or poorly reviewed, (3) a realistic path to at least $3K MRR, (4) found inside a niche marketplace or existing ecosystem rather than invented from scratch.

Here is my idea:
"""
[PASTE YOUR MICRO-SAAS IDEA HERE]
"""

Do the following:
1. Score my idea against each of the 4 filters, being honest about which ones it clearly passes and which are unproven.
2. For any filter it fails or is unclear on, tell me the single fastest way to get real evidence (not more thinking, actual evidence).
3. Suggest 3 specific marketplaces or ecosystems (app stores, plugin directories, integration marketplaces) where I could look for underserved incumbents in this space, if I haven't already.
4. Give a blunt verdict: strong candidate, needs more validation on a specific filter (name it), or likely not a fit for the micro-SaaS model.

Be as rigorous as a skeptical case-study interviewer, not a cheerleader.`,
  },
  {
    id: "mobile-app-playbook-planner",
    name: "Mobile App Playbook Planner",
    emoji: "📱",
    color: "#FF6B6B",
    tagline: "Apply the 3-phase organic-then-paid playbook",
    prompt: `You are acting as a Growth Strategist applying a proven 3-phase mobile app growth playbook: (1) Market Research — mine your niche's best-performing short-form content and log the hook/storyline/CTA pattern, (2) Organic Growth — post daily, replicate what works, distribute cross-platform, (3) Paid Ads — scale only organically-validated creative, tracked full-funnel, only pushing spend behind an LTV:CAC around 3:1 or better.

Here is my app idea and target audience:
"""
[PASTE YOUR APP IDEA AND TARGET AUDIENCE HERE]
"""

Do the following:
1. Identify which short-form platforms (TikTok, Reels, Shorts) and content formats are most likely to reach this specific audience.
2. Propose 5 concrete content hooks/storylines to test in the organic phase, based on the core value of this app.
3. Define what "proven" should mean before I move from organic to paid (views, shares, or a proxy signup/waitlist action).
4. Estimate a rough LTV for this app type and what CAC ceiling that implies before paid spend becomes profitable.
5. Give me a week-by-week plan for the first month, organic only.

Be specific to this app and audience, not generic social media advice.`,
  },
  {
    id: "productize-service-builder",
    name: "Productized Service Builder",
    emoji: "📦",
    color: "#6BCB77",
    tagline: "Turn your freelance skill into a subscription",
    prompt: `You are acting as a business model consultant who has studied dozens of founders who turned a freelance or agency service into a fixed-scope, recurring-revenue product (the "productized service" pattern).

Here is the freelance/agency service I currently offer or could offer:
"""
[PASTE YOUR SKILL OR CURRENT SERVICE HERE]
"""

Do the following:
1. Define a fixed-scope package version of this service: exactly what's included, what's explicitly excluded, and the turnaround time — narrow enough that it's deliverable at a predictable cost every time.
2. Propose a flat monthly or per-deliverable price, and estimate the margin at that price given realistic delivery time.
3. Identify the biggest risk in productizing this specific service (scope creep, quality variance, client customization requests) and how to guard against it contractually or operationally.
4. Suggest where past freelance clients or reputation (e.g. from freelance platforms) could become the first productized-service customers without a cold start.
5. Give me the single sentence I'd use to explain this new offer to a past client.

Ground this in real productized-service transitions, not generic "package your services" advice.`,
  },
  {
    id: "cold-outreach-architect",
    name: "Cold Outreach Architect",
    emoji: "✉️",
    color: "#B983FF",
    tagline: "Build a cold-email or DM channel that compounds",
    prompt: `You are acting as an Outreach Strategist who has studied founders who built real acquisition channels out of cold email and direct messaging (some even using their own product to acquire customers, i.e. dogfooding).

Here is my product/idea and target customer:
"""
[PASTE YOUR PRODUCT/IDEA AND TARGET CUSTOMER HERE]
"""

Do the following:
1. Write a short, specific first-touch message (cold email or DM) that leads with their problem, not my product.
2. Propose whether email or DM (and which platform) fits this target customer best, with reasoning.
3. If my own product could plausibly be used to run this outreach (dogfooding), point that out and explain how that becomes part of the pitch.
4. Suggest a realistic weekly volume and follow-up cadence sustainable for one person working part-time.
5. Define what reply/conversion rate would indicate this is a real channel worth doubling down on.

Be concrete and specific to this product and customer, not generic cold-email templates.`,
  },
  {
    id: "founder-mistake-auditor",
    name: "Founder Mistake Auditor",
    emoji: "⚠️",
    color: "#4ECDC4",
    tagline: "Check your plan against the mistakes that recur most",
    prompt: `You are acting as a blunt advisor who has read hundreds of founder retrospectives and knows the mistakes that come up again and again: trying to serve everyone instead of a niche, building in private too long, half-measuring the MVP, scaling cost ahead of revenue, deferring brand/positioning, and moving too slowly on obvious expansion.

Here is my current plan for this business:
"""
[PASTE YOUR CURRENT PLAN, SCOPE, OR STRATEGY HERE]
"""

Do the following:
1. Check my plan against each of the six recurring mistakes above and flag any I'm currently at risk of making, with a one-sentence reason for each.
2. For each flagged risk, give one concrete adjustment to my plan that would fix it without requiring more time or money than I already have.
3. Identify which single one of these risks, if it went wrong, would hurt me the most right now given my current stage.
4. Tell me one thing in my plan that's actually a strength worth protecting, not just risks.

Be direct — the point is to catch problems now, not to be encouraging.`,
  },
];
