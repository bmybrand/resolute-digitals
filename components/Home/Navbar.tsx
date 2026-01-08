"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconBook, IconBriefcase, IconFolder, IconHome, IconIdBadge, IconMessage, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Services",
    link: "/services",
    icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
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
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
