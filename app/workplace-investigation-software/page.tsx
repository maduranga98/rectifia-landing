import {
  buildFeatureMetadata,
  FeaturePage,
  type FeaturePageConfig,
} from "@/components/sections/feature-page";

const config: FeaturePageConfig = {
  path: "/workplace-investigation-software",
  metaTitle: "Workplace Investigation Software for HR Teams",
  description:
    "Workplace investigation software for HR: anonymous or confidential reporting, AI-assisted intake and routing, and a consistency check on past cases.",
  keywords: [
    "workplace investigation software",
    "employee investigation software",
    "HR investigation software",
  ],
  kicker: "WORKPLACE INVESTIGATION SOFTWARE",
  h1: "Workplace investigation software for complaints and misconduct reports",
  breadcrumb: "Workplace investigation software",
  published: "2026-10-07",
  lede: "Reports arrive anonymously or confidentially, AI assists with intake and routing, and your investigators run the investigation and make every decision. A consistency check compares the proposed outcome with similar past cases before a case closes.",
  sections: [
    {
      heading: "What workplace investigation software is for",
      body: `Workplace investigation software supports the work between a complaint arriving and a case closing: who investigates, what the reporter has said, which deadline is running and what outcome is being proposed. It is different from a reporting channel, which gets a report in the door and stops there.

Some teams call this employee investigation software and others call it HR investigation software. The need is the same: a case that moves through the same steps every time, with a record of what happened and why.

Rectifia is built for complaints in four categories: harassment, toxic management, retaliation and burnout. It is not a full employee relations suite, and this page does not claim it covers wider workflows.`,
    },
    {
      heading: "From report to closed case",
      body: `A workplace investigation in Rectifia follows one path:

- **Report.** An employee reports anonymously or confidentially, with no login
- **Intake.** AI structures the report, categorizes it and routes it to the right handler
- **Investigation.** The handler investigates, speaks to the people involved and makes the decisions
- **Follow-up.** The reporter uses a Case ID and passcode to check status and add information
- **Consistency check.** The proposed action is compared with similar past cases before the case closes

The reporter's messages, the handler's work and the final action stay on the same case, so nobody has to rebuild the history from email.`,
    },
    {
      heading: "AI-assisted intake and routing, human-led investigations",
      body: `AI helps the first hour of a case go faster. It structures the report into a consistent format, categorizes it as harassment, toxic management, retaliation or burnout, and routes it to the right handler.

That is where its role ends. Humans make all investigation decisions. AI never decides guilt, never recommends discipline and never closes a case. If your investigators disagree with how a report was categorized or routed, they change it.`,
    },
    {
      heading: "Keeping the reporter in the loop",
      body: `An investigation goes better when the person who raised the concern can answer questions and add evidence. After filing, the reporter receives a Case ID and passcode. They use both to check status and respond to follow-up questions, with no login and no account.

Anonymous reporting limits what is collected about the reporter. Confidential reporting keeps a route open for follow-up. No tool can promise anonymity in every case, because what a report says can also point to a person. Read [how anonymous and confidential reporting differ](/blog/anonymous-vs-confidential-reporting) before you choose how to present the options to employees.`,
    },
    {
      heading: "A consistency check before a case closes",
      body: `Before a case closes, Rectifia compares the proposed action with how your company handled similar past cases. If the action deviates from that pattern, the check flags it, whether the action looks harsher or more lenient than your own record. It never recommends an action.

This matters most when several investigators handle similar complaints across teams and months. Read [why similar HR cases get different outcomes](/blog/why-similar-hr-cases-get-different-outcomes) for the problem the check addresses, and [how the check scores a case](/blog/consistency-bias-engine-explained) for how it works.`,
    },
    {
      heading: "Deadline tracking aligned with the EU Whistleblower Directive",
      body: `Rectifia tracks the EU Whistleblower Directive's clocks by default: 7 days to acknowledge a report and 3 months to give feedback. The clocks live on the case, which makes a missed acknowledgment visible while it can still be fixed.

See the [EU Whistleblower Protection Directive guide](/jurisdictions/eu-whistleblower-directive-compliance-software) for what each deadline covers. Rectifia supports your process and is not legal advice. Confirm your requirements with counsel.`,
    },
    {
      heading: "What a defensible investigation file shows",
      body: `Whatever tool you use, a file that holds up later tends to show the same things: when the report arrived, who handled it, what was done and when, what the handler concluded and why, and how the outcome compares with similar cases. Reconstructing any of those after a dispute starts is slow and unreliable.

To compare tools on these points, read our guide to [HR case management tools and what to compare](/blog/best-investigation-case-management-software-anonymous-complaints). For the wider case workflow, see [employee relations case management software](/employee-relations-case-management-software). If you only need a channel for reports, see [whistleblower hotline software](/whistleblower-hotline-software).`,
    },
  ],
  related: [
    {
      slug: "how-to-document-a-workplace-investigation-audit-trail",
      label: "How to document a workplace investigation: an audit-trail checklist",
    },
    {
      slug: "workplace-retaliation-after-a-report-how-to-investigate",
      label: "Retaliation after a report: how to spot it and investigate it",
    },
    {
      slug: "conflict-of-interest-auto-detection",
      label: "Conflict-of-interest auto-detection: why manual routing isn't enough",
    },
  ],
  faqs: [
    {
      q: "What is workplace investigation software?",
      a: "It is software that supports an investigation from the moment a complaint arrives to the moment the case closes, covering intake, ownership, follow-up with the reporter, deadlines and the final outcome. It differs from a reporting channel, which only receives the report.",
    },
    {
      q: "Is workplace investigation software the same as a whistleblower hotline?",
      a: "No. A hotline is the channel that receives reports. Investigation software covers what happens after a report arrives. Rectifia combines both, with reporting that needs no login and a case that continues through to closure.",
    },
    {
      q: "Who makes the decisions in an investigation?",
      a: "Your people do. AI assists with intake by structuring, categorizing and routing reports, and it never decides guilt, recommends discipline or closes a case.",
    },
    {
      q: "Can Rectifia handle retaliation complaints?",
      a: "Yes. Retaliation is one of the four categories Rectifia covers, alongside harassment, toxic management and burnout. Reports in any of these categories follow the same path from intake to a closed case.",
    },
  ],
};

export const metadata = buildFeatureMetadata(config);

export default function WorkplaceInvestigationSoftwarePage() {
  return <FeaturePage config={config} />;
}
