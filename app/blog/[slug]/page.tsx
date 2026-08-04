import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailPage from "@/components/BlogDetailPage";
import { getPublishedBlogs } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const blogs = await getPublishedBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = (await getPublishedBlogs()).find((blog) => blog.slug === slug);
  return { title: article?.title || "Resolute Insight", description: article?.excerpt || "Insights from Resolute Digitals." };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = (await getPublishedBlogs()).find((blog) => blog.slug === slug);
  if (!article) notFound();
  return <BlogDetailPage initialArticle={article} />;
}
