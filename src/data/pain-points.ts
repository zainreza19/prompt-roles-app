// Pain Points: real, sourced friction points inside specific ecosystems,
// organized by domain. First domain live: Marketplace Platforms — the
// app/plugin/template ecosystems built on top of platforms like Shopify,
// Salesforce, Atlassian, WordPress, and Notion (as opposed to two-sided
// marketplaces like Airbnb or Etsy).
//
// Intended to be updated on a rolling basis (roughly weekly) as new
// research comes in — bump `lastUpdated` and add/refresh entries below.
// Every pain point cites real, checkable sources found via live research
// rather than invented statistics.

export type PainPointDomain = {
  id: string;
  name: string;
  emoji: string;
  available: boolean;
};

export const painPointDomains: PainPointDomain[] = [
  { id: "marketplaces", name: "Marketplace Platforms", emoji: "🛒", available: true },
  { id: "fintech", name: "Fintech", emoji: "💳", available: false },
  { id: "healthtech", name: "Healthtech", emoji: "🏥", available: false },
  { id: "devtools", name: "Dev Tools", emoji: "🧑‍💻", available: false },
];

export const lastUpdated = "August 30, 2026";

export type Source = { title: string; url: string };

export type PainPoint = {
  id: string;
  title: string;
  summary: string;
  whoItAffects: string;
  evidence: string;
  severity: "High" | "Medium" | "Low";
  ideaAngle: string;
  sources: Source[];
  sourceNote?: string;
};

export type MarketplacePlatform = {
  id: string;
  name: string;
  emoji: string;
  color: string;
  description: string;
  painPoints: PainPoint[];
};

