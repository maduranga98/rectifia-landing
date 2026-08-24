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
  {
    code: "KE",
    title: "Bribery Act 2016 · Data Protection Act 2019",
    desc: "Kenya has no dedicated whistleblower protection law yet - the Whistleblower Protection Bill has been reintroduced repeatedly since 2017 without passing. Section 9 of the Bribery Act 2016 still places a duty on public and private entities to maintain corruption-prevention procedures, and reporter identity is handled in line with the Data Protection Act 2019. This isn't legal advice - confirm current obligations with local counsel.",
    span: "wide",
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
    a: "No. AI structures intake, scores severity and evidence completeness separately, and flags patterns like inconsistent outcomes. It never decides guilt, recommends discipline, or closes a case - that stays with your investigators.",
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
  { id: "why-rectifia", label: "WHY US" },
  { id: "faq", label: "FAQ" },
];

export const whyRectifiaPoints = [
  {
    icon: "scale",
    title: "Every case checked against your own record",
    desc: "Closed cases become reference points. When a proposed action looks harsher or more lenient than similar past cases, it's flagged before the case closes - in either direction, never just one.",
  },
  {
    icon: "shield",
    title: "AI that never renders a verdict",
    desc: "Your own policy documents structure how each case is scored. The model flags gaps and patterns. It's explicitly instructed never to conclude that a policy was violated - that stays a human decision, always.",
  },
  {
    icon: "check",
    title: "Every flag comes with its reasoning",
    desc: "No black-box score. Investigators, and if it ever comes to it, regulators, can see exactly why a case was flagged, not just that it was.",
  },
] as const;

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-similar-hr-cases-get-different-outcomes",
    title: "Why Similar HR Cases Get Different Outcomes - and How to Fix It",
    category: "Product",
    date: "2026-08-12",
    readTime: "7 min read",
    excerpt:
      "Nobody decides to treat two similar cases differently on purpose. It happens because every case gets judged in isolation, without a memory of the fifty cases that came before it.",
    content: `Picture two cases that land on the same HR Director's desk six months apart.

Case one: a mid-level manager yells at a direct report in front of the team, once, documented by two witnesses. He gets a written warning.

Case two: a different manager does almost the exact same thing - same severity, similar evidence, comparable department. She gets a "verbal coaching conversation" that isn't even written down.

Nobody decided to treat these differently on purpose. Different investigator, different day, different mood in the room, maybe a manager who happened to be a top performer and got a slightly softer read. That's not malice. It's just what happens when every case gets judged in isolation, by a person, without a memory of the fifty cases that came before it.

And it's exactly the pattern that turns into a discrimination lawsuit eighteen months later, when someone in a protected class points out that the person who got the lighter treatment doesn't look like them.

## The problem nobody's software actually solves

Most workplace case management tools - NAVEX included - are built to help you handle one case well. Intake, routing, documentation, closure. That's useful, but it's solving for the wrong unit of analysis. A single case can be handled perfectly and your organization can still be dangerously inconsistent, because consistency isn't a property of one case. It's a property of the pattern across all of them.

The tools that exist today have no memory. Each investigation starts from zero.

## What we actually built

Every time a case closes in Rectifia, it gets stored as a reference point - category, severity score, evidence score, department, and the action that was taken. No names, no narrative, no identifying detail. Just the shape of the decision.

When a new case comes in that looks similar - same category, severity within a configurable band, comparable department tier - the system checks it against that history. If the action an investigator is about to take looks meaningfully harsher or more lenient than what similar cases got, it surfaces a flag: *this deviates from your typical pattern, in this direction, review before closing.*

That's it. That's the whole mechanism. It doesn't tell the investigator what to do instead. It doesn't say the current decision is wrong. It just makes the pattern visible at the one moment it actually matters - before the case closes, while the decision is still open.

A few things we were deliberate about:

- **It flags both directions.** Harsher than usual and more lenient than usual both get flagged. It would be easy to build a tool that only catches "too soft" - that's the version that looks good in a compliance deck but quietly encourages harsher discipline across the board. We didn't want that bias built into the bias checker.
- **It needs enough data before it says anything.** Fewer than five comparable reference cases and the system just says "insufficient data" instead of forcing a comparison on a thin sample. A flag based on two prior cases isn't a pattern, it's noise, and treating it like a pattern would erode trust in the flag fast.
- **The AI never recommends an action.** This is the same boundary that runs through the whole product - worth repeating because it's the part people assume must be different. The engine surfaces a deviation. A human decides what, if anything, to do about it. If your legal team asks whether the AI is making disciplinary decisions, the honest answer is no, and the codebase backs that up.

## Why this matters more than it sounds like it does

Most HR leaders I've talked to about this nod along and then say some version of "sure, but how often does that actually come up." Fair question. Here's the uncomfortable answer: you don't usually find out it came up until someone's employment lawyer finds it for you.

Inconsistent discipline is one of the more common threads in workplace discrimination claims, precisely because it's invisible from the inside. Every individual decision felt reasonable in the room. It's only when you line up ten closed cases side by side that the pattern shows up - and by then, it's evidence in a deposition, not a flag an investigator got to see before closing the file.

There's also a quieter cost that doesn't show up in litigation: trust. Employees talk to each other. When word gets around that two people got wildly different consequences for the same thing, the reporting channel itself loses credibility, whether or not anyone can prove bias formally. People stop reporting things they think won't be handled fairly. That's the actual failure mode a Consistency Engine is trying to prevent - not just the lawsuit, but the slow erosion of "this system actually works" that happens long before anyone sues.

## The honest limitation

New company, no history, no reference cases yet - the engine has nothing to compare against for a while. That's a real cold-start problem and we don't pretend otherwise. Early on, the value builds gradually as your own case history accumulates. Longer term, an opt-in, k-anonymity-protected industry benchmark pool could help newer companies get useful signal sooner - but that's a future idea, not something live today, and we won't claim it is.

If you're evaluating case management software and this is the first time you're hearing "consistency engine" as a category, that's because - as far as we can tell - nobody else in this market has built one. Worth asking your current vendor, or the next one you demo, what happens when two similar cases get two different outcomes. If the answer is "nothing, we don't track that," you've just found the gap.`,
  },
  {
    slug: "best-navex-alternative-2026",
    title: "Best NAVEX Alternative for Mid-Size Companies in 2026",
    category: "Comparison",
    date: "2026-08-05",
    readTime: "8 min read",
    excerpt:
      "NAVEX's EthicsPoint routinely runs $36,000–$120,000+ a year for a 500–5,000 employee company. Here's an honest answer on whether you need all of that, from a company building a direct competitor.",
    content: `If you're reading this, chances are a NAVEX rep just sent you a quote, and the number made you close the laptop for a minute.

You're not overreacting. For a company somewhere in the 500–5,000 employee range, NAVEX's EthicsPoint platform routinely lands between $36,000 and $120,000+ a year, before you even talk about the $5,000–$25,000 setup fee that shows up in the fine print. For a lot of HR and Compliance teams, that's not "a line item." That's a headcount.

So the question people actually ask isn't "is NAVEX good." It's "do I need all of that, or am I paying enterprise prices for a mid-market problem."

Here's an honest answer, from a company building a direct competitor.

## What you're actually paying for with NAVEX

NAVEX earned its reputation. Twenty-plus years in the market, a hotline that's been through every kind of audit, and a brand that Fortune 500 general counsel recognize on sight. If you're a 15,000-person multinational with a dedicated compliance department and a board that wants a name they've heard of, that reputation is worth something real.

But most of what NAVEX charges for is built for that company, not yours. Multi-tier approval workflows for a compliance org with five direct reports. Custom integrations you'll never configure. A sales process that assumes you have a procurement team standing by.

If you're an HR Director juggling this alongside twelve other things, you're paying for scale you don't have yet.

## Where we're honest about not being NAVEX

I'd rather tell you the gaps up front than have you find them in a demo.

- We don't have SOC 2 or ISO 27001 certification yet. It's on our roadmap, but if a certification is a hard requirement for your legal team today, we're not your vendor yet.
- We don't have twenty years of case studies. We have a small founding-customer group getting meaningful discounts specifically because they're helping us build that track record.
- We don't do training modules or third-party risk management. That's a deliberate choice - those are different products solving different problems, and bolting them onto a case management tool badly serves both. If you need a full GRC suite, NAVEX's breadth is a legitimate reason to stay.

None of that is a caveat buried at the bottom. It's the honest tradeoff you're making by choosing a newer, more focused vendor over an incumbent.

## What you get in exchange

**Pricing that doesn't require a phone call.** Under 500 employees, our pricing is published: Starter, Growth, and Scale bands from $59 to $549 a month, self-serve, no setup fee. At 500+, it's a per-head formula rather than an opaque enterprise quote - still no five-figure onboarding cost. You can build this into a budget without waiting on a sales cycle.

**Headcount-only billing, on principle, not as a marketing line.** We looked at per-case or per-submission pricing early on and ruled it out completely. Think about what that model actually rewards: a vendor who charges you more every time an employee reports something has a quiet incentive to make reporting harder, not easier. That's not a hypothetical risk - it's the exact kind of misalignment the EU Whistleblower Directive was written to prevent by tying obligations to headcount rather than volume. We priced Rectifia the same way the regulation thinks about it.

**A Consistency & Bias Checking Engine.** This is the one NAVEX doesn't have an equivalent for. When a case closes, it becomes a reference point - category, severity, evidence strength, department, action taken. When a similar case comes up later, the system flags it if the proposed action looks harsher or more lenient than what similar cases got. It doesn't tell an investigator what to do. It just says "this deviates from your own pattern, take a look before you close it." For an HR team trying to defend consistent treatment later - in a tribunal, in an audit, in a board question - that's not a nice-to-have. It's the thing that keeps "we handled it case by case" from turning into "we handled it inconsistently and now we have a discrimination claim."

**Policy-grounded scoring, with a hard boundary.** Our AI reads company policy to structure intake and flag severity and evidence gaps. It is explicitly instructed - in the actual prompt code, not just in marketing copy - to never conclude that a policy was violated. That determination stays with a human investigator, always. If a vendor tells you their AI "detects policy violations," ask them what happens the first time it's wrong. We built the product so that question doesn't come up.

## Who should actually switch

If you're under roughly 2,000 employees, don't yet have a dedicated compliance function, and NAVEX's quote is making your CFO ask hard questions - this is worth a look.

If you're a large, multi-jurisdiction enterprise that already has SOC 2 as a procurement gate and needs training/third-party-risk modules bundled in, NAVEX (or a comparably sized incumbent) is probably still the right call for now. We'd rather say that than pretend otherwise.

The switching decision usually comes down to one honest question: are you paying for capability you'll use, or for a name that makes the decision easier to defend internally? Both are legitimate reasons to buy something. Just be clear with yourself about which one you're paying for.`,
  },
  {
    slug: "consistency-bias-engine-explained",
    title: "How the Consistency & Bias Engine actually scores a case",
    category: "Product",
    date: "2026-07-22",
    readTime: "6 min read",
    excerpt:
      "\"Flags deviations, never a verdict\" sounds good on a features page. Here's the mechanism, end to end: two scores kept apart, closed cases as reference points, and a comparison that runs before a case closes.",
    content: `"Flags deviations, never a verdict" sounds good on a features page. It's a fair question to ask what it actually means in practice. Here's the mechanism, end to end.

## It starts with two numbers, kept apart

Every case in Rectifia gets a severity score and an evidence score. These are never merged into one number, on purpose. A severe allegation with thin evidence and a moderate allegation with a paper trail a mile long are different problems, and collapsing them into a single "priority score" would hide that difference from the person who has to act on it. The investigator sees both, separately, from the moment the case lands.

Neither score is a conclusion about what happened. They're inputs that route the case to the right handler and shape what the intake process asks for next. A high evidence gap on a serious allegation might trigger a follow-up question before the case even reaches a human. A low-severity, well-documented case might route straight to a handler without extra steps. Nothing here decides guilt. It decides queue position and next questions.

## Closed cases become reference points

Here's where it gets more interesting than a scoring rubric. When a case closes, it doesn't disappear into an archive. It becomes a reference point: category, severity score, evidence score, department, and whatever action was actually taken. No names, no narrative text, no identifying detail. Just the shape of the decision.

Over time, that builds into a record of how your organization has actually handled things - not what the policy says should happen, but what has actually happened, case by case, for real.

## The comparison happens before a case closes, not after

When a handler proposes closing a new case with a specific action, the engine looks for similar reference cases: same category, severity within a set range, comparable department tier. If there are enough of them to say something meaningful, it compares the proposed action against that pattern.

If the proposal is unusually lenient or unusually harsh relative to what similar cases got, it's flagged right there, before the case is finalized - with the reasoning attached, not just a red flag with no explanation. The handler sees why it was flagged, what the comparable cases looked like in aggregate, and can then make an informed call: proceed anyway, with the reasoning documented, or reconsider.

That's the whole mechanism. It's a mirror pointed at your own history, held up at the one moment a decision is still reversible.

## What it deliberately doesn't do

It doesn't tell anyone what action to take. It doesn't say "this is wrong." It doesn't rank investigators or track who's "too lenient" as a performance metric - that would turn a fairness tool into a surveillance tool, and it would make handlers defensive instead of thoughtful, which is the opposite of what you want when someone's job or reputation is on the line.

It also doesn't force a comparison when it doesn't have enough to go on. Below a minimum number of comparable reference cases, it simply says there isn't enough data yet, rather than manufacturing a pattern out of two prior cases that happen to share a category. A flag based on insufficient history is worse than no flag at all - it either gets ignored, or worse, it gets trusted when it shouldn't be.

And it flags in both directions. An organization that only gets warned when it's being too lenient will drift toward harsher discipline over time without meaning to, simply because that's the only signal it's ever getting. Flagging leniency and severity outliers equally is what keeps the tool honest.

## Why this exists at all

Two similar cases getting two different outcomes rarely happens because anyone decided to treat people unfairly. It happens because every case gets judged in isolation, by a person, without a memory of the fifty cases that came before it. Different investigator, different week, no visibility into the pattern.

That inconsistency is invisible from the inside - every individual decision felt reasonable when it was made. It only becomes visible when someone lines up ten closed cases side by side, and by then it's usually evidence in a dispute, not a flag someone got to see before the case closed. The Consistency & Bias Engine exists to surface that comparison at the point where it can still change the outcome, instead of six months later when it can only be explained after the fact.`,
  },
  {
    slug: "eu-whistleblower-directive-deadlines",
    title: "EU Whistleblower Directive: the 7-day and 3-month clocks, explained",
    category: "Compliance",
    date: "2026-07-08",
    readTime: "5 min read",
    excerpt:
      "Two deadlines most HR teams know exist and few have a reliable system for meeting. Missing either one isn't usually a decision anyone made - it's a report that sat in an inbox while everyone assumed someone else was handling it.",
    content: `The EU Whistleblower Directive (2019/1937) sets two deadlines that most HR teams know exist and few have a reliable system for actually meeting. Missing either one isn't usually a decision anyone made - it's a report that sat in an inbox for two weeks while everyone assumed someone else was handling it.

## The two clocks

**Seven days to acknowledge.** From the moment a report is filed, the organization has seven days to acknowledge receipt to the reporter. Not seven days to investigate, not seven days to respond substantively - seven days to say, in effect, "this reached us, and it's being handled." It's a low bar procedurally, and a surprisingly easy one to miss when reports arrive through inboxes, shared drives, or a manager who forwards something three days later because they weren't sure who should see it.

**Three months to provide feedback.** From acknowledgment, the organization has three months to give the reporter meaningful feedback on what's being done - not necessarily a final outcome, but a substantive update, not a form letter. This is the clock that tends to slip quietly, because three months feels like a long runway right up until it isn't.

Both clocks apply regardless of whether the report is anonymous. A reporter without a name or email address still has a right to that acknowledgment and that feedback - which is exactly why the case ID and passcode system exists: it gives an anonymous reporter a way to actually receive that update without ever creating an identifying trail back to them.

## Where these deadlines actually get missed

Almost never because someone decided to ignore them. Nearly always because:

- The report arrived somewhere without a clear owner - a shared inbox, a manager's forwarded email, a conversation that never got formally logged as a report.
- Nobody was tracking the clock in a way visible to more than one person, so the deadline lived in someone's head, and that someone was on leave when it came due.
- The three-month window looked comfortable in week one and became a scramble in week eleven, because there was no earlier checkpoint flagging that it was approaching.

None of these are compliance failures in the legal sense at the moment they happen. They become compliance failures four months later, when a reporter who never heard back escalates externally - which the Directive explicitly permits them to do once internal channels have failed to respond in time.

## How Rectifia tracks it

The acknowledgment and feedback clocks start automatically the moment a report is filed - not when someone remembers to start a timer, not when a case gets manually assigned. Every case shows its countdown directly, so a handler opening a case sees exactly how much runway is left, not a due date they have to cross-reference against a policy document.

Cases approaching either deadline are surfaced to HR before they lapse, not after. The difference between "we're going to miss this" and "we already missed this" is usually a matter of days of advance notice, and that's the entire point of building the countdown into the case itself rather than relying on someone's calendar reminder.

## It's not just an EU problem

The same underlying mechanism - a deadline clock computed automatically at case creation, tracked per case, surfaced before it lapses - is how Rectifia handles reasonable-time tracking under the UK's Public Interest Disclosure Act, the named-handler and confidentiality requirements under Japan's Whistleblower Protection Act, and the configurable timelines organizations need under US frameworks like SOX and state law. The EU Directive just happens to be the one with the most explicit, numeric deadlines, which makes it the clearest example of why a countdown beats a calendar reminder every time.

If your organization operates across more than one of these frameworks, the deadline that matters on any given case is whichever one is strictest - and that's computed automatically too, not something a handler has to figure out manually before every acknowledgment.

Rectifia is designed to support these obligations. It isn't legal advice - confirm your specific requirements with counsel.`,
  },
  {
    slug: "anonymous-vs-confidential-reporting",
    title: "Anonymous vs. confidential reporting: what actually protects employees",
    category: "Trust & Safety",
    date: "2026-06-24",
    readTime: "4 min read",
    excerpt:
      "Every workplace reporting tool says some version of \"your identity is protected.\" Almost none explain what that actually means technically, and the difference matters more than the marketing copy suggests.",
    content: `Every workplace reporting tool says some version of "your identity is protected." Almost none of them explain what that actually means technically, and the difference matters more than the marketing copy suggests.

## Two different promises, not one

Rectifia gives reporters a real choice at intake, not a single "anonymous-ish" setting: **anonymous** or **confidential**. These aren't two flavors of the same protection. They're two different technical guarantees.

**Anonymous means no identity is ever stored.** Not an email address, not a phone number, not even a hashed version of a name that HR could theoretically reverse later with enough motivation and access. There's simply nothing there to find, because nothing was ever collected. If someone subpoenaed the system, walked in with admin access, or asked HR directly who filed a report - the honest answer would be "we don't know, we never captured it."

**Confidential means identity is known, but locked down.** The reporter's identity is encrypted and stored behind a split-key vault, and it's visible only to the specific handler assigned to that case. This mode exists because sometimes a reporter genuinely needs follow-up contact - an investigator who needs to schedule an interview, or a reporter who wants to be kept in the loop by name. Confidential trades some of the absolute protection of anonymous mode for that direct line of communication, and the reporter is the one who decides that tradeoff, upfront, before they submit anything.

Both are legitimate. Neither is the "real" anonymity and the other a lesser version. They protect against different things.

## The problem anonymous mode alone doesn't solve

Full anonymity is airtight, but it comes with a real cost: if a reporter has no way to prove they're the same person who filed the original report, how do they check on it later, or add evidence they forgot the first time, without creating exactly the kind of identifying trail anonymity was supposed to avoid?

Rectifia's answer is a case ID and passcode, generated at submission, with no login and no email tied to it. The reporter writes it down, keeps it somewhere private, and uses it to come back later - check status, add a document, answer a follow-up question from the handler - without ever creating an account, an email trail, or anything that connects back to who they are. It replaces a login the same way a locker combination replaces a name tag.

## Why "we promise not to look" isn't the same as "we can't look"

A lot of reporting tools describe their anonymity as a policy commitment: we collect some identifying data, but we promise not to use it against you, or to only share it under specific conditions. That's a real protection, and it's better than nothing. But it's a different category of protection than a system that architecturally never had the data to begin with.

Anonymous mode in Rectifia isn't a policy promise sitting on top of collected data. There's no identity field to accidentally expose, no database column that could be misconfigured, no access log that could be subpoenaed for something that was never there. The protection isn't a rule someone has to follow correctly every time. It's a property of what the system does and doesn't store in the first place.

## What this looks like for the person filing the report

At the point of submission, the reporter sees the tradeoff stated plainly: anonymous means total protection but no direct follow-up channel beyond the case ID and passcode; confidential means the assigned handler can reach out by name, and that identity sits encrypted, accessible only to that one person, for that one case.

Most reporting decisions in a workplace aren't really about the form. They're about whether someone believes what happens after they hit submit. Naming the actual mechanism - what's stored, what isn't, and who can see what - is what makes that belief possible in the first place, instead of asking someone to just take a company's word for it.`,
  },
  {
    slug: "navex-pricing-2000-employees-2026",
    title: "NAVEX Pricing in 2026: What a 2,000-Employee Company Actually Pays",
    category: "Comparison",
    date: "2026-08-26",
    readTime: "6 min read",
    excerpt:
      "The quote doesn't show up on NAVEX's website, so most buyers walk into the sales call blind. Here's what the number actually looks like at 2,000 employees, and what the same headcount costs on a headcount-based model instead.",
    content: `NAVEX doesn't publish pricing. That's not an accident - enterprise software with a sales-led motion rarely does, because the number depends on what a rep thinks your budget can absorb. But it means most HR and Compliance leaders walk into their first call with no anchor at all, which makes it hard to know whether a quote is reasonable or padded.

Here's a real anchor, built from public benchmarking and vendor-comparison data across the compliance software market: for a company in the 500-5,000 employee range, EthicsPoint pricing routinely lands between $36,000 and $120,000+ a year, before the $5,000-$25,000 setup fee that tends to show up once you're past the discovery call. At 2,000 employees specifically, most companies land somewhere in the middle to upper end of that range once you add the modules incumbents typically bundle in - hotline access, case management, policy management, and often a training or third-party-risk module you didn't ask for but got quoted anyway.

## Why the number is so wide

A big part of NAVEX's range comes from what gets bundled, not just headcount. Multi-tier approval workflows, custom integrations, dedicated account management, and add-on modules for training or vendor risk all move the number - and a lot of mid-size buyers end up paying for modules built for a much larger compliance org than the one they actually run.

That's not a criticism of NAVEX's product. It's a genuinely broad platform, and if you need that breadth, the price reflects real engineering and support cost. The issue is narrower: if you're a 2,000-person company that needs case intake, investigation workflow, and consistent outcomes - not a full GRC suite - you may be paying enterprise price for mid-market use.

## What the same headcount looks like billed differently

Rectifia bills by employee headcount only, with no per-case or per-submission fee. At 2,000 employees, a real worked example looks like this: Core case management at roughly $2,200/month, plus the optional Pulse Check wellness add-on at roughly $400/month, comes to about $2,600/month - or $31,200 a year. No setup fee.

That's somewhere between 40% and 70% below the low end of the NAVEX range at the same headcount, and it's a number you can calculate yourself before ever getting on a call, because the pricing bands under 500 employees are published outright and the 500+ formula is disclosed on request rather than negotiated case by case.

## What you don't get at that price

Worth saying plainly: Rectifia doesn't have SOC 2 or ISO 27001 certification yet, doesn't have twenty years of enterprise case studies, and doesn't bundle training or third-party-risk modules - those are deliberately out of scope, not missing by oversight. If your procurement process has a certification gate today, or you need a single vendor for training plus case management plus vendor risk, that's a legitimate reason to stay with an incumbent.

## The actual question to ask on your next NAVEX call

Not "can you discount this," which mostly just moves the number within a range the rep already had in mind. Ask instead: "what specifically in this quote is priced for my headcount, and what's priced for a compliance function three times the size of mine?" If the answer is vague, that's usually where the padding lives.`,
  },
  {
    slug: "navex-alternative-australia-respect-at-work",
    title: "NAVEX Alternative for Australian Employers: Respect@Work Compliance",
    category: "Comparison",
    date: "2026-09-02",
    readTime: "6 min read",
    excerpt:
      "Australia's positive duty changed what 'having a reporting channel' means. Most whistleblowing platforms sold into the Australian market were built for the EU Directive first and retrofitted - here's what that gap actually looks like.",
    content: `Since the positive duty amendments to the Sex Discrimination Act took effect, Australian employers carry a proactive obligation: not just responding to complaints, but taking reasonable and proportionate measures to eliminate sexual harassment, sex discrimination, and related conduct before it happens. That's a meaningfully different obligation than "have a hotline," and it changes what buyers in Australia should actually be evaluating software against.

## Where the gap shows up

Most enterprise whistleblowing platforms, NAVEX included, were built with the EU Whistleblower Directive as the primary compliance frame - 7-day acknowledgment, 3-month feedback, designated impartial handler. Those obligations are real and worth supporting, but they're not the same shape as Australia's requirements. The Corporations Act's Part 9.4AAA sets out specific whistleblower policy content requirements for public companies, large proprietary companies, and corporate trustees. The positive duty sits alongside that as a separate, broader obligation focused on prevention, not just response.

A platform configured EU-first tends to surface EU-shaped compliance widgets - acknowledgment countdowns, feedback deadlines - without necessarily reflecting what an Australian compliance officer actually needs to demonstrate: a documented, proportionate system of prevention and response that a regulator or board would recognize as reasonable.

## What Rectifia does differently for AU-configured companies

Jurisdiction is a first-class setting, not an afterthought. A company operating in Australia selects AU in its jurisdiction configuration, and the compliance layer - deadline logic, policy references, the language used in acknowledgment messages - reflects that instead of defaulting to EU assumptions and hoping they're close enough.

The Consistency & Bias Checking Engine is directly relevant here too, even though it wasn't built specifically for Australian law. A recurring theme in positive-duty guidance is that inconsistent handling of similar complaints undermines an organization's ability to show it's actually eliminating the conduct, not just processing individual reports. A system that flags when a proposed action deviates from how similar cases were handled before - without dictating the outcome - directly supports the kind of consistent, defensible pattern a positive duty framework expects to see.

## What we're not claiming

Rectifia is not a law firm, and this isn't legal advice. Whether a specific configuration satisfies Part 9.4AAA's policy content requirements or the positive duty's "reasonable and proportionate" standard for your organization specifically is a question for employment counsel, not a SaaS blog post. What we can say honestly: the jurisdiction configuration exists, it's not a bolt-on retrofit of EU logic, and it's something worth asking any vendor about directly - "is your compliance logic AU-native, or is it EU logic with an Australia label on it?"

## Why this matters for the buying decision

If you're an Australian HR Director evaluating NAVEX or a similar EU-first incumbent, the honest question isn't just price - it's whether the platform's compliance assumptions were built around your legal framework or adapted to it after the fact. That's a harder thing to verify in a demo than a pricing sheet, but it's worth asking the vendor directly to walk through how AU-specific settings actually change system behavior, not just which checkbox gets ticked in onboarding.`,
  },
  {
    slug: "navex-alternative-japan-whistleblower-act",
    title: "NAVEX Alternative for Japan: 300+ Employee Whistleblower Act Compliance",
    category: "Comparison",
    date: "2026-09-09",
    readTime: "5 min read",
    excerpt:
      "Japan's Whistleblower Protection Act creates a specific role - the designated handler - that most Western-built platforms have no concept of. Here's what that requirement actually means and how software should handle it.",
    content: `Japan's amended Whistleblower Protection Act introduced an obligation that doesn't have a clean equivalent in the EU Directive or US frameworks: companies with more than 300 employees must designate specific individuals - 従事者 (jujisha), commonly translated as "designated handlers" - who are legally bound to confidentiality around whistleblower reports, with criminal penalties attached to breach.

This isn't a policy nicety. It's a named-individual, legally-defined role, and most whistleblowing platforms built primarily for the US or EU market simply have no data model for it, because their home markets don't require anything like it.

## Why this trips up EU/US-first platforms

A platform built around EU Directive logic has a concept of "designated impartial handler" too, but it's a looser, procedural requirement - not a discrete legal role with individual criminal liability attached to confidentiality breach. Retrofitting that distinction after the fact usually means either ignoring the Japanese-specific requirement entirely, or bolting on a workaround that doesn't actually track who was designated, when, or under what legal basis - which defeats the purpose if a company ever needs to demonstrate compliance to a regulator.

## How this is handled structurally

Rectifia includes a dormant Designated Handler register that activates specifically when JP appears in a company's configured jurisdictions array. It's not a generic "assign a role" feature relabeled for Japan - it exists because the legal requirement exists, and it stays inactive (and out of the way) for companies that don't operate in Japan, rather than cluttering every company's settings with a field that's only relevant to one market.

The 300-employee trigger matters here too. A company just under that threshold doesn't need the designated handler mechanism yet; a company that crosses it does, and jurisdiction configuration is the kind of setting that should be revisited as headcount changes, not set once at onboarding and forgotten.

## The honest caveat

This is genuinely under-served territory in the market - most vendors selling into APAC are US or EU platforms with a language pack, not a system that actually models Japan's specific legal structure. That said, we'd rather say plainly what this is and isn't: it's a data model and workflow that reflects the legal requirement as we understand it, not a substitute for review by counsel familiar with Japanese labor and whistleblower law, particularly given how recently the amended Act took effect and how compliance expectations may continue to develop.

## What to ask if you're evaluating vendors for a Japan-based or Japan-operating entity

Ask directly: "does your platform have a concept of designated handler as a distinct legal role, or is 'handler' just your generic case-assignee field?" If it's the latter, you're not getting Japan-specific compliance support - you're getting a Western product with a jurisdiction dropdown that doesn't change much underneath.`,
  },
  {
    slug: "whistleblowing-software-pricing-models-compared",
    title: "Whistleblowing & Case Management Software Pricing Compared (2026)",
    category: "Pricing",
    date: "2026-09-16",
    readTime: "7 min read",
    excerpt:
      "Per-seat, per-case, flat enterprise quote, headcount-based - the pricing model a vendor picks tells you almost as much about their incentives as their feature list does. Here's how the major approaches actually work.",
    content: `Before comparing quotes, it's worth understanding that whistleblowing and case management software isn't priced one consistent way across the market. The model a vendor uses shapes their incentives, and it's worth understanding before you're deep in a sales cycle and the framing has already been set by their pitch.

## The four models you'll actually encounter

**Per-case or per-submission pricing.** You pay based on how many reports come in - sometimes a base fee plus overage, sometimes tiered bands. This is more common among smaller or newer vendors trying to keep entry pricing low. The structural problem: it creates a financial incentive, even if unintentional, for a vendor's product decisions to nudge toward fewer reports rather than more. A reporting channel that quietly gets harder to use costs the vendor less to run. That's the opposite of what a compliance product should incentivize.

**Per-seat or per-user pricing.** Common in general-purpose case management and ticketing tools adapted for compliance use. The problem here is definitional: whistleblowing reports aren't filed by "users" in the seat-license sense - they're filed by any employee, anonymously in many cases, who may never log in as a named user at all. Per-seat pricing on a product like this usually means only counting HR/investigator seats, which doesn't scale with the actual population the compliance obligation covers.

**Opaque enterprise quoting.** The NAVEX model - no published pricing, a sales call, a quote shaped by company size, perceived budget, and bundled modules. This isn't inherently dishonest, but it means every buyer is negotiating from an information deficit, and the final number can vary significantly for comparable headcounts depending on how the sales conversation went.

**Headcount-based flat pricing.** You pay based on total employee count, regardless of how many reports get filed or how many staff seats use the admin side. This is the model most closely aligned with how compliance regulations themselves think about scope - the EU Whistleblower Directive's own obligations trigger based on employee headcount, not report volume.

## Why the model matters more than the number

A per-case model and a headcount-based model can produce similar dollar figures for a given company in a given year and still represent very different long-term incentives. If your case volume doubles next year - which might mean your reporting culture is actually working - a per-case vendor's bill doubles too, and somewhere in a renewal conversation that creates quiet pressure that shouldn't exist in a product meant to encourage reporting.

## Where Rectifia sits

Headcount-only, published self-serve bands under 500 employees (roughly $59-$549/month across three tiers), and a disclosed - not negotiated case-by-case - per-head formula above that. No per-case fee, ever. This was a deliberate choice, not a default: case-volume billing was evaluated early on and rejected specifically because of the incentive problem above, and because it's structurally misaligned with how the EU Directive itself scopes the obligation.

## What to actually ask a vendor

"What happens to my bill if reporting volume goes up 40% next year?" If the honest answer is "nothing changes," you're looking at a headcount or flat-enterprise model. If the answer involves recalculating a tier or triggering an overage, you're looking at a model where more employees speaking up costs the vendor's customer more money - worth sitting with for a second before you sign.`,
  },
  {
    slug: "ai-flag-inconsistent-discipline-without-deciding",
    title: "How AI Can Flag Inconsistent Discipline Without Making the Decision",
    category: "Product",
    date: "2026-09-23",
    readTime: "6 min read",
    excerpt:
      "The line between 'AI flags a pattern' and 'AI makes a decision' sounds philosophical until you're the general counsel asking where it's actually drawn in the code. Here's the boundary, and why it's not a marketing position.",
    content: `Every vendor in this category will tell you their AI "doesn't make decisions." Almost none of them will tell you exactly where that boundary lives - which prompt, which function, which line of code prevents the model from crossing it. That vagueness is usually the tell that the boundary is a talking point, not an engineering constraint.

## Why this distinction is a legal question, not a UX preference

If an AI system concludes that a policy was violated, or effectively recommends a disciplinary action, that output starts to look like it's making an employment decision - and employment decisions made or substantially influenced by an opaque model are a genuine legal exposure, independent of whether the model happened to be right. The moment a tool crosses from "here is relevant information" to "here is what you should do," the human in the loop stops being a decision-maker and starts being a rubber stamp, whether anyone intended that or not.

## Where the line actually sits in Rectifia

The scoring engine that processes a new case is explicitly instructed - in the system prompt that governs it, not just in how the feature is described - to treat company policy documents as reference material only. It's told directly never to conclude that a policy was violated. It produces a severity score and an evidence score, kept separate on purpose, and it can flag gaps ("this allegation lacks a specific date" or "no witnesses have been named yet") - but it does not, and structurally cannot, output "this violates section 4.2 of the harassment policy."

The Consistency & Bias Checking Engine, which compares a proposed action against how similar closed cases were handled, follows the same rule from a different angle. It surfaces a deviation: "five comparable cases exist, the typical action was a written warning, the proposed action is termination." It does not say which action is correct. A human investigator sees the comparison and makes the call, and that call - not the flag - is what gets documented as the actual decision.

## What this looks like when it's wrong

Suppose the engine flags a proposed termination as "harsher than the typical pattern" and the investigator proceeds with the termination anyway, with good reason - maybe this case has an aggravating factor the historical pattern didn't capture. That's fine. The system isn't broken when a human overrides it; it's working as designed. The flag did its job by surfacing the deviation for conscious review. What would actually be broken is a system that either silently suppressed the flag, or treated an override as something requiring justification back to the AI - at that point it's stopped being an advisory tool and started being a gatekeeper.

## The honest limit of "AI never decides"

This boundary protects against a specific failure mode - AI substituting its judgment for a human's on questions of guilt or consequence. It does not mean the AI has no influence at all. A severity score does shape which case gets attention first. A flagged evidence gap does shape what question gets asked next. Those are real effects, and pretending an AI system that touches a workflow has zero influence on outcomes would be its own kind of dishonesty. The claim isn't "the AI has no effect." It's narrower and more defensible: "the AI never concludes what happened or what should be done about it." That's the boundary worth asking any vendor to show you in their actual prompts, not just their marketing page.`,
  },
  {
    slug: "severity-vs-evidence-scoring-workplace-complaints",
    title: "Severity Score vs. Evidence Score: Why Merging Them Is a Mistake",
    category: "Product",
    date: "2026-09-30",
    readTime: "5 min read",
    excerpt:
      "A single 'priority score' is easier to build and easier to explain in a demo. It's also the wrong design, because severity and evidence strength answer two completely different questions.",
    content: `A lot of intake scoring systems - not just in this category - collapse everything into one number: a priority score, a risk score, a triage score. It's an understandable design choice. One number is easy to sort by, easy to explain in a demo, easy to build a dashboard around. It's also the wrong choice for workplace misconduct intake, because severity and evidence strength are answering two genuinely different questions, and merging them hides information the person handling the case actually needs.

## The two questions, kept separate

**Severity asks: how serious is what's being described, if true?** A single yelling incident and a pattern of sustained retaliation over months are not the same severity, independent of how well-documented either one is.

**Evidence asks: how substantiated is this account right now?** Named witnesses, dates, documents, prior complaints on record - all evidence signal, independent of how serious the underlying allegation is.

These two axes move independently, and the four combinations they produce require genuinely different handling.

## Why the combinations matter

A high-severity, high-evidence case - serious allegation, strong documentation - is usually the clearest to route: it needs a skilled investigator, quickly, and the evidence base means the investigation has somewhere real to start.

A high-severity, low-evidence case is the one that gets mishandled most often by systems that merge scores into one number, because a merged score might rank it lower than it deserves simply because the evidence isn't there yet - when the right response is usually the opposite: prioritize it precisely because the potential severity is high, and use early follow-up questions to build out the evidence before the trail goes cold.

A low-severity, high-evidence case is often exactly what it looks like - a minor, well-documented issue that can move through a lighter-weight process without an investigator spending disproportionate time on it.

A low-severity, low-evidence case is genuinely the hardest to route confidently, and honestly, some of these are just vague or preliminary reports that need a clarifying follow-up before either score means much - which is a legitimate outcome, not a system failure.

## What a merged score would actually hide

Picture a single "priority score" that happens to land two very different cases at the same number: one is a serious allegation still light on evidence, the other is a moderate issue that's extremely well documented. A merged score treats them as equivalent priorities. An investigator working from that single number has no way to tell, without opening both case files, which one needs an urgent follow-up question and which one is ready to move straight to interviews. Keeping the scores separate means that distinction is visible before anyone has to dig.

## The tradeoff of keeping them separate

It's genuinely a little harder to build a simple sorted queue view around two numbers instead of one - "sort by priority" is a cleaner UI pattern than "sort by severity, then check evidence gaps." That's a real cost, and it's worth naming rather than pretending the two-score design is free. The reason it's still the right call: the alternative optimizes for a clean dashboard at the expense of the actual judgment call an investigator has to make. Software that makes triage look simpler than it is doesn't make the underlying decision easier - it just moves the complexity somewhere less visible, usually onto the investigator who has to reconstruct the missing distinction by opening every case file anyway.`,
  },
  {
    slug: "respect-at-work-positive-duty-2026",
    title: "Respect@Work Positive Duty: What HR Directors Must Have in Place in 2026",
    category: "Compliance",
    date: "2026-10-07",
    readTime: "6 min read",
    excerpt:
      "The positive duty shifted Australian employers from 'respond well when something is reported' to 'proactively prevent it from happening.' That's a different set of systems, not just a different mindset.",
    content: `Since Australia's positive duty amendments took effect, employers carry a proactive legal obligation under the Sex Discrimination Act: take reasonable and proportionate measures to eliminate, as far as possible, sexual harassment, sex-based harassment, discrimination, and related conduct - not just handle complaints well after the fact.

That's a meaningfully different standard than "have a reporting channel and respond to what comes in." Prevention-focused obligations require evidence of a system, not just a policy document sitting in an employee handbook.

## What "reasonable and proportionate" tends to require in practice

Guidance from the Australian Human Rights Commission and subsequent regulatory commentary points toward several recurring elements employers are expected to demonstrate: leadership accountability for the issue, risk identification specific to the actual workplace (not a generic template), a functioning and genuinely accessible reporting mechanism, consistent response and consequence management, and ongoing monitoring rather than a one-time policy rollout.

This is not legal advice, and the specific standard that applies to a given organization depends on its size, resources, and risk profile - that determination should come from employment counsel, not a vendor blog post. What follows is a look at where case management software fits into that broader picture, not a substitute for a compliance assessment.

## Where a reporting platform genuinely helps, and where it doesn't

A reporting and case management system supports two of those elements directly: an accessible reporting mechanism, and consistent response and consequence management. It cannot, by itself, satisfy risk identification, leadership accountability, or genuine culture change - those require action outside any software product, and any vendor implying otherwise is overselling.

**Accessibility** is about more than "a form exists." It means an anonymous option that's actually anonymous, not anonymous-in-name with an email field quietly attached; a way to submit and follow up on a report without needing to log in or be identified; and category-specific intake that doesn't force every report into a generic "other" bucket that loses the specifics a proportionate response would need.

**Consistency** is where a system like Rectifia's Consistency & Bias Checking Engine becomes directly relevant to a positive duty conversation, even though it wasn't purpose-built as an AU compliance feature. Demonstrating that similar conduct is met with similar consequences over time is a core part of showing an organization is genuinely eliminating a pattern rather than handling isolated incidents inconsistently. A mechanism that flags when a proposed action deviates meaningfully from how comparable cases were handled - without dictating what the "right" action is - is one concrete way to generate that evidence over time, case by case.

## What HR Directors should actually be able to produce

If asked by a board, a regulator, or an external auditor: can you show a documented, accessible reporting channel; a record of response times against internal or regulatory benchmarks; and evidence that similar complaints receive similar consequences? A case management system that stores category, severity, department, and outcome as structured data - rather than buried in free-text case notes - is what makes that evidence producible on short notice rather than requiring someone to manually reconstruct it from a dozen closed files.

## The honest gap

No software product satisfies the positive duty's prevention requirement on its own - risk assessment, training, leadership engagement, and culture work sit outside what any reporting platform does. Treat this as one input to a compliance program, evaluated with counsel, not the compliance program itself.`,
  },
  {
    slug: "corporations-act-part-9-4aaa-whistleblower-policy",
    title: "Corporations Act Part 9.4AAA: Whistleblower Policy Requirements for Australian Companies",
    category: "Compliance",
    date: "2026-10-14",
    readTime: "6 min read",
    excerpt:
      "Public companies, large proprietaries, and corporate trustees in Australia are required to have a whistleblower policy with specific content - not just any policy that mentions whistleblowing. Here's what has to actually be in it.",
    content: `Part 9.4AAA of the Corporations Act 2001 requires certain Australian entities - public companies, large proprietary companies, and corporate trustees of registrable superannuation entities - to have a whistleblower policy in place, and it isn't satisfied by any document that happens to use the word "whistleblower." The Act specifies content requirements, and a policy missing them isn't compliant regardless of intent.

## What has to be in the policy

Broadly, a compliant policy needs to cover: the protections available to eligible whistleblowers under the Act, how and to whom a disclosure can be made (including to a company officer, senior manager, auditor, actuary, or a regulator like ASIC or APRA directly), how the company will support whistleblowers and protect them from detriment, how investigations will be conducted, how the company will ensure fair treatment of any employee mentioned in a disclosure, how the policy is made available to officers and employees, and any other matters prescribed by regulation.

This is a genuinely specific list - not "have a hotline and a general anti-retaliation statement." Companies that adapt a generic global whistleblowing policy without checking it against Part 9.4AAA specifically are one of the more common gaps we hear about from Australian compliance officers evaluating case management vendors.

## Who counts as an "eligible whistleblower" - and why it's broader than employees

The Act's protections extend beyond current employees: former employees, officers, contractors, suppliers, associates, and in some cases their relatives, can qualify as eligible whistleblowers if they make a disclosure that meets the Act's requirements. A reporting system built only around "employee submits a report while logged into a company system" misses a meaningful slice of who's actually entitled to protection under the Act.

This is part of why an anonymous, no-login reporting path matters structurally, not just as a nice-to-have UX choice - a former contractor or supplier representative reporting misconduct has no company account to log into in the first place. If a system architecturally requires authentication to file a report, it's quietly excluding a category of people the law is written to protect.

## What software can and can't do about this requirement

A case management platform doesn't write your whistleblower policy for you, and any vendor implying their software alone makes you Part 9.4AAA compliant is overstating what a reporting tool does. What software can do: provide the accessible, no-login reporting mechanism the policy needs to actually describe accurately, maintain the documented investigation trail the policy commits to following, and support the confidentiality and anti-detriment protections in practice - encrypted identity storage, restricted access to identifying information, and an audit trail of who accessed what and why.

## Where Rectifia's jurisdiction configuration fits

When AU is selected in a company's jurisdiction configuration, the reporting flow, access model, and documentation trail are built around obligations like these - not retrofitted from an EU Directive template with Australian terminology swapped in. That said, whether your specific policy document itself satisfies Part 9.4AAA's content requirements is a question for the lawyer drafting or reviewing it, not for the software underneath it.

## The practical takeaway

If you're a public company, large proprietary company, or corporate trustee evaluating reporting software, ask your legal team to review your actual policy document against Part 9.4AAA's requirements directly - separately from any vendor evaluation. Then ask any vendor whether their reporting mechanism actually supports the full range of eligible whistleblowers the Act protects, including people who were never issued a company login.`,
  },
  {
    slug: "japan-whistleblower-protection-act-300-employees",
    title: "Japan's Whistleblower Protection Act: What Changes at 300 Employees",
    category: "Compliance",
    date: "2026-10-21",
    readTime: "5 min read",
    excerpt:
      "The 300-employee line in Japan's amended Whistleblower Protection Act isn't a soft recommendation - it's the threshold where a specific legal obligation, with criminal liability attached, becomes mandatory.",
    content: `Japan's amended Whistleblower Protection Act (公益通報者保護法) sets a specific headcount threshold that changes what's legally required, not just what's recommended: companies with more than 300 employees are required to establish an internal reporting system and designate specific individuals - 従事者 (jujisha), often translated as designated handlers - to receive and handle reports. Companies below that threshold are only under a best-efforts obligation to do the same.

That distinction matters more than it might first appear, because "required" versus "best efforts" changes what a compliance officer needs to be able to demonstrate, and what happens if they can't.

## What crossing 300 employees actually obligates a company to do

Establish an internal whistleblowing system that's genuinely accessible to workers. Designate specific individuals as handlers of whistleblower reports - not a department in the abstract, but named people with the role formally assigned. Take appropriate measures to protect whistleblowers from retaliatory treatment. And critically: the designated handlers themselves are bound by confidentiality obligations with criminal penalties attached to unauthorized disclosure of a whistleblower's identity.

That last point is the part that surprises companies used to Western compliance frameworks. In the EU Directive or under PIDA, confidentiality is a strong expectation with civil and reputational consequences for getting it wrong. In Japan's framework, for a designated handler specifically, it's a criminal matter.

## Why this changes what a company needs from its reporting system

A system that treats "who can see this report" as a loose permissions question - a role called "investigator" that any manager could theoretically be assigned to - doesn't reflect the legal weight of the designated handler role once a company crosses 300 employees. The people in that role need to be formally, trackably designated, and the system granting them access needs to reflect that designation specifically, not just a generic "case handler" permission that happens to be used for Japan too.

## How this is handled structurally in Rectifia

The Designated Handler register exists as a distinct feature, dormant until JP appears in a company's configured jurisdictions array. When activated, it isn't a relabeled version of the generic case-handler role - it exists specifically because this is a distinct legal designation with its own confidentiality weight, and conflating it with a general-purpose "investigator" permission would understate what the role actually carries with it under Japanese law.

For a company approaching the 300-employee threshold, this is also a point worth revisiting jurisdiction configuration proactively rather than waiting until headcount crosses the line and the obligation becomes mandatory rather than best-efforts.

## What this isn't

This is a description of a legal structure as we understand it, not legal advice, and it isn't a substitute for review by counsel with expertise in Japanese labor and whistleblower law - particularly given how recently these amendments took effect and how implementation guidance may continue to evolve. If your company operates in Japan and is approaching or has crossed the 300-employee threshold, that's a conversation to have with counsel directly, informed by - not replaced by - what your reporting software supports.`,
  },
  {
    slug: "how-whistleblowing-software-pricing-works-2026",
    title: "How Whistleblowing Software Pricing Actually Works in 2026",
    category: "Pricing",
    date: "2026-10-28",
    readTime: "5 min read",
    excerpt:
      "Short answer: most whistleblowing and case management platforms price by per-seat, per-case, opaque enterprise quote, or flat headcount. Here's what each one means for your actual bill as your organization changes.",
    content: `Most whistleblowing and workplace case management software is priced one of four ways: per-seat (charged per HR/investigator login), per-case (charged per report filed, sometimes with a base fee plus overage), opaque enterprise quoting (no published pricing, negotiated per deal), or flat headcount-based pricing (charged per total employee, regardless of report volume or admin seats). Most enterprise incumbents, NAVEX included, use opaque enterprise quoting. Rectifia uses headcount-based pricing exclusively.

## Why the model matters more than any single quote

A quote is a snapshot. A pricing model is what happens to your bill over time as your organization changes - more employees, more reports, a merger, a bad year for workplace culture that (hopefully temporarily) increases report volume. The model determines whether those changes cost you more, and if so, for which reason.

**Per-case pricing** means your bill moves with report volume. If your reporting culture improves and people start actually using the channel, your bill goes up specifically because more people spoke up - which is a strange thing to financially penalize in a compliance product.

**Per-seat pricing** means your bill moves with how many HR or investigator accounts you provision, which usually undercounts the actual population the system needs to serve, since reporters typically aren't "seats" in the licensing sense.

**Opaque enterprise quoting** means your bill is set once, in a negotiation, and tends to move only at renewal - often upward, since renewal negotiations happen from a position where switching costs have already been sunk into implementation and training.

**Headcount-based pricing** means your bill moves only with total employee count - the same metric regulatory frameworks like the EU Whistleblower Directive use to scope obligations in the first place, which makes it a genuinely aligned way to price a compliance product rather than an arbitrary choice.

## What a real number looks like

At 2,000 employees, industry-standard enterprise quoting for a platform like NAVEX's EthicsPoint typically lands between $36,000 and $120,000+ a year, plus a $5,000-$25,000 setup fee. On Rectifia's headcount-based model, the same 2,000-employee company lands around $2,600/month - roughly $31,200/year, including the optional Pulse Check module - with no setup fee, and the bill doesn't change based on how many reports come in that year.

## Under 500 employees specifically

Rectifia publishes self-serve pricing outright for companies under 500 employees: Starter (up to 25 employees) at $59/month, Growth (26-200) at $199/month, and Scale (201-500) at $549/month. No sales call required to see the number. Above 500 employees, pricing moves to a disclosed per-head formula rather than case-by-case negotiation - still calculable, just not published as a static table given how many variables scale into it at that size.

## The question that actually matters

Before comparing two quotes, ask: "under this pricing model, what happens to my bill if [reports double / headcount grows 20% / we add a new department]?" That answer tells you more about whether a vendor's incentives are aligned with yours than the sticker price on the quote in front of you.`,
  },
  {
    slug: "why-we-dont-bill-per-case",
    title: "Why We Don't Bill Per Case (and Why That Should Worry You About Vendors Who Do)",
    category: "Pricing",
    date: "2026-11-04",
    readTime: "5 min read",
    excerpt:
      "Case-count billing was on the table early in Rectifia's pricing design. We ruled it out on purpose, for a reason that has nothing to do with margins and everything to do with what the incentive actually rewards.",
    content: `Case-count or per-submission billing was genuinely on the table early in Rectifia's pricing design - it's a common model in this category, and it's easier to price aggressively at the low end because it scales revenue with usage. We ruled it out deliberately, and it's worth explaining why, because the reasoning isn't really about margins. It's about what the incentive actually rewards.

## The incentive problem, stated plainly

If a vendor's revenue increases every time an employee files a report, that vendor now has a quiet financial interest in report volume - and the easiest way to influence report volume, even unintentionally, is through product decisions that make reporting slightly less frictionless than it could be. Nobody has to consciously decide "let's make this harder to use." It shows up more subtly: a feature that would meaningfully improve reporting ease gets deprioritized because it might increase support cost per report, or a pricing tier structure quietly discourages a company from encouraging more reporting because it would trigger a higher band.

None of this requires bad faith. It's just what misaligned incentives do over time, slowly, in a hundred small product and roadmap decisions that individually seem reasonable.

## Why this is more than a hypothetical for a compliance product specifically

In most SaaS categories, usage-based pricing is fine, even good - it aligns cost with value delivered. Workplace misconduct reporting is a genuine exception, because the "usage" being priced is an employee choosing to speak up about harassment, retaliation, or burnout. A pricing model that makes that choice more expensive for the employer, even indirectly, sits uncomfortably close to the exact suppression dynamic that whistleblower protection law exists to prevent.

There's also a legal-discoverability angle worth naming: if a company is ever asked, in litigation or regulatory review, whether its reporting vendor had any financial interest in report volume, "no, we pay a flat rate regardless of how many people report" is a materially better answer than having to explain a per-case fee structure to opposing counsel.

## Why headcount-based billing is the aligned alternative

Employee headcount is a number that doesn't move based on employee behavior. It changes when the company hires or shrinks - a decision the employer makes, not a decision an individual employee makes by choosing to report or stay silent. Pricing on headcount means Rectifia's revenue is completely indifferent to whether report volume goes up or down in a given year, which is exactly the indifference a compliance vendor should have.

It's also the same logic regulatory frameworks already use. The EU Whistleblower Directive scopes its own obligations by employee headcount, not by report volume - the law itself treats headcount as the meaningful unit of organizational scale for this purpose. Pricing the same way isn't a coincidence; it's aligning the business model with how the underlying obligation is actually structured.

## What to ask a vendor who bills per case

Not "why do you price this way" - most will have a reasonable-sounding answer about aligning cost with usage. Ask instead: "if our report volume doubled next year because our reporting culture improved, what would that do to our bill, and does that concern you the way it concerns me?" The answer tells you whether the incentive problem has been thought through, or just priced around.`,
  },
  {
    slug: "whistleblowing-software-cost-500-employees",
    title: "What Does Whistleblowing Software Cost for a 500-Employee Company?",
    category: "Pricing",
    date: "2026-11-11",
    readTime: "4 min read",
    excerpt:
      "Short answer: on a headcount-based model, roughly $549/month. On an enterprise-quoted incumbent, the number is rarely published and typically runs into five figures annually. Here's the actual breakdown.",
    content: `A 500-employee company sits right at an interesting line: too large for the very cheapest self-serve tiers most vendors offer, but well below the size where enterprise incumbents like NAVEX typically become cost-competitive with newer, headcount-priced platforms. Here's what the real numbers look like at that specific size.

## On a published, headcount-based model

At 500 employees, Rectifia's Scale tier - the top self-serve band before pricing moves to a per-head formula - runs $549/month, or $6,588/year, with no setup fee and no sales call required to find that number. That covers the full case management platform: all four v1 categories (harassment, toxic management, retaliation, burnout), AI intake scoring, the Consistency & Bias Checking Engine, and the anonymous case thread. Adding the optional Pulse Check wellness module at this size runs an additional $129/month under the Business tier of that add-on, bringing the combined total to roughly $678/month, or about $8,136/year.

## On an opaque enterprise-quote model

NAVEX and comparable incumbents don't publish a number at this size, but industry benchmarking places companies in the 500-employee range toward the lower-to-middle part of the broader $36,000-$120,000+ annual range typically seen across the 500-5,000 employee band, plus a setup fee that commonly runs $5,000-$25,000 depending on implementation scope. Even conservatively, that puts a 500-employee company's likely annual cost at several times what a headcount-priced platform charges for comparable core functionality.

## Why the gap is this wide at exactly this size

500 employees is large enough to trigger genuine compliance obligations - it's near or above thresholds in several jurisdictional frameworks - but still small enough that a dedicated, multi-person compliance function often doesn't exist yet. Enterprise incumbents tend to price for the compliance department they assume you'll eventually build, not the one you actually have today. A headcount-based model prices for the company you are right now, and scales up automatically as you grow, without a renegotiation.

## What's genuinely not included at this price

Worth stating directly: no SOC 2 or ISO 27001 certification yet, no dedicated account manager, no bundled training or third-party-risk modules. If any of those are a hard procurement requirement today, that's a legitimate reason an enterprise incumbent is still the right fit, even at a meaningfully higher price - certifications and account management are real costs, and a lean, focused platform doesn't have to pretend otherwise to be worth considering.

## The practical takeaway

If you're a 500-employee company evaluating vendors, ask for a number before the demo, not after. A vendor that can quote you a firm figure in the first email, without a discovery call, is telling you something about how their pricing actually works - and it's usually the same vendor whose incentives are easiest to understand upfront.`,
  },
  {
    slug: "what-is-workplace-misconduct-case-management-software",
    title: "What Is a Workplace Misconduct Case Management Platform? (And How It's Different from a Whistleblower Hotline)",
    category: "Product",
    date: "2026-11-18",
    readTime: "6 min read",
    excerpt:
      "\"Whistleblower hotline\" and \"case management platform\" get used interchangeably, but they describe different amounts of the actual work. A hotline gets a report in the door. Everything after that is a different problem.",
    content: `"Whistleblower hotline" and "case management platform" get used interchangeably in a lot of vendor marketing, but they describe genuinely different scopes of what actually happens after someone reports a problem. Worth being precise about the difference, because it changes what you should be evaluating a vendor on.

## What a hotline actually is

A hotline - phone, web form, or app - is an intake mechanism. Its job is to get a report from an employee into a system, ideally anonymously if the employee wants that, and hand it off to a human. That's genuinely useful and often the first thing an organization needs. But intake is maybe 10-15% of the actual work a workplace misconduct report generates. Once a report lands, someone has to categorize it, route it to the right investigator, track compliance deadlines, manage an evidence trail, conduct interviews, document findings, decide on and record an action, and be able to produce a defensible history of all of it later if questioned.

A pure hotline product typically stops at intake and hands the rest to email, spreadsheets, and institutional memory - which is exactly where consistency, documentation, and deadline tracking tend to quietly fall apart.

## What "case management" actually adds

A case management platform treats the report as the start of a structured, trackable case, not a message that gets forwarded and then lives in someone's inbox. That means: a persistent case record with status, category, and assigned handler; a communication thread that serves as the actual audit trail rather than a separate log someone has to maintain manually; compliance deadline tracking computed automatically from the case's creation date and the company's jurisdiction; and a final structured report when the case closes, rather than a folder of scattered emails and notes.

## Where Rectifia sits, specifically

Rectifia is case-based, not hotline-based, by architecture - the report is the first event in a case's lifecycle, not a standalone message. Every report gets a dual AI score (severity and evidence, kept separate), gets routed to a handler with automatic conflict-of-interest checking, generates a live compliance countdown based on jurisdiction, and produces a closed-case report with the full timeline attached. The anonymous Case ID and passcode system means even a fully anonymous report has a persistent case identity a reporter can return to - it's not a one-way message into a void.

## The differentiator that isn't just "we have a case management layer"

Plenty of vendors now describe themselves as case management platforms, not just hotlines - that distinction alone isn't unique anymore. What's still genuinely uncommon is the Consistency & Bias Checking Engine: when a case closes, it becomes a reference point, and when a similar case comes up later, the system flags if the proposed action deviates meaningfully from how comparable cases were handled before. That's a capability that requires case management to already exist as infrastructure - you can't compare patterns across cases you never structured as cases in the first place. It's the layer above case management, not a replacement for it.

## The practical test

If you're evaluating a vendor and want to know whether you're looking at a hotline with a case-management label, or the real thing: ask what happens to a report six months after it's filed and closed. If the honest answer is "it's in the archive, searchable by keyword," that's hotline-plus-storage. If the answer is "it's a reference point the system uses to check consistency on future similar cases," that's case management doing the work the category name implies.`,
  },
  {
    slug: "conflict-of-interest-auto-detection",
    title: "Conflict-of-Interest Auto-Detection: Why Manual Routing Isn't Enough",
    category: "Product",
    date: "2026-11-25",
    readTime: "5 min read",
    excerpt:
      "A report that gets routed to the accused person's own manager, or worse, to the accused person themselves, isn't a hypothetical edge case - it's what manual routing eventually produces at scale. Here's how automatic detection closes that gap.",
    content: `A report that ends up routed to the accused person's own manager - or, in a smaller org, to someone close enough to the accused that impartiality is genuinely in question - isn't a hypothetical edge case. It's what manual routing eventually produces at scale, especially in organizations where the same small group of people wears multiple hats: department head, case handler, occasional company admin covering for someone on leave.

Nobody sets out to route a case to a conflicted person. It happens because routing rules are usually built around category and department, and nobody's cross-checking every assignment against every accused person's actual working relationships in real time.

## What the check actually does

When a case is created, the routing logic doesn't just match category and department to find a handler - it checks whether the accused person, based on the department and role information captured in the questionnaire, matches the department and role of any Case Handler or Company Admin who would otherwise receive the case. If there's a match, the system doesn't route it to that person and hope someone catches the conflict later. It sets the case status to needs manual assignment and notifies the Super Admin directly - metadata only, no case content included in that notification, so the conflict gets surfaced without exposing sensitive details to someone who doesn't need them yet.

## Why this has to be automatic, not a step in a checklist

A step in a checklist relies on someone remembering to do it, every time, under time pressure, for cases that might not obviously look conflicted at first glance - the connection between "accused person" and "person about to receive this case" isn't always visible unless someone specifically checks. Automatic detection doesn't rely on anyone remembering. It runs the same check on every case, every time, without fatigue or a bad week making it skip a step.

## What this deliberately doesn't do yet

Worth being direct about the current scope: this is a v1 mechanism built around department and role matching, not a full conflict-of-interest management system. It catches the case where an accused person's department and role overlaps with a handler or admin who'd otherwise get the case - it doesn't yet catch more subtle conflicts, like a handler who has an undisclosed personal relationship with the accused outside the org chart. A dedicated External Reviewer workflow for more complex conflict-of-interest scenarios is a known gap, planned for a later phase, not something the current system claims to solve.

## Why the manual fallback matters as much as the detection

Auto-detection without a functioning fallback is just automatic rejection with nowhere for the case to go. The Super Admin notification exists specifically so a flagged case doesn't sit invisibly in a "needs manual assignment" state indefinitely - someone with appropriate authority and no case-content visibility gets alerted that a routing decision needs a human judgment call, and can make that assignment deliberately instead of by default.

## The broader point

Conflict-of-interest risk in workplace investigations is rarely dramatic - it's usually structural and mundane, the natural result of small organizations where the same people fill multiple roles. A system that only catches conflicts a careful human happens to notice will miss the boring, structural ones most often. Automatic detection exists specifically to catch the boring case, every time, not just the obvious one.`,
  },
  {
    slug: "toxic-management-vs-harassment-categorization",
    title: "Toxic Management vs. Harassment: How Categorization Affects Investigation Outcomes",
    category: "Product",
    date: "2026-12-02",
    readTime: "5 min read",
    excerpt:
      "The category a report gets filed under shapes almost everything downstream - which questions get asked, how the case gets scored, who it gets routed to. Getting the category wrong at intake has consequences that show up much later.",
    content: `The category a report gets filed under isn't just a label for a dashboard filter. It shapes almost everything downstream: which questions the intake questionnaire asks, how the AI scoring engine evaluates severity, which department or specialist the case routes to, and even how the case gets compared later for consistency checking. Getting the category wrong or leaving it too vague at intake has consequences that show up much later, when a case that should have been handled one way was investigated another.

## Why toxic management and harassment get confused

They overlap in real workplaces more than the category names suggest. A manager who consistently belittles a direct report in front of the team could reasonably be described as either "harassment" or "toxic management," depending on framing, and a reporter filling out a form under time pressure and emotional stress isn't necessarily thinking about which legal or policy category best fits their experience - they're describing what happened to them.

The distinction matters anyway, because the two categories usually warrant different investigative approaches. Harassment questionnaires are built around identifying protected characteristics, specific incidents, and patterns that map to legal definitions with real regulatory weight. Toxic management questionnaires focus on behavior patterns, management style, and impact on team functioning - things that may not meet a harassment threshold at all but still represent a genuine, actionable workplace problem.

## Why toxic management asks for department and role, not names

One deliberate design choice: the toxic management questionnaire captures the involved manager's department and role, not their name. This isn't a limitation - it's intentional, for two reasons. First, it supports pattern detection across the organization without requiring reporters to definitively identify someone by name if they're not fully comfortable doing so yet. Second, and more importantly, it keeps the door open for genuine anonymity even in confidential-adjacent scenarios: a reporter can describe a pattern of toxic behavior from "the department head in Finance" without that description alone identifying them as the source, the way naming a specific person in a small department sometimes would.

## What happens when a case straddles both categories

In practice, reports often surface elements of both during the investigation, regardless of which category they were originally filed under. A toxic management report might reveal, once an investigator digs in, conduct that also meets a harassment threshold. This is exactly why category assignment shapes the starting point, not the final scope - the investigator's judgment during the actual investigation is what determines the real handling, not the checkbox selected at intake. The category determines which questions get asked first and which specialist sees it soonest; it doesn't lock the case into a single lens for its entire lifecycle.

## Why this matters for the Consistency Engine specifically

The Consistency & Bias Checking Engine compares closed cases within the same category, on the reasoning that a harassment case and a toxic management case - even with superficially similar facts - often warrant genuinely different typical actions, and comparing across categories would produce noisy, misleading pattern comparisons. A toxic management case shouldn't be flagged as "unusually lenient" just because a differently-categorized harassment case with surface similarities received harsher consequences. Accurate categorization at intake is what keeps that later comparison meaningful instead of comparing cases that only look alike on the surface.

## The practical takeaway for reporters and HR teams

If you're a reporter unsure which category fits, that's a legitimate reason to lean toward describing what happened as specifically as possible rather than forcing it into the category that sounds most serious - the intake process and the investigator are equipped to reclassify or expand scope as the actual facts emerge, and an accurate starting description serves the case better than a category chosen for how it might read.`,
  },
];
