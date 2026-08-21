"use client";

import React from "react";
import Link from "next/link";
import Footersec from "@/components/Home/footersec";
import { useActiveSection } from "@/utils/useActiveSection";
import {
  FaArrowRight,
  FaChevronRight,
  FaEnvelope,
  FaRotateLeft,
  FaShieldHalved,
} from "react-icons/fa6";

type PolicyBlock =
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "numbers"; items: string[] };

type PolicySectionData = {
  id: string;
  title: string;
  blocks: PolicyBlock[];
};

const policySections: PolicySectionData[] = [
  {
    id: "introduction",
    title: "Introduction",
    blocks: [
      { type: "paragraph", text: "This Refund & Cancellation Policy explains how subscription cancellations, refunds, renewals, trials, promotional plans, and related billing matters are handled for the ReComune mobile application currently branded as the Muslim App, including related features and services (the “Service”)." },
      { type: "paragraph", text: "This Policy should be read together with our Terms of Service and Privacy Policy." },
      { type: "paragraph", text: "Because purchases may be processed by third-party application marketplaces or payment providers, the cancellation and refund process may vary depending on where you purchased your subscription." },
    ],
  },
  {
    id: "subscriptions",
    title: "Subscriptions and Automatic Renewal",
    blocks: [
      { type: "paragraph", text: "The Service may offer paid subscriptions, premium features, promotional plans, or other paid offerings." },
      { type: "paragraph", text: "Unless otherwise stated at the time of purchase, subscriptions may automatically renew at the end of each applicable billing period until canceled." },
      { type: "paragraph", text: "The price, billing frequency, renewal terms, and other applicable conditions will be presented through the platform or payment provider used to complete your purchase." },
      { type: "paragraph", text: "You are responsible for managing your subscription through the applicable platform account." },
    ],
  },
  {
    id: "cancelling",
    title: "Cancelling a Subscription",
    blocks: [
      { type: "paragraph", text: "You may cancel your subscription at any time through the platform or payment provider through which you purchased it." },
      { type: "paragraph", text: "Cancellation generally prevents future renewals. Unless otherwise required by applicable law or the policies of the applicable payment platform, cancellation does not automatically provide a refund for amounts already paid." },
      { type: "paragraph", text: "After cancellation, you will generally retain access to the paid features included in your subscription until the end of your current paid billing period, unless the applicable platform specifies otherwise." },
      { type: "paragraph", text: "Deleting the Muslim App or deleting your account does not necessarily cancel an active subscription. You should separately cancel your subscription through the platform or payment provider through which it was purchased." },
    ],
  },
  {
    id: "apple",
    title: "Apple App Store Purchases",
    blocks: [
      { type: "paragraph", text: "If you purchased your subscription or other paid offering through the Apple App Store, Apple processes the payment and generally controls cancellation and refund requests." },
      { type: "paragraph", text: "You should manage or cancel your subscription through your Apple account or App Store subscription settings." },
      { type: "paragraph", text: "Requests for refunds for purchases made through Apple should generally be submitted directly to Apple and are subject to Apple’s applicable refund policies, eligibility requirements, and decisions." },
      { type: "paragraph", text: "ReComune does not control Apple’s refund approval process and cannot guarantee that Apple will approve a refund request." },
    ],
  },
  {
    id: "google",
    title: "Google Play Purchases",
    blocks: [
      { type: "paragraph", text: "If you purchased your subscription or other paid offering through the Google Play Store, Google processes the payment and may control or participate in the cancellation and refund process." },
      { type: "paragraph", text: "You should manage or cancel your subscription through your Google Play account and subscription settings." },
      { type: "paragraph", text: "Refund requests for purchases made through Google Play are subject to Google’s applicable policies, eligibility requirements, procedures, and decisions." },
      { type: "paragraph", text: "Where Google requires a refund request to be handled through the developer, you may contact ReComune using the contact information provided below." },
    ],
  },
  {
    id: "direct-purchases",
    title: "Purchases Made Directly Through ReComune",
    blocks: [
      { type: "paragraph", text: "If ReComune offers purchases directly through its website or another payment provider outside the Apple App Store or Google Play Store, the refund and cancellation terms displayed at the time of purchase will apply." },
      { type: "paragraph", text: "Unless otherwise stated at the time of purchase or required by applicable law, payments for completed billing periods are generally non-refundable." },
      { type: "paragraph", text: "If you believe you were charged incorrectly, charged more than once, or experienced another billing error, please contact us so that we can review the transaction." },
    ],
  },
  {
    id: "refund-eligibility",
    title: "Refund Eligibility",
    blocks: [
      { type: "paragraph", text: "Except where required by applicable law or provided under the policies of the applicable marketplace or payment provider, purchasing a subscription does not guarantee eligibility for a refund." },
      { type: "paragraph", text: "Refund eligibility may depend on factors including:" },
      { type: "bullets", items: [
        "The platform through which the purchase was made",
        "The applicable marketplace or payment provider’s policies",
        "The date of purchase",
        "Whether the subscription or paid service has already been used",
        "Whether the charge resulted from a billing or technical error",
        "Applicable consumer protection laws",
      ] },
      { type: "paragraph", text: "Where ReComune has authority to decide a refund request, we may review requests individually based on the circumstances of the transaction and applicable law." },
      { type: "paragraph", text: "Nothing in this Policy limits any refund, cancellation, withdrawal, or other consumer rights that cannot legally be waived." },
    ],
  },
  {
    id: "trials",
    title: "Free Trials",
    blocks: [
      { type: "paragraph", text: "ReComune may offer free or discounted trial periods from time to time." },
      { type: "paragraph", text: "Unless otherwise stated when you begin a trial, a trial may automatically convert into a paid subscription when the trial period ends." },
      { type: "paragraph", text: "To avoid being charged, you must cancel before the applicable trial or promotional period expires, subject to the cancellation rules and deadlines of the platform through which you subscribed." },
      { type: "paragraph", text: "The exact trial duration, renewal price, and applicable billing terms will be displayed at the time you subscribe." },
      { type: "paragraph", text: "ReComune may modify or discontinue trial offers at its discretion, subject to applicable law." },
    ],
  },
  {
    id: "promotional",
    title: "Promotional and Founding Member Plans",
    blocks: [
      { type: "paragraph", text: "ReComune may offer founding member subscriptions, early-adopter pricing, grandfathered pricing, lifetime pricing offers, discounts, gifts, or other promotional plans." },
      { type: "paragraph", text: "Cancellation, expiration, lapse, termination, or refund of a promotional subscription may result in the loss of promotional or grandfathered pricing." },
      { type: "paragraph", text: "If promotional pricing is lost, it may not be available again if you later resubscribe." },
      { type: "paragraph", text: "Promotional plans apply only to the features and benefits specified for the applicable offer and do not necessarily provide access to future subscription tiers, paid add-ons, usage-based services, third-party services, or separately offered products." },
      { type: "paragraph", text: "Additional terms presented with a particular promotional offer may also apply." },
    ],
  },
  {
    id: "pricing",
    title: "Changes to Subscription Pricing or Features",
    blocks: [
      { type: "paragraph", text: "ReComune may change subscription pricing, features, plans, or availability from time to time, subject to applicable law and applicable marketplace requirements." },
      { type: "paragraph", text: "Where required, notice of pricing changes or other material subscription changes may be provided through the Service, by email, or through the applicable marketplace or payment provider." },
      { type: "paragraph", text: "Changes to subscription pricing will be handled in accordance with the rules of the platform through which the subscription was purchased and applicable law." },
    ],
  },
  {
    id: "billing-errors",
    title: "Billing Errors and Unauthorized Charges",
    blocks: [
      { type: "paragraph", text: "If you believe you were incorrectly charged, charged multiple times, or charged for a transaction you did not authorize, please first review your purchase history through the platform where the purchase was made." },
      { type: "paragraph", text: "For Apple App Store or Google Play Store transactions, you may also need to contact the applicable platform directly because ReComune may not have access to full payment information or authority to reverse the transaction." },
      { type: "paragraph", text: "For billing matters that ReComune can directly address, please contact us with sufficient information to identify the transaction. Do not send full credit card numbers or other sensitive payment credentials by email." },
    ],
  },
  {
    id: "account-deletion",
    title: "Account Deletion and Subscription Cancellation",
    blocks: [
      { type: "paragraph", text: "Deleting your Muslim App account and cancelling your paid subscription are separate actions." },
      { type: "paragraph", text: "If you delete your account while an external subscription remains active, Apple, Google, or another payment provider may continue billing the subscription until you separately cancel it through that provider." },
      { type: "paragraph", text: "Accordingly, if you no longer wish to use the Service, you should:" },
      { type: "numbers", items: [
        "Cancel any active paid subscription through the platform or payment provider through which you subscribed; and",
        "Delete your Muslim App account separately if you also want your account removed.",
      ] },
      { type: "paragraph", text: "Account deletion and the handling of personal data following deletion are governed by our Privacy Policy and Terms of Service." },
    ],
  },
  {
    id: "suspension",
    title: "Service Suspension or Termination",
    blocks: [
      { type: "paragraph", text: "ReComune may suspend, restrict, or terminate access to the Service where permitted under our Terms of Service and applicable law." },
      { type: "paragraph", text: "Suspension or termination resulting from a violation of our Terms of Service does not automatically entitle a user to a refund, except where otherwise required by applicable law or the policies of the applicable marketplace or payment provider." },
      { type: "paragraph", text: "If ReComune permanently discontinues a paid Service, any refund, credit, continued-access arrangement, or other remedy will be handled in accordance with applicable law and the requirements of the platform through which the subscription was purchased." },
    ],
  },
  {
    id: "approved-refunds",
    title: "Processing of Approved Refunds",
    blocks: [
      { type: "paragraph", text: "If a refund is approved, it will generally be returned through the original payment method or processed according to the procedures of the applicable marketplace or payment provider." },
      { type: "paragraph", text: "Processing times may vary depending on Apple, Google, banks, card issuers, payment providers, and other financial institutions involved in the transaction." },
      { type: "paragraph", text: "ReComune cannot guarantee how quickly a third-party payment provider or financial institution will make refunded funds available." },
    ],
  },
  {
    id: "consumer-rights",
    title: "Consumer Rights",
    blocks: [
      { type: "paragraph", text: "This Policy does not exclude, restrict, or modify any rights or remedies available to you under applicable consumer protection laws that cannot legally be excluded, restricted, or modified by agreement." },
      { type: "paragraph", text: "Where applicable law provides you with cancellation, refund, withdrawal, or similar rights that are more favorable than this Policy, those legal rights will apply." },
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    blocks: [
      { type: "paragraph", text: "We may update this Refund & Cancellation Policy from time to time to reflect changes to the Service, subscription offerings, payment methods, marketplace requirements, or applicable law." },
      { type: "paragraph", text: "The updated Policy will become effective when posted or on the effective date otherwise stated in the updated Policy." },
    ],
  },
];

const navigationSections = [
  ...policySections.map((section, index) => ({
    id: section.id,
    number: String(index + 1).padStart(2, "0"),
    title: section.title,
  })),
  { id: "contact", number: "17", title: "Contact Us" },
];

export default function RefundCancellationPolicy() {
  const activeSection = useActiveSection(navigationSections.map((section) => section.id));

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="px-4 pt-5 sm:px-6 lg:px-9">
        <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[28px] bg-black px-6 text-white sm:min-h-[420px]">
          <div className="absolute -left-[220px] -top-[300px] h-[600px] w-[600px] rounded-full border border-white/10" />
          <div className="absolute -bottom-[360px] -right-[280px] h-[700px] w-[700px] rounded-full border border-white/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.08),transparent_35%)]" />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mb-5 flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 transition hover:bg-white/15 sm:text-sm"
              >
                <span aria-hidden="true">←</span>
                Back to Home
              </Link>
            </div>
            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]">
              <FaRotateLeft />
              Muslim App Legal
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              Refund &amp;
              <br />
              Cancellation Policy
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">Muslim App by ReComune, Inc.</p>
            <p className="mt-3 text-sm text-white/40">Last updated: August 18, 2026</p>
            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/45 sm:text-sm">
              <span>Muslim App</span>
              <FaChevronRight className="text-[9px]" />
              <span className="text-white">Refund &amp; Cancellation Policy</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 pt-20 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-4xl">
            <span className="inline-block rounded-full border border-black/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55">Refund Policy</span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Clear cancellation.
              <br />
              <span className="text-black/35">Straightforward billing rules.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-[15px] leading-8 text-black/55 sm:text-base">
              This policy explains how subscription cancellations, refunds, renewals, trials, promotional plans, and related billing matters are handled for the Muslim App.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[320px_minmax(0,1fr)] xl:gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-black/35">On This Page</p>
              <nav className="border-l border-black/10">
                {navigationSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    aria-current={activeSection === section.id ? "location" : undefined}
                    className={`group -ml-px flex w-full items-center gap-4 border-l-2 py-3 pl-5 pr-2 text-left transition ${
                      activeSection === section.id
                        ? "border-black bg-black/[0.04] text-black"
                        : "border-transparent text-black/40 hover:border-black hover:text-black"
                    }`}
                  >
                    <span className={`min-w-[24px] text-[10px] font-semibold transition ${activeSection === section.id ? "text-black" : "text-black/30"}`}>
                      {section.number}
                    </span>
                    <span className="text-sm">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="min-w-0">
            {policySections.map((section, index) => (
              <PolicySection key={section.id} id={section.id} number={String(index + 1).padStart(2, "0")} title={section.title}>
                {section.blocks.map((block, blockIndex) => {
                  if (block.type === "bullets") return <BulletList key={blockIndex} items={block.items} />;
                  if (block.type === "numbers") return <NumberList key={blockIndex} items={block.items} />;
                  return <p key={blockIndex}>{block.text}</p>;
                })}
              </PolicySection>
            ))}

            <section id="contact" className="scroll-mt-28 pt-3">
              <div className="relative overflow-hidden rounded-[26px] bg-black p-8 text-white sm:p-10 md:p-12">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-black">17</span>
                    <span className="text-sm text-white/45">Contact information</span>
                  </div>
                  <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Contact Us</h2>
                  <p className="mt-5 max-w-2xl leading-8 text-white/60">
                    If you have questions regarding this Refund &amp; Cancellation Policy or a billing matter that is handled directly by ReComune, please contact:
                  </p>
                  <div className="mt-7 border-t border-white/15 pt-6">
                    <p className="font-semibold">ReComune, Inc.</p>
                    <p className="mt-1 text-white/60">Muslim App</p>
                    <a href="mailto:legal@recomune.com" className="group mt-5 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/85">
                      <FaEnvelope />
                      legal@recomune.com
                      <FaArrowRight className="-rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                  <div className="mt-8 border-t border-white/15 pt-6 text-sm leading-7 text-white/50">
                    <p>For purchases processed through Apple, Google, or another third-party marketplace or payment provider, you may need to contact that provider directly regarding cancellations, refunds, payment disputes, or billing issues.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 px-5 py-9 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"><FaShieldHalved /></span>
            <div>
              <p className="text-sm font-semibold">Muslim App</p>
              <p className="mt-1 text-xs text-black/40">by ReComune, Inc.</p>
            </div>
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-fit text-xs font-medium text-black/40 transition hover:text-black">Back to top ↑</button>
        </div>
      </section>

      <Footersec variant="monochrome" />

    </main>
  );
}

function PolicySection({ id, number, title, children }: { id: string; number: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-12 scroll-mt-28 border-b border-black/10 pb-12 md:mb-16 md:pb-16">
      <div className="flex items-start gap-4 md:gap-6">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-xs font-semibold text-white md:h-12 md:w-12">{number}</span>
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">{title}</h2>
          <div className="mt-6 space-y-5 text-[15px] leading-8 text-black/60 sm:text-base">{children}</div>
        </div>
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 pt-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4">
          <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-4">
      {items.map((item, index) => (
        <li key={item} className="flex items-start gap-4">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-[11px] font-semibold text-white">{index + 1}</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}
