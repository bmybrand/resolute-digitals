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
  title: "About AI-Driven Solutions Service",
  description: [
    "AI-driven solutions are transforming how modern businesses operate, analyze data, and deliver value. We help organizations adopt artificial intelligence in practical, scalable ways—turning complex data and processes into intelligent, automated systems.",
    "Our AI solutions are designed to integrate seamlessly with existing infrastructure while delivering measurable improvements in productivity, accuracy, and performance. From automation to advanced AI integrations, we focus on real business outcomes.",
   ],
  image: "/assets/A male designer working on a desktop computer in a modern office, focused on the screen showing a user interface design. (1).svg", // Hero / front image
};


export const capabilitiesSection = {
  title: "Our AI Capabilities",
  items: [
    {
      title: "AI Automation",
      description:
        "We design AI-powered automation systems that reduce manual effort, streamline operations, and improve efficiency. Solutions are structured to automate repetitive tasks, optimize workflows, and deliver consistent, reliable results at scale.",
    },
    {
      title: "AI Integration",
      description:
        "We integrate AI capabilities into existing applications, platforms, and systems through secure and scalable architectures. Integrations are designed to enhance functionality, improve intelligence, and ensure seamless interoperability across tools and services.",
    },
    {
      title: "Intelligent Workflows",
      description:
        "We build intelligent workflows that adapt, learn, and optimize processes in real time. These workflows combine data, automation, and AI logic to support smarter decision-making and improved operational performance.",
    },
    {
      title: "AI Solutions",
      description:
        "We develop custom AI solutions tailored to specific business challenges, including predictive analytics, recommendation systems, and intelligent data processing. Each solution is engineered for accuracy, scalability, and long-term adaptability.",
    },
  ],
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
    "We Build AI-Driven Solutions That Automate Work, Improve Decisions, And Scale Business Performance.",
};

// Software Stats with parent image

export const softwareStats  = {
  image: "/assets/ax-sd-st-thumb.webp (2).svg", // parent image
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
  ],
};



export const features = [
  {
    title: "User-Focused Development",
    text:
      "Every feature is crafted for usability—putting user needs first to ensure workflows stay intuitive, efficient, and easy to navigate.",
    image: "/assets/Group 1597883776.svg",
  },
  {
    title: "Collaborative Workflow",
    text:
      "We collaborate with you throughout development, refining the product with your feedback to match your goals and vision.",
    image: "/assets/Mental_Focus.svg",
  },
  {
    title: "Expert Engineering Team",
    text:
      "We bring together skilled engineers who solve complex challenges and build reliable, scalable, future-ready solutions.",
    image: "/assets/Vector (6).svg",
  },
  {
    title: "Data-Driven Decisions",
    text:
      "Our process is driven by insights and performance data, creating systems optimized for stability, speed, and long-term growth.",
    image: "/assets/Vector (6).svg",
  },
];
// Section Meta
export const mainSection = {
  title:
    "AI-Driven Solutions",
  subtitle:
    "We design and implement intelligent AI solutions that automate processes, enhance decision-making, and drive operational efficiency. From AI automation to intelligent workflows, our solutions help businesses scale smarter, faster, and with confidence.",
};

export const processSteps = {
  title: "Our Comprehensive AI Implementation Process",
  description:
    "Software development drives how modern businesses operate and grow. We engineer secure, scalable, and high-performance applications built to support evolving needs. Whether you're launching a new platform, upgrading an existing system, or integrating complex technologies, our development team delivers solutions designed for reliability, efficiency, and long-term success.",
  steps: [
  {
    id: "01",
    title: "Discovery & Strategy",
    desc:
      "We assess business goals, data readiness, and workflows to identify AI opportunities and define a clear strategy with an implementation roadmap.",
  },
  {
    id: "02",
    title: "Architecture & Model Design",
    desc:
      "We design the AI system’s architecture and models, selecting the right frameworks, algorithms, and data pipelines to ensure scalable, reliable, and efficient solutions.",
  },
  {
    id: "03",
    title: "Development & Integration",
    desc:
      "We develop AI systems and integrate them into existing applications and workflows using reliable frameworks for smooth, scalable operation.",
  },
  {
    id: "04",
    title: "Testing & Optimization",
    desc:
      "We validate accuracy, performance, and system reliability, then optimize the solution to ensure stable deployment, consistent results, and long-term success.",
},
  ],
};
