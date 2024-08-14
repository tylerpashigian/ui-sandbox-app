"use client";

import { useState } from "react";
import Link from "next/link";

import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

const TABS = ["Home", "About", "Contact"];

export default function TabsDemo() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const tabClass = cva(
    "relative cursor-pointer px-2 py-1 text-sm outline-none transition-colors",
    {
      variants: {
        active: {
          true: "text-gray-800",
          false: "text-gray-700",
        },
      },
    },
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] py-2 text-white">
      <h1 className="mb-8 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        Tabs Demo
      </h1>
      <div className="flex">
        {TABS.map((tab) => (
          <motion.li
            layout
            className={tabClass({ active: activeTab === tab })}
            tabIndex={0}
            key={tab}
            onFocus={() => setActiveTab(tab)}
            onMouseOver={() => setActiveTab(tab)}
            onMouseLeave={() => setActiveTab(null)}
          >
            {activeTab === tab ? (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 rounded-lg bg-white"
              />
            ) : null}
            <span
              className={`relative text-inherit ${activeTab === tab ? "text-black" : "text-white"}`}
            >
              {tab}
            </span>
          </motion.li>
        ))}
      </div>
      <Link
        href="/"
        className="mt-8 rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      >
        Go Back Home
      </Link>
    </div>
  );
}
