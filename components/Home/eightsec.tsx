import React from 'react'

const eightsec = () => {
  const features = [
    { title: "Cutting-Edge\nDevelopment Strategy", image: "/assets/Overlay.svg" },
    { title: "Data-Driven\nMarketing", image: "/assets/Overlay (1).svg" },
    { title: "Seamless Design &\nFunctionality", image: "/assets/Background (2).svg" },
    { title: "Proven Digital\nExpertise", image: "/assets/Overlay (2).svg" },
  ];

  return (
    <div className="flex flex-col  w-full bg-[url('/assets/Background.png')] bg-no-repeat bg-cover bg-center text-center regular justify-center items-center">

      {/* Main Content Section */}
      <div className='flex flex-col w-full lg:w-[80%] xl:w-[75%] 2xl:w-[46%] justify-center items-center gap-6 mx-auto py-20 px-4'>
        
        {/* Explore Badge */}
        <div className="flex flex-row justify-center items-center w-fit rounded-full bg-white/10 px-3 py-2">
          <div className="flex gap-1 font-medium relative text-black dark:text-white rounded-full transition justify-center items-center whitespace-nowrap text-lg px-4 py-2 bold bg-gradient-to-r from-[#2378DA] to-[#134074]">
            <span className="absolute inset-x-0 w-1/2 mx-auto top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px" />
            <span className='text-sm lg:text-lg'>Explore</span>
          </div>
          <span className="px-3 text-sm lg:text-lg text-white">Our Digital Services</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-snug font-bold">
          Smart{" "}
          <span className="bg-gradient-to-r from-[#2378DA] to-[#134074] bg-clip-text text-transparent">
            Digital Strategies
          </span>{" "}
          for Scalable Growth
        </h1>
        
        {/* Description */}
        <p className="text-base sm:text-lg text-[#A9ABBE] leading-7 sm:leading-8">
          At Resolute Digitals, we leverage the most advanced tools and technologies to craft high-performing,
          secure, and scalable solutions. Our tech stack is designed to adapt and evolve — empowering your business
          with innovation that lasts and performance that matters.
        </p>

        {/* Button */}
        <a href="/contact" className="bg-gradient-to-r from-[#2378DA] to-[#134074] flex gap-1 border font-medium relative border-neutral-200 
                  dark:border-white/20 text-black dark:text-white rounded-full hover:bg-white/10 transition justify-center items-center 
                  whitespace-nowrap text-sm px-5 py-2 lg:text-sm lg:px-7 lg:py-4 2xl:text-base 2xl:px-7 2xl:py-4 w-fit">
                    <span className="absolute inset-x-0 w-1/2 mx-auto -top-px bg-gradient-to-r from-transparent via-white to-transparent h-px" />
                    <span>Contact Now</span>
                    <img src="/assets/Vector (Stroke).svg" className="pt-0.5 w-3 xl:w-3 2xl:w-3" alt="" />
                  </a>
      </div>

      {/* Footer-like Features Section */}
      <div className="min-w-[80%] w-fit lg:min-w-[35%] min-h-17 lg:w-fit rounded-t-4xl bg-[#041222] flex flex-col lg:flex-row items-center px-5 justify-center gap-5">
        <p className='text-white text-xs lg:text-lg '>Smart Digital Solutions Designed for Measurable Growth</p>
        <img src="/assets/Group 1597883207.svg" alt="hello" className='w-20 lg:w-26' />
      </div>
      <div className="w-full border-t border-white/30 py-4 lg:py-12 flex flex-wrap justify-center lg:justify-between items-center gap-8 px-6 xl:px-30 2xl:px-50">
  {features.map((feature, index) => (
    <div key={index} className="flex flex-col lg:flex-row items-center gap-3 text-center lg:text-left max-w-[350px]">
      <img src={feature.image} alt={feature.title} className="w-12 h-12 lg:w-15 lg:h-15" />
      <h3 className="text-white text-sm sm:text-base lg:text-lg whitespace-pre-line hidden lg:block">
        {feature.title}
      </h3>
    </div>
  ))}
</div>

    </div>
  )
}

export default eightsec
