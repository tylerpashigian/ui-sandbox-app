"use client";

import Link from "next/link";
import AnimatedBox from "../_components/animated-box";

export default function EasingDemo() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] py-2 text-white">
      <h1 className="mb-8 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        Easing Demo
      </h1>
      <AnimatedBox />
      <Link
        href="/"
        className="mt-8 rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      >
        Go Back Home
      </Link>
    </div>
  );
}
