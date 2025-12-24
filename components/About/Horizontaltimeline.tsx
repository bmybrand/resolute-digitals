"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const YEARS = ["2018", "2019", "2020", "2021", "2022", "2023", "2024"];
const DESCRIPTIONS = [
  "Company founded and initial vision defined.",
  "First major clients and market entry.",
  "Product expansion and team growth.",
  "International presence established.",
  "Major platform redesign launched.",
  "AI & automation integration phase.",
  "Scaling globally with enterprise solutions.",
];

/* ===========================
   SIMPLE MOBILE TIMELINE
=========================== */
const SimpleTimeline = () => (
  <section className="px-6 py-20 space-y-10">
    <h2 className="text-white text-3xl font-bold mb-8">
      Our <span className="text-[#2378DA]">Journey</span>
    </h2>

    {YEARS.map((year, i) => (
      <div key={i} className="border-l-2 border-[#2378DA] pl-6 relative">
        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#2378DA]" />
        <h3 className="text-xl font-semibold text-white">{year}</h3>
        <p className="text-white/70 mt-2 text-sm">
          {DESCRIPTIONS[i]}
        </p>
      </div>
    ))}
  </section>
);

/* ===========================
   DESKTOP HORIZONTAL TIMELINE
=========================== */
const Horizontaltimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [gap, setGap] = useState(200);
  const [padding, setPadding] = useState({ left: 450, right: 450 });
  const [isDesktop, setIsDesktop] = useState(true);

  /* Detect screen width */
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Desktop spacing logic */
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width >= 1536) setGap(350), setPadding({ left: 700, right: 70 });
      else if (width >= 1280) setGap(250), setPadding({ left: 650, right: 250 });
      else if (width >= 1024) setGap(200), setPadding({ left: 630, right: 330 });
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const timelineWidth = gap * (YEARS.length - 1);

  /* GSAP */
  useEffect(() => {
    if (!sectionRef.current || !containerRef.current || !pinWrapperRef.current) return;

    const anim = gsap.to(containerRef.current, {
      x: -timelineWidth,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=" + timelineWidth,
        scrub: 0.6,
        pin: pinWrapperRef.current,
        anticipatePin: 1,
        onUpdate: (self) => {
          const x = Math.abs(self.progress * timelineWidth);
          setActiveIndex(Math.round(x / gap));
        },
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [timelineWidth, gap]);

  /* ✅ FIX: Conditional render INSIDE return */
  return !isDesktop ? (
    <SimpleTimeline />
  ) : (
    <section ref={sectionRef} className="relative w-full overflow-hidden pt-[15vh]">
      <div ref={pinWrapperRef}>
        {/* Heading */}
        <div className="px-6 sm:px-12 md:px-20 lg:px-28 xl:px-45">
          <div className="flex items-center w-fit rounded-full bg-white/10 px-3 py-2 mb-6">
            <div className="relative px-4 py-2 bold text-white rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074]">
              <span className="absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
              Explore
            </div>
            <span className="px-3 text-white">Our Digital Services</span>
          </div>

          <h1 className="text-white text-4xl lg:text-[58px] pb-12 max-w-2xl bold">
            From Vision To Reality: Our{" "}
            <span className="bg-gradient-to-r from-[#2378DA] to-[#134074] bg-clip-text text-transparent">
              Evolution Story
            </span>
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative h-[220px] w-full flex justify-center">
          <div className="absolute top-[65%] left-0 right-0 h-[2px] bg-white/40" />

          <div
            ref={containerRef}
            className="absolute top-[65%] flex items-center"
            style={{
              width: `${timelineWidth + padding.left + padding.right}px`,
              paddingLeft: `${padding.left}px`,
              paddingRight: `${padding.right}px`,
            }}
          >
            {YEARS.map((year, i) => (
              <div
                key={i}
                className="relative flex flex-col bold"
                style={{ marginLeft: i === 0 ? 0 : gap }}
              >
                <span
                  className={`absolute -top-12 text-3xl transition-all duration-300 ${
                    activeIndex === i
                      ? "text-[#2378DA] scale-300 -translate-y-5 translate-x-14"
                      : "text-[#4C5364]"
                  }`}
                >
                  {year}
                </span>

                {activeIndex === i && (
                  <p className="absolute top-8 w-[270px] text-xl text-white/80">
                    {DESCRIPTIONS[i]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Horizontaltimeline;
