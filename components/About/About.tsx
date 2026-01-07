import { FloatingNavDemo } from "@/components/Home/Navbar";
import Herosec from "./herosec";
import { Secondseccopy } from "./Secondsec copy";
import { Secondsec } from "./Secondsec";
import HorizontalTimeline from "./Horizontaltimeline";
import Servies from "../services/servies";
import HowWorkSec from "./howworksec";
import { div } from "motion/react-client";
import WorkTogether from "./workTogether";
import InfiniteMultiColumnScroll from "./InfiniteMultiColumnScroll"
import Rewiewcards from "./rewiewcards";
import ContactSection from "./ContactSection";
import Footersec from "../Home/footersec";
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
      <Rewiewcards />
      <ContactSection/>
      <Footersec/>
      </div>
  );
}
