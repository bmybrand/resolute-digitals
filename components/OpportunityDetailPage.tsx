"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBriefcase,
  IconBuilding,
  IconCalendarEvent,
  IconCheck,
  IconClock,
  IconMapPin,
  IconSparkles,
  IconUsers,
} from "@tabler/icons-react";
import { FloatingNavDemo } from "@/components/Home/Navbar";
import Footersec from "@/components/Home/footersec";
import { careersApiUrl, type Opportunity } from "@/lib/opportunities";

type OpportunityDetailPageProps = {
  initialRole?: Opportunity;
};

const defaultResponsibilities = (role: Opportunity) => [
  `Contribute to ${role.title.toLowerCase()} work from planning through dependable delivery.`,
  "Collaborate with design, strategy, technology, and business teammates to solve real problems.",
  "Communicate progress, decisions, and risks clearly while maintaining a high quality bar.",
  "Improve the way we work through thoughtful documentation, feedback, and shared learning.",
];

const defaultQualifications = [
  "Relevant professional experience and strong examples of completed work.",
  "Clear written and verbal communication skills.",
  "The ability to work independently while contributing actively to a collaborative team.",
  "Sound judgment, attention to detail, curiosity, and a willingness to keep learning.",
];

const defaultBenefits = [
  "Flexible collaboration based on the needs of the role and team.",
  "Learning, mentoring, and professional development support.",
  "Modern tools and clear systems that reduce unnecessary friction.",
  "Meaningful ownership and direct visibility into the impact of your work.",
];

function toList(value: string[] | string | null | undefined, fallback: string[]) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === "string" && value.trim()) {
    return value
      .split(/\r?\n|•/)
      .map((item) => item.replace(/^[-*]\s*/, "").trim())
      .filter(Boolean);
  }
  return fallback;
}

