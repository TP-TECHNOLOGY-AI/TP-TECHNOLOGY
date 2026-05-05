"use client";

import { SparklesCore } from "@/components/ui/sparkles";

export function GlobalBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <SparklesCore
        background="transparent"
        minSize={0.2}
        maxSize={0.75}
        particleDensity={50}
        className="w-full h-full"
        particleColor="#ffffff"
        speed={0.9}
      />
    </div>
  );
}
