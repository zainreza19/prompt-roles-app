import type { Agent } from "@/data/workflow";

export type WorkflowPrompt = Agent & { category: string };

export type ProductivityRole = {
  id: string;
  name: string;
  emoji: string;
  color: string;
  tagline: string;
  categories: string[];
  prompts: WorkflowPrompt[];
};

export const productManagerRole: ProductivityRole = {
  id: "product-manager",
  name: "Product Manager",
  emoji: "🎯",
  color: "#FFD400",
  tagline: "From a messy call to a clean backlog — in one pass per prompt",
  categories: ["Transcripts", "Designs", "Tickets", "Reporting"],
  prompts: [
    {
      id: "pm-transcript-to-actions",
      category: "Transcripts",
      name: "Transcript → Action Items",
      emoji: "🎙️",
      color: "#FFD400",
      tagline: "Turn a meeting recording into owners, dates, and decisions",
      prompt: `You are acting as a sharp Chief of Staff who just sat in on a call and now has to make sure nothing said in it gets lost.

Here is the raw transcript (or my rough notes) from the meeting:
"""
[PASTE TRANSCRIPT OR NOTES HERE]
"""

Do the following:
1. Summarize the meeting in 3 sentences max — what it was about and what it concluded.
2. Extract every DECISION that was made (not discussed — actually decided). Quote or paraphrase the exact commitment.
3. Extract every ACTION ITEM as a table: Owner | Action | Due date (infer a reasonable one if none was stated, and flag it as inferred) | Priority (High/Med/Low based on how it was discussed).
4. Extract OPEN QUESTIONS — things that were raised but explicitly left unresolved, so they don't quietly disappear.
5. Flag any moment where two people seemed to agree to different things (scope drift, mismatched expectations) — this is the highest-value thing a transcript review can catch.
6. Write a 5-sentence recap I can paste directly into Slack for people who missed the call.

Be ruthless about the difference between "someone mentioned this" and "the group agreed to this." Don't invent action items that weren't actually implied.`,
    },
    {
      id: "pm-discovery-to-prd",
      category: "Transcripts",
      name: "Discovery Notes → PRD",
      emoji: "📝",
      color: "#FFD400",
      tagline: "Turn scattered user/customer research into a real requirements doc",
      prompt: `You are acting as a senior Product Manager. I've just come out of discovery (user interviews, sales call notes, support tickets, or a research readout) and need it turned into a real PRD before anything gets built.

Here are my raw discovery notes / call transcripts / research findings:
"""
[PASTE YOUR NOTES, TRANSCRIPTS, OR RESEARCH HERE]
"""

Do the following:
1. Synthesize the top 3 problems that came up repeatedly — quote the specific evidence for each (a paraphrased user quote, a support ticket theme, a stat), not a vague generalization.
2. Pick the ONE problem worth solving first, and justify why over the other two (frequency, severity, strategic fit — say which).
3. Write the PRD: Problem statement, target user, success metric (the one number that tells us this worked), v1 scope, explicit non-goals, and key risks/unknowns.
4. Write 3-5 user stories in "As a [user], I want [action], so that [benefit]" format, each with acceptance criteria.
5. List the 3 riskiest assumptions this PRD rests on, and the cheapest way to validate each before full build.

Output in a doc-ready structure with headings — I need to paste this straight into Notion/Confluence.`,
    },
    {
      id: "pm-req-to-design-brief",
      category: "Designs",
      name: "Requirement → Design Brief",
      emoji: "🎨",
      color: "#FF6B6B",
      tagline: "Hand design something they can actually start from",
      prompt: `You are acting as a Product Manager writing a design brief that a designer can pick up and start working from immediately — no follow-up meeting needed.

Here is the requirement / problem I need designed:
"""
[PASTE THE REQUIREMENT HERE]
"""

Do the following:
1. State the problem and the user in one sentence, and the ONE success metric this design needs to move.
2. Describe the job the user is trying to get done, in their language, not feature language.
3. List constraints the designer must respect: platform(s), existing design system/components to reuse, technical limits, timeline.
4. Call out the single most important screen/moment and why it deserves the most design attention.
5. List states that must be designed, not left implicit: empty, loading, error, success, permission-denied, edge cases specific to this feature.
6. Note what's explicitly OUT of scope for this round, so design doesn't over-invest in polish we don't need yet.
7. Suggest 2-3 open questions the designer should push back on if they disagree with the framing.

Format as a one-page brief — short enough that a designer reads it in two minutes and can start sketching.`,
    },
    {
      id: "pm-design-review-questions",
      category: "Designs",
      name: "Design Review Prep",
      emoji: "🔎",
      color: "#FF6B6B",
      tagline: "Ask the right questions in a design review, not just 'looks good'",
      prompt: `You are acting as a Product Manager preparing to review a design before it goes to engineering. I want to catch real problems now, not after it's built.

Here is a description of the design/flow (paste screen-by-screen notes, a Figma link description, or a walkthrough):
"""
[DESCRIBE THE DESIGN OR FLOW HERE]
"""

And here is the original requirement it's meant to solve:
"""
[PASTE THE ORIGINAL REQUIREMENT HERE]
"""

Do the following:
1. Check the design actually solves the stated problem — not just "does something reasonable." Flag any gap between requirement and what's shown.
2. List every edge case and state (empty, error, loading, permission, zero-data, extreme-data) and mark which ones the design appears to cover vs. miss.
3. Identify anything that will be expensive or awkward for engineering to build as designed, so it can be caught before commitment, not after.
4. Write 5 specific, non-generic questions to ask in the review (not "does this look good?" — questions that surface a real decision or risk).
5. Give a go / go-with-changes / no-go read, with the single biggest reason if it's not a clean go.

Be direct — I need a decision-support tool, not diplomatic feedback.`,
    },
    {
      id: "pm-req-to-tickets",
      category: "Tickets",
      name: "Requirement → Engineering Tickets",
      emoji: "🎫",
      color: "#6BCB77",
      tagline: "Break a requirement into tickets engineering can pick up cold",
      prompt: `You are acting as a Product Manager writing engineering tickets that a developer can pick up with zero follow-up questions.

Here is the requirement / feature:
"""
[PASTE THE REQUIREMENT HERE]
"""

Here is any technical context I have (existing architecture, constraints, prior decisions):
"""
[PASTE TECHNICAL CONTEXT, OR WRITE "NONE"]
"""

Do the following:
1. Break the requirement into tickets, each independently completable and no larger than ~1 day of work. If a ticket is bigger, split it further.
2. For each ticket, write: Title, Description (context + what to build), Acceptance criteria (bullet list, testable), Dependencies (which other tickets must land first), and a rough size (S/M/L).
3. Order the tickets in the sequence they should be built, and mark which ones could be worked in parallel.
4. Flag any ticket that needs a decision from design, legal, or another function before an engineer can actually start it.
5. Call out anything ambiguous in the original requirement that you had to assume — list the assumption explicitly so I can correct it before it ships wrong.

Format each ticket so it can be pasted directly into Linear/Jira as its own ticket, with clear separators between them.`,
    },
    {
      id: "pm-bug-report-to-ticket",
      category: "Tickets",
      name: "Bug Report → Reproducible Ticket",
      emoji: "🐛",
      color: "#6BCB77",
      tagline: "Turn a vague user complaint into something engineering can fix",
      prompt: `You are acting as a Product Manager triaging a bug report before it goes to engineering. Vague bug tickets waste engineering time — I want this one tight.

Here is the raw bug report / user complaint / support thread:
"""
[PASTE THE BUG REPORT OR COMPLAINT HERE]
"""

Do the following:
1. Restate the bug as a clear one-line title: "[Where] does [what] when [condition], expected [what]."
2. List what's actually known vs. what's missing to reproduce it (browser/device, account state, steps, frequency) — write the specific follow-up questions needed if repro steps are incomplete.
3. Propose the most likely root cause category (data issue, race condition, permissions, UI-only, third-party integration) as a hypothesis, clearly labeled as a guess, not a diagnosis.
4. Assess severity/priority: how many users are plausibly affected, is there a workaround, does it touch money/data/security.
5. Write the ticket: Title, Steps to reproduce, Expected vs. actual behavior, Environment/context, Severity, and any workaround to share with affected users in the meantime.

Format ready to paste into the tracker. If the report is too vague to write real repro steps, say exactly what to ask the reporter instead of guessing.`,
    },
    {
      id: "pm-roadmap-prioritization",
      category: "Reporting",
      name: "Roadmap Prioritization Pass",
      emoji: "🗺️",
      color: "#4D96FF",
      tagline: "Force a ruthless, defensible ranking of what's next",
      prompt: `You are acting as a Product Manager forcing a ruthless prioritization pass on a list of candidate features/initiatives before committing the next quarter to any of them.

Here is my list of candidate items, with whatever context I have on each (customer requests, revenue tie, effort guess, strategic notes):
"""
[PASTE YOUR LIST OF CANDIDATE ITEMS HERE]
"""

And here is our current top priority / strategic focus, if any:
"""
[PASTE CURRENT STRATEGY/GOAL, OR WRITE "NONE STATED"]
"""

Do the following:
1. Score each item on: Impact (on the stated goal, or on revenue/retention/activation if no goal given), Effort (rough T-shirt size), and Confidence (how sure we are impact will materialize) — show the scores in a table.
2. Rank the list using those scores, and show your ranking logic, not just the final order.
3. Name the single item you'd cut entirely if forced to remove one, and why.
4. Name the single item that's most likely being over-hyped internally relative to its real impact, and why.
5. Propose a "now / next / later" three-column split of the full list.

Be willing to disagree with how items were originally pitched to you — that's the point of this exercise.`,
    },
    {
      id: "pm-stakeholder-update",
      category: "Reporting",
      name: "Weekly Stakeholder Update",
      emoji: "📣",
      color: "#4D96FF",
      tagline: "Write the update that gets read, not skimmed",
      prompt: `You are acting as a Product Manager writing a weekly stakeholder update that busy executives will actually read in under 90 seconds.

Here's what happened this week (paste raw notes — shipped items, blockers, metrics, decisions, anything relevant):
"""
[PASTE YOUR RAW NOTES HERE]
"""

Do the following:
1. Write a 2-sentence headline: the single most important thing that happened this week, in plain language.
2. List what shipped/launched, each in one line with the impact it's expected to have (not just "we did the thing").
3. List what's blocked or at risk, with the specific ask needed from a stakeholder to unblock it (be specific — don't just say "need help").
4. List the 1-2 key metrics that matter right now, with a one-line read on whether that's good, bad, or neutral news.
5. Preview next week's top priority in one line.

Keep the whole thing under 200 words. No jargon, no filler phrases like "exciting progress" — just the facts and what's needed.`,
    },
  ],
};

