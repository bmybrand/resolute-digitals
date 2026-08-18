"use client";

import Link from "next/link";
import Image from "next/image";
import { FaApple, FaGooglePlay, FaArrowRight } from "react-icons/fa6";
import { IconStar } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { muslimAppPartner } from "@/lib/partners/muslim-app";

export default function MuslimAppSection() {
  const { page, assets } = muslimAppPartner;
  const appleLink = page.storeLinks.find((link) => link.platform === "apple");
  const googleLink = page.storeLinks.find((link) => link.platform === "google");

  return (
    <section className="relative w-full overflow-hidden px-5 py-32 md:px-12 md:py-48 lg:px-20">
      {/* Premium gradient background - enhanced */}
      <div className="absolute inset-0 -z-10">
        {/* Multiple layered gradients for depth */}
        <div className="absolute -left-60 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#2378DA]/40 via-[#1F93EF]/20 to-transparent blur-[200px]" />
        <div className="absolute -right-60 -bottom-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-[#134074]/40 via-[#1F93EF]/15 to-transparent blur-[200px]" />
        <div className="absolute left-1/3 top-1/3 h-[500px] w-[500px] rounded-full bg-[#2378DA]/15 blur-[180px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </div>

      <div className="mx-auto max-w-[1400px]">
        {/* Premium Badge */}
        <div className="mb-12 flex justify-start">
          <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-white/12 to-white/4 px-1.5 py-1.5 ring-1 ring-white/20 backdrop-blur-xl">
            <span className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2378DA] to-[#55A6FF] px-6 py-3 text-xs font-bold text-white uppercase tracking-widest shadow-xl shadow-[#2378DA]/40">
              <IconStar className="h-4 w-4" fill="currentColor" />
              Featured Partner
            </span>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-32 items-center">
          {/* Left Column: Logo, Heading, Description, CTAs */}
          <div className="flex flex-col gap-12">
            {/* Logo */}
            {assets.logo && (
              <div className="w-fit">
                <div className="relative h-24 w-24 overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/5 p-4 ring-2 ring-white/30 backdrop-blur-lg shadow-2xl shadow-[#2378DA]/20">
                  <Image
                    src={assets.logo}
                    alt="Muslim App Logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </div>
            )}

            {/* Heading */}
            <div>
              <h2 className="mb-6 text-5xl md:text-6xl lg:text-[5rem] font-black text-white leading-[0.95] tracking-[-0.06em]">
                {page.displayName}
              </h2>
              <p className="text-lg md:text-xl text-[#B8BCC8] leading-relaxed max-w-xl font-medium">
                {page.heroDescription}
              </p>
            </div>

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {appleLink && (
                <a
                  href={appleLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-xl bg-white text-black px-7 py-4 font-bold text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:-translate-y-1"
                >
                  <FaApple className="text-lg" />
                  App Store
                </a>
              )}
              {googleLink && (
                <a
                  href={googleLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-xl bg-white text-black px-7 py-4 font-bold text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:-translate-y-1"
                >
                  <FaGooglePlay className="text-lg" />
                  Play Store
                </a>
              )}
              <Link
                href="/partners/muslim-app/"
                className="group flex items-center justify-center gap-3 rounded-xl border-2 border-white/40 bg-white/10 text-white px-7 py-4 font-bold text-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/60 hover:shadow-lg hover:shadow-white/20"
              >
                Read Case Study
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Phone Mockup with Premium Styling */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Glow effect behind phone */}
              <div className="absolute -inset-12 rounded-4xl bg-gradient-to-br from-[#2378DA]/40 to-[#1F93EF]/20 blur-3xl opacity-60 -z-10" />
              
              {/* Phone container with shadow */}
              <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-[#2378DA]/50 bg-transparent">
                <Image
                  src="/assets/ChatGPT_Image_Aug_12__2026__04_22_39_PM_2-removebg-preview 1.svg"
                  alt="Muslim App Interface"
                  width={450}
                  height={900}
                  className="w-full h-auto object-cover block"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-8 right-10 h-20 w-20 rounded-full bg-[#55A6FF]/20 blur-2xl" />
              <div className="absolute -bottom-8 left-10 h-24 w-24 rounded-full bg-[#2378DA]/15 blur-3xl" />
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="mt-32 flex justify-center">
          <div className="w-full max-w-[980px] rounded-[1.75rem] border border-white/20 bg-[#0d1d34]/80 px-6 py-7 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-sm md:px-10 md:py-8">
            <div className="grid grid-cols-3 gap-4 md:gap-10">
              {muslimAppPartner.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-black leading-none text-[#55A6FF] md:text-[3.25rem] md:tracking-[-0.06em]">
                    {metric.value}
                  </div>
                  <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9ABBE] md:text-[11px]">
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
