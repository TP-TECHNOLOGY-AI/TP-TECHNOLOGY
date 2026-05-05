"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [phase, setPhase] = useState<"logo" | "text">("logo");

  useEffect(() => {
    const t = setTimeout(() => setPhase("text"), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">

      {/* Ambient glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#7eb8d0]/[0.05] blur-[120px] pointer-events-none" />

      {/* Phase 1: TP Technology logo */}
      <AnimatePresence>
        {phase === "logo" && (
          <motion.div
            key="logo"
            className="absolute inset-0 flex items-center justify-center px-8"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.06 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <img
              src="/tp-technology-logo.png"
              alt="TP Technology"
              className="w-full max-w-xs sm:max-w-lg md:max-w-2xl h-auto"
              style={{ mixBlendMode: "lighten" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phase 2: Hero text */}
      <AnimatePresence>
        {phase === "text" && (
          <motion.div
            key="text"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center px-6 max-w-5xl mx-auto pt-20">

              <motion.p
                className="text-xs uppercase tracking-[5px] text-[#7eb8d0]/70 font-medium mb-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              >
                KI-Telefonassistent für Arztpraxen
              </motion.p>

              <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
                <motion.span
                  style={{ display: "block" }}
                  className="text-white"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                >
                  Ihr Telefon.
                </motion.span>
                <motion.span
                  style={{ display: "block", filter: "url(#tpt-blue-glow)" }}
                  className="text-[#7eb8d0]"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
                >
                  Immer erreichbar.
                </motion.span>
                <motion.span
                  style={{ display: "block" }}
                  className="text-white"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
                >
                  Immer professionell.
                </motion.span>
              </h1>

              <motion.p
                className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-14 leading-relaxed font-light"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.7, ease: "easeOut" }}
              >
                Der KI-Telefonassistent für Arztpraxen — bucht Termine, beantwortet Fragen
                und entlastet Ihr Team. Rund um die Uhr.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
              >
                <a
                  href="#konfigurieren"
                  className="px-8 py-3.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-[#7eb8d0] hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(126,184,208,0.35)]"
                >
                  Jetzt konfigurieren →
                </a>
                <a
                  href="#problem"
                  className="px-8 py-3.5 border border-white/[0.15] text-white/60 rounded-full text-sm font-medium hover:border-white/30 hover:text-white transition-all duration-300"
                >
                  Mehr erfahren ↓
                </a>
              </motion.div>

              <motion.p
                className="mt-14 text-xs text-white/20 tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.7 }}
              >
                Individuell konfigurierbar &nbsp;·&nbsp; Datenschutzkonform &nbsp;·&nbsp; Einsatzbereit in bis zu 3 Wochen
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
    </section>
  );
}
