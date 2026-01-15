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

// Main Section
export const mainSection = {
  title: "REIT Data Research",
  subtitle:
    "We deliver high-quality, standardized sustainability and ESG data for REITs—transforming complex disclosures into reliable, comparable datasets used by Institutional Data Consumers.",
};

// About Section
export const AboutSection = {
  title: "Sustainability & ESG Data Services for REITs",
  description: [
    "With deep expertise in commercial real estate, ESG certifications, and tax frameworks, we ensure reporting meets global standards. From property-level details to portfolio-wide insights, our research empowers REITs, investors, and institutions with accurate, validated intelligence",
    "Our approach delivers consistency, comparability, and actionable insights aligned with ESG frameworks and sustainability goals.",
  ],
  image:
    "/assets/A male designer working on a desktop computer in a modern office, focused on the screen showing a user interface design. (5).svg",
};

// Capabilities Section
export const capabilitiesSection = {
  title: "Our REIT ESG Data Capabilities",
  items: [
    {
      title: "Property & Asset-Level Data Structuring",
      description:
        "We deliver standardized property-level datasets that define asset identity, location, ownership, physical characteristics, use classification, and building certifications. Data is structured to support accurate portfolio aggregation and investor-grade analysis, enabling consistent use across benchmarking, sustainability reporting, and institutional research.",
    },
    {
      title: "ESG & Sustainability Data Collection",
      description:
        "We collect comprehensive ESG, sustainability, and climate-related disclosures from REITs, including Sustainability Reports (and quantitative tables), 10-K and Proxy ESG disclosures, and submissions aligned with CDP, DJSI, ISSB, TCFD, SASB, and GRI frameworks. Data is captured in a structured format to support downstream validation and aggregation.",
    },
    {
      title: "Data Standardization & Metric Normalization",
      description:
        "We standardize reported ESG metrics into consistent definitions, units, and reporting boundaries. This includes normalizing environmental intensity metrics (energy and carbon per square meter), aligning portfolio coverage disclosures, and ensuring comparability across REITs, property sectors, and reporting periods.",
    },
    {
      title: "Portfolio Coverage Validation & Quality Control",
      description:
        "We validate portfolio-level completeness and consistency by assessing asset coverage, floor-area coverage, and disclosure boundaries. Our QC process supports year-over-year comparisons by identifying changes driven by acquisitions, dispositions, certification updates, or methodology shifts, ensuring reported sustainability trends are accurate and defensible.",
    },
    {
      title: "Institutional-Grade Data Preparation",
      description:
        "We prepare structured, QC-ready sustainability datasets designed for institutional benchmarking and risk analytics. Deliverables include standardized asset and square-meter totals, green asset and green area percentages, carbon and energy intensity metrics, and year-over-year delta analysis—supporting consistent, comparable, and defensible sustainability insights.",
    },
  ],
};

// Process Steps (normalized)
export const processSteps = {
  title: "Our Comprehensive ESG Data Research Process",
  description:
    "Our structured ESG data research process ensures accuracy, consistency, and institutional-grade reliability across REIT sustainability disclosures.",
  steps: [
    {
      id: "01",
      title: "Source Identification & Data Capture",
      desc:
        "We identify relevant disclosure sources and extract ESG and sustainability metrics using standardized templates and consistent definitions.",
    },
    {
      id: "02",
      title: "Validation & Coverage Review",
      desc:
        "All data is reviewed for completeness, logical consistency, and alignment across multiple disclosure sources.",
    },
    {
      id: "03",
      title: "Standardization & Structuring",
      desc:
        "We standardize metrics, normalize units, and structure datasets to support benchmarking, analytics, and institutional comparability.",
    },
    {
      id: "04",
      title: "QC-Ready Output Delivery",
      desc:
        "We deliver clean, structured datasets ready for benchmarking, analytics, regulatory use, and downstream integration.",
    },
  ],
};

// Features
export const features = [
  {
    title: "ESG Data Accuracy",
    text:
      "Our validation workflows reduce errors and inconsistencies by cross-checking disclosures and applying standardized definitions across every metric.",
    image: "/assets/Group 1597884018 (3).svg",
  },
  {
    title: "Framework Alignment",
    text:
      "We align REIT sustainability data with major ESG frameworks and reporting standards, improving comparability across sectors, portfolios, and reporting years.",
    image: "/assets/Group 1597884020.svg",
  },
  {
    title: "Audit-Ready Traceability",
    text:
      "Each metric stays traceable to its original disclosure source, supporting defensible outputs, reviewability, and institutional confidence.",
    image: "/assets/Group 1597884039.svg",
  },
  {
    title: "Quality Control Process",
    text:
      "We apply structured QC checks for coverage, boundaries, and year-over-year changes to ensure datasets remain consistent, complete, and reliable.",
    image: "/assets/Vector (2).svg",
  },
];

// Software Stats Section Meta
export const softwareStatsSection = {
  title:
    "We Deliver Institutional-Grade REIT ESG Data That Enables Benchmarking, Comparability, and Defensible Insights.",
};

// Software Stats
export const softwareStats = {
  image: "/assets/ax-sd-st-thumb.webp (2).svg", // parent image
  stats: [
    {
      value: "360",
      highlight: "+",
      label: "REIT Disclosures Processed Annually",
      description:
        "We process sustainability reports, 10-K ESG disclosures, and quantitative ESG tables at scale—converting complex REIT reporting into structured datasets ready for institutional use.",
    },
    {
      value: "5,000",
      highlight: "+",
      label: "ESG and Climate Metrics Standardized",
      description:
        "Our workflows normalize thousands of environmental, social, governance, and climate metrics by aligning definitions, units, and portfolio coverage across reporting periods.",
    },
    {
      value: "95",
      highlight: "%",
      label: "QC Pass Consistency Rate",
      description:
        "Our standardized workflows improve comparability across REITs by aligning metrics, units, and coverage boundaries across reporting periods and ESG frameworks.",
    },
  ],
};

// FAQs
export const faqs: FaqItem[] = [
  {
    question: "What type of companies do you support?",
    answer:
      "We support public and private companies across sectors, sizes, and geographies, including complex multinational portfolios.",
  },
  {
    question: "Do you score or rate ESG performance?",
    answer:
      "No scores or ratings—only transparent, auditable data to avoid subjective weighting or hidden assumptions.",
  },
  {
    question: "How do you handle partial portfolio coverage?",
    answer:
      "We capture coverage percentages and clearly flag them across datasets to prevent overstated metrics, ensuring accurate interpretation, consistent comparability, and defensible reporting aligned with portfolio boundaries and disclosure limits.",
  },
  {
    question: "Can you support multiple reporting frameworks?",
    answer:
      "Yes, we align data across multiple global frameworks while preserving traceability and framework-specific integrity.",
  },
  {
    question: "Is your data suitable for regulatory or index use?",
    answer:
      "Yes, our data is structured, traceable, and compliant for regulatory submissions and index construction.",
  },
  {
    question: "What disclosure sources do you use for data extraction?",
    answer:
      "We extract data from audited reports, regulatory filings, sustainability disclosures, and verified public sources.",
  },
];
