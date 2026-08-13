import type { Partner } from "./types";

export const shopifyPartner: Partner = {
  slug: "shopify",
  name: "Shopify",
  category: "Commerce Platform",
  description: "Flexible commerce experiences designed to turn browsing into business growth.",
  overviewTitle: "Commerce experiences built to convert and scale",
  overview:
    "Our Shopify work brings storefront strategy, thoughtful user experience, and dependable integrations together. The result is a commerce platform that is easy to manage, enjoyable to use, and ready to evolve.",
  highlights: ["Storefront experiences", "Custom integrations", "Conversion-focused UX"],
  capabilities: [
    { title: "Storefront Design", description: "Clear, distinctive shopping journeys shaped around products and customer intent." },
    { title: "Custom Development", description: "Flexible themes, features, and integrations built for the way the business operates." },
    { title: "Growth Optimization", description: "Focused improvements to discovery, conversion, performance, and retention." },
  ],
  metrics: [
    { value: "Fast", label: "Storefront performance" },
    { value: "Clear", label: "Customer journeys" },
    { value: "Flexible", label: "Commerce operations" },
  ],
  processTitle: "From product strategy to a polished storefront",
  processDescription: "We align brand, technology, and customer behavior in one practical commerce workflow.",
  process: ["Understand the catalog and audience", "Shape the storefront experience", "Build and integrate", "Test, launch, and improve"],
  theme: {
    pageBackground: "#07110A",
    pageText: "#FFFFFF",
    mutedText: "#B5C4B8",
    surfaceBackground: "#122819",
    surfaceText: "#FFFFFF",
    surfaceMuted: "#BED0C1",
    contentAccent: "#95BF47",
    accent: "#95BF47",
    accentDark: "#5E8E3E",
    accentSoft: "rgba(149,191,71,.17)",
    heroBackground: "radial-gradient(circle at 78% 20%, #4B7134 0%, #19351F 40%, #07110A 100%)",
    sectionBackground: "linear-gradient(135deg, #17301D 0%, #08120B 100%)",
    logoBackground: "rgba(255,255,255,.92)",
    buttonText: "#ffffff",
  },
};
