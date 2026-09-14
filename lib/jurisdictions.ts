import { frameworks } from "@/lib/content";

export type JurisdictionObligation = {
  label: string;
  detail: string;
};

export type Jurisdiction = {
  /** Framework code from `frameworks` in lib/content.ts. */
  code: string;
  slug: string;
  /** The single target keyword this URL owns, from the list in app/layout.tsx. */
  keyword: string;
  /** Extra keyword phrases for this page only - never the global 12-keyword array. */
  keywords: string[];
  region: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Framework title, sourced from `frameworks`. */
  title: string;
  /** Framework blurb, sourced from `frameworks` - used as the page lede. */
  lede: string;
  /** Expanded body, in the same lightweight markdown the blog uses. */
  body: string;
  obligations: JurisdictionObligation[];
  /** Slugs of existing blog posts that cover this jurisdiction in depth. */
  relatedPosts: string[];
};

const frameworkByCode = new Map(frameworks.map((f) => [f.code, f]));

function fromFramework(
  code: string,
  rest: Omit<Jurisdiction, "code" | "title" | "lede">,
): Jurisdiction {
  const framework = frameworkByCode.get(code);
  if (!framework) {
    throw new Error(`No framework in lib/content.ts for code "${code}"`);
  }
  return { code, title: framework.title, lede: framework.desc, ...rest };
}

