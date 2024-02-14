'use client';
import { BlindtestProvider, useBlindtestContext } from "@/app/contexts/BlindtestProvider"

function Blindtest() {
  const { screenSelection, screenSelectionMap } = useBlindtestContext();

  return screenSelectionMap[screenSelection];
}

export { Blindtest };
