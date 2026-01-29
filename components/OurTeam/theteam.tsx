import React from "react";

const teamSections = [
  {
    title: "Sales",
    members: [
      {
        name: "Zubair Ahmad",
        role: "Head Of Sales Dept",
        img: "/assets/rd-image181.webp",
        linkedin: "https://www.linkedin.com/in/zu33air/",
      },
      {
        name: "Malik Ehtram Ali",
        role: "Business Unit Head",
        img: "/assets/rd-image162.webp",
        linkedin: "https://www.linkedin.com/in/malik-ehtram-240918216/",
      },
      {
        name: "Ghulam Akber",
        role: "Sr. Sales Support Executive",
        img: "/assets/rd-image168.webp",
        linkedin: "https://www.linkedin.com/in/ghulam-akbar-3887b5228/",
      },{
        name: "Shafiq Rehman",
        role: "Sr. Sales Support Executive",
        img: "/assets/rd-image182.webp",
        linkedin: "",
      },
      {
        name: "Shafqat Ali",
        role: "International Sales Executive",
        img: "/assets/rd-image183.webp",
        linkedin: "https://www.linkedin.com/in/shafqat-ali-shah/",
      },
    ],
  },
  {
    title: "Production ",
    members: [
      {
        name: "Muhammad Saad",
        role: "Head Of Production",
        img: "/assets/rd-image172.webp",
        linkedin: "https://www.linkedin.com/in/muhammadsaad-dev/",
      },
      {
        name: "Saad Naseer",
        role: "Sr. Software Developer",
        img: "/assets/rd-image171.webp",
        linkedin: "https://www.linkedin.com/in/saad-naseer06/",
      },
      {
        name: "Faraz Ali",
        role: "Sr. App Developer",
        img: "/assets/rd-image166.webp",
        linkedin: "#",
      },
      {
        name: "Muhammad Mazin",
        role: "WordPress Team Lead",
        img: "/assets/rd-image175.webp",
        linkedin: "https://www.linkedin.com/in/muhammad-mazin-20a741251/",
      },
      {
        name: "Abdul Rafay Ul Haq",
        role: "WordPress Developer",
        img: "/assets/rd-image176.webp",
        linkedin: "https://www.linkedin.com/in/abdul-rafay-000b91201/",
      },
      {
        name: "Zian Navaid",
        role: "Sr. Graphics Designer",
        img: "/assets/rd-image174.webp",
        linkedin: "https://www.linkedin.com/in/zian-navaid-a33283292/",
      },
      {
        name: "Muhammad Ali Hassan",
        role: "UI/UX Designer",
        img: "/assets/rd-image173.webp",
        linkedin: "#",
      },
      
    ],
  },
  {
    title: "Research / IT",
    members: [
      {
        name: "Iftikhar Mirza",
        role: "Head Of Research Dept",
        img: "/assets/rd-image163.webp",
        linkedin: "https://www.linkedin.com/in/iftikhar-mirza-4ba30327/",
      },
      {
        name: "Haider Abbas",
        role: "Sr. Research Analyst",
        img: "/assets/rd-image164.webp",
        linkedin: "https://www.linkedin.com/in/haider-ali-226244240/",
      },
      {
        name: "Faiq Ali Khan",
        role: "Head Of IT Support",
        img: "/assets/rd-image165.webp",
        linkedin: "https://www.linkedin.com/in/faiq-ali-khan-863275247/",
      },
    ],
  },
];

const TheTeam = () => {
  return (
    <div className="relative flex flex-col justify-center items-center mt-20 lg:mt-40">

      {/* Header Section */}
      <div className="flex flex-row justify-center items-center w-fit rounded-full bg-[#FFFFFF]/10 px-2 py-2">
        <div className="flex gap-1 font-medium relative text-white rounded-full justify-center items-center text-lg px-4 py-2 bg-gradient-to-r from-[#2378DA] to-[#134074]">
          <span className="absolute inset-x-0 w-1/2 mx-auto top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px" />
          <span className="text-sm lg:text-lg">Explore</span>
        </div>
        <span className="px-3 text-white text-sm lg:text-lg">
          Our Digital Services
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="bold text-3xl sm:text-4xl md:text-5xl xl:text-[58px] text-white py-6 text-center">
        Meet{" "}
        <span className="bg-gradient-to-r from-[#2378DA] to-[#134074] bg-clip-text text-transparent">
          the Team
        </span>{" "}
        That <br /> Builds Your Success
      </h1>

      {/* Team Sections */}
      <div className="w-full px-4  pt-14 space-y-24">

        {teamSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col items-center">

            {/* Section Title */}
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl bold mb-12 text-center">
              <span className="bg-gradient-to-r from-[#2378DA] to-[#134074] bg-clip-text text-transparent">
                {section.title}
              </span>{" "}
              Team
            </h2>

            {/* Cards */}
            <div className="w-full flex flex-wrap gap-10 sm:gap-14 lg:gap-20 justify-center items-center">
              {section.members.map((member, index) => (
                <div
                  key={index}
                  className="relative w-65 sm:w-75 md:w-85 lg:w-95 bg-[#000A21] backdrop-blur-md rounded-xl hover:scale-105 transition-transform overflow-visible group"
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

                  {/* Image */}
                  <div className="relative">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="object-cover rounded-lg"
                    />

                    {/* LinkedIn */}
                    <a
                      href={member.linkedin}
                      className="absolute bottom-0 sm:bottom-3 right-0 sm:right-4 bg-[#0F1930] p-3 md:p-4 lg:p-5 rounded-full hover:bg-[#2378DA] hover:shadow-lg transition"
                    >
                      <img src="/assets/rd-image121.svg" alt="LinkedIn" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default TheTeam;
