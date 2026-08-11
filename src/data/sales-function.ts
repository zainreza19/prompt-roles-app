import type { Agent } from "@/data/workflow";

export type ProcessStep = { step: string; title: string; detail: string };

export const salesProcessSteps: ProcessStep[] = [
  { step: "1", title: "Prospecting", detail: "Build a list of people who plausibly have the exact problem you solve — narrow and specific beats broad and vague. A tight list of 30 real fits outperforms 500 loosely-related contacts." },
  { step: "2", title: "Qualifying", detail: "Before investing real time, check: do they have the problem, the budget, the authority to buy, and a real timeline (BANT) — or map it to MEDDIC if the deal is complex enough to need multiple stakeholders." },
  { step: "3", title: "Discovery Call", detail: "A 30-minute call whose only job is to understand their pain and how they buy — not to pitch. If you're talking more than they are, you're doing it wrong." },
  { step: "4", title: "Demo", detail: "Only after discovery. Show 3-4 workflows mapped directly to what they told you hurts, in their language — not a feature tour of the whole product." },
  { step: "5", title: "Proposal / Pricing", detail: "Be transparent and confident about price — burying it or hiding it behind a form signals you're not confident it's worth it." },
  { step: "6", title: "Objection Handling", detail: "Acknowledge the real concern behind the words, then address it with a specific proof point — not a scripted rebuttal that ignores what they actually said." },
  { step: "7", title: "Negotiation & Close", detail: "Propose a clear next step with a date attached. \"Let me know if you have questions\" is not a close — a specific action with a specific deadline is." },
  { step: "8", title: "Onboarding & Expansion", detail: "The sale isn't done until they get real value — a customer who churns in month one was never really sold. Early-stage founders should treat onboarding as part of the sales motion, not a handoff." },
];

export type OutreachPrinciple = { title: string; detail: string };

export const outreachPrinciples: OutreachPrinciple[] = [
  { title: "Write like a peer, not a vendor", detail: "It should read like a smart colleague noticed something relevant — not someone trying to sell you something. \"You/your\" should dominate over \"I/we.\"" },
  { title: "Every sentence earns its place", detail: "Cold email is ruthlessly short. If a sentence doesn't move the reader toward replying, cut it. It should feel like it could have been shorter, never longer." },
  { title: "Personalization must connect to the problem", detail: "If removing the personalized opening still makes the email make sense, the personalization isn't doing real work — it should lead naturally into why you're reaching out." },
  { title: "One ask, low friction", detail: "\"Worth exploring?\" beats \"can we get 30 minutes on your calendar?\" as a first touch. One clear, low-friction call to action per email." },
  { title: "Subject lines should look boring and internal", detail: "2-4 words, lowercase, no punctuation tricks — it should look like it came from a colleague, not a campaign. Its only job is getting the email opened." },
];

export type StatBlock = { id: string; stat: string; label: string };

export const outreachBenchmarks: StatBlock[] = [
  { id: "avg-reply", stat: "3-5%", label: "realistic average reply rate for a competent, well-targeted B2B cold email campaign in 2026" },
  { id: "top-reply", stat: "8-12%", label: "reply rate for top-performing senders — small, tightly-targeted lists, not volume" },
  { id: "list-size", stat: "5.8% vs 2.1%", label: "reply rate for lists under 50 recipients vs. large blasts — smaller and sharper wins" },
  { id: "positive-rate", stat: "0.5-2%", label: "typical positive (not just any) reply rate — exceptional campaigns hit 5%+" },
];

export const followUpCadence: string[] = [
  "3-5 total emails, with increasing gaps between them (e.g. day 0, day 3, day 8, day 16)",
  "Each follow-up adds something new — a different angle, fresh proof, a useful resource — never just \"just checking in\"",
  "Each email should stand alone; assume they never read the previous ones",
  "The last email is a real breakup — say you'll stop reaching out, and mean it",
];

export type HardTruth = { title: string; detail: string };

