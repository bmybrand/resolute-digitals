"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBriefcase,
  IconMapPin,
  IconSearch,
  IconUsers,
} from "@tabler/icons-react";
import { FloatingNavDemo } from "@/components/Home/Navbar";
import Footersec from "@/components/Home/footersec";

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

export default function OpportunitiesPage() {
  const [roles, setRoles] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");
  const [workplace, setWorkplace] = useState("all");

  useEffect(() => {
    const controller = new AbortController();

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
        setRoles(Array.isArray(payload.data) ? payload.data : []);
        setHasError(false);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setHasError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    loadOpportunities();

    return () => controller.abort();
  }, []);

  const departments = useMemo(
    () => Array.from(new Set(roles.map((role) => role.department))).sort(),
    [roles],
  );

  const workplaces = useMemo(
    () => Array.from(new Set(roles.map((role) => role.workplace_type))).sort(),
    [roles],
  );

  const filteredRoles = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return roles.filter((role) => {
      const matchesSearch =
        normalizedSearch === "" ||
        [role.title, role.department, role.location, role.summary ?? ""]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);
      const matchesDepartment = department === "all" || role.department === department;
      const matchesWorkplace = workplace === "all" || role.workplace_type === workplace;

      return matchesSearch && matchesDepartment && matchesWorkplace;
    });
  }, [department, roles, search, workplace]);

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
          <div className="flex max-w-5xl flex-col items-center gap-8 p-5 text-center">
            <p className="text-sm uppercase tracking-[0.22em] text-[#55A6FF]">Careers at Resolute Digitals</p>
            <h1 className="bold text-4xl leading-tight text-white drop-shadow-lg sm:text-5xl lg:mt-20 lg:text-7xl">
              OPEN OPPORTUNITIES
            </h1>
            <p className="ExtraLight mx-auto max-w-3xl text-sm leading-7 text-white/80 lg:text-base">
              Explore current openings across our teams and find the place where your experience, ideas, and ambition can make an impact.
            </p>
            <Link
              href="/careers#how-we-hire"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              <IconArrowLeft className="h-4 w-4" />
              See how we hire
            </Link>
          </div>
        </section>
      </div>

      <section className="bg-[#0F1930] px-5 py-20 lg:px-9 lg:py-28">
        <div className="mx-auto max-w-[1464px]">
          <div className="flex flex-col items-center text-center">
            <div className="flex w-fit items-center rounded-full bg-white/10 p-2">
              <span className="relative rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-4 py-2 text-sm text-white lg:text-lg">
                <span className="absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
                Explore
              </span>
              <span className="px-3 text-sm text-white lg:text-lg">Current Roles</span>
            </div>
            <h2 className="bold mt-6 text-3xl sm:text-4xl md:text-5xl xl:text-[58px]">
              Find Where You Can{" "}
              <span className="bg-gradient-to-r from-[#2378DA] to-[#55A6FF] bg-clip-text text-transparent">
                Make an Impact
              </span>
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-[#A9ABBE]">
              Search by role, location, or team and narrow the list to the working style that fits you.
            </p>
          </div>

          <div className="mt-12 grid gap-3 rounded-2xl border border-white/10 bg-[#080F1F] p-4 md:grid-cols-[minmax(0,1fr)_220px_220px]">
            <label className="relative block">
              <span className="sr-only">Search opportunities</span>
              <IconSearch className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/35" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search opportunities"
                className="h-13 w-full rounded-xl border border-white/10 bg-[#172036] pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#2378DA]"
              />
            </label>
            <label>
              <span className="sr-only">Filter by department</span>
              <select
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
                className="h-13 w-full rounded-xl border border-white/10 bg-[#172036] px-4 text-sm text-white outline-none focus:border-[#2378DA]"
              >
                <option value="all">All departments</option>
                {departments.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </label>
            <label>
              <span className="sr-only">Filter by work style</span>
              <select
                value={workplace}
                onChange={(event) => setWorkplace(event.target.value)}
                className="h-13 w-full rounded-xl border border-white/10 bg-[#172036] px-4 text-sm text-white outline-none focus:border-[#2378DA]"
              >
                <option value="all">All work styles</option>
                {workplaces.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </label>
          </div>

          <div className="mt-10">
            {loading ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" aria-label="Loading opportunities">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="h-[390px] animate-pulse rounded-3xl border border-white/10 bg-[#080F1F]" />
                ))}
              </div>
            ) : hasError ? (
              <div className="rounded-3xl border border-amber-400/20 bg-[#080F1F] px-6 py-16 text-center">
                <IconBriefcase className="mx-auto h-11 w-11 text-amber-300" stroke={1.5} />
                <h3 className="bold mt-5 text-2xl">Opportunities could not be loaded</h3>
                <p className="mx-auto mt-3 max-w-xl leading-7 text-[#A9ABBE]">Please refresh the page or check again shortly.</p>
              </div>
            ) : filteredRoles.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredRoles.map((role) => (
                  <article
                    key={role.id}
                    className="group flex min-h-[390px] flex-col rounded-3xl border border-white/10 bg-[#080F1F] p-7 transition duration-300 hover:-translate-y-1.5 hover:border-[#2378DA]/60 hover:bg-[#0B1427] sm:p-8"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full bg-[#2378DA]/15 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#55A6FF]">
                        {role.department}
                      </span>
                      <IconBriefcase className="h-5 w-5 text-white/30" stroke={1.6} />
                    </div>
                    <h3 className="bold mt-7 text-2xl leading-snug">{role.title}</h3>
                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/50">
                      {role.summary || "Learn more about this opportunity and the work you can help us deliver."}
                    </p>
                    <dl className="mt-6 space-y-2 text-sm text-white/55">
                      <div className="flex gap-2"><dt className="font-semibold text-white/85">Location:</dt><dd>{role.location}</dd></div>
                      <div className="flex gap-2"><dt className="font-semibold text-white/85">Work style:</dt><dd>{role.workplace_type}</dd></div>
                      <div className="flex gap-2"><dt className="font-semibold text-white/85">Type:</dt><dd>{role.employment_type}</dd></div>
                    </dl>
                    <div className="mt-auto pt-8">
                      <Link
                        href={role.detail_url}
                        className="inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-6 py-3 text-xs text-white transition hover:brightness-110"
                      >
                        View role
                        <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-[#080F1F] px-6 py-16 text-center">
                <IconUsers className="mx-auto h-11 w-11 text-[#55A6FF]" stroke={1.5} />
                <h3 className="bold mt-5 text-2xl">No matching opportunities</h3>
                <p className="mx-auto mt-3 max-w-xl leading-7 text-[#A9ABBE]">
                  Try a different search or filter. New roles will appear here as soon as they are published.
                </p>
              </div>
            )}
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-white/45">
            <IconMapPin className="h-4 w-4 text-[#55A6FF]" />
            Roles may be remote, hybrid, or location-based depending on the team.
          </p>
        </div>
      </section>

      <Footersec />
    </main>
  );
}
