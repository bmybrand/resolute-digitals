import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const muslimAppApiUrl =
  process.env.NEXT_PUBLIC_MUSLIM_APP_API_URL?.trim() ||
  "https://muslim-app-backend-dev--muslimapp-prod.us-east4.hosted.app";

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/muslim-app-subscription.php",
        has: [{ type: "query", key: "action", value: "catalog" }],
        destination: `${muslimAppApiUrl}/subscription-requests/catalog`,
      },
      {
        source: "/api/muslim-app-subscription.php",
        has: [{ type: "query", key: "action", value: "ewallet" }],
        destination: `${muslimAppApiUrl}/swich/ewallet`,
      },
    ];
  },
};

export default nextConfig;