export const hardTruths: HardTruth[] = [
  { title: "You are the first salesperson, whether you feel ready or not", detail: "No hire fixes a sales motion that's never been proven — you have to do it yourself first, badly, before anyone else can do it well." },
  { title: "Rejection is the default outcome, not the exception", detail: "At a 3-5% reply rate, the normal result of sending 20 emails is 19 people not responding. That's not failure — that's the baseline you're building against." },
  { title: "\"Sales fixes everything\" is uncomfortably true", detail: "Guy Kawasaki's line, echoed by Sam Altman's early mentors — most startup problems (morale, fundraising leverage, product doubt) get dramatically easier the moment real revenue exists." },
  { title: "Your first pitch will be bad — the fix is volume, not perfection", detail: "You cannot think your way to a good pitch in isolation. You find it by sending an imperfect version to real people and watching exactly where they stop listening." },
  { title: "Distribution is often the harder problem, not the product", detail: "A mediocre product with a real distribution channel beats a great product with none — most of this site exists because that asymmetry is so often ignored." },
  { title: "Avoiding sales is usually about identity, not strategy", detail: "Founders tell themselves outreach \"isn't a good use of time\" because rejection feels personal — but the discomfort is the actual reason, not a reasoned tradeoff." },
];

export type MoonlightBlock = { when: string; what: string };

export const moonlightingPlan: MoonlightBlock[] = [
  { when: "Sunday evening (30-45 min)", what: "Build next week's prospect list. Batch this once — don't try to \"find people to email\" fresh every day, it never happens consistently that way." },
  { when: "Weekday mornings, before work (20-30 min)", what: "Send that day's batch of first-touch emails. Morning sends before the workday starts avoid competing with actual job responsibilities." },
  { when: "Lunch break (15-20 min)", what: "Check replies and send same-day responses — reply speed matters more than reply length; a fast one-line reply beats a polished one three days late." },
  { when: "Evenings, 2-3x/week (30-60 min)", what: "Take discovery calls scheduled specifically outside business hours — offer evening/early-morning slots explicitly in your outreach so it's clear this isn't a 9-5 ask." },
  { when: "Weekly, fixed time", what: "Track a simple weekly quota (emails sent, replies, calls booked) — a quota you hit consistently beats a burst of effort you can't sustain for a month." },
];

export type QualFramework = { name: string; expandsTo: string; useWhen: string };

export const qualificationFrameworks: QualFramework[] = [
  { name: "BANT", expandsTo: "Budget, Authority, Need, Timeline", useWhen: "Simpler deals, single decision-maker, shorter sales cycles — most early-stage founder-led sales." },
  { name: "MEDDIC", expandsTo: "Metrics, Economic buyer, Decision criteria, Decision process, Identify pain, Champion", useWhen: "Complex B2B deals with multiple stakeholders and a real procurement process — usually not needed until you're selling into larger companies." },
];

export type ObjectionCategory = { category: string; examples: string };

