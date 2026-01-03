import React from 'react'
import { FloatingNavDemo } from '../Home/Navbar'

const Notfound = () => {
  return (
    <div className="bg-[#000A21] p-5 lg:p-9 flex flex-col justify-center items-center min-h-screen relative overflow-hidden gap-15">
      <h1 className="text-white font-bold text-center leading-tight
  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
  Looks like you’re lost
</h1>


      <div className='flex justify-center items-center relative gap-10'>
      <img src="/assets/Group (17).svg" alt="" className='absolute' />
       <style>
          {`
            @keyframes floatUpDown {
              0% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0); }
            }
          `}
        </style>

        {/* Background / non-absolute images with float */}
        <img
          src="/assets/Group (18).svg"
          alt=""
          className="z-10 animate-[floatUpDown_4s_ease-in-out_infinite]"
        />
        <img
          src="/assets/Group (19).svg"
          alt=""
          className="z-10 animate-[floatUpDown_5s_ease-in-out_infinite]"
        />
        <img
          src="/assets/Group (18).svg"
          alt=""
          className="z-10 animate-[floatUpDown_6s_ease-in-out_infinite]"
        />
      <div className="absolute w-full h-full ">

          {/* Inline keyframes using style tag */}
          <style>
  {`
    @keyframes bounceAstronaut {
      0%   { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(0deg); }
      25%  { top: 55%; left: 55%; transform: translate(-50%, -50%) rotate(10deg); }
      50%  { top: 45%; left: 45%; transform: translate(-50%, -50%) rotate(-10deg); }
      75%  { top: 55%; left: 45%; transform: translate(-50%, -50%) rotate(5deg); }
      100% { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(0deg); }
    }
  `}
</style>

<img
  src="/assets/Group 1597883923.svg"
  alt="astronaut"
  className="absolute pointer-events-none z-10 mt-18"
  style={{ animation: "bounceAstronaut 20s linear infinite alternate" }}
/>

        </div>
       </div>
      
      {/* Astronaut bouncing */}
        
    
    </div>
  )
}

export default Notfound