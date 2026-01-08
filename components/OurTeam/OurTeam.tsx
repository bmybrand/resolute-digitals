import { FloatingNavDemo } from "@/components/Home/Navbar";
import Herosec from "./herosec";
import Theteam from "./theteam";
import WorkTogether from "../About/workTogether";
import Rewiewcards from "../Home/rewiewcards";
import ContactSection from "../About/ContactSection";
import Footersec from "../Home/footersec";
export const dynamic = 'force-static'

export default function OurTeamPage() {
  return (
    <div className="bg-[#000A21]">
    <div className=" p-5 lg:p-9">
      <FloatingNavDemo />
      <Herosec/>
      <Theteam/>
      
      
    
    </div>
    <WorkTogether />
      <Rewiewcards />
      <ContactSection/>
      <Footersec/>
      </div>
  );
}


