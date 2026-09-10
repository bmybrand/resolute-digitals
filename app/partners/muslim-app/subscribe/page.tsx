import type { Metadata } from "next";
import SubscriptionCheckout from "@/components/muslimapp/SubscriptionCheckout";

export const metadata: Metadata = {
  title: "Subscribe to Muslim App Pro | Resolute Digitals",
  description:
    "Subscribe to Muslim App Pro with Easypaisa or JazzCash through Resolute Digitals. Monthly and founding member plans available.",
  alternates: { canonical: "/partners/muslim-app/subscribe/" },
};

export default function MuslimAppSubscribePage() {
  return <SubscriptionCheckout />;
}
