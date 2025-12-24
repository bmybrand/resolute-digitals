"use client";
import React from "react";
import BentoGrid from "./bento"
const SecSection = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      
      <div className="flex flex-row justify-center items-center w-fit border border-transparent rounded-full bg-[#FFFFFF]/10 px-2 py-2  ExtraLight">
        
        <div className=" flex gap-1  font-medium relative
        text-black dark:text-white rounded-full transition justify-center items-center whitespace-nowrap
         text-lg px-4 py-2 bold bg-gradient-to-r from-[#2378DA] to-[#134074] ">
          <span className="absolute inset-x-0 w-1/2 mx-auto top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px" />
          <span className="text-sm lg:text-lg">Explore</span>
          
        </div>

        {/* Text */}
        <span className="px-3 text-white text-sm lg:text-lg">Our Digital Services</span>
      </div>
      <h1 className="block bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-white text-center py-10">Innovative Services for <br />
the Modern Business</h1>
     <BentoGrid />
    </div>
    
  );
};

export default SecSection;

