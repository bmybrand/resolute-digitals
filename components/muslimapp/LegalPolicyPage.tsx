"use client";

import React from "react";
import Footersec from "@/components/Home/footersec";
import { useActiveSection } from "@/utils/useActiveSection";
import { FaChevronRight, FaFileContract, FaShieldHalved } from "react-icons/fa6";

export type LegalPolicyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "bullets"; items: string[] };

export type LegalPolicySection = {
  id: string;
  title: string;
  blocks: LegalPolicyBlock[];
};

type LegalPolicyPageProps = {
  title: string;
  label: string;
  lastUpdated: string;
  sections: LegalPolicySection[];
};

export default function LegalPolicyPage({
  title,
  label,
  lastUpdated,
  sections,
}: LegalPolicyPageProps) {
  const activeSection = useActiveSection(sections.map((section) => section.id));

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="px-4 pt-5 sm:px-6 lg:px-9">
        <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[28px] bg-black px-6 text-white sm:min-h-[420px]">
          <div className="absolute -left-[220px] -top-[300px] h-[600px] w-[600px] rounded-full border border-white/10" />
          <div className="absolute -bottom-[360px] -right-[280px] h-[700px] w-[700px] rounded-full border border-white/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.08),transparent_35%)]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]">
              <FaFileContract />
              Muslim App Legal
            </div>

            <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Muslim App by ReComune, Inc.
            </p>
            <p className="mt-3 text-sm text-white/40">Last updated: {lastUpdated}</p>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/45 sm:text-sm">
              <span>Muslim App</span>
              <FaChevronRight className="text-[9px]" />
              <span className="text-white">{title}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 pt-20 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1400px]">
          <span className="inline-block rounded-full border border-black/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/55">
            {label}
          </span>
          <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            Clear terms.
            <br />
            <span className="text-black/35">Transparent responsibilities.</span>
          </h2>
        </div>
      </section>

      <section className="px-5 pb-28 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[320px_minmax(0,1fr)] xl:gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
                On This Page
              </p>
              <nav className="border-l border-black/10">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    aria-current={activeSection === section.id ? "location" : undefined}
                    className={`group -ml-px flex w-full items-center gap-4 border-l-2 py-3 pl-5 pr-2 text-left transition ${
                      activeSection === section.id
                        ? "border-black bg-black/[0.04] text-black"
                        : "border-transparent text-black/40 hover:border-black hover:text-black"
                    }`}
                  >
                    <span className={`min-w-[24px] text-[10px] font-semibold transition ${activeSection === section.id ? "text-black" : "text-black/30"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="min-w-0">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-12 scroll-mt-28 border-b border-black/10 pb-12 md:mb-16 md:pb-16"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-xs font-semibold text-white md:h-12 md:w-12">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
                      {section.title}
                    </h2>
                    <div className="mt-6 space-y-5 text-[15px] leading-8 text-black/60 sm:text-base">
                      {section.blocks.map((block, blockIndex) => {
                        if (block.type === "heading") {
                          return <h3 key={blockIndex} className="pt-2 text-lg font-semibold text-black">{block.text}</h3>;
                        }
                        if (block.type === "bullets") {
                          return (
                            <ul key={blockIndex} className="space-y-3 pt-1">
                              {block.items.map((item) => (
                                <li key={item} className="flex items-start gap-4">
                                  <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return <p key={blockIndex}>{block.text}</p>;
                      })}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 px-5 py-9 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
              <FaShieldHalved />
            </span>
            <div>
              <p className="text-sm font-semibold">Muslim App</p>
              <p className="mt-1 text-xs text-black/40">by ReComune, Inc.</p>
            </div>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-fit text-xs font-medium text-black/40 transition hover:text-black"
          >
            Back to top ↑
          </button>
        </div>
      </section>

      <Footersec variant="monochrome" />
    </main>
  );
}
