"use client";
import React, { useState } from "react";
import { faqs } from "./data";

type FaqItem = {
  question: string;
  answer: string;
};



const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full 2xl:px-49 lg:mt-40 mt-20 ">
        <div className="flex flex-col divide-y divide-[#2C344A] gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-4 px-6 bg-[#0F1930] rounded-3xl">
                {/* QUESTION */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-white text-lg font-medium">
                    {item.question}
                  </span>

                  {/* ARROW */}
                  <span
                    className={`transform transition-transform duration-300 text-white w-10 h-10 rounded-full flex items-center justify-center ${
                      isOpen ? "rotate-90 bg-[#2378DA]" : "bg-[#FFFFFF]/10" 
                    }`}
                  >
                    <img src="/assets/rd-image127.svg" alt="" />
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-[#A9ABBE] ExtraLight leading-7 pr-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
    </section>
  );
};

export default FaqSection;
