import type { Agent } from "@/data/workflow";

export type ObstacleStageId =
  | "research"
  | "validation"
  | "planning"
  | "design"
  | "build"
  | "launch"
  | "growth";

export type ObstacleStageMeta = {
  id: ObstacleStageId;
  title: string;
  feeling: string;
};

export const obstacleStages: ObstacleStageMeta[] = [
  { id: "research", title: "Research", feeling: "\"I can't tell if this idea is even real.\"" },
  { id: "validation", title: "Validation", feeling: "\"People are polite, but nobody's paying.\"" },
  { id: "planning", title: "Planning", feeling: "\"I keep rewriting the plan instead of starting.\"" },
  { id: "design", title: "Design", feeling: "\"We can't agree on what this should even look like.\"" },
  { id: "build", title: "Build", feeling: "\"We're burning runway and it's still not done.\"" },
  { id: "launch", title: "Launch", feeling: "\"We launched and almost nobody noticed.\"" },
  { id: "growth", title: "Growth", feeling: "\"The early traction stalled and I don't know why.\"" },
];

export type StuckStory = {
  id: string;
  company: string;
  era: "classic" | "modern";
  stage: ObstacleStageId;
  roadblock: string;
  duration: string;
  resolution: string;
  outcome: string;
  source?: string;
};

