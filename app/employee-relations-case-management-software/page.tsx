import {
  buildFeatureMetadata,
  FeaturePage,
  type FeaturePageConfig,
} from "@/components/sections/feature-page";

const config: FeaturePageConfig = {
  path: "/employee-relations-case-management-software",
  metaTitle: "Employee Relations Case Management Software",
  description:
    "Case management for employee complaints: anonymous or confidential reporting, AI-assisted intake and routing, and a consistency check across past cases.",
  keywords: [
    "employee relations case management software",
    "employee relations software",
    "employee case management software",
  ],
  kicker: "EMPLOYEE RELATIONS CASE MANAGEMENT",
  h1: "Employee relations case management software for complaints and misconduct reports",
  breadcrumb: "Employee relations case management software",
  published: "2026-10-07",
  lede: "Employees report anonymously or confidentially, AI assists with intake and routing, and your team makes every decision. Before a case closes, a consistency check compares the proposed action with how similar past cases were handled.",
  sections: [
    {
      heading: "What employee relations case management software does here",
      body: `Employee relations case management software gives HR one place to receive, route and resolve employee complaints, so every case has an owner, a record and a deadline. Without it, complaints tend to live in inboxes and spreadsheets, and the person who knows the status of a case is whoever handled it last.

Rectifia is built for one part of that work: reports of harassment, toxic management, retaliation and burnout. It is not a full employee relations suite. If you need tooling for workflows beyond complaints and misconduct reports, check each of those needs against what Rectifia covers before you shortlist it.

If the gap you have is a reliable way to take in complaints, run them to a decision and show how you handled them, the rest of this page describes how Rectifia approaches it.`,
    },
    {
      heading: "Employee case management from the first report",
      body: `Employee case management starts when someone speaks up, so intake shapes everything that follows. This is how a case moves in Rectifia:

- **Report.** An employee reports anonymously or confidentially, with no login
- **Intake.** AI structures the report, categorizes it and routes it to the right handler
- **Investigation.** A person investigates and makes the decisions
- **Follow-up.** The reporter returns with a Case ID and passcode to check status and add information
- **Close.** A consistency check compares the proposed action with similar past cases

Each step stays on one case, so HR can see where a case stands without chasing anyone. See the full workflow of Rectifia's [HR case management system](/), from report to closed case.`,
    },
    {
      heading: "Four categories, one intake",
      body: `Every report is categorized as harassment, toxic management, retaliation or burnout. The category assigned at intake shapes the questions a handler asks and who the case goes to, so it is worth getting right.

A report about a manager who humiliates people in meetings and a report about harassment can both reach HR as "my manager is the problem." They are different problems, and treating them as one category hides the pattern. AI assists by structuring and categorizing the report, and a person reviews where the case goes from there.

Rectifia does not cover broader employee relations workflows than these four categories, and this page does not claim it does.`,
    },
    {
      heading: "Anonymous or confidential reporting for employees",
      body: `Employees choose how they report. Anonymous reporting limits what is collected about the reporter. Confidential reporting keeps a route open for follow-up. In both modes there is no login, and the reporter receives a Case ID and passcode after filing.

The reporter uses the Case ID and passcode to check status and add information later, without creating an account. A lost passcode cannot be reset through an email address or phone number, so reporters keep it somewhere private.

No tool can promise anonymity in every case, because what a report says, or how small a team is, can also point to a person. Read [how anonymous and confidential reporting differ](/blog/anonymous-vs-confidential-reporting) and [whether a whistleblower can remain anonymous](/blog/can-a-whistleblower-remain-anonymous) for where each holds and where each breaks.`,
    },
    {
      heading: "Consistent outcomes across similar cases",
      body: `Similar complaints can end in different outcomes when each one is judged in isolation, often by different people in different weeks. The difference is easy to miss from inside a single case and hard to explain later.

Before a case closes, Rectifia compares the proposed action with how your company handled similar past cases. If the action deviates, it is flagged, whether it looks harsher or more lenient than your own record. The flag never recommends an action. AI never decides guilt, never recommends discipline and never closes a case. Those decisions stay with your people.

Read [why similar HR cases get different outcomes](/blog/why-similar-hr-cases-get-different-outcomes) and [how the consistency check scores a case](/blog/consistency-bias-engine-explained).`,
    },
    {
      heading: "Deadline tracking aligned with the EU Whistleblower Directive",
      body: `Rectifia tracks the EU Whistleblower Directive's clocks by default: 7 days to acknowledge a report and 3 months to give feedback. The clocks run on the case itself, so a deadline does not depend on someone remembering it.

See the [EU Whistleblower Protection Directive guide](/jurisdictions/eu-whistleblower-directive-compliance-software) and [what each deadline covers](/blog/eu-whistleblower-directive-deadlines). Rectifia supports your process and is not legal advice. Confirm your requirements with counsel.`,
    },
    {
      heading: "Choosing employee relations software",
      body: `When you compare employee relations software, ask what happens after a report arrives: who owns it, what clock is running, and how you would find out that two similar cases were handled differently. Our guide to [HR case management tools and what to compare](/blog/best-investigation-case-management-software-anonymous-complaints) lists the questions to put to any vendor.

If you only need a channel for reports, see [whistleblower hotline software](/whistleblower-hotline-software). If the investigation itself is the priority, see [workplace investigation software](/workplace-investigation-software).`,
    },
  ],
  related: [
    {
      slug: "what-is-workplace-misconduct-case-management-software",
      label: "Case management platform vs. whistleblower hotline",
    },
    {
      slug: "toxic-management-vs-harassment-categorization",
      label: "Toxic management vs. harassment: how categorization affects investigations",
    },
    {
      slug: "hr-case-management-best-practices",
      label: "HR case management best practices: a checklist",
    },
    {
      slug: "employee-relations-case-management-challenges",
      label: "Employee relations case management challenges",
    },
  ],
  faqs: [
    {
      q: "What is employee relations case management software?",
      a: "It is software that gives HR one place to receive, route, investigate and close employee complaints, with an owner, a record and a deadline for each case. Rectifia covers reports of harassment, toxic management, retaliation and burnout.",
    },
    {
      q: "Does Rectifia cover every employee relations workflow?",
      a: "No. Rectifia is built for complaints and misconduct reports in four categories: harassment, toxic management, retaliation and burnout. It is not a full employee relations suite.",
    },
    {
      q: "Can employees report anonymously?",
      a: "Yes. Employees choose anonymous or confidential reporting, with no login, and use a Case ID and passcode to return to their case. No tool can promise anonymity in every case, because what a report says can also point to a person.",
    },
    {
      q: "Does the AI decide the outcome of a case?",
      a: "No. AI assists with intake by structuring, categorizing and routing reports. Humans make all investigation decisions, and the consistency check flags deviations without recommending an action.",
    },
  ],
};

export const metadata = buildFeatureMetadata(config);

export default function EmployeeRelationsCaseManagementSoftwarePage() {
  return <FeaturePage config={config} />;
}
