"use client";

import { useEffect, useState } from "react";

type GeoState = {
  countryCode: string | null;
  loading: boolean;
};

const GEO_ENDPOINT = "/api/geo.php";
const GEO_CACHE_KEY = "rd_geo_country";

function getCachedCountry(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const cached = sessionStorage.getItem(GEO_CACHE_KEY);
    return cached && /^[A-Z]{2}$/.test(cached) ? cached : null;
  } catch {
    return null;
  }
}

function setCachedCountry(code: string | null) {
  if (typeof window === "undefined") return;
  try {
    if (code) sessionStorage.setItem(GEO_CACHE_KEY, code);
    else sessionStorage.removeItem(GEO_CACHE_KEY);
  } catch {
    /* ignore */
  }
}

export const useGeoCountry = (): GeoState => {
  const [countryCode, setCountryCode] = useState<string | null>(getCachedCountry);
  const [loading, setLoading] = useState(() => !getCachedCountry());

  useEffect(() => {
    let canceled = false;

    const loadGeo = async () => {
      try {
        const response = await fetch(
          `${GEO_ENDPOINT}?ts=${Date.now()}`,
          { cache: "no-store" }
        );

        const data = await response.json();

        if (canceled) return;

        const code =
          typeof data?.country_code === "string"
            ? data.country_code.toUpperCase()
            : null;

        setCountryCode(code);
        setCachedCountry(code);
      } catch (error) {
        if (!canceled) {
          setCountryCode(null);
          setCachedCountry(null);
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
