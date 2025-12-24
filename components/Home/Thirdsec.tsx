import React from "react";

export const Thirdsec = () => {
  // Avatar image array
  const avatars = [
    1, 2, 3, 4, 5, 6
  ];

  return (
   <div
  className="
    flex flex-col lg:flex-row 
     2xl:px-45 
    mt-20 pb-10 lg:mt-40 lg:pb-20 gap-30 relative
    bg-[url('/assets/Vector2.png')] 
    bg-no-repeat bg-cover bg-center
    
    border-b border-[#3f3f3f]
  "
>

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
            Technology Partner
          </span>{" "}
          for Business Growth
        </h1>

        {/* Paragraphs */}
        <p className='text-base sm:text-lg text-[#A9ABBE] leading-7 sm:leading-8 regular'>
          At Resolute Digitals, we believe technology should work for you, not against you.
          Since 2009, we’ve been empowering startups, enterprises, and global brands to innovate,
          grow, and lead through custom digital solutions.
        </p>

        <p className='text-base sm:text-lg text-[#A9ABBE] leading-7 sm:leading-8 mt-4 regular'>
          Our multidisciplinary team of strategists, designers, and engineers collaborates to 
          create high-performing experiences that drive engagement, streamline operations, and ensure success.
        </p>

        {/* Profile Bar */}
        <div className="bg-[#04102B] w-full rounded-2xl my-6 px-4 sm:px-6 py-4 flex items-center justify-between">

          {/* Left: Avatar Mapping */}
          <div className="flex items-center lg:justify-center lg:w-[70%]">
            {avatars.map((img, index) => (
              <img
                key={index}
                src={`https://i.pravatar.cc/150?img=${img}`}
                alt="user"
                className={`
                  rounded-full border-3 border-[#04102B] object-cover
                  w-[clamp(2.9rem,4vw,4.8rem)] h-[clamp(2.9rem,4vw,4.8rem)]
                  ${index !== 0 ? "-ml-4 sm:-ml-6" : ""}
                `}
              />
            ))}
          </div>

          {/* Right: Count */}
          <div className="text-white font-semibold flex flex-col text-right lg:pr-10">
            <span className="text-2xl sm:text-3xl md:text-4xl bold">
              125K <span className="text-[#2378DA]">+</span>
            </span>
            <span className="text-[#A8C0FF] text-sm sm:text-lg font-normal">
              Worldwide Clients
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-7">
        <img src="/assets/Group 1597883140.svg" alt="" /><p className='text-base sm:text-lg text-[#A9ABBE] leading-7 sm:leading-8 mt-4 regular'> We’re your growth partners, blending creativity, data, and technology to turn bold ideas into impactful digital solutions.
      </p></div>
      </div>

      {/* Right Content */}
      <div className='w-full lg:w-1/2 flex justify-center items-center relative group transition-all duration-300 hover:z-10 '>
       <img src="/assets/About-1 1.svg" alt="" />
      </div>

    </div>
  );
};
