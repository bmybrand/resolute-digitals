import type { Metadata } from "next";
import About from "@/components/About/About";

export const metadata: Metadata = {
  title: "About Resolute Digitals | AI-Driven Digital Solutions",
  description:
    "Learn about Resolute Digitals, a trusted provider of AI-driven solutions, software development, digital marketing, and IT support services.",
};

export default function AboutPage() {
  return <About />;
}
