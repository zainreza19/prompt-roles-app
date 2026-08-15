import type { WorkflowType } from "@/data/business-workflows";

const TIER_COLOR = { A: "#4ECDC4", B: "#FF9F40", C: "#FF6B6B" };

export const financialServicesWorkflows: WorkflowType[] = [
  {
    id: "retail-banking",
    label: "Retail Banking & Lending",
    intro:
      "Checking/savings accounts, personal loans, and mortgages — from a community bank's relationship-based underwriting, to a regional bank's automated LOS pipeline, to a megabank's proprietary AI credit models approving loans in minutes.",
    compare: [
      { label: "Core system", a: "Jack Henry, Fiserv, or FIS core", b: "Same core + nCino/Encompass LOS", c: "Heavily customized proprietary core + LOS" },
      { label: "Mortgage close time", a: "~42 days, relationship underwriting", b: "~42 days, more reliably hit via LOS", c: "Often faster for prime borrowers via automation" },
      { label: "Interchange", a: "Uncapped (Durbin-exempt under $10B assets)", b: "Capped once crossing $10B assets", c: "Capped (Durbin-regulated)" },
      { label: "Underwriting", a: "Manual, loan officer + committee", b: "Automated rules + manual exceptions", c: "Proprietary ML models, largely instant" },
      { label: "Top failure point", a: "Core system lock-in, key-person risk", b: "Post-merger system fragmentation", c: "Algorithmic bias for edge-case borrowers" },
    ],
    tiers: [
      {
        key: "A",
        name: "Community Bank / Credit Union",
        tag: "$100M-$10B assets, 1-30 branches",
        color: TIER_COLOR.A,
        tldr: "A community bank or credit union is like the neighborhood store version of a bank — a small team who often actually knows you, deciding by hand whether to lend you money, making money from the gap between what they pay you on savings and what they charge borrowers.",
        profile:
          "Typically $100M-$10B in assets, 1-30 branches, local/regional footprint, often family-owned (banks) or member-owned (credit unions). Real examples: Navy Federal Credit Union (~$197.1B in assets, 15.2M members as of Dec 2025 — the largest natural-member credit union, though bordering Tier B); State Employees' Credit Union of NC (~$55.4B in assets); the modal example is a sub-$2B community bank, representative of the roughly 4,000+ community banks and 4,500+ credit unions in the US.",
        steps: [
          { title: "Account opening", text: "Customer applies in-branch or via a digital account-opening tool; ID verification and OFAC/CIP checks run via the core system or a bolt-on KYC vendor." },
          { title: "Funding & core setup", text: "New account is provisioned on the core banking system (Jack Henry, Fiserv, or FIS), initial deposit posted, debit card ordered through a card processor." },
          { title: "Loan application intake", text: "Personal loan or mortgage application taken by a loan officer, often still partly paper/PDF-based." },
          { title: "Manual underwriting-assisted review", text: "Loan officer or a small underwriting team pulls credit and verifies income/employment manually, often personally knowing the borrower — relationship-based underwriting is a hallmark here." },
          { title: "Loan committee approval", text: "Above a certain dollar threshold, loans go to a loan committee (senior lender + board members) rather than an automated decision engine." },
          { title: "Mortgage processing & closing", text: "A loan origination system (Encompass or Mortgage Cadence) tracks appraisal, title, and closing docs; many community banks sell the loan into the secondary market." },
          { title: "Ongoing servicing", text: "Member/customer service reps handle payments, statements, and disputes, often via the same core platform." },
        ],
        roles:
          "Branch Manager/Personal Banker, Loan Officer/Consumer Lending Officer, Mortgage Loan Originator (NMLS-licensed), Underwriter (often 1-3 people wearing multiple hats), Loan Processor, Compliance Officer covering BSA/AML/Reg B/HMDA, VP of Lending, Loan Committee.",
        timeline:
          "Checking/savings opening: same day to 1-2 days if manual review triggered. Personal loan approval: 1-3 business days. Mortgage: averages roughly ~42 days close industry-wide, with underwriting itself taking 3-10 business days within that.",
        tools:
          "Jack Henry (SilverLake/CIF 20/20), Fiserv (Precision, DNA), FIS Horizon — the \"Big Three\" cores, typical deals running low-to-mid six figures to ~$800K TCV. Narmi, MANTL (acquired by Alkami for ~$400M, 2025) for digital account opening. ICE Mortgage Technology's Encompass (dominant market share), Mortgage Cadence, MeridianLink for loan origination. What's well-solved: core deposit processing, digital account opening, compliance reporting. Real gap: small-dollar personal loan underwriting remains clunky — many community banks rely on spreadsheets for anything outside a FICO-score auto-decision, because full LOS licensing is expensive relative to loan volume — a real underserved niche for a lightweight AI-assisted underwriting copilot sized for a 2-person lending team.",
        moneyFlow:
          "Net interest margin (NIM) — the spread between interest earned on loans and interest paid on deposits — is the core profit engine; community banks typically run NIMs somewhat higher than megabanks due to relationship pricing. Banks under $10B in assets are exempt from the Durbin Amendment's interchange cap, earning uncapped (higher) debit interchange — a meaningful, protected revenue stream. Many community banks sell mortgages into the secondary market to free up balance sheet, keeping the origination fee.",
        failurePoints: [
          "Core system lock-in — switching from Jack Henry/Fiserv/FIS is a multi-year, multi-million-dollar undertaking.",
          "Key-person risk in underwriting — a 1-2 person team means turnover stalls the pipeline.",
          "Manual HMDA/fair-lending compliance errors and missing-documentation delays stalling mortgage underwriting.",
          "Interest rate risk concentration on a small balance sheet — the structural risk behind Silicon Valley Bank's 2023 collapse at larger magnitude.",
        ],
        opportunity:
          "Build a lightweight, AI-assisted underwriting copilot purpose-priced for the thousands of sub-$1B community banks/credit unions that can't justify a full nCino or Encompass license — automating document collection and income verification for personal and small mortgage loans, sold as an affordable monthly add-on rather than a six-figure LOS contract.",
      },
      {
        key: "B",
        name: "Regional Bank",
        tag: "$10B-$250B assets, multi-state",
        color: TIER_COLOR.B,
        tldr: "A regional bank is a bigger, multi-state bank that uses computer programs to make most loan decisions automatically and fast, but stitches together several different software systems (often left over from buying smaller banks) that don't always talk to each other perfectly.",
        profile:
          "Roughly $10B-$250B in assets, multi-state branch networks, publicly traded or large mutual/private, with dedicated mortgage and consumer lending divisions. Real examples: Zions Bancorporation (confirmed active nCino customer as of 2025); Regions Financial, Huntington Bancshares, and Fifth Third Bank represent this tier's typical scale.",
        steps: [
          { title: "Omnichannel account opening", text: "Branch, call center, and app-based opening feed into a unified digital banking platform (Q2, Backbase), with automated KYC/CIP and fraud scoring." },
          { title: "Centralized loan intake", text: "Applications funnel into a dedicated LOS rather than a loan officer's inbox; much of consumer lending is decisioned by automated credit-scoring engines." },
          { title: "Automated + manual underwriting hybrid", text: "Standard loans run through rules-based/AI-assisted underwriting; exceptions and jumbo/complex loans route to human underwriters in centralized hubs." },
          { title: "Loan origination pipeline management", text: "nCino or Encompass tracks the loan through processing, appraisal ordering, title, and conditions clearing, with dedicated processing teams." },
          { title: "Secondary market decision", text: "A centralized capital markets or secondary marketing desk decides whether to sell the mortgage or hold it in portfolio." },
          { title: "Closing & funding", text: "Coordinated through title/settlement integrations built into the LOS; e-closing adoption is much higher than Tier A." },
          { title: "Post-close QC & compliance review", text: "A dedicated QC team audits a sample of closed loans for investor/regulatory compliance." },
        ],
        roles:
          "Retail Banking Regional/Division Executives, Digital Banking Product Managers, Centralized Underwriting Managers and teams, Loan Processors and Closers, Mortgage Loan Originators, Capital Markets/Secondary Marketing Analysts, Compliance & QC teams, Chief Lending Officer.",
        timeline:
          "Digital account opening: minutes to same-day. Personal loan: often instant-to-same-day for standard unsecured loans. Mortgage: tracks near the ~42-day national average, with strong LOS integration pushing toward the faster end.",
        tools:
          "Q2, Backbase, and Alkami (now including MANTL) for digital banking. nCino is the dominant commercial/small-business/consumer LOS; ICE Mortgage Technology's Encompass holds roughly half the mortgage-origination market, with Black Knight's Empower a distant second. Well-solved: automated income/asset verification, e-closing, and digital account opening are mature. Real gap: cross-system data fragmentation between the digital banking layer, the LOS, and a legacy core often inherited through bank M&A — regional banks frequently run several different vendor stacks stitched together after acquisitions.",
        moneyFlow:
          "NIM remains the primary profit driver, managed more actively through treasury/ALCO functions. Once a bank crosses the ~$10B asset threshold, it becomes subject to the Durbin Amendment's capped debit interchange — a genuine strategic cliff-edge banks actively manage growth around. Dedicated secondary marketing desks generate gain-on-sale revenue from mortgage sales, and servicing fee income is tracked as its own P&L line for banks retaining servicing rights.",
        failurePoints: [
          "Post-merger system fragmentation — integrating an acquired bank's core/LOS stack is a recurring, costly, multi-year failure point.",
          "The $10B Durbin threshold as a genuine strategic cliff-edge on interchange revenue.",
          "Automated underwriting edge cases mishandling self-employed/gig-economy/thin-file borrowers, raising fair-lending exposure.",
          "Secondary market execution risk — gain-on-sale margins compress if rates move against the bank between lock and sale.",
        ],
        opportunity:
          "Build an AI-native orchestration/reconciliation layer that sits across a regional bank's fragmented Q2/Backbase + nCino/Encompass + legacy core stack (common after years of bank M&A) to give lending and ops teams one real-time view of a loan/account across systems.",
      },
      {
        key: "C",
        name: "Megabank",
        tag: "$250B+ assets, national footprint",
        color: TIER_COLOR.C,
        tldr: "A megabank like Chase or Bank of America uses its own giant, custom-built computer systems and huge amounts of customer data to approve most loans almost instantly for typical customers, but anyone slightly unusual tends to get stuck because the system wasn't built with them in mind.",
        profile:
          "$250B+ up to several trillion dollars in assets, national/international footprint, thousands of branches, proprietary technology built largely in-house. Real examples: JPMorgan Chase, Bank of America, Wells Fargo, and Citigroup — the largest US banks by assets, each operating retail banking, mortgage, and personal lending at national scale.",
        steps: [
          { title: "App-first account opening", text: "The large majority of new checking/savings accounts open through the bank's own mobile app, with real-time identity verification, device fingerprinting, and fraud/AML screening running in milliseconds." },
          { title: "AI/ML-driven credit decisioning", text: "Personal loan and pre-qualified mortgage decisions are made largely by proprietary machine-learning credit models trained on the bank's own massive internal data." },
          { title: "Centralized mortgage origination factories", text: "Applications flow into large centralized origination \"factories\" using heavily customized versions of Encompass or proprietary LOS platforms." },
          { title: "Automated underwriting engines", text: "Proprietary systems issue conditional approvals in minutes for standard files; human underwriters handle exceptions, jumbo, and non-QM loans." },
          { title: "Capital markets securitization", text: "A dedicated capital markets division bundles and sells originated mortgages into MBS at massive scale, or retains selected loans on balance sheet." },
          { title: "Closing via national e-closing infrastructure", text: "Nearly fully digital closings in most states." },
          { title: "Servicing at massive scale", text: "In-house mortgage servicing divisions manage millions of loans, with dedicated loss-mitigation and default-management units." },
        ],
        roles:
          "Head of Consumer & Community Banking, Regional Retail Executives, Centralized Underwriting Directors and large teams, Data Science/ML teams building proprietary credit models, Capital Markets/Securitization teams, Loss Mitigation and Default Servicing teams, large Compliance/Fair Lending/Model Risk Management departments.",
        timeline:
          "Digital account opening: typically minutes, fully self-service. Personal loan approval: often instant (pre-approved offers surfaced in-app). Mortgage: broadly in line with the ~42-day industry average, though \"fast-track\" programs for existing wealth/premier customers can move faster.",
        tools:
          "Megabanks largely run heavily customized proprietary or deeply modified commercial platforms built and maintained by thousands of internal engineers. Well-solved: end-to-end digital origination for standard/prime borrowers is essentially frictionless — instant pre-approval, automated document retrieval, near-fully digital closings. Real gap: complex/edge-case borrowers (self-employed, first-generation wealth, credit-invisible) are systematically underserved because proprietary ML models optimize for the median high-volume case — this has fueled real fintech alternatives like Upstart (alternative-data underwriting for personal loans specifically serving borrowers megabank models decline).",
        moneyFlow:
          "NIM is typically lower/more compressed than smaller banks given larger low-yield institutional balance sheets, but absolute dollar volume is enormous. Megabanks are squarely subject to the Durbin cap on debit interchange, compensating through volume and uncapped credit-card interchange. Capital markets divisions generate substantial fee income securitizing mortgages into MBS, and mortgage servicing rights (MSRs) generate ongoing fee income actively bought, sold, and hedged as a financial asset.",
        failurePoints: [
          "Algorithmic/model bias at scale — any blind spot in proprietary ML models produces fair-lending exposure at massive scale.",
          "Servicing/loss-mitigation breakdowns during systemic stress events, well-documented during the 2008-2012 foreclosure crisis.",
          "Legacy technical debt — some genuinely old core infrastructure still runs under modern layers at several major banks.",
          "Customer-experience depersonalization for edge cases, driving attrition to fintech alternatives.",
        ],
        opportunity:
          "Build an AI-native underwriting layer specifically for the borrower segments megabank automated underwriting systematically declines or stalls (self-employed, gig-income, thin-file, first-generation wealth) — a validated model in personal lending (Upstart), but the mortgage-specific and small-business-lending version of this gap remains comparatively underserved.",
      },
    ],
  },
  {
    id: "payments-processing",
    label: "Payments Processing",
    intro:
      "How a card swipe or bank transfer actually moves money — from a small ISO reselling processing under a sponsor bank's umbrella, to a mid-size fintech card-issuing platform, to Visa/Mastercard/Stripe routing transactions worldwide in milliseconds.",
    compare: [
      { label: "Who bears risk", a: "Sponsoring acquiring bank; ISO earns residual", b: "Sponsor bank + payments company share risk", c: "Card network sets rules; issuing bank takes credit risk" },
      { label: "Settlement time", a: "T+1/T+2 typical", b: "T+1 card; 1-3 days ACH", c: "Sub-second authorization; T+1/T+2 clearing" },
      { label: "Key tools", a: "Stripe, Square, NMI, Payrix/Finix", b: "Marqeta, Galileo, Lithic, Modern Treasury, Unit", c: "Proprietary VisaNet/network infrastructure, Adyen, Fiserv" },
      { label: "Revenue mechanic", a: "Interchange + markup residual", b: "Interchange revenue share + per-transaction fees", c: "Assessment fees (network) or blended markup (processor)" },
      { label: "Top failure point", a: "Chargeback ratio triggers monitoring/termination", b: "Sponsor bank relationship risk", c: "Regulatory/antitrust pressure over interchange" },
    ],
    tiers: [
      {
        key: "A",
        name: "Small Independent Processor / ISO / PayFac",
        tag: "Tens to low hundreds of millions in volume",
        color: TIER_COLOR.A,
        tldr: "A small payment processor is like a middleman who helps a local shop accept credit cards, working under a bigger bank's umbrella and taking a small cut of every sale as its fee.",
        profile:
          "A small independent sales organization (ISO), payment facilitator (PayFac), or reseller typically processing tens of millions to low hundreds of millions of dollars in annual volume, with a handful to a few dozen employees. Most don't hold their own bank sponsorship — they operate under a sponsoring acquiring bank's or a larger PayFac's umbrella. Real examples: small resellers building on Stripe Connect, PayPal/Braintree, or Fiserv's Clover; small e-commerce payment facilitators building directly on Stripe or Adyen for Platforms.",
        steps: [
          { title: "Merchant prospecting & sales", text: "An ISO sales rep or a self-serve signup flow brings in a small business wanting to accept card payments." },
          { title: "Merchant onboarding & underwriting", text: "KYC/KYB checks are run, often via the sponsoring processor's or Stripe/Adyen's underwriting API rather than an in-house risk team." },
          { title: "Terminal/gateway setup", text: "A physical card reader or an online payment gateway/checkout integration is provisioned for the merchant." },
          { title: "Authorization", text: "When a customer pays, the transaction routes from the terminal/gateway through the processor to the card network and on to the issuing bank, which approves or declines in real time." },
          { title: "Clearing and settlement", text: "Approved transactions are batched and cleared through the network; funds move from issuing bank through the network to the acquiring bank into the merchant's account, typically within 1-2 business days." },
          { title: "Dispute/chargeback handling", text: "The ISO/PayFac collects evidence from the merchant and submits it through the sponsoring processor's dispute system; unresolved disputes result in a chargeback debited from the merchant." },
        ],
        roles:
          "ISO Sales Rep/Independent Agent, Merchant Onboarding/Underwriting Specialist (often outsourced to the sponsoring processor), Customer Support Rep, Risk/Fraud Analyst (often shared with the sponsor bank or platform), Owner/Principal often running a \"portfolio\" of merchant accounts on residual income.",
        timeline:
          "Merchant onboarding: same-day to a few days for low-risk merchants using an automated PayFac flow; up to 1-2 weeks for higher-risk categories requiring manual underwriting. Settlement: typically 1-2 business days. Dispute resolution: card networks generally give merchants roughly 20-45 days to respond, with final resolution often taking 30-90+ days.",
        tools:
          "Stripe (and Stripe Connect for platforms), Square, PayPal/Braintree, Fiserv's Clover, NMI (white-label gateway popular with ISOs), Payrix and Finix (payment-facilitation-as-a-service). For fraud/chargebacks: Kount, Sift, Chargebacks911, Verifi. Well-solved: basic merchant onboarding and gateway/terminal setup are now largely self-serve and fast. Real gap: small ISOs and software companies wanting to embed payments still face a meaningful build/integration lift even with \"PayFac-as-a-service\" providers, and fraud/chargeback tooling built for enterprise merchants is often overkill and overpriced for a small ISO's actual dispute volume.",
        moneyFlow:
          "The core mechanic is interchange plus markup: interchange (set by the card networks, paid to the issuing bank) typically runs 1.5%-2.5% of transaction value plus a small per-transaction fee, plus a network assessment fee, plus the acquirer/ISO's own markup. The ISO's income is typically a residual — an ongoing share of that markup spread paid out monthly, which is why ISO business is often built and sold as a \"residual portfolio.\"",
        failurePoints: [
          "High chargeback ratios (exceeding roughly 0.9%-1% of transactions) can get a merchant or the whole ISO placed into a monitoring program or terminated.",
          "Undercapitalized ISOs get squeezed by rolling reserve requirements from their sponsor bank when a merchant's risk profile changes.",
          "Merchant account shutdowns happen abruptly when a sponsor bank's risk team flags unusual volume spikes.",
          "Small ISOs' thin compliance resources mean PCI DSS lapses or KYB gaps surface during a sponsor bank's periodic audit, risking the entire portfolio relationship.",
        ],
        opportunity:
          "Build a lightweight, genuinely affordable chargeback-and-fraud toolkit sized for small ISOs and PayFac resellers managing a few hundred merchants — most existing fraud tools are priced and built for enterprise-scale merchants, leaving small processors either overpaying for unused enterprise features or exposed with free/basic tooling.",
      },
      {
        key: "B",
        name: "Mid-Size Fintech Payments Company",
        tag: "Billions in annual volume",
        color: TIER_COLOR.B,
        tldr: "A mid-size payments company is the engine room that lets other apps and fintech startups issue their own debit/credit cards or move money, partnering with real banks behind the scenes to make it all legal and possible.",
        profile:
          "A mid-size, often venture-backed or PE-backed payments company processing billions of dollars annually, usually holding direct card-network registration and sometimes its own money-transmitter licenses or a bank-partnership model, with hundreds of employees. Real examples: Marqeta (card-issuing/processing infrastructure powering Cash App and DoorDash's DasherDirect), Payoneer (cross-border payments for freelancers/SMBs), Modern Treasury (payment operations/orchestration), and Unit/Synctera (banking-as-a-service infrastructure).",
        steps: [
          { title: "Platform/partner sales & integration", text: "Sales and solutions-engineering teams work with fintech companies or marketplaces to design a custom payments integration." },
          { title: "Program design & risk underwriting", text: "For card-issuing platforms, a \"program manager\" client is underwritten and its card program designed (spend controls, funding sources, BIN sponsorship arrangements)." },
          { title: "Bank partnership management", text: "Mid-size fintech payment companies typically maintain formal sponsor-bank relationships to actually issue cards or hold funds." },
          { title: "Authorization & real-time risk decisioning", text: "Transactions are authorized in real time with the platform's own risk/fraud models layered on top of network rules." },
          { title: "Ledgering & fund movement", text: "Internal ledger systems track balances across many sub-accounts; ACH, wire, and card-network rails move actual money across multiple banking partners." },
          { title: "Dispute and chargeback operations", text: "A dedicated, systematized dispute-ops team manages higher volumes with defined SLAs." },
          { title: "Compliance & regulatory reporting", text: "Dedicated compliance teams manage BSA/AML, OFAC screening, state money-transmitter licensing, and PCI DSS Level 1 compliance." },
        ],
        roles:
          "VP/Head of Payments Operations, Program Managers (client-facing), Risk & Underwriting Analysts, Compliance Officers, Solutions Engineers/Integration Engineers, Dispute Operations team, Bank Partnerships Manager, Data Scientists building real-time decisioning models.",
        timeline:
          "New partner/platform onboarding: typically weeks to a few months given custom integration and underwriting work. Settlement: commonly T+1 for card transactions; ACH transfers often 1-3 business days.",
        tools:
          "Marqeta and Lithic (card-issuing APIs), Galileo (SoFi-owned), Adyen (unified commerce platform), Modern Treasury (payment operations/ledgering), Unit and Synctera (banking-as-a-service). Well-solved: modern card-issuing APIs have made it dramatically easier to launch a branded card program; ledgering/reconciliation software has meaningfully reduced custom engineering historically required to track money movement across multiple bank partners. Real gap: multi-bank-partner orchestration and failover — when a sponsor bank relationship experiences regulatory scrutiny or is terminated (a recurring, well-documented industry risk), fintech companies built on a single sponsor bank face existential business continuity risk, and there isn't yet a mature standardized failover layer.",
        moneyFlow:
          "Revenue comes from a mix of interchange revenue share (when the company is the card issuer/program manager), per-transaction and platform fees charged to partner clients, and sometimes float/interest income on funds held before settlement. Sponsor banks typically take a cut of the interchange or a flat fee for their balance-sheet and regulatory role.",
        failurePoints: [
          "Sponsor bank relationship risk — regulatory action against or exit by a sponsor bank can force a payments company to migrate its entire program to a new bank under time pressure.",
          "Reconciliation breaks at scale — a ledger/settlement mismatch across millions of sub-accounts can take significant engineering effort to trace.",
          "Program-level fraud concentration — a single compromised fintech client's card program can generate disproportionate fraud losses.",
          "Regulatory/licensing gaps — operating without proper money-transmitter licensing or failing to adequately supervise a program manager client is a recurring enforcement theme.",
        ],
        opportunity:
          "Build a standardized multi-bank-partner orchestration and failover layer for BaaS/card-issuing platforms — given how often sponsor-bank relationships have come under regulatory pressure or ended abruptly, fintech companies built on a single sponsor bank would pay well for infrastructure that lets them add a backup sponsor bank without a multi-month re-platforming effort.",
      },
      {
        key: "C",
        name: "Global Card Network / Payments Giant",
        tag: "Visa, Mastercard, Stripe, Fiserv scale",
        color: TIER_COLOR.C,
        tldr: "Visa, Mastercard, and giant processors like Stripe are the invisible plumbing that lets basically every card swipe or tap in the world get approved in under a second, and they make their money by taking a tiny slice of an enormous number of transactions.",
        profile:
          "Global card networks and payments giants processing trillions of dollars annually across billions of transactions, with tens of thousands of employees. Real examples: Visa and Mastercard (the dominant global card networks), Stripe (a private, globally-scaled payments infrastructure company), Fiserv and Global Payments (giant merchant-acquiring conglomerates, Fiserv owning Clover), and Adyen and PayPal as additional global-scale players.",
        steps: [
          { title: "Network membership & governance", text: "Card networks don't onboard individual merchants directly; they set the rules, technical standards, and interchange schedules that thousands of member banks and processors worldwide operate under." },
          { title: "Massive-scale merchant/platform onboarding", text: "Global-scale acquirers/processors onboard merchants ranging from small businesses to the world's largest enterprises." },
          { title: "Real-time global authorization routing", text: "The network's core infrastructure routes authorization requests between acquirers and issuers globally in milliseconds, with massive redundancy and uptime requirements." },
          { title: "Fraud/risk scoring at network scale", text: "Networks and large processors run enormous machine-learning fraud models trained on a huge share of global card transaction data." },
          { title: "Clearing and interbank settlement", text: "The network operates the clearing system that nets out what every issuing and acquiring bank owes each other, settling in bulk on a daily cycle." },
          { title: "Dispute/chargeback rules enforcement", text: "The network sets and enforces the formal chargeback reason-code system and dispute timelines that every acquirer and issuer worldwide must follow." },
          { title: "New rails & product innovation", text: "Massive investment in newer payment rails — real-time payment networks, tokenization, buy-now-pay-later partnerships, and stablecoin/crypto payment rail experimentation." },
        ],
        roles:
          "Network/Scheme Product and Rules teams, massive Global Risk and Fraud Science organizations, Enterprise Sales and Relationship Management teams, Regulatory Affairs and Government Relations teams, Network Operations/Infrastructure Engineering, Interchange/Pricing Strategy teams, large in-house legal teams managing ongoing antitrust and regulatory matters.",
        timeline:
          "Authorization: effectively instantaneous (sub-second) at global scale. Settlement: standard T+1/T+2 cycles remain common even at this scale for underlying interbank clearing, though real-time/instant payment rail initiatives (FedNow, Visa Direct, Mastercard Send) are increasingly offered as a premium option. Large merchant/enterprise onboarding: can take months given contract negotiation, though the underlying technical connection is fast.",
        tools:
          "Visa's VisaNet and Mastercard's global processing network form the backbone that virtually every card transaction in the world touches. Stripe's own infrastructure (built largely in-house) and Fiserv's/Global Payments' massive proprietary and acquired processing platforms round out this tier. Well-solved: global transaction routing, authorization speed, and network-level fraud detection are extraordinarily mature. Real gap: real-time/instant cross-border settlement remains a genuine unsolved frontier — moving money internationally still commonly takes days and layers on meaningful FX and correspondent-banking fees, which is why real innovation is happening around instant push-to-card rails and stablecoin-based settlement experiments.",
        moneyFlow:
          "Visa and Mastercard earn assessment fees (a small percentage of transaction volume) and per-transaction network fees, charged to issuing and acquiring banks — they do not directly collect the much larger interchange fee, which flows to the card-issuing bank, though the network publishes and administers the rate schedules (a distinction central to long-running antitrust litigation). Global processors earn revenue on the acquiring/merchant side through a blended or interchange-plus markup at enormous scale.",
        failurePoints: [
          "Regulatory/antitrust pressure over interchange rate-setting — Visa and Mastercard have faced extensive, long-running antitrust litigation and regulatory scrutiny globally.",
          "Systemic outage risk — a network-level outage has outsized economic impact given how much of global commerce depends on these rails.",
          "Large-scale data breach exposure given the sheer volume of card data flowing through these systems.",
          "Cross-border regulatory fragmentation — differing national payment regulations create ongoing compliance complexity even for the most sophisticated global players.",
        ],
        opportunity:
          "Focus on the still-unsolved cross-border instant settlement gap — a company building compliant, genuinely fast cross-border B2B settlement rails on top of emerging stablecoin or real-time-payment infrastructure, targeting mid-size businesses currently stuck paying high FX spreads and multi-day delays through traditional correspondent banking, would be solving a real, current, and still largely open problem.",
      },
    ],
  },
  {
    id: "wealth-management",
    label: "Wealth & Asset Management",
    intro:
      "Financial advisory and investment management — from a solo RIA managing a few hundred million dollars personally, to a PE-backed roll-up managing tens of billions across acquired practices, to a trillion-dollar asset manager licensing its own risk platform to other institutions.",
    compare: [
      { label: "Scale", a: "$30M-$300M AUM, 1-5 person RIA", b: "$1B-$50B+ AUM, multi-advisor roll-up", c: "Trillion-dollar+ AUM, national wirehouse/mega-manager" },
      { label: "Fee model", a: "~1% AUM, tiered, billed quarterly", b: "Tiered AUM fees + some hybrid commission (broker-affiliated)", c: "Expense ratios + advisory fees + wirehouse grid payout" },
      { label: "Key tools", a: "Redtail/Wealthbox, eMoney, Orion, Schwab/Altruist", b: "Salesforce FSC, Envestnet, Addepar, Tamarac, Vise", c: "Aladdin (BlackRock), proprietary wirehouse platforms" },
      { label: "Onboarding time", a: "2-4 weeks (ACATS ~5-10 business days)", b: "1-3 weeks standard clients", c: "Instant (retail/robo) to weeks (private wealth)" },
      { label: "Top failure point", a: "Compliance lapses, succession/key-person risk", b: "M&A integration failure, fee-tier disclosure errors", c: "Legacy system fragmentation, advisor attrition to RIAs" },
    ],
    tiers: [
      {
        key: "A",
        name: "Solo RIA / Small Advisory Practice",
        tag: "1-5 people, $30M-$300M AUM",
        color: TIER_COLOR.A,
        tldr: "One person (or a tiny team) manages your money for a yearly fee, building you a plan and checking in a couple times a year — kind of like having a personal doctor, but for your savings.",
        profile:
          "A one-to-five-person Registered Investment Advisor (RIA) or independent advisory practice, typically managing $30M-$300M in AUM, generating roughly $300K-$3M in annual revenue. Below $100M AUM, firms register with state regulators rather than the SEC. Real-world examples: independent RIAs affiliated with networks like XY Planning Network, custodying through Schwab Advisor Services, Fidelity Institutional, or Altruist — many started as breakaway advisors who left a wirehouse to go independent.",
        steps: [
          { title: "Prospecting/lead generation", text: "Referrals from existing clients, CPAs, or estate attorneys; local seminars; increasingly inbound via a niche website or podcast." },
          { title: "Discovery meeting", text: "Free initial consultation to understand goals, assess fit, and explain the fiduciary/fee-only value proposition versus a commission broker." },
          { title: "Onboarding & data gathering", text: "Client signs an advisory agreement, completes a risk-tolerance questionnaire, and the advisor aggregates account statements and estate documents." },
          { title: "Financial plan build", text: "Advisor models retirement projections, tax scenarios, and insurance/estate needs, then presents a written plan." },
          { title: "Portfolio construction", text: "Assets are moved/transferred-in-kind to the custodian; a model portfolio (often ETF-based) is implemented." },
          { title: "Ongoing rebalancing & tax-loss harvesting", text: "Portfolio drifts are corrected quarterly or via drift-triggered rules; tax-loss harvesting run near year-end." },
          { title: "Client reviews", text: "Typically 1-2x/year check-ins to revisit goals and life changes." },
        ],
        roles:
          "Solo Advisor/Owner (CFP, sometimes also CFA), often doubling as compliance officer; a part-time or fractional Client Service Associate/Paraplanner; outsourced compliance consultant; outsourced back-office/portfolio administration (TAMP).",
        timeline:
          "Onboarding: 2-4 weeks from signed agreement to fully invested portfolio (ACATS transfers typically 5-10 business days). Financial plan turnaround: 2-6 weeks. Rebalancing cadence: quarterly or drift-based. Annual review: 1-2 meetings/year plus ad hoc.",
        tools:
          "Redtail CRM or Wealthbox for CRM; eMoney Advisor, RightCapital, or MoneyGuidePro for financial planning; Orion Advisor Solutions or Black Diamond for portfolio management/rebalancing; Schwab Advisor Services, Fidelity Institutional, or Altruist (newer, all-in-one custodian+software) for custody. Well-solved: portfolio rebalancing, account aggregation, and basic financial-planning math are mature and commoditized. Real gap: the tech stack for a solo advisor is fragmented — CRM, planning, portfolio management, billing, and compliance are usually four or five separate subscriptions that don't integrate well. Altruist explicitly targets this by bundling custody + trading + reporting + billing into one platform.",
        moneyFlow:
          "Fee-only, AUM-based billing dominates: roughly 1% annually on assets, often tiered down slightly above $1M-$2M, billed quarterly. Some solo advisors use flat retainer or subscription models for younger clients without large portfolios, a growing trend pushed by networks like XY Planning Network. Fee-only advisors take zero commissions or revenue share from product sales.",
        failurePoints: [
          "Compliance lapses — missing the annual Form ADV update or a written cybersecurity/business continuity plan.",
          "Key-person risk/succession failure — a solo advisor becomes disabled or dies with no plan, leaving clients' accounts orphaned.",
          "Fee disclosure ambiguity across household accounts.",
          "ACATS transfer friction/errors when onboarding a client from a legacy broker.",
        ],
        opportunity:
          "Build a single, AI-native \"back office in a box\" that replaces the four-to-five-tool stack (CRM + planning + portfolio management + billing + compliance) solo RIAs currently juggle, with automated compliance-drift detection baked in.",
      },
      {
        key: "B",
        name: "Mid-Size RIA / Wealth Management Firm",
        tag: "$1B-$50B+ AUM, multi-advisor",
        color: TIER_COLOR.B,
        tldr: "A bigger company with lots of advisors and specialists (tax people, estate lawyers) manages money for thousands of families using shared computer systems, and it often grows by buying up smaller advisor practices.",
        profile:
          "Multi-advisor firms managing $1B-$50B+ in AUM, often built through acquisition roll-ups backed by private equity. Real examples: Creative Planning (majority-owned by CEO Peter Mallouk, hundreds of billions in AUM as of 2025, no proprietary products or commissions), Mercer Advisors (PE-backed national RIA roll-up, tens of billions in AUM), and Edelman Financial Engines (hybrid workplace-retirement-plan and in-person wealth management model).",
        steps: [
          { title: "Multi-channel client acquisition", text: "Organic growth teams, national marketing, workplace-retirement-plan referral pipelines, and M&A (acquiring smaller RIAs and their books of business)." },
          { title: "Centralized onboarding & KYC", text: "A dedicated onboarding team runs AML/KYC checks, account opening, and asset transfer through standardized workflows." },
          { title: "Segmented financial planning", text: "Clients are tiered (mass-affluent vs. high-net-worth) with different planning depth using standardized planning software." },
          { title: "Model portfolio construction", text: "A centralized investment team builds model portfolios pushed out to all client accounts via a portfolio management platform." },
          { title: "Automated rebalancing & tax overlay", text: "Portfolios rebalance across thousands of accounts simultaneously, with automated tax-loss harvesting overlays." },
          { title: "M&A integration", text: "Newly acquired advisory practices are migrated onto the parent firm's tech stack, brand, and investment models." },
          { title: "Enterprise compliance & audit", text: "A dedicated Chief Compliance Officer manages SEC exams, marketing-rule compliance, and firm-wide Form ADV filings." },
        ],
        roles:
          "CEO/Managing Partner, Chief Investment Officer and investment committee, Chief Compliance Officer with compliance staff, regional/team Lead Advisors, Associate Advisors/Paraplanners, dedicated Client Service Associates, in-house tax and estate planning specialists, M&A/business development team, marketing team.",
        timeline:
          "Onboarding: 1-3 weeks for standard clients, longer for complex HNW cases. Financial plan turnaround: 2-4 weeks with standardized templates. M&A integration of an acquired practice: typically 6-18 months.",
        tools:
          "Salesforce Financial Services Cloud or Microsoft Dynamics for enterprise CRM; Envestnet, Addepar (popular for HNW/UHNW reporting), Orion at enterprise tier, or SS&C Black Diamond for portfolio management at scale; iRebal/Envestnet's Tamarac for trading/order management; multi-custodian setups (Schwab, Fidelity, Pershing). Well-solved: model-portfolio distribution across thousands of accounts, automated rebalancing, and multi-custodian data aggregation are mature. Real gap: M&A integration remains extremely manual — migrating an acquired RIA's clients, accounts, and historical performance data onto the parent's tech stack is slow and error-prone, despite consolidation being the dominant growth strategy. Vise (AI-driven portfolio construction/management) is a real, credible fintech targeting the investment-management side.",
        moneyFlow:
          "Primarily fee-based AUM billing, tiered/breakpoint schedules, billed quarterly. Some hybrid RIA/broker-dealer affiliated firms still earn commissions and trailing fees on certain product sales and revenue-sharing arrangements from custodians/asset managers for platform placement. PE-backed roll-ups also generate returns for private equity sponsors through valuation-multiple arbitrage on future RIA acquisitions.",
        failurePoints: [
          "Cultural/tech integration failure post-acquisition — acquired advisors and clients experience service disruption when forced onto new platforms/models.",
          "Fee-tier disclosure and breakpoint errors across consolidated household accounts, a recurring SEC exam finding.",
          "Conflicts from proprietary/revenue-share products drawing regulatory scrutiny.",
          "Advisor attrition/book portability disputes when a lead advisor leaves.",
        ],
        opportunity:
          "Build an \"M&A integration engine\" purpose-built for RIA roll-ups — automated data mapping and reconciliation that migrates an acquired practice's client records, cost-basis history, and model-portfolio assignments onto the acquirer's stack in weeks instead of months.",
      },
      {
        key: "C",
        name: "Mega Asset Manager / National Wirehouse",
        tag: "BlackRock, Vanguard, Morgan Stanley, Merrill",
        color: TIER_COLOR.C,
        tldr: "Giant companies like Vanguard and BlackRock manage trillions of dollars for millions of people and big institutions using massive computer systems, charging tiny fees because they do it at a huge scale.",
        profile:
          "Trillion-dollar-plus global asset managers and national brokerage/wealth divisions. Real examples: BlackRock (trillions in AUM, operator of the Aladdin risk/portfolio platform, also licensed externally), Vanguard (trillions in AUM, structured as a mutual owned by its own funds/investors — one of the \"Big Three\" index managers alongside BlackRock and State Street), Fidelity Investments, Morgan Stanley Wealth Management, and Merrill Lynch (Bank of America).",
        steps: [
          { title: "Institutional and retail distribution", text: "Products are distributed via direct retail channels, 401(k) platforms, RIA custody platforms, and thousands of employed/affiliated financial advisors." },
          { title: "Enterprise KYC/AML onboarding", text: "Highly automated, regulation-driven onboarding integrated with core banking/brokerage systems, often instant for simple accounts." },
          { title: "Goals-based/tiered advice delivery", text: "Mass-retail clients get self-directed or robo-advisor tools; affluent and HNW clients are assigned a dedicated advisor; UHNW/institutional clients get dedicated private wealth teams." },
          { title: "Centralized investment management", text: "Massive in-house investment teams manage index funds, active strategies, and separately managed accounts (SMAs) at enormous scale." },
          { title: "Enterprise risk management", text: "Platforms like BlackRock's Aladdin run real-time risk analytics across trillions in assets." },
          { title: "Firm-wide rebalancing/trading infrastructure", text: "Proprietary order-management systems execute rebalancing across millions of accounts with algorithmic trade execution to minimize market impact." },
          { title: "Technology licensing as a revenue line", text: "At the top of this tier, the firm sells its own risk/portfolio infrastructure (Aladdin) to other asset managers and banks as a SaaS-like business line." },
        ],
        roles:
          "CEO and C-suite (CIO, CFO, Chief Risk Officer), portfolio managers and quantitative research teams, thousands of Financial Advisors/Private Wealth Advisors (wirehouse channel), Relationship Managers for institutional/pension clients, large dedicated legal/compliance/regulatory affairs divisions, technology divisions building proprietary platforms.",
        timeline:
          "Retail account onboarding: often same-day/instant for simple brokerage or robo-advisor accounts; private wealth/UHNW onboarding: weeks, involving trust structuring. Rebalancing: continuous/algorithmic, often intraday for index products. Institutional mandate implementation: can take months.",
        tools:
          "Aladdin (BlackRock, also licensed externally) and proprietary systems built in-house at Vanguard and Fidelity for risk/portfolio platforms; proprietary integrated platforms for wirehouse advisor desktops at Morgan Stanley and Merrill; Vanguard Digital Advisor, Merrill Guided Investing, Schwab Intelligent Portfolios for robo-advisory. Well-solved: institutional-scale portfolio risk analytics, index-replication, and algorithmic trade execution are extremely mature — this is the tier's core competitive moat. Real gap: the wirehouse advisor experience remains fragmented across legacy internal systems bolted together over decades of mergers, a major driver of the \"breakaway broker\" trend to independent RIA models.",
        moneyFlow:
          "Blended revenue model: expense-ratio fees on proprietary funds (often razor-thin for large index funds), advisory fees for managed accounts, wirehouse advisors typically paid via a grid/payout structure (advisor keeps a percentage of fees/commissions generated), institutional mandate fees negotiated individually, plus BlackRock's distinct technology-licensing revenue from Aladdin.",
        failurePoints: [
          "Legacy system fragmentation post-merger — integration debt from decades of M&A creates operational risk and advisor attrition.",
          "Conflicts of interest at scale — proprietary product placement incentives have drawn regulatory settlements industry-wide.",
          "Systemic/concentration risk given trillions in assets, meaning a technology or operational failure has outsized market implications.",
          "Advisor attrition to independent RIAs seeking better technology and fee structures.",
        ],
        opportunity:
          "Build a modern, API-first \"advisor productivity layer\" that sits on top of a wirehouse's legacy, merger-scarred internal systems to give employed advisors a unified interface without the wirehouse having to rip out its core infrastructure — wirehouses lose top producers to independent RIAs partly over tech friction.",
      },
    ],
  },
  {
    id: "insurance-underwriting",
    label: "Insurance Underwriting & Claims",
    intro:
      "Property/casualty and life insurance — from an independent agent brokering policies from carriers they don't underwrite, to a regional carrier running its own policy admin and claims systems, to a national carrier algorithmically pricing and settling millions of claims a year.",
    compare: [
      { label: "Scale", a: "$few million-$50M premium, 1-25 employees", b: "$100M-$few billion premium, multi-state", c: "Tens of billions in premium, national footprint" },
      { label: "Underwriting", a: "Broker/MGA; carrier does the actual underwriting", b: "Automated rules + human review, actuarially priced", c: "Algorithmic at scale, telematics/usage-based pricing" },
      { label: "Key tools", a: "AMS360, HawkSoft, EZLynx, Applied Epic", b: "Guidewire InsuranceSuite, Duck Creek, Xactimate, Tractable", c: "Proprietary core + Snapshot/Drive Safe & Save telematics" },
      { label: "Combined ratio", a: "N/A (agent doesn't bear underwriting risk)", b: "Near/above 100% in bad CAT years", c: "Publicly reported, closely watched metric" },
      { label: "Top failure point", a: "E&O exposure, carrier appetite shifts", b: "Reserve inadequacy, reinsurance cost crunch", c: "Climate/CAT concentration, social inflation" },
    ],
    tiers: [
      {
        key: "A",
        name: "Independent Agent / Small MGA",
        tag: "1-25 employees, ~$50M premium placed",
        color: TIER_COLOR.A,
        tldr: "A local insurance agent is like a matchmaker who finds you the best insurance deal from several big companies and then helps you push back to the right people if something breaks and you need to get paid.",
        profile:
          "A small independent insurance agency typically has 1-25 employees and writes anywhere from a few million to around $50M in annual premium volume placed across multiple carriers. Independent agents broker policies from carriers they hold \"appointments\" with, earning commission. A small MGA holds delegated underwriting authority from a carrier for a niche line and can bind coverage directly. Most agencies at this tier are family-owned or single-location, affiliated with networks like Trusted Choice/the Big \"I\".",
        steps: [
          { title: "Lead intake/prospecting", text: "A prospect calls, is referred, or fills out a website form; the agent gathers basic exposure info." },
          { title: "Quoting (rating)", text: "Agent enters data into a comparative rater (e.g., EZLynx) that pings multiple carrier systems to return competing premium quotes." },
          { title: "Application & underwriting submission", text: "Agent submits a full application to the chosen carrier, or for an MGA, underwrites in-house against the binding authority manual." },
          { title: "Underwriting decision", text: "The carrier's automated or human underwriter reviews credit/loss history, motor vehicle records, and property data to accept, decline, or modify terms." },
          { title: "Policy issuance & binding", text: "Once approved, the agent binds coverage, collects premium/down payment, and issues the policy declarations page." },
          { title: "Claims intake (FNOL)", text: "When a loss occurs, the client typically calls the agent first; the agent files First Notice of Loss with the carrier." },
          { title: "Claims advocacy & renewal", text: "The agent tracks claim status and helps gather documentation; annually, the agent re-markets or renews the policy." },
        ],
        roles:
          "Independent Agent/Producer (licensed P&C or L&H), Account Manager/CSR, Agency Principal/Owner, (MGA-specific) In-house Underwriter, Binding Authority Manager.",
        timeline:
          "Quote-to-bind: same day to 3 business days for personal lines; 1-3 weeks for commercial lines requiring underwriter review. Claims: the agent's involvement in filing FNOL takes minutes; carrier claims cycle time is commonly a few weeks for standard claims.",
        tools:
          "AMS360 (Vertafore), HawkSoft, Applied Epic (Applied Systems), and comparative raters like EZLynx. Well-solved: quoting speed and basic policy/document management. Real gap: small agencies lack claims-status visibility — they often learn of a claim status change only when the client calls again. Emerging insurtech: Semsee, Bold Penguin, and Tarmika are real, current commercial-lines quoting marketplaces attempting to fix multi-carrier commercial submission friction.",
        moneyFlow:
          "Agents earn commission, typically 10-15% of written premium for personal lines and somewhat higher for commercial, sometimes with contingency/profit-sharing bonuses from carriers based on loss ratio and volume. MGAs earn a profit commission plus a flat fee/commission (often higher than a standard agent's cut), but carry no underwriting risk themselves.",
        failurePoints: [
          "Errors & omissions (E&O) exposure when an agent fails to bind coverage correctly or misrepresents coverage, leading to lawsuits when a claim is denied for a gap the client didn't know existed.",
          "Carrier appetite shifts — a carrier abruptly restricting or exiting a state/line (widespread in CA/FL/LA property markets in recent years) forces agents to scramble to re-place entire books of business.",
          "Binding authority breaches (MGA-specific), discovered only at audit.",
          "Adverse selection — MGAs writing a niche can accumulate concentrated risk that surprises the backing carrier at renewal.",
        ],
        opportunity:
          "Build a real-time claims-status API/dashboard that pulls live claim updates from major carriers into the agent's AMS, so independent agents stop being the \"last to know\" when a client's claim stalls — carriers and E&O insurers would both pay for this because it reduces complaint volume and lawsuit exposure.",
      },
      {
        key: "B",
        name: "Regional Carrier / Mid-Size MGA",
        tag: "$100M-few billion premium, multi-state",
        color: TIER_COLOR.B,
        tldr: "A regional insurance company is like a bigger, computer-powered version of the corner insurance shop — it decides who gets covered, collects money from lots of people, and pays out when something bad happens, but if a huge storm hits all at once it can struggle to pay everyone fast enough.",
        profile:
          "Regional carriers typically write hundreds of millions to a few billion dollars in annual direct premium, operate in a handful of contiguous states, and often specialize. Real examples: Erie Insurance (operating across roughly a dozen states plus DC), Auto-Owners Insurance (Michigan-based, operating across roughly two dozen states), American Family Insurance, and Mercury General (California-centric auto).",
        steps: [
          { title: "Multi-channel intake", text: "Business comes through captive/independent agent networks and increasingly direct digital channels; regional carriers rely heavily on agent relationships." },
          { title: "Automated + manual underwriting triage", text: "Rules engines auto-approve \"clean\" risks within guidelines; anything flagged routes to a human underwriter." },
          { title: "Risk assessment", text: "Underwriters pull credit-based insurance scores, prior loss history, and aerial/property condition imagery and apply actuarially-priced rating plans." },
          { title: "Policy issuance", text: "A policy administration system (Guidewire PolicyCenter, Duck Creek Policy, or Sapiens) generates the policy, endorsements, and billing schedule." },
          { title: "Claims intake & triage", text: "Multi-channel FNOL routes by severity/complexity; simple claims route to fast-track desk adjusters or virtual photo-estimating tools." },
          { title: "Investigation & adjustment", text: "Adjuster verifies coverage, inspects damage, obtains repair estimates (Xactimate, CCC ONE), and determines liability." },
          { title: "Reinsurance recovery", text: "For large or catastrophe losses, claims and finance teams cede/report losses to reinsurance treaties to recover ceded amounts." },
        ],
        roles:
          "Underwriter I/II/Senior Underwriter, Underwriting Manager, Actuary/Pricing Analyst, Claims Adjuster (Desk vs. Field), Claims Manager, Special Investigations Unit investigator, Agency/Producer Relationship Manager, Catastrophe Response Team, Compliance/Regulatory Filing Analyst.",
        timeline:
          "Quote-to-bind: minutes (personal auto, straight-through processing) to 1-2 weeks (commercial/non-standard). Standard claims: a couple to a few weeks from FNOL to settlement. Catastrophe claims: often stretch well beyond state-mandated minimums due to surge volume and contractor backlogs.",
        tools:
          "Guidewire InsuranceSuite (the leading P&C carrier platform), Duck Creek Technologies, and Sapiens for core systems. Xactimate and CCC ONE for repair estimating; Snapsheet for virtual/photo-based claims; Tractable (AI computer-vision damage assessment, used internationally and gaining US traction). Well-solved: straight-through processing for simple, low-severity claims is largely automated. Real gap: complex commercial and multi-party liability claims still require heavy manual adjuster judgment, and legacy core-system migrations are notoriously slow, expensive, multi-year projects.",
        moneyFlow:
          "Loss ratio and combined ratio (loss ratio plus expense ratio, historically hovering near or just above 100% industry-wide) are the key tracked metrics. Agents/producers are paid commission out of the carrier's expense ratio. Regional carriers cede a portion of catastrophe-exposed premium to reinsurers via quota-share or excess-of-loss treaties to cap exposure to a single mega-event.",
        failurePoints: [
          "Reserve inadequacy — actuaries under-reserve for long-tail liability or CAT claims, causing earnings hits when claims develop worse than expected.",
          "Reinsurance capacity/cost crunch — after major CAT years, reinsurance renewal pricing spikes sharply, squeezing margins or forcing non-renewals in exposed states.",
          "Claims backlog during CAT events — adjuster capacity can't scale fast enough for a major hurricane/wildfire.",
          "Legacy system migration failures — multi-year core-system implementations run over budget/timeline.",
        ],
        opportunity:
          "Regional carriers stuck on legacy policy admin systems need a lower-cost, faster-to-implement, cloud-native alternative to multi-year Guidewire/Duck Creek migrations — a company that could deliver a working policy-plus-claims core in under a year, priced for a mid-size carrier rather than enterprise pricing, would find real buyers.",
      },
      {
        key: "C",
        name: "National Carrier",
        tag: "State Farm, Progressive, Allstate, GEICO scale",
        color: TIER_COLOR.C,
        tldr: "A giant national insurance company is like a company-sized calculator: it uses huge amounts of data and computers to instantly decide how much to charge millions of people and to pay out claims fast, but when a truly enormous disaster hits everyone at once, even it can struggle and lose money.",
        profile:
          "National carriers write tens of billions in annual premium and operate across most or all 50 states. Real examples: State Farm (the largest US P&C and auto insurer, a mutual company, tens of thousands of captive agents), Progressive (top-two auto insurer, known for its telematics program Snapshot), Allstate and GEICO (a Berkshire Hathaway subsidiary known for its direct-to-consumer, no-agent model).",
        steps: [
          { title: "Omnichannel intake", text: "Direct web/app, captive agent, or independent agent channel; national carriers run massive marketing-driven acquisition funnels." },
          { title: "Algorithmic underwriting at scale", text: "The vast majority of personal-lines applications are underwritten instantly by rules/ML models drawing on internal historical loss data and, in some cases, telematics data." },
          { title: "Usage-based/telematics pricing", text: "Programs like Progressive's Snapshot and State Farm's Drive Safe & Save adjust pricing based on real driving behavior — a major differentiator at this scale." },
          { title: "Claims intake (FNOL)", text: "24/7/365 omnichannel FNOL via app, web, or call center; AI chatbots and photo-upload tools triage the claim immediately." },
          { title: "Claims segmentation & assignment", text: "Claims are algorithmically scored for complexity/severity and routed: simple claims to automated fast-track settlement, complex claims to specialized field/SIU teams." },
          { title: "Investigation & adjustment", text: "For non-trivial claims, adjusters use AI-assisted damage estimation tools and in-network repair shop programs to control cost and cycle time." },
          { title: "Catastrophe mobilization", text: "For major events, the carrier deploys a national CAT team (mobile claim units, drone-based roof inspections), while enterprise risk/finance manages reinsurance treaties and capital reserves." },
        ],
        roles:
          "Chief Underwriting Officer, Underwriting VP, Product/Pricing Actuary, Predictive Modeling/Data Science teams, Claims VP/SVP, Desk Adjuster, Field/CAT Adjuster, Total Loss Specialist, SIU Fraud Investigator, Telematics/UBI Program Manager, Regulatory Affairs (managing state-by-state rate filings), Reinsurance/Enterprise Risk Management team, Chief Actuary.",
        timeline:
          "Quote-to-bind: often under 10 minutes end-to-end for personal auto via app/web. Standard claims: many simple auto/property claims settle within days, enabled by photo-estimating and AI-assisted assessment. Catastrophe claims: despite massive CAT response infrastructure, major hurricane/wildfire events still commonly push full settlement timelines out considerably for the bulk of claims.",
        tools:
          "National carriers largely build proprietary core systems layered over decades, plus enormous in-house data science/ML operations for pricing and fraud detection. Telematics: Progressive's Snapshot, State Farm's Drive Safe & Save, Allstate's Drivewise. AI damage assessment tools like Tractable are used industry-wide; direct-to-consumer insurtechs like Lemonade and Root have built AI-first underwriting models specifically to compete with this tier. Well-solved: personal auto/home quote-to-bind and simple claims settlement are highly automated and fast. Real gap: catastrophe claims surge capacity, complex bodily-injury liability claims, and social-inflation-driven litigation costs remain largely unsolved by current tooling.",
        moneyFlow:
          "Loss ratio and combined ratio are closely watched, publicly-reported metrics, varying considerably year to year based on catastrophe activity and inflation trends. National carriers self-insure much more of their risk than smaller players given their scale, but still buy substantial reinsurance/catastrophe-bond coverage for tail risk. Captive agents earn commission similar to independent agents but exclusively for one carrier; direct-model carriers instead spend heavily on marketing in place of agent commission.",
        failurePoints: [
          "Climate/catastrophe concentration — repeated, escalating CAT losses have caused even the largest national carriers to pull back or stop writing new business in certain states, as State Farm and Allstate both did with new California homeowners business in recent years.",
          "Social inflation/litigation costs — rising jury verdicts and third-party litigation funding driving up bodily-injury and liability claim severity faster than pricing can adjust.",
          "Regulatory rate-approval lag — state insurance departments, especially in states with stricter rate-approval regimes like California, can take a long time to approve needed rate increases.",
          "Claims fraud at scale — SIU teams face increasingly sophisticated staged-accident and fraud rings.",
        ],
        opportunity:
          "Litigation/social-inflation-driven bodily-injury claims are one of the fastest-growing cost lines for national auto/liability carriers and remain stubbornly manual and unpredictable — a startup building predictive litigation-outcome and settlement-value AI that plugs into carriers' claims platforms to flag high-litigation-risk claims early would be paid well by any top-tier national carrier's claims and legal departments.",
      },
    ],
  },
];
