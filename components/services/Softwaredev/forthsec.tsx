import React from "react";

const forthsec = () => {
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
            We build powerful software that helps businesses operate smarter and
            deliver exceptional digital experiences.
          </h2>
        </div>

        {/* STATS */}
        <div className="mt-10 flex flex-col gap-12">
          {/* STAT 1 */}
          <div className="flex flex-col lg:flex-row justify-between w-full gap-10">
            <div className="w-full lg:w-2/5">
              <h3 className="text-white text-5xl lg:text-7xl xl:text-[88px] font-bold">
                2.5K<span className="text-[#2378DA]">+</span>
              </h3>
              <span className="text-white text-lg mt-2 block">
                Completed Software Projects
              </span>
            </div>

            <p className="text-[#A9ABBE] ExtraLight leading-7 mt-3 w-full lg:w-3/5">
              We’ve engineered hundreds of custom software solutions across
              diverse industries—each designed to improve performance,
              streamline operations, and create measurable business value.
            </p>
          </div>

          {/* STAT 2 */}
          <div className="flex flex-col lg:flex-row justify-between w-full gap-10">
            <div className="w-full lg:w-2/5">
              <h3 className="text-white text-5xl lg:text-7xl xl:text-[88px] font-bold">
                92<span className="text-[#2378DA]">%</span>
              </h3>
              <span className="text-white text-lg mt-2 block">
                Performance Improvement Rate
              </span>
            </div>

            <p className="text-[#A9ABBE] ExtraLight leading-7 mt-3 w-full lg:w-3/5">
              Our clients report significant improvements in speed, reliability,
              and workflow efficiency after implementing our software systems,
              thanks to our focus on clean architecture and robust development
              practices.
            </p>
          </div>

          {/* STAT 3 */}
          <div className="flex flex-col lg:flex-row justify-between w-full gap-10">
            <div className="w-full lg:w-2/5">
              <h3 className="text-white text-5xl lg:text-7xl xl:text-[88px] font-bold">
                85<span className="text-[#2378DA]">%</span>
              </h3>
              <span className="text-white text-lg mt-2 block">
                Reduced Operational Overhead
              </span>
            </div>

            <p className="text-[#A9ABBE] ExtraLight leading-7 mt-3 w-full lg:w-3/5">
              Most businesses experience reduced operational overhead after
              adopting automation-driven features and integrated tools built
              into our custom software solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forthsec;
