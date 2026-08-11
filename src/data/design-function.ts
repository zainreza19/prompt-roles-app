import type { Agent } from "@/data/workflow";

export type Principle = { title: string; detail: string };

export const corePrinciples: Principle[] = [
  { title: "Radical simplicity", detail: "Remove everything that isn't essential. If a feature needs a tooltip to explain a button, the button is wrong, not the tooltip." },
  { title: "Material honesty", detail: "Every element on screen should exist for a reason. Decoration that doesn't communicate something is noise." },
  { title: "Restraint is a decision", detail: "Less isn't the absence of effort — it's a deliberate choice made after considering more, then cutting." },
  { title: "Systemic coherence", detail: "One button, one spacing scale, one type system — everything belongs to a single system, not fifty one-off decisions." },
  { title: "Details compound", detail: "Users rarely notice individual details, but they feel the accumulated difference between 10 good decisions and 1,000." },
  { title: "Form follows function", detail: "Aesthetic choices should serve the purpose of the screen, not exist independently of it." },
  { title: "Design for longevity", detail: "Chase clarity, not trends — a trendy design ages badly; a clear one doesn't." },
  { title: "Accessibility by default", detail: "Contrast, keyboard navigation, and screen-reader support are baseline requirements, not a phase-two nice-to-have." },
  { title: "Continuity across surfaces", detail: "A user moving between onboarding, the app, and support should never feel like they left one product and entered another." },
  { title: "Delight in small moments", detail: "A well-timed animation or a warm empty-state message costs little and builds outsized attachment." },
];

export type CognitiveRule = { title: string; detail: string };

export const cognitiveRules: CognitiveRule[] = [
  { title: "Zero cognitive load", detail: "The user should never have to stop and think about what a screen wants from them." },
  { title: "Clear affordances", detail: "Anything clickable should look clickable. Anything that isn't shouldn't look like it is." },
  { title: "Immediate feedback", detail: "Every action — click, submit, drag — gets a visible response within milliseconds, even if the real result takes longer." },
  { title: "Errors prevented, not just handled", detail: "The best error message is the one that never needed to appear because the design made the mistake hard to make." },
];

export type ProcessDay = { day: string; focus: string; detail: string };

export const designSprint: ProcessDay[] = [
  { day: "Day 1", focus: "Understand", detail: "Research, talk to users, and define the specific problem in one sentence before anyone sketches anything." },
  { day: "Day 2", focus: "Diverge", detail: "Everyone sketches independently (\"crazy 8s\" — 8 ideas in 8 minutes), then does a quick walkthrough of their favorite idea." },
  { day: "Day 3", focus: "Decide", detail: "Vote silently, storyboard the strongest idea end-to-end, and commit to one direction — no more branching." },
  { day: "Day 4", focus: "Prototype", detail: "Build a high-fidelity, clickable prototype — good enough to feel real, not good enough to be production code." },
  { day: "Day 5", focus: "Test", detail: "Put it in front of 5 real users, watch where they hesitate, and gather signal before writing a line of production code." },
];

export type FlowStep = { step: string; question: string };

export const uxFlowSteps: FlowStep[] = [
  { step: "Entry Point", question: "How did the user arrive at this screen?" },
  { step: "Context", question: "What does the user already know, and what do they want right now?" },
  { step: "Action", question: "What is the one thing they need to do here?" },
  { step: "Feedback", question: "What does the system show them immediately after they act?" },
  { step: "Outcome", question: "What did they actually get or accomplish?" },
  { step: "Next Step", question: "What should they naturally want to do right after this?" },
];

export type OnboardingScreen = { screen: string; goal: string; detail: string };

