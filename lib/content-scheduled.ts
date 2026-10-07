import type { BlogPost } from "./content";

/**
 * Posts written ahead of release. Each ships live on its `date` via the daily
 * build (see getPublishedPosts in lib/blog.ts). Re-date an entry to release it
 * in a different weekly batch.
 */
export const scheduledPosts: BlogPost[] = [
  {
    slug: "what-is-a-whistleblower-hotline",
    title: "What Is a Whistleblower Hotline? A Plain-English Guide for HR Teams",
    category: "Compliance",
    date: "2026-10-14",
    readTime: "6 min read",
    excerpt:
      "A whistleblower hotline is a channel for reporting wrongdoing at work. What it is, how it differs from an ethics hotline, and what should happen after a report is filed.",
    metaDescription:
      "What a whistleblower hotline is, how ethics hotlines take reports, and what happens to a report after it is filed. A plain-English guide for HR teams.",
    content: `A whistleblower hotline is a reporting channel that lets employees raise concerns about wrongdoing at work, usually with the option to stay anonymous. It is the entry point of a larger process: someone reports, the organization acknowledges the report, someone investigates, and the reporter hears back. This guide explains what a hotline is, how it differs from an ethics hotline, what should happen after a report is filed, and what HR teams should look for in one.

## What a whistleblower hotline is

The word "hotline" comes from the telephone. Early hotlines were phone numbers, often run by an outside provider, that employees could call to report fraud, harassment or safety problems. Today the word describes the channel rather than the technology. A hotline can be a phone line, a web form, a mobile app or a combination, and what matters is whether employees trust it enough to use it.

A hotline has three jobs. It gives employees a safe way to speak up, it captures enough detail for someone to act, and it creates a record that shows the report was handled. Many hotlines stop after the first job or two and leave the rest to email and spreadsheets, which is where deadlines and consistency tend to slip.

## Whistleblower hotline or ethics hotline?

In practice the two terms describe the same kind of channel and vendors use both. "Ethics hotline" tends to be used for a broader set of concerns, such as conduct questions and policy breaches, while "whistleblower hotline" tends to be used for reports of wrongdoing that carry legal protections for the reporter. If you are comparing providers, ask what each one means by the term rather than relying on the label.

## What happens after a report is filed

A well-run process follows the same stages whatever the channel is called:

- **Intake.** The report is captured, categorized and routed to the right person
- **Acknowledgment.** The reporter is told the report was received
- **Investigation.** A handler gathers evidence, speaks to the people involved and documents what they find
- **Decision.** The organization decides what action to take, and a person makes that decision
- **Feedback.** The reporter is told what is being done, within what the law and policy allow
- **Record.** The full history is kept so the organization can show how the case was handled

Some laws put deadlines on these stages. Under the EU Whistleblower Directive, acknowledgment is due within seven days and feedback within three months. The [EU Whistleblower Protection Directive compliance guide](/jurisdictions/eu-whistleblower-directive-compliance-software) covers both clocks. The Directive also expects organizations above a size threshold to maintain internal reporting channels, so confirm with counsel whether it applies to you.

## Why employees use a hotline, or don't

A hotline only works if people use it, and the reasons employees stay silent are usually practical. They worry about retaliation. They doubt that anyone will act on what they say. They suspect that the channel is run by someone who can trace them, or that the company will treat the report as a nuisance rather than a signal. A hotline that answers none of those worries will sit unused, however well it is built.

Three things move the needle. The first is a channel that is simple to reach, with no account to create. The second is a clear explanation of who sees a report and what happens next. The third is visible follow-through, where reporters hear back and the organization handles similar cases in similar ways. HR teams control the last two as much as any software does, so a hotline is best treated as part of a process rather than a product on its own.

## What to look for in a hotline

Not every hotline serves HR teams equally well. These questions separate a basic intake channel from one that supports the whole process:

- Can employees report without logging in or giving an email address?
- Can a reporter come back to check status or add evidence without revealing who they are?
- Does the system track deadlines on every case, or does someone have to remember?
- Is access to case content limited to the people assigned to the case?
- Does the tool help investigators keep outcomes consistent across similar cases?
- Who makes the decisions, the software or a person?

The last question matters more as vendors add AI. AI can help structure a report and organize evidence. Decisions about guilt and discipline belong to people.

## Where Rectifia fits

Rectifia is software, not a staffed phone line. Employees report anonymously or confidentially with no login, and they use a Case ID and passcode to return to their case. AI assists with intake by structuring, categorizing, routing, scoring and organizing evidence, and humans make every investigation decision. A consistency check flags when a proposed action differs from how the company handled similar past cases, in either direction, and it never recommends an action. Deadline tracking follows the EU Whistleblower Directive's seven-day and three-month clocks by default.

The [whistleblower hotline software page](/whistleblower-hotline-software) describes the product in detail, and the [homepage](/) shows the full workflow from report to closed case. For a closer look at anonymity, read [can a whistleblower remain anonymous](/blog/can-a-whistleblower-remain-anonymous).

This guide is general information, not legal advice. Confirm your requirements with counsel.`,
    faqs: [
      {
        q: "What is a whistleblower hotline?",
        a: "A whistleblower hotline is a reporting channel that lets employees raise concerns about wrongdoing at work, usually with the option to stay anonymous. It can be a phone line, a web form, an app or a mix of these.",
      },
      {
        q: "Is an ethics hotline the same as a whistleblower hotline?",
        a: "In practice the terms describe the same kind of channel. Ethics hotline tends to cover a broader set of conduct concerns, while whistleblower hotline tends to refer to reports of wrongdoing that carry legal protections for the reporter.",
      },
      {
        q: "Does a whistleblower hotline have to be a phone line?",
        a: "No. The word comes from the telephone, but a hotline today is a channel, and it can be a web form or an app. What matters is whether employees trust it enough to use it.",
      },
    ],
  },
];
