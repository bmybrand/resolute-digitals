import type { Metadata } from "next";
import AIDrivenSolutions from "@/components/services/AIDrivenSolutions/AI-DrivenSolutions";

export const metadata: Metadata = {
  title: "AI Solutions Development Company in USA | Resolute Digitals",
  description:
    "Explore AI and automation services by Resolute Digitals, offering scalable AI integration and automation solutions for smarter business operations.",
};

export default function ServicesPage() {
  return <AIDrivenSolutions />;
}
