"use client"

import React, { useState } from 'react'

const servicesData = [
  {
    title: "Software Development",
    image: "/assets/Group (6).svg",
    image1: "/assets/Group (7).svg",
    link: "#",
    bubbles: ["Desktop Apps", "Integrations", "Web Apps", "API Systems"],
  },
  {
    title: "App Development",
    image: "/assets/Group 1597883436 (1).svg ",
    image1: "/assets/Group 1597883436.svg",
    link: "#",
    bubbles: ["iOS Apps", "Android Apps", "Cross Platform", "App Testing"],
  },
  {
    title: "Design & Experience",
    image: "/assets/Group (9).svg",
    image1: "/assets/Group (8).svg",
    link: "#",
    bubbles: ["UI/UX Design", "Brand Identity", "Visual Design", "Brand Strategy"],
  },
  {
    title: "Digital Marketing",
    image: "/assets/Group 1597883438 (1).svg",
    image1: "/assets/Group 1597883438.svg",
    link: "#",
    bubbles: ["SEO Services", "Social Ads", "Paid Campaigns", "Email Marketing"],
  },
  {
    title: "Data & Operations",
    image: "/assets/Group (11).svg",
    image1: "/assets/Group (10).svg",
    link: "#",
    bubbles: ["Data Analytics", "Automation", "Data Modeling", "CRM Systems"],
  },
]

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="mt-30 mb-30 lg:mt-95 px-6 sm:px-12 md:px-20 lg:px-28 xl:px-40">
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

        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl xl:text-[58px] text-white text-center">
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
              ${hoveredIndex === index ? "py-16 sm:py-18 md:py-20" : "py-8 sm:py-10"}
            `}
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
                className={`font-semibold transition-colors
                  text-sm sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl
                  ${hoveredIndex === index ? "text-white" : "text-[#4C5364]"}
                `}
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
                    ? "/assets/Vector (Stroke).svg"
                    : "/assets/Vector (Stroke) (1).svg"
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
