import type { Metadata } from "next";
import PropertyTaxation from "@/components/services/PropertyTaxation/PropertyTaxation";

export const metadata: Metadata = {
  title: "US Property Tax Research Services | Resolute Digitals",
  description:
    "Resolute Digitals provides US property tax research services, delivering accurate data analysis and insights for real estate and investment decisions.",
};

export default function ServicesPage() {
  return <PropertyTaxation />;
}
