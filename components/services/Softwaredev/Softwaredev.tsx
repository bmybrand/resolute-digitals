import { FloatingNavDemo } from "@/components/Home/Navbar";
import Herosec from "./herosec";
import Secsec from "./Secsec";

export default function Softwaredev() {
  return (
    <div className="bg-[#000A21] h-[200vh] ">
    <div className=" p-5 lg:p-9">

      <FloatingNavDemo />
      <Herosec/>
      <Secsec/>
      
    </div>
      </div>
  );
}
