/* =============================================================
   AGGREGATE.TOOLS — TOOL DATA
   -------------------------------------------------------------
   This is the only file you need to edit to add/update tools.
   Each tool is an object inside the TOOLS array below.
   Categories are in the CATEGORIES array.
   Save the file and refresh the page to see changes.
   ============================================================= */

window.CATEGORIES = [
  { id: "estimating",    name: "Estimating",     blurb: "Takeoffs, bids, cost prediction.",      icon: "$" },
  { id: "field-ops",     name: "Field Ops",      blurb: "Crews, scheduling, daily logs.",        icon: "►" },
  { id: "safety",        name: "Safety",         blurb: "PPE detection, JHAs, incidents.",       icon: "!" },
  { id: "documentation", name: "Documentation",  blurb: "Plans, RFIs, submittals, archives.",    icon: "¶" },
  { id: "back-office",   name: "Back-Office",    blurb: "Accounting, payroll, invoicing.",       icon: "#" }
];

window.PRICING_TIERS = [
  { id: "free",       label: "Free Plan"   },
  { id: "trial",      label: "Free Trial"  },
  { id: "paid",       label: "Paid"        },
  { id: "enterprise", label: "Enterprise"  }
];

/* -------------------------------------------------------------
   TOOLS — add new ones by copying a block.
   Required: id, name, tagline, category, pricing, price, rating
   Optional: editorPick, hot, new, verdict, pros, cons, bestFor
   ------------------------------------------------------------- */

