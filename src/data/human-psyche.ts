// A drill-down map of core human desires, for one purpose: finding the
// real motivation underneath a startup idea before building it.
//
// Grounded in established behavioral-science frameworks rather than
// folk stereotypes: evolutionary psychology's "fundamental motives"
// model (Kenrick, Neuberg, Griskevicius & Schaller, 2010 — a research
// update to Maslow's pyramid), David Buss's cross-cultural mate
// preference studies (37 cultures, 1989), Parental Investment Theory
// (Trivers, 1972), Resource Control Theory (Hawley, 1999), the
// "tend-and-befriend" stress-response research (Taylor et al., 2000),
// and Self-Determination Theory (Deci & Ryan).
//
// IMPORTANT — how to read every `sexNote` below: these describe
// average, population-level tendencies found in research, not rules
// for any individual man or woman. In every case the overlap between
// the sexes is large and individual variation (personality, culture,
// circumstance) explains far more than sex does. Treat these as lenses
// for sharper product thinking, never as a claim about any one person.

export type DesireLeaf = {
  id: string;
  title: string;
  summary: string;
  ideaAngle: string;
};

export type DesireSub = {
  id: string;
  title: string;
  summary: string;
  sexNote?: string;
  leaves: DesireLeaf[];
};

export type DesireRoot = {
  id: string;
  title: string;
  emoji: string;
  color: string;
  summary: string;
  sexNote?: string;
  subs: DesireSub[];
};

