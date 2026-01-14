"use client";
import React, { useEffect, useRef, useState } from "react";

/* ---------- your data ---------- */
const Databar = {
  section1: {
    title: (
      <>
        Product Design <br /> & Experience
      </>
    ),
    mainbubble: "Design",
    subbubble: "Craft Experiences That Connect",
    mainimg: "/assets/rd-image005.png",
    subtitle: "Crafted Interfaces. Memorable Brands..",
    maintitle: "Human-First Design.",
    Description:
      "We turn concepts into captivating visuals, intuitive journeys, and branded experiences that feel effortless. From UI/UX to complete brand systems, we design with purpose—where every interaction builds trust and elevates your product.",
    icon: "/assets/rd-image006.svg",
    newicone: "/assets/rd-image007.svg",
  },
  section2: {
    title: (
      <>
        Engineering <br /> & Development
      </>
    ),
    mainbubble: "Build",
    subbubble: "Develop Technology That Scales",
    mainimg: "/assets/rd-image008.png",
    subtitle: "High-Performance Engineering For",
    maintitle: "Modern Businesses.",
    Description:
      "From robust software platforms to high-quality mobile apps, our engineering teams turn vision into reality. We build fast, scalable, and secure digital products—backed by technical expertise and real-world problem-solving.",
    icon: "/assets/Group (3).svg",
    newicone: "/assets/rd-image009.svg",
  },
  section3: {
    title: (
      <>
        Data & Market  <br /> Intelligence
      </>
    ),
    mainbubble: "Grow",
    subbubble: "Turn Insights Into Impact",
    mainimg: "/assets/rd-image010.png",
    subtitle: "Smarter Insights. Precise REIT Data.",
    maintitle: "Better Operations.",
    Description:
      "We help businesses harness the power of data to make informed decisions, streamline operations, and accelerate growth. Our approach combines analytics, strategy, and execution to deliver measurable results.",
    icon: "/assets/rd-image011.svg",
    newicone: "/assets/rd-image012.svg",
  },
} as const;

type SectionKey = keyof typeof Databar;
const SECTION_KEYS = Object.keys(Databar) as SectionKey[];

const DURATION_MS = 6000;
const TICK_MS = 50;

