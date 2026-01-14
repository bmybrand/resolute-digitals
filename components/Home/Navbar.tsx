"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import {
  IconBook,
  IconBriefcase,
  IconHome,
  IconIdBadge,
  IconUser,
} from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems: any[] = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about", // parent link required for TS
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      dropdown: [
        // {
        //   name: "Careers",
        //   link: "/careers",
        // },
        {
          name: "Know Our Team",
          link: "/ourteam",
        },
      ],
    },
    {
      name: "Services",
      link: "/services",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
      dropdown: [
  {
    title: "AI-Driven Solutions",
    link: "/services/ai-driven",
    items: [
      { name: "AI Automation" },
      { name: "AI Integration" },
      { name: "AI Solutions" },
      { name: "Intelligent Workflows" },
    ],
  },
  {
    title: "Software Development",
    link: "/services/software-development",
    items: [
      { name: "Desktop Apps" },
      { name: "Integrations" },
      { name: "Web Apps" },
      { name: "API Systems" },
    ],
  },
  {
    title: "App Development",
    link: "/services/app-development",
    items: [
      { name: "iOS Apps" },
      { name: "Android Apps" },
      { name: "Cross Platform" },
      { name: "App Testing" },
    ],
  },
  {
    title: "Design & Experience",
    link: "/services/design-experience",
    items: [
      { name: "UI/UX Design" },
      { name: "Brand Identity" },
      { name: "Visual Design" },
      { name: "Brand Strategy" },
    ],
  },
  {
    title: "Digital Marketing",
    link: "/services/digital-marketing",
    items: [
      { name: "SEO Services" },
      { name: "Social Ads" },
      { name: "Paid Campaigns" },
      { name: "Email Marketing" },
    ],
  },
  {
    title: "Ops & IT Support",
    link: "/services/data-operations",
    items: [
      { name: "Network Management" },
      { name: "Server Monitoring" },
      { name: "Cloud Operations" },
      { name: "Patch Management" },
    ],
  },
  {
    title: "REIT Data Research",
    link: "/services/data-research",
    items: [
      { name: "Sustainability" },
      { name: "Green Certifications" },
      { name: "Asset Details" },
      { name: "ESG Data QC" },
    ],
  },
  {
    title: "US Property Taxation",
    link: "/services/property-taxation",
    items: [
      { name: "Reassessments" },
      { name: "Tax Jurisdictions" },
      { name: "Asset Classification" },
      { name: "Tax Rates" },
    ],
  },
]

    },
    {
      name: "Case study",
      link: "/casestudy",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    // {
    //   name: "Our Team",
    //   link: "/ourteam",
    //   icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    // },
    {
      name: "Careers",
      link: "/careers",
      icon: <IconIdBadge className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Blog",
      link: "/blog",
      icon: <IconBook className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    // {
    //   name: "Contact",
    //   link: "/contact",
    //   icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    // },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