window.TOOLS = [
  {
    id: "boltline",
    name: "Boltline",
    monogram: "BL",
    tagline: "Computer-vision takeoffs from PDFs.",
    category: "estimating",
    pricing: ["paid", "trial"],
    price: "$249/mo",
    rating: 4.7,
    reviews: 412,
    editorPick: true,
    verdict: "If you're still highlighting PDFs with a marker, this is the wedge.",
    description: "Drop in a set of plans and Boltline counts fixtures, runs linear measurements, and exports to your estimating spreadsheet in under a minute. Trained on 14M sheets of commercial and residential drawings.",
    pros: ["Counts faster than a senior estimator", "Plays nice with Excel exports", "Catches sheet revisions automatically"],
    cons: ["Subscription stings for one-off jobs", "Limited support for hand-drawn sketches"],
    bestFor: "Commercial GCs running 4+ bids a week.",
    features: ["Auto-takeoff", "PDF revision tracking", "Excel/CSV export", "Symbol library", "Multi-user"],
    integrations: ["Procore", "Bluebeam", "Excel", "Sage"],
    free_trial: "14 days, no card",
    founded: 2021,
    hq: "Austin, TX"
  },
  {
    id: "siteward",
    name: "Siteward",
    monogram: "SW",
    tagline: "PPE & hazard detection on existing cameras.",
    category: "safety",
    pricing: ["paid", "enterprise"],
    price: "$89/cam/mo",
    rating: 4.8,
    reviews: 287,
    hot: true,
    verdict: "Cuts incident reporting from days to a Slack ping. The real deal.",
    description: "Bolts on to whatever IP cameras you already have on site. Flags missing hardhats, ladder violations, unauthorized access, and zone breaches in real time. Sends clips to a foreman's phone, not a corporate dashboard.",
    pros: ["Works with existing cameras", "No data leaves your VPC", "Real-time foreman alerts"],
    cons: ["Setup needs a tech-savvy super", "False positives on hood-up days"],
    bestFor: "Multi-site contractors with active OSHA pressure.",
    features: ["PPE detection", "Zone alerts", "Incident clips", "Trend reports", "Custom rules"],
    integrations: ["Slack", "Teams", "Milestone", "Genetec"],
    free_trial: "30-day pilot, 1 camera",
    founded: 2022,
    hq: "Denver, CO"
  },
  {
    id: "shiftframe",
    name: "ShiftFrame",
    monogram: "SF",
    tagline: "AI scheduler for trade crews.",
    category: "field-ops",
    pricing: ["paid", "trial"],
    price: "$19/user/mo",
    rating: 4.5,
    reviews: 638,
    verdict: "Finally a scheduler that understands a Tuesday rain delay.",
    description: "Tell it your crews, certs, and jobs. It plans the week, reshuffles when weather hits, and texts everyone the change. Pulls in time-off and apprenticeship hours automatically.",
    pros: ["Texts crews directly", "Tracks apprentice hours", "Survives a re-plan"],
    cons: ["Reporting is basic", "Mobile app feels rushed"],
    bestFor: "Electrical, mechanical, and plumbing contractors with 20–200 field staff.",
    features: ["Auto-schedule", "SMS dispatch", "Apprentice tracking", "Weather rules", "Crew chat"],
    integrations: ["QuickBooks", "ServiceTitan", "Stripe"],
    free_trial: "21 days",
    founded: 2020,
    hq: "Nashville, TN"
  },
  {
    id: "planhound",
    name: "Planhound",
    monogram: "PH",
    tagline: "Chat with your plan sets.",
    category: "documentation",
    pricing: ["free", "paid"],
    price: "Free — $79/mo",
    rating: 4.6,
    reviews: 521,
    new: true,
    verdict: "Searching a 600-sheet set used to mean coffee. Not anymore.",
    description: "Upload a plan set, ask questions in plain English. \"Where's the panel schedule for level 3?\" \"What's the slab thickness on grid C?\" It answers with the page reference and a clipped image.",
    pros: ["Plain-English search", "Cites the sheet number", "Free tier is generous"],
    cons: ["Struggles with hand-redlined sets", "No offline mode"],
    bestFor: "Project engineers and supers buried in revisions.",
    features: ["Natural language search", "Sheet citations", "Markup export", "Team libraries"],
    integrations: ["Procore", "PlanGrid", "Dropbox", "OneDrive"],
    free_trial: "Free forever tier",
    founded: 2023,
    hq: "Remote (US)"
  },
  {
    id: "ledgerpost",
    name: "Ledgerpost",
    monogram: "LP",
    tagline: "AI bookkeeping built for contractors.",
    category: "back-office",
    pricing: ["paid"],
    price: "$199/mo",
    rating: 4.4,
    reviews: 198,
    verdict: "Job costing without the bookkeeper-shaped headache.",
    description: "Connects to your bank and QuickBooks, then categorizes every transaction by job, phase, and cost code. Spots margin slippage before it eats the project.",
    pros: ["Real contractor cost codes", "Catches margin drift early", "Owner-friendly reports"],
    cons: ["US/CA banks only", "Setup takes a half day"],
    bestFor: "Small GCs and specialty contractors doing $2M–$30M/yr.",
    features: ["Job costing", "Cost code AI", "WIP reports", "Owner dashboard"],
    integrations: ["QuickBooks", "Xero", "Plaid", "Gusto"],
    free_trial: "30 days",
    founded: 2019,
    hq: "Toronto, ON"
  },
  {
    id: "framecount",
    name: "FrameCount",
    monogram: "FC",
    tagline: "Drone-to-progress reports in 24 hrs.",
    category: "field-ops",
    pricing: ["paid", "enterprise"],
    price: "From $1,200/site",
    rating: 4.3,
    reviews: 142,
    verdict: "Owner reps love the weekly orthomosaic. Crews shrug.",
    description: "Fly your site once a week (or have them do it). They process the imagery into a progress dashboard with earned-value tracking and side-by-side comparison vs. the schedule.",
    pros: ["Visual earned-value reporting", "Owner-rep ready", "Drone agnostic"],
    cons: ["Pricy for small jobs", "Indoor sites need add-on scanning"],
    bestFor: "Vertical construction over $20M in contract value.",
    features: ["Orthomosaics", "EV tracking", "Schedule overlay", "Owner portal"],
    integrations: ["Procore", "P6", "Asite"],
    free_trial: "Demo site only",
    founded: 2018,
    hq: "Seattle, WA"
  },
  {
    id: "rfiloop",
    name: "RFILoop",
    monogram: "RL",
    tagline: "Drafts RFIs and submittals from your inbox.",
    category: "documentation",
    pricing: ["paid", "trial"],
    price: "$49/user/mo",
    rating: 4.2,
    reviews: 96,
    verdict: "Saves an hour a day on paperwork. Not glamorous, just useful.",
    description: "Forward an email thread or a field photo. It drafts the RFI or submittal, attaches the right plan reference, and queues it for your review. You sign off, it sends.",
    pros: ["Eats inbox sprawl", "Pulls plan references automatically", "Easy review queue"],
    cons: ["Drafts need a quick read", "Limited to English"],
    bestFor: "PMs and PEs drowning in coordination.",
    features: ["RFI drafting", "Submittal queue", "Email ingestion", "Plan auto-link"],
    integrations: ["Outlook", "Gmail", "Procore", "Autodesk Build"],
    free_trial: "14 days",
    founded: 2022,
    hq: "Boston, MA"
  },
  {
    id: "bidhammer",
    name: "BidHammer",
    monogram: "BH",
    tagline: "Win-rate intelligence for bid teams.",
    category: "estimating",
    pricing: ["paid", "enterprise"],
    price: "$399/mo",
    rating: 4.1,
    reviews: 71,
    verdict: "Smart, but it's a senior estimator's tool — not a one-man shop's.",
    description: "Pulls your historic bids, the ones you won, the ones you didn't, and tells you where your margin should land for the next one. Benchmarks against anonymized regional data.",
    pros: ["Real bid history learning", "Margin guardrails", "Regional benchmarks"],
    cons: ["Steep learning curve", "Needs 50+ historic bids"],
    bestFor: "Estimating departments at GCs over $50M revenue.",
    features: ["Win-rate model", "Margin guidance", "Bid benchmarks", "Pipeline view"],
    integrations: ["HubSpot", "Salesforce", "Excel"],
    free_trial: "Live demo only",
    founded: 2020,
    hq: "Chicago, IL"
  },
  {
    id: "torchwatch",
    name: "TorchWatch",
    monogram: "TW",
    tagline: "Hot-work permit & burn-watch AI.",
    category: "safety",
    pricing: ["paid"],
    price: "$59/user/mo",
    rating: 4.6,
    reviews: 88,
    verdict: "Niche but indispensable if you do welding or roofing.",
    description: "Digitizes hot-work permits, tracks fire watch timers, and uses thermal imagery to flag smoldering hazards after a torch-down or weld. Built with two veteran firewatch supers.",
    pros: ["Built by actual firewatch supers", "Thermal flagging works", "Audit trail is gold"],
    cons: ["Only hot-work scope", "Camera hardware sold separately"],
    bestFor: "Roofers, welders, and refinery contractors.",
    features: ["Permit digitization", "Burn-watch timers", "Thermal flagging", "Audit trail"],
    integrations: ["Procore", "OSHA forms"],
    free_trial: "30-day pilot",
    founded: 2023,
    hq: "Houston, TX"
  },
  {
    id: "punchbeam",
    name: "Punchbeam",
    monogram: "PB",
    tagline: "Punch lists from a walkthrough video.",
    category: "field-ops",
    pricing: ["free", "paid"],
    price: "Free — $39/user/mo",
    rating: 4.5,
    reviews: 247,
    new: true,
    verdict: "Walk the floor, mumble into your phone. Get a punch list. That's it.",
    description: "Record a walkthrough video, narrate as you go. Punchbeam transcribes, locates each issue on the plan, generates a punch list with photos, and assigns by trade.",
    pros: ["Genuinely fast", "Free tier for one user", "Auto trade assignment"],
    cons: ["Mics can struggle on a loud floor", "Plan-locating takes a beat"],
    bestFor: "Supers and QC walkers.",
    features: ["Video walkthroughs", "Auto punch generation", "Trade routing", "Photo annotation"],
    integrations: ["Procore", "Autodesk Build", "Asite", "iAuditor"],
    free_trial: "Free tier",
    founded: 2024,
    hq: "Minneapolis, MN"
  },
  {
    id: "invoicemason",
    name: "InvoiceMason",
    monogram: "IM",
    tagline: "AI lien waivers, AIA billing, draw packages.",
    category: "back-office",
    pricing: ["paid", "trial"],
    price: "$129/mo",
    rating: 4.3,
    reviews: 113,
    verdict: "Boring software for an unboring problem. Saves real days.",
    description: "Generates G702/G703 progress billing from your schedule of values, chases lien waivers from subs, and packages draws for the lender. Handles retainage so you don't have to.",
    pros: ["Real AIA forms", "Sub lien waiver chase", "Lender-friendly packages"],
    cons: ["UI is firmly utilitarian", "Limited mobile"],
    bestFor: "GCs running 3+ active AIA contracts.",
    features: ["G702/G703", "Lien waivers", "Draw packages", "Retainage tracking"],
    integrations: ["QuickBooks", "Sage", "Foundation"],
    free_trial: "14 days",
    founded: 2021,
    hq: "Atlanta, GA"
  },
  {
    id: "specparse",
    name: "SpecParse",
    monogram: "SP",
    tagline: "Reads 800-page spec books so you don't.",
    category: "documentation",
    pricing: ["paid"],
    price: "$149/mo",
    rating: 4.4,
    reviews: 64,
    verdict: "If specs are your nightmare, this is the ibuprofen.",
    description: "Drop in a project manual. It surfaces every submittal required, who owns it, the section number, and the deadline math. Built around CSI MasterFormat.",
    pros: ["MasterFormat-native", "Submittal log auto-build", "Deadline math is right"],
    cons: ["Not great with non-CSI specs", "Pricing is per-project"],
    bestFor: "Submittal coordinators and PEs.",
    features: ["Submittal extraction", "Owner mapping", "Deadline calc", "Section linking"],
    integrations: ["Procore", "Autodesk Build", "Newforma"],
    free_trial: "1 project free",
    founded: 2022,
    hq: "Philadelphia, PA"
  }
];

