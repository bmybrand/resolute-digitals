import { FloatingNavDemo } from "@/components/Home/Navbar";
import Herobar from "@/components/Home/herobar";
import SecSection from "@/components/Home/SecSection";
import { Thirdsec } from "@/components/Home/Thirdsec";
import { Forthsec } from "@/components/Home/Forthsec";
import  Fifthsec  from "@/components/Home/Fifthsec";
import Revolvingicons from "@/components/Home/revolvingicons";
import Sevensection from "@/components/Home/sevensection";
import Eightsec from "@/components/Home/eightsec";
import Ninesec from "@/components/Home/ninesec";
import Rewiewcards from "@/components/Home/rewiewcards";
import Footersec from "@/components/Home/footersec";

export default function HomePage() {
  return (
    <div className="bg-[#000A21] h-fit pb-0">
      <div className="p-5 xl:p-9">
        <FloatingNavDemo />
        <Herobar />
        <SecSection />
        <Thirdsec />
        <Forthsec />
      </div>

      <Fifthsec />
      <Revolvingicons />
      <Sevensection />
      <Eightsec />
      <Ninesec />
      <Rewiewcards />
      <Footersec />
    </div>
  );
}
