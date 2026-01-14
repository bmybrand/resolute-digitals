"use client";

import React, { useRef, useEffect, useState } from "react";

const sevensection = () => {
  const steps = [
    {
      number: 1,
      title: "Transparency & Communication",
      description:
        "Transparency ensures that information is shared openly, creating a sense of accountability and inclusiveness.",
      image: "/assets/AlayaCare Market Icon _1 Trust 1.svg",
    },
    {
      number: 2,
      title: " Expertise & Innovation",
      description:
        "Our experienced professionals use cutting-edge tools and modern technologies to build powerful, future-ready digital solutions.",
      image: "/assets/technology_17197629 1.svg",
    },
    {
      number: 3,
      title: "Dedicated Support & Partnership",
      description:
        "We work closely with our clients, offering ongoing support, insights, and strategy to ensure long-term success and trust.",
      image: "/assets/relationship_10112407 1.svg",
    },
    {
      number: 4,
      title: "Results-Driven Approach",
      description:
        "Our process is designed for measurable impact - delivering creative, scalable, and performance-focused outcomes every time.",
      image: "/assets/statistic_9551807 1.svg",
    },
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.offsetHeight;

      const scrollPosition = window.innerHeight / 2 - containerTop;

      // Determine active card by percentage of container
      const cardHeight = containerHeight / steps.length;
      const index = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(scrollPosition / cardHeight))
      );

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[140vh] h-fit py-30 px-5 xl:px-9 2xl:px-54 gap-15 regular ">
      {/* LEFT SECTION - sticky */}
      <div className="flex flex-col w-full xl:w-1/2 pb-10 lg:pb-0">
        <div className="sticky top-20">
          <div className="flex flex-row items-center w-fit rounded-full bg-white/10 px-3 py-2 mb-6">
            <div className="flex gap-1 font-medium relative text-white whitespace-nowrap text-sm sm:text-lg px-4 py-2 font-bold bg-gradient-to-r from-[#2378DA] to-[#134074] rounded-full">
              <span className="absolute inset-x-0 w-1/2 mx-auto top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px" />
              <span className="text-sm lg:text-lg">Explore</span>
            </div>
            <span className="px-3 text-sm lg:text-lg sm:text-lg text-white">
              Our Digital Framework
            </span>
          </div>

          <h1 className="block bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[58px] text-white pb-6">
            Future-Ready{" "}
            <span className="bg-gradient-to-r from-[#2378DA] to-[#134074] bg-clip-text text-transparent">
              Solutions for Ambitious
            </span>{" "}
            Brands
          </h1>

          <div className="w-full">
            <p className="text-base sm:text-lg text-[#A9ABBE] leading-7 sm:leading-8 pb-10">
              At Resolute Digitals, we leverage the most advanced tools and
              technologies to craft high-performing, secure, and scalable
              solutions. Our tech stack is designed to adapt and evolve —
              empowering your business with innovation that lasts and
              performance that matters.
            </p>

            <a href="/contact" className="bg-gradient-to-r from-[#2378DA] to-[#134074] flex gap-1 border font-medium relative border-neutral-200 
                      dark:border-white/20 text-black dark:text-white rounded-full hover:bg-white/10 transition justify-center items-center 
                      whitespace-nowrap text-sm px-5 py-2 lg:text-sm lg:px-7 lg:py-4 2xl:text-base 2xl:px-7 2xl:py-4 w-fit">
                        <span className="absolute inset-x-0 w-1/2 mx-auto -top-px bg-gradient-to-r from-transparent via-white to-transparent h-px" />
                        <span>Contact Now</span>
                        <img src="/assets/Vector (Stroke).svg" className="pt-0.5 w-3 xl:w-3 2xl:w-3" alt="" />
                      </a>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
<div
  className="flex flex-col w-full xl:w-1/2 justify-center items-center relative gap-10"
  ref={containerRef}
>
  {/* Vertical Line */}
  <div className="h-full w-[2px] bg-[#2378DA] absolute left-1/2 -translate-x-1/2 z-0" />

  {/* Numbers + Cards */}
  <div className="w-full flex flex-col justify-start items-center gap-10">
    {steps.map((step, index) => (
      <div key={step.number} className="flex flex-col items-center gap-6 w-full">
        {/* Number Circle */}
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#000A21] border border-[#2378DA] text-white font-bold text-2xl shadow-lg z-20">
          0{step.number}.
        </div>

        {/* Card */}
        <div
          ref={(el) => {
            cardRefs.current[index] = el;
          }}
          className={`w-[90%] min-h-[140px] rounded-xl py-6 flex gap-4 bg-white/5 backdrop-blur-md transition-transform duration-300 ${
            index === activeIndex
              ? "scale-105 border-2 border-[#2378DA]"
              : "scale-100 border border-white/30"
          }`}
        >
          <div className="w-[25%] flex items-center justify-center p-4">
            <img src={step.image} alt={step.title} className="max-w-full max-h-full" />
          </div>
          <div className="flex flex-col justify-between w-[75%] pr-6">
            <h3 className="text-white lg:text-2xl xl:text-3xl">{step.title}</h3>
            <p className="text-sm text-[#A9ABBE]">{step.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default sevensection;
