import type { Metadata } from "next";
import OpportunityDetailPage from "@/components/OpportunityDetailPage";

export const metadata: Metadata = {
  title: "Career Opportunity | Resolute Digitals",
  description: "Explore this career opportunity at Resolute Digitals.",
  robots: { index: false, follow: false },
};

export default function OpportunityDetailFallbackPage() {
  return <OpportunityDetailPage />;
}
