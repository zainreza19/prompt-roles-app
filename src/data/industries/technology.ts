import type { WorkflowType } from "@/data/business-workflows";

const TIER_COLOR = { A: "#4ECDC4", B: "#FF9F40", C: "#FF6B6B" };

export const technologyWorkflows: WorkflowType[] = [
  {
    id: "product-development",
    label: "Product Development & Engineering",
    intro:
      "How an idea becomes a shipped feature or product — from a solo founder coding it alone with AI tools, to a hyperscaler's thousands of engineers organized into ranks, review boards, and staged rollouts.",
    compare: [
      { label: "Team", a: "1-10 people, founder does everything", b: "50-500 people, PM/eng/design/QA split", c: "Thousands of engineers, formal career ladder (L3-L10)" },
      { label: "Idea → shipped", a: "Days to 2-3 weeks", b: "2-6 weeks per feature", c: "1-2 quarters per feature; 1-3 years for a platform" },
      { label: "Key tools", a: "Cursor, Claude Code, Vercel, Supabase, Stripe", b: "Linear/Jira, Figma, GitHub Actions, LaunchDarkly, Datadog", c: "Internal tooling (Piper/Blaze, ADO) + GitHub Enterprise, Datadog/Splunk-scale" },
      { label: "Review process", a: "None — founder ships straight to prod", b: "Peer review + CI + AI review bot + staged flags", c: "2+ approvers, design docs, launch-review board, staged rollout" },
      { label: "Top failure point", a: "AI-generated code ships with no QA net", b: "QA can't keep pace with AI-generated PR volume", c: "Launch-review bottleneck; cross-team dependency stalls" },
    ],
    tiers: [
      {
        key: "A",
        name: "Solo Founder / Seed-Stage Startup",
        tag: "1-10 people, pre-PMF or just past it",
        color: TIER_COLOR.A,
        tldr: "One or two people use AI tools to build and launch an app almost by themselves, testing it directly on real users instead of following a big company's process.",
        profile:
          "Solo founders or tiny founding teams (1-10 people), typically pre-seed to seed stage, either self-funded or holding $500K-$3M in seed capital, with $0-$1M ARR and no dedicated QA or ops function. Real current examples: Pieter Levels (solo, running Nomad List, Remote OK, and Photo AI — the latter reportedly crossing $1M+ ARR with zero employees), Marc Lou (ShipFast, indie SaaS portfolio), and small seed-stage teams like early Cursor or Cal.com in their first year. A large share of 2026's new venture-backed cohort is now explicitly \"solo-founded.\"",
        steps: [
          { title: "Problem/idea capture", text: "Founder notices a pain point (often their own) via Twitter/X, Reddit, or a paying-customer conversation; no formal intake, just a note in Notion or a phone memo." },
          { title: "Scrappy validation", text: "A landing page (built in hours via Framer/v0/Lovable) or a tweet thread tests demand before a line of product code is written." },
          { title: "AI-assisted build", text: "Founder (or 1-2 engineers) uses an AI coding agent (Cursor, Claude Code, Replit Agent, Bolt.new, v0) to scaffold and largely write the app in days, often on a pre-built stack (Supabase/Firebase + Next.js + Vercel + Stripe)." },
          { title: "Self-review", text: "The founder is the only reviewer; \"code review\" is running it locally, maybe a quick pass by a co-founder or an AI review bot (CodeRabbit, Greptile)." },
          { title: "Ship to production", text: "Deploy directly via git push to Vercel/Netlify/Fly.io; no staging environment in many cases, or a thin one." },
          { title: "Direct customer feedback loop", text: "Founder DMs users, watches Discord/Intercom, or does live-streamed \"build in public\" sessions to get instant reaction." },
          { title: "Iterate or kill", text: "Because there's no bureaucracy, features that flop are ripped out within days; the founder pivots the roadmap weekly based on usage data (PostHog, Plausible) and revenue." },
        ],
        roles:
          "Usually just \"founder\" (does product, engineering, design, support, marketing, and sales personally). If a second person joins, it's typically a technical co-founder splitting frontend/backend, or a contractor for design. No PM, no QA, no dedicated DevOps — AI agents functionally substitute for a junior engineering team.",
        timeline:
          "Idea to shipped MVP: days to 2-3 weeks. A single feature: hours to 1-2 days with AI-assisted coding. Time-to-first-paying-customer: often under 30 days for a validated niche. Full pivot cycles happen inside a single month if metrics don't move.",
        tools:
          "Cursor (Pro $20/mo, Ultra $200/mo), GitHub Copilot, Claude Code, Replit Agent, Bolt.new, v0 by Vercel, Lovable for coding; Vercel/Supabase/Fly.io/Firebase for infra; Stripe for payments; Notion or Linear's free tier for tracking; PostHog/Plausible for analytics. What's well-solved: scaffolding a working full-stack app from a prompt is nearly free and instant; hosting/deploy is a solved, cheap commodity. The gap: QA and correctness verification for AI-generated code — research shows AI-generated code introduces roughly 1.7x more defects than human-written code, and solo founders have no QA function to catch this. Emerging AI-native QA startups (Momentic, Revyl, QualGent, Thunders) target exactly this, but adoption among true solo builders is still low since these tools are priced/positioned for teams, not individuals.",
        moneyFlow:
          "No real payroll — the founder draws no salary or a minimal one from early revenue. Equity is 100% founder-held (or split with a co-founder) with no formal cap table until a raise. Infra/tooling spend is typically under $500/month until revenue scales. Build-vs-buy is almost always \"buy/assemble\" — nobody at this stage builds their own auth, payments, or infra from scratch.",
        failurePoints: [
          "Building in a vacuum — a solo founder burns 3-6 months building features nobody asked for before ever talking to a real customer.",
          "No QA net — AI-generated code ships straight to prod; a subtle logic bug in billing or auth goes unnoticed for weeks with no second reviewer.",
          "Infra surprise bills — usage-based pricing spikes unexpectedly when a product goes viral, catching a founder with no ops person off guard.",
          "Founder burnout/bus factor — the entire company's tribal knowledge (code, infra credentials, customer relationships) lives in one person's head with no backup.",
        ],
        opportunity:
          "A real gap exists in \"QA-as-a-safety-net for solo AI builders\" — a lightweight, sub-$30/month tool that automatically generates and runs regression tests against AI-written code changes before they hit production, positioned for a single non-QA-literate founder rather than an enterprise test team. Existing players are priced and built for teams with dedicated engineers, not someone shipping solo via Cursor at midnight.",
      },
      {
        key: "B",
        name: "Venture-Backed Growth-Stage Company",
        tag: "Series A-C, 50-500 people",
        color: TIER_COLOR.B,
        tldr: "The company now has a real team with different job titles for different jobs, planning in short cycles, reviewing and testing each other's code, and rolling out features carefully to avoid breaking things.",
        profile:
          "Companies with 50-500 employees, Series A through C funding ($10M-$150M+ raised), $5M-$100M ARR, scaling from initial product-market fit into multiple product lines and enterprise customers. Real current examples: Ramp, Vanta, Retool, Cal.com, and Clay. At Series B specifically, engineering typically represents 35-45% of total headcount, with 20-80 engineers depending on sector.",
        steps: [
          { title: "Roadmap planning", text: "Quarterly planning combines top-down company OKRs with bottom-up team proposals; a PM and eng lead jointly prioritize using a scoring framework (RICE or similar) in Linear or Productboard." },
          { title: "Spec/PRD writing", text: "PM writes a lightweight PRD with problem statement, success metrics, and rough scope; design attaches Figma mocks." },
          { title: "Technical design & scoping", text: "A senior/staff engineer writes a short design doc for anything non-trivial, gets async feedback from peers, and the team breaks it into tickets." },
          { title: "Sprint-based build", text: "Engineers work in 1-2 week sprints (or Shape Up-style 6-week cycles), tracked in Linear/Jira, with daily standups." },
          { title: "Code review & CI", text: "Pull requests go through mandatory peer review, automated CI runs tests and lint, and an AI code-review bot (CodeRabbit, Graphite) does a first pass." },
          { title: "Staging QA & feature flags", text: "Changes deploy to staging; QA validates; feature flags (LaunchDarkly, Statsig) gate the release to a subset of users." },
          { title: "Progressive rollout", text: "Canary or percentage-based rollout in production, monitored via Datadog/Sentry, with an on-call engineer (PagerDuty) watching error rates." },
          { title: "Post-launch measurement", text: "Product analytics (Amplitude, Mixpanel, PostHog) measure the feature's impact against the original success metric; a launch review closes the loop." },
        ],
        roles:
          "Distinct functions now exist: Product Managers (often 1 per 5-8 engineers), Engineering Managers (1 per 6-8 engineers), Staff/Principal Engineers, dedicated QA/SDET engineers, a Designer or design team, a DevOps/Platform team, and a Data/Analytics function. Engineering is organized into squads or pods, each owning a product surface end-to-end.",
        timeline:
          "Idea to shipped feature: 2-6 weeks typical; small fixes ship same-day. Quarterly roadmap cycles set the macro cadence, with sprint-level replanning every 1-2 weeks. A major cross-team initiative can take 2-3 quarters from spec to GA.",
        tools:
          "Linear (Business $16/user/mo) increasingly displacing Jira; Figma for design; GitHub/GitLab with GitHub Actions/CircleCI and CodeRabbit/Graphite for AI-assisted review; LaunchDarkly or GrowthBook/Statsig for feature flags; Datadog (~$46+/host/month combined) or Sentry for observability; Amplitude/Mixpanel/PostHog for analytics. What's well-solved: ticket tracking, CI/CD, feature flagging, and error monitoring are mature, competitively priced categories. The gap: spec-to-code traceability at scale. A 2026 empirical study found over 110,000 surviving AI-introduced issues across production repos industry-wide as PRs balloon in size faster than reviewers can keep up. \"Spec-driven development\" tools (GitHub Spec Kit, BMAD-METHOD, Augment Cosmos, Kiro) are emerging to make AI-generated code traceable back to a reviewable spec, but none has become the default the way Jira/Linear did for tickets.",
        moneyFlow:
          "Engineering salaries dominate burn: a Series B company might spend $150K-$250K total comp per senior engineer, with equity grants (0.05%-0.5% for ICs) supplementing cash. Infra costs typically run 10-20% of revenue and are actively optimized (FinOps hires start appearing). Tooling spend can reach $2,000-$5,000/engineer/year fully loaded. Build-vs-buy tips toward \"buy\" for horizontal concerns (auth via Clerk/Auth0, payments via Stripe) but \"build\" for the core differentiated product.",
        failurePoints: [
          "Roadmap whiplash — switching quarterly priorities so often that no team ships anything to completion, common right after a big fundraise.",
          "Feature-flag debt — hundreds of stale, forgotten flags accumulate because nobody owns cleanup, eventually causing incidents when two flags interact unexpectedly.",
          "QA can't keep pace with AI-generated PR volume — 52% of QA teams in 2026 report increased bug volume tied to AI-generated code.",
          "Premature platform investment — building an internal developer platform before the team or traffic actually needs it, sinking staff-engineer time into infrastructure that doesn't move revenue.",
        ],
        opportunity:
          "The concrete whitespace is \"spec-to-ship traceability for AI-assisted teams\" — a tool that sits between the PRD stage and the PR stage, automatically checking whether AI-generated implementation actually matches the written spec and flagging drift before code review. Neither Linear/Jira (track tickets, not code correctness) nor Copilot review (reviews code in isolation) currently do this; the buyer is any Series B-C engineering org whose PR review queue has become the bottleneck because AI has 3x'd code output without 3x'ing reviewer bandwidth.",
      },
      {
        key: "C",
        name: "Large Public Tech Company / Hyperscaler",
        tag: "Thousands of employees",
        color: TIER_COLOR.C,
        tldr: "A giant tech company like Google has thousands of engineers organized into ranks and teams who plan for months, get every big idea checked by lawyers and safety reviewers, and roll out new features slowly to small groups before everyone gets them.",
        profile:
          "Public companies or hyperscalers with thousands to hundreds of thousands of employees, multi-billion-dollar revenue, and mature, multi-year product portfolios. Real current examples: Google, Microsoft, Salesforce, Atlassian, and Stripe (now operating at hyperscaler-like engineering maturity despite remaining private).",
        steps: [
          { title: "Strategic planning", text: "VP- and director-level leadership set multi-quarter roadmaps aligned to company OKRs; this cascades down through org-wide planning documents." },
          { title: "Design doc & review", text: "For any significant feature, a senior/staff+ engineer writes a formal design doc, circulated for structured review by a design-review committee before code is written." },
          { title: "Cross-functional spec sign-off", text: "PM, design, legal/privacy, security, and often a launch-review board must sign off on scope, especially for anything touching user data or new markets." },
          { title: "Sprint/quarter execution across many teams", text: "Dozens to hundreds of engineers build in parallel against the shared spec, coordinated via internal tools and formal API contracts between teams." },
          { title: "Mandatory code review + automated testing gates", text: "Every change requires peer review (often 2+ approvers) plus passing large automated test suites, static analysis, and security scanning before merge." },
          { title: "Staged rollout", text: "Features go to internal employees first, then a small external canary population, then progressive percentage-based rollout across regions, gated by automated health checks." },
          { title: "Launch review and compliance gate", text: "A formal launch-readiness review (privacy, legal, accessibility, security, SRE sign-off) is required before wide GA." },
          { title: "Post-launch operations", text: "Dedicated SRE/on-call rotations monitor SLOs and error budgets; a blameless-postmortem process follows any significant incident." },
        ],
        roles:
          "Full career ladders from new-grad engineer through Staff/Principal/Distinguished Engineer and Fellow. Surrounding functions include Product Managers, Engineering Managers/Directors/VPs, dedicated QA/SDET orgs, Site Reliability Engineers, Security Engineers, Privacy/Legal partners, Technical Program Managers who coordinate cross-team launches, and Developer Experience/Platform teams serving thousands of internal engineers.",
        timeline:
          "Annual planning sets the macro roadmap; quarterly OKRs set execution checkpoints. A single well-scoped feature might take 1-2 quarters from design doc to GA; a major new product or platform can take 1-3 years. Promotion cycles shape how engineers are incentivized to scope and ship work.",
        tools:
          "Massive internal tooling investment (Google's Piper/Critique/Blaze, Meta's Buck2, Microsoft's Azure DevOps), supplemented by GitHub Enterprise and Datadog/Splunk-scale observability where internal build doesn't make sense. What's well-solved: reliability engineering, staged rollout infrastructure, and large-scale CI/CD are decades-mature — these companies often build better internal versions of what startups buy externally. The gap: internal developer productivity measurement and cross-team dependency visibility at massive scale. Even hyperscalers struggle to answer \"which of our 50,000 engineers are blocked, and by what\" in real time, spawning a market of \"engineering intelligence\" tools (DX, Jellyfish, Swarmia) that hyperscalers evaluate even though they mostly end up building bespoke internal versions.",
        moneyFlow:
          "Compensation is leveled and banded (roughly $150K-$200K rising to $500K+ at senior/staff levels and into the millions at distinguished/fellow levels), with RSUs as a major component vesting over 4 years. Infra costs are managed centrally by a Cloud/Infra org with dedicated capacity planning. Tooling is overwhelmingly build-not-buy for core developer workflow because of scale economics, but buy for specialized point solutions.",
        failurePoints: [
          "Launch-review bottleneck — a feature ready to ship sits for weeks waiting on legal/privacy/accessibility sign-off queues that weren't resourced for the volume of concurrent launches.",
          "Promo-driven engineering — engineers or teams choose flashy, resume-building rewrites over unglamorous but high-impact maintenance work.",
          "Cross-team dependency stalls — a feature owned by Team A silently blocks on an API Team B was supposed to ship, surfacing only at integration time.",
          "Silent scope creep from compliance — a 2-week feature balloons to a 2-quarter project once privacy/legal/security review adds requirements late in the process.",
        ],
        opportunity:
          "The sharpest whitespace is cross-team dependency and launch-readiness tracking that spans product, legal, privacy, security, and SRE sign-offs in one place — today this lives in a patchwork of internal wikis, spreadsheets, and Slack threads even at hyperscalers, because generic PM tools model tickets within a team, not multi-org launch-approval graphs. A startup that nails this \"launch orchestration\" layer could sell to TPM and platform-engineering functions at any company above ~1,000 engineers.",
      },
    ],
  },
  {
    id: "sales-gtm",
    label: "Sales & Go-To-Market",
    intro:
      "How the product actually gets in front of customers and gets bought — from a founder personally DMing strangers, to a hybrid PLG/enterprise motion with a dozen tools, to a full field-sales org negotiating nine-month enterprise deals.",
    compare: [
      { label: "Who sells", a: "Founder does 100% of selling", b: "SDR/AE split, CSMs, Deal Desk, VP Sales/CRO", c: "Segmented field org: enterprise AEs, SEs, TAMs, channel partners" },
      { label: "Sales cycle", a: "Same-day to 6 weeks", b: "30-180 days (median ~84 days)", c: "90-180+ days; 9-12+ months for strategic accounts" },
      { label: "Key tools", a: "Apollo.io + Clay (under $200/mo total)", b: "HubSpot/Salesforce, Outreach/Salesloft, Gong, Clay/Common Room", c: "Salesforce + Snowflake, 6sense/Demandbase, Clari, CaptivateIQ" },
      { label: "Deal size", a: "$0 (freemium) to low $10Ks ACV", b: "$15K-$100K ACV, avg ACV $26,265", c: "$100K-$300K+ ACV for enterprise/strategic" },
      { label: "Top failure point", a: "Founder-sales dependency trap", b: "PLG/sales channel conflict; tool sprawl", c: "Death by procurement; champion departure risk" },
    ],
    tiers: [
      {
        key: "A",
        name: "Solo Founder / Seed-Stage Startup",
        tag: "1-10 people",
        color: TIER_COLOR.A,
        tldr: "At the very start, the person who built the app is also the one calling strangers and asking them to try it — there's no sales team yet, just the founder.",
        profile:
          "Pre-seed to seed stage, usually pre-Series A, 1-10 employees, $0-$1M ARR, often pre-product-market-fit or just past the first PMF signal. The founder is the entire sales function. Real examples documented running this exact playbook: Lorikeet, Tofu, Equals, Qwilr, and June — all cited as founder-led-sales case studies in 2025-2026 GTM writeups; Cal.com, Resend, and PostHog ran the same motion in their earliest days.",
        steps: [
          { title: "Founder-sourced leads", text: "Twitter/X, LinkedIn, Hacker News, YC/accelerator networks, or a founder's personal network generate the first 50-200 leads; there is no marketing team." },
          { title: "Manual/semi-automated outbound", text: "Founder or a single generalist hire uses cold email or DMs, often personally written, sometimes assisted by Apollo.io or Clay for list-building." },
          { title: "Self-serve signup or founder demo", text: "Product either lets users self-onboard (PLG) or the founder personally runs every demo call (sales-led)." },
          { title: "Activation tracking", text: "Founder watches product analytics obsessively to see who's actually using the thing, often reaching out personally to active users." },
          { title: "Manual qualification/pricing conversation", text: "No formal BANT process; founder decides ad hoc who's a fit and negotiates price directly, often on a call or in a shared Slack/Discord channel." },
          { title: "Handshake close", text: "Contracts are frequently a Stripe checkout link (self-serve) or a one-page DocuSign/PandaDoc agreement for the earliest design-partner customers." },
          { title: "White-glove onboarding", text: "The founder personally onboards every customer, since there's no CS team; this doubles as qualitative research." },
        ],
        roles:
          "Founder-led sales: CEO (and sometimes a technical co-founder) does 100% of selling. First hire is often a generalist \"Founding GTM\" or \"Head of Growth\" — not a classic AE. No SDR/AE split, no dedicated CS, no sales ops. RevOps tooling is a spreadsheet or a lightweight CRM.",
        timeline:
          "Sales cycle: same-day to 2 weeks for self-serve PLG signups; 2-6 weeks for founder-led B2B deals with design-partner customers. Time to first $10K MRR: typically 3-9 months post-launch.",
        tools:
          "Apollo.io (Free-$119/user/mo) and Clay (Free-$800/mo) — Apollo's free tier for outbound plus Clay's Starter plan for enrichment gets a founder enterprise-grade prospecting for under $200/month. HubSpot Free/Notion/Airtable as a CRM; PostHog/Amplitude for product analytics; Stripe Checkout/Billing for self-serve. Well-solved: cheap, high-quality contact data and enrichment, cheap product analytics, outbound personalization templates. Real gap: no good lightweight tool unifies \"who signed up → who's activated → who should the founder personally call today\" for a 1-person GTM motion — founders stitch this together from PostHog + a spreadsheet + Slack alerts. Emerging players like Artisan and 11x.ai are chasing this but are priced for slightly later-stage teams; Clay itself remains a power-user tool that's overkill for a non-technical solo founder.",
        moneyFlow:
          "Pricing model: usually flat monthly self-serve tiers or simple per-seat, sometimes usage-based; no complex CPQ. No commission structure. CAC is close to $0 in cash terms but extremely high in founder time. No formal quota; the informal target is a specific MRR milestone tied to the next fundraise.",
        failurePoints: [
          "Founder-sales dependency trap — the founder becomes the bottleneck and can't step back to hire/manage because they're the only one who can close deals.",
          "False PMF signal from friends-and-family deals — early \"customers\" are really favors, masking the fact cold-market demand doesn't exist yet.",
          "Premature hiring of an AE before the founder has a repeatable, documented sales motion — the AE fails because there's no playbook to hand off.",
          "Pricing paralysis — no data to price against, so founders either underprice out of fear or overprice and stall conversion.",
        ],
        opportunity:
          "A real gap: a lightweight \"founder-CRM\" that auto-pulls signup/activation events (from PostHog/Amplitude/Stripe) into a single ranked \"call these 5 people today\" feed, purpose-built for non-technical solo founders who find Clay/Common Room too complex and too enterprise-priced.",
      },
      {
        key: "B",
        name: "Venture-Backed Growth-Stage Company",
        tag: "Series A-C, 50-500 people",
        color: TIER_COLOR.B,
        tldr: "The company now has a real sales team with different job titles for different jobs, letting people sign up online while also chasing bigger companies who need a human salesperson to walk them through it.",
        profile:
          "Series A through C, 50-500 employees, roughly $3M-$50M ARR, moving from pure PLG to a hybrid \"product-led + sales-assisted\" motion or actively building an enterprise motion. Real, current examples: Retool, Ramp, Vanta, Clay, and Deel in their growth-stage years.",
        steps: [
          { title: "Multi-channel demand generation", text: "Inbound content/SEO/community blended with outbound sequences run by a dedicated SDR team." },
          { title: "Lead scoring and routing", text: "Marketing ops scores product-qualified leads (PQLs) and marketing-qualified leads (MQLs) using HubSpot/Salesforce plus an enrichment layer (Unify, Clearbit), routing to the right rep." },
          { title: "SDR qualification", text: "SDRs book discovery calls using a BANT/MEDDIC-lite framework; larger accounts get handed to AEs, self-serve signals get nudged toward in-app upgrade flows." },
          { title: "AE-led discovery and demo", text: "AEs run structured discovery, tailor a demo, and loop in a Sales Engineer for technical/security questions on bigger deals." },
          { title: "Trial or POC", text: "Free trial, sandbox, or a paid pilot for larger accounts, tracked in the CRM alongside product usage data." },
          { title: "Procurement/security review", text: "Mid-market and up now triggers security questionnaires (SOC 2, vendor risk review) and legal redlines — a stage that barely existed at Tier A." },
          { title: "Negotiation and close", text: "AE negotiates pricing/terms, often with a Deal Desk approval for discounts above a threshold; contract runs through DocuSign/Ironclad." },
          { title: "Sales-to-CS handoff", text: "A formal handoff to a Customer Success Manager, tracked in the CRM to prevent the classic \"thrown over the wall\" failure." },
        ],
        roles:
          "Full org emerges: SDR/BDR team, Account Executives (split Commercial vs. Mid-Market vs. early Enterprise), Sales Engineers, CSMs, RevOps/Sales Ops, Deal Desk, and a VP of Sales or CRO. PLG-native companies also run a Growth/PLG team in parallel — the hybrid tension between self-serve and sales-assisted defines this tier.",
        timeline:
          "Sales cycle: 30-90 days for mid-market deals ($15K-$100K ACV); can stretch toward 90-180 days chasing early enterprise logos. Median B2B SaaS cycle sits around 84 days (mean 134 days), lengthened ~22% since 2022 due to larger buying committees (average 6.8 stakeholders) and heavier security review.",
        tools:
          "A Series B company typically runs a 5-layer stack (CRM, enrichment/orchestration, sales engagement, conversation intelligence, analytics/attribution), spending roughly $8,000-$15,000 per rep per year. HubSpot Professional/Enterprise (~70% of sub-$25M-ARR companies) or Salesforce (~85% of $50M+ ARR companies); Outreach/Salesloft for engagement; Gong/Chorus for conversation intelligence; Clay/Apollo/Common Room/Unify/Warmly for signals. Well-solved: CRM, sequencing, and call recording/coaching are mature, commoditized categories. Real gap: reliably converting PQL signals into a rep's queue without flooding reps with noise — exactly why Zoom announced acquiring Common Room in July 2026, consolidating the category rather than it staying independent. There's no obvious durable independent winner yet.",
        moneyFlow:
          "Pricing shifts from flat self-serve tiers to a hybrid: self-serve list price for SMB, negotiated pricing above a certain threshold. AEs typically earn on a 4:1 to 6:1 quota-to-OTE ratio; Commercial/Mid-Market AE quotas run $900K-$1.4M; SMB AEs at $600K-$900K quota close 30-60 deals/year at ~$20K average deal size (median B2B SaaS ACV overall was $26,265 in 2025). Only 40-55% of reps hit quota in 2026 across most B2B SaaS datasets.",
        failurePoints: [
          "PLG/sales channel conflict — sales reps \"poaching\" self-serve accounts that were happily paying on a credit card, annoying customers.",
          "Premature enterprise pivot — hiring enterprise AEs and building security-review processes before there's enough enterprise pipeline to justify it.",
          "Tool sprawl — stacking Clay + Apollo + Outreach + Gong + Common Room + a CRM without an integration layer, leading to broken data.",
          "Broken sales-to-CS handoff — no formal process, so new enterprise logos churn in year one because nobody owned onboarding.",
        ],
        opportunity:
          "A neutral, integration-light layer that turns \"someone used my product a lot\" into \"the right rep gets pinged at the right moment with the right context\" without becoming its own multi-thousand-dollar-a-month platform to babysit — Common Room's acquisition by Zoom leaves exactly this niche without a clear independent winner.",
      },
      {
        key: "C",
        name: "Large Public Tech Company / Hyperscaler",
        tag: "Thousands of employees",
        color: TIER_COLOR.C,
        tldr: "At the biggest companies, selling one deal can take a whole team of specialists almost a year, because they're convincing dozens of people and going through mountains of legal and security paperwork before anyone signs anything.",
        profile:
          "Thousands to tens of thousands of employees, $1B+ (often $10B+) revenue, full enterprise field sales organization with regional/vertical segmentation. Current, real examples: Salesforce, Microsoft, Snowflake, Workday, Datadog (at scale).",
        steps: [
          { title: "Account-based targeting", text: "Dedicated marketing/ABM teams (using 6sense or Demandbase) identify and score named target accounts, often before any inbound signal exists." },
          { title: "Multi-threaded outbound and partner-sourced pipeline", text: "A mix of enterprise BDRs, channel/alliance partners (SIs like Accenture/Deloitte), and executive relationship-building generate pipeline." },
          { title: "Discovery across a large buying committee", text: "AEs and Solutions Engineers run discovery with 6-10+ stakeholders (procurement, security, IT, legal, sometimes the CFO)." },
          { title: "Technical validation / POC / RFP response", text: "Sales Engineers run formal proof-of-concepts, respond to RFPs, and coordinate security/compliance reviews (SOC 2, FedRAMP, data residency) that can take months on their own." },
          { title: "Executive sponsorship and negotiation", text: "VP/C-level sponsors on both sides get looped in; pricing goes through a formal Deal Desk, sometimes requiring VP/CRO sign-off for custom terms." },
          { title: "Legal/procurement/security review", text: "Dedicated legal and security teams negotiate MSAs, DPAs, and SLAs; this stage alone can take weeks to months at strategic accounts." },
          { title: "Contract execution and finance handoff", text: "Deal Desk and Finance finalize multi-year, multi-product contracts, booked per revenue-recognition rules." },
          { title: "Formal implementation", text: "A dedicated CSM and/or Technical Account Manager owns onboarding and adoption against contractual success metrics." },
        ],
        roles:
          "Fully specialized field org: Enterprise/Strategic Account Executives, SDRs, Sales Engineers/Solutions Architects, CSMs, Technical Account Managers, Renewal/Expansion Managers, Deal Desk analysts, Sales Ops/RevOps, Channel/Alliance Managers, regional VPs of Sales, and a Chief Revenue Officer.",
        timeline:
          "Sales cycle: 90-180+ days is standard for enterprise (>$100K ACV) deals; strategic/named accounts routinely run 9-12+ months including procurement and security review.",
        tools:
          "Salesforce (dominant, 16.7% share of tool mentions) as the operational backbone, increasingly paired with Snowflake via Data Cloud; 6sense/Demandbase for ABM; Clari for forecasting; Gong for conversation intelligence at scale; CaptivateIQ/Xactly/Everstage for comp. Well-solved: CRM, forecasting, comp management, and conversation intelligence are mature, deeply embedded categories. Real gap: genuinely agentic execution — tools that autonomously execute multi-step GTM workflows end-to-end — is the frontier for 2026. Even market leaders (Salesforce Agentforce, HubSpot Breeze) are early here; independent players like nRev.ai and ZoomInfo's GTM Workspace are pushing into this space precisely because incumbents haven't fully solved autonomous execution across the deal lifecycle.",
        moneyFlow:
          "Complex, negotiated multi-year enterprise contracts, often bundling platform + modules + usage-based components, heavy Deal Desk-managed custom discounting. Strategic/Enterprise AEs run $1.5M-$2.5M quotas closing 5-8 deals/year at $300K+ average deal size; Enterprise AEs at $1.2M-$1.8M quota close 8-15 deals/year at ~$120K average — against a 4:1-6:1 quota-to-OTE ratio. Median quota attainment across the industry sits around 70%, with only 40-55% of reps hitting quota in a given year.",
        failurePoints: [
          "Champion departure risk — a deal or renewal collapses because the internal champion who drove it leaves mid-cycle.",
          "Death by procurement — technically-won deals stall for months in legal/security review and never close in the forecast quarter.",
          "Comp plan gaming/sandbagging — reps deliberately hold deals to the next quarter to maximize accelerators.",
          "Renewal blind spots — with named accounts spread across AEs, CSMs, and TAMs, expansion/renewal risk can go unnoticed until it's a surprise churn event.",
        ],
        opportunity:
          "The real, still-open gap is genuine agentic execution across the full deal lifecycle rather than point-solution copilots — a system that can autonomously multi-thread a buying committee, chase down security questionnaire answers, and flag champion-departure risk in real time. The buyer is a VP of Sales/CRO running hundreds of enterprise AEs who is currently paying for Salesforce + Gong + Clari + Outreach separately and getting only recommendations, not execution, from any of them.",
      },
    ],
  },
  {
    id: "customer-success",
    label: "Customer Success & Support",
    intro:
      "Onboarding, retention, and support — from a founder personally answering every email, to a dedicated CS org juggling health scores and playbooks, to global tiered support armies working in shifts for Fortune 500 accounts.",
    compare: [
      { label: "Who does it", a: "Founder does everything personally", b: "VP of CS, segmented CSMs, L1/L2 support tiers", c: "Chief Customer Officer, global tiered orgs, dedicated TAMs" },
      { label: "CSM:account ratio", a: "N/A (founder covers all)", b: "1:20-30 high-touch, 1:100+ pooled SMB", c: "1:5-15 for strategic accounts" },
      { label: "Key tools", a: "Help Scout, Crisp/Intercom, Notion docs", b: "Vitally/ChurnZero, Zendesk + Fin AI, Amplitude", c: "Gainsight, Salesforce Service Cloud, Agentforce/Copilot" },
      { label: "Support SLA", a: "Informal, often same-day, no enforced SLA", b: "1-4 business hour first response, formal SLAs", c: "15-60 min Sev-1 response, contractually defined, 24/7" },
      { label: "Top failure point", a: "Founder burnout, no institutional memory", b: "CSM book-of-business overload, tool sprawl", c: "Cross-tool escalation breakdown, health-score fatigue" },
    ],
    tiers: [
      {
        key: "A",
        name: "Solo Founder / Seed-Stage Startup",
        tag: "1-10 people",
        color: TIER_COLOR.A,
        tldr: "At a tiny startup, the founder is the entire customer support team, answering emails and doing onboarding calls personally because there's no one else to do it.",
        profile:
          "1-10 people, often just the founder(s) plus one generalist hire. Pre-seed to seed, typically $0-$2M ARR, a few dozen to a few hundred customers. Real examples: Plausible Analytics (2-person team, founder-led support for years), Basecamp/37signals in its earliest days, Buffer in its first 1-2 years, and countless seed-stage companies where the founder personally answered every support email.",
        steps: [
          { title: "Signup/self-serve trial", text: "Customer signs up via a free trial or freemium tier with minimal friction; no sales gate." },
          { title: "Founder-led welcome", text: "Founder personally sends a manual or lightly templated welcome email, sometimes with a Loom video." },
          { title: "Self-serve onboarding", text: "Customer follows in-app checklists or docs with no human touch unless they get stuck." },
          { title: "First support contact", text: "Customer emails support or uses a chat widget; founder or sole support hire triages and answers directly, often within hours." },
          { title: "Ad hoc community support", text: "Many solo founders run a shared Slack/Discord for real-time troubleshooting and community-driven support." },
          { title: "Manual churn save attempts", text: "When a customer tries to cancel, founder personally reaches out to understand why and offer a fix or discount." },
          { title: "Feedback loop into product", text: "Support tickets and calls are the primary product research input; founder tags recurring issues and feeds them directly into the roadmap." },
        ],
        roles:
          "No dedicated CS or support role. Founder does everything: sales, onboarding, support, and success. If there is a first hire, it's usually a generalist customer support/success hybrid. No management layer, no enforced SLAs — just personal responsiveness as a differentiator.",
        timeline:
          "Onboarding: self-serve, typically completed in minutes to a day; a high-touch onboarding call may happen for the first 50-100 customers manually. Support response time: informally fast, often under a few hours, but with no formal SLA.",
        tools:
          "Help Scout ($25/user/month) for email-first support; Crisp or Intercom for chat widgets; Notion/GitBook for docs; Discord/Slack for community; Airtable or HubSpot free tier for tracking customer health manually. Well-solved: basic ticketing and email support are commoditized and cheap. Real gap: founders can't afford dedicated CS headcount but still need proactive churn signals. Emerging AI-native tools like Chatbase and Tidio offer free/cheap AI chatbots, and Intercom Fin (~$0.99/resolution) now lets a solo founder resolve 40-70% of ticket volume without hiring — but there's still no affordable AI tool proactively flagging \"this customer is about to churn\" for pre-seed companies; that's built for Tier B budgets only.",
        moneyFlow:
          "No dedicated CS cost line — support is a founder time cost, not a budget line. Tooling spend is typically under $200-$500/month total. Because there's no CSM comp structure, retention economics are entirely founder hustle. GRR/NRR are rarely tracked formally at this stage.",
        failurePoints: [
          "Founder burnout from being the single point of contact for both product and support, leading to slow response times as the customer base grows past ~100-200 accounts.",
          "No institutional memory — when the founder is heads-down building, support tickets go unanswered for days, causing silent churn.",
          "No documented playbook, so onboarding quality varies wildly customer to customer.",
          "Reactive-only churn management — no data instrumentation to catch at-risk accounts before they cancel.",
        ],
        opportunity:
          "A genuinely affordable ($20-50/month, not enterprise-priced) AI tool that watches product usage and support tickets for a single founder's ~100-500 customers and proactively flags \"these 5 accounts look like they'll churn this month\" would fill a real gap — today's health-scoring tools all start at $1K+/month and assume a CS team exists to act on the signal.",
      },
      {
        key: "B",
        name: "Venture-Backed Growth-Stage Company",
        tag: "Series A-C, 50-500 people",
        color: TIER_COLOR.B,
        tldr: "As the company grows, a real customer success team forms with dedicated people whose whole job is making sure customers succeed, using software that tracks who's happy and who's at risk.",
        profile:
          "50-500 employees, Series A-C, thousands of customers, typically $5M-$100M ARR with a dedicated CS/support org taking shape. Real, current examples: Notion, Airtable, Webflow, Loom (pre-acquisition), and companies like Vanta or Deel at their Series B/C stage.",
        steps: [
          { title: "Sales-assisted or PLG signup", text: "Customer either self-serves or is handed off from an AE post-close, with a formal handoff document/Slack channel." },
          { title: "Structured onboarding", text: "A dedicated onboarding specialist or CSM runs a defined kickoff call and implementation plan against 30/60/90-day time-to-value milestones." },
          { title: "Tiered support intake", text: "Tickets route through Zendesk/Intercom: L1 handles common issues, escalates to L2 (technical support engineers) for complex bugs." },
          { title: "CSM-led relationship management", text: "Assigned CSMs own a book of accounts (often 20-80 depending on segment), running regular check-ins and monitoring health scores." },
          { title: "Proactive health scoring & playbooks", text: "Automated alerts (usage drops, ticket spikes, NPS dips) trigger CSM outreach playbooks in tools like Vitally or ChurnZero." },
          { title: "QBRs for larger accounts", text: "Quarterly or semi-annual business reviews for mid-market/enterprise segments to show ROI and identify expansion opportunities." },
          { title: "Renewal & expansion motion", text: "CSM or a dedicated Renewals Manager runs the renewal process 60-90 days out; expansion opportunities are flagged to sales or handled directly." },
        ],
        roles:
          "Dedicated org forming: VP/Head of Customer Success, CS Ops manager, segmented CSMs (SMB pooled vs. mid-market vs. enterprise named), Onboarding/Implementation Specialists, Support team with L1/L2 tiers, and often a Support Engineer or TAM role.",
        timeline:
          "Onboarding: structured, typically 2-6 weeks depending on product complexity. Support SLAs become formal: first response in 1-4 business hours, resolution SLAs of 24-72 hours for non-critical bugs. QBRs run quarterly for mid-market/enterprise. CSM-to-account ratios: roughly 1:20-30 high-touch mid-market, 1:100+ pooled/tech-touch SMB.",
        tools:
          "Vitally (well-suited for mid-market B2B SaaS teams under 200 people), ChurnZero ($25K-$50K/year at $5-15M ARR), Catalyst, or Planhat for CS platforms; Zendesk (Suite Team $55/agent/mo, Suite Professional $115/agent/mo) or Intercom often layered with Fin AI to deflect volume; Amplitude/Mixpanel/Pendo feeding health scores. Well-solved: ticketing, basic health scoring, and playbook automation are mature. Real gap: mid-market CS platforms still require heavy manual configuration of health scores and playbooks; genuinely autonomous AI agents that execute a save play (not just flag risk) are new. Decagon ($4.5B valuation, Jan 2026) and Sierra ($15.8B valuation, May 2026) push into this with configurable AI agents that resolve tickets end-to-end, but they're priced for larger deployments — a Series B company often can't justify Sierra's enterprise engagement model.",
        moneyFlow:
          "CS headcount becomes a real budget line: fully loaded CSM cost is typically $90K-$140K/year, with variable comp commonly split 70/30 to 80/20 base-to-variable. CS org cost is justified against NRR: SMB-segment SaaS at this stage typically runs 97% NRR / ~91% GRR, mid-market $25K-$100K ACV segments run closer to 108% NRR. AI deflection is explicitly modeled to reduce cost-per-resolution from $15-25/ticket (fully-loaded human) toward $1-2/resolution.",
        failurePoints: [
          "CSM book-of-business overload — ratios creep past sustainable levels as headcount lags customer growth, causing reactive-only firefighting.",
          "Tool sprawl and fragmented customer view — support lives in Zendesk, health scores in Vitally, usage in Amplitude, and nobody reconciles them.",
          "Onboarding-to-CS handoff drop — customers fall through the cracks between sales close and CSM assignment during hypergrowth hiring lag.",
          "Health scores that don't predict actual churn — poorly calibrated scoring models erode CSM trust and they revert to gut feel.",
        ],
        opportunity:
          "A unified, mid-market-priced (\"Vitally-meets-Sierra\") platform that both scores health AND autonomously executes the save/expansion playbook would let a 50-500 person company get enterprise-grade automated retention without hiring a large CS ops function — today's tools either alert or act but not both at a price point this tier can afford.",
      },
      {
        key: "C",
        name: "Large Public Tech Company / Hyperscaler",
        tag: "Thousands of employees",
        color: TIER_COLOR.C,
        tldr: "At a giant tech company, there are whole armies of support and success teams around the world working in shifts and tiers so that big customers always have someone dedicated to them and everyone else gets fast automated help.",
        profile:
          "Thousands to tens of thousands of employees, public or hyperscale private, tens of thousands to millions of customers/accounts. Real, current examples: Salesforce, Microsoft, Adobe, Zendesk (at its own enterprise scale), and Atlassian.",
        steps: [
          { title: "Segmented intake", text: "Customers are routed by tier (enterprise/named vs. commercial vs. self-serve) at the point of sale, determining which support/success motion they receive." },
          { title: "White-glove enterprise onboarding", text: "Named enterprise accounts get a dedicated implementation/professional services team, technical account manager, and a formal onboarding project plan lasting weeks to months." },
          { title: "Global tiered support intake", text: "Requests enter via a case management system (Salesforce Service Cloud, Zendesk); L1 resolves ~60-70% of tickets, L2 handles ~25-30%, L3/engineering handles the rest." },
          { title: "Follow-the-sun global routing", text: "Multi-region support centers (Americas, EMEA, APAC) hand off cases to maintain 24/7 coverage for enterprise SLAs." },
          { title: "Dedicated CSM/TAM relationship management", text: "Named CSMs and TAMs manage large accounts with contractually defined engagement cadences and success plans tied to contract value." },
          { title: "Self-serve/community support at long-tail scale", text: "For SMB/commercial tiers, AI chatbots, community forums, and extensive knowledge bases handle the vast majority of volume with minimal human touch." },
          { title: "Formal QBR/EBR program", text: "Structured quarterly or executive business reviews with account plans, adoption scorecards, and renewal risk assessments for strategic accounts." },
          { title: "Escalation to executive sponsorship", text: "Major at-risk enterprise accounts get VP/C-level intervention and a structured save plan." },
        ],
        roles:
          "Fully specialized org: Chief Customer Officer or SVP of Customer Success, regional CS VPs, enterprise CSMs (low ratios, e.g. 1:5-15 for strategic accounts), Technical Account Managers, Professional Services/Implementation Consultants, a large tiered support organization, Support Operations/WFM teams, CS Ops/RevOps analytics teams, and dedicated Renewal Managers.",
        timeline:
          "Enterprise onboarding: weeks to several months for complex implementations. Support SLAs are contractually defined and tiered by severity: Sev-1/critical issues often guarantee 15-60 minute first response and 24/7 coverage. QBRs are quarterly for strategic/enterprise accounts. Renewal cycles are managed 6-12 months out for large multi-year contracts.",
        tools:
          "Gainsight (median contract ~$84K/year, running $50K-$200K/year for orgs with 20+ CSMs) deeply integrated with Salesforce; Salesforce Service Cloud, Zendesk Suite Enterprise, or homegrown systems at true hyperscale for case management; Intercom Fin, Salesforce Agentforce, and Microsoft Copilot for AI deflection at scale (~$1-2/resolution); NICE/Verint/Assembled for workforce management. Well-solved: case routing, SLA management, and multi-region tiered support are extremely mature. Real gap: even at hyperscale, cross-system data fragmentation persists — L1 sits in Zendesk/Intercom, L2 in Jira, L3 in ServiceNow, creating escalation blind spots. Sierra ($950M raised at $15.8B valuation, May 2026) explicitly targets a \"bespoke, deeply branded enterprise agent\" niche to unify this — but true cross-platform unification remains unsolved even for hyperscalers.",
        moneyFlow:
          "CS/support is a major, precisely modeled cost center measured against NRR: best-in-class public SaaS companies average 120-125% NRR, and companies above 120% NRR trade at roughly 9.3x EV/revenue vs. 3.1x below 100% NRR. Enterprise CSM/TAM comp is fully loaded at $175K-$225K+ OTE once accelerators are included. Workforce management teams actively optimize the L1/L2/L3 mix (targeting ~65/27/8 distribution) to control cost while hitting contractual SLAs.",
        failurePoints: [
          "Cross-tool escalation breakdown — named context gets lost as tickets move from Zendesk (L1) to Jira (L2) to ServiceNow (L3), causing customers to repeat themselves and blowing SLA clocks.",
          "CSM turnover in expansion-quota models — once variable comp exceeds ~30% of OTE, CSMs start behaving like a shadow sales team, damaging trust.",
          "Health-score fatigue at scale — with thousands of accounts scored automatically in Gainsight, CSM teams face alert overload and start ignoring risk flags.",
          "Enterprise account concentration risk — losing a single large strategic account has outsized NRR impact.",
        ],
        opportunity:
          "A genuinely unified \"escalation context layer\" that sits across Zendesk/Intercom (L1), Jira (L2), and ServiceNow/Azure DevOps (L3) — preserving full customer and technical context automatically as a case crosses tool boundaries — would solve a documented failure point that even sophisticated hyperscaler support orgs haven't solved with current point-tool AI agents, because those agents each optimize their own layer rather than the cross-system handoff itself.",
      },
    ],
  },
  {
    id: "fundraising",
    label: "Fundraising & Venture Capital",
    intro:
      "How the company is capitalized — from a founder convincing angels with a SAFE note, to a priced Series A-C round with a board and protective provisions, to an IPO or acquisition that finally turns paper riches into real cash.",
    compare: [
      { label: "Deal size / stage", a: "$100K-$3M, pre-seed/seed", b: "$5M-$100M+, Series A-C", c: "$100M-$2B+ growth equity, or IPO/M&A" },
      { label: "Instrument", a: "SAFE (YC standard) or convertible note", b: "Priced equity round with board seat", c: "Priced equity, or public shares via IPO/M&A" },
      { label: "Key tools", a: "Carta/Pulley, Stripe Atlas, DocSend, AngelList", b: "Carta, Affinity/Attio, Datasite, Ironclad, NVCA docs", c: "Datasite/Intralinks, Workiva, DealCloud, Shareworks" },
      { label: "Timeline", a: "4-8 weeks (pre-seed) to 2-4 months (seed)", b: "6-12 weeks (hot round) to 3-6 months", c: "6-16 weeks (growth round); 4-9 months (IPO)" },
      { label: "Top failure point", a: "Cap table mess from stacked SAFEs", b: "Down rounds; failed diligence", c: "Withdrawn IPOs; antitrust blocks; lock-up crashes" },
    ],
    tiers: [
      {
        key: "A",
        name: "Solo Founder / Seed-Stage Startup",
        tag: "Pre-seed to seed, 1-15 people",
        color: TIER_COLOR.A,
        tldr: "A founder with an idea convinces friends, angels, or a startup \"boot camp\" like Y Combinator to give them a few hundred thousand dollars for a future slice of the company, using a simple IOU-like paper called a SAFE instead of a full stock sale.",
        profile:
          "Pre-seed to seed stage, typically 1-15 people, raising $100K-$3M at post-money valuations from roughly $5M (pre-seed) up to $24M (median seed post-money, Q4 2025, skewed upward by AI mega-deals). Y Combinator invests $500,000 on a standardized deal: $125,000 for 7% equity plus an uncapped $375,000 SAFE with a Most Favored Nation clause. Typical 2025-2026 seed round: $2.5M-$3.2M median for U.S. SaaS companies. An estimated 38% of seed-stage startups now raise a second, smaller extension round before attempting Series A.",
        steps: [
          { title: "Incorporate and set up cap table", text: "Founders form a Delaware C-corp (via Stripe Atlas, Clerky, or a startup lawyer), issue founder stock with vesting, and open a Carta or Pulley cap table from day one." },
          { title: "Build the pitch deck and data room", text: "A 10-15 slide deck built in Google Slides/Figma, shared via DocSend so founders can track investor engagement." },
          { title: "Warm intro sourcing", text: "Founders work their network, YC/accelerator alumni lists, or cold-email angel investors and micro-VCs; warm intros dramatically outperform cold outreach." },
          { title: "Pitch meetings", text: "20-30 minute Zoom or in-person meetings with angels, micro-VC funds ($500K-$2M checks), or accelerator partners; often 30-100+ meetings run in parallel to get to a close." },
          { title: "Negotiate SAFE/note terms", text: "Almost all seed deals today use a SAFE or a convertible note, with a valuation cap and/or discount rather than a priced equity round." },
          { title: "Legal review and paperwork", text: "A startup lawyer or Clerky/Carta Launch templates finalize SAFE terms; minimal negotiation since SAFEs are largely standardized." },
          { title: "Close and wire funds", text: "Investors wire money as each check clears; rounds close incrementally (\"rolling close\")." },
        ],
        roles:
          "Founder(s)/CEO drives the raise and builds the deck. Angel investors write $5K-$100K checks. Micro-VC/seed fund partners ($20M-$150M AUM) write $250K-$1M checks. Accelerator partners mentor and make small standardized investments. Startup lawyer handles incorporation and SAFE docs. No board yet — pre-seed/seed companies rarely have a formal board.",
        timeline:
          "Pre-seed raise: 4-8 weeks once a founder starts actively pitching. Full seed round close: 2-4 months, often longer without warm intros. Time between seed and Series A has stretched to 18-24 months in 2025-2026 as investors demand more revenue traction.",
        tools:
          "Stripe Atlas, Clerky, Firstbase for incorporation; Carta (market leader) or Pulley for cap tables; YC's public SAFE templates for deal docs; DocSend for pitch tracking; AngelList, Affinity/Attio for investor discovery/CRM. Well-solved: incorporation, cap tables, SAFE templating, and pitch-deck tracking are all mature, cheap, standardized categories. Real gap: deal sourcing and diligence is still almost entirely relationship- and reputation-driven — there's no reliable way for a first-time founder without a network to get discovered, or for angels to quickly verify a founder's traction claims. Nobody has yet built a trusted \"credit score for startups\" that would let a stranger-investor quickly underwrite a founder without a warm intro.",
        moneyFlow:
          "A SAFE converts into preferred stock at the next priced round (or at a set cap/discount if no round happens). Valuation cap sets the maximum valuation at which the SAFE converts. Founders typically give up 10-25% of the company across pre-seed + seed combined. MFN clause guarantees an early, uncapped SAFE investor gets the same terms as later SAFE investors in the same round.",
        failurePoints: [
          "Cap table mess — stacking multiple uncapped/differently-capped SAFEs without tracking dilution, leading to founders discovering they've sold 40-50%+ before Series A.",
          "The seed-to-Series-A graveyard — companies fail to hit the revenue/traction bar investors now expect and can't raise a follow-on.",
          "Party rounds with no lead — many small checks and no investor taking real ownership, leaving no real advocate for the next round.",
          "SAFE stacking confusion at conversion — multiple caps and discounts converting simultaneously can create disputes over final ownership math.",
        ],
        opportunity:
          "Build a standardized, verifiable \"founder traction/credibility layer\" — a Plaid-like data-pull service that lets angels and micro-VCs verify a startup's real revenue, user growth, and team background in minutes without a warm intro, solving the trust bottleneck that currently locks non-network founders out of fast seed closes.",
      },
      {
        key: "B",
        name: "Venture-Backed Growth-Stage Company",
        tag: "Series A-C",
        color: TIER_COLOR.B,
        tldr: "A growing company with real customers convinces professional investment firms to buy a chunk of the company for tens of millions of dollars, adding investors to its board in exchange.",
        profile:
          "Companies with real product-market fit, $1M-$50M+ ARR, raising $5M-$100M+ from institutional VCs at post-money valuations from roughly $50M (Series A) to $500M+ (Series C). Real 2025-2026 examples: Perplexity (Series A $74M in 2023 → Series C at ~$500M in 2026), ElevenLabs ($500M Series D at an $11B valuation, Feb 2026), Chai Discovery ($400M Series C at $3.8B valuation), Decagon ($250M Series D, Jan 2026), Meshy AI (~$400M Series B at $1.5B valuation).",
        steps: [
          { title: "Prepare metrics package and data room", text: "CFO/founder assembles ARR, burn rate, cohort retention, and unit economics in a structured data room (Carta, DocSend, or Datasite for later rounds)." },
          { title: "Build target investor list", text: "Founders and existing investors map firms by thesis, check size, and stage fit, using Affinity or Attio to track outreach and relationship warmth." },
          { title: "First partner meetings", text: "Initial pitch to a VC associate or junior partner, who screens for fit before looping in a general partner." },
          { title: "Partner meeting / full pitch", text: "Founders present to the full partnership, fielding deep questions on market size, competition, and defensibility." },
          { title: "Due diligence", text: "The lead VC's associates and outside experts verify financials, customer references, tech architecture, and legal cleanliness; can take 2-6 weeks." },
          { title: "Term sheet negotiation", text: "The lead investor issues a term sheet covering valuation, liquidation preference, board seats, and protective provisions; founders (with a lawyer) negotiate before signing." },
          { title: "Syndicate the round", text: "The lead investor helps fill out the round with co-investors to hit the target raise size." },
          { title: "Legal documentation and close", text: "Lawyers draft the stock purchase agreement and investor rights agreement (2-4 weeks); funds wire, new preferred shares issue, and a formal board is seated." },
        ],
        roles:
          "Founder/CEO leads the raise. CFO or Head of Finance builds the financial model and manages the data room. General Partners make the final investment decision and typically take a board seat. Associates/Principals do sourcing, screening, and diligence legwork. VC firms at this tier: Sequoia, Andreessen Horowitz, Index Ventures, NEA, Accel, Lightspeed, Thrive Capital. Outside counsel represents the company; board members mix founders and lead investors from each round.",
        timeline:
          "Full process from first investor meeting to wired funds: typically 6-12 weeks for a hot round, 3-6 months for a harder-fought raise. Time between rounds: Series A to B is commonly 12-18 months; B to C similarly 12-24 months, contingent on roughly tripling (or at minimum doubling) ARR between rounds.",
        tools:
          "Carta (dominant) or Pulley for cap table and equity management; Affinity/Attio for VC CRM tracking relationship warmth via email/calendar graph analysis; DocSend/Datasite/Notion for data rooms; Causal/Runway/Mosaic for real-time metrics dashboards; Ironclad/DocuSign for closing docs; NVCA model legal documents as the industry-standard templates. Well-solved: cap table management, VC CRM, e-signature, and data rooms are mature categories. Real gap: due diligence remains slow and manual — VCs still spend weeks manually verifying revenue and customer claims via spreadsheets and PDFs. Emerging players: Hebbia and Rogo (AI-native diligence copilots), Aumni (JPMorgan-owned, extracts structured data from deal legal docs). No one has fully automated \"trustless\" real-time verification of a startup's metrics directly from source systems.",
        moneyFlow:
          "Priced equity rounds replace SAFEs — the company sells preferred stock at an explicit valuation, with a board seat and protective provisions attached. Standard liquidation preference is 1x non-participating. Dilution per round: typically 15-25% dilution per priced round, meaning founders/employees are often diluted to 50% or less combined ownership by Series C. VC fund economics run \"2 and 20\" — a 2% annual management fee plus 20% carried interest on profits above a return threshold; VCs typically target 15-25% ownership per round since a fund needs a handful of power-law outsized returns to make the whole fund profitable.",
        failurePoints: [
          "Down rounds — raising a new round at a lower valuation than the prior round, a real risk for companies that raised at 2021 peak valuations and grew into their price slowly.",
          "Bridge rounds — a sign of weakness when a company can't hit metrics for a real next round and raises a smaller stopgap from existing investors.",
          "Term sheet traps — aggressive terms like full-ratchet anti-dilution or multiple liquidation preferences that hamstring future fundraising or founder control.",
          "Failed diligence — discovery of IP ownership issues, customer concentration risk, or inflated metrics killing a deal late in the process.",
        ],
        opportunity:
          "Build an automated, standardized diligence-verification layer that pulls live financial and usage data directly from a startup's Stripe/QuickBooks/Salesforce/AWS accounts into a VC-facing report — cutting the 2-6 week manual diligence cycle down to days and making metrics fraud far harder, a real gap even sophisticated funds still solve with spreadsheets and associate hours today.",
      },
      {
        key: "C",
        name: "Late-Stage / Growth Equity / IPO / M&A",
        tag: "Series D+, $1B+ valuation",
        color: TIER_COLOR.C,
        tldr: "A company that has grown huge either sells shares to the public on the stock market for the first time, or gets bought outright by a bigger company, finally turning years of investors' paper riches into real cash.",
        profile:
          "Companies at massive scale, raising $100M-$2B+ growth equity rounds, going public via IPO, or being acquired. Real, current examples (2025-2026): CoreWeave (IPO'd March 2025 at a $23B valuation), Chime Financial (IPO'd Nasdaq June 2025, valuing the company at $18.4B), Klarna (listed on the NYSE September 2025), Figma (completed a notable 2025 IPO after its $20B Adobe acquisition was blocked by regulators). 2026 IPO pipeline includes SpaceX, Databricks, Anthropic, and OpenAI, though the largest may continue delaying public listings for enormous private mega-rounds.",
        steps: [
          { title: "Growth equity round prep", text: "CFO and finance team prepare audited financials and detailed cohort/unit economics, sometimes engaging an investment bank informally to gauge investor appetite." },
          { title: "Engage growth equity investors", text: "Firms like Tiger Global, Coatue, General Catalyst, and mutual fund crossover investors write large late-stage checks, often with less board involvement than traditional VC." },
          { title: "IPO decision and bank selection", text: "The company selects lead underwriters (Goldman Sachs, Morgan Stanley, J.P. Morgan) after competitive pitches based on sector expertise and distribution reach." },
          { title: "S-1 filing and SEC review", text: "Lawyers and bankers draft the S-1 registration statement disclosing financials and risk factors; the SEC reviews and comments over several rounds, which can take months." },
          { title: "Roadshow", text: "Management pitches institutional investors over 1-2 weeks of back-to-back meetings across major financial cities, gauging demand." },
          { title: "Pricing and allocation", text: "Underwriters and company set the IPO price the night before trading based on order book demand, then allocate shares to institutional investors." },
          { title: "Public listing", text: "Stock begins trading on NYSE or Nasdaq; opening trade is set by the exchange's designated market maker matching buy/sell orders." },
          { title: "Lock-up period", text: "Insiders are typically barred from selling shares for 90-180 days post-IPO to prevent an immediate supply shock." },
        ],
        roles:
          "CEO and CFO are the public face and financial architect (a new, IPO-experienced CFO is often hired ahead of filing). Investment bankers structure, price, and sell the deal. Growth equity/crossover investors: Tiger Global, Coatue, General Catalyst, Fidelity, T. Rowe Price. Securities lawyers handle S-1 drafting and SEC negotiation. Big Four auditors provide audited financials required for the S-1. On the M&A path: corporate development teams at the acquirer, plus antitrust regulators (FTC/DOJ) who can block deals.",
        timeline:
          "Growth equity/Series D+ round: 6-16 weeks. IPO process end-to-end: 4-9 months from bank selection to trading debut, plus additional months of IPO-readiness prep beforehand. Lock-up expiration: 90-180 days post-IPO. M&A process: 3-9 months from letter of intent to close, longer if antitrust review is triggered.",
        tools:
          "Datasite, Intralinks, Ansarada for virtual data rooms at scale; Carta Enterprise/Shareworks for cap table and equity plan administration including RSUs; Q4 Inc./Notified for investor relations; Workiva for SEC filings and SOX compliance. Well-solved: virtual data rooms, cap table administration at scale, IR websites, and SOX/compliance reporting are all mature, entrenched categories. Real gap: the S-1 drafting and SEC comment-and-response cycle is still a slow, manual, lawyer-heavy process with dozens of redline rounds over months — no real AI-native tooling has displaced this yet, one of the largest remaining manual document-negotiation bottlenecks in all of finance.",
        moneyFlow:
          "Growth equity structure is often preferred equity similar to VC rounds but sometimes includes structured terms like liquidation multiples or PIK dividends. IPO economics: underwriters buy shares from the company at a discount to the offer price (the underwriting spread, historically ~7% for smaller deals) and resell to institutional/retail investors. Fund economics at exit: this is where VC carry gets realized — a fund converts paper markups into realized returns distributed to LPs after the 20% carry cut.",
        failurePoints: [
          "Withdrawn/postponed IPOs — companies filing an S-1 then pulling it due to weak market conditions or poor roadshow demand.",
          "Down-round IPOs — public market valuation coming in well below the last private round's valuation, embarrassing existing investors.",
          "Antitrust blocks — regulators blocking large acquisitions, as with the Figma/Adobe $20B deal collapse, forcing Figma to pay Adobe a $1B breakup fee and pursue an IPO instead.",
          "Lock-up expiration crashes — stock price drops sharply when insider lock-ups expire and early investors/employees sell in bulk.",
        ],
        opportunity:
          "Build an AI-native S-1/registration-statement drafting and SEC-comment-response platform purpose-built for late-stage tech companies — the IPO legal/disclosure process is still a multi-month, law-firm-hours-billed bottleneck with no dominant modern software layer, unlike almost every other stage of the fundraising lifecycle.",
      },
    ],
  },
];
