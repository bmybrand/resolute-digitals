import { awsPartner } from "./aws";
import { muslimAppPartner } from "./muslim-app";
import { shopifyPartner } from "./shopify";

export type { Partner } from "./types";

export const partners = [awsPartner, shopifyPartner, muslimAppPartner];

export function getPartner(slug: string) {
  return partners.find((partner) => partner.slug === slug);
}
