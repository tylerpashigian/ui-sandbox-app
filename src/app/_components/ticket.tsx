"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import { Button } from "~/components/ui/button";
import { Spinner } from "./spinner/spinner";
import { useOnClickOutside } from "usehooks-ts";

export default function FeedbackComponent() {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  const buttonCopy: Record<string, string | JSX.Element> = {
    idle: "Submit",
    loading: <Spinner size={16} color="#ffffff" />,
    success: "Submitted!",
  };

  function submit() {
    setFormState("loading");
    setTimeout(() => {
      setFormState("success");
    }, 1500);

    setTimeout(() => {
      setOpen(false);
    }, 3300);
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }

      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === "Enter" &&
        open &&
        formState === "idle"
      ) {
        submit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, formState]);

  return (
    <div className="flex w-full items-center justify-center">
      <motion.div layoutId={"popover"} key={"button"}>
        <Button
          variant={"secondary"}
          onClick={() => {
            setOpen(true);
            setFormState("idle");
            setFeedback("");
          }}
        >
          <motion.span layoutId="placeholder" className="block text-sm">
            Feedback
          </motion.span>
        </Button>
      </motion.div>
      <AnimatePresence>
        {open ? (
          <motion.div
            key={"popover"}
            layoutId={"popover"}
            className="absolute min-h-[192px] w-[90vw] items-center justify-center overflow-hidden rounded-xl bg-[#f5f6f7] p-1 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_rgba(0,0,0,0.04)] outline-none md:w-[364px]"
            ref={ref}
          >
            <motion.span
              layoutId="placeholder"
              aria-hidden
              className={`absolute left-4 top-[17px] text-sm text-[#63635d] data-[feedback="true"]:!opacity-0`}
              data-feedback={feedback === "" ? "false" : "true"}
            >
              Feedback
            </motion.span>
            <AnimatePresence mode="popLayout">
              {formState === "success" ? (
                <motion.div
                  initial={{ y: -32, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  // Why doesnt this push the success down?
                  // exit={{ y: 32, opacity: 0 }}
                  transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                  className="flex h-full min-h-[inherit] flex-col items-center justify-center"
                  key={"success"}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-[-4px]"
                  >
                    <path
                      d="M27.6 16C27.6 17.5234 27.3 19.0318 26.717 20.4392C26.1341 21.8465 25.2796 23.1253 24.2025 24.2025C23.1253 25.2796 21.8465 26.1341 20.4392 26.717C19.0318 27.3 17.5234 27.6 16 27.6C14.4767 27.6 12.9683 27.3 11.5609 26.717C10.1535 26.1341 8.87475 25.2796 7.79759 24.2025C6.72043 23.1253 5.86598 21.8465 5.28302 20.4392C4.70007 19.0318 4.40002 17.5234 4.40002 16C4.40002 12.9235 5.62216 9.97301 7.79759 7.79759C9.97301 5.62216 12.9235 4.40002 16 4.40002C19.0765 4.40002 22.027 5.62216 24.2025 7.79759C26.3779 9.97301 27.6 12.9235 27.6 16Z"
                      fill="#2090FF"
                      fillOpacity="0.16"
                    />
                    <path
                      d="M12.1334 16.9667L15.0334 19.8667L19.8667 13.1M27.6 16C27.6 17.5234 27.3 19.0318 26.717 20.4392C26.1341 21.8465 25.2796 23.1253 24.2025 24.2025C23.1253 25.2796 21.8465 26.1341 20.4392 26.717C19.0318 27.3 17.5234 27.6 16 27.6C14.4767 27.6 12.9683 27.3 11.5609 26.717C10.1535 26.1341 8.87475 25.2796 7.79759 24.2025C6.72043 23.1253 5.86598 21.8465 5.28302 20.4392C4.70007 19.0318 4.40002 17.5234 4.40002 16C4.40002 12.9235 5.62216 9.97301 7.79759 7.79759C9.97301 5.62216 12.9235 4.40002 16 4.40002C19.0765 4.40002 22.027 5.62216 24.2025 7.79759C26.3779 9.97301 27.6 12.9235 27.6 16Z"
                      stroke="#2090FF"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="mb-1 mt-2 text-sm font-medium text-[#21201c]">
                    Feedback received!
                  </h3>
                  <p className="text-sm text-[#63635d]">
                    Thanks for helping me improve Sonner.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key={"form"}
                  exit={{ y: 32, opacity: 0 }}
                  transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!feedback) return;
                    submit();
                  }}
                  className="rounded-lg border border-[#e6e7e8] bg-white"
                >
                  <textarea
                    autoFocus
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="h-32 w-full resize-none rounded-t-lg p-3 text-sm text-black outline-none"
                    required
                  />
                  <div className="relative flex items-center px-2.5 py-2.5">
                    <div className="absolute left-0 right-0 top-[-1px]">
                      <svg
                        className="dotted-line"
                        width="352"
                        height="2"
                        viewBox="0 0 352 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 1H352"
                          stroke="#E6E7E8"
                          strokeDasharray="4 4"
                        />
                      </svg>
                      <div className="absolute left-0 top-0 -translate-x-[1.5px] -translate-y-[50%] transform">
                        {/* Add your half-circle-left SVG here */}
                        <svg
                          width="6"
                          height="12"
                          viewBox="0 0 6 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2029_22)">
                            <path
                              d="M0 2C0.656613 2 1.30679 2.10346 1.91341 2.30448C2.52005 2.5055 3.07124 2.80014 3.53554 3.17157C3.99982 3.54301 4.36812 3.98396 4.6194 4.46927C4.87067 4.95457 5 5.47471 5 6C5 6.52529 4.87067 7.04543 4.6194 7.53073C4.36812 8.01604 3.99982 8.45699 3.53554 8.82843C3.07124 9.19986 2.52005 9.4945 1.91341 9.69552C1.30679 9.89654 0.656613 10 0 10V6V2Z"
                              fill="#F5F6F7"
                            />
                            <path
                              d="M1 12V10C2.06087 10 3.07828 9.57857 3.82843 8.82843C4.57857 8.07828 5 7.06087 5 6C5 4.93913 4.57857 3.92172 3.82843 3.17157C3.07828 2.42143 2.06087 2 1 2V0"
                              stroke="#E6E7E8"
                              strokeWidth="1"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2029_22">
                              <rect width="6" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="absolute right-0 top-0 -translate-y-[50%] translate-x-[1.5px] rotate-180 transform">
                        <svg
                          width="6"
                          height="12"
                          viewBox="0 0 6 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2029_22)">
                            <path
                              d="M0 2C0.656613 2 1.30679 2.10346 1.91341 2.30448C2.52005 2.5055 3.07124 2.80014 3.53554 3.17157C3.99982 3.54301 4.36812 3.98396 4.6194 4.46927C4.87067 4.95457 5 5.47471 5 6C5 6.52529 4.87067 7.04543 4.6194 7.53073C4.36812 8.01604 3.99982 8.45699 3.53554 8.82843C3.07124 9.19986 2.52005 9.4945 1.91341 9.69552C1.30679 9.89654 0.656613 10 0 10V6V2Z"
                              fill="#F5F6F7"
                            />
                            <path
                              d="M1 12V10C2.06087 10 3.07828 9.57857 3.82843 8.82843C4.57857 8.07828 5 7.06087 5 6C5 4.93913 4.57857 3.92172 3.82843 3.17157C3.07828 2.42143 2.06087 2 1 2V0"
                              stroke="#E6E7E8"
                              strokeWidth="1"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2029_22">
                              <rect width="6" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <Button
                      variant={"default"}
                      type="submit"
                      className="relative ml-auto"
                    >
                      <AnimatePresence mode="popLayout" initial={false}>
                        <motion.span
                          key={formState}
                          transition={{
                            type: "spring",
                            duration: 0.3,
                            bounce: 0,
                          }}
                          initial={{ opacity: 0, y: -25 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 25 }}
                          className="text-shadow-[0px_1px_1.5px_rgba(0,0,0,0.16)] flex w-full items-center justify-center text-white"
                        >
                          {buttonCopy[formState]}
                        </motion.span>
                      </AnimatePresence>
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
