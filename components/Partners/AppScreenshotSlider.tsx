"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaArrowLeft, FaArrowRight, FaBookOpen, FaClock, FaCompass, FaUsers } from "react-icons/fa6";
import type { AppScreen } from "@/lib/partners/types";

function ScreenArtwork({ screen }: { screen: AppScreen }) {
  if (screen.image) {
    return <Image src={screen.image} alt={`${screen.title} app screenshot`} fill sizes="(max-width: 640px) 292px, 330px" className="object-cover object-top" />;
  }

  const Icon = screen.variant === "quran" ? FaBookOpen : screen.variant === "community" ? FaUsers : screen.variant === "prayer" ? FaClock : FaCompass;

  return (
    <div className="flex h-full flex-col bg-white px-5 pb-5 pt-7 text-black">
      <div className="flex items-center justify-between">
        <Image src="/assets/muslim-app-logo.png" alt="" width={34} height={34} className="h-8 w-8 object-contain brightness-0" />
        <span className="h-8 w-8 rounded-full bg-black/5" />
      </div>
      <p className="mt-8 text-xs font-medium uppercase tracking-[0.16em] text-black/45">{screen.title}</p>
      <h3 className="bold mt-2 text-2xl leading-tight">{screen.subtitle}</h3>
      <div className="mt-6 flex min-h-36 items-center justify-center rounded-[24px] bg-black text-white">
        <Icon className="text-5xl" />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-black/[0.05] p-4"><span className="block h-2 w-12 rounded-full bg-black/20" /><span className="mt-3 block h-5 w-16 rounded-full bg-black" /></div>
        <div className="rounded-2xl bg-black/[0.05] p-4"><span className="block h-2 w-10 rounded-full bg-black/20" /><span className="mt-3 block h-5 w-12 rounded-full bg-black" /></div>
      </div>
      <div className="mt-auto flex justify-around rounded-full bg-black px-5 py-4 text-white/55">
        <FaCompass /><FaClock /><FaBookOpen /><FaUsers />
      </div>
    </div>
  );
}

export default function AppScreenshotSlider({ screens, compact = false }: { screens: AppScreen[]; compact?: boolean }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const move = (direction: number) => {
    setActive((current) => (current + direction + screens.length) % screens.length);
  };

  useEffect(() => {
    if (compact || isPaused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % screens.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [compact, isPaused, screens.length]);

  return (
    <div className="w-full">
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={compact ? undefined : {
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)",
        }}
        className={compact ? "relative mx-auto h-[390px] max-w-[560px]" : "relative h-[570px] w-full overflow-hidden sm:h-[650px]"}
      >
        {screens.map((screen, index) => {
          const relative = (index - active + screens.length) % screens.length;
          const distance = relative <= Math.floor(screens.length / 2) ? relative : relative - screens.length;

          if (Math.abs(distance) > (compact ? 1 : 3)) return null;

          const animation = distance === 0
            ? { x: "-50%", y: "-50%", rotate: 0, scale: 1, opacity: 1 }
            : distance === 1
              ? { x: compact ? "-8%" : "22%", y: "-47%", rotate: 6, scale: 1, opacity: 0.65 }
              : distance === -1
                ? { x: compact ? "-92%" : "-122%", y: "-47%", rotate: -6, scale: 1, opacity: 0.65 }
                : distance === 2
                  ? { x: "110%", y: "-44%", rotate: 10, scale: 0.92, opacity: 0.45 }
                  : distance === -2
                    ? { x: "-210%", y: "-44%", rotate: -10, scale: 0.92, opacity: 0.45 }
                    : distance === 3
                      ? { x: "195%", y: "-40%", rotate: 14, scale: 0.84, opacity: 0.3 }
                      : { x: "-295%", y: "-40%", rotate: -14, scale: 0.84, opacity: 0.3 };

          const visibility = distance === 0
            ? "z-30"
            : Math.abs(distance) === 1
              ? "z-20"
              : Math.abs(distance) === 2
                ? "z-10 hidden xl:block"
                : "z-0 hidden 2xl:block";

          return (
            <motion.button
              type="button"
              key={screen.title}
              onClick={() => setActive(index)}
              aria-label={`Show ${screen.title}`}
              initial={{ opacity: 0, scale: 0.82 }}
              animate={animation}
              transition={{ type: "spring", stiffness: 145, damping: 22, mass: 0.82 }}
              className={`absolute left-1/2 top-1/2 overflow-hidden will-change-transform ${screen.image ? "bg-transparent shadow-[0_28px_55px_rgba(0,0,0,.22)]" : "rounded-[34px] bg-white shadow-[0_35px_90px_rgba(0,0,0,.38)] ring-1 ring-black/10"} ${
                compact ? "h-[360px] w-[205px]" : "h-[520px] w-[292px] sm:h-[590px] sm:w-[330px]"
              } ${visibility}`}
            >
              <ScreenArtwork screen={screen} />
            </motion.button>
          );
        })}
      </div>

      {!compact && (
        <div className="mt-8 flex items-center justify-center gap-5">
          <button onClick={() => move(-1)} aria-label="Previous screenshot" className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 text-black transition hover:bg-black hover:text-white"><FaArrowLeft /></button>
          <div className="flex max-w-[180px] flex-wrap justify-center gap-2 sm:max-w-md">
            {screens.map((screen, index) => <button key={screen.title} onClick={() => setActive(index)} aria-label={`Show ${screen.title}`} className={`h-2.5 rounded-full transition-all ${index === active ? "w-8 bg-black" : "w-2.5 bg-black/20"}`} />)}
          </div>
          <button onClick={() => move(1)} aria-label="Next screenshot" className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 text-black transition hover:bg-black hover:text-white"><FaArrowRight /></button>
        </div>
      )}
    </div>
  );
}
