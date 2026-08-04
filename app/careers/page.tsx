import type { Metadata } from "next";
import CareersPage from "@/components/CareersPage";

export const metadata: Metadata = {
  title: "Careers at Resolute Digitals | Join Our Team",
  description:
    "Explore career opportunities at Resolute Digitals and join a team focused on innovation, technology, growth, and digital excellence.",
  alternates: {
    canonical: "/careers/",
  },
};

export default function Careers() {
  return <CareersPage />;
}
