import { FloatingNavDemo } from "@/components/Home/Navbar";
import Herosec from "./herosec";
import { Secondseccopy } from "./Secondsec copy";
import { Secondsec } from "./Secondsec";
import HorizontalTimeline from "./Horizontaltimeline";
import Servies from "../services/servies";
import HowWorkSec from "./howworksec";
import WorkTogether from "./workTogether";
import InfiniteMultiColumnScroll from "./InfiniteMultiColumnScroll";
import Rewiewcards from "@/components/Home/rewiewcards";
import ContactSection from "./ContactSection";
import Footersec from "../Home/footersec";
import PartnersSection from "./PartnersSection";
export const dynamic = 'force-static'
export default function AboutPage() {
  return (
    <div className="bg-[#000A21] min-h-[600vh]">
    <div className=" p-5 lg:p-9">
      <FloatingNavDemo />
      <Herosec/>
      <Secondsec/>
      <HorizontalTimeline/>
      <Servies/>

      
    </div>
    
      <HowWorkSec/>
      <WorkTogether />
      <Secondseccopy />
      <InfiniteMultiColumnScroll />
      <PartnersSection />
      <Rewiewcards />
      <ContactSection/>
      <Footersec/>
      </div>
  );
}

