import type { Metadata } from "next";
import BlogPage from "@/components/BlogPage";
import { getPublishedBlogs } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Resolute Digitals Blog | Tech, AI & Marketing Insights",
  description:
    "Read the latest insights on AI, software development, SEO, digital marketing, technology trends, and business growth strategies.",
  alternates: {
    canonical: "/blog/",
  },
};

export default async function Page() {
  const blogs = await getPublishedBlogs();
  return <BlogPage initialBlogs={blogs} />;
}
