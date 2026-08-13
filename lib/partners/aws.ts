import type { Partner } from "./types";

export const awsPartner: Partner = {
  slug: "aws",
  name: "AWS",
  category: "Cloud Infrastructure",
  description: "Scalable cloud foundations for secure, high-performing digital products.",
  overviewTitle: "Cloud infrastructure designed around your business",
  overview:
    "We use the AWS ecosystem to plan, deploy, and improve dependable cloud environments. Every architecture is shaped around real product needs, operational clarity, and room for sustainable growth.",
  highlights: ["Cloud architecture", "Scalable deployment", "Performance monitoring"],
  capabilities: [
    { title: "Cloud Architecture", description: "Purpose-built environments aligned with product, security, and performance requirements." },
    { title: "Deployment Systems", description: "Repeatable delivery workflows that help teams release confidently and consistently." },
    { title: "Monitoring & Reliability", description: "Clear operational visibility that supports stable services and faster issue resolution." },
  ],
  metrics: [
    { value: "Secure", label: "Infrastructure by design" },
    { value: "Elastic", label: "Capacity that scales" },
    { value: "Visible", label: "Operational performance" },
  ],
  processTitle: "A clear path from architecture to operation",
  processDescription: "We connect technical decisions to business outcomes throughout the cloud lifecycle.",
  process: ["Assess the product and workload", "Design the cloud foundation", "Deploy and validate", "Monitor, optimize, and scale"],
  theme: {
    pageBackground: "#080808",
    pageText: "#FFFFFF",
    mutedText: "#AAAEB7",
    surfaceBackground: "#151515",
    surfaceText: "#FFFFFF",
    surfaceMuted: "#B6B6B6",
    contentAccent: "#FF9900",
    accent: "#FF9900",
    accentDark: "#B96900",
    accentSoft: "rgba(255,153,0,.16)",
    heroBackground: "radial-gradient(circle at 78% 20%, #3A2A13 0%, #151515 42%, #050505 100%)",
    sectionBackground: "linear-gradient(135deg, #17130D 0%, #090909 100%)",
    logoBackground: "rgba(0,0,0,.72)",
    buttonText: "#ffffff",
  },
};
