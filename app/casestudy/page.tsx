import type { Metadata } from "next";
import Casestudy from "@/components/Casestudy/Casestudy"

export const metadata: Metadata = {
  title: "Case Studies | Successful Digital Projects & Results",
  description:
    "Explore Resolute Digitals case studies showcasing successful AI, software, marketing, and digital transformation projects for clients.",
  alternates: {
    canonical: "/casestudy/",
  },
};

const Casestudypage = () => {
  return (
    <div><Casestudy /></div>
  )
}

export default Casestudypage
