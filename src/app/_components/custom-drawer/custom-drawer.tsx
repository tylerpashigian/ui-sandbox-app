"use client";

import { useMemo, useState } from "react";
import { Drawer } from "vaul";
import DrawerOptions from "./drawer-options";
import DrawerPrivateKey from "./drawer-private-key";
import DrawerKeyphrase from "./drawer-keyphrase";
import DrawerDelete from "./drawer-delete";
import { Button } from "~/components/ui/button";

export enum DrawerState {
  Options,
  PrivateKey,
  Recovery,
  Delete,
}

const CustomDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerState, setDrawerState] = useState(DrawerState.Options);

  const content = useMemo(() => {
    switch (drawerState) {
      case DrawerState.Options:
        return <DrawerOptions onUpdateState={setDrawerState} />;
      case DrawerState.PrivateKey:
        return <DrawerPrivateKey onUpdateState={setDrawerState} />;
      case DrawerState.Recovery:
        return <DrawerKeyphrase onUpdateState={setDrawerState} />;
      case DrawerState.Delete:
        return <DrawerDelete onUpdateState={setDrawerState} />;
      default:
        break;
    }
  }, [drawerState]);

  return (
    <>
      <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Trigger asChild>
          <Button
            variant={"secondary"}
            // className="focus-visible:shadow-focus-ring-button fixed left-1/2 top-1/2 h-[44px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white px-6 py-2 font-medium text-black transition-colors hover:bg-[#F9F9F8] md:font-medium"
            onClick={() => setIsOpen(true)}
          >
            Try it out
          </Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay
            className="fixed inset-0 z-10 bg-black/30"
            onClick={() => setIsOpen(false)}
          />
          <Drawer.Content className="fixed inset-x-4 bottom-4 z-10 mx-auto max-w-[361px] overflow-hidden rounded-[36px] bg-[#FEFFFE] p-6 outline-none md:mx-auto md:w-full">
            <Drawer.Title></Drawer.Title>
            {content}
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
};

export default CustomDrawer;
