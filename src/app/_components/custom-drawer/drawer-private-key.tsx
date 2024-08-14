"use client";

import React from "react";

import { Button } from "~/components/ui/button";
import { DrawerState } from "./custom-drawer";

type Props = {
  onUpdateState: React.Dispatch<React.SetStateAction<DrawerState>>;
};

const DrawerPrivateKey = ({ onUpdateState }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <p>
        Your Private Key is the key used to back up your wallet. Keep it secret
        and secure at all times.
      </p>
      <Button onClick={() => onUpdateState(DrawerState.Options)}>
        <p>Go back</p>
      </Button>
    </div>
  );
};

export default DrawerPrivateKey;
