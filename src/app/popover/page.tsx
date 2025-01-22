"use client";

import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";

import FeedbackComponent from "../_components/ticket";
import FeedbackComponentCSS from "../_components/course/ticket-course";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogPortal,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "~/components/ui/drawer";

const PopoverDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const springTransition = { duration: 2.7, type: "spring", bounce: 0.25 };

  const customTrigger = (
    <motion.div layoutId="customModal" transition={springTransition}>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>
        Open Overlay
      </Button>
    </motion.div>
  );

  return (
    <div className="flex flex-col gap-4">
      <FeedbackComponentCSS />
      <FeedbackComponent />
      {customTrigger}
      {isDesktop ? (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <AnimatePresence>
            <DialogPortal forceMount>
              {isOpen && (
                <DialogContent className="border-none bg-transparent p-0">
                  <motion.div
                    layoutId="customModal"
                    transition={springTransition}
                    className="rounded-lg border bg-white p-4 shadow-lg dark:bg-slate-950"
                  >
                    <DialogClose />
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. Are you sure you want to
                        permanently delete this file from our servers?
                      </DialogDescription>
                    </DialogHeader>
                  </motion.div>
                </DialogContent>
              )}
            </DialogPortal>
          </AnimatePresence>
        </Dialog>
      ) : (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Edit Ingredient</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-4">
              <p>
                This action cannot be undone. Are you sure you want to
                permanently delete this file from our servers?
              </p>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default PopoverDemo;
