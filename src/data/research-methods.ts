export type ResearchMethod = {
  id: string;
  name: string;
  emoji: string;
  color: string;
  description: string;
  distributionScore: number; // 1 (hard to turn into a channel) - 5 (easiest)
  location: "remote" | "physical";
  timeMode: "async" | "scheduled";
  prompt: string;
};

export const researchMethods: ResearchMethod[] = [
  {
    id: "complaint-mining",
    name: "Forum & Review Complaint Mining",
    emoji: "🔍",
    color: "#FFD400",
    description: "Read where people already vent about this problem",
    distributionScore: 5,
    location: "remote",
    timeMode: "async",
    prompt: `You are acting as a Research Analyst. Help me mine existing complaints about this problem from forums, reviews, and social posts — entirely async, no one needs to reply to me.

Here is the problem/idea I'm researching:
"""
[PASTE YOUR IDEA OR PROBLEM AREA HERE]
"""

Do the following:
1. List the 5-8 best places this specific audience already complains publicly (specific subreddits, app store review sections for competing tools, niche forums, Twitter/X search terms, G2/Capterra review sections).
2. Write exact search queries/terms to use on each platform to surface real complaints fast.
3. Tell me what patterns in the complaints would validate this idea (recurring specific frustration) vs. what would be a red flag (vague dissatisfaction, or people have already found a workaround they're happy with).
4. Give me a simple template to log what I find (complaint, source, how often it repeats) so I can spot patterns after an hour of reading.

This should be doable entirely by myself, reading, with zero outreach required.`,
  },
  {
    id: "reddit-post-test",
    name: "Community Post Test",
    emoji: "💬",
    color: "#FF6B6B",
    description: "Post the problem, not the pitch, in niche communities",
    distributionScore: 5,
    location: "remote",
    timeMode: "async",
    prompt: `You are acting as a Community Growth strategist. Help me write posts that test demand for this idea in niche online communities, without pitching a product (which usually gets removed or ignored).

Here is my idea and who it's for:
"""
[PASTE YOUR IDEA AND TARGET AUDIENCE HERE]
"""

Do the following:
1. Suggest 5-8 specific communities (subreddits, Slack/Discord groups, niche forums) where this exact audience hangs out.
2. Write 3 different post drafts that ask about the problem honestly (e.g. "how do you currently handle X" or "is Y actually a pain point for anyone else") rather than pitching a solution.
3. Tell me what response volume/tone would count as validation vs. silence being a red flag.
4. Note which of these communities have rules against self-promotion so I know which posts must stay pitch-free.

I want to post these once and check back later — no live interaction required to get signal.`,
  },
  {
    id: "async-video-interviews",
    name: "Async Video Interview Requests",
    emoji: "🎥",
    color: "#4D96FF",
    description: "Get real interviews without scheduling a single call",
    distributionScore: 4,
    location: "remote",
    timeMode: "async",
    prompt: `You are acting as a User Research specialist. Help me get real customer interviews without scheduling live calls — using async video tools where people record a response on their own time.

Here is my idea and target user:
"""
[PASTE YOUR IDEA AND TARGET USER HERE]
"""

Do the following:
1. Write an outreach message asking someone to record a 3-5 minute video answering a few questions, on their own schedule, no call needed.
2. Write 4-5 questions designed to work well as a solo recorded response (open-ended, easy to answer without back-and-forth).
3. Suggest where to find people willing to do this for free or a small incentive (gift card, early access) without needing a live conversation to recruit them.
4. Tell me what to listen for across responses to spot a real pattern vs. one person's opinion.

Everything here should be doable on my own schedule, evenings included, with zero live calls.`,
  },
  {
    id: "landing-page-ad-test",
    name: "Landing Page + Small Ad Test",
    emoji: "🎯",
    color: "#6BCB77",
    description: "Let a $50-100 ad budget tell you if anyone cares",
    distributionScore: 4,
    location: "remote",
    timeMode: "async",
    prompt: `You are acting as a Growth Marketer. Help me design a cheap landing page + ad test to validate demand without talking to anyone live.

Here is my idea and target audience:
"""
[PASTE YOUR IDEA AND TARGET AUDIENCE HERE]
"""

Do the following:
1. Write landing page copy (headline, subhead, 3 bullets, CTA) that pitches the outcome, with a simple "join the waitlist" or "get notified" email capture — not a full product.
2. Recommend which ad platform fits this specific audience best for a tiny budget test (search vs. social, and why).
3. Suggest ad copy/targeting for a $50-100 test budget.
4. Define what conversion rate on the landing page would count as a real signal vs. noise, given a small ad spend.
5. Tell me what to check daily (a couple minutes, no live interaction needed) vs. what can wait until the test period ends.

This should run largely on autopilot once set up.`,
  },
  {
    id: "build-in-public",
    name: "Build-in-Public Thread",
    emoji: "📢",
    color: "#B983FF",
    description: "Let an audience react to your thinking as you go",
    distributionScore: 4,
    location: "remote",
    timeMode: "async",
    prompt: `You are acting as a Content/Growth strategist. Help me plan a "build in public" thread/series to validate this idea while building an early audience — entirely async.

Here is my idea:
"""
[PASTE YOUR IDEA HERE]
"""

Do the following:
1. Write a first post that shares the problem I'm exploring and asks the audience honestly whether it resonates (not a pitch).
2. Propose a posting cadence (e.g. 2-3 posts a week) that fits someone with a day job, all async, no live streams required.
3. Suggest what platform fits this idea best (X/Twitter, LinkedIn, a niche forum) and why.
4. Give me 5 follow-up post ideas that keep inviting reactions/DMs without needing me to be online in real time.
5. Tell me what engagement signals (replies, DMs, saves) would actually indicate demand vs. vanity metrics like likes.

Everything postable on my own schedule.`,
  },
  {
    id: "cold-dm-outreach",
    name: "Cold DM / Email Outreach",
    emoji: "✉️",
    color: "#4ECDC4",
    description: "Reach out on your own time, reply on your own time",
    distributionScore: 3,
    location: "remote",
    timeMode: "async",
    prompt: `You are acting as an Outbound Sales specialist. Help me write cold DM/email outreach that I can send whenever I have time, and that doesn't require a live call to get a useful reply.

Here is my idea and who I want to reach:
"""
[PASTE YOUR IDEA AND TARGET PROSPECT HERE]
"""

Do the following:
1. Write a short, specific cold message (DM or email) that asks a real question about their current process rather than pitching, and can be answered in a text reply.
2. Suggest where to find 20-30 real prospects matching this profile (specific platforms/search techniques, not "LinkedIn" generically).
3. Write 2 follow-up message variants for no response after a few days.
4. Tell me what a good reply rate looks like for this kind of outreach, and what response content would count as real signal.

Optimize this so a written reply is enough — I don't need to convert every response into a live call.`,
  },
  {
    id: "content-seo-test",
    name: "SEO / Content Answer Test",
    emoji: "✍️",
    color: "#FF9F40",
    description: "Answer the exact question your buyer is already searching",
    distributionScore: 3,
    location: "remote",
    timeMode: "async",
    prompt: `You are acting as an SEO/Content strategist. Help me test demand by publishing content that answers what my target buyer is already searching for.

Here is my idea and target audience:
"""
[PASTE YOUR IDEA AND TARGET AUDIENCE HERE]
"""

Do the following:
1. List 8-10 specific search queries this audience likely types when they have this problem.
2. Pick the 2-3 highest-intent queries (closest to "ready to pay for a solution") and outline an article/page for each.
3. Suggest a lightweight way to capture interest from readers (email signup, a simple tool, a waitlist) without needing to talk to them live.
4. Tell me realistically how long this will take to show signal (this is a slower method) and what early proxy metrics (time on page, signups) suggest it's working before rankings kick in.

Written and published on my own schedule, no live interaction needed.`,
  },
  {
    id: "scheduled-user-interviews",
    name: "Scheduled Video Interviews (Evenings)",
    emoji: "🗓️",
    color: "#FFD400",
    description: "Real conversations, booked outside work hours",
    distributionScore: 3,
    location: "remote",
    timeMode: "scheduled",
    prompt: `You are acting as a User Research specialist. Help me get real customer interviews via video calls, scheduled entirely outside a 9-5 so this fits around a day job.

Here is my idea and target user:
"""
[PASTE YOUR IDEA AND TARGET USER HERE]
"""

Do the following:
1. Write an outreach message that offers evening/weekend call slots specifically, so it's clear this isn't a business-hours ask.
2. Suggest a booking tool setup so people can self-schedule into your available evening/weekend slots with zero back-and-forth.
3. Write 8-10 open-ended interview questions focused on current behavior and workarounds, not pitching your idea.
4. Tell me what to listen for that validates the idea vs. politeness bias (people being nice instead of honest).
5. Suggest how many interviews (rough number) would give me real signal before I stop and reassess.

Keep everything schedulable around evenings/weekends, no daytime availability required.`,
  },
  {
    id: "waitlist-referral-loop",
    name: "Waitlist + Referral Loop Test",
    emoji: "🔁",
    color: "#FF6B6B",
    description: "See if early signups care enough to bring friends",
    distributionScore: 4,
    location: "remote",
    timeMode: "async",
    prompt: `You are acting as a Growth strategist. Help me test not just interest but willingness to share — a stronger signal than a signup alone.

Here is my idea and where I plan to share it:
"""
[PASTE YOUR IDEA AND WHERE YOU PLAN TO SHARE IT HERE]
"""

Do the following:
1. Design a simple referral mechanic for a waitlist (e.g. "move up the list by referring 2 people," or an incentive for sharing) that doesn't require any code beyond a form/email tool.
2. Write the waitlist page copy and the referral-ask copy shown after signup.
3. Suggest where to seed the first 20-30 signups so the loop has something to work with.
4. Define what referral rate would signal real organic pull vs. a waitlist that only grows when I personally push it.

This should run without me responding to anyone live.`,
  },
  {
    id: "competitor-teardown",
    name: "Competitor & Alternative Teardown",
    emoji: "🧩",
    color: "#6BCB77",
    description: "Learn from what's already being bought (or abandoned)",
    distributionScore: 4,
    location: "remote",
    timeMode: "async",
    prompt: `You are acting as a Competitive Research analyst. Help me learn what's already working (or failing) in this space, entirely from public information.

Here is my idea and the space it's in:
"""
[PASTE YOUR IDEA AND THE SPACE/CATEGORY HERE]
"""

Do the following:
1. Identify 3-5 direct or adjacent competitors/alternatives (including "do nothing" or manual workarounds).
2. For each, note their pricing model, and infer roughly how they acquire customers based on public signals (ads you can find, content strategy, community presence, SEO footprint).
3. Read their public reviews (or forum mentions) and summarize the most common praise and the most common complaint for each.
4. Tell me what gap or underserved segment this reveals that my idea could target.

This is a desk-research exercise — no outreach or conversations required.`,
  },
  {
    id: "local-meetups",
    name: "Local Meetups & Events",
    emoji: "🤝",
    color: "#4D96FF",
    description: "Face-to-face signal, if you're near the right room",
    distributionScore: 2,
    location: "physical",
    timeMode: "scheduled",
    prompt: `You are acting as a Field Research strategist. Help me plan how to validate this idea by attending local meetups and events where my target audience actually shows up in person.

Here is my idea and target audience:
"""
[PASTE YOUR IDEA AND TARGET AUDIENCE HERE]
"""

Do the following:
1. Suggest the types of local events/meetups where this specific audience gathers (industry meetups, conferences, trade associations).
2. Write a short, low-pressure way to bring up the problem in conversation without pitching (people dislike being sold to at social events).
3. Suggest what to note down right after each conversation so insights aren't lost.
4. Tell me how many conversations would be worth having before drawing conclusions, given this only works when you can physically attend.

Be upfront that this method depends on live attendance and won't work if I can't be there in person.`,
  },
  {
    id: "door-to-door",
    name: "Direct Local Canvassing",
    emoji: "🚪",
    color: "#B983FF",
    description: "Walk in and ask, if your idea serves local businesses",
    distributionScore: 1,
    location: "physical",
    timeMode: "scheduled",
    prompt: `You are acting as a Field Sales/Research strategist. Help me plan direct in-person canvassing to validate this idea with local businesses or residents.

Here is my idea and who I'd be approaching locally:
"""
[PASTE YOUR IDEA AND WHO YOU'D APPROACH LOCALLY HERE]
"""

Do the following:
1. Identify the specific type of local business/location most likely to have this problem, and roughly how many I'd need to visit for a meaningful sample.
2. Write a short in-person opener that asks about the problem rather than pitching immediately.
3. Suggest the best time of day/week to visit given this type of business (avoid their busiest hours).
4. Tell me how to log responses quickly between visits so I don't lose signal.

Be honest that this is high-effort per data point and requires being physically present during their operating hours — flag if a remote method could get similar signal faster.`,
  },
  {
    id: "local-partner-intro",
    name: "Local Partner / Influencer Intro",
    emoji: "🌟",
    color: "#4ECDC4",
    description: "Borrow trust from someone the community already knows",
    distributionScore: 2,
    location: "physical",
    timeMode: "scheduled",
    prompt: `You are acting as a Partnerships strategist. Help me find a local partner or community figure who can introduce me to my target audience in person.

Here is my idea and target audience:
"""
[PASTE YOUR IDEA AND TARGET AUDIENCE HERE]
"""

Do the following:
1. Identify the type of local person/organization that already has trust with this audience (a community leader, a local business owner, an association).
2. Write an outreach message asking for a brief in-person or phone introduction, framed around what's in it for them, not just what I need.
3. Suggest a small way to reciprocate the favor (e.g. sharing results back with them, a referral fee, free access).
4. Tell me how to make the most of a single introduction meeting since local relationship-building is slow and typically requires being in the same area.

Be upfront that this depends on physical/local presence and relationship-building time.`,
  },
  {
    id: "pop-up-demo",
    name: "Pop-Up / Live Demo Booth",
    emoji: "🎪",
    color: "#FF9F40",
    description: "Put the idea in front of foot traffic and watch reactions",
    distributionScore: 2,
    location: "physical",
    timeMode: "scheduled",
    prompt: `You are acting as an Experiential Marketing strategist. Help me plan a small pop-up or demo booth to test reactions to this idea in person.

Here is my idea and where foot traffic for this audience exists:
"""
[PASTE YOUR IDEA AND WHERE YOUR AUDIENCE PHYSICALLY GATHERS HERE]
"""

Do the following:
1. Suggest a low-cost venue/event where relevant foot traffic exists (a market, a relevant local event, a partner's storefront).
2. Design a simple, fast demo or pitch that works with strangers who have 30-60 seconds of attention.
3. Suggest a way to capture interest on the spot (a simple signup sheet or QR code to a waitlist) so the in-person moment converts into something trackable afterward.
4. Tell me what reaction patterns would count as real validation vs. polite interest.

Be clear this requires physical setup, a specific date/location, and being present live — flag if a landing page test could get faster signal for less effort.`,
  },
];
