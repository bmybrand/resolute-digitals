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
  sectionBackground: string;
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
  icon: "prayer" | "quran" | "qibla" | "community" | "calendar" | "daily";
  image?: string;
};

export type AppScreen = {
  title: string;
  subtitle: string;
  image?: string;
  variant: "home" | "prayer" | "quran" | "community";
};

export type AppPageContent = {
  heroTitle: string;
  heroDescription: string;
  featuresTitle: string;
  featuresDescription: string;
  features: AppFeature[];
  affiliationTitle: string;
  affiliationDescription: string;
  paymentStatement: string;
  galleryTitle: string;
  galleryDescription: string;
  screens: AppScreen[];
};

export type Partner = {
  slug: "aws" | "shopify" | "muslim-app";
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
  appPage?: AppPageContent;
};
