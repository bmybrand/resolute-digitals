"use client";

import { useEffect, useState } from "react";

type GeoState = {
  countryCode: string | null;
  loading: boolean;
};

const GEO_ENDPOINT = "/api/geo.php";

export const useGeoCountry = (): GeoState => {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let canceled = false;

    const loadGeo = async () => {
      try {
        // ✅ cache-busting to avoid null being cached by CDN/browser
        const response = await fetch(
          `${GEO_ENDPOINT}?ts=${Date.now()}`,
          { cache: "no-store" }
        );

        const data = await response.json();

        if (canceled) return;

        // ✅ normalize country code (US, PK, etc.)
        const code =
          typeof data?.country_code === "string"
            ? data.country_code.toUpperCase()
            : null;

        setCountryCode(code);
      } catch (error) {
        if (!canceled) {
          setCountryCode(null);
        }
      } finally {
        if (!canceled) {
          setLoading(false);
        }
      }
    };

    loadGeo();

    return () => {
      canceled = true;
    };
  }, []);

  return { countryCode, loading };
};
