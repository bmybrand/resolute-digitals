import React from "react";

const teamMembers = [
  {
    name: "Abdul Rafay",
    role: "WordPress Developer",
    img: "/assets/Vector 186 (1).svg",
    linkedin: "https://www.linkedin.com/in/alice-johnson",
  },
  {
    name: "Zian Navaid",
    role: "Sr. Graphic Designer",
    img: "/assets/Vector 186 (2).svg",
    linkedin: "https://www.linkedin.com/in/bob-smith",
  },
  {
    name: "M Ali Hassan",
    role: "UI/UX Designer",
    img: "/assets/Vector 186 (3).svg",
    linkedin: "https://www.linkedin.com/in/carol-white",
  },
  {
    name: "Mazin Nizami",
    role: "CMS Team Lead",
    img: "/assets/Vector 186 (4).svg",
    linkedin: "https://www.linkedin.com/in/david-lee",
  },
  {
    name: "Muhammad Saad",
    role: "Production Head",
    img: "/assets/Vector 186 (5).svg",
    linkedin: "https://www.linkedin.com/in/carol-white",
  },
  {
    name: "Saad Naseer",
    role: "Sr. Backend Developer",
    img: "/assets/Vector 186 (6).svg",
    linkedin: "https://www.linkedin.com/in/david-lee",
  },
];

const TheTeam = () => {
  return (
    <div className="relative flex flex-col justify-center items-center mt-20 lg:mt-40">
      {/* Header Section */}
      <div className="flex flex-row justify-center items-center w-fit border border-transparent rounded-full bg-[#FFFFFF]/10 px-2 py-2 ExtraLight">
        <div className="flex gap-1 font-medium relative text-black dark:text-white rounded-full transition justify-center items-center whitespace-nowrap text-lg px-4 py-2 bold bg-gradient-to-r from-[#2378DA] to-[#134074]">
          <span className="absolute inset-x-0 w-1/2 mx-auto top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px" />
          <span className="text-sm lg:text-lg">Explore</span>
        </div>
        <span className="px-3 text-white text-sm lg:text-lg">Our Digital Services</span>
      </div>

      {/* Main Heading */}
      <h1 className="block bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[58px] text-white py-6 text-center">
        Meet{" "}
        <span className="bg-gradient-to-r from-[#2378DA] to-[#134074] bg-clip-text text-transparent">
          the Team
        </span>{" "}
        That <br />
        Builds Your Success
      </h1>

      {/* Cards Section */}
      <div className="w-full flex flex-wrap gap-10 sm:gap-14 lg:gap-20 justify-center items-center px-4 2xl:px-49  pt-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-65 sm:w-75 md:w-85 lg:w-95  bg-[#000A21] backdrop-blur-md rounded-xl hover:scale-105 transition-transform overflow-visible group"
          >
            {/* Rotated Side Text */}
            <span
              className="absolute bottom-0 -translate-y-1/2 text-white whitespace-nowrap"
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "left center",
                left: "-0.8rem",
              }}
            >
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                {member.name}
              </span>{" "}
              -{" "}
              <span className="text-xs sm:text-sm md:text-base lg:text-lg text-[#A9ABBE]">
                {member.role}
              </span>
            </span>

            {/* Image Container (relative) */}
            <div className="relative">
              <img
                src={member.img}
                alt={member.name}
                className="object-cover rounded-lg"
              />

<a
  href={member.linkedin}
  className="absolute bottom-0 sm:bottom-3 right-0 sm:right-4 bg-[#0F1930] p-3 md:p-4 lg:p-5 rounded-full hover:shadow-lg hover:bg-[#2378DA] transition"
>
  <img
    src="/assets/Group 1597883706.svg"
    alt=""
    className="block"
  />
</a>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheTeam;