// Real, sourced founder near-failure stories, gathered from public
// interviews and reporting. Sources noted per story; a few widely-repeated
// startup stories were deliberately left out where details couldn't be
// verified (see the page footer).
export const stuckStories: StuckStory[] = [
  {
    id: "whatsapp-acton",
    company: "Brian Acton (before WhatsApp)",
    era: "classic",
    stage: "research",
    roadblock: "A 12-year Apple/Yahoo engineer, rejected for jobs at both Twitter and Facebook right before starting anything of his own — a direct hit to whether he had anything valuable left to offer.",
    duration: "Two flat rejections from the two hottest companies in tech, months apart in 2009.",
    resolution: "Instead of chasing another job, he partnered with former Yahoo colleague Jan Koum and built something of their own.",
    outcome: "That partnership became WhatsApp, sold to Facebook in 2014 for roughly $19B.",
    source: "Forbes",
  },
  {
    id: "groupon-the-point",
    company: "Andrew Mason — The Point → Groupon",
    era: "classic",
    stage: "research",
    roadblock: "His first company, The Point, was built around vague \"collective action\" — getting people to commit to a cause together. It never found a concrete use case.",
    duration: "About 9 months in, investors were openly telling the team the idea lacked scalability.",
    resolution: "A side behavior emerged organically: small groups were using the platform to negotiate bulk discounts with local businesses. He rebuilt around just that.",
    outcome: "Relaunched as Groupon in 2008; hit a $1B valuation within 16 months.",
    source: "Mixergy interview",
  },
  {
    id: "twitter-odeo",
    company: "Odeo → Twitter",
    era: "classic",
    stage: "research",
    roadblock: "Odeo's podcasting platform was made obsolete almost overnight when Apple shipped iTunes with built-in podcast support, one week after Odeo's public launch.",
    duration: "The company's entire premise became irrelevant essentially overnight.",
    resolution: "Evan Williams ran internal hackathons telling staff to drop everything and build anything; a side project SMS status-update tool won internal buy-in.",
    outcome: "That side project became Twitter.",
    source: "Fast Company",
  },
  {
    id: "buffer-landing-page",
    company: "Joel Gascoigne — Buffer",
    era: "modern",
    stage: "validation",
    roadblock: "Having already burned 1.5 years building a previous idea without validating it first, he refused to write a line of Buffer's product code before proving demand.",
    duration: "Ran a 2-page validation test (pitch page → fake pricing page) for 7 weeks before writing product code.",
    resolution: "120 email signups over 7 weeks proved real demand; tweeting about it got his first paying customer within 4 days.",
    outcome: "Buffer grew into a well-known, profitable bootstrapped SaaS company.",
    source: "Buffer's own blog",
  },
  {
    id: "youtube-dating-site",
    company: "Chen, Hurley & Karim — before YouTube",
    era: "classic",
    stage: "validation",
    roadblock: "Their actual founding business model was a video-dating site — they paid women $20 on Craigslist to upload dating videos to seed it.",
    duration: "Zero participation. Nobody took the offer; the model simply did not work.",
    resolution: "Two unrelated personal frustrations (an unfindable Super Bowl clip, hard-to-share party videos) pointed toward general video sharing instead.",
    outcome: "Relaunched as general-purpose video sharing in 2005; Google acquired it in 2006 for $1.65B.",
    source: "The Capitalyst",
  },
  {
    id: "canva-rejections",
    company: "Melanie Perkins — Canva",
    era: "classic",
    stage: "validation",
    roadblock: "Investors doubted the business could work at all — young, Australian, non-technical, pitching a design tool into a market Adobe already dominated.",
    duration: "Over 100 rejections across roughly 3 years before raising a seed round.",
    resolution: "She used real revenue from an earlier product (a school-yearbook design tool) as concrete evidence, and kept refining the pitch itself after every rejection.",
    outcome: "Canva raised its first round in 2013 and is now valued at $40B+.",
    source: "Lenny's Newsletter",
  },
  {
    id: "segment-two-dead-products",
    company: "Peter Reinhardt — Segment",
    era: "modern",
    stage: "planning",
    roadblock: "Two products in a row failed to find real traction: classroom software nobody wanted, then a general analytics tool that couldn't differentiate in a crowded market.",
    duration: "Down to $100,000 in the bank after roughly two years across both failed products — real risk of shutting down.",
    resolution: "Instead of scoping a third full product, he wrote a minimal 50-line open-source script solving one narrow problem and posted it to Hacker News.",
    outcome: "That script became Segment, acquired by Twilio in 2020 for $3.2B.",
    source: "Forbes",
  },
  {
    id: "superhuman-pmf-engine",
    company: "Rahul Vohra — Superhuman",
    era: "modern",
    stage: "planning",
    roadblock: "Kept refining and rescoping the product for over two years without launching, driven by uncertainty about whether it had real product-market fit.",
    duration: "Two-plus years of development before a real launch.",
    resolution: "Built a systematic \"PMF engine\": survey users on how disappointed they'd be without the product, then rescope specifically toward the highest-expectation segment.",
    outcome: "PMF score rose from 22% to 58% after applying the framework; Superhuman became a well-known premium email product.",
    source: "First Round Review",
  },
  {
    id: "instagram-burbn",
    company: "Kevin Systrom & Mike Krieger — Burbn → Instagram",
    era: "classic",
    stage: "design",
    roadblock: "Burbn was a location check-in app that had ballooned into a confusing, feature-bloated product — check-ins, plans, points, and photo-sharing all crammed together.",
    duration: "After 3 months, Burbn had peaked at just 100 users.",
    resolution: "Instead of adding features, they stripped it down to the one thing people actually used — photo sharing — and built a filter the same day Systrom's wife said her photos didn't look good enough to share.",
    outcome: "Within a week of the pivot the app hit 100,000 users; Facebook acquired Instagram in 2012 for $1B.",
    source: "Startup Archive",
  },
  {
    id: "duolingo-design-pivot",
    company: "Luis von Ahn — Duolingo",
    era: "classic",
    stage: "design",
    roadblock: "Originally used learners to crowdsource translations of real content (like Wikipedia articles) — the model wasn't engaging enough to keep people coming back.",
    duration: "Made no revenue at all for 5 years while focused entirely on fixing the motivation/UX problem.",
    resolution: "A deliberate design pivot toward game-like mechanics (drawing inspiration from mobile games, not other edtech), with obsessive iteration on retention.",
    outcome: "Daily retention rose from 13% to roughly 50% over five years, before monetization was even switched on.",
    source: "Quartr",
  },
  {
    id: "figma-stealth-build",
    company: "Dylan Field & Evan Wallace — Figma",
    era: "classic",
    stage: "build",
    roadblock: "Building a real-time, multiplayer, browser-native vector graphics engine at 60fps in WebGL — something that hadn't really been done before, requiring deep low-level graphics work.",
    duration: "Nearly 3 years building in stealth before even a closed beta launched.",
    resolution: "Persistence plus incremental technical breakthroughs, starting from an early WebGL proof-of-concept that convinced Field to commit to the idea at all.",
    outcome: "Figma became the dominant design tool; Adobe later attempted a $20B acquisition, and Figma IPO'd.",
    source: "Figma's own blog; Sequoia",
  },
  {
    id: "notion-kyoto-rebuild",
    company: "Ivan Zhao & Simon Last — Notion",
    era: "classic",
    stage: "build",
    roadblock: "Three years in, the product was technically unstable, users weren't adopting it, and the company had burned through its seed funding.",
    duration: "Laid off the entire team, closed the SF office, and rebuilt on a $150,000 loan from a founder's mother — their fourth rebuild of the product.",
    resolution: "A total rewrite, done by just the two founders in a small apartment in Kyoto.",
    outcome: "Relaunched in 2016, became Product Hunt's #1 product that month, and turned profitable within weeks.",
    source: "Multiple founder retellings",
  },
  {
    id: "slack-glitch",
    company: "Stewart Butterfield — Tiny Speck / Glitch → Slack",
    era: "classic",
    stage: "build",
    roadblock: "Spent years building the online game Glitch on Flash — a platform already becoming obsolete as Apple blocked it from iPhone — with no real market pull despite heavy investment.",
    duration: "Raised over $15M for the game; had about $6M left when it was shut down.",
    resolution: "An engineer pointed out that the internal chat tool the team built for themselves, not the game, was the real product worth pursuing.",
    outcome: "Slack development began immediately after Glitch's shutdown, with the same team; Slack sold to Salesforce in 2021 for $27.7B.",
    source: "Building Slack",
  },
  {
    id: "airbnb-sxsw-flop",
    company: "Airbnb",
    era: "classic",
    stage: "launch",
    roadblock: "Deliberately launched at SXSW 2008 hoping to replicate Foursquare's breakout there, then again at the 2008 DNC — both got real attention but almost no bookings.",
    duration: "Only 2 bookings resulted from SXSW — and one of those was a founder booking himself. Chesky later called the stretch after this \"the Trough of Sorrows.\"",
    resolution: "The founders personally rented a camera and photographed NYC listings door-to-door, since bad listing photos were suppressing bookings.",
    outcome: "Doubled NYC bookings and revenue within a month; later formalized into Airbnb's own Photography Program. Airbnb is now valued over $100B.",
    source: "Multiple Airbnb origin retellings; Snappr",
  },
  {
    id: "segment-classroom-launch",
    company: "Peter Reinhardt — Segment's first product",
    era: "modern",
    stage: "launch",
    roadblock: "Segment's actual first product was classroom software that let students flag when they were lost during a lecture — it launched to real users, who simply didn't want it.",
    duration: "Launched, used briefly, then abandoned — no real adoption despite being a finished, working product.",
    resolution: "Rather than pushing harder on a launch that wasn't landing, the team moved on to a different problem entirely.",
    outcome: "That eventually led (after a second failed product) to Segment, acquired by Twilio for $3.2B.",
    source: "Forbes",
  },
  {
    id: "mailchimp-side-project",
    company: "Ben Chestnut & Dan Kurzius — Mailchimp",
    era: "modern",
    stage: "growth",
    roadblock: "Launched in 2001 as a paid-only side project next to their actual business (a web design agency) — it stayed small, under 10 employees, for years with no real growth engine.",
    duration: "Roughly 8 years of flat, marginal growth as a side hustle.",
    resolution: "In 2009 they made a deliberate strategic bet: introduce a free tier for small senders, deliberately giving away the core product to build a much bigger top of funnel.",
    outcome: "Explosive growth followed; sold to Intuit in 2021 for $12B, having never taken VC funding.",
    source: "TinySeed",
  },
  {
    id: "gumroad-near-shutdown",
    company: "Sahil Lavingia — Gumroad",
    era: "modern",
    stage: "growth",
    roadblock: "After early buzz and funding, growth stalled; the company had to raise a $2M bridge round on unfavorable terms just to survive.",
    duration: "Laid off 75% of staff in November 2015 — a cut severe enough that it publicly spooked remaining users, many of whom left assuming the company was shutting down.",
    resolution: "Deliberately abandoned the venture-scale/unicorn framing and rebuilt Gumroad as a small, sustainably profitable business instead of chasing hypergrowth again.",
    outcome: "Gumroad survived and became profitable running with a tiny team.",
    source: "TechCrunch; Lavingia's own essay \"Reflecting on My Failure to Build a Billion-Dollar Company\"",
  },
  {
    id: "convertkit-double-down",
    company: "Nathan Barry — ConvertKit",
    era: "modern",
    stage: "growth",
    roadblock: "About 1.5-2 years after launch, revenue was declining month over month and had plateaued around $1,500/month, losing customers.",
    duration: "An outside advisor told him bluntly to either shut it down or go all-in for real — no middle path left.",
    resolution: "Shut down his other business (his main income at the time) and put roughly $100,000 of personal savings into ConvertKit, refocusing specifically on bloggers and creators.",
    outcome: "MRR grew 23% one month and 27% the next shortly after; the company (now Kit) reached roughly $45M/year in revenue.",
    source: "Kadavy.net; MarketingSecrets",
  },
  {
    id: "pinterest-flatline",
    company: "Ben Silbermann — Pinterest",
    era: "classic",
    stage: "growth",
    roadblock: "After its March 2010 beta launch, growth was extremely slow — still under 10,000 users after 9 months.",
    duration: "Roughly 9 months of near-flatline growth post-launch.",
    resolution: "Instead of chasing viral tactics, he personally emailed early users, shared his own phone number for feedback, and iterated based on direct one-on-one conversations.",
    outcome: "Growth eventually compounded into one of the major social platforms; Pinterest IPO'd in 2019.",
    source: "Fast Company",
  },
];

