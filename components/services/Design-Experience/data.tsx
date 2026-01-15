// data.tsx
export interface Capability {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SoftwareStat {
  value: string;
  highlight?: string;
  label: string;
  description: string;
}

// About Section
export const AboutSection = {
  title: "About Design & Experience Service",
  description: [
    "Design and experience are at the heart of every successful digital product and brand. We help businesses shape how they look, feel, and interact with users by crafting thoughtful design systems and user experiences that align with brand goals.",
    "Our approach blends research, creativity, and strategy to deliver experiences that are intuitive, visually compelling, and built to scale—ensuring long-term consistency and strong brand recognition.",
  ],
  image:
    "/assets/rd-image122.svg",
};

// Capabilities Section
export const capabilitiesSection = {
  title: "Our Design & Experience Capabilities",
  items: [
    {
      title: "UI/UX Design",
      description:
        "We design intuitive user interfaces and experiences that prioritize usability, clarity, and engagement. Our UI/UX solutions are structured to support smooth user journeys, consistent interactions, and meaningful digital experiences across platforms.",
    },
    {
      title: "Brand Identity",
      description:
        "We create cohesive brand identities that reflect your values and resonate with your audience. Identity systems are designed for consistency and scalability, ensuring your brand remains recognizable and aligned across all digital and visual touchpoints.",
    },
    {
      title: "Visual Design",
      description:
        "We develop visual design systems that balance aesthetics with purpose. From layouts and typography to color and imagery, our designs enhance brand presence while supporting clarity, consistency, and impact.",
    },
    {
      title: "Brand Strategy",
      description:
        "We define clear brand strategies that guide positioning, messaging, and experience. Our strategic approach ensures design decisions are aligned with business goals, audience expectations, and long-term brand growth.",
    },
  ],
};

// FAQs
export const faqs: FaqItem[] = [
  {
    question: "What does Design & Experience include?",
    answer:
      "We provide end-to-end mobile app development services, including iOS apps, Android apps, cross-platform solutions, UI/UX design, backend development, API integration, testing, deployment, and ongoing support.",
  },
  {
    question: "Do you work with existing brands or new ones?",
    answer:
      "Project timelines depend on the app’s scope and complexity. Simple applications may take a few weeks, while more advanced or enterprise-level apps typically take 3 to 6 months, delivered in structured phases.",
  },
  {
    question: "How do you ensure design consistency?",
    answer:
      "We create structured design systems and comprehensive guidelines to ensure consistent visuals, interactions, and user experiences across all digital touchpoints and platforms.",
  },
  {
    question: "Can you redesign an existing product or brand?",
    answer:
      "Absolutely. We integrate third-party APIs, payment gateways, analytics tools, CRMs, and other services while ensuring security, stability, and seamless app performance.",
  },
  {
    question: "Do you offer ongoing design support?",
    answer:
      "Yes, we offer ongoing maintenance, performance optimization, feature updates, and long-term support to ensure your app remains secure, reliable, and up to date after launch.",
  },
  {
    question: "Do you provide branding along with UI/UX?",
    answer:
      "Yes, we offer ongoing maintenance, performance optimization, feature updates, and long-term support to ensure your app remains secure, reliable, and up to date after launch.",
  },
];

// Software Stats Section Meta
export const softwareStatsSection = {
  title:
    "We Build Design Experiences That Strengthen Brands, Improve Usability, And Drive Engagement.",
};

// Software Stats (normalized)
export const softwareStats = {
  image: "/assets/rd-image123.svg",
  stats: [
    {
      value: "2.5K",
      highlight: "+",
      label: "Design & Digital Experiences Delivered",
      description:
        "We’ve delivered UI/UX, branding, and visual design solutions across industries—helping teams launch polished experiences that feel consistent, modern, and user-focused.",
    },
    {
      value: "92",
      highlight: "%",
      label: "Client Satisfaction Rate",
      description:
        "We’ve delivered UI/UX, branding, and visual design solutions across industries—helping teams launch polished experiences that feel consistent, modern, and user-focused.",
    },
    {
      value: "85",
      highlight: "%",
      label: "Increase in Brand Consistency",
      description:
        "Most brands see better consistency across screens and marketing touchpoints through structured design systems, unified visual identity, and scalable brand guidelines.",
    },
  ],
};

// Features
export const features = [
  {
    title: "Expert Design Team",
    text:
      "We bring experienced designers who craft thoughtful, scalable, and high-impact digital experiences that feel modern, consistent, and easy to use.",
    image: "/assets/rd-image146.svg",
  },
  {
    title: "User-Centered Design",
    text:
      "We bring experienced designers who craft thoughtful, scalable, and high-impact digital experiences that feel modern, consistent, and easy to use.",
    image: "/assets/rd-image143.svg",
  },
  {
    title: "Strategic Thinking",
    text:
      "We align design with brand goals and business outcomes, ensuring every visual and experience choice supports growth and measurable impact.",
    image: "/assets/rd-image147.svg",
  },
  {
    title: "Collaborative Workflow",
    text:
      "We work closely with clients throughout the process to maintain transparency, clear communication, & creative alignment from start to finish.",
    image: "/assets/rd-image148.svg",
  },
];

// Main Section
export const mainSection = {
  title: "DESIGN & EXPERIENCE",
  subtitle:
    "We design meaningful digital experiences that connect brands with users. Our design and experience services combine strategy, creativity, and usability to create consistent, engaging, and scalable brand experiences across all digital touchpoints.",
};

// Process Steps (normalized)
export const processSteps = {
  title: "Our Comprehensive Design Process",
  description:
    "Design and experience shape how users perceive and interact with a brand. Our structured process ensures clarity, consistency, and strong alignment between business goals and user needs.",
  steps: [
    {
      id: "01",
      title: "Discovery & Research",
      desc:
        "We explore your brand, audience, and objectives to define a clear creative direction, experience goals, and the right design approach for your product.",
    },
    {
      id: "02",
      title: "Concept Development",
      desc:
        "We translate insights into a focused concept, establishing style foundations, messaging tone, and experience guidelines to keep everything consistent.",
    },
    {
      id: "03",
      title: "Design & Execution",
      desc:
        "We design interfaces, visuals, and brand assets with precision, ensuring usability, strong hierarchy, and consistent visual alignment across all touchpoints.",
    },
    {
      id: "04",
      title: "Refinement & Delivery",
      desc:
        "We refine designs based on feedback, finalize assets, and ensure everything is ready for smooth handoff or deployment across platforms.",
    },
  ],
};
