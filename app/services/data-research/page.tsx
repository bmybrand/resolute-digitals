import type { Metadata } from "next";
import DataResearch from "@/components/services/DataResearch/DataResearch";

export const metadata: Metadata = {
  title: "Best Data Analytics Consulting Services | Resolute Digitals",
  description:
    "Resolute Digitals delivers smart data analytics consulting services, helping businesses uncover insights, trends, and performance opportunities.",
  alternates: {
    canonical: "/services/data-research/",
  },
};

export default function ServicesPage() {
  return <DataResearch />;
}
