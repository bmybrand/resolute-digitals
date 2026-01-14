import React from 'react'

const curvedItems = [
  { id: "01", icon: "/assets/rd-image036.png", title: "Discovery & Strategy", description: "We start by understanding your goals, audience, and challenges to shape a focused strategy and digital roadmap for success.", offsetClass: "xl:translate-y-[90px]" },
  { id: "02", icon: "/assets/rd-image037.png", title: "Design & Prototyping", description: "Our creative team turns ideas into intuitive, engaging designs that enhance user experience.", offsetClass: "xl:translate-y-0" },
  { id: "03", icon: "/assets/rd-image038.png", title: "Development & Build", description: "We build fast, secure, and scalable digital solutions using clean code across web and mobile platforms.", offsetClass: "xl:-translate-y-[90px]" },
  { id: "04", icon: "/assets/rd-image039.png", title: "Testing & Optimization", description: "Every project is tested, refined, and optimized for speed, performance, & flawless usability.", offsetClass: "xl:translate-y-0" },
  { id: "05", icon: "/assets/rd-image040.png", title: "Launch & Support", description: "After launch, we ensure smooth operation with ongoing updates and dedicated support.", offsetClass: "xl:translate-y-[90px]" },
];

const CurvatureCards = () => {
  return (
    <div className="w-full px-8 py-10">
      
      {/* Cards */}
      <div className="w-full flex flex-col xl:flex-row justify-between items-center h-fit min-h-140 relative gap-6 text-white">
        {curvedItems.map((item) => (
          <div
            key={item.id}
            className={`flex justify-between flex-col w-80 h-fit 2xl:h-75 p-6 bg-[#FFFFFF]/18 rounded-2xl shadow-lg border-3 border-[#FFFFFF]/25 ${item.offsetClass}`}
          >
            <div className="flex justify-between items-start mb-2">
                <img src={item.icon} alt={item.title} className="h-full" />
              <span className="bold text-[#2378DA]">{item.id}</span>
            </div>
            {/* Card Title */}
            <h3 className="bold text-2xl mb-1">{item.title}</h3>
            <p className="text-base regular text-[#CACCE2]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CurvatureCards