const Herobar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const activeKey = SECTION_KEYS[activeIndex];
  const sectionData = Databar[activeKey];

  const timerRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set video playback rate
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  useEffect(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }

    const totalTicks = Math.max(1, Math.round(DURATION_MS / TICK_MS));
    const step = 100 / totalTicks;
    setProgress(0);

    timerRef.current = window.setInterval(() => {
      setProgress((p) => {
        const np = p + step;
        if (np >= 100) {
          const next = (activeIndex + 1) % SECTION_KEYS.length;
          setActiveIndex(next);
          return 0;
        }
        return np;
      });
    }, TICK_MS) as unknown as number;

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [activeIndex]);

  const handleJump = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="relative w-full min-h-[92vh] h-fit pt-20 overflow-hidden rounded-4xl flex flex-col justify-between">

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1D69C1] to-[#134074] z-0 rounded-4xl" />

        {/* Video Overlay */}
        <video
          src="/assets/Video.mp4"
          autoPlay
          loop
          muted
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-soft-light z-10 rounded-4xl"
        />

        {/* Color Tint */}
        <div className="absolute inset-0 bg-[#295EBF] mix-blend-saturation z-5 rounded-4xl" />

        {/* Main content */}
        <div className="relative z-20 flex flex-col lg:flex-row justify-center flex-1 text-white gap-10 px-4   sm:px-8 lg:px-16 xl:px-30 ">

          {/* LEFT (text) */}
          <div className="lg:w-1/2 w-full space-y-6 pl-0 2xl:pl-10 pt-5 sm:pt-10 lg:pt-18 xl:pt-24 pb-10 flex flex-col items-start justify-center">
            <div className="w-fit border border-transparent rounded-full bg-[#FFFFFF]/10 px-2 py-4 ExtraLight">
              <span className="px-6 py-3 rounded-full bg-[#FFFFFF] text-black bold text-xs lg:text-base">{sectionData.mainbubble}</span>
              <span className="px-4 text-xs lg:text-base">{sectionData.subbubble}</span>
            </div>

            <h1 className="ExtraLight leading-tight text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              {sectionData.subtitle}
              <br />
              <span className="block bold text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl">
                {sectionData.maintitle}
              </span>
            </h1>

            <p className="opacity-90 max-w-[80%] text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl">
              {sectionData.Description}
            </p>

            <div className="flex gap-4">
              <a href="/contact">
  <button className=" cursor-pointer text-xs lg:text-base flex gap-2 items-center text-white bg-[#000A21] px-6 py-3 rounded-full border border-transparent hover:bg-transparent hover:border-white/80 transition duration-300">
    Get Started Now
  </button>
</a>

              <a href="/services">
  <button className=" cursor-pointer text-xs lg:text-base flex gap-2 items-center text-white px-6 py-3 rounded-full bg-transparent border border-white hover:border-[#000A21] hover:bg-[#000A21] transition duration-300">
    Discover Our Services
  </button>
</a>

            </div>
          </div>

          {/* RIGHT (image + floating labels) */}
          <div className="relative lg:w-1/2 w-full flex justify-end lg:mt-0 flex-col items-end lg:flex-row">
          
            {activeKey === "section1" && (<div className="absolute inset-0 pointer-events-auto">
              <div className="absolute top-[27%] left-5 w-fit flex justify-center items-center border border-transparent rounded-xl bg-[#FFFFFF]/20 px-2 py-2 ExtraLight hover:scale-105 hover:rotate-3 transition-transform">
                <img src="/assets/rd-image013.png" alt="" className="p-3 rounded-xl bg-gradient-to-br from-[#0D55A2] to-[#000A21] text-black bold" />
                <span className="px-2 ExtraLight">Prototyping</span>
              </div>
              <div className="absolute top-[27%] right-10 w-fit flex justify-center items-center border border-transparent rounded-xl bg-[#FFFFFF]/20 px-2 py-2 ExtraLight hover:-rotate-3 hover:scale-105 transition-transform">
                <img src="/assets/rd-image014.png" alt="" className="p-3 rounded-xl bg-gradient-to-br from-[#0D55A2] to-[#000A21] text-black bold" />
                <span className="px-2 ExtraLight">Seamless <br /> Experience</span>
              </div>
              <div className="absolute top-[22%] left-1/3 flex justify-center items-center w-fit border border-transparent rounded-xl bg-[#FFFFFF]/20 px-2 py-2 ExtraLight hover:scale-105 hover:rotate-3 transition-transform">
                <img src="/assets/rd-image015.png" alt="" className="p-3 rounded-xl bg-gradient-to-br from-[#0D55A2] to-[#000A21] text-black bold" />
                <span className="px-2 ExtraLight">User-Centric <br /> Design</span>
              </div>
            </div>
            )}
            <img
  src={sectionData.mainimg}
  alt="Hero Illustration"
  className="w-auto h-auto  relative z-10 pointer-events-none select-none "
/>

          </div>
        </div>

        {/* bottom progress bar / section chooser */}
        <div className="relative z-20 w-[90%] 2xl:w-[88%] h-25 bg-[#FFFFFF]/15 rounded-t-4xl flex mx-auto text-xl text-[#FFFFFF] regular overflow-hidden">
  {SECTION_KEYS.map((key, idx) => {
    const isActive = idx === activeIndex;
    return (
      <button
        key={key}
        onClick={() => handleJump(idx)}
        className={`
          flex-1 relative group border-r last:border-r-0 border-white/20 
          flex flex-col items-center justify-center
          px-4 py-6
          ${isActive ? "bg-white/50 text-black bold" : "bg-transparent"}
          hover:bg-white/10 transition-colors
          lg:flex-row lg:items-start lg:justify-start
        `}
        aria-current={isActive}
        aria-label={`Section ${idx + 1}: ${key}`}
        type="button"
      >
        {/* ICON */}
        <img
          src={isActive ? Databar[key].newicone : Databar[key].icon}
          alt=""
          className="lg:w-auto lg:h-auto w-10 h-10 lg:pl-6"
        />

        {/* TEXT – hidden below lg */}
        <div className="hidden lg:block text-base xl:text-xl text-start pl-6">
          {Databar[key].title}
        </div>

        {/* PROGRESS BAR */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-white transition-all duration-150"
          style={{ width: isActive ? `${progress}%` : "0%" }}
        />
      </button>
    );
  })}
</div>

      </div>
    </div>
  );
};

export default Herobar;
