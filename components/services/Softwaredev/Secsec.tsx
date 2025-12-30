import React from 'react'

const Secsec = () => {
  
  return (
   <div
  className="
    flex flex-col lg:flex-row
     2xl:px-45
    mt-20 pb-10 lg:mt-40 lg:pb-20 gap-10"
>

      {/* Left Content */}
      <div className='w-full lg:w-2/5 border border-amber-50 '>
      <h1 className="text-white text-4xl lg:text-5xl xl:text-[58px] drop-shadow-lg bold ">About Software Development Service</h1>
      <p className="text-base lg:text-base max-w-4xl ExtraLight text-[#A9ABBE] mt-7 leading-7">Software development is at the core of digital transformation. We build secure, scalable, and high-performance applications designed to meet the needs of modern businesses. Whether it’s a responsive web platform, a powerful desktop application, or an immersive game experience, our development team delivers solutions engineered for reliability, flexibility, and long-term growth.</p>
      </div>

      {/* Right Content */}
      <div className='w-full lg:w-3/5 '> 
      <img src="/assets/A male designer working on a desktop computer in a modern office, focused on the screen showing a user interface design..svg" alt=""  className='w-full '/>
    </div>
          </div>
  );
}

export default Secsec