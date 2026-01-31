"use client";

import OurTeam from "@/components/OurTeam/OurTeam";
import { useGeoCountry } from "@/utils/useGeoCountry";

const OurTeamPage = () => {
  const { countryCode, loading } = useGeoCountry();

  if (loading) {
    return null;
  }

  if (countryCode === "US" || (countryCode ?? "").toUpperCase() === "AE") {
    return (
      <div className="bg-[#000A21] text-white min-h-screen flex items-center justify-center p-8">
        This page is not available in your region.
      </div>
    );
  }

  return (
    <div>
      <OurTeam />
    </div>
  );
};

export default OurTeamPage;
