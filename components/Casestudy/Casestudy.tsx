"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FloatingNavDemo } from "../Home/Navbar";
export const dynamic = 'force-static'

gsap.registerPlugin(ScrollTrigger);

const Casestudy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const miniCardsRef = useRef<HTMLDivElement[]>([]);
  const textRef = useRef<HTMLDivElement | null>(null);
  const numberRef = useRef<HTMLDivElement | null>(null);
  const currentIndexRef = useRef(0);

  const sections = [
    { img: "/assets/1.webp.svg" },
    { img: "/assets/Group15.svg" },
    { img: "/assets/1.webp5.svg" },
    { img: "/assets/1.webp7.svg" },
  ];

  const sections1 = [
    { img: "/assets/1.webpsub.svg" },
    { img: "/assets/1.webp2.svg" },
    { img: "/assets/1.webp4.svg" },
    { img: "/assets/1.webp6.svg" },
  ];

  const textContent = [
    {
      title: "Muslim Connect",
      description:
        "A modern, purpose-driven platform designed to bring Muslim communities together through seamless communication, trusted connections, and enhanced accessibility.",
      tags: ["UI/UX Design", "Web Development", "Responsive Design"],
      number: "01",
    },
    {
      title: "Recomune",
      description:
        "Recomune helps creators and professionals connect and collaborate. We designed and developed a smooth web and mobile experience that makes networking easy and engagement effortless.",
      tags: ["UI/UX Design", "Web Development", "Responsive Design"],
      number: "02",
    },
    {
      title: "Madrid Café & Bar",
      description:
        "Madrid Café & Bar is a modern café and cocktail bar. The website was designed to reflect its ambiance while providing a seamless, responsive user experience.",
      tags: ["UI/UX Design", "Web Development", "Responsive Design"],
      number: "03",
    },
    {
      title: "Swera Restuarant",
      description:
        "Organize, discover, and participate in events seamlessly, making community interaction more engaging and meaningful.",
      tags: ["UI/UX Design", "Web Development", "Responsive Design"],
      number: "04",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    if (textRef.current) gsap.set(textRef.current, { opacity: 1 });
    if (numberRef.current) gsap.set(numberRef.current, { opacity: 1 });

    const cards = cardsRef.current.filter(Boolean);
    const miniCards = miniCardsRef.current.filter(Boolean);
    const total = cards.length;
    const transitions = Math.max(0, total - 1);

    if (transitions === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current!,
          start: "top top",
          end: () => `+=${transitions * window.innerHeight}`,
          scrub: 2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.round(self.progress * transitions);

            if (index !== currentIndexRef.current) {
              currentIndexRef.current = index;

              if (textRef.current && numberRef.current) {
                gsap.to([textRef.current, numberRef.current], {
                  opacity: 0,
                  duration: 0.28,
                  onComplete: () => {
                    const content = textContent[index];

                    const titleEl = textRef.current!.querySelector("h3");
                    const descEl = textRef.current!.querySelector("p");
                    if (titleEl) titleEl.textContent = content.title;
                    if (descEl) descEl.textContent = content.description;

                    const tagsContainer = textRef.current!.querySelector(
                      ".tags-container"
                    ) as HTMLElement | null;
                    if (tagsContainer) {
                      tagsContainer.innerHTML = "";
                      content.tags.forEach((tag) => {
                        const div = document.createElement("div");
                        div.className =
                          "border border-[#FFFFFF]/80 bg-[#FFFFFF]/8 py-2 px-4 text-xs sm:text-sm rounded-full";
                        div.innerHTML = `<p>${tag}</p>`;
                        tagsContainer.appendChild(div);
                      });
                    }

                    const numberH1 = numberRef.current!.querySelector("h1");
                    if (numberH1) {
                      numberH1.textContent = content.number;
                    }

                    gsap.to([textRef.current, numberRef.current], {
                      opacity: 1,
                      duration: 0.32,
                    });
                  },
                });
              }
            }
          },
        },
      });

      cards.forEach((card, i) => {
        if (i === total - 1) return;

        tl.to(
          card,
          {
            clipPath: "inset(100% 0% 0% 0%)",
            ease: "power1.inOut",
            duration: 1,
          },
          i
        );

        if (miniCards[i]) {
          tl.to(
            miniCards[i],
            {
              clipPath: "inset(100% 0% 0% 0%)",
              ease: "power1.inOut",
              duration: 1,
            },
            i
          );
        }
      });
    }, containerRef);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [sections.length]);

  return (
    <div className="relative">
      <FloatingNavDemo />

      {/* Mini preview + text */}
      <div className="fixed bottom-4 px-4 sm:px-6 md:px-12 lg:bottom-12 2xl:px-48 z-50 flex flex-col md:flex-row gap-4 items-start w-full">
        {/* Mini preview */}
        <div className="w-44 sm:w-56 md:w-70 md:h-64 aspect-[4/3] border-2 border-white overflow-hidden rounded-[64px] relative">
          {sections1.map((item, i) => (
            <div
              key={i}
              ref={(el: HTMLDivElement | null) => {
                if (el) miniCardsRef.current[i] = el;
              }}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.img})`,
                zIndex: sections.length - i,
                clipPath: "inset(0% 0% 0% 0%)",
              }}
            />
          ))}
        </div>

        {/* Text beside mini preview */}
        <div className="flex flex-col sm:flex-row justify-between w-full mt-4 sm:mt-0">
          <div ref={textRef} className="text-white max-w-4xl w-full sm:w-[60%]">
            <h3 className="text-[18px] sm:text-[28px] md:text-[40px] lg:text-[64px] font-bold mb-2">
              {textContent[0].title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg opacity-80 mb-5">
              {textContent[0].description}
            </p>
            <div className="tags-container flex gap-2 flex-wrap">
              {textContent[0].tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="border border-[#FFFFFF]/80 bg-[#FFFFFF]/8 py-2 px-4 text-xs sm:text-sm rounded-full"
                >
                  <p>{tag}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={numberRef} className="mt-4 sm:mt-0">
            <h1 className="text-[32px] sm:text-[80px] md:text-[120px] lg:text-[180px] font-bold text-white">
              {textContent[0].number}
            </h1>
          </div>
        </div>
      </div>

      {/* Main container */}
      <div ref={containerRef} className="relative h-screen">
        {sections.map((item, i) => (
          <div
            key={i}
            ref={(el: HTMLDivElement | null) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="absolute top-0 left-0 h-screen w-full flex items-end bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.img})`,
              zIndex: sections.length - i,
              clipPath: "inset(0% 0% 0% 0%)",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Casestudy;

