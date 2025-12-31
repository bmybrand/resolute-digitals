"use client";
import React, { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What software development services do you provide?",
    answer:
      "We provide custom software development, web and mobile applications, enterprise systems, API integrations, automation solutions, and cloud-based platforms tailored to business needs.",
  },
  {
    question: "How long does a software project take to complete?",
    answer:
      "Project timelines depend on scope and complexity. Small projects may take a few weeks, while larger enterprise solutions typically range from 3 to 6 months with phased delivery.",
  },
  {
    question:
      "What makes Resolute Digitals different from other development agencies?",
    answer:
      "We focus on building scalable, secure, and long-lasting software — not just delivering features. Through strategy, engineering expertise, and continuous collaboration, we create solutions that deliver real results and long-term value.",
  },
  {
    question: "Can you integrate third-party tools or existing systems?",
    answer:
      "Yes, we specialize in integrating third-party APIs, CRMs, payment gateways, analytics tools, and legacy systems while ensuring stability and performance.",
  },
  {
    question: "Do you offer ongoing support after development?",
    answer:
      "Absolutely. We provide maintenance, performance optimization, feature enhancements, and long-term support to keep your software running smoothly.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with modern technologies including React, Next.js, Node.js, Java, Python, cloud platforms, databases, and scalable backend architectures.",
  },
];

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
                    <img src="/assets/Symbol.svg" alt="" />
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