export const onboardingFramework: OnboardingScreen[] = [
  { screen: "Screen 1 — The Promise", goal: "Show the outcome, not the product.", detail: "One sentence of value, one image of the result, and a CTA like \"Get started\" rather than \"Create account.\"" },
  { screen: "Screen 2 — Immediate Value", goal: "Let them feel it before they commit.", detail: "Give a taste of real value before asking for a full signup — an email address is often enough friction for now." },
  { screen: "Screen 3 — Light Personalization", goal: "Tailor without interrogating.", detail: "Ask at most 2-3 questions, make them visual where possible, and always allow skipping." },
  { screen: "Screen 4 — The Aha Moment", goal: "Deliver a real first win.", detail: "Get them to a genuine success as fast as possible, and acknowledge it — briefly, not with over-the-top celebration." },
];

export type DesignSystemLayer = { layer: string; contains: string };

export const designSystemStructure: DesignSystemLayer[] = [
  { layer: "Tokens", contains: "Colors (with semantic meaning, not just hex codes), typography scale, spacing scale, shadows/elevation, motion durations, border radius" },
  { layer: "Components", contains: "Atoms (button, input, icon, badge) → Molecules (card, form field, nav item) → Organisms (header, sidebar, modal)" },
  { layer: "Patterns", contains: "Reusable solutions for onboarding, empty states, loading states, and error handling — documented once, reused everywhere" },
  { layer: "Guidelines", contains: "Voice and tone, imagery/illustration style, and an accessibility standard (e.g. WCAG 2.1 AA) everyone designs against" },
];

export type CritiqueStep = { step: string; example: string };

export const critiqueFramework: CritiqueStep[] = [
  { step: "Observation", example: "\"The primary button sits in the bottom-right corner.\" (What you see, no judgment yet.)" },
  { step: "Principle", example: "\"This tests visual hierarchy and primary-CTA placement.\" (Name the principle being tested.)" },
  { step: "Impact", example: "\"One-handed mobile users have to stretch their thumb to reach it.\" (What effect this has on a real user.)" },
  { step: "Alternative", example: "\"Consider moving it above the fold, centered.\" (A concrete, constructive suggestion.)" },
  { step: "Trade-off", example: "\"More reachable, but it costs vertical space for content.\" (Be honest about what's gained and lost.)" },
];

export const uiChecklist: string[] = [
  "Clear visual hierarchy — the eye knows where to go first",
  "Adequate contrast (WCAG AA: 4.5:1 for normal text)",
  "Minimum tap target size (44x44px on mobile)",
  "Consistency with the existing design system",
  "All interactive states defined (hover, active, disabled, focus)",
  "Responsive, designed mobile-first",
  "Loading states and empty states designed, not left blank",
  "Error messages that are specific and offer a way forward",
  "Accessible labels, ARIA roles, and full keyboard navigation",
  "Perceived performance handled (skeleton screens, optimistic UI)",
];

export type Mistake = { title: string; detail: string };

export const founderMistakes: Mistake[] = [
  { title: "Hiring for portfolio beauty over usability", detail: "A gorgeous portfolio doesn't guarantee someone who can reason about conversion, onboarding friction, or accessibility — ask how a candidate would test a design decision, not just how it looks." },
  { title: "No design system, ever growing chaos", detail: "Every new screen invents its own button style and spacing because nothing was ever standardized — by month six, nothing feels like the same product." },
  { title: "Skipping critique until real users are the first critics", detail: "Without an internal critique habit, the first honest feedback on a flawed flow comes from paying customers churning silently." },
  { title: "Treating accessibility as a later phase", detail: "Retrofitting accessibility is far more expensive than designing for it from screen one, and it quietly excludes real customers in the meantime." },
  { title: "Over-designing the MVP", detail: "Polishing five screens meticulously before knowing if the core flow works wastes the exact time an MVP is supposed to save." },
  { title: "Confusing 'looks modern' with 'converts better'", detail: "A trendy visual style is not the same thing as a design that's been tested against real user behavior — only usability testing proves the difference." },
];

export type BusinessLink = { title: string; detail: string };

