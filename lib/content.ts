export const trustStrip = [
  "EU WHISTLEBLOWER DIRECTIVE ALIGNED",
  "AES-256 IDENTITY VAULT",
  "NO LOGIN REQUIRED TO REPORT",
];

export const problemPoints = [
  {
    num: "01",
    text: "Employees don't trust anonymous hotlines run by outside vendors, so they stay silent instead of reporting.",
  },
  {
    num: "02",
    text: "HR handles cases across inboxes and spreadsheets, with no single record and no audit trail when it matters.",
  },
  {
    num: "03",
    text: "Two similar cases get two different outcomes, and that inconsistency is exactly what becomes the legal exposure.",
  },
];

export const steps = [
  {
    num: "01",
    title: "Report",
    desc: "Employees file anonymously or confidentially, with no login required.",
  },
  {
    num: "02",
    title: "Score & route",
    desc: "Severity and evidence completeness are scored separately and routed to the right handler.",
  },
  {
    num: "03",
    title: "Investigate",
    desc: "Handlers interview, gather evidence, and document findings in one workspace.",
  },
  {
    num: "04",
    title: "Close with a consistency check",
    desc: "The proposed action is checked against similar past cases before the case closes.",
  },
];

export const pipeline = [
  {
    name: "OPEN",
    dotColor: "#3E6B96",
    cases: [{ id: "RC-2026-8851", category: "Harassment", dept: "Operations" }],
  },
  {
    name: "ASSIGNED",
    dotColor: "#DB9B3A",
    cases: [
      { id: "RC-2026-8843", category: "Toxic Management", dept: "Finance" },
      { id: "RC-2026-8849", category: "Burnout", dept: "Engineering" },
    ],
  },
  {
    name: "IN REVIEW",
    dotColor: "#B3261E",
    cases: [{ id: "RC-2026-8842", category: "Retaliation", dept: "Customer Support" }],
  },
  {
    name: "CLOSED",
    dotColor: "#3B7A57",
    cases: [{ id: "RC-2026-8836", category: "Harassment", dept: "Engineering" }],
  },
];

export const features = [
  {
    icon: "eyeOff",
    title: "Anonymous by design",
    desc: "Case ID and passcode, no email or phone. Only a salted hash is stored.",
  },
  {
    icon: "split",
    title: "Dual scoring",
    desc: "Severity and evidence completeness scored separately, never merged into one number.",
  },
  {
    icon: "scale",
    title: "Consistency & Bias Engine",
    desc: "Flags when a proposed action deviates from your own history for similar cases, in either direction.",
  },
  {
    icon: "clock",
    title: "Compliance deadlines",
    desc: "Acknowledgment and feedback clocks computed per jurisdiction, tracked automatically.",
  },
  {
    icon: "lock",
    title: "Role-based access",
    desc: "Company Admin has zero case-content access by design. HR sees metadata. Handlers see only their assignments.",
  },
  {
    icon: "pulse",
    title: "Pulse Check",
    desc: "Optional proactive wellness surveys, aggregate-only to managers.",
  },
] as const;

export const consistencyChecklist = [
  "Compares proposed action against similar closed cases",
  "Flags leniency or severity outliers, never a verdict",
  "Reasoning is captured alongside the outcome",
];

export const anonymityChecklist = [
  "Anonymous mode stores no identity at all",
  "Confidential mode encrypts identity, HR can follow up",
  "Case ID and passcode replace any login",
];

export const deadlineChecklist = [
  "Acknowledgment and feedback clocks per jurisdiction",
  "Automatic countdowns on every case",
  "At-risk cases surfaced before deadlines pass",
];

export const deadlineRows = [
  {
    id: "RC-2026-8842",
    dept: "Customer Support",
    days: "2d",
    status: "In review",
    color: "#B3261E",
  },
  {
    id: "RC-2026-8843",
    dept: "Finance",
    days: "6d",
    status: "Assigned",
    color: "#3E6B96",
  },
  {
    id: "RC-2026-8836",
    dept: "Engineering",
    days: "0d",
    status: "Closed",
    color: "#3B7A57",
  },
];

export const aiDoesNot = [
  "Never decides guilt",
  "Never recommends discipline",
  "Never auto-closes a case",
  "Never determines policy violations",
];

