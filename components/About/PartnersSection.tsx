import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaAws, FaShopify } from "react-icons/fa6";
import { partners } from "@/lib/partners";

const partnerThemes = {
  aws: {
    card: "bg-[radial-gradient(circle_at_top_right,#292929_0%,#111111_44%,#050505_100%)] hover:shadow-[0_28px_80px_rgba(255,153,0,.16)]",
    logo: "bg-black/90",
    badge: "bg-white/10 text-white",
    frost: "bg-[linear-gradient(180deg,rgba(255,255,255,.01)_0%,rgba(255,255,255,.055)_35%,rgba(0,0,0,.30)_100%)]",
    button: "from-[#FF9900] to-[#C96F00]",
    buttonText: "text-white",
  },
  shopify: {
    card: "bg-[radial-gradient(circle_at_top_right,#6F983B_0%,#315B2D_38%,#102718_100%)] hover:shadow-[0_28px_80px_rgba(149,191,71,.18)]",
    logo: "bg-white/95",
    badge: "bg-white/15 text-white",
    frost: "bg-[linear-gradient(180deg,rgba(255,255,255,.01)_0%,rgba(255,255,255,.07)_35%,rgba(12,41,20,.30)_100%)]",
    button: "from-[#95BF47] to-[#5E8E3E]",
    buttonText: "text-white",
  },
  "muslim-app": {
    card: "bg-[radial-gradient(circle_at_top_right,#3A3A3A_0%,#161616_42%,#050505_100%)] hover:shadow-[0_28px_80px_rgba(255,255,255,.10)]",
    logo: "bg-black/90",
    badge: "bg-white/12 text-white",
    frost: "bg-[linear-gradient(180deg,rgba(255,255,255,.01)_0%,rgba(255,255,255,.06)_35%,rgba(0,0,0,.30)_100%)]",
    button: "from-white to-[#D8D8D8]",
    buttonText: "text-black",
  },
} as const;

function PartnerLogo({ slug }: { slug: string }) {
  if (slug === "aws") return <FaAws className="text-4xl text-[#FF9900]" />;
  if (slug === "shopify") return <FaShopify className="text-4xl text-[#95BF47]" />;

  return (
    <Image
      src="/assets/muslim-app-logo.png"
      alt="Muslim App logo"
      width={48}
      height={48}
      className="h-11 w-11 object-contain"
    />
  );
}

function PartnerPreview({ slug }: { slug: string }) {
  if (slug === "aws") {
    return (
      <div className="absolute inset-0 flex items-center justify-center pb-28">
        <div className="absolute h-72 w-72 rounded-full bg-[#FF9900]/15 blur-3xl" />
        <div className="relative grid scale-110 grid-cols-3 gap-4 sm:scale-125">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <span key={item} className="h-14 w-20 rounded-xl bg-white/[0.09] shadow-[0_16px_35px_rgba(0,0,0,.3)]" />
          ))}
        </div>
      </div>
    );
  }

  if (slug === "shopify") {
    return (
      <div className="absolute inset-0 flex items-center justify-center pb-24">
        <div className="absolute h-72 w-72 rounded-full bg-[#95BF47]/15 blur-3xl" />
        <div className="relative flex scale-105 gap-4 -rotate-3 sm:scale-115">
          {["$48", "$72", "$96"].map((price, index) => (
            <div key={price} className={`w-28 rounded-2xl bg-white/[0.1] p-3 shadow-2xl ${index === 1 ? "-translate-y-6" : ""}`}>
              <div className="mb-3 h-24 rounded-xl bg-[#95BF47]/25" />
              <span className="text-xs text-white/60">Product</span>
              <p className="mt-1 text-sm font-semibold text-white">{price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center pb-20">
      <div className="absolute h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="relative h-64 w-36 rotate-6 rounded-[32px] bg-black p-2.5 shadow-[0_30px_70px_rgba(0,0,0,.55)] ring-1 ring-white/20">
        <div className="flex h-full flex-col items-center rounded-[18px] bg-gradient-to-b from-[#343434] to-[#080808] px-2 pt-5">
          <Image src="/assets/muslim-app-logo.png" alt="" width={56} height={56} className="h-14 w-14 object-contain" />
          <span className="mt-5 h-2 w-20 rounded-full bg-white/20" />
          <span className="mt-2 h-2 w-14 rounded-full bg-white/10" />
          <span className="mt-auto mb-3 h-5 w-full rounded-full bg-white/75" />
        </div>
      </div>
    </div>
  );
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
            const theme = partnerThemes[partner.slug as keyof typeof partnerThemes];

            return (
            <article key={partner.slug} className={`group relative min-h-[560px] overflow-hidden rounded-[26px] shadow-[0_24px_70px_rgba(0,0,0,.24)] transition duration-300 hover:-translate-y-1 ${theme.card}`}>
              <PartnerPreview slug={partner.slug} />

              <div className={`absolute left-5 top-5 z-20 flex h-16 w-16 items-center justify-center rounded-2xl shadow-xl backdrop-blur-md sm:left-6 sm:top-6 ${theme.logo}`}>
                <PartnerLogo slug={partner.slug} />
              </div>
              <span className={`absolute right-5 top-7 z-20 rounded-full px-4 py-2 text-xs tracking-[0.12em] backdrop-blur-md uppercase sm:right-6 sm:top-8 ${theme.badge}`}>
                {partner.category}
              </span>

              <div className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[48%] backdrop-blur-[7px] backdrop-saturate-105 [mask-image:linear-gradient(180deg,transparent_0%,black_28%,black_100%)] ${theme.frost}`} />

              <div className="relative z-20 flex min-h-[560px] flex-col justify-end p-6 sm:p-8">
                <div className="relative flex flex-col gap-6">
                  <div className="relative z-10">
                    <h3 className="bold text-2xl text-white [text-shadow:0_2px_18px_rgba(0,0,0,.4)] sm:text-3xl">{partner.name}</h3>
                    <p className="mt-3 max-w-xl text-base leading-7 text-white/80 [text-shadow:0_2px_16px_rgba(0,0,0,.45)] sm:text-lg">{partner.description}</p>
                  </div>

                  <Link href={`/partners/${partner.slug}/`} className={`relative z-10 flex w-fit items-center gap-3 rounded-full bg-gradient-to-r px-5 py-3 text-sm font-semibold transition duration-300 hover:gap-4 hover:brightness-110 sm:text-base ${theme.button} ${theme.buttonText}`}>
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
