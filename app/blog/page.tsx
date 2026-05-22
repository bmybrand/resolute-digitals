import type { Metadata } from "next";
import {Underdev} from "@/components/errorOrUnderdevelopment/Underdev";

export const metadata: Metadata = {
  title: "Resolute Digitals Blog | Tech, AI & Marketing Insights",
  description:
    "Read the latest insights on AI, software development, SEO, digital marketing, technology trends, and business growth strategies.",
  alternates: {
    canonical: "/blog/",
  },
};

export default function BlogPage() {
  return <Underdev />;
}
