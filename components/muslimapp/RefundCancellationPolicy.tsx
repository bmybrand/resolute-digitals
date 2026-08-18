"use client";

import React from "react";
import {
  FaArrowRight,
  FaChevronRight,
  FaEnvelope,
  FaRotateLeft,
  FaShieldHalved,
} from "react-icons/fa6";

const sections = [
  { id: "introduction", number: "01", title: "Introduction" },
  { id: "subscriptions", number: "02", title: "Subscriptions and Automatic Renewal" },
  { id: "cancelling", number: "03", title: "Cancelling a Subscription" },
  { id: "apple", number: "04", title: "Apple App Store Purchases" },
  { id: "google", number: "05", title: "Google Play Store Purchases" },
  { id: "swich", number: "06", title: "SWICH Purchases in Pakistan" },
  { id: "resolute-role", number: "07", title: "Role of Resolute Digitals" },
  { id: "refund-eligibility", number: "08", title: "Refund Eligibility" },
  { id: "trials", number: "09", title: "Free Trials" },
  { id: "promotional", number: "10", title: "Promotional and Founding Member Plans" },
  { id: "pricing", number: "11", title: "Changes to Subscription Pricing or Features" },
  { id: "billing-errors", number: "12", title: "Billing Errors, Duplicate Charges, and Unauthorized Transactions" },
  { id: "account-deletion", number: "13", title: "Account Deletion and Subscription Cancellation" },
  { id: "suspension", number: "14", title: "Service Suspension or Termination" },
  { id: "approved-refunds", number: "15", title: "Processing of Approved Refunds" },
  { id: "chargebacks", number: "16", title: "Chargebacks and Payment Disputes" },
  { id: "consumer-rights", number: "17", title: "Consumer Rights" },
  { id: "changes", number: "18", title: "Changes to This Policy" },
  { id: "contact", number: "19", title: "Contact Us" },
];

