"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { useGeoCountry } from "@/utils/useGeoCountry";
import { cn } from "@/lib/utils";

type FooterVariant = "default" | "monochrome" | "recomune";

type FooterSecProps = {
  variant?: FooterVariant;
};

const FooterSec = ({ variant = "default" }: FooterSecProps) => {
  const pathname = usePathname();
  const { countryCode, loading: geoLoading } = useGeoCountry();

  const isMonochrome = variant === "monochrome";
  const isRecomune = variant === "recomune";
  const isSimpleDark = isMonochrome || isRecomune;

  /*
   * Muslim App quick link
   * Only shows on:
   * /partners/muslim-app
   */
  const isMuslimAppPage =
    pathname === "/partners/muslim-app" ||
    pathname === "/partners/muslim-app/";

  const isPartnerPage =
    pathname === "/partners" ||
    pathname === "/partners/" ||
    pathname.startsWith("/partners/");

  const isMuslimAppDetailPage =
    pathname === "/legal/refund-cancellation" ||
    pathname === "/legal/refund-cancellation/" ||
    pathname === "/legal/business-affiliation" ||
    pathname === "/legal/business-affiliation/";

  const isMuslimAppRelatedPage = isMuslimAppPage || isMuslimAppDetailPage;
  const usesMuslimAppLegalLinks = isMuslimAppPage || isMuslimAppDetailPage;

  /*
   * Country detection
   */
  const normalizedCountryCode = (countryCode ?? "").toUpperCase();

  const isUS = normalizedCountryCode === "US";
  const isUAE = normalizedCountryCode === "AE";
  const isPakistan = !isUS && !isUAE;

  /*
   * Footer logo
   */
  const footerLogoSrc = isUAE
    ? "/assets/logo_dubai_footer.png"
    : "/assets/rd-image004.svg";

  /*
   * ============================================================
   * FOOTER LINKS
   * ============================================================
   */

  const footerColumns = [
    {
      title: isMuslimAppPage ? "Quick Access" : "Quick Links",
      items: usesMuslimAppLegalLinks
        ? [
            {
              label: "Terms of Service",
              href: "https://ourmuslimapp.com/legal/terms",
              external: true,
            },
            {
              label: "Privacy Policy",
              href: "https://ourmuslimapp.com/legal/privacy",
              external: true,
            },
            {
              label: "Refund Policy",
              href: "/legal/refund-cancellation/",
              external: false,
            },
            {
              label: "Business Affiliation",
              href: "/legal/business-affiliation/",
              external: false,
            },
          ]
        : [
            {
              label: "Core Services",
              href: "/services/",
              external: false,
            },
            {
              label: "Company",
              href: "/about/",
              external: false,
            },
            {
              label: "Contact Info",
              href: "/contact/",
              external: false,
            },
            ...(!isPartnerPage
          ? [
              {
                label: "Visit Muslim App",
                href: "https://ourmuslimapp.com/",
                external: true,
              },
            ]
          : []),
          ],
    },

    {
      title: "Services",
      items: [
        {
          label: "Software Development",
          href: "/services/software-development/",
          external: false,
        },
        {
          label: "App Development",
          href: "/services/app-development/",
          external: false,
        },
        {
          label: "Digital Marketing",
          href: "/services/digital-marketing/",
          external: false,
        },
        {
          label: "Portfolio",
          href: "/casestudy/",
          external: false,
        },
        {
          label: "Case Studies",
          href: "/casestudy/",
          external: false,
        },
        {
          label: "FAQs",
          href: "/services/#faq",
          external: false,
        },
      ],
    },

    {
      title: "Company",
      items: [
        {
          label: "About Us",
          href: "/about/",
          external: false,
        },
        {
          label: "Design & Experience",
          href: "/services/design-experience/",
          external: false,
        },
        {
          label: "Our Team",
          href: "/about/#team",
          external: false,
        },
        {
          label: "Blog",
          href: "/blog/",
          external: false,
        },
        {
          label: "Privacy Policy",
          href: "/privacy-policy/",
          external: false,
        },

        // This now opens your Terms & Conditions page
        {
          label: "Terms & Conditions",
          href: "/terms-and-conditions/",
          external: false,
        },
      ],
    },
  ];

  /*
   * ============================================================
   * CONTACT DETAILS BY COUNTRY
   * ============================================================
   */

  const contactData = isUAE
    ? {
        phone: null,
        phoneHref: null,
        email: "informationtechnology@resolutedigitals.com",
        address:
          "G-17, Hamood Building, Area: Port Saeed, Dubai, UAE",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=G-17+Hamood+Building+Port+Saeed+Dubai+UAE",
      }
    : isPakistan
      ? {
          phone: "+92 334 3448974",
          phoneHref: "tel:+923343448974",
          email: "contact@resolutedigitals.com",
          address:
            "Plot No. E-88, Block B Gulshan e Jamal, Karachi, 75260",
          mapUrl:
            "https://www.google.com/maps/search/?api=1&query=Plot+No+E-88+Block+B+Gulshan+e+Jamal+Karachi+75260",
        }
      : {
          phone: "+1 (830) 267-9917",
          phoneHref: "tel:+18302679917",
          email: "support@resolutedigitals.com",
          address:
            "1234 Innovation Drive, Suite 200 Austin, TX 73301, USA",
          mapUrl:
            "https://www.google.com/maps/search/?api=1&query=1234+Innovation+Drive+Suite+200+Austin+TX+73301",
        };

  return (
    <div
      className={cn(
        "flex flex-col items-center",
        isRecomune && "bg-white pt-8"
      )}
    >
      {/* ========================================================
          TOP DECORATIVE IMAGE
      ======================================================== */}

      <img
        src="/assets/rd-image080.svg"
        alt=""
        aria-hidden="true"
        className={cn(
          "w-[70%] mt-10 lg:mt-30",
          isMonochrome &&
            "grayscale brightness-0 opacity-15",
          isRecomune &&
            "grayscale brightness-0 opacity-15",
          isMuslimAppRelatedPage &&
            "hidden"
        )}
      />

      {/* ========================================================
          FOOTER
      ======================================================== */}

      <footer
        className={cn(
          "relative overflow-hidden text-white",
          "pt-16 pb-8 px-6 md:px-12 lg:px-20",
          "rounded-3xl lg:m-5 xl:m-9",
          isSimpleDark
            ? "bg-black"
            : "bg-[#081733]"
        )}
      >
        {/* ======================================================
            NEWSLETTER
        ====================================================== */}

        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12 mx-auto w-full">
          {/* Newsletter Text */}
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Subscribe for the Latest Digital Insights
            </h2>

            <p className="text-white/70 mb-4">
              Get the latest insights on web trends, marketing
              strategies, &amp; tech innovations — delivered
              straight to your inbox.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="flex-1 min-w-[250px] flex flex-col gap-4">
            <form
              className="flex flex-row items-center gap-3 w-full flex-wrap"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="border border-white/50 p-1 rounded-full flex items-center gap-3 flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  aria-label="Email address"
                  className="
                    px-4
                    py-2
                    rounded-lg
                    w-full
                    bg-transparent
                    text-white
                    placeholder:text-white/50
                    focus:outline-none
                  "
                />

                <button
                  type="submit"
                  className={cn(
                    "flex gap-1 font-medium relative rounded-full",
                    "transition justify-center items-center",
                    "whitespace-nowrap",
                    "text-xs px-5 py-2",
                    "lg:text-sm lg:px-7 lg:py-4",
                    isSimpleDark
                      ? "bg-white text-black hover:bg-[#D8D8D8]"
                      : "bg-gradient-to-r from-[#2378DA] to-[#134074] text-white hover:opacity-90"
                  )}
                >
                  <span className="absolute inset-x-0 w-1/2 mx-auto -top-px bg-gradient-to-r from-transparent via-white to-transparent h-px" />

                  <span
                    className={cn(
                      "regular",
                      isSimpleDark
                        ? "text-black"
                        : "text-white"
                    )}
                  >
                    Subscribe Now
                  </span>

                  <img
                    src="/assets/rd-image003.svg"
                    className={cn(
                      "pt-0.5 w-3",
                      isSimpleDark && "brightness-0"
                    )}
                    alt=""
                    aria-hidden="true"
                  />
                </button>
              </div>
            </form>

            <p className="text-xs text-white/50">
              By subscribing, you agree to receive occasional
              updates. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* ======================================================
            FOOTER MAIN AREA
        ====================================================== */}

        <div className="flex flex-col lg:flex-row flex-wrap gap-8 border-t border-white/20 pt-12 mx-auto w-full">
          {/* ====================================================
              ABOUT / LOGO
          ==================================================== */}

          <div className="w-full lg:flex-1 lg:min-w-[400px] min-w-[200px] pr-0 lg:pr-[3%]">
            {geoLoading ? (
              <div
                className="mb-4 h-10 w-32 bg-white/10 rounded animate-pulse"
                aria-hidden="true"
              />
            ) : (
              <img
                src={footerLogoSrc}
                alt="Resolute Digitals"
                className={cn(
                  "mb-4",
                  isSimpleDark &&
                    "brightness-0 invert"
                )}
              />
            )}

            <p className="text-white/70">
              We’re your trusted digital partner — helping
              businesses grow with creativity, technology, and
              strategy. Our expert team delivers scalable web,
              app, and marketing solutions designed for
              measurable success.
            </p>

            {/* ==================================================
                SOCIAL MEDIA
            ================================================== */}

            <div className="flex flex-wrap gap-2 mt-6">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/ResoluteDigitals"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resolute Digitals Facebook"
                className={cn(
                  "flex items-center gap-2 cursor-pointer",
                  "transition",
                  "border border-white/20",
                  "px-3 py-2 rounded-full",
                  isSimpleDark
                    ? "hover:bg-white hover:text-black"
                    : "hover:text-blue-400"
                )}
              >
                <FaFacebookF
                  className={
                    isSimpleDark
                      ? "text-white"
                      : "text-[#2378DA]"
                  }
                />

                <span>Facebook</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/resolutedigitals"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resolute Digitals LinkedIn"
                className={cn(
                  "flex items-center gap-2 cursor-pointer",
                  "transition",
                  "border border-white/20",
                  "px-3 py-2 rounded-full",
                  isSimpleDark
                    ? "hover:bg-white hover:text-black"
                    : "hover:text-blue-500"
                )}
              >
                <FaLinkedinIn
                  className={
                    isSimpleDark
                      ? "text-white"
                      : "text-[#2378DA]"
                  }
                />

                <span>LinkedIn</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/resolutedigitals"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resolute Digitals Instagram"
                className={cn(
                  "flex items-center gap-2 cursor-pointer",
                  "transition",
                  "border border-white/20",
                  "px-3 py-2 rounded-full",
                  isSimpleDark
                    ? "hover:bg-white hover:text-black"
                    : "hover:text-pink-400"
                )}
              >
                <FaInstagram
                  className={
                    isSimpleDark
                      ? "text-white"
                      : "text-[#2378DA]"
                  }
                />

                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* ====================================================
              FOOTER NAVIGATION COLUMNS
          ==================================================== */}

          {footerColumns.map((col) => (
            <div
              key={col.title}
              className="w-full lg:flex-1 min-w-[200px]"
            >
              <h3 className="font-bold mb-4">
                {col.title}
              </h3>

              <ul className="space-y-5 text-white/70 mb-2">
                {col.items.map((item) => (
                  <li
                    key={item.label}
                    className={cn(
                      "flex items-center gap-2",
                      "before:content-['']",
                      "before:inline-block",
                      "before:w-2",
                      "before:h-2",
                      "before:min-w-2",
                      "before:rounded-full",
                      isSimpleDark
                        ? "before:bg-white"
                        : "before:bg-[#2378DA]"
                    )}
                  >
                    <a
                      href={item.href}
                      target={
                        item.external
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="
                        flex
                        items-center
                        gap-2
                        transition-colors
                        duration-200
                        hover:text-white
                      "
                    >
                      {item.label}

                      {item.external && (
                        <FaExternalLinkAlt className="text-[10px] opacity-60" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ====================================================
              CONTACT
          ==================================================== */}

          <div className="w-full lg:flex-1 min-w-[200px]">
            <h3 className="font-bold mb-4">
              Contact
            </h3>

            <ul className="space-y-5 text-white/70 mb-2">
              {/* Phone */}
              {contactData.phone &&
                contactData.phoneHref && (
                  <li className="flex gap-3 items-center">
                    <FaPhoneAlt
                      className={cn(
                        "shrink-0",
                        isSimpleDark
                          ? "text-white"
                          : "text-[#2378DA]"
                      )}
                    />

                    <a
                      href={contactData.phoneHref}
                      className="
                        transition-colors
                        duration-200
                        hover:text-white
                      "
                    >
                      {contactData.phone}
                    </a>
                  </li>
                )}

              {/* Email */}
              <li className="flex gap-3 items-start">
                <FaEnvelope
                  className={cn(
                    "shrink-0 mt-1",
                    isSimpleDark
                      ? "text-white"
                      : "text-[#2378DA]"
                  )}
                />

                <a
                  href={`mailto:${contactData.email}`}
                  className="
                    hover:text-white
                    hover:underline
                    transition-colors
                    duration-200
                    break-all
                  "
                >
                  {contactData.email}
                </a>
              </li>

              {/* Address */}
              <li className="flex gap-3 items-start">
                <FaMapMarkerAlt
                  className={cn(
                    "shrink-0 mt-1",
                    isSimpleDark
                      ? "text-white"
                      : "text-[#2378DA]"
                  )}
                />

                <a
                  href={contactData.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    hover:text-white
                    transition-colors
                    duration-200
                  "
                >
                  {contactData.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ======================================================
            FOOTER BOTTOM
        ====================================================== */}

        <div className="mt-8 border-t border-white/20 pt-6 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Resolute Digitals. All
          Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default FooterSec;
