import type { Metadata } from "next";
import SubscriptionCheckout from "@/components/muslimapp/SubscriptionCheckout";

export const metadata: Metadata = {
  title: "Subscribe to Muslim App Pro | The Muslim App",
  description:
    "Subscribe to Muslim App Pro with Easypaisa or JazzCash. Monthly and founding member plans available.",
  alternates: { canonical: "/partners/muslim-app/subscribe/" },
};

export default function MuslimAppSubscribePage() {
  return <SubscriptionCheckout />;
}
