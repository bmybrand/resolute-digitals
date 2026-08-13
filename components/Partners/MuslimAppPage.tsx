import Link from "next/link";
import Image from "next/image";
import { FaApple, FaArrowRight, FaBookOpen, FaBuilding, FaCalendarDays, FaCheck, FaClock, FaCompass, FaCreditCard, FaGooglePlay, FaHeart, FaShieldHalved, FaUsers, FaWallet } from "react-icons/fa6";
import { FloatingNavDemo } from "@/components/Home/Navbar";
import Footersec from "@/components/Home/footersec";
import type { Partner } from "@/lib/partners/types";
import AppScreenshotSlider from "./AppScreenshotSlider";

const featureIcons = {
  prayer: FaClock,
  quran: FaBookOpen,
  qibla: FaCompass,
  community: FaUsers,
  calendar: FaCalendarDays,
  daily: FaHeart,
};

const aboutValues = [
  {
    title: "Faith-focused",
    description: "Every feature is shaped around meaningful Islamic practice and everyday spiritual needs.",
    icon: FaHeart,
    image: "/assets/muslim-app-ai/dawn-prayer.webp",
  },
  {
    title: "Easy to use",
    description: "Clear navigation and a calm interface make essential tools simple to find and use.",
    icon: FaCompass,
    image: "/assets/muslim-app-ai/app-in-hand.webp",
  },
  {
    title: "Built for community",
    description: "Designed to support connection, shared learning, and a stronger sense of belonging.",
    icon: FaUsers,
    image: "/assets/muslim-app-ai/community-connection.webp",
  },
];

function SectionBadge({ label, inverse = false }: { label: string; inverse?: boolean }) {
  return (
    <div className={`flex w-fit items-center rounded-full p-2 ${inverse ? "bg-white/10" : "bg-black/[0.07]"}`}>
      <span className={`relative rounded-full px-4 py-2 text-sm font-semibold lg:text-base ${inverse ? "bg-white text-black" : "bg-black text-white"}`}>
        <span className={`absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent to-transparent ${inverse ? "via-black/35" : "via-white/70"}`} />
        Explore
      </span>
      <span className={`px-3 text-sm font-medium lg:text-base ${inverse ? "text-white" : "text-black"}`}>{label}</span>
    </div>
  );
}

