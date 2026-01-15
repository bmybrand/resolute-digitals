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
  title: "About U.S. Property Tax Research & Calculation Services",
  description: [
    "U.S. property tax regimes vary significantly by state, county, and municipality, making accurate tax modeling complex for income-producing real estate.",
    "Our service provides standardized research and analysis of local property tax assessment practices, enabling consistent and defensible tax calculations for multifamily assets.",
    "We focus on identifying how properties are classified, assessed, reassessed, and taxed, transforming fragmented jurisdictional rules into structured datasets that can be reliably used for underwriting, portfolio analysis, and institutional research.",
  ],
  image: "/assets/A male designer working on a desktop computer in a modern office, focused on the screen showing a user interface design. (3).svg",
};

// Capabilities Section
export const capabilitiesSection = {
  title: "Our Property Tax Research Capabilities",
  items: [
    {
      title: "Property Tax Framework Research",
      description:
        "We research and document jurisdiction-specific property tax frameworks for income-producing multifamily assets, including how local assessors classify properties and apply assessment methodologies.",
    },
    {
      title: "Assessment & Reassessment Analysis",
      description:
        "We analyze reassessment triggers, reassessment frequency, and average reassessment ratios to support accurate modeling of property tax changes over time.",
    },
    {
      title: "Tax Rate & Calculation Structuring",
      description:
        "We capture and structure applicable millage or tax rates, clearly identifying rate types and documenting the factors used by taxing authorities to calculate assessed value and tax liability.",
    },
    {
      title: "Caps, Discounts & Special Provisions Review",
      description:
        "We identify statutory caps on reassessments, early payment discounts, and other jurisdictional provisions that materially affect property tax obligations.",
    },
    {
      title: "Standardized, Calculation-Ready Data Delivery",
      description:
        "We deliver structured, consistently formatted datasets designed for financial modeling, underwriting, and institutional real estate analysis.",
    },
  ],
};

// FAQs
export const faqs: FaqItem[] = [
  {
    question: "What property types does this service cover?",
    answer:
      "Our service covers multifamily assets with five or more units, ensuring accurate tax modeling across diverse property types and jurisdictions.",
  },
  {
    question: "How often is the tax research updated?",
    answer:
      "We regularly update our datasets to reflect the latest local rules, reassessment cycles, and tax rate changes for accurate, up-to-date analysis.",
  },
  {
    question: "Do you distinguish between millage rates and tax rates?",
    answer:
      "All datasets clearly indicate whether the reported rate is a millage rate or a direct tax rate and provide guidance on how each should be correctly applied in calculations and assessments.",
  },
  {
    question: "Can this data be used for financial modeling?",
    answer:
      "Yes, the structured datasets are designed for integration into underwriting models, portfolio analysis, and institutional financial research.",
  },
  {
    question: "Is this service available nationwide?",
    answer:
      "Our research covers all U.S. states, counties, and municipalities, providing nationwide coverage for multifamily property tax analysis.",
  },
  {
    question: "Is historical tax behavior captured in your research?",
    answer:
      "Yes, historical assessment data, reassessment cycles, and changes in tax rules are documented to provide trend insights and support accurate forecasting.",
  },
];

// Software Stats Section
export const softwareStatsSection = {
  title:
    "We Deliver U.S. Property Tax Research That Improves Underwriting Accuracy And Strengthens Investment Decisions.",
};

// Software Stats
export const softwareStats = {
  image: "/assets/ax-sd-st-thumb.webp (2).svg",
  stats: [
    {
      value: "2.5K",
      highlight: "+",
      label: "Jurisdictions & Tax Rules Structured",
      description:
        "We standardize property tax assessments, rates, and reassessment rules across U.S. jurisdictions—turning complex local regulations into consistent, calculation-ready datasets.",
    },
    {
      value: "92",
      highlight: "%",
      label: "Modeling Confidence Improvement",
      description:
        "Clients gain clear insight into taxable value, reassessment triggers, and applicable rates—enabling more accurate tax assumptions and fewer errors.",
    },
    {
      value: "85",
      highlight: "%",
      label: "Reduced Tax Estimate Variance",
      description:
        "Analysts see fewer pricing surprises and more stable forecasts using structured inputs for caps, discounts, cycles, and jurisdiction-specific factors.",
    },
  ],
};

// Features
export const features = [
  {
    title: "Jurisdiction-Level Accuracy",
    text:
      "We reflect local assessor practices and jurisdiction-specific rules to ensure property tax estimates mirror real-world U.S. taxation.",
    image: "/assets/Group 1597884018.svg",
  },
  {
    title: "Assessment Insights",
    text:
      "We document how properties are classified, assessed, and reassessed—capturing triggers, cycles, and valuation methodologies.",
    image: "/assets/Group 1597884018.svg",
  },
  {
    title: "Tax Calculation Models",
    text:
      "All tax rates, millage structures, and formulas are standardized into clean datasets ready for financial and portfolio modeling.",
    image: "/assets/Group 1597884043.svg",
  },
  {
    title: "Institutional Research",
    text:
      "Our research emphasizes traceability, consistency, and clarity—supporting institutional analysis and long-term investment decisions.",
    image: "/assets/Vector.svg",
  },
];

// Process Steps
export const processSteps = {
  title: "Our Property Tax Research Process",
  description:
    "From data collection to structured outputs, we provide end-to-end property tax research and analysis for multifamily assets, enabling accurate estimation and reliable decision-making.",
  steps: [
    {
      id: "01",
      title: "Jurisdiction & Data Source Identification",
      desc:
        "We identify the applicable taxing authority and verify the latest sources for tax rates, assessment methods, and reassessment rules, with each dataset time-stamped for accuracy.",
    },
    {
      id: "02",
      title: "Property Class & Assessment",
      desc:
        "We document how local tax assessors classify income-producing multifamily properties, including category definitions and assessment frameworks used to determine taxable value.",
    },
    {
      id: "03",
      title: "Reassessment Triggers & Cycles",
      desc:
        "We research what events trigger reassessment, such as property sales or major renovations, and determine reassessment frequency, including annual, biennial, or multi-year cycles.",
    },
    {
      id: "04",
      title: "Tax Rate & Calculations",
      desc:
        "We capture applicable millage rates or tax rates, clearly specifying the rate type and documenting the factors used by the jurisdiction to calculate assessed value and tax liability.",
    },
  ],
};

// Main Section
export const mainSection = {
  title: "US Property Taxation",
  subtitle:
    "We deliver structured, jurisdiction-specific property tax research to support accurate tax estimation, financial modeling, and institutional real estate analysis across the United States.",
};
