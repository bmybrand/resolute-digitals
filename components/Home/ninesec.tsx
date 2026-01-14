"use client";
import React, { useState } from "react";

const ninesec = () => {
  const sections = [
    {
      bgColor: "#081733",
      mainImage: "/assets/Group 1597883329 (2).svg",
      floatingIconColor: "#2378DA",
      title: "Resolute Digitals Website",
      description: "A Modern, High-Performance Agency Website",
    },
    {
      bgColor: "#191403",
      mainImage: "/assets/Group 1597883775.svg",
      floatingIconColor: "#FDCA19",
      title: "Muslim Connect Website",
      description: "A Modern Digital Platform for Community Connection",
    },
    
  ];

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

  const section = sections[index];

  return (
    <div className="2xl:px-50 px-5 py-20 w-full">

      {/* Top Heading */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 relative">
        <div className="flex flex-col lg:w-xl">
          <div className="flex items-center w-fit rounded-full bg-white/10 px-3 py-2 mb-6">
            <div className="px-4 py-2 bg-gradient-to-r from-[#2378DA] to-[#134074] rounded-full text-white text-xs sm:text-sm lg:text-lg">
              Explore
            </div>
            <span className="px-3 text-white text-xs sm:text-sm lg:text-lg">
              Our Digital Framework
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white bold">
            <span className="bg-gradient-to-r from-[#2378DA] to-[#134074] bg-clip-text text-transparent">
              Projects
            </span>{" "}
            That Power the Future of Business
          </h1>
        </div>

        {/* View All Button */}
        <div className="flex justify-start lg:justify-end">
          <a href="/casestudy">
  <button className="cursor-pointer bg-gradient-to-r from-[#2378DA] to-[#134074] flex gap-2 items-center rounded-full
                     px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 lg:px-7 lg:py-4
                     text-xs sm:text-sm md:text-base text-white transition">
    <span>View All Projects</span>
    <img src="/assets/Vector (Stroke).svg" className="w-3 sm:w-4 md:w-5" alt="" />
  </button>
</a>

        </div>
      </div>

      {/* Main Image Section */}
      <div className="mt-20">
        <div
          className="flex justify-center items-center w-full xl:h-[75vh] rounded-2xl p-5 2xl:p-15 relative transition-colors duration-500"
          style={{ backgroundColor: section.bgColor }}
        >
          {/* Floating Icon */}
          <button
            className="absolute -bottom-3 -right-3 flex justify-center items-center rounded-3xl
                       w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-22 lg:h-22
                       border-6 sm:border-8 lg:border-10 border-[#000A21]
                       transition active:scale-95"
            style={{ backgroundColor: section.floatingIconColor }}
          >
            <img src="/assets/Vector (Stroke).svg" className="w-3 sm:w-4 md:w-5" alt="" />
          </button>

          {/* Main Image */}
          <img
            src={section.mainImage}
            alt=""
            className="h-full object-contain transition-all duration-500"
          />
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-10 gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl text-white bold transition-all">
              {section.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white ExtraLight transition-all">
              {section.description}
            </p>
          </div>

          {/* Nav Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                         bg-[#2378DA] border border-white/20 rounded-full
                         flex items-center justify-center transition hover:bg-white/30"
            >
              <img
                src="/assets/Vector (Stroke).svg"
                className="w-3 sm:w-4 md:w-5 -rotate-135"
                alt=""
              />
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                         bg-[#2378DA] border border-white/20 rounded-full
                         flex items-center justify-center transition hover:bg-white/30"
            >
              <img
                src="/assets/Vector (Stroke).svg"
                className="w-3 sm:w-4 md:w-5 rotate-45"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ninesec;
