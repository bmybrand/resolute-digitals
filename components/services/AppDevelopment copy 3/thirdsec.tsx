import React from "react";

import {features} from "./data"

const Thirdsec = () => {
  return (
    <section className="w-full lg:h-[50vh] flex items-center 2xl:px-49 py-16 bg-[#0F1930] mt-20 lg:mt-40">
      <div className="w-full flex flex-col lg:flex-row">
        {features.map((item, index) => {
          const row = Math.floor(index / 4);
          const isImageFirst =
            (row % 2 === 0 && index % 2 === 0) ||
            (row % 2 === 1 && index % 2 === 1);

          return (
            <div
              key={index}
              className={`w-full lg:w-1/4 flex flex-col justify-center gap-6 p-5 lg:p-6
              ${index !== features.length - 1 ? "lg:border-r border-[#4C5364]" : ""}`}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className={`w-full max-w-[70px] 
                order-1 
                ${isImageFirst ? "lg:order-1" : "lg:order-3"}`}
              />

              {/* TEXT */}
              <div className="order-2">
                <h3 className="text-white text-2xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-[#A9ABBE] ExtraLight leading-7 text-sm">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Thirdsec;
