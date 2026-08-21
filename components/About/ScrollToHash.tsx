"use client";

import { useEffect } from "react";

export default function ScrollToHash() {
  useEffect(() => {
    if (window.location.hash !== "#partners") return;

    const jumpToPartners = () => {
      const target = document.getElementById("partners");
      if (!target) return;

      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, target.offsetTop + 80);
      root.style.scrollBehavior = previousBehavior;
    };

    jumpToPartners();
    const retry = window.setTimeout(jumpToPartners, 250);

    return () => window.clearTimeout(retry);
  }, []);

  return null;
}
