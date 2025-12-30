"use client";
import React, { JSX, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();
  const isCaseStudy = pathname.toLowerCase().includes("casestudy");

  // Set selected tab based on current route
  useEffect(() => {
  const current = navItems.find((item) =>
    pathname === item.link || pathname.startsWith(item.link + "/")
  );

  if (current) setSelectedTab(current.name);
  else setSelectedTab(null);
}, [pathname, navItems]);


  // Show/hide navbar on scroll (disabled for Case Study)
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (isCaseStudy) {
      setVisible(true); // always visible in case study
      return;
    }
    const direction = current - scrollYProgress.getPrevious()!;
    if (scrollYProgress.get() < 0.05) setVisible(true);
    else setVisible(direction < 0);
  });

  // Add scrolled class
  useEffect(() => {
    if (isCaseStudy) return; // skip scroll effect for case study
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isCaseStudy]);

  return (
    <>
      {/* NAVBAR */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: -100 }} // start hidden above
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }} // fade in when visible
          transition={{ duration: 0.3, ease: "easeOut" }} // smooth fade + slide
          ref={navbarRef}
          className={cn(
            "flex fixed inset-x-0 mx-auto transition-all duration-300 backdrop-blur-xs border-2 border-[#FFFFFF]/8 z-5000 px-6 py-3 items-center",
            isCaseStudy
              ? "top-10 w-[90%] 2xl:w-[85%] rounded-full bg-[#ffffff]/30 shadow-lg" // floating bubble style
              : scrolled
              ? `top-0 w-full rounded-none ${
                  pathname.toLowerCase().includes("casestudy") ? "bg-[#ffffff]/30" : "bg-[#448ACB]/70"
                } border-b border-white/10`
              : `top-10 lg:top-10 w-[85%] h-13 lg:h-20 rounded-full ${
                  pathname.toLowerCase().includes("casestudy")
                    ? "bg-[#ffffff]/30 xl:top-20"
                    : "bg-[#448ACB]/70 xl:top-20"
                }`,
            className
          )}
        >
          {/* LOGO */}
          <div className="flex items-center text-xl font-bold text-white">
            <img
              src="/assets/Group (1).svg"
              alt=""
              className="lg:pl-4 lg:pr-1 pt-1 2xl:w-11/12 w-[80%] "
            />
          </div>

          {/* NAV ITEMS */}
          <div className="flex-1 justify-center items-center hidden xl:flex space-x-1">
            {navItems.map((navItem, idx) => {
              const isActive = selectedTab === navItem.name;
              return (
                <a
                  key={`nav-${idx}`}
                  href={navItem.link}
                  onClick={() => setSelectedTab(navItem.name)}
                  className={cn(
                    "group relative text-sm px-6 py-2 rounded-full transition duration-200 inline-flex items-center justify-center border border-transparent",
                    isActive
                      ? "bg-[#000A21] text-white border-white/20"
                      : "text-neutral-300 hover:text-white hover:bg-[#000A21]/70 hover:border-white/10"
                  )}
                >
                  <span
                    className={cn(
                      "absolute inset-x-0 w-1/2 mx-auto -top-px h-px bg-linear-to-r from-transparent via-white to-transparent transition",
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    )}
                  />
                  {navItem.name}
                </a>
              );
            })}
          </div>

          {/* RIGHT SIDE BUTTONS */}
          <div className="ml-auto flex items-center gap-4 relative">
            {/* Menu Button */}
            <button
              className="rounded-full border-2  border-[#FFFFFF]/15 flex justify-center items-center w-8 h-8 2xl:w-11 2xl:h-11 xl:w-10 xl:h-10 lg:w-9 lg:h-9 hover:border-white/30 transition"
              onClick={() => setSidebarOpen((prev) => !prev)}
            >
              <img src="/assets/Container.svg" alt="" className="w-4 h-4" />
            </button>

            {/* CONTACT BUTTON */}
            <button className="hidden bg-[#000A21] md:flex gap-2 border font-medium relative border-neutral-200 dark:border-white/20 text-black dark:text-white rounded-full hover:bg-white/10 transition justify-center items-center whitespace-nowrap text-sm px-5 py-2 lg:text-sm lg:px-7 lg:py-4 2xl:text-base 2xl:px-7 2xl:py-4">
              <span className="absolute inset-x-0 w-1/2 mx-auto -top-px bg-linear-to-r from-transparent via-white to-transparent h-px" />
              <span>Contact Now</span>
              <img
                src="/assets/Vector (Stroke).svg"
                className="pt-0.5 w-1.4 xl:w-3 2xl:w-3"
                alt=""
              />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* SIDEBAR */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black z-4000"
            />
            {/* Sidebar panel (Right) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 w-64 h-full bg-white z-5000 shadow-lg flex flex-col p-6"
            >
              {/* Close button */}
              <button
                className="self-end mb-4 text-black font-bold text-xl"
                onClick={() => setSidebarOpen(false)}
              >
                &times;
              </button>

              {/* Sidebar links */}
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const isActive = selectedTab === item.name;
                  return (
                    <a
                      key={item.name}
                      href={item.link}
                      onClick={() => {
                        setSelectedTab(item.name);
                        setSidebarOpen(false);
                      }}
                      className={cn(
                        "text-black font-medium px-3 py-2 rounded transition",
                        isActive
                          ? "bg-[#000A21] text-white"
                          : "hover:bg-gray-100 hover:text-blue-600"
                      )}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
