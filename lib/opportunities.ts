export type Opportunity = {
  id: number;
  title: string;
  slug: string;
  job_code: string | null;
  department: string;
  location: string;
  employment_type: string;
  workplace_type: string;
  openings: number;
  summary: string | null;
  application_deadline: string | null;
  posted_on: string | null;
  detail_url: string;
  application_destination: string | null;
  description?: string | null;
  responsibilities?: string[] | string | null;
  qualifications?: string[] | string | null;
  requirements?: string[] | string | null;
  benefits?: string[] | string | null;
};

export const careersApiUrl =
  process.env.NEXT_PUBLIC_CAREERS_API_URL?.trim() ||
  "https://hrm.resolutedigitalspk.com/api/opportunities";

export async function getPublishedOpportunities(): Promise<Opportunity[]> {
  try {
    const response = await fetch(careersApiUrl, {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) return [];

    const payload = (await response.json()) as { data?: Opportunity[] };
    return Array.isArray(payload.data) ? payload.data : [];
  } catch {
    return [];
  }
}
