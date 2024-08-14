"use client";

import React from "react";

import { Button } from "~/components/ui/button";
import { DrawerState } from "./custom-drawer";

type Props = {
  onUpdateState: React.Dispatch<React.SetStateAction<DrawerState>>;
};

const DrawerDelete = ({ onUpdateState }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <p>
        You haven’t backed up your wallet yet. If you remove it, you could lose
        access forever. We suggest tapping and backing up your wallet first with
        a valid recovery method.
      </p>
      <Button onClick={() => onUpdateState(DrawerState.Options)}>
        <p>Go back</p>
      </Button>
    </div>
  );
};

export default DrawerDelete;
