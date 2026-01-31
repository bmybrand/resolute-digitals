"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useGeoCountry } from "@/utils/useGeoCountry";

const FooterSec = () => {
  const { countryCode, loading: geoLoading } = useGeoCountry();

  // ✅ US ONLY when exact "US" (case-insensitive). UAE => Dubai logo. Everyone else => Pakistan
  const isUS = (countryCode ?? "").toUpperCase() === "US";
  const isUAE = (countryCode ?? "").toUpperCase() === "AE";
  const isPakistan = !isUS && !isUAE;

  const footerLogoSrc = isUAE ? "/assets/logo_dubai_footer.png" : "/assets/rd-image004.svg";

  return (
    <div className="flex flex-col items-center">
      <img
        src="/assets/rd-image080.svg"
        alt=""
        className="w-[70%] mt-10 lg:mt-30"
      />

      <footer className="bg-[#081733] text-white pt-16 pb-8 px-6 md:px-12 lg:px-20 rounded-3xl lg:m-5 xl:m-9">
        {/* Newsletter Subscription */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12 mx-auto w-full">
          <div className="flex-1 min-w-[250px]">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Subscribe for the Latest Digital Insights
            </h2>
            <p className="text-white/70 mb-4">
              Get the latest insights on web trends, marketing strategies, & tech
              innovations - delivered straight to your inbox.
            </p>
          </div>
          <div className="flex-1 min-w-[250px] flex flex-col gap-4">
            <form className="flex flex-row items-center gap-3 w-full flex-wrap">
              <div className="border border-white/50 p-1 rounded-4xl flex items-center gap-3 flex-1 ">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="px-4 py-2 rounded-lg w-full text-black placeholder-white/50 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-[#2378DA] to-[#134074] flex gap-1 font-medium relative text-black rounded-full hover:bg-white/10 transition justify-center items-center whitespace-nowrap text-xs px-5 py-2 lg:text-sm lg:px-7 lg:py-4">
                  <span className="absolute inset-x-0 w-1/2 mx-auto -top-px bg-gradient-to-r from-transparent via-white to-transparent h-px" />
                  <span className="text-white regular">Subscribe Now</span>
                  <img
                    src="/assets/rd-image003.svg"
                    className="pt-0.5 w-3"
                    alt=""
                  />
                </button>
              </div>
            </form>
            <p className="text-xs text-white/50">
              By subscribing, you agree to receive occasional updates.
              Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="flex flex-col lg:flex-row flex-wrap gap-8 border-t border-white/20 pt-12 mx-auto w-full ">
          {/* About / Logo Section */}
          <div className="w-full lg:flex-1 lg:min-w-[400px] min-w-[200px] pr-0 lg:pr-[3%]">
            {geoLoading ? (
              <div className="mb-4 h-10 w-32 bg-white/10 rounded animate-pulse" aria-hidden />
            ) : (
              <img src={footerLogoSrc} alt="" className="mb-4" />
            )}
            <p className="text-white/70">
              We’re your trusted digital partner — helping businesses grow with
              creativity, technology, and strategy. Our expert team delivers
              scalable web, app, and marketing solutions designed for measurable
              success.
            </p>

            {/* Social Media */}
            <div className="flex flex-wrap gap-2 mt-6">
              <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition border border-white/20 px-3 py-2 rounded-full">
                <FaFacebookF className="text-[#2378DA]" />
                <span>Facebook</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-sky-400 transition border border-white/20 px-3 py-2 rounded-full">
                <FaTwitter className="text-[#2378DA]" />
                <span>Twitter</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition border border-white/20 px-3 py-2 rounded-full">
                <FaLinkedinIn className="text-[#2378DA]" />
                <span>LinkedIn</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition border border-white/20 px-3 py-2 rounded-full">
                <FaYoutube className="text-[#2378DA]" />
                <span>YouTube</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-pink-400 transition border border-white/20 px-3 py-2 rounded-full">
                <FaInstagram className="text-[#2378DA]" />
                <span>Instagram</span>
              </div>
            </div>
          </div>

          {/* Other Columns */}
          {[
            {
              title: "Quick Links",
              items: ["Core Services", "Company", "Contact Info"],
            },
            {
              title: "Services",
              items: [
                "Software Development",
                "App Development",
                "Digital Marketing",
                "Portfolio",
                "Case Studies",
                "FAQs",
              ],
            },
            {
              title: "Company",
              items: [
                "About Us",
                "Design & Experience",
                "Our Team",
                "Blog",
                "Privacy Policy",
                "Terms & Conditions",
              ],
            },
            {
              title: "Contact",
              items: [
                ...(!isUAE
                  ? [
                      {
                        icon: <FaPhoneAlt className="text-[#2378DA]" />,
                        text: isPakistan ? "+92 304 0208313" : "+1 (254) 342-0005",
                      },
                    ]
                  : []),
                {
                  icon: <FaEnvelope className="text-[#2378DA]" />,
                  text: isUAE
                    ? "informationtechnology@resolutedigitals.com"
                    : "support@resolutedigitals.com",
                },
                {
                  icon: <FaMapMarkerAlt className="text-[#2378DA]" />,
                  text: isUAE
                    ? "G-17, Hamood Building, Area: Port Saeed, Dubai, UAE"
                    : isPakistan
                      ? "Plot No. E-88, Block B Gulshan e Jamal, Karachi, 75260"
                      : "1234 Innovation Drive, Suite 200 Austin, TX 73301, USA",
                },
              ],
            },
          ].map((col) => (
            <div key={col.title} className="w-full lg:flex-1 min-w-[200px]">
              <h3 className="font-bold mb-4">{col.title}</h3>
              <ul className="space-y-5 text-white/70 mb-2">
                {col.items.map((item, index) =>
                  typeof item === "string" ? (
                    <li
                      key={index}
                      className="flex items-center gap-2 before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#2378DA] before:rounded-full"
                    >
                      {item}
                    </li>
                  ) : (
                    <li key={index} className="flex gap-3 items-center rounded-full">
                      {item.icon}
                      {typeof item.text === "string" && item.text.includes("@") ? (
                        <a href={`mailto:${item.text}`} className="hover:underline">{item.text}</a>
                      ) : (
                        <span>{item.text}</span>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-white/20 pt-6 text-center text-white/50 text-sm">
          © 2025 Resolute Digitals. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default FooterSec;
