"use client";

import { useEffect } from "react";

export default function PartnersPage() {
  useEffect(() => {
    window.location.replace("/about/#partners");
  }, []);

  return <main className="min-h-screen bg-[#000A21]" aria-hidden="true" />;
}