export const desireRoots: DesireRoot[] = [
  {
    id: "safety",
    title: "Safety & Security",
    emoji: "🛡️",
    color: "#4D96FF",
    summary: "The drive to avoid harm, illness, and resource scarcity — the base layer everything else is built on.",
    subs: [
      {
        id: "physical-safety",
        title: "Physical Safety",
        summary: "Avoiding danger, violence, and physical harm to yourself and the people you protect.",
        sexNote: "Kenrick et al.'s fundamental-motives research finds this system activates for everyone, but average threat-response strategies differ: men show a somewhat stronger average lean toward direct/confrontational responses, women toward 'tend-and-befriend' — seeking protective alliances (Taylor et al., 2000). Both patterns exist heavily within each sex.",
        leaves: [
          { id: "home-security", title: "Home & property security", summary: "Protecting where you live and what you own.", ideaAngle: "Affordable smart-monitoring for renters and small households priced out of traditional alarm companies." },
          { id: "personal-safety", title: "Personal safety while alone", summary: "Feeling secure while traveling, walking, or working alone.", ideaAngle: "Discreet safety-check tools for solo travelers, remote workers, and night-shift workers." },
        ],
      },
      {
        id: "health-security",
        title: "Disease Avoidance / Health Security",
        summary: "The drive to avoid contamination, illness, and bodily decline.",
        sexNote: "Research finds women show, on average, somewhat stronger disgust-sensitivity to contamination cues — a pattern some researchers link to higher obligate parental investment (see Parental Investment Theory below). The measured differences are modest and highly context-dependent.",
        leaves: [
          { id: "preventive-health", title: "Preventive health monitoring", summary: "Catching problems before they become symptoms.", ideaAngle: "Consumer diagnostics and wearables built around early detection, not just fitness tracking." },
          { id: "food-safety", title: "Food & environment safety", summary: "Knowing what's actually in what you consume or live around.", ideaAngle: "Ingredient and contaminant transparency tools aimed at parents and health-conscious buyers." },
        ],
      },
      {
        id: "resource-security",
        title: "Resource & Financial Security",
        summary: "Ensuring enough money, food, and shelter exist now and into the future.",
        sexNote: "The desire for resource security itself is close to universal and shows little sex difference in size. What differs more (see Mating & Romance below) is how resource *acquisition* connects to status and mate value — not the underlying desire for security.",
        leaves: [
          { id: "income-stability", title: "Income stability & emergency buffer", summary: "Not being one bad month from crisis.", ideaAngle: "Micro-savings and income-smoothing tools for gig and hourly workers." },
          { id: "long-term-planning", title: "Long-term financial planning", summary: "Confidence that the future is provided for.", ideaAngle: "Approachable retirement and investment planning for people who feel locked out of traditional wealth advice." },
        ],
      },
    ],
  },
  {
    id: "status",
    title: "Status & Achievement",
    emoji: "🏆",
    color: "#FFD400",
    summary: "The drive to be respected, competent, and recognized relative to others.",
    subs: [
      {
        id: "dominance-status",
        title: "Dominance / Competitive Status",
        summary: "Rising in a hierarchy through direct competition, visible winning, or resource and power display.",
        sexNote: "Resource Control Theory (Hawley, 1999) and cross-cultural data find men, on average, pursue status somewhat more often through direct competition and visible resource/power display. This is a population-average shaped heavily by culture and opportunity structure, not a rule for any individual.",
        leaves: [
          { id: "career-advancement", title: "Career advancement & title", summary: "Visible upward movement in a hierarchy.", ideaAngle: "Tools that make an internal promotion case legible — impact tracking, manager-ready accomplishment logs." },
          { id: "wealth-scoreboard", title: "Wealth as a scoreboard", summary: "Net worth as a visible marker of winning.", ideaAngle: "Net-worth and wealth-building trackers gamified around milestones, not just budgeting." },
        ],
      },
      {
        id: "prestige-status",
        title: "Prestige / Respected Expertise",
        summary: "Being recognized as skilled, wise, or admirable — respect freely given, not seized.",
        leaves: [
          { id: "public-recognition", title: "Public recognition of skill", summary: "Being known for what you're actually good at.", ideaAngle: "Portfolio and credibility tools for solo professionals to make expertise visible to buyers." },
          { id: "mastery-for-self", title: "Mastery for its own sake", summary: "Getting better even when no one's watching.", ideaAngle: "Structured mastery-tracking for hobbyists and craftspeople who want visible progress, not just praise." },
        ],
      },
      {
        id: "relational-status",
        title: "Relational / Social Status",
        summary: "Status built through alliance-building, social capital, and being well-connected within a group.",
        sexNote: "The same Resource Control Theory research finds women, on average, pursue status somewhat more often through this relational/coalition-building channel rather than direct confrontation — again a population-level tendency with heavy overlap, not a fixed rule.",
        leaves: [
          { id: "social-capital", title: "Social capital / being 'in the know'", summary: "Status as access and connection, not net worth.", ideaAngle: "Curated-access community platforms where status means insider connection, not wealth." },
          { id: "trusted-connector", title: "Being the trusted connector", summary: "The person everyone comes to for an introduction.", ideaAngle: "Referral and reputation systems that formalize and reward the informal 'super-connector' role." },
        ],
      },
    ],
  },
  {
    id: "belonging",
    title: "Belonging & Connection",
    emoji: "🤝",
    color: "#6BCB77",
    summary: "The drive to be part of a group, to have close friends, and to not be alone.",
    subs: [
      {
        id: "friendship-community",
        title: "Friendship & Community",
        summary: "Close platonic bonds and membership in a group that has your back.",
        leaves: [
          { id: "friendship-maintenance", title: "Adult friendship maintenance", summary: "Fighting the natural decay of friendships after school ends.", ideaAngle: "Low-friction tools that fight adult friendship decay — shared calendars, group-trip planning, catch-up nudges." },
          { id: "finding-your-people", title: "Finding your people", summary: "A community built around a specific, niche interest.", ideaAngle: "Hyper-specific interest communities for underserved niches, not another generic social network." },
        ],
      },
      {
        id: "emotional-intimacy",
        title: "Being Understood / Emotional Intimacy",
        summary: "Having at least one relationship where you can be fully known without performing.",
        sexNote: "Tend-and-befriend research (Taylor et al., 2000) suggests women, on average, lean more on close-friend emotional disclosure as a primary stress-coping channel; men, on average, report smaller close-confidant networks and lean relatively more on shared-activity bonding. Both bonding styles are well-documented in both sexes.",
        leaves: [
          { id: "talking-it-through", title: "Talking it through", summary: "Processing a problem out loud with someone who gets it.", ideaAngle: "Structured peer-support and friend-check-in tools that lower the activation energy to reach out when struggling." },
          { id: "shared-activity-bonding", title: "Shared-activity bonding", summary: "Connection built through doing something together, not talking about feelings.", ideaAngle: "Platforms organizing recurring shared activities — not one-off events — as the vehicle for connection." },
        ],
      },
      {
        id: "group-identity",
        title: "Group Identity & Tribe",
        summary: "Deriving identity and meaning from belonging to something larger than yourself.",
        leaves: [
          { id: "fandom-identity", title: "Team & fandom identity", summary: "Shared identity through what you're a fan of.", ideaAngle: "Deeper fan-community tooling built around shared rituals, not just generic discussion forums." },
          { id: "shared-cause", title: "Shared cause or mission", summary: "Identity through collective action toward something.", ideaAngle: "Coordination tools for volunteer or advocacy groups organized around identity, not a company." },
        ],
      },
    ],
  },
  {
    id: "mating",
    title: "Mating & Romance",
    emoji: "💘",
    color: "#FF6B6B",
    summary: "The drive to attract, select, and keep a romantic or sexual partner.",
    subs: [
      {
        id: "attraction-selection",
        title: "Attraction & Mate Selection",
        summary: "What people look for when choosing a partner in the first place.",
        sexNote: "David Buss's cross-cultural study across 37 cultures (1989) — one of the most replicated findings in the field — found both sexes rank kindness and intelligence highest overall. But men, on average, weight physical attractiveness and youth somewhat more heavily as a fertility cue, while women, on average, weight a partner's resource-acquisition potential and ambition somewhat more heavily — consistent with Parental Investment Theory (Trivers, 1972), which predicts the higher-obligate-investment sex will be choosier. These are average shifts within an already-shared priority list, not opposite value systems.",
        leaves: [
          { id: "building-attraction", title: "Building attraction & confidence", summary: "Becoming someone others want to date.", ideaAngle: "Coaching and content platforms addressing dating confidence and presentation, built gender-specific by design." },
          { id: "partner-vetting", title: "Partner vetting & compatibility", summary: "Figuring out if someone is actually right for you, fast.", ideaAngle: "Dating products that surface real compatibility signal — values, life-trajectory fit — earlier than photo-first apps do." },
        ],
      },
      {
        id: "courtship",
        title: "Courtship & Relationship Formation",
        summary: "The active process of forming a new romantic bond.",
        leaves: [
          { id: "meeting-irl", title: "Meeting people in person again", summary: "An alternative to swipe fatigue.", ideaAngle: "Structured, low-pressure in-person meetup formats as an alternative to app-based dating." },
          { id: "first-move", title: "Making the first move less scary", summary: "Lowering the social risk of expressing interest.", ideaAngle: "Products using mutual-interest-reveal mechanics so no one has to risk rejection alone." },
        ],
      },
      {
        id: "mate-retention",
        title: "Mate Retention & Relationship Maintenance",
        summary: "Keeping an existing romantic bond healthy and committed over time.",
        sexNote: "Buss's later research on mate-retention tactics finds men, on average, report more resource-display and vigilance-oriented retention behaviors, while women, on average, report more appearance-enhancement and emotional-investment retention behaviors. Both sexes use both strategies; the measured differences are modest.",
        leaves: [
          { id: "keeping-the-spark", title: "Keeping the spark / novelty", summary: "Fighting the routine that flattens long relationships.", ideaAngle: "Date-planning and shared-experience products built for long-term couples, not just new daters." },
          { id: "conflict-repair", title: "Conflict repair", summary: "Getting better at recovering from the same recurring fight.", ideaAngle: "Structured communication tools that help couples de-escalate recurring conflicts, therapy-adjacent but not therapy." },
        ],
      },
    ],
  },
  {
    id: "family",
    title: "Family & Legacy",
    emoji: "👪",
    color: "#B983FF",
    summary: "The drive to care for kin and to leave something behind that outlasts you.",
    subs: [
      {
        id: "parenting",
        title: "Parenting & Caregiving",
        summary: "Investing time, resources, and protection in children or dependents.",
        sexNote: "Humans are unusual among mammals in that both sexes invest heavily in offspring (Parental Investment Theory). Time-use studies still find mothers, on average, carry more of the day-to-day logistical caregiving load and fathers, on average, more of the provider/protector-role investment — a pattern shifting significantly across cohorts and cultures, not a fixed rule.",
        leaves: [
          { id: "parenting-logistics", title: "The logistics of raising kids", summary: "Managing the sheer coordination load of a family.", ideaAngle: "Household and childcare coordination tools that reduce the invisible mental load of day-to-day parenting." },
          { id: "providing-for-future", title: "Providing for a family's future", summary: "Making sure your kids are set up better than you were.", ideaAngle: "Education and future-planning savings products framed around a specific child's milestones." },
        ],
      },
      {
        id: "extended-family",
        title: "Extended Family & Elder Care",
        summary: "Caring for aging parents and maintaining extended-family bonds.",
        leaves: [
          { id: "distance-caregiving", title: "Coordinating care from a distance", summary: "Looking after aging parents you don't live near.", ideaAngle: "This exact niche is already mapped in the Ideas Generator (SilverLine — voice check-ins for aging parents living alone)." },
          { id: "staying-connected", title: "Keeping extended family connected", summary: "Maintaining bonds across distance and generations.", ideaAngle: "Private, family-only sharing spaces for photos and updates, without the performance of social media." },
        ],
      },
      {
        id: "legacy",
        title: "Legacy",
        summary: "Wanting your existence to matter beyond your own lifespan.",
        leaves: [
          { id: "building-what-lasts", title: "Building something that outlasts you", summary: "Creating something that continues after you're gone.", ideaAngle: "Tools for documenting family history, personal values, or a business's founding story for future generations." },
          { id: "passing-down", title: "Passing down resources & values", summary: "Making sure what you built reaches the next generation intact.", ideaAngle: "Estate and inheritance planning made approachable for non-wealthy families, not just high-net-worth clients." },
        ],
      },
    ],
  },
  {
    id: "autonomy",
    title: "Autonomy & Freedom",
    emoji: "🕊️",
    color: "#4ECDC4",
    summary: "The drive to control your own time, choices, and life direction.",
    subs: [
      {
        id: "independence",
        title: "Independence from Authority",
        summary: "Not needing to ask permission — from a boss, institution, or system.",
        leaves: [
          { id: "escaping-9to5", title: "Escaping the 9-to-5", summary: "Working for yourself instead of someone else.", ideaAngle: "Tools that de-risk the transition from employment to independent or freelance work." },
          { id: "reducing-institution-dependency", title: "Reducing dependency on institutions", summary: "Direct control instead of going through a gatekeeper.", ideaAngle: "Products that give individuals direct control over data, finances, or health records currently gatekept by institutions." },
        ],
      },
      {
        id: "control-over-time",
        title: "Control Over Time",
        summary: "Deciding how your hours are spent, rather than having them dictated.",
        leaves: [
          { id: "reclaiming-time", title: "Reclaiming time from busywork", summary: "Getting hours back from repetitive, low-value tasks.", ideaAngle: "Automation for the specific repetitive admin tasks eating a target user's week." },
          { id: "async-flexibility", title: "Flexible & asynchronous work/life", summary: "Not being tied to everyone else's clock.", ideaAngle: "Coordination tools built for async-first teams and relationships, not synchronous-by-default." },
        ],
      },
      {
        id: "self-direction",
        title: "Self-Direction & Identity Ownership",
        summary: "Living according to your own values rather than externally imposed ones.",
        leaves: [
          { id: "reinventing-yourself", title: "Reinventing yourself", summary: "Becoming someone new, deliberately, mid-life.", ideaAngle: "Career-change and reskilling products for people mid-pivot, not just new graduates." },
          { id: "outside-the-script", title: "Living outside a default script", summary: "Opting out of a timeline you never chose.", ideaAngle: "Communities and tools for people opting out of conventional life-stage timelines — career, marriage, homeownership." },
        ],
      },
    ],
  },
  {
    id: "meaning",
    title: "Meaning & Growth",
    emoji: "🌱",
    color: "#FF9F40",
    summary: "The drive to understand, improve, and find purpose — the layer above survival and status.",
    subs: [
      {
        id: "curiosity-learning",
        title: "Curiosity & Learning",
        summary: "Wanting to understand how things work, for its own sake.",
        leaves: [
          { id: "self-education", title: "Structured self-education", summary: "Learning driven by curiosity, not a credential.", ideaAngle: "Adaptive learning tools for adults pursuing curiosity-driven skills, not just credential-driven courses." },
          { id: "novelty-seeking", title: "Exploration & novelty-seeking", summary: "Chasing new experiences for the discovery itself.", ideaAngle: "Discovery-first products — travel, food, ideas — optimized for serendipity, not efficiency." },
        ],
      },
      {
        id: "competence-mastery",
        title: "Competence & Mastery",
        summary: "Getting visibly, measurably better at something that matters to you.",
        leaves: [
          { id: "skill-progression", title: "Skill progression, made visible", summary: "Seeing your own improvement, not just feeling it.", ideaAngle: "Tools that make invisible progress visible — closely related to the Prestige/Mastery desire above." },
          { id: "creative-output", title: "Creative output / making things", summary: "The satisfaction of producing something real.", ideaAngle: "Lower-friction creation tools for a specific craft, aimed at hobbyists who stall on tooling, not talent." },
        ],
      },
      {
        id: "purpose-contribution",
        title: "Purpose & Contribution",
        summary: "Feeling that your effort matters and contributes to something beyond yourself.",
        leaves: [
          { id: "meaningful-work", title: "Work that feels meaningful", summary: "A job that's more than a paycheck.", ideaAngle: "Job-matching and career tools that filter explicitly for mission-fit, not just comp and title." },
          { id: "contributing-to-cause", title: "Contributing to a cause", summary: "Making a real difference without a huge time commitment.", ideaAngle: "Micro-volunteering and low-commitment contribution products for people who want impact without a big time ask." },
        ],
      },
    ],
  },
];