export const deliveryLeadRole: ProductivityRole = {
  id: "delivery-lead",
  name: "Delivery Lead",
  emoji: "📋",
  color: "#B983FF",
  tagline: "Keep delivery honest — risks surfaced early, nothing slips silently",
  categories: ["Transcripts", "Designs", "Tickets", "Reporting"],
  prompts: [
    {
      id: "dl-standup-to-risks",
      category: "Transcripts",
      name: "Standup Notes → Blockers & Risks",
      emoji: "🚦",
      color: "#B983FF",
      tagline: "Surface what's actually at risk, not just what was said",
      prompt: `You are acting as an experienced Delivery Lead reviewing standup notes across the team to catch what's actually at risk before it becomes a missed deadline.

Here are today's/this week's standup notes (paste raw, per-person is fine):
"""
[PASTE STANDUP NOTES HERE]
"""

And here is the current sprint/milestone commitment, if any:
"""
[PASTE THE COMMITMENT, OR WRITE "NONE STATED"]
"""

Do the following:
1. Extract every blocker mentioned, who owns unblocking it, and how long it's plausibly been silently blocking based on context clues (e.g. "still waiting on" implies it's not new).
2. Flag any item where someone said "almost done" two updates in a row — this is the single most common leading indicator of a slip.
3. Identify hidden dependencies between people's updates that nobody explicitly connected (e.g. person A is blocked on something person B mentioned finishing but didn't confirm is actually merged/deployed).
4. Give a red/yellow/green read on the current commitment, with the specific reason — not a vibe.
5. Write the exact follow-up questions I should ask in the next standup to close the biggest gaps in this picture.

Be skeptical of "on track" status updates that aren't backed by a specific, checkable fact.`,
    },
    {
      id: "dl-retro-to-actions",
      category: "Transcripts",
      name: "Retro Transcript → Owned Actions",
      emoji: "🔁",
      color: "#B983FF",
      tagline: "Make sure retro insights survive past the meeting",
      prompt: `You are acting as a Delivery Lead facilitating a retrospective. Most retros generate good conversation and zero lasting change — I want this one to actually change something.

Here is the raw retro transcript/notes (what went well, what didn't, ideas raised):
"""
[PASTE RETRO TRANSCRIPT OR NOTES HERE]
"""

Do the following:
1. Group the raw comments into themes (process, communication, tooling, scope, technical debt, team health) rather than listing them as scattered points.
2. For each theme, identify the underlying root cause being pointed at, not just the surface complaint (e.g. "too many meetings" might really mean "unclear decision ownership").
3. Propose 2-3 concrete experiments to run next sprint (not vague "communicate better" — an actual changed process, tool, or ritual with a defined trial period).
4. Turn the agreed experiments into owned actions: Owner | Action | How we'll know it worked | Review date.
5. Name the one thing from last retro (if I paste it below) that was agreed but doesn't look like it actually happened, so we can address the pattern of retro actions dying:
"""
[PASTE LAST RETRO'S ACTIONS HERE, OR WRITE "N/A — FIRST RETRO"]
"""

Keep actions small enough that "didn't get to it" isn't a reasonable excuse next time.`,
    },
    {
      id: "dl-design-handoff-readiness",
      category: "Designs",
      name: "Design → Build Readiness Check",
      emoji: "✅",
      color: "#FF6B6B",
      tagline: "Catch the gap between 'design is done' and 'engineering can start'",
      prompt: `You are acting as a Delivery Lead checking whether a design is actually ready to hand to engineering, or whether it will generate mid-sprint questions and slippage.

Here is the design/flow being handed off (describe screens, states, and any spec notes):
"""
[DESCRIBE THE DESIGN AND ANY ACCOMPANYING SPEC HERE]
"""

Here is the engineering context (tech stack, existing components, team size/experience level):
"""
[PASTE ENGINEERING CONTEXT HERE]
"""

Do the following:
1. Check for the states engineers will ask about first if they're missing: loading, empty, error, permission-denied, offline/slow network, and edge-case data (very long text, zero items, max items).
2. Identify anything in the design that implies backend/API work not yet specified (new fields, new endpoints, changed permissions) — flag it explicitly so it doesn't surface as a surprise mid-sprint.
3. Flag any interaction that's ambiguous enough that two engineers could reasonably build it two different ways.
4. Give a clear go / not-yet verdict, and if not-yet, the exact short list of things that must be clarified before this goes into a sprint.
5. Suggest how to split this into a build sequence that gets something demoable early, rather than one big undifferentiated chunk of work.

Be concrete — name the specific screen or interaction each flag applies to.`,
    },
    {
      id: "dl-sprint-planning",
      category: "Tickets",
      name: "Sprint Planning: Scope & Sequence",
      emoji: "📐",
      color: "#6BCB77",
      tagline: "Turn a ticket backlog into a sprint that's actually achievable",
      prompt: `You are acting as a Delivery Lead running sprint planning. I want a realistic sprint, not an aspirational one.

Here is the candidate ticket backlog for this sprint (paste titles + rough sizes if known):
"""
[PASTE THE TICKET LIST HERE]
"""

Here is the team's known capacity (number of engineers, days available, any planned time off):
"""
[PASTE TEAM CAPACITY HERE]
"""

Do the following:
1. Total the estimated effort against stated capacity, and flag if the ask is already over-committed before the sprint starts.
2. Sequence tickets by dependency, not just priority — call out which tickets block others and must go first.
3. Identify tickets that are risky to commit to as-is because they're missing acceptance criteria or have unresolved dependencies — recommend descoping or clarifying before commitment, not during the sprint.
4. Propose a "must ship / stretch" split so the team has a committed floor and an honest stretch ceiling instead of one flat list.
5. Flag single points of failure — work that only one person on the team can do — and suggest a mitigation (pairing, doc, or reorder) if it sits on the critical path.

Give me a sprint plan I could defend in front of a stakeholder asking "will this actually ship."`,
    },
    {
      id: "dl-dependency-risk-map",
      category: "Tickets",
      name: "Cross-Team Dependency & Risk Map",
      emoji: "🕸️",
      color: "#6BCB77",
      tagline: "See what will actually block delivery before it does",
      prompt: `You are acting as a Delivery Lead mapping cross-team dependencies and risk for a multi-team initiative, so nothing blocks silently.

Here is the initiative and the tickets/workstreams involved, with whatever team/owner info I have:
"""
[PASTE THE INITIATIVE, WORKSTREAMS, AND OWNERS HERE]
"""

Do the following:
1. Build a dependency map: for each workstream, what it needs from another team, and what other teams need from it — call out anything currently undocumented or assumed.
2. Rank the top 3 risks to the overall timeline, each with: likelihood, impact if it happens, and the earliest point we'd realistically detect it if nothing changes.
3. For each top risk, propose a specific mitigation and who should own tracking it — not a general "communicate more."
4. Identify any dependency where the two sides seem to have different assumptions about timing or scope (a common silent failure mode in cross-team work).
5. Recommend a lightweight tracking mechanism (e.g. a shared RAID log, a weekly dependency sync) sized to the actual complexity here — don't over-process a 2-team dependency.

Output the dependency map as a table, and the risks as a ranked list with owners.`,
    },
    {
      id: "dl-raid-log",
      category: "Reporting",
      name: "RAID Log Builder",
      emoji: "🧭",
      color: "#4D96FF",
      tagline: "Risks, Assumptions, Issues, Dependencies — in one clean pass",
      prompt: `You are acting as a Delivery Lead building a RAID log (Risks, Assumptions, Issues, Dependencies) for an active project, from scattered inputs.

Here is everything I know so far — meeting notes, Slack threads, half-formed worries, things people have mentioned in passing:
"""
[PASTE YOUR RAW NOTES/CONTEXT HERE]
"""

Do the following:
1. Sort every item into Risk (might happen, would hurt if it did), Assumption (believed true but unverified), Issue (already happening, needs resolving now), or Dependency (something we need from outside the team) — don't leave anything uncategorized.
2. For each Risk, add likelihood and impact (High/Med/Low) and a mitigation.
3. For each Assumption, note how we'd validate it and what breaks if it's wrong.
4. For each Issue, note current status and the specific next action to resolve it.
5. For each Dependency, note who owns delivering it and by when, and what happens to our timeline if it slips.
6. Highlight the single item across the whole log most likely to actually derail this project, and why it's more dangerous than it currently looks.

Format as four clearly labeled tables, ready to paste into a project tracker or status doc.`,
    },
    {
      id: "dl-exec-status-report",
      category: "Reporting",
      name: "Exec Status Report (RAG)",
      emoji: "🚥",
      color: "#4D96FF",
      tagline: "A status report that tells the truth, briefly",
      prompt: `You are acting as a Delivery Lead writing a status report for executives who have 60 seconds and want the truth, not a spin.

Here's the raw status info — what's done, what's in progress, what's blocked, any metrics:
"""
[PASTE RAW STATUS INFO HERE]
"""

Do the following:
1. Give an overall RAG status (Red/Amber/Green) for the initiative, with the one-sentence reason — don't hedge with "it depends."
2. List what shipped or is confirmed on track, in one line each.
3. List what's Amber or Red, each with: the specific risk, what's being done about it, and the ask (if any) from leadership to help.
4. State the confidence level on the current target date, and if it's shifted, say so plainly and why — don't bury a slipped date in paragraph three.
5. End with the single most important decision leadership needs to make or be aware of this week, if any.

Keep it under 150 words. No status-report euphemisms ("progressing well," "working through some challenges") — say what's actually true.`,
    },
  ],
};

export const productivityRoles: ProductivityRole[] = [productManagerRole, deliveryLeadRole];
