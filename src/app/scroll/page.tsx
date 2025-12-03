"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useResizeObserver } from "usehooks-ts";
import { RefObject, useRef } from "react";

const Page = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollX } = useScroll({ container: scrollRef });

  const clamp = (v: number, min: number, max: number) =>
    Math.min(Math.max(v, min), max);

  const cardWidth = 160;
  const itemSize = cardWidth + 8;
  const { width = 0 } = useResizeObserver({
    ref: scrollRef as RefObject<HTMLDivElement>,
    box: "border-box",
  });

  const containerPadding = width / 2 - itemSize / 2;

  return (
    <motion.div
      ref={scrollRef}
      style={{
        paddingLeft: containerPadding,
        paddingRight: containerPadding,
      }}
      className="flex max-w-[100vw] snap-x snap-mandatory gap-2 overflow-x-scroll py-5 [perspective:400px]"
    >
      {Array.from({ length: 30 }).map((_, index) => {
        const opacity = useTransform(scrollX, (value) => {
          const centerOffset =
            value - containerPadding + width / 2 - itemSize / 2; // scroll left + half viewport, minus half an item
          const centerIndex = centerOffset / itemSize;
          const distance = Math.abs(index - centerIndex);
          return clamp(1 - distance * 0.3, 0.2, 1); // tweak slope/limits as you like
        });

        const rotate = useTransform(scrollX, (x) => {
          const cardCenter = containerPadding + index * itemSize + itemSize / 2;
          const viewportCenter = x + width / 2;
          const signedDistance = (viewportCenter - cardCenter) / itemSize; // + if card is left of center
          const centerCardIndex = (x + width / 2 - containerPadding) / itemSize;

          return Math.floor(centerCardIndex) === index
            ? 0
            : clamp((signedDistance * 150) / 3, -150, 150); // center→0, left→+angle, right→-angle
        });

        return (
          <motion.div
            key={index}
            style={{
              opacity,
              rotateY: rotate,
            }}
            className={`flex h-40 w-40 shrink-0 snap-center items-center justify-center rounded-xl bg-[#f0f0f0] [corner-shape:squircle] [transform-origin:center] [transform-style:preserve-3d]`}
          >
            {index}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Page;
