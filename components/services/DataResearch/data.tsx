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
    "/assets/rd-image141.svg",
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
    image: "/assets/rd-image142.svg",
  },
  {
    title: "Framework Alignment",
    text:
      "We align REIT sustainability data with major ESG frameworks and reporting standards, improving comparability across sectors, portfolios, and reporting years.",
    image: "/assets/rd-image143.svg",
  },
  {
    title: "Audit-Ready Traceability",
    text:
      "Each metric stays traceable to its original disclosure source, supporting defensible outputs, reviewability, and institutional confidence.",
    image: "/assets/rd-image144.svg",
  },
  {
    title: "Quality Control Process",
    text:
      "We apply structured QC checks for coverage, boundaries, and year-over-year changes to ensure datasets remain consistent, complete, and reliable.",
    image: "/assets/rd-image145.svg",
  },
];

// Software Stats Section Meta
export const softwareStatsSection = {
  title:
    "We Deliver Institutional-Grade REIT ESG Data That Enables Benchmarking, Comparability, and Defensible Insights.",
};

// Software Stats
export const softwareStats = {
  image: "/assets/Group 1597884108.png",
  imageAlt: "Analyst reviewing data charts on a tablet",
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

// Featured institutional projects (from Resolute portfolio PDF)
export const projectHighlights = [
  {
    id: "walker-dunlop",
    name: "Walker & Dunlop",
    number: "01",
    focus: "CRE borrower outreach & U.S. property tax research",
    logo: "/assets/data-research/walker-dunlop.png",
    details: [
      "For Walker & Dunlop, we conducted targeted research and outreach to identify qualified commercial real estate borrowers. Working from a list of prospective clients, we performed skip tracing to locate and verify accurate contact information, primarily for large real estate owners with a focus on multifamily property owners. We then contacted these prospects via call, gathered relevant information about their properties and financing needs, assessed their eligibility for loan refinancing or financing opportunities based on Walker & Dunlop's criteria, and referred qualified clients to Walker & Dunlop's lending team for the next stage of the financing process.",
      "For Walker & Dunlop, we also conducted detailed U.S. property tax research across Metropolitan Statistical Areas (MSAs), with a focus on multifamily properties containing five or more rental units. Our research covered how local tax authorities classify these properties, when tax rates were last updated, what events trigger reassessment, how frequently reassessments take place, and the typical reassessment ratio. We also collected the latest millage or tax rates, identified the factors used to calculate reassessed values, and documented any early-payment discounts or legal limits on property tax increases. This research helped Walker & Dunlop better understand local tax systems, estimate property tax obligations, and evaluate the financial impact of owning or financing multifamily real estate in different U.S. markets.",
    ],
  },
  {
    id: "ftse-russell",
    name: "FTSE Russell",
    number: "02",
    focus: "REIT property-level data for index classification",
    logo: "/assets/data-research/ftse-russell.png",
    details: [
      "For FTSE Russell, we collect, verify, and structure detailed property-level data covering Real Estate Investment Trusts (REITs) across multiple markets. This includes gathering information such as property locations, ownership details, building characteristics, occupancy rates, property usage, floor area, and sustainability certifications from publicly available reports and regulatory filings. The data is delivered through Walker & Dunlop, which serves as the intermediary by processing and validating it before it is used by FTSE Russell to support the classification of REITs and the publication of its globally recognized real estate indices.",
    ],
  },
  {
    id: "moodys",
    name: "Moody's",
    number: "03",
    focus: "Commercial REIT asset data for risk analytics",
    logo: "/assets/data-research/moodys.png",
    details: [
      "For Moody's, we collect and organize comprehensive property-level data covering commercial real estate assets owned by Real Estate Investment Trusts (REITs). The information includes property characteristics, ownership details, occupancy, building specifications, usage, and other key asset metrics sourced from public disclosures and regulatory filings. The data is provided through Walker & Dunlop, which acts as the intermediary by validating and standardizing the dataset before it is used by Moody's to strengthen its commercial real estate analytics, portfolio assessments, and risk evaluation for investors and financial institutions.",
    ],
  },
  {
    id: "nareit",
    name: "Nareit",
    number: "04",
    focus: "ESG data for Annual Sustainability Report",
    logo: "/assets/data-research/nareit.png",
    details: [
      "For Nareit, we collect, verify, and structure comprehensive Environmental, Social, and Governance (ESG) data covering publicly listed Real Estate Investment Trusts (REITs). Our work involves extracting and validating sustainability information from annual sustainability reports, 10-K filings, proxy statements, CDP disclosures, and other public sources. The dataset includes environmental performance metrics such as energy, water, greenhouse gas emissions, renewable energy, and green building certifications; climate risk and resilience indicators; as well as social and governance metrics covering tenant engagement, diversity, board composition, ESG oversight, sustainability targets, and responsible investment practices. Nareit uses this standardized dataset to publish its Annual Sustainability Report, providing the real estate industry, investors, and other stakeholders with a comprehensive benchmark of sustainability performance and ESG trends across publicly traded REITs.",
    ],
  },
  {
    id: "aperio",
    name: "aperio",
    number: "05",
    focus: "Property & green portfolio data for ~110 REITs",
    logo: "/assets/data-research/aperio.png",
    details: [
      "For Aperio, we collect, verify, and organize detailed property-level data for approximately 110 Real Estate Investment Trusts (REITs). Our research covers property names and locations, ownership percentages, building counts, property size, number of units, asset type, and other key building characteristics. We also collect information on the total area of each REIT's assets, the area covered by green-certified properties, and the percentage of the portfolio considered green. By converting information from REIT reports and public disclosures into a consistent and structured dataset, we help Aperio assess property portfolios, compare companies, and evaluate their exposure to environmentally sustainable real estate assets.",
    ],
  },
];

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
