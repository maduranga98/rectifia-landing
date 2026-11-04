import { blogPosts, type BlogPost } from "@/lib/content";
import { jurisdictions, type Jurisdiction } from "@/lib/jurisdictions";

/**
 * Posts are authored with a scheduled `date`. Because the site is a static
 * export, anything in the array ships live at build time, so we gate on the
 * build date. A daily scheduled deploy (see .github/workflows) publishes each
 * post on its date.
 */
export function getPublishedPosts(now: Date = new Date()): BlogPost[] {
  const cutoff = now.getTime();
  return blogPosts.filter((post) => new Date(post.date).getTime() <= cutoff);
}

export function getPublishedPostsSorted(now?: Date): BlogPost[] {
  return [...getPublishedPosts(now)].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPost(slug: string): BlogPost | undefined {
  return getPublishedPosts().find((post) => post.slug === slug);
}

/** Same-category posts first, then newest. Excludes the current post. */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const others = getPublishedPostsSorted().filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

/** Jurisdiction hub pages that list this post, for blog -> hub linking. */
export function getJurisdictionsForPost(slug: string): Jurisdiction[] {
  return jurisdictions.filter((j) => j.relatedPosts.includes(slug));
}

/**
 * Search-result titles. The on-page H1 (post.title) stays long and descriptive;
 * these are <= 49 chars so "<title> | Rectifia" stays within ~60 characters.
 */
export const seoTitles: Record<string, string> = {
  "why-similar-hr-cases-get-different-outcomes": "Why Similar HR Cases Get Different Outcomes",
  "best-navex-alternative-2026": "Best NAVEX Alternative for Mid-Size Firms (2026)",
  "consistency-bias-engine-explained": "How the Consistency & Bias Engine Scores a Case",
  "eu-whistleblower-directive-deadlines": "EU Whistleblower Directive: 7-Day, 3-Month Rules",
  "anonymous-vs-confidential-reporting": "Anonymous Reporting System for Employees",
  "navex-pricing-2000-employees-2026": "NAVEX Pricing 2026: Cost at 2,000 Employees",
  "navex-alternative-australia-respect-at-work": "NAVEX Alternative for Australia: Respect@Work",
  "navex-alternative-japan-whistleblower-act": "NAVEX Alternative for Japan's Whistleblower Act",
  "whistleblowing-software-pricing-models-compared": "Whistleblower Hotline Cost and Pricing Models",
  "ai-flag-inconsistent-discipline-without-deciding": "AI That Flags Inconsistent Discipline, Safely",
  "severity-vs-evidence-scoring-workplace-complaints": "Severity vs. Evidence Score in Complaint Triage",
  "respect-at-work-positive-duty-2026": "Respect@Work Positive Duty: HR Checklist for 2026",
  "corporations-act-part-9-4aaa-whistleblower-policy": "Corporations Act Part 9.4AAA Whistleblower Policy",
  "japan-whistleblower-protection-act-300-employees": "Japan Whistleblower Act: What Changes at 300",
  "why-we-dont-bill-per-case": "Why We Don't Bill Per Case",
  "whistleblowing-software-cost-500-employees": "Whistleblowing Software Cost for 500 Employees",
  "what-is-workplace-misconduct-case-management-software": "Case Management vs. Whistleblower Hotline",
  "conflict-of-interest-auto-detection": "Conflict-of-Interest Auto-Detection in HR Cases",
  "toxic-management-vs-harassment-categorization": "Toxic Management vs. Harassment: Categorizing",
  "best-investigation-case-management-software-anonymous-complaints": "HR Case Management Tools: What to Compare",
  "eu-directive-compliance-large-employers-1000-plus": "EU Whistleblowing Directive for 1,000+ Employers",
  "is-navex-ethicspoint-actually-anonymous": "Is NAVEX EthicsPoint Actually Anonymous?",
  "sox-whistleblower-requirements-beyond-a-hotline": "SOX Whistleblower Requirements Beyond a Hotline",
  "uk-pida-compliance-growing-employers": "UK PIDA Compliance for Growing Employers",
  "whistleblowing-software-cost-enterprise-1000-5000-employees": "Whistleblowing Software Cost: 1,000-5,000 Staff",
  "multi-jurisdiction-compliance-not-multi-language": "Multi-Jurisdiction vs. Multi-Language Compliance",
  "workplace-retaliation-after-a-report-how-to-investigate": "Workplace Retaliation Investigation Guide",
  "how-to-document-a-workplace-investigation-audit-trail": "Workplace Investigation Documentation Checklist",
  "whistleblowing-software-for-small-companies-25-200-employees": "Whistleblower Software for Small Business",
  "hr-case-management-best-practices": "HR Case Management Best Practices: A Checklist",
  "employee-relations-case-management-challenges": "Employee Relations Case Management Challenges",
  "can-a-whistleblower-remain-anonymous": "Can a Whistleblower Remain Anonymous?",
  "what-is-a-whistleblower-hotline": "What Is a Whistleblower Hotline? How It Works",
  "what-hr-should-do-after-employee-complaint": "Employee Filed a Complaint? What HR Should Do",
  "how-to-conduct-a-workplace-investigation": "How to Conduct a Workplace Investigation: 8 Steps",
  "how-to-investigate-anonymous-employee-complaints": "Can HR Investigate an Anonymous Complaint?",
  "prevent-retaliation-after-employee-complaint": "How to Prevent Retaliation After a Complaint",
  "who-should-know-about-hr-investigation": "Who Should Know About an HR Investigation?",
  "workplace-investigation-evidence-checklist": "Workplace Investigation Evidence Checklist",
  "how-hr-handles-conflicting-employee-statements": "Conflicting Employee Statements: How HR Decides",
  "how-long-should-workplace-investigation-take": "How Long Should a Workplace Investigation Take?",
  "what-to-do-when-workplace-investigation-is-inconclusive": "When a Workplace Investigation Is Inconclusive",
  "who-investigates-complaint-against-manager": "Who Investigates a Complaint Against a Manager?",
  "what-to-do-when-employee-complains-about-hr": "What to Do When an Employee Complains About HR",
  "workplace-investigation-witness-questions": "Workplace Investigation Witness Questions",
  "how-to-document-workplace-investigation": "How to Document a Workplace Investigation",
  "how-to-close-workplace-investigation": "How to Close a Workplace Investigation Fairly",
  "identify-workplace-misconduct-patterns": "How HR Can Identify Misconduct Patterns",
};

export const OG_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Rectifia - Fair cases. Consistent outcomes.",
};
