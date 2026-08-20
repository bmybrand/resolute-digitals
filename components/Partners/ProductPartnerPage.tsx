import Link from "next/link";
import Image from "next/image";
import { FaApple, FaArrowRight, FaBookOpen, FaBuilding, FaCalendarDays, FaCheck, FaClock, FaCloud, FaCompass, FaGaugeHigh, FaGooglePlay, FaHeart, FaLock, FaMicrophone, FaShieldHalved, FaUniversalAccess, FaUsers, FaWallet } from "react-icons/fa6";
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
  cloud: FaCloud,
  security: FaShieldHalved,
  performance: FaGaugeHigh,
  voice: FaMicrophone,
  privacy: FaLock,
  accessibility: FaUniversalAccess,
  human: FaHeart,
};

const valueIcons = { faith: FaHeart, ease: FaCompass, community: FaUsers, secure: FaShieldHalved, scale: FaGaugeHigh, human: FaHeart };

function SectionBadge({ label, inverse = false, branded = false }: { label: string; inverse?: boolean; branded?: boolean }) {
  if (branded) {
    return (
      <div className="flex w-fit items-center rounded-full bg-[linear-gradient(90deg,rgba(211,103,201,.14),rgba(31,147,239,.14))] p-2 ring-1 ring-[#508AEE]/15">
        <span className="relative rounded-full bg-[linear-gradient(90deg,#D367C9,#1F93EF)] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(80,138,238,.22)] lg:text-base">
          <span className="absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
          Explore
        </span>
        <span className="px-3 text-sm font-semibold text-[#3461C5] lg:text-base">{label}</span>
      </div>
    );
  }

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

function StoreButtons({ partner, className = "", compactOnMobile = false }: { partner: Partner; className?: string; compactOnMobile?: boolean }) {
  const appleLink = partner.page.storeLinks.find((link) => link.platform === "apple");
  const googleLink = partner.page.storeLinks.find((link) => link.platform === "google");

  if (!appleLink && !googleLink) return null;

  return <div className={`flex flex-wrap items-center gap-3 ${className}`}>
    {appleLink && <a href={appleLink.href} aria-label={`Download ${partner.page.displayName} on the App Store`} className={`group flex items-center rounded-[11px] border border-white/25 bg-white text-left text-black shadow-lg transition hover:-translate-y-1 hover:bg-white/90 ${compactOnMobile ? "h-[46px] min-w-[124px] gap-2 px-2.5 sm:h-[58px] sm:min-w-[178px] sm:gap-3 sm:px-4" : "h-[58px] min-w-[178px] gap-3 px-4"}`}>
      <FaApple className={compactOnMobile ? "text-[24px] sm:text-[32px]" : "text-[32px]"} />
      <span className="leading-none"><span className={`block font-medium ${compactOnMobile ? "text-[8px] sm:text-[10px]" : "text-[10px]"}`}>Download on the</span><span className={`bold mt-1 block ${compactOnMobile ? "text-[14px] sm:text-[19px]" : "text-[19px]"}`}>App Store</span></span>
    </a>}
    {googleLink && <a href={googleLink.href} aria-label={`Get ${partner.page.displayName} on Google Play`} className={`group flex items-center rounded-[11px] border border-white/25 bg-white text-left text-black shadow-lg transition hover:-translate-y-1 hover:bg-white/90 ${compactOnMobile ? "h-[46px] min-w-[124px] gap-2 px-2.5 sm:h-[58px] sm:min-w-[178px] sm:gap-3 sm:px-4" : "h-[58px] min-w-[178px] gap-3 px-4"}`}>
      <FaGooglePlay className={compactOnMobile ? "text-[21px] sm:text-[27px]" : "text-[27px]"} />
      <span className="leading-none"><span className={`block font-medium uppercase tracking-[0.04em] ${compactOnMobile ? "text-[8px] sm:text-[10px]" : "text-[10px]"}`}>Get it on</span><span className={`bold mt-1 block ${compactOnMobile ? "text-[14px] sm:text-[19px]" : "text-[19px]"}`}>Google Play</span></span>
    </a>}
  </div>;
}

export default function ProductPartnerPage({ partner }: { partner: Partner }) {
  const content = partner.page;
  const { assets, theme } = partner;
  const [leftHeroImage, rightHeroImage] = assets.heroImages!;

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.pageBackground, color: theme.pageText }}>
      <div className={assets.heroVideo ? "" : "p-5 lg:p-9"}>
        <FloatingNavDemo variant={theme.navVariant} />

        <section className={`relative w-full overflow-hidden rounded-3xl shadow-[0_22px_80px_rgba(0,0,0,.16)] ${assets.heroVideo ? "min-h-[860px] pt-24 sm:min-h-[1010px] sm:pt-28 lg:min-h-[845px] lg:pt-40 xl:min-h-[950px]" : "min-h-[900px] pt-32 sm:min-h-[1000px] lg:pt-40"}`} style={{ background: theme.heroBackground, color: theme.heroText }}>
          {assets.heroVideo && (
            <div className="absolute inset-x-0 top-0 h-full w-full">
              <div className="h-full w-full px-5 pt-5 lg:px-9 lg:pt-9">
                <div className="relative h-[760px] w-full overflow-hidden rounded-[22px] sm:h-[900px] sm:rounded-[28px] lg:h-[695px] xl:h-[828px]">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                  >
                    <source src={assets.heroVideo} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </div>
              {assets.heroForegroundImage && (
                <div className="pointer-events-none absolute right-[calc(5%+133px)] top-[160px] z-10 hidden h-[80%] w-[500px] translate-x-1/2 lg:block xl:right-[calc(7%+148px)] xl:top-[190px] xl:w-[570px] 2xl:right-[calc(9%+158px)] 2xl:w-[620px]">
                  <div className="absolute left-1/2 top-0 z-10 w-[128px] -translate-x-1/2 sm:w-[165px] lg:w-[230px] xl:w-[260px] 2xl:w-[280px]">
                    <Image
                      src={assets.heroForegroundImage}
                      alt={`${content.displayName} mobile experience`}
                      width={746}
                      height={1548}
                      priority
                      className="h-auto w-full drop-shadow-[0_35px_55px_rgba(21,45,96,.32)]"
                    />
                  </div>
                </div>
              )}
              {assets.heroBaseImage && (
                <div className="pointer-events-none absolute bottom-0 left-1/2 z-30 h-[150px] w-[320px] -translate-x-1/2 overflow-hidden sm:h-[190px] sm:w-[410px] lg:left-auto lg:right-[calc(5%+133px)] lg:h-[235px] lg:w-[500px] lg:translate-x-1/2 xl:right-[calc(7%+148px)] xl:h-[270px] xl:w-[570px] 2xl:right-[calc(9%+158px)] 2xl:h-[295px] 2xl:w-[620px]">
                  <Image
                    src={assets.heroBaseImage}
                    alt="Person and dog sitting together on a dock"
                    width={1536}
                    height={1024}
                    priority
                    className="h-auto w-full drop-shadow-[0_20px_24px_rgba(21,45,96,.22)]"
                  />
                </div>
              )}
              {content.storeLinks.length > 0 && (
                <div className="pointer-events-auto absolute bottom-[175px] right-[34%] z-20 hidden w-[500px] flex-col items-end lg:flex xl:bottom-[155px] xl:right-[33%] xl:w-[560px]">
                  <p className="mb-6 hidden max-w-[560px] text-right text-lg font-medium leading-7 text-white [text-shadow:0_2px_16px_rgba(0,0,0,.5)] lg:block 2xl:text-xl 2xl:leading-8">
                    No one should feel lonely. Talk to companions on ReComune anytime for friendship, comfort, and companionship.
                  </p>
                  <StoreButtons partner={partner} className="justify-end" />
                </div>
              )}
            </div>
          )}
          <div className={`relative z-20 flex flex-col px-5 sm:px-10 ${assets.heroVideo ? "mx-auto max-w-[1480px] items-start text-left lg:px-20" : "mx-auto max-w-4xl items-center text-center"}`}>
            <div className={assets.heroVideo ? "mx-4 mt-5 w-auto max-w-2xl self-stretch rounded-[24px] rounded-tl-none bg-[#FEFFFF] px-8 py-6 shadow-[0_22px_60px_rgba(0,0,0,.14)] sm:mx-0 sm:mt-7 sm:w-full sm:rounded-[36px] sm:rounded-tl-none sm:p-10 lg:p-12" : "contents"}>
              <div className={`flex items-center ${assets.heroVideo ? "h-16 w-52 justify-start" : "h-24 w-24 justify-center rounded-[24px] bg-white shadow-[0_18px_45px_rgba(0,0,0,.18)] sm:h-28 sm:w-28"}`}>
                <Image src={assets.logo!} alt={`${content.displayName} logo`} width={200} height={80} className={`${assets.heroVideo ? "h-auto w-40 sm:w-48" : "h-16 w-20 sm:h-20 sm:w-24"} object-contain ${assets.logoTreatment === "black" ? "brightness-0" : ""}`} />
              </div>
              <h1 className="bold mt-5 text-4xl leading-[1.05] sm:mt-7 sm:text-5xl lg:text-6xl xl:text-7xl" style={{ color: assets.heroVideo ? "#20242B" : undefined }}>{content.displayName}</h1>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 sm:mt-5 sm:text-lg sm:leading-8" style={{ color: assets.heroVideo ? "#5C7179" : theme.heroMuted }}>{content.heroDescription}</p>
            </div>
            {assets.heroVideo && content.storeLinks.length > 0 && <StoreButtons partner={partner} compactOnMobile className="relative z-20 ml-4 mt-5 justify-start self-stretch gap-2 sm:ml-0 sm:gap-3 lg:hidden" />}
            {assets.heroVideo && assets.heroForegroundImage && (
              <div className="pointer-events-none relative z-10 mt-4 w-[128px] self-center sm:mt-5 sm:w-[165px] lg:hidden">
                <Image
                  src={assets.heroForegroundImage}
                  alt={`${content.displayName} mobile experience`}
                  width={746}
                  height={1548}
                  priority
                  className="h-auto w-full drop-shadow-[0_25px_40px_rgba(21,45,96,.28)]"
                />
              </div>
            )}
            {!assets.heroVideo && content.storeLinks.length > 0 && <StoreButtons partner={partner} className="mt-7 justify-center" />}
          </div>

          {!assets.heroVideo && <div className="absolute inset-x-0 bottom-[-235px] flex h-[590px] items-start justify-center sm:bottom-[-270px] sm:h-[690px]">
            <div className="relative h-full w-[620px] max-w-full sm:w-[790px]">
              <Image
                src={leftHeroImage}
                alt={`${content.displayName} product screen`}
                width={362}
                height={614}
                priority
                className="absolute left-[4%] top-12 z-10 h-auto w-[51%] -rotate-[21deg] cursor-pointer drop-shadow-[0_32px_45px_rgba(0,0,0,.24)] transition-transform duration-300 ease-out hover:-translate-x-3 hover:-translate-y-3 hover:-rotate-[24deg] sm:left-[6%] sm:w-[49%]"
              />
              <Image
                src={rightHeroImage}
                alt={`${content.displayName} product screen`}
                width={362}
                height={614}
                priority
                className="absolute right-[4%] top-12 z-10 h-auto w-[51%] rotate-[21deg] cursor-pointer drop-shadow-[0_32px_45px_rgba(0,0,0,.24)] transition-transform duration-300 ease-out hover:translate-x-3 hover:-translate-y-3 hover:rotate-[24deg] sm:right-[6%] sm:w-[49%]"
              />
            </div>
          </div>}
        </section>

        <section className={`${assets.heroVideo ? "bg-[linear-gradient(180deg,#D5F7F5_0%,#DCEBF5_40%,#E8D8ED_72%,#F1C4E2_100%)] px-5 py-20 lg:px-9 lg:py-28 2xl:px-[calc((100vw-1480px)/2+80px)]" : "mt-20 lg:mt-40 2xl:px-49"}`}>
            <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:gap-20">
              <div>
                <SectionBadge label={content.aboutLabel} branded={Boolean(assets.heroVideo)} />
                <h2 className="bold mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl xl:text-[58px]">{content.aboutTitle}</h2>
              </div>

              <div className="lg:pt-3">
                {content.aboutParagraphs.map((paragraph, index) => <p key={paragraph} className={`${index ? "mt-5 " : ""}text-base leading-8 text-black/65 sm:text-lg`}>{paragraph}</p>)}
                <div className="mt-7 flex items-center gap-4">
                  <a href={content.websiteUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition hover:gap-4 ${assets.heroVideo ? "bg-[linear-gradient(90deg,#D367C9,#1F93EF)] shadow-[0_12px_28px_rgba(80,138,238,.24)] hover:brightness-105" : "bg-black hover:bg-black/80"}`}>Visit site <FaArrowRight className="-rotate-45" /></a>
                  <span className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${assets.heroVideo ? "bg-[linear-gradient(90deg,rgba(211,103,201,.13),rgba(31,147,239,.13))] text-[#3461C5] ring-1 ring-[#508AEE]/15" : "text-black/35"}`}>For more info</span>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
              {content.values.map((item, index) => {
                const Icon = valueIcons[item.icon];
                return (
                  <article
                    key={item.title}
                    className={`group relative flex min-h-[430px] flex-col overflow-hidden rounded-[28px] p-7 transition-transform duration-500 hover:-translate-y-2 sm:p-8 lg:min-h-[500px] ${assets.heroVideo ? "text-[#172239] shadow-[0_26px_65px_rgba(52,97,197,.24)] ring-1 ring-white/80" : "bg-black text-white shadow-[0_22px_55px_rgba(0,0,0,.14)]"}`}
                    style={assets.heroVideo ? { background: "linear-gradient(160deg, #C9F3F2 0%, #D8E7F3 38%, #E9CEE6 70%, #F0A8D5 100%)" } : undefined}
                  >
                    {assets.heroVideo ? (
                      <div className="absolute inset-x-0 top-0 h-[62%] overflow-hidden">
                        <Image src={item.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${item.imagePosition === "right" ? "object-right" : "object-center"}`} />
                      </div>
                    ) : (
                      <Image src={item.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${assets.mediaTreatment === "grayscale" ? "grayscale" : ""} ${item.imagePosition === "right" ? "object-right" : "object-center"}`} />
                    )}
                    {!assets.heroVideo && <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/95" />}
                    {!assets.heroVideo && <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/75 to-transparent" />}
                    {assets.heroVideo && <div className="absolute inset-x-0 bottom-0 h-[38%] border-t border-white/35 bg-[linear-gradient(110deg,#D367C9_0%,#7378E5_48%,#1F93EF_100%)]" />}
                    <div className="relative flex items-start justify-between">
                      <span className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl shadow-lg backdrop-blur transition-transform duration-300 group-hover:rotate-6 ${assets.heroVideo ? "border border-white/70 bg-white/55 text-[#3461C5]" : "bg-white/95 text-black"}`}>
                        <Icon />
                      </span>
                      <span className={`bold text-4xl ${assets.heroVideo ? "text-[#3461C5]/45" : "text-white/45"}`}>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className={`relative mt-auto max-w-sm pt-24 ${assets.heroVideo ? "text-white" : ""}`}>
                      <h3 className="bold text-2xl sm:text-3xl">{item.title}</h3>
                      <p className={`mt-3 text-base leading-7 ${assets.heroVideo ? "text-white/80" : "text-white/70"}`}>{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
        </section>

        <section
          className={`relative ${assets.heroVideo ? "bg-cover bg-center px-5 py-20 text-white lg:px-9 lg:py-28 2xl:px-[calc((100vw-1480px)/2+80px)]" : "mt-20 lg:mt-40 2xl:px-49"}`}
          style={assets.heroVideo ? { backgroundImage: "linear-gradient(rgba(2,8,30,.28),rgba(2,8,30,.52)),url('/assets/recomune-features-background.jpg')" } : undefined}
        >
          <SectionBadge label={content.featuresLabel} branded={Boolean(assets.heroVideo)} />
          <h2 className="bold mt-5 max-w-4xl text-left text-3xl leading-tight sm:text-4xl lg:text-5xl xl:text-[58px]">
            {assets.heroVideo && content.featuresTitle.includes("natural conversations") ? (
              <>{content.featuresTitle.replace("natural conversations", "")}<span className="bg-[linear-gradient(90deg,#D367C9,#1F93EF)] bg-clip-text text-transparent">natural conversations</span></>
            ) : content.featuresTitle}
          </h2>
          <p className={`mt-6 max-w-3xl text-left text-base leading-8 sm:text-lg ${assets.heroVideo ? "text-white/75" : "text-black/60"}`}>{content.featuresDescription}</p>

          <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="relative aspect-square max-w-[430px] overflow-hidden rounded-[28px] bg-[#191a1c] shadow-[0_24px_70px_rgba(0,0,0,.16)]">
                <Image
                  src={assets.featureAnimation!}
                  alt={assets.heroVideo ? `${content.displayName} voice companion experience` : `Animated progress graph in ${content.displayName}`}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 90vw, 430px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-16 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">{content.featureVisualEyebrow}</p>
                  <p className="bold mt-1 text-xl">{content.featureVisualTitle}</p>
                </div>
              </div>
            </div>

            <div className={assets.heroVideo ? "border-b border-white/20" : "border-b border-black/15"}>
              {content.features.map((feature, index) => {
                const Icon = featureIcons[feature.icon];
                return (
                  <article key={feature.title} className={`group grid gap-5 border-t px-2 py-7 transition-all duration-300 hover:px-6 hover:text-white sm:grid-cols-[60px_72px_1fr] sm:items-center sm:gap-7 sm:py-8 ${assets.heroVideo ? "border-white/20 hover:bg-[linear-gradient(90deg,rgba(211,103,201,.88)_0%,rgba(115,120,229,.88)_48%,rgba(31,147,239,.88)_100%)]" : "border-black/15 hover:bg-black"}`}>
                    <span className={`bold text-lg transition-colors ${assets.heroVideo ? "text-white/45 group-hover:text-white/70" : "text-black/30 group-hover:text-white/35"}`}>{String(index + 1).padStart(2, "0")}</span>
                    <span className={`flex h-14 w-14 items-center justify-center rounded-full text-xl text-white transition-all duration-300 group-hover:bg-white sm:h-16 sm:w-16 ${assets.heroVideo ? "bg-[linear-gradient(135deg,#D367C9,#1F93EF)] group-hover:text-[#3461C5]" : "bg-black group-hover:text-black"}`}>
                      <Icon />
                    </span>
                    <div className="grid gap-3 xl:grid-cols-[.7fr_1.3fr] xl:items-center xl:gap-8">
                      <h3 className="bold text-xl sm:text-2xl">{feature.title}</h3>
                      <p className={`text-base leading-7 transition-colors ${assets.heroVideo ? "text-white/70 group-hover:text-white/85" : "text-black/55 group-hover:text-white/65"}`}>{feature.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <section className={`relative overflow-hidden py-20 lg:py-28 ${assets.heroVideo ? "" : "mt-20 lg:mt-40"}`} style={{ background: theme.sectionBackground, color: theme.sectionIsLight ? "#111827" : "#FFFFFF" }}>
        <div className="pointer-events-none absolute -right-48 -top-56 h-[620px] w-[620px] rounded-full blur-3xl" style={{ backgroundColor: theme.accentSoft }} />
        <div className={`relative px-5 ${assets.heroVideo ? "lg:px-9 2xl:px-[calc((100vw-1480px)/2+80px)]" : "2xl:px-49"}`}>
          <div className="max-w-5xl">
            <SectionBadge label={content.partnershipLabel} inverse={!theme.sectionIsLight} branded={Boolean(assets.heroVideo)} />
            <h2 className="bold mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl xl:text-[58px]">{content.affiliationTitle}</h2>
            <p className={`mt-6 max-w-3xl text-base leading-8 sm:text-lg ${theme.sectionIsLight ? "text-[#5C7179]" : "text-white/65"}`}>{content.affiliationDescription}</p>
          </div>

          <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[.82fr_1.18fr]">
            <div className={`flex flex-col rounded-[30px] bg-white p-7 text-black sm:p-10 ${assets.heroVideo ? "shadow-[0_24px_65px_rgba(52,97,197,.12)] ring-1 ring-[#508AEE]/15" : ""}`}>
              <div className="flex items-start justify-between gap-5">
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl text-white ${assets.heroVideo ? "bg-[linear-gradient(135deg,#D367C9,#7378E5_52%,#1F93EF)] shadow-[0_12px_28px_rgba(80,138,238,.3)]" : "bg-black"}`}><FaBuilding /></span>
                <span className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${assets.heroVideo ? "bg-[linear-gradient(90deg,rgba(211,103,201,.13),rgba(31,147,239,.13))] text-[#3461C5] ring-1 ring-[#508AEE]/15" : "bg-black/[0.06]"}`}>{content.paymentCountry}</span>
              </div>
              <p className={`mt-10 text-sm font-semibold uppercase tracking-[0.16em] ${assets.heroVideo ? "text-[#508AEE]" : "text-black/40"}`}>{content.companyEyebrow}</p>
              <h3 className="bold mt-2 text-3xl sm:text-4xl">{content.companyName}</h3>
              <p className="mt-5 leading-7 text-black/60">{content.paymentStatement}</p>
              <div className="mt-auto pt-10">
                <div className="flex items-center gap-3 border-t border-black/10 pt-6 text-sm font-semibold">
                  <FaShieldHalved className={`text-lg ${assets.heroVideo ? "text-[#7378E5]" : ""}`} /> {content.responsibilityLine}
                </div>
              </div>
            </div>

            <div className={`rounded-[30px] border p-7 backdrop-blur-xl sm:p-10 ${assets.heroVideo ? "border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,.82),rgba(226,235,250,.72))] shadow-[0_24px_65px_rgba(52,97,197,.12)]" : theme.sectionIsLight ? "border-[#3461C5]/15 bg-white/65" : "border-white/15 bg-white/[0.07]"}`}>
              <div className={`flex flex-col gap-5 border-b pb-8 sm:flex-row sm:items-center sm:justify-between ${theme.sectionIsLight ? "border-black/10" : "border-white/15"}`}>
                <div>
                  <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${assets.heroVideo ? "bg-[linear-gradient(90deg,#D367C9,#1F93EF)] bg-clip-text text-transparent" : theme.sectionIsLight ? "text-[#508AEE]" : "text-white/45"}`}>{content.processEyebrow}</p>
                  <h3 className="bold mt-2 text-2xl sm:text-3xl">{content.processTitle}</h3>
                </div>
                <div className={`flex flex-wrap gap-2 text-sm ${theme.sectionIsLight ? "text-[#5C7179]" : "text-white/70"}`}>
                  {content.paymentMethods.map((method) => <span key={method} className={`rounded-full border px-3 py-2 ${assets.heroVideo ? "border-[#508AEE]/15 bg-[linear-gradient(90deg,rgba(211,103,201,.1),rgba(31,147,239,.1))] text-[#3461C5]" : theme.sectionIsLight ? "border-[#3461C5]/15 bg-white" : "border-white/15"}`}>{method}</span>)}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {content.partnershipSteps.map((step, index) => {
                  const Icon = [FaWallet, FaBuilding, FaCheck][index] ?? FaCheck;
                  return (
                    <article key={step.title} className={`rounded-[22px] p-5 ring-1 transition-transform duration-300 hover:-translate-y-1 ${assets.heroVideo ? "bg-white/85 ring-[#508AEE]/15 shadow-[0_12px_30px_rgba(52,97,197,.08)]" : theme.sectionIsLight ? "bg-white ring-[#3461C5]/10" : "bg-black/30 ring-white/10"}`}>
                      <div className="flex items-center justify-between">
                        <span className={assets.heroVideo ? "flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#D367C9,#1F93EF)] text-base text-white" : "text-lg"}><Icon /></span>
                        <span className={`bold text-sm ${assets.heroVideo ? "text-[#7378E5]" : theme.sectionIsLight ? "text-[#508AEE]" : "text-white/35"}`}>{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <h4 className="bold mt-8 text-lg">{step.title}</h4>
                      <p className={`mt-2 text-sm leading-6 ${theme.sectionIsLight ? "text-[#5C7179]" : "text-white/55"}`}>{step.description}</p>
                    </article>
                  );
                })}
              </div>

              <div className={`mt-5 flex items-start gap-3 rounded-[20px] p-5 text-black ${assets.heroVideo ? "border border-[#508AEE]/15 bg-[linear-gradient(90deg,rgba(211,103,201,.11),rgba(31,147,239,.11))]" : "bg-white"}`}>
                <FaShieldHalved className={`mt-0.5 shrink-0 text-xl ${assets.heroVideo ? "text-[#7378E5]" : ""}`} />
                <p className="text-sm leading-6"><strong>Brand partnership:</strong> {content.partnershipStatement}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="p-5 lg:p-9">
        <section id="app-showcase" className="scroll-mt-28 py-20 lg:py-40">
          <div className="mx-auto mb-12 flex max-w-4xl flex-col items-center px-4 text-center">
            <SectionBadge label={content.galleryLabel} branded={Boolean(assets.heroVideo)} />
            <h2 className="bold mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-[58px]">
              {assets.heroVideo && content.galleryTitle.includes("companion experience") ? (
                <>{content.galleryTitle.replace("companion experience", "")}<span className="bg-[linear-gradient(90deg,#D367C9,#1F93EF)] bg-clip-text text-transparent">companion experience</span></>
              ) : content.galleryTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">{content.galleryDescription}</p>
          </div>
          <AppScreenshotSlider screens={content.screens} themed={Boolean(assets.heroVideo)} />
        </section>

        <section className="relative mb-16 min-h-[430px] overflow-hidden rounded-3xl bg-black text-white 2xl:mx-49 lg:mb-28">
          <Image src={assets.ctaImage!} alt={`${content.displayName} experience`} fill sizes="(max-width: 1536px) 100vw, 1200px" className={`object-cover object-center ${assets.mediaTreatment === "grayscale" ? "grayscale" : ""}`} />
          <div className="absolute inset-0" style={{ background: theme.ctaOverlay }} />
          <div className="relative flex min-h-[430px] flex-col items-start justify-center p-8 sm:p-12 lg:max-w-[68%] lg:p-16">
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-md">Continue the journey</span>
            <h2 className="bold mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl lg:text-5xl">{content.ctaTitle}</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/65 sm:text-lg">{content.ctaDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={content.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:gap-4 hover:bg-white/85">{content.ctaLinkLabel} <FaArrowRight className="-rotate-45" /></a>
              <Link href="/contact/" className="flex items-center gap-3 rounded-full border border-white/35 bg-black/20 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:gap-4 hover:bg-white hover:text-black">Start a conversation <FaArrowRight /></Link>
            </div>
           
          </div>
        </section>
        {/* Muslim App External Links */}
{/* Muslim App External Links */}
<div className="2xl:mx-49 mb-16 lg:mb-28">
  <div className="flex flex-col gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

    {/* Muslim App Logo + Name */}
    <a
      href="https://ourmuslimapp.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-fit items-center gap-3"
      aria-label="Visit Muslim App"
    >
      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-black p-2 shadow-sm">
        <Image
          src={assets.logo!}
          alt="Muslim App logo"
          width={48}
          height={48}
          className="h-full w-full object-contain"
        />
      </div>

      <span className="bold text-lg text-black">
        Muslim App
      </span>

      <FaArrowRight className="-rotate-45 text-sm text-black/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black" />
    </a>

    {/* Legal Links */}
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-sm">
      <Link
        href="/legal/terms/"
        className="text-black/55 transition hover:text-black"
      >
        Terms of Service
      </Link>

      <span className="hidden h-1 w-1 rounded-full bg-black/25 sm:block" />

      <Link
        href="/legal/privacy/"
        className="text-black/55 transition hover:text-black"
      >
        Privacy Policy
      </Link>

      <span className="hidden h-1 w-1 rounded-full bg-black/25 sm:block" />

      <Link
  href="/legal/refund-cancellation"
  className="text-black/55 transition hover:text-black"
>
  Refund Policy
</Link>
<span className="hidden h-1 w-1 rounded-full bg-black/25 sm:block" />
<Link
  href="/legal/business-affiliation"
  className="text-black/55 transition hover:text-black"
>
  Business Affiliation
</Link>
      <span className="hidden h-1 w-1 rounded-full bg-black/25 sm:block" />

      <a
        href="https://ourmuslimapp.com/support"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black/55 transition hover:text-black"
      >
        Help &amp; Support
      </a>
      
    </div>
  </div>
</div>
        
      </div>

      <Footersec variant={theme.footerVariant} />
    </div>
  );
}