export const objectionCategories: ObjectionCategory[] = [
  { category: "Price", examples: "\"Too expensive,\" \"no budget this quarter,\" \"a competitor is cheaper\"" },
  { category: "Timing", examples: "\"Not the right time,\" \"maybe next quarter,\" \"too busy to implement right now\"" },
  { category: "Competition", examples: "\"We already use X,\" \"what makes you different?\"" },
  { category: "Authority", examples: "\"I need to check with my boss,\" \"the committee decides\"" },
  { category: "Status quo", examples: "\"What we have works fine,\" \"if it's not broken, don't fix it\"" },
  { category: "Technical", examples: "\"Does it integrate with X?\", \"security concerns,\" \"can it scale?\"" },
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
    company: "Stripe — the \"Collison Installation\"",
    tactic: "Installed the product by hand, on the spot",
    detail: "During Y Combinator, instead of sending a beta signup link, Patrick and John Collison would ask for a founder's laptop and install Stripe on it themselves, right there in the conversation.",
    lesson: "Removing every unit of friction from a first touch — even friction as small as \"click this link later\" — converts far more than a technically superior onboarding flow nobody ever starts.",
    source: "Multiple retellings via Paul Graham's \"Do Things That Don't Scale\"; Forbes",
  },
  {
    company: "DoorDash — founders delivered the food themselves",
    tactic: "Manually fulfilled every early order in person",
    detail: "The founders posted PDF menus from 8 Palo Alto restaurants online with a personal cell number at the bottom. When the phone rang, they drove to the restaurant, picked up the food, and delivered it themselves.",
    lesson: "Before building logistics software, they built the actual experience by hand — which is how they learned what the software even needed to do.",
    source: "VatorNews; Precoil case study",
  },
  {
    company: "Airbnb — door-to-door host recruiting",
    tactic: "Personally knocked on hosts' doors and improved listings",
    detail: "Founders went door-to-door in New York recruiting hosts and helping them improve their listings, and later personally photographed listings after realizing bad photos were suppressing bookings.",
    lesson: "Sales and product quality were the same activity here — improving a host's photos was simultaneously a sales touch and a product fix.",
    source: "Paul Graham's essay; multiple Airbnb origin retellings",
  },
  {
    company: "PayPal — the referral bonus",
    tactic: "Paid users directly to refer other users",
    detail: "PayPal paid $10-$20 per signup and per referral, driving 7-10% daily growth and helping reach 100 million users — an approach later copied directly by Dropbox.",
    lesson: "A blunt cash incentive, executed early and aggressively, can out-perform a sales team when the unit economics allow it — though PayPal itself eventually wound it down as unsustainable, spending $60-70M on it total.",
    source: "Medium (Venkatesh Rao case study); Net Interest",
  },
  {
    company: "Salesforce — the staged \"No Software\" protest",
    tactic: "A fake protest outside a competitor's own conference",
    detail: "In 2000, Marc Benioff hired actors to picket outside Siebel Systems' user conference chanting \"software is obsolete,\" complete with a fake news crew — Salesforce signed 1,000 new organizations within two weeks of the resulting press.",
    lesson: "Distribution doesn't have to mean outbound emails — a well-aimed, attention-grabbing stunt aimed squarely at a competitor's own audience can be a distribution channel in itself.",
    source: "The Marketing Millennials; Entrepreneurship Handbook",
  },
];

