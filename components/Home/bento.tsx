import { useState } from "react";

const cardsData = [
  {
    id: 1,
    size: 3,
    title: "Software Development",
    description:
      "We build scalable and secure software solutions tailored to your business goals - modern, efficient, and built to perform.",
    cta: "Start with us",
    img: "/assets/Group 1597883106.svg",
    icon: "/assets/Group (3).svg",
    updatedIcon: "/assets/Group (16).svg",
    contentWidth: "lg:w-[55%]",
    imgClass:
      "absolute -right-10 -bottom-10 object-contain opacity-80 w-2/3 xl:w-1/2",
  },
  {
    id: 2,
    size: 7,
    title: "App Development",
    description: "",
    cta: "Start with us",
    img: "/assets/Frame 1597883671.svg",
    icon: "/assets/Group 1597883436 (1).svg",
    updatedIcon: "/assets/Group (15).svg",
    contentWidth: "lg:w-full",
    imgClass:
      "absolute right-0 -bottom-5 object-contain opacity-80 w-1/2 lg:w-2/3 xl:w-1/2",
  },
  {
    id: 3,
    size: 7,
    title: "Digital Marketing",
    description:"",
    cta: "Start with us",
    img: "/assets/Group 1597883019.svg",
    icon: "/assets/Group 1597883438 (1).svg",
    updatedIcon: "/assets/Group (14).svg",
    contentWidth: "lg:w-full",
    imgClass:
      "absolute -right-5 -bottom-5 object-contain opacity-80 w-2/3",
  },
  {
    id: 4,
    size: 3,
    title: "Data & Operations",
    description:
      "We transform data into insight and streamline operations with analytics and intelligent business solutions.",
    cta: "Start with us",
    img: "/assets/Frame 1597883677.svg",
    imgClass:
      "absolute -right-15 -bottom-10 object-contain opacity-80 w-1/2 lg:w-2/3 xl:w-1/2",
    icon: "/assets/Frame.svg",
    updatedIcon: "/assets/Frame2.svg",
    contentWidth: "w-full lg:w-[55%]",
    
  },
  
  {
    id: 5,
    size: 7,
    title: "Design & Experience",
    description: "We design intuitive digital experiences that engage users, strengthen brands, and elevate every interaction.",
    cta: "Start with us",
    icon: "/assets/Group (9).svg",
    updatedIcon: "/assets/Group (13).svg",
    contentWidth: "lg:w-full",
    img: "/assets/Frame 1597883656.svg",
    imgClass:
      "absolute -right-4 bottom-0 object-contain opacity-80 w-1/2 lg:w-2/3 xl:w-full",
  },
];

export default function BentoGridDynamic() {
  
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="flex flex-col xl:flex-row lg:flex-nowrap w-full lg:gap-0 xl:gap-4 gap-4 py-20 2xl:px-42">

      {/* LEFT CONTAINER */}
      <div className="w-full lg:w-full xl:w-[76%] flex flex-col gap-4 lg:h-[87vh]">

        {/* TOP HALF */}
        <div className="flex flex-col lg:flex-row gap-4  lg:h-1/2">
          {cardsData.slice(0, 2).map((card) => (
            <div
              key={card.id}
               onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative w-full lg:w-[${card.size * 10}%] bg-white/20 p-4 rounded-3xl shadow h-[60vh] lg:h-full
                         bg-gradient-to-br from-[#040E24] to-[#052041] border border-white/30 backdrop-blur-lg
                         hover:from-[#2378DA] hover:to-[#134074] transition-all duration-300 text-white flex flex-col overflow-hidden`}
            >
              <div className={`flex flex-col gap-4 ${card.contentWidth}`}>
                <div className="w-17 h-17 rounded-full bg-white/20 flex items-center justify-center shadow">
                  <img
                    src={
                      hovered === card.id && card.updatedIcon
                        ? card.updatedIcon
                        : card.icon
                    }
                    alt=""
                    className="w-9 h-9 transition-all duration-300"
                  />
                </div>
                <h3 className="text-3xl bold">{card.title}</h3>
                {card.description && <p className="text-lg regular">{card.description}</p>}
              </div>

              <button className="py-4 self-start underline regular">{card.cta}</button>

              {card.img && (
                <img
                  src={card.img}
                  alt={card.title}
                  className={card.imgClass}
                />
              )}
            </div>
          ))}
        </div>

        {/* BOTTOM HALF */}
        <div className="flex flex-col lg:flex-row gap-4 xl:h-1/2">
          {cardsData.slice(2, 4).map((card) => (
            <div
              key={card.id}
               onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
              className={`relative w-full lg:w-[${card.size * 10}%] bg-white/20 p-4 rounded-3xl shadow h-[60vh] lg:h-full
                         bg-gradient-to-br from-[#040E24] to-[#052041] border border-white/30 backdrop-blur-lg
                         hover:from-[#2378DA] hover:to-[#134074] transition-all duration-300 text-white flex flex-col overflow-hidden`}
            >
              <div className={`flex flex-col gap-4 ${card.contentWidth}`}>
                <div className="w-17 h-17 rounded-full bg-white/20 flex items-center justify-center shadow">
                  <img
                    src={
                      hovered === card.id && card.updatedIcon
                        ? card.updatedIcon
                        : card.icon
                    }
                    alt=""
                    className="w-9 h-9 transition-all duration-300"
                  />
                </div>
                <h3 className="text-3xl bold">{card.title}</h3>
                {card.description && <p className="text-lg regular">{card.description}</p>}
              </div>

              <button className="py-4 self-start underline regular">{card.cta}</button>

              {card.img && (
                <img
                  src={card.img}
                  alt={card.title}
                  className={card.imgClass}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTAINER */}
      {cardsData.slice(4).map((card) => (
        <div
          key={card.id}
           onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
          className="relative w-full lg:w-full xl:w-[24%] bg-white/20 p-4 rounded-3xl shadow h-[60vh] xl:h-[87vh]
                     bg-gradient-to-br from-[#2378DA] to-[#134074] border border-white/30 backdrop-blur-lg
                     hover:from-[#040E24] hover:to-[#052041] transition-all duration-300 text-white flex flex-col overflow-hidden"
        >
          <div className={`flex flex-col gap-4 ${card.contentWidth}`}>
            <div className="w-17 h-17 rounded-full bg-white/20 flex items-center justify-center shadow">
              <img
                    src={
                      hovered === card.id && card.updatedIcon
                        ? card.updatedIcon
                        : card.icon
                    }
                    alt=""
                    className="w-9 h-9 transition-all duration-300"
                  />
            </div>
            <h3 className="text-3xl bold">{card.title}</h3>
            {card.description && <p className="text-lg regular">{card.description}</p>}
          </div>

          <button className="py-4 self-start underline regular">{card.cta}</button>

          {card.img && (
            <img
              src={card.img}
              alt={card.title}
              className={card.imgClass}
            />
          )}
        </div>
      ))}
    </div>
  );
}
