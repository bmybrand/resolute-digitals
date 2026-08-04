"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { IconArrowLeft, IconCheck, IconChevronDown, IconSparkles } from "@tabler/icons-react";
import { FloatingNavDemo } from "@/components/Home/Navbar";
import Footersec from "@/components/Home/footersec";
import { blogsApiUrl, formatBlogDate, normalizeBlog, type BlogApiRow, type BlogArticle, type BlogContentBlock } from "@/lib/blog";

function sanitizeHtml(html: string) {
  return html
    .replace(/<\s*(script|iframe|object|embed|style)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "")
    .replace(/<\s*(link|meta|base)[^>]*\/?\s*>/gi, "")
    .replace(/\s+on[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/\s+(href|src)\s*=\s*(["'])\s*javascript:[\s\S]*?\2/gi, "");
}

function Block({ block }: { block: BlogContentBlock }) {
  const columns = Math.min(12, Math.max(1, Math.round(block.columns || 12)));
  const style = { gridColumn: block.rowStart ? `1 / span ${columns}` : `span ${columns} / span ${columns}` };
  if (block.type === "richtext" || block.type === "html") return <div style={style} className="blog-richtext" dangerouslySetInnerHTML={{ __html: sanitizeHtml(block.html || "") }} />;
  if (block.type === "heading") return block.level === 3 ? <h3 style={style} className="bold mt-7 text-xl">{block.text}</h3> : <h2 style={style} className="bold mt-8 text-3xl">{block.text}</h2>;
  if (block.type === "paragraph") return <p style={style} className="text-base leading-8 text-[#A9ABBE]">{block.text}</p>;
  if (block.type === "points") return <ul style={style} className="my-5 space-y-3">{(block.items || []).map((item) => <li key={item} className="flex gap-3 leading-7 text-[#A9ABBE]"><IconCheck className="mt-1 h-5 w-5 shrink-0 text-[#55A6FF]" />{item}</li>)}</ul>;
  if (block.type === "image" && block.image) return <figure style={style} className="my-6 overflow-hidden rounded-2xl border border-white/10"><img src={block.image} alt={block.alt || ""} className="h-auto w-full object-cover" /></figure>;
  return null;
}

export default function BlogDetailPage({ initialArticle }: { initialArticle?: BlogArticle }) {
  const [article, setArticle] = useState<BlogArticle | null>(initialArticle || null);
  const [loading, setLoading] = useState(!initialArticle);

  useEffect(() => {
    if (initialArticle) return;
    const parts = window.location.pathname.split("/").filter(Boolean);
    const slug = parts[0] === "blog" ? parts[1] : new URLSearchParams(window.location.search).get("slug");
    const controller = new AbortController();
    fetch(blogsApiUrl, { headers: { Accept: "application/json" }, signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => {
        const rows: BlogApiRow[] = Array.isArray(payload?.data) ? payload.data : [];
        const found = rows.find((row) => row.slug === slug);
        setArticle(found ? normalizeBlog(found) : null);
      })
      .catch(() => setArticle(null))
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [initialArticle]);

  const jumpLinks = useMemo(() => article?.sections.filter((section) => section.title).map((section) => ({ id: section.id, title: section.title })) || [], [article]);
  if (loading) return <main className="min-h-screen animate-pulse bg-[#000A21]" />;
  if (!article) return <main className="grid min-h-screen place-items-center bg-[#000A21] px-5 text-center text-white"><div className="rounded-3xl border border-white/10 bg-[#080F1F] p-12"><h1 className="bold text-3xl">Insight not found</h1><Link href="/blog" className="mt-6 inline-flex text-[#55A6FF]">Return to the Knowledge Hub</Link></div></main>;

  return (
    <main className="min-h-screen bg-[#000A21] text-white">
      <div className="p-5 lg:p-9"><FloatingNavDemo /></div>
      <header className="mx-auto max-w-[1464px] px-5 pb-16 pt-28 lg:px-9 lg:pb-24 lg:pt-36">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[#55A6FF]"><IconArrowLeft className="h-4 w-4" /> Knowledge Hub</Link>
        <div className="mt-10 max-w-5xl">
          <div className="flex flex-wrap gap-2">{(article.tags.length ? article.tags : [article.category]).map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-white/55">{tag}</span>)}</div>
          <h1 className="bold mt-7 text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1.02] tracking-[-.045em]">{article.title}</h1>
          <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2 text-sm text-white/45"><span>Posted by <strong className="font-medium text-white/75">{article.author}</strong></span><span className="text-[#55A6FF]">•</span><span>{formatBlogDate(article.publishedOn)}</span><span className="text-[#55A6FF]">•</span><span>{article.readTime}</span></div>
        </div>
        <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-[#080F1F]">{article.heroImage && <img src={article.heroImage} alt={article.title} className="absolute inset-0 h-full w-full object-cover" />}</div>
      </header>

      <section className="bg-[#0F1930] px-5 py-16 lg:px-9 lg:py-24">
        <div className="mx-auto grid max-w-[1322px] gap-12 lg:grid-cols-[minmax(0,872px)_minmax(280px,350px)] lg:items-start">
          <article className="min-w-0">
            {article.highlights.length > 0 && <section id="key-highlights" className="scroll-mt-28 rounded-3xl border border-[#2378DA]/30 bg-[#080F1F] px-7 py-8 sm:px-9"><h2 className="bold flex items-center gap-3 text-2xl"><IconSparkles className="h-6 w-6 text-[#55A6FF]" /> Key Highlights</h2><ul className="mt-5 divide-y divide-white/10">{article.highlights.map((item) => <li key={item} className="flex gap-3 py-4 leading-7 text-[#A9ABBE]"><IconCheck className="mt-1 h-5 w-5 shrink-0 text-[#55A6FF]" />{item}</li>)}</ul></section>}
            <div className="mt-10 space-y-5 text-base leading-8 text-[#A9ABBE]">{(article.introduction.length ? article.introduction : [article.excerpt]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="mt-12">{article.sections.map((section) => <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-white/10 py-12 first:pt-0">{!section.hideTitle && <h2 className="bold mb-6 text-[clamp(1.8rem,3vw,2.7rem)] leading-tight">{section.title}</h2>}<div className="grid grid-cols-12 gap-x-5 gap-y-4">{section.blocks.map((block, index) => <Block key={index} block={block} />)}</div></section>)}</div>
            {article.conclusion && <section className="mt-12 rounded-3xl border border-[#2378DA]/40 bg-[#2378DA]/10 p-8 sm:p-10"><h2 className="bold text-2xl">Conclusion</h2><p className="mt-5 whitespace-pre-line leading-8 text-[#A9ABBE]">{article.conclusion}</p></section>}
            {article.closingImages.length > 0 && <section className="mt-8 grid grid-cols-12 gap-4">{article.closingImages.map((image, index) => { const columns = Math.min(12, Math.max(1, Number(image.columns) || 6)); return <figure key={`${image.src}-${index}`} className="overflow-hidden rounded-2xl border border-white/10" style={{ gridColumn: image.rowStart ? `1 / span ${columns}` : `span ${columns} / span ${columns}` }}><img src={image.src} alt={image.alt || ""} className="h-full w-full object-cover" /></figure>; })}</section>}
            {article.faqs.length > 0 && <section className="mt-16"><h2 className="bold text-3xl">Frequently Asked Questions</h2><div className="mt-7 space-y-3">{article.faqs.map((faq) => <details key={faq.question} className="group rounded-2xl border border-white/10 bg-[#080F1F] p-5"><summary className="bold flex cursor-pointer list-none items-center justify-between gap-4">{faq.question}<IconChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" /></summary><p className="pt-4 leading-7 text-[#A9ABBE]">{faq.answer}</p></details>)}</div></section>}
          </article>
          <aside className="hidden lg:sticky lg:top-28 lg:block"><div className="rounded-3xl border border-white/10 bg-[#080F1F] p-7"><p className="bold text-xl">Jump to</p><nav className="mt-5 space-y-1"><a href="#key-highlights" className="block rounded-lg px-2 py-2.5 text-sm text-[#55A6FF]">Key Highlights</a>{jumpLinks.map((link) => <a key={link.id} href={`#${link.id}`} className="block rounded-lg px-2 py-2.5 text-sm leading-5 text-white/55 hover:text-white">{link.title}</a>)}</nav></div></aside>
        </div>
      </section>
      <style jsx global>{`.blog-richtext{grid-column:span 12/span 12;color:#a9abbe;line-height:2}.blog-richtext p{margin:0 0 1.15rem}.blog-richtext h2,.blog-richtext h3{color:white;font-weight:700;line-height:1.2;margin:2rem 0 1rem}.blog-richtext h2{font-size:2rem}.blog-richtext h3{font-size:1.35rem}.blog-richtext ul{list-style:disc;padding-left:1.3rem;margin:1rem 0}.blog-richtext a{color:#55a6ff;text-decoration:underline}`}</style>
      <Footersec />
    </main>
  );
}
