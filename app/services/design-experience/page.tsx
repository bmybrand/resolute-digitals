import type { Metadata } from "next";
import DesignExperience from "@/components/services/Design-Experience/DesignExperience";

export const metadata: Metadata = {
  title: "Expert User-Friendly UI/UX Design Agency | Resolute Digitals",
  description:
    "Resolute Digitals provides professional UI/UX design services in USA, crafting modern, user-focused and visually engaging digital experiences.",
  alternates: {
    canonical: "/services/design-experience/",
  },
};

export default function ServicesPage() {
  return <DesignExperience />;
}
