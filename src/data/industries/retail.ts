import type { WorkflowType } from "@/data/business-workflows";

const TIER_COLOR = { A: "#4ECDC4", B: "#FF9F40", C: "#FF6B6B" };

export const retailWorkflows: WorkflowType[] = [
  {
    id: "merchandising",
    label: "Merchandising & Buying",
    intro:
      "Deciding what to sell, buying it, and pricing it — from a solo boutique owner eyeballing a spreadsheet, to a regional chain's buyer-and-planner team working trade shows a season ahead, to a national retailer's algorithmic assortment and space-planning engines.",
    compare: [
      { label: "Buying decision", a: "Owner's gut feel + spreadsheet", b: "Buyer + planner, seasonal OTB budget", c: "AI-driven MFP, category managers, algorithmic space planning" },
      { label: "Lead time", a: "2-6 weeks (Faire/craft show)", b: "8-16 weeks, 2-4 season calendar", c: "4-6+ months, locked by Q1-Q2 for holiday" },
      { label: "Key tools", a: "Shopify/Etsy, Faire, QuickBooks", b: "NuORDER/JOOR, Cin7/NetSuite, SPS Commerce", c: "Blue Yonder, Oracle Retail, o9 Solutions" },
      { label: "Margin", a: "2x-2.5x keystone markup", b: "50-60% gross margin target", c: "20-30% (grocery) to 35-50% (general merch); private label higher" },
      { label: "Top failure point", a: "Overordering trendy dead stock", b: "Buy-plan misses causing markdown spirals", c: "OTIF/chargeback disputes with vendors" },
    ],
    tiers: [
      {
        key: "A",
        name: "Solo Shopify/Etsy Seller or Single Boutique",
        tag: "$30K-$500K/year, 1-3 people",
        color: TIER_COLOR.A,
        tldr: "One person decides what to buy, buys a little bit from a website or a craft fair, and sells it themselves — no big team, no fancy software, just gut feel and a spreadsheet.",
        profile:
          "Solo Shopify/Etsy seller or single independent boutique doing $30K-$500K/year, usually 1-3 people. Inventory spend is usually funded out of pocket or via a small business credit line. Real, current examples: individual Etsy shops (over 5 million active sellers, mostly solo), single-location boutiques on Shopify POS, and small brands selling wholesale to boutiques via Faire (over 900,000 retailer accounts).",
        steps: [
          { title: "Trend/gap scouting", text: "Owner monitors Instagram/TikTok, Pinterest, competitor stores, and customer requests to spot what to add next; no formal research budget." },
          { title: "Sourcing", text: "Browses Faire, Alibaba/AliExpress, or local craft suppliers, or attends a regional gift show once or twice a year." },
          { title: "Sample/negotiate minimums", text: "Requests samples, negotiates minimum order quantities with the vendor, often starting at 6-12 units per SKU." },
          { title: "Manual budget check", text: "Owner eyeballs bank balance or a simple spreadsheet to decide how much cash can go into the order — rarely a formal open-to-buy model." },
          { title: "Place order & pay deposit", text: "Pays upfront or 50% deposit; wholesale marketplace orders (Faire) often ship net-60 to the retailer, giving cash-flow breathing room." },
          { title: "Receive & tag inventory", text: "Physically counts, tags, and photographs product on arrival; enters into Shopify or Etsy listing manually." },
          { title: "Price it", text: "Applies a rule-of-thumb keystone markup (2x-2.5x wholesale cost) or copies competitor pricing off Instagram." },
          { title: "Sell & monitor", text: "Watches sell-through by eye or basic analytics; reorders bestsellers, marks down slow movers 20-40% after 60-90 days." },
        ],
        roles:
          "Owner-operator does all buying decisions; may have one part-time assistant for receiving/tagging. No dedicated buyer, planner, or allocator title exists at this scale.",
        timeline:
          "Reorder cycles are ad hoc — as fast as inventory sells. Holiday/Q4 buying typically starts June-July to hit August-September delivery, since small vendors and Faire brands have shorter lead times (2-6 weeks) than department-store-scale vendors.",
        tools:
          "Shopify (Basic ~$39/mo) or Etsy ($0.20 listing + ~6.5% transaction fee); Faire for wholesale sourcing (0% commission on repeat orders, 15% on Faire-surfaced new retailers, net-60 terms); QuickBooks Online for books; Zoho Inventory or Ordoro free tiers for basic tracking. Well-solved: storefront + payments + basic wholesale discovery. Real gap: there is no real cash-flow-aware open-to-buy tool built for someone spending $2K-$20K per order — existing OTB tools live inside enterprise suites like Cin7/NetSuite. Emerging: Inventory Planner (Cin7-owned), Genie, and SoStocked chip at pieces of this but nothing combines cash-flow-aware budgeting with wholesale-marketplace buying for the sub-$500K seller.",
        moneyFlow:
          "Typical keystone markup (2x-2.5x cost) on boutique retail; handmade/Etsy sellers often run higher effective margins (60-75%) since labor isn't costed formally. Faire buyers get net-60 on first orders, reverting to shorter terms after; most other wholesale suppliers require prepayment or a 50% deposit. Payment processing takes 2.6-2.9% + $0.30 per transaction.",
        failurePoints: [
          "Overordering trendy items that die after one micro-trend cycle, tying up cash in dead stock for months.",
          "Cash-flow crunches from paying full wholesale cost upfront while retail sales trickle in.",
          "Underpricing — owner forgets to account for Faire's 15% cut or shipping cost when setting retail price, killing margin.",
          "Manually mis-tracking inventory across Etsy + Shopify + in-person POS leading to overselling out-of-stock items.",
        ],
        opportunity:
          "A lightweight, cash-flow-aware \"open-to-buy\" budgeting tool purpose-built for sub-$500K sellers buying from Faire/Alibaba/craft shows — pulling in bank balance, incoming Faire net-60 invoices, and Shopify sell-through data to tell the owner exactly how much they can safely spend on the next reorder.",
      },
      {
        key: "B",
        name: "Regional Multi-Location Retailer or Growing DTC Brand",
        tag: "$5M-$150M revenue, 5-50 stores",
        color: TIER_COLOR.B,
        tldr: "A team of buyers and planners decides what to stock in each of many stores, months in advance, using order forms and spreadsheets connected to big supplier networks, and gets penalized if they mess up the paperwork.",
        profile:
          "Regional multi-location retailer (5-50 stores) or growing DTC brand doing $5M-$150M in annual revenue. Real examples: regional specialty chains like Warby Parker (retail arm), Rothy's, or Allbirds in their mid-growth phase; DTC brands like Solo Stove or Chubbies scaling up, sourcing through NuORDER/JOOR-connected vendor networks.",
        steps: [
          { title: "Seasonal line review", text: "Merchandising team (buyer + planner) reviews prior season's sell-through by category and sets a seasonal buy plan/budget (open-to-buy) across all doors." },
          { title: "Trade show & showroom buying", text: "Buyers attend trade shows or browse digital showrooms on JOOR/NuORDER to place seasonal orders 4-9 months ahead of delivery." },
          { title: "Assortment planning by store/cluster", text: "Planner segments stores into clusters (urban flagship vs. suburban vs. outlet) and allocates different assortments per cluster based on historical sales and demographics." },
          { title: "PO issuance & EDI setup", text: "Purchase orders sent electronically via EDI through vendor portals or a platform like SPS Commerce, which most mid-market vendors require for compliance." },
          { title: "Vendor compliance & routing", text: "Vendor must meet routing guide requirements (labeling, ASN accuracy, delivery windows) or face chargebacks." },
          { title: "Receiving & allocation", text: "Goods arrive at a DC or 3PL, get allocated to stores/warehouses via the OMS/ERP based on the pre-set plan." },
          { title: "In-season reactive buying", text: "Planner monitors weekly sell-through and repositions inventory or places reorders on fast-sellers within the season." },
          { title: "Pricing & markdown cadence", text: "Category manager sets initial retail price, then runs a planned markdown calendar for slow movers." },
        ],
        roles:
          "Dedicated buyer(s) per category, a merchandise planner/allocator, a DC/replenishment coordinator, and a VP of Merchandising overseeing the team — typically 5-20 people in the merchandising org.",
        timeline:
          "Q4/holiday buying starts January-March for basic reorders and April-June for fashion/gift buys at trade shows, with goods landing August-October. Apparel operates on a 2-4 season buying calendar. Lead times run 8-16 weeks from PO to store.",
        tools:
          "NuORDER (Lightspeed) and JOOR (14,000+ brands, 650,000+ buyers) for digital wholesale ordering; Cin7 Core/Omni or NetSuite ERP for inventory/OMS; SPS Commerce for EDI compliance; RetailPro or Lightspeed Retail POS across multiple doors. Well-solved: digital wholesale ordering and basic multi-location inventory visibility. Real gap: true assortment/cluster planning is still done in Excel or clunky bolted-on modules — full enterprise tools like Blue Yonder are priced for chains 10x this size. Emerging: Style Arcade and Full Circle Retail target exactly this gap between spreadsheets and enterprise suites.",
        moneyFlow:
          "Gross margins typically target 50-60% for apparel/specialty retail; DTC brands often see 60-70% gross margin but face higher CAC. Vendor terms shift from prepay/net-30 to net-60/net-90 as volume and credit history grow. Chargebacks from vendors become a real cost center — vendors get penalized 2-5% of PO value for late ASNs or missed delivery windows.",
        failurePoints: [
          "Buy-plan misses driven by bad demand forecasting leading to broad markdown spirals across multiple doors simultaneously.",
          "Allocation errors sending winter coats to warm-climate stores and vice versa.",
          "Vendor compliance chargebacks eating margin on already-thin categories.",
          "Overreliance on a single hot vendor/trend causing whiplash when the trend dies mid-PO-cycle.",
        ],
        opportunity:
          "An AI-native, mid-market-priced assortment/cluster-planning tool that ingests POS sell-through data and auto-recommends store-by-store SKU allocation — something only true enterprise suites do today at enterprise prices and multi-month implementations.",
      },
      {
        key: "C",
        name: "National Big-Box Chain or Amazon-Scale Operation",
        tag: "$1B+ revenue, hundreds-thousands of stores",
        color: TIER_COLOR.C,
        tldr: "Giant companies use huge planning software and army-sized teams to decide, almost a year in advance, exactly what goes on every shelf in every store, and they fine their suppliers hard if the shipment isn't perfect.",
        profile:
          "National big-box chain or Amazon-scale operation, $1B+ in annual revenue, hundreds to thousands of stores/fulfillment nodes. Real examples: Walmart, Target, Amazon (1P retail/Vendor Central), Kroger, Costco.",
        steps: [
          { title: "Category strategy & financial planning", text: "Merchandise Financial Planning sets top-down sales, margin, and inventory targets by category/division for the year." },
          { title: "Vendor negotiation & sourcing", text: "Category managers negotiate annual vendor agreements covering cost, volume rebates, co-op marketing funds, and compliance terms." },
          { title: "Assortment & space planning", text: "Planograms are algorithmically generated mapping exactly which SKUs occupy which shelf space per store cluster." },
          { title: "Demand forecasting & allocation", text: "AI/ML-driven demand forecasting predicts store-level demand and auto-allocates inventory from DCs." },
          { title: "PO issuance via EDI at scale", text: "Purchase orders flow through EDI automatically between the retailer's ERP and thousands of vendors, mediated by SPS Commerce or proprietary vendor portals." },
          { title: "Compliance enforcement", text: "Vendors must meet strict routing guides and on-time-in-full (OTIF) delivery requirements or face significant chargebacks." },
          { title: "DC/fulfillment network replenishment", text: "Automated replenishment systems continuously reorder based on POS sell-through and forecasted demand, largely without human SKU-level intervention." },
          { title: "Dynamic/algorithmic pricing", text: "Category pricing teams use pricing engines to run zone pricing, competitive price-matching, and dynamic markdowns." },
        ],
        roles:
          "Merchants/Buyers, Assistant Buyers, Planners, Allocators, Category Managers, Vendor Managers, Space Planning teams, Demand Planning/Forecasting teams, and VP/SVP of Merchandising overseeing entire divisions — teams can number in the hundreds.",
        timeline:
          "Holiday/Q4 planning begins as early as January of the same year (11+ months out). Overseas-sourced goods require 4-6+ month lead times, making buy commitments for Q4 typically locked by Q1-Q2.",
        tools:
          "Blue Yonder (formerly JDA/RedPrairie) dominant in merchandise financial planning, assortment, space, and demand planning; Oracle Retail as a major competitor; SAP for Retail/S4HANA; o9 Solutions for integrated business planning; SPS Commerce and proprietary vendor portals (Walmart Retail Link, Target Partners Online, Amazon Vendor Central). Well-solved: demand forecasting accuracy at aggregate/DC level, automated replenishment for staple SKUs. Real gap: hyper-local micro-assortment decisions remain imperfect even with AI, and vendors have poor visibility into their own sell-through and forecast accuracy. Emerging: RELEX Solutions and Crisp (vendor-side data platform) address exactly this vendor-blind-spot gap.",
        moneyFlow:
          "Margins vary enormously by category — grocery runs 20-30% gross margin, general merchandise/apparel 35-50%, private-label lines run notably higher margin. Vendor terms are dictated by the retailer: net-30/60/90 plus mandatory trade promotion/co-op ad fund contributions (1-5% of purchase volume) and slotting fees. OTIF and chargeback penalties are a formalized, budgeted cost line running into the tens of millions annually in aggregate for large CPG suppliers.",
        failurePoints: [
          "OTIF/chargeback disputes straining vendor relationships, a well-documented friction point between Walmart/Amazon and their supplier base.",
          "Algorithmic pricing/repricing wars eroding margin in commoditized categories, common on Amazon marketplace.",
          "Private-label cannibalization miscalibration hurting national-brand vendor relationships.",
          "DC-to-store allocation misfires at scale causing simultaneous overstock in some regions and stockouts in others.",
        ],
        opportunity:
          "A vendor-facing \"sell-through and forecast transparency\" layer that normalizes and streams real-time POS/inventory data back from Walmart/Target/Amazon-style retailers to their thousands of suppliers — Crisp is an early mover, but general merchandise and apparel remain underserved outside grocery/CPG.",
      },
    ],
  },
  {
    id: "ecommerce-operations",
    label: "Direct-to-Consumer E-commerce Operations",
    intro:
      "Running an online store — platform, checkout, fulfillment, and marketing — from a solo Shopify seller packing orders at the kitchen table, to a mid-market DTC brand running a full performance-marketing and 3PL stack, to Amazon-scale operations processing millions of orders a day.",
    compare: [
      { label: "Team", a: "Just the founder, everything", b: "15-75 people: e-comm, marketing, CX, ops", c: "Thousands, specialized ML/data science/fulfillment orgs" },
      { label: "Platform", a: "Shopify Basic / Etsy", b: "Shopify Plus / BigCommerce Enterprise", c: "Proprietary or Salesforce/Adobe Commerce Enterprise" },
      { label: "Fulfillment SLA", a: "1-3 days, self-packed", b: "24-48 hr ship via 3PL (ShipBob, Rakuten)", c: "Same-day to 2-day, robotics-assisted FCs" },
      { label: "Marketing", a: "Organic social, $5-50/day ad tests", b: "Meta/Google/TikTok + Klaviyo, CAC $30-80+", c: "Owned retail media network (Amazon Ads, Walmart Connect)" },
      { label: "Top failure point", a: "Stockout during a viral moment, solo burnout", b: "Broken attribution post-iOS14.5, returns fraud", c: "Counterfeit third-party listings, retail-media measurement disputes" },
    ],
    tiers: [
      {
        key: "A",
        name: "Solo Shopify/Etsy Seller",
        tag: "$10K-$1M/year, 1-3 people",
        color: TIER_COLOR.A,
        tldr: "One person builds a little online shop, makes or buys the stuff themselves, and packs and ships every order out of their own house.",
        profile:
          "A one-to-three-person operation selling a single product line or a small curated catalog, doing $10K-$1M/year. Real, verifiable examples that started here: Pipcorn/Pipsnacks, Death Wish Coffee, Poo-Pourri, and top individual Etsy sellers like CaitlynMinimalist — all cited by Shopify/Etsy as top-seller case studies.",
        steps: [
          { title: "Store setup", text: "Pick a platform (Shopify Basic or Etsy), choose a theme, configure product pages, shipping zones, and tax settings — a weekend-to-2-week project." },
          { title: "Sourcing/production", text: "Make or source product (handmade, print-on-demand via Printful/Printify, or a small supplier order), often self-funded with a credit card." },
          { title: "Listing & merchandising", text: "Photograph products (often with a phone and a lightbox), write descriptions, set prices, and publish listings." },
          { title: "Marketing", text: "Post on Instagram/TikTok organically, run small Meta/Google ad tests ($5-50/day), lean on Etsy's internal search algorithm." },
          { title: "Order intake & fulfillment", text: "Orders arrive via notifications; founder personally packs orders at home, buys postage via Shopify Shipping/Pirate Ship, and drops off at USPS/UPS." },
          { title: "Customer service", text: "Founder answers DMs, emails, and Etsy convos directly — no ticketing system." },
          { title: "Reordering inventory", text: "Manual spreadsheet or gut-feel reordering when stock runs low; no formal demand forecasting." },
        ],
        roles:
          "Just the founder, doing everything: merchandiser, photographer, copywriter, customer service rep, packer, bookkeeper. At most one part-time contractor.",
        timeline:
          "Store launch: 2-14 days. Order-to-ship time: 1-3 days. Restocking cycle: ad hoc, typically every 4-8 weeks based on gut check.",
        tools:
          "Shopify Basic (~$39-42/mo) or Etsy ($0.20/listing + ~6.5% fee); Shopify Payments (~2.9%+30c) or PayPal/Etsy Payments; Pirate Ship (free label-buying) for shipping; Printful/Printify for print-on-demand; Klaviyo/Mailchimp free tiers for email. Well-solved: store setup itself is essentially solved — hosting, PCI-compliant checkout, and shipping labels are bundled for under $50/month. Real gap: inventory + cash-flow forecasting for a one-person operation — solo sellers routinely over- or under-order because native analytics are descriptive, not predictive. Emerging: Cogsy and Inventory Planner (Sage) still assume some sales history and a team to act on recommendations.",
        moneyFlow:
          "On a $50 Shopify sale: ~$1.75-2.10 to payment processing plus the platform fee. On Etsy: roughly 9-10% of the sale to listing + marketplace + processing fees combined. CAC is mostly $0 (organic) or very low ($1-5) from small ad tests. Margins vary by category (40-70% gross common) but net profit is thin after the founder's unpaid labor.",
        failurePoints: [
          "Cart abandonment with no recovery flow — no automated abandoned-cart emails set up.",
          "Stockout during a viral moment — a TikTok or Reddit post drives a spike the founder has no inventory or packing capacity to fulfill.",
          "Shipping cost miscalculation — flat-rate shipping set too low eats the entire margin once a heavy item ships.",
          "Solo burnout — the founder is the single point of failure for packing and customer service; a sick day stalls all fulfillment.",
        ],
        opportunity:
          "A dead-simple, AI-driven \"reorder assistant\" that watches a solo seller's sales velocity and social mentions and just texts them when and how much to reorder — priced at $10-20/month instead of $200+/month enterprise inventory tools.",
      },
      {
        key: "B",
        name: "Regional Multi-Location Retailer or Growing DTC Brand",
        tag: "$5M-$250M revenue",
        color: TIER_COLOR.B,
        tldr: "A real company with a team runs its whole online store — ads, emails, warehouse, and customer support — like a small machine, but it's still small enough that one bad week can really hurt.",
        profile:
          "A company with real e-commerce operations infrastructure — a dedicated team, a 3PL or owned warehouse, $5M-$250M in annual revenue. Real, current examples: Brooklinen, Chubbies, Bombas, and Gymshark (historically Shopify Plus, now one of the largest merchants on the platform, at the upper edge approaching Tier C).",
        steps: [
          { title: "Platform & tech stack management", text: "A dedicated e-commerce/ops team runs Shopify Plus, integrates apps for subscriptions, reviews, loyalty, and search, and manages app governance." },
          { title: "Merchandising & catalog management", text: "A team plans seasonal drops, manages SKU-level pricing, and coordinates launch calendars months in advance." },
          { title: "Demand planning & inventory management", text: "A planning function forecasts demand by SKU/region, places POs with manufacturers, and allocates inventory across a 3PL network." },
          { title: "Marketing campaign execution", text: "A performance marketing team runs coordinated campaigns across Meta, Google, TikTok, and email/SMS, planned monthly/quarterly with A/B testing." },
          { title: "Checkout & conversion optimization", text: "A growth/CRO team continuously tests checkout flows, upsells, and BNPL options (Affirm/Klarna/Afterpay)." },
          { title: "Order management & fulfillment", text: "Orders route through an OMS with defined SLAs, via ShipStation or a 3PL like ShipBob/Rakuten Super Logistics." },
          { title: "Customer service at scale", text: "A CS team (in-house or outsourced via Gorgias/Zendesk) handles order issues, returns, and pre-sale questions with defined SLAs." },
          { title: "Returns & reverse logistics", text: "A formal returns process (Loop Returns or Happy Returns) handles exchanges, restocking, and refunds." },
        ],
        roles:
          "A team of roughly 15-75 people: a Head of E-commerce, a merchandising manager, 2-5 performance marketers, a CRM/lifecycle marketer, a demand planner, an ops/fulfillment manager, a CX team, a web/UX designer, and 1-2 in-house or contracted developers/Shopify Plus partners.",
        timeline:
          "Full site relaunch: 3-9 months. New product launch: planned 6-12 weeks out. Fulfillment SLA: ship within 24-48 hours, delivery in 3-7 business days domestically. Inventory reorder cycle: 8-16 weeks depending on manufacturing lead time.",
        tools:
          "Shopify Plus (~$2,300-2,500/mo or revenue-share above a GMV threshold) or BigCommerce Enterprise; Recharge for subscriptions; Klaviyo for email/SMS; Yotpo/Okendo for reviews; Algolia/Searchspring for search; ShipStation/ShipBob for OMS/fulfillment; Loop Returns/Happy Returns; Gorgias/Zendesk for CS; Triple Whale/Northbeam/Rockerbox for attribution; Affirm/Klarna/Afterpay for BNPL. Well-solved: core commerce plumbing (checkout, payments, subscription billing, basic email flows) is mature. Real gap: marketing attribution has been genuinely broken since Apple's iOS 14.5 privacy changes — brands routinely can't reliably tell which channel drove a sale, and modeled tools (Triple Whale, Northbeam) are expensive approximations, not ground truth. A second gap is returns-fraud detection, which enterprise tools like Appriss solve but at prices out of reach for a $20M brand.",
        moneyFlow:
          "Shopify Plus transaction fees typically land around 2.15-2.4%+30c for Shopify Payments. CAC commonly runs $30-80+ and has risen significantly since 2021. Gross margins on apparel/consumer goods DTC typically run 55-70% before marketing spend; after marketing (15-30% of revenue) and fulfillment, net margins are often in the single digits. Returns cost real money twice — return shipping plus restocking/damage write-off, commonly $10-20+ per returned item.",
        failurePoints: [
          "Checkout drop-off when BNPL options aren't offered or shipping costs are revealed too late.",
          "Stockout on a hero SKU during a viral moment, outrunning a 10-week-lead-time reorder cycle from an overseas manufacturer.",
          "3PL fulfillment SLA misses during peak season (Black Friday/Cyber Monday) when order volume outpaces warehouse capacity.",
          "Attribution-driven overspend — misallocating ad budget toward a channel that modeled attribution overcredits.",
        ],
        opportunity:
          "A purpose-built \"ground truth\" attribution and returns-fraud tool priced specifically for the $10M-$100M DTC brand — combining server-side tracking with returns-behavior scoring — would be paid for by mid-market marketing and ops teams stuck between an expensive Northbeam-style subscription and no real answer at all.",
      },
      {
        key: "C",
        name: "National Big-Box Chain or Amazon-Scale Operation",
        tag: "Amazon, Walmart, Target, Best Buy",
        color: TIER_COLOR.C,
        tldr: "Giant companies like Amazon and Walmart run online shopping like a massive factory — robots and computers handle almost everything from the moment you click \"buy\" to the box on your doorstep the next day.",
        profile:
          "Multi-billion-dollar e-commerce operations processing millions of orders per day across dozens of fulfillment centers. Real, current examples: Amazon ($600B+ annual net sales), Walmart (Walmart.com/Walmart+), Target (Target.com integrated with 1,900+ stores for same-day fulfillment via Shipt), and Best Buy.",
        steps: [
          { title: "Enterprise platform/architecture management", text: "A large internal engineering org runs a custom-built or heavily customized commerce platform engineered for extreme uptime and scale." },
          { title: "Category management & pricing", text: "Dedicated category managers and AI-driven dynamic pricing manage tens of thousands to millions of SKUs across first-party and third-party sellers." },
          { title: "Demand forecasting & supply chain planning", text: "Enterprise-scale ML forecasting predicts demand at the SKU/region/day level and drives automated purchase orders and inventory placement." },
          { title: "Omnichannel fulfillment orchestration", text: "Sophisticated logic decides whether an order ships from a fulfillment center, a nearby store, or a third-party seller's own warehouse." },
          { title: "Marketing at scale", text: "Massive, largely automated programmatic and search-ads operations, including Amazon's own retail media network — one of its most profitable business lines." },
          { title: "Personalization & search", text: "Machine-learning-driven product recommendation and search-ranking systems personalize the shopping experience per user." },
          { title: "Fulfillment center operations", text: "Automated and human-staffed fulfillment centers pick, pack, and ship orders against sub-24-hour SLAs, often same-day or next-day." },
          { title: "Continuous experimentation", text: "Constant, large-scale A/B testing across the entire funnel run by dedicated experimentation platforms and data science teams." },
        ],
        roles:
          "Thousands of employees: VP/SVP-level e-commerce and supply-chain executives, hundreds of engineers, dedicated data science/ML teams, category managers and vendor managers per vertical, a massive fulfillment-center workforce (often tens of thousands of associates plus robotics engineers), a large CS organization, and dedicated retail media/advertising sales teams.",
        timeline:
          "Platform changes roll out via continuous deployment. Fulfillment SLA: same-day to 2-day delivery is now the baseline expectation. Seasonal/peak planning begins 6-12 months in advance. New fulfillment center build-out: 12-24 months.",
        tools:
          "Amazon runs its own proprietary systems; large chains commonly run Salesforce Commerce Cloud or Adobe Commerce Enterprise, or composable/MACH-architecture stacks (commercetools, Fabric). Amazon Ads/DSP and Walmart Connect for retail media. Amazon Robotics-equipped fulfillment centers, Walmart's automated DCs built with partners like Symbotic. Manhattan Associates, Blue Yonder for enterprise OMS/inventory. Well-solved: same-day/next-day delivery, near-real-time inventory accuracy, and highly tuned recommendation engines are table stakes these companies have effectively built themselves. Real gap: third-party marketplace trust and quality control — Amazon and Walmart Marketplace both struggle publicly with counterfeit goods and rogue sellers. A second gap is retail-media measurement standardization — brands advertising across Amazon Ads, Walmart Connect, and Target Roundel have no unified, trustworthy cross-retailer measurement layer.",
        moneyFlow:
          "Amazon's marketplace referral fees run roughly 8-15% of item price by category, plus FBA fulfillment fees. Amazon's advertising business is now one of its highest-margin segments. Payment processing at this scale is negotiated directly with card networks at rates far below standard merchant rates. Margins on the core retail business are notoriously thin, with real profitability coming from AWS, advertising, and Prime subscriptions rather than product markup itself.",
        failurePoints: [
          "Counterfeit/fraudulent third-party listings damaging brand trust, a well-documented, recurring issue on Amazon and Walmart Marketplace.",
          "Fulfillment center outages or peak-season SLA misses making national news when volume spikes beyond even automated capacity.",
          "Site-wide outages during flash sale events — Prime Day and Black Friday have both produced high-profile site slowdowns despite massive infrastructure investment.",
          "Algorithmic pricing errors — automated dynamic pricing systems occasionally set prices dramatically wrong, triggering a rush of orders before the error is caught.",
        ],
        opportunity:
          "An independent, cross-retailer retail-media measurement platform — one that sits above Amazon Ads, Walmart Connect, and Target Roundel and gives brands a single, trustworthy view of true incremental ROI instead of each retailer's self-reported numbers.",
      },
    ],
  },
  {
    id: "store-operations",
    label: "Physical Retail Store Operations",
    intro:
      "Running a brick-and-mortar store — staffing, POS, in-store experience, and loss prevention — from a single owner-operated boutique, to a regional chain juggling district managers and labor-law compliance, to a national big-box network watching for organized retail crime with AI cameras.",
    compare: [
      { label: "Scale", a: "1 store, $150K-$1.5M revenue", b: "5-75 stores, $10M-$300M revenue", c: "Hundreds-thousands of stores, billions in revenue" },
      { label: "Scheduling", a: "Text/paper, informal", b: "Deputy/When I Work, labor-budget caps", c: "AI-driven WFM (Legion, Blue Yonder, UKG)" },
      { label: "Shrink", a: "~1.5-1.6% (national avg), no dedicated LP", b: "~1.5-1.6%, regional LP manager", c: "~1.5-1.6%, AI video analytics (Everseen, Veesion), organized retail crime a named driver" },
      { label: "Key tools", a: "Square, Shopify POS, Homebase", b: "Lightspeed Retail, Deputy, NetSuite/Cin7", c: "Oracle Retail Xstore, Blue Yonder/Zebra Workcloud, RFID" },
      { label: "Top failure point", a: "Owner burnout, undetected employee theft", b: "District manager span-of-control overload", c: "Self-checkout shrink, organized retail crime" },
    ],
    tiers: [
      {
        key: "A",
        name: "Solo/Single Independent Boutique",
        tag: "$150K-$1.5M revenue, 1-8 people",
        color: TIER_COLOR.A,
        tldr: "One person (or a tiny team) runs the whole shop — buying stuff, selling it, ringing people up, and counting the cash drawer every night.",
        profile:
          "A single-location, owner-operated shop: apparel boutique, bookstore, gift shop, or specialty food store, doing $150K-$1.5M annually with 1-8 people. Real, verifiable examples of the archetype: independent bookstores like The Strand and Elliott Bay Book Company; broadly represented by the millions of single-location small sellers using Square.",
        steps: [
          { title: "Open store", text: "Unlock, disarm alarm, count starting cash drawer, turn on POS/lights/signage (10-20 min)." },
          { title: "Receive/merchandise inventory", text: "Unbox new stock, tag/price, enter into POS or spreadsheet, place on floor or restock shelves." },
          { title: "Greet & sell", text: "Associate/owner engages customers, answers questions, upsells, rings sale on POS." },
          { title: "Process transaction", text: "POS calculates tax, applies discounts/loyalty, prints/emails receipt, updates inventory count automatically." },
          { title: "Handle returns/exchanges", text: "Verify receipt or lookup order, process refund or store credit, restock item." },
          { title: "Restock/reorder", text: "Check low-stock alerts in POS, place purchase order with supplier manually or via reorder tool." },
          { title: "Close out register & store", text: "Reconcile cash drawer against POS report, prep bank deposit, tidy floor, lock up, review day's sales report." },
        ],
        roles:
          "Owner/operator (does everything: buying, merchandising, HR, bookkeeping), 1-2 part-time sales associates or a single keyholder. No dedicated loss-prevention, HR, or IT function.",
        timeline:
          "Scheduling is informal — owner texts/calls to set 1-2 weeks of shifts at a time. Opening: 10-20 minutes. Closing: 20-30 minutes including till reconciliation. Seasonal ramp-up is minimal — maybe one extra part-timer 4-6 weeks before peak.",
        tools:
          "Square (free plan, 2.6-2.9%+10-30c per transaction), Shopify POS (Basic ~$39/mo+, in-person rates ~1.9-2.6%), Clover, or Lightspeed Retail (entry plans ~$69-189/mo). Homebase or When I Work for scheduling (free single-location tier). QuickBooks Online/Wave for bookkeeping. Well-solved: card acceptance, basic inventory counts, receipt/loyalty, and single-location reporting are essentially commoditized and cheap/free. Real gap: small independents are chronically underserved on demand forecasting and buying decisions — most inventory-forecasting tools are priced and built for mid-size retailers, not a solo shop with a few hundred SKUs. Emerging: Shopify's own Sidekick AI assistant is a step in this direction, but no dominant AI-native \"reorder copilot for the single-shop owner\" has emerged.",
        moneyFlow:
          "Card transaction fees: ~2.6-3.5% of each sale. Labor cost as % of sales: typically 10-20% (often just the owner's own unpaid time plus one part-timer). Rent: commonly 6-10% of revenue for a small storefront lease. Shrink: independent retailers report shrink roughly in line with or above the ~1.5-1.6% national average, often worse proportionally because there's no dedicated loss-prevention staff.",
        failurePoints: [
          "Cash-flow crunch from over-ordering seasonal inventory that doesn't sell through, tying up capital.",
          "Owner burnout/single point of failure — if the owner is sick or on vacation, the shop can't open.",
          "Undetected employee theft — with no separation of duties, sweethearting and drawer skimming go unnoticed for months.",
          "POS/internet outage stops all sales instantly with no manual-transaction fallback trained.",
        ],
        opportunity:
          "An AI-native \"reorder copilot\" that watches a solo shop's actual sell-through (via POS API) and auto-suggests supplier reorders with quantities and timing — priced at $20-40/month, not the $300+/month enterprise forecasting tools.",
      },
      {
        key: "B",
        name: "Regional Multi-Location Retailer",
        tag: "5-75 stores, $10M-$300M revenue",
        color: TIER_COLOR.B,
        tldr: "A company with a bunch of stores in one part of the country has a head office that decides what to stock and how many people to schedule, while store managers run the day-to-day and district bosses check in on multiple stores each week.",
        profile:
          "A retailer with roughly 5-75 stores across one or several states/regions, revenue typically $10M-$300M. Real examples: Warby Parker (~270 US stores as of 2025-2026), Vuori, Rothy's, and REI co-op (~190 stores) straddling B/C.",
        steps: [
          { title: "Corporate merchandise planning", text: "Buying/merchandising team sets assortments and allocates inventory to stores by region/store-tier via a planning system." },
          { title: "Distribution & replenishment", text: "Regional distribution center(s) ship to stores on a set cadence based on POS sell-through data feeding auto-replenishment." },
          { title: "District manager oversight", text: "DM visits/audits multiple stores weekly, reviewing KPIs (sales, shrink, labor %) and coaching store managers." },
          { title: "Store-level scheduling", text: "Store manager builds weekly schedules in a workforce-management tool based on forecasted traffic/sales, subject to labor-budget caps." },
          { title: "Daily store operations", text: "Open/close procedures, sales floor coverage, POS transactions, and fulfillment of buy-online-pickup-in-store (BOPIS) orders." },
          { title: "Loss prevention checks", text: "Cycle counts, EAS tag checks, exception-based reporting flags reviewed by a regional LP manager." },
          { title: "Visual merchandising resets", text: "Corporate sends planograms; store team executes seasonal resets and campaign changes on a set calendar." },
        ],
        roles:
          "VP of Retail/Stores, 3-8 District/Regional Managers each overseeing 8-15 stores, Store Managers, Assistant Store Managers, Keyholders/Shift Leads, Sales Associates, a regional Loss Prevention Manager, a Visual Merchandising lead, and a corporate merchandising/buying team.",
        timeline:
          "Schedules built 1-2 weeks in advance, posted 5-7 days ahead per predictive-scheduling laws. Seasonal ramp-up: hiring for holiday typically begins 8-12 weeks before peak. Opening ~20-30 minutes across multiple registers; closing 30-45 minutes.",
        tools:
          "Lightspeed Retail (~$100-300+/store/month) or Shopify POS Plus/Advanced for multi-location omnichannel brands; Deputy (Lite $5/user/mo, Pro $9/user/mo) or When I Work for scheduling; Legion Technologies for enterprise AI-driven scheduling as chains grow toward hundreds of locations; NetSuite/Cin7/Brightpearl for order/inventory management. Well-solved: multi-store inventory visibility, BOPIS/ship-from-store logistics, and workforce scheduling against labor budgets. Real gap: cross-store labor optimization tied to real-time foot traffic and conversion is still weak outside the priciest enterprise WFM suites — a \"messy middle\" of 20-75-store chains can't justify Legion's pricing but outgrow Deputy/When I Work's basic forecasting.",
        moneyFlow:
          "Card processing fees negotiated lower than small-business rates, often ~1.8-2.5% in-person. Labor cost as % of sales commonly targeted at 12-18%. Rent/lease economics typically 5-8% of sales for well-negotiated multi-unit leases. Shrink hovers around 1.5-1.6% of sales industry-wide, with organized retail crime cited as a fast-growing contributor.",
        failurePoints: [
          "Uneven execution across stores — a planogram or promotion gets executed inconsistently without a dedicated visual merchandiser on-site everywhere.",
          "District manager span-of-control overload — one DM covering 12-15 stores can't catch operational problems at every location in time.",
          "Labor-law/predictive-scheduling violations in cities/states with Fair Workweek-style laws, often unintentional due to inconsistent store-manager training.",
          "Seasonal turnover cliff — holiday-hired associates leave in January, creating a staffing gap right during the returns-processing surge.",
        ],
        opportunity:
          "An AI-native workforce-and-traffic tool purpose-built for the 20-75-store regional chain — combining real-time foot-traffic sensors/POS conversion data with auto-scheduling and labor-law compliance — priced meaningfully below Legion's enterprise contracts.",
      },
      {
        key: "C",
        name: "National Big-Box Chain",
        tag: "Walmart, Target, Costco, Best Buy, Home Depot",
        color: TIER_COLOR.C,
        tldr: "A giant chain uses computers and AI to figure out exactly what to stock, how many workers to schedule, and even to watch for shoplifting, across thousands of stores all at once.",
        profile:
          "Hundreds to thousands of stores nationwide, revenue in the billions to hundreds of billions. Real, current examples: Walmart (~4,600 US stores, ~$680B FY2025 revenue), Target (~1,980 US stores), Costco (~630 US warehouses), Best Buy (~1,000 US stores), Home Depot (~2,300 stores).",
        steps: [
          { title: "Enterprise demand planning & allocation", text: "Centralized merchandising and supply-chain teams use AI-driven demand forecasting to allocate inventory across thousands of stores and regional DCs." },
          { title: "National distribution network execution", text: "A fleet of regional DCs and cross-dock facilities replenishes stores on tight, automated cadences, often daily for high-velocity categories." },
          { title: "Store operations at scale", text: "Store manager and multiple assistant managers run departments (front-end, backroom, e-commerce fulfillment) each with their own team leads." },
          { title: "Enterprise workforce scheduling", text: "AI-based labor-management systems generate schedules from sales forecasts, weather, local events, and labor-law rules automatically." },
          { title: "Omnichannel fulfillment operations", text: "Stores double as micro-fulfillment centers for BOPIS, curbside, and ship-from-store, requiring dedicated fulfillment associates." },
          { title: "Enterprise loss prevention", text: "AI video analytics, EAS, RFID inventory tracking, and dedicated asset-protection teams monitor shrink and organized retail crime in real time." },
          { title: "Corporate performance management", text: "Daily automated dashboards roll store-level KPIs up through district, regional, and national leadership." },
        ],
        roles:
          "Chief Retail/Stores Officer, SVP/VP of Store Operations, Regional VPs, District Managers (each over ~10-15 stores), Store Managers, multiple Assistant Store Managers per department, Team Leads, hundreds of Sales/Fulfillment Associates per flagship store, dedicated Asset Protection/Loss Prevention staff, and a large corporate merchandising/supply chain/workforce-analytics organization.",
        timeline:
          "Schedules generated algorithmically 2-3 weeks out. Seasonal staffing ramp-up is a formal, months-long process, typically announced August-September for a November-December peak, sometimes bringing on tens of thousands of seasonal associates chain-wide.",
        tools:
          "Oracle Retail Xstore or NCR Voyix enterprise POS, or heavily customized in-house systems at the largest players (Walmart runs largely proprietary systems). Blue Yonder Luminate Workforce Management, Zebra Workcloud, Legion Technologies, or UKG for workforce management. Zipline/Workjam for task management; Everseen and Veesion (real, current AI computer-vision shrink-detection startups) alongside traditional EAS and RFID for loss prevention. Well-solved: enterprise-scale inventory visibility, omnichannel fulfillment orchestration, and algorithmic labor scheduling. Real gap: real-time, store-level shrink attribution (distinguishing organized retail crime from internal theft from process error) remains genuinely hard even for big-box chains.",
        moneyFlow:
          "Enterprise merchant processing rates are heavily negotiated, often well under 2% blended. Labor cost as % of sales commonly runs 10-15%. Shrink at national scale hovers around 1.5-1.6% of total retail sales industry-wide, translating into tens of billions of dollars in aggregate industry losses annually, with organized retail crime cited as a rising share.",
        failurePoints: [
          "Self-checkout shrink — unscanned or under-scanned items at self-checkout kiosks are a named, well-documented shrink driver.",
          "Organized retail crime (ORC) \"flash mob\" and gang-coordinated theft, named repeatedly in NRF surveys as a fast-growing, high-dollar-loss category.",
          "Understaffing during holiday peak leading to long checkout lines when seasonal hiring targets aren't met.",
          "System-wide POS/network outages that can halt transactions across thousands of stores simultaneously.",
        ],
        opportunity:
          "A unified \"shrink root-cause\" platform that fuses self-checkout/video AI signals, POS exception data, and inventory-record discrepancies into one system that tells asset-protection teams why shrink happened, not just that it happened — big-box teams currently stitch together separate vendor dashboards with no unified root-cause view.",
      },
    ],
  },
  {
    id: "retail-supply-chain",
    label: "Supply Chain & Inventory Management",
    intro:
      "Forecasting demand, warehousing, and getting product where it needs to be — from a solo seller guessing reorder timing from a garage, to a growing brand coordinating regional 3PLs and freight forwarders, to Walmart- and Amazon-scale networks of robotics-assisted distribution centers.",
    compare: [
      { label: "Scale", a: "$20K-$750K/year, home/small storage", b: "$5M-$200M revenue, owned warehouse or 3PL network", c: "Tens-hundreds of billions, national DC networks" },
      { label: "Key tools", a: "Spreadsheet, ShipBob/FBA, Pirate Ship", b: "NetSuite/Cin7, ShipBob multi-node, Flexport", c: "Blue Yonder, Manhattan Associates, o9/Kinaxis" },
      { label: "Forecasting", a: "Gut feel, no formal model", b: "Monthly/quarterly spreadsheet or lightweight tool", c: "AI/ML models refreshed daily across the network" },
      { label: "Carrying cost", a: "Invisible but real — cash tied up at home", b: "~20-30% of inventory value/year, often under-tracked", c: "Billions of dollars of inventory value, precisely managed" },
      { label: "Top failure point", a: "Stockouts from underordering, dead stock", b: "Bullwhip-effect overordering, port/freight delays", c: "Network-scale bullwhip effect, vendor blind-spot data" },
    ],
    tiers: [
      {
        key: "A",
        name: "Solo Shopify/Etsy Seller or Single Boutique",
        tag: "$20K-$750K/year",
        color: TIER_COLOR.A,
        tldr: "One person guesses how much stuff to make or buy, keeps it in their garage (or pays a warehouse service to hold and ship it for them), and hopes they didn't order too much or too little.",
        profile:
          "A one-to-few-person operation holding inventory at home, in a garage, or a small storage unit, doing roughly $20K-$750K/year. Some at the upper end begin using a small/startup-friendly 3PL. Real, current examples: individual Etsy/Shopify sellers who outgrow home fulfillment and move to ShipBob or Fulfillment by Amazon (FBA); small food, beauty, or apparel brands in their first 1-3 years, commonly cited in ShipBob's and Printful's own case studies.",
        steps: [
          { title: "Demand guessing", text: "Owner estimates future sales based on last month's numbers, upcoming social posts, or seasonal intuition; no formal forecasting model." },
          { title: "Reordering from supplier", text: "Places a purchase order or production run with a supplier, often paying a deposit upfront." },
          { title: "Receiving", text: "Physically receives and counts stock in a garage/spare room, or ships it to a 3PL where it's checked in against the PO." },
          { title: "Storage", text: "Product sits on shelving at home or in a 3PL's shared warehouse space, billed by cubic foot or bin." },
          { title: "Order picking & packing", text: "Owner personally picks and packs each order, or the 3PL's staff picks/packs against the integrated order feed." },
          { title: "Shipping", text: "Owner buys a discounted postage label (Pirate Ship, Shopify Shipping) or the 3PL selects a carrier automatically." },
          { title: "Manual stock reconciliation", text: "Owner periodically counts remaining stock by hand and updates the storefront's inventory count to avoid overselling." },
        ],
        roles:
          "The founder does everything — forecasting, purchasing, receiving, picking/packing, shipping, and returns — unless outsourced to a 3PL, at which point the founder's role shrinks to demand planning and purchasing only.",
        timeline:
          "Reorder decisions are ad hoc, often triggered by \"I'm running low.\" Supplier lead times commonly run 2-6 weeks domestic, 6-12+ weeks overseas. Holiday-season prep typically starts building extra stock 8-10 weeks ahead, constrained by how much cash the owner can tie up at once.",
        tools:
          "ShipBob, Fulfillment by Amazon (FBA), or smaller regional 3PLs for warehousing/fulfillment once outgrowing home fulfillment, typically charging receiving, storage, and per-order pick-and-pack fees. Pirate Ship or Shopify Shipping for self-fulfillment. Sortly, Zoho Inventory, or Ordoro for basic tracking. Well-solved: getting a small seller onto a 3PL's network is now a fast, low-commitment self-serve process. Real gap: true demand forecasting and reorder-point calculation remain almost entirely manual — there's no affordable, simple tool that says exactly when and how much to order based on sell-through and supplier lead time. Emerging: Cogsy and SoStocked (Amazon-specific) chip at this but none has become a default the way Shopify did for payments.",
        moneyFlow:
          "Inventory carrying cost is largely invisible to the owner (it's just cash sitting in a garage) but is real — capital tied up in unsold stock for weeks or months. 3PL fees typically run a few dollars per order in pick/pack plus separate storage and shipping costs. Suppliers usually require full or partial prepayment since the seller has no established purchase history.",
        failurePoints: [
          "Stockouts from underordering ahead of a demand spike, losing sales and search ranking during the exact window that mattered most.",
          "Overordering/dead stock — tying up scarce cash in inventory that doesn't sell, especially on trend-sensitive goods.",
          "Running out of physical storage space at home, forcing a rushed, poorly negotiated move to a 3PL under time pressure.",
          "Manual stock-count errors leading to overselling an out-of-stock item across multiple sales channels simultaneously.",
        ],
        opportunity:
          "A simple, cheap \"reorder point calculator\" that plugs into Shopify/Etsy/Amazon sales data and a seller's known supplier lead time, and just tells them the exact date and quantity to reorder — priced under $20/month, replacing the gut-feel guessing that causes most stockout and dead-stock problems.",
      },
      {
        key: "B",
        name: "Regional Multi-Location Retailer or Growing DTC Brand",
        tag: "$5M-$200M revenue",
        color: TIER_COLOR.B,
        tldr: "A growing brand has real warehouses (their own or rented) in a few places, a small team planning how much to make and where to send it, and they're big enough that mistakes cost real money but still small enough to get badly hurt by a shipping delay or a bad guess.",
        profile:
          "A retailer or DTC brand that has outgrown home/garage fulfillment and now runs either an owned small warehouse or a network of regional 3PL partners, typically doing $5M-$200M in annual revenue. Real, current examples in this range include growing DTC brands like Bombas, Chubbies, and Solo Stove in their mid-growth years, and regional multi-location specialty retailers coordinating inventory across a handful to several dozen stores plus an e-commerce channel.",
        steps: [
          { title: "Demand forecasting", text: "A dedicated planner builds a formal forecast by SKU using historical sales data, seasonality, and the upcoming marketing calendar." },
          { title: "Purchase order placement with manufacturers", text: "POs are placed with contract manufacturers months ahead of need, often requiring price negotiation and MOQ commitments." },
          { title: "Inbound freight & customs", text: "Freight forwarders (e.g., Flexport) manage ocean/air freight booking, customs clearance, and delivery to a warehouse or port-side 3PL, if overseas-sourced." },
          { title: "Warehouse receiving", text: "Goods are checked in against the PO at an owned warehouse or 3PL, with discrepancies flagged and disputed with the supplier." },
          { title: "Inventory allocation across channels", text: "Inventory is split between e-commerce fulfillment, wholesale/retail store replenishment, and any owned retail locations." },
          { title: "In-season replenishment & reorders", text: "As sell-through data comes in, the planner adjusts reorder timing/quantities and may place rush/expedited orders on fast-moving SKUs." },
          { title: "Returns processing", text: "Returned goods are received back at the warehouse, inspected, and either restocked, liquidated, or written off." },
        ],
        roles:
          "A dedicated Operations Manager or Director of Supply Chain, one or more Demand/Inventory Planners, a Logistics/Fulfillment Coordinator managing 3PL relationships, and (if running an owned warehouse) a Warehouse Manager plus staff — total headcount commonly 3-15 people, reporting up to a COO or VP of Operations.",
        timeline:
          "Formal demand forecasting is typically monthly or quarterly, with a rolling 3-6 month look-ahead. Reorder lead times commonly run 6-16 weeks for overseas-manufactured goods, or 2-6 weeks domestic. Holiday/peak-season prep starts roughly 4-6 months ahead, including securing extra warehouse capacity and priority freight booking.",
        tools:
          "NetSuite or Cin7 Core/Omni for combined inventory/order management tying together e-commerce, wholesale, and retail channels; ShipBob or a regional multi-node 3PL network for fulfillment; Flexport for freight forwarding and customs; Fishbowl Inventory as a lower-cost NetSuite alternative; SPS Commerce for EDI once selling wholesale into larger retail accounts. Well-solved: multi-warehouse/3PL order routing to minimize shipping cost and transit time. Real gap: true SKU-level demand forecasting that accounts for promotional lift and marketing-calendar-driven spikes remains genuinely hard — full enterprise demand-planning suites (Blue Yonder, o9, Kinaxis) are priced far beyond what a $20M-$100M brand can justify.",
        moneyFlow:
          "Inventory carrying costs (warehousing, insurance, capital cost, obsolescence risk) are commonly estimated at roughly 20-30% of inventory value per year, a real and often under-tracked cost. 3PL fulfillment fees typically run a few dollars per order plus separate storage and shipping costs. Ocean freight rates have swung dramatically in recent years due to port congestion and capacity shifts, and brands at this tier feel that volatility materially without the long-term contracted rates Tier C players have.",
        failurePoints: [
          "Bullwhip-effect overordering — a small uptick in demand gets amplified into an oversized reorder up the supply chain.",
          "Port/freight delays blowing through a brand's holiday-prep timeline despite having planned in time under normal conditions.",
          "Overstock/dead inventory tying up warehouse space and capital when a forecast overshoots actual demand.",
          "EDI/vendor-compliance chargebacks once the brand starts wholesaling into larger retail accounts with strict routing-guide requirements.",
        ],
        opportunity:
          "A mid-market demand-forecasting tool purpose-built to ingest a brand's actual marketing calendar (planned promotions, ad spend ramps, influencer drops) alongside historical sales — not just historical sales alone — and translate that into SKU-level reorder recommendations, priced for the $10M-$150M brand that's outgrown spreadsheets but can't justify an enterprise contract.",
      },
      {
        key: "C",
        name: "National Big-Box Chain or Amazon-Scale Operation",
        tag: "Walmart, Amazon, Target, Costco, Home Depot",
        color: TIER_COLOR.C,
        tldr: "The biggest companies build their own giant, computer-run networks of warehouses and trucks (and sometimes planes) to move products from factories all the way to your doorstep or your local store, almost like a machine that never stops.",
        profile:
          "A retailer or marketplace operator running a full national (or global) distribution center network, with annual revenue in the tens of billions to hundreds of billions. Real, current examples: Walmart (one of the largest private supply chain networks in the world), Amazon (a vast global fulfillment network including sortation centers and last-mile delivery stations), Target, Costco, and Home Depot.",
        steps: [
          { title: "Enterprise demand forecasting", text: "Large data science teams run AI/ML-driven forecasting models predicting demand at the SKU/store/day level across the entire network, feeding automated replenishment." },
          { title: "Strategic sourcing & supplier network management", text: "Dedicated global sourcing teams manage relationships with thousands of suppliers, often with dedicated sourcing offices in key manufacturing regions." },
          { title: "Inbound logistics & freight management", text: "Large-scale ocean, air, and rail freight is managed through owned logistics capacity and contracted freight-forwarding relationships." },
          { title: "Distribution center network operations", text: "A network of regional and national DCs — often highly automated with conveyor systems and robotics — receives, stores, and cross-docks inventory." },
          { title: "Store/customer allocation", text: "Automated systems allocate inventory from DCs to individual stores or directly to e-commerce customers, largely without SKU-level human intervention for staple items." },
          { title: "Last-mile delivery", text: "Handled through a combination of owned delivery networks, USPS/UPS/FedEx partnerships, and store-based fulfillment (ship-from-store, curbside, BOPIS)." },
          { title: "Vendor compliance & EDI enforcement", text: "Enterprise EDI systems enforce strict compliance across thousands of vendor relationships, with automated chargeback assessment for non-compliance." },
        ],
        roles:
          "A large, specialized organization: SVP/VP of Supply Chain, dedicated demand-planning and forecasting teams, global sourcing/vendor management teams, logistics and transportation management teams (including in-house trucking/aviation at the largest players), DC/fulfillment-center general managers and large hourly workforces (often tens of thousands of associates, increasingly supplemented by warehouse robotics), a dedicated reverse-logistics organization, and vendor-compliance/EDI teams.",
        timeline:
          "Enterprise demand forecasting runs continuously, refreshed daily or near-real-time, with formal planning cycles set 6-12+ months ahead. Peak-season prep is a major undertaking beginning as early as the prior year's post-holiday review. New distribution center build-out is a multi-year undertaking from site selection through full operational ramp-up.",
        tools:
          "Blue Yonder (formerly JDA/RedPrairie) and Manhattan Associates are the two dominant enterprise warehouse-management and supply-chain-planning platforms; o9 Solutions and Kinaxis (RapidResponse) for integrated business planning; SPS Commerce and proprietary vendor portals for EDI at scale. Amazon and Walmart both run substantial proprietary, custom-built logistics software layered on top of (or instead of) third-party platforms. Well-solved: core distribution-network execution — receiving, cross-docking, automated replenishment of staple SKUs, and omnichannel fulfillment routing — represents one of the most sophisticated logistics operations in any industry globally. Real gap: even at this scale, the industry struggles with resilient forecasting during demand shocks and with giving suppliers real-time, granular visibility into their own forecast accuracy — vendors commonly report receiving only delayed, low-resolution data back. Emerging: Crisp and RELEX Solutions actively work this specific gap.",
        moneyFlow:
          "Inventory carrying costs are managed with extreme precision given the sheer capital tied up (commonly billions of dollars of inventory value on the balance sheet at any given time). Freight costs are managed through owned transportation assets plus large, long-term negotiated contracts, giving these companies meaningfully better economics than smaller players exposed to spot-market volatility. Vendor payment terms are dictated by the retailer (commonly net-30/60/90), with mandatory compliance-related deductions (OTIF chargebacks) a well-documented, material cost line for suppliers.",
        failurePoints: [
          "Bullwhip effect at network scale — demand signal distortion amplified across a massive, multi-tier supply chain, a well-documented phenomenon even sophisticated forecasting systems struggle to eliminate.",
          "Port congestion and global freight disruption materially disrupting even the best-planned peak-season prep given the long lead times involved in overseas sourcing.",
          "Vendor compliance/OTIF chargeback disputes straining supplier relationships at scale, a persistent, well-documented friction point.",
          "Returns-network capacity strain during post-holiday returns surges, straining the same network right after peak fulfillment volume.",
        ],
        opportunity:
          "A standardized, vendor-facing \"forecast and sell-through transparency\" layer that normalizes real-time inventory and sell-through data from multiple big-box/marketplace retailers into one dashboard for suppliers — Crisp is an early mover in grocery/CPG specifically, but general merchandise and apparel remain comparatively underserved.",
      },
    ],
  },
];
