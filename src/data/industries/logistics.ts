import type { WorkflowType } from "@/data/business-workflows";

const TIER_COLOR = { A: "#4ECDC4", B: "#FF9F40", C: "#FF6B6B" };

export const logisticsWorkflows: WorkflowType[] = [
  {
    id: "freight-trucking",
    label: "Freight & Trucking",
    intro:
      "Moving goods by truck — from an owner-operator hunting for loads on a board, to a regional carrier running its own dispatch and maintenance shop, to a national carrier or broker like J.B. Hunt or C.H. Robinson coordinating a fleet and network too large to run by gut feel.",
    compare: [
      { label: "Fleet size", a: "1 truck, the owner-operator", b: "10-200 trucks, regional lanes", c: "Thousands of trucks or a brokerage network of tens of thousands of carriers" },
      { label: "Load sourcing", a: "DAT/Truckstop load boards, broker relationships", b: "Dedicated freight brokers + repeat shipper contracts", c: "Direct shipper contracts, owned brokerage arm, dedicated lanes" },
      { label: "Key tools", a: "DAT/Truckstop, Motive/Samsara ELD, RTS Financial factoring", b: "McLeod/TMW TMS, Samsara fleet management, dedicated dispatcher", c: "Proprietary TMS, network-wide optimization, McLeod/Oracle Transportation Mgmt" },
      { label: "Rate mechanic", a: "Spot-market per-mile rate, factoring for cash flow", b: "Contract + spot mix, fuel surcharge formulas", c: "Negotiated annual contracts, network-wide yield management" },
      { label: "Top failure point", a: "Empty miles/deadheading, cash-flow gaps waiting on payment", b: "Driver shortage/turnover, maintenance downtime", c: "Capacity/demand imbalance, driver classification/labor disputes" },
    ],
    tiers: [
      {
        key: "A",
        name: "Owner-Operator / Small Local Carrier",
        tag: "1-5 trucks",
        color: TIER_COLOR.A,
        tldr: "One driver owns their own truck, finds loads on an app, drives them, and gets paid — but they're on their own for maintenance, fuel, and finding the next job.",
        profile:
          "An independent owner-operator or a very small local carrier with 1-5 trucks, often leased-on to a larger carrier's authority or running under their own FMCSA operating authority. Real, well-established examples of the tools this tier runs on: DAT Freight & Analytics and Truckstop.com's load boards, which together serve the large majority of independent owner-operators sourcing freight in North America.",
        steps: [
          { title: "Load search", text: "Driver checks DAT or Truckstop load boards (or a broker relationship built over years) for a load matching their current location and preferred lanes." },
          { title: "Rate negotiation", text: "Driver negotiates per-mile rate directly with a freight broker or shipper, factoring in fuel cost, deadhead miles to pick up the load, and how badly they need a load that day." },
          { title: "Book and dispatch", text: "Once agreed, a rate confirmation is signed (often via the load board's own app or email/DocuSign) and the driver heads to pickup." },
          { title: "Pickup and BOL", text: "Driver loads freight at the shipper's dock, signs the Bill of Lading, and begins the haul, logging hours via an ELD (electronic logging device) as required by FMCSA's 2017 mandate." },
          { title: "In-transit compliance", text: "Driver manages Hours of Service limits, fuel stops, and any DOT weigh-station inspections along the route." },
          { title: "Delivery and paperwork", text: "Freight is delivered, the BOL is signed by the receiver, and the driver submits paperwork (often a photo via phone) to get invoiced and paid." },
          { title: "Invoicing and factoring", text: "Since brokers commonly pay on 30-day terms, many owner-operators sell the invoice to a factoring company (e.g., RTS Financial, TAFS, Triumph Business Capital) for a discounted but immediate payout." },
        ],
        roles:
          "The owner-operator does everything: driving, load-booking, basic bookkeeping, and truck maintenance scheduling. If there's a second truck, a family member or a single hired driver may run it, with the owner still handling all the business/admin side.",
        timeline:
          "Load search to booked: minutes to a few hours depending on lane and market conditions. A typical haul: same-day to 2-3 days depending on distance and Hours of Service limits (11 hours of driving within a 14-hour on-duty window, per FMCSA rules). Payment via factoring: often next-day; waiting on standard broker terms: commonly 30 days.",
        tools:
          "DAT and Truckstop.com load boards (subscription-based, typically in the range of $30-150+/month depending on tier); Motive or Samsara for ELD compliance and basic fleet tracking (increasingly bundled with safety/dash-cam features); RTS Financial, TAFS, and Triumph Business Capital for invoice factoring. Well-solved: finding available loads and basic ELD compliance are mature, cheap, and widely adopted. Real gap: reducing empty/deadhead miles remains largely manual guesswork for a solo driver — there's no affordable tool that reliably predicts which lane to reposition toward for the best next-load probability, a problem enterprise network-optimization tools solve only for large fleets.",
        moneyFlow:
          "Per-mile rates fluctuate significantly with freight-market cycles, commonly ranging from roughly $1.50-$3+/mile depending on lane, equipment type, and whether the market is in a capacity glut or a tight cycle. Fuel is typically the single largest controllable cost after the truck payment itself. Factoring companies typically take a discount fee (commonly a few percent of invoice value) in exchange for immediate payment instead of waiting the standard 30-day broker term.",
        failurePoints: [
          "Empty miles/deadheading — driving to the next pickup with no paying freight aboard directly erodes already-thin owner-operator margins.",
          "Cash-flow gaps waiting on 30-day broker payment terms, which is why factoring is so widely used at this tier despite the discount cost.",
          "Unplanned truck maintenance/breakdown with no backup vehicle, instantly stopping all revenue for that truck.",
          "Driver fatigue/Hours of Service violations risking fines and, in the worst cases, accidents.",
        ],
        opportunity:
          "Build an affordable, AI-native \"next-load prediction\" tool for owner-operators that ingests a driver's current location, preferred lanes, and real load-board data to recommend the repositioning move most likely to minimize deadhead miles — a capability large fleets have via enterprise network-optimization software but that solo drivers have no affordable equivalent of today.",
      },
      {
        key: "B",
        name: "Regional Trucking or 3PL Company",
        tag: "10-200 trucks",
        color: TIER_COLOR.B,
        tldr: "A regional trucking company runs a real dispatch office, several dozen trucks, and its own maintenance shop, mixing contract customers with spot-market loads to keep every truck full.",
        profile:
          "A regional asset-based carrier or a third-party logistics (3PL) brokerage running 10-200 trucks (or, for a non-asset 3PL, coordinating a similar-scale network of contracted owner-operators and small carriers) across a defined multi-state region. This tier includes many family-owned or private-equity-backed regional carriers and regional freight brokerages that aren't household names individually but collectively move a large share of U.S. domestic freight.",
        steps: [
          { title: "Customer/shipper contracting", text: "A sales team negotiates dedicated-lane or recurring-volume contracts with regional shippers, alongside picking up incremental spot-market freight to fill capacity gaps." },
          { title: "Dispatch and route planning", text: "A dedicated dispatcher (or team) assigns loads to drivers based on Hours of Service availability, equipment type, and home-time commitments, using a Transportation Management System (TMS)." },
          { title: "Driver recruiting and onboarding", text: "A recruiting function (often a full-time role at this tier) constantly sources new CDL drivers given industry-wide turnover, running background/DOT-compliance checks before onboarding." },
          { title: "In-transit tracking and exception handling", text: "Fleet management software (Samsara, Motive) gives dispatch real-time visibility into truck location and ELD hours, flagging late or at-risk deliveries." },
          { title: "Maintenance management", text: "A maintenance shop or scheduled third-party service program keeps the fleet DOT-compliant and minimizes unplanned downtime." },
          { title: "Billing and settlement", text: "Completed loads are invoiced to customers/brokers, and owner-operator or company-driver settlements are calculated and paid on a weekly or bi-weekly cycle." },
        ],
        roles:
          "A Dispatch Manager and team of dispatchers, a Driver Recruiting/Safety Manager, a Fleet/Maintenance Manager, an Operations Manager or VP overseeing the whole business, a Sales/Account Management function for shipper contracts, and billing/settlement staff. Company drivers or contracted owner-operators make up the bulk of headcount.",
        timeline:
          "Dedicated-lane contracts are typically negotiated annually with quarterly rate reviews tied to fuel-cost indices. Spot-market loads are booked same-day to a few days out. Driver recruiting-to-onboarding: commonly 2-4 weeks given DOT background checks and training requirements. Maintenance turnaround for a scheduled service: hours to a day; unplanned breakdowns can sideline a truck for days.",
        tools:
          "McLeod Software and TMW Systems (Trimble Transportation) are widely used Transportation Management Systems (TMS) at this tier, handling dispatch, billing, and driver settlements in one system. Samsara and Motive provide fleet telematics, ELD compliance, and dash-cam safety monitoring. Well-solved: dispatch/TMS software and ELD/telematics are mature, well-adopted categories at this scale. Real gap: driver retention tooling remains weak — industry-wide driver turnover at large truckload carriers has historically run extremely high (frequently cited well above 90% annualized at some carriers), and while telematics gives visibility into driving behavior, there's no dominant, affordable tool that proactively predicts which drivers are at flight risk and prompts retention action before they quit.",
        moneyFlow:
          "Revenue blends dedicated-contract rates (more stable, often lower margin) with spot-market loads (more volatile, sometimes higher margin in tight capacity cycles). Fuel surcharges are typically indexed to the DOE's weekly diesel price and passed through to customers via a formula, though the carrier still bears fuel-price volatility risk between adjustment periods. Driver pay is commonly structured as cents-per-mile for company drivers or a percentage-of-load-revenue for contracted owner-operators.",
        failurePoints: [
          "Driver shortage/turnover — the trucking industry has faced a well-documented, persistent driver shortage and high turnover, forcing carriers to compete hard on pay and home-time.",
          "Maintenance downtime taking a truck out of revenue service unexpectedly, especially costly for a fleet without spare capacity.",
          "Freight-market cyclicality — a carrier that scaled up its fleet during a tight capacity cycle can be badly squeezed when rates soften and spot volumes dry up.",
          "Customer concentration risk if too much dedicated-lane revenue depends on one or two large shipper contracts.",
        ],
        opportunity:
          "Build an AI-driven driver-retention prediction tool that combines telematics/driving-behavior data, pay history, and home-time patterns to flag which drivers are at high flight risk weeks before they quit — regional carriers currently only find out a driver is leaving when they hand in notice, and replacing a driver is a well-documented, expensive, multi-week process.",
      },
      {
        key: "C",
        name: "National Carrier or Major Logistics Platform",
        tag: "J.B. Hunt, Schneider, Old Dominion, C.H. Robinson",
        color: TIER_COLOR.C,
        tldr: "A national trucking company or freight brokerage moves an enormous amount of the country's freight using its own software to match trucks to loads automatically, but even they can't always find enough drivers or trucks exactly where and when shippers need them.",
        profile:
          "Large, publicly traded national trucking companies and freight brokerages. Real examples: J.B. Hunt Transport Services (one of the largest U.S. trucking/intermodal companies), Schneider National, Old Dominion Freight Line (a major LTL — less-than-truckload — carrier), Werner Enterprises, and C.H. Robinson (one of the largest non-asset-based freight brokerages, coordinating capacity across a vast network of contracted carriers rather than owning trucks itself). These companies run fleets of thousands of trucks or brokerage networks spanning tens of thousands of carrier relationships.",
        steps: [
          { title: "Shipper contract negotiation", text: "National account teams negotiate multi-year, multi-lane contracts with large shippers (retailers, manufacturers, distributors), often covering dedicated fleets or guaranteed capacity commitments." },
          { title: "Network-wide capacity planning", text: "Enterprise systems forecast freight volume by lane and season, positioning trucks and drivers (or, for brokers, matching available carrier capacity) to meet anticipated demand." },
          { title: "Automated load matching", text: "Proprietary or licensed digital freight-matching platforms (J.B. Hunt's own digital marketplace, C.H. Robinson's Navisphere platform) algorithmically match available loads to available trucks across the network, reducing manual dispatcher load." },
          { title: "Intermodal and multimodal coordination", text: "For companies like J.B. Hunt with a major intermodal (rail-plus-truck) business, freight is coordinated across rail carriers and drayage trucking to optimize cost versus speed." },
          { title: "Real-time network monitoring", text: "Centralized operations centers monitor the entire fleet/network in real time, rerouting around weather, traffic, or capacity disruptions." },
          { title: "Billing, settlement, and analytics at scale", text: "Enterprise billing systems process an enormous volume of invoices and driver/carrier settlements, feeding into network-wide profitability and lane-analytics dashboards." },
        ],
        roles:
          "National account/enterprise sales executives, network planning and capacity analysts, a large centralized operations/control-tower team, regional terminal managers overseeing local driver/dispatch operations, data science teams building load-matching and demand-forecasting algorithms, safety and compliance departments managing DOT requirements across thousands of drivers, and (for brokers like C.H. Robinson) a large carrier-relations organization managing tens of thousands of contracted trucking companies.",
        timeline:
          "Major shipper contracts are typically negotiated annually with quarterly or semi-annual rate/fuel-surcharge reviews. Network capacity planning operates on rolling weekly-to-quarterly cycles, with peak-season (holiday retail) planning beginning months in advance. Automated load matching happens in near-real-time once a load and available capacity both exist in the system.",
        tools:
          "Large asset-based carriers run heavily customized proprietary TMS platforms layered on top of or replacing commercial systems, given the scale and complexity involved; McLeod and Oracle Transportation Management (OTM) are also used at parts of this tier. C.H. Robinson's Navisphere platform is a real, well-known proprietary digital freight-matching and visibility platform central to its brokerage model. Well-solved: automated load-matching and network-wide capacity visibility are mature at this scale, having been a major multi-year technology investment area across the largest carriers and brokers. Real gap: even at this scale, matching driver/truck supply to shipper demand in the right place at the right time remains imperfect — freight-market imbalances (too much capacity in one region, not enough in another) are a persistent, well-documented industry challenge that algorithmic matching has improved but not eliminated.",
        moneyFlow:
          "Revenue comes from a mix of contracted (often multi-year) shipper rates and spot-market freight, with fuel surcharges indexed to published diesel price data and passed through per contract formulas. Non-asset brokers like C.H. Robinson earn the spread between what they charge the shipper and what they pay the contracted carrier moving the freight — a margin that compresses in soft freight markets when carrier capacity is abundant and expands when capacity is tight. Intermodal freight (rail plus short-haul trucking) typically offers a lower-cost, longer-transit-time alternative to full over-the-road trucking for long-haul lanes where transit time is less critical.",
        failurePoints: [
          "Capacity/demand imbalance across the network — freight-market cycles (the trucking industry has experienced well-documented boom-and-bust capacity cycles) can leave a carrier over-fleeted in a downturn or under-capacity in a tight market.",
          "Driver classification and labor disputes — how drivers (company drivers, owner-operators, or independent contractors) are classified has been a recurring source of regulatory and legal scrutiny across the industry, particularly around independent-contractor status.",
          "Network disruption events (severe weather, port congestion, geopolitical shipping disruptions) cascading delays across thousands of shipments simultaneously.",
          "Driver shortage at national scale — even the largest carriers compete hard for a limited pool of qualified CDL drivers, a persistent industry-wide constraint.",
        ],
        opportunity:
          "The freight-matching and network-optimization problem is well-served by the largest incumbents' proprietary systems, but there remains real opportunity in building better real-time, cross-carrier capacity visibility for the mid-market shippers and regional carriers who aren't big enough to get J.B. Hunt- or C.H. Robinson-grade proprietary tooling built for them, and are currently stuck choosing between expensive enterprise TMS platforms and manual load-board matching.",
      },
    ],
  },
  {
    id: "warehousing-fulfillment",
    label: "Warehousing & Fulfillment",
    intro:
      "Storing goods and shipping them out — from a small warehouse doing pick-pack-ship by hand for a handful of clients, to a mid-size 3PL running a real WMS across multiple facilities, to an Amazon-scale automated distribution center where robots do most of the walking.",
    compare: [
      { label: "Scale", a: "1 small warehouse, a few thousand sq ft", b: "Multiple facilities, tens of thousands of sq ft each", c: "Millions of sq ft, robotics-assisted, national network" },
      { label: "Key tools", a: "ShipStation, spreadsheet inventory, basic barcode scanners", b: "Manhattan Associates/Deposco WMS, Locus/6 River robotics pilots", c: "Manhattan Associates/Blue Yonder WMS, Amazon Robotics/Kiva, Symbotic" },
      { label: "Pick accuracy/speed", a: "Manual picking, occasional errors", b: "Barcode-verified picking, cycle counts", c: "Robotics-assisted picking, near-perfect accuracy at massive throughput" },
      { label: "Client model", a: "A handful of small e-commerce clients", b: "Dozens-hundreds of clients across verticals", c: "Owned network (Amazon) or major enterprise 3PL contracts" },
      { label: "Top failure point", a: "Manual errors, no capacity buffer for volume spikes", b: "Facility-to-facility inventory sync errors", c: "Peak-season capacity strain, automation downtime cascades" },
    ],
    tiers: [
      {
        key: "A",
        name: "Small Warehouse / Startup 3PL",
        tag: "1 facility, a handful of clients",
        color: TIER_COLOR.A,
        tldr: "A small warehouse team picks, packs, and ships orders by hand for a handful of online sellers, using cheap software to keep track of what's where.",
        profile:
          "A single small warehouse (often a few thousand to low tens of thousands of square feet) run by a small team, either as a startup-tier third-party logistics (3PL) provider serving a handful of e-commerce clients, or as a single brand's own fulfillment operation once it outgrows home-based shipping. Real examples of the type: many regional/startup-tier 3PLs that plug into ShipBob's or similar networks, or small independent fulfillment operations serving local/regional e-commerce brands.",
        steps: [
          { title: "Inbound receiving", text: "Inventory arrives from a client's manufacturer/supplier; staff manually check it in against the expected shipment and shelve it in a bin/rack location." },
          { title: "Inventory tracking", text: "Stock levels are tracked via a lightweight WMS or even a spreadsheet, with barcode scanners (if used at all) logging basic movements." },
          { title: "Order intake", text: "Orders flow in from the client's Shopify/Amazon/other sales channel via an integration, appearing as a pick list for warehouse staff." },
          { title: "Pick, pack, ship", text: "Staff manually walk the warehouse to pick items, pack them at a station, and print a shipping label via a tool like ShipStation." },
          { title: "Carrier handoff", text: "Packed orders are handed to USPS/UPS/FedEx for pickup or dropped at a local depot, based on whichever carrier offers the best rate for that package's size/destination." },
          { title: "Returns processing", text: "Returned items are received back, inspected, and either restocked or flagged as damaged, tracked manually against the original order." },
        ],
        roles:
          "A warehouse manager or owner overseeing day-to-day operations, a small team of pickers/packers (often 2-10 people depending on volume), and someone (often the owner) handling client relationships and billing. No dedicated systems/IT role.",
        timeline:
          "Inbound receiving: same-day to a day or two depending on shipment size. Order-to-ship time: typically same-day to next-day for orders received before a daily cutoff. Returns processing: a few days from receipt to restocking decision.",
        tools:
          "ShipStation for label printing and carrier-rate shopping; lightweight WMS tools or client-specific spreadsheets for inventory tracking; basic barcode scanners. Well-solved: label printing, carrier-rate comparison, and basic multi-client order routing are mature, cheap, and widely available. Real gap: real-time, accurate inventory visibility across multiple small clients without a real WMS remains genuinely hard — a small 3PL juggling a handful of clients' inventory in spreadsheets or a lightweight tool is prone to manual errors (miscounts, wrong-bin picks) that a proper WMS would prevent, but full WMS platforms (Manhattan Associates, Blue Yonder) are priced and architected for much larger operations.",
        moneyFlow:
          "Revenue is typically structured as a combination of receiving fees, per-unit or per-bin storage fees, and per-order pick-and-pack fees, plus pass-through shipping cost (sometimes with a small markup). Margins are thin and volume-dependent — a small 3PL needs enough client volume to justify fixed warehouse rent and labor costs, making client concentration a real business risk.",
        failurePoints: [
          "Manual picking/packing errors (wrong item, wrong quantity) directly damaging the 3PL's reputation with its clients and their end customers.",
          "No capacity buffer for volume spikes — a client's viral moment or holiday surge can overwhelm a small team's physical picking capacity.",
          "Client concentration risk — losing one or two major clients can threaten the whole operation's economics given thin margins.",
          "Inventory discrepancies between the client's storefront count and actual physical stock, causing overselling.",
        ],
        opportunity:
          "Build an affordable, lightweight WMS specifically priced and scoped for small startup-tier 3PLs managing a handful of clients — something that gives barcode-verified pick accuracy and real-time multi-client inventory visibility without the cost and complexity of an enterprise WMS built for much larger operations.",
      },
      {
        key: "B",
        name: "Regional 3PL / Multi-Facility Operation",
        tag: "Multiple facilities, dozens-hundreds of clients",
        color: TIER_COLOR.B,
        tldr: "A regional fulfillment company runs several real warehouses with proper inventory software, serving dozens or hundreds of online brands, and has started experimenting with robots to help pickers move faster.",
        profile:
          "A regional 3PL running multiple warehouse facilities (often 2-10) across a region, serving dozens to hundreds of e-commerce or wholesale clients, or a growing brand's own multi-node fulfillment network. Real, well-known examples in this space: ShipBob (a major 3PL platform serving many thousands of e-commerce brands across multiple U.S. and international fulfillment centers) and Rakuten Super Logistics.",
        steps: [
          { title: "Multi-facility inventory allocation", text: "Client inventory is distributed across multiple fulfillment centers based on where their customer demand is concentrated, to minimize shipping zones and transit time." },
          { title: "WMS-managed receiving", text: "Inbound shipments are received and checked into a real Warehouse Management System, with barcode/RFID scanning verifying quantities against the purchase order." },
          { title: "Wave/batch picking", text: "Orders are grouped into picking waves optimized by the WMS to minimize walking distance, with pickers using handheld scanners or, increasingly, robotic assistance (e.g., collaborative robots from Locus Robotics or 6 River Systems)." },
          { title: "Automated pack-station verification", text: "Pack stations use barcode scanning to verify the correct items are in each order before a shipping label is applied, reducing mis-ship errors." },
          { title: "Carrier optimization at scale", text: "A rate-shopping/carrier-management layer automatically selects the cheapest or fastest carrier per shipment across a portfolio of carrier relationships." },
          { title: "Client reporting and SLAs", text: "Clients get dashboards showing inventory levels, order status, and fulfillment SLA performance (e.g., orders shipped within 24 hours of receipt) across all facilities." },
        ],
        roles:
          "A VP/Director of Operations overseeing multiple facility managers, each facility having its own warehouse manager and picking/packing/receiving staff, a client success/account management team, a systems/WMS administrator, and increasingly a robotics/automation coordinator as facilities adopt collaborative robots.",
        timeline:
          "Inbound receiving: same-day to a day or two, WMS-logged. Order-to-ship SLA: commonly same-day for orders received before a cutoff time, a key competitive differentiator marketed to e-commerce clients. New client onboarding (integrating their sales channel and migrating inventory): typically 2-6 weeks.",
        tools:
          "Manhattan Associates or Deposco for WMS at this tier's larger operations; ShipHawk or similar for multi-carrier rate shopping and label generation across facilities. Locus Robotics and 6 River Systems (collaborative picking robots) are increasingly piloted or adopted at this tier to boost picker productivity without a full automated-DC capital investment. Well-solved: multi-facility inventory visibility and carrier-rate optimization across a client portfolio are mature capabilities at established regional 3PLs. Real gap: keeping inventory counts perfectly synchronized across multiple physical facilities in real time remains a genuine operational challenge — discrepancies between the WMS's system-of-record count and physical reality (from mis-picks, miscounts, or damaged/lost inventory) are a persistent, hard-to-fully-eliminate problem even with barcode-verified processes.",
        moneyFlow:
          "Revenue is a combination of receiving, storage (per pallet/bin/cubic foot per month), and pick-and-pack fees, plus a markup or pass-through on shipping costs — often with negotiated volume discounts as a client's order volume grows. Multi-facility 3PLs can offer meaningfully lower shipping costs than a single-location competitor by shipping from the facility nearest the end customer, a genuine competitive advantage marketed to prospective clients.",
        failurePoints: [
          "Multi-facility inventory-sync errors — stock counts across several regional warehouses drift out of sync with the system of record, causing overselling or misrouted fulfillment.",
          "Onboarding a large new client faster than operational capacity can absorb, straining existing facilities during the transition.",
          "Peak-season (Black Friday/Cyber Monday, holiday) volume spikes across many clients simultaneously outpacing picking/packing capacity even with robotics assistance.",
          "Client churn risk if fulfillment SLA misses (late shipments) damage the client's own end-customer experience.",
        ],
        opportunity:
          "Build a real-time, cross-facility inventory-reconciliation tool that continuously cross-checks physical scan events against the WMS system-of-record and flags discrepancies within hours rather than at the next scheduled cycle count — regional 3PLs currently discover sync errors only when a client complains about an oversold item or a periodic count catches it.",
      },
      {
        key: "C",
        name: "National/Global Automated Fulfillment Network",
        tag: "Amazon, major national 3PLs",
        color: TIER_COLOR.C,
        tldr: "The biggest fulfillment operations use robots and computers to move products around giant warehouses almost without human hands touching them, packing and shipping so fast that next-day or same-day delivery has become the normal expectation.",
        profile:
          "National and global fulfillment networks running dozens to hundreds of large, often highly automated distribution and fulfillment centers. The dominant real-world example is Amazon's own fulfillment network (hundreds of fulfillment centers globally, extensively using Amazon Robotics — formerly Kiva Systems — for automated shelf-to-picker movement), alongside major national 3PLs and the fulfillment arms of large retailers.",
        steps: [
          { title: "Network-wide inventory placement", text: "AI-driven forecasting decides which fulfillment center should stock which SKUs based on predicted regional demand, to position inventory close to where orders will come from." },
          { title: "Automated inbound receiving", text: "Inbound shipments are received and checked in using automated scanning systems, with some facilities using robotic unloading assistance." },
          { title: "Robotics-assisted picking", text: "In Amazon's model, mobile robots bring entire shelving pods to stationary human pickers (\"goods-to-person\" picking), dramatically reducing walking time versus traditional \"person-to-goods\" picking; other operators use automated storage/retrieval systems (AS/RS) or conveyor-and-sortation systems." },
          { title: "Automated packing and sortation", text: "Automated or semi-automated packing stations, combined with high-speed sortation systems, route packages to the correct outbound dock/carrier based on destination." },
          { title: "Last-mile handoff at network scale", text: "Packages are routed to the optimal outbound carrier or the company's own delivery network based on destination, speed commitment, and cost." },
          { title: "Continuous network optimization", text: "Data science and operations research teams continuously re-optimize where inventory sits and how facilities are staffed/automated based on evolving demand patterns." },
        ],
        roles:
          "VP/SVP of Fulfillment Operations, facility general managers overseeing large sites (often with thousands of associates plus robotics technicians), robotics/automation engineering teams (maintaining and improving the physical robots and control software), operations research/data science teams optimizing network-wide inventory placement and staffing, and large logistics/transportation teams coordinating outbound carrier relationships at scale.",
        timeline:
          "Order-to-ship SLA at the leading edge of this tier is now commonly same-day to next-day, with delivery following within 1-2 days total — a standard that has reshaped customer expectations across e-commerce broadly. New automated fulfillment center build-out (site selection, construction, robotics installation, and ramp-up) is a multi-year undertaking. Peak-season (holiday) capacity planning begins many months in advance, including significant seasonal hiring.",
        tools:
          "Amazon Robotics (formerly Kiva Systems, acquired by Amazon in 2012) is the best-known and most widely cited automated fulfillment robotics system, deployed across a large share of Amazon's fulfillment network. Manhattan Associates and Blue Yonder provide enterprise WMS/fulfillment software used by many large non-Amazon fulfillment networks. Symbotic (a publicly traded automated warehouse robotics company) has real, current partnerships with major retailers including Walmart for automated distribution center technology. Well-solved: at this scale, goods-to-person robotics and high-speed automated sortation represent some of the most sophisticated warehouse automation deployed anywhere, genuinely solving the walking-time and pick-speed bottleneck that limits manual operations. Real gap: even with heavy automation, unpredictable demand spikes (viral products, major sale events) can still strain physical throughput capacity, and automation downtime (a robotics system or conveyor failure) can cascade into significant fulfillment delays precisely because so much of the process now depends on the automated systems working correctly.",
        moneyFlow:
          "For Amazon specifically, fulfillment operations are a major cost center supporting the broader retail and Prime subscription business rather than a directly billed service (though Amazon also sells \"Fulfillment by Amazon\" as a paid service to third-party marketplace sellers, charging per-unit storage and pick-and-pack fees). For major 3PLs and retailer-owned networks, the economics are similar to Tier B but at vastly greater scale, with automation capital expenditure (robotics, conveyor/sortation systems) representing a huge upfront investment justified by labor-cost savings and throughput gains over the facility's operating life.",
        failurePoints: [
          "Peak-season capacity strain — even the most automated networks have historically faced well-publicized holiday-season delivery delays when order volume spikes beyond even automated capacity.",
          "Automation downtime cascades — a failure in a robotics system, conveyor, or sortation system can halt or badly slow an entire facility's throughput, a single point of failure that traditional manual operations don't have in the same way.",
          "Labor relations and workplace-safety scrutiny — large automated fulfillment operations have faced public and regulatory attention over injury rates and working conditions, a recurring, well-documented industry issue.",
          "Network-wide demand forecasting errors can lead to inventory misallocation across facilities, causing some regions to face stockouts while others carry excess inventory of the same SKU.",
        ],
        opportunity:
          "Even at Amazon-and-Symbotic scale, real-time automation-downtime prediction and failover remains an active frontier — a system that can predict an impending robotics/conveyor failure before it happens (using sensor/vibration/performance data) and automatically reroute picking work to unaffected zones would meaningfully reduce the cascading-delay failure mode that even the most advanced automated fulfillment networks still experience.",
      },
    ],
  },
  {
    id: "last-mile-delivery",
    label: "Last-Mile Delivery",
    intro:
      "Getting the package to the final customer's door — from a local courier running their own small delivery service, to a regional network coordinating gig drivers and route software, to USPS/UPS/FedEx/Amazon-scale networks moving billions of packages a year to every address in the country.",
    compare: [
      { label: "Scale", a: "1-10 drivers, local area", b: "Dozens-hundreds of drivers, regional network", c: "Hundreds of thousands of drivers/routes, national coverage" },
      { label: "Key tools", a: "Onfleet/Route4Me, basic route apps", b: "Bringg/Routific, Amazon DSP program tooling", c: "Proprietary route-optimization (UPS ORION), Amazon Flex/DSP at scale" },
      { label: "Driver model", a: "Employed or contracted local drivers", b: "Mix of employed drivers and gig/contracted couriers", c: "Employed drivers (UPS/FedEx/USPS) or DSP/Flex contracted networks (Amazon)" },
      { label: "Delivery promise", a: "Same-day to next-day, local area only", b: "Next-day to 2-day across a regional footprint", c: "Same-day to 2-day nationally, with dedicated Sunday/weekend networks" },
      { label: "Top failure point", a: "Route inefficiency, driver no-shows", b: "Scaling driver supply to match demand spikes", c: "Peak-season volume overwhelming even massive networks" },
    ],
    tiers: [
      {
        key: "A",
        name: "Local Courier / Small Delivery Service",
        tag: "1-10 drivers, local area",
        color: TIER_COLOR.A,
        tldr: "A small local delivery service uses a handful of drivers and a route-planning app to get packages or food across town the same day, competing on speed and personal service in one city.",
        profile:
          "A small, often independently owned local courier or same-day delivery service operating in a single city or metro area with 1-10 drivers, serving local businesses (restaurants, small retailers, medical courier needs) or acting as a last-mile subcontractor for a larger network. Real examples of the tools this tier runs on: Onfleet and Route4Me, both widely used route-optimization and delivery-management platforms marketed specifically to small-to-mid-size local delivery operations.",
        steps: [
          { title: "Order/delivery request intake", text: "Requests come in via a client's own ordering system, a phone call, or a simple booking app, specifying pickup and drop-off locations and any time window." },
          { title: "Route assignment", text: "A dispatcher (often the owner) or route-planning software assigns the delivery to the driver best positioned to handle it, sequencing multiple stops to minimize driving time." },
          { title: "Driver navigation and proof of delivery", text: "The driver uses a route app for turn-by-turn navigation and, on arrival, captures proof of delivery (a photo or signature) via a mobile app." },
          { title: "Real-time customer updates", text: "Customers receive automated status updates (out for delivery, delivered) via SMS or app notification, generated by the delivery-management platform." },
          { title: "Exception handling", text: "The owner/dispatcher personally handles any delivery issues — a wrong address, a customer not home, a damaged package — since there's no formal escalation team." },
          { title: "Billing", text: "Client businesses are billed per-delivery or on a flat monthly retainer, typically invoiced weekly or monthly." },
        ],
        roles:
          "The owner often dispatches personally alongside 1-10 drivers, who may be W-2 employees or 1099 contracted couriers. No dedicated ops, safety, or customer service department — the owner or a single office staffer handles all of it.",
        timeline:
          "Delivery windows are typically same-day, often within a 1-4 hour window from request to drop-off for local courier work. Route planning happens continuously throughout the day as new requests come in, re-optimized in near-real-time by the routing software.",
        tools:
          "Onfleet and Route4Me for route optimization, driver dispatch, and real-time customer tracking notifications, typically priced per-driver per-month in a range accessible to a small operation. Well-solved: route optimization and automated customer delivery-status notifications are mature, affordable, and widely adopted even at this small scale. Real gap: dynamic, real-time re-routing when a driver falls behind or a new urgent request arrives mid-route is only partially solved by current tools at this price point — a small operation's dispatcher still often manually reshuffles routes by feel rather than the software doing it optimally in real time.",
        moneyFlow:
          "Revenue is typically per-delivery fees (often a base fee plus a per-mile or per-stop component) or a flat monthly retainer for a business client guaranteeing a certain delivery volume. Driver pay is commonly per-delivery or per-mile for contracted couriers, or hourly for employed drivers, with the courier company's margin being the spread between what it charges the client and what it pays the driver plus overhead.",
        failurePoints: [
          "Route inefficiency from manual or under-optimized route planning directly increases driver time and fuel cost per delivery, eating thin margins.",
          "Driver no-shows or last-minute unavailability with no backup driver pool can leave the business unable to fulfill committed deliveries.",
          "Demand spikes (a local event, a client's promotional surge) outstripping the small driver pool's capacity.",
          "Thin margins mean even a modest increase in fuel costs or a slow payment from a client can strain cash flow quickly.",
        ],
        opportunity:
          "Build an affordable, genuinely dynamic real-time re-routing tool for small local courier operations that automatically reshuffles in-progress routes as new urgent requests arrive or a driver falls behind — current tools at this price point optimize the initial route well but don't fully automate the constant mid-day reshuffling a busy small dispatcher does manually.",
      },
      {
        key: "B",
        name: "Regional Delivery Network",
        tag: "Dozens-hundreds of drivers",
        color: TIER_COLOR.B,
        tldr: "A regional delivery company coordinates a bigger pool of drivers — some employed, some gig-based — across a whole metro area or region, using more sophisticated software to keep up with demand that swings a lot hour to hour.",
        profile:
          "A regional last-mile delivery company or a network of Amazon Delivery Service Partners (DSPs) — small business owners who operate delivery routes under Amazon's DSP program, using Amazon-provided vans and technology but running their own local workforce — coordinating dozens to hundreds of drivers across a metro area or multi-city region. The Amazon DSP program is a real, well-documented model: thousands of independently owned DSP businesses across the U.S. deliver Amazon packages using Amazon-branded vehicles and Amazon's own routing/dispatch technology.",
        steps: [
          { title: "Route generation", text: "For an Amazon DSP, Amazon's own technology generates optimized delivery routes each morning based on that day's package volume and driver availability; for an independent regional network, similar route-optimization software (Bringg, Routific) performs this function." },
          { title: "Driver assignment and dispatch", text: "Routes are assigned to available drivers, balancing employed staff with gig/contracted couriers to flex capacity up or down with daily demand." },
          { title: "Fleet/vehicle management", text: "A fleet coordinator manages vehicle maintenance, fueling, and (for DSPs) compliance with the partner program's vehicle and safety standards." },
          { title: "In-route monitoring and exception handling", text: "Dispatch monitors driver progress in real time via the routing platform, reassigning stops if a driver falls behind or a vehicle breaks down." },
          { title: "Delivery confirmation and customer service", text: "Proof-of-delivery photos/signatures feed back into the platform, with a small customer service team handling delivery issues and exceptions escalated from drivers." },
          { title: "Performance reporting", text: "Daily/weekly performance metrics (on-time delivery rate, packages per route, safety incidents) are reported up to the network's operations leadership or, for a DSP, to Amazon itself as part of the partnership scorecard." },
        ],
        roles:
          "An Operations Manager overseeing route planning and driver scheduling, a Fleet Manager handling vehicle maintenance/compliance, dispatchers monitoring routes in real time, a driver workforce mixing employed and contracted couriers, and (for DSPs specifically) an owner managing the overall business relationship with Amazon's program requirements.",
        timeline:
          "Route planning happens daily, typically generated each morning for that day's delivery volume. Delivery windows commonly promise next-day to 2-day service across the regional footprint. Driver onboarding (recruiting, background checks, training) typically takes 1-3 weeks.",
        tools:
          "Bringg and Routific for route optimization and delivery management at this scale; Amazon's own proprietary routing and dispatch technology for DSP-model operators, provided as part of the partnership rather than purchased separately. Well-solved: route optimization across a larger, mixed employed/gig driver pool and real-time delivery tracking are mature capabilities at this tier. Real gap: flexibly scaling driver supply up and down to match genuinely volatile daily/hourly demand (a surge around a holiday, a weather event, or a local promotional spike) remains a real operational challenge — gig-courier platforms help but don't fully solve the problem of having exactly the right number of available drivers at exactly the right time.",
        moneyFlow:
          "For an Amazon DSP, revenue comes from Amazon based on routes/packages delivered under the partnership agreement, with Amazon providing vehicles, technology, and branding while the DSP owner bears labor costs and operational management. For an independent regional network, revenue is typically per-package or per-route fees charged to client businesses (retailers, restaurants, or e-commerce brands), with driver pay structured as a mix of hourly employed wages and per-delivery gig-contractor rates.",
        failurePoints: [
          "Scaling driver supply to match demand spikes — a network built for typical daily volume can be badly strained by a holiday surge or an unexpected spike in client order volume.",
          "Vehicle maintenance/compliance lapses, particularly costly for DSP-model operators who must maintain Amazon's specific vehicle and safety standards to remain in good standing in the program.",
          "Driver classification questions (employed vs. gig/contracted) have been a recurring source of regulatory and legal scrutiny across the delivery industry broadly.",
          "Weather or traffic disruptions cascading through a tightly scheduled daily route plan with little buffer capacity.",
        ],
        opportunity:
          "Build a demand-elasticity prediction tool specifically for regional last-mile networks (including DSP operators) that forecasts hour-by-hour and day-by-day driver-supply needs based on historical patterns, weather, and known promotional/seasonal events, then automates gig-driver recruitment pushes ahead of predicted surges rather than reacting to a shortfall after it's already happening.",
      },
      {
        key: "C",
        name: "National Delivery Network",
        tag: "UPS, FedEx, USPS, Amazon logistics",
        color: TIER_COLOR.C,
        tldr: "The biggest delivery networks — UPS, FedEx, USPS, and Amazon's own delivery operation — move an enormous number of packages to every address in the country every single day, using decades of route-science and their own algorithms to shave seconds off every stop.",
        profile:
          "National-scale parcel delivery networks. Real, well-established examples: UPS and FedEx (the two dominant U.S. private parcel carriers, each delivering many millions of packages daily across a fully integrated ground and air network), the United States Postal Service (USPS, the government postal service with a legal universal service obligation to deliver to every U.S. address), and Amazon's own last-mile delivery operation (built substantially through its network of contracted Delivery Service Partners plus the Amazon Flex gig-driver program, supplementing traditional carriers).",
        steps: [
          { title: "Network-wide route optimization", text: "Proprietary route-optimization algorithms (most famously UPS's ORION system, widely reported to save the company enormous amounts in fuel and mileage annually by optimizing driver routes) generate highly efficient daily routes across hundreds of thousands of delivery points." },
          { title: "Sortation and hub processing", text: "Packages flow through a network of regional sortation hubs and package-processing centers, often highly automated, before being loaded onto delivery vehicles for final-mile routes." },
          { title: "Driver/route assignment at scale", text: "Hundreds of thousands of daily routes are algorithmically assigned to drivers (employed at UPS/FedEx/USPS, or a mix of employed and DSP/Flex-contracted at Amazon) each morning." },
          { title: "Real-time tracking and customer visibility", text: "Package tracking is updated in near-real-time and surfaced to customers via web/app tracking, a now-standard baseline expectation across the industry." },
          { title: "Exception and re-delivery management", text: "Automated systems handle missed-delivery rescheduling, address corrections, and hold-for-pickup requests at massive scale." },
          { title: "Peak-season capacity surge management", text: "Extensive seasonal hiring, extended operating hours, and network capacity expansion are planned months ahead of the November-December holiday peak, a well-documented annual industry-wide undertaking." },
        ],
        roles:
          "Large operations organizations spanning national network planning, regional hub/sortation-center management, driver workforce management (hundreds of thousands of employed drivers at UPS/FedEx/USPS combined, plus Amazon's DSP-contracted and Flex gig-driver workforce), route-science/operations-research teams (UPS's ORION team is a well-known real example of this function), fleet/vehicle maintenance operations at massive scale, and dedicated peak-season planning teams.",
        timeline:
          "Standard delivery promises range from next-day (premium/express services) to 2-5 days for standard ground service, with same-day delivery increasingly offered in dense markets. Peak-season planning begins many months ahead of the holiday season, with substantial seasonal workforce hiring (well-documented industry-wide practice of bringing on large numbers of temporary/seasonal workers) to handle the volume surge.",
        tools:
          "UPS's ORION (On-Road Integrated Optimization and Navigation) is a well-documented, real proprietary route-optimization system that has been cited by UPS as saving substantial fuel and mileage by optimizing turn-by-turn route sequencing across its driver fleet. FedEx and USPS run their own large-scale proprietary sortation, routing, and tracking systems. Amazon's logistics network relies on its own proprietary routing and dispatch technology extended out to its DSP and Flex programs. Well-solved: large-scale route optimization, automated sortation, and real-time package tracking represent some of the most mature, heavily-invested-in logistics technology anywhere, refined over decades. Real gap: even with this level of sophistication, genuinely unpredictable demand surges (a viral shopping event, unexpected weather disruption across a wide region) can still strain network capacity, and the last mile in low-density rural areas remains structurally more expensive to serve than dense urban/suburban routes — a persistent economic tension, particularly for USPS's universal-service obligation.",
        moneyFlow:
          "UPS and FedEx operate as for-profit companies pricing delivery services (including fuel surcharges, residential delivery surcharges, and peak-season surcharges) to recover costs and generate margin, with pricing power that increases during high-demand peak periods. USPS operates under a public-service mandate with a legally mandated obligation to serve every address, funded through a mix of postage revenue and, historically, subject to ongoing public policy debate about its financial sustainability given that obligation. Amazon's last-mile delivery cost is largely absorbed as a customer-experience investment supporting its retail and Prime subscription business rather than billed as a standalone service to end customers.",
        failurePoints: [
          "Peak-season volume surges have repeatedly and publicly strained even the largest networks' capacity, a well-documented recurring seasonal risk across the industry.",
          "Rural/low-density last-mile delivery remains structurally more expensive to serve than dense routes, an ongoing economic and policy tension especially relevant to USPS's universal service obligation.",
          "Severe weather events can disrupt regional hub processing and delivery routes across a wide geography simultaneously, a recurring operational challenge even for networks built with substantial redundancy.",
          "Driver classification and labor relations have been a recurring source of public scrutiny and legal challenges across the parcel delivery and gig-economy delivery space broadly.",
        ],
        opportunity:
          "The most defensible remaining opportunity at this tier is in the rural/low-density last-mile cost problem specifically — a company building shared, cross-carrier rural delivery infrastructure (consolidating last-mile delivery across multiple shippers/carriers for the same low-density route) could meaningfully reduce the structural cost disadvantage of serving rural addresses, a problem none of the major national networks have fully solved independently given each carrier still typically runs its own dedicated rural routes.",
      },
    ],
  },
  {
    id: "supply-chain-planning",
    label: "Supply Chain Planning & Procurement",
    intro:
      "Forecasting demand and optimizing a network of capacity and inventory — from a small logistics operator planning next month's trucks on a spreadsheet, to a mid-size 3PL or freight brokerage running real planning software across many clients, to a national logistics platform using AI to predict where capacity will be needed before the demand even arrives.",
    compare: [
      { label: "Scale", a: "Single operator, informal/spreadsheet planning", b: "Regional 3PL/broker, dedicated planning function", c: "National platform, AI-driven network-wide planning" },
      { label: "Key tools", a: "Spreadsheets, gut feel, basic load-board data", b: "TMS-embedded planning modules, McLeod/TMW, Excel models", c: "o9/Kinaxis/Blue Yonder, proprietary AI demand-sensing" },
      { label: "Forecast horizon", a: "Days to a couple weeks ahead", b: "Monthly/quarterly, seasonal peak planning", c: "Rolling daily-to-annual forecasts refreshed continuously" },
      { label: "Top failure point", a: "No real forecasting, reactive-only capacity decisions", b: "Bullwhip effect from client demand signal distortion", c: "Network-wide bullwhip effect, macro shock disruption" },
    ],
    tiers: [
      {
        key: "A",
        name: "Solo Operator / Small Carrier or 3PL",
        tag: "1-10 people",
        color: TIER_COLOR.A,
        tldr: "A small trucking company or warehouse owner mostly just reacts to whatever business shows up, using a spreadsheet and gut feel to guess how many trucks or how much warehouse space they'll need next month.",
        profile:
          "A solo owner-operator, small carrier, or small 3PL with no dedicated planning function — the owner personally decides, based on gut feel and recent trends, whether to add a truck, take on a new client, or rent more warehouse space. Real-world representative of the countless small logistics operators making these decisions with basic tools rather than formal planning software.",
        steps: [
          { title: "Informal demand observation", text: "The owner notices trends in booking volume, client requests, or seasonal patterns from experience rather than a formal forecast." },
          { title: "Capacity decision", text: "Based on that informal read, the owner decides whether to add a truck, hire a driver, or take on more warehouse space — often reactively, after demand has already increased." },
          { title: "Ad hoc procurement", text: "Equipment, fuel contracts, or warehouse space is sourced as needed, typically without long-term contracts or hedged pricing." },
          { title: "Manual tracking", text: "Utilization (how full trucks are, how much warehouse space is used) is tracked informally or in a basic spreadsheet, without systematic forecasting." },
        ],
        roles:
          "The owner makes all planning and procurement decisions personally, informed by experience rather than a dedicated planning role or software.",
        timeline:
          "Planning horizon is typically days to a couple of weeks ahead — reactive rather than proactive. Seasonal peak preparation (if it happens at all) is often just \"remembering last year was busy around this time\" rather than a formal capacity plan.",
        tools:
          "Spreadsheets and personal experience are the primary \"planning tools\" at this tier. Well-solved: nothing formal is really solved here — this tier operates on informal pattern recognition rather than software. Real gap: there's no affordable, dead-simple demand-sensing tool that gives a small operator even a basic data-driven signal (e.g., \"based on your last 12 months of bookings, expect X% more volume next month\") — enterprise planning tools (Kinaxis, o9) are entirely out of reach in both cost and complexity for a business this size.",
        moneyFlow:
          "Capacity decisions (adding a truck, taking more warehouse space) are typically funded out of current cash flow or a small equipment loan, without the benefit of a data-driven ROI case — meaning the owner is essentially betting on their own read of the market.",
        failurePoints: [
          "No real forecasting means capacity decisions are purely reactive, so the business is often either scrambling to add capacity after demand has already surged or sitting on underutilized capacity after a demand dip.",
          "No hedged pricing or long-term contracts on fuel/equipment leaves the business fully exposed to cost volatility.",
          "A single bad capacity bet (adding a truck or warehouse space right before a downturn) can meaningfully strain a small operator's finances.",
        ],
        opportunity:
          "Build a dead-simple, cheap demand-sensing tool for small carriers/3PLs that ingests their own historical booking data and gives a plain-language capacity recommendation (\"add a truck now,\" \"hold steady\") — a lightweight, affordable alternative to enterprise planning software that's entirely out of reach for this segment today.",
      },
      {
        key: "B",
        name: "Regional 3PL / Freight Brokerage",
        tag: "Dedicated planning function",
        color: TIER_COLOR.B,
        tldr: "A regional logistics company has someone whose actual job is to plan ahead — figuring out how much truck capacity or warehouse space they'll need next quarter based on real data, not just gut feel.",
        profile:
          "A regional 3PL, freight brokerage, or trucking company large enough to have a dedicated planning function (even if it's just one or two people) rather than relying purely on owner intuition, using data from its TMS/WMS to inform capacity and procurement decisions.",
        steps: [
          { title: "Historical data analysis", text: "A planner pulls historical volume, seasonality, and client-growth data from the company's TMS/WMS to build a rolling demand forecast." },
          { title: "Capacity planning", text: "Based on the forecast, decisions are made about adding trucks/drivers, expanding warehouse space, or negotiating additional carrier capacity ahead of anticipated demand." },
          { title: "Procurement negotiation", text: "Fuel contracts, equipment leases, and warehouse space leases are negotiated with some forward visibility, sometimes locking in rates ahead of an anticipated busy season." },
          { title: "Client-demand-signal aggregation", text: "For a 3PL/broker with many clients, the planner aggregates demand signals across the client base to smooth out individual client volatility." },
          { title: "Peak-season preparation", text: "Formal planning for known seasonal peaks (holiday shipping season) begins months ahead, including securing extra temporary capacity or labor." },
        ],
        roles:
          "A dedicated Planning Analyst or Operations Planner (sometimes a role shared with a broader Operations Manager title), working with the TMS/WMS system administrator and reporting into operations or finance leadership.",
        timeline:
          "Forecasting is typically done monthly or quarterly with a rolling 3-6 month look-ahead. Peak-season (holiday) capacity planning begins 3-6 months ahead of the anticipated surge.",
        tools:
          "Planning is typically done using the forecasting/reporting modules embedded in the company's existing TMS (McLeod, TMW) or WMS platform, supplemented by Excel-based models for scenario planning. Well-solved: basic historical-trend-based forecasting using TMS/WMS-embedded reporting is mature and widely used at this tier. Real gap: true demand-sensing that accounts for individual client-level signals (a client's own promotional calendar, a client's end-customer seasonality) rather than just the 3PL's own aggregate historical volume remains genuinely underdeveloped — full enterprise supply-chain-planning suites (Kinaxis, o9, Blue Yonder) that could solve this are priced far beyond what a regional 3PL can justify.",
        moneyFlow:
          "Capacity investment decisions (new trucks, additional warehouse space, expanded carrier network) are increasingly backed by a data-informed business case rather than pure gut feel, though still modest in scale compared to national players. Procurement negotiations benefit from some forward visibility into anticipated volume, allowing for better-negotiated rates than a purely reactive approach.",
        failurePoints: [
          "The bullwhip effect — a small uptick in one or two large clients' order volume can get amplified into an oversized capacity investment if the planner doesn't account for demand-signal noise versus a genuine trend.",
          "Peak-season capacity plans that underestimate actual demand, leaving the company scrambling for spot-market capacity at premium rates during the exact period margins matter most.",
          "Overreliance on a small number of large client relationships for demand signal, creating forecast risk if one client's business shifts unexpectedly.",
        ],
        opportunity:
          "Build a mid-market-priced demand-planning tool purpose-built for regional 3PLs/brokers that ingests individual client-level signals (not just aggregate historical volume) to produce a more accurate, client-aware capacity forecast — priced for the regional operator that's outgrown spreadsheets but can't justify an enterprise Kinaxis/o9 contract.",
      },
      {
        key: "C",
        name: "National Logistics Platform",
        tag: "AI-driven network-wide planning",
        color: TIER_COLOR.C,
        tldr: "The biggest logistics companies use AI to predict, days or weeks in advance, exactly where trucks, warehouse space, and delivery drivers will be needed across the whole country — but even they get caught out when something totally unexpected (a storm, a shortage, a surge) hits.",
        profile:
          "National trucking companies, freight brokerages, and fulfillment networks (J.B. Hunt, C.H. Robinson, Amazon's logistics operation, major 3PLs) with dedicated supply-chain-planning organizations using enterprise software and, increasingly, AI-driven demand-sensing to plan capacity and procurement across an entire national or global network.",
        steps: [
          { title: "AI-driven demand sensing", text: "Machine-learning models ingest historical volume, macroeconomic indicators, weather forecasts, and client-level signals to produce continuously-refreshed demand forecasts across the entire network." },
          { title: "Network-wide capacity planning", text: "Forecasts drive decisions about fleet sizing, warehouse/fulfillment-center capacity, and workforce staffing across dozens to hundreds of locations simultaneously." },
          { title: "Strategic procurement at scale", text: "Long-term fuel hedging contracts, equipment purchasing/leasing programs, and multi-year facility leases are negotiated based on network-wide forecasted needs." },
          { title: "Dynamic capacity reallocation", text: "As real-time data comes in (a regional demand spike, a weather disruption), the network dynamically reallocates capacity — rerouting trucks, shifting inventory, or activating surge labor — algorithmically rather than through manual intervention alone." },
          { title: "Peak-season and disruption scenario planning", text: "Dedicated planning teams run scenario models for known peak events (holiday season) and stress-test the network against potential disruptions (port congestion, severe weather, geopolitical shipping disruptions) months in advance." },
          { title: "Continuous network optimization", text: "Operations research and data science teams continuously refine the underlying models, incorporating lessons from forecast misses to improve future accuracy." },
        ],
        roles:
          "VP/SVP of Network Planning or Supply Chain, large data science and operations research teams building demand-sensing and capacity-optimization models, regional planning managers translating network-wide forecasts into local execution plans, procurement/strategic sourcing teams negotiating large-scale fuel/equipment/facility contracts, and dedicated peak-season and disruption-scenario planning specialists.",
        timeline:
          "Forecasts are continuously refreshed, often daily or in near-real-time for operational decisions, with formal strategic planning cycles (annual capacity/capital planning) set 6-12+ months ahead. Peak-season planning for the largest networks begins as much as a year ahead for capital-intensive decisions (new facility build-out) and several months ahead for operational surge staffing.",
        tools:
          "o9 Solutions, Kinaxis (RapidResponse), and Blue Yonder provide the enterprise integrated-business-planning and demand-forecasting platforms used across large logistics and retail-adjacent supply chain organizations. Large logistics companies increasingly layer proprietary AI/ML models on top of or instead of these platforms, given the scale and specificity of their own network data. Well-solved: network-wide capacity planning and scenario modeling at this scale represent some of the most sophisticated supply-chain-planning capability in any industry, refined over years of investment. Real gap: even with substantial AI investment, genuinely novel or extreme disruption events (a major port closure, an unprecedented weather event, a sudden geopolitical shipping disruption) remain difficult for models trained on historical patterns to anticipate — the industry has repeatedly been caught by disruptions that didn't closely resemble prior patterns in the training data.",
        moneyFlow:
          "Capacity and procurement decisions at this scale involve significant capital allocation — new facility build-outs, large equipment purchase/lease programs, and multi-year fuel-hedging contracts are major, board-level financial decisions informed by the network-wide forecasting function. The scale of this tier gives real negotiating leverage in procurement (fuel, equipment, facility leases) that smaller operators simply don't have access to.",
        failurePoints: [
          "The bullwhip effect persists even at massive scale — demand-signal distortion amplified across a complex, multi-client, multi-node network can still lead to significant capacity misallocation.",
          "Genuinely novel disruption events (port congestion, extreme weather, geopolitical shipping disruptions) have repeatedly caught even the most sophisticated networks off guard, since AI models trained on historical data struggle with truly unprecedented scenarios.",
          "Over-investment in capacity during a demand upswing that doesn't sustain, leaving expensive underutilized fleet/facility capacity when the cycle turns.",
        ],
        opportunity:
          "Even at the most sophisticated national platforms, there's real room for better scenario-planning tools specifically focused on genuinely novel/unprecedented disruptions (rather than historical-pattern-based forecasting) — a system built specifically to reason about out-of-distribution shocks and recommend contingency capacity plans before a disruption fully materializes would address a documented, repeated failure mode even the best-resourced logistics planning organizations have experienced.",
      },
    ],
  },
];
