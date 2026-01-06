"use client";

import React, { useEffect, useRef, useState } from "react";
import Curvaturecards from "./curvaturecards";


const Fifthsec = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const rocketRef = useRef<HTMLImageElement | null>(null);

  const [launch, setLaunch] = useState(false);
  const [launchedOnce, setLaunchedOnce] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [vibrate, setVibrate] = useState(false);

  const launchDelay = 2000;      // delay before launch
  const launchDuration = 5000;   // duration to slow rocket
  const vibrationDuration = 500; // duration of vibration effect before launch

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!launchedOnce && entries[0].isIntersecting) {
          // Start vibration immediately
          setVibrate(true);

          setTimeout(() => {
            setVibrate(false);  // stop vibration
            setLaunch(true);    // start launch
            setLaunchedOnce(true);

            setTimeout(() => {
              setFadeIn(true);  // fade in at initial position
              setLaunch(false);
            }, launchDuration);
          }, vibrationDuration);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [launchedOnce]);

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col items-center pb-40 sm:pb-80 md:pb-100 lg:pb-100 xl:pb-10 py-10 bg-[url('/assets/Group1597883157.png')] bg-no-repeat bg-cover bg-center lg:h-fit min-h-[130vh] overflow-hidden"
    >
      <img
        ref={rocketRef}
        src="/assets/rocket2.png"
        alt="Rocket"
        className={`absolute bottom-0 w-20 sm:w-40 md:w-60 transition-all ease-out
          ${launch ? "-translate-y-[100vh] opacity-0" : "translate-y-0"}
          ${!launch && fadeIn ? "opacity-100 transition-opacity duration-1500 ease-in" : ""}
          ${vibrate ? "animate-shake" : ""}
        `}
        style={{
          transitionDuration: `${launchDuration}ms`,
          opacity: !launch && !fadeIn ? 1 : undefined,
        }}
      />

      <div className="flex flex-row justify-center items-center w-fit border border-transparent rounded-full bg-white/10 px-2 py-2 mt-4">
        <div className="flex gap-1 font-medium relative text-black dark:text-white rounded-full transition justify-center items-center whitespace-nowrap text-lg px-4 py-2 bold bg-gradient-to-r from-[#2378DA] to-[#134074]">
          <span className="absolute inset-x-0 w-1/2 mx-auto top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px" />
          <span className="text-sm lg:text-lg">Explore</span>
        </div>
        <span className="px-3 text-sm lg:text-lg text-white">Our Digital Services</span>
      </div>

      <h1 className="block bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[58px] text-white py-16 text-center">
        A{" "}
        <span className="bg-gradient-to-r from-[#2378DA] to-[#134074] bg-clip-text text-transparent">
          Proven Process
        </span>{" "}
        That <br /> Turns Ideas Into Impact
      </h1>
          <Curvaturecards/>
      {/* Vibration keyframes style */}
      <style>
        {`
          @keyframes shake {
            0% { transform: translateX(0); }
            10% { transform: translateX(4px); }
            20% { transform: translateX(-4px); }
            30% { transform: translateX(4px); }
            40% { transform: translateX(-4px); }
            50% { transform: translateX(4px); }
            60% { transform: translateX(-4px); }
            70% { transform: translateX(4px); }
            80% { transform: translateX(-4px); }
            90% { transform: translateX(4px); }
            100% { transform: translateX(0); }
          }
          .animate-shake {
            animation: shake ${vibrationDuration}ms ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Fifthsec;
