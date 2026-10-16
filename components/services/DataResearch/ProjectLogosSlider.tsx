"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { projectHighlights } from "./data";

export default function ProjectLogosSlider() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const project = projectHighlights[active];

  const goTo = (nextDirection: number) => {
    setDirection(nextDirection);
    setActive(
      (current) =>
        (current + nextDirection + projectHighlights.length) %
        projectHighlights.length,
    );
  };

  const selectProject = (index: number) => {
    if (index === active) return;
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setActive((current) => (current + 1) % projectHighlights.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="mt-16 lg:mt-28">
      <div className="2xl:px-49 mb-8 flex flex-col gap-3 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#55A6FF]">
            Client&apos;s detail
          </p>
          <h2 className="bold mt-3 text-3xl leading-tight text-white sm:text-4xl lg:text-[42px]">
            Enterprise Research &{" "}
            <span className="text-[#55A6FF]">Data Solutions</span>
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-[#A9ABBE] ExtraLight lg:text-right">
          Supporting leading real estate, financial, and investment
          organizations with property research, data collection, verification,
          ESG intelligence, and qualified client outreach.
        </p>
      </div>

      <div
        className="2xl:px-49"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0A1228]">
          <div className="flex flex-col gap-6 border-b border-white/10 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
            <div className="relative min-h-[88px] min-w-0 flex-1 overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={project.id}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -28 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-16 w-[150px] shrink-0 items-center justify-center sm:h-[72px] sm:w-[170px]">
                    <Image
                      src={project.logo}
                      alt={project.name}
                      width={160}
                      height={48}
                      className="h-10 w-auto max-w-[150px] object-contain sm:h-11"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#55A6FF]">
                      {project.number}
                    </p>
                    <h3 className="bold mt-1 truncate text-2xl text-white sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#A9ABBE] ExtraLight">
                      {project.focus}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(-1)}
                aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#55A6FF] hover:bg-[#55A6FF]/10"
              >
                <FaArrowLeft />
              </button>
              <button
                type="button"
                onClick={() => goTo(1)}
                aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#55A6FF] hover:bg-[#55A6FF]/10"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="relative min-h-[180px] overflow-hidden p-5 sm:min-h-[160px] sm:p-6 lg:min-h-[200px] lg:p-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={project.id}
                custom={direction}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-5"
              >
                {project.details.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm leading-7 text-[#C9CBD8] ExtraLight sm:text-[15px] sm:leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap items-center gap-2 border-t border-white/10 px-5 py-4 sm:px-6 lg:px-8">
            {projectHighlights.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => selectProject(index)}
                aria-label={`Show ${item.name}`}
                aria-current={index === active}
                className={`rounded-full px-3.5 py-1.5 text-xs transition-colors duration-300 ${
                  index === active
                    ? "bg-[#2378DA] text-white"
                    : "border border-white/10 bg-transparent text-[#A9ABBE] hover:border-white/25 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