export const marketplacePlatforms: MarketplacePlatform[] = [
  {
    id: "shopify",
    name: "Shopify App Store",
    emoji: "🛍️",
    color: "#6BCB77",
    description: "13,000+ third-party apps merchants install to extend their stores — the largest e-commerce app ecosystem in the world.",
    painPoints: [
      {
        id: "shopify-revshare-clawback",
        title: "The $1M revenue-share exemption got clawed back",
        summary: "Shopify rolled back the policy that let developers keep 100% of their first $1M in revenue every year — the exemption now applies once, over an app's lifetime, not annually.",
        whoItAffects: "Established Shopify app developers/ISVs who built multi-year financial plans around the exemption resetting annually.",
        evidence: "Introduced in 2021, the original policy gave every app 0% commission on its first $1M in revenue each year. Shopify changed this so the $1M threshold is a one-time, lifetime allowance — after which the standard 15% revenue share applies permanently to everything above it. The change drew visible backlash on developer social channels and Shopify's own community forums, with several developers saying it broke financial models built around an annual reset, especially with merchants already anxious about tariff-driven cost pressure at the same time.",
        severity: "High",
        ideaAngle: "Financial modeling/forecasting tools built specifically for Shopify app developers, to stress-test platform policy changes before they hit revenue.",
        sources: [
          { title: "Update to Shopify's app developer revenue share (Shopify changelog)", url: "https://shopify.dev/changelog/update-to-shopifys-app-developer-revenue-share" },
          { title: "Shopify rolls back $1-million USD revenue exemption for app developers — BetaKit", url: "https://betakit.com/shopify-app-developers-will-no-longer-be-exempt-from-sharing-their-first-1-million-usd-in-revenue-every-year/" },
          { title: "Revenue share for Shopify App Store developers (official docs)", url: "https://shopify.dev/docs/apps/launch/distribution/revenue-share" },
          { title: "Developer discussion thread — Shopify Developer Community Forums", url: "https://community.shopify.dev/t/update-to-shopify-s-app-developer-revenue-share/14248" },
        ],
      },
      {
        id: "shopify-discoverability",
        title: "13,000+ apps, and ~70% of discovery starts at search",
        summary: "New apps without years of review history struggle to rank, and even a genuinely good app can land on page three of its own category if that category is saturated.",
        whoItAffects: "New and small Shopify app developers without an existing review base, ad budget, or ASO expertise.",
        evidence: "Roughly 70% of app discovery begins with in-store search, meaning most of the competitive battle is search-ranking optimization rather than organic browsing or category placement. An app can rank top-20 overall and still appear on page three of its primary category if competitive density there is high. App count itself even shrank about 8% between 2023 and 2024 as Shopify removed apps failing quality/policy bars — evidence of an increasingly curated, competitive shelf rather than a wide-open one. Third-party tools (e.g. \"Saturation Scout\") have emerged specifically to help merchants and developers gauge category crowding, which is itself a signal of how real this pain point is.",
        severity: "High",
        ideaAngle: "A dedicated 'Shopify App Store SEO' analytics tool (keyword/category density tracking, ranking history) — the Ahrefs equivalent for app store optimization instead of web SEO.",
        sources: [
          { title: "65+ Shopify App Store Statistics — craftberry", url: "https://craftberry.co/articles/shopify-app-store-statistics" },
          { title: "Shopify App Store Statistics 2026 — MageComp", url: "https://magecomp.com/blog/shopify-app-store-statistics/" },
          { title: "Shopify App Ecosystem Trends You Can't Ignore in 2026 — App Store Research", url: "https://appstoreresearch.com/blog/shopify-app-ecosystem-trends" },
          { title: "Shopify App Store Optimization (ASO) guide — Big Moves Marketing", url: "https://www.bigmoves.marketing/blog/shopify-app-store-optimization-aso-how-to-rank-higher-and-convert-more-installs" },
          { title: "\"Saturation Scout\" — Winning Product Finder app (a tool built to solve this exact pain point)", url: "https://apps.shopify.com/saturation-scout" },
        ],
      },
      {
        id: "shopify-ai-native-threat",
        title: "Shopify's own AI can now build the simplest apps for merchants",
        summary: "Prompt-based, AI-assisted custom app building inside the Shopify Admin threatens exactly the narrow, single-feature apps that make up a large share of the App Store.",
        whoItAffects: "Developers of simple, single-feature Shopify apps — the segment most replicable by a merchant typing a prompt instead of installing an app.",
        evidence: "As Shopify pushes AI-assisted, prompt-based app building directly into the merchant Admin, the apps most exposed are the narrow, single-purpose ones — exactly the kind of functionality an AI prompt can approximate without a merchant ever visiting the App Store. This is the same 'platform sherlocking' risk every app ecosystem eventually faces once the platform's own native/AI tooling catches up to what third parties built first. Ecosystem-trend coverage frames discoverability itself shifting because of it: apps with deeper, ongoing functionality are increasingly favored over single-feature utilities in how the store surfaces results.",
        severity: "Medium",
        ideaAngle: "Build Shopify apps around deep, ongoing operational complexity (multi-channel inventory sync, logistics orchestration) rather than single-feature utility — the category AI-assisted building can't easily replicate.",
        sources: [
          { title: "Shopify App Ecosystem Trends You Can't Ignore in 2026 — App Store Research", url: "https://appstoreresearch.com/blog/shopify-app-ecosystem-trends" },
          { title: "65+ Shopify App Store Statistics — craftberry", url: "https://craftberry.co/articles/shopify-app-store-statistics" },
        ],
        sourceNote: "Directionally confirmed across ecosystem-trend coverage rather than a single flashpoint story — this is an emerging risk, not yet a fully documented event the way the revenue-share change is.",
      },
    ],
  },
  {
    id: "salesforce",
    name: "Salesforce AppExchange",
    emoji: "☁️",
    color: "#4D96FF",
    description: "The enterprise CRM app marketplace ISVs build on — trusted by large buyers, but gated behind one of the industry's strictest security review processes.",
    painPoints: [
      {
        id: "appexchange-security-review",
        title: "Security review is slow, and failure is the default first pass",
        summary: "A typical review takes 4-5 weeks and can stretch to months; the most common failure causes (missing CRUD/Field-Level Security enforcement, insecure endpoints) trip up ISVs who didn't design for it from day one.",
        whoItAffects: "Small and mid-size ISVs building their first AppExchange listing without prior Salesforce security-review experience.",
        evidence: "A solution typically takes 4-5 weeks to clear the AppExchange security review, though the full process can last several months, with a resubmission cycle after fixing findings taking another 2-3 weeks. Salesforce's Product Security team combines automated analysis, manual testing, and documentation review — the most common failure cause is missing CRUD and Field-Level Security enforcement on Apex DML/SOQL, alongside insecure external endpoints and missing documentation. Multiple independent partner-side guides exist specifically to help ISVs survive this process, itself a signal of how often first submissions fail.",
        severity: "High",
        ideaAngle: "A pre-submission static-analysis/linting tool purpose-built to catch AppExchange's specific CRUD/FLS and endpoint-security failure patterns before a paid review cycle starts.",
        sources: [
          { title: "How the AppExchange Security Review Works — Salesforce ISVforce Guide", url: "https://developer.salesforce.com/docs/atlas.en-us.packagingGuide.meta/packagingGuide/security_review_how_it_works.htm" },
          { title: "Guide to Submitting Your Solution for Security Review — Trailhead", url: "https://trailhead.salesforce.com/content/learn/modules/isv_security_review/isv_security_review_submit" },
          { title: "Solution Review Process Best Practices — Trailhead", url: "https://trailhead.salesforce.com/content/learn/modules/isv_security_review/isv_security_review_fix" },
          { title: "Salesforce AppExchange Security Review Guide for ISVs — Invisory", url: "https://invisory.co/resources/blog/salesforce-appexchange-security-review-guide-for-isvs/" },
          { title: "How to Pass the AppExchange Security Review — Synebo", url: "https://www.synebo.io/blog/how-to-pass-appexchange-security-review/" },
          { title: "AppExchange Security Review: Why Packages Get Rejected — SuccessCraft", url: "https://success-craft.com/blog/appexchange-security-review-findings/" },
        ],
      },
      {
        id: "appexchange-cost-stack",
        title: "Fees stack up before a small ISV earns a dollar",
        summary: "A $150 annual listing fee, a security-review fee historically around $2,550 (with some 2026 sources citing a reduced ~$999), plus a 15-25% ongoing revenue share depending on partner model.",
        whoItAffects: "Bootstrapped or small-team ISVs evaluating whether AppExchange distribution is worth the upfront and ongoing cost.",
        evidence: "All paid apps pay a $150 annual listing fee, plus a one-time security review fee historically cited around $2,550 (though at least one 2026-dated source cites a reduced ~$999 for the same review). On top of that, ISVforce partners selling to companies that already own Salesforce licenses pay 15% of net revenue to Salesforce, while OEM partners bundling Salesforce invisibly inside their own product pay 25%. For a small ISV pre-revenue, that's real fixed cost before a single sale closes — a materially different bar than free-to-list app stores.",
        severity: "Medium",
        ideaAngle: "A cost/ROI calculator specifically for prospective AppExchange ISVs — modeling breakeven volume against the listing fee, review fee, and revenue-share tier before committing engineering time.",
        sources: [
          { title: "How Much Does It Cost To Build & List An App on AppExchange? — Cyntexa", url: "https://cyntexa.com/blog/how-much-would-it-cost-to-develop-and-list-an-appexchange-app/" },
          { title: "Salesforce ISV Partner Program: Tiers, Costs, and How to Join — Appnigma", url: "https://appnigma.ai/blogs/salesforce-isv-partner-program-guide-2026/" },
          { title: "How to List on Salesforce AppExchange: The 2026 Guide — Appnigma", url: "https://appnigma.ai/blogs/salesforce-appexchange-listing-guide-2026/" },
          { title: "Salesforce AppExchange Pricing Model and Monetisation — MagicFuse", url: "https://magicfuse.co/blog/appexchange-pricing-and-monetisation" },
          { title: "Pricing Plans in AppExchange Checkout — Salesforce ISVforce Guide", url: "https://developer.salesforce.com/docs/atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_pricing_models.htm" },
        ],
      },
    ],
  },
  {
    id: "atlassian",
    name: "Atlassian Marketplace",
    emoji: "🔷",
    color: "#B983FF",
    description: "The Jira/Confluence app ecosystem, currently mid-forced-migration as Atlassian sunsets its self-hosted Data Center product line.",
    painPoints: [
      {
        id: "atlassian-dc-eol",
        title: "Data Center end-of-life is freezing and shrinking the self-hosted app pool",
        summary: "No new Data Center apps could be submitted after December 2025; full end-of-life lands March 28, 2029 — and vendors can't guarantee feature parity or migration timelines for customers stuck in between.",
        whoItAffects: "Enterprise Jira/Confluence customers still on Data Center, and the app vendors serving them who must now split resources toward Cloud.",
        evidence: "Atlassian announced a three-year wind-down for Data Center products, with full end-of-life scheduled for March 28, 2029, at which point Data Center products and apps expire and become read-only. Since December 2025, no new Data Center apps can be submitted to the Marketplace, meaning that pool of available tools is frozen and shrinking as vendors redirect development to Cloud. The announcement caused visible concern across the Atlassian Community, with enterprises needing to verify which of their third-party apps will even exist in the Cloud environment, whether they'll have feature parity, and what migration gaps or costs they'll incur — with vendors unable to guarantee consistent performance or support timelines through the transition.",
        severity: "High",
        ideaAngle: "A migration-gap auditing tool that scans a Data Center Jira/Confluence instance's installed apps and reports exactly which have Cloud equivalents, feature parity gaps, or no migration path at all.",
        sources: [
          { title: "From Data Center to Cloud: The Next Chapter for Marketplace Apps — Inside Atlassian", url: "https://www.atlassian.com/blog/development/from-data-center-to-cloud-the-next-chapter-for-marketplace-apps" },
          { title: "Atlassian Data Center End of Life — SaaSJet", url: "https://saasjet.com/blog/atlassian-data-center-end-of-life/" },
          { title: "Atlassian Data Center end of life: Migrate to Cloud is critical — Deiser", url: "https://blog.deiser.com/en/atlassian-data-center-end-of-life-migrate-to-cloud" },
          { title: "Atlassian Marketplace Apps EOL Impact — Redress Compliance", url: "https://redresscompliance.com/atlassian-marketplace-apps-licensing-eol-impact" },
          { title: "Atlassian Cloud migration: real costs, compliance gaps, and marketplace risks — OpenText", url: "https://blogs.opentext.com/atlassian-cloud-migration-the-real-costs-compliance-gaps-and-marketplace-risks/" },
          { title: "Atlassian Data Center End of Life: What It Means for Your Apps — Forge Apps", url: "https://www.forge-apps.com/blog/atlassian-data-center-end-of-life-what-it-means-for-your-apps" },
        ],
      },
      {
        id: "atlassian-revshare-hike",
        title: "Connect app revenue share is climbing from 15% to 25% within a year",
        summary: "Atlassian is raising the fee it takes from Connect-framework apps in two steps through 2026, while offering steep incentives (0% up to $1M lifetime revenue) to push vendors onto its newer Forge framework instead.",
        whoItAffects: "Vendors with apps still built on Atlassian's older Connect framework rather than the newer Forge framework.",
        evidence: "Revenue share rates for Connect apps rise from 15% to 20% on January 1, 2026, then to 25% on July 1, 2026. Forge app rates rise more modestly, from 15% to 16% then 17% over the same period — and beginning January 1, 2026, partners pay 0% revenue share on eligible Forge earnings up to $1 million in lifetime revenue, a clear incentive structure pushing vendors to migrate frameworks. Vendor discussion on Atlassian's own developer community forum raised concern that the compressed timeline was forcing some partners to ship less-ready software just to hit deadlines and avoid the financial hit, and questioned whether the fee increase would make the \"Pay via Atlassian\" billing model less attractive relative to billing customers directly.",
        severity: "Medium",
        ideaAngle: "A Connect-to-Forge migration audit/consulting tool that estimates a specific app's revenue-share savings from migrating, to help vendors prioritize the rewrite against the compressed deadline.",
        sources: [
          { title: "Marketplace Revenue Share Updates — Inside Atlassian", url: "https://www.atlassian.com/blog/development/marketplace-revenue-share-updates" },
          { title: "Updates to Marketplace Revenue Share: 2026 — Inside Atlassian", url: "https://www.atlassian.com/blog/development/updates-to-marketplace-revenue-share-2026" },
          { title: "Marketplace revenue share updates: 2026 — Atlassian Developer Community", url: "https://community.developer.atlassian.com/t/marketplace-revenue-share-updates-2026/91727" },
          { title: "Marketplace revenue share updates: 2026 (reply thread) — Atlassian Developer Community", url: "https://community.developer.atlassian.com/t/marketplace-revenue-share-updates-2026/91727/22" },
          { title: "Building on the Atlassian Marketplace in 2026: What We're Actually Seeing — Isogun Labs", url: "https://isogunlabs.com/blog/atlassian-marketplace-2026/" },
        ],
      },
    ],
  },
  {
    id: "wordpress",
    name: "WordPress Plugin Directory",
    emoji: "🧩",
    color: "#FF9F40",
    description: "60,000+ free plugins powering over 40% of the web — a fully open, community-governed ecosystem now navigating its biggest governance crisis in years.",
    painPoints: [
      {
        id: "wp-engine-automattic-fallout",
        title: "The Automattic vs. WP Engine dispute cut real sites off from security updates",
        summary: "A public governance fight between WordPress's steward and a major hosting provider left WP Engine-hosted sites disconnected from wordpress.org's automatic plugin/core updates.",
        whoItAffects: "Site owners hosted on WP Engine, and by extension every plugin developer whose users may now be running outdated, unpatched versions.",
        evidence: "The dispute between Automattic and WP Engine became public in September 2024 and has had a profound effect on the WordPress business ecosystem since. Sites hosted on WP Engine stopped receiving automatic updates from wordpress.org, leaving them running potentially outdated plugin versions vulnerable to known exploits — a direct security consequence of a business/trademark dispute, not a technical failure. Coverage of the episode frames it as revealing how much power Atlassian-style centralized stewardship (in this case, Automattic over WordPress.org) can exert over a nominally open ecosystem, and trust in WordPress.org's neutrality has been visibly damaged as a result.",
        severity: "High",
        ideaAngle: "Independent, host-agnostic plugin-update and vulnerability-monitoring services that don't depend on wordpress.org's own update pipeline — insurance against a repeat of this exact failure mode.",
        sources: [
          { title: "Automattic blocks WP Engine's access to WordPress resources — BleepingComputer", url: "https://www.bleepingcomputer.com/news/security/automattic-blocks-wp-engines-access-to-wordpress-resources/" },
          { title: "State of WordPress Security 2025 — Patchstack whitepaper", url: "https://patchstack.com/whitepaper/state-of-wordpress-security-in-2025/" },
          { title: "State Of WordPress Security Report 2025 — wp-content.co", url: "https://wp-content.co/state-of-wordpress-security-report/" },
          { title: "Ensuring Stability and Security — WP Engine's own blog", url: "https://wpengine.com/blog/ensuring-stability-and-security/" },
          { title: "WordPress vs WP Engine Conflict Timeline: Complete History", url: "https://wpvswpe.report/" },
        ],
      },
      {
        id: "wp-mass-vuln-removals",
        title: "1,600+ plugins pulled for security issues in a single year",
        summary: "In 2024, 1,614 plugins were removed from the directory over security concerns, 1,450 of them classified as high- or medium-priority vulnerabilities.",
        whoItAffects: "The ~40%+ of the web running on WordPress, and every developer whose plugin depends on other plugins/themes in a site's stack.",
        evidence: "The Patchstack whitepaper on the State of WordPress Security in 2025 reports that 1,614 plugins were removed from the WordPress.org directory in 2024 due to security concerns, with 1,450 of those classified as high- or medium-priority vulnerabilities — a scale of risk inherent to an open, low-barrier-to-publish directory of this size, where review is necessarily lighter-touch than a curated enterprise marketplace like AppExchange.",
        severity: "Medium",
        ideaAngle: "A lightweight, continuously-updated vulnerability-scoring service site owners can check before installing any plugin — surfaced at the point of decision, not after a breach.",
        sources: [
          { title: "State of WordPress Security 2025 — Patchstack whitepaper", url: "https://patchstack.com/whitepaper/state-of-wordpress-security-in-2025/" },
          { title: "State Of WordPress Security Report 2025 — wp-content.co", url: "https://wp-content.co/state-of-wordpress-security-report/" },
        ],
      },
      {
        id: "wp-freemium-nag-tension",
        title: "The free-to-paid funnel keeps colliding with anti-nag rules",
        summary: "WordPress.org's guidelines explicitly prohibit \"nagging\" upsells, but enforcement is inconsistent — leaving developers who rely on the free directory for distribution walking a constant line.",
        whoItAffects: "Freemium plugin developers who depend on the free WordPress.org directory for discovery, then need to convert a share of free users to paid.",
        evidence: "WordPress.org's plugin guidelines state that upgrade prompts, notices, and alerts must be limited in scope and used sparingly, and that persistent, non-dismissible nags are prohibited outright. In practice, community commentary describes a period where many plugins ran constant advertising, spam, and non-dismissible upsells in the admin dashboard before enforcement tightened — and disciplinary action today is inconsistently applied, noticed mainly when a large plugin or its author draws attention. The underlying business tension is structural: developers ship a strong free version specifically to get exposure inside WordPress's own admin search, then rely on a percentage of free users upgrading to fund the whole operation — a model that only works if the free tier is genuinely useful, but is under constant pressure to nudge conversion harder than the rules allow.",
        severity: "Low",
        ideaAngle: "A compliance-checking tool for WordPress plugin developers that flags upsell/notice patterns likely to trigger a directory guideline violation before submission, not after a review rejection.",
        sources: [
          { title: "What's Your Limit of Advertising and Upselling in Free WordPress Plugins? — WP Tavern", url: "https://wptavern.com/whats-your-limit-of-advertising-and-upselling-in-free-wordpress-plugins" },
          { title: "Detailed Plugin Guidelines — WordPress Plugin Handbook", url: "https://developer.wordpress.org/plugins/wordpress-org/detailed-plugin-guidelines/" },
          { title: "The Plugin Directory: What Should Freemium Product Owners Do About WordPress.org? — WP Product Talk", url: "https://wpproducttalk.com/podcast/the-problem-with-the-wordpress-plugin-directory/" },
          { title: "Advertising, Upselling, and Cross-Selling on WordPress.org — matteoduo.com", url: "https://www.matteoduo.com/upselling-advertising-crossselling-wordpress-org-dashboard/" },
        ],
      },
    ],
  },
  {
    id: "notion",
    name: "Notion Marketplace",
    emoji: "📓",
    color: "#4ECDC4",
    description: "30,000+ community and partner templates — younger and smaller than the other four ecosystems here, with correspondingly thinner public reporting on its friction points.",
    painPoints: [
      {
        id: "notion-template-piracy",
        title: "Paid templates get screenshotted, cloned, and resold with no real enforcement",
        summary: "Notion's Marketplace terms prohibit reselling or redistributing purchased templates, but creators report ongoing unauthorized copying, and enforcement falls almost entirely on the creator, not the platform.",
        whoItAffects: "Independent Notion template creators, particularly those selling higher-priced, detailed templates that are easy to duplicate once purchased once.",
        evidence: "Notion's own Marketplace guidelines prohibit buyers from reselling or redistributing purchased templates, but the practical enforcement burden sits almost entirely with individual creators — legal guides specifically covering demand letters for stolen digital templates exist because creators have had their exact template files copied and resold, in at least one documented case by someone who built an entire storefront around the stolen work. Community-built \"piracy defense\" guides and tracking resources have emerged as a creator self-help response, in the absence of platform-level protection.",
        severity: "Medium",
        ideaAngle: "A lightweight watermarking/leak-tracking layer for Notion template creators (unique per-buyer identifiers embedded in duplicated pages) to make unauthorized resale traceable back to its source.",
        sources: [
          { title: "Demand Letters for Stolen Content, Templates, and Digital Products — Terms.Law", url: "https://terms.law/2025/06/03/demand-letters-for-stolen-content-templates-and-digital-products/" },
          { title: "Notion Marketplace guidelines & terms — Notion Help Center", url: "https://www.notion.com/help/template-gallery-guidelines-and-terms" },
        ],
        sourceNote: "Thinner-sourced than the other pain points on this page — this is a widely reported creator-community issue documented in legal guides and creators' own anti-piracy resources, but lacks a single authoritative industry report the way the other marketplaces' pain points do. Treat as directionally real, not precisely quantified.",
      },
      {
        id: "notion-fee-payout-friction",
        title: "Fees and payout friction stack up fast for a small creator",
        summary: "A 10% platform fee plus a flat $0.40 per-transaction fee, a 14-day payout hold, a $20 minimum payout, and an extra 1% FX fee for any creator outside the US.",
        whoItAffects: "Small, early-stage Notion template creators, especially those outside the US and those selling low-priced templates where the flat $0.40 fee eats a larger share.",
        evidence: "Selling directly on Notion's Marketplace requires joining a waitlist and being approved by the Notion team, then onboarding through Stripe. Once approved, Notion charges a flat 10% fee plus a $0.40 per-transaction fee on every sale, and creators outside the United States pay an additional 1% foreign-exchange fee to convert payouts to their local currency. Payouts are issued biweekly and require a $20 minimum balance, with funds held 14 days to cover potential refunds (buyers can request one within 14 days of purchase) — a real cash-flow lag for a creator relying on this as primary income.",
        severity: "Low",
        ideaAngle: "A pricing calculator for Notion template creators showing real take-home revenue after all fees at different price points, to help set prices that actually clear a target margin.",
        sources: [
          { title: "Sell templates on Notion Marketplace — Notion Help Center", url: "https://www.notion.com/help/selling-on-marketplace" },
          { title: "Sell Notion Templates: Fees & Platforms — Latuos", url: "https://latuos.com/sell-notion-templates/" },
          { title: "How to sell Notion templates (beginner's guide) — Easy.tools", url: "https://www.easy.tools/blog/sell-notion-templates" },
        ],
      },
      {
        id: "notion-discoverability-offplatform",
        title: "Even successful creators treat the Marketplace as a secondary channel",
        summary: "With 30,000+ templates in the gallery, most successful sellers report Gumroad, Etsy, or their own site as their primary channel — Notion's own discovery surface isn't enough on its own.",
        whoItAffects: "New Notion template creators expecting the Marketplace listing itself to drive meaningful discovery and sales.",
        evidence: "The Notion Marketplace features over 30,000 community and partner-built templates. Guidance aimed at prospective sellers consistently recommends a multi-platform strategy — selling on Gumroad or a personal site as the primary channel, listing on Etsy for additional discovery, and submitting only their best work to Notion's own Marketplace as a supplementary channel rather than the main one. That pattern, repeated across independent seller guides, is itself evidence that native discovery inside the Marketplace isn't considered sufficient by the creators who depend on it.",
        severity: "Low",
        ideaAngle: "A cross-posting/syndication tool for Notion template creators that manages listings, pricing, and updates across Notion Marketplace, Gumroad, and Etsy from one place.",
        sources: [
          { title: "Top Platforms to Sell Notion Templates — EzyCourse", url: "https://ezycourse.com/blog/platforms-to-sell-notion-templates" },
          { title: "The Ultimate Notion Template Gallery: 12 Best Marketplaces for 2026 — NotionSender", url: "https://www.notionsender.com/blog/post/notion-template-gallery" },
          { title: "The best Notion Marketplaces to list your Templates — Philipp Stelzel", url: "https://philippstelzel.substack.com/p/the-best-notion-marketplaces-to-list" },
          { title: "How to sell Notion templates: a complete guide — SendOwl", url: "https://www.sendowl.com/blog/tips-and-advice/how-to-sell-notion-templates" },
        ],
      },
    ],
  },
];
