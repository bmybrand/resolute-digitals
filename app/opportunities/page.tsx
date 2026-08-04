import type { Metadata } from "next";
import OpportunitiesPage from "@/components/OpportunitiesPage";

export const metadata: Metadata = {
  title: "Open Opportunities | Resolute Digitals",
  description:
    "Explore open roles at Resolute Digitals across technology, design, strategy, marketing, research, and operations.",
  alternates: {
    canonical: "/opportunities/",
  },
};

export default function Opportunities() {
  return <OpportunitiesPage />;
}
