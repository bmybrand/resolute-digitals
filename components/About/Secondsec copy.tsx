import React from "react";

export const Secondseccopy = () => {
  return (
    <div
      className="
        flex flex-col lg:flex-row 
        mx-5   2xl:mx-49 
        mt-12 sm:mt-16 md:mt-24 lg:mt-40 
        pb-8 sm:pb-10 md:pb-14 lg:pb-20 
        gap-8 sm:gap-12 md:gap-20 lg:gap-30 
        relative
        bg-no-repeat bg-cover bg-center
      "
    >
      {/* Left Content */}
      <div className='w-full lg:w-1/2 relative group transition-all duration-300 hover:z-20 '>
        
        {/* Explore Tag */}
        <div className="flex flex-row items-center w-fit rounded-full bg-[#FFFFFF]/10 px-2 sm:px-3 py-1 sm:py-2 mb-4 sm:mb-6">
          <div className="flex gap-1 font-medium relative text-white whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 py-1 sm:py-2 font-bold bg-gradient-to-r from-[#2378DA] to-[#134074] rounded-full">
            <span className="absolute inset-x-0 w-1/2 mx-auto top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">Explore</span>
          </div>
          <span className="px-2 sm:px-3 text-xs sm:text-sm md:text-base lg:text-lg text-white">Our Digital Services</span>
        </div>

        {/* Heading */}
        <h1 className="block font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] text-white pb-4 sm:pb-5 md:pb-6 lg:pb-6">
          Your{" "}
          <span className="bg-gradient-to-r from-[#2378DA] to-[#134074] bg-clip-text text-transparent">
            Technology Partner
          </span>{" "}
          for Business Growth
        </h1>

        {/* Paragraphs */}
        <p className='text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-[#A9ABBE] leading-6 sm:leading-7 md:leading-8 lg:leading-8'>
          At Resolute Digitals, we believe technology should work for you, not against you.
          Since 2009, we’ve been empowering startups, enterprises, and global brands to innovate,
          grow, and lead through custom digital solutions.
        </p>

        <p className='text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-[#A9ABBE] leading-6 sm:leading-7 md:leading-8 lg:leading-8 mt-2 sm:mt-4 md:mt-4 lg:mt-4'>
          Our multidisciplinary team of strategists, designers, and engineers collaborates to 
          create high-performing experiences that drive engagement, streamline operations, and ensure success.
        </p>

        {/* Profile Bar */}
        <div className="bg-[#04102B] w-full rounded-full my-4 sm:my-6 md:my-6 lg:my-6 px-3 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">

          <h1 className="text-sm sm:text-base md:text-lg lg:text-lg text-white">
            Elevate Your Business with Bold Creativity — <span className="text-sm sm:text-base md:text-lg lg:text-lg text-[#2378DA]">Get Free Quote</span>
          </h1>
          
        </div>
        
      </div>

      {/* Right Content */}
      <div className='w-full lg:w-1/2 flex justify-center items-center relative group transition-all duration-300 hover:z-10 '>
        <img className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full" src="/assets/rd-image102.svg" alt="" />
      </div>

    </div>
  );
};
