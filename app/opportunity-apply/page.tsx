import type { Metadata } from "next";
import OpportunityApplyPage from "@/components/OpportunityApplyPage";

export const metadata: Metadata = {
  title: "Apply | Resolute Digitals",
  description: "Apply for an opportunity at Resolute Digitals.",
  robots: { index: false, follow: false },
};

export default function OpportunityApplyFallbackPage() {
  return <OpportunityApplyPage />;
}
