"use client";

import { useState } from "react";
import Link from "next/link";

import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import TicketWithIndents from "../_components/ticket";
import AnimatedIcon from "../_components/animated-icon";

const TABS = ["Home", "About", "Contact"];

export default function TabsDemo() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const tabClass = cva(
    "relative cursor-pointer px-2 py-1 text-sm outline-none list-none transition-colors",
    {
      variants: {
        active: {
          true: "text-gray-800",
          false: "text-gray-700",
        },
      },
    },
  );
  const options = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];
  const [activeOption, setActiveOption] = useState(options[0]);
  const optionClass = cva(
    "relative cursor-pointer px-2 py-1 text-sm outline-none list-none transition-colors",
    {
      variants: {
        active: {
          true: "text-gray-800",
          false: "text-gray-700",
        },
      },
    },
  );

  const spring = {
    type: "spring",
    damping: 22,
    stiffness: 500,
  };

  return (
    <>
      <h1 className="mb-8 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        Tabs Demo
      </h1>
      <div className="flex flex-col items-center gap-6">
        <div className="spacing-2 relative flex overflow-hidden rounded-full bg-white p-2">
          {options.map((option) => (
            <motion.div
              layout
              key={option}
              className={optionClass({ active: activeOption === option })}
              onClick={() => setActiveOption(option)}
            >
              {activeOption === option ? (
                <motion.div
                  transition={spring}
                  layoutId="toggle-indicator"
                  className="absolute inset-0 h-full w-full rounded-full bg-[#2e026d]"
                />
              ) : null}
              <span
                className={`relative p-1 ${activeOption === option ? "text-white" : "text-black"}`}
              >
                {option}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="flex rounded-xl bg-white p-2">
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
                  className="absolute inset-0 rounded-lg bg-[#D3D3D3]"
                />
              ) : null}
              <motion.span
                className={`relative z-10 ${activeTab === tab ? "text-black" : "text-black"}`}
              >
                {tab}
              </motion.span>
            </motion.li>
          ))}
        </div>
        <TicketWithIndents />
        <Link
          href="/"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        >
          Go Back Home
        </Link>
      </div>
    </>
  );
}
