import { FloatingNavDemo } from "../Home/Navbar";
import Herosec from "./herosec"
import Servies from "./servies";
import Rewiewcards from "./rewiewcards";
import ContactSection from "../About/ContactSection";

import Footersec from "../Home/footersec";

import WorkTogether from "./workTogether";


export default function ServicesPage() {
  return (
    <div className="bg-[#000A21] ">
    <div className=" p-5 lg:p-9">
      
      <FloatingNavDemo />
      <Herosec />
      
    </div>
    
      <Servies />
      <WorkTogether />
      <Rewiewcards />
      <ContactSection/>
      <Footersec/>
      </div>
  );
}