export const businessOutcomeLinks: BusinessLink[] = [
  { title: "Onboarding friction is an activation-rate tax", detail: "Every unnecessary step in onboarding directly reduces the percentage of signups who ever reach real value." },
  { title: "Visual polish is a trust signal", detail: "For an unknown, small brand, consistent and clean design substitutes for the trust an established brand gets for free — it affects willingness to pay before a single feature is evaluated." },
  { title: "A design system compounds shipping speed", detail: "Every screen built on top of a real token/component system ships faster than the last; every screen built from scratch resets that speed back to zero." },
  { title: "Accessibility widens the addressable market", detail: "It's not just compliance — it's real customers who would otherwise be excluded, plus reduced legal exposure as a side effect." },
  { title: "First-impression design affects shareability", detail: "On launch day (Product Hunt, social, press), screenshots and first-look impressions are what actually get shared — design is part of the distribution motion, not separate from it." },
];

export const designTools: { category: string; tools: string }[] = [
  { category: "UI Design & Prototyping", tools: "Figma — the default for interface design, prototyping, and developer handoff" },
  { category: "Workshops & Journeys", tools: "FigJam — user journey mapping, design sprints, team ideation" },
  { category: "Design System Docs", tools: "Zeroheight — documenting and publishing a design system so it's actually used" },
  { category: "Motion", tools: "Lottie — lightweight, exportable animations for onboarding and micro-interactions" },
  { category: "Pattern Reference", tools: "Mobbin, Screenlane — real shipped UI patterns to reference instead of designing every pattern from scratch" },
];

