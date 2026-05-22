import type { Metadata } from "next";
import Softwaredev from "@/components/services/Softwaredev/Softwaredev";

export const metadata: Metadata = {
  title: "Enterprise Software & Web Development Services | Resolute Digitals",
  description:
    "Resolute Digitals provides enterprise software development and web development services for businesses seeking secure, scalable, and modern solutions.",
  alternates: {
    canonical: "/services/software-development/",
  },
};

export default function SoftwareDevelopmentPage() {
  return <Softwaredev />;
}
