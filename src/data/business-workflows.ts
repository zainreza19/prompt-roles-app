export type Step = { title: string; text: string };

export type Tier = {
  key: "A" | "B" | "C";
  name: string;
  tag: string;
  color: string;
  profile: string;
  steps: Step[];
  roles: string;
  timeline: string;
  tools: string;
  moneyFlow: string;
  failurePoints: string[];
};

export type CompareRow = { label: string; a: string; b: string; c: string };

export type WorkflowType = {
  id: string;
  label: string;
  intro: string;
  compare: CompareRow[];
  tiers: Tier[];
};

export type Industry = {
  id: string;
  name: string;
  emoji: string;
  status: "live" | "queued";
  tagline: string;
  workflows?: WorkflowType[];
};

const TIER_COLOR = { A: "#4ECDC4", B: "#FF9F40", C: "#FF6B6B" };

export const industries: Industry[] = [
  {
    id: "real-estate",
    name: "Real Estate",
    emoji: "🏠",
    status: "live",
    tagline: "5 workflows mapped — brokerage, leasing, development, property management, investment",
  },
  { id: "technology", name: "Technology / SaaS", emoji: "💻", status: "queued", tagline: "" },
  { id: "healthcare", name: "Healthcare", emoji: "🩺", status: "queued", tagline: "" },
  { id: "financial-services", name: "Financial Services", emoji: "🏦", status: "queued", tagline: "" },
  { id: "retail", name: "Retail / E-commerce", emoji: "🛒", status: "queued", tagline: "" },
  { id: "manufacturing", name: "Manufacturing", emoji: "🏭", status: "queued", tagline: "" },
  { id: "logistics", name: "Logistics & Supply Chain", emoji: "🚚", status: "queued", tagline: "" },
  { id: "legal", name: "Legal Services", emoji: "⚖️", status: "queued", tagline: "" },
];

