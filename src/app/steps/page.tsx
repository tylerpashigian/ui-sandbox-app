"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import useMeasure from "react-use-measure";

import { Button } from "~/components/ui/button";

export default function Steps() {
  const [currentStep, setCurrentStep] = useState(0);

  const content = useMemo(() => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <h2 className="mb-2 font-bold">This is step one</h2>
            <p className="pb-2">
              Usually in this step we would explain why this thing exists and
              what it does. Also, we would show a button to go to the next step.
            </p>
            <div className="flex flex-col gap-2">
              <div className="skeleton" style={{ width: 256 }} />
              <div className="skeleton" style={{ width: 192 }} />
              <div className="skeleton" />
              <div className="skeleton" style={{ width: 384 }} />
            </div>
          </>
        );
      case 1:
        return (
          <>
            <h2 className="mb-2 font-bold">This is step two</h2>
            <p className="pb-2">
              Usually in this step we would explain why this thing exists and
              what it does. Also, we would show a button to go to the next step.
            </p>
            <div className="flex flex-col gap-2">
              <div className="skeleton" style={{ width: 256 }} />
              <div className="skeleton" style={{ width: 192 }} />
              <div className="skeleton" style={{ width: 384 }} />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="mb-2 font-bold">This is step three</h2>
            <p className="pb-2">
              Usually in this step we would explain why this thing exists and
              what it does. Also, we would show a button to go to the next step.
            </p>
            <div className="flex flex-col gap-2">
              <div className="skeleton" style={{ width: 256 }} />
              <div className="skeleton" style={{ width: 192 }} />
              <div className="skeleton" style={{ width: 128 }} />
              <div className="skeleton" style={{ width: 224 }} />
              <div className="skeleton" style={{ width: 384 }} />
            </div>
          </>
        );
    }
  }, [currentStep]);

  type Direction = "left" | "right";
  const [ref, bounds] = useMeasure();
  const [direction, setDirection] = useState<Direction>("left");

  const variants = {
    initial: (custom: Direction) => ({
      x: custom === "left" ? "-110%" : "110%",
      opacity: 0,
    }),
    active: { x: 0, opacity: 1 },
    exit: (custom: Direction) => ({
      x: custom === "left" ? "110%" : "-110%",
      opacity: 0,
    }),
  };

  return (
    <MotionConfig transition={{ duration: 0.5, type: "spring", bounce: 0 }}>
      <motion.div
        animate={{ height: bounds.height }}
        className={`relative w-[550px] overflow-hidden rounded-md bg-white text-black shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_rgba(0,0,0,0.04),0_8px_8px_-8px_rgba(0,0,0,0.04)]`}
      >
        <div className="p-6" ref={ref}>
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="active"
              exit="exit"
              className="flex flex-col gap-4"
            >
              {content}
            </motion.div>
          </AnimatePresence>
          <motion.div layout className="mt-6 flex justify-between">
            <Button
              variant={"secondary"}
              disabled={currentStep === 0}
              onClick={() => {
                if (currentStep === 0) {
                  return;
                }
                setDirection("left");
                setCurrentStep((prev) => prev - 1);
              }}
            >
              Back
            </Button>
            <Button
              disabled={currentStep === 2}
              onClick={() => {
                if (currentStep === 2) {
                  setCurrentStep(0);
                  setDirection("left");
                  return;
                }
                setDirection("right");
                setCurrentStep((prev) => prev + 1);
              }}
            >
              Continue
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </MotionConfig>
  );
}
