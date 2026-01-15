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
  title: "About Digital Marketing Service",
  description: [
    "Digital marketing is essential for reaching the right audience at the right time.",
    "We design and execute performance-focused marketing strategies that combine creativity, analytics, and automation to drive traffic, generate leads, and increase revenue. From organic search to paid campaigns, our solutions are built to scale and adapt as your business grows.",
  ],
  image:
    "/assets/A male designer working on a desktop computer in a modern office, focused on the screen showing a user interface design. (2).svg",
};

// Capabilities Section
export const capabilitiesSection = {
  title: "Our Digital Marketing Capabilities",
  items: [
    {
      title: "SEO Services",
      description:
        "We optimize websites for search visibility through technical SEO, content strategy, and keyword optimization. Our approach improves rankings, increases organic traffic, and builds long-term authority while aligning with search engine best practices.",
    },
    {
      title: "Social Ads",
      description:
        "We optimize websites for search visibility through technical SEO, content strategy, and keyword optimization. Our approach improves rankings, increases organic traffic, and builds long-term authority while aligning with search engine best practices.",
    },
    {
      title: "Paid Campaigns",
      description:
        "We create targeted social media advertising campaigns designed to reach the right audience across platforms. From creative development to audience targeting and performance tracking, we focus on maximizing engagement and return on ad spend.",
    },
    {
      title: "Email Marketing",
      description:
        "We manage data-driven paid campaigns across search and display networks to generate high-intent traffic. Campaigns are structured for efficiency, continuous optimization, and measurable conversion growth.",
    },
  ],
};

// FAQs
export const faqs: FaqItem[] = [
  {
    question: "What industries do you support with digital marketing?",
    answer:
      "We provide end-to-end mobile app development services, including iOS apps, Android apps, cross-platform solutions, UI/UX design, backend development, API integration, testing, deployment, and ongoing support.",
  },
  {
    question: "Do you manage both organic and paid marketing?",
    answer:
      "Project timelines depend on the app’s scope and complexity. Simple applications may take a few weeks, while more advanced or enterprise-level apps typically take 3 to 6 months, delivered in structured phases.",
  },
  {
    question: "How do you measure campaign success?",
    answer:
      "We track traffic, conversions, engagement, ROI, and other key metrics aligned with your goals, using insights to optimize campaigns and continuously improve performance.",
  },
  {
    question: "Can you manage ongoing campaigns?",
    answer:
      "Absolutely. We integrate third-party APIs, payment gateways, analytics tools, CRMs, and other services while ensuring security, stability, and seamless app performance.",
  },
  {
    question: "Do you provide marketing analytics and reports?",
    answer:
      "Yes, we offer ongoing maintenance, performance optimization, feature updates, and long-term support to ensure your app remains secure, reliable, and up to date after launch.",
  },
  {
    question: "Do you run retargeting and remarketing campaigns?",
    answer:
      "We work with modern mobile and backend technologies including React Native, Flutter, Swift, Kotlin, Node.js, cloud platforms, and scalable backend architectures.",
  },
];

// Software Stats Section Meta
export const softwareStatsSection = {
  title:
    "We Drive Digital Marketing Strategies That Increase Visibility, Engagement, And Conversions.",
};

// Software Stats (normalized)
export const softwareStats = {
  image: "/assets/ax-sd-st-thumb.webp (2).svg",
  stats: [
    {
      value: "2.5K",
      highlight: "+",
      label: "Marketing Campaigns Delivered",
      description:
        "We’ve executed hundreds of SEO, paid advertising, and email marketing campaigns across industries—each designed to increase reach, attract high-intent audiences, and generate measurable growth.",
    },
    {
      value: "92",
      highlight: "%",
      label: "Client Satisfaction Rate",
      description:
        "We’ve executed hundreds of SEO, paid advertising, and email marketing campaigns across industries—each designed to increase reach, attract high-intent audiences, and generate measurable growth.",
    },
    {
      value: "85",
      highlight: "%",
      label: "Increase in Engagement & Conversions",
      description:
        "Most businesses experience higher engagement, improved conversion rates, and better ROI after implementing our optimized campaigns, precise audience targeting, and performance tracking systems.",
    },
  ],
};

// Features
export const features = [
  {
    title: "Performance Strategy",
    text:
      "We bring experienced designers who craft thoughtful, scalable, and high-impact digital experiences that feel modern, consistent, and easy to use.",
    image: "/assets/Group 1597884018 (1).svg",
  },
  {
    title: "Audience Targeting",
    text:
      "We bring experienced designers who craft thoughtful, scalable, and high-impact digital experiences that feel modern, consistent, and easy to use.",
    image: "/assets/Group 1597884020 (1).svg",
  },
  {
    title: "Creative & Insights",
    text:
      "We align design with brand goals and business outcomes, ensuring every visual and experience choice supports growth and measurable impact.",
    image: "/assets/Group 1597884025 (1).svg",
  },
  {
    title: "Collaborative Workflow",
    text:
      "We work closely with clients throughout the process to maintain transparency, clear communication, & creative alignment from start to finish.",
    image: "/assets/Group 1597884030.svg",
  },
];

// Main Section
export const mainSection = {
  title: "DIGITAL MARKETING",
  subtitle:
    "We help brands grow visibility, engagement, and conversions through data-driven digital marketing strategies built for measurable business growth. By using audience insights and performance optimization, we create campaigns that attract the right customers and scale results over time.",
};

// Process Steps (normalized)
export const processSteps = {
  title: "Our Comprehensive Digital Marketing Process",
  description:
    "Digital marketing requires strategy, execution, and continuous optimization. Our structured process ensures campaigns remain targeted, measurable, and aligned with business growth objectives.",
  steps: [
    {
      id: "01",
      title: "Strategy & Research",
      desc:
        "We analyze your business goals, target audience, competitors, and existing performance to define a clear marketing strategy and channel roadmap.",
    },
    {
      id: "02",
      title: "Campaign Planning & Setup",
      desc:
        "We structure campaigns, messaging, creatives, and tracking systems to ensure accurate targeting, clean setup, and measurable performance from day one.",
    },
    {
      id: "03",
      title: "Execution & Optimization",
      desc:
        "We organize audiences, ad assets, landing flow, and analytics tracking to launch campaigns with clear goals, reliable reporting, and optimized delivery.",
    },
    {
      id: "04",
      title: "Reporting & Growth",
      desc:
        "We provide clear performance reports and actionable insights, then refine strategy and campaigns to support sustainable growth and long-term marketing success.",
    },
  ],
};
