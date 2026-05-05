"use client";

import { MagneticCursor } from "@/components/ui/magnetic-cursor";

export function CursorWrapper({ children }: { children: React.ReactNode }) {
  return (
    <MagneticCursor
      magneticFactor={0.35}
      blendMode="exclusion"
      cursorSize={32}
      cursorColor="white"
      lerpAmount={0.12}
      speedMultiplier={0.025}
    >
      {children}
    </MagneticCursor>
  );
}
