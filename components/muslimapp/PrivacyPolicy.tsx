import LegalPolicyPage, { type LegalPolicySection } from "./LegalPolicyPage";

const sections: LegalPolicySection[] = [
  {
    id: "introduction",
    title: "Introduction",
    blocks: [
      { type: "paragraph", text: "This Privacy Policy explains how ReComune, Inc. (“ReComune,” “we,” “us,” or “our”) collects, uses, and protects information in connection with the ReComune mobile application currently branded as the Muslim App, including related features and services (the “Service”)." },
      { type: "paragraph", text: "This Privacy Policy applies only to the Service defined above and does not automatically apply to other products or services offered by ReComune, Inc., which may be governed by separate privacy policies." },
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    blocks: [
      { type: "heading", text: "2.1 Information You Provide" },
      { type: "bullets", items: [
        "Account information (e.g. email)",
        "Prayer tracking and religious practice data",
        "Notes, reflections, and optional inputs",
        "Preferences and settings",
        "Communications",
        "Community participation (when available)",
      ] },
      { type: "heading", text: "2.2 Information Collected Automatically" },
      { type: "bullets", items: [
        "Usage and interaction data",
        "Feature engagement",
        "Device and app information",
        "Log and diagnostic data",
      ] },
      { type: "heading", text: "2.3 Information from Third Parties" },
      { type: "paragraph", text: "Subscriptions and purchases may be processed through third-party application marketplaces or payment providers, including the Apple App Store and Google Play Store." },
      { type: "paragraph", text: "We do not receive full payment card or billing information from these providers. However, we may receive limited information related to purchases, subscriptions, renewals, cancellations, refunds, and subscription status in order to provide and manage the Service." },
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information (Purposes & Lawful Bases)",
    blocks: [
      { type: "paragraph", text: "We process personal data based on:" },
      { type: "bullets", items: [
        "Contract performance",
        "Legitimate interests",
        "Legal obligations",
        "Consent, where explicitly obtained",
      ] },
      { type: "paragraph", text: "Purposes include:" },
      { type: "bullets", items: [
        "Operating and maintaining the Service",
        "Personalization",
        "Analytics and performance measurement",
        "Research and product development",
        "Training and improving systems and models",
        "Fraud and abuse prevention",
        "User communications",
      ] },
    ],
  },
  {
    id: "user-content",
    title: "User Content, Analytics & Anonymization",
    blocks: [
      { type: "paragraph", text: "You retain ownership of content you submit." },
      { type: "paragraph", text: "We process User Content under a non-exclusive, royalty-free, worldwide license, as described in the Terms of Service." },
      { type: "paragraph", text: "Once data is aggregated or anonymized so that it cannot reasonably be used to identify you, it is no longer personal data and may be used for the purposes described in this Policy and the Terms." },
    ],
  },
  {
    id: "retention",
    title: "Data Minimization & Retention",
    blocks: [
      { type: "paragraph", text: "We collect and retain only what is reasonably necessary." },
      { type: "paragraph", text: "If you delete your account or request deletion, we will delete or de-identify personal data as required by law." },
      { type: "paragraph", text: "We may retain certain information to comply with legal obligations, ensure security, prevent abuse, resolve disputes, or support legitimate business operations." },
      { type: "paragraph", text: "Aggregated or anonymized data may be retained." },
    ],
  },
  {
    id: "sharing",
    title: "Sharing of Information",
    blocks: [
      { type: "paragraph", text: "We do not sell personal data." },
      { type: "paragraph", text: "We may share information with:" },
      { type: "bullets", items: [
        "Service providers",
        "Legal or regulatory authorities",
        "Parties involved in corporate transactions",
      ] },
      { type: "paragraph", text: "Aggregated or anonymized insights may be used commercially, but this does not involve selling personal data." },
    ],
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    blocks: [
      { type: "paragraph", text: "Data may be processed in the United States or other jurisdictions." },
      { type: "paragraph", text: "We rely on appropriate safeguards such as standard contractual clauses where required." },
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    blocks: [
      { type: "paragraph", text: "Depending on your location, you may have rights to access, correct, delete, restrict, or port your data, and to withdraw consent." },
      { type: "paragraph", text: "Requests: legal@recomune.com" },
    ],
  },
  {
    id: "children",
    title: "Children’s Privacy",
    blocks: [
      { type: "paragraph", text: "The Service is for users 13+." },
      { type: "paragraph", text: "If we learn we collected data from a child under 13 improperly, we will delete it." },
    ],
  },
  {
    id: "security",
    title: "Security",
    blocks: [
      { type: "paragraph", text: "We use reasonable safeguards, but no system is perfectly secure." },
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    blocks: [
      { type: "paragraph", text: "We may update this Policy from time to time. Continued use means acceptance." },
    ],
  },
  {
    id: "contact",
    title: "Contact Information",
    blocks: [
      { type: "paragraph", text: "ReComune, Inc." },
      { type: "paragraph", text: "legal@recomune.com" },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPolicyPage
      title="Privacy Policy"
      label="Privacy Policy"
      lastUpdated="4th June 2026"
      sections={sections}
    />
  );
}