export const obstacleAgents: Agent[] = [
  {
    id: "obstacle-reframe-coach",
    name: "Obstacle Reframe Coach",
    emoji: "🧗",
    color: "#FF9F40",
    tagline: "Turn 'this is broken' into 'this is normal'",
    prompt: `You are acting as an Obstacle Reframe Coach for founders. Your job is not to cheerlead — it's to help me tell the difference between "this is a normal part of this stage" and "this is a real signal I need to change course."

Here is what stage I'm at and what's actually happening:
"""
[PASTE YOUR CURRENT STAGE (Research / Validation / Planning / Design / Build / Launch / Growth) AND WHAT'S GOING WRONG HERE]
"""

Do the following:
1. Name the specific obstacle in one sentence, stripped of the emotional spiral around it.
2. Tell me honestly whether this is a commonly-documented pattern at this stage (most founders hit some version of this) or whether it sounds more like a genuine red flag specific to my situation — and explain your reasoning.
3. If it's a common pattern, describe what a "normal" version of getting through this usually looks like (roughly how long it takes, what typically has to change) so I can calibrate my expectations.
4. If it looks like a real red flag, say so plainly and tell me what evidence would confirm or rule it out.
5. Give me one concrete action to take in the next 48 hours — not "keep going," something specific.

Be honest, not encouraging for its own sake — false comfort wastes my time as much as false panic does.`,
  },
];
