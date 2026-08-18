"use client";

import Link from "next/link";
import Image from "next/image";
import { FaApple, FaGooglePlay, FaArrowRight } from "react-icons/fa6";
import {
  IconPhone,
  IconCheck,
  IconZoom,
  IconShield,
  IconUsers,
  IconStar,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { muslimAppPartner } from "@/lib/partners/muslim-app";

export default function MuslimAppSection() {
  const { page, assets } = muslimAppPartner;
  const appleLink = page.storeLinks.find((link) => link.platform === "apple");
  const googleLink = page.storeLinks.find((link) => link.platform === "google");

  return (
    <section className="relative w-full overflow-hidden px-5 py-24 md:px-12 md:py-40 lg:px-20">
      {/* Premium gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-gradient-to-r from-[#2378DA]/25 to-transparent blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gradient-to-l from-[#134074]/25 to-transparent blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1F93EF]/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-[1500px]">
        {/* Premium Badge and Logo Section */}
        <div className="mb-16 flex flex-col items-start gap-8">
          {/* Premium Badge */}
          <div className="flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 px-1 py-1 ring-1 ring-white/15 backdrop-blur-sm">
            <span className="relative flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#2378DA] to-[#1F93EF] px-5 py-2.5 text-xs font-bold text-white uppercase tracking-wider shadow-lg shadow-[#2378DA]/30">
              <IconStar className="h-3.5 w-3.5" />
              Featured
              <span className="absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
            </span>
            <span className="px-4 text-xs font-semibold text-[#55A6FF] uppercase tracking-wide">
              Partner Showcase
            </span>
          </div>

          {/* Logo and Heading */}
          <div className="flex flex-col gap-8">
            {assets.logo && (
              <div className="relative w-fit">
                <div className="relative h-20 w-20 overflow-hidden rounded-3xl bg-gradient-to-br from-white/15 to-white/5 p-3 ring-1.5 ring-white/25 backdrop-blur-md">
                  <Image
                    src={assets.logo}
                    alt="Muslim App Logo"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            )}
            <div>
              <h2 className="mb-4 text-6xl font-black text-white md:text-7xl lg:text-8xl tracking-tight leading-tight">
                {page.displayName}
              </h2>
              <p className="max-w-2xl text-lg text-[#A9ABBE] md:text-xl leading-relaxed font-medium">
                {page.heroDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-32 items-center mb-32">
          {/* Left: Content */}
          <div className="flex flex-col justify-center">
            {/* Overview Section */}
            <div className="mb-12">
              <h3 className="mb-6 text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                {muslimAppPartner.overviewTitle}
              </h3>
              <p className="mb-8 text-[#A9ABBE] text-lg md:text-xl leading-relaxed font-medium">
                {muslimAppPartner.overview}
              </p>
            </div>

            {/* Features Grid */}
            <div className="mb-14 space-y-4">
              {[
                {
                  title: "Product Experience",
                  icon: IconPhone,
                  desc: "Thoughtfully designed for intuitive navigation",
                },
                {
                  title: "Mobile-First Design",
                  icon: IconZoom,
                  desc: "Perfectly optimized for everyday use",
                },
                {
                  title: "Accessible & Inclusive",
                  icon: IconUsers,
                  desc: "Designed for everyone to enjoy",
                },
              ].map(({ title, icon: Icon, desc }) => (
                <div
                  key={title}
                  className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-gradient-to-r from-[#2378DA]/5 to-[#1F93EF]/5 px-6 py-5 transition hover:border-[#2378DA]/40 hover:bg-gradient-to-r hover:from-[#2378DA]/15 hover:to-[#1F93EF]/10 hover:shadow-lg hover:shadow-[#2378DA]/10"
                >
                  <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2378DA] to-[#1F93EF] shadow-lg shadow-[#2378DA]/30 group-hover:scale-110 transition">
                    <Icon className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-bold text-white text-base mb-1">{title}</div>
                    <div className="text-sm text-[#A9ABBE] font-medium">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              {appleLink && (
                <a
                  href={appleLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/30 bg-white px-7 py-4 text-sm font-bold text-black transition hover:border-white/50 hover:bg-white hover:shadow-2xl hover:shadow-white/30 hover:-translate-y-1"
                >
                  <FaApple className="text-xl group-hover:scale-125 transition" />
                  App Store
                </a>
              )}
              {googleLink && (
                <a
                  href={googleLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/30 bg-white px-7 py-4 text-sm font-bold text-black transition hover:border-white/50 hover:bg-white hover:shadow-2xl hover:shadow-white/30 hover:-translate-y-1"
                >
                  <FaGooglePlay className="text-xl group-hover:scale-125 transition" />
                  Play Store
                </a>
              )}
              <Link
                href="/partners/muslim-app/"
                className="group flex items-center gap-2.5 rounded-xl border border-[#2378DA]/50 bg-gradient-to-r from-[#2378DA]/15 to-[#1F93EF]/10 px-7 py-4 text-sm font-bold text-[#55A6FF] transition hover:border-[#2378DA]/80 hover:bg-gradient-to-r hover:from-[#2378DA]/25 hover:to-[#1F93EF]/15 hover:shadow-lg hover:shadow-[#2378DA]/20 hover:-translate-y-1"
              >
                View Full Case Study
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>

          {/* Right: Visual - Phone Mockup */}
          <div className="relative flex items-center justify-center pt-8">
            <div className="relative w-full max-w-sm">
              {/* Clean phone display without border */}
              <div className="relative h-auto w-full rounded-3xl overflow-hidden shadow-2xl">
                {/* App content image */}
                <Image
                  src="/assets/ChatGPT_Image_Aug_12__2026__04_22_39_PM_2-removebg-preview 1.svg"
                  alt="Muslim App Interface"
                  width={400}
                  height={750}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Metrics Section */}
        <div className="mt-20 flex justify-center">
          <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-xl px-8 py-6 shadow-2xl max-w-2xl w-full">
            <div className="grid grid-cols-3 gap-8 text-center">
              {muslimAppPartner.metrics.map((metric) => (
                <div key={metric.label} className="group">
                  <div className="text-4xl font-black bg-gradient-to-r from-[#2378DA] to-[#1F93EF] bg-clip-text text-transparent group-hover:scale-110 transition">
                    {metric.value}
                  </div>
                  <div className="text-xs text-[#A9ABBE] mt-3 font-bold uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
