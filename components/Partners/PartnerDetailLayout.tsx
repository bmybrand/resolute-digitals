import type { Partner } from "@/lib/partners";
import ProductPartnerPage from "./ProductPartnerPage";

export default function PartnerDetailLayout({ partner }: { partner: Partner }) {
  return <ProductPartnerPage partner={partner} />;
}
