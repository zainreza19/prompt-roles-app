import type { WorkflowType } from "@/data/business-workflows";

const TIER_COLOR = { A: "#4ECDC4", B: "#FF9F40", C: "#FF6B6B" };

export const healthcareWorkflows: WorkflowType[] = [
  {
    id: "patient-care",
    label: "Patient Care Delivery",
    intro:
      "How a patient actually gets diagnosed and treated — from a solo family doctor personally examining every patient, to a regional hospital system sharing one EHR across dozens of specialists, to a national system with tumor boards, transplant programs, and its own research faculty.",
    compare: [
      { label: "Scale", a: "1-5 providers, 1,500-2,500 patient panel", b: "3-15 hospitals, multi-site physician groups", c: "Tens of thousands of beds, hundreds of thousands of staff" },
      { label: "Records", a: "Standalone EHR, referrals by fax/phone", b: "Shared Epic/Cerner instance across sites", c: "Epic/Cerner + massive internal informatics teams" },
      { label: "New-patient wait", a: "1-4 weeks primary care, longer for specialists", b: "Similar or shorter via centralized scheduling", c: "Fast for routine care; months for flagship specialists" },
      { label: "Key tools", a: "athenahealth, eClinicalWorks, Practice Fusion", b: "Epic, Oracle Health/Cerner, Epic Healthy Planet", c: "Epic/Cerner + custom AI (sepsis alerts, LeanTaaS)" },
      { label: "Top failure point", a: "Physician burnout, referral leakage", b: "Care fragmentation, readmission penalties", c: "ED boarding, antitrust scrutiny over consolidation" },
    ],
    tiers: [
      {
        key: "A",
        name: "Solo Practice / Small Independent Clinic",
        tag: "1-5 providers",
        color: TIER_COLOR.A,
        tldr: "A small doctor's office is basically one or two doctors seeing patients all day, writing everything down themselves, and hoping the people they send to a specialist actually go.",
        profile:
          "A single physician or small group (1-5 providers) — a family medicine office, a solo dermatologist, an independent urgent care. Typical panel size for a primary care doctor is 1,500-2,500 patients. Independent practice is a shrinking share of U.S. medicine — well over half of physicians now work for hospitals or corporate-owned practices, a trend tracked yearly by the AMA's Physician Practice Benchmark Survey.",
        steps: [
          { title: "Scheduling", text: "Patient calls or books online; front desk checks it against the single provider's calendar." },
          { title: "Check-in and intake", text: "Front desk verifies insurance/demographics; a medical assistant takes vitals and chief complaint." },
          { title: "Physician visit", text: "The doctor personally examines the patient, takes history, and forms a differential diagnosis — often in a 10-20 minute visit slot." },
          { title: "Point-of-care testing or referral", text: "Simple labs/imaging may be done in-office; anything complex is referred out to an independent lab (Quest Diagnostics, Labcorp) or specialist." },
          { title: "Diagnosis and treatment plan", text: "The physician documents the encounter in the EHR and prescribes treatment or medication via e-prescribing." },
          { title: "Follow-up coordination", text: "Front desk or the physician personally arranges follow-up visits or specialist referrals, often via fax or phone since small practices frequently lack automated referral tracking." },
        ],
        roles:
          "The physician (does clinical work and often doubles as biller/manager), 1-2 medical assistants or nurses, a front-desk/scheduling staffer, and often an office manager who is also the physician's spouse or a long-tenured employee wearing multiple hats.",
        timeline:
          "New-patient appointment wait times for primary care commonly run 1-4 weeks, longer for specialists (survey data has repeatedly found average wait times of several weeks for specialties like dermatology and OB-GYN). In-office visit time is typically 10-20 minutes of actual face time. Referral-to-specialist-visit can take weeks since small practices lack staff to actively track and expedite referrals.",
        tools:
          "athenahealth (athenaOne), eClinicalWorks, Practice Fusion, DrChrono, and NextGen Healthcare, typically priced per-provider-per-month, sometimes bundled with billing services as a percentage of collections. Well-solved: e-prescribing and basic charting are mature and reliable. Real gap: documentation burden — physicians spend a large, well-documented share of each visit and evening hours on note-taking (\"pajama time\") because small practices can't afford dedicated scribes, creating fast-growing demand for AI ambient scribing tools like Abridge, Nuance DAX (Microsoft), Suki AI, and Ambience Healthcare — real companies, though pricing is still a stretch for the smallest practices.",
        moneyFlow:
          "Revenue depends heavily on payer mix: commercial insurance reimburses at negotiated rates typically well above Medicare, Medicare pays a fixed fee-schedule rate, and Medicaid pays the least — often below the actual cost of the visit, which is why many small practices cap the number of Medicaid patients they accept. A solo practice's overhead commonly consumes roughly half or more of collected revenue before physician compensation.",
        failurePoints: [
          "Physician burnout is well-documented industry-wide, worsened at this tier by the physician also carrying administrative/business ownership burden.",
          "No-show rates commonly run in the high single digits to double digits, directly hurting thin margins.",
          "Referral leakage — patients referred out and never tracked to confirm they were seen — is a chronic, largely unmeasured failure due to lack of staff and interoperability between separate EHR systems.",
        ],
        opportunity:
          "Build an affordable, EHR-agnostic referral-tracking and closed-loop follow-up tool for small independent practices — most referrals from solo/small practices vanish into a fax machine with no confirmation the patient was ever seen, and current referral-management platforms are priced and built for large health systems.",
      },
      {
        key: "B",
        name: "Regional Multi-Location Practice / Mid-Size Hospital System",
        tag: "3-15 hospitals",
        color: TIER_COLOR.B,
        tldr: "A regional hospital system is like a doctor's-office network big enough that all your doctors and the hospital can see the same file on you, but it still isn't big enough to have every kind of specialist in-house.",
        profile:
          "Multi-site medical groups (10-100+ locations) or regional hospital systems with roughly 3-15 hospitals and a few hundred to a few thousand beds total. Real examples: regional systems like Baystate Health (Massachusetts), Sanford Health (Upper Midwest), and large multi-specialty physician groups like Privia Health-affiliated practice networks that aggregate independent physicians under a shared platform.",
        steps: [
          { title: "Centralized scheduling", text: "A call center or online portal schedules across multiple sites/providers, often triaging to the right location or specialty." },
          { title: "Check-in and intake", text: "Standardized intake across locations, usually on a shared EHR instance (Epic or Oracle Health/Cerner) so records follow the patient between sites." },
          { title: "Primary/urgent care visit", text: "Initial visit at a clinic or urgent care location; the provider can see the patient's full cross-location history in the shared EHR." },
          { title: "In-system referral to specialist", text: "Because specialists are part of the same system, referrals route electronically and are trackable, reducing (but not eliminating) referral leakage." },
          { title: "Diagnostic workup", text: "Labs and imaging are often done in-system rather than sent externally, keeping results integrated." },
          { title: "Care coordination", text: "For complex or chronic patients, a care coordinator or case manager may be assigned to manage the pathway across specialists." },
          { title: "Inpatient escalation and discharge", text: "If hospitalization is needed, the patient is admitted within the system; a structured discharge process schedules follow-up and monitors readmission risk." },
        ],
        roles:
          "Primary care physicians, specialists, hospitalists, nurse practitioners/physician assistants, care coordinators/case managers, a Chief Medical Officer overseeing clinical standards across sites, quality/population health teams, and centralized scheduling/call-center staff.",
        timeline:
          "New-patient wait times vary by specialty but centralized scheduling typically shortens waits versus Tier A for common specialties, though high-demand specialists can still have multi-week to multi-month waits. Inpatient average length of stay for general medical/surgical admissions is commonly 4-6 days nationally.",
        tools:
          "Epic and Oracle Health (Cerner) dominate the EHR layer — Epic in particular is used by a majority of larger U.S. hospital systems. Epic Healthy Planet or third-party population health tools track chronic disease and readmission risk. Well-solved: cross-site scheduling and shared records within the system. Real gap: care coordination for patients who need services outside the system still falls back to manual, fax-based referral management, and interoperability between different health systems' Epic/Cerner instances remains weak despite years of interoperability initiatives (Epic's Care Everywhere and TEFCA help but don't fully solve this).",
        moneyFlow:
          "Regional systems increasingly participate in value-based care arrangements (Accountable Care Organizations, bundled payments) alongside traditional fee-for-service, meaning a growing share of revenue depends on hitting quality/cost targets rather than just billing per visit. Hospital margins for mid-size nonprofit systems are typically thin — commonly low-single-digit operating margins are reported industry-wide by ratings agencies.",
        failurePoints: [
          "Care fragmentation across the many specialists a patient sees even within one system contributes to preventable errors.",
          "Hospital readmission rates tracked under Medicare's Hospital Readmissions Reduction Program are a real, financially-penalized failure point.",
          "Staffing shortages, particularly nursing shortages, have been a persistent, well-documented regional system pain point since 2020-2021, driving up reliance on expensive travel-nurse staffing.",
        ],
        opportunity:
          "Build a care-coordination layer that works across different health systems' Epic/Cerner instances (not just within one system) — regional systems' patients frequently need care from a specialist or facility outside the network, and existing interoperability tools solve intra-system continuity far better than inter-system continuity.",
      },
      {
        key: "C",
        name: "Large National Hospital System",
        tag: "HCA, Kaiser, Ascension, Mayo Clinic",
        color: TIER_COLOR.C,
        tldr: "The biggest hospital systems — like Kaiser Permanente or HCA — are so large they have almost every kind of doctor and hospital service in-house, but that size creates its own problems, like patients getting stuck waiting for a hospital bed.",
        profile:
          "National-scale hospital systems and integrated delivery networks. Real examples: HCA Healthcare (the largest U.S. for-profit hospital operator, 180+ hospitals), Kaiser Permanente (integrated payer-provider model, ~13 million members), Ascension, CommonSpirit Health, Mayo Clinic, and Cleveland Clinic (the latter two known for concentrated specialty/tertiary care and national/international patient draw).",
        steps: [
          { title: "Omnichannel access", text: "Patients can enter care through primary care, urgent care, ED, telehealth, or direct specialist self-scheduling, all integrated into one enterprise EHR instance." },
          { title: "Triage and routing", text: "Sophisticated triage protocols, including AI-assisted symptom checkers in some systems, route patients to the appropriate acuity level of care." },
          { title: "Standardized care pathways", text: "Large systems increasingly use evidence-based clinical pathways embedded as EHR order sets to reduce variation in how common conditions are treated across dozens of facilities." },
          { title: "Specialist and subspecialist access", text: "Because the system employs a huge breadth of specialists, referrals rarely need to leave the network, and tertiary/quaternary care is available in-house at flagship facilities." },
          { title: "Multidisciplinary case management", text: "Complex cases (e.g., cancer) go through tumor boards and formal multidisciplinary review involving several specialists at once." },
          { title: "Inpatient/tertiary care", text: "Flagship academic-affiliated or quaternary hospitals within the system handle the most complex cases, often receiving transfers from smaller system hospitals." },
          { title: "Discharge and post-acute integration", text: "Large systems often own their own home health and skilled nursing assets, keeping the entire continuum internal." },
        ],
        roles:
          "Large employed physician groups organized by service line, hospitalist programs, subspecialists, advanced practice providers, dedicated care management and social work teams, a Chief Medical Officer/Chief Quality Officer at the enterprise level, clinical informatics teams managing the EHR build, and (at academic centers like Mayo/Cleveland Clinic) research faculty integrated into clinical practice.",
        timeline:
          "Large systems can often offer faster access via centralized capacity management, but for highly sought specialists at flagship academic centers, wait times can stretch to months given the concentration of complex, self-referred national patients. Emergency department boarding (patients waiting for an inpatient bed) is a well-documented, worsening timeline failure at large systems.",
        tools:
          "Epic is used by most of the largest, best-known U.S. health systems (Kaiser Permanente, Mayo Clinic, Cleveland Clinic); Oracle Health (Cerner) serves a substantial share of the rest. At this scale, systems often build substantial custom tooling on top of Epic/Cerner with large internal informatics teams. Well-solved: internal data integration and standardized order sets across a huge footprint. Real gap: ED boarding and inpatient bed/capacity management remain stubbornly unsolved even with sophisticated software — a genuine operations-research problem. Vendors like LeanTaaS (AI-driven hospital capacity/OR scheduling optimization, used by numerous large health systems) actively target exactly this gap, alongside ambient AI scribes now rolling out at enterprise scale.",
        moneyFlow:
          "Large systems negotiate payer contracts from a position of significant leverage, often achieving materially higher reimbursement rates than smaller competitors in the same market — a dynamic widely studied by health economists and antitrust regulators concerned about hospital consolidation driving up prices. Kaiser Permanente's model combines the insurer and provider into one organization, so money flow there is capitation-driven internally rather than fee-for-service billing between separate entities.",
        failurePoints: [
          "ED boarding and hospital capacity crunches are a well-documented, worsening national problem, especially during respiratory illness season.",
          "Large-system consolidation has been the subject of antitrust scrutiny over concerns that scale drives up prices without improving care.",
          "Standardization efforts (care pathways) can produce one-size-fits-all friction for atypical patients.",
        ],
        opportunity:
          "Build AI-driven, real-time hospital capacity/patient-flow optimization software specifically targeting ED boarding and inter-facility transfer bottlenecks within large multi-hospital systems — LeanTaaS already validates this category exists and is fundable, leaving room for a next-generation entrant focused specifically on the transfer-center/boarding workflow.",
      },
    ],
  },
  {
    id: "medical-billing",
    label: "Medical Billing & Reimbursement",
    intro:
      "The revenue cycle — how a visit turns into a claim, gets coded, submitted, and paid or denied — from a solo practice's office manager doing double duty, to a hospital system's dedicated denial-management unit, to a national billing vendor that once brought U.S. claims processing to a halt for weeks.",
    compare: [
      { label: "Days in A/R", a: "30-50 days (vs. 30-day best practice)", b: "35-45 days", c: "Mid-50-day range industry benchmark" },
      { label: "Denial rate", a: "Often above 10%, no dedicated staff", b: "Rising, driven by prior-auth/medical-necessity disputes", c: "Tens of billions lost annually industry-wide" },
      { label: "Key tools", a: "Tebra, AdvancedMD, athenaCollector", b: "Epic Resolute, Waystar, Availity", c: "R1 RCM, Optum360/Change Healthcare, Epic Resolute" },
      { label: "Billing fee", a: "4-9% of collections (outsourced)", b: "In-house CBO cost as % of net patient revenue", c: "Contract/fee basis tied to net patient revenue collected" },
      { label: "Top failure point", a: "Denials unreworked due to thin staffing", b: "Rising MA denial rates, coding compliance audits", c: "Single-vendor concentration risk (2024 Change Healthcare outage)" },
    ],
    tiers: [
      {
        key: "A",
        name: "Solo Practice / Small Independent Clinic",
        tag: "1-10 providers, $500K-$5M revenue",
        color: TIER_COLOR.A,
        tldr: "A small doctor's office has to turn every visit into a bill, send it to the insurance company, and then chase the money — usually with just one or two people doing it all.",
        profile:
          "Solo physicians or small groups (1-10 providers), typically $500K-$5M in annual revenue, billing either in-house (a front-desk staffer or office manager doing double duty) or via a small outsourced billing service. Real software/vendors serving this tier: Tebra (the 2023 merger of Kareo + PatientPop), AdvancedMD, athenahealth's athenaOne/athenaCollector, DrChrono, and outsourced billing firms such as Coronis Health and Med-Metrix.",
        steps: [
          { title: "Registration & eligibility verification", text: "Front desk collects demographics/insurance and checks active coverage before or at check-in." },
          { title: "Charge capture / superbill", text: "The provider documents the visit and assigns preliminary CPT/ICD-10 codes." },
          { title: "Coding", text: "A coder (in-house, outsourced, or the provider) finalizes codes; small practices frequently under-invest here, causing under/over-coding." },
          { title: "Claim scrubbing", text: "Practice management software runs automated edits for missing fields and code mismatches before submission." },
          { title: "Submission via clearinghouse", text: "The clean claim is sent electronically through a clearinghouse to the payer." },
          { title: "Payment posting and denial follow-up", text: "Remittance is posted against the claim; staff manually rework and resubmit denied/rejected claims — usually the weakest link at this tier." },
          { title: "Patient billing/collections", text: "The patient is billed for the remaining balance, often via statements and calls." },
        ],
        roles:
          "Front-desk/scheduler (eligibility), the physician or a certified coder (CPC) for coding, an in-house biller or outsourced billing service account rep, and the practice manager, who often personally handles denials and patient collections calls.",
        timeline:
          "Days in A/R commonly run 30-50 days at this tier (vs. an MGMA \"best-in-class\" target of under 30). Clean claims are typically submitted within 24-48 hours of the visit. Denial rates for smaller/less-resourced practices frequently exceed the MGMA best-practice threshold of under 5%.",
        tools:
          "Tebra/Kareo's clinical tier and comparable products commonly priced in the low-to-mid hundreds of dollars per provider per month; outsourced billing via AdvancedMD or athenaCollector typically priced as a percentage of collections, roughly 4-8%. Well-solved: eligibility checks and claim scrubbing are largely automated and reliable. Real gap: prior authorization remains almost entirely manual (phone/fax/portal), consuming disproportionate staff time relative to headcount, and small practices have no leverage to negotiate down the percentage-of-collections billing fee. Emerging AI-native entrants: Candid Health (API-first billing automation), Infinitus Systems (AI voice agents automating payer phone calls for prior auth), and Anomaly (payer/claims data intelligence).",
        moneyFlow:
          "Commercial payers typically reimburse independent practices at negotiated rates near or somewhat above Medicare; Medicaid pays the least. Outsourced billing services take roughly 4-9% of collections as their fee. A denied claim that isn't reworked (common at this tier due to thin staffing) becomes a direct write-off.",
        failurePoints: [
          "Denial rates commonly above the 5% \"healthy\" MGMA benchmark, sometimes into double digits, due to lack of dedicated denial-management staff.",
          "Prior-authorization delays disproportionately hurt small practices that lack staff to chase payers.",
          "Under-coding/over-coding risk when the same person who sees patients also assigns codes.",
          "Patient collections frequently go uncollected because there's no dedicated collections function.",
        ],
        opportunity:
          "Build a flat-fee (not percentage-of-collections) AI-native billing and prior-auth automation product priced for solo/small practices that can't afford the 4-8% take rate charged by AdvancedMD/athenahealth-style billing services.",
      },
      {
        key: "B",
        name: "Regional Multi-Location Practice / Mid-Size Hospital System",
        tag: "3-15 hospitals",
        color: TIER_COLOR.B,
        tldr: "A hospital system or big medical group runs a whole in-house team just to turn thousands of patient visits into insurance claims, and a big chunk of that team's job is fighting with insurance companies that say no.",
        profile:
          "Multi-site medical groups (10-50+ locations) or mid-size hospital systems (roughly 3-15 hospitals) with a dedicated revenue cycle/business office (CBO). Examples include multi-specialty aggregators like Privia Health (publicly traded) and regional hospital systems that run their own CBOs or contract portions of RCM to vendors like Optum360 or Waystar.",
        steps: [
          { title: "Pre-registration & eligibility", text: "Centralized teams check coverage and benefits ahead of the visit across all locations." },
          { title: "Charge capture", text: "Charges flow from the EHR (commonly Epic, Oracle Health/Cerner, or athenahealth at enterprise scale) into a centralized billing system." },
          { title: "Coding", text: "A dedicated coding team codes encounters, sometimes assisted by computer-assisted coding (CAC) tools, with compliance audits." },
          { title: "Prior authorization", text: "A specialized prior-auth team handles high-volume procedures requiring payer sign-off." },
          { title: "Claim scrubbing & submission", text: "Claims run through payer-specific edit rules and are submitted via a clearinghouse (Waystar or Availity)." },
          { title: "Denial management", text: "A denial-management unit triages, corrects, and appeals denied claims, tracking root causes by payer and denial reason code." },
          { title: "Patient financial services", text: "Dedicated financial counselors handle payment plans and charity-care screening separate from clinical staff." },
        ],
        roles:
          "RCM director/VP of revenue cycle, certified coding manager and coding staff, prior-authorization specialists, denial management analysts, patient financial counselors, payer contract analysts, and compliance/coding-audit staff.",
        timeline:
          "Days in A/R typically run 35-45 days. Appeals follow payer- and Medicare-specific timelines (Medicare redetermination requests generally must be filed within 120 days, with a decision due within 60 days). Industry benchmarking has found average time to insurance payment in the mid-50-day range in recent annual reports.",
        tools:
          "Epic Resolute (Hospital Billing/Professional Billing) is the dominant billing module bundled with Epic's EHR; Oracle Health/Cerner offers a competing revenue cycle platform. Waystar (publicly traded, NASDAQ: WAY) is widely used for clearinghouse/denial-management/patient-estimation. Availity is one of the largest real-time health information networks for eligibility and claims connectivity. Well-solved: eligibility verification and claim scrubbing are mature and largely automated. Real gap: denial management and prior authorization remain the two most labor-intensive, least-automated functions. Emerging AI-native vendors: CodaMetrix (autonomous medical coding, spun out of Mass General Brigham), Fathom and Nym Health (autonomous coding), and Akasa (AI automation across revenue cycle workflows).",
        moneyFlow:
          "Commercial payers generally reimburse well above Medicare rates; Medicaid pays the least. Cost-to-collect for a well-run mid-size system's RCM operation is a meaningful chunk of net patient revenue. Industry benchmarking has documented rising median final denial rates and rising bad-debt rates, with Medicare Advantage plans showing denial rates well above traditional Medicare.",
        failurePoints: [
          "Rising denial rates driven specifically by prior-authorization and medical-necessity disputes, per industry benchmarking.",
          "Medicare Advantage denials running notably higher than traditional Medicare — a specific, growing pain point for mid-size systems with large MA patient panels.",
          "Coordination failures across multiple locations/EHR instances when a system hasn't fully centralized its CBO.",
          "Underpayment variance — contracted rates not matching actual payer remittance.",
        ],
        opportunity:
          "Build an AI copilot specifically for hospital-system denial-management teams that ingests payer remittance/denial codes and drafts payer-specific appeal letters automatically — the buyer is any mid-size system's CBO that can't justify a full Epic/Optum360 enterprise contract but is bleeding revenue to the industry-wide rising-denial trend.",
      },
      {
        key: "C",
        name: "Large National Hospital System / Large RCM Vendor",
        tag: "HCA, Ascension, R1 RCM, Optum360",
        color: TIER_COLOR.C,
        tldr: "The biggest hospital chains and billing companies move millions of claims through giant automated systems every day, and even they lose tens of billions of dollars a year when insurance companies deny claims or a single vendor's computer system goes down.",
        profile:
          "National hospital chains and the RCM vendors/clearinghouses that serve them. Real organizations: HCA Healthcare (self-performs much of its revenue cycle through subsidiary Parallon); Ascension (has used R1 RCM as an outsourced hospital revenue cycle partner); R1 RCM itself (a major RCM vendor serving over a thousand hospital/health-system/physician-group clients, taken private in late 2024 by TowerBrook Capital Partners and Clayton, Dubilier & Rice); and Optum360/Change Healthcare (part of UnitedHealth Group's Optum, one of the industry's largest claims clearinghouses).",
        steps: [
          { title: "Enterprise eligibility & pre-registration", text: "Automated, often RPA-driven, eligibility verification run across the entire patient population at intake." },
          { title: "Charge capture", text: "Integrated directly from the enterprise EHR across dozens to hundreds of facilities." },
          { title: "Computer-assisted/autonomous coding", text: "Large-scale coding operations blend human coders (increasingly supplemented by AI coding tools) with offshore/outsourced coding staff and compliance audit layers." },
          { title: "Centralized prior authorization units", text: "Dedicated teams and increasingly AI tools manage extremely high volumes of prior-auth requests." },
          { title: "Claim scrubbing & clearinghouse submission", text: "Claims route through enterprise clearinghouse infrastructure processing enormous daily claim volumes." },
          { title: "Centralized denial management", text: "Dedicated denial units, sometimes with in-house appeal specialists or attorneys, work high-dollar denials." },
          { title: "Enterprise reporting & revenue integrity", text: "Dedicated revenue-integrity teams continuously audit the entire cycle for systemic leakage." },
        ],
        roles:
          "SVP/Chief Revenue Cycle Officer, regional RCM operations directors, large coding departments (often augmented with outsourced/offshore coding and AI-assisted tools), dedicated denial-appeal specialists (sometimes attorneys for high-dollar disputes), payer contract analysts, and large patient financial services call centers.",
        timeline:
          "Large-scale industry benchmarking has found average time to insurance payment in the mid-50-day range, with modest year-over-year improvement in payment speed even as denial rates and bad-debt rates have risen.",
        tools:
          "Epic Resolute and Oracle Health/Cerner dominate the EHR-integrated billing layer for the largest systems. R1 RCM's proprietary platform plus robotic process automation underpins its outsourced-RCM contracts. Optum360/Change Healthcare operates one of the industry's largest claims clearinghouses. Waystar serves large enterprise clients for clearinghouse, denial, and patient-estimation workflows. The gap and the industry's starkest recent failure mode: extreme vendor concentration risk. The February 2024 ransomware attack on Change Healthcare disrupted claims processing nationwide for weeks, caused major financial strain across thousands of providers, compromised a very large number of patient records, and forced UnitedHealth Group to advance billions of dollars in emergency funding to affected providers.",
        moneyFlow:
          "Self-performing systems like HCA can drive cost-to-collect down through scale and automation, while systems that outsource (like Ascension with R1) pay RCM vendors on a contract/fee basis tied to net patient revenue collected. Industry-wide denial and bad-debt losses have been reported in the tens of billions of dollars annually and rising year over year.",
        failurePoints: [
          "The Change Healthcare/Optum ransomware attack (Feb 2024) — a single-vendor failure that froze claims and payment processing across a huge share of the U.S. healthcare system, the starkest concrete example of RCM infrastructure fragility at national scale.",
          "Continued year-over-year growth in industry-wide net revenue leakage from denials and bad debt despite faster payment cycle times.",
          "Medicare Advantage denial rates running well above traditional Medicare, with clinical denials specifically tied to lack of prior authorization and medical necessity disputes.",
        ],
        opportunity:
          "Build a redundant, fast-failover clearinghouse/claims-routing layer that large health systems can activate instantly if their primary clearinghouse goes down — sell it as claims-processing business-continuity insurance to CFOs and revenue-cycle officers who lived through the 2024 Change Healthcare outage and never again want a single point of failure controlling their cash flow.",
      },
    ],
  },
  {
    id: "health-insurance",
    label: "Health Insurance & Payers",
    intro:
      "How insurance actually works from the payer side — underwriting, plan design, and claims adjudication — from a small TPA administering an employer's self-funded plan, to a regional Blues/Medicaid MCO actuary team, to a national payer whose algorithmic denial practices have become a genuine flashpoint of public and regulatory scrutiny.",
    compare: [
      { label: "Risk model", a: "ASO — employer bears claims risk, TPA earns PEPM fee", b: "Fully-insured (MLR-bound) or Medicaid capitation", c: "Same, at massive scale plus Medicare Advantage capitation" },
      { label: "Key tools", a: "HealthEdge HealthRules, TriZetto QNXT, Availity", b: "TriZetto Facets/QNXT, HealthEdge GuidingCare", c: "Facets/QNXT + proprietary (Optum) systems" },
      { label: "Prior auth SLA", a: "ERISA: 30 days (15-day extension), 72 hrs urgent", b: "CMS MA rules: 7 days standard, 72 hrs expedited", c: "Same CMS rules, at massive volume — high overturn-on-appeal rates" },
      { label: "MLR requirement", a: "N/A (ASO, no MLR)", b: "80% individual/small group, 85% large group/MA", c: "Same 80/85% floors, publicly reported and scrutinized" },
      { label: "Top failure point", a: "Stop-loss \"laser\" exclusions, network-adequacy gaps", b: "Elevated Medicaid MCO denial rates", c: "Algorithmic denial controversy (Cigna PXDX, UnitedHealth litigation)" },
    ],
    tiers: [
      {
        key: "A",
        name: "Small Regional Insurer / TPA",
        tag: "Tens of thousands-hundreds of thousands of covered lives",
        color: TIER_COLOR.A,
        tldr: "A small TPA is like a company that handles all the insurance paperwork and bill-paying for an employer who's paying its workers' medical bills out of its own pocket, using a rented doctor network and a backup insurance policy in case someone gets really sick.",
        profile:
          "Tier A is dominated by third-party administrators (TPAs) that process claims for self-funded employers, plus a shrinking number of small/local mutual insurers. Real examples: Allied Benefit Systems (Chicago-based TPA serving self-funded employer groups nationally), WebTPA (Dallas-based TPA), HealthSCOPE Benefits and Auxiant (regional TPAs). Typical scale: tens of thousands to a few hundred thousand covered lives; staff counts in the hundreds.",
        steps: [
          { title: "Plan design", text: "Employer (with a benefits broker/consultant) chooses plan structure: deductibles, copays, network, stop-loss attachment point. The TPA doesn't bear underwriting risk on medical claims — the employer does, reinsured by a stop-loss carrier." },
          { title: "Stop-loss underwriting", text: "A separate stop-loss insurer prices \"specific\" (per-claimant) and \"aggregate\" (whole-group) reinsurance based on census data and prior claims history." },
          { title: "Network leasing", text: "Rather than building its own provider network, the TPA typically rents access to a national network via a network-access fee." },
          { title: "Enrollment & eligibility", text: "Employer HR/payroll data feeds into the TPA's eligibility system; open enrollment is annual, aligned to plan year." },
          { title: "Claims adjudication", text: "Claims examiners apply plan rules, network discounts, and coordination-of-benefits logic to pay or deny claims, drawing on the employer's own bank account (administrative services only)." },
          { title: "Utilization management & appeals", text: "Often outsourced to a specialty UM vendor; member/provider appeals go through internal review, then external review per ERISA rules." },
        ],
        roles:
          "Claims examiners/adjudicators, eligibility/enrollment specialists, stop-loss underwriters (usually at the reinsurer, not the TPA), UM/prior-auth nurses (often contracted), a part-time or contracted medical director, account managers who liaise with employer HR, and compliance staff handling ERISA/HIPAA.",
        timeline:
          "Plan year renewals are annual, with underwriting/rate-setting starting 4-6 months before renewal. Claims turnaround is governed by ERISA claims regulations: non-urgent claims must be decided within 30 days (one 15-day extension allowed), urgent care claims within 72 hours. External review typically around 45 days.",
        tools:
          "Core claims systems at this tier often run on HealthEdge's HealthRules or TriZetto QNXT/Facets (Cognizant-owned), or smaller platforms. Provider connectivity runs largely through Availity — one of the largest health information networks connecting millions of providers to payers. Well-solved: basic claims adjudication and eligibility verification. Real gap: small TPAs are the most underserved by modern payment-integrity and prior-auth-automation tooling because enterprise AI vendors price for large-payer volume. Verified emerging vendors (currently selling mainly to larger health plans): Cohere Health (prior-auth automation platform) and Anterior (AI clinical-review copilot for utilization management).",
        moneyFlow:
          "Because most Tier A business is ASO (administrative-services-only), the employer bears full claims risk; the TPA earns a per-employee-per-month (PEPM) administrative fee, not premium. Stop-loss reinsurance premiums are paid by the employer to a separate carrier. For smaller fully-insured carriers, ACA's Medical Loss Ratio rule still applies: 80% MLR in individual/small-group markets, 85% in large-group.",
        failurePoints: [
          "Stop-loss \"laser\" exclusions — a reinsurer excluding a specific high-cost member after a bad claims year, leaving the employer exposed.",
          "Claims-processing errors from thin staffing, and network-adequacy gaps because TPAs lease rather than build networks.",
          "Slower adoption of prior-auth automation meaning higher administrative burden per claim relative to large payers.",
        ],
        opportunity:
          "Build an affordably-priced, plug-into-Availity AI claims-editing and prior-auth copilot sized for TPAs processing under a few hundred thousand claims/year — a segment enterprise vendors like Cohere Health and HealthEdge largely ignore because their pricing and integration effort assume large-payer volume.",
      },
      {
        key: "B",
        name: "Mid-Size Regional Insurer",
        tag: "Regional Blues, Medicaid MCOs",
        color: TIER_COLOR.B,
        tldr: "A regional insurer like Independence Blue Cross or Molina collects monthly payments from a few million people or from the state, uses nurses and computer systems to decide which medical bills and treatments to approve, and has to prove to regulators it spent most of that money on actual healthcare, not overhead.",
        profile:
          "Regional Blues plans and regional Medicaid managed-care organizations operating in a handful of states, typically several million members and multi-billion-dollar revenue. Real examples: Independence Blue Cross (Philadelphia-area, serving millions through affiliates including AmeriHealth Caritas Medicaid plans), Geisinger Health Plan, HealthPartners (Minnesota), Priority Health (Michigan), and SelectHealth (Utah, part of Intermountain Health). Molina Healthcare, a large Medicaid-focused payer, bridges Tier B and Tier C.",
        steps: [
          { title: "Actuarial pricing & rate filing", text: "Actuaries build premium rates from historical claims experience and expected risk pool composition; rates are filed with and approved by state insurance departments (and CMS for Medicaid managed care)." },
          { title: "Provider network contracting", text: "A network contracting team negotiates fee schedules and increasingly value-based/risk-sharing arrangements with hospital systems and physician groups." },
          { title: "Product/plan design & regulatory filing", text: "Plan benefit designs are filed with state DOI (commercial) or state Medicaid agency (Medicaid MCO) for approval before each plan year." },
          { title: "Claims adjudication", text: "A claims operations team using a core administration platform (Facets, QNXT, or HealthRules) auto-adjudicates the large majority of clean claims." },
          { title: "Utilization management / prior authorization", text: "In-house UM nurses and medical directors review prior-auth requests against clinical criteria (MCG or InterQual guidelines)." },
          { title: "Risk adjustment", text: "For ACA marketplace and Medicare Advantage/Medicaid lines, the plan runs HCC coding review programs to accurately capture member risk scores." },
          { title: "Appeals & grievances", text: "A dedicated appeals unit processes member/provider appeals per state and CMS timelines, with external independent review as a final step." },
        ],
        roles:
          "Actuaries, underwriters, network contracting managers, provider relations reps, claims examiners and operations managers, UM/utilization-review nurses, medical directors, risk-adjustment coding specialists, appeals/grievance coordinators, compliance/regulatory affairs staff, and member services/call center staff.",
        timeline:
          "Plan-year cycle is annual, with actuarial rate development starting 9-12 months ahead. Most clean claims auto-adjudicate within days; state prompt-pay laws generally require payment within 30-45 days. Medicare Advantage plans are bound by CMS rules requiring standard prior-auth decisions within 7 calendar days and expedited decisions within 72 hours (with a 2024 CMS interoperability/prior-auth final rule requiring payers to build FHIR-based prior-auth APIs and publish denial-rate data, phasing in over 2026-2027).",
        tools:
          "TriZetto Facets/QNXT (Cognizant) and HealthEdge's HealthRules Payer are the dominant platforms at this tier. HealthEdge's GuidingCare for care/utilization management. Availity for provider connectivity. Well-solved: core claims adjudication automation and provider eligibility/claims-status lookups. Real gap: prior-authorization turnaround and administrative burden remain a documented pain point — exactly the niche Cohere Health and Anterior target. A specific underserved pain point: risk-adjustment coding accuracy — smaller plans can't afford the large in-house coding-review armies national payers run.",
        moneyFlow:
          "Regional insurers must meet ACA medical loss ratio floors of 80% (individual/small group) or 85% (large group) — meaning at least 80-85 cents of every premium dollar must go to claims and quality-improvement activities, or the insurer owes rebates. Medicaid MCOs operate on capitation — a fixed per-member-per-month payment from the state regardless of utilization, meaning the plan bears full utilization risk. ACA marketplace and Medicare Advantage plans also participate in risk-adjustment transfer payments, and MA plans receive/lose money based on Star Ratings quality bonuses.",
        failurePoints: [
          "Molina Healthcare's Medicaid business has been specifically reported to have unusually high prior-authorization denial rates among Medicaid MCOs.",
          "Network adequacy complaints in rural service areas, member confusion during Medicaid redetermination cycles, and rate-filing disputes with state regulators.",
          "HHS Office of Inspector General reviews have repeatedly found that a very high share of appealed Medicare Advantage denials get overturned on appeal, suggesting the initial denial rate is inflated.",
        ],
        opportunity:
          "Build an affordable, plug-in AI risk-adjustment/HCC coding-review tool priced for regional-plan budgets — regional Medicaid MCOs and Blues plans currently either underinvest in risk-adjustment accuracy or pay large consulting firms per-chart-review fees.",
      },
      {
        key: "C",
        name: "Large National Payer",
        tag: "UnitedHealth, Elevance, Cigna, CVS/Aetna, Humana",
        color: TIER_COLOR.C,
        tldr: "The biggest health insurance companies — UnitedHealthcare, Cigna, Aetna/CVS, Humana, Elevance, Kaiser — cover tens of millions of people each, get paid extra by the government for sicker patients, and have come under intense public and legal scrutiny for using fast, sometimes automated systems to deny care.",
        profile:
          "The handful of companies that dominate U.S. health insurance nationally: UnitedHealth Group (the largest U.S. health insurer, with UnitedHealthcare as its insurance arm and Optum as its services/PBM/data arm), Elevance Health (formerly Anthem), The Cigna Group, CVS Health/Aetna, Humana (primarily Medicare Advantage-focused), Centene, and Kaiser Permanente (a unique integrated model).",
        steps: [
          { title: "Enterprise actuarial pricing", text: "Large actuarial departments model pricing across dozens of product lines using massive proprietary claims datasets." },
          { title: "Bid submission (Medicare Advantage)", text: "MA plans submit annual bids to CMS, which reviews and approves them, setting benchmark payments and expected rebates." },
          { title: "National network contracting", text: "Network teams negotiate at massive scale, including hospital-system-wide and increasingly value-based/risk-sharing arrangements." },
          { title: "Automated claims adjudication", text: "The vast majority of claims are auto-adjudicated with sophisticated payment-integrity and fraud-detection layers." },
          { title: "Utilization management at scale", text: "Large in-house UM teams plus increasingly AI-assisted review tools process millions of prior-auth requests annually — the single most controversial workflow step at this tier." },
          { title: "Risk adjustment & Star Ratings management", text: "Dedicated teams manage HCC risk-adjustment coding/documentation programs (worth billions in Medicare Advantage revenue) and CMS Star Ratings quality-bonus optimization." },
          { title: "Appeals and litigation management", text: "Multi-tiered internal appeals, CMS/state external review, and increasingly government litigation defense over risk-adjustment practices." },
        ],
        roles:
          "Enterprise actuaries and pricing analysts, Medicare Advantage bid strategists, national network contracting executives, claims operations at industrial scale, medical directors and clinical review physicians, UM/prior-auth nurses (often in the thousands company-wide), HCC risk-adjustment coding teams, Star Ratings/quality improvement teams, appeals and grievance units, and government affairs/regulatory compliance staff.",
        timeline:
          "Medicare Advantage bid cycle: bids submitted to CMS in early summer for the following January 1 plan year; CMS releases Star Ratings each October. Prior authorization: standard MA decisions within 7 calendar days, expedited within 72 hours, tightened under the 2024 CMS interoperability/prior-auth final rule, phasing in through 2026-2027.",
        tools:
          "Core administration is a mix of licensed platforms (Facets/QNXT, HealthEdge's HealthRules) and heavily customized proprietary systems (UnitedHealth's Optum builds significant proprietary claims and data infrastructure in-house). Availity still handles provider connectivity even for the largest payers. Well-solved: claims auto-adjudication rates are very high for clean claims, and payment-integrity/fraud detection is mature. The dominant, well-documented gap/controversy: prior authorization. Cigna's \"PXDX\" system was reported to have enabled bulk, extremely rapid claim reviews, and UnitedHealth/Humana faced major lawsuits over algorithmic tools allegedly used to cut off post-acute care early.",
        moneyFlow:
          "Same ACA MLR floors apply (80%/85%); Medicare Advantage has its own 85% MLR floor with clawback provisions. MA plans are paid a risk-adjusted capitated rate per member per month by CMS, benchmarked against local fee-for-service costs and scaled by each member's HCC risk score — creating financial incentive to document conditions thoroughly (legitimate) but also the incentive structure behind government fraud allegations against multiple national payers for allegedly inflating risk scores. Star Ratings bonus payments add substantial additional MA revenue for highly-rated plans.",
        failurePoints: [
          "The December 2024 killing of a UnitedHealthcare executive became a national flashpoint for public anger at claim-denial practices, amid documented surges in Medicare Advantage prior-authorization denials.",
          "Cigna's PXDX bulk-denial system drew major investigative reporting and scrutiny; government fraud litigation has targeted multiple national payers over Medicare Advantage/Medicaid risk-adjustment diagnosis submissions.",
          "HHS OIG reviews have found a large share of appealed Medicare Advantage denials get overturned on appeal, a widely-cited signal that initial denial rates are inflated.",
          "The February 2024 Change Healthcare ransomware attack (an Optum/UnitedHealth Group subsidiary) took down claims processing for a huge share of the U.S. healthcare system for weeks.",
        ],
        opportunity:
          "Build independent, provider-facing (not payer-owned) prior-authorization transparency and appeal-automation tooling that helps physicians instantly generate CMS-compliant, evidence-backed appeal packets against national-payer denials — especially as CMS's 2024 interoperability rule forces payers to expose denial data via standardized APIs by 2026-2027.",
      },
    ],
  },
  {
    id: "pharma-commercialization",
    label: "Pharma / Medical Device Commercialization",
    intro:
      "How a drug or device goes from R&D through FDA approval to actually being prescribed — from a small biotech betting everything on one Phase 2 readout, to a mid-size specialty pharma fighting for formulary placement, to a global pharma giant running dozens of programs at once so the winners pay for all the failures.",
    compare: [
      { label: "Scale", a: "10-150 employees, pre-revenue or single-digit millions", b: "500-5,000 employees, hundreds of millions-few billion revenue", c: "Tens of thousands+ employees, tens of billions in revenue" },
      { label: "Key tools", a: "Fusion 360-adjacent: Castor EDC, REDCap, Florence eTMF", b: "Veeva CRM/Vault RIM, Medidata Rave, IQVIA data", c: "Full Veeva Vault suite, Medidata/Oracle Clinical One, IQVIA at scale" },
      { label: "FDA timeline", a: "IND to Phase 2 over 3-5 years; rarely reaches approval alone", b: "Full Phase 3: 2-4 years; standard review ~10 months", c: "Same review timelines, compressed via Priority/Breakthrough designations" },
      { label: "Success rate", a: "~1 in 10 Phase 1 candidates reach approval", b: "Formulary/reimbursement rejection risk even post-approval", c: "Portfolio absorbs individual-program failure statistically" },
      { label: "Top failure point", a: "Running out of cash before a value-inflection readout", b: "Formulary rejection, FDA Complete Response Letters", c: "Patent cliffs, Advisory Committee negative votes wiping out market cap" },
    ],
    tiers: [
      {
        key: "A",
        name: "Small Biotech / Medical Device Startup",
        tag: "10-150 employees",
        color: TIER_COLOR.A,
        tldr: "A tiny biotech spends years and huge amounts of money testing one drug in a small number of patients, and usually either the drug fails, or — if it works — a giant pharma company just buys the whole biotech instead of the startup building its own sales team.",
        profile:
          "Typically 10-150 employees, pre-revenue or single-digit-million revenue, burning tens to low hundreds of millions of dollars per year, funded by venture capital plus non-dilutive grants (NIH SBIR/STTR, BARDA). Real examples: Verve Therapeutics (gene-editing cardiovascular biotech, acquired by Eli Lilly), Structure Therapeutics (oral GLP-1/incretin biotech), Intellia Therapeutics (CRISPR in-vivo gene editing), and Rocket Pharmaceuticals (gene therapy).",
        steps: [
          { title: "Target discovery/preclinical", text: "Academic licensing or internal discovery generates a lead molecule/device concept; animal and in vitro studies establish proof of mechanism, typically over several years." },
          { title: "IND/IDE filing", text: "Files an Investigational New Drug or Investigational Device Exemption application with FDA; FDA has 30 days to place a clinical hold or allow trial start." },
          { title: "Phase 1 trial", text: "Small safety/dose-finding study, often outsourced to a CRO (ICON, Parexel, Fortrea) because the startup has no internal clinical ops infrastructure." },
          { title: "Phase 2 trial", text: "Larger proof-of-concept/efficacy study — usually the value-inflection point determining whether the company can raise a later-stage round or gets partnered/acquired." },
          { title: "Pivotal Phase 3 trial or partnering event", text: "Most Tier A companies never fund Phase 3 alone; they raise a large crossover round, IPO, or license/sell the asset to a larger company before or during Phase 3." },
          { title: "Regulatory submission support", text: "A small regulatory affairs team preps the NDA/BLA/510(k)/PMA dossier, frequently with outside regulatory consultancies." },
        ],
        roles:
          "Chief Medical Officer (often part-time/consulting), VP Regulatory Affairs, a small Clinical Operations team heavily reliant on outsourced CRAs from the CRO, an often-outsourced biostatistician, a Quality/Regulatory consultant, and CEO/CFO focused on fundraising. No dedicated field sales force typically exists until right before/after approval.",
        timeline:
          "Discovery-to-IND: commonly several years. Phase 1: roughly 1-2 years. Phase 2: roughly 1.5-3 years. FDA standard NDA/BLA review runs about 10 months from filing acceptance; priority review about 6 months. 510(k) clearance targets around 90 days of FDA review but often runs longer in practice; PMA review targets 180 days but realistically often takes a year or more.",
        tools:
          "Smaller players increasingly use Medidata Rave (Dassault Systèmes) or lighter/cheaper options like Florence eTMF, Clinical Conductor, and cloud EDC tools like Castor EDC and REDCap rather than enterprise Veeva. Veeva Vault RIM is the enterprise regulatory standard but often too expensive for a very small company. Well-solved: patient recruitment is a well-known gap — trial recruitment delays are the single biggest driver of timeline slippage, and enterprise tools (Veeva, IQVIA) are priced for larger budgets. AI-native trial-matching startups addressing this include Formation Bio, Deep 6 AI (EHR-based patient matching), and Unlearn.AI (AI-generated digital twins to shrink control arms). AI drug discovery platforms relevant to how Tier A companies now originate assets include Recursion Pharmaceuticals, Insilico Medicine, and Isomorphic Labs (a DeepMind spinout) — these compress discovery timelines but haven't meaningfully shortened clinical-trial or regulatory timelines, which remain the real bottleneck.",
        moneyFlow:
          "Funded via VC rounds often with milestone-based non-dilutive grants. Widely-cited estimates of the fully-loaded cost to bring one drug to approval range broadly — from roughly $1 billion to well over $2 billion depending on methodology (these estimates are genuinely contested and vary by study). Most Tier A companies never spend anywhere near that alone — they raise enough to reach Phase 2 proof-of-concept and then license or sell the asset, typically structured as an upfront payment plus development/regulatory milestones plus sales-based royalties.",
        failurePoints: [
          "Only a small minority of drugs entering Phase 1 trials — commonly cited around 1 in 10 — ultimately reach FDA approval, with Phase 2 carrying the highest attrition.",
          "Running out of cash before reaching a value-inflection data readout is the single most common Tier A failure mode.",
          "On the device side, a poorly designed pivotal trial or missing predicate device for 510(k) substantial-equivalence claims can force a company into the far more expensive de novo or PMA pathway unexpectedly.",
        ],
        opportunity:
          "Build an AI-native, EHR-integrated patient-matching and site-feasibility tool priced for the many small/mid biotechs that can't afford enterprise Veeva/IQVIA recruitment suites — recruitment delay is the top cause of trial timeline slippage, and Tier A companies are desperate for something cheaper than enterprise tools and faster than manual site visits.",
      },
      {
        key: "B",
        name: "Mid-Size Specialty Pharma / Device Company",
        tag: "500-5,000 employees",
        color: TIER_COLOR.B,
        tldr: "A mid-size drug or device company has already gotten one or two products approved and now has to convince insurance companies to pay for it and convince doctors to actually prescribe or use it — which turns out to be almost as hard as getting FDA approval in the first place.",
        profile:
          "Roughly 500-5,000 employees, hundreds of millions to a few billion dollars in annual revenue, commercial with 1-5 approved products. Real examples: Insmed (specialty pulmonary/rare disease pharma), Sarepta Therapeutics (Duchenne muscular dystrophy gene therapies), Ionis Pharmaceuticals, Ultragenyx (rare disease), Axonics (sacral neuromodulation devices), Inari Medical (thrombectomy devices), and Insulet (Omnipod insulin delivery).",
        steps: [
          { title: "Pipeline discovery in parallel with commercializing", text: "Internal R&D plus in-licensing/M&A of earlier-stage assets refills the pipeline once a flagship product launches." },
          { title: "IND/IDE and clinical development", text: "A real internal Clinical Operations department, though still frequently using CROs for execution at scale." },
          { title: "Pivotal Phase 3 / pivotal device trial", text: "Company-run, larger trials with dedicated biostatistics and regulatory affairs teams." },
          { title: "Manufacturing scale-up", text: "Transition from clinical-trial-scale batches to commercial manufacturing, either expanding an internal plant or contracting a CDMO (Catalent, Lonza, Thermo Fisher's Patheon) — a common launch bottleneck." },
          { title: "Market access & payer negotiation", text: "A dedicated market access/HEOR team negotiates formulary placement with PBMs (CVS Caremark, Express Scripts, OptumRx), sets WAC pricing, and negotiates rebates." },
          { title: "Launch and field force deployment", text: "Builds or expands a specialty sales force plus Medical Science Liaisons targeting the specific specialist physicians who prescribe the drug/device." },
        ],
        roles:
          "VP/Head of Regulatory Affairs with a regulatory affairs team, Clinical Operations directors and CRAs, biostatisticians and medical writers, a Medical Affairs team (MSLs in the field), Market Access/HEOR directors, Managed Markets/Payer account managers, a specialty sales force and regional sales managers, Pharmacovigilance/Drug Safety officers, and Quality Assurance/Manufacturing (CMC) leads.",
        timeline:
          "Full Phase 3 program: commonly 2-4 years. FDA review: about 10 months standard/6 months priority. Device PMA review targets 180 days but real median with deficiency letters often runs well over a year. Time from FDA approval to meaningful formulary/payer access typically runs 6-12 months, since most large payers set formulary decisions on quarterly or semi-annual P&T committee cycles.",
        tools:
          "Veeva CRM is the dominant life-sciences CRM for sales rep call planning and MSL engagement tracking. Veeva Vault RIM for regulatory submissions/registrations tracking. Medidata Rave (EDC/CTMS) or Oracle Clinical One for larger trial programs. Market access teams use IQVIA data/analytics and MMIT for payer access intelligence. Well-solved: rep call tracking, EDC/data capture, regulatory document management. Real gap: real-world evidence (RWE) generation and payer-negotiation modeling remain expensive, manual, and slow — mid-size companies often can't afford the RWE infrastructure (claims data licensing from Komodo Health, Truveta, or Datavant, plus analytics from Aetion) that large pharma has, yet payers increasingly demand RWE for value-based contracts.",
        moneyFlow:
          "Revenue comes from net sales after gross-to-net deductions: list price (WAC) minus rebates to PBMs/payers, discounts to 340B hospitals, and channel fees — gross-to-net erosion for branded specialty drugs is commonly substantial, often reported at 40%+ off list price. Device reimbursement flows through CPT codes (physician/procedure payment) and DRGs (hospital inpatient bundled payment under Medicare) — getting a new CPT code or a favorable DRG assignment is often a multi-year process that determines whether a device is even usable in practice.",
        failurePoints: [
          "Formulary/reimbursement rejection after approval is a major Tier B risk — a drug can be FDA-approved and still commercially fail if payers exclude it from formularies or impose restrictive prior authorization/step therapy.",
          "FDA Complete Response Letters, which have historically affected a meaningful share of first-cycle NDA/BLA reviews, can delay launch by a year or more and are financially serious for a company with only 1-2 products.",
          "Manufacturing scale-up failures (CMC issues, plant inspection findings/warning letters) are a common cause of launch delay since Tier B companies are often first-time commercial manufacturers.",
        ],
        opportunity:
          "Build an affordable, AI-assisted payer-contract and gross-to-net modeling tool for the many mid-size specialty pharma/device companies that need Aetion/Komodo-grade real-world-evidence and formulary-access analytics but can't afford enterprise-level contracts.",
      },
      {
        key: "C",
        name: "Large National/Global Pharma or Device Company",
        tag: "Pfizer, Merck, Eli Lilly, Medtronic, Stryker",
        color: TIER_COLOR.C,
        tldr: "The biggest drug and device companies run dozens of experiments at once so that when most of them fail (as most do), the few blockbuster winners pay for everything and keep the whole machine running.",
        profile:
          "Tens of thousands to well over a hundred thousand employees, tens of billions of dollars in annual revenue, R&D spend commonly in the high single-digit to high-teens billions annually. Real examples: Pfizer, Merck & Co., Eli Lilly (a company whose market value has grown enormously on the strength of its GLP-1 drugs Zepbound/Mounjaro), Johnson & Johnson, AbbVie, Novartis, and on the device side Medtronic, Stryker, Abbott, and Boston Scientific.",
        steps: [
          { title: "Portfolio-level discovery & business development", text: "Internal discovery engines plus a dedicated M&A/BD organization in-license or acquire earlier-stage assets (e.g., Eli Lilly's acquisition of Verve Therapeutics) to supplement internal R&D." },
          { title: "Global clinical development", text: "Simultaneous, globally distributed Phase 1-3 trials run across dozens of countries with in-house global clinical operations teams plus large CRO partnerships." },
          { title: "Regulatory submission across multiple markets", text: "Simultaneous or near-simultaneous filings with FDA, EMA (Europe), PMDA (Japan), and other regulators." },
          { title: "Global manufacturing scale-up", text: "Massive capital investment in dedicated manufacturing plants planned years in advance." },
          { title: "Global market access & payer/government negotiation", text: "Direct negotiation with government payers (Medicare under IRA drug price negotiation, national health systems like NICE in the UK) as well as US commercial payer contracting at massive scale." },
          { title: "Global launch with full commercial infrastructure", text: "Large sales forces, extensive MSL networks, direct-to-consumer advertising, and patient support/hub services programs." },
          { title: "Patent cliff management", text: "Dedicated IP and commercial strategy teams manage transitions as blockbusters lose exclusivity to biosimilar/generic competition." },
        ],
        roles:
          "Global regulatory affairs organizations, large clinical operations and biostatistics departments, dedicated Health Economics & Outcomes Research (HEOR) teams, Government Affairs/Policy teams, large pharmaceutical sales forces organized by therapeutic area, sizable Medical Science Liaison networks, Managed Markets/National Account Directors, dedicated Pharmacovigilance organizations, Manufacturing/Supply Chain leadership, and M&A/Business Development teams.",
        timeline:
          "Clinical/FDA-review timelines are similar in principle to Tier B but large companies more often use Priority Review, Breakthrough Therapy, and Accelerated Approval designations to compress timelines. Global rollout can take additional years due to sequential national reimbursement negotiations (e.g., a UK NICE health-technology-assessment review often takes a year or more post-EMA approval). Under the Inflation Reduction Act, the first batch of Medicare-negotiated drugs have negotiated prices taking effect in 2026.",
        tools:
          "The enterprise-wide Veeva Vault suite (CRM, RIM, QualityDocs, eTMF, Safety) is the near-universal standard across large pharma. Medidata Rave and Oracle Clinical One for large-scale EDC/CTMS across hundreds of simultaneous trials. IQVIA provides commercial data and market access intelligence at massive scale; Komodo Health, Aetion, Datavant, and Truveta provide RWE analytics increasingly built into regulatory and payer submissions. AI drug discovery partnerships are well-funded — major pharma companies have struck significant deals with Isomorphic Labs, Recursion Pharmaceuticals, and Insilico Medicine. The gap even at this scale: global regulatory harmonization and submission automation — despite ICH harmonization efforts, simultaneous multi-region filing still requires largely manual reformatting of dossiers per-country regulatory format.",
        moneyFlow:
          "Large pharma spreads massive annual R&D budgets across dozens of programs, accepting individual program failure as a portfolio-level statistical certainty. Gross-to-net rebates to PBMs are enormous in absolute dollars. IRA Medicare price negotiation represents a structurally new and significant revenue headwind since it's mandatory rather than negotiated market-by-market. M&A/licensing deal sizes at this tier are the largest in the industry — multi-billion-dollar acquisitions (Lilly-Verve, Pfizer's acquisition of Seagen, J&J's acquisition of Shockwave Medical) are a routine pipeline-refill mechanism.",
        failurePoints: [
          "Even at this scale, the great majority of Phase 1 drug candidates never reach approval — Tier C just runs a large enough portfolio to absorb it statistically.",
          "Patent cliffs are the dominant Tier C-specific risk — multiple companies face concentrated blockbuster exclusivity losses in the back half of the 2020s.",
          "FDA Advisory Committee negative votes or Complete Response Letters on flagship late-stage assets can wipe out billions in market cap in a single trading day.",
          "Device recalls at scale (e.g., Philips' large CPAP/ventilator recall, which cost billions and multiple years of remediation) show how catastrophic a quality failure can be.",
        ],
        opportunity:
          "Build an AI-native regulatory-submission harmonization platform that auto-reformats a single clinical/CMC dossier into the FDA's, EMA's, and PMDA's differing electronic submission formats — even the largest companies still burn significant regulatory-affairs headcount manually reformatting near-identical data for each region.",
      },
    ],
  },
];
