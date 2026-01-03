"use client";
import React from "react";

export const Underdev = () => {
  return (
    <div className="bg-[#000A21] p-5 xl:py-9 xl:px-34 lg:pt-20 flex justify-center items-center h-screen relative overflow-hidden gap-15">

      {/* Top-right logo */}
      <div className="absolute top-5 left-5 lg:top-9 lg:left-34">
        <img src="/assets/Group (20).svg" alt="Logo" className="w-35 lg:w-49" />
      </div>

      {/* Left Content */}
      <div className='w-full lg:w-1/2 relative group transition-all duration-300 hover:z-20 flex flex-col justify-center items-start gap-5'>
        <div>
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[58px] text-white pb-6">
            This Page Is <br /> Under Development
          </h1>

          <p className='text-base sm:text-lg text-[#A9ABBE] leading-7 sm:leading-8 lg:w-[80%]'>
            Our team is building something valuable to enhance your experience. This page will be live soon with updated insights and solutions.
          </p>
        </div>

        <button
          className="bg-gradient-to-r from-[#2378DA] to-[#134074] flex gap-2 border font-medium relative border-neutral-200 dark:border-white/20 text-black dark:text-white rounded-full hover:bg-white/10 transition justify-center items-center whitespace-nowrap text-sm px-5 py-2 lg:text-sm lg:px-7 lg:py-4 2xl:text-base 2xl:px-7 2xl:py-4"
          onClick={() => window.location.href = '/'}
        >
          <span className="absolute inset-x-0 w-1/2 mx-auto -top-px bg-gradient-to-r from-transparent via-white to-transparent h-px" />
          <span>Go to Homepage</span>
          <img src="/assets/Vector (Stroke).svg" className="pt-0.5 w-3 xl:w-3 2xl:w-3" alt="" />
        </button>
      </div>

      {/* Right Content - hidden on screens smaller than lg */}
      <div className='hidden lg:flex w-full lg:w-1/2 justify-center items-center relative group transition-all duration-300 hover:z-10'>
        
        {/* Keyframes for sway */}
        <style>
          {`
            @keyframes swayGroup {
              0%, 100% { transform: rotate(-20deg); }
              50% { transform: rotate(-35deg); }
            }
          `}
        </style>

        {/* Vector 7 */}
        <img
          src="/assets/Vector (7).svg"
          alt=""
          className="scale-175 relative lg:-right-40"
        />

        {/* Group image */}
        <img
          src="/assets/Group 1597883925.svg"
          alt=""
          className="absolute right-0 animate-[swayGroup_5s_ease-in-out_infinite]"
        />
      </div>
    </div>
  );
};
