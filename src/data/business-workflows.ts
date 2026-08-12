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
  {
    id: "trades",
    name: "Trades / Home Services",
    emoji: "🔧",
    status: "live",
    tagline: "5 workflows mapped — residential service, new construction, commercial contracts, emergency service, membership plans",
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
          "Local MLS access; minimal CRM (spreadsheet or entry-tier Follow Up Boss, ~$69/user/month, praised for deep integrations without an all-in-one suite's bloat); DocuSign or the state association's zipForm; Dotloop where bundled free through MLS/association membership; ShowingTime for scheduling. Emerging: cheap generative-AI tools (ChatGPT/Claude for listing copy, Restb.ai for photo tagging, CubiCasa for AI floor plans from a phone walkthrough) are filling the marketing-labor gap a solo agent can't staff for.",
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
          "kvCORE (now BoldTrail, $500+/month at brokerage scale) for CRM/IDX/lead automation; Dotloop or SkySlope for transaction management; Brokermint or Lone Wolf back-office systems for commission tracking and compliance audit trails; ShowingTime+ for scheduling. Gap: fraud in transaction documents is underserved at this tier — screening-focused tools like Snappt and Findigs are starting to migrate upmarket from leasing into transaction-doc fraud detection.",
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
          "CoStar for market/property data, LoopNet for marketing syndication, Buildout or CREOP for OM production and deal rooms, commercial-specific CRMs (Ascendix, Apto) for long pipeline cycles. iBuyers run a fully proprietary, AI-native stack — Opendoor's shift from ~11 human underwriters per file to roughly one AI-assisted underwriter is the emblematic case, and generalized platforms like Archer, Blooma, and Henry.ai now offer similar automated valuation/document extraction to institutions that don't build in-house. Gap: as AI-driven pricing scales, regulatory/fair-housing scrutiny of that pricing (paralleling the RealPage situation in leasing) has no mature compliance-tooling answer yet.",
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
          "CoStar or (more commonly at this tier) LoopNet; Excel or paper for deal tracking; simple QuickBooks-level accounting rather than Yardi/MRI, since VTS Lease (~$20K/year) and CoStar enterprise pricing ($1,000–5,000+/month) are cost-prohibitive here — small landlords lean on Hemlane or SOFT4Spaces instead. Gap: CAM reconciliation and escalation-clause math is where lightweight tools fall apart; no affordable purpose-built CAM engine exists below the CoStar/VTS price tier.",
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
          "CoStar for comps and tenant intelligence; VTS increasingly the category-standard leasing-pipeline tool at this tier; Yardi (Smart Lease in Voyager 8) or MRI for property management, accounting, and CAM reconciliation. Emerging: AI lease abstraction now cuts abstraction time from 4–8 hours to 15–30 minutes at 95–99% accuracy, giving mid-size firms institutional-grade lease intelligence without a big implementation lift — though dedicated platforms like Prophia are still priced mostly for larger portfolios, leaving a mid-market adoption gap.",
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
          "CoStar for market intelligence at scale; VTS for enterprise-wide leasing-pipeline management across hundreds of simultaneous deals; Yardi Voyager for full lease administration integrated into the REIT's financial reporting; custom BI dashboards for investor relations and the board. Gap/controversy: the RealPage antitrust matter is live in this tier's adjacent property-management software — DOJ's Nov 2025 settlement bars RealPage from training on non-public forward-looking lease data, and class-action settlements have topped ~$360M, creating real uncertainty for how algorithmic pricing tools can operate going forward.",
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
          "Excel-based pro formas rather than ARGUS; QuickBooks for job costing; Buildertrend or CoConstruct rather than enterprise Procore; county GIS/parcel-viewer websites rather than paid GIS platforms. Emerging: Northspyre is right-sized for 1–3 concurrent projects — owner-side cost tracking and draw automation without Procore's implementation burden. Gap: no single affordable tool spans acquisition underwriting through construction cost control, so small developers still stitch together spreadsheets, Northspyre, and manual lender draw packages.",
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
          "ARGUS Developer/Enterprise for underwriting and multi-phase cash-flow forecasting; Procore for construction management once in the build phase (its owner-side cost forecasting is explicitly weaker than dedicated tools, so Northspyre is increasingly bolted on alongside it); GIS platforms and municipal zoning portals; LP-reporting platforms for outside investors. Gap: real-time change-order/cost-overrun prediction — vs. after-the-fact reporting — is the frontier; a 5% overrun on a $50M project is $2.5M, and most tools still report variance rather than predict it.",
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
          "ARGUS Enterprise for portfolio-wide valuation and cash-flow forecasting; Procore deployed across multiple concurrent job sites; Northspyre also serving portfolio-scale developers wanting cross-project cost analytics; enterprise GIS for land assemblage; institutional-grade LP-reporting and fund-accounting systems. Gap: AI-native deal-sourcing/site-selection tools (comparable to Reonomy/CompStak for acquisitions) are far less mature on the development side — predictive entitlement-risk and zoning-change tools remain nascent, mostly proprietary in-house builds rather than off-the-shelf products.",
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
          "TenantCloud, Avail, Innago, TurboTenant, Baselane, Hemlane — low-cost consumer platforms bundling listing syndication, applications, screening, e-signing, rent collection, and a basic maintenance portal. Gap: tenant-screening fraud is a real and growing problem at this tier — 93% of multifamily operators report application fraud, and over 70% don't catch it until after move-in; Snappt and Findigs (forged pay-stub/bank-statement detection) lead here, but per-screen cost still limits adoption among small landlords.",
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
          "AppFolio is the dominant mid-market platform at this tier — leasing, screening, accounting, and maintenance ticketing in one system, well suited to 50 units up to several thousand. Buildium is also common, skewing toward the smaller end of \"regional.\" Emerging: AI-native \"PM assistant\" startups like EliseAI ($2.2B valuation, $250M raised in 2025) are moving into this tier's white space — handling tenant communications, tours, and lease audits — because AppFolio/Buildium's automation is still largely rules-based, not conversational-AI-native.",
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
          "Yardi Voyager and RealPage dominate — built for large-scale accounting and portfolio-wide reporting across tens of thousands of units. RealPage AI Revenue Management drives dynamic pricing and automated renewal offers. Controversy/gap: RealPage's algorithmic rent-pricing is under a Nov 2025 DOJ consent decree barring it from using competitors' non-public data or training on active/forward lease data; challenger Rentana (AI-native, $5M seed, ex-Stripe/Airtable/Airbnb founders) is positioning itself as a \"clean\" alternative built to avoid RealPage's specific data-sharing practices.",
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
          "Excel/Google Sheets; Zillow/Redfin/Rentometer for comps; LoopNet/Crexi/MLS for sourcing; Stessa or Landlord Studio for bookkeeping; DocuSign for contracts. ARGUS and CoStar are overkill/unaffordable at this tier, so Reonomy and CompStak fill the off-market sourcing/comps gap, and CashFlow Portal (~$99/month) covers fund-admin for informal syndications. Emerging: PropLab (address-to-offer in ~60 seconds) and Primer (AI document extraction into Excel models) are new entrants targeting exactly this price-sensitive segment that can't justify ARGUS Enterprise licensing.",
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
          "Proprietary Excel underwriting models (sometimes ARGUS for larger/office assets), CoStar and Crexi for sourcing and comps, Yardi or AppFolio for property/portfolio management. InvestNext (~$499/month) has become the clear challenger to Juniper Square at this tier — strong usability and automated capital calls/distributions at roughly a third of Juniper Square's cost; Covercy is also notable, combining banking with investment management. Gap: deal-level underwriting still often lives in spreadsheets even where fund administration is modernized — Blooma and Dealpath are starting to bridge this for sponsors who outgrow manual models.",
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
          "ARGUS Enterprise — the institutional standard, taught at 200+ universities and used in 100+ countries — for lease-level DCF; Yardi Investment Suite and Forbury for portfolio workbooks; Juniper Square remains the fund-administration platform of record, and its April 2026 acquisition of Sightglass (AI-native due-diligence-questionnaire automation) shows the incumbent moving AI-native itself. Gap: portfolio-level AI asset management is the frontier — Cambio ($100M valuation, $18M raised) is a notable new entrant building the analytics layer ARGUS Enterprise doesn't natively provide.",
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

export const tradesWorkflows: WorkflowType[] = [
  {
    id: "residential-service",
    label: "Residential Service & Repair",
    intro:
      "The classic \"something's broken, call a plumber/electrician/HVAC tech\" job. A one-visit diagnose-and-fix workflow that scales from a solo truck to a PE-backed national platform — where the ticket size, the pricing discipline, and the software stack all change dramatically by tier.",
    compare: [
      { label: "FSM software", a: "Housecall Pro, Jobber, Service Fusion ($25–$250/mo)", b: "FieldEdge, Successware, or entry ServiceTitan ($200–$500+/tech/mo)", c: "ServiceTitan enterprise, custom BI layers" },
      { label: "Lead sources", a: "Referral, Angi/Thumbtack, Google Business Profile", b: "Google LSA, Angi/Thumbtack, paid search, SEO", c: "National paid media, centralized call center, brand SEO" },
      { label: "Avg ticket", a: "~$315, unstructured pricing", b: "$300–$600 service; $6K–$15K install", c: "20–35% higher via price-book discipline" },
      { label: "Tech pay", a: "Hourly ($25–$55/hr)", b: "Hybrid hourly + flat-rate spiffs", c: "Standardized flat-rate book + KPI bonuses" },
      { label: "Top failure point", a: "No dispatch/CRM discipline, ad hoc pricing", b: "Point-solution fragmentation, CSR call-booking leaks", c: "Post-acquisition integration debt, brand dilution" },
    ],
    tiers: [
      {
        key: "A",
        name: "Solo Tradesperson / Small Local Shop",
        tag: "1–5 techs, 1–4 trucks",
        color: TIER_COLOR.A,
        profile:
          "Owner-operator up to a small crew of 2–5 techs. Owner is often still doing service calls, plus running dispatch, sales, and books from a truck cab or kitchen table. Revenue model is straight time-and-materials or a simple flat-rate book; annual revenue typically $150K–$1.5M. Examples: independent one-truck plumbers/electricians, a local \"Joe's HVAC,\" or a brand-new single-territory franchisee before it scales. Margins are thinnest here because volume is low and overhead is proportionally heavy.",
        steps: [
          { title: "Lead comes in", text: "Phone call to the owner's cell, a referral, Google/Yelp search, Nextdoor, or a bought lead from Angi/Thumbtack/HomeAdvisor." },
          { title: "Booking", text: "Owner (or spouse/part-time admin) answers directly, negotiates a window verbally, texts a confirmation — often literally a paper calendar or shared Google Calendar." },
          { title: "On-site visit", text: "Tech (often the owner) diagnoses, quotes verbally or off a phone/tablet, does the repair same-visit if parts are on the truck." },
          { title: "Upsell", text: "Informal — \"while I'm here, want me to also...\" — no structured comfort-advisor role or good/better/best options." },
          { title: "Payment collection", text: "Card reader (Square, Stripe) or built into whatever light FSM app they use; larger jobs sometimes invoiced with a delay." },
          { title: "Follow-up", text: "Minimal — maybe a text asking for a Google review. No structured maintenance-plan upsell process." },
        ],
        roles:
          "Owner/tech does the work, prices it, and often does the books at night. A part-time or family admin (spouse is extremely common) sometimes answers phones or books jobs. 1–4 additional techs paid hourly or a day rate. No dedicated dispatcher, sales role, or marketing role.",
        timeline:
          "Call to appointment: same-day to 2–3 days out, or same-day for emergencies (no heat, no water). Appointment to close: single-visit close is the norm. Job duration: 45 minutes to 3 hours for routine calls.",
        tools:
          "Housecall Pro (~$59/mo) and Jobber (~$25–$79/mo) dominate — both explicitly priced for solo operators; Service Fusion ($149–$245/mo, unlimited users) suits a shop about to add techs. Payments run through Square/Stripe or the FSM tool's built-in processor. Lead gen: Angi/Thumbtack ($15–$85/lead), Google Local Services Ads (~$39–$57/lead, ~90%+ arriving as phone calls). NiceJob is the standout reputation tool at this tier — cheap and simple versus enterprise Birdeye/Podium ($200–500/mo). Gap: no real price-book discipline (quotes are ad hoc, capping ticket size) and essentially no job-costing/margin analytics — owners are flying on gut feel.",
        moneyFlow:
          "Successful independent plumbers run $300–$500 average ticket, but many single-op shops sit closer to the ~$315 national average without pricing discipline. HVAC diagnostic fee $75–$200 (commonly $99–$159), typically credited toward repair. Tech pay is usually hourly ($25–$55/hr) or owner-draw; formal flat-rate books are rare because there's no admin bandwidth to build one.",
        failurePoints: [
          "No-shows and slow response — owner is on a truck and can't answer calls promptly, losing the job to voicemail.",
          "Bad diagnosis / rework with no formal training pipeline or second set of eyes.",
          "Price shock from ad hoc quoting erodes trust and referrals.",
          "Capacity ceiling — the owner's own hours are the bottleneck; growth requires hiring, which is where most businesses stall.",
          "Highest owner-dependency risk of any tier — if the owner is sick or injured, revenue often just stops.",
        ],
      },
      {
        key: "B",
        name: "Regional Multi-Crew Company",
        tag: "10–50 techs, 10–40 trucks",
        color: TIER_COLOR.B,
        profile:
          "A defined multi-county/metro service area with a dedicated CSR/dispatch team, a service manager, and often a comfort-advisor sales role. Revenue blends T&M service, flat-rate book pricing, membership plans, and installation/replacement sales at much higher margin than repair. Examples: independent regional brands doing $5M–$25M/year, or a single-location franchisee of Aire Serv, Mister Sparky, Benjamin Franklin Plumbing, or One Hour Heating & Air — franchise royalties here run ~5–8% of gross revenue plus a marketing-fund contribution.",
        steps: [
          { title: "Lead intake", text: "Multi-channel — inbound phone to a CSR team, web form, chat, Google LSA, Angi/Thumbtack, membership renewals, repeat customers, with CSRs trained on scripts and booking rules." },
          { title: "Booking/dispatch", text: "A dedicated dispatcher assigns jobs by zone, skill, and truck availability via the FSM scheduling board; techs get GPS-routed jobs pushed to a mobile app." },
          { title: "On-site visit", text: "Tech diagnoses off a standardized checklist, presents pricing from a published flat-rate price book (not ad hoc) on a tablet, often with good/better/best options. Larger install leads get handed to a dedicated comfort advisor." },
          { title: "Upsell", text: "Structured — membership plans, IAQ add-ons, water heater/panel upgrades, financing offers presented in the same visit." },
          { title: "Payment collection", text: "Card/ACH via mobile app at time of service; financing (Wisetack, Synchrony, GreenSky) offered and often approved on the spot." },
          { title: "Follow-up", text: "Automated review request triggered by job completion; CRM-driven membership-renewal reminders." },
        ],
        roles:
          "Dedicated CSR/dispatchers (2–5 people), a service manager overseeing tech performance and callbacks, technicians across several skill tiers, a dedicated comfort advisor/sales rep for installs (distinct from repair techs), an owner/GM running the business strategically, and often an outsourced marketing coordinator.",
        timeline:
          "Call to appointment: often same-day or next-day, 2-hour arrival windows standard. Repairs close same-visit; installs require a free estimate visit then a scheduled install 1–2 weeks later. Service calls 1–2 hours; installs 4–8+ hours or full-day.",
        tools:
          "FieldEdge (~$225+/mo) and Successware ($200–400/user/mo, 30+ years in HVAC) are purpose-built for this tier; many shops run ServiceTitan ($245–500+/tech/mo) once past ~15–20 techs despite the cost, for dispatch/reporting depth. Podium or Birdeye ($200–500/mo) become worth it here for SMS-first multi-tech communication. Samsara/Verizon Connect for GPS/fleet once past 15 trucks (Samsara's ~9-month payback beats Verizon Connect's ~16-month). Gap: data fragmentation across point solutions (FSM + financing + reviews + GPS rarely talk to each other cleanly), and CSR call-booking conversion is a documented weak spot — many shops still lose 20–30%+ of inbound calls to voicemail or a CSR who fails to book.",
        moneyFlow:
          "HVAC service/repair blended ticket commonly $300–$600+; replacement/install tickets $6K–$15K+. Tech pay is hybrid — hourly base plus flat-rate spiffs for upsells, or a straight flat-rate book. Comfort advisors are commission-based, strong performers closing 65–75%. Service/repair margins run 40–60%+; install margins are lower percentage but higher dollar profit per job.",
        failurePoints: [
          "Technician turnover of 12–21% annually, average tenure only ~3.2–4 years, putting training investment constantly at risk.",
          "CSR booking failure — missed/mishandled inbound calls are a top revenue leak once call volume exceeds what an owner can personally monitor.",
          "Price shock on installs when the comfort-advisor handoff is done poorly or skipped.",
          "Lead cost creep — effective cost-per-booked-job on Angi/Thumbtack can run $150–$1,400+, squeezing margins if owned-channel mix isn't built up.",
          "Scaling trucks faster than management layers (dispatch, service manager, QA), letting quality slip exactly when volume increases.",
        ],
      },
      {
        key: "C",
        name: "Large Multi-Location Platform / PE-Backed Consolidator",
        tag: "Wrench Group, Authority Brands, ARS/Rescue Rooter, Roto-Rooter, Neighborly",
        color: TIER_COLOR.C,
        profile:
          "Hundreds to thousands of technicians/trucks across dozens to hundreds of local markets, built via roll-up: acquire local shops or franchise territories, then impose standardized pricing, software, marketing, and pay structures. Wrench Group (Leonard Green & Partners) runs 35+ brands and $900M+ revenue; Authority Brands (Apax + Goldman Sachs) has 16+ brands; Roto-Rooter (NYSE: CHE) is ~80% company-owned with $700M revenue; Neighborly (KKR, ~$5B valuation) franchises 30+ brands across ~5,500 US units. PE has acquired roughly 800 HVAC/plumbing/electrical companies since 2022, now representing about half of all HVAC-services M&A.",
        steps: [
          { title: "Lead intake", text: "A centralized (sometimes 24/7, sometimes offshore-overflow) call center handles inbound across many local brands with shared scripts and CRM; heavy national/regional paid media supplements marketplace leads." },
          { title: "Booking/dispatch", text: "Centralized or hub-and-spoke dispatch (usually ServiceTitan) with dynamic routing and real-time tech GPS, enforcing standardized booking rules across every acquired location." },
          { title: "On-site visit", text: "Corporate-mandated diagnostic checklist and a single enterprise-wide flat-rate price book loaded into a tablet; comfort-advisor handoff for replacements is a formal, CRM-tracked process; cross-brand referral is built in (plumbing tech flags an electrical opportunity, routes to the sister brand)." },
          { title: "Upsell", text: "Aggressive and systematized — membership programs, financing pre-qualification built into the booking call itself, tiered good/better/best quoting." },
          { title: "Payment collection", text: "Fully digital — mobile payment, instant financing decisioning via Wisetack/Synchrony/GreenSky APIs, automated invoicing for commercial accounts." },
          { title: "Follow-up", text: "Automated, CRM-driven review requests, NPS surveys, and centralized win-back campaigns run by corporate marketing ops rather than a local owner." },
        ],
        roles:
          "Local techs and service managers measured against corporate KPIs; regional operations directors standardizing process post-acquisition; centralized call-center/CSR teams shared across brands; corporate marketing, pricing, and finance teams setting the price book and national vendor contracts; an M&A/integration team sourcing and folding in new acquisitions; and a PE sponsor/portfolio-ops team driving toward exit.",
        timeline:
          "Similar call-to-appointment and appointment-to-close windows as Tier B, but more consistent due to standardized SLAs (guaranteed arrival windows backed by service credits).",
        tools:
          "ServiceTitan is the enterprise standard — its multi-location/multi-brand reporting is exactly why roll-ups standardize acquired shops onto it (post-acquisition software migration is itself a major, ongoing operational project). Enterprise-negotiated financing rates across multiple providers, waterfalled to maximize approval on every large ticket. Fleet-wide Samsara/Verizon Connect tied to insurance/safety programs. Custom BI layers on top of ServiceTitan's data export let PE ops teams benchmark ticket size, close rate, and margin across every acquired location. Gap: post-acquisition integration debt (every new acquisition arrives on different legacy software, with no mature \"acquisition integration\" software category — just manual playbooks), and AI-driven dispatch/pricing optimization is being piloted but not yet standardized, representing real whitespace.",
        moneyFlow:
          "Flat-rate price-book shops post 20–35% higher average tickets than time-and-materials shops on equivalent work. Standardized flat-rate books or hybrid hourly+spiff pay rolled out corporate-wide, tied to KPIs tracked in the FSM system. PE ownership actively manages toward 15–25% EBITDA-margin bands via national procurement and shared back-office costs. Where the platform is a franchisor (Neighborly, Authority Brands), 5–8% of gross revenue plus a 2–4% marketing-fund contribution flows up from franchisees regardless of local profitability.",
        failurePoints: [
          "Roll-up integration risk — buying many local shops fast and failing to standardize systems/culture creates inconsistent customer experience across the portfolio.",
          "Technician turnover compounds painfully at scale — recruiting/training pipelines become a major fixed cost center.",
          "Reputation dilution — a bad experience under a national brand travels further than a bad review of a solo plumber.",
          "Margin-maximization backlash — aggressive corporate KPI-driven upsell/financing tactics generate a \"price gouging\" narrative in consumer press.",
          "Exit-cycle bias — because the model often anticipates a future sale, operational decisions can skew toward metrics that look good for a sale rather than long-term relationships.",
        ],
      },
    ],
  },
  {
    id: "new-construction",
    label: "New Construction / Installation",
    intro:
      "Trades contractors working with home builders, GCs, or developers to rough-in and install electrical, plumbing, or HVAC systems in new buildings — a bid-and-schedule workflow governed by inspection gates rather than a single service call, with thinner margins than repair work at every tier.",
    compare: [
      { label: "Bid process", a: "Informal/relationship-based", b: "Formal ITB, 3–5+ bidders", c: "MSA/program agreements, rarely a discrete bid" },
      { label: "Pricing model", a: "Fixed-bid, per-house", b: "Fixed unit price per plan / lump sum", c: "GMP, design-build, negotiated program rates" },
      { label: "Key software", a: "PlanSwift, QuickBooks, Buildertrend Essential", b: "STACK, PlanSwift, Buildertrend, Procore, BuildPro", c: "Procore, Trimble MEP, Navisworks/VDC, enterprise ERP" },
      { label: "New-construction margin", a: "~10–15% (electrical), thinner for plumbing", b: "~10–15%, blended with a service arm", c: "Diversified via a large service/maintenance segment" },
      { label: "Biggest software gap", a: "No coordination tooling — manual everything", b: "Cross-platform fragmentation, no real-time conflict detection", c: "Interoperability between counterparties' enterprise systems" },
    ],
    tiers: [
      {
        key: "A",
        name: "Small Local Trade Contractor",
        tag: "1–5 crews, $500K–$5M revenue",
        color: TIER_COLOR.A,
        profile:
          "5–30 employees; 1–5 field crews of 2–4 people, plus an owner who often still estimates and/or works in the field. Direct contracts with custom home builders or homeowners building 1–20 homes/year, often mixing new-construction rough-in/trim with residential service calls to smooth cash flow. Owner is typically the licensed master electrician/plumber, with journeymen and apprentices working under that one license.",
        steps: [
          { title: "Relationship-based bidding", text: "Custom builders often work with 1–3 trusted trade contractors repeatedly; bids are frequently informal — a plan walkthrough plus a rough quote rather than a full invitation-to-bid process." },
          { title: "Estimate & proposal", text: "Owner or a part-time estimator takes off the plans (often manually), prices materials plus labor, submits a lump-sum or unit-price proposal for rough-in and trim." },
          { title: "Contract award", text: "Verbal agreement or a short one-page contract; a deposit is sometimes required for material procurement." },
          { title: "Rough-in", text: "Starts once framing is ~80–90% complete; electrical, plumbing, and HVAC crews often overlap in the same 1–2 week window since they don't conflict much spatially yet." },
          { title: "Inspection", text: "Local building inspector checks box depth, grounding, nail-plate protection, pipe slope/venting; failures require rework and a re-inspection before drywall can proceed." },
          { title: "Trim-out & final", text: "After drywall/paint, the crew returns to install devices, fixtures, and equipment; inspector does final sign-off, then a punch-list walkthrough with the builder's superintendent." },
        ],
        roles:
          "Owner/estimator (often also the master electrician/plumber of record), a crew foreman who runs day-to-day installation, 1–2 journeymen plus apprentices, the builder's superintendent coordinating trade sequencing, and the local building inspector.",
        timeline:
          "Bid to award: days to 2 weeks. Rough-in duration: 1–2 weeks per trade, often overlapping. Re-inspection after a failed rough-in typically adds 3–7 days. Overall custom-home build (rough framing to CO) runs roughly 6–9 months, with trades' actual on-site time a small fraction of that.",
        tools:
          "Estimating is often manual (paper takeoffs, spreadsheets) or PlanSwift (~$1,749/year) for digital takeoff. Small contractors are frequently pulled into the builder's system rather than choosing their own — even low-volume trade partners increasingly get put on BuildPro (Hyphen Solutions) portals for schedule visibility and purchase orders. Job costing runs on QuickBooks or Buildertrend Essential (~$339/mo). Gap: little to no formal multi-trade coordination software — scheduling conflicts are still resolved by phone call or text with the super; AI-assisted takeoff (computer-vision tools like Melt) is emerging but adoption at this tier is minimal due to cost.",
        moneyFlow:
          "Predominantly fixed-bid/lump-sum per house, sometimes cost-plus for true custom high-end work. Payment schedule is simple — deposit, progress payment at rough-in, final at trim/CO — formal AIA-style pay applications are rare. New-construction rough-in/trim runs roughly 10–15% margin for electrical versus 15–20%+ on service/repair; plumbing new-construction margins are even thinner. Many shops deliberately keep a service-call book specifically because it subsidizes thinner new-construction margins.",
        failurePoints: [
          "Cash flow crunch — financing material and payroll while waiting on the builder's payment cycle can strain the whole business.",
          "Framing not ready — the crew shows up and framing/other trades aren't complete, wasting a scheduled day.",
          "Inspection failures — missed nail plates, insufficient grounding, wrong box depth trigger rework and schedule slip.",
          "Scope creep without paperwork — verbal \"can you also add\" requests often go unbilled or become disputes.",
          "Single point of failure — with one licensed master tradesperson, that person's illness or turnover can shut down the business's ability to legally sign off work.",
        ],
      },
      {
        key: "B",
        name: "Regional MEP Contractor",
        tag: "$10M–$250M revenue, 10–50+ crews across multiple sites",
        color: TIER_COLOR.B,
        profile:
          "Multiple simultaneous crews across several active job sites, with dedicated estimating, PM, and service departments. Bids formally on production/tract subdivisions (dozens to hundreds of homes) for national or regional builders (D.R. Horton, Lennar, PulteGroup, KB Home) plus mid-size commercial/light-industrial work. Mid-market MEP firms are under real pressure: firms above $250M revenue grow ~14.5% annually — roughly triple the industry median — while standalone regional shops risk being pushed into low-margin \"labor-only\" roles as GCs bundle scopes.",
        steps: [
          { title: "Formal bid solicitation", text: "Builder/GC issues an Invitation to Bid with plans and specs, wanting a minimum of 3 bidders (5+ for large packages); the GC \"levels\" bids across trades to compare scope apples-to-apples." },
          { title: "Estimating/takeoff", text: "Dedicated estimator(s) run digital takeoff software against the plan set, get supplier quotes, and build labor productivity assumptions." },
          { title: "Contract award & buyout", text: "A signed subcontract with a schedule of values, unit pricing per house-plan, retainage terms, and back-charge clauses." },
          { title: "Multi-trade scheduling", text: "The builder's own scheduling software (BuildPro, used by 22 of the top 26 U.S. builders) sequences each house through framing → rough-in → inspection → drywall → trim, with crews rotating across dozens of houses simultaneously." },
          { title: "Rough-in across multiple houses", text: "Crews leapfrog between homes on a rolling builder-set schedule; a PM tracks crew utilization and inspection pass/fail rates as a subdivision-wide KPI." },
          { title: "Trim-out & walkthrough", text: "Return visits per house after drywall; builder's superintendent (and often a third-party QC inspector) does a pre-closing walk, assigning punch-list items back to the contractor." },
        ],
        roles:
          "A chief/lead estimator plus 1–3 estimators, project managers (one per major job or builder relationship), crew foremen per active site, a licensed master electrician/plumber/mechanical contractor of record, a separate service/warranty department, and the builder's construction/production manager and site superintendents coordinating across the subdivision.",
        timeline:
          "Bid to award: 2–6 weeks for a subdivision package. Per-house rough-in: still 1–2 weeks/trade, but 5–20+ houses may be in some stage of rough-in at once. Full subdivision rollout can span 12–36+ months as builders release homes in phases.",
        tools:
          "STACK (~$249/user/mo) or PlanSwift for cloud-based takeoff, integrating with Procore/Buildertrend for bid distribution; Trimble's MEP suite for prefabrication/spool drawings. Buildertrend dominates residential production management; Procore is used when working under larger GCs (enterprise pricing $20K–$100K+/year). BuildPro remains the dominant scheduling/PO portal the contractor doesn't choose so much as has to comply with. Autodesk Navisworks/Trimble Connect for BIM clash detection on the commercial side. Gap: fragmentation across GC-mandated platforms (running BuildPro for one relationship, Procore for another, Buildertrend internally creates duplicate data entry), and no tool actively flags cross-trade schedule conflicts before they become a site problem — that's still solved by humans on the phone.",
        moneyFlow:
          "Fixed unit pricing per house plan for tract work, or fixed-bid lump sum for individual commercial packages. Formal monthly AIA G702/G703 pay applications on commercial work; milestone-based draws tied to each house's stage for production housing. Standard 5–10% retainage withheld (some states now cap this lower — New York's 2025 law caps private retainage at 5% above $150,000). New-construction volume work runs 10–15% margin for electrical versus 15–20%+ service, thinner still for plumbing new-construction — regional contractors often maintain a service/warranty division specifically to blend margins.",
        failurePoints: [
          "Cross-trade scheduling conflicts at volume — a slip on framing or another trade cascades across dozens of houses moving through stages simultaneously.",
          "Change orders becoming adversarial — fixed-price production contracts leave little flexibility once scope changes affecting many houses at once.",
          "Inspection failure at scale — a systemic rough-in mistake repeated across a subdivision multiplies rework cost far beyond a single house.",
          "Retainage/payment delays through a longer builder → GC → sub payment chain straining cash flow across several concurrent sites.",
          "Margin compression from consolidation pressure — getting pushed into \"labor-only\" scope by larger MEP consolidators bundling packages.",
        ],
      },
      {
        key: "C",
        name: "Large National MEP Firm",
        tag: "EMCOR ($17B), Comfort Systems ($9B), Southland Industries, Rosendin Electric",
        color: TIER_COLOR.C,
        profile:
          "$1B+ in annual revenue, thousands of employees, dozens to hundreds of operating locations. EMCOR Group is the largest at ~$17B in 2025 revenue across 100+ operating companies; Comfort Systems USA runs ~$9B; Southland Industries is the largest privately held mechanical firm by ENR ranking; Rosendin Electric runs ~$5.6B with 12,000+ employees. Revenue comes from design-build and design-assist MEP contracts on master-planned communities, data centers, hospitals, and large industrial builds, often as a holding company of many local operating subsidiaries. Consolidation is actively reshaping this tier — firms above $250M grow ~3x the industry median, largely via acquisition.",
        steps: [
          { title: "Pre-qualification & MSAs", text: "National developers/GCs and homebuilders maintain long-term master service agreements or preferred-vendor relationships, often bypassing house-by-house competitive bidding for program-level agreements across an entire community." },
          { title: "Design-build/design-assist", text: "Increasingly brought in during design (not after) to influence constructability, standardize MEP layouts across a multi-phase development, and lock in prefabrication strategy." },
          { title: "Estimate at scale", text: "Large in-house preconstruction teams run BIM-integrated takeoffs across the entire multi-phase project, coordinating with architectural/structural models for clash detection before any field work starts." },
          { title: "Prefabrication", text: "A defining Tier C practice — racks, spools, and panel assemblies are prefabricated offsite in a shop and shipped to the site, reducing field labor hours and quality variance across hundreds of repeated units." },
          { title: "Multi-phase scheduling & rough-in", text: "A master schedule integrates the developer's overall phasing with the firm's own crew/equipment allocation across multiple active sites nationally; dedicated QA/QC staff pre-inspect to reduce AHJ fail rates." },
          { title: "Commissioning & handoff", text: "Formal systems commissioning (testing/balancing HVAC, load-testing electrical) for commercial/industrial builds, followed by a formal closeout package, full BIM as-builts, and a dedicated warranty/service division." },
        ],
        roles:
          "A dedicated preconstruction/estimating department with senior estimators and BIM coordinators, program/portfolio project managers overseeing an entire multi-phase development, prefabrication/shop managers running offsite facilities, multiple licensed masters of record across states, dedicated QA/QC and safety departments, commissioning agents/engineers, and the client-side developer's VP of construction or GC's senior superintendent.",
        timeline:
          "Bid to award is often not a discrete event — MSA/program agreements can span years, renewed or renegotiated per phase. Rough-in to trim-out on any single building still follows the same 1–2 week windows as smaller tiers, but the overall master schedule can span years across an entire development. Full program duration commonly runs 2–5+ years from initial award to full buildout.",
        tools:
          "Procore is the enterprise PM standard, its document control and financial workflow fitting multi-year, multi-phase programs. Dedicated Virtual Design & Construction teams run Navisworks/Revit and Trimble Connect at a program level, with 2025+ AI-assisted clash classification plug-ins helping triage the clash volume this scale generates. Trimble's MEP fabrication suite is the software category that most differentiates this tier — offsite prefab economics only work at volume. Enterprise ERP (Viewpoint, CMiC) layers under Procore for job costing and multi-entity consolidation across dozens of operating subsidiaries. Gap: true end-to-end automation from AI takeoff through fabrication-ready shop drawings still needs human verification, and genuine real-time interoperability between the firm's own systems and each builder's/GC's chosen platform remains elusive — large firms still maintain significant staff purely to reconcile data between systems.",
        moneyFlow:
          "Predominantly negotiated program pricing under an MSA rather than one-off lump-sum bids; major jobs often use Guaranteed Maximum Price or design-build lump sum with heavy risk transfer negotiated up front. Formal monthly pay applications processed through the ERP, directly integrated with the GC's/owner's system. Retainage follows the same 5–10% norm but represents a much larger absolute dollar amount — legislative caps like New York's 2025 5% cap are actively tracked by legal/finance teams at this scale. EMCOR and Comfort Systems both deliberately diversify into service/maintenance revenue specifically because it carries materially better margins than new-installation volume work.",
        failurePoints: [
          "Program-level schedule slippage cascades — a delay in one phase of a multi-year development ripples through prefabrication schedules and material procurement across the whole program.",
          "Cross-entity coordination overhead managing dozens of operating subsidiaries and licenses across states.",
          "Change orders at massive scale — a design change affecting a repeated unit type multiplies cost and negotiation complexity far beyond Tier A/B.",
          "Retainage as a strategic/legal battleground given the dollar amounts involved and shifting state legislation.",
          "Consolidation/M&A integration risk — since much of this tier's growth comes from acquiring regional firms, integrating their systems and culture is itself a recurring operational failure point.",
        ],
      },
    ],
  },
  {
    id: "commercial-contracts",
    label: "Commercial & Maintenance Contracts",
    intro:
      "Recurring B2B service agreements where a trades business maintains HVAC/electrical/plumbing systems for commercial buildings, property managers, or facilities — a relationship built on preventive-maintenance visits and defined SLAs rather than a one-off call, and the highest-margin work at every tier.",
    compare: [
      { label: "Contract acquisition", a: "Relationship/referral", b: "Relationship + formal RFP", c: "Formal multi-month RFP, cooperative contracts" },
      { label: "PM visit frequency", a: "2–4x/year", b: "Quarterly (some monthly)", c: "Monthly to continuous monitoring for critical assets" },
      { label: "Contract term", a: "1 yr, informal", b: "1–3 yrs", c: "3–5 yrs, competitive rebid standard" },
      { label: "Core software", a: "Housecall Pro/Jobber/ServiceTitan entry", b: "ServiceTitan Commercial, BuildOps, ServiceTrade", c: "Corrigo, ServiceChannel + internal ERP" },
      { label: "PM gross margin", a: "35–50%", b: "35–50%", c: "Steadier than construction, segment-level" },
      { label: "Top failure mode", a: "Overcommitment, scope ambiguity", b: "Missed PM visits at scale, rebid loss", c: "Systemic rebid churn, subcontractor coverage gaps" },
    ],
    tiers: [
      {
        key: "A",
        name: "Small Trades Shop with a Handful of Commercial Accounts",
        tag: "3–15 employees, mostly residential + a few commercial clients",
        color: TIER_COLOR.A,
        profile:
          "1–3 trucks up to ~10, owner often still doing sales, dispatch, and sometimes fieldwork. Commercial contracts are a supplemental, higher-margin revenue stream — a few small office buildings, restaurants, or a strip mall, won through personal relationships rather than formal RFPs. Landing even one or two large commercial accounts can consume most of a small shop's capacity.",
        steps: [
          { title: "Winning contracts", text: "Relationship-driven — comes from a residential customer who owns a commercial property, a supplier referral, or outreach after a large repair job established trust." },
          { title: "Onboarding", text: "Informal — a site walkthrough, a simple written agreement (often a downloaded template), and a manual equipment list noted on a phone or tablet." },
          { title: "Scheduling PM visits", text: "Semi-manual — scheduling software auto-generates recurring jobs, but the owner or single dispatcher manually double-checks and reshuffles around larger jobs." },
          { title: "Emergency call-outs", text: "Handled reactively by whoever's available; contract terms are looser since there's no true after-hours dispatch." },
          { title: "Renewal", text: "Informal, often auto-renewing unless canceled; the renewal conversation happens face-to-face during a routine PM visit." },
        ],
        roles:
          "Owner/operator (sales, contract terms, sometimes fieldwork), a part-time office admin/dispatcher tracking scheduling and invoicing, and a lead technician who handles both residential and commercial calls with no dedicated commercial-only staff. Client side is usually a small business owner or bookkeeper, not a formal facilities coordinator.",
        timeline:
          "Sales cycle: days to a few weeks. PM visit frequency: 2–4x/year (quarterly is common for HVAC, semi-annual for plumbing/electrical). Contract term: 1 year, often auto-renewing month-to-month after year one.",
        tools:
          "Housecall Pro, Jobber, ServiceTitan entry tier, or FieldEdge — with a \"membership/maintenance agreement\" module bolted onto core residential scheduling. UpKeep (~$20–55/user/mo) is sometimes used if a shop is servicing a client's own asset list directly. What's well solved: basic recurring scheduling, mobile invoicing, card-on-file auto-renewal. Gap: contract scope is often verbal/loosely written, causing scope disputes later, and there's no real multi-site reporting need since there's only 1–5 sites — but also no dedicated after-hours SLA tooling.",
        moneyFlow:
          "Flat annual or per-visit fee, usually $500–$2,000/year per unit for a single rooftop HVAC unit on a small retail space, or $1,000–$10,000+/year bundled contracts. PM agreements run 35–50% gross margin (40% is the common target) versus 15–20% net profit on ordinary residential service/repair — the primary reason owners chase contracts despite the operational strain. Emergency/overage billing is usually simple T&M outside the flat fee, sometimes with a modest contract-customer discount.",
        failurePoints: [
          "Overcommitment — one or two large accounts can swallow all capacity, leaving no bench strength to cover gaps.",
          "Scope ambiguity — informal contracts leave no pre-agreed language for what's billable separately when a tech finds something outside routine scope.",
          "No true after-hours coverage — a midnight failure at a restaurant can go unanswered, damaging trust and risking the contract.",
          "Renewal risk from personal relationships — losing the one champion contact at the client can mean losing the whole account with no formal defense to fall back on.",
        ],
      },
      {
        key: "B",
        name: "Regional Commercial Service Company with a Dedicated PM Division",
        tag: "$10M–$100M revenue, dozens of active accounts",
        color: TIER_COLOR.B,
        profile:
          "A clearly separated commercial/PM division distinct from residential service, if the company still does residential at all. Recurring PM contract revenue is the backbone, often 40–60% of division revenue. Clients are regional property management companies, small restaurant/retail chains (5–50 locations), light industrial facilities, and school districts — the tier many ServiceTitan/BuildOps commercial case studies target.",
        steps: [
          { title: "Winning contracts", text: "A mix of relationship-based renewal/expansion and formal RFPs — regional property management companies issue RFPs for a portfolio of buildings, run through bid-management platforms like Building Engines." },
          { title: "Onboarding a new account", text: "Structured — a site walk with the facilities manager, formal equipment inventory/asset tagging into a CMMS or FSM tool, defined SLA response-time tiers, and a signed master service agreement." },
          { title: "Scheduling PM visits", text: "Automated through commercial-grade FSM software — recurring events are configured once (equipment + frequency) and auto-populate a dedicated commercial dispatch board, distinct from residential dispatch." },
          { title: "Emergency call-outs", text: "Defined SLA response windows (2-hour, 4-hour, next-business-day tiers) baked into the contract, with an on-call rotation among commercial technicians." },
          { title: "Renewal", text: "A structured account-management process — commercial account managers review contract performance and renegotiate 60–90 days before term expiration." },
        ],
        roles:
          "A commercial sales/contracts rep who structures MSAs and SLA pricing tiers, an account manager who owns the relationship post-sale and handles renewals/upsells, a dedicated commercial dispatcher, a client-side facilities coordinator who logs work orders and approves invoices, and a pool of certified commercial technicians (controls/BAS, commercial refrigeration) distinct from residential techs.",
        timeline:
          "Sales cycle: weeks to a few months for a single building, 3–6 months for a multi-site RFP. PM visit frequency: quarterly is most common, with monthly/bi-monthly for critical equipment. Contract term: 1–3 years, often with an annual CPI-linked price escalator.",
        tools:
          "ServiceTitan's commercial module or BuildOps dominate — agreement templates predefine billing cadence, auto-renew rules, and margin targets, so adding equipment auto-drafts the full scope of work with recurring visits and pricing, cutting a 15–30 minute manual quote to seconds. ServiceTrade is a commercial-specialist alternative purpose-built for inspection workflows and service-agreement portfolios (78% of its reviewer base is small companies). Gap: multi-site reporting is still clunky — a client managing 30 buildings across one vendor wants a rolled-up compliance dashboard, and most FSM tools don't do portfolio-level BI as well as enterprise CMMS. IoT/predictive maintenance is essentially unadopted here — it's calendar-based PM almost universally, meaning up to 30–40% of maintenance budget can be spent on unnecessary interventions while real failures still slip through between visits.",
        moneyFlow:
          "Per-unit/per-ton annual pricing for HVAC ($500–$2,000/year per rooftop unit) scaled across a portfolio, or a flat annual fee per site; larger accounts sometimes move toward per-square-foot budgeting ($1.20–$1.90/sq ft/year on large mixed-equipment portfolios). PM contracts target 35–50% gross margin versus 15–20% net on ordinary repair work — companies explicitly track contract-revenue mix as a KPI since a book of recurring revenue at 40% margin can outperform one-off installation revenue at 24%.",
        failurePoints: [
          "Scope disputes — the single most cited failure mode, when ambiguity between \"included\" and \"billable separately\" work surfaces mid-contract.",
          "Missed PM visits as the division scales past a few dozen accounts — directly threatens renewal and can trigger regulatory/insurance exposure for regulated equipment.",
          "Rebid losses — average contract retention at competitive rebid is only 60–70% industry-wide, some as low as 50%.",
          "Understaffing during growth — winning several new accounts at once without proportionally growing the technician bench slows response times and starts a self-reinforcing dissatisfaction cycle.",
          "Underbidding at RFP — winning a portfolio by bidding too low creates unsustainable margins that erode service quality later.",
        ],
      },
      {
        key: "C",
        name: "Large National Facilities-Services/Mechanical Contractor",
        tag: "EMCOR ($17B), ABM Industries, Johnson Controls National Accounts",
        color: TIER_COLOR.C,
        profile:
          "Billions in revenue, tens of thousands of employees, national/international footprint. EMCOR's Building Services segment alone generated ~$3.57B in 2025 (21% of total revenue); ABM Industries runs five segments spanning Business & Industry through Aviation; Johnson Controls' National Accounts Service supports over 83% of U.S. acute-care hospitals and 1,800+ colleges/universities, ranging from remote monitoring to fully embedded on-site O&M teams. Clients are national retail chains, hospital systems, university campuses, and big-box REIT property platforms.",
        steps: [
          { title: "Winning contracts", text: "Almost entirely formal, competitive RFP processes — multi-month procurement cycles with standardized SLAs and incumbent-vs-challenger competitive rebids every 2–5 years, often through cooperative purchasing contracts (OMNIA Partners, E&I Cooperative Services)." },
          { title: "Onboarding", text: "Highly structured — dedicated transition/implementation teams, full asset inventory and CMMS data migration, sometimes embedded on-site technicians and facility managers placed directly at the client's location." },
          { title: "Scheduling PM visits", text: "Managed at portfolio scale through enterprise CMMS/FM platforms, blending in-house technicians with a subcontracted provider network for geographic coverage." },
          { title: "Emergency call-outs", text: "Tightly defined multi-tier SLAs (critical = 2-hour, urgent = 4-hour, routine = next-business-day) with contractual penalties/credits for missed SLAs; 24/7 national call centers route to the nearest available technician or subcontractor." },
          { title: "Renewal", text: "A formal quarterly-business-review cadence tracking SLA compliance, spend, and savings; renewal is essentially a mini-RFP even for a satisfied incumbent, run to benchmark pricing." },
        ],
        roles:
          "A national account director owning the C-suite relationship, a program/account manager tracking SLA performance across hundreds of sites, regional operations managers overseeing technician deployment, centralized dispatch/command-center staff, a subcontractor/vendor management team filling coverage gaps, and client-side VPs of Facilities plus site-level facilities coordinators logging work orders in a shared FM platform.",
        timeline:
          "Sales cycle: 6 months to 2+ years for major national accounts. PM visit frequency varies by equipment criticality — critical infrastructure gets monthly or continuous remote monitoring, standard PM is quarterly, governed by regulatory calendars (e.g. Joint Commission requirements in healthcare). Contract term: 3–5 years, subject to competitive rebid at each term end regardless of performance.",
        tools:
          "Corrigo (owned by JLL Technologies) and ServiceChannel (600+ global brands, 70,000+ contractors, 330,000+ locations) are the enterprise CMMS/FM layer — vendor orchestration, SLA compliance tracking, standardized invoicing, and portfolio-level spend dashboards across thousands of locations. What's well solved: contractor orchestration and compliance tracking at scale. The real gaps: true multi-site reporting remains a persistent pain point even here — M&A of regional providers often leaves a patchwork of legacy systems; IoT/predictive-maintenance adoption is still shallow relative to the hype (market growing $22.4B→$45.4B by 2034, yet only ~51% of maintenance activity industry-wide is even preventive), meaning 30–40% of maintenance budgets are estimated wasted on unnecessary calendar-driven interventions while roughly two-thirds of developing failures still go undetected between visits; and integration friction between the client's chosen FM platform and the contractor's own internal ERP creates dual data entry and invoicing disputes.",
        moneyFlow:
          "Enterprise contracts blend per-square-foot portfolio budgeting ($1.20–$1.90/sq ft/year for full HVAC PM, scaling to eight/nine-figure national contracts), flat annual fees per site tier, and increasingly outcome-based performance contracts tied to KPI achievement rather than simple time/parts billing. Building/facilities-services segments run structurally steadier, higher-margin economics than construction segments — recurring service revenue is prized precisely because it's less cyclical. Missed SLAs trigger financial penalties or service credits rather than simple hourly overage billing.",
        failurePoints: [
          "Rebid loss is systemic, not exceptional — even satisfied clients run competitive rebids as standard procurement practice, and average retention sits at only 60–70%.",
          "Coverage/staffing gaps in secondary/tertiary markets, filled by subcontracted local providers whose inconsistent quality drives complaints and lost renewals.",
          "Scope and compliance disputes multiply with thousands of work orders per month across a portfolio.",
          "Missed regulatory-driven PM on critical/regulated assets (fire suppression, medical gas, elevators) carries far higher liability at enterprise scale.",
          "Technology fragmentation post-M&A — integrating disparate CMMS/dispatch systems from acquired regional contractors is an ongoing operational risk.",
        ],
      },
    ],
  },
  {
    id: "emergency-service",
    label: "Emergency / After-Hours Service",
    intro:
      "How trades businesses handle urgent, off-hours calls — a burst pipe at midnight, a dead AC in a heatwave — which command premium pricing and completely different staffing logistics than daytime scheduled work. The pricing multiplier barely changes by tier; who captures it, and how reliably the call gets answered at all, changes completely.",
    compare: [
      { label: "Call handling", a: "Personal cell / basic answering service", b: "Trades-specific answering service (human, hybrid, or AI)", c: "Centralized 24/7 call center, in-house or outsourced" },
      { label: "Response benchmark", a: "No formal standard", b: "~60–240 minutes advertised", c: "~60–120 minutes, often with a financial guarantee" },
      { label: "Premium pricing", a: "1.5x–3x, 100% to owner", b: "1.5x–3x + $150–500 dispatch fee, split via stipend/OT", c: "Same pricing, formalized with SLA credit mechanics" },
      { label: "Core software", a: "Voicemail or entry AI answering (Whippy, Dialzara)", b: "AnswerForce/Nexa, AnswerConnect, Smith.ai + FSM", c: "Enterprise field service platform + outsourced AI call center" },
      { label: "Core failure mode", a: "Missed calls = lost customer", b: "Technician burnout/turnover from rotation", c: "SLA-vs-local-capacity mismatch; inherited burnout underneath" },
    ],
    tiers: [
      {
        key: "A",
        name: "Solo Tradesperson / Small Shop",
        tag: "1–4 trucks, owner personally on-call",
        color: TIER_COLOR.A,
        profile:
          "An owner-operator, or owner plus 1–3 employees, often still the primary technician. Emergency work is a meaningful side revenue stream, but capacity is capped by how many nights the owner (or one or two techs) can personally absorb — if the owner is already on a job or asleep, the call goes to voicemail and there's no backup tech to hand it to.",
        steps: [
          { title: "Call received", text: "Rings straight to the owner's cell (many solo operators just forward the business line), or hits a basic answering service if the owner has one." },
          { title: "Triage", text: "Minimal or ad hoc — the owner personally assesses over the phone (is water actively pooling, is there a gas smell, is it 20°F outside with no heat)." },
          { title: "Dispatch", text: "There's no one else to dispatch to — the owner decides personally whether to go now or push to first thing in the morning." },
          { title: "Emergency visit", text: "Owner drives out, does the repair or a stabilizing fix, bills the emergency premium plus parts." },
          { title: "Follow-up", text: "Handled informally the next day; no structured escalation process." },
        ],
        roles:
          "The owner takes the call, triages, drives out, does the repair, and invoices — one person wearing every hat. A spouse or office admin sometimes answers and relays. An optional basic answering service just takes a message and texts/calls the owner — it does not do sophisticated emergency-vs-routine triage.",
        timeline:
          "Call to \"tech notified\": near-instant if the phone rings through, minutes if routed through a basic answering service. Notification to arrival: 30 minutes to several hours, entirely dependent on whether the owner is free that night — no formal response-time benchmark exists at this tier.",
        tools:
          "Often nothing more than a forwarded cell number and voicemail, or a basic 24/7 live answering service (Answering365, AbsentAnswer, AnswerNet) not built with trades-specific emergency scripting unless the operator pays for the vertical package. Emerging: AI-first answering tools aimed specifically at solo operators (Whippy AI, AgentZap, Dialzara, OnCrew) starting around $30–50/month, keyword-detecting emergency language (\"burst pipe,\" \"no heat,\" \"gas smell\") and immediately texting the tech rather than leaving a voicemail. Gap: true triage accuracy — a one-truck shop has no dispatcher layer at all; AI just decides who to notify, not how to allocate the job.",
        moneyFlow:
          "After-hours pricing runs 1.5x–2x standard rates on weeknights, 2x–3x on weekends/holidays: emergency plumbing $150–$300/hour (vs. $80–$130 standard) plus a separate $150–$250 emergency dispatch fee; emergency HVAC $140–$600/hour (vs. $75–$150 standard). Since the owner is also the technician, there's no separate on-call stipend — the owner simply keeps 100% of the premium as extra revenue, though it's unpaid labor risk with no backup.",
        failurePoints: [
          "Missed calls are permanently lost customers — with no answering layer, a 1 a.m. voicemail very likely means the customer calls the next name on Google.",
          "Owner burnout — sustained on-call responsibility with no relief is a leading cause of solo operators capping their business size or eventually hiring specifically for night/weekend relief.",
          "Inconsistent triage leads to either driving out for something that could've waited, or misjudging and missing a real emergency (a gas-smell call not treated with enough urgency).",
          "No backup capacity — if the owner is already on one emergency call, a second call that night simply cannot be served.",
        ],
      },
      {
        key: "B",
        name: "Regional Company",
        tag: "5–50 trucks, ~$1M–$20M+ revenue, formal on-call rotation",
        color: TIER_COLOR.B,
        profile:
          "The \"2 to 8 truck zone\" is explicitly where a formal answering service starts paying for itself, scaling up to 15–50+ techs where dedicated dispatch software becomes standard. Emergency response is often layered into maintenance-plan memberships as a priority-service perk. Examples span independent regional plumbing/HVAC companies and single-market franchisees of national brands (a local Aire Serv or Mr. Rooter) — this describes the individual location's actual on-the-ground operations, before any national call-center layer.",
        steps: [
          { title: "Call received", text: "Routed to a live or AI-assisted after-hours answering service (AnswerForce/Nexa, AnswerConnect, Smith.ai) configured with the company's own triage script." },
          { title: "Triage", text: "The answering service applies a documented decision tree — genuine emergencies (active water damage, no heat in freezing temps, gas smell, total power loss) get flagged for immediate dispatch; everything else is logged for next-business-day scheduling. A real-world benchmark: of ~22 after-hours calls a week, roughly 13 get scheduled next-day and 9 get dispatched that night." },
          { title: "Dispatch", text: "The answering service or an internal after-hours dispatcher contacts the tech currently on the on-call rotation via call, text, or dispatch-app alert." },
          { title: "Emergency visit", text: "The on-call tech (pre-scheduled for that week's rotation) drives out, performs the repair, and logs the job on a mobile device." },
          { title: "Follow-up", text: "Job details flow into the FSM software so the office can follow up the next business day — parts-order return visits, invoicing, and QA review of the emergency classification." },
        ],
        roles:
          "One on-call technician per week (or shift), a rotation manager who builds the schedule and approves swaps, after-hours answering-service agents trained on the company's specific script, and a daytime office dispatcher who converts triaged calls into scheduled jobs the next morning.",
        timeline:
          "Call to tech notified: a few minutes once triaged as urgent. Notification to arrival: brands at this tier commonly advertise 60–120 minutes (some with a guarantee and a credit if missed), though realistic ranges run 2–4 hours depending on tech location and whether the on-call tech is already out on another emergency.",
        tools:
          "AnswerForce/Nexa (~$279+/month for ~200 minutes) builds trades-specific dispatch scripts by default; AnswerConnect (~$325/month for 100 minutes) offers reliable always-human coverage; Smith.ai (from ~$97.50/month) runs a hybrid AI-plus-human model integrating natively with Housecall Pro and Jobber. ServiceTitan's Dispatch Pro uses an AI-scored assignment algorithm (tech location, skills, drive time, revenue potential) once a shop exceeds ~$1M revenue/double-digit trucks — though its on-call *rotation* logic is less turnkey; most companies still decide who's on-call via the answering service or an internal calendar. Emerging AI-first entrants (Trillet, OnCrew, AgentZap, Whippy) undercut legacy human services on price with built-in emergency-keyword detection. Gap: fully closing the loop between the answering service and dispatch software — many shops still have a manual hand-off where the tech has to manually create the job in ServiceTitan/Housecall Pro rather than it flowing automatically; and no tool yet handles real-time prioritization when two emergency calls hit the single on-call tech simultaneously.",
        moneyFlow:
          "Same 1.5x–2x weeknight / 2x–3x weekend multiplier as Tier A, more systematized, often layered with a distinct $150–500 emergency dispatch fee collected regardless of repair cost. On-call tech pay follows one of three models: a flat weekly stipend ($150–300/week) plus normal OT pay for actual work; per-call premium only (time-and-a-half/double-time with a minimum 2-hour callout guarantee); or a hybrid of a smaller stipend ($75–100/week) plus the per-call premium — the most common model in 4–10-tech shops. The company keeps the bulk of the emergency-rate markup as margin; the tech's take is the wage premium plus any stipend, not a percentage of the invoice.",
        failurePoints: [
          "On-call rotation is cited as the single biggest driver of senior-technician turnover — replacing a departing tech costs an estimated $15,000–$30,000 directly, $55,000–$110,000+ fully loaded; industry turnover runs 20–35% annually.",
          "Billing disputes over \"false emergency\" classification, either overbilled or a genuine emergency mis-triaged as routine.",
          "Coverage gaps at 2 a.m. — a second simultaneous emergency call has no automatic overflow.",
          "Fair-distribution problems — without disciplined weekly rotation, senior/reliable techs get disproportionately tapped for the hardest calls, accelerating their burnout.",
        ],
      },
      {
        key: "C",
        name: "Large National/Franchise Platform",
        tag: "Roto-Rooter, ARS/Rescue Rooter, Neighborly (Mr. Rooter, Aire Serv)",
        color: TIER_COLOR.C,
        profile:
          "National brands or franchise networks operating across dozens to hundreds of markets, where a guaranteed emergency-response experience is itself part of the brand promise. Roto-Rooter dispatches 24/7/365 nationally using outsourced call-center partner Dexcomm for live answering, AI web chat, and AI voice across its franchise network; ARS/Rescue Rooter and Neighborly's Mr. Rooter/Aire Serv brands all advertise 24/7/365 emergency response backed by network-wide service guarantees. Individual franchisees still vary in actual SLA language even though the call-center infrastructure and brand promise is centralized.",
        steps: [
          { title: "Call received", text: "Routed into a centralized national/regional 24/7 call center, either in-house or outsourced to a specialized dispatch partner serving the entire franchise network rather than one local shop." },
          { title: "Triage", text: "Call-center agents follow standardized, brand-wide scripting with defined emergency criteria, increasingly supported by AI voice/chat pre-screening before or alongside a live agent." },
          { title: "Dispatch", text: "The call center routes the ticket into a market-specific dispatch queue tied to the local franchise's actual technician availability, using dispatch software integrated with the franchise's field service platform." },
          { title: "Emergency visit", text: "The local franchise's technician (still an on-call rotation at the individual-location level, functionally identical to Tier B) performs the visit, tracked centrally against the brand's advertised SLA." },
          { title: "Follow-up", text: "Centralized systems track completion, trigger satisfaction surveys, and apply a financial guarantee/credit if a location misses its promised response window." },
        ],
        roles:
          "Centralized 24/7 call-center agents serving the whole network, regional/market dispatch coordinators sitting between the call center and local technicians, local on-call technicians (the same fundamental role as Tier B), franchise operations/brand-standards staff monitoring SLA compliance, and software/data teams managing the shared dispatch and AI answering systems.",
        timeline:
          "Call to dispatch decision: near-instant to a few minutes, purpose-built for speed. Dispatch to arrival: brands commonly market ~1–2 hour emergency-response windows, with same-day guarantees for non-emergencies — though the underlying constraint (how many techs a given local franchise has on-call that night) is identical to Tier B and caps how fast any national brand can truly perform in a given market.",
        tools:
          "Outsourced call-center-as-a-service providers like Dexcomm run 24/7 live answering, dispatching, and AI voice/chat specifically for a national franchise network — individual franchisees don't run separate answering setups. Brands typically standardize the entire network on one enterprise platform (usually ServiceTitan) so call-center triage decisions flow directly into each market's dispatch board, closing the manual hand-off gap that persists at Tier B. National brands are furthest along in deploying custom-built AI voice/chat answering at scale, since call volume justifies the investment (mirroring municipal 911 systems piloting AI call triage). Gap: the national call center can triage a call in seconds, but it cannot manufacture technician capacity in a given market at 2 a.m. — the response-time bottleneck is still local on-call staffing, and AI-driven demand forecasting to proactively staff for predictable surges (heatwaves, deep freezes, storm outages) is emerging but not yet uniformly solved; most brands still react to surges rather than predicting them.",
        moneyFlow:
          "Pricing multipliers match Tiers A/B (1.5x–3x, $150–500 dispatch fee), but national brands more often formalize a written response-time guarantee with a financial remedy — a bill credit if the SLA is missed — turning the guarantee itself into a marketing and retention tool. On-call technician pay mirrors Tier B since the workforce is organized and paid at the local franchise level, not nationally. The franchisor's economics benefit from spreading the fixed cost of a 24/7 call center across many locations — a scale advantage no single Tier B company can replicate.",
        failurePoints: [
          "SLA-vs-reality gap — a national guarantee is only as good as the local franchise's actual on-call staffing that night; thin local capacity creates customer-facing failures and financial-credit liabilities even when the call center performed perfectly.",
          "Consistency across franchisees — quality and speed of the technician half of the response can vary significantly location to location even when the call-center half is brand-consistent.",
          "The same underlying burnout/turnover economics as Tier B persist at the local-technician level — centralizing the call center doesn't fix on-call rotation fatigue underneath it.",
          "Billing-dispute risk at scale — a national name draws more scrutiny and online reviews, so disputes over emergency-rate classification escalate into public reputation damage faster.",
        ],
      },
    ],
  },
  {
    id: "membership-plans",
    label: "Membership & Maintenance Plans",
    intro:
      "The recurring-revenue subscription model trades businesses sell directly to homeowners — an annual HVAC tune-up plan, a plumbing membership with priority service and discounts. Barely monetized at the small-shop level, it becomes the single biggest lever of enterprise valuation once a business scales — recurring revenue can push an EBITDA multiple from ~4-5x to 6-7x or higher.",
    compare: [
      { label: "Pricing", a: "$99–$200/year, informally set", b: "Tiered $129–$225/year (Silver/Gold/Platinum)", c: "$14.95–$29.95/month base-plus-add-on, corporate-standardized" },
      { label: "Sale mechanism", a: "Verbal mention at end of a call, no spiff", b: "Scripted point-of-service + CSR prompts, $25–50 spiff", c: "Corporate-engineered pitch, network-wide leaderboards" },
      { label: "Core software", a: "Spreadsheets, QuickBooks", b: "ServiceTitan Memberships, Housecall Pro Service Plans", c: "ServiceTitan network-wide + marketing automation layered on top" },
      { label: "CLV impact", a: "Not tracked", b: "2.4–5x a one-time customer (~$47K vs. ~$15K)", c: "~28% of top-quartile revenue; drives EBITDA multiple" },
      { label: "Top failure point", a: "Invisible membership base — can't even count members", b: "Renewal leakage, undelivered visits", c: "\"Membership theater\" — inflated counts without delivered visits" },
    ],
    tiers: [
      {
        key: "A",
        name: "Small Independent Shop",
        tag: "1–15 employees, informal/basic plan",
        color: TIER_COLOR.A,
        profile:
          "A single-location HVAC, plumbing, or electrical shop, $500K–$3M annual revenue, owner-operator involved in sales/dispatch. Plans are usually a simple annual tune-up agreement offered to the existing customer base rather than a marketed product line — membership is a retention afterthought, not a strategic pillar. These are the thousands of unbranded local shops running on basic field service software or paper/QuickBooks — exactly the type of business a franchise or PE platform later acquires as a \"tuck-in.\"",
        steps: [
          { title: "Sale", text: "A technician mentions the plan verbally at the end of a service call — no structured script, no CSR-driven outbound campaign, sometimes bundled free with a big repair as a goodwill gesture." },
          { title: "Onboarding", text: "Handwritten or informally logged in a spreadsheet/whiteboard system — no automated confirmation, member portal, or card-on-file vaulting." },
          { title: "Scheduling visits", text: "The owner or office admin manually calls or texts customers when a tune-up is \"due,\" often reactively rather than proactively." },
          { title: "Renewal/retention", text: "No dedicated renewal cadence — expiration is only noticed when it's already lapsed, if at all." },
          { title: "Cancellation", text: "Informal — usually just stops billing or stops responding, with no written policy." },
        ],
        roles:
          "The owner sets pricing and occasionally sells; the technician offers the plan at point of service with no spiff or quota; the office admin/bookkeeper manually tracks members in a spreadsheet or basic invoicing tool.",
        timeline:
          "An annual term is typical (mirroring the two-season HVAC tune-up cadence), 1–2 visits/year. Renewal is ad hoc — often just \"we'll call you next year,\" with no formal cycle.",
        tools:
          "Predominantly spreadsheets/Excel or paper — templates exist but fail in the field with no photo upload, e-signature, or automated scheduling alerts. Entry-level owners sometimes use QuickBooks or Jobber's cheapest tier without a true recurring-billing/membership module. Gap: no automated renewal reminders, no card-vaulting for auto-billing, and no reporting on attach rate or plan penetration — the business literally cannot see how many members it has or which are lapsed. This is the single biggest reason Tier A shops under-monetize membership: it's invisible in their own systems.",
        moneyFlow:
          "Prices are usually a flat, low, single-tier fee — roughly $99–$200/year for a basic 1–2 visit plan, informally set by \"what feels fair\" rather than margin math. Discount structure is inconsistent (sometimes 10% off repairs, sometimes nothing formal). No CLV or valuation analysis is performed — the owner doesn't realize membership is worth $47K+ in lifetime value per Tier B/C benchmarks; it's treated as a courtesy, not an asset.",
        failurePoints: [
          "Extremely low attach rate — no spiff, no script, no tracking of who sells vs. doesn't.",
          "Members \"forgotten\" — no renewal outreach means silent attrition that's invisible because there's no baseline count.",
          "Members who are billed but never scheduled feel cheated when there's no auto-scheduling.",
          "No clear cancellation/refund policy creates disputes when a customer wants their money back.",
          "Because none of this is tracked, the business can't demonstrate recurring revenue at exit — exactly the value PE roll-ups later capture by installing systems.",
        ],
      },
      {
        key: "B",
        name: "Regional Company",
        tag: "$5M–$50M revenue, structured multi-tier program",
        color: TIER_COLOR.B,
        profile:
          "A multi-truck, multi-location regional operator, often family-owned or recently PE-backstopped as an \"add-on\" acquisition, running a formal, branded membership program with 2–4 tiers (e.g. Silver/Gold/Platinum). Real examples: Ramco Plumbing, Heating & Air (Silver $129/Gold $189/Platinum $225 annually), Moore Mechanical, CPI Service, Service Champions' \"MVP Plus\" membership.",
        steps: [
          { title: "Sale", text: "Structured point-of-service selling — techs are trained/scripted and incentivized with a per-membership spiff ($25–50 is a common benchmark); CSRs offer membership on every diagnostic call above a certain ticket size, supplemented by seasonal outbound campaigns." },
          { title: "Onboarding", text: "Card-on-file vaulted in the field service platform, a membership record created with tier and term, automated welcome email/portal access." },
          { title: "Scheduling visits", text: "Software auto-generates recurring service events (spring/fall tune-ups) and auto-books or auto-reminds; dispatch runs a \"membership visit\" report to fill schedule gaps in slow seasons." },
          { title: "Renewal/retention", text: "A dedicated \"Expiring Memberships\" workflow — bulk renewal estimates generated, renewal calls made by a CSR or retention coordinator before expiration; auto-renew is standard with card-on-file." },
          { title: "Cancellation", text: "A formal policy with defined refund/pro-ration rules, handled by CSR/retention staff and logged in the system." },
        ],
        roles:
          "Technicians sell at point of service and are tracked/scored on attach rate, often on a leaderboard; CSRs/call-center staff are prompted to offer membership on qualifying calls and handle renewal calls; a dedicated retention/marketing coordinator owns the expiring-memberships queue and win-back campaigns; an office/ops manager reviews reporting on plan penetration and tech-level conversion.",
        timeline:
          "Standard term is annual (monthly or annual billing options), 1 visit/year for entry tier and 2/year for mid/upper tiers. Renewal outreach begins 30–60 days before expiration via the expiring-memberships report. A healthy benchmark target is roughly 25% of service calls converted to membership, with top techs converting 50%+ vs. laggards at 10%.",
        tools:
          "ServiceTitan's Memberships module is the dominant platform — upfront/monthly/annual billing, auto-renewal, \"Renewal Protection\" (auto-updates expired cards), a dedicated Expiring Memberships follow-up screen, and revenue/employee-attribution reporting. Housecall Pro Service Plans is the comparable mid-market option, automating recurring agreements and card-on-file. Gap: neither platform has a native predictive churn-scoring model identifying which specific members are at risk before they lapse — retention coordinators still work reactively off an \"expiring\" list, not a \"likely-to-churn\" list. True churn-prediction tools (ChurnZero, Retently) exist for SaaS/subscription businesses generally but are rarely integrated into ServiceTitan/Housecall Pro workflows — a real, current whitespace.",
        moneyFlow:
          "Tiered annual pricing in the wild: Silver ~$129, Gold ~$189, Platinum ~$225 (Ramco); the broader market sweet spot is $20–30/month ($240–360/year), comprehensive plans $300–500/year. Discount structure by tier commonly runs 5% (Silver) to 10% (Gold/Platinum) off repairs. Target margin is 30–50% gross on the maintenance deliverable itself. CLV impact: a member on a maintenance plan is worth 2.4–5x the lifetime value of a one-time customer (~$47,200 vs. ~$15,340 average residential HVAC CLV over a 7–10 year relationship). Businesses with 30%+ of revenue from membership outperform emergency-only operations by 4–6 net margin points.",
        failurePoints: [
          "Attach rate frequently underperforms the 25% target without active coaching/spiffs.",
          "Renewal tracking still leaks — auto-renewal failures from expired cards are common if Renewal Protection isn't enabled.",
          "Members who never get their included visits scheduled (because dispatch prioritizes revenue-generating repair calls) feel like they paid for nothing — a widely cited driver of cancellation and negative reviews.",
          "Cancellation/refund disputes show a recurring pattern in consumer-complaint data, especially around unclear cooling-off terms.",
        ],
      },
      {
        key: "C",
        name: "National Platform / Franchise",
        tag: "ARS/Rescue Rooter, Authority Brands, Neighborly (KKR)",
        color: TIER_COLOR.C,
        profile:
          "Multi-hundred-to-thousand-location platforms, either company-owned (ARS/Rescue Rooter — all locations company-owned) or franchise networks under a PE-backed umbrella (Authority Brands' One Hour Heating & Air ~340 units, Benjamin Franklin Plumbing, Mister Sparky; Neighborly's ~30+ brands including Aire Serv, ~5,500 US franchise units). Membership programs here are a deliberate, board-level KPI and a core lever of enterprise valuation — industry-wide, memberships now represent nearly 28% of total revenue for top-quartile firms in this segment.",
        steps: [
          { title: "Sale", text: "Highly standardized and centrally engineered — corporate designs the pitch, pricing, and spiff structure; local franchisees execute. Call-center CSRs at scale are scripted to pitch membership system-wide, not location-by-location." },
          { title: "Onboarding", text: "Fully automated through enterprise field-service software (usually ServiceTitan) — card vaulting, member portal, standardized \"member since\" tracking across every location for consolidated reporting." },
          { title: "Scheduling visits", text: "Centralized dispatch algorithms use membership visits to fill technician schedule gaps across hundreds of locations; visit-completion rate is tracked as a corporate KPI." },
          { title: "Renewal/retention", text: "Dedicated retention/marketing operations run centralized win-back and reactivation campaigns using marketing automation layered on top of ServiceTitan data; renewal rate is board-reported." },
          { title: "Cancellation", text: "A formalized, legally reviewed cancellation/refund policy applied uniformly across all locations, since state consumer-protection exposure is much higher at national scale." },
        ],
        roles:
          "Field technicians sell at point of service, tracked/gamified across the entire network; centralized call-center/CSR teams handle both new-membership pitches and renewal calls at scale; a retention/marketing department owns win-back campaigns and cross-brand benchmarking; RevOps/Finance reports recurring membership revenue as a distinct board-level metric because it directly drives valuation multiple; franchise/brand corporate teams set program design, pricing guardrails, and the technology stack for all locations.",
        timeline:
          "The same core annual-term, 1–2 visit structure as Tier B, but renewal cycles are managed with far more rigor and predictive lead time because lapses are financially material across a much larger member base.",
        tools:
          "ServiceTitan is effectively the enterprise standard — its Memberships module, Expiring Memberships automation, Renewal Protection, and multi-location revenue/attribution reporting scale to hundreds of locations, which is often the reason a newly acquired shop gets migrated onto the parent's instance specifically to make its membership base visible and manageable. Marketing automation and CRM tools layer on top for cross-location retention campaigns and location-by-location benchmarking. Gap: true churn prediction — as opposed to churn reporting — remains immature even at the largest platforms; there's no widely adopted, trades-native AI model predicting which members are likely to lapse before the renewal notice is even sent. This is the most commonly cited software whitespace across the entire industry: plenty of tooling for issuing and billing memberships, comparatively little for intelligently saving them.",
        moneyFlow:
          "Pricing mirrors Tier B benchmarks but corporate-standardized — ARS/Rescue Rooter's Pro Service Plan runs $20/month for the first HVAC system plus $10/month per additional system, with $5 add-ons for plumbing/electrical inspections. Broad market bundle pricing at this scale runs $14.95–29.95/month or $179–329/year for combined HVAC/plumbing/electrical club memberships. Recurring revenue is described as the single biggest multiple lever in home-services M&A: a business generating mostly one-time/project revenue trades at roughly 4-5x EBITDA, while the same business with maintenance programs representing ~60% of revenue can trade at 6-7x, with best-in-class, AI-systematized, high-recurring-revenue operators reaching 8-10x+. Even shifting 20% of revenue into recurring contracts is cited as enough to push a business into a materially higher multiple bracket — precisely why PE-backed platforms treat membership penetration as a primary post-acquisition value-creation lever.",
        failurePoints: [
          "Inconsistency between locations/franchisees becomes the dominant risk at scale — some units sell aggressively and deliver reliably, others let attach rate and visit-completion lag, dragging down consolidated renewal metrics that matter to the platform's valuation story.",
          "Legal/regulatory exposure scales with member count — cancellation and refund disputes, aggressive sales tactics, and unclear terms create brand-wide reputational and legal liability rather than a single-location headache.",
          "\"Membership theater\" risk — the incentive to inflate reported membership counts or attach rates without matching investment in actually delivering the visits; M&A diligence specifically scrutinizes visit-completion and renewal rates, not just gross signed-membership counts, precisely because \"paper\" memberships that never get serviced are a known due-diligence red flag.",
          "Churn-prediction sophistication genuinely lags membership-sales sophistication industry-wide — even the largest platforms are better at acquiring members than at predicting and preventing their loss, capping how much theoretical CLV upside is actually realized.",
        ],
      },
    ],
  },
];
