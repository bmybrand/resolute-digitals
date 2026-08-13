import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { partners } from "@/lib/partners";

function PartnerPreview({ images, name, artwork }: { images: string[]; name: string; artwork?: "infrastructure-grid" | "disc" | "mobile-logo" }) {
  if (artwork === "infrastructure-grid") {
    return <div className="absolute inset-x-0 top-24 flex h-[255px] items-center justify-center px-8">
      <div className="absolute h-64 w-72 rounded-full bg-[#FF9900]/15 blur-3xl" />
      <div className="relative grid w-full max-w-[340px] grid-cols-3 gap-4">
        {[0, 1, 2, 3, 4, 5].map((item) => <div key={item} className={`h-[72px] rounded-[17px] border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,.22)] backdrop-blur-md transition duration-500 group-hover:-translate-y-1 ${item === 1 || item === 3 ? "bg-[#FF9900]/20" : "bg-white/[.13]"}`}>
          <span className={`mx-auto mt-5 block h-2 w-9 rounded-full ${item === 1 || item === 3 ? "bg-[#FFB84D]/70" : "bg-white/25"}`} />
          <span className="mx-auto mt-2 block h-1.5 w-14 rounded-full bg-white/10" />
        </div>)}
      </div>
    </div>;
  }

  if (artwork === "disc") {
    return <div className="absolute inset-0 flex items-center justify-center pb-24">
      <div className="absolute h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="relative h-[330px] w-[330px] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-3">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-[linear-gradient(145deg,rgba(255,255,255,.34),rgba(255,255,255,.07))] shadow-[0_30px_70px_rgba(21,45,96,.38)] backdrop-blur-xl" />
        <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-[radial-gradient(circle_at_35%_28%,#FFFFFF_0%,#EDF5FF_46%,#CBDDF8_100%)] shadow-[inset_0_0_0_8px_rgba(255,255,255,.28),0_12px_30px_rgba(31,147,239,.24)]" />
        <div className="absolute left-1/2 top-1/2 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-[6px] rounded-full border border-white/30 bg-[#FEFFFF]/35 shadow-[inset_0_-22px_48px_rgba(80,138,238,.20),0_16px_35px_rgba(0,0,0,.18)]">
          {[30, 52, 76, 104, 70, 118, 88, 58, 36].map((height, index) => <span key={`${height}-${index}`} className="w-[6px] rounded-full bg-gradient-to-b from-[#D367C9] via-[#508AEE] to-[#1F93EF] shadow-[0_0_12px_rgba(80,138,238,.35)]" style={{ height }} />)}
        </div>
        <div className="absolute left-1/2 top-[calc(50%-1px)] h-[92px] w-[220px] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_5px_8px_rgba(255,255,255,.5)]">
          <Image src="/assets/recomune-logo.png" alt={`${name} logo`} fill sizes="220px" className="object-contain" />
        </div>
        <div className="absolute left-1/2 top-1/2 z-20 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/90 bg-[#DCE9FA] shadow-[inset_0_2px_5px_rgba(52,97,197,.28),0_3px_10px_rgba(21,45,96,.25)]" />
        <span className="absolute left-3 top-14 h-5 w-5 rounded-full bg-[#D367C9] shadow-[0_0_24px_rgba(211,103,201,.8)]" />
        <span className="absolute bottom-12 right-3 h-8 w-8 rounded-full border border-white/40 bg-[#1F93EF]/80 shadow-[0_0_28px_rgba(31,147,239,.7)]" />
      </div>
    </div>;
  }

  if (artwork === "mobile-logo") {
    return <div className="absolute inset-0 flex items-center justify-center pb-20">
      <div className="absolute h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="relative h-64 w-36 rotate-6 rounded-[32px] bg-black p-2.5 shadow-[0_30px_70px_rgba(0,0,0,.55)] ring-1 ring-white/20 transition duration-500 group-hover:-translate-y-2 group-hover:rotate-3">
        <div className="flex h-full flex-col items-center rounded-[18px] bg-gradient-to-b from-[#343434] to-[#080808] px-2 pt-5">
          <Image src="/assets/muslim-app-logo.png" alt={`${name} mobile logo mockup`} width={56} height={56} className="h-14 w-14 object-contain" />
          <span className="mt-5 h-2 w-20 rounded-full bg-white/20" />
          <span className="mt-2 h-2 w-14 rounded-full bg-white/10" />
          <span className="mb-3 mt-auto h-5 w-full rounded-full bg-white/75" />
        </div>
      </div>
    </div>;
  }

  return <div className="absolute inset-0 flex items-center justify-center pb-24">
    <div className="absolute h-80 w-80 rounded-full bg-white/10 blur-3xl" />
    <div className="relative h-72 w-72">
      {images.slice(0, 2).map((src, index) => <div key={src} className={`absolute top-3 h-64 w-36 overflow-hidden rounded-[24px] shadow-2xl ring-1 ring-white/15 transition duration-500 group-hover:-translate-y-1 ${index ? "right-4 rotate-6 group-hover:rotate-3" : "left-4 z-10 -rotate-6 group-hover:-rotate-3"}`}>
        <Image src={src} alt={`${name} preview`} fill sizes="144px" className="object-cover object-top" />
      </div>)}
    </div>
  </div>;
}

export default function PartnersSection() {
  return (
    <section id="partners" className="relative w-full scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,#000A21_0%,#06142F_50%,#000A21_100%)] py-20 lg:py-30">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2378DA]/10 blur-[150px]" />

      <div className="relative w-full px-5 2xl:px-49">
        <div className="mb-12 flex flex-col gap-7 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <div className="mb-5 flex w-fit items-center rounded-full bg-white/10 p-2">
              <span className="relative rounded-full bg-gradient-to-r from-[#2378DA] to-[#134074] px-4 py-2 text-sm text-white lg:text-lg">
                <span className="absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
                Connect
              </span>
              <span className="px-3 text-sm text-white lg:text-lg">Our Partners</span>
            </div>

            <h2 className="bold text-3xl leading-tight text-white sm:text-4xl md:text-5xl xl:text-[58px]">
              Partnerships That Turn{" "}
              <span className="bg-gradient-to-r from-[#4A9CF8] to-[#2378DA] bg-clip-text text-transparent">Ideas Into Impact</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#A9ABBE] sm:text-lg sm:leading-8 lg:pb-1">
            Explore the platforms and products we work with to create secure,
            scalable, and meaningful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => {
            const { theme, assets } = partner;

            return (
            <article key={partner.slug} className="group relative min-h-[560px] overflow-hidden rounded-[26px] shadow-[0_24px_70px_rgba(0,0,0,.24)] transition duration-300 hover:-translate-y-1" style={{ background: theme.cardBackground }}>
              <PartnerPreview images={assets.cardPreviewImages ?? []} name={partner.name} artwork={assets.cardArtwork} />

              <div className="absolute left-5 top-5 z-20 flex h-16 w-16 items-center justify-center rounded-2xl p-2 shadow-xl backdrop-blur-md sm:left-6 sm:top-6" style={{ backgroundColor: theme.logoBackground }}>
                <Image src={assets.cardIcon!} alt={`${partner.name} icon`} width={52} height={52} className="max-h-12 w-auto max-w-12 object-contain" />
              </div>
              <span className="absolute right-5 top-7 z-20 rounded-full bg-white/15 px-4 py-2 text-xs uppercase tracking-[0.12em] text-white backdrop-blur-md sm:right-6 sm:top-8">
                {partner.category}
              </span>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[48%] bg-gradient-to-b from-transparent via-black/25 to-black/75 backdrop-blur-[7px] backdrop-saturate-105 [mask-image:linear-gradient(180deg,transparent_0%,black_28%,black_100%)]" />

              <div className="relative z-20 flex min-h-[560px] flex-col justify-end p-6 sm:p-8">
                <div className="relative flex flex-col gap-6">
                  <div className="relative z-10">
                    <h3 className="bold text-2xl text-white [text-shadow:0_2px_18px_rgba(0,0,0,.4)] sm:text-3xl">{partner.name}</h3>
                    <p className="mt-3 max-w-xl text-base leading-7 text-white/80 [text-shadow:0_2px_16px_rgba(0,0,0,.45)] sm:text-lg">{partner.description}</p>
                  </div>

                  <Link href={`/partners/${partner.slug}/`} className="relative z-10 flex w-fit items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:gap-4 hover:brightness-110 sm:text-base" style={{ background: `linear-gradient(90deg, ${theme.accent}, ${theme.accentDark})`, color: theme.buttonText }}>
                    View partner
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
