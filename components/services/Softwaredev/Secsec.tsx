import React from "react";

const processSteps = [
  {
    id: "01",
    title: "Discovery & Planning",
    desc:
      "We work closely with your team to understand goals, challenges, and functional needs, ensuring every decision supports a clear and measurable development strategy.",
  },
  {
    id: "02",
    title: "Architecture & Prototyping",
    desc:
      "We define the core structure of your application, mapping system logic, data flow, and prototypes that visualize how features will work before development begins.",
  },
  {
    id: "03",
    title: "Development & Integration",
    desc:
      "Our engineers write clean, scalable code and integrate essential APIs, services, and tools to create a seamless and robust system built for real-world performance.",
  },
  {
    id: "04",
    title: "Testing & Deployment",
    desc:
      "We thoroughly test your application for security, speed, and stability before deploying it into production, ensuring a smooth launch and a future-ready foundation.",
  },
];

const Secsec = () => {
  return (
    <div>
      {/* ABOUT SECTION */}
      <div className="flex flex-col lg:flex-row 2xl:px-49 mt-10 lg:mt-40 gap-10">
        <div className="w-full lg:w-2/5 flex flex-col justify-center">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[58px] bold">
            About Software Development Service
          </h1>

          <p className="text-sm sm:text-base ExtraLight text-[#A9ABBE] mt-6 leading-7 max-w-4xl">
            Software development is at the core of digital transformation. We build secure, scalable, and high-performance applications designed to meet the needs of modern businesses. Whether it’s a responsive web platform, a powerful desktop application, or an immersive game experience, our development team delivers solutions engineered for reliability, flexibility, and long-term growth.
          </p>
        </div>

        <div className="w-full lg:w-3/5">
          <img
            src="/assets/A male designer working on a desktop computer in a modern office, focused on the screen showing a user interface design..svg"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* PROCESS SECTION */}
      <div className="flex flex-col lg:flex-row 2xl:px-49 mt-20 gap-10">
        <div className="w-full lg:w-2/5">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[38px] font-semibold">
            Our Comprehensive <br /> Development Process
          </h2>

          <h1 className="text-[#2378DA] text-[120px] sm:text-[180px] xl:text-[270px] bold mt-6">
            04
          </h1>
        </div>

        <div className="w-full lg:w-3/5">
          <p className="text-sm sm:text-base ExtraLight text-[#A9ABBE] leading-7 max-w-4xl">
            Software development drives how modern businesses operate and grow. We engineer secure, scalable, and high-performance applications built to support evolving needs.
          </p>

          {/* STEPS */}
          <div className="mt-10">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col sm:flex-row gap-6 sm:gap-10 py-6
                ${index === processSteps.length - 1 ? "border-y-3" : "border-t-3"}
                border-dotted border-[#334155]`}
              >
                <span className="text-[#2378DA] font-bold w-10 shrink-0">
                  {step.id}
                </span>

                <h3 className="text-white text-xl sm:text-2xl lg:text-[28px] font-semibold min-w-45">
                  {step.title}
                </h3>

                <p className="text-[#A9ABBE] ExtraLight leading-7 text-sm sm:text-base max-w-xl">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secsec;
