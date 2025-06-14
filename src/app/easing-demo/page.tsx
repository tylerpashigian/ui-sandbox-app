"use client";

import AnimatedBox from "../_components/animated-box";

export default function EasingDemo() {
  return (
    <div className="flex flex-col items-center justify-center px-20 py-10">
      <h1 className="mb-8 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        Easing Demo
      </h1>
      <AnimatedBox />
    </div>
  );
}
