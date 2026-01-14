"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Capability, capabilities } from "./data";



const CoreCapabilitiesAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full  2xl:px-49 mt-10 lg:mt-40 gap-10">
      <h2 className="text-3xl sm:text-4xl  font-bold text-white mb-10">
        Core Development Capabilities
      </h2>

      <div className="flex flex-col gap-4">
        {capabilities.map((cap, index) => (
          <div
            key={index}
            className=" rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full py-2 border-b border-[#ffffff]/10 text-left flex justify-between items-center text-white font-semibold text-2xl  transition"
            >
              {cap.title}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            <AnimatePresence>
  {openIndex === index && (
    <motion.div
      key="content"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.15 }} // faster animation
      className="px-6 py-4 text-gray-300 text-sm sm:text-base"
    >
      {cap.description}
    </motion.div>
  )}
</AnimatePresence>

          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreCapabilitiesAccordion;
