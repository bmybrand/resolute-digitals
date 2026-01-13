"use client";

import React from "react";
import {
  SoftwareStat,
  softwareStatsSection,
  softwareStats,
  processSteps as defaultProcessSteps,
  features as defaultFeatures,
} from "./data";

export interface ProcessStep {
  id: string;
  title: string;
  desc: string;
}

export interface Feature {
  title: string;
  text: string;
  image: string;
}

interface ForthSecProps {
  stats?: SoftwareStat[];
  processSteps?: ProcessStep[];
  features?: Feature[];
}

const ForthSec: React.FC<ForthSecProps> = ({
  stats = softwareStats,
  processSteps = defaultProcessSteps,
  features = defaultFeatures,
}) => {
  return (
    <div className="flex flex-col lg:flex-row 2xl:px-49 mt-20 gap-20">
      {/* IMAGE */}
      <div>
        <img
          src="/assets/ax-sd-st-thumb.webp.svg"
          alt=""
          className="w-full h-auto"
        />
      </div>

      {/* CONTENT */}
      <div className="w-full lg:w-3/5 flex flex-col justify-center">
        {/* HEADING */}
        <div className="mt-6">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[43px] font-semibold leading-tight">
             {softwareStatsSection.title}
          </h2>
        </div>

        {/* STATS */}
        <div className="mt-10 flex flex-col gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col lg:flex-row justify-between w-full gap-10"
            >
              <div className="w-full lg:w-2/5">
                <h3 className="text-white text-5xl lg:text-7xl xl:text-[88px] font-bold">
                  {stat.value}
                  {stat.highlight && (
                    <span className="text-[#2378DA]">{stat.highlight}</span>
                  )}
                </h3>
                <span className="text-white text-lg mt-2 block">
                  {stat.label}
                </span>
              </div>

              <p className="text-[#A9ABBE] ExtraLight leading-7 mt-3 w-full lg:w-3/5">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      

       
      </div>
    </div>
  );
};

export default ForthSec;
