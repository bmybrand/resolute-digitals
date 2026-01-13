import React from "react";
import { mainSection } from "./data";

const HeroSec = () => {
  return (
    <div>
      <div
        className="relative w-full h-[50vh] lg:h-[60vh] flex items-center justify-center rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url('/assets/Group1597883634.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-9 p-5">
          <h1 className="text-white text-4xl lg:text-8xl font-bold text-center drop-shadow-lg lg:mt-30">
            {mainSection.title}
          </h1>

          <p className="text-sm lg:text-base max-w-4xl mx-auto ExtraLight text-center text-white">
            {mainSection.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
