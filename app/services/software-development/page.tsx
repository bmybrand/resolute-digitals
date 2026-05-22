import type { Metadata } from "next";
import Softwaredev from "@/components/services/Softwaredev/Softwaredev";

export const metadata: Metadata = {
  title: "Enterprise Software & Web Development Services",
  description:
    "Resolute Digitals provides enterprise software development and web development services for businesses seeking secure, scalable, and modern solutions.",
};

export default function SoftwareDevelopmentPage() {
  return <Softwaredev />;
}
