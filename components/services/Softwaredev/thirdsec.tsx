import React from "react";

const features = [
  {
    title: "User-Focused Development",
    text:
      "Every feature is crafted for usability—putting user needs first to ensure workflows stay intuitive, efficient, and easy to navigate.",
    image: "/assets/Group 1597883776.svg",
  },
  {
    title: "Collaborative Workflow",
    text:
      "We collaborate with you throughout development, refining the product with your feedback to match your goals and vision.",
    image: "/assets/Mental_Focus.svg",
  },
  {
    title: "Expert Engineering Team",
    text:
      "We bring together skilled engineers who solve complex challenges and build reliable, scalable, future-ready solutions.",
    image: "/assets/Vector (6).svg",
  },
  {
    title: "Data-Driven Decisions",
    text:
      "Our process is driven by insights and performance data, creating systems optimized for stability, speed, and long-term growth.",
    image: "/assets/Vector (6).svg",
  },
];

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
