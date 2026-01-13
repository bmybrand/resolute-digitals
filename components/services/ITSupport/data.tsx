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

// Section Page Title and Subtitle
export const mainSection = {
  title:
    "Ops & IT Support",
  subtitle:
    "We deliver proactive IT Operations services that ensure system stability, performance, and security across your digital infrastructure. From network reliability to cloud operations, our approach keeps your business systems running smoothly, securely, and without disruption.",
};
// Section Meta About Service
export const AboutSection = {
  title: "About Ops & IT Support Service",
  description: [
    "Modern businesses rely on always-on infrastructure. Our IT Operations services are designed to monitor, manage, and optimize critical systems while minimizing downtime and operational risk. We combine automation, real-time monitoring, and best-practice frameworks to maintain performance, security, and scalability across on-premise and cloud environments.",
  ],
  image: "/assets/A male designer working on a desktop computer in a modern office, focused on the screen showing a user interface design. (4).svg",
};
// Section Meta for Core Services
export const capabilities: Capability[] = [
  {
    title: "Network Management",
    description:
      "We design, monitor, and manage secure network environments to ensure consistent connectivity, optimized traffic flow, and strong protection against unauthorized access across all business systems. Our approach improves network stability, reduces downtime, and supports smooth day-to-day operations for teams and customers.",
  },
  {
    title: "Server Monitoring",
    description:
      "We provide continuous server monitoring to track performance, availability, and overall system health, enabling early detection of issues and rapid response before they impact operations. From resource usage to uptime and alerts, we help keep your servers stable, secure, and running efficiently.",
  },
  {
    title: "Cloud Operations",
    description:
      "We manage cloud infrastructure across public and hybrid environments, ensuring reliability, scalability, cost optimization, and secure operation aligned with your business workloads. We monitor cloud performance, optimize resources, and maintain best practices so your systems stay fast, resilient, and future-ready.",
  },
  {
    title: "Patch Management",
    description:
      "We implement structured patching processes to keep systems updated, secure, and compliant—reducing vulnerabilities while maintaining stability and uptime. Updates are planned, tested, and deployed carefully to minimize disruption and ensure long-term platform reliability.",
  },
];
// Section Meta for Process Title
// Section Meta for Process Para
// Section Meta for Process Steps
export const processSteps = [
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
    title: "Maintenance& Support",
    desc:
      "Regular updates, timely security patches, performance optimization, and comprehensive reporting work together to ensure long-term system health, operational stability, and sustained resilience.",
  },
];
// Section Meta for Features
export const features = [
  {
    title: "Operational Reliability",
    text:
      "We bring experienced designers who craft thoughtful, scalable, and high-impact digital experiences that feel modern, consistent, and easy to use.",
    image: "/assets/Group 1597884018 (2).svg",
  },
  {
    title: "Security-First Approach",
    text:
      "We bring experienced designers who craft thoughtful, scalable, and high-impact digital experiences that feel modern, consistent, and easy to use.",
    image: "/assets/Group 1597884020 (2).svg",
  },
  {
    title: "Scalable Infrastructure",
    text:
      "We align design with brand goals and business outcomes, ensuring every visual and experience choice supports growth and measurable impact.",
    image: "/assets/Group 1597884048.svg",
  },
  {
    title: "Transparent Collaboration",
    text:
      "We work closely with clients throughout the process to maintain transparency, clear communication, & creative alignment from start to finish.",
    image: "/assets/Vector (1).svg",
  },
];
// Section Meta for Software Stats
export const softwareStatsSection = {
  title:
    "We Deliver Reliable Ops & IT Support That Keep Systems Secure, Stable, And Always Available.",
};
// Software Stats
export const softwareStats: SoftwareStat[] = [
  {
    value: "2.5K",
    highlight: "+",
    label: "REIT Disclosure Tables Processed",
    description:
      "We manage and optimize IT environments across networks, servers, and cloud platforms—ensuring reliable performance, high availability, and secure operations.",
  },
  {
    value: "92",
    highlight: "%",
    label: "QC Pass Consistency Rate",
    description:
      "We manage and optimize IT environments across networks, servers, and cloud platforms—ensuring reliable performance, high availability, and secure operations.",
  },
  {
    value: "85",
    highlight: "%",
    label: "QC Pass Consistency Rate",
    description:
      "Organizations benefit from significantly improved uptime, lower operational risk, and smoother scalability with our comprehensive approach to network, server, and cloud management.",
  },
];


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
    question:
      "Can you support cloud platforms?",
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