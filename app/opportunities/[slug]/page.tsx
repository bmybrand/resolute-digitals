import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OpportunityDetailPage from "@/components/OpportunityDetailPage";
import { getPublishedOpportunities } from "@/lib/opportunities";

type OpportunityPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const roles = await getPublishedOpportunities();
  return roles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: OpportunityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const roles = await getPublishedOpportunities();
  const role = roles.find((item) => item.slug === slug);

  return {
    title: role ? `${role.title} | Careers at Resolute Digitals` : "Career Opportunity | Resolute Digitals",
    description: role?.summary || "Explore this career opportunity at Resolute Digitals.",
    alternates: { canonical: `/opportunities/${slug}/` },
  };
}

export default async function OpportunityPage({ params }: OpportunityPageProps) {
  const { slug } = await params;
  const roles = await getPublishedOpportunities();
  const role = roles.find((item) => item.slug === slug);

  if (!role) notFound();

  return <OpportunityDetailPage initialRole={role} />;
}