export const designAgents: Agent[] = [
  {
    id: "design-critique-agent",
    name: "Design Critique Agent",
    emoji: "🔍",
    color: "#FF6B6B",
    tagline: "Structured, honest feedback on a screen",
    prompt: `You are acting as a Design Critique Agent using a 5-step structured critique framework: Observation (what you see, no judgment) → Principle (which design principle is being tested) → Impact (the effect on a real user) → Alternative (a concrete suggestion) → Trade-off (what's gained and lost).

Here is the screen or flow I want critiqued (describe it in detail, or paste a description of each element and its position):
"""
[DESCRIBE YOUR SCREEN/FLOW HERE]
"""

Do the following:
1. Walk through the 5-step framework for the 3 most significant issues you notice, in order of impact.
2. For each, be specific — name the exact element, not a general category of problem.
3. Check the design against this baseline checklist and flag anything missing: visual hierarchy, contrast (WCAG AA), tap target size, consistency, interactive states, responsiveness, loading/empty states, error handling, accessibility, perceived performance.
4. End with the single highest-leverage change I should make first.

Be direct. A critique that only lists positives isn't useful to me right now.`,
  },
  {
    id: "onboarding-architect",
    name: "Onboarding Flow Architect",
    emoji: "🚪",
    color: "#4D96FF",
    tagline: "Design the first 5 minutes of your product",
    prompt: `You are acting as an Onboarding Flow Architect using a 4-screen framework: The Promise (show the outcome, not the product) → Immediate Value (let them feel it before committing) → Light Personalization (2-3 questions max, always skippable) → The Aha Moment (a real first win, briefly acknowledged).

Here is my product and its core value:
"""
[PASTE YOUR PRODUCT DESCRIPTION AND CORE VALUE PROP HERE]
"""

Do the following:
1. Write the exact copy for Screen 1: the one-sentence promise, what image/visual should accompany it, and the CTA label.
2. Design Screen 2: what "immediate value" looks like for this specific product before requiring a full signup.
3. Propose the 2-3 personalization questions for Screen 3, and what each answer should change about the experience that follows.
4. Define the Aha Moment precisely for Screen 4 — the exact action that counts as a real first win, and how briefly to acknowledge it.
5. Flag anything in a typical onboarding for this type of product that this framework would cut, and why that cut is worth it.

Be specific to my product, not a generic onboarding template.`,
  },
  {
    id: "design-system-starter",
    name: "Design System Starter",
    emoji: "🧱",
    color: "#6BCB77",
    tagline: "Get a minimal, real design system in place",
    prompt: `You are acting as a Design Systems specialist. Help me define a minimal but real design system before I have inconsistent screens to untangle later.

Here is my product and its intended visual personality (or tell me to propose one):
"""
[PASTE YOUR PRODUCT DESCRIPTION AND ANY VISUAL DIRECTION HERE]
"""

Do the following:
1. Propose a token set: color palette (brand + semantic + neutral), a type scale (5-6 sizes max), a spacing scale, and border-radius values — keep it minimal enough to actually maintain.
2. List the atomic components I need for an MVP (buttons, inputs, cards, etc.) with their required states (default, hover, active, disabled, loading, error).
3. Identify the 3 patterns (onboarding, empty states, loading, or errors) most worth documenting first, given my product.
4. Recommend where to store/document this so it's actually used (not just a Figma file nobody opens).

Keep this scoped to what a solo founder or tiny team can realistically maintain — not an enterprise-scale system.`,
  },
  {
    id: "accessibility-auditor",
    name: "Accessibility Auditor",
    emoji: "♿",
    color: "#B983FF",
    tagline: "Catch exclusion before launch, not after complaints",
    prompt: `You are acting as an Accessibility Auditor. Review my product against WCAG 2.1 AA basics before launch, so accessibility isn't retrofitted later.

Here is my product/screen(s) to review:
"""
[DESCRIBE YOUR PRODUCT OR PASTE SPECIFIC SCREENS/FLOWS HERE]
"""

Do the following:
1. Check for adequate color contrast (4.5:1 for normal text, 3:1 for large text) and flag any combinations likely to fail.
2. Check that all interactive elements are reachable and operable via keyboard alone, not just mouse/touch.
3. Check that images, icons, and interactive elements have appropriate labels for screen readers.
4. Identify any places relying on color alone to convey meaning (e.g. red/green status with no text or icon backup).
5. Give me a prioritized list: what must be fixed before launch vs. what can be improved post-launch without excluding real users in the meantime.

Be concrete about which specific elements fail, not a generic accessibility lecture.`,
  },
  {
    id: "ux-flow-mapper",
    name: "UX Flow Mapper",
    emoji: "🗺️",
    color: "#4ECDC4",
    tagline: "Map a flow end-to-end before building it",
    prompt: `You are acting as a UX strategist. Help me map a specific user flow using this structure: Entry Point → Context → Action → Feedback → Outcome → Next Step.

Here is the flow I want to map (e.g. "signing up and creating a first project," "upgrading from free to paid"):
"""
[DESCRIBE THE FLOW YOU WANT TO MAP HERE]
"""

Do the following:
1. Fill in each of the 6 steps specifically for this flow — don't skip Context or Next Step, they're the ones founders usually forget.
2. Identify the step in this flow most likely to lose users, and why.
3. Propose one concrete change to reduce drop-off at that step.
4. Tell me what the ideal "Next Step" should funnel the user toward, and whether the current design actually makes that the easiest next action.

Be specific to this exact flow, not a generic UX lecture.`,
  },
  {
    id: "solo-design-sprint",
    name: "Solo Design Sprint Planner",
    emoji: "🏃",
    color: "#FFD400",
    tagline: "Compress the 5-day sprint for a team of one",
    prompt: `You are acting as a Design Sprint facilitator. Help me compress the classic 5-day design sprint (Understand → Diverge → Decide → Prototype → Test) into something a solo founder or a tiny team can actually run in 1-2 days.

Here is the problem I need to design a solution for:
"""
[PASTE THE PROBLEM OR DECISION YOU NEED TO DESIGN FOR HERE]
"""

Do the following:
1. Propose a compressed schedule (1-2 days) that still hits all 5 phases, noting what to cut or shorten given I don't have a full team to run "crazy 8s" with.
2. Give me a way to substitute for group divergence when it's just me — e.g. generating multiple independent concepts solo before picking one.
3. Suggest the fastest realistic way to get prototype feedback from 3-5 real users within a day or two, given a limited network.
4. Tell me what "good enough" looks like for the prototype fidelity, given I'm testing for direction, not polish.

Keep every step realistic for one person working part-time on this.`,
  },
];
