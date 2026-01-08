import { FloatingNavDemo } from "@/components/home/Navbar";
import Herobar from "@/components/home/herobar";
import SecSection from "@/components/home/SecSection";
import { Thirdsec } from "@/components/home/Thirdsec";
import { Forthsec } from "@/components/home/Forthsec";
import  Fifthsec  from "@/components/home/Fifthsec";
import Revolvingicons from "@/components/home/revolvingicons";
import Sevensection from "@/components/home/sevensection";
import Eightsec from "@/components/home/eightsec";
import Ninesec from "@/components/home/ninesec";
import Rewiewcards from "@/components/home/rewiewcards";
import Footersec from "@/components/home/footersec";
export const dynamic = 'force-static'

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
