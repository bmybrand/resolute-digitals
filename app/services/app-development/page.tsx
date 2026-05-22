import type { Metadata } from "next";
import AppDevelopment from "@/components/services/AppDevelopment/AppDevelopment";

export const metadata: Metadata = {
  title: "Top #1 Mobile App Development Company | Resolute Digitals",
  description:
    "Resolute Digitals is a top mobile app development company delivering custom Android and iOS apps with modern UI/UX and scalable business solutions.",
  alternates: {
    canonical: "/services/app-development/",
  },
};

export default function ServicesPage() {
  return <AppDevelopment />;
}
