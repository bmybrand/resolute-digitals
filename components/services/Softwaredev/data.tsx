// data.tsx
export interface Capability {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
// About Design & Experience Service
export const AboutSection = {
  title: "About Software Development Service",
  description: [
    "Software development is at the core of digital transformation. We build secure, scalable, and high-performance applications designed to meet the needs of modern businesses. Whether it’s a responsive web platform, a powerful desktop application, or an immersive game experience, our development team delivers solutions engineered for reliability, flexibility, and long-term growth.",
    "",
   ],
  image: "/assets/A male designer working on a desktop computer in a modern office, focused on the screen showing a user interface design..svg", // Hero / front image
};

export const capabilitiesSection = {
  title: "Core Software Development Capabilities",
  items: [
  {
    title: "Desktop Applications",
    description:
      "We design and develop desktop applications engineered for performance, security, and stability across supported operating systems. Solutions are structured to ensure reliable system behavior, seamless hardware integration, and consistent user interaction, enabling dependable releases, scalable feature expansion, and long-term maintainability.",
  },
  {
    title: "Web Applications",
    description:
      "We build web applications using modern frameworks and best practices to deliver secure, responsive, and high-performance experiences. Architectures are designed to support scalable functionality, predictable UI behavior, and seamless backend connectivity, enabling efficient deployments, cross-browser compatibility, and future-ready growth.",
  },
  {
    title: "Integrations",
    description:
      "We develop system integrations that connect applications, platforms, and third-party services through structured data flows and secure communication layers. Integrations are engineered to ensure reliability, consistency, and scalability, enabling smooth interoperability, automated workflows, and reduced operational complexity.",
  },
  {
    title: "API Systems",
    description:
      "We design and implement robust API systems built for performance, security, and extensibility. APIs are structured to support stable data exchange, clear documentation, and scalable consumption across applications, enabling reliable integrations, efficient development cycles, and long-term system evolution.",
  },
]
};
export const faqs: FaqItem[] = [
  {
    question: "What software development services do you provide?",
    answer:
      "We provide custom software development, web and mobile applications, enterprise systems, API integrations, automation solutions, and cloud-based platforms tailored to business needs.",
  },
  {
    question: "How long does a software project take to complete?",
    answer:
      "Project timelines depend on scope and complexity. Small projects may take a few weeks, while larger enterprise solutions typically range from 3 to 6 months with phased delivery.",
  },
  {
    question:
      "What makes Resolute Digitals different from other development agencies?",
    answer:
      "We focus on building scalable, secure, and long-lasting software — not just delivering features. Through strategy, engineering expertise, and continuous collaboration, we create solutions that deliver real results and long-term value.",
  },
  {
    question: "Can you integrate third-party tools or existing systems?",
    answer:
      "Yes, we specialize in integrating third-party APIs, CRMs, payment gateways, analytics tools, and legacy systems while ensuring stability and performance.",
  },
  {
    question: "Do you offer ongoing support after development?",
    answer:
      "Absolutely. We provide maintenance, performance optimization, feature enhancements, and long-term support to keep your software running smoothly.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with modern technologies including React, Next.js, Node.js, Java, Python, cloud platforms, databases, and scalable backend architectures.",
  },
];
export interface SoftwareStat {
  value: string;
  highlight?: string; // for coloring part of the number
  label: string;
  description: string;
}

// Section Meta for Software Stats
export const softwareStatsSection = {
  title:
    "We build powerful software that helps businesses operate smarter and deliver exceptional digital experiences.",
};

// Software Stats
export const softwareStats  = {
  image: "/assets/rd-image123.svg", // parent image
  stats: [
  {
    value: "2.5K",
    highlight: "+",
    label: "Completed Software Projects",
    description:
      "We’ve engineered hundreds of custom software solutions across diverse industries—each designed to improve performance, streamline operations, and create measurable business value.",
  },
  {
    value: "92",
    highlight: "%",
    label: "Performance Improvement Rate",
    description:
      "Our clients report significant improvements in speed, reliability, and workflow efficiency after implementing our software systems, thanks to our focus on clean architecture and robust development practices.",
  },
  {
    value: "85",
    highlight: "%",
    label: "Reduced Operational Overhead",
    description:
      "Most businesses experience reduced operational overhead after adopting automation-driven features and integrated tools built into our custom software solutions.",
  },
]
};


export const features = [
  {
    title: "User-Focused Development",
    text:
      "Every feature is crafted for usability—putting user needs first to ensure workflows stay intuitive, efficient, and easy to navigate.",
    image: "/assets/rd-image124.svg",
  },
  {
    title: "Collaborative Workflow",
    text:
      "We collaborate with you throughout development, refining the product with your feedback to match your goals and vision.",
    image: "/assets/rd-image125.svg",
  },
  {
    title: "Expert Engineering Team",
    text:
      "We bring together skilled engineers who solve complex challenges and build reliable, scalable, future-ready solutions.",
    image: "/assets/rd-image126.svg",
  },
  {
    title: "Data-Driven Decisions",
    text:
      "Our process is driven by insights and performance data, creating systems optimized for stability, speed, and long-term growth.",
    image: "/assets/rd-image126.svg",
  },
];
// Section Meta
export const mainSection = {
  title:
    "Software Development",
  subtitle:
    "We offer a full suite of digital services designed to help businesses build, scale, and grow with confidence. From strategy to execution, our team delivers tailored solutions that combine creativity, technology, and innovation—ensuring every project achieves meaningful results.",
};

export const processSteps = {
  title: "Our Comprehensive Development Process",
  description:
    "Our development process is built to transform complex ideas into reliable, scalable software solutions. We follow a structured and transparent approach that combines strategic planning, thoughtful architecture, and precise execution. Each stage is carefully aligned with your business goals to ensure high performance, security, and long-term success from development through deployment.",
  steps: [
  {
    id: "01",
    title: "Discovery & Planning",
    desc:
      "We work closely with your team to understand goals, challenges, and functional needs, ensuring every decision supports a clear and measurable development strategy.",
  },
  {
    id: "02",
    title: "Architecture & Prototyping",
    desc:
      "We define the core structure of your application, mapping system logic, data flow, and prototypes that visualize how features will work before development begins.",
  },
  {
    id: "03",
    title: "Development & Integration",
    desc:
      "Our engineers write clean, scalable code and integrate essential APIs, services, and tools to create a seamless and robust system built for real-world performance.",
  },
  {
    id: "04",
    title: "Testing & Deployment",
    desc:
      "We thoroughly test your application for security, speed, and stability before deploying it into production, ensuring a smooth launch and a future-ready foundation.",
  },
]};