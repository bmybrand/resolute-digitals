import type { Metadata } from "next";
import OurTeamPageClient from "./our-team-page-client";

export const metadata: Metadata = {
  title: "Meet Our Expert Team | Resolute Digitals",
  description:
    "Meet the skilled professionals at Resolute Digitals delivering innovative software, marketing, design, and technology solutions worldwide.",
};

export default function OurTeamPage() {
  return <OurTeamPageClient />;
}
