import { FloatingNavDemo } from "@/components/Home/Navbar";
import Herosec from "./herosec";
import Secsec from "./Secsec";
import Thirdsec from "./thirdsec";
import Forthsec from "./forthsec";
import FaqSection from "./FaqSection";
import WorkTogether from "../workTogether";
import Rewiewcards from "../rewiewcards";
import ContactSection from "../../About/ContactSection";
import Footersec from "../../Home/footersec";
import CoreCapabilities from "./CoreCapabilities"
export const dynamic = 'force-static'
export default function AIDrivenSolutions() {
  return (
    <div className="bg-[#000A21]  ">
    <div className=" p-5 lg:p-9">

      <FloatingNavDemo />
      <Herosec/>
      <CoreCapabilities />
      <Secsec/>
      
    </div>
    <Thirdsec/>
    <div className=" p-5 lg:p-9">
    <Forthsec/>
    <FaqSection/>
    </div> 
    
      <WorkTogether />
      
      <Rewiewcards />
      
      <ContactSection/>
      <Footersec/>
    </div>
  );
}