export default function MuslimAppPage({ partner }: { partner: Partner }) {
  const content = partner.appPage!;

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="p-5 lg:p-9">
        <FloatingNavDemo variant="light" />

        <section className="relative min-h-[900px] w-full overflow-hidden rounded-3xl bg-black pt-32 text-white shadow-[0_22px_80px_rgba(0,0,0,.16)] sm:min-h-[1000px] lg:pt-40">
          <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-10">
            <div className="flex h-24 w-24 items-center justify-center rounded-[24px] bg-white shadow-[0_18px_45px_rgba(0,0,0,.18)] sm:h-28 sm:w-28">
              <Image src="/assets/muslim-app-logo.png" alt="The Muslim App logo" width={76} height={76} className="h-16 w-16 object-contain brightness-0 sm:h-20 sm:w-20" />
            </div>
            <h1 className="bold mt-7 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">The Muslim App</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">{content.heroDescription}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a href="https://apps.apple.com/us/app/the-muslim-app/id6757379862" aria-label="Download The Muslim App on the App Store" className="group flex h-[58px] min-w-[178px] items-center gap-3 rounded-[11px] border border-white/25 bg-white px-4 text-left text-black shadow-lg transition hover:-translate-y-1 hover:bg-white/90">
                <FaApple className="text-[32px]" />
                <span className="leading-none"><span className="block text-[10px] font-medium">Download on the</span><span className="bold mt-1 block text-[19px]">App Store</span></span>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.recomune.muslimapp" aria-label="Get The Muslim App on Google Play" className="group flex h-[58px] min-w-[178px] items-center gap-3 rounded-[11px] border border-white/25 bg-white px-4 text-left text-black shadow-lg transition hover:-translate-y-1 hover:bg-white/90">
                <FaGooglePlay className="text-[27px]" />
                <span className="leading-none"><span className="block text-[10px] font-medium uppercase tracking-[0.04em]">Get it on</span><span className="bold mt-1 block text-[19px]">Google Play</span></span>
              </a>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-[-235px] flex h-[590px] items-start justify-center sm:bottom-[-270px] sm:h-[690px]">
            <div className="relative h-full w-[620px] max-w-full sm:w-[790px]">
              <Image
                src="/assets/ChatGPT_Image_Aug_12__2026__04_22_39_PM_2-removebg-preview 1.svg"
                alt="The Muslim App prayer tracker screen"
                width={362}
                height={614}
                priority
                className="absolute left-[4%] top-12 z-10 h-auto w-[51%] -rotate-[21deg] cursor-pointer drop-shadow-[0_32px_45px_rgba(0,0,0,.24)] transition-transform duration-300 ease-out hover:-translate-x-3 hover:-translate-y-3 hover:-rotate-[24deg] sm:left-[6%] sm:w-[49%]"
              />
              <Image
                src="/assets/ChatGPT_Image_Aug_12__2026__04_22_39_PM_1-removebg-preview 1.svg"
                alt="The Muslim App home screen"
                width={362}
                height={614}
                priority
                className="absolute right-[4%] top-12 z-10 h-auto w-[51%] rotate-[21deg] cursor-pointer drop-shadow-[0_32px_45px_rgba(0,0,0,.24)] transition-transform duration-300 ease-out hover:translate-x-3 hover:-translate-y-3 hover:rotate-[24deg] sm:right-[6%] sm:w-[49%]"
              />
            </div>
          </div>
        </section>

        <section className="mt-20 2xl:px-49 lg:mt-40">
            <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:gap-20">
              <div>
                <SectionBadge label="About The Muslim App" />
                <h2 className="bold mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl xl:text-[58px]">A meaningful companion for everyday faith</h2>
              </div>

              <div className="lg:pt-3">
                <p className="text-base leading-8 text-black/65 sm:text-lg">
                  The Muslim App is an all-in-one digital companion designed to make
                  essential Islamic tools easier to access throughout the day. It
                  brings prayer guidance, Quran content, useful reminders, and
                  community-focused experiences together in one clear mobile app.
                </p>
                <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
                  Its calm black-and-white interface keeps attention on what matters,
                  creating a simple and approachable experience for Muslims in
                  Pakistan and around the world.
                </p>
                <div className="mt-7 flex items-center gap-4">
                  <a href="https://ourmuslimapp.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:gap-4 hover:bg-black/80">Visit site <FaArrowRight className="-rotate-45" /></a>
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-black/35">For more info</span>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
              {aboutValues.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-[28px] bg-black p-7 text-white shadow-[0_22px_55px_rgba(0,0,0,.14)] transition-transform duration-500 hover:-translate-y-2 sm:p-8 lg:min-h-[500px]">
                    <Image src={item.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/95" />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/75 to-transparent" />
                    <div className="relative flex items-start justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/95 text-xl text-black shadow-lg backdrop-blur transition-transform duration-300 group-hover:rotate-6">
                        <Icon />
                      </span>
                      <span className="bold text-4xl text-white/45">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="relative mt-auto max-w-sm pt-24">
                      <h3 className="bold text-2xl sm:text-3xl">{item.title}</h3>
                      <p className="mt-3 text-base leading-7 text-white/70">{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
        </section>

        <section className="mt-20 2xl:px-49 lg:mt-40">
          <SectionBadge label="App Features" />
          <h2 className="bold mt-5 max-w-4xl text-left text-3xl leading-tight sm:text-4xl lg:text-5xl xl:text-[58px]">{content.featuresTitle}</h2>
          <p className="mt-6 max-w-3xl text-left text-base leading-8 text-black/60 sm:text-lg">{content.featuresDescription}</p>

          <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="relative aspect-square max-w-[430px] overflow-hidden rounded-[28px] bg-[#191a1c] shadow-[0_24px_70px_rgba(0,0,0,.16)]">
                <Image
                  src="/assets/Graph animation for Dark mode.gif.gif"
                  alt="Animated prayer progress graph in The Muslim App"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 90vw, 430px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-16 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">Progress at a glance</p>
                  <p className="bold mt-1 text-xl">Build consistency, one day at a time</p>
                </div>
              </div>
            </div>

            <div className="border-b border-black/15">
              {content.features.map((feature, index) => {
                const Icon = featureIcons[feature.icon];
                return (
                  <article key={feature.title} className="group grid gap-5 border-t border-black/15 px-2 py-7 transition-all duration-300 hover:bg-black hover:px-6 hover:text-white sm:grid-cols-[60px_72px_1fr] sm:items-center sm:gap-7 sm:py-8">
                    <span className="bold text-lg text-black/30 transition-colors group-hover:text-white/35">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-xl text-white transition-all duration-300 group-hover:bg-white group-hover:text-black sm:h-16 sm:w-16">
                      <Icon />
                    </span>
                    <div className="grid gap-3 xl:grid-cols-[.7fr_1.3fr] xl:items-center xl:gap-8">
                      <h3 className="bold text-xl sm:text-2xl">{feature.title}</h3>
                      <p className="text-base leading-7 text-black/55 transition-colors group-hover:text-white/65">{feature.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <section className="relative mt-20 overflow-hidden bg-black py-20 text-white lg:mt-40 lg:py-28">
        <div className="pointer-events-none absolute -right-48 -top-56 h-[620px] w-[620px] rounded-full bg-white/[0.06] blur-3xl" />
        <div className="relative px-5 2xl:px-49">
          <div className="max-w-5xl">
            <SectionBadge label="Business Affiliation & Payments" inverse />
            <h2 className="bold mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl xl:text-[58px]">{content.affiliationTitle}</h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">{content.affiliationDescription}</p>
          </div>

          <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[.82fr_1.18fr]">
            <div className="flex flex-col rounded-[30px] bg-white p-7 text-black sm:p-10">
              <div className="flex items-start justify-between gap-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-xl text-white"><FaBuilding /></span>
                <span className="rounded-full bg-black/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]">Pakistan</span>
              </div>
              <p className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-black/40">Registered company</p>
              <h3 className="bold mt-2 text-3xl sm:text-4xl">Resolute Digitals</h3>
              <p className="mt-5 leading-7 text-black/60">{content.paymentStatement}</p>
              <div className="mt-auto pt-10">
                <div className="flex items-center gap-3 border-t border-black/10 pt-6 text-sm font-semibold">
                  <FaShieldHalved className="text-lg" /> Official collection partner for Pakistan
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/15 bg-white/[0.07] p-7 backdrop-blur-xl sm:p-10">
              <div className="flex flex-col gap-5 border-b border-white/15 pb-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/45">Payment handling</p>
                  <h3 className="bold mt-2 text-2xl sm:text-3xl">A clear, verified process</h3>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-white/70">
                  <span className="rounded-full border border-white/15 px-3 py-2">Easypaisa</span>
                  <span className="rounded-full border border-white/15 px-3 py-2">JazzCash</span>
                  <span className="rounded-full border border-white/15 px-3 py-2">Bank transfer</span>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: FaWallet, number: "01", title: "Make payment", text: "Choose an available local payment channel." },
                  { icon: FaCreditCard, number: "02", title: "Submit details", text: "Provide the required payment confirmation." },
                  { icon: FaCheck, number: "03", title: "Get verified", text: "Your payment is checked and access is updated." },
                ].map((step) => {
                  const Icon = step.icon;
                  return (
                    <article key={step.number} className="rounded-[22px] bg-black/30 p-5 ring-1 ring-white/10">
                      <div className="flex items-center justify-between">
                        <Icon className="text-lg" />
                        <span className="bold text-sm text-white/35">{step.number}</span>
                      </div>
                      <h4 className="bold mt-8 text-lg">{step.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-white/55">{step.text}</p>
                    </article>
                  );
                })}
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-[20px] bg-white p-5 text-black">
                <FaShieldHalved className="mt-0.5 shrink-0 text-xl" />
                <p className="text-sm leading-6"><strong>Business affiliation:</strong> Resolute Digitals and Our Muslim App are official partners. Payments collected in Pakistan are handled by Resolute Digitals for the Our Muslim App brand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="p-5 lg:p-9">
        <section id="app-showcase" className="scroll-mt-28 py-20 lg:py-40">
          <div className="mx-auto mb-12 flex max-w-4xl flex-col items-center px-4 text-center"><SectionBadge label="App Showcase" /><h2 className="bold mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-[58px]">{content.galleryTitle}</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">{content.galleryDescription}</p></div>
          <AppScreenshotSlider screens={content.screens} />
        </section>

        <section className="relative mb-16 min-h-[430px] overflow-hidden rounded-3xl bg-black text-white 2xl:mx-49 lg:mb-28">
          <Image src="/assets/muslim-app-ai/quran-reflection.webp" alt="Quran reflection and The Muslim App" fill sizes="(max-width: 1536px) 100vw, 1200px" className="object-cover object-center grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <div className="relative flex min-h-[430px] flex-col items-start justify-center p-8 sm:p-12 lg:max-w-[68%] lg:p-16">
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-md">Continue the journey</span>
            <h2 className="bold mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl lg:text-5xl">Let&apos;s build what&apos;s next</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/65 sm:text-lg">Explore The Muslim App today, or start a conversation with Resolute Digitals about bringing your next meaningful product to life.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://ourmuslimapp.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:gap-4 hover:bg-white/85">Visit Our Muslim App <FaArrowRight className="-rotate-45" /></a>
              <Link href="/contact/" className="flex items-center gap-3 rounded-full border border-white/35 bg-black/20 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:gap-4 hover:bg-white hover:text-black">Start a conversation <FaArrowRight /></Link>
            </div>
          </div>
        </section>
      </div>

      <Footersec variant="monochrome" />
    </div>
  );
}
