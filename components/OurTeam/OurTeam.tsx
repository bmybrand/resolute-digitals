import { FloatingNavDemo } from "@/components/home/Navbar";
import Herosec from "./herosec";
import Theteam from "./theteam";
import WorkTogether from "../about/workTogether";
import Rewiewcards from "../home/rewiewcards";
import ContactSection from "../about/ContactSection";
import Footersec from "../home/footersec";
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
