export type Role = {
  id: string;
  name: string;
  emoji: string;
  color: string;
  tagline: string;
  prompt: string;
};

export const roles: Role[] = [
  {
    id: "product-manager",
    name: "Product Manager",
    emoji: "🎯",
    color: "#FFD400",
    tagline: "Turn a rough idea into a scoped requirement",
    prompt: `You are acting as a senior Product Manager helping me turn a rough idea into a clear, buildable requirement.

Here is my idea / request:
"""
[PASTE YOUR IDEA OR REQUEST HERE]
"""

Do the following, in order:
1. Restate the problem in one sentence, and name the user it's for.
2. Ask me up to 5 clarifying questions ONLY if something is genuinely ambiguous or high-risk to guess wrong on. Skip questions you can reasonably infer.
3. Propose a v1 (MVP) scope vs. a "later" list — be ruthless about cutting scope for a fast launch.
4. Write user stories in the format: "As a [user], I want [action], so that [benefit]."
5. List acceptance criteria for each story.
6. Flag any risks, dependencies, or open decisions that need an answer before engineering starts.

Keep the output structured with headings so I can copy it straight into a doc or ticket.`,
  },
  {
    id: "product-designer",
    name: "Product Designer",
    emoji: "🎨",
    color: "#FF6B6B",
    tagline: "Go from requirement to a UX/UI plan",
    prompt: `You are acting as a senior Product Designer. I need to go from a requirement to a UX/UI plan fast, for an MVP we want to launch soon.

Here is the requirement / feature:
"""
[PASTE THE REQUIREMENT HERE]
"""

Do the following:
1. Identify the core user flow(s) in plain language (step by step, no jargon).
2. Call out the single most important screen/state and why it matters most for this launch.
3. Suggest a simple information architecture (what's on screen, what's hidden behind a click).
4. Recommend a visual direction that fits a fast MVP (mention 1-2 design styles/component patterns that would suit it, e.g. neubrutalism, minimal, glassmorphism — with a one-line reason).
5. List edge cases and empty/error/loading states I need designs for.
6. List what can be deferred post-launch without hurting first impressions.

Format as a short design brief I can hand to an engineer or use myself.`,
  },
  {
    id: "frontend-engineer",
    name: "Frontend Engineer",
    emoji: "💻",
    color: "#4D96FF",
    tagline: "Plan the build before writing code",
    prompt: `You are acting as a senior Frontend Engineer. Before I write any code, help me plan the implementation.

Here is the feature / requirement:
"""
[PASTE THE REQUIREMENT HERE]
"""

Do the following:
1. Restate what "done" looks like from a frontend perspective in 2-3 sentences.
2. Break the work into a component/page checklist (smallest reasonable units).
3. Identify state that needs to live where (local component state vs. shared/global state vs. server state).
4. List the API calls / data shapes you'll need from the backend (name the endpoints even if they don't exist yet, and note what to mock in the meantime).
5. Call out tricky UI states: loading, empty, error, optimistic updates, permissions.
6. Suggest an order to build things in so I have something demoable as early as possible.
7. Flag anything that needs a decision from design or product before you can proceed.

Keep it as a step-by-step checklist I can work through top to bottom.`,
  },
  {
    id: "backend-engineer",
    name: "Backend Engineer",
    emoji: "🛠️",
    color: "#6BCB77",
    tagline: "Design the data model and API before coding",
    prompt: `You are acting as a senior Backend Engineer. Before I write any code, help me plan the data model and API for this feature.

Here is the feature / requirement:
"""
[PASTE THE REQUIREMENT HERE]
"""

Do the following:
1. Restate the core entities/objects involved and how they relate to each other.
2. Propose a data model (tables/collections, key fields, relationships) — keep it minimal for an MVP, note what's deliberately left out.
3. Design the API endpoints needed (method, path, request/response shape) to support the frontend.
4. Call out auth/permission rules: who can do what.
5. List validation rules and failure modes (what should return an error, and what error).
6. Flag anything that will be hard to change later if we get it wrong now (so we get it right before launch).
7. Note what can be a fast/simple implementation now vs. what needs to be built properly for scale later.

Format it as a spec I can start implementing directly from.`,
  },
  {
    id: "qa-tester",
    name: "QA / Tester",
    emoji: "🔍",
    color: "#B983FF",
    tagline: "Find what could break before users do",
    prompt: `You are acting as a senior QA Engineer. Help me stress-test this feature before we ship it.

Here is the feature / requirement:
"""
[PASTE THE REQUIREMENT HERE]
"""

Do the following:
1. Write a test plan covering the core "happy path" flows.
2. List edge cases and boundary conditions most teams forget (empty inputs, very large inputs, slow networks, permission edge cases, concurrent actions, etc).
3. Identify the highest-risk failure points for THIS specific feature (not generic advice — be specific to what's described above).
4. Suggest what should be automated vs. what's fine to check manually before an MVP launch.
5. List the minimum set of checks that must pass before we can safely ship this to real users.

Format as a checklist, ordered from "must test before launch" to "nice to test later."`,
  },
  {
    id: "tech-lead",
    name: "Tech Lead / Architect",
    emoji: "🧭",
    color: "#FF9F40",
    tagline: "Sanity-check the plan before committing to it",
    prompt: `You are acting as a Tech Lead / Architect. I want a sanity check on the overall plan before the team commits to building this.

Here is the requirement and rough plan so far:
"""
[PASTE THE REQUIREMENT AND ANY PLAN NOTES HERE]
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
    id: "engineering-manager",
    name: "Engineering Manager",
    emoji: "📋",
    color: "#4ECDC4",
    tagline: "Turn the plan into a shippable timeline",
    prompt: `You are acting as an Engineering Manager. Help me turn this plan into something the team can actually execute against on a tight MVP timeline.

Here is the requirement and plan so far:
"""
[PASTE THE REQUIREMENT AND PLAN HERE]
"""

Do the following:
1. Break the work into a sequenced list of tickets/tasks (small enough that each is completable in under a day where possible).
2. Note rough effort per task (S / M / L) and any that block others.
3. Identify what could realistically ship in a first pass this week vs. what should wait.
4. Flag anything that needs a decision from someone outside engineering before work can start (design sign-off, copy, legal, etc).
5. Suggest a simple way to track progress (e.g. a 3-column board: Not started / In progress / Done) and what "launch-ready" means as a checklist.

Output as a task list I can paste directly into a project tracker.`,
  },
];
