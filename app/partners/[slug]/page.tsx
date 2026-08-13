import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PartnerDetailLayout from "@/components/Partners/PartnerDetailLayout";
import { getPartner, partners } from "@/lib/partners";

type PartnerPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return partners.map((partner) => ({ slug: partner.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PartnerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const partner = getPartner(slug);

  return {
    title: partner ? `${partner.name} Partnership | Resolute Digitals` : "Partner | Resolute Digitals",
    description: partner?.description,
    alternates: { canonical: `/partners/${slug}/` },
  };
}

export default async function PartnerPage({ params }: PartnerPageProps) {
  const { slug } = await params;
  const partner = getPartner(slug);

  if (!partner) notFound();

  return <PartnerDetailLayout partner={partner} />;
}
