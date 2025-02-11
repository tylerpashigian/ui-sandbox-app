"use client";

import {
  ComponentPropsWithoutRef,
  CSSProperties,
  MouseEvent,
  useEffect,
  useRef,
} from "react";
import { cn } from "~/lib/utils";

interface Props extends ComponentPropsWithoutRef<"div"> {
  size?: number;
}

export const GlowArea = ({ className, size = 300, ...rest }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const coordinates = useRef<{ x: number; y: number } | null>(null);
  const frameId = useRef<number | null>(null);

  const updateGlow = () => {
    if (coordinates.current && ref.current) {
      ref.current.style.setProperty("--glow-x", `${coordinates.current.x}px`);
      ref.current.style.setProperty("--glow-y", `${coordinates.current.y}px`);
      frameId.current = null;
    }
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    // change to useMeasure()
    const bounds = event.currentTarget.getBoundingClientRect();
    coordinates.current = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };

    if (!frameId.current) {
      frameId.current = requestAnimationFrame(() => updateGlow());
    }
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.removeProperty("--glow-x");
    event.currentTarget.style.removeProperty("--glow-y");
  };

  return (
    <div
      ref={ref}
      className={cn("relative", className, "")}
      style={{ "--glow-size": `${size}px` } as CSSProperties}
      // style={
      //   {
      //     position: "relative",
      //     "--glow-size": `${size}px`,
      //   } as CSSProperties
      // }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // className={cn(className, "")}
      {...rest}
    ></div>
  );
};

GlowArea.displayName = "GlowArea";

interface GlowProps extends ComponentPropsWithoutRef<"div"> {
  color?: string;
}

export const Glow = ({
  className,
  color = "blue",
  children,
  ...rest
}: GlowProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current?.style.setProperty("--glow-top", `${ref.current?.offsetTop}px`);
    ref.current?.style.setProperty(
      "--glow-left",
      `${ref.current?.offsetLeft}px`,
    );
  }, []);

  return (
    <div ref={ref} className={cn(className, "relative")}>
      <div
        {...rest}
        style={{
          backgroundImage: `radial-gradient(
            var(--glow-size) var(--glow-size) at calc(var(--glow-x, -99999px) - var(--glow-left, 0px))
            calc(var(--glow-y, -99999px) - var(--glow-top, 0px)),
            ${color} 0%,
            transparent 100%
          )`,
        }}
        className={cn(
          className,
          "pointer-events-none absolute inset-0 mix-blend-multiply after:absolute after:inset-[0.5px] after:rounded-[inherit] after:bg-background/90 after:content-[''] dark:mix-blend-lighten",
        )}
      ></div>
      {children}
    </div>
  );
};
