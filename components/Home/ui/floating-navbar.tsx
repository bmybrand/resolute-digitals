"use client"
import React, { JSX, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element; dropdown?: any[] }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});
  const [dropdownTop, setDropdownTop] = useState<number>(0);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  

  const pathname = usePathname();
  const isCaseStudy = pathname.toLowerCase().includes("casestudy");

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  useEffect(() => {
    const current = navItems.find(
      (item) => pathname === item.link || pathname.startsWith(item.link + "/")
    );
    setSelectedTab(current ? current.name : null);
  }, [pathname, navItems]);

  useEffect(() => {
    const updateTop = () => {
      if (!navbarRef.current) return setDropdownTop(0);
      const rect = navbarRef.current.getBoundingClientRect();
      setDropdownTop(Math.round(rect.bottom));
    };
    updateTop();
    window.addEventListener("resize", updateTop);
    window.addEventListener("scroll", updateTop, { passive: true });
    return () => {
      window.removeEventListener("resize", updateTop);
      window.removeEventListener("scroll", updateTop);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (isCaseStudy) {
      setVisible(true);
      return;
    }
    const direction = current - scrollYProgress.getPrevious()!;
    setVisible(scrollYProgress.get() < 0.05 || direction < 0);
  });

  useEffect(() => {
  if (isCaseStudy) return;

  let lastScrollY = window.scrollY;

  const onScroll = () => {
    const currentScrollY = window.scrollY;

    // Show navbar if near top or scrolling up
    setVisible(currentScrollY < 50 || currentScrollY < lastScrollY);
    lastScrollY = currentScrollY;

    // Close dropdowns on scroll
    setHoveredDropdown(null);
    setOpenDropdowns({});
    
    // Update scrolled state for styling
    setScrolled(currentScrollY > 30);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, [isCaseStudy]);


  return (
    <>
       {/* NAVBAR */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          ref={navbarRef}
          className={cn(
            "flex fixed inset-x-0 mx-auto transition-all duration-300 backdrop-blur-xs border-2 border-[#FFFFFF]/8 z-5000 px-6 py-3 items-center",
            isCaseStudy
              ? "top-10 w-[90%] 2xl:w-[85%] rounded-full bg-[#ffffff]/30 shadow-lg"
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
            <img src="/assets/Group (1).svg" alt="" className="lg:pl-4 lg:pr-1 pt-1 2xl:w-11/12 w-[80%]" />
          </div>

          {/* NAV ITEMS */}
          <div className="flex-1 justify-center items-center hidden xl:flex space-x-1 relative">
            {navItems.map((navItem, idx) => {
              const isActive = selectedTab === navItem.name;
              return (
                <div
                  key={`nav-${idx}`}
                  className="relative"
                  onMouseEnter={() => setHoveredDropdown(navItem.name)}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <a
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

                  {/* DROPDOWN */}
{navItem.dropdown && (
  <AnimatePresence>
    {hoveredDropdown === navItem.name && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.18 }}
        className="py-6 bg-white dark:bg-[#000A21] shadow-xl rounded-xl z-50"
        style={{
          left: navItem.name === "Services" ? (navbarRef.current ? navbarRef.current.offsetLeft : 0) : undefined,
          position: "fixed",
          top: 70,
          width: navItem.name === "Services" ? (scrolled ? "100vw" : "80%") : undefined,
          zIndex: 6000,
        }}
        onMouseEnter={() => setHoveredDropdown(navItem.name)}
        onMouseLeave={() => setHoveredDropdown(null)}
      >
        {navItem.name === "Services" ? (
          <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row gap-6">
            {/* Left image */}
            <div className="flex-shrink-0 w-full lg:w-48 h-40 lg:h-auto">
              <img
                src="https://picsum.photos/200"
                alt="Dropdown Image"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Right options */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {navItem.dropdown.map((group: any, i: number) => (
                <div key={i} className="flex flex-col gap-2">
                  {group.title && (
                    <a
                      href={group.link}
                      onClick={() => setSelectedTab(navItem.name)}
                      className="font-semibold text-gray-700 dark:text-gray-300 hover:text-[#2378DA] transition text-sm"
                    >
                      {group.title}
                    </a>
                  )}
                  {(group.items || []).map((item: any, j: number) => (
                    <a
                      key={j}
                      href={item.link}
                      onClick={() => setSelectedTab(navItem.name)}
                      className="flex items-center gap-2 text-gray-800 dark:text-gray-200 text-sm py-1 px-2 rounded hover:bg-gradient-to-r hover:from-[#2378DA]/10 hover:to-[#134074]/10 transition"
                    >
                      <span className="w-2 h-2 bg-[#2378DA] rounded-full inline-block"></span>
                      {item.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="flex flex-col gap-2">
              {navItem.dropdown.map((item: any, j: number) => (
                <a
                  key={j}
                  href={item.link}
                  onClick={() => setSelectedTab(navItem.name)}
                  className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gradient-to-r hover:from-[#2378DA]/10 hover:to-[#134074]/10 transition text-gray-800 dark:text-gray-200"
                >
                  <span className="w-2 h-2 bg-[#2378DA] rounded-full inline-block"></span>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    )}
  </AnimatePresence>
)}

                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE BUTTONS */}
          <div className="ml-auto flex items-center gap-4 relative">
            <button
              className="rounded-full border-2  border-[#FFFFFF]/15 flex justify-center items-center w-8 h-8 2xl:w-11 2xl:h-11 xl:w-10 xl:h-10 lg:w-9 lg:h-9 hover:border-white/30 transition"
              onClick={() => setSidebarOpen((prev) => !prev)}
            >
              <img src="/assets/Container.svg" alt="" className="w-4 h-4" />
            </button>

            <a href="/contact">
  <button className=" cursor-pointer hidden bg-[#000A21] md:flex gap-2 border font-medium relative border-neutral-200 dark:border-white/20 text-black dark:text-white rounded-full hover:bg-white/10 transition justify-center items-center whitespace-nowrap text-sm px-5 py-2 lg:text-sm lg:px-7 lg:py-4 2xl:text-base 2xl:px-7 2xl:py-4">
    <span className="absolute inset-x-0 w-1/2 mx-auto -top-px bg-linear-to-r from-transparent via-white to-transparent h-px"></span>
    <span>Contact Now</span>
    <img src="/assets/Vector (Stroke).svg" className="pt-0.5 w-1.4 xl:w-3 2xl:w-3" alt="" />
  </button>
</a>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* SIDEBAR */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black z-4000"
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full z-5000 shadow-xl bg-[#000612] p-8 text-white overflow-y-auto flex flex-col w-full sm:w-full md:w-96 lg:w-150 xl:w-100"
            >
              <button
                className="self-end mb-4 text-white font-bold text-2xl"
                onClick={() => setSidebarOpen(false)}
              >
                &times;
              </button>

              <div className="flex flex-col-reverse lg:flex-row-reverse gap-6">
                {/* LEFT: About / Contact */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 lg:w-2/3 xl:w-full lg:pr-6 w-full lg:border-r lg:border-[#FFFFFF]/10 xl:border xl:border-transparent"
                >
                  <div className="w-full border-b border-[#FFFFFF]/10">
                    <img src="/assets/Group (5).svg" alt="" className="mb-4 w-2/3" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#2378DA] mb-3">About Us</h2>
                  <p className="text-sm leading-7">
                    We’re your trusted digital partner — helping businesses grow with creativity, technology, and strategy.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#2378DA] mb-3">Head Office</h3>
                      <p className="text-sm mb-3">info@resolutedigitals.com</p>
                      <p className="text-sm mb-3">+1 (800) 465-7890</p>
                      <p className="text-sm mb-3">Plot No. E-88, Block B Gulshan e Jamal, Karachi, 75260</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2378DA] mb-3">US Office</h3>
                      <p className="text-sm mb-3">info@resolutedigitals.com</p>
                      <p className="text-sm mb-3">+1 (800) 465-7890</p>
                      <p className="text-sm mb-3">738, Fawn Valley DR., ALLEN, TX 75002</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2378DA] mb-3">Stay Connected</h3>
                  <div className="flex flex-wrap gap-1">
                    {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram].map((Icon, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 cursor-pointer hover:bg-[#2378DA] border border-white/20 p-3 rounded-full"
                      >
                        <Icon />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* RIGHT: Nav Links */}
                {/* RIGHT: Nav Links */}
      <motion.nav
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: 20 }}
  transition={{ duration: 0.3, delay: 0.05 }}
  className="flex-1 flex flex-col gap-3 xl:hidden lg:w-1/3 w-full lg:text-2xl"
>
  {navItems.map((item) => {
    const isActive = selectedTab === item.name;
    const hasDropdown = item.dropdown && item.dropdown.length > 0;
    const dropdownOpen = !!openDropdowns[item.name];

    return (
      <div key={item.name} className="flex flex-col">
        {/* MAIN ITEM */}
        <div className="flex items-center justify-between w-full">
          {/* Tab text - navigates on click */}
          <a
            href={item.link}
            onClick={() => {
              setSelectedTab(item.name);
              setSidebarOpen(false);
            }}
            className={cn(
              "px-4 py-2 text-left rounded transition text-white flex-1",
              isActive ? "bg-[#000A21]" : "hover:bg-white/10"
            )}
          >
            {item.name}
          </a>

          {/* Plus - toggles dropdown */}
          {hasDropdown && (
            <motion.button
              onClick={() => toggleDropdown(item.name)}
              animate={{ rotate: dropdownOpen ? 45 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="text-xl font-light leading-none select-none px-4 py-2"
            >
              +
            </motion.button>
          )}
        </div>

        {/* SERVICES DROPDOWN */}
        {item.name === "Services" && dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="ml-4 mt-2 space-y-4"
          >
            {item.dropdown!.map((group, idx) => (
              <div key={idx}>
                <a
                  href={group.link}
                  onClick={() => {
                    setSelectedTab(item.name);
                    setSidebarOpen(false);
                  }}
                  className="block text-[#2378DA] font-semibold text-sm mb-1 hover:underline"
                >
                  {group.title}
                </a>
              </div>
            ))}
          </motion.div>
        )}

        {/* NORMAL DROPDOWN (non-services) */}
        {item.name !== "Services" && hasDropdown && dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col ml-4 mt-1 gap-1"
          >
            {item.dropdown!.map((sub) => (
              <a
                key={sub.name}
                href={sub.link}
                onClick={() => {
                  setSelectedTab(item.name);
                  setSidebarOpen(false);
                }}
                className="px-4 py-1 rounded text-white hover:bg-white/10"
              >
                {sub.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    );
  })}
</motion.nav>


              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
