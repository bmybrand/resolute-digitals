"use client";

import React, { useState, useEffect, useRef } from "react";

const ReviewCards = () => {
  const reviews = [
    {
      quote: "They turned our vague idea into a real product.",
      description:
        "Clear roadmap, fast execution, and weekly updates that actually mattered. We launched on time with a site that converts.",
      name: "Jordan Blake",
      title: "Founder, Venture Studio",
    },
    {
      quote: "Finally, a team that gets both design and performance.",
      description:
        "Our bounce rate dropped and leads doubled within the first month. The handoff was smooth and documented.",
      name: "Priya Shah",
      title: "Marketing Lead, SaaS Company",
    },
    {
      quote: "They felt like an extension of our in-house team.",
      description:
        "Strategic thinking, fast iterations, and no fluff. Every deliverable tied back to the business goals.",
      name: "Ethan Cole",
      title: "COO, Logistics Firm",
    },
    {
      quote: "Our brand finally looks as strong as our product.",
      description:
        "They nailed the visual system and messaging, then built a website that feels premium and fast.",
      name: "Sofia Mendes",
      title: "Head of Growth, Fintech",
    },
    {
      quote: "Quality work, zero drama, real results.",
      description:
        "From discovery to launch, they stayed proactive and honest. We keep coming back for new initiatives.",
      name: "Marcus Reed",
      title: "Director, Retail Group",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Duplicate the reviews array multiple times to create infinite belt
  const loopedReviews = [...reviews, ...reviews, ...reviews];

  // Measure card width dynamically
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const firstCard = carouselRef.current.querySelector(
          ".review-card"
        ) as HTMLElement;
        if (firstCard) setCardWidth(firstCard.offsetWidth + 24); // width + gap
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust active index to middle set for infinite loop effect
  const displayedIndex = activeIndex + reviews.length;

  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  const handleNext = () =>
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full py-20 bg-[#081733] flex flex-col items-center bg-[url('/assets/rd-image078.svg')] bg-no-repeat bg-cover bg-center">
      {/* Heading */}
      <div className="flex flex-col lg:w-xl text-center mb-12">
        <div className="flex justify-center items-center w-fit rounded-full bg-white/10 px-3 py-2 mb-6 mx-auto">
          <div className="flex gap-1 text-white whitespace-nowrap text-sm sm:text-lg px-4 py-2 bg-gradient-to-r from-[#2378DA] to-[#134074] rounded-full font-medium">
            <span className="text-sm lg:text-lg">Believe</span>
          </div>
          <span className="px-3 text-sm lg:text-lg text-white">
            What Our Clients Say
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white font-bold">
          <span className="bg-gradient-to-r from-[#2378DA] to-[#134074] bg-clip-text text-transparent">
            Real Stories
          </span>{" "}
          That Reflect Our Impact
        </h1>
      </div>

      {/* Cards */}
      <div className="relative w-full overflow-hidden py-5">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#020D25] to-transparent z-30" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#020D25] to-transparent z-30" />

        <div
          ref={carouselRef}
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(calc(-${displayedIndex * cardWidth}px + 50% - ${cardWidth / 2}px))`,
          }}
        >
          {loopedReviews.map((review, index) => {
            const realIndex = index % reviews.length;
            const isActive = realIndex === activeIndex;
            return (
              <div
                key={index}
                className={`review-card flex-shrink-0 w-80 md:w-100 lg:w-120 h-70 mx-3 transition-all duration-500 transform backdrop-blur-md flex flex-col justify-between p-6 rounded-3xl relative ${
                  isActive
                    ? "scale-105 z-20 bg-gradient-to-br from-[#2378DA]/20 to-transparent border-[1.5px] border-[#2378DA]"
                    : "scale-95 z-10 bg-gradient-to-br from-[#2378DA]/20 to-transparent border border-white/20 opacity-60"
                }`}
              >
                <div className="flex flex-col gap-4">
                  <p className="text-blue-400 font-semibold text-2xl">
                    "{review.quote}"
                  </p>
                  <p className=" text-blue-400 ExtraLight">{review.description}</p>
                </div>
                <div className="mt-4">
                  <p className="font-bold text-blue-400">{review.name}</p>
                  <p className="text-sm text-blue-400">{review.title}</p>
                </div>
               <img
                src="/assets/rd-image079.svg" 
                alt="Avatar"
                className="absolute bottom-6 right-10 w-16 h-16 object-cover overflow-visible "
              />
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots + Arrows */}
      <div className="flex items-center gap-6 mt-6">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full flex justify-center items-center text-[#2378DA] hover:scale-110 transition text-4xl"
        >
          &#10094;
        </button>

        <div className="flex gap-3">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-4 h-4 rounded-full transition ${
                activeIndex === idx
                  ? "bg-[#2378DA] border-5 border-[#0d1f41] w-6 h-6"
                  : "bg-[#2378DA]/20"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full flex justify-center items-center text-[#2378DA] hover:scale-110 transition text-4xl"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ReviewCards;
