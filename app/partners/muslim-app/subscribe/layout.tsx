"use client";

import { useEffect } from "react";

export default function SubscribeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const applyScrollLock = () => {
      const html = document.documentElement;
      const body = document.body;
      const lock = mediaQuery.matches;

      html.style.overflow = lock ? "hidden" : "";
      body.style.overflow = lock ? "hidden" : "";
      html.style.height = lock ? "100%" : "";
      body.style.height = lock ? "100%" : "";
    };

    applyScrollLock();
    mediaQuery.addEventListener("change", applyScrollLock);

    return () => {
      mediaQuery.removeEventListener("change", applyScrollLock);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.documentElement.style.height = "";
      document.body.style.height = "";
    };
  }, []);

  return (
    <div className="min-h-dvh bg-white lg:fixed lg:inset-0 lg:overflow-hidden">
      {children}
    </div>
  );
}