export const jurisdictions: Jurisdiction[] = [
  fromFramework("EU", {
    slug: "eu-whistleblower-directive-compliance-software",
    keyword: "EU Whistleblower Directive compliance",
    keywords: ["EU Whistleblower Directive compliance", "EU whistleblowing software"],
    region: "European Union",
    h1: "Whistleblowing software built for the EU Whistleblower Directive",
    metaTitle: "EU Whistleblower Directive Compliance Software",
    metaDescription:
      "Whistleblowing software for Directive 2019/1937: 7-day acknowledgment and 3-month feedback clocks computed automatically on every case.",
    body: `Directive 2019/1937 sets two deadlines most HR teams know exist and few have a reliable system for meeting. Rectifia computes both at case creation, so the clock lives on the case rather than in someone's calendar.

## The two clocks

**Seven days to acknowledge.** From the moment a report is filed, the organization has seven days to acknowledge receipt to the reporter. Not seven days to investigate - seven days to confirm the report reached someone and is being handled.

**Three months to provide feedback.** From acknowledgment, the organization has three months to give the reporter meaningful feedback on what is being done. It does not have to be a final outcome, but it does have to be substantive.

Both clocks apply regardless of whether the report is anonymous. A reporter without a name or email address still has a right to that acknowledgment and that feedback, which is why every report gets a case ID and passcode: an anonymous reporter can collect the update without ever creating an identifying trail back to themselves.

## Where the deadlines actually get missed

Almost never because someone decided to ignore them. Nearly always because the report arrived somewhere without a clear owner, because nobody was tracking the clock in a way visible to more than one person, or because the three-month window looked comfortable in week one and became a scramble in week eleven. None of those look like compliance failures at the moment they happen - they become compliance failures months later, when a reporter who never heard back escalates externally, which the Directive explicitly permits once internal channels have failed to respond in time.

## What changes above 1,000 employees

Past roughly 1,000 employees, the six-box checklist - anonymous reporting, 7-day acknowledgment, two-way communication, 3-month feedback, retaliation-protection documentation, GDPR-compliant retention - is table stakes, and the real differentiator moves somewhere the checklist does not reach.

- Multiple investigators across departments and regions means two similar complaints can get different outcomes without anyone doing anything wrong.
- Conflict of interest stops being rare once more people hold case-handler or admin-adjacent roles, so it needs to be caught automatically rather than recognized by an investigator.
- The Directive's own "designated impartial handler" language has to mean something operational, not a line in a policy nobody re-reads at intake.
- Documentation burden rises with headcount, not just case volume: "we investigated case by case" is not itself evidence of fair treatment. A documented pattern is.

## How Rectifia handles it

Acknowledgment and feedback clocks start automatically the moment a report is filed. Every case shows its countdown directly, and cases approaching either deadline are surfaced to HR before they lapse rather than after. Where an organization operates under more than one framework, the deadline that applies to a given case is whichever one is strictest, computed automatically rather than worked out by hand before every acknowledgment.`,
    obligations: [
      {
        label: "7 days",
        detail: "Acknowledge receipt of the report to the reporter.",
      },
      {
        label: "3 months",
        detail: "Provide substantive feedback on what is being done with the report.",
      },
      {
        label: "Anonymous reports",
        detail:
          "Both clocks apply. Case ID and passcode let an anonymous reporter receive updates without identifying themselves.",
      },
      {
        label: "Designated impartial handler",
        detail:
          "Follow-up must be handled by a designated, impartial person or department - enforced structurally, not declared in a policy.",
      },
    ],
    relatedPosts: [
      "eu-whistleblower-directive-deadlines",
      "eu-directive-compliance-large-employers-1000-plus",
      "multi-jurisdiction-compliance-not-multi-language",
    ],
  }),
  fromFramework("UK", {
    slug: "uk-whistleblowing-software-pida-compliance",
    keyword: "UK whistleblowing software PIDA compliance",
    keywords: ["UK whistleblowing software PIDA compliance", "PIDA compliance software"],
    region: "United Kingdom",
    h1: "UK whistleblowing software for employers working under PIDA",
    metaTitle: "UK Whistleblowing Software for PIDA Compliance",
    metaDescription:
      "PIDA protects workers from dismissal and detriment after a protected disclosure. Software that produces the documentation trail a defence needs.",
    body: `The Public Interest Disclosure Act 1998 protects workers who make a qualifying, public-interest disclosure from dismissal or detriment as a result. It does not, in its text, mandate that employers run a specific reporting channel. That gap - between what PIDA actually requires and what most vendor content implies it requires - is worth being precise about before evaluating software against it.

## What PIDA actually does

PIDA creates two protections: an automatically unfair dismissal claim where the reason, or principal reason, for dismissal was a protected disclosure, with no qualifying service period and uncapped compensation; and a detriment claim, available from day one of employment, covering anything short of dismissal - demotion, increased scrutiny, hostile treatment a workplace failed to prevent.

Once a worker shows they made a protected disclosure and then suffered a detriment or dismissal, the burden shifts to the employer to show the disclosure played no part in that treatment. That burden-shifting mechanic is the part most compliance content undersells. Every adverse action following a protected disclosure needs a documented, independently defensible rationale that would hold up if the disclosure were removed from the picture entirely.

## Where a reporting channel helps, and where it stops

A channel that makes anonymous or confidential disclosure genuinely accessible does real work: the harder it is to identify who disclosed, the harder it is - practically, not just legally - to retaliate, and the fewer detriment claims arise in the first place.

What a channel alone does not produce is the documentation trail that wins a PIDA dispute after the fact: a demonstrable, consistent pattern showing that whatever happened to the worker afterward - a performance review, a restructuring decision, a disciplinary action - would have happened regardless of the disclosure, because it matches how comparable situations were handled for people who never disclosed anything.

## How Rectifia handles it

Reasonable-time tracking runs on every case with a full timestamped audit trail: messages, evidence, manual investigator log entries, and any Consistency & Bias Engine flags along with how they were resolved. The compliance risk under PIDA is not really in the intake - it is in whether the organization can show consistent treatment afterward, on demand, without reconstructing it from memory.`,
    obligations: [
      {
        label: "Protected disclosure",
        detail:
          "A qualifying, public-interest disclosure triggers protection - no minimum service period for either claim.",
      },
      {
        label: "Dismissal",
        detail:
          "Automatically unfair where the disclosure was the reason or principal reason, with uncapped compensation.",
      },
      {
        label: "Detriment",
        detail:
          "Covers anything short of dismissal, available from day one of employment.",
      },
      {
        label: "Burden of proof",
        detail:
          "Once detriment follows a disclosure, the employer must show the disclosure played no part in it.",
      },
    ],
    relatedPosts: [
      "uk-pida-compliance-growing-employers",
      "anonymous-vs-confidential-reporting",
      "why-similar-hr-cases-get-different-outcomes",
    ],
  }),
  fromFramework("AU", {
    slug: "australia-respect-at-work-positive-duty-software",
    keyword: "Australia Respect@Work positive duty software",
    keywords: [
      "Australia Respect@Work positive duty software",
      "Corporations Act Part 9.4AAA whistleblower policy",
    ],
    region: "Australia",
    h1: "Respect@Work positive duty software for Australian employers",
    metaTitle: "Respect@Work Positive Duty Software (Australia)",
    metaDescription:
      "Australia's positive duty demands prevention, not just response. Reporting and case management built for Respect@Work and Part 9.4AAA.",
    body: `Since Australia's positive duty amendments took effect, employers carry a proactive legal obligation under the Sex Discrimination Act: take reasonable and proportionate measures to eliminate, as far as possible, sexual harassment, sex-based harassment, discrimination, and related conduct - not just handle complaints well after the fact.

That is a meaningfully different standard from "have a reporting channel and respond to what comes in." Prevention-focused obligations require evidence of a system, not a policy document sitting in a handbook.

## What "reasonable and proportionate" tends to require in practice

Guidance from the Australian Human Rights Commission and subsequent regulatory commentary points toward several recurring elements: leadership accountability, risk identification specific to the actual workplace rather than a generic template, a functioning and genuinely accessible reporting mechanism, consistent response and consequence management, and ongoing monitoring rather than a one-time policy rollout.

Software supports two of those directly - the accessible reporting mechanism, and consistent response and consequence management. It cannot, by itself, satisfy risk identification, leadership accountability, or culture change, and any vendor implying otherwise is overselling.

## Part 9.4AAA: the policy has specified content

Part 9.4AAA of the Corporations Act 2001 requires certain Australian entities - public companies, large proprietary companies, and corporate trustees of registrable superannuation entities - to have a whistleblower policy in place, and it is not satisfied by any document that happens to use the word "whistleblower." A compliant policy needs to cover the protections available to eligible whistleblowers, how and to whom a disclosure can be made (including to a company officer, senior manager, auditor, actuary, or a regulator such as ASIC or APRA directly), how the company will support whistleblowers and protect them from detriment, how investigations will be conducted, how fair treatment of any employee mentioned in a disclosure is ensured, and how the policy is made available.

The Act's protections also extend beyond current employees: former employees, officers, contractors, suppliers, associates, and in some cases their relatives can qualify as eligible whistleblowers. A system that architecturally requires a company login to file a report quietly excludes a category of people the law is written to protect - which is why the anonymous, no-login reporting path is structural here rather than a UX preference.

## What an HR director should be able to produce

Asked by a board, a regulator, or an external auditor: a documented, accessible reporting channel; a record of response times against internal or regulatory benchmarks; and evidence that similar complaints receive similar consequences. Storing category, severity, department, and outcome as structured data - rather than buried in free-text case notes - is what makes that evidence producible on short notice.`,
    obligations: [
      {
        label: "Positive duty",
        detail:
          "Take reasonable and proportionate measures to eliminate harassment and discrimination, as far as possible.",
      },
      {
        label: "Part 9.4AAA policy",
        detail:
          "Public companies, large proprietary companies, and corporate trustees of RSEs must hold a policy with specified content.",
      },
      {
        label: "Eligible whistleblowers",
        detail:
          "Former employees, officers, contractors, suppliers, associates and in some cases relatives can qualify - not just current staff.",
      },
      {
        label: "Evidence of a system",
        detail:
          "Accessible channel, response times against benchmarks, and consistent consequences for comparable conduct.",
      },
    ],
    relatedPosts: [
      "respect-at-work-positive-duty-2026",
      "corporations-act-part-9-4aaa-whistleblower-policy",
      "navex-alternative-australia-respect-at-work",
    ],
  }),
  fromFramework("JP", {
    slug: "japan-whistleblower-protection-act-compliance",
    keyword: "Japan whistleblower protection act compliance",
    keywords: [
      "Japan whistleblower protection act compliance",
      "designated handler 従事者 compliance software",
    ],
    region: "Japan",
    h1: "Whistleblower Protection Act compliance for employers in Japan",
    metaTitle: "Japan Whistleblower Protection Act Compliance",
    metaDescription:
      "Above 300 employees, Japan's Whistleblower Protection Act requires designated handlers bound by confidentiality with penalties attached.",
    body: `Japan's amended Whistleblower Protection Act (公益通報者保護法) sets a headcount threshold that changes what is legally required, not just what is recommended. Companies with more than 300 employees must establish an internal reporting system and designate specific individuals - 従事者 (jujisha), often translated as designated handlers - to receive and handle reports. Companies below that threshold are under a best-efforts obligation to do the same.

"Required" versus "best efforts" changes what a compliance officer needs to be able to demonstrate, and what happens if they cannot.

## What crossing 300 employees obligates a company to do

- Establish an internal whistleblowing system that is genuinely accessible to workers.
- Designate specific individuals as handlers of whistleblower reports - named people with the role formally assigned, not a department in the abstract.
- Take appropriate measures to protect whistleblowers from retaliatory treatment.
- Keep designated handlers bound by confidentiality obligations, with criminal penalties attached to unauthorized disclosure of a whistleblower's identity.

That last point is the part that surprises companies used to Western frameworks. Under the EU Directive or PIDA, confidentiality is a strong expectation with civil and reputational consequences for getting it wrong. In Japan's framework, for a designated handler specifically, it is a criminal matter.

## Why this changes what a reporting system needs

A system that treats "who can see this report" as a loose permissions question - an "investigator" role any manager could theoretically be assigned - does not reflect the legal weight of the designated handler role once a company crosses 300 employees. The people in that role need to be formally and trackably designated, and access has to follow that designation rather than a generic case-handler permission that happens to be reused for Japan.

## How Rectifia handles it

The Designated Handler register exists as a distinct feature, dormant until JP appears in a company's configured jurisdictions. It is not a relabelled version of the generic case-handler role: it exists because this is a distinct legal designation carrying its own confidentiality weight. Reporter identity sits behind the encrypted vault with split-key access, so identity exposure is a deliberate, logged act rather than a side effect of a broad permission.

For a company approaching 300 employees, jurisdiction configuration is worth revisiting before headcount crosses the line and the obligation stops being best-efforts.`,
    obligations: [
      {
        label: "300+ employees",
        detail:
          "Internal reporting system and designated handlers become mandatory rather than best-efforts.",
      },
      {
        label: "従事者 (designated handlers)",
        detail:
          "Named individuals with the role formally assigned, not a department in the abstract.",
      },
      {
        label: "Confidentiality",
        detail:
          "Designated handlers face criminal penalties for unauthorized disclosure of a reporter's identity.",
      },
      {
        label: "Anti-retaliation",
        detail: "Appropriate measures to protect whistleblowers from retaliatory treatment.",
      },
    ],
    relatedPosts: [
      "japan-whistleblower-protection-act-300-employees",
      "navex-alternative-japan-whistleblower-act",
      "anonymous-vs-confidential-reporting",
    ],
  }),
  fromFramework("US", {
    slug: "us-sox-compliance-reporting-hotline",
    keyword: "US SOX compliance reporting hotline",
    keywords: ["US SOX compliance reporting hotline", "SOX Section 301 complaint procedure"],
    region: "United States",
    h1: "SOX compliance reporting hotline and investigation workflow",
    metaTitle: "US SOX Compliance Reporting Hotline Software",
    metaDescription:
      "SOX Section 301 needs an anonymous complaint procedure; Section 806 turns on what happens next. Hotline plus a defensible investigation trail.",
    body: `Sarbanes-Oxley's whistleblower provisions get cited constantly in vendor pitches, but the two sections that actually matter are narrower than the marketing suggests, and neither is primarily about the reporting channel.

## What SOX actually requires

**Section 301** requires public company audit committees to establish procedures for receiving, retaining, and treating complaints about accounting, internal accounting controls, or auditing matters - and for confidential, anonymous submission by employees of concerns about questionable accounting or auditing.

**Section 806** is the anti-retaliation provision. An employee of a public company, or of certain contractors and subsidiaries, who provides information about conduct they reasonably believe constitutes securities fraud, shareholder fraud, or a violation of SEC rules is protected from retaliation, with a private right of action and the possibility of reinstatement and back pay.

Neither section applies to private companies directly, though many adopt similar procedures voluntarily or because investors and insurers expect it - which is why "does SOX apply to us" is worth answering carefully rather than assuming a private company is entirely off the hook.

## Where a hotline satisfies SOX, and where it does not

A compliant Section 301 procedure is a real, checkable requirement: audit committee oversight, a way to submit anonymously, retention of records. A basic reporting channel can satisfy that box.

What SOX's text does not specify - and where companies actually get exposed - is what happens after the report lands. Section 806 retaliation claims turn on whether adverse action taken against a reporter afterward can be explained by something other than the report itself. That is not a reporting-channel question. It is a documentation and consistency question: was this person's outcome consistent with how comparable situations were handled for people who never filed a report?

## How Rectifia handles it

Per-jurisdiction timelines are configurable rather than hard-coded to a single framework, so a US programme can run its own response benchmarks alongside EU or UK obligations elsewhere in the group. Retention, audit trail, and outcome data are structured, so the pattern that answers a Section 806 dispute can be produced rather than reconstructed. The Consistency & Bias Checking Engine flags when a proposed outcome deviates from how comparable cases were handled - it never decides the case.`,
    obligations: [
      {
        label: "Section 301",
        detail:
          "Audit committee procedures for receiving, retaining and treating complaints, including confidential anonymous submission.",
      },
      {
        label: "Section 806",
        detail:
          "Anti-retaliation protection with a private right of action, reinstatement and back pay.",
      },
      {
        label: "Scope",
        detail:
          "Applies to public companies and certain contractors and subsidiaries, not private companies directly.",
      },
      {
        label: "Defensible record",
        detail:
          "Configurable per-jurisdiction timelines and structured outcome data across cases, not just intake logging.",
      },
    ],
    relatedPosts: [
      "sox-whistleblower-requirements-beyond-a-hotline",
      "what-is-workplace-misconduct-case-management-software",
      "ai-flag-inconsistent-discipline-without-deciding",
    ],
  }),
  fromFramework("KE", {
    slug: "kenya-workplace-misconduct-reporting",
    keyword: "Kenya workplace misconduct reporting",
    keywords: ["Kenya workplace misconduct reporting", "Bribery Act 2016 reporting procedures"],
    region: "Kenya",
    h1: "Workplace misconduct reporting for organizations in Kenya",
    metaTitle: "Kenya Workplace Misconduct Reporting Software",
    metaDescription:
      "Kenya has no dedicated whistleblower law yet. What the Bribery Act 2016 and Data Protection Act 2019 mean for a reporting channel today.",
    body: `Kenya has no dedicated whistleblower protection law yet - the Whistleblower Protection Bill has been reintroduced repeatedly since 2017 without passing. That makes the obligation picture different from the EU, UK, Australia, Japan, or the US, and worth stating plainly rather than dressing up as an equivalent regime.

## What does apply today

**Bribery Act 2016, section 9** places a duty on public and private entities to put in place procedures appropriate to their size and circumstances for preventing bribery and corruption. A reporting route that people will actually use is one component of that, not the whole of it.

**Data Protection Act 2019** governs how reporter identity and case data are handled: lawful basis, minimisation, and controls on who can access identifying information.

## What that means for a reporting channel

Because statutory whistleblower protection is not yet in place, the practical protection a reporter has is largely whatever the organization builds. That puts more weight, not less, on the technical side of anonymity: a reporting path that requires no login and no identifying field, a case ID and passcode for follow-up so a reporter can keep a two-way conversation open without revealing who they are, and identity storage behind the encrypted vault with split-key access so disclosure is a deliberate, logged act.

## Where Rectifia fits

The same case model used for the other configured jurisdictions applies here - structured categories, severity and evidence scored separately, a timestamped audit trail, and consistency checks across closed cases. For groups operating in Kenya alongside other jurisdictions, the strictest applicable deadline across the configured set is what the case is held to, which in practice means a Kenyan operation inside a multi-jurisdiction group often runs on tighter internal benchmarks than local law alone would require.

Because the statutory position here is the least settled of the jurisdictions we support, this page is deliberately narrower than the others. Confirm current obligations with local counsel before relying on any of it.`,
    obligations: [
      {
        label: "No dedicated law",
        detail:
          "The Whistleblower Protection Bill has been reintroduced repeatedly since 2017 without passing.",
      },
      {
        label: "Bribery Act 2016, s.9",
        detail:
          "Duty on public and private entities to maintain corruption-prevention procedures.",
      },
      {
        label: "Data Protection Act 2019",
        detail: "Governs handling of reporter identity and case data.",
      },
      {
        label: "Practical anonymity",
        detail:
          "With no statutory protection yet, technical anonymity carries more of the weight - no login, no identifying field.",
      },
    ],
    relatedPosts: [
      "anonymous-vs-confidential-reporting",
      "multi-jurisdiction-compliance-not-multi-language",
      "what-is-workplace-misconduct-case-management-software",
    ],
  }),
];

export function getJurisdiction(slug: string): Jurisdiction | undefined {
  return jurisdictions.find((j) => j.slug === slug);
}
