import { awsPartner } from "./aws";
import { muslimAppPartner } from "./muslim-app";
import { recomunePartner } from "./recomune";

export type { Partner } from "./types";

export const partners = [awsPartner, recomunePartner, muslimAppPartner];

export function getPartner(slug: string) {
  return partners.find((partner) => partner.slug === slug);
}
