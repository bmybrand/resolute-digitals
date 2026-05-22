import type { Metadata } from "next";
import DigitalMarketing from "@/components/services/DigitalMarketing/DigitalMarketing";

export const metadata: Metadata = {
  title: "Top Digital Marketing Company Near Me | Resolute Digitals",
  description:
    "Grow your brand with affordable digital marketing services, SEO, social media, and eCommerce marketing from Resolute Digitals.",
  alternates: {
    canonical: "/services/digital-marketing/",
  },
};

export default function ServicesPage() {
  return <DigitalMarketing />;
}
