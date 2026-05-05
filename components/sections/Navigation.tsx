"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientMenu from "@/components/ui/gradient-menu";

// JPEG is 1254×896. At width=260px → height=186px.
// Text strip sits at ~47–62% of image height → y=87–115px in 186px render.
// Container is 48px; offset top=-69px centers that strip inside the nav bar.
const TP_W = 260;
const TP_H = Math.round(TP_W * (896 / 1254)); // ≈ 186
const TP_TOP = Math.round((48 - TP_H) / 2);   // ≈ -69

export default function Navigation() {
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowFull((v) => !v), showFull ? 3000 : 15000);
    return () => clearTimeout(t);
  }, [showFull]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-6">

        {/* Logo slot — fixed size so nav layout never shifts */}
        <a
          href="/"
          className="flex-shrink-0"
          style={{ position: "relative", width: `${TP_W}px`, height: "48px", overflow: "hidden", display: "block" }}
        >
          <AnimatePresence mode="wait">
            {!showFull ? (
              /* ── TPT square icon ── */
              <motion.img
                key="tpt"
                src="/tpt-logo.png"
                alt="TPT"
                style={{
                  mixBlendMode: "lighten",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "48px",
                  width: "48px",
                  objectFit: "contain",
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            ) : (
              /* ── TP Technology wordmark — wipe in left→right ── */
              <motion.div
                key="full"
                style={{
                  position: "absolute",
                  top: `${TP_TOP}px`,
                  left: 0,
                  height: `${TP_H}px`,
                  overflow: "hidden",
                }}
                initial={{ width: 0 }}
                animate={{ width: TP_W }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src="/tp-technology-logo.jpeg"
                  alt="TP Technology"
                  style={{
                    mixBlendMode: "lighten",
                    width: `${TP_W}px`,
                    height: "auto",
                    display: "block",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </a>

        <div className="hidden md:flex items-center">
          <GradientMenu />
        </div>

        <a
          href="#konfigurieren"
          data-magnetic
          className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold bg-white text-black hover:bg-[#7eb8d0] hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(126,184,208,0.4)]"
        >
          Jetzt konfigurieren →
        </a>
      </div>
    </nav>
  );
}
