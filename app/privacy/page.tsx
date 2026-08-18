import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Kicker } from "@/components/ui/kicker";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Rectifia collects, uses, and protects data for reporters, HR teams, and investigators using our workplace misconduct reporting platform.",
  alternates: {
    canonical: "/privacy",
  },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Who this policy covers",
    body: "This policy applies to visitors of rectifia.com, and to reporters, HR administrators, and case handlers who use the Rectifia platform under a customer's account. If you were referred here by a specific employer's implementation of Rectifia, that employer's own workplace policy governs how they use reports internally; this page covers how Rectifia, as the vendor, handles data.",
  },
  {
    title: "2. What we collect",
    body: "Website visitors: standard analytics data (pages viewed, referrer, device type) and any information you submit through the demo request form (name, work email, company, team size, notes). Platform users: case content, evidence, and metadata submitted by reporters and handlers; account information for HR admins and investigators. In anonymous reporting mode, we do not collect or store any identity data for the reporter - no name, email, phone number, or reversible identifier.",
  },
  {
    title: "3. How we use data",
    body: "We use demo request information to respond to inquiries and follow up about the product. We use platform data solely to operate the case management and reporting service for the customer that owns the account - to route cases, apply severity scoring, run the consistency check, and track compliance deadlines. We do not sell personal data, and we do not use customer case content to train third-party models.",
  },
  {
    title: "4. Data storage and security",
    body: "Case data and the encrypted identity vault are stored in region-appropriate infrastructure with encryption at rest and in transit. Access to case content is role-based: HR sees case metadata, handlers see only assigned cases, and Company Admin has no access to case content by design. Specific hosting regions and infrastructure details are confirmed in each customer's contract and security documentation.",
  },
  {
    title: "5. Data retention and deletion",
    body: "Customers can export their full case history at any time. When a customer offboards, we work with them to export remaining data and delete it from our systems on an agreed schedule. Demo request information is retained only as long as needed to respond to the inquiry, unless you become a customer.",
  },
  {
    title: "6. Your rights",
    body: "Depending on your jurisdiction, you may have rights to access, correct, or request deletion of personal data we hold about you. Reporters using anonymous mode cannot be identified by us, so identity-based requests can only be actioned through the case ID and passcode issued at submission. For all other requests, contact privacy@rectifia.com.",
  },
  {
    title: "7. Changes to this policy",
    body: "We may update this policy as the product and our infrastructure evolve. Material changes will be reflected with an updated date on this page.",
  },
  {
    title: "8. Contact",
    body: "Questions about this policy can be sent to privacy@rectifia.com.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-navy px-8 py-20">
          <div className="mx-auto max-w-[760px]">
            <Kicker className="mb-3.5">LEGAL</Kicker>
            <h1 className="font-display text-[38px] font-bold tracking-tight text-white sm:text-[44px]">
              Privacy Policy
            </h1>
            <p className="mt-3.5 font-mono text-[12px] tracking-[0.05em] text-white/50">
              LAST UPDATED: AUGUST 18, 2026
            </p>
          </div>
        </section>

        <section className="bg-white px-8 py-20">
          <div className="mx-auto flex max-w-[760px] flex-col gap-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="mb-2.5 font-display text-lg font-semibold text-navy">
                  {s.title}
                </h2>
                <p className="font-sans text-[15px] leading-relaxed text-ink/80">{s.body}</p>
              </div>
            ))}
            <p className="border-t border-navy/8 pt-8 font-mono text-[11px] tracking-[0.05em] text-ink/50">
              THIS PAGE IS A GENERAL SUMMARY AND NOT LEGAL ADVICE. YOUR ORGANIZATION&rsquo;S
              CONTRACT AND DATA PROCESSING ADDENDUM GOVERN IN THE EVENT OF ANY CONFLICT.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
