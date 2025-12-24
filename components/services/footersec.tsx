import React from "react";

const FooterSec = () => {
  return (
    <div className="flex flex-col items-center">
        <img src="/assets/Heading 1.svg" alt="" className="w-[70%] mt-10 lg:mt-30"/>
    <footer className="bg-[#081733] text-white pt-16 pb-8 px-6 md:px-12 lg:px-20 rounded-3xl lg:m-20 lg:mt-0">
        
      {/* Newsletter Subscription */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-12  mx-auto">
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
            <div className="border border-white/50 p-1 rounded-4xl flex items-center gap-3 flex-1 min-w-[200px]">
              <input
                type="email"
                placeholder="Enter email address"
                className="px-4 py-2 rounded-lg w-full text-black placeholder-white/50 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-[#2378DA] to-[#134074] flex gap-1  font-medium relative text-black rounded-full hover:bg-white/10 transition justify-center items-center whitespace-nowrap text-xs px-5 py-2 lg:text-sm  lg:px-7 lg:py-4">
                <span className="absolute inset-x-0 w-1/2 mx-auto -top-px bg-gradient-to-r from-transparent via-white to-transparent h-px" />
                <span className="text-white regular">Subscribe Now</span>
                <img
                  src="/assets/Vector (Stroke).svg"
                  className="pt-0.5 w-3"
                  alt=""
                />
              </button>
            </div>
          </form>
          <p className="text-xs text-white/50">
            By subscribing, you agree to receive occasional updates. Unsubscribe
            anytime.
          </p>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="flex flex-wrap gap-8 border-t border-white/20 pt-12 mx-auto">
        {/* About / Logo Section */}
        <div className="flex-1 min-w-[250px]">
          <img src="/assets/Group (5).svg" alt="" className="mb-4" />
          <p className="text-white/70">
            We’re your trusted digital partner — helping businesses grow with
            creativity, technology, and strategy. Our expert team delivers
            scalable web, app, and marketing solutions designed for measurable
            success.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/70">
            {["Core Services", "Company", "Contact Info"].map((link) => (
              <li
                key={link}
                className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#2378DA] hover:to-[#134074] cursor-pointer transition-all duration-300"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-white/70">
            {[
              "Software Development",
              "App Development",
              "Digital Marketing",
              "Portfolio",
              "Case Studies",
              "FAQs",
            ].map((service) => (
              <li
                key={service}
                className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#2378DA] hover:to-[#134074] cursor-pointer transition-all duration-300"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-white/70">
            {[
              "About Us",
              "Design & Experience",
              "Our Team",
              "Blog",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((item) => (
              <li
                key={item}
                className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#2378DA] hover:to-[#134074] cursor-pointer transition-all duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-bold mb-4">Contact</h3>
          <p className="text-white/70">+1 (800) 465-7890</p>
          <p className="text-white/70">support@resolvedigitals.com</p>
          <p className="text-white/70">
            1234 Innovation Drive, Suite 200 Austin, TX 73301, USA
          </p>
          <div className="flex gap-3 mt-3 flex-wrap">
            {["Facebook", "Twitter", "Instagram", "LinkedIn", "YouTube"].map(
              (social) => (
                <span
                  key={social}
                  className="cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#2378DA] hover:to-[#134074] transition-all duration-300"
                >
                  {social}
                </span>
              )
            )}
          </div>
        </div>
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
