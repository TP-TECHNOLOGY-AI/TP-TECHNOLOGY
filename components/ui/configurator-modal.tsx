"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Configurator as FormConfigurator } from "@/components/PricingAndConfig";

const SignInCanvas = dynamic(
  () => import("@/components/ui/sign-in-canvas").then((m) => ({ default: m.SignInCanvas })),
  { ssr: false }
);

interface ConfiguratorModalProps {
  open: boolean;
  onClose: () => void;
  initialModule?: string | null;
}

export function ConfiguratorModal({ open, onClose, initialModule }: ConfiguratorModalProps) {
  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // ESC to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            background: "#000",
            overflow: "hidden",
          }}
        >
          {/* ── SignInFlow dot-matrix background ── */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <SignInCanvas
              colors={[[255, 255, 255], [255, 255, 255]]}
              dotSize={5}
              animationSpeed={3}
              opacities={[0.04, 0.04, 0.06, 0.06, 0.08, 0.1, 0.12, 0.16, 0.2, 0.26]}
              showGradient={false}
            />
            {/* Heavy center vignette so the form stays readable */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at center, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.25) 100%)",
            }} />
            {/* Top/bottom fade */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.7) 100%)",
            }} />
          </div>

          {/* ── Close button ── */}
          <button
            onClick={onClose}
            aria-label="Schließen"
            style={{
              position: "absolute",
              top: "20px",
              right: "24px",
              zIndex: 20,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.5)",
              fontSize: "22px",
              lineHeight: 1,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
            }}
          >
            ×
          </button>

          {/* ── Scrollable content area ── */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              height: "100%",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "60px 24px",
            }}
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              style={{ textAlign: "center", marginBottom: "36px" }}
            >
              <p style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#60a5fa",
                marginBottom: "10px",
              }}>
                Konfiguration
              </p>
              <h2 style={{
                fontSize: "clamp(22px, 4vw, 34px)",
                fontWeight: 700,
                color: "#fff",
                margin: "0 0 8px",
                letterSpacing: "-0.5px",
                lineHeight: 1.15,
              }}>
                Ihr persönlicher KI-Assistent
              </h2>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.38)", margin: 0 }}>
                In 4 Schritten zu Ihrem individuellen Angebot.
              </p>
            </motion.div>

            {/* Form card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: "100%",
                maxWidth: "640px",
                background: "rgba(0,0,0,0.58)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "clamp(28px, 5vw, 48px)",
                boxShadow: "0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset",
              }}
            >
              <FormConfigurator initialModule={initialModule} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
