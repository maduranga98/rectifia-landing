import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Kicker } from "@/components/ui/kicker";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of the Rectifia workplace misconduct reporting and case management platform.",
  alternates: {
    canonical: "/terms",
  },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Agreement to terms",
    body: "These terms govern access to and use of the Rectifia website and platform. By using rectifia.com or the Rectifia platform, you agree to these terms. If you are using Rectifia on behalf of an organization, you are agreeing on that organization's behalf, and \"you\" refers to that organization.",
  },
  {
    title: "2. The service",
    body: "Rectifia provides a workplace misconduct reporting channel and an investigation case-management workflow, including anonymous and confidential intake, severity and evidence scoring, a consistency check against prior closed cases, and compliance deadline tracking. Rectifia is a tool that supports HR and compliance teams; it does not make disciplinary decisions, determine guilt, or replace legal counsel.",
  },
  {
    title: "3. Accounts and access",
    body: "Customer organizations are responsible for managing role-based access for their HR admins and case handlers, and for the accuracy of the roles they assign. You are responsible for safeguarding login credentials and for activity that occurs under your account.",
  },
  {
    title: "4. Acceptable use",
    body: "You agree not to use the platform to submit knowingly false reports in bad faith, to attempt to identify anonymous reporters through means outside the platform's intended workflow, to reverse-engineer or attempt to extract the underlying software, or to use the service in a way that violates applicable law.",
  },
  {
    title: "5. Data ownership",
    body: "Case data submitted through your organization's account belongs to your organization. Rectifia processes it as a service provider under the terms of your customer agreement and Data Processing Addendum, not as the data owner.",
  },
  {
    title: "6. Fees and billing",
    body: "Paid plans are billed based on employee headcount as described on the pricing page, not per report or per case. Fees, billing cadence, and payment terms for your organization are set out in your order form or customer agreement.",
  },
  {
    title: "7. Founding programme",
    body: "Founding programme pricing and terms are offered to a limited number of pre-launch customers at Rectifia's discretion and may include additional expectations, such as providing product feedback or participating in a case study, as agreed individually.",
  },
  {
    title: "8. Termination and data export",
    body: "Either party may terminate the agreement as set out in the customer contract. On termination, your organization can export its full case history; Rectifia will delete remaining data from its systems on an agreed schedule.",
  },
  {
    title: "9. Disclaimers and limitation of liability",
    body: "The service is provided on an \"as is\" basis. Rectifia does not guarantee any particular investigation or legal outcome, and using the platform does not constitute legal advice or a guarantee of regulatory compliance. To the fullest extent permitted by law, Rectifia's liability arising from use of the service is limited as set out in your customer agreement.",
  },
  {
    title: "10. Changes to these terms",
    body: "We may update these terms from time to time. Continued use of the service after an update constitutes acceptance of the revised terms. Material changes affecting existing customer contracts will be communicated directly.",
  },
  {
    title: "11. Contact",
    body: "Questions about these terms can be sent to legal@rectifia.com.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-navy px-8 py-20">
          <div className="mx-auto max-w-[760px]">
            <Kicker className="mb-3.5">LEGAL</Kicker>
            <h1 className="font-display text-[38px] font-bold tracking-tight text-white sm:text-[44px]">
              Terms of Service
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
              THIS PAGE IS A GENERAL SUMMARY AND NOT LEGAL ADVICE. YOUR SIGNED CUSTOMER AGREEMENT
              GOVERNS IN THE EVENT OF ANY CONFLICT.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