function formatDate(value: string | null) {
  if (!value) return "Open until filled";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function getApplicationHref(role: Opportunity) {
  return role.application_destination?.trim() || `/opportunities/${role.slug}/apply/`;
}

export default function OpportunityDetailPage({ initialRole }: OpportunityDetailPageProps) {
  const [role, setRole] = useState<Opportunity | null>(initialRole ?? null);
  const [similarRoles, setSimilarRoles] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(!initialRole);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (initialRole) return;

    const slug = window.location.pathname.split("/").filter(Boolean).at(-1) ||
      new URLSearchParams(window.location.search).get("slug");
    const controller = new AbortController();
    const requestTimeout = window.setTimeout(() => controller.abort(), 12000);

    const loadRole = async () => {
      if (!slug) {
        setHasError(true);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(careersApiUrl, {
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Unable to load opportunity");

        const payload = (await response.json()) as { data?: Opportunity[] };
        const roles = Array.isArray(payload.data) ? payload.data : [];
        const matchingRole = roles.find((item) => item.slug === slug) ?? null;
        setRole(matchingRole);
        setSimilarRoles(roles.filter((item) => item.slug !== slug).slice(0, 3));
        setHasError(!matchingRole);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          setHasError(true);
        }
      } finally {
        window.clearTimeout(requestTimeout);
        setLoading(false);
      }
    };

    loadRole();
    return () => {
      window.clearTimeout(requestTimeout);
      controller.abort();
    };
  }, [initialRole]);

  useEffect(() => {
    if (!initialRole) return;
    const controller = new AbortController();

    fetch(careersApiUrl, { signal: controller.signal })
      .then((response) => response.json())
      .then((payload: { data?: Opportunity[] }) => {
        const roles = Array.isArray(payload.data) ? payload.data : [];
        setSimilarRoles(roles.filter((item) => item.slug !== initialRole.slug).slice(0, 3));
      })
      .catch(() => undefined);

    return () => controller.abort();
  }, [initialRole]);

  const responsibilities = useMemo(
    () => role ? toList(role.responsibilities, defaultResponsibilities(role)) : [],
    [role],
  );
  const qualifications = useMemo(
    () => role ? toList(role.qualifications ?? role.requirements, defaultQualifications) : [],
    [role],
  );
  const benefits = useMemo(
    () => role ? toList(role.benefits, defaultBenefits) : [],
    [role],
  );

  if (loading) {
    return (
      <main className="min-h-screen bg-[#000A21] px-5 py-24 text-white lg:px-9">
        <div className="mx-auto max-w-[1464px] animate-pulse">
          <div className="h-80 rounded-3xl border border-white/10 bg-[#080F1F]" />
          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="h-[650px] rounded-3xl border border-white/10 bg-[#080F1F]" />
            <div className="h-96 rounded-3xl border border-white/10 bg-[#080F1F]" />
          </div>
        </div>
      </main>
    );
  }

  if (hasError || !role) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#000A21] px-5 text-center text-white">
        <div className="max-w-xl rounded-3xl border border-white/10 bg-[#080F1F] px-8 py-16">
          <IconBriefcase className="mx-auto h-12 w-12 text-[#55A6FF]" stroke={1.5} />
          <h1 className="bold mt-5 text-3xl">This opportunity is not available</h1>
          <p className="mt-3 leading-7 text-[#A9ABBE]">
            The role may have closed or is no longer published. Explore the current opportunities instead.
          </p>
          <Link href="/opportunities" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-6 py-3">
            <IconArrowLeft className="h-4 w-4" />
            View open roles
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#000A21] text-white">
      <div className="p-5 lg:p-9">
        <FloatingNavDemo />
        <section
          className="relative flex h-[50vh] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-cover bg-center px-6 pt-16 sm:px-10 lg:h-[60vh] lg:px-16 lg:pt-24"
          style={{ backgroundImage: "linear-gradient(180deg, rgba(0,10,33,.28), rgba(0,10,33,.76)), url('/assets/rd-image081.svg')" }}
        >
          <div className="absolute -bottom-36 right-10 h-96 w-96 rounded-full bg-[#2378DA]/25 blur-[120px]" />
          <div className="relative min-w-0 max-w-5xl text-center">
            <p className="bold text-xs uppercase tracking-[0.24em] text-[#55A6FF]">{role.department} opportunity</p>
            <h1 className="bold mt-5 break-words text-4xl leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl">{role.title}</h1>
            <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm text-white/75">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur"><IconMapPin className="h-4 w-4 text-[#55A6FF]" />{role.location}</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur"><IconBuilding className="h-4 w-4 text-[#55A6FF]" />{role.workplace_type}</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur"><IconClock className="h-4 w-4 text-[#55A6FF]" />{role.employment_type}</span>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#0F1930] px-5 py-16 lg:px-9 lg:py-24">
        <div className="mx-auto grid w-full min-w-0 max-w-[1464px] gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
          <div className="min-w-0">
            <Link href="/opportunities" className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-[#55A6FF]">
              <IconArrowLeft className="h-4 w-4" /> Back to all opportunities
            </Link>

            <div className="mt-10 border-b border-white/10 pb-10">
              <p className="bold text-xs uppercase tracking-[0.2em] text-[#55A6FF]">The position</p>
              <h2 className="bold mt-4 break-words text-3xl sm:text-4xl">{role.title}</h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-[#A9ABBE]">
                {role.summary || "Join our team and help create reliable digital work with meaningful business impact."}
              </p>
            </div>

            <ContentSection title="About Resolute Digitals">
              <p>Resolute Digitals brings strategy, design, technology, data, and marketing together to create thoughtful digital products and measurable business outcomes.</p>
              <p>Our teams work closely across disciplines, share ownership, and focus on solutions that are useful, scalable, and built with care.</p>
            </ContentSection>

            <ContentSection title="About the role">
              <p>{role.description || role.summary || `As our ${role.title}, you will contribute your experience and ideas to work that creates a visible result for clients and users.`}</p>
              <p>You will join a collaborative environment that values clarity, curiosity, dependable delivery, and steady professional growth.</p>
            </ContentSection>

            <ListSection title="What you will do" items={responsibilities} />
            <ListSection title="What you bring" items={qualifications} />
            <ListSection title="What we offer" items={benefits} />

            <div className="relative mt-12 overflow-hidden rounded-3xl border border-[#2378DA]/35 bg-gradient-to-br from-[#10294D] to-[#080F1F] p-8 sm:p-10">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#2378DA]/25 blur-[80px]" />
              <IconSparkles className="relative h-8 w-8 text-[#55A6FF]" />
              <h2 className="bold relative mt-5 text-3xl">Think this could be your next move?</h2>
              <p className="relative mt-3 max-w-2xl leading-7 text-[#A9ABBE]">Send us the work and experience that best represents you. We care about how you think, what you have learned, and what you want to build next.</p>
              <a href={getApplicationHref(role)} className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-6 py-3 text-sm transition hover:brightness-110">
                Apply for this role <IconArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-3xl border border-white/10 bg-[#080F1F] p-7 shadow-[0_24px_80px_rgba(0,0,0,.28)]">
              <p className="bold text-xs uppercase tracking-[0.2em] text-[#55A6FF]">Role at a glance</p>
              <dl className="mt-6 divide-y divide-white/10 text-sm">
                <MetaRow label="Department" value={role.department} icon={<IconBriefcase className="h-4 w-4" />} />
                <MetaRow label="Location" value={role.location} icon={<IconMapPin className="h-4 w-4" />} />
                <MetaRow label="Work style" value={role.workplace_type} icon={<IconBuilding className="h-4 w-4" />} />
                <MetaRow label="Employment" value={role.employment_type} icon={<IconClock className="h-4 w-4" />} />
                <MetaRow label="Openings" value={String(role.openings)} icon={<IconUsers className="h-4 w-4" />} />
                <MetaRow label="Apply by" value={formatDate(role.application_deadline)} icon={<IconCalendarEvent className="h-4 w-4" />} />
              </dl>
              <a href={getApplicationHref(role)} className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-6 py-3.5 text-sm transition hover:brightness-110">
                Apply now <IconArrowRight className="h-4 w-4" />
              </a>
            </div>

            {similarRoles.length > 0 && (
              <div className="rounded-3xl border border-white/10 bg-[#080F1F] p-7">
                <h2 className="bold text-xl">Similar opportunities</h2>
                <div className="mt-4 divide-y divide-white/10">
                  {similarRoles.map((item) => (
                    <a key={item.id} href={item.detail_url} className="group block py-4 first:pt-2">
                      <p className="bold transition group-hover:text-[#55A6FF]">{item.title}</p>
                      <p className="mt-1 text-xs text-white/40">{item.location} · {item.workplace_type}</p>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      <Footersec />
    </main>
  );
}

function ContentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-white/10 py-10">
      <h2 className="bold text-2xl sm:text-3xl">{title}</h2>
      <div className="mt-5 space-y-4 leading-8 text-[#A9ABBE]">{children}</div>
    </section>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="border-b border-white/10 py-10">
      <h2 className="bold text-2xl sm:text-3xl">{title}</h2>
      <ul className="mt-6 space-y-4 text-[#A9ABBE]">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-7">
            <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#2378DA]/20 text-[#55A6FF]"><IconCheck className="h-3.5 w-3.5" /></span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function MetaRow({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[1fr_auto] gap-4 py-4 first:pt-0">
      <dt className="flex items-center gap-2 text-white/40">{icon}{label}</dt>
      <dd className="max-w-[160px] text-right text-white/85">{value}</dd>
    </div>
  );
}
