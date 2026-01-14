
"use client";

import { span } from "motion/react-client";
import React, { useEffect, useState } from "react";

const OrbitingCircles: React.FC<{
  children: React.ReactNode[];
  radius?: number;
  iconSize?: number;
  speed?: number;
  reverse?: boolean;
}> = ({ children, radius = 200, iconSize = 80, speed = 15, reverse = false }) => {
  const total = React.Children.count(children);

  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        marginLeft: `-${radius}px`,
        marginTop: `-${radius}px`,
        borderRadius: "50%",
        animation: `spin-${reverse ? "left" : "right"} ${speed}s linear infinite`,
      }}
    >
      {React.Children.map(children, (child, index) => {
        const angle = (360 / total) * index;
        return (
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              marginLeft: `-${iconSize / 2}px`,
              marginTop: `-${iconSize / 2}px`,
              transform: `rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`,
            }}
          >
            {child}
          </div>
        );
      })}
      <style>{`
        @keyframes spin-right { 100% { transform: rotate(360deg); } }
        @keyframes spin-left { 100% { transform: rotate(-360deg); } }
      `}</style>
    </div>
  );
};

const RevolvingIcons: React.FC = () => {
  const outerIconsUrls = [
  "/assets/Group 1597883981.svg",
  "/assets/Group 1597883982.svg",
  "/assets/Group 1597883983.svg",
  "/assets/Group 1597883984.svg",
  "/assets/Group 1597883985.svg",
  "/assets/Group 1597883987.svg",
  "/assets/Group 1597883980.svg",
  "/assets/Group 1597884008.svg",
  "/assets/Group 1597883991.svg",
  "/assets/Group 1597883993.svg",
  "/assets/Group 1597883995.svg",
  "/assets/Group 1597883996.svg",
  "/assets/Group 1597883997.svg",
  "/assets/Group 1597883972.svg",
  
];
const innerIconsUrls = [
 
  "/assets/Group 1597883973.svg",
  "/assets/Group 1597883974.png",
  "/assets/Group 1597883975.png",
  "/assets/Group 1597883976.png",
  "/assets/Group 1597883977.png",
  "/assets/Group 1597883978.png",
  "/assets/Group 1597883979.png",
  "/assets/Group 1597884006.png",
  "/assets/Group 1597884007.svg",
];


  const [dimensions, setDimensions] = useState({ outerRadius: 410, innerRadius: 250, outerSize: 80, innerSize: 80 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setDimensions({ outerRadius: 400, innerRadius: 240, outerSize: 80, innerSize: 80 });
      } else if (width >= 768) {
        setDimensions({ outerRadius: 300, innerRadius: 180, outerSize: 60, innerSize: 60 });
      } else {
        setDimensions({ outerRadius: 200, innerRadius: 120, outerSize: 40, innerSize: 40 });
      }
    };

    handleResize(); // set initial dimensions
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col py-40 px-6 2xl:px-53 bg-[url('/assets/Image.svg')] bg-no-repeat bg-cover bg-center h-230 relative overflow-hidden">

      {/* Content Section */}
      <div className="flex flex-col xl:flex-row xl:gap-50 gap-4 lg:gap-12 z-10 relative ">
        <div className="flex flex-col justify-between w-full xl:w-1/2">
          <div className="flex flex-row items-center w-fit rounded-full bg-white/10 px-3 py-2 mb-6">
            <div className="flex gap-1 font-medium relative text-white whitespace-nowrap text-sm sm:text-lg px-4 
            py-2 font-bold bg-gradient-to-r from-[#2378DA] to-[#134074] rounded-full">
              <span className="absolute inset-x-0 w-1/2 mx-auto top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px" />
              <span className="text-sm lg:text-lg">Explore</span>
            </div>
            <span className="px-3 text-sm lg:text-lg text-white">Our Digital Framework</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[51px] text-white pb-6 font-bold">
            Innovative Technologies That Drive Digital Growth
          </h1>
        </div>

        <div className="w-full xl:w-1/2">
          <p className="text-base sm:text-lg text-[#A9ABBE] leading-7 sm:leading-8 pb-10">
            At Resolute Digitals, we leverage the most advanced tools and technologies to craft high-performing,
            secure, and scalable solutions. Our tech stack is designed to adapt and evolve — empowering your business
            with innovation that lasts and performance that matters.
          </p>

          <a href="/contact" className="bg-gradient-to-r from-[#2378DA] to-[#134074] flex gap-1 border font-medium relative border-neutral-200 
          dark:border-white/20 text-black dark:text-white rounded-full hover:bg-white/10 transition justify-center items-center 
          whitespace-nowrap text-sm px-5 py-2 lg:text-sm lg:px-7 lg:py-4 2xl:text-base 2xl:px-7 2xl:py-4 w-fit">
            <span className="absolute inset-x-0 w-1/2 mx-auto -top-px bg-gradient-to-r from-transparent via-white to-transparent h-px" />
            <span>Contact Now</span>
            <img src="/assets/Vector (Stroke).svg" className="pt-0.5 w-3 xl:w-3 2xl:w-3" alt="" />
          </a>
        </div>
      </div>

      {/* Ring + Orbiting Icons near bottom */}
      <div className="absolute -bottom-60  lg:-bottom-40  left-1/2 -translate-x-1/2 w-full h-96 pointer-events-none">
        {/* Ring Image */}
        <img
          src="/assets/Frame 1597883713.svg"
          className="absolute lg:w-195 xl:w-220 sm-bottom-73 lg:-bottom-73 left-1/2 -translate-x-1/2"
          alt="Pattern"
        />

        {/* Outer Circle */}
        <OrbitingCircles
          radius={dimensions.outerRadius}
          iconSize={dimensions.outerSize}
          speed={20}
        >
           {outerIconsUrls.map((url, i) => (
    <img
      key={i}
      src={url}
      alt={`icon-${i}`}
      className="rounded-full object-contain spin-anticlockwise"
      style={{ "--spin-duration": "20s" }  as any} // icon rotation speed
    />
  ))}

        </OrbitingCircles>

        {/* Inner Circle */}
        <OrbitingCircles
          radius={dimensions.innerRadius}
          iconSize={dimensions.innerSize}
          speed={12}
          reverse
        >
          {innerIconsUrls.map((url, i) => (
    <img
      key={i}
      src={url}
      alt={`icon-${i}`}
      className="rounded-full object-contain spin-clockwise"
      style={{ "--spin-duration": "12s" }  as any} // slower inner icon rotation
    />
  ))}

        </OrbitingCircles>
      </div>

    </div>
  );
};

export default RevolvingIcons;
