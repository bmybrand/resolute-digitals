import React from "react";

export const Forthsec = () => {
  // Avatar image array
  const avatars = [
    1, 2, 3, 4, 5, 6
  ];

  return (
   <div
  className="
    flex flex-col-reverse lg:flex-row 
      2xl:px-45 
    mt-20 pb-10 lg:mt-40 lg:pb-20 gap-30 relative
    bg-[url('/assets/Vector2.png')] 
    bg-no-repeat bg-cover bg-center
  "
>

      

      {/* Right Content */}
      <div className='w-full lg:w-1/2 border border-transparent relative group transition-all duration-300 hover:z-10 flex justify-center items-center'>
       <img src="/assets/210 1.png" alt="" />
      </div>
      {/* Left Content */}
      <div className='w-full lg:w-1/2 relative group transition-all duration-300 hover:z-20 '>
        
        {/* Explore Tag */}
        <div className="flex flex-row items-center w-fit rounded-full bg-[#FFFFFF]/10 px-3 py-2 mb-6">
          <div className="flex gap-1 font-medium relative text-white whitespace-nowrap text-sm sm:text-lg px-4 py-2 font-bold bg-gradient-to-r from-[#2378DA] to-[#134074] rounded-full">
            <span className="absolute inset-x-0 w-1/2 mx-auto top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px" />
            <span className="text-sm lg:text-lg">Explore</span>
          </div>
          <span className="px-3 text-sm lg:text-lg text-white">Our Digital Services</span>
        </div>

        {/* Heading */}
        <h1 className="block bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[58px] text-white pb-6">
          Your{" "}
          <span className="bg-gradient-to-r from-[#2378DA] to-[#134074] bg-clip-text text-transparent">
            Data Partner
          </span>{" "}
          For Real Estate Intelligence
        </h1>

        {/* Paragraphs */}
        <p className='text-base sm:text-lg text-[#A9ABBE] leading-7 sm:leading-8 regular pb-10 
    border-b border-[#3f3f3f]'>
         Get unmatched clarity across real estate portfolios with structured, institutional-grade data. We provide deep visibility into property fundamentals, sustainability metrics, and climate-related insights—helping REITs, asset managers, and institutional data consumers make confident, compliant, and forward-looking decisions.From property-level identifiers and asset characteristics to ESG disclosures, green asset analytics, and portfolio-level sustainability indicators, we transform complex and fragmented information into standardized, reliable datasets designed for benchmarking, analysis, and long-term portfolio strategy.  </p>

      
        <div className="flex flex-row gap-7 pt-10">
        <img src="/assets/Group 1597883140.svg" alt="" /><p className='text-base sm:text-lg text-[#A9ABBE] leading-7 sm:leading-8 mt-4 regular'> We’re your growth partners, blending creativity, data, and technology to turn bold ideas into impactful digital solutions.
      </p></div>
      </div>

    </div>
  );
};
