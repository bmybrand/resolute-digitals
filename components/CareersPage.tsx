"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBriefcase,
  IconBulb,
  IconCoffee,
  IconCompass,
  IconHeartHandshake,
  IconMapPin,
  IconRocket,
  IconSparkles,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react";
import { FloatingNavDemo } from "@/components/Home/Navbar";
import Footersec from "@/components/Home/footersec";

const benefits = [
  {
    title: "Meaningful work",
    description:
      "Build thoughtful digital products that solve real business problems and create measurable impact.",
    icon: IconRocket,
  },
  {
    title: "Room to grow",
    description:
      "Learn through ownership, honest feedback, shared knowledge, and challenging projects across industries.",
    icon: IconBulb,
  },
  {
    title: "People-first culture",
    description:
      "Work with a supportive team that values clarity, respect, curiosity, and different points of view.",
    icon: IconHeartHandshake,
  },
  {
    title: "Flexible collaboration",
    description:
      "Do focused work with modern tools and flexible ways of collaborating across teams and locations.",
    icon: IconWorld,
  },
  {
    title: "Modern tools",
    description:
      "Use capable technology and clear systems that help you focus on thoughtful, high-quality work.",
    icon: IconBriefcase,
  },
  {
    title: "Space to explore",
    description:
      "Test ideas, question assumptions, and turn what you learn into stronger work for every client.",
    icon: IconBulb,
  },
  {
    title: "One connected team",
    description:
      "Work alongside strategy, design, marketing, research, and engineering without unnecessary silos.",
    icon: IconUsers,
  },
  {
    title: "Visible impact",
    description:
      "Understand why your work matters and see how it improves products, businesses, and experiences.",
    icon: IconSparkles,
  },
];

type Opportunity = {
  id: number;
  title: string;
  slug: string;
  job_code: string | null;
  department: string;
  location: string;
  employment_type: string;
  workplace_type: string;
  openings: number;
  summary: string | null;
  application_deadline: string | null;
  posted_on: string | null;
  detail_url: string;
  application_destination: string;
};

const careersApiUrl =
  process.env.NEXT_PUBLIC_CAREERS_API_URL?.trim() ||
  "https://hrm.resolutedigitalspk.com/api/opportunities";

const values = ["Stay curious", "Own the outcome", "Work with clarity", "Grow together"];

