import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OpportunityApplyPage from "@/components/OpportunityApplyPage";
import { getPublishedOpportunities } from "@/lib/opportunities";

type ApplyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const roles = await getPublishedOpportunities();
  return roles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: ApplyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const roles = await getPublishedOpportunities();
  const role = roles.find((item) => item.slug === slug);
  return {
    title: role ? `Apply for ${role.title} | Resolute Digitals` : "Apply | Resolute Digitals",
    description: role ? `Submit your application for ${role.title} at Resolute Digitals.` : "Apply for a role at Resolute Digitals.",
    robots: { index: false, follow: false },
  };
}

export default async function ApplyPage({ params }: ApplyPageProps) {
  const { slug } = await params;
  const roles = await getPublishedOpportunities();
  const role = roles.find((item) => item.slug === slug);
  if (!role) notFound();
  return <OpportunityApplyPage initialRole={role} />;
}