export default function RefundCancellationPolicy() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="px-4 pt-5 sm:px-6 lg:px-9">
        <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[28px] bg-black px-6 text-white sm:min-h-[420px]">
          <div className="absolute -left-[220px] -top-[300px] h-[600px] w-[600px] rounded-full border border-white/10" />
          <div className="absolute -right-[280px] -bottom-[360px] h-[700px] w-[700px] rounded-full border border-white/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.08),transparent_35%)]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]">
              <FaRotateLeft />
              Muslim App Legal
            </div>

            <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              Refund &amp;
              <br />
              Cancellation Policy
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Muslim App by ReComune, Inc.
            </p>

            <p className="mt-3 text-sm text-white/40">
              Last updated: August 18, 2026
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/45 sm:text-sm">
              <span>Muslim App</span>
              <FaChevronRight className="text-[9px]" />
              <span className="text-white">Refund &amp; Cancellation Policy</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 pb-12 pt-20 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-4xl">
            <span className="inline-block rounded-full border border-black/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55">
              Refund Policy
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Clear cancellation.
              <br />
              <span className="text-black/35">Straightforward billing rules.</span>
            </h2>

            <p className="mt-6 max-w-3xl text-[15px] leading-8 text-black/55 sm:text-base">
              This policy explains how subscription cancellations, refunds,
              renewals, trials, promotional plans, and related billing matters
              are handled for the Muslim App and associated payment channels.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-5 pb-28 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[320px_minmax(0,1fr)] xl:gap-20">

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
                On This Page
              </p>

              <nav className="border-l border-black/10">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="group -ml-px flex w-full items-center gap-4 border-l-2 border-transparent py-3 pl-5 pr-2 text-left text-black/40 transition hover:border-black hover:text-black"
                  >
                    <span className="min-w-[24px] text-[10px] font-semibold text-black/30">
                      {section.number}
                    </span>

                    <span className="text-sm">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* MAIN POLICY */}
          <div className="min-w-0">

            <PolicySection id="introduction" number="01" title="Introduction">
              <p>
                This Refund &amp; Cancellation Policy explains how subscription
                cancellations, refunds, renewals, trials, promotional plans, and
                related billing matters are handled for the ReComune mobile
                application currently branded as the Muslim App, including related
                features and services (the “Service”).
              </p>

              <p>
                The Service is provided by ReComune, Inc. (“ReComune,” “we,” “us,”
                or “our”).
              </p>

              <p>
                Resolute Digitals acts as an authorized Product Partner of ReComune
                and is authorized to facilitate and collect payments for the Muslim
                App in Pakistan, including payments processed through SWICH, where
                applicable.
              </p>

              <p>
                Resolute Digitals’ role in collecting or facilitating payments does
                not change ReComune’s ownership or operation of the Service.
              </p>

              <p>
                This Policy should be read together with our Terms of Service and
                Privacy Policy.
              </p>

              <p>
                Depending on your location and method of purchase, subscriptions and
                purchases may be processed through the Apple App Store, Google Play
                Store, or SWICH, including payments collected in Pakistan by Resolute
                Digitals as ReComune’s authorized Product Partner.
              </p>

              <p>
                The applicable cancellation and refund process may vary depending on
                how and where your purchase was made.
              </p>
            </PolicySection>

            <PolicySection
              id="subscriptions"
              number="02"
              title="Subscriptions and Automatic Renewal"
            >
              <p>
                The Service may offer paid subscriptions, premium features,
                promotional plans, or other paid offerings.
              </p>

              <p>
                Unless otherwise stated at the time of purchase, subscriptions may
                automatically renew at the end of each applicable billing period
                until canceled.
              </p>

              <p>
                The price, billing frequency, renewal terms, applicable taxes or
                charges, and other relevant conditions will be presented at or
                before the time of purchase.
              </p>

              <p>
                For purchases made in Pakistan through supported local payment
                methods, Resolute Digitals may collect the payment on behalf of
                ReComune as its authorized Product Partner.
              </p>

              <p>
                You are responsible for managing and cancelling your subscription
                through the method applicable to your purchase.
              </p>
            </PolicySection>

            <PolicySection
              id="cancelling"
              number="03"
              title="Cancelling a Subscription"
            >
              <p>
                You may cancel your subscription at any time using the cancellation
                method applicable to the platform or payment channel through which
                you purchased it.
              </p>

              <p>
                For subscriptions purchased through the Apple App Store or Google
                Play Store, cancellation should generally be completed through the
                applicable store account.
              </p>

              <p>
                For eligible subscriptions purchased in Pakistan through SWICH,
                with payment collected by Resolute Digitals on behalf of ReComune,
                cancellation may be requested or managed using the options provided
                for that subscription or by contacting the appropriate support
                channel.
              </p>

              <p>
                Cancellation generally prevents future renewals. Unless otherwise
                required by applicable law or applicable platform rules,
                cancellation does not automatically entitle you to a refund for
                amounts already paid.
              </p>

              <p>
                After cancellation, you will generally retain access to paid
                features until the end of your current paid billing period, unless
                otherwise stated at the time of purchase or required by applicable
                law.
              </p>

              <p>
                Deleting the Muslim App or deleting your Muslim App account does not
                automatically cancel an active subscription.
              </p>
            </PolicySection>

            <PolicySection
              id="apple"
              number="04"
              title="Apple App Store Purchases"
            >
              <p>
                If you purchased a subscription or another paid offering through
                the Apple App Store, Apple processes the transaction and generally
                controls subscription management, cancellations, and refund
                requests.
              </p>

              <p>
                You should manage or cancel your subscription through your Apple
                account or App Store subscription settings.
              </p>

              <p>
                Refund requests relating to Apple App Store purchases should
                generally be submitted directly to Apple and are subject to
                Apple’s applicable policies, eligibility requirements, procedures,
                and decisions.
              </p>

              <p>
                ReComune and Resolute Digitals do not control Apple’s refund
                approval process and cannot guarantee that Apple will approve a
                refund request.
              </p>
            </PolicySection>

            <PolicySection
              id="google"
              number="05"
              title="Google Play Store Purchases"
            >
              <p>
                If you purchased a subscription or another paid offering through
                the Google Play Store, you should generally manage or cancel the
                subscription through your Google Play account and subscription
                settings.
              </p>

              <p>
                Refund requests for Google Play purchases are subject to Google’s
                applicable refund policies, procedures, eligibility requirements,
                and decisions.
              </p>

              <p>
                Where Google permits or requires a refund or billing matter to be
                handled by ReComune, you may contact us using the contact
                information provided below.
              </p>
            </PolicySection>

            <PolicySection
              id="swich"
              number="06"
              title="SWICH Purchases in Pakistan"
            >
              <p>
                For eligible purchases made in Pakistan through SWICH, Resolute
                Digitals acts as ReComune’s authorized Product Partner and is
                authorized to facilitate and collect payments on behalf of ReComune
                for the Muslim App.
              </p>

              <p>
                A payment collected by Resolute Digitals in this capacity relates to
                the applicable Muslim App subscription, premium feature, or other
                paid offering provided by ReComune.
              </p>

              <p>
                Where applicable, the transaction or payment record may identify
                Resolute Digitals, SWICH, ReComune, Muslim App, or another
                applicable transaction descriptor associated with processing the
                purchase.
              </p>

              <p>Cancellation and refund requests for these purchases will be handled in accordance with:</p>

              <BulletList
                items={[
                  "The terms presented at the time of purchase;",
                  "This Refund & Cancellation Policy;",
                  "Any applicable SWICH requirements; and",
                  "Applicable law.",
                ]}
              />

              <p>
                Cancellation of an eligible recurring subscription generally
                prevents future renewals but does not automatically entitle the
                subscriber to a refund for a billing period that has already been
                paid.
              </p>

              <p>
                If you believe that a payment collected through SWICH was incorrect,
                duplicated, unauthorized, or otherwise subject to a billing error,
                please contact the designated support channel with sufficient
                information for the transaction to be identified and reviewed.
              </p>

              <p>
                Where a refund is approved for a SWICH transaction, the refund will
                generally be returned through the original payment method where
                reasonably possible, subject to applicable processing procedures
                and timelines.
              </p>
            </PolicySection>

            <PolicySection
              id="resolute-role"
              number="07"
              title="Role of Resolute Digitals"
            >
              <p>
                Resolute Digitals is a Product Partner of ReComune and is authorized
                to collect payments for the Muslim App in Pakistan.
              </p>

              <p>
                Unless expressly stated otherwise, Resolute Digitals’ role as
                Product Partner and authorized payment collection partner does not
                make Resolute Digitals the owner or operator of the Muslim App.
              </p>

              <p>
                ReComune remains responsible for the Service in accordance with its
                Terms of Service and Privacy Policy.
              </p>

              <p>
                Resolute Digitals may assist with payment-related matters for
                transactions it facilitates or collects, including:
              </p>

              <BulletList
                items={[
                  "Payment collection;",
                  "Transaction identification and verification;",
                  "Subscription payment administration;",
                  "Billing inquiries;",
                  "Refund processing where a refund has been authorized or is otherwise applicable; and",
                  "Other payment-related support reasonably necessary for purchases made through the applicable Pakistani payment channel.",
                ]}
              />

              <p>
                The involvement of Resolute Digitals does not alter any non-waivable
                rights available to users under applicable law.
              </p>
            </PolicySection>

            <PolicySection
              id="refund-eligibility"
              number="08"
              title="Refund Eligibility"
            >
              <p>
                Except where required by applicable law or applicable platform
                rules, subscription payments are generally non-refundable once the
                applicable paid billing period has begun.
              </p>

              <p>Refund eligibility may depend on factors including:</p>

              <BulletList
                items={[
                  "The method through which the purchase was made;",
                  "The date and circumstances of the transaction;",
                  "Whether the subscription or paid service has already been used;",
                  "Whether a duplicate or incorrect charge occurred;",
                  "Whether a technical or billing error occurred;",
                  "Applicable platform requirements; and",
                  "Applicable consumer protection laws.",
                ]}
              />

              <p>
                For purchases made through the Apple App Store or Google Play Store,
                refund eligibility and processing may be controlled by Apple or
                Google.
              </p>

              <p>
                For eligible purchases made in Pakistan through SWICH and collected
                by Resolute Digitals on behalf of ReComune, refund requests may be
                reviewed in accordance with this Policy, the terms applicable to the
                purchase, and applicable law.
              </p>

              <p>
                Nothing in this Policy limits refund, cancellation, withdrawal, or
                other consumer rights that cannot legally be waived.
              </p>
            </PolicySection>

            <PolicySection id="trials" number="09" title="Free Trials">
              <p>
                ReComune may offer free or discounted trial periods from time to
                time.
              </p>

              <p>
                Unless otherwise stated when you begin a trial, a trial may
                automatically convert into a paid subscription when the trial
                period ends.
              </p>

              <p>
                To avoid being charged, you must cancel before the applicable trial
                or promotional period expires, subject to the cancellation
                requirements applicable to the method through which you subscribed.
              </p>

              <p>
                The trial duration, renewal price, billing frequency, and other
                applicable conditions will be presented at the time of subscription.
              </p>

              <p>
                ReComune may modify or discontinue trial offers at its discretion,
                subject to applicable law.
              </p>
            </PolicySection>

            <PolicySection
              id="promotional"
              number="10"
              title="Promotional and Founding Member Plans"
            >
              <p>
                ReComune may offer founding member subscriptions, early-adopter
                pricing, grandfathered pricing, lifetime pricing offers, discounts,
                gifts, or other promotional plans.
              </p>

              <p>
                Unless expressly stated otherwise in writing, promotional plans
                provide access only to the features, functionality, and benefits
                included in the applicable offer or subscription tier.
              </p>

              <p>Promotional plans do not automatically guarantee access to:</p>

              <BulletList
                items={[
                  "New subscription tiers introduced in the future;",
                  "Premium add-ons;",
                  "Usage-based services;",
                  "Third-party services or integrations;",
                  "Features that incur significant ongoing costs;",
                  "Products or services offered separately from the Service; or",
                  "Future products, applications, or offerings operated by ReComune.",
                ]}
              />

              <p>
                Where a promotional plan includes grandfathered or special pricing,
                that pricing generally applies only while the applicable
                subscription remains active and in good standing.
              </p>

              <p>
                If a subscription is canceled, expires, lapses, is refunded, or
                otherwise terminates, eligibility for promotional or grandfathered
                pricing may be lost and may not be reinstated if the user later
                resubscribes.
              </p>
            </PolicySection>

            <PolicySection
              id="pricing"
              number="11"
              title="Changes to Subscription Pricing or Features"
            >
              <p>
                ReComune may change subscription pricing, features, plans, benefits,
                or availability from time to time, subject to applicable law and
                applicable platform requirements.
              </p>

              <p>
                Where required, notice of material pricing or subscription changes
                may be provided through the Service, by email, at the point of
                purchase, or through the applicable platform.
              </p>

              <p>
                For subscriptions purchased in Pakistan through SWICH, applicable
                pricing and subscription information may also be communicated or
                administered through Resolute Digitals in its capacity as ReComune’s
                authorized Product Partner.
              </p>
            </PolicySection>

            <PolicySection
              id="billing-errors"
              number="12"
              title="Billing Errors, Duplicate Charges, and Unauthorized Transactions"
            >
              <p>
                If you believe you were incorrectly charged, charged more than once,
                charged an incorrect amount, or charged for a transaction you did
                not authorize, please report the matter as soon as reasonably
                possible.
              </p>

              <p>
                For Apple App Store purchases, you may need to contact Apple
                directly.
              </p>

              <p>
                For Google Play Store purchases, you may need to contact Google
                directly or ReComune where Google permits or requires ReComune to
                address the matter.
              </p>

              <p>
                For purchases made in Pakistan through SWICH and collected by
                Resolute Digitals, the transaction may be reviewed by ReComune
                and/or Resolute Digitals as appropriate to identify the transaction
                and determine whether corrective action is required.
              </p>

              <p>When reporting a billing issue, please provide sufficient information to identify the transaction, such as:</p>

              <BulletList
                items={[
                  "Your Muslim App account email;",
                  "Transaction or reference number;",
                  "Purchase date;",
                  "Amount charged; and",
                  "A brief description of the issue.",
                ]}
              />

              <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-5">
                <p className="font-medium text-black">
                  Security reminder
                </p>

                <p className="mt-2 text-sm leading-7 text-black/55">
                  Do not send full card numbers, passwords, PINs, OTPs, or other
                  sensitive payment credentials by email or through unsecured
                  communication channels.
                </p>
              </div>
            </PolicySection>

            <PolicySection
              id="account-deletion"
              number="13"
              title="Account Deletion and Subscription Cancellation"
            >
              <p>
                Deleting your Muslim App account and cancelling your paid
                subscription are separate actions.
              </p>

              <p>
                Deleting your account or uninstalling the Muslim App may not
                automatically cancel an active subscription.
              </p>

              <p>If you no longer wish to use the Service, you should:</p>

              <NumberList
                items={[
                  "Cancel any active subscription using the cancellation method applicable to your Apple App Store, Google Play Store, or SWICH purchase; and",
                  "Separately delete your Muslim App account if you also want your account removed.",
                ]}
              />

              <p>
                If you delete your account without properly cancelling an active
                recurring subscription, you may continue to be charged until the
                subscription is cancelled.
              </p>

              <p>
                Account deletion and the handling of personal data following
                deletion are governed by our Privacy Policy and Terms of Service.
              </p>
            </PolicySection>

            <PolicySection
              id="suspension"
              number="14"
              title="Service Suspension or Termination"
            >
              <p>
                ReComune may suspend, restrict, or terminate access to the Service
                where permitted under the Terms of Service and applicable law.
              </p>

              <p>
                Suspension or termination resulting from a violation of the Terms
                of Service does not automatically entitle a user to a refund, except
                where otherwise required by applicable law or applicable platform
                rules.
              </p>

              <p>
                If ReComune permanently discontinues a paid portion of the Service,
                any applicable refund, credit, continued-access arrangement, or
                other remedy will be handled in accordance with applicable law and,
                where relevant, the requirements applicable to the method through
                which the subscription was purchased.
              </p>
            </PolicySection>

            <PolicySection
              id="approved-refunds"
              number="15"
              title="Processing of Approved Refunds"
            >
              <p>
                If a refund is approved, it will generally be returned through the
                original payment method or processed according to the procedures
                applicable to the original purchase.
              </p>

              <p>
                For Apple App Store or Google Play Store purchases, processing
                methods and timelines may be determined by Apple or Google.
              </p>

              <p>
                For purchases made in Pakistan through SWICH and collected by
                Resolute Digitals, approved refunds will generally be processed
                through the applicable payment channel to the original payment
                method where reasonably possible.
              </p>

              <p>
                Refund processing times may vary depending on SWICH, banks, card
                issuers, payment networks, mobile wallets, or other financial
                institutions involved in the transaction.
              </p>

              <p>
                ReComune and Resolute Digitals cannot guarantee how quickly a
                third-party financial institution will make refunded funds
                available after the refund has been processed.
              </p>
            </PolicySection>

            <PolicySection
              id="chargebacks"
              number="16"
              title="Chargebacks and Payment Disputes"
            >
              <p>
                If you experience a billing issue, we encourage you to contact the
                appropriate platform or support channel before initiating a payment
                dispute or chargeback so that the matter can be investigated and,
                where appropriate, resolved.
              </p>

              <p>
                For payments collected in Pakistan by Resolute Digitals, Resolute
                Digitals may assist ReComune in reviewing and responding to payment
                disputes relating to transactions it collected or facilitated.
              </p>

              <p>
                Submitting a chargeback does not guarantee a refund and may be
                subject to the rules and procedures of the relevant bank, payment
                network, financial institution, or platform.
              </p>

              <p>
                ReComune reserves the right to investigate payment disputes and take
                reasonable measures to prevent fraud or abuse, subject to applicable
                law.
              </p>
            </PolicySection>

            <PolicySection
              id="consumer-rights"
              number="17"
              title="Consumer Rights"
            >
              <p>
                Nothing in this Refund &amp; Cancellation Policy excludes,
                restricts, or modifies any rights or remedies available under
                applicable consumer protection laws that cannot legally be excluded,
                restricted, or modified by agreement.
              </p>

              <p>
                Where applicable law provides cancellation, refund, withdrawal, or
                similar rights that are more favorable than the terms of this
                Policy, those legal rights will apply.
              </p>
            </PolicySection>

            <PolicySection
              id="changes"
              number="18"
              title="Changes to This Policy"
            >
              <p>
                We may update this Refund &amp; Cancellation Policy from time to
                time to reflect changes to the Service, subscription offerings,
                billing arrangements, payment channels, platform requirements,
                relationships with authorized partners, or applicable law.
              </p>

              <p>
                When changes are made, the “Last updated” date at the top of this
                Policy will be updated.
              </p>

              <p>
                Where required by applicable law, additional notice of material
                changes will be provided.
              </p>
            </PolicySection>

            {/* CONTACT */}
            <section
              id="contact"
              className="scroll-mt-28 pt-3"
            >
              <div className="relative overflow-hidden rounded-[26px] bg-black p-8 text-white sm:p-10 md:p-12">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
                      19
                    </span>

                    <span className="text-sm text-white/45">
                      Contact information
                    </span>
                  </div>

                  <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                    Contact Us
                  </h2>

                  <p className="mt-5 max-w-2xl leading-8 text-white/60">
                    For questions regarding the Muslim App, this Refund &amp;
                    Cancellation Policy, or subscription matters handled by
                    ReComune:
                  </p>

                  <div className="mt-7 border-t border-white/15 pt-6">
                    <p className="font-semibold">ReComune, Inc.</p>
                    <p className="mt-1 text-white/60">Muslim App</p>

                    <a
                      href="mailto:legal@recomune.com"
                      className="group mt-5 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-white/85"
                    >
                      <FaEnvelope />
                      legal@recomune.com
                      <FaArrowRight className="-rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>

                  <div className="mt-8 space-y-4 border-t border-white/15 pt-6 text-sm leading-7 text-white/50">
                    <p>
                      For purchases made through the Apple App Store or Google Play
                      Store, certain cancellation, refund, and billing matters may
                      need to be handled directly through Apple or Google.
                    </p>

                    <p>
                      For payments made in Pakistan through SWICH and collected by
                      Resolute Digitals as ReComune’s authorized Product Partner,
                      payment-related inquiries may also be handled through the
                      designated local payment support channel made available in
                      connection with the purchase.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="border-t border-black/10 px-5 py-9 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
              <FaShieldHalved />
            </span>

            <div>
              <p className="text-sm font-semibold">Muslim App</p>
              <p className="mt-1 text-xs text-black/40">
                by ReComune, Inc.
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="w-fit text-xs font-medium text-black/40 transition hover:text-black"
          >
            Back to top ↑
          </button>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   POLICY SECTION
============================================================ */

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-black/10 pb-12 mb-12 md:pb-16 md:mb-16"
    >
      <div className="flex items-start gap-4 md:gap-6">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-xs font-semibold text-white md:h-12 md:w-12">
          {number}
        </span>

        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
            {title}
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-8 text-black/60 sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BULLETS
============================================================ */

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 pt-1">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-4"
        >
          <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ============================================================
   NUMBERED LIST
============================================================ */

function NumberList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-4">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-4"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-[11px] font-semibold text-white">
            {index + 1}
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}