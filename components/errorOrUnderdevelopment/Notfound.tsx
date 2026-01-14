import React from 'react';
import { FloatingNavDemo } from '../Home/Navbar';

const Notfound = () => {
  return (
    <div className="bg-[#000A21]  p-5 xl:py-9 xl:px-34 lg:pt-20 flex flex-col justify-center items-center h-screen relative overflow-hidden gap-15">

      {/* Top-right logo */}
      <div className="absolute top-5 left-5 lg:top-9 xl:left-34">
        <img src="/assets/Group (20).svg" alt="Logo" className="w-35 lg:w-49" />
      </div>

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
       {/* Background / non-absolute images with float */}
<img
  src="/assets/Group (18).svg"
  alt=""
  className="z-10 animate-[floatUpDown_4s_ease-in-out_infinite] w-20 md:w-35 lg:w-55 xl:w-75"
/>
<img
  src="/assets/Group (19).svg"
  alt=""
  className="z-10 animate-[floatUpDown_5s_ease-in-out_infinite] w-20  md:w-35 lg:w-55 xl:w-75"
/>
<img
  src="/assets/Group (18).svg"
  alt=""
  className="z-10 animate-[floatUpDown_6s_ease-in-out_infinite] w-20  md:w-35 lg:w-55 xl:w-75"
/>


        <div className="absolute w-full h-full ">
          {/* Astronaut animation */}
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
            className="absolute pointer-events-none z-10 mt-0 lg:mt-15 w-20  md:w-35 lg:w-55 xl:w-75"
            style={{ animation: "bounceAstronaut 20s linear infinite alternate" }}
          />
        </div>
      </div>

      <div className='mt-10 flex flex-col gap-5 justify-center items-center'>
        <p className="text-white text-center max-w-2xl ">
          The page you’re looking for may have been moved, renamed, or no longer exists. But don’t worry — our team is still here to help you find the right information.
        </p>

        <button
          className="bg-gradient-to-r from-[#2378DA] to-[#134074] flex gap-2 border font-medium relative border-neutral-200 dark:border-white/20 text-black dark:text-white rounded-full hover:bg-white/10 transition justify-center items-center whitespace-nowrap text-sm px-5 py-2 lg:text-sm lg:px-7 lg:py-4 2xl:text-base 2xl:px-7 2xl:py-4"
          onClick={() => window.location.href = '/'}
        >
          <span className="absolute inset-x-0 w-1/2 mx-auto -top-px bg-gradient-to-r from-transparent via-white to-transparent h-px" />
          <span>Go to Homepage</span>
          <img src="/assets/rd-image003.svg" className="pt-0.5 w-3 xl:w-3 2xl:w-3" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Notfound;

