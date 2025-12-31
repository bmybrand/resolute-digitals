import { FloatingNavDemo } from "@/components/Home/Navbar";
import Herosec from "./herosec";
import Theteam from "./theteam";


export default function OurTeamPage() {
  return (
    <div className="bg-[#000A21] min-h-[600vh]">
    <div className=" p-5 lg:p-9">
      <FloatingNavDemo />
      <Herosec/>
      <Theteam/>
      
    
    </div>
      </div>
  );
}
