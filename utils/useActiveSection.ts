"use client";

import { useEffect, useMemo, useState } from "react";

export function useActiveSection(sectionIds: string[], offset = 180) {
  const sectionKey = sectionIds.join("|");
  const ids = useMemo(() => sectionKey.split("|").filter(Boolean), [sectionKey]);
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      const marker = window.scrollY + offset;
      let currentId = ids[0] ?? "";

      for (const id of ids) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) currentId = id;
      }

      setActiveId(currentId);
    };

    const handleViewportChange = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
    };
  }, [ids, offset]);

  return activeId;
}
