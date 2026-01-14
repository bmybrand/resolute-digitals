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
  title: "About Ops & IT Support Service",
  description: [
    "Modern businesses rely on always-on infrastructure. Our IT Operations services are designed to monitor, manage, and optimize critical systems while minimizing downtime and operational risk.",
    "We combine automation, real-time monitoring, and best-practice frameworks to maintain performance, security, and scalability across on-premise and cloud environments.",
  ],
  image: "/assets/rd-image134.svg",
};

// Capabilities Section
export const capabilitiesSection = {
  title: "Our Ops & IT Capabilities",
  items: [
    {
      title: "Network Management",
      description:
        "We design, monitor, and manage secure network environments to ensure consistent connectivity, optimized traffic flow, and strong protection against unauthorized access across all business systems.",
    },
    {
      title: "Server Monitoring",
      description:
        "We provide continuous server monitoring to track performance, availability, and overall system health, enabling early detection of issues and rapid response before they impact operations.",
    },
    {
      title: "Cloud Operations",
      description:
        "We manage cloud infrastructure across public and hybrid environments, ensuring reliability, scalability, cost optimization, and secure operation aligned with your business workloads.",
    },
    {
      title: "Patch Management",
      description:
        "We implement structured patching processes to keep systems updated, secure, and compliant—reducing vulnerabilities while maintaining stability and uptime.",
    },
  ],
};
// Section Meta
export const mainSection = {
  title:
    "Ops & IT Support",
  subtitle:
    "We design and implement intelligent AI solutions that automate processes, enhance decision-making, and drive operational efficiency. From AI automation to intelligent workflows, our solutions help businesses scale smarter, faster, and with confidence.",
};
// FAQs
export const faqs: FaqItem[] = [
  {
    question: "What types of IT environments do you support?",
    answer:
      "We support on-premise, cloud, and hybrid environments across diverse infrastructures and operational scales.",
  },
  {
    question: "Do you provide 24/7 monitoring?",
    answer:
      "Yes, we provide continuous monitoring to detect issues early and maintain system availability.",
  },
  {
    question: "How do you handle security and updates?",
    answer:
      "We follow structured patch management, enforce strict access controls, and implement industry-leading security best practices to ensure systems remain protected, secure, and fully compliant.",
  },
  {
    question: "Can you support cloud platforms?",
    answer:
      "Yes, we support major cloud platforms while ensuring secure, scalable, and compliant operations.",
  },
  {
    question: "Do you offer ongoing IT support?",
    answer:
      "Yes, we provide proactive, ongoing support to maintain performance, reliability, and business continuity.",
  },
  {
    question: "How do you ensure system security within IT operations?",
    answer:
      "We apply layered security controls, monitoring, and compliance practices to protect systems and data.",
  },
];

// Software Stats Section
export const softwareStatsSection = {
  title:
    "We Deliver Reliable Ops & IT Support That Keep Systems Secure, Stable, And Always Available.",
};

// Software Stats
export const softwareStats = {
  image: "/assets/rd-image123.svg", // parent image
  stats: [
    {
      value: "2.5K",
      highlight: "+",
      label: "Systems Monitored",
      description:
        "We manage and optimize IT environments across networks, servers, and cloud platforms—ensuring reliable performance, high availability, and secure operations.",
    },
    {
      value: "92",
      highlight: "%",
      label: "Uptime & Performance Consistency",
      description:
        "We maintain consistent performance across IT systems, improving reliability and minimizing downtime for critical operations.",
    },
    {
      value: "85",
      highlight: "%",
      label: "Operational Efficiency Improvement",
      description:
        "Organizations benefit from improved uptime, lower operational risk, and smoother scalability with our comprehensive approach to IT management.",
    },
  ],
};

// Features
export const features = [
  {
    title: "Operational Reliability",
    text:
      "We bring experienced IT engineers who design and manage scalable, stable, and high-impact infrastructure for consistent business operations.",
    image: "/assets/rd-image135.svg",
  },
  {
    title: "Security-First Approach",
    text:
      "We bring experienced IT engineers who implement security best practices to protect systems, data, and network operations across all environments.",
    image: "/assets/rd-image136.svg",
  },
  {
    title: "Scalable Infrastructure",
    text:
      "We align IT operations with business goals, ensuring infrastructure can grow and adapt seamlessly while maintaining reliability and performance.",
    image: "/assets/rd-image137.svg",
  },
  {
    title: "Transparent Collaboration",
    text:
      "We work closely with clients throughout the process to maintain transparency, clear communication, and operational alignment from start to finish.",
    image: "/assets/rd-image138.svg",
  },
];

// Process Steps
export const processSteps = {
  title: "Our Comprehensive Ops & IT Support Process",
  description:
    "Our IT operations process ensures system stability, performance, and security. From planning and configuration to monitoring and ongoing support, we provide end-to-end management for reliable infrastructure.",
  steps: [
    {
      id: "01",
      title: "Assessment & Planning",
      desc:
        "We assess your infrastructure, operational requirements, and risk areas to define a clear IT operations strategy and monitoring framework.",
    },
    {
      id: "02",
      title: "Implementation & Configuration",
      desc:
        "Monitoring tools, alert systems, access controls, and operational workflows are configured to ensure visibility, control, and reliability from day one.",
    },
    {
      id: "03",
      title: "Monitoring & Optimization",
      desc:
        "We continuously monitor networks, servers, and cloud environments, resolving issues proactively and optimizing performance for efficiency and stability.",
    },
    {
      id: "04",
      title: "Maintenance & Support",
      desc:
        "Regular updates, timely security patches, performance optimization, and comprehensive reporting work together to ensure long-term system health, operational stability, and sustained resilience.",
    },
  ],
};
