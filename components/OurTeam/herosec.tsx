import React from 'react'

const herosec = () => {
  return (
    <div>{/* Hero Section with background image */}
      <div
        className="relative w-full h-[50vh] lg:h-[60vh] flex items-center justify-center rounded-3xl overflow-hidden "
        style={{
          backgroundImage: `url('/assets/rd-image081.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-9 p-5">
        <h1 className="text-white text-4xl lg:text-8xl font-bold text-center drop-shadow-lg bold lg:mt-30">
         TEAM MEMBERS
        </h1>
        <p className="text-sm lg:text-base max-w-4xl mx-auto ExtraLight text-center text-white">
Our team is made up of designers, developers, and strategists who are passionate about creating impactful digital experiences. Working collaboratively, we bring together creativity, technology, and problem-solving to deliver solutions that help businesses grow and succeed.        </p>
        </div>
      </div></div>
  )
}

export default herosec