export const pricingTiers = [
  {
    name: "Starter",
    range: "Up to 25 employees",
    price: "$59/mo",
    highlight: false,
    isDemo: true,
    ctaLabel: "Book a demo",
  },
  {
    name: "Growth",
    range: "26–200 employees",
    price: "$199/mo",
    highlight: true,
    isDemo: true,
    ctaLabel: "Book a demo",
  },
  {
    name: "Scale",
    range: "201–500 employees",
    price: "$549/mo",
    highlight: false,
    isDemo: true,
    ctaLabel: "Book a demo",
  },
  {
    name: "Enterprise",
    range: "500+ employees",
    price: "Contact sales",
    highlight: false,
    isDemo: false,
    ctaLabel: "Contact sales",
  },
];

export const pulseAddon = [
  { tier: "STARTER", price: "$10" },
  { tier: "GROWTH", price: "$29" },
  { tier: "SCALE", price: "$69" },
  { tier: "BUSINESS", price: "$129" },
];

export const frameworks = [
  {
    code: "AU",
    title: "Corporations Act 2001, Part 9.4AAA · Respect@Work",
    desc: "A compliant disclosure channel with protected-disclosure handling, plus Pulse Check for the proactive side of the positive duty.",
    span: "wide",
  },
  {
    code: "JP",
    title: "公益通報者保護法 · Power Harassment Prevention",
    desc: "A named handler on every case and enforced reporter confidentiality. The obligation applies to employers with 300+ employees, and a handler who discloses a reporter's identity faces a statutory penalty: exactly why identity sits behind the encrypted vault and split-key access.",
    span: "wide",
  },
  {
    code: "EU",
    title: "Whistleblower Directive 2019/1937",
    desc: "7-day acknowledgment and 3-month feedback clocks computed automatically at case creation.",
    span: "narrow",
  },
  {
    code: "UK",
    title: "Public Interest Disclosure Act",
    desc: "Reasonable-time tracking with a full timestamped audit trail on every case.",
    span: "narrow",
  },
  {
    code: "US",
    title: "SOX, Dodd-Frank, state law, EEOC",
    desc: "Configurable per-jurisdiction timelines and defensible documentation.",
    span: "narrow",
  },
];

export const faqItems = [
  {
    q: "Can employees really stay anonymous?",
    a: "Yes. In anonymous mode, no identity is ever stored: not an email, phone number, or reversible hash. Reporters get a case ID and passcode to check status or add evidence later, with no login and no trail back to them.",
  },
  {
    q: "What can HR see and not see?",
    a: "Access is role-based. HR sees case metadata: status, category, deadlines. Handlers see only the cases assigned to them. Company Admin has zero access to case content by design, regardless of seniority.",
  },
  {
    q: "Where is our data stored?",
    a: "Case data and the encrypted identity vault are stored in region-appropriate infrastructure with encryption at rest and in transit. Specific hosting details are covered in your contract and security documentation.",
  },
  {
    q: "Does the AI make decisions?",
    a: "No. AI structures intake, scores severity and evidence completeness separately, and flags patterns like inconsistent outcomes. It never decides guilt, recommends discipline, or closes a case — that stays with your investigators.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams are live within one to two weeks, covering policy upload, role configuration, and a short onboarding session with your HR and compliance leads.",
  },
  {
    q: "What happens to data if we leave?",
    a: "You can export your full case history at any time. On offboarding, we work with you to export remaining data and then delete it from our systems on an agreed schedule.",
  },
];

export const railSections = [
  { id: "hero", label: "REPORT" },
  { id: "problem", label: "PROBLEM" },
  { id: "how-it-works", label: "WORKFLOW" },
  { id: "features", label: "PLATFORM" },
  { id: "ai-trust", label: "TRUST" },
  { id: "pricing", label: "PRICING" },
  { id: "frameworks", label: "COMPLIANCE" },
  { id: "founding", label: "FOUNDING" },
  { id: "faq", label: "FAQ" },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "consistency-bias-engine-explained",
    title: "How the Consistency & Bias Engine actually scores a case",
    category: "Product",
    date: "2026-07-22",
    readTime: "6 min read",
  },
  {
    slug: "eu-whistleblower-directive-deadlines",
    title: "EU Whistleblower Directive: the 7-day and 3-month clocks, explained",
    category: "Compliance",
    date: "2026-07-08",
    readTime: "5 min read",
  },
  {
    slug: "anonymous-vs-confidential-reporting",
    title: "Anonymous vs. confidential reporting: what actually protects employees",
    category: "Trust & Safety",
    date: "2026-06-24",
    readTime: "4 min read",
  },
];
