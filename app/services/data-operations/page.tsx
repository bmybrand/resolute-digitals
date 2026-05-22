import type { Metadata } from "next";
import ITSupport from "@/components/services/ITSupport/ITSupport";

export const metadata: Metadata = {
  title: "Business Operations & IT Support Company | Resolute Digitals",
  description:
    "Business operations and IT support company Resolute Digitals delivers managed IT services, automation, and cloud infrastructure support for businesses.",
};

export default function ServicesPage() {
  return <ITSupport />;
}
