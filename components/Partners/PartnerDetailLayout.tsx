import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaAws, FaCheck, FaShopify } from "react-icons/fa6";
import { FloatingNavDemo } from "@/components/Home/Navbar";
import Footersec from "@/components/Home/footersec";
import type { Partner } from "@/lib/partners";
import MuslimAppPage from "./MuslimAppPage";

function PartnerMark({ partner, size = "large" }: { partner: Partner; size?: "large" | "small" }) {
  const iconClass = size === "large" ? "text-7xl sm:text-8xl" : "text-3xl";

  if (partner.slug === "aws") {
    return <FaAws className={`${iconClass} text-[#FF9900]`} />;
  }

  if (partner.slug === "shopify") {
    return <FaShopify className={`${iconClass} text-[#95BF47]`} />;
  }

  const dimension = size === "large" ? 112 : 40;
  return (
    <Image
      src="/assets/muslim-app-logo.png"
      alt="Muslim App logo"
      width={dimension}
      height={dimension}
      className={size === "large" ? "h-24 w-24 object-contain sm:h-28 sm:w-28" : "h-10 w-10 object-contain"}
    />
  );
}

export default function PartnerDetailLayout({ partner }: { partner: Partner }) {
  if (partner.slug === "muslim-app") {
    return <MuslimAppPage partner={partner} />;
  }

  const { theme } = partner;

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.pageBackground, color: theme.pageText }}>
      <div className="p-5 lg:p-9">
        <FloatingNavDemo />

        <section
          className="internal-page-hero relative flex w-full items-center justify-center overflow-hidden rounded-3xl"
          style={{ background: theme.heroBackground }}
        >
          <div
            className="pointer-events-none absolute right-[8%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full blur-[90px] sm:h-[430px] sm:w-[430px]"
            style={{ backgroundColor: theme.accentSoft }}
          />

          <div className="relative z-10 grid w-full items-center gap-10 px-5 py-8 sm:px-10 lg:grid-cols-[1.2fr_.8fr] lg:px-20 2xl:px-49">
            <div className="max-w-4xl">
              <h1 className="bold text-4xl leading-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">{partner.name}</h1>
              <p className="mt-6 max-w-3xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">{partner.description}</p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div
                className="flex h-44 w-44 items-center justify-center rounded-[38px] shadow-[0_30px_80px_rgba(0,0,0,.42)] backdrop-blur-xl sm:h-56 sm:w-56"
                style={{ backgroundColor: theme.logoBackground, boxShadow: `0 30px 90px ${theme.accentSoft}` }}
              >
                <PartnerMark partner={partner} />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 flex flex-col gap-12 2xl:px-49 lg:mt-40 lg:flex-row lg:gap-20">
          <div className="w-full lg:w-2/5">
            <span className="text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: theme.contentAccent }}>
              The Partnership
            </span>
            <h2 className="bold mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl xl:text-[58px]">{partner.overviewTitle}</h2>
          </div>

          <div className="flex w-full flex-col justify-center lg:w-3/5">
            <p className="max-w-4xl text-base leading-8 sm:text-lg" style={{ color: theme.mutedText }}>{partner.overview}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {partner.highlights.map((highlight) => (
                <span key={highlight} className="rounded-full px-5 py-3 text-sm sm:text-base" style={{ backgroundColor: theme.surfaceBackground, color: theme.surfaceText }}>
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 2xl:px-49 lg:mt-40">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: theme.contentAccent }}>Capabilities</span>
              <h2 className="bold mt-4 text-3xl sm:text-4xl lg:text-5xl">What we build together</h2>
            </div>
            <p className="max-w-xl text-base leading-7 sm:text-lg" style={{ color: theme.mutedText }}>A focused set of capabilities shaped around the platform and the outcomes it needs to support.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {partner.capabilities.map((capability, index) => (
              <article key={capability.title} className="rounded-3xl p-7 sm:p-9" style={{ backgroundColor: theme.surfaceBackground, color: theme.surfaceText }}>
                <span className="bold text-5xl" style={{ color: theme.accent }}>{String(index + 1).padStart(2, "0")}</span>
                <h3 className="bold mt-10 text-2xl">{capability.title}</h3>
                <p className="mt-4 text-base leading-7" style={{ color: theme.surfaceMuted }}>{capability.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-20 w-full py-20 lg:mt-40 lg:py-28" style={{ background: theme.sectionBackground }}>
        <div className="px-5 2xl:px-49">
          <div className="grid gap-8 md:grid-cols-3">
            {partner.metrics.map((metric) => (
              <div key={metric.value} className="text-center md:text-left">
                <p className="bold text-4xl sm:text-5xl" style={{ color: theme.accent }}>{metric.value}</p>
                <p className="mt-3 text-base text-white/65 sm:text-lg">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="p-5 lg:p-9">
        <section className="py-16 2xl:px-49 lg:py-30">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: theme.contentAccent }}>Our Approach</span>
              <h2 className="bold mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">{partner.processTitle}</h2>
              <p className="mt-6 text-base leading-7 sm:text-lg" style={{ color: theme.mutedText }}>{partner.processDescription}</p>
            </div>

            <div>
              {partner.process.map((step, index) => (
                <div key={step} className="flex items-center gap-6 border-t py-6 last:border-b sm:gap-10" style={{ borderColor: theme.pageText === "#080808" ? "rgba(0,0,0,.12)" : "rgba(255,255,255,.10)" }}>
                  <span className="bold w-10 shrink-0 text-lg" style={{ color: theme.contentAccent }}>{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg font-semibold sm:text-2xl">{step}</h3>
                  <FaCheck className="ml-auto shrink-0" style={{ color: theme.contentAccent }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16 flex flex-col items-start justify-between gap-8 rounded-3xl p-8 2xl:mx-49 sm:p-12 lg:mb-28 lg:flex-row lg:items-center" style={{ background: theme.sectionBackground, color: theme.surfaceText }}>
          <div className="flex items-center gap-5">
            <div className="hidden h-16 w-16 items-center justify-center rounded-2xl sm:flex" style={{ backgroundColor: theme.logoBackground }}>
              <PartnerMark partner={partner} size="small" />
            </div>
            <div>
              <h2 className="bold text-3xl sm:text-4xl">Let&apos;s build what&apos;s next</h2>
              <p className="mt-2 text-base text-white/65 sm:text-lg">Bring your next {partner.category.toLowerCase()} project to life.</p>
            </div>
          </div>

          <Link
            href="/contact/"
            className="flex items-center gap-3 rounded-full px-7 py-4 font-semibold transition hover:gap-4 hover:brightness-110"
            style={{ background: `linear-gradient(90deg, ${theme.accent}, ${theme.accentDark})`, color: theme.buttonText }}
          >
            Start a conversation
            <FaArrowRight />
          </Link>
        </section>
      </div>

      <Footersec />
    </div>
  );
}