export default function CareersPage() {
  const [openRoles, setOpenRoles] = useState<Opportunity[]>([]);
  const [rolesError, setRolesError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const requestTimeout = window.setTimeout(() => controller.abort(), 12000);

    const loadOpportunities = async () => {
      try {
        const response = await fetch(careersApiUrl, {
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`The opportunities API returned ${response.status}.`);
        }

        const payload = (await response.json()) as { data?: Opportunity[] };
        setOpenRoles(Array.isArray(payload.data) ? payload.data : []);
        setRolesError(false);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setRolesError(true);
      } finally {
        window.clearTimeout(requestTimeout);
      }
    };

    loadOpportunities();

    return () => {
      window.clearTimeout(requestTimeout);
      controller.abort();
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#000A21] text-white">
      <div className="p-5 lg:p-9">
        <FloatingNavDemo />

        <section
          className="relative flex h-[50vh] w-full items-center justify-center overflow-hidden rounded-3xl lg:h-[60vh]"
          style={{
            backgroundImage: "url('/assets/rd-image081.svg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col gap-9 p-5">
            <h1 className="bold text-center text-4xl text-white drop-shadow-lg lg:mt-30 lg:text-8xl">
              CAREERS
            </h1>
            <p className="ExtraLight mx-auto max-w-4xl text-center text-sm text-white lg:text-base">
              Join a multidisciplinary team using design, technology, data, and strategy to create meaningful digital experiences and lasting business impact.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/opportunities"
                className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(35,120,218,0.3)]"
              >
                <span className="absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
                Browse opportunities
                <IconArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="#how-we-hire"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
              >
                How we hire
                <IconArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <section
        className="bg-cover bg-center px-5 py-20 lg:px-9 lg:py-36"
        style={{ backgroundImage: "url('/assets/rd-image030.png')" }}
      >
        <div className="mx-auto flex max-w-[1536px] flex-col items-center gap-14 lg:flex-row lg:gap-24 2xl:px-36">
          <div className="w-full lg:w-1/2">
            <div className="mb-6 flex w-fit items-center rounded-full bg-white/10 p-2">
              <span className="relative rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-4 py-2 text-sm text-white lg:text-lg">
                <span className="absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
                Explore
              </span>
              <span className="px-3 text-sm text-white lg:text-lg">Work With Us</span>
            </div>
            <h2 className="bold text-3xl leading-tight text-white sm:text-4xl md:text-5xl xl:text-[58px]">
              Great Digital Work Starts With{" "}
              <span className="bg-gradient-to-r from-[#2378DA] to-[#55A6FF] bg-clip-text text-transparent">
                Great People
              </span>
            </h2>
            <p className="regular mt-6 text-base leading-8 text-[#A9ABBE] sm:text-lg">
              We bring together strategists, designers, developers, marketers, and researchers who care about the details and the bigger picture.
            </p>
            <p className="regular mt-4 text-base leading-8 text-[#A9ABBE] sm:text-lg">
              You will have the trust to contribute, the support to improve, and the space to do your best work alongside people who want to grow together.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {values.map((value, index) => (
                <div key={value} className="rounded-2xl bg-[#04102B] p-4">
                  <span className="bold text-xl text-[#2378DA]">0{index + 1}</span>
                  <p className="mt-2 text-sm text-white/80">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <Image
              src="/assets/rd-image032.svg"
              alt="Resolute Digitals team collaboration"
              width={628}
              height={638}
              className="h-auto w-full max-w-2xl"
            />
          </div>
        </div>
      </section>

      <section
        className="bg-cover bg-center px-5 py-20 lg:px-9 lg:py-28"
        style={{ backgroundImage: "url('/assets/rd-image099.svg')" }}
      >
        <div className="mx-auto max-w-[1536px]">
          <div className="flex flex-col items-center text-center">
            <div className="flex w-fit items-center rounded-full bg-white/10 p-2">
              <span className="relative rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-4 py-2 text-sm text-white lg:text-lg">
                <span className="absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
                Explore
              </span>
              <span className="px-3 text-sm text-white lg:text-lg">Why Resolute</span>
            </div>
            <h2 className="bold mt-6 text-3xl text-white sm:text-4xl md:text-5xl xl:text-[58px]">
              A Place To Do Your{" "}
              <span className="bg-gradient-to-r from-[#2378DA] to-[#55A6FF] bg-clip-text text-transparent">
                Best Work
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
              A collaborative environment designed around meaningful ownership, steady growth, and shared success.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#080F1F] shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-2 hover:border-[#2378DA]/70"
              >
                <div className="relative flex h-40 items-center justify-center bg-[url('/assets/rd-image100.svg')] bg-cover bg-center">
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-[#071631] text-[#55A6FF] shadow-xl transition group-hover:rotate-6 group-hover:bg-[#2378DA] group-hover:text-white">
                    <Icon className="h-9 w-9" stroke={1.4} />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="bold text-2xl text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-white/60">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-hire" className="scroll-mt-28 border-y border-white/10 bg-[#000A21] px-5 py-20 lg:px-9 lg:py-28">
        <div className="mx-auto max-w-[1536px] 2xl:px-36">
          <div className="flex flex-col items-center text-center">
            <div className="flex w-fit items-center rounded-full bg-white/10 p-2">
              <span className="relative rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-4 py-2 text-sm text-white lg:text-lg">
                <span className="absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
                Process
              </span>
              <span className="px-3 text-sm text-white lg:text-lg">How We Hire</span>
            </div>
            <h2 className="bold mt-6 text-3xl text-white sm:text-4xl md:text-5xl xl:text-[58px]">
              A Clear Path From Hello To{" "}
              <span className="bg-gradient-to-r from-[#2378DA] to-[#55A6FF] bg-clip-text text-transparent">
                Welcome
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#A9ABBE]">
              Our hiring process is focused, respectful, and designed to help both sides make a confident decision.
            </p>
          </div>

          <div className="relative mt-20 lg:mt-24">
            <svg
              className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible xl:block"
              viewBox="0 0 1200 430"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <marker id="resolute-hire-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M0 0 10 5 0 10Z" fill="#2378DA" />
                </marker>
                <mask id="resolute-hiring-mask-0" maskUnits="userSpaceOnUse"><path d="M95 335 V360 Q95 384 119 384 H175" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></mask>
                <mask id="resolute-hiring-mask-1" maskUnits="userSpaceOnUse"><path d="M302 165 V95 Q302 65 332 65 H390" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></mask>
                <mask id="resolute-hiring-mask-2" maskUnits="userSpaceOnUse"><path d="M610 335 V374 Q610 404 640 404 H700" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></mask>
                <mask id="resolute-hiring-mask-3" maskUnits="userSpaceOnUse"><path d="M916 86 V63 Q916 33 946 33 H976" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></mask>
                <mask id="resolute-hiring-mask-4" maskUnits="userSpaceOnUse"><path d="M916 392 V424 Q916 454 946 454 H976" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></mask>
              </defs>
              <path d="M95 335 V360 Q95 384 119 384 H175" fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="1.5" strokeDasharray="5 7" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#resolute-hire-arrow)" mask="url(#resolute-hiring-mask-0)" />
              <path d="M302 165 V95 Q302 65 332 65 H390" fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="1.5" strokeDasharray="5 7" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#resolute-hire-arrow)" mask="url(#resolute-hiring-mask-1)" />
              <path d="M610 335 V374 Q610 404 640 404 H700" fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="1.5" strokeDasharray="5 7" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#resolute-hire-arrow)" mask="url(#resolute-hiring-mask-2)" />
              <path d="M916 86 V63 Q916 33 946 33 H976" fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="1.5" strokeDasharray="5 7" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#resolute-hire-arrow)" mask="url(#resolute-hiring-mask-3)" />
              <path d="M916 392 V424 Q916 454 946 454 H976" fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="1.5" strokeDasharray="5 7" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#resolute-hire-arrow)" mask="url(#resolute-hiring-mask-4)" />
            </svg>

            <div className="relative grid items-center gap-x-4 gap-y-20 md:grid-cols-2 xl:grid-cols-[1fr_1fr_2.05fr_1fr_.92fr]">
              <article className="relative min-h-[270px] rounded-[1.75rem] border border-white/20 bg-[#080F1F] px-6 pb-8 pt-20 text-center">
                <div className="absolute -top-12 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-[1.5rem] border-4 border-[#000A21] bg-[#2378DA] shadow-xl shadow-black/25">
                  <IconBriefcase className="h-11 w-11 text-white" stroke={1.6} />
                </div>
                <span className="bold absolute right-5 top-5 text-xs text-white/25">01</span>
                <h3 className="bold mt-5 text-xl">Apply</h3>
                <p className="mx-auto mt-4 max-w-[220px] text-sm leading-6 text-white/55">Share your profile, resume, or portfolio for a role that feels right.</p>
              </article>

              <article className="relative min-h-[270px] rounded-[1.75rem] border border-white/20 bg-[#080F1F] px-6 pb-8 pt-20 text-center xl:translate-y-16">
                <div className="absolute -top-12 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-[1.5rem] border-4 border-[#000A21] bg-[#6558E8] shadow-xl shadow-black/25">
                  <IconCoffee className="h-11 w-11 text-white" stroke={1.6} />
                </div>
                <span className="bold absolute right-5 top-5 text-xs text-white/25">02</span>
                <h3 className="bold mt-5 text-xl">Let&apos;s talk</h3>
                <p className="mx-auto mt-4 max-w-[220px] text-sm leading-6 text-white/55">A relaxed first conversation about your experience and what you want next.</p>
              </article>

              <article className="relative min-h-[270px] rounded-[1.75rem] border border-white/20 bg-[#080F1F] px-6 pb-8 pt-20 md:col-span-2 xl:col-span-1">
                <span className="bold absolute right-5 top-5 text-xs text-white/25">03-04</span>
                <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
                  <div className="relative">
                    <div className="absolute -top-28 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-[1.5rem] border-4 border-[#000A21] bg-[#269D85] shadow-xl shadow-black/25">
                      <IconUsers className="h-11 w-11 text-white" stroke={1.6} />
                    </div>
                    <h3 className="bold text-lg leading-snug">Meet the team</h3>
                    <p className="mx-auto mt-3 max-w-[170px] text-xs leading-5 text-white/50">Explore the work, the people, and the way we solve problems together.</p>
                  </div>
                  <IconArrowRight className="h-6 w-6 shrink-0 -translate-y-8 text-[#2378DA]" />
                  <div className="relative">
                    <div className="absolute -top-28 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-[1.5rem] border-4 border-[#000A21] bg-[#D8922B] shadow-xl shadow-black/25">
                      <IconSparkles className="h-11 w-11 text-white" stroke={1.6} />
                    </div>
                    <h3 className="bold text-lg leading-snug">Show your craft</h3>
                    <p className="mx-auto mt-3 max-w-[170px] text-xs leading-5 text-white/50">Walk us through relevant work or a focused exercise built around the role.</p>
                  </div>
                </div>
              </article>

              <article className="relative min-h-[270px] rounded-[1.75rem] border border-white/20 bg-[#080F1F] px-6 pb-8 pt-20 text-center xl:top-12">
                <div className="absolute -top-12 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-[1.5rem] border-4 border-[#000A21] bg-[#314F59] shadow-xl shadow-black/25">
                  <IconCompass className="h-11 w-11 text-white" stroke={1.6} />
                </div>
                <span className="bold absolute right-5 top-5 text-xs text-white/25">05</span>
                <h3 className="bold mt-5 text-xl">Decision</h3>
                <p className="mx-auto mt-4 max-w-[220px] text-sm leading-6 text-white/55">Get a clear decision, thoughtful feedback, and the next step.</p>
              </article>

              <div className="relative grid gap-5 md:col-span-2 md:grid-cols-2 xl:top-7 xl:col-span-1 xl:grid-cols-1">
                <article className="relative min-h-[190px] rounded-[1.6rem] border border-[#2378DA]/60 bg-[linear-gradient(145deg,#102B50,#080F1F)] px-5 pb-6 pt-16 text-center">
                  <div className="absolute -top-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-[1.3rem] border-4 border-[#000A21] bg-[#2378DA] shadow-xl shadow-black/25">
                    <IconHeartHandshake className="h-9 w-9 text-white" stroke={1.6} />
                  </div>
                  <h3 className="bold mt-3 text-lg leading-snug">Join Resolute</h3>
                  <p className="mx-auto mt-3 max-w-[190px] text-xs leading-5 text-white/55">Begin with a clear, supported start.</p>
                </article>
                <article className="relative min-h-[190px] rounded-[1.6rem] border border-white/20 bg-[#080F1F] px-5 pb-6 pt-16 text-center xl:top-6">
                  <div className="absolute -top-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-[1.3rem] border-4 border-[#000A21] bg-[#41425F] shadow-xl shadow-black/25">
                    <IconUsers className="h-9 w-9 text-white" stroke={1.6} />
                  </div>
                  <h3 className="bold mt-3 text-lg leading-snug">Stay connected</h3>
                  <p className="mx-auto mt-3 max-w-[190px] text-xs leading-5 text-white/55">If another role fits better, we can reconnect when it opens.</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="open-roles" className="scroll-mt-24 bg-[#0F1930] px-5 py-20 text-white lg:px-9 lg:py-28">
        <div className="mx-auto max-w-[1536px] 2xl:px-36">
          <div className="flex flex-col items-center text-center">
            <div className="flex w-fit items-center rounded-full bg-white/10 p-2">
              <span className="relative rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-4 py-2 text-sm text-white lg:text-lg">
                <span className="absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
                Explore
              </span>
              <span className="px-3 text-sm text-white lg:text-lg">Open Opportunities</span>
            </div>
            <h2 className="bold mt-6 text-3xl sm:text-4xl md:text-5xl xl:text-[58px]">
              Find Your{" "}
              <span className="bg-gradient-to-r from-[#2378DA] to-[#55A6FF] bg-clip-text text-transparent">
                Next Role
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#A9ABBE]">
              Explore current openings and find a role where your experience, ideas, and ambition can make an impact.
            </p>
          </div>

          <div className="mt-14 space-y-5">
            {rolesError ? (
              <div className="rounded-2xl border border-amber-400/20 bg-[#080F1F] px-6 py-14 text-center">
                <IconBriefcase className="mx-auto h-10 w-10 text-amber-300" stroke={1.5} />
                <h3 className="bold mt-5 text-2xl">Opportunities could not be loaded</h3>
                <p className="mx-auto mt-2 max-w-xl text-[#A9ABBE]">
                  Please refresh the page or check again shortly.
                </p>
              </div>
            ) : openRoles.length > 0 ? (
              openRoles.map((role) => (
                <a
                  key={role.id}
                  href={role.detail_url}
                  className="group relative grid overflow-hidden rounded-2xl border border-white/10 bg-[#080F1F] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:border-[#2378DA]/70 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10"
                >
                  <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#2378DA]/15 blur-[70px]" />
                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-white/70">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[#55A6FF]">
                        <IconBriefcase className="h-3.5 w-3.5" />
                        {role.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                        <IconMapPin className="h-3.5 w-3.5" />
                        {role.location}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">{role.employment_type}</span>
                    </div>
                    <h3 className="bold mt-5 text-2xl text-white sm:text-3xl">{role.title}</h3>
                    <p className="mt-3 max-w-3xl leading-7 text-[#A9ABBE]">{role.summary}</p>
                  </div>
                  <span className="relative mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-6 py-3 text-sm text-white lg:mt-0">
                    View Role
                    <IconArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              ))
            ) : (
              <div className="rounded-2xl border border-white/10 bg-[#080F1F] px-6 py-14 text-center">
                <IconUsers className="mx-auto h-10 w-10 text-[#55A6FF]" stroke={1.5} />
                <h3 className="bold mt-5 text-2xl">No openings right now</h3>
                <p className="mx-auto mt-2 max-w-xl text-[#A9ABBE]">
                  We are always interested in meeting thoughtful people. Send us an introduction and we will keep you in mind.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#000A21] px-5 py-20 lg:px-9 lg:py-28">
        <div
          className="relative mx-auto max-w-[1464px] overflow-hidden rounded-3xl border border-white/10 bg-cover bg-center px-6 py-16 text-center sm:px-10 lg:py-24"
          style={{ backgroundImage: "url('/assets/rd-image099.svg')" }}
        >
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#2378DA]/25 blur-[100px]" />
          <div className="relative">
            <div className="mx-auto flex w-fit items-center rounded-full bg-white/10 p-2">
              <span className="relative rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-4 py-2 text-sm text-white lg:text-lg">
                <span className="absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
                Connect
              </span>
              <span className="px-3 text-sm text-white lg:text-lg">Your Next Step</span>
            </div>
            <h2 className="bold mx-auto mt-6 max-w-4xl text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-[58px]">
              The Right Conversation Can{" "}
              <span className="bg-gradient-to-r from-[#2378DA] to-[#55A6FF] bg-clip-text text-transparent">
                Start Anywhere
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#A9ABBE]">
              Tell us what you are great at, what you want to build, and where you hope to grow next.
            </p>
            <Link
              href="/contact?interest=careers"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5"
            >
              Introduce yourself
              <IconArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footersec />
    </main>
  );
}
