"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { IconArrowUpRight, IconBook2 } from "@tabler/icons-react";
import { FloatingNavDemo } from "@/components/Home/Navbar";
import Footersec from "@/components/Home/footersec";
import { blogsApiUrl, normalizeBlog, type BlogApiRow, type BlogArticle } from "@/lib/blog";

export default function BlogPage({ initialBlogs }: { initialBlogs: BlogArticle[] }) {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [activeFilter, setActiveFilter] = useState("All Insights");

  useEffect(() => {
    const controller = new AbortController();
    fetch(blogsApiUrl, { headers: { Accept: "application/json" }, signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((payload) => {
        if (!Array.isArray(payload?.data)) return;
        setBlogs(payload.data.map((row: BlogApiRow) => normalizeBlog(row)));
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  const filters = useMemo(() => ["All Insights", ...Array.from(new Set(blogs.map((post) => post.category)))], [blogs]);
  const visibleBlogs = activeFilter === "All Insights" ? blogs : blogs.filter((post) => post.category === activeFilter);

  return (
    <main className="min-h-screen overflow-hidden bg-[#000A21] text-white">
      <div className="p-5 lg:p-9"><FloatingNavDemo /></div>
      <section className="relative px-5 pb-16 pt-28 lg:px-9 lg:pb-24 lg:pt-36">
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#2378DA]/20 blur-[120px]" />
        <div className="relative mx-auto max-w-[1464px]">
          <div className="max-w-5xl">
            <p className="bold flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#55A6FF]"><IconBook2 className="h-4 w-4" /> Resolute Insights</p>
            <h1 className="bold mt-6 text-[clamp(3rem,7vw,7rem)] leading-[.95] tracking-[-.055em]">Knowledge <span className="text-[#3D90F5]">Hub</span></h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#A9ABBE] sm:text-xl">Ideas, practical guidance, and informed perspectives on design, technology, AI, and digital growth.</p>
          </div>
          <div className="mt-12 flex flex-wrap gap-2.5" role="group" aria-label="Filter insights by category">
            {filters.map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`rounded-full border px-5 py-2.5 text-xs transition ${activeFilter === filter ? "border-[#3D90F5] bg-[#2378DA] text-white" : "border-white/10 bg-white/[.04] text-white/55 hover:border-[#3D90F5]/60 hover:text-white"}`}>{filter}</button>)}
          </div>
        </div>
      </section>

      <section className="bg-[#0F1930] px-5 py-16 lg:px-9 lg:py-24">
        <div className="mx-auto grid max-w-[1464px] gap-x-8 gap-y-12 md:grid-cols-2">
          {visibleBlogs.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}/`} className="group block min-w-0">
              <article>
                <div className="relative aspect-[1.62/1] overflow-hidden rounded-3xl border border-white/10 bg-[#080F1F]">
                  {post.heroImage ? <img src={post.heroImage} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" loading="lazy" /> : <div className="absolute inset-0 bg-gradient-to-br from-[#2378DA]/35 to-[#080F1F]" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000A21]/70 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#000A21]/70 px-4 py-2 text-[10px] uppercase tracking-[.15em] text-white/70 backdrop-blur">{post.category}</span>
                  <span className="absolute bottom-5 right-5 grid h-12 w-12 translate-y-2 place-items-center rounded-full bg-[#2378DA] opacity-0 shadow-xl transition group-hover:translate-y-0 group-hover:opacity-100"><IconArrowUpRight className="h-5 w-5" /></span>
                </div>
                <h2 className="bold mt-5 max-w-[95%] text-[clamp(1.2rem,2vw,1.8rem)] leading-tight transition group-hover:text-[#55A6FF]">{post.title}</h2>
                <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-6 text-[#A9ABBE]">{post.excerpt}</p>
              </article>
            </Link>
          ))}
          {visibleBlogs.length === 0 && <div className="md:col-span-2 rounded-3xl border border-white/10 bg-[#080F1F] px-6 py-20 text-center text-[#A9ABBE]">More insights in this category are on the way.</div>}
        </div>
      </section>

      <section className="bg-[#0F1930] px-5 pb-20 lg:px-9 lg:pb-28">
        <div className="relative mx-auto max-w-[1464px] overflow-hidden rounded-3xl bg-gradient-to-r from-[#2378DA] to-[#134074] px-7 py-14 sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-20">
          <div className="absolute -right-8 -top-28 bold text-[18rem] text-white/[.06]" aria-hidden="true">R</div>
          <div className="relative max-w-3xl"><p className="text-xs uppercase tracking-[.2em] text-white/60">Have a question?</p><h2 className="bold mt-4 text-3xl leading-tight sm:text-5xl">Let&apos;s turn your next challenge into a useful conversation.</h2></div>
          <Link href="/contact" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 font-medium text-[#071329] transition hover:-translate-y-1 lg:mt-0">Talk to our team <IconArrowUpRight className="h-5 w-5" /></Link>
        </div>
      </section>
      <Footersec />
    </main>
  );
}
