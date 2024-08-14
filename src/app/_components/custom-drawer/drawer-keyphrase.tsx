"use client";

import React from "react";

import { Button } from "~/components/ui/button";
import { DrawerState } from "./custom-drawer";

type Props = {
  onUpdateState: React.Dispatch<React.SetStateAction<DrawerState>>;
};

const DrawerKeyphrase = ({ onUpdateState }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <p>
        Keep your Secret Phrase safe. Don’t share it with anyone else. If you
        lose it, we can’t recover it.
      </p>
      <Button onClick={() => onUpdateState(DrawerState.Options)}>
        <p>Go back</p>
      </Button>
    </div>
  );
};

export default DrawerKeyphrase;
