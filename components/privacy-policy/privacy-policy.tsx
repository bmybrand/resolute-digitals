import {
  FaChevronRight,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";

const sections = [
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "information-collected",
    title: "Information We Collect",
  },
  {
    id: "how-we-use",
    title: "How We Use Information",
  },
  {
    id: "sharing",
    title: "Sharing & Disclosure",
  },
  {
    id: "cookies",
    title: "Cookies & Analytics",
  },
  {
    id: "security",
    title: "Data Security",
  },
  {
    id: "rights",
    title: "Your Rights",
  },
  {
    id: "retention",
    title: "Retention",
  },
  {
    id: "changes",
    title: "Changes to This Policy",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#000A21] text-white overflow-hidden">
      <section className="relative px-4 sm:px-6 lg:px-8 pt-6">
        <div className="relative overflow-hidden min-h-[330px] md:min-h-[390px] rounded-[22px] bg-gradient-to-br from-[#2378DA] via-[#1D69C1] to-[#0E4D98] flex items-center justify-center">
          <div className="absolute w-[620px] h-[620px] rounded-full border border-white/10 -left-[220px] -top-[330px]" />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-white/[0.08] left-[70px] -top-[250px]" />
          <div className="absolute w-[750px] h-[750px] rounded-full border border-white/[0.07] right-[-350px] bottom-[-520px]" />
          <div className="absolute top-0 right-0 w-[55%] h-full opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22)_0,transparent_65%)]" />

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

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-xs sm:text-sm mb-5">
              <FaShieldAlt className="text-white" />
              Legal Information
            </div>

            <h1 className="text-[38px] sm:text-[48px] md:text-[58px] lg:text-[66px] leading-[1] font-bold tracking-[-0.04em]">
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-7 text-white/75">
              This Privacy Policy explains how Resolute Digitals collects, uses, stores, and protects information when you visit our website or use our services.
            </p>

            <div className="mt-7 flex items-center justify-center gap-2 text-sm text-white/60">
              <span>Home</span>
              <FaChevronRight className="text-[10px]" />
              <span className="text-white">Privacy Policy</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 sm:px-8 lg:px-12 xl:px-16 pt-20 md:pt-28">
        <div className="max-w-[1400px] mx-auto grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-8 h-fit">
            <div className="rounded-[24px] border border-white/10 bg-white/3 p-5 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3 text-white">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2378DA]/20 text-[#59A7FF]">
                  <FaShieldAlt className="text-sm" />
                </span>
                <span className="text-lg font-semibold">Table of Contents</span>
              </div>

              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-xl border border-transparent px-3 py-2 text-sm text-white/70 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-10">
            <div className="rounded-[28px] border border-white/10 bg-white/3 p-6 md:p-8">
              <div id="overview" className="scroll-mt-24 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#2378DA]/30 bg-[#2378DA]/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#59A7FF]">
                  <FaUserShield className="text-[10px]" />
                  Your Privacy Matters
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em]">
                  We are committed to protecting your data.
                </h2>

                <p className="text-base md:text-lg leading-8 text-white/75">
                  Resolute Digitals (“we,” “our,” or “us”) respects the privacy of visitors and clients who interact with our website, digital solutions, and related services. This policy describes what information we collect, why we collect it, how we use it, and the choices available to you.
                </p>

                <p className="text-base md:text-lg leading-8 text-white/75">
                  By accessing our website or engaging with our services, you agree to the practices described in this Privacy Policy.
                </p>
              </div>
            </div>

            <div id="information-collected" className="rounded-[28px] border border-white/10 bg-white/3 p-6 md:p-8 scroll-mt-24">
              <h3 className="mb-5 text-2xl md:text-3xl font-semibold tracking-[-0.03em]">Information We Collect</h3>
              <div className="space-y-4 text-base leading-8 text-white/75">
                <p>We may collect the following types of information:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Personal information you provide directly, such as your name, email address, phone number, company name, and project details.</li>
                  <li>Business contact information submitted through contact forms, quote requests, or service inquiries.</li>
                  <li>Website usage information, including IP address, browser type, device category, pages visited, time spent on pages, and referring URLs.</li>
                  <li>Cookies and tracking data used to improve website performance, user experience, and analytics.</li>
                  <li>Communications, including emails, messages, and support requests sent to us.</li>
                </ul>
              </div>
            </div>

            <div id="how-we-use" className="rounded-[28px] border border-white/10 bg-white/3 p-6 md:p-8 scroll-mt-24">
              <h3 className="mb-5 text-2xl md:text-3xl font-semibold tracking-[-0.03em]">How We Use Information</h3>
              <div className="space-y-4 text-base leading-8 text-white/75">
                <p>We use the information we collect to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Respond to inquiries and provide services requested by clients or prospects.</li>
                  <li>Manage project discussions, proposals, and customer onboarding.</li>
                  <li>Improve website functionality, user experience, and content quality.</li>
                  <li>Analyze trends and performance through aggregated analytics.</li>
                  <li>Send relevant updates, newsletters, or service communications where legally permitted.</li>
                  <li>Protect our systems, users, and business interests against misuse, fraud, or security threats.</li>
                </ul>
              </div>
            </div>

            <div id="sharing" className="rounded-[28px] border border-white/10 bg-white/3 p-6 md:p-8 scroll-mt-24">
              <h3 className="mb-5 text-2xl md:text-3xl font-semibold tracking-[-0.03em]">Sharing &amp; Disclosure</h3>
              <div className="space-y-4 text-base leading-8 text-white/75">
                <p>We do not sell personal information. However, we may disclose information to trusted third parties when necessary to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Provide hosting, analytics, email, or technical support services.</li>
                  <li>Fulfill legal obligations, court orders, or regulatory requirements.</li>
                  <li>Protect the rights, safety, or property of Resolute Digitals, our clients, or the public.</li>
                  <li>Facilitate business operations in the course of a merger, acquisition, or similar corporate transition.</li>
                </ul>
                <p>We require third-party providers to handle information in a manner consistent with this policy and applicable data laws.</p>
              </div>
            </div>

            <div id="cookies" className="rounded-[28px] border border-white/10 bg-white/3 p-6 md:p-8 scroll-mt-24">
              <h3 className="mb-5 text-2xl md:text-3xl font-semibold tracking-[-0.03em]">Cookies &amp; Analytics</h3>
              <div className="space-y-4 text-base leading-8 text-white/75">
                <p>We may use cookies, web beacons, and similar technologies to collect usage data, remember preferences, and improve performance. These technologies help us understand how visitors interact with our site and which content is most useful.</p>
                <p>You may disable cookies in your browser settings, though some parts of the website may not function as intended if cookies are turned off.</p>
              </div>
            </div>

            <div id="security" className="rounded-[28px] border border-white/10 bg-white/3 p-6 md:p-8 scroll-mt-24">
              <h3 className="mb-5 text-2xl md:text-3xl font-semibold tracking-[-0.03em]">Data Security</h3>
              <div className="space-y-4 text-base leading-8 text-white/75">
                <p>We apply reasonable administrative, technical, and organizational safeguards to protect personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure.</p>
                <p>While we strive to protect your information, we cannot guarantee absolute security and advise users to exercise caution when sharing personal data online.</p>
              </div>
            </div>

            <div id="rights" className="rounded-[28px] border border-white/10 bg-white/3 p-6 md:p-8 scroll-mt-24">
              <h3 className="mb-5 text-2xl md:text-3xl font-semibold tracking-[-0.03em]">Your Rights</h3>
              <div className="space-y-4 text-base leading-8 text-white/75">
                <p>Depending on your jurisdiction, you may have rights to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Access the personal information we hold about you.</li>
                  <li>Request correction of inaccurate or incomplete information.</li>
                  <li>Request deletion of your personal data, subject to legal and contractual limitations.</li>
                  <li>Object to or restrict certain processing activities.</li>
                  <li>Withdraw consent for processing where consent is used as the legal basis.</li>
                </ul>
                <p>To exercise these rights, please contact us using the information in the Contact section below.</p>
              </div>
            </div>

            <div id="retention" className="rounded-[28px] border border-white/10 bg-white/3 p-6 md:p-8 scroll-mt-24">
              <h3 className="mb-5 text-2xl md:text-3xl font-semibold tracking-[-0.03em]">Retention</h3>
              <div className="space-y-4 text-base leading-8 text-white/75">
                <p>We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, to comply with legal obligations, to resolve disputes, and to enforce agreements.</p>
              </div>
            </div>

            <div id="changes" className="rounded-[28px] border border-white/10 bg-white/3 p-6 md:p-8 scroll-mt-24">
              <h3 className="mb-5 text-2xl md:text-3xl font-semibold tracking-[-0.03em]">Changes to This Policy</h3>
              <div className="space-y-4 text-base leading-8 text-white/75">
                <p>We may update this Privacy Policy from time to time. If material changes are made, we will revise the date at the bottom of this page and, where appropriate, notify users through the website or direct communication.</p>
              </div>
            </div>

            <div id="contact" className="rounded-[28px] border border-white/10 bg-white/3 p-6 md:p-8 scroll-mt-24">
              <h3 className="mb-5 text-2xl md:text-3xl font-semibold tracking-[-0.03em]">Contact Us</h3>
              <div className="space-y-4 text-base leading-8 text-white/75">
                <p>If you have questions regarding this Privacy Policy or the handling of your personal data, please contact us:</p>
                <div className="rounded-2xl border border-white/10 bg-[#0B1731] p-4">
                  <p className="font-medium text-white">Resolute Digitals</p>
                  <p>Email: contact@resolutedigitals.com</p>
                  <p>Website: www.resolutedigitals.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
