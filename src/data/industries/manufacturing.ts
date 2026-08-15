import type { WorkflowType } from "@/data/business-workflows";

const TIER_COLOR = { A: "#4ECDC4", B: "#FF9F40", C: "#FF6B6B" };

export const manufacturingWorkflows: WorkflowType[] = [
  {
    id: "product-engineering",
    label: "Product Design & Engineering",
    intro:
      "Going from a concept/prototype to a production-ready design — from one founder modeling a part on a laptop, to a mid-size engineering department running formal DFM gate reviews, to a global conglomerate coordinating thousands of engineers on a shared PLM backbone.",
    compare: [
      { label: "Team", a: "1-2 engineers, often the founder", b: "15-100+ engineers organized by discipline", c: "Thousands to tens of thousands of engineers globally" },
      { label: "Design cycle", a: "Days to a few weeks per prototype iteration", b: "6-18 months concept to production release", c: "2-7+ years for a genuinely new platform" },
      { label: "Key tools", a: "Fusion 360, Onshape, KiCad", b: "SolidWorks, Arena/Windchill/Teamcenter PLM, ANSYS", c: "Siemens NX/Teamcenter, CATIA/3DEXPERIENCE, DOORS" },
      { label: "DFM feedback", a: "None — discovered only when tooling is cut", b: "Periodic gate-review meetings, weeks of lag", c: "Concurrent engineering with supplier co-design" },
      { label: "Top failure point", a: "Design isn't manufacturable, discovered after tooling", b: "Late-stage DFM failures force costly redesign", c: "Config-management failures across sites (Boeing 737 MAX)" },
    ],
    tiers: [
      {
        key: "A",
        name: "Small Job Shop / Single-Product Startup Manufacturer",
        tag: "2-20 people",
        color: TIER_COLOR.A,
        tldr: "A tiny hardware company usually has just one or two people designing the whole product on a laptop, and the biggest risk is that the design looks great on screen but turns out to be really hard or expensive to actually build.",
        profile:
          "A 2-20 person operation, pre-revenue to low-single-digit-millions in revenue. Either a small machine/fab shop doing custom design-build work for clients, or a hardware startup taking its first product from concept to production-ready design. Real examples: Formlabs and Prusa Research in their early years, and countless YC/Highway1/HAX-backed hardware startups. Design work is typically done by the founder(s) themselves or 1-3 contracted engineers.",
        steps: [
          { title: "Concept sketching & requirements", text: "Founder(s) define what the product needs to do, sketch on paper or in a simple CAD tool, often without formal requirements documentation." },
          { title: "CAD modeling", text: "A single engineer (often the founder) builds the 3D model in a mid-tier CAD package, iterating quickly with few formal design reviews." },
          { title: "Rapid prototyping", text: "3D printing (FDM/SLA) or a local machine shop makes quick physical prototypes to test fit, form, and function within days." },
          { title: "Functional/user testing", text: "The founder or a small team tests the prototype themselves or with a handful of early users, feeding fixes back into the CAD model." },
          { title: "DFM (design for manufacturing) pass", text: "Once the design stabilizes, it's reviewed — often by an outside contract manufacturer — for moldability/machinability and cost; this is frequently where a startup discovers its design needs significant rework." },
          { title: "Tooling design & vendor selection", text: "A supplier (often overseas) is chosen to build injection molds or production tooling; iteration happens over email/video calls with T1/T2 sample rounds." },
          { title: "Pilot production run", text: "A small pilot batch (tens to low hundreds of units) is built off production tooling to validate the design actually works at scale." },
        ],
        roles:
          "Usually just the founder(s) acting as the engineer, sometimes supplemented by 1-2 contracted mechanical/electrical engineers or an industrial design freelancer. No dedicated PLM administrator, DFM specialist, or QA engineer — these functions are outsourced or skipped entirely until problems force the issue.",
        timeline:
          "Concept-to-first-prototype: days to a few weeks. Prototype iteration cycles: 1-4 weeks each, often bottlenecked by 3D printing/machining turnaround. Tooling itself commonly takes 6-10+ weeks to build overseas, and getting a design through 2-4 rounds of T1/T2 sample iteration to something production-ready often takes 3-6 months total.",
        tools:
          "Fusion 360 (Autodesk's cloud-connected CAD/CAM, popular for lower cost and built-in CAM/simulation), Onshape (fully cloud-based, real-time collaboration), or SolidWorks where a founding engineer trained on it. Altium Designer vs. KiCad (free, open-source) for electronics. File/version management is often just cloud folders since dedicated PLM is overkill for one designer's files. Well-solved: cloud CAD has genuinely made small-team collaborative design far cheaper; rapid prototyping (in-house 3D printers, services like Xometry/Protolabs/Fictiv) has compressed iteration cycles dramatically. Real gap: there's no good, cheap bridge between one designer's CAD files and a real PLM system — a 5-10 person startup has no affordable way to track design revisions against supplier communications, DFM feedback, and BOM changes in one place. Full PLM platforms (Arena, Propel, Autodesk Fusion Manage) are priced and scoped for teams with dedicated PLM admins.",
        moneyFlow:
          "Engineering cost is almost entirely sweat equity or founder salary/burn — there's rarely a formal NRE line item. Tooling cost (often the single largest capital outlay before revenue) is typically paid as a lump sum or in installments to the tooling vendor and then amortized informally against unit cost. If an outside design firm does DFM/tooling design work, that's billed as a discrete NRE fee, sometimes credited back against future orders.",
        failurePoints: [
          "The single biggest failure mode is discovering a design isn't manufacturable only after tooling has already been cut, forcing an expensive tooling rework.",
          "The one engineer who built the CAD files leaves or burns out, and nobody else fully understands the design intent or why certain tolerances were chosen.",
          "Skipping proper DFM review to save time/money, then shipping a product with a latent defect that only surfaces at volume.",
        ],
        opportunity:
          "Build a lightweight \"CAD-to-production\" tracker purpose-built for 2-10 person hardware teams that links CAD revisions, supplier sample rounds, DFM feedback, and BOM changes in one place — current PLM tools are priced and built for companies with dedicated PLM administrators, leaving early hardware startups tracking this across Slack threads and file names like \"v14_FINAL_actually_final.step.\"",
      },
      {
        key: "B",
        name: "Regional Mid-Size Manufacturer with Multiple Product Lines",
        tag: "$20M-$500M revenue",
        color: TIER_COLOR.B,
        tldr: "A mid-size manufacturer has a real engineering department that designs products carefully with computer simulations and formal reviews, but a lot of the back-and-forth between \"can we actually build this\" and \"here's what we designed\" still happens slowly, in meetings.",
        profile:
          "Roughly $20M-$500M revenue, several hundred to a couple thousand employees, with a real engineering department supporting multiple concurrent product lines. Examples: mid-size industrial/consumer product companies such as The Toro Company business units, Generac in its earlier growth phase, Watts Water Technologies divisions, or a mid-size furniture/appliance/equipment manufacturer with an in-house engineering team of dozens.",
        steps: [
          { title: "Product requirements & business case", text: "A product manager or engineering director defines requirements against market/customer input, often with a formal business case before engineering resources are allocated." },
          { title: "Concept design & feasibility", text: "A small team of engineers develops multiple concepts, doing early feasibility analysis (cost targets, manufacturability, regulatory constraints) before committing to one direction." },
          { title: "Detailed CAD design & simulation", text: "Engineers build out full 3D models with FEA and tolerance stack-up simulation to validate structural and functional performance before physical prototyping." },
          { title: "Design reviews (formal gate process)", text: "The design passes through formal stage-gate reviews involving engineering, manufacturing, quality, and often purchasing stakeholders." },
          { title: "Prototype build & validation testing", text: "Prototypes are built and put through formal validation testing against spec — environmental, durability, safety testing depending on the product category." },
          { title: "DFM/DFA optimization", text: "A dedicated manufacturing/industrial engineering team works with design engineers to optimize the design for the company's actual production processes." },
          { title: "Pilot production run & release", text: "A pilot run on the actual production line validates the process before the finalized design releases through a formal ECO into the PLM system." },
        ],
        roles:
          "An Engineering Director/VP of Engineering leads teams organized by product line or discipline, including Mechanical Design Engineers, Electrical/Controls Engineers, Manufacturing/Industrial Engineers (DFM specialists), Test Engineers, a PLM Administrator/CAD Manager, and Project/Program Managers coordinating cross-functional launches. Teams commonly run 15-100+ engineers.",
        timeline:
          "Full design cycle (concept to production release) for a moderately complex product: typically 6-18 months. DFM iteration between design and manufacturing engineering: several rounds over 4-12 weeks. Formal validation testing can add 1-3 months on its own. Engineering change orders for existing products: days for minor changes, several weeks for changes touching tooling or requiring re-validation.",
        tools:
          "SolidWorks is very common at this tier for mechanical design; Siemens NX or Autodesk Inventor also common depending on legacy tooling choices. Arena PLM (cloud-based, popular with mid-size hardware companies), PTC Windchill, or Siemens Teamcenter tie CAD, BOM, and change management together. SolidWorks Simulation or ANSYS for FEA/structural analysis. Well-solved: PLM/CAD integration is mature — Arena, Windchill, and Teamcenter all have real, referenceable mid-market deployments. Real gap: getting DFM feedback looped in early and fast is still a manual, meeting-heavy process — manufacturing engineers still mostly review designs in periodic gate meetings rather than getting continuous, automated manufacturability feedback while the design engineer is still modeling.",
        moneyFlow:
          "Engineering cost is typically tracked as a percentage of revenue or COGS (commonly single-digit to low-teens percent of revenue, varying heavily by industry). NRE for tooling (injection molds, stamping dies, jigs/fixtures) is a formal capital expenditure, often amortized over the tool's expected production volume and added into per-unit cost as a tooling amortization line. Cost-reduction/value-engineering initiatives are an ongoing formal program, since even small per-unit savings compound significantly at this volume.",
        failurePoints: [
          "A design that passes internal review but fails DFM at the manufacturing engineering stage forces a costly late-stage redesign, sometimes after tooling has already been ordered.",
          "Poor coordination between design engineering and manufacturing engineering (siloed teams, infrequent reviews) is a chronic, well-documented failure pattern leading to late tooling changes.",
          "Engineering changes made without properly updating the PLM/ERP-linked BOM cause production to build the wrong revision.",
        ],
        opportunity:
          "Build a tool that plugs into existing CAD/PLM systems (SolidWorks, Arena, Windchill) to give design engineers automated, real-time manufacturability feedback as they model — rather than waiting weeks for a formal DFM review meeting.",
      },
      {
        key: "C",
        name: "Large National/Global Manufacturer or Industrial Conglomerate",
        tag: "Boeing, Caterpillar, Honeywell",
        color: TIER_COLOR.C,
        tldr: "A giant company like Boeing or Caterpillar has thousands of engineers around the world designing one product together using enormously expensive shared software, and when something in that huge, coordinated system breaks down, the consequences can be catastrophic and very public.",
        profile:
          "Multi-billion-dollar revenue, tens of thousands of employees, engineering organizations spanning multiple continents. Real examples: Boeing, Caterpillar, Honeywell, Stanley Black & Decker, John Deere, GE Appliances (Haier). Engineering here is a full corporate function with global teams, formal PLM infrastructure, and product development programs spanning years and involving thousands of engineers across suppliers and internal teams.",
        steps: [
          { title: "Portfolio/program planning", text: "Corporate product strategy and portfolio management decide which new products or platforms get funded, often years ahead of launch." },
          { title: "Systems engineering & requirements management", text: "Formal requirements are decomposed across systems, subsystems, and components using dedicated requirements management tools, with full traceability required especially in regulated industries like aerospace." },
          { title: "Concurrent/collaborative CAD design", text: "Large distributed engineering teams (internal plus supplier engineering partners) work concurrently on different subsystems within a shared PLM environment." },
          { title: "Simulation-driven design", text: "Extensive FEA, CFD, and increasingly full digital-twin simulation reduce the number of physical prototypes needed before committing to hardware." },
          { title: "Design reviews & risk management gates", text: "Formal, often regulator-influenced design review gates (e.g., Critical Design Review in aerospace/defense) with cross-functional sign-off." },
          { title: "Supplier co-design & integration", text: "For complex products, key suppliers are integrated directly into the design process, sharing PLM access, since large conglomerates increasingly outsource significant engineering scope." },
          { title: "Production release & global rollout", text: "The finalized design is released simultaneously (or in phases) to multiple manufacturing sites globally, requiring careful configuration management." },
        ],
        roles:
          "A Chief Engineer/VP of Engineering or CTO oversees Systems Engineers, Design/Mechanical/Electrical Engineers organized by subsystem, Simulation/Analysis Engineers, Manufacturing Engineering as a full parallel organization, Configuration Management specialists, PLM Administrators/IT teams, Program Managers running major product development programs, and Supplier Engineering Liaisons. Total engineering headcount routinely runs into the thousands to tens of thousands globally.",
        timeline:
          "Major new product/platform development: 2-7+ years for genuinely new platforms, with derivative/variant products moving faster (1-3 years). Formal design review gate cycles alone can each take weeks to months given the scale of cross-functional sign-off required. Engineering changes on a released, in-production design still require formal change control that, even for a simple change, must be validated across every affected manufacturing site.",
        tools:
          "Siemens NX and Teamcenter, PTC Creo and Windchill, Dassault Systèmes CATIA and ENOVIA/3DEXPERIENCE are the dominant enterprise-grade platforms across aerospace, automotive, and heavy industrial engineering, standardized company-wide as multi-year, multi-million-dollar infrastructure decisions. ANSYS, Siemens Simcenter, Dassault's SIMULIA for simulation. IBM Engineering Requirements Management DOORS is widely used in aerospace/defense for requirements traceability. Well-solved: enterprise PLM and CAD integration at global scale is mature — decades of deployments at exactly this scale. Real gap: cross-company/cross-tool interoperability remains genuinely unsolved — a large conglomerate that's grown through acquisition often runs different CAD/PLM systems in different business units, and translating product data between them for shared platforms requires expensive, imperfect data-translation projects.",
        moneyFlow:
          "R&D/engineering spend at this scale is a formal, board-reported line item, often a specific percentage of revenue disclosed in annual reports. NRE for major tooling and capital equipment for a new product platform can run into the tens to hundreds of millions of dollars for genuinely new platforms, financed through corporate capital budgets and amortized over the multi-year, high-volume production life of the product. Engineering cost allocation across global sites is a sophisticated internal accounting exercise, often involving transfer pricing between international subsidiaries.",
        failurePoints: [
          "Well-documented failure examples include design/engineering process breakdowns that contributed to major public incidents — Boeing's well-documented issues with its 737 MAX program (including the MCAS system) and subsequent door-plug incident, resulting in FAA production-rate caps and years of intensified regulatory oversight.",
          "Cross-site configuration management failures (two plants unknowingly building to slightly different design revisions) are a chronic, recurring failure mode.",
          "Post-M&A PLM system fragmentation creates expensive rework and traceability gaps.",
        ],
        opportunity:
          "Build an AI-native data-translation and synchronization layer that lets large conglomerates keep using different CAD/PLM systems across acquired business units while still sharing accurate, synchronized product data for common platforms — a VP of Engineering at a post-acquisition industrial conglomerate would pay significantly to avoid forcing a disruptive, years-long single-PLM migration just for cross-business-unit design visibility.",
      },
    ],
  },
  {
    id: "production-assembly",
    label: "Production & Assembly Operations",
    intro:
      "How something actually gets built at volume — from a small job shop's one or two machinists running a CNC mill by hand, to a mid-size plant tracking OEE across multiple shifts, to Toyota's andon-cord-pulling, robot-assisted lines where a single line-down minute can cost tens of thousands of dollars.",
    compare: [
      { label: "Team", a: "2-30 employees, one owner-operator role often doubling", b: "100-1,500 employees, multiple shifts", c: "Tens of thousands to hundreds of thousands of employees" },
      { label: "Key tools", a: "Katana MRP, JobBOSS²/E2, Fusion 360/Mastercam", b: "Epicor Kinetic, Tulip/MachineMetrics, PlanetTogether", c: "SAP S/4HANA + IBP, Siemens Opcenter, FANUC/ABB/KUKA robotics" },
      { label: "Changeover time", a: "30 min-2+ hrs, manual, unstandardized", b: "10-45 min with a real SMED program", c: "Near-zero on flexible mixed-model lines" },
      { label: "Scrap/downtime cost", a: "Silent margin erosion, no formal tracking", b: "Thousands-tens of thousands per hour of line-down time", c: "Tens of thousands of dollars per minute (major auto assembly)" },
      { label: "Top failure point", a: "One late shipment or sick machinist halts the job", b: "Unplanned downtime, changeover overruns", c: "Single-supplier dependency (2021-2023 chip shortage)" },
    ],
    tiers: [
      {
        key: "A",
        name: "Small Job Shop / Single-Product Startup Manufacturer",
        tag: "2-30 employees, $200K-$5M revenue",
        color: TIER_COLOR.A,
        tldr: "A small job shop is a handful of people running one or two machines to make custom parts to order, tracking everything by hand or on cheap software because they can't afford the big factory tools.",
        profile:
          "Typically 2-30 employees, $200K-$5M annual revenue, one facility, running either contract/job-shop work or a single hardware product's first production line. Real examples of this tier's business model: small CNC/precision machine shops (findable via Thomasnet or Xometry's supplier network), and hardware startups standing up first-run manufacturing such as early-stage Formlabs.",
        steps: [
          { title: "Quote & order intake", text: "A customer RFQ or internal product order comes in; the shop owner or an estimator manually reviews drawings/CAD and quotes price and lead time." },
          { title: "Design/CAM programming", text: "An engineer or the shop owner converts the CAD file into CNC toolpaths or preps the BOM and work instructions for assembly." },
          { title: "Material procurement", text: "Raw stock is ordered from a distributor, often just-in-time because there's no warehouse space or capital to stock heavily." },
          { title: "Machine/line setup (changeover)", text: "A machinist sets up fixtures, tooling, and programs on the CNC mill/lathe, or a small team sets up a manual/semi-automated assembly jig." },
          { title: "Production run", text: "Parts are machined or units are hand-assembled in small batches, with the operator running multiple tasks since headcount is thin." },
          { title: "In-process quality check", text: "Operator or owner does manual inspection with calipers/gauges — usually no dedicated QA department; quality is the operator's job." },
          { title: "Finishing, packaging & shipping", text: "Deburring, painting, or final assembly happen at a bench, then units are boxed and shipped, with the owner or office manager invoicing the customer." },
        ],
        roles:
          "Owner-operator (often also the primary machinist or lead assembler), 1-3 machinists/assemblers, occasionally a part-time bookkeeper. No dedicated quality engineer, planner, or plant manager — one person wears 3-4 hats.",
        timeline:
          "Job-shop lead times: 1-3 weeks for a typical quoted job (rush jobs 24-72 hours at a premium). Changeovers between different parts/jobs on the same machine: 30 minutes to 2+ hours, done manually with minimal standardization. Cycle time per part: seconds (simple turned parts) to 30+ minutes (complex multi-axis machining).",
        tools:
          "Katana MRP (built specifically for small manufacturers, subscription pricing in the low hundreds of dollars per month) or JobBOSS²/E2 Shop System for job tracking. Fusion 360 or Mastercam for CAM. QuickBooks + Fishbowl Manufacturing for accounting/inventory. Well-solved: basic job costing, inventory tracking, and CAD/CAM are mature, affordable, and well-documented at this tier. Real gap: there is no good, affordable tool for real-time shop-floor scheduling and capacity visibility — a one-person shop owner is still scheduling jobs on a whiteboard because full MES platforms (Tulip, MachineMetrics) are priced and architected for 50+ person operations. A sharp opportunity exists for a dead-simple, voice- or photo-based shop-floor logging tool built for a 3-10 person shop with zero IT staff.",
        moneyFlow:
          "Revenue per job is typically priced at 2.5-4x direct material + labor cost to cover overhead and margin. Labor is usually the largest cost component (40-55%) since automation is minimal; materials run 25-40%; overhead (rent, utilities, machine depreciation) is 15-25%. Capital equipment (a used CNC mill can run tens of thousands to well over $100K) is often financed via equipment loans or leases. Payment terms are typically Net 30, though many small shops require deposits (30-50% upfront) from new customers.",
        failurePoints: [
          "A single late material shipment can blow the whole delivery schedule since there's no buffer stock.",
          "One sick machinist can halt an entire job because there's no cross-training redundancy.",
          "Manual inspection misses defects that would be caught by automated vision systems at larger scale — a bad batch often isn't discovered until the customer complains.",
          "Cash flow crunches are common: a shop can be profitable on paper but insolvent because a big job's payment is 60-90 days out while payroll and material bills are due weekly.",
        ],
        opportunity:
          "Build a dead-simple, mobile-first shop-floor tracking and scheduling tool priced well under what MES platforms like Tulip and MachineMetrics charge — specifically for 2-15 person job shops currently stuck on whiteboards and spreadsheets.",
      },
      {
        key: "B",
        name: "Regional Mid-Size Manufacturer",
        tag: "$20M-$500M revenue, 100-1,500 employees",
        color: TIER_COLOR.B,
        tldr: "A mid-size factory runs multiple product lines around the clock in shifts, using real planning software and machines that talk to computers, but it still loses real money every time a line goes down or a changeover runs long.",
        profile:
          "$20M-$500M revenue, typically 100-1,500 employees, one to several facilities, multiple shifts (often 2-3 shifts, 5-7 days/week), multiple product lines or SKUs. Real examples: Marlin Steel Wire Products (Baltimore-based custom wire forms manufacturer, frequently cited as a lean/automated mid-size U.S. manufacturer), individual plants of companies like Watts Water Technologies or Sub-Zero Group, and many private-equity-owned regional manufacturers in metal fabrication and plastics injection molding.",
        steps: [
          { title: "Demand planning & scheduling", text: "A planner/scheduler uses an ERP/APS system to build a production schedule across multiple lines based on sales forecasts and open orders, balancing multiple SKUs against finite machine and labor capacity." },
          { title: "Materials/inventory staging", text: "Warehouse or materials teams pull or receive raw materials/components per the schedule, often using barcode/RFID-driven systems and kanban bins for line-side replenishment." },
          { title: "Line changeover", text: "A changeover crew (or the line operators under a SMED program) retools/reconfigures equipment between product runs; mid-size plants increasingly track changeover time as a formal KPI." },
          { title: "Production run across shifts", text: "Multiple shifts run the line with defined takt times; line leads monitor throughput against targets on shift." },
          { title: "In-line quality control", text: "Statistical process control (SPC) checkpoints, in-line sensors, and periodic sampling by quality technicians catch defects during the run, not just at the end." },
          { title: "End-of-line testing/packaging", text: "Finished goods go through functional test stations, then automated or semi-automated packaging lines, then warehousing and shipment." },
          { title: "Performance review & continuous improvement", text: "Plant management reviews OEE (Overall Equipment Effectiveness), scrap rates, and downtime logs, feeding a kaizen/continuous improvement loop." },
        ],
        roles:
          "Plant manager, production/operations manager, shift supervisors (one per shift per line), industrial/manufacturing engineers, quality engineers/technicians, maintenance technicians, materials/inventory planners, line leads, and a larger pool of machine operators/line workers (often 50-500+). HR and safety coordinators become dedicated roles at this tier.",
        timeline:
          "Production runs: hours to several days per SKU batch (batches of 500-50,000 units common). Changeovers: with a real SMED program, well-run mid-size plants get changeovers down to 10-45 minutes; without one, changeovers can eat 1-4 hours of line time. Lead times to customers: typically 2-8 weeks for standard products. New product introduction: commonly takes 3-9 months at this tier.",
        tools:
          "Epicor Kinetic (targets mid-market to enterprise manufacturers with advanced planning/scheduling and MES with IoT integration), Infor CloudSuite Industrial (SyteLine), or NetSuite Manufacturing Edition for ERP. Tulip and MachineMetrics for MES/shop-floor visibility. PlanetTogether or Preactor (Siemens Opcenter APS) for scheduling. Rockwell Automation FactoryTalk or Siemens WinCC for SCADA/controls. Well-solved: ERP and basic MES are genuinely mature here with real, referenceable mid-market customers. Real gap: integration between systems is the actual pain — a mid-size plant commonly runs ERP, MES, a separate quality system, and Excel-based scheduling side by side, requiring expensive consultants to stitch together. There's also a real gap in AI-native predictive maintenance affordable at this scale — most predictive maintenance platforms (e.g., Augury) are priced for larger plants; startups like Factbird are emerging to serve this exact underserved middle.",
        moneyFlow:
          "Cost breakdown typically: materials 45-60% of COGS, direct labor 15-25%, overhead (utilities, depreciation, maintenance, indirect labor) 20-30%. Capital equipment (a new CNC machining center or injection molding press can run from the low hundreds of thousands to a couple million dollars) is financed through equipment loans, leases, or bank credit facilities, amortized over 7-15 years. Customer payment terms are commonly Net 30-60, with larger automotive/industrial customers sometimes imposing Net 90 coordinated via EDI.",
        failurePoints: [
          "Unplanned downtime is the single biggest line-level failure mode, with a single line-down event typically costing thousands to tens of thousands of dollars per hour depending on the product.",
          "Scrap/rework rates of 2-8% are common failure points that erode margin silently.",
          "Changeover overruns (a changeover budgeted for 30 minutes running 2+ hours) cascade into missed shipment windows.",
          "Supplier quality escapes — a bad batch of purchased components getting into a finished assembly — can trigger costly recalls.",
        ],
        opportunity:
          "Build a lightweight, fast-to-deploy integration/middleware layer that connects a mid-size plant's existing ERP, MES, and quality systems without a six-figure systems-integrator project — plant managers would pay a recurring SaaS fee for a pre-built connector layer instead.",
      },
      {
        key: "C",
        name: "Large National/Global Manufacturer or Industrial Conglomerate",
        tag: "Toyota, Tesla, John Deere, Whirlpool, Foxconn",
        color: TIER_COLOR.C,
        tldr: "A giant factory like Toyota's or Tesla's builds thousands of products a day using robots and computers working together so precisely that a single mistake anywhere in the chain can shut down an entire billion-dollar production line.",
        profile:
          "Multi-billion-dollar revenue, tens of thousands to hundreds of thousands of employees, dozens of plants globally, running near-fully-automated or highly instrumented production. Real, verifiable examples: Toyota (originator of the Toyota Production System/lean manufacturing), Tesla (Gigafactories known for highly automated, vertically integrated production), John Deere, Whirlpool, and Foxconn/Hon Hai Precision Industry (the world's largest electronics contract manufacturer).",
        steps: [
          { title: "Global demand planning (S&OP)", text: "Corporate sales & operations planning integrates forecasts across regions/plants; production allocation decisions are made months in advance using enterprise APS/ERP systems." },
          { title: "Just-in-time material sequencing", text: "Suppliers deliver components on tight JIT/JIS schedules directly to the line, coordinated via EDI and supplier portals — the hallmark of the Toyota Production System." },
          { title: "Automated/robotic sub-assembly", text: "Robots (FANUC, ABB, KUKA) handle welding, painting, and heavy sub-assembly with minimal human intervention; humans supervise and handle exception cases." },
          { title: "Mixed-model final assembly line", text: "A single line can build multiple product variants back-to-back, sequenced by an MES that pushes build instructions to each station in real time." },
          { title: "In-line automated quality inspection", text: "Machine vision, torque-check sensors, and automated test cells check quality at nearly every station, with defects triggering automatic line stops (Toyota's andon system)." },
          { title: "Andon-driven problem resolution", text: "When a defect or issue is flagged, a team leader/andon system escalates immediately; line workers at Toyota plants have long had documented authority to pull an andon cord and stop the line." },
          { title: "Automated warehousing & global logistics", text: "Finished goods move through automated storage/retrieval systems and are shipped via a globally coordinated logistics network." },
        ],
        roles:
          "VP of Operations/global manufacturing, plant managers, production superintendents, area/shift managers, industrial engineers, process engineers, automation/controls engineers, robotics technicians, quality engineers, Six Sigma black belts, maintenance/reliability engineers, supply chain/logistics managers, data scientists/analytics teams focused on production data, and tens of thousands of line operators and technicians organized under team leads.",
        timeline:
          "Cycle time on a high-volume automotive or appliance line: often under a minute per unit at the bottleneck station. Changeovers on flexible mixed-model lines can be near-zero; changeovers on dedicated lines for a full model changeover can still take days to weeks of planned downtime. New model/product launches take 18-36+ months from design freeze to full-rate production.",
        tools:
          "SAP S/4HANA and SAP IBP (Integrated Business Planning) used extensively across large industrial conglomerates for global S&OP. Siemens Opcenter, Rockwell FactoryTalk, or custom in-house MES platforms (Toyota and Tesla are both known for extensively customizing or building proprietary manufacturing software). FANUC, ABB RobotStudio, KUKA are industry-standard robotics vendors. Siemens Teamcenter, PTC Windchill, Dassault ENOVIA/3DEXPERIENCE for PLM. Well-solved: global ERP, robotics integration, and PLM are extremely mature — decades of deployments at exactly this scale. Real gap: cross-plant, cross-vendor data standardization remains a genuine unsolved problem — a conglomerate with dozens of plants running a mix of legacy PLCs and different MES vintages (often from acquisitions) cannot easily get a single real-time view of global OEE or quality trends. AI-driven predictive quality is still emerging — companies like Augury and Instrumental represent the current frontier, but full-plant-wide predictive quality is still more pilot-stage than universally deployed.",
        moneyFlow:
          "At this scale, cost-per-unit economics are driven by enormous volume leverage: materials typically 55-70% of COGS due to massive negotiated supplier discounts, direct labor often compressed to a low percentage of unit cost due to automation. Capital equipment investment is enormous — a single new automotive assembly plant can cost well over a billion dollars, financed through corporate bonds, retained earnings, or government incentives tied to job-creation commitments. B2B/dealer-network models (Toyota, John Deere, Whirlpool) commonly extend Net 30-90 terms to distributors/dealers, with sophisticated captive finance arms (Toyota Financial Services, John Deere Financial) that are themselves major profit centers.",
        failurePoints: [
          "Line-down events at this scale are extraordinarily costly — a stopped automotive assembly line is widely reported in industry analyses to cost tens of thousands of dollars per minute in lost production.",
          "Real, well-documented historical failure examples include the Takata airbag inflator recall (affecting tens of millions of vehicles) and the 2021-2023 semiconductor shortage that forced Toyota, Ford, and others to idle plants due to a single-supplier-category bottleneck.",
          "Single-supplier dependency remains a named, recurring failure mode — a fire, natural disaster, or geopolitical disruption at one Tier 1 or Tier 2 supplier's plant can halt production at multiple OEM plants globally within days.",
        ],
        opportunity:
          "Build an AI-native data-unification layer purpose-built for multi-plant industrial conglomerates that normalizes production, quality, and machine data across legacy PLCs and mismatched MES systems from decades of acquisitions — current approaches require multi-year, multi-million-dollar systems-integration projects.",
      },
    ],
  },
  {
    id: "quality-compliance",
    label: "Quality Control & Compliance",
    intro:
      "Inspection, certification, and regulatory compliance — from a small shop's owner checking parts with calipers and a spreadsheet, to a mid-size company's dedicated quality department fighting to keep IATF/AS9100/ISO 13485 certification, to a global conglomerate's army of quality engineers racing to catch the next Takata- or 737-MAX-scale failure before it happens.",
    compare: [
      { label: "Scale", a: "2-30 employees, informal quality role", b: "$20M-$500M revenue, dedicated quality department", c: "$1B+ revenue, Chief Quality Officer, thousands of QA/regulatory staff" },
      { label: "Key tools", a: "Excel/paper travelers, ProShop ERP, Qualio/Greenlight Guru", b: "ETQ Reliance, MasterControl, Arena QMS, Minitab", c: "MasterControl, TrackWise Digital, Veeva Vault QMS" },
      { label: "Certification", a: "ISO 9001 (6-12 mo) or AS9100 (9-18 mo) from cold start", b: "IATF 16949/ISO 13485 across multiple plants, 12-24 mo", c: "Continuous multi-site certification, auditors nearly always on-site somewhere" },
      { label: "Top failure point", a: "Missed dimensional tolerance ships to a customer, FOD in aerospace parts", b: "OEM field-quality escapes and charge-backs, FDA 483 observations", c: "Billion-dollar recalls (Takata, GM ignition switch), FDA Warning Letters/Consent Decrees" },
    ],
    tiers: [
      {
        key: "A",
        name: "Small Job Shop / Single-Product Startup Manufacturer",
        tag: "2-30 employees, $500K-$10M revenue",
        color: TIER_COLOR.A,
        tldr: "A small factory usually has one person checking parts with hand tools and a spreadsheet instead of a real quality team, and getting \"ISO certified\" mostly means finally writing down rules they already sort-of followed.",
        profile:
          "Typically 2-30 employees, roughly $500K-$10M revenue. Examples: small CNC/precision machine shops serving aerospace/medical subcontracts, contract manufacturers doing prototype-to-low-volume runs, and hardware startups like early-stage Prusa Research. Many operate without full-time dedicated QA staff — the owner, a lead machinist, or an operations lead wears the quality hat alongside other duties, pursuing ISO 9001 or AS9100 certification only when a customer requires it.",
        steps: [
          { title: "Incoming material/component inspection", text: "Raw stock, purchased parts, or subcomponents are checked against purchase order specs using calipers, micrometers, or a CMM if available, often on a sampling basis." },
          { title: "First article inspection (FAI)", text: "Before a full production run, the first completed unit is measured against the full drawing/spec to validate the process before committing to the batch." },
          { title: "In-process checks", text: "Operators self-check dimensions/tolerances at key steps using go/no-go gauges or simple SPC charts on paper or a spreadsheet; often informal and operator-dependent." },
          { title: "Final inspection before shipment", text: "A final visual/dimensional check and functional test against spec, often 100% inspection for low-volume/high-value parts." },
          { title: "Nonconformance handling", text: "When a defect is found, the part is tagged, segregated, and a decision made (rework, scrap, use-as-is with customer waiver); root cause analysis is often just a verbal discussion rather than documented CAPA." },
          { title: "Document control & audit prep", text: "Paper or shared-drive folders hold router travelers, inspection reports, and calibration records; the shop assembles evidence when a customer or registrar audit is scheduled." },
        ],
        roles:
          "Usually no dedicated quality department. A shop owner or operations manager often owns quality by default; a lead machinist/inspector performs measurements; sometimes a part-time or fractional quality consultant is hired specifically to build the QMS and prep for ISO/AS9100 certification — a very common small-shop pattern.",
        timeline:
          "First article inspection: hours to 1-2 days per part. ISO 9001 certification from a cold start: typically 6-12 months. AS9100 (aerospace) is materially harder: 9-18 months for a first-time small shop, given added risk management, configuration management, and FOD (foreign object debris) control requirements. Annual surveillance audits: 1 day on-site, with recertification every 3 years.",
        tools:
          "Most Tier A shops run quality on Excel/Google Sheets and paper travelers, sometimes combined with a basic ERP quality module (JobBOSS2, E2 Shop System, or ProShop ERP, popular specifically among AS9100/ISO shops for baking traceability into the ERP itself). Qualio and Greenlight Guru serve small medtech/biotech startups pursuing ISO 13485/FDA. InspectionXpert supports CAD-driven FAI/ballooning. Well-solved: basic dimensional inspection tooling, FAI documentation software, and low-cost cloud QMS for the ISO 13485/FDA path give a small startup device company an auditable document-control system without hiring a QA team. Real gap: a persistent underserved niche for AS9100/ISO 9001 shops under roughly 30 people — Qualio and Greenlight Guru are optimized for medtech vocabulary, not machine-shop vocabulary (FAI, PPAP, router travelers), and enterprise QMS (MasterControl, ETQ) is overkill for a 15-person shop.",
        moneyFlow:
          "Cost of quality at this tier is dominated by appraisal cost (inspector/operator time, gauge calibration, CMM time) and failure cost when things go wrong — a bad batch discovered late can mean scrapping an entire job's material and labor. Certification costs are a real line item: ISO 9001 registrar audit fees run in the low thousands of dollars per year, AS9100 audits run higher given added audit days.",
        failurePoints: [
          "A missed dimensional tolerance that escapes final inspection and ships to an aerospace or medical customer, triggering a supplier corrective action request and potential removal from the approved supplier list.",
          "Lost or incomplete calibration records for gauges, discovered during a registrar audit, resulting in a major nonconformance that delays certification.",
          "FOD (foreign object debris) left inside a machined aerospace part — a classic AS9100 failure mode.",
          "Single point of failure: the one person who \"does quality\" leaves, and undocumented tribal knowledge about inspection criteria disappears with them.",
        ],
        opportunity:
          "Build a lightweight, machine-shop-native QMS (not medtech-flavored) that bundles FAI/AS9102 ballooning, calibration tracking, router travelers, and SCAR/CAPA workflows into one affordable SaaS priced for 5-30 person AS9100/ISO 9001 shops — the exact segment ProShop only serves by forcing a full ERP switch and Qualio/Greenlight Guru ignore because they're tuned to medtech design-control language.",
      },
      {
        key: "B",
        name: "Regional Mid-Size Manufacturer with Multiple Product Lines",
        tag: "$20M-$500M revenue",
        color: TIER_COLOR.B,
        tldr: "A mid-size factory has a whole team whose job is making sure every part meets spec and every paper trail is ready for a surprise inspector, because failing that inspection can mean losing a big customer contract overnight.",
        profile:
          "Roughly $20M-$500M revenue, several hundred to a few thousand employees, often multi-plant. Examples: Trelleborg's regional divisions, Watts Water Technologies business units, CIRCOR International segments, mid-size medical device makers like Integra LifeSciences or Merit Medical Systems. These companies typically run IATF 16949 (automotive), AS9100 (aerospace), or ISO 13485 (medical) certification across multiple facilities.",
        steps: [
          { title: "Supplier quality management", text: "A supplier quality engineering (SQE) function qualifies and audits vendors, requiring PPAPs for automotive-linked lines, and manages a supplier scorecard." },
          { title: "Incoming inspection & receiving QC", text: "Statistical sampling per ANSI/ASQ Z1.4 or similar, often supported by automated measurement (CMM, vision systems) for critical dimensions." },
          { title: "In-process SPC monitoring", text: "Statistical process control charts (Cpk/Ppk tracking) are actively monitored, often with real-time SPC software feeding alerts when a process drifts toward a control limit." },
          { title: "Final inspection & product release", text: "Functional test, dimensional verification, and often environmental/stress testing, followed by a formal lot release/certificate of conformance." },
          { title: "Internal audits & CAPA management", text: "Scheduled internal audits against ISO 9001/IATF 16949/AS9100/ISO 13485 clauses, with a formal, documented CAPA process tracking root cause investigation and effectiveness verification." },
          { title: "Regulatory submissions", text: "For medical device makers, FDA 510(k) submissions or EU MDR technical file maintenance; for automotive, PPAP submission packages to OEM customers." },
          { title: "Third-party certification audits", text: "Annual surveillance and 3-year recertification audits by accredited bodies (BSI, TÜV SÜD, DNV, NSF-ISR, SGS) across each certified facility." },
        ],
        roles:
          "A dedicated Quality Department led by a Director/VP of Quality, with Quality Managers per plant or product line, Quality Engineers, QC Inspectors/Technicians, an SQE team, a Regulatory Affairs Specialist/Manager for medical/automotive-regulated lines, and a Document Control Coordinator. Teams often run 10-50 quality personnel across the company.",
        timeline:
          "IATF 16949 certification from an ISO 9001 baseline: typically 12-18 months for a mid-size multi-plant automotive supplier. ISO 13485 + FDA registration for a mid-size device maker: 12-24 months; a 510(k) clearance for a new product typically adds 6-12 months of FDA review. PPAP approval cycles for a new automotive part: 8-16 weeks. CAPA closure targets: commonly 30-90 days for standard issues, 6+ months for complex systemic issues.",
        tools:
          "ETQ Reliance (Hexagon), MasterControl (common in regulated medtech/pharma-adjacent manufacturing), Arena QMS/PLM (PTC), Intelex, Qualio (scaling up-market), or Sparta Systems TrackWise. Minitab or InfinityQS ProFicient/Enact for SPC. IQS or Plex QMS for supplier quality/PPAP management. Well-solved: SPC/statistical monitoring, document control/CAPA workflows, and PPAP submission management are mature. Real gap: integration between disparate systems remains a genuine pain point — a mid-size company often runs its ERP, QMS, SPC tool, and supplier portal as separate systems requiring manual reconciliation. AI-based defect detection is a live emerging category — Elementary Robotics, Instrumental, Sight Machine, and Landing AI are actively selling into this segment because legacy rule-based machine-vision setups require expensive reprogramming per part change.",
        moneyFlow:
          "Cost of quality frameworks are formally tracked: prevention costs (training, SPC infrastructure, supplier audits), appraisal costs (inspection labor, testing equipment), and failure costs (internal scrap/rework plus warranty claims). A single automotive OEM charge-back for a quality escape can run into the tens to hundreds of thousands of dollars depending on severity. Certification/audit fees for a multi-plant IATF 16949 or AS9100 program can run well into five figures annually.",
        failurePoints: [
          "Automotive OEM field-quality escapes leading to supplier charge-backs and, in severe cases, removal from an OEM's approved supplier list.",
          "FDA Form 483 observations following an inspection — a common, well-documented event for mid-size device manufacturers — can escalate to a Warning Letter if unaddressed.",
          "A failed or downgraded IATF 16949/AS9100 audit due to inadequate internal audit programs, risking loss of OEM-required certification.",
        ],
        opportunity:
          "Build a unified \"quality data layer\" that connects existing SPC tools, ERP, supplier portals, and eQMS systems into one real-time view — mid-size manufacturers are drowning in disconnected point solutions and currently pay integrators or build brittle custom connectors.",
      },
      {
        key: "C",
        name: "Large National/Global Manufacturer or Industrial Conglomerate",
        tag: "Medtronic, Boeing, Bosch, GE Aerospace",
        color: TIER_COLOR.C,
        tldr: "A giant manufacturer has an army of quality and compliance people and expensive software watching every part and every factory worldwide, but when something still slips through, it can turn into a billion-dollar recall and years of extra government oversight.",
        profile:
          "$1B+ revenue, tens of thousands of employees, dozens to hundreds of manufacturing sites globally. Examples: Medtronic (medical devices, ISO 13485/FDA QSR across dozens of sites), Boeing (AS9100, FAA oversight), Bosch (IATF 16949 across global automotive plants), 3M, Johnson & Johnson MedTech, Honeywell Aerospace, GE Aerospace/GE Healthcare. These companies run full enterprise QMS spanning global regulatory affairs and a dedicated compliance organization reporting up to a Chief Quality Officer.",
        steps: [
          { title: "Global supplier quality management", text: "A formalized, tiered supplier quality program spanning thousands of global suppliers, with dedicated supplier quality engineering teams by region/commodity." },
          { title: "Automated inspection at scale", text: "Heavy use of automated vision systems, robotics-assisted inspection, and 100% automated testing on high-volume lines, integrated directly into MES." },
          { title: "Enterprise SPC and real-time analytics", text: "Plant-floor data feeds into centralized statistical process control and quality analytics dashboards, often with predictive/AI-driven anomaly detection layered on top." },
          { title: "Design controls and risk management", text: "Formal design history files, FMEA, and risk management files maintained per ISO 14971 (medical) or equivalent aerospace risk processes, integrated from product development through production." },
          { title: "Global regulatory affairs", text: "Dedicated regulatory affairs teams manage FDA 510(k)/PMA submissions, EU MDR technical documentation, and equivalent registrations across dozens of countries simultaneously." },
          { title: "Enterprise CAPA and complaint handling", text: "A centralized, software-driven CAPA and complaint-handling system feeds into post-market surveillance/vigilance reporting obligations." },
          { title: "Recall/field action management", text: "A formal, legally-governed process for initiating field corrections or recalls, involving regulatory affairs, legal, quality, and executive sign-off, including regulator notification within mandated timeframes." },
        ],
        roles:
          "A Chief Quality Officer or VP of Global Quality sits atop Regional Quality Directors, Plant Quality Managers, Quality Engineers, Supplier Quality Engineers organized by commodity/region, a substantial Regulatory Affairs organization, Complaint Handling/Post-Market Surveillance teams, dedicated Internal Audit teams, and Design Assurance/Reliability Engineers. Total quality/regulatory headcount at a company like Medtronic or Boeing can run into the thousands globally.",
        timeline:
          "FDA PMA at large device makers: typically 1-3+ years including clinical trial data and panel review. FDA 510(k) clearance: typically 6-12 months. IATF 16949/AS9100 recertification across a global multi-site network is an essentially continuous cycle — large companies often have auditors on-site somewhere in their network nearly year-round. A major recall/field action can take months to over a year to fully resolve across an installed base.",
        tools:
          "MasterControl and Sparta Systems TrackWise Digital (now part of Honeywell) are widely used for QMS/CAPA/document control at enterprise scale. ETQ Reliance (Hexagon) and Veeva Vault QMS (increasingly common in large medtech/pharma-adjacent manufacturing) serve similar roles. Siemens Teamcenter or PTC Windchill for PLM/design control integration. InfinityQS Enact or custom-built data platforms integrated with plant MES for SPC/analytics at scale. AI-driven visual inspection and predictive quality analytics are being actively deployed via partnerships with Landing AI, Instrumental, and Cognex with deep-learning add-ons. Well-solved: enterprise document control, formal CAPA/complaint-handling workflows, and global regulatory submission tracking. Real gap: even at this scale, cross-site data consistency and predictive quality analytics remain genuinely hard — large conglomerates frequently run different QMS instances per acquired business unit, a chronic post-M&A problem driving \"QMS harmonization\" consulting engagements.",
        moneyFlow:
          "Cost of quality at this scale is enormous and formally budgeted — internal failure costs can run into tens of millions annually across a global network; external failure costs from a major recall can be catastrophic, with well-documented historical large-scale recalls costing companies hundreds of millions to billions of dollars in remediation, legal settlements, and reputational damage. Regulatory/certification spend across a global multi-site network easily runs into the millions of dollars annually.",
        failurePoints: [
          "Well-documented large-scale recalls tied to manufacturing/design nonconformance: the Takata airbag inflator recall (tens of millions of vehicles, one of the largest automotive recalls in history), GM ignition switch recall actions, and numerous FDA Class I medical device recalls at major device makers.",
          "FDA Warning Letters and Consent Decrees at large device/pharma manufacturers following repeated 483 observations tied to CAPA or design control failures — a recurring, publicly documented pattern.",
          "Boeing's well-documented quality and manufacturing oversight issues (including the 737 MAX program and the door-plug incident) illustrate how even a top-tier AS9100-certified aerospace giant can face catastrophic failures when quality escapes combine with production pressure.",
        ],
        opportunity:
          "Build an AI-driven predictive quality platform that ingests complaint text, field failure data, and cross-plant manufacturing process data to flag emerging recall-risk patterns before they become a formal field action — a Chief Quality Officer facing potential billion-dollar recall exposure would pay handsomely for a system that catches the pattern months earlier than current siloed tools do.",
      },
    ],
  },
  {
    id: "procurement-supplier",
    label: "Procurement & Supplier Management",
    intro:
      "Sourcing raw materials and components and managing supplier relationships — from a small shop's owner emailing an Alibaba factory and hoping for the best, to a mid-size manufacturer's category-managed RFQ process, to Ford- and Apple-scale global sourcing organizations that still can't fully see two tiers deep into their own supply chain.",
    compare: [
      { label: "Team", a: "Founder does sourcing personally, no title", b: "Dedicated Purchasing Manager + category buyers, 3-15 people", c: "Chief Procurement Officer, thousands of procurement staff globally" },
      { label: "Key tools", a: "Alibaba/Thomasnet/Xometry, spreadsheets, Airtable", b: "Epicor/NetSuite ERP procurement modules, Coupa/Jaggaer, Resilinc (upper end)", c: "SAP Ariba, Coupa, Kinaxis/o9, Resilinc/Interos" },
      { label: "Payment terms", a: "30-50% deposit upfront, balance on shipment", b: "Net 30-60 standard, net 90 for preferred buyers", c: "Net 60-90, often via supply chain finance/reverse factoring" },
      { label: "Supplier visibility", a: "None beyond direct supplier", b: "Tier 1 scorecards, limited tier-2 visibility", c: "Tier 1 mature; tier-2/3/4 remains a genuine unsolved gap" },
      { label: "Top failure point", a: "Single-supplier dependency, quality failures discovered post-shipment", b: "Single-source line-down events, supplier bankruptcy", c: "2021-2023 chip shortage; single-region concentration risk" },
    ],
    tiers: [
      {
        key: "A",
        name: "Small Job Shop / Single-Product Startup Manufacturer",
        tag: "2-20 people",
        color: TIER_COLOR.A,
        tldr: "A small shop or startup finds a factory on Google or Alibaba, emails back and forth to get a price, pays a big chunk of money upfront, and just hopes the parts show up looking right.",
        profile:
          "2-20 person operations: a contract machine shop, a small metal fabricator, or a hardware startup doing its first production run. Revenue typically under $5M. Real examples of the type: independent job shops found through Xometry's or Fictiv's supplier networks, and early-stage hardware startups going through YC/Highway1-style accelerators.",
        steps: [
          { title: "Spec/BOM definition", text: "Founder or engineer defines the bill of materials in a spreadsheet or CAD tool as the design finalizes; specs are often incomplete or change mid-sourcing." },
          { title: "Supplier discovery", text: "Google search, Alibaba/Thomasnet/Xometry marketplace browsing, or referrals from other founders/manufacturing consultants; no formal RFP process." },
          { title: "Informal RFQ", text: "Email or marketplace messaging to 2-4 candidate suppliers asking for a quote on a sample quantity; quotes compared manually in a spreadsheet." },
          { title: "Sample/prototype order", text: "Small trial order to validate quality before committing to a production run, often paid via wire transfer or credit card." },
          { title: "Vetting", text: "Informal: checking Alibaba supplier ratings/Gold Supplier status, asking for references, sometimes hiring a third-party inspection service for a factory audit." },
          { title: "PO issuance and deposit", text: "A simple purchase order or invoice acceptance; supplier requires 30-50% deposit upfront, balance on shipment." },
          { title: "Receiving and reorder", text: "Founder or ops person manually checks incoming shipment against the PO, then manually re-triggers reorder when stock runs low." },
        ],
        roles:
          "The founder/owner often does sourcing personally, especially pre-Series A. As the company adds headcount, an ops manager or \"head of operations\" takes over purchasing as one of many hats. No dedicated procurement title exists at this tier.",
        timeline:
          "New supplier discovery to first quote: days (marketplace) to a few weeks (overseas factory outreach with time-zone lag). RFQ-to-decision cycle: 1-4 weeks. Raw material/component lead times: domestic metal stock 1-2 weeks; overseas injection-molded parts/PCBs 4-10 weeks including tooling.",
        tools:
          "Alibaba, Thomasnet, Xometry, Fictiv, MakerVerse for discovering manufacturing suppliers and getting automated quotes. QuickBooks/Wave for payments; Airtable increasingly used as a lightweight supplier/PO tracker by more organized startups; Katana MRP or Fishbowl Inventory once there's real inventory to manage. Well-solved: instant online quoting for standard machined/molded parts has genuinely removed a huge amount of manual RFQ friction. Real gap: there is no good, cheap tool between \"spreadsheet\" and \"full ERP\" for a small hardware company managing dozens of SKUs across a handful of suppliers with overseas lead times and multi-currency payments — existing tools like Katana are inventory-first, not supplier-relationship/negotiation-first.",
        moneyFlow:
          "Deposits of 30-50% upfront are standard for overseas tooling/production, balance due before or on shipment. Domestic suppliers may offer net 30 once a payment history exists. Raw materials/components can be 40-70% of COGS for early hardware products (higher than a mature company since volume discounts haven't kicked in). Tariffs hit hard and unpredictably — tariff changes on China-origin goods can add a significant, unplanned percentage to landed cost overnight.",
        failurePoints: [
          "Single-supplier dependency — losing the one factory willing to do a small MOQ run means restarting sourcing from scratch, often causing months of delay.",
          "Quality failures discovered only after a full production run ships (no incoming inspection capability) — a classic hardware startup killer.",
          "Cash flow crunch from deposit requirements — startups have delayed launches because they couldn't fund a large deposit while still paying for tooling.",
          "IP/design leakage risk when sharing full CAD files with unvetted overseas suppliers without NDAs.",
        ],
        opportunity:
          "Build a lightweight \"supplier CRM + landed-cost calculator\" purpose-built for small hardware companies — tracking RFQs, deposit schedules, lead times, and auto-calculating true landed cost per SKU, sitting in the gap between a spreadsheet and enterprise ERP.",
      },
      {
        key: "B",
        name: "Regional Mid-Size Manufacturer",
        tag: "$20M-$500M revenue",
        color: TIER_COLOR.B,
        tldr: "A mid-size factory has a real purchasing team using business software to order parts from dozens of vetted suppliers, tracking who delivers on time and who doesn't, but still gets hurt badly when a single key supplier fails or tariffs suddenly make everything more expensive.",
        profile:
          "$20M-$500M revenue manufacturers with multiple product lines and a real purchasing function — a regional industrial equipment maker, an automotive parts Tier 2/3 supplier, or a mid-size furniture or appliance manufacturer. Real examples: companies like Generac in its earlier growth phase, The Toro Company business units, Watts Water Technologies, CIRCOR International, and regional players like Marlin Steel Wire Products.",
        steps: [
          { title: "Demand/BOM planning", text: "Engineering and planning teams maintain BOMs in an ERP with MRP generating purchase requisitions based on forecasted demand and safety stock levels." },
          { title: "Category strategy", text: "A purchasing manager or category buyer segments spend (castings, electronics, fasteners, packaging) and sets sourcing strategy per category." },
          { title: "Supplier sourcing/RFQ", text: "Formal RFQ packages issued to several qualified suppliers per category, often through the ERP's procurement module or a dedicated e-sourcing tool." },
          { title: "Supplier qualification/vetting", text: "Includes site audits, ISO 9001/IATF 16949 (automotive) certification checks, financial health screening, and sometimes first-article inspection requirements." },
          { title: "Contract/PO issuance", text: "Blanket purchase orders or annual contracts negotiated with pricing tiers, MOQs, and lead-time commitments." },
          { title: "Supplier scorecarding", text: "Quarterly or monthly scorecards tracking on-time delivery, PPM defect rates, and responsiveness, reviewed in supplier business reviews." },
          { title: "Dual-sourcing/risk management", text: "Deliberate qualification of backup suppliers for critical components, especially post-chip-shortage and post-tariff disruptions." },
        ],
        roles:
          "A dedicated Purchasing/Procurement Manager or Director of Supply Chain leads a team of several buyers/category managers, each owning specific commodity categories. A Supplier Quality Engineer handles qualification and audits. Larger Tier B companies add a Supply Chain Planner and a Procurement Analyst. Total headcount commonly 3-15 people, reporting up to a COO or VP of Operations.",
        timeline:
          "New supplier qualification: 1-3 months for a standard component, 4-6+ months for a safety-critical or regulated part requiring PPAP. RFQ cycle: 2-6 weeks from issuance to award. Raw material lead times: steel/aluminum 4-8 weeks domestically; electronic components saw dramatically elevated lead times during the 2021-2023 chip shortage and remained elevated for certain categories into 2025.",
        tools:
          "Epicor Kinetic, Infor CloudSuite Industrial (SyteLine), NetSuite, or Microsoft Dynamics 365 Business Central for ERP procurement modules with PO generation and MRP-driven requisitions. Procurify, Coupa, and Jaggaer for dedicated procurement/sourcing at the upper end. MasterControl, Arena PLM/QMS, ETQ Reliance for supplier quality/CAPA tracking. Resilinc, Interos, and Craft.co (historically Tier C tools) are increasingly adopted at the upper end of Tier B for supplier risk visibility. Well-solved: ERP-embedded MRP/PO generation is mature and reliable. Real gap: mid-market companies are chronically underserved on supplier risk intelligence — Resilinc/Interos are priced and built for Fortune 500s, leaving a $20M-$500M manufacturer with no affordable way to get early warning on a key supplier's financial distress or a factory fire before it becomes a line-down crisis.",
        moneyFlow:
          "Standard terms are net 30-60 with suppliers, sometimes net 90 for large/preferred buyers, with early payment discounts commonly tracked by AP teams. Raw materials/components typically run 40-60% of COGS. Tariffs are a direct line-item concern: tariff actions have forced many mid-size manufacturers to either eat margin, pass costs to customers, or scramble to re-source from Mexico/Vietnam/domestic suppliers — reshoring/nearshoring became an active procurement strategy topic industry-wide.",
        failurePoints: [
          "Single-source dependency on a sole-sourced casting or electronic component supplier causing a full line-down event — a textbook, frequently cited risk (the 2021-2023 global chip shortage forced GM, Ford, and Tier 1/2 suppliers to idle plants).",
          "Supplier bankruptcy risk — mid-size manufacturers have been blindsided by smaller supplier bankruptcies, forcing emergency re-sourcing.",
          "Tariff shock hitting mid-size manufacturers particularly hard since they lack the negotiating leverage of large OEMs.",
        ],
        opportunity:
          "Build an affordable supplier risk-monitoring and tariff-exposure tool specifically for the $20M-$500M manufacturer segment — continuously scanning news, financial filings, and customs/trade data for early warning on a company's actual supplier list, because Resilinc/Interos price themselves entirely out of reach for this tier.",
      },
      {
        key: "C",
        name: "Large National/Global Manufacturer or Industrial Conglomerate",
        tag: "Ford, Apple, P&G, Caterpillar",
        color: TIER_COLOR.C,
        tldr: "A giant manufacturer like Ford or Apple manages thousands of suppliers around the world with huge software systems and dedicated teams, but a single problem at a tiny supplier buried deep in the supply chain can still shut down a whole factory.",
        profile:
          "Multi-billion-dollar revenue global manufacturers with thousands of suppliers across dozens of countries. Real named companies: Ford Motor Company, Apple (hardware/manufacturing supply chain via contract manufacturers like Foxconn), Procter & Gamble, Caterpillar, General Electric, Boeing, Toyota. These companies run dedicated global supply chain organizations with hundreds to thousands of procurement staff.",
        steps: [
          { title: "Strategic sourcing/category strategy", text: "Global category teams set multi-year sourcing strategies aligned to corporate cost, sustainability, and risk targets, informed by enterprise-wide spend analytics." },
          { title: "Global supplier network management", text: "Maintaining a qualified supplier base (often thousands of active suppliers) segmented by strategic/critical/commodity tiers, with tier-1 suppliers managing their own sub-tier supply chains." },
          { title: "RFQ/e-auction and strategic negotiation", text: "Large-scale e-sourcing events and reverse auctions run through enterprise platforms, often for multi-hundred-million-dollar annual contracts." },
          { title: "Supplier qualification and compliance", text: "Extensive audits covering quality (IATF 16949, AS9100), labor/ESG compliance, cybersecurity, and conflict minerals reporting." },
          { title: "Global logistics orchestration", text: "Coordinating freight, customs, and just-in-time or just-in-sequence delivery across multiple plants worldwide, often using control towers." },
          { title: "Risk monitoring and business continuity planning", text: "Continuous monitoring of geopolitical, financial, natural disaster, and single-source risk across the entire supply base, with pre-negotiated contingency plans." },
          { title: "Tariff and trade compliance management", text: "Dedicated trade compliance teams managing tariff classification (HTS codes), country-of-origin engineering, and duty drawback programs." },
        ],
        roles:
          "Organization headed by a Chief Procurement Officer (CPO) or SVP of Global Supply Chain, reporting to the CEO/COO. Below that: VPs of Procurement by region or category, Global Category Directors, Commodity/Category Managers, Supplier Quality Engineers, Supply Chain Risk Managers, Trade Compliance Managers, and large teams of Buyers/Procurement Analysts. Companies like Ford and P&G have thousands of procurement employees globally.",
        timeline:
          "New strategic supplier qualification: 6-18 months for critical/regulated components including multi-round audits and PPAP. RFQ/strategic sourcing cycles: 2-6 months for major category re-sourcing events. Raw material/component lead times are highly variable — during the 2021-2023 chip shortage some automotive-grade chips saw lead times exceed a year.",
        tools:
          "SAP Ariba and Coupa are the dominant enterprise procure-to-pay and strategic sourcing platforms, with enterprise licensing running into the millions of dollars annually for large deployments. SAP S/4HANA and Oracle Fusion Cloud SCM serve as core ERP backbones. Jaggaer, GEP SMART, and Ivalua are alternative enterprise source-to-pay suites. Kinaxis RapidResponse, o9 Solutions, and Blue Yonder are supply chain planning/control-tower platforms. Resilinc, Interos, and Everstream Analytics are dedicated supply chain risk monitoring platforms genuinely built for and priced for this tier. Well-solved: enterprise source-to-pay suites and multi-tier risk visibility platforms are mature. Real gap: even at this scale, sub-tier (tier-2/tier-3/tier-4) visibility remains a real, unsolved pain point — large manufacturers still struggle to see disruptions deep in their supply chain until it surfaces as a shortage at tier-1, the exact failure mode behind the 2021 chip shortage's severity.",
        moneyFlow:
          "Payment terms are heavily negotiated and often net 60-90; large buyers use their scale to extend terms, sometimes via supply chain finance/reverse factoring programs where a bank pays the supplier early at a discount while the buyer still pays net 90. Raw materials as % of COGS varies widely by industry (roughly 30-50% for automotive, higher for commodity-driven industries). Tariffs and trade compliance are a board-level line item, with companies like Ford and GM publicly disclosing tariff cost impacts in earnings calls.",
        failurePoints: [
          "The 2021-2023 global semiconductor shortage is the textbook large-scale example: Ford, GM, and Toyota all idled plants and lost billions in production due to chip supplier concentration in Taiwan and limited automotive-grade chip capacity.",
          "Single-region concentration risk — heavy reliance on China-based or Taiwan-based manufacturing has been a named, publicly discussed geopolitical and tariff risk driving active \"China+1\" diversification.",
          "Natural disaster/single-point-of-failure events (the 2011 Japan earthquake/tsunami remains a canonical case study) and shipping-route disruptions continue to add weeks of transit time industry-wide.",
        ],
        opportunity:
          "Build an AI-native platform that automatically maps and monitors sub-tier (tier-2/3/4) suppliers by mining customs/shipping records, supplier disclosures, and news at scale — solving the specific, unsolved problem that even Ford- and Apple-scale companies still can't see disruptions two or three levels deep in their supply chain until it's too late.",
      },
    ],
  },
];
