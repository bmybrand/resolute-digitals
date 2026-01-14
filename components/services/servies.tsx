"use client"

import React, { useState } from "react"

const servicesData = [
   {
    title: "AI-Driven Solutions",
    image: "/assets/rd-image082.svg",
    image1: "/assets/rd-image083.svg",
    link: "/services/ai-driven",
    bubbles: ["AI Automation", "AI Integration", "AI-Solutions", "Intelligent Workflows"],
  },
  {
    title: "Software Development",
    image: "/assets/rd-image084.svg",
    image1: "/assets/rd-image085.svg",
    link: "/services/software-development",
    bubbles: ["Desktop Apps", "Integrations", "Web Apps", "API Systems"],
  },
  {
    title: "App Development",
    image: "/assets/rd-image086.svg",
    image1: "/assets/rd-image086.svg",
    link: "/services/app-development",
    bubbles: ["iOS Apps", "Android Apps", "Cross Platform", "App Testing"],
  },
  {
    title: "Design & Experience",
    image: "/assets/rd-image028.svg",
    image1: "/assets/rd-image087.svg",
    link: "/services/design-experience",
    bubbles: ["UI/UX Design", "Brand Identity", "Visual Design", "Brand Strategy"],
  },
  {
    title: "Digital Marketing",
    image: "/assets/rd-image023.svg",
    image1: "/assets/rd-image088.svg",
    link: "/services/digital-marketing",
    bubbles: ["SEO Services", "Social Ads", "Paid Campaigns", "Email Marketing"],
  },
  {
    title: "Ops & IT Support",
    image: "/assets/rd-image089.svg",
    image1: "/assets/rd-image090.svg",
    link: "/services/data-operations",
    bubbles: [
  "Network Management",
  "Server Monitoring",
  "Cloud Operations",
  "Patch Management",
]
,},
  {
    title: "REIT Data Research",
    image: "/assets/rd-image091.svg",
    image1: "/assets/rd-image092.svg",
    link: "/services/data-research",
    bubbles: ["Sustainability", "Green Certifications", "Asset Details", "ESG Data QC"],
  },
  {
    title: "US Property Taxation",
    image: "/assets/rd-image093.svg",
    image1: "/assets/rd-image094.svg",
    link: "/services/property-taxation",
    bubbles: ["Reassessments", "Tax Jurisdictions", "Asset Classification", "Tax Rates"],
  },
]
export const dynamic = 'force-static'
const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="mt-30 mb-30 px-6 sm:px-12 md:px-20 lg:px-28 xl:px-40">
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-16">
        <div className="flex items-center w-fit rounded-full bg-white/10 px-2 py-2 mb-4">
          <div className="relative flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074]">
            <span className="absolute inset-x-0 w-1/2 mx-auto top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px" />
            <span className="text-sm lg:text-lg text-white">Explore</span>
          </div>
          <span className="px-3 text-sm lg:text-lg text-white">
            Our Digital Services
          </span>
        </div>

        <h1 className="bold text-3xl sm:text-4xl md:text-5xl xl:text-[58px] text-white text-center">
          A{" "}
          <span className="bg-gradient-to-r from-[#2378DA] to-[#134074] bg-clip-text text-transparent">
            Proven Process
          </span>{" "}
          That <br /> Turns Ideas Into Impact
        </h1>
      </div>

      {/* Services */}
      <div className="flex flex-col gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-between gap-4 border-b border-[#4C5364] transition-all duration-300
              ${hoveredIndex === index ? "py-16 sm:py-18 md:py-20" : "py-8 sm:py-10"}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Bubbles */}
            {hoveredIndex === index && (
              <>
                {service.bubbles.map((bubble, i) => {
                  const positions = [
                    "top-12 left-1/5 rotate-6",
                    "top-12 right-1/5 -rotate-6",
                    "bottom-7 left-1/4 -rotate-6",
                    "bottom-7 right-1/4 rotate-6",
                  ]
                  return (
                    <div
                      key={i}
                      className={`absolute py-1 px-3 sm:py-2 sm:px-4 md:py-2.5 md:px-5 rounded-full bg-[#2378DA] text-white text-sm sm:text-base md:text-lg transform transition-transform duration-300 hover:scale-110 animate-fade-in ${positions[i]}`}
                    >
                      {bubble}
                    </div>
                  )
                })}
              </>
            )}

            {/* Logo */}
            <div
              className={`flex items-center justify-center rounded-full transition-all
                w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18
                ${
                  hoveredIndex === index
                    ? "bg-gradient-to-r from-[#2378DA] to-[#134074]"
                    : "bg-transparent border border-[#4C5364]"
                }`}
            >
              <img
                src={hoveredIndex === index ? service.image : service.image1}
                alt={service.title}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center px-2 sm:px-4">
              <h2
                className={`font-bold transition-colors
                  text-sm sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl
                  ${hoveredIndex === index ? "text-white" : "text-[#4C5364]"}`}
              >
                {service.title}
              </h2>
            </div>

            {/* Button */}
            <a
              href={service.link}
              className={`flex items-center justify-center rounded-full transition-all
                w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18
                ${
                  hoveredIndex === index
                    ? "bg-gradient-to-r from-[#2378DA] to-[#134074]"
                    : "bg-transparent border border-[#4C5364]"
                }`}
            >
              <img
                src={
                  hoveredIndex === index
                    ? "/assets/rd-image003.svg"
                    : "/assets/rd-image095.svg"
                }
                className="w-4 h-4 sm:w-5 sm:h-5 rotate-45"
              />
            </a>
          </div>
        ))}
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease forwards;
        }
      `}</style>
    </section>
  )
}

export default Services
