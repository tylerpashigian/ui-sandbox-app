"use client";

import React from "react";

import { Button } from "~/components/ui/button";
import { DrawerState } from "./custom-drawer";

type Props = {
  onUpdateState: React.Dispatch<React.SetStateAction<DrawerState>>;
};

const DrawerOptions = ({ onUpdateState }: Props) => {
  return (
    <>
      <p>Options</p>
      <div className="flex flex-col gap-2">
        <Button onClick={() => onUpdateState(DrawerState.PrivateKey)}>
          <p>View Private Key</p>
        </Button>
        <Button onClick={() => onUpdateState(DrawerState.Recovery)}>
          <p>View Recovery Phrase</p>
        </Button>
        <Button
          variant={"destructive"}
          onClick={() => onUpdateState(DrawerState.Delete)}
        >
          <p>Remove Wallet</p>
        </Button>
      </div>
    </>
  );
};

export default DrawerOptions;
