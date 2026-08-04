export type BlogContentBlock = {
  type: "richtext" | "heading" | "paragraph" | "points" | "image" | "html";
  html?: string;
  text?: string;
  level?: 2 | 3;
  items?: string[];
  image?: string;
  alt?: string;
  columns?: number;
  rowStart?: boolean;
};

export type BlogSection = {
  id: string;
  title: string;
  hideTitle?: boolean;
  blocks: BlogContentBlock[];
};

export type BlogArticle = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedOn: string;
  updatedOn: string;
  readTime: string;
  author: string;
  heroImage: string;
  accent: string;
  displayNumber: string;
  sortOrder: number;
  tags: string[];
  highlights: string[];
  introduction: string[];
  sections: BlogSection[];
  conclusion: string;
  closingImages: Array<{ src: string; alt: string; columns?: number; rowStart?: boolean }>;
  faqs: Array<{ question: string; answer: string }>;
};

export type BlogApiRow = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  published_on: string;
  updated_on?: string | null;
  read_time: string;
  author: string;
  hero_image: string;
  accent: string;
  display_number: string;
  sort_order: number;
  tags?: string[];
  highlights?: string[];
  introduction?: string[];
  sections?: BlogSection[];
  conclusion?: string;
  closing_images?: Array<{ src: string; alt: string; columns?: number; rowStart?: boolean }>;
  faqs?: Array<{ question: string; answer: string }>;
};

export const blogsApiUrl =
  process.env.NEXT_PUBLIC_BLOGS_API_URL?.trim() ||
  "https://hrm.resolutedigitalspk.com/api/blogs";

export const sampleBlog: BlogArticle = {
  id: 0,
  slug: "building-digital-products-that-scale",
  title: "Building Digital Products That Stay Ready for What Comes Next",
  excerpt: "A practical look at the decisions that make digital products clearer, faster, and easier to scale.",
  category: "Digital Strategy",
  publishedOn: "2026-08-04",
  updatedOn: "2026-08-04",
  readTime: "6 min read",
  author: "Resolute Digitals Editorial Team",
  heroImage: "/assets/rd-image081.svg",
  accent: "#3D90F5",
  displayNumber: "01",
  sortOrder: 1,
  tags: ["Digital Strategy", "Product Design", "Technology"],
  highlights: [
    "Clarity should guide every product decision.",
    "Reusable systems make growth easier to manage.",
    "Performance and accessibility belong in the foundation.",
  ],
  introduction: [
    "Strong digital products are built to solve today’s needs without creating tomorrow’s limitations. That requires a clear strategy, a flexible system, and consistent attention to the people using it.",
  ],
  sections: [
    {
      id: "start-with-clarity",
      title: "Start with clarity, not complexity",
      blocks: [
        { type: "richtext", html: "<p>Before choosing tools or features, define the customer problem, the business outcome, and the simplest useful journey between them.</p><p>Clear priorities reduce rework and help every discipline make stronger decisions.</p>" },
      ],
    },
    {
      id: "design-for-change",
      title: "Design the system for change",
      blocks: [
        { type: "richtext", html: "<p>Reusable components, thoughtful content structures, and dependable APIs allow a product to evolve without rebuilding every experience from the beginning.</p>" },
        { type: "points", items: ["Create reusable interface patterns", "Keep content separate from presentation", "Measure real customer journeys"] },
      ],
    },
  ],
  conclusion: "The best digital platforms do more than launch successfully. They give teams a stable foundation for learning, improving, and growing with confidence.",
  closingImages: [],
  faqs: [
    { question: "What makes a digital product scalable?", answer: "A scalable product combines clear architecture, reusable design patterns, measurable journeys, and operational ownership." },
  ],
};

export function normalizeBlog(row: BlogApiRow): BlogArticle {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    publishedOn: row.published_on,
    updatedOn: row.updated_on || row.published_on,
    readTime: row.read_time,
    author: row.author,
    heroImage: row.hero_image,
    accent: row.accent || "#3D90F5",
    displayNumber: row.display_number || "",
    sortOrder: Number(row.sort_order) || 0,
    tags: Array.isArray(row.tags) ? row.tags : [],
    highlights: Array.isArray(row.highlights) ? row.highlights : [],
    introduction: Array.isArray(row.introduction) ? row.introduction : [],
    sections: Array.isArray(row.sections) ? row.sections : [],
    conclusion: row.conclusion || "",
    closingImages: Array.isArray(row.closing_images) ? row.closing_images : [],
    faqs: Array.isArray(row.faqs) ? row.faqs : [],
  };
}

export async function getPublishedBlogs(): Promise<BlogArticle[]> {
  try {
    const response = await fetch(blogsApiUrl, { headers: { Accept: "application/json" } });
    if (!response.ok) return [sampleBlog];
    const payload = (await response.json()) as { data?: BlogApiRow[] };
    return Array.isArray(payload.data) ? payload.data.map(normalizeBlog) : [];
  } catch {
    return [sampleBlog];
  }
}

export function formatBlogDate(value: string) {
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(date);
}
