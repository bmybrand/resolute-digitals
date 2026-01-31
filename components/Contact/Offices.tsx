"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { useGeoCountry } from "@/utils/useGeoCountry";

const Offices = () => {
  const { countryCode } = useGeoCountry();
  const isUAE = (countryCode ?? "").toUpperCase() === "AE";

  return (
    <div className="bg-[#000A21]  pt-20 pb-10 lg:pb-20 lg:pt-30 2xl:px-49 text-white ">
      <div className=" mx-auto flex gap-6 border border-white/20 p-6 lg:p-12 rounded-3xl flex-col lg:flex-row">

        {isUAE ? (
          /* UAE Office Card - shown when location is AE (phone hidden) */
          <div className="bg-[#0F1930] rounded-2xl p-6 space-y-4 lg:w-1/3">
            <img src="/assets/Group 1597883775 (1).svg" alt="" />
            <h3 className="text-xl font-semibold">UAE Office</h3>
            <hr className="text-white/20"/>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-[#2378DA]"/>
              <span><a href="mailto:informationtechnology@resolutedigitals.com" className="hover:underline">informationtechnology@resolutedigitals.com</a></span>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#2378DA]"/>
              <span>G-17, Hamood Building, Area: Port Saeed, Dubai, UAE</span>
            </div>
          </div>
        ) : (
          /* Head Office Card */
          <div className="bg-[#0F1930] rounded-2xl p-6 space-y-4 lg:w-1/3">
            <img src="/assets/Group 1597883775 (1).svg" alt="" />
            <h3 className="text-xl font-semibold">Head Office</h3>
            <hr className="text-white/20"/>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#2378DA]"/>
              <span>+1 (800) 465-7890</span>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-[#2378DA]"/>
              <span>support@resolvedigitals.com</span>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#2378DA]"/>
              <span>
                Plot No. E-88, Block B <br />
                Gulshan e Jamal, Karachi, 75260
              </span>
            </div>
          </div>
        )}

        {/* US Office Card */}
        <div className="bg-[#0F1930] rounded-2xl p-6 space-y-4 lg:w-1/3">
          <img src="/assets/Group 1597883787.svg" alt="" />
          <h3 className="text-xl font-semibold">US Office</h3>
          <hr className="text-white/20"/>
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-[#2378DA]"/>
            <span>+1 (800) 465-7890</span>
          </div>
          <div className="flex items-start gap-3">
            <FaEnvelope className="text-[#2378DA]"/>
            <span>support@resolvedigitals.com</span>
          </div>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-[#2378DA]"/>
            <span>
              1234 Innovation Drive, Suite 200 <br />
              Austin, TX 73301, USA
            </span>
          </div>
        </div>

        {/* Stay Connected Card */}
        <div className="bg-[#0F1930] rounded-2xl p-6 space-y-4 lg:w-1/3">
        
        <img src="/assets/Group (21).svg" alt="" />
          <h3 className="text-xl font-semibold">Stay Connected</h3>
          
          <hr className="text-white/20"/>

         <div className="flex flex-wrap gap-3 text-sm sm:text-base text-[#A9ABBE]">
  <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition border border-white/20 px-3 py-1 rounded-full">
    <FaFacebookF />
    <p>Facebook</p>
  </div>

  <div className="flex items-center gap-2 cursor-pointer hover:text-sky-400 transition border border-white/20 px-3 py-1 rounded-full">
    <FaTwitter />
    <p>Twitter</p>
  </div>

  <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition border border-white/20 px-3 py-1 rounded-full">
    <FaLinkedinIn />
    <p>LinkedIn</p>
  </div>

  <div className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition border border-white/20 px-3 py-1 rounded-full">
    <FaYoutube />
    <p>YouTube</p>
  </div>

  <div className="flex items-center gap-2 cursor-pointer hover:text-pink-400 transition border border-white/20 px-3 py-1 rounded-full">
    <FaInstagram />
    <p>Instagram</p>
  </div>
</div>

        </div>

      </div>
    </div>
  );
};

export default Offices;


// "use client";

// import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
//   FaInstagram,
// } from "react-icons/fa";
// import { useGeoCountry } from "@/utils/useGeoCountry";

// const Offices = () => {
//   const { countryCode } = useGeoCountry();

//   // ✅ US ONLY when exact "US" (case-insensitive). Everyone else => Pakistan
//   const isUS = (countryCode ?? "").toUpperCase() === "US";

//   const office = isUS
//     ? {
//         badgeImg: "/assets/Group 1597883787.svg",
//         title: "US Office",
//         phone: "+1 (800) 465-7890",
//         email: "support@resolutedigitals.com",
//         address: (
//           <>
//             1234 Innovation Drive, Suite 200 <br />
//             Austin, TX 73301, USA
//           </>
//         ),
//       }
//     : {
//         badgeImg: "/assets/Group 1597883775 (1).svg",
//         title: "Head Office",
//         phone: "+92 304 0208313",
//         email: "support@resolutedigitals.com",
//         address: (
//           <>
//             Plot No. E-88, Block B <br />
//             Gulshan e Jamal, Karachi, 75260
//           </>
//         ),
//       };

//   return (
//     <div className="bg-[#000A21] pt-20 pb-10 lg:pb-20 lg:pt-30 2xl:px-49 text-white ">
//       <div className="mx-auto flex gap-6 border border-white/20 p-6 lg:p-12 rounded-3xl flex-col lg:flex-row">
//         {/* Local Office Card */}
//         <div className="bg-[#0F1930] rounded-2xl p-6 space-y-4 lg:w-1/3">
//           <img src={office.badgeImg} alt="" />

//           <h3 className="text-xl font-semibold">{office.title}</h3>

//           <hr className="text-white/20" />

//           <div className="flex items-start gap-3">
//             <FaPhoneAlt className="text-[#2378DA]" />
//             <span>{office.phone}</span>
//           </div>

//           <div className="flex items-start gap-3">
//             <FaEnvelope className="text-[#2378DA]" />
//             <span>{office.email}</span>
//           </div>

//           <div className="flex items-start gap-3">
//             <FaMapMarkerAlt className="text-[#2378DA]" />
//             <span>{office.address}</span>
//           </div>
//         </div>

//         {/* Stay Connected Card */}
//         <div className="bg-[#0F1930] rounded-2xl p-6 space-y-4 lg:w-1/3">
//           <img src="/assets/Group (21).svg" alt="" />
//           <h3 className="text-xl font-semibold">Stay Connected</h3>

//           <hr className="text-white/20" />

//           <div className="flex flex-wrap gap-3 text-sm sm:text-base text-[#A9ABBE]">
//             <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition border border-white/20 px-3 py-1 rounded-full">
//               <FaFacebookF />
//               <p>Facebook</p>
//             </div>

//             <div className="flex items-center gap-2 cursor-pointer hover:text-sky-400 transition border border-white/20 px-3 py-1 rounded-full">
//               <FaTwitter />
//               <p>Twitter</p>
//             </div>

//             <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition border border-white/20 px-3 py-1 rounded-full">
//               <FaLinkedinIn />
//               <p>LinkedIn</p>
//             </div>

//             <div className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition border border-white/20 px-3 py-1 rounded-full">
//               <FaYoutube />
//               <p>YouTube</p>
//             </div>

//             <div className="flex items-center gap-2 cursor-pointer hover:text-pink-400 transition border border-white/20 px-3 py-1 rounded-full">
//               <FaInstagram />
//               <p>Instagram</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Offices;