/* -------------------------------------------------------------
   EDITOR'S PICK OF THE WEEK — change the slug to feature it.
   ------------------------------------------------------------- */

window.PICK_OF_WEEK = {
  toolId: "siteward",
  weekOf: "May 18, 2026",
  note: "We embedded with a Denver GC for two weeks. Siteward turned a clipboard culture into a Slack-ping culture. That's the kind of change that sticks."
};

/* -------------------------------------------------------------
   TESTIMONIALS
   ------------------------------------------------------------- */

window.TESTIMONIALS = [
  {
    quote: "Two months ago I didn't know what an LLM was. Now my estimator runs three more bids a week.",
    name: "Marco D.",
    role: "Owner, mechanical contractor",
    location: "Phoenix, AZ"
  },
  {
    quote: "Half the directories out there are written by people who've never set foot on a job site. This one isn't.",
    name: "Renée K.",
    role: "Director of Operations, GC",
    location: "Hartford, CT"
  },
  {
    quote: "I'm 58. I'm not pro-AI, I'm pro-getting-home-by-six. Three of the tools they recommended got me there.",
    name: "Bill H.",
    role: "Superintendent",
    location: "Tulsa, OK"
  }
];

/* -------------------------------------------------------------
   SITE COPY — change headlines and big-picture copy here.
   ------------------------------------------------------------- */

window.SITE_COPY = {
  heroEyebrow: "EST. 2025 · INDEPENDENT · NO PAID PLACEMENTS",
  heroHeadline: "AI tools that pull their weight on a jobsite.",
  heroSub: "A working directory of AI software for estimating, field ops, safety, documentation, and back-office. Reviewed by people who've spent time on the job, not tech bros.",
  founderName: "— The Aggregate.Tools desk",
  newsletterPitch: "One email, every other Friday. New tools we tested, the ones we'd skip, and what's actually changing in the field."
};