export const realEstateWorkflows: WorkflowType[] = [
  {
    id: "brokerage",
    label: "Brokerage / Transactions",
    intro:
      "Buying and selling property. The workflow everyone recognizes — listing, showings, offer, escrow, closing — but the mechanics behind the commission check change completely once you move from a solo agent to a national iBuyer.",
    compare: [
      { label: "Total commission", a: "~5.70% combined", b: "same market rate + 5–8% franchise royalty", c: "4–6% under $1M, declining with size; or ~5% + 1% (iBuyer)" },
      { label: "Agent / broker split", a: "50/50 → 90/10 by tenure", b: "50/50 → 90/10, tiered", c: "~60/40 broker/firm; N/A for iBuyer (automated)" },
      { label: "Closing timeline", a: "30–45 days financed / 14–21 cash", b: "same, hit reliably via TC", c: "4–9+ months (portfolio); 14–60 days (iBuyer)" },
      { label: "Key tech", a: "Dotloop, DocuSign, MLS", b: "kvCORE, SkySlope, ShowingTime+", c: "CoStar, LoopNet, Buildout / proprietary AI stack" },
      { label: "Top failure point", a: "Agent overload, financing fall-through", b: "Affiliated-vendor conflicts, team miscommunication", c: "Due-diligence collapse (~30% of deals); AVM mispricing" },
    ],
    tiers: [
      {
        key: "A",
        name: "Solo Agents & Small Independent Brokerages",
        tag: "1–10 agents",
        color: TIER_COLOR.A,
        profile:
          "A single licensed broker-of-record sponsors 1–10 agents. Every agent must legally hang their license under a broker, but at this tier the broker is often also actively selling. Commission-only revenue; the brokerage takes a cut of every agent's split plus sometimes flat desk/E&O/tech fees. Includes true independents and solo operators nested inside large cloud brokerages like eXp or Real Broker, whose split economics mirror this tier even though the parent company is huge. Client base is local, mostly resale, referral-driven.",
        steps: [
          { title: "Lead generation", text: "Sphere of influence, referrals, open houses, Zillow leads. Little to no paid marketing budget." },
          { title: "Listing agreement & CMA", text: "Agent runs their own comparative market analysis to set list price; signs a 90–180 day exclusive right-to-sell." },
          { title: "MLS listing", text: "Agent (or a part-time assistant) inputs and syndicates to Zillow/Realtor.com/Redfin." },
          { title: "Showings", text: "Agent personally schedules and often personally conducts them via ShowingTime." },
          { title: "Offer & negotiation", text: "Buyer's agent submits via e-sign; listing agent negotiates directly, juggling multiple offers manually." },
          { title: "Escrow/title opened", text: "Earnest money deposited within 1–3 days; title company or attorney (in attorney-review states) opens the file." },
          { title: "Inspection", text: "Within 7–10 days of acceptance; agent negotiates repair credits directly." },
          { title: "Appraisal", text: "Ordered by the buyer's lender 1–2 weeks after contract." },
          { title: "Financing contingency", text: "Runs 30–45 days in parallel; agent personally chases the loan officer since there's usually no transaction coordinator." },
          { title: "Closing", text: "Final walkthrough 24–48 hrs prior; agent frequently attends in person." },
        ],
        roles:
          "The listing/buyer's agent is usually the same person handling CMA, negotiation, and paperwork. The broker-of-record reviews contracts for compliance but is light-touch. A transaction coordinator, if used at all, is outsourced by the agent directly (~$250–400/file), not provided by the brokerage. Title/escrow is an independent company or attorney; lender is the buyer's own mortgage broker — no in-house lending relationship to lean on.",
        timeline:
          "30–45 days financed, 14–21 days cash, offer to close. Closing Disclosure must land ≥3 business days before closing (TRID). With no dedicated transaction staff, this tier shows the highest timeline variance of any in brokerage.",
        tools:
          "Local MLS access; minimal CRM (spreadsheet or entry-tier Follow Up Boss); DocuSign or the state association's zipForm; Dotloop where bundled free through MLS/association membership; ShowingTime for scheduling. No dedicated marketing software beyond Canva.",
        moneyFlow:
          "National average combined commission is ~5.70% (≈2.88% listing / 2.82% buyer side). Since the 2024 NAR settlement, sellers no longer automatically pay the buyer's agent via MLS — buyer's-agent pay is now negotiated directly via a signed buyer-broker agreement, though it still averages ~2.34–2.4% in practice. New agents split 50/50 or 60/40 with the broker, rising to 70/30+ with tenure. On a $500,000 sale at 5.70%, each side nets $14,250 gross; a 70/30 agent nets ≈$9,975 before taxes and desk fees. Referral fees run 20–25% of commission. Paid at closing, off the settlement statement.",
        failurePoints: [
          "Agent overload — one person running CMA, marketing, negotiation and paperwork means dropped deadlines.",
          "Financing fall-through with no in-house lender relationship to problem-solve quickly.",
          "Weak negotiating leverage in multiple-offer or repair-negotiation situations.",
          "No backup — if the agent is out, the deal stalls; there's no team or TC covering it.",
          "Informal handshake repair agreements unravel before closing without a TC managing the paper trail.",
        ],
      },
      {
        key: "B",
        name: "Regional & Mid-Size Brokerages / Franchises",
        tag: "10–200 agents",
        color: TIER_COLOR.B,
        profile:
          "A managing broker plus office/sales managers oversee 10–200 agents across one or several branches — franchise offices (Coldwell Banker, RE/MAX, Berkshire Hathaway HomeServices, Keller Williams) or independent regional powerhouses. Coldwell Banker franchisees pay a 5–8% royalty to the parent brand; Compass, technically a single company rather than a franchise, pays no royalty and negotiates splits individually.",
        steps: [
          { title: "Lead generation", text: "Company-level paid ads, Zillow Flex/Premier Agent, IDX sites, referral networks, routed to agents via a broker-provided CRM (kvCORE) with automated drip follow-up." },
          { title: "Listing & CMA", text: "An in-house marketing coordinator preps comps and listing materials." },
          { title: "MLS listing & marketing", text: "Dedicated staff or outsourced photography/staging; broader syndication and a social/print package as part of the brand's value proposition." },
          { title: "Showings", text: "Coordinated via ShowingTime+, sometimes with a dedicated showing assistant on larger teams." },
          { title: "Offer & negotiation", text: "Submitted through the office's Dotloop/SkySlope platform; complex deals get a team-lead or broker review." },
          { title: "Escrow/title", text: "Many mid-size and franchise brokerages run an affiliated title/escrow joint venture (an \"ABA\"), a second revenue stream on top of commission." },
          { title: "Transaction coordination", text: "An in-house TC role becomes standard here, tracking deadlines and compliance across all parties." },
          { title: "Inspection, appraisal, financing", text: "Coordinated against a preferred-vendor network (inspectors, contractors, and often an affiliated lender) for faster turnaround." },
          { title: "Closing", text: "TC assembles the closing package; deadlines tracked with automated alerts in the transaction platform." },
        ],
        roles:
          "Listing/buyer's agent, often inside a team (lead agent + buyer's agents + admin) within the larger brokerage. A managing broker/branch manager oversees compliance and dispute resolution. A defined transaction coordinator and marketing/listing coordinator support the file. Title/escrow and lending are often affiliated business arrangements, disclosed per RESPA. Inspector/appraiser are still independent but drawn from a curated preferred list.",
        timeline:
          "Same residential norm — 30–45 days financed, 14–21 days cash, ~41 days average industry-wide — but hit far more reliably thanks to dedicated TC tracking through five stages: contract execution (days 1–4) → due diligence (4–10) → loan processing/appraisal (through ~day 25–30) → pre-closing prep → closing day. Listing prep (photography, staging) can add 3–7 days versus same-day at Tier A.",
        tools:
          "kvCORE for CRM/IDX/lead automation; Dotloop or SkySlope for transaction management; Brokermint or Lone Wolf back-office systems for commission tracking and compliance audit trails; ShowingTime+ for scheduling.",
        moneyFlow:
          "Franchise royalty (5–8% at Coldwell Banker) is taken before or after the agent split depending on policy. Agent/broker splits range 50/50 to 90/10 on anniversary-based tiers; Compass commonly lands 70/30 (new) to 90/10 (top producer) plus up to a 4% marketing fee. Desk/tech fees often add $100+/month beyond the split. Market commission still tracks the ~5.70% national average. Affiliated title/escrow/mortgage stakes add income the brokerage earns on top of the split. Referral fees run 20–25%, often routed through an in-house relocation department.",
        failurePoints: [
          "Franchise-fee friction driving agents to commission-cap brokerages (eXp, Real), causing recruiting churn.",
          "Affiliated-vendor conflicts of interest — steering clients to an in-house lender/title company without adequate RESPA disclosure.",
          "Coordination breakdowns between agent, TC, marketing coordinator and team lead if the transaction platform isn't used consistently.",
          "Higher price points bring more competitive-offer scenarios — escalation clauses and appraisal-gap coverage that can unravel a deal.",
        ],
      },
      {
        key: "C",
        name: "National / Institutional — Mega-Brokerages & iBuyers",
        tag: "CBRE / JLL / Cushman & Wakefield · Opendoor",
        color: TIER_COLOR.C,
        profile:
          "Two structurally different worlds share this tier. Commercial mega-brokerages (CBRE, JLL, Cushman & Wakefield, Colliers, Eastdil Secured) are publicly traded or major private firms brokering the sale of buildings and portfolios — from single-tenant assets to billion-dollar trades — plus leasing, valuation, capital markets, and property management. iBuyers (Opendoor, historically Zillow Offers) are publicly traded tech companies that buy and resell homes directly; Opendoor now runs a capital-light hybrid where ~35% of volume (Q4 2025) never touches its balance sheet — it matches sellers to a buyer with a cash-backup guarantee and earns a transaction fee instead. Opendoor processes 15,000–18,000 homes/year and holds roughly half to three-quarters of the entire iBuyer segment.",
        steps: [
          { title: "Origination/pitch (commercial)", text: "Senior brokers pitch for the listing mandate, sometimes in a formal \"broker bake-off\" against 2–3 rival firms." },
          { title: "Listing agreement / underwriting", text: "An exclusive mandate (commonly 6–12 months); analysts build the financial model and produce a polished Offering Memorandum plus a secure virtual deal room." },
          { title: "Marketing / bid process", text: "A structured bid process to a curated buyer list; NDAs signed for deal-room access; indications of interest, then a \"best and final\" LOI." },
          { title: "PSA & due diligence", text: "A heavily lawyer-driven purchase & sale agreement; due diligence commonly 30–60+ days, sometimes compressed to 15–21 days on competitive deals." },
          { title: "Financing & closing", text: "Buyer's debt, or the brokerage's own capital-markets team, arranged as a parallel, separately-fee-earning mandate; closing is document-intensive and attorney-managed." },
          { title: "iBuyer: offer request", text: "Seller enters address/details online, or arrives via the Zillow integration." },
          { title: "iBuyer: AI valuation & assessment", text: "An automated valuation model generates a preliminary offer in ~10 minutes (down from a full day of human review); an AI scoping tool or in-person inspector adjusts for condition." },
          { title: "iBuyer: close & disposition", text: "Seller picks a 14–60 day close window; Opendoor's in-house title/escrow closes it; the home is resold or, under the capital-light model, never taken onto the balance sheet at all." },
        ],
        roles:
          "Commercial: a senior broker holds the relationship; an associate/analyst team underwrites and builds the OM; a separate capital-markets team places debt for additional fee income; legal counsel on both sides is far more central than in residential; third-party environmental/structural/zoning consultants join during due diligence. iBuyer: the seller is nearly the only human in the loop — AI systems price and assess the home (Opendoor has cut underwriting staff per file from as many as 11 people to essentially one), with local referral agents sometimes touching the front end for a fee.",
        timeline:
          "Commercial: a mid-size asset commonly runs 4–9 months start to finish; large/complex portfolio deals a year or more. iBuyer: offer generation is now minutes rather than a day, with a seller-selected closing window of 14–60 days — far faster than either brokerage tier because there's no financing contingency, no showings, and no buyer-side inspection negotiation.",
        tools:
          "CoStar for market/property data, LoopNet for marketing syndication, Buildout or CREOP for OM production and deal rooms, commercial-specific CRMs (Ascendix, Apto) for long pipeline cycles. iBuyers run a fully proprietary, AI-native stack — automated valuation, AI home-scoping, and in-house title/escrow — not comparable to off-the-shelf residential tools.",
        moneyFlow:
          "Commercial: no standardized rate — roughly 4–6% under $1M, declining as deal size increases, sometimes to well under 1% on billion-dollar trades; a 50/50 co-brokerage split between listing and buyer/tenant-side firms; a ~60/40 broker/firm internal split; separate placement fees for the capital-markets team on the same deal. iBuyer: a service fee historically ~5% of home value plus ~1% closing costs, spread income on balance-sheet inventory, a transaction fee on capital-light matches, and referral fees paid to agents who bring in sellers.",
        failurePoints: [
          "Commercial: roughly 30% of CRE deals fall apart during due diligence — environmental surprises, title defects, liens, or rent-roll/financials that don't match reality — a risk amplified by compressed 15–21 day DD windows accepted to win competitive bids.",
          "Sellers refusing financing contingencies in hot markets, pushing buyers to have debt lined up before signing.",
          "PSA negotiation (indemnification, reps and warranties, holdback escrows) itself a common point of protracted delay.",
          "iBuyer: repair-deduction disputes — the single most common seller complaint when the final offer differs from the preliminary one.",
          "AVM mispricing risk at scale, and thinner per-file error-handling capacity as automation replaces human underwriters.",
        ],
      },
    ],
  },
  {
    id: "leasing",
    label: "Commercial Leasing",
    intro:
      "Landlords leasing office, retail, or industrial space to tenants. The deal is measured in LOIs, tenant-improvement dollars, and free-rent months rather than a single closing date — and the whole negotiation gets slower and more heavily lawyered as the buildings get bigger.",
    compare: [
      { label: "LOI → signed lease", a: "2–6 weeks", b: "4–8 weeks (up to 3 mo.)", c: "2–4+ months" },
      { label: "Full process (marketing → move-in)", a: "2–4 months", b: "4–9 months", c: "9–18+ months" },
      { label: "TI allowance", a: "$0–$20/sq ft or none", b: "$20–$60/sq ft", c: "$50–$100+/sq ft" },
      { label: "Free rent", a: "1–3 months", b: "3–6 months", c: "3–6+ months" },
      { label: "Buildout time", a: "4–12 weeks", b: "8–20 weeks", c: "6–12+ months" },
    ],
    tiers: [
      {
        key: "A",
        name: "Small Independent Landlords / Small Commercial Brokers",
        tag: "One building, or a handful of small properties",
        color: TIER_COLOR.A,
        profile:
          "An individual or small LLC owning a strip center, a small office building, or a few flex/industrial units — often family-owned. Leasing is outsourced to a local independent broker (2–20 agents) paid per-deal commission; owners self-manage or use a part-time property manager rather than an in-house department.",
        steps: [
          { title: "Marketing", text: "CoStar/LoopNet listing, a yard sign, word-of-mouth through the local broker community." },
          { title: "Tenant rep engagement", text: "Local one-person tenant-rep shops call the listing broker directly; deals are often sourced through personal relationships rather than an RFP." },
          { title: "Site tours", text: "Owner or listing broker personally walks the space, same-day scheduling." },
          { title: "LOI", text: "A short boilerplate template; days rather than weeks, since there's no corporate approval chain." },
          { title: "Negotiation", text: "Direct owner-to-tenant; owner has full authority to concede on the spot." },
          { title: "Credit underwriting", text: "Informal: a personal guarantee, a couple of bank statements, maybe a credit check." },
          { title: "Lease drafting", text: "A state-standard commercial form lightly modified by a local attorney." },
          { title: "TI negotiation", text: "Small or none; often \"as-is,\" tenant self-funds their own buildout." },
          { title: "Execution & buildout", text: "Signed directly, sometimes without lawyers on either side; tenant hires their own contractor with minimal landlord oversight." },
        ],
        roles:
          "Owner/landlord (also acting as asset manager), listing broker, tenant-rep broker (small local shop or solo), a local attorney engaged ad hoc, and a part-time property manager — often the owner's own spouse or employee. No dedicated construction/TI manager; landlord and the tenant's contractor coordinate informally.",
        timeline:
          "LOI to signed lease: 2–6 weeks — fast, because there's no institutional approval chain. Full marketing-to-move-in: 2–4 months. Basic buildout: 4–12 weeks.",
        tools:
          "CoStar or (more commonly at this tier) LoopNet; Excel or paper for deal tracking; simple QuickBooks-level accounting rather than Yardi/MRI.",
        moneyFlow:
          "Landlord pays the full commission — typically 4–6% of total lease value over the term — split roughly 50/50 with a tenant rep if one is involved, half at signing and half at occupancy. TI allowance, if offered at all, comes out of pocket. Free rent: 1–3 months typical, to offset a short buildout.",
        failurePoints: [
          "Owner underestimates buildout cost/timeline and eats overruns personally — no capital reserve.",
          "No formal credit underwriting raises default risk from marginal tenants who are hard to enforce a personal guarantee against.",
          "Non-standard lease language drafted without proper counsel creates ambiguity that surfaces later in CAM or maintenance disputes.",
          "Owner reveals financial pressure to the tenant during negotiation, giving away leverage.",
        ],
      },
      {
        key: "B",
        name: "Regional Property Owners / Mid-Size CRE Firms",
        tag: "Multiple buildings, several hundred thousand to a few million sq ft",
        color: TIER_COLOR.B,
        profile:
          "Firms like Lee & Associates, Voit Real Estate Services, or Klein Enterprises — privately held, a regional REIT, or a pension-backed operating partnership blending owned-asset rental income with third-party management/leasing fee income. Unlike Tier A, there's a real org chart: a dedicated leasing team, marketing department, and property management division.",
        steps: [
          { title: "Marketing", text: "Coordinated campaigns across the portfolio via CoStar/LoopNet, email blasts to a broker database, a marketing coordinator producing flyers and site plans." },
          { title: "Tenant rep engagement", text: "Regional tenant-rep teams submit RFPs through a leasing coordinator." },
          { title: "Site tours", text: "Scheduled through a leasing agent, coordinated with property management for building access; tenants often tour multiple properties in the landlord's portfolio the same day." },
          { title: "LOI", text: "A multi-page term sheet with real contingencies, drafted from a firm template and reviewed by transaction counsel." },
          { title: "Negotiation", text: "A leasing agent negotiates within parameters set by an asset manager or ownership committee; larger deals need sign-off above the agent's authority." },
          { title: "Credit underwriting", text: "Semi-formal: 2–3 years of financials, bank references, sometimes a credit-bureau pull; a security deposit or letter of credit for thin credit." },
          { title: "Lease drafting", text: "A firm-standard 30–60 page template with negotiated exhibits; landlord's attorney drafts, tenant's attorney redlines." },
          { title: "TI negotiation", text: "A real, budgeted allowance funded from a capital-improvement reserve." },
          { title: "Buildout & move-in", text: "A dedicated construction/TI manager tracks draws against the allowance; formal punch-list walkthrough and CO confirmation at handoff to property management." },
        ],
        roles:
          "Regional leasing agent/broker, tenant-rep broker (regional firm), a dedicated property manager (often on-site managing 2–4 buildings), an asset manager who sets deal economics across the portfolio, in-house or retained counsel on both sides, and a dedicated construction/TI manager tracking buildout.",
        timeline:
          "LOI to signed lease: 4–8 weeks, stretching to 3+ months with an approval committee or complex TI negotiation. Full process: 4–9 months. Buildout: 8–16 weeks standard, 16–20 weeks for complex spaces (restaurant, medical).",
        tools:
          "CoStar for comps and tenant intelligence; VTS increasingly the category-standard leasing-pipeline tool at this tier; Yardi or MRI for property management, accounting, and CAM reconciliation; portfolio-level Excel/BI dashboards for asset managers.",
        moneyFlow:
          "Landlord still typically pays the full 4–6% commission, split with the tenant's broker, half at execution and half at occupancy. TI allowance is a budgeted capital expense amortized into effective rent, with the landlord often controlling contractor approval. Free rent: 3–6 months, tied to a minimum lease-term commitment — often clawed back if the tenant defaults early.",
        failurePoints: [
          "Approval bottlenecks — deals stall waiting on asset-manager or legal sign-off while the tenant's timeline keeps moving.",
          "TI cost overruns — the tenant often controls the contractor while the landlord funds the allowance, creating change-order disputes.",
          "Credit-underwriting gaps versus institutional DSCR/NOI modeling can under-assess tenant risk on larger deals.",
          "Rent commencing before buildout finishes, since free-rent clocks run regardless of construction status.",
        ],
      },
      {
        key: "C",
        name: "Large Institutional Landlords / REITs / National Brokerages",
        tag: "Boston Properties, Vornado, SL Green · JLL / CBRE / Cushman & Wakefield",
        color: TIER_COLOR.C,
        profile:
          "Tens of millions of square feet, national or global. Boston Properties (BXP) alone runs a Class A office portfolio exceeding 54 million sq ft across gateway markets. Institutional landlords combine in-house asset management with either an in-house leasing team or an exclusive agency listing with a national brokerage (JLL/CBRE/C&W) per property or portfolio.",
        steps: [
          { title: "Marketing", text: "Branded campaigns: dedicated building websites, drone/3D tours, run jointly by the REIT's marketing team and the agency leasing team." },
          { title: "Tenant rep engagement", text: "National tenant-rep teams run competitive RFP processes across multiple buildings and cities at once, often driven by the tenant's own corporate real estate department." },
          { title: "Site tours", text: "Choreographed, sometimes involving executive leadership and multi-timezone coordination for portfolio deals." },
          { title: "LOI", text: "A heavily negotiated multi-page term sheet covering rent schedule, expansion/contraction rights, renewal options, termination rights, signage, and parking — redlined by legal on both sides before it's even non-binding." },
          { title: "Negotiation", text: "Involves the asset manager, legal counsel, and sometimes the REIT's leasing SVP; deals above a size threshold need investment-committee approval." },
          { title: "Credit underwriting", text: "Formal and quantitative: NOI contribution, DSCR, LTV impact, tenant credit ratings, lease guarantees, stress-tested against portfolio risk." },
          { title: "Lease drafting", text: "Bespoke leases, often 100+ pages with dozens of exhibits; weeks of redlines alone." },
          { title: "TI negotiation", text: "Large allowances with a detailed work-letter exhibit governing disbursement, contractor approval rights, and change-order protocol." },
          { title: "Buildout & move-in", text: "A dedicated construction/project-management team; landlord's-work vs. tenant's-work allocation; coordinated with building ops, security, and IT for large corporate move-ins." },
        ],
        roles:
          "An agency leasing director (national brokerage), a tenant-rep account team, a REIT asset manager who approves major decisions, a portfolio/regional leasing executive above certain deal thresholds, in-house and outside real estate counsel on both sides, a dedicated construction/TI project manager, and the tenant's own corporate real estate department for major occupiers.",
        timeline:
          "LOI to signed lease: 2–4+ months for large or complex deals. Full process: 9–18+ months for large office deals with substantial buildout in gateway markets. Buildout: 6–12+ months for trading floors, labs, or large corporate HQ floors.",
        tools:
          "CoStar for market intelligence at scale; VTS for enterprise-wide leasing-pipeline management across hundreds of simultaneous deals; Yardi Voyager for full lease administration integrated into the REIT's financial reporting; custom BI dashboards for investor relations and the board.",
        moneyFlow:
          "Still generally landlord-paid, 4–6% on a sliding scale (often a lower percentage on very large deals given sheer dollar volume), sometimes governed by a portfolio-wide master service agreement rather than deal-by-deal negotiation. TI allowances run $50–$100+/sq ft, funded from the capital budget or a construction loan, disbursed in draws against a tight work-letter exhibit. Free rent runs 3–6+ months and has grown more generous as over 265 million sq ft of office leases face expiration in 2025.",
        failurePoints: [
          "Multi-layered approval chains (asset manager → regional executive → investment committee) lose deals to more responsive competing landlords.",
          "Sophisticated tenant CRE departments and attorneys negotiate hard on expansion/termination rights, extending timelines by months.",
          "Large-scale buildout cost volatility makes overruns common; risk allocation between landlord's-work and tenant's-work becomes a major dispute point.",
          "Rent-commencement clauses that start regardless of buildout status create cash-flow disputes on delayed buildouts.",
          "Quarterly-earnings optics can push a REIT toward deals that look good short-term but carry more long-term concession risk.",
        ],
      },
    ],
  },
  {
    id: "development",
    label: "Development",
    intro:
      "Building new real estate from raw land. Every project moves through site selection → entitlement → design → financing → construction → certificate of occupancy — but the entitlement phase alone can be the difference between a 6-month project and a 20-year one.",
    compare: [
      { label: "Scale", a: "1–20 units/homes", b: "Dozens–hundreds of units, multiple projects", c: "Thousands of units, multi-decade megaprojects" },
      { label: "Capital stack", a: "Owner equity + 1 construction loan", b: "Senior debt + optional mezz + LP equity", c: "Senior debt, mezz, preferred equity, common equity" },
      { label: "Entitlement time", a: "3–12 months (usually by-right)", b: "6–18 months (often rezoning)", c: "2–4+ years (often full EIR)" },
      { label: "Acquisition → CO", a: "6–18 months", b: "2–4 years", c: "3–7+ yrs first phase; 10–20+ yrs full buildout" },
      { label: "Developer fee", a: "Informal, built into sale profit", b: "3–5% of total development cost", c: "Embedded fee + asset management fee" },
      { label: "Promote structure", a: "Rare / informal", b: "8% pref, 80/20 → 70/30", c: "8% pref, 80/20 → 70/30 → 60/40" },
    ],
    tiers: [
      {
        key: "A",
        name: "Small Local Developers / Builders",
        tag: "1–20 employees · 2–50 homes/year",
        color: TIER_COLOR.A,
        profile:
          "Often a single principal wearing multiple hats — developer, GC, and permit-runner at once. The majority of U.S. homebuilders (per NAHB) build fewer than 25 homes a year. Capital is personal savings, friends-and-family money, local hard-money lenders, and small community banks — spec construction loans here typically run a few hundred thousand up to $5M at 80–90% loan-to-cost, and lenders usually want 3+ completed homes in the prior 24 months for the best terms.",
        steps: [
          { title: "Site selection", text: "Developer personally scouts lots via MLS, county records, or driving neighborhoods." },
          { title: "Feasibility", text: "A DIY spreadsheet pro forma, a quick title check, and a conversation with the building department about by-right capacity." },
          { title: "Entitlement", text: "Usually by-right; a variance or conditional-use permit is the single biggest risk point at this tier." },
          { title: "Design", text: "A local architect or plan designer; structural/civil engineering outsourced piecemeal." },
          { title: "Financing", text: "A single spec construction loan or line of credit; little to no outside equity." },
          { title: "Permitting", text: "Direct, self-managed interaction with the local building department." },
          { title: "Construction", text: "The developer often acts as GC, self-managing subs directly." },
          { title: "Sales", text: "A local realtor or the builder sells directly; no formal leasing team." },
          { title: "CO & exit", text: "Final inspection sign-off; sale to an individual buyer or, less commonly, held as a rental." },
        ],
        roles:
          "Owner/builder in a dual developer-plus-GC role, a local real estate attorney engaged for the closing, an independent architect/plan designer, directly-hired subcontractors, a local bank loan officer or private lender, and the county building department.",
        timeline:
          "Land acquisition to CO: roughly 6–18 months for a single home or small infill project on by-right zoning; add 6–12 months if a variance or CUP is required.",
        tools:
          "Excel-based pro formas rather than ARGUS; QuickBooks for job costing; Buildertrend or CoConstruct rather than enterprise Procore; county GIS/parcel-viewer websites rather than paid GIS platforms.",
        moneyFlow:
          "A minimal stack — senior debt (the construction loan) plus the owner's own cash, no institutional equity or promote waterfall. Profit is simply sale proceeds minus all-in cost. Family/friend money, if used, is a simple fixed-interest note or an informal 50/50 profit split rather than a structured waterfall.",
        failurePoints: [
          "Undercapitalization — thin reserves mean one cost overrun or slow sale can be fatal.",
          "Zoning/variance surprises, with no land-use attorney pressure-testing entitlement risk before closing on land.",
          "Self-managed GC risk — subcontractor delays or quality issues with no professional GC layer.",
          "A single unsold spec home can wipe out thin margins, with no portfolio to absorb the hit.",
          "Personal-guarantee exposure — loans are typically personally guaranteed.",
        ],
      },
      {
        key: "B",
        name: "Regional Mid-Size Developers",
        tag: "Johnson Development, Jair Lynch, Pinnacle · 3–15 concurrent projects",
        color: TIER_COLOR.B,
        profile:
          "Tens to a few hundred employees running multiple concurrent deals across one region. Capital mixes the developer's own co-investment (5–15% of equity), outside equity from family offices or regional funds, and bank or debt-fund construction financing. Greystar sits at the very top edge of this tier given its 700,000+ managed units nationally.",
        steps: [
          { title: "Site selection", text: "A dedicated acquisitions team; land optioned or acquired under an extended due-diligence period contingent on entitlement feasibility." },
          { title: "Feasibility", text: "A formal, often outsourced market study, demographic/absorption analysis, and formal pro forma modeling." },
          { title: "Entitlement", text: "Often requires rezoning or a site plan approval; a land-use attorney is standard; 6–18 months typical, 2–3+ years for larger or contested projects." },
          { title: "Design", text: "A full architecture and engineering team coordinated by an in-house development manager." },
          { title: "Financing", text: "A real capital stack: a bank or debt-fund construction loan (~50–70% LTC) plus sponsor co-investment and outside LP equity, sometimes with mezzanine or preferred equity filling a gap." },
          { title: "Permitting", text: "A dedicated permit expediter or entitlements manager working multiple city departments in parallel." },
          { title: "Construction", text: "A licensed GC firm (outside or in-house) manages subs, overseen by the developer's construction manager." },
          { title: "Lease-up/presales", text: "A leasing team pre-leases 3–6 months before CO for multifamily, or a condo sales team runs presales the construction lender may require before loan closing." },
          { title: "Stabilization/exit", text: "Hold for cash flow, refinance into agency debt, or sell to an institutional buyer once stabilized (typically ~90%+ occupancy sustained for a period)." },
        ],
        roles:
          "Developer/sponsor and development team, a land-use attorney, an architect of record plus specialty engineers, a licensed GC and its project manager/superintendent, a regional bank or debt-fund construction lender, LP equity investors, city planning staff and council, a leasing/marketing or condo sales team, a third-party market-study consultant, and a property manager post-CO.",
        timeline:
          "Land to CO: roughly 2–4 years, driven mainly by entitlement (6–18+ months) plus design/permitting (6–12 months) plus construction (12–24 months for a mid-rise). Buildings with more than 20–25% commercial square footage fall outside agency (Fannie/Freddie) financing guidelines — a structural nuance affecting financing timeline on mixed-use deals specifically.",
        tools:
          "ARGUS Developer/Enterprise for underwriting and multi-phase cash-flow forecasting; Procore for construction management once in the build phase; Northspyre-style tools for cost/schedule tracking; GIS platforms and municipal zoning portals; LP-reporting platforms for outside investors.",
        moneyFlow:
          "Senior debt covers 50–70% of cost; mezzanine debt, if used, fills another 10–20%; sponsor co-investment plus LP equity covers the remaining 20–40%. Developer fee typically 3–5% of total development cost (higher on complex or affordable deals). Standard promote: LPs receive an 8% preferred return first, then an 80/20 LP/sponsor split up to a second hurdle (often 12–15% IRR), shifting to 70/30 or 60/40 in the sponsor's favor above that.",
        failurePoints: [
          "Entitlement delays compounding — a rezoning budgeted at 12 months stretching to 24+ raises carrying costs and can push the project into a worse financing environment.",
          "Cost overruns eating thin margins — a 10% construction-cost increase on a 15%-margin project can cut 200–300 bps off returns.",
          "Financing gaps at the construction-to-permanent transition if lease-up/absorption targets aren't hit.",
          "Presale/pre-lease contingencies not met, triggering default provisions in the construction loan.",
          "Overreliance on a single regional market means a local downturn hits the whole pipeline at once.",
        ],
      },
      {
        key: "C",
        name: "Large National / Institutional Developers",
        tag: "Hines · Related Companies · Lennar at scale",
        color: TIER_COLOR.C,
        profile:
          "Thousands of employees, billions under management, simultaneous development across multiple states or countries. Equity comes from pension funds, sovereign wealth funds, insurers, REITs, and large PE real estate funds; debt from syndicated bank facilities, life-company loans, and CMBS. Hines — $93.0B AUM — recently acquired nearly 3,000 acres near Katy/Fulshear, TX for a ~7,000-home master-planned community, partnering with 8 different homebuilders including Toll Brothers, Lennar, and Beazer while retaining ownership of the land — a signature \"one landowner, multiple builder-partners\" institutional pattern.",
        steps: [
          { title: "Land acquisition", text: "Large-scale land banking/assemblage, sometimes thousands of acres, years ahead of any vertical construction." },
          { title: "Feasibility", text: "Extensive multi-year master planning with outside urban planners, economists, and traffic engineers." },
          { title: "Entitlement", text: "The most complex tier: often a general plan amendment, rezoning, a specific/master plan, and frequently a full Environmental Impact Report; full EIR review runs 24–48 months, sometimes stretching to a decade for the most complex communities." },
          { title: "Design", text: "Master planning by a lead architecture/planning firm coordinated with dozens of specialty consultants, often phased into pods rather than one monolithic plan." },
          { title: "Financing", text: "A full institutional capital stack, often structured through a dedicated JV entity per project, with public financing tools (tax increment financing, municipal bonds) common on megaprojects." },
          { title: "Permitting", text: "Dedicated government-relations teams manage multi-year, multi-agency approvals, often including a negotiated development agreement covering infrastructure and public benefits." },
          { title: "Construction", text: "Phased over years/decades; the master developer typically builds infrastructure and sells or ground-leases finished parcels to builder-partners rather than constructing every building itself." },
          { title: "Leasing/pre-sales", text: "Sophisticated in-house or brokerage-partnered teams; major anchor tenants often signed before or during construction." },
          { title: "Stabilization", text: "Core assets held for cash flow via fund vehicles; non-core parcels sold, often the primary revenue mechanism throughout the project's life for a land developer like Hines." },
        ],
        roles:
          "A deep internal team spanning acquisitions, development, capital markets, and government relations; multiple land-use attorneys and lobbying specialists; a master-plan architect plus dozens of specialty consultants; multiple GCs per phase; institutional LPs; a capital-markets team arranging syndicated debt or bonds; planning commissions and city councils; homebuilder partners who buy finished lots; and community/public-affairs teams managing stakeholder relations over the project's multi-year life.",
        timeline:
          "Land acquisition to first CO: 3–7+ years for a major project's first phase; full buildout of a large master-planned community can span 10–20+ years across many phases. Entitlement alone can consume 2–4 years when a full EIR is required.",
        tools:
          "ARGUS Enterprise for portfolio-wide valuation and cash-flow forecasting; enterprise construction platforms deployed across multiple concurrent job sites; enterprise GIS for land assemblage and infrastructure planning; institutional-grade LP-reporting and fund-accounting systems; internal government-relations tracking for multi-year entitlement processes.",
        moneyFlow:
          "The full four-layer stack: senior debt ~50–60%, mezzanine debt ~10–20%, preferred equity ~10–25%, common equity ~20–35%. Fee structure often embedded in internal management/asset-management fees rather than a simple flat percentage. Promote follows the same logic as Tier B at larger dollar scale, often with more tiers — an 8% preferred return, then 80/20 up to a 12% IRR hurdle, 70/30 up to 15–20%, 60/40 above that.",
        failurePoints: [
          "A multi-year EIR/general-plan-amendment process is binary — a denial or litigation challenge can strand tens or hundreds of millions in sunk land and soft costs.",
          "Interest-rate and macro-cycle risk — a project conceived in one rate environment may execute years later in a completely different one.",
          "Capital structures with tight contingencies can break when rates, construction costs, or absorption deviate from the underwritten plan.",
          "Builder-partner slowdowns stall a land developer's parcel-sale revenue even as infrastructure costs continue.",
          "Political/regulatory shifts partway through a decade-long entitlement or buildout can force costly re-design or renegotiation.",
          "Losing a signed anchor tenant can undermine financing covenants tied to pre-leasing thresholds.",
        ],
      },
    ],
  },
  {
    id: "property-management",
    label: "Property Management",
    intro:
      "The ongoing operation of a rental property, once it's occupied. Marketing vacancies, screening tenants, collecting rent, fielding maintenance calls, and eventually evicting when it goes wrong. The management fee percentage falls as scale rises, but so does the human touch.",
    compare: [
      { label: "Units managed", a: "1–10", b: "Hundreds–low thousands", c: "Tens of thousands–1M+" },
      { label: "Management fee", a: "8–12% of rent", b: "4–7% of rent", c: "Negotiated, often <4% + incentive fees" },
      { label: "Software", a: "TurboTenant, Avail, TenantCloud", b: "AppFolio, Buildium", c: "Yardi Voyager, RealPage" },
      { label: "Vacancy → lease", a: "~41+ days (often longer)", b: "~30–41 days", c: "25–36 days (best markets)" },
      { label: "Maintenance markup", a: "0% (owner pays direct) or 10% if manager hired", b: "10–15%", c: "10–15% + national contract savings" },
      { label: "Biggest failure mode", a: "Weak screening, deferred maintenance", b: "Turnover cost creep, span-of-control strain", c: "Algorithmic/compliance risk at scale" },
    ],
    tiers: [
      {
        key: "A",
        name: "Small Independent Property Managers / Self-Managing Landlords",
        tag: "1 person · 1–10 units",
        color: TIER_COLOR.A,
        profile:
          "Most often the owner personally, managing a handful of single-family homes or a duplex/triplex/fourplex. If a manager is hired instead of self-managing: 8–12% of monthly rent (national average ~8.49%), or a flat ~$300/month, plus a leasing/placement fee of 50–100% of one month's rent. Largely \"mom-and-pop\" operators using consumer software like TurboTenant, Avail, Innago, or TenantCloud rather than hiring a manager at all.",
        steps: [
          { title: "Marketing", text: "Zillow, Craigslist, Facebook Marketplace, and low-cost listing syndication built into the owner's software; little to no paid advertising." },
          { title: "Screening", text: "A bundled online service (credit, criminal, eviction) through the software; the owner personally calls previous landlords and employers." },
          { title: "Lease signing", text: "A standard template with e-signature, plus property-specific addenda." },
          { title: "Move-in", text: "Owner personally walks through, photographs condition, collects deposit and first month's rent, hands over keys." },
          { title: "Rent collection", text: "An online payment portal, often the single reason small landlords adopt software at all." },
          { title: "Maintenance", text: "Owner personally fields requests and either does the work themselves or calls a small rotating list of trusted local contractors — no formal SLA." },
          { title: "Renewals", text: "An informal call or text 60–90 days before lease end." },
          { title: "Move-out", text: "Owner inspects, compares to move-in photos, decides deductions, and personally handles or hires local labor for the turn." },
          { title: "Eviction", text: "Handled ad hoc, often the landlord's biggest blind spot; may self-file or hire a local attorney only once nonpayment hits a breaking point." },
        ],
        roles:
          "Essentially one person — marketer, screener, leasing agent, bookkeeper, and maintenance dispatcher all at once. Occasional use of a handyman or a couple of trusted contractors per job. No regional manager, no dedicated accounting staff.",
        timeline:
          "Vacancy-to-lease is comparable to or slower than the ~41-day market average, since marketing reach is limited to free listing sites with no dedicated leasing staff. Turnover between tenants: 30–45 days, fit around a day job. Maintenance response: highly variable, from same-day to a week+ for non-urgent items.",
        tools:
          "TenantCloud, Avail, Innago, TurboTenant, Baselane, Hemlane — low-cost consumer platforms bundling listing syndication, applications, screening, e-signing, rent collection, and a basic maintenance portal. No enterprise accounting — often just the software's built-in ledger or a personal spreadsheet.",
        moneyFlow:
          "Rent flows directly from tenant to owner via the app's ACH rail — no management-company cut. If a manager is hired: 8–12% of collected rent monthly plus a leasing fee of 50–100% of a month's rent on placement. Maintenance: the owner pays contractors directly at cost, with no markup layer unless a hired manager applies the industry-standard 10% coordination markup.",
        failurePoints: [
          "Weak screening — no standardized criteria, prone to gut-feeling decisions that drive nonpayment and eviction risk.",
          "Deferred maintenance — cost or bandwidth pressure turns a small leak into mold remediation.",
          "No reserve fund for major CapEx (roof, HVAC), leading to under-repair or debt-financed emergency fixes.",
          "Legal exposure from DIY eviction filings and notice-period mistakes, since the owner rarely tracks current landlord-tenant law nuances.",
          "Burnout — as the \"day job plus landlord\" juggling act breaks down, communication lapses drive non-renewal.",
        ],
      },
      {
        key: "B",
        name: "Regional Property Management Companies",
        tag: "RAM Partners, WRH Realty, Carter-Haston · hundreds–low thousands of units",
        color: TIER_COLOR.B,
        profile:
          "Managing hundreds to a few thousand units across multiple properties in one region. Full-service scope — leasing, maintenance coordination, and financial operations bundled under one contract with the owner/investor. Management fees run 4–7% of rent for larger multifamily portfolios, lower than Tier A's percentage due to scale, plus separate leasing and renewal fees.",
        steps: [
          { title: "Marketing", text: "Dedicated on-site leasing agents, ILS syndication (Zillow, Apartments.com), paid digital ads, professional photography, on-site leasing offices." },
          { title: "Screening", text: "Standardized company-wide criteria in the PM software — typically 2.5–3x monthly rent in income, 620–650 minimum credit (700+ for luxury); a 1–5 business-day turnaround, with landlord reference checks the slowest step." },
          { title: "Lease signing", text: "Standardized company templates, e-signature, integrated with the PM software." },
          { title: "Move-in", text: "A documented condition report logged in the software, often with photos/video." },
          { title: "Maintenance", text: "Dedicated on-site/regional technicians plus a vendor bench, tracked in AppFolio/Buildium with tiered SLAs: ~1–2 hour response for emergencies, same-business-day for urgent, 24-hour acknowledgment for routine." },
          { title: "Renewals", text: "Notices sent 60–90 days out per company policy and state law; a regional manager benchmarks rent increases against comps." },
          { title: "Move-out/turnover", text: "A formal make-ready checklist executed by an in-house or contracted crew, targeting 25–30 days against a 41-day national average." },
          { title: "Eviction", text: "An in-house or contracted attorney runs the formal process: notice (3–14 days for nonpayment) → filing → hearing (~3 weeks after filing) → judgment → possible appeal window → sheriff-executed removal." },
        ],
        roles:
          "A site-level property manager, leasing agents/consultants, on-site or floating maintenance technicians, a regional property manager overseeing multiple site managers (e.g. ~1,500 units across a submarket) responsible for budgeting and compliance, centralized accounting/bookkeeping at the regional office, and vendors under standing service contracts.",
        timeline:
          "Vacancy-to-lease near the national average of ~41 days, with better operators targeting 25–30. Full single-family/small-multifamily turnover often costs 1.5–2x monthly rent when vacancy, make-ready, marketing, and leasing fees are combined ($1,750–$5,000 per unit), targeted under 30 days for a well-run operation.",
        tools:
          "AppFolio is the dominant mid-market platform at this tier — leasing, screening, accounting, and maintenance ticketing in one system, well suited to 50 units up to several thousand. Buildium is also common, skewing toward the smaller end of \"regional.\" Integrated screening via TransUnion SmartMove or similar.",
        moneyFlow:
          "Owner pays 4–7% of collected rent monthly, plus a leasing fee per new lease and a renewal fee ($100–$350 flat or 25–50% of a month's rent). Maintenance carries the industry-standard 10–15% markup on vendor invoices for coordination (anything above 15% or undisclosed is a red flag). Net effect: landlords typically pay 18–20% of gross rent in year one, dropping to ~12% on renewal.",
        failurePoints: [
          "Deferred preventive maintenance at scale — a 250-unit property could lose $8,640–$12,960/year in wasted utility costs from unmaintained HVAC alone.",
          "Turnover cost creep — $2,000–$5,000+ per unit erodes owner NOI if not tightly managed even with formal processes.",
          "Up to 31% of non-renewals nationally tie back to maintenance delays or poor communication.",
          "Increasingly sophisticated application fraud can slip through standardized screening if reference verification is rushed.",
          "Regional-manager span-of-control strain as portfolios outgrow what one manager can effectively oversee for compliance and quality control.",
        ],
      },
      {
        key: "C",
        name: "Large Institutional Property Management Operations",
        tag: "Greystar · RPM Living · Asset Living · CBRE / JLL",
        color: TIER_COLOR.C,
        profile:
          "Tens of thousands to over a million units, operating nationally or globally. Greystar alone manages more than 1.1 million units and beds worldwide (946,000+ U.S. apartment units per the 2025 NMHC 50 ranking) across ~260 markets, with affiliated companies operating roughly $350B of real estate plus a $79B institutional investment platform. Fees compress further here — often bespoke contracts combining a base fee, incentive fees tied to NOI/occupancy, leasing commissions, and construction-management fees rather than a simple percentage of rent.",
        steps: [
          { title: "Marketing", text: "Enterprise-grade, algorithmic yield-management pricing (similar to airline/hotel revenue management), centralized digital marketing, and cross-platform syndication managed portfolio-wide rather than site-by-site." },
          { title: "Screening", text: "Fully automated pipelines in Yardi/RealPage with fraud-detection layers, enforcing the same 2.5–3x income / 620–650 credit thresholds as Tier B with zero manual override at the site level." },
          { title: "Lease signing", text: "Fully digital, standardized national lease forms with jurisdiction-specific addenda auto-generated by the platform." },
          { title: "Rent collection", text: "Centralized enterprise payment rails, automated late-fee workflows, portfolio-wide bank reconciliation." },
          { title: "Maintenance", text: "Centralized CMMS ticketing with the same tiered SLAs as Tier B but monitored via portfolio-wide dashboards and vendor-performance scorecards; national master service agreements for scale pricing." },
          { title: "Renewals", text: "Automated renewal-offer generation driven by revenue-management algorithms analyzing comps, seasonality, and payment history, rather than a manager's judgment call." },
          { title: "Move-out/turnover", text: "Standardized, often outsourced-at-scale make-ready operations with national paint/flooring vendor contracts and portfolio-wide KPI benchmarking." },
          { title: "Eviction", text: "Dedicated in-house legal/compliance teams or high-volume law-firm partners running jurisdiction-specific playbooks across many states simultaneously as laws change." },
        ],
        roles:
          "On-site managers and leasing teams at each community, maintenance supervisors and technicians (often under national service contracts), regional managers/VPs overseeing clusters of properties, and — distinctly institutional — an asset manager representing the ownership/investment side, to whom the property manager reports. Centralized corporate functions include revenue-management analysts, marketing, compliance/legal, procurement, and a corporate C-suite.",
        timeline:
          "Vacancy-to-lease typically outperforms the 41-day national average thanks to revenue-management tools and always-on marketing, though it still varies by market (33–36 days in competitive markets like Manhattan/Brooklyn; 60+ days in softer Class C markets). Turnover: best-in-class operators benchmark to 25–30 days or better, tracked as a hard portfolio-wide KPI.",
        tools:
          "Yardi Voyager and RealPage dominate — built for large-scale accounting and portfolio-wide reporting across tens of thousands of units. Revenue-management/pricing engines (RealPage AI Revenue Management) drive dynamic pricing and automated renewal offers. Centralized BI dashboards feed asset managers and investors.",
        moneyFlow:
          "Fees are negotiated per-contract rather than following the simple residential percentage model — often lower than Tier B's percentage given scale, sometimes structured with incentive fees tied to NOI growth or occupancy targets, plus separate leasing and construction-management fees. Maintenance markup still applies at the vendor level (10–15%), but national contracts and self-insurance/self-maintenance programs capture savings Tier A/B can't access.",
        failurePoints: [
          "Scale amplifies small errors — a flawed automated screening rule can misfire across thousands of units simultaneously.",
          "Depersonalization — centralized call centers can create the exact \"poor communication\" complaints that drive non-renewal, even when SLA dashboards look good.",
          "Algorithmic pricing backlash — dynamic-pricing software (RealPage in particular) has faced antitrust scrutiny and litigation alleging coordinated rent-setting among large operators.",
          "Deferred maintenance at scale compounds into large deferred-CapEx backlogs that surface in asset valuations.",
          "Compliance complexity across dozens or hundreds of jurisdictions — a gap in even one market creates legal exposure across many properties at once.",
        ],
      },
    ],
  },
  {
    id: "investment",
    label: "Investment / Acquisition",
    intro:
      "Buying existing income-producing property as an investment — not building new, but acquiring an apartment complex, office building, or shopping center to hold, improve, and eventually exit. The workflow is the same shape at every tier; what changes is who's underwriting it and how the profit gets split.",
    compare: [
      { label: "Deal size", a: "<$1M–$2M", b: "$5M–$50M", c: "$100M+" },
      { label: "Equity source", a: "Personal capital, small syndication", b: "Accredited investors, family offices", c: "Pension funds, sovereign wealth, insurers" },
      { label: "Underwriting tool", a: "Excel / Google Sheets", b: "Excel, sometimes ARGUS", c: "ARGUS Enterprise, proprietary systems" },
      { label: "Due diligence period", a: "~1–2 weeks", b: "30–60 days", c: "30–120+ days" },
      { label: "Leverage", a: "75–80%", b: "65–75%", c: "50–65% (or all-cash)" },
      { label: "Sponsor promote", a: "Informal / none", b: "20–30% above 6–9% pref", c: "20% above 8% pref" },
      { label: "Hold period", a: "5–10+ years", b: "3–7 years", c: "3–10+ yrs / perpetual (core)" },
    ],
    tiers: [
      {
        key: "A",
        name: "Individual / Small Investors",
        tag: "Solo or 2–5 person partnerships · 1–20 units",
        color: TIER_COLOR.A,
        profile:
          "Largely unbranded operators — local \"we buy houses\" investors, small property-management-affiliated buyers, BiggerPockets-style DIY syndicators. Capital comes from personal savings, W-2 income, home-equity lines, conventional 20–25%-down mortgages, hard money for rehab, and small \"friends & family\" syndications with $10K+ minimum checks pooled from a handful of passive investors.",
        steps: [
          { title: "Deal sourcing", text: "MLS, LoopNet, Crexi, driving for dollars, wholesalers, off-market networking, direct mail to owners." },
          { title: "Initial underwriting", text: "A simple Excel/Sheets pro forma: cap rate, cash-on-cash return, the \"1% rule,\" rent comps from Zillow/Rentometer." },
          { title: "Offer", text: "Often skips a formal LOI, going straight to a purchase & sale agreement with an inspection contingency on a standard state form." },
          { title: "Due diligence", text: "A home/property inspection, a basic title search, rent-roll verification for multifamily; rarely a Phase I environmental or full legal review." },
          { title: "Financing", text: "A conventional mortgage (up to 4 units), a small-balance commercial/multifamily loan (5+ units), or hard money for rehab under the BRRRR method." },
          { title: "Closing", text: "A title company or attorney closes in 30–45 days." },
          { title: "Asset management", text: "Self-managed or a local third-party manager at 8–10% of rent; the investor personally handles leasing, maintenance calls, and bookkeeping." },
          { title: "Disposition", text: "Held long-term for cash flow/appreciation, sold via a 1031 exchange to defer taxes, or refinanced-and-held under BRRRR rather than sold." },
        ],
        roles:
          "The buyer/investor does most roles themselves, alongside a real estate agent, a mortgage loan officer, a home/property inspector, a title company or closing attorney, an appraiser, a contractor for rehab, a property manager, and occasionally 1–2 passive co-investors.",
        timeline:
          "Sourcing to contract: days to a few weeks. Contract to close: 30–45 days with conventional financing. Hold period: often 5–10+ years for buy-and-hold, or 6–12 months for a BRRRR flip/refinance cycle.",
        tools:
          "Excel/Google Sheets; Zillow/Redfin/Rentometer for comps; LoopNet/Crexi/MLS for sourcing; Stessa or Landlord Studio for bookkeeping; DocuSign for contracts.",
        moneyFlow:
          "Typically 75–80% debt (conventional or small commercial) to 20–25% equity, mostly the investor's own cash. No formal promote in most solo deals — profit is 100% to the owner-operator. If informally syndicated: a simple split (e.g. the manager takes a flat fee or 20% of profits, passive partners take 80%) — far less formal than an institutional waterfall.",
        failurePoints: [
          "Underestimating capex/deferred maintenance (roofs, HVAC, plumbing) discovered post-close.",
          "Overestimating achievable rents versus true market comps.",
          "Financing falling through due to appraisal gaps or DTI issues.",
          "Self-management burnout and poor tenant screening leading to vacancy and eviction costs.",
          "No reserve fund for vacancy or unexpected repairs, causing cash-flow shortfalls.",
        ],
      },
      {
        key: "B",
        name: "Regional Investment Firms / Small PE Real Estate Funds",
        tag: "Origin Investments, FNRP, BAM Capital · $5M–$50M deals",
        color: TIER_COLOR.B,
        profile:
          "5–50 employees raising single-asset or small blind-pool funds ($10M–$100M committed). Capital comes from high-net-worth and accredited investors via Reg D syndications, family offices, and occasional regional bank debt or pension co-investment at the top of this range.",
        steps: [
          { title: "Deal sourcing", text: "Broker relationships (CBRE, JLL, Marcus & Millichap regional offices), CoStar/Crexi listings, off-market owner outreach, repeat sellers." },
          { title: "Initial underwriting", text: "An acquisitions analyst builds a detailed Excel pro forma (T-12 financials, rent roll, comps, a 12–18%+ IRR hurdle); an investment committee approves the pursuit." },
          { title: "LOI/offer", text: "A non-binding LOI, then a negotiated PSA with a 1–3% earnest deposit and a due-diligence contingency period." },
          { title: "Due diligence (30–60 days)", text: "Financial (T-12 tie-out, lease audit), physical (property condition assessment, Phase I environmental), and legal (title, zoning, estoppel certificates, litigation search)." },
          { title: "Negotiation", text: "Price/credit renegotiation based on DD findings, commonly a 2–5% price reduction or seller credit for deferred capex." },
          { title: "Financing", text: "A mortgage broker or in-house capital-markets team shops the loan to banks, agency lenders, CMBS, or debt funds at 60–75% LTV/LTC." },
          { title: "Closing", text: "Attorneys and title/escrow close; equity is called from LPs shortly before closing." },
          { title: "Asset management", text: "An in-house or third-party asset manager executes the business plan (renovations, lease-up, rent growth) with quarterly investor reporting." },
          { title: "Disposition", text: "A 3–7 year target hold (value-add) or 5–10 years (core-plus); sold via a broker marketing process, sometimes 1031-rolled into the next fund." },
        ],
        roles:
          "A managing partner/principal (GP), an acquisitions associate/analyst, an asset manager, a property manager, a capital-markets/debt broker, sell-side and buy-side brokers, third-party PCA/environmental inspectors, an appraiser, real estate and fund counsel, an investor-relations manager, and limited partners.",
        timeline:
          "Sourcing to LOI: 1–4 weeks. LOI to closing including DD: 45–90 days. Hold period: 3–7 years typical for value-add syndications, sometimes extended in soft markets.",
        tools:
          "Proprietary Excel underwriting models (sometimes ARGUS for larger/office assets), CoStar and Crexi for sourcing and comps, Yardi or AppFolio for property/portfolio management, and investor-relations platforms (Juniper Square, InvestNext, Covercy) for capital calls and distributions.",
        moneyFlow:
          "A typical stack is 65–75% debt to 25–35% equity. Fee structure: an acquisition fee ~1–2% of purchase price at closing, an asset-management fee 1–2% of equity annually, and a disposition fee ~0.5–1% of sale price. Waterfall: a 6–9% cumulative preferred return to LPs first, then return of capital, then a 70/30 or 80/20 LP/GP split above the pref — sometimes stepping the GP's promote up to 30–40% above a second, higher IRR hurdle.",
        failurePoints: [
          "Cap-rate expansion between underwriting and exit compresses value even when NOI grows as planned.",
          "Renovation/lease-up timelines slip, delaying projected rent bumps and raising carrying costs.",
          "Bridge-loan floating-rate exposure — rate caps expiring or a tightened refinancing market.",
          "Incomplete documentation or estoppels stall or kill a large share of CRE transactions.",
          "Overly aggressive rent-growth or expense assumptions discovered wrong during DD or post-close.",
          "LP capital calls not fully funded, delaying or killing the deal.",
        ],
      },
      {
        key: "C",
        name: "Large Institutional Investors",
        tag: "Blackstone, Starwood Capital, Brookfield · $100M+ deals",
        color: TIER_COLOR.C,
        profile:
          "Multi-billion-dollar global platforms — Blackstone Real Estate alone runs $187B+ AUM; Starwood Capital has deployed $63B+ since inception. Capital comes from public and private pension funds, sovereign wealth funds, insurers, endowments, and institutional LPs in closed-end and open-end funds. A landmark example: the 2021 Blackstone/Starwood 50-50 JV acquisition of Extended Stay America for ~$6B all-cash.",
        steps: [
          { title: "Deal sourcing", text: "Proprietary broker relationships at the top of the market (CBRE Capital Markets, Eastdil Secured), direct owner relationships, platform acquisitions, and occasional public-company take-privates." },
          { title: "Initial underwriting", text: "A dedicated acquisitions team builds institutional-grade models, often in ARGUS Enterprise for lease-level DCF, supplemented by proprietary Excel/Python models with scenario and stress testing built in." },
          { title: "LOI/offer", text: "Often a competitive bid/auction run by an investment bank; non-binding indications of interest, then a shortlist submits binding bids under limited exclusivity." },
          { title: "Due diligence (30–90+ days)", text: "Parallel workstreams across a full financial audit (sometimes with Big 4 support), comprehensive Phase I/II environmental, property-condition assessments across every asset, extensive legal/title review, and REIT/tax-structuring review." },
          { title: "Negotiation", text: "Sophisticated deal teams with dedicated counsel; reps-and-warranties insurance increasingly used to smooth liability allocation; JV agreements negotiated in parallel for co-investments." },
          { title: "Financing", text: "In-house capital-markets teams negotiate directly with banks, CMBS conduits, and life insurers; large deals are often syndicated among multiple lenders or structured with mezz/preferred tranches; sometimes all-cash for competitive speed." },
          { title: "Closing", text: "Large legal teams and title underwriters coordinate across jurisdictions for portfolio deals; regulatory approvals (HSR antitrust, foreign-investment review) may apply on large deals." },
          { title: "Asset management", text: "Dedicated in-house platforms run active value-creation plans (capex, repositioning, ESG retrofits, operational efficiency), reporting quarterly to LPs." },
          { title: "Disposition", text: "Exit via public market (IPO/REIT spin-off), sale to another institution, recapitalization, or hold; core funds may hold indefinitely, opportunistic funds target 3–7 year exits within a defined fund life." },
        ],
        roles:
          "Managing directors and an acquisitions team (VPs, associates, analysts), a dedicated asset-management team, in-house and outside counsel, a capital-markets/debt team, investment-bank intermediaries, appraisers and environmental/engineering consultants, Big 4 due-diligence teams, an investor-relations team managing institutional LPs, portfolio/risk management, and ESG/sustainability officers.",
        timeline:
          "Sourcing/bid to signed agreement: a competitive multi-week bid process (2–8 weeks). Signing to closing including DD, financing, and regulatory approval: 60–120+ days for large or complex deals. Hold period: strategy-dependent — perpetual for core, 7–10+ years for core-plus, 3–7 years for value-add/opportunistic within a closed-end fund's life.",
        tools:
          "ARGUS Enterprise — the institutional standard, taught at 200+ universities and used in 100+ countries — for lease-level DCF; proprietary portfolio management and risk systems; Yardi Investment Suite and Forbury for portfolio workbooks; institutional-grade investor-reporting platforms; Bloomberg/S&P Capital IQ for capital-markets data.",
        moneyFlow:
          "Often 50–65% debt to 35–50% equity on core-quality assets (more conservative leverage than mid-market, though opportunistic strategies run higher) — sometimes all-cash on marquee assets for competitive advantage. Closed-end funds carry an ~8% compounding preferred return before any promote, full LP capital return, a 100% GP catch-up, then an 80/20 LP/GP residual split. Management fees run 1–2% of committed capital annually at the fund level, plus per-deal acquisition and disposition fees.",
        failurePoints: [
          "Even sophisticated buyers get hit at scale — Blackstone's Cedar Dublin office portfolio (€535M, 2019) was written down to zero equity value within a year amid a market shift.",
          "Interest-rate shifts mid-hold materially affect refinancing and exit values across an entire portfolio simultaneously.",
          "Regulatory/antitrust delays on large take-private-style transactions extend timelines and introduce deal risk.",
          "Concentration risk — a single mistimed acquisition or portfolio-wide tenant issue has outsized effect given deal size.",
          "JV partner misalignment on strategy, timing, or capital calls in co-investment structures.",
          "Macro cycle timing — buying near a market peak exposes the position to cap-rate expansion once rates rise.",
        ],
      },
    ],
  },
];
