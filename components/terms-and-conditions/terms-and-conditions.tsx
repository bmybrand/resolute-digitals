"use client";

import React from "react";
import {
  FaArrowRight,
  FaChevronRight,
  FaEnvelope,
  FaGlobe,
  FaShieldAlt,
  FaFileContract,
} from "react-icons/fa";

const TermsAndConditionsPage = () => {
  const sections = [
    {
      id: "acceptance",
      number: "01",
      title: "Acceptance of Terms",
    },
    {
      id: "services",
      number: "02",
      title: "Our Services",
    },
    {
      id: "user-responsibilities",
      number: "03",
      title: "User Responsibilities",
    },
    {
      id: "intellectual-property",
      number: "04",
      title: "Intellectual Property",
    },
    {
      id: "third-party",
      number: "05",
      title: "Third-Party Services",
    },
    {
      id: "payments",
      number: "06",
      title: "Payments & Billing",
    },
    {
      id: "confidentiality",
      number: "07",
      title: "Confidentiality",
    },
    {
      id: "limitations",
      number: "08",
      title: "Limitation of Liability",
    },
    {
      id: "termination",
      number: "09",
      title: "Termination",
    },
    {
      id: "changes",
      number: "10",
      title: "Changes to These Terms",
    },
    {
      id: "governing-law",
      number: "11",
      title: "Governing Law",
    },
    {
      id: "contact",
      number: "12",
      title: "Contact Us",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="bg-[#000A21] text-white overflow-hidden">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-6">
        <div
          className="
            relative overflow-hidden
            min-h-[330px] md:min-h-[390px]
            rounded-[22px]
            bg-gradient-to-br
            from-[#2378DA]
            via-[#1D69C1]
            to-[#0E4D98]
            flex items-center justify-center
          "
        >
          {/* Background decoration */}
          <div
            className="
              absolute
              w-[620px] h-[620px]
              rounded-full
              border border-white/10
              -left-[220px] -top-[330px]
            "
          />

          <div
            className="
              absolute
              w-[500px] h-[500px]
              rounded-full
              border border-white/[0.08]
              left-[70px] -top-[250px]
            "
          />

          <div
            className="
              absolute
              w-[750px] h-[750px]
              rounded-full
              border border-white/[0.07]
              right-[-350px] bottom-[-520px]
            "
          />

          <div
            className="
              absolute
              top-0 right-0
              w-[55%] h-full
              opacity-20
              bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22)_0,transparent_65%)]
            "
          />

          {/* Hero Content */}
          <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
            <div className="mb-5 flex justify-center">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 transition hover:bg-white/15 sm:text-sm"
              >
                <span aria-hidden="true">←</span>
                Go Back
              </a>
            </div>

            <div
              className="
                inline-flex items-center gap-2
                px-4 py-2
                rounded-full
                border border-white/20
                bg-white/10
                backdrop-blur-sm
                text-xs sm:text-sm
                mb-5
              "
            >
              <FaFileContract className="text-white" />
              Legal Information
            </div>

            <h1
              className="
                text-[38px]
                sm:text-[48px]
                md:text-[58px]
                lg:text-[66px]
                leading-[1]
                font-bold
                tracking-[-0.04em]
              "
            >
              Terms &amp; Conditions
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                mx-auto
                text-sm
                sm:text-base
                md:text-lg
                leading-7
                text-white/75
              "
            >
              Please review the terms that govern your use of Resolute
              Digitals&apos; website, services, platforms, and digital
              solutions.
            </p>

            <div className="mt-7 flex items-center justify-center gap-2 text-sm text-white/60">
              <span>Home</span>

              <FaChevronRight className="text-[10px]" />

              <span className="text-white">
                Terms &amp; Conditions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="relative px-5 sm:px-8 lg:px-12 xl:px-16 pt-20 md:pt-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-5">
              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.18em]
                  text-[#59A7FF]
                  border border-[#2378DA]/30
                  bg-[#2378DA]/10
                  rounded-full
                  px-3 py-1.5
                "
              >
                Legal Agreement
              </span>
            </div>

            <h2
              className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-semibold
                leading-tight
                tracking-[-0.03em]
              "
            >
              Clear Terms.
              <br />
              <span className="text-[#2378DA]">
                Transparent Relationships.
              </span>
            </h2>

            <p
              className="
                mt-6
                text-white/60
                leading-8
                max-w-3xl
                text-[15px]
                md:text-base
              "
            >
              These Terms and Conditions explain the rules and
              responsibilities that apply when you access our website or
              engage Resolute Digitals for digital, technology, design,
              development, marketing, or related professional services.
            </p>

            <p className="mt-4 text-sm text-white/40">
              Last updated: August 2026
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN TERMS AREA
      ========================================================= */}
      <section className="px-5 sm:px-8 lg:px-12 xl:px-16 pt-16 md:pt-20 pb-24">
        <div
          className="
            max-w-[1400px]
            mx-auto
            grid
            lg:grid-cols-[300px_minmax(0,1fr)]
            gap-12
            xl:gap-20
          "
        >
          {/* =====================================================
              SIDEBAR
          ===================================================== */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-white/40
                  mb-6
                "
              >
                On This Page
              </p>

              <nav className="border-l border-white/10">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="
                      group
                      w-full
                      flex
                      items-center
                      gap-4
                      text-left
                      py-3
                      pl-5
                      pr-3
                      border-l-2
                      border-transparent
                      -ml-[1px]
                      text-white/45
                      hover:text-white
                      hover:border-[#2378DA]
                      transition-all
                      duration-300
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        text-[#2378DA]
                        font-medium
                        min-w-[22px]
                      "
                    >
                      {section.number}
                    </span>

                    <span className="text-sm">
                      {section.title}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* =====================================================
              CONTENT
          ===================================================== */}
          <div className="min-w-0">
            {/* 01 */}
            <LegalSection
              id="acceptance"
              number="01"
              title="Acceptance of Terms"
            >
              <p>
                By accessing or using the Resolute Digitals website,
                requesting information, submitting a form, purchasing a
                service, or otherwise engaging with us, you agree to be
                bound by these Terms and Conditions.
              </p>

              <p>
                If you do not agree with any part of these terms, you
                should discontinue use of the website and our services.
                Where a separate written service agreement, proposal,
                statement of work, or contract exists, the terms of that
                agreement may supplement or override relevant portions
                of these website terms.
              </p>
            </LegalSection>

            {/* 02 */}
            <LegalSection
              id="services"
              number="02"
              title="Our Services"
            >
              <p>
                Resolute Digitals provides digital and technology
                services that may include website design and development,
                software development, mobile application development,
                UI/UX design, digital marketing, branding, data
                solutions, consulting, maintenance, and related
                professional services.
              </p>

              <p>
                The specific scope, deliverables, timelines, fees, and
                responsibilities for client projects are defined through
                individual proposals, agreements, statements of work, or
                other written documentation provided for that project.
              </p>

              <p>
                We may update, expand, modify, suspend, or discontinue
                portions of our services when reasonably necessary.
              </p>
            </LegalSection>

            {/* 03 */}
            <LegalSection
              id="user-responsibilities"
              number="03"
              title="User Responsibilities"
            >
              <p>
                When using our website or services, you agree to provide
                accurate information and to use our platforms and
                services only for lawful purposes.
              </p>

              <BulletList
                items={[
                  "Do not attempt to gain unauthorized access to our systems, infrastructure, accounts, or networks.",
                  "Do not introduce malicious software, harmful code, automated attacks, or disruptive technology.",
                  "Do not use our website or services to violate applicable laws, regulations, or third-party rights.",
                  "Provide necessary content, approvals, credentials, information, and feedback required for us to complete agreed project work.",
                  "Maintain the security of any credentials or access information provided to you.",
                ]}
              />
            </LegalSection>

            {/* 04 */}
            <LegalSection
              id="intellectual-property"
              number="04"
              title="Intellectual Property"
            >
              <p>
                Unless otherwise stated, the Resolute Digitals website,
                brand identity, trademarks, designs, graphics, layouts,
                software components, written materials, and other
                proprietary content are owned by or licensed to Resolute
                Digitals and are protected by applicable intellectual
                property laws.
              </p>

              <p>
                You may not reproduce, redistribute, modify, publish,
                license, sell, or commercially exploit our proprietary
                website content without prior written permission.
              </p>

              <p>
                Ownership of work created specifically for a client is
                governed by the applicable service agreement or
                statement of work, including any requirements relating
                to final payment, third-party assets, software licenses,
                source code, or pre-existing intellectual property.
              </p>
            </LegalSection>

            {/* 05 */}
            <LegalSection
              id="third-party"
              number="05"
              title="Third-Party Services"
            >
              <p>
                Our website and project work may incorporate or link to
                third-party platforms, software, APIs, hosting
                providers, payment processors, plugins, analytics
                systems, social networks, or other external services.
              </p>

              <p>
                Resolute Digitals does not control every third-party
                platform and cannot guarantee its continued
                availability, performance, security, pricing, policies,
                or functionality. Your use of third-party services may
                also be subject to separate terms and privacy policies
                established by those providers.
              </p>
            </LegalSection>

            {/* 06 */}
            <LegalSection
              id="payments"
              number="06"
              title="Payments & Billing"
            >
              <p>
                Project pricing, payment schedules, deposits, recurring
                fees, and billing terms are established in the
                applicable proposal, invoice, or service agreement.
              </p>

              <p>
                Unless otherwise agreed in writing, clients are
                responsible for paying invoices according to the payment
                schedule presented for their engagement. Work may be
                paused or access to certain services may be restricted
                when required payments remain outstanding.
              </p>

              <p>
                Fees charged by third-party providers, including hosting,
                domains, software subscriptions, advertising platforms,
                payment processors, or licensing providers, may be
                separate from Resolute Digitals&apos; professional
                service fees unless explicitly included.
              </p>
            </LegalSection>

            {/* 07 */}
            <LegalSection
              id="confidentiality"
              number="07"
              title="Confidentiality"
            >
              <p>
                During a business relationship, either party may receive
                confidential or proprietary information belonging to the
                other. We expect confidential information to be handled
                responsibly and used only for legitimate project and
                business purposes.
              </p>

              <p>
                Where additional confidentiality requirements apply,
                they may be addressed through a separate non-disclosure
                agreement or project contract.
              </p>
            </LegalSection>

            {/* 08 */}
            <LegalSection
              id="limitations"
              number="08"
              title="Limitation of Liability"
            >
              <p>
                Resolute Digitals aims to deliver professional,
                reliable, and commercially useful digital solutions.
                However, no website, software system, marketing
                campaign, technology platform, or third-party service
                can be guaranteed to operate without interruption,
                errors, security risks, external changes, or unforeseen
                technical issues.
              </p>

              <p>
                To the maximum extent permitted by applicable law,
                Resolute Digitals will not be responsible for indirect,
                incidental, special, consequential, or punitive damages
                resulting from the use of our website or services.
              </p>

              <p>
                Additional liability provisions relating to a specific
                client engagement may be established in the applicable
                service agreement.
              </p>
            </LegalSection>

            {/* 09 */}
            <LegalSection
              id="termination"
              number="09"
              title="Termination"
            >
              <p>
                Either Resolute Digitals or a client may terminate a
                service relationship according to the termination
                provisions contained in the applicable service
                agreement.
              </p>

              <p>
                We also reserve the right to restrict access to our
                website, systems, or services where we reasonably
                believe there has been unlawful activity, abuse,
                security interference, non-payment, or a material breach
                of applicable terms.
              </p>

              <p>
                Any outstanding payment obligations or provisions
                intended to survive termination will remain in effect
                where applicable.
              </p>
            </LegalSection>

            {/* 10 */}
            <LegalSection
              id="changes"
              number="10"
              title="Changes to These Terms"
            >
              <p>
                We may revise these Terms and Conditions periodically to
                reflect changes in our services, technology, business
                practices, or legal requirements.
              </p>

              <p>
                Updated terms will be published on this page with a
                revised effective date. Continued use of the website
                after updated terms are published constitutes acceptance
                of the revised terms to the extent permitted by law.
              </p>
            </LegalSection>

            {/* 11 */}
            <LegalSection
              id="governing-law"
              number="11"
              title="Governing Law"
            >
              <p>
                These Terms and Conditions will be interpreted in
                accordance with applicable laws and any jurisdictional
                provisions contained in a separate written agreement
                between Resolute Digitals and the relevant client.
              </p>

              <p>
                Where a specific contract establishes governing law,
                venue, dispute resolution, arbitration, or other legal
                procedures, the terms of that contract will control the
                applicable business relationship.
              </p>
            </LegalSection>

            {/* 12 CONTACT */}
            <section
              id="contact"
              className="scroll-mt-28 pt-6 md:pt-10"
            >
              <div
                className="
                  relative
                  overflow-hidden
                  border
                  border-[#2378DA]/30
                  bg-gradient-to-br
                  from-[#0B2146]
                  to-[#07162F]
                  rounded-[26px]
                  p-7
                  sm:p-9
                  md:p-12
                "
              >
                <div
                  className="
                    absolute
                    w-[350px]
                    h-[350px]
                    rounded-full
                    bg-[#2378DA]/10
                    blur-[80px]
                    -right-28
                    -top-32
                  "
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="
                        w-11 h-11
                        rounded-full
                        bg-[#2378DA]
                        flex
                        items-center
                        justify-center
                        text-sm
                        font-semibold
                      "
                    >
                      12
                    </span>

                    <span className="text-sm text-[#59A7FF]">
                      Need clarification?
                    </span>
                  </div>

                  <h2
                    className="
                      text-3xl
                      md:text-4xl
                      font-semibold
                      tracking-[-0.03em]
                    "
                  >
                    Contact Us
                  </h2>

                  <p className="mt-5 text-white/60 leading-7 max-w-2xl">
                    If you have questions about these Terms and
                    Conditions, your agreement, or the use of our
                    services, contact the Resolute Digitals team.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a
                      href="mailto:contact@resolutedigitals.com"
                      className="
                        group
                        inline-flex
                        items-center
                        justify-center
                        gap-3
                        bg-[#2378DA]
                        hover:bg-[#1D69C1]
                        transition
                        rounded-full
                        px-6
                        py-3.5
                        text-sm
                        font-medium
                      "
                    >
                      <FaEnvelope />

                      contact@resolutedigitals.com

                      <FaArrowRight
                        className="
                          text-xs
                          transition-transform
                          group-hover:translate-x-1
                        "
                      />
                    </a>

                    <a
                      href="https://resolutedigitals.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-3
                        border
                        border-white/15
                        hover:border-white/30
                        hover:bg-white/5
                        transition
                        rounded-full
                        px-6
                        py-3.5
                        text-sm
                        text-white/80
                      "
                    >
                      <FaGlobe />

                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM DECORATION
      ========================================================= */}
      <section className="px-5 sm:px-8 lg:px-12 xl:px-16 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="border-t border-white/[0.08] pt-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <div
                  className="
                    w-10 h-10
                    rounded-full
                    border border-[#2378DA]/30
                    bg-[#2378DA]/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <FaShieldAlt className="text-[#2378DA]" />
                </div>

                <div>
                  <p className="text-sm text-white/75">
                    Resolute Digitals
                  </p>

                  <p className="text-xs text-white/35 mt-1">
                    Technology. Strategy. Digital Growth.
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
                className="
                  text-xs
                  text-white/45
                  hover:text-white
                  transition
                "
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

/* =============================================================
   REUSABLE LEGAL SECTION
============================================================= */

type LegalSectionProps = {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
};

const LegalSection = ({
  id,
  number,
  title,
  children,
}: LegalSectionProps) => {
  return (
    <section
      id={id}
      className="
        scroll-mt-28
        border-b
        border-white/[0.08]
        pb-12
        mb-12
        md:pb-16
        md:mb-16
      "
    >
      <div className="flex gap-4 md:gap-6 items-start">
        <div
          className="
            shrink-0
            w-10 h-10
            md:w-12 md:h-12
            rounded-full
            border border-[#2378DA]/30
            bg-[#2378DA]/10
            flex
            items-center
            justify-center
            text-[#59A7FF]
            text-xs
            md:text-sm
            font-medium
          "
        >
          {number}
        </div>

        <div className="min-w-0 flex-1">
          <h2
            className="
              text-2xl
              md:text-3xl
              font-semibold
              tracking-[-0.025em]
              text-white
            "
          >
            {title}
          </h2>

          <div
            className="
              mt-6
              space-y-5
              text-white/58
              text-[15px]
              md:text-base
              leading-7
              md:leading-8
            "
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

/* =============================================================
   BULLET LIST
============================================================= */

type BulletListProps = {
  items: string[];
};

const BulletList = ({ items }: BulletListProps) => {
  return (
    <ul className="space-y-4 pt-1">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-4"
        >
          <span
            className="
              mt-[10px]
              block
              w-1.5 h-1.5
              rounded-full
              bg-[#2378DA]
              shrink-0
            "
          />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default TermsAndConditionsPage;