"use client";

import React, { useState } from "react";

const steps = [
  {
    step: "Step 01",
    title: "Share Your Vision",
    desc: "Share your goals and challenges so we understand the purpose and direction of your project.",
    icon: <img src="/assets/rd-image036.png" alt="Share Your Vision" className="h-20 w-20" />,
  },
  {
    step: "Step 02",
    title: "Meet Our Product Team",
    desc: "Meet the team who will shape your idea and align with you on the best project approach.",
    icon: <img src="/assets/rd-image096.svg" alt="Meet Our Product Team" className="h-20 w-20" />,
  },
  {
    step: "Step 03",
    title: "Expert Guidance",
    desc: "We review your needs and suggest tailored solutions with the right strategy and technology.",
    icon: <img src="/assets/rd-image097.svg" alt="Expert Guidance" className="h-20 w-20" />,
  },
  {
    step: "Step 04",
    title: "Begin the Build Process",
    desc: "Once aligned, we design, develop, and refine your product with clear, collaborative progress.",
    icon: <img src="/assets/rd-image098.svg" alt="Begin the Build Process" className="h-20 w-20" />,
  },
];

const HowWorkSec = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div
      className="min-h-screen bg-cover bg-center  "
      style={{ backgroundImage: "url('/assets/rd-image099.svg')" }}
    >
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-10 md:mb-16 pt-14 md:pt-16">
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

      {/* Steps */}
      <div className="relative mx-auto 2xl:max-w-[80%]  px-4 pb-16 md:pb-24 ">
        {/* horizontal line */}
        <div className="absolute left-4 right-4 top-6 md:top-7 h-px bg-white/10" />

        {/* FLEX container */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          {steps.map((s, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={s.step}
                className="relative flex flex-col items-center flex-1"
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Step pill */}
                <div
                  className={`relative z-10 flex justify-center mb-2 transition-all duration-300 ${
                    isActive ? "-rotate-12" : "rotate-0"
                  }`}
                >
                  <div
                    className={`rounded-full px-4 py-2 text-sm font-medium backdrop-blur ${
                      isActive
                        ? "bg-gradient-to-r from-[#2378DA] to-[#134074] text-white shadow-[0_10px_30px_rgba(35,120,218,0.35)]"
                        : "bg-[#080F1F] text-white/80"
                    }`}
                  >
                    {s.step}
                  </div>
                </div>

                {/* Connector */}
                <div className="mx-auto mb-4 h-10 w-px bg-white/10" />

                {/* Card */}
                <div className="relative rounded-2xl bg-[#080F1F] shadow-[0_20px_60px_rgba(0,0,0,0.35)] w-full overflow-hidden border border-white/10 h-full">
                  <div className="relative w-full flex items-center justify-center">
                    <img
                      src="/assets/rd-image100.svg"
                      alt="Card Background"
                      className="w-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {s.icon}
                    </div>
                  </div>

                  <div className="px-6 py-10 flex flex-col items-center text-center">
                    <h3 className="text-white text-2xl font-semibold mb-3">
                      {s.title}
                    </h3>
                    <p className="text-white/65 text-base leading-6">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowWorkSec;