export const salesAgents: Agent[] = [
  {
    id: "cold-outreach-writer",
    name: "Cold Outreach Writer",
    emoji: "✉️",
    color: "#4D96FF",
    tagline: "Write an email a real person would answer",
    prompt: `You are acting as a Cold Email specialist. Write an outbound email that sounds like a sharp, thoughtful human noticed something relevant — not a sales template with fields swapped in.

Here's who I'm writing to and why:
"""
[WHO ARE YOU WRITING TO — role, company, why them specifically?
WHAT DO YOU WANT — reply, meeting, intro?
WHAT'S THE VALUE — the specific problem you solve for people like them?
WHAT'S YOUR PROOF — a result, case study, or credibility signal?
ANY RESEARCH SIGNAL — funding, hiring, a recent post, a tech-stack change?]
"""

Do the following:
1. Write the email using "you/your" more than "I/we," leading with their world, not mine.
2. Make sure the personalized opening connects directly to why I'm reaching out — if you removed it, the email should stop making sense.
3. End with exactly one low-friction ask (e.g. "worth exploring?") — not a 30-minute meeting request.
4. Write a boring, internal-looking subject line (2-4 words, lowercase, no punctuation tricks).
5. Read it back and confirm: would a real person actually reply to this?

Avoid: "I hope this email finds you well," jargon like "leverage" or "synergy," feature dumps, and anything that reads like it was generated from a template.`,
  },
  {
    id: "followup-sequence-builder",
    name: "Follow-Up Sequence Builder",
    emoji: "🔁",
    color: "#6BCB77",
    tagline: "Turn one email into a real cadence",
    prompt: `You are acting as an outbound sales strategist. Build a 3-5 email follow-up sequence for a prospect who hasn't replied to my first email.

Here is my first email and what I know about the prospect:
"""
[PASTE YOUR FIRST EMAIL AND ANY CONTEXT ON THE PROSPECT HERE]
"""

Do the following:
1. Write 2-4 follow-up emails with increasing gaps between sends (e.g. day 3, day 8, day 16).
2. Give each follow-up a genuinely different angle or fresh proof point — never "just checking in."
3. Make each email able to stand alone, in case they never read the earlier ones.
4. Write a real breakup email as the final touch — one that says I'll stop reaching out, and means it.
5. Tell me what reply rate would be realistic for a sequence like this, and what it would mean if I'm getting far below that.

Keep every email short enough that it "could have been shorter," never longer.`,
  },
  {
    id: "discovery-call-planner",
    name: "Discovery Call Planner",
    emoji: "🎧",
    color: "#FF6B6B",
    tagline: "Understand the problem before you pitch",
    prompt: `You are acting as a Sales strategist. Help me plan a discovery call whose only job is understanding the prospect's problem — not pitching.

Here is my product and who I'm getting on a call with:
"""
[PASTE YOUR PRODUCT AND WHO YOU'RE MEETING WITH HERE]
"""

Do the following:
1. Write 8-10 discovery questions organized by topic (current process, pain points, decision-making process, budget/timeline) — not a rigid script, a toolkit.
2. Tell me how to open the call in under 2 minutes (context, agenda, confirming their goals) without pitching yet.
3. Identify the BANT signals (Budget, Authority, Need, Timeline) I should be listening for during the call.
4. Give me 3 follow-up questions to use if an answer is vague, to get to the real problem underneath.
5. Tell me what "good" looks like at the end of this call — what I should know that I didn't before it started.

If I'm talking more than they are on this call, tell me that's a sign I'm doing it wrong.`,
  },
  {
    id: "objection-handling-coach",
    name: "Objection Handling Coach",
    emoji: "🛡️",
    color: "#B983FF",
    tagline: "Address the real concern, not just the words",
    prompt: `You are acting as an Objection Handling coach. Help me prepare responses to the objections I'm most likely to hear, organized by category: Price, Timing, Competition, Authority, Status quo, Technical.

Here is my product and the objections I've actually heard so far (or expect to hear):
"""
[PASTE YOUR PRODUCT AND ANY OBJECTIONS YOU'VE HEARD OR EXPECT HERE]
"""

For each objection, give me:
1. The objection exactly as a prospect would say it.
2. The real concern likely behind those words (which is often different from the literal statement).
3. A response that acknowledges the concern first, then redirects with a specific proof point — not a scripted rebuttal.
4. A follow-up question that keeps the conversation moving instead of ending on the objection.

Keep every response short enough to say naturally on a live call, not something that reads like a canned script.`,
  },
  {
    id: "founder-sales-cadence",
    name: "Founder Sales Cadence Planner",
    emoji: "🗓️",
    color: "#FFD400",
    tagline: "Run real sales while keeping your day job",
    prompt: `You are acting as a sales operations coach for a founder who has a full-time job and can only work on sales part-time, around evenings and weekends.

Here is my product, target customer, and available time:
"""
[PASTE YOUR PRODUCT, TARGET CUSTOMER, AND ROUGHLY HOW MUCH TIME/WHEN YOU HAVE AVAILABLE HERE]
"""

Do the following:
1. Design a weekly cadence that fits around a day job — when to build prospect lists, when to send outreach, when to check replies, and when to take calls (favor evening/early-morning slots explicitly).
2. Define a realistic weekly quota (emails sent, calls booked) that I could sustain for months, not just one intense week.
3. Identify which parts of this process must be done live by me vs. which can be batched or done async.
4. Tell me the earliest signal that would justify going all-in (quitting the day job) vs. staying part-time longer.

Be realistic about the hours a person with a full-time job actually has — don't design a plan that assumes I'm secretly full-time on this already.`,
  },
  {
    id: "pilot-pitch-crafter",
    name: "Pilot Customer Pitch Crafter",
    emoji: "🚀",
    color: "#4ECDC4",
    tagline: "Ask someone to be your first customer",
    prompt: `You are acting as a Sales strategist specializing in landing a first pilot customer when I have no case studies, no logos, and no proof yet.

Here is my product and who I'm hoping will be an early pilot customer:
"""
[PASTE YOUR PRODUCT AND WHO YOU'RE TARGETING AS A PILOT HERE]
"""

Do the following:
1. Write the exact pitch for asking someone to be a pilot/early customer — one that's honest about being early-stage rather than pretending otherwise.
2. Propose what to offer in exchange for being a first customer (discounted or free access, direct input on the roadmap, a case study credit) that doesn't undervalue what I'm building.
3. Tell me what commitment to ask for in return (a specific usage commitment, a testimonial if it works, an intro to others if they're happy) so the relationship isn't one-sided.
4. Identify the 2-3 signals during the pilot that would tell me it's working well enough to ask for a paid contract.

Be direct about the fact that "being early" is something to be upfront about, not hide.`,
  },
];
