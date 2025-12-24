"use client"

import React, { useRef } from "react"
import Gravity, { MatterBody } from "./fancy/physics/gravity"

const services = [
  "Web Design",
  "App Design",
  "Dashboard",
  "UI/UX Design",
  "Illustration",
  "Brand Identity",
  "Landing Page",
  "Product Design",
]

const bubbleItems = [
  "Design System",
  "Prototype",
  "Mobile App Design",
  "Website Design",
  "Illustration",
  "Brand Identity",
  "Dashboard",
  "UI Design",
  "Brand Identity",
  "Wireframe Design",
  "UX/UI Design",
  "Landing Page",
  "Product Design",
]

const separatorImage = "/assets/Group 1597883449.svg"
const colors = ["#2378DA", "#0F1930"]

const WorkTogether = () => {
  const gravityRef = useRef(null)

  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[70vh] relative flex justify-center items-center flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-10 bg-[#000A21] overflow-hidden">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl text-center text-white z-10 pointer-events-auto">
          Let’s Create an Amazing Project Together!
        </h1>

        {/* Contact Button */}
        <button className="z-10 bg-gradient-to-r from-[#2378DA] to-[#042F61] flex gap-1 font-medium relative text-white rounded-full hover:opacity-90 transition justify-center items-center whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-3 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-10 py-1 sm:py-2 md:py-3 lg:py-4 xl:py-5 pointer-events-auto">
          <span className="absolute inset-x-0 w-1/2 mx-auto -top-px bg-gradient-to-r from-transparent via-white to-transparent h-px" />
          <span>Contact Now</span>
          <img
            src="/assets/Vector (Stroke).svg"
            className="pt-0.5 w-3 sm:w-3.5 md:w-4"
            alt=""
          />
        </button>

        <div
          className="absolute inset-0"
          onWheelCapture={(e) => {
            // Allow browser scroll — DO NOT preventDefault
            e.stopPropagation()
          }}
        >
          <Gravity
            ref={gravityRef}
            gravity={{ x: 0, y: 0.4 }}
            addTopWall={true}
            className="absolute inset-0"
          >
            {bubbleItems.map((item, index) => (
              <MatterBody
                key={index}
                x={`${10 + (index * 6) % 80}%`}
                y={`${5 + (index * 8) % 50}%`}
                isDraggable
              >
                <div
                  className="flex items-center justify-center text-white select-none cursor-grab hover:cursor-grabbing rounded-full text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-5 md:px-6 lg:px-7 sm:py-2 md:py-3 lg:py-4"
                  style={{ backgroundColor: colors[index % 2] }}
                >
                  {item}
                </div>
              </MatterBody>
            ))}
          </Gravity>
        </div>
      </div>

      {/* Marquee Services Belt */}
      <div className="w-full overflow-hidden bg-[#2378DA] border border-black/15 h-20 sm:h-24 md:h-28 lg:h-28 xl:h-32 2xl:h-36 relative">
        <div
          className="flex animate-marquee whitespace-nowrap absolute"
          style={{ willChange: "transform" }}
        >
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className="flex items-center h-20 sm:h-24 md:h-28 lg:h-28 xl:h-32 2xl:h-36 px-2 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12"
            >
              <span className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                {service}
              </span>
              {index < services.length * 2 - 1 && (
                <img
                  src={separatorImage}
                  alt="separator"
                  className="w-auto h-4 sm:h-6 md:h-8 lg:h-10 xl:h-12 2xl:h-14"
                />
              )}
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </div>
    </div>
  )
}

export default WorkTogether
