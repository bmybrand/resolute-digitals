"use client";

import React from "react";

// Image paths (inside same file)
const IMAGES = [
  "/assets/Rectangle 54.svg",
  "/assets/Rectangle 59.svg",
  "/assets/Rectangle 60.svg",
  "/assets/Rectangle 62.svg",
  "/assets/Rectangle 63.svg",
  "/assets/Rectangle 64.svg",
  "/assets/Rectangle 65.svg",
  "/assets/Rectangle 66.svg",
  "/assets/Rectangle 67.svg",
  "/assets/Rectangle 68.svg",
];

export default function AlternatingBelt() {
  const durations = [25, 25, 25, 25, 25]; 

  return (
    <>
      <style>{`
        @keyframes scroll-up {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          from { transform: translateY(-50%); }
          to   { transform: translateY(0); }
        }

        .belt-track {
          display: flex;
          flex-direction: column;
        }

        .belt-up {
          animation-name: scroll-up;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        .belt-down {
          animation-name: scroll-down;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
      `}</style>

      <div className="relative h-[480px] xl:px-49 mx-auto overflow-hidden rounded-2xl p-4 flex gap-3 lg:gap-6 justify-center my-30">
        {/* Top & bottom fade overlay */}
<div className="pointer-events-none absolute inset-0 z-10">
  <div className="absolute top-4 left-0 w-full h-44 bg-gradient-to-b from-[#000A21] to-transparent" />
  <div className="absolute bottom-4 left-0 w-full h-44 bg-gradient-to-t from-[#000A21] to-transparent" />
</div>

        {[0, 1, 2, 3, 4].map((colIdx) => {
          const isDown = colIdx % 2 === 1; 
          return (
            <div key={colIdx} className="w-[140px] flex-1 overflow-hidden">
              <div
                className={`belt-track ${isDown ? "belt-down" : "belt-up"} flex flex-col gap-y-3 lg:gap-y-6 `}
                style={{ animationDuration: `${durations[colIdx]}s` }}
              >
                {IMAGES.map((src, i) => <ImageCard key={`${colIdx}-1-${i}`} src={src} />)}
                {IMAGES.map((src, i) => <ImageCard key={`${colIdx}-2-${i}`} src={src} />)}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

const ImageCard = ({ src }: { src: string }) => (
  <div className="lg:h-[180px] w-full rounded-xl overflow-hidden shadow-lg bg-[#0F1930] flex justify-center items-center">
    <img src={src} alt="image" className="w-full h-full object-cover" />
  </div>
);
