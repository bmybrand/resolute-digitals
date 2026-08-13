export type PartnerTheme = {
  pageBackground: string;
  pageText: string;
  mutedText: string;
  surfaceBackground: string;
  surfaceText: string;
  surfaceMuted: string;
  contentAccent: string;
  accent: string;
  accentDark: string;
  accentSoft: string;
  heroBackground: string;
  cardBackground: string;
  heroText: string;
  heroMuted: string;
  sectionBackground: string;
  sectionIsLight: boolean;
  ctaOverlay: string;
  navVariant: "default" | "light" | "recomune";
  footerVariant: "default" | "monochrome" | "recomune";
  logoBackground: string;
  buttonText: string;
};

export type PartnerCapability = {
  title: string;
  description: string;
};

export type PartnerMetric = {
  value: string;
  label: string;
};

export type AppFeature = {
  title: string;
  description: string;
  icon: "prayer" | "quran" | "qibla" | "community" | "calendar" | "daily" | "cloud" | "security" | "performance" | "voice" | "privacy" | "accessibility" | "human";
  image?: string;
};

export type AppValue = {
  title: string;
  description: string;
  icon: "faith" | "ease" | "community" | "secure" | "scale" | "human";
  image: string;
  imagePosition?: "center" | "right";
};

export type StoreLink = {
  platform: "apple" | "google";
  href: string;
};

export type PartnershipStep = {
  title: string;
  description: string;
};

export type PartnerAssets = {
  logo?: string;
  cardIcon?: string;
  cardPreviewImages?: string[];
  cardArtwork?: "infrastructure-grid" | "disc" | "mobile-logo";
  logoTreatment?: "original" | "black";
  mediaTreatment?: "color" | "grayscale";
  heroVideo?: string;
  heroForegroundImage?: string;
  heroBaseImage?: string;
  heroImages?: [string, string];
  featureAnimation?: string;
  ctaImage?: string;
};

export type AppScreen = {
  title: string;
  subtitle: string;
  image?: string;
  variant: "home" | "prayer" | "quran" | "community";
};

export type PartnerPageContent = {
  displayName: string;
  heroTitle: string;
  heroDescription: string;
  storeLinks: StoreLink[];
  websiteUrl: string;
  aboutLabel: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  values: AppValue[];
  featuresTitle: string;
  featuresDescription: string;
  featuresLabel: string;
  featureVisualEyebrow: string;
  featureVisualTitle: string;
  features: AppFeature[];
  affiliationTitle: string;
  affiliationDescription: string;
  paymentStatement: string;
  partnershipStatement: string;
  companyName: string;
  paymentCountry: string;
  paymentMethods: string[];
  partnershipLabel: string;
  companyEyebrow: string;
  processEyebrow: string;
  processTitle: string;
  responsibilityLine: string;
  partnershipSteps: PartnershipStep[];
  galleryTitle: string;
  galleryDescription: string;
  galleryLabel: string;
  screens: AppScreen[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLinkLabel: string;
};

export type Partner = {
  slug: "aws" | "recomune" | "muslim-app";
  name: string;
  category: string;
  description: string;
  overview: string;
  overviewTitle: string;
  highlights: string[];
  capabilities: PartnerCapability[];
  metrics: PartnerMetric[];
  processTitle: string;
  processDescription: string;
  process: string[];
  theme: PartnerTheme;
  assets: PartnerAssets;
  page: PartnerPageContent;
};
