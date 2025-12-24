import React from 'react'

const herosec = () => {
  return (
    <div>{/* Hero Section with background image */}
      <div
        className="relative w-full h-[50vh] lg:h-[60vh] flex items-center justify-center rounded-3xl overflow-hidden "
        style={{
          backgroundImage: `url('/assets/Group1597883634.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-9 p-5">
        <h1 className="text-white text-4xl lg:text-8xl font-bold text-center drop-shadow-lg bold lg:mt-30">
         ABOUT US
        </h1>
        <p className="text-sm lg:text-base max-w-4xl mx-auto ExtraLight text-center text-white">
         We’re a team of thinkers, creators, and problem-solvers dedicated to shaping meaningful digital experiences. By blending design, technology, and strategy, we help brands innovate, transform, and thrive in an ever-evolving digital world.
        </p>
        </div>
      </div></div>
  )
}

export default herosec