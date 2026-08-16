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
  { id: "founding", label: "FOUNDING" },
  { id: "faq", label: "FAQ" },
];

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
];
