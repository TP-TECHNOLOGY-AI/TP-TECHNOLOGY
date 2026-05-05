"use client";

import { Configurator as FormConfigurator } from "@/components/PricingAndConfig";

export default function Configurator() {
  return (
    <section id="konfigurieren" className="scroll-mt-20 bg-black">

      {/* ── Preiskarten ── */}
      <div className="py-24 px-6 section-glow">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs uppercase tracking-[5px] text-[#7eb8d0]/60 font-medium mb-5">
            Preise & Konfiguration
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            Ihr Assistent.{" "}
            <span className="text-[#7eb8d0]">Nach Ihren Wünschen.</span>
          </h2>
          <p className="text-base text-white/35 max-w-xl mx-auto font-light leading-relaxed">
            Konfigurieren Sie Ihren persönlichen KI-Assistenten. Wir melden uns innerhalb von
            24 Stunden mit einem individuellen Angebot.
          </p>
        </div>

        {/* Neue 3-Karten Struktur */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto 16px",
        }}>
          {/* Karte 1: Kern */}
          <div style={{
            borderRadius: "20px",
            border: "1px solid rgba(74,222,128,0.25)",
            background: "rgba(74,222,128,0.04)",
            padding: "36px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4ade80", margin: "0 0 10px" }}>
                Immer inklusive
              </p>
              <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#ffffff", margin: "0 0 20px", letterSpacing: "-0.4px" }}>Kern</h3>
              <div style={{ fontSize: "26px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>Auf Anfrage</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>Einmalige Setup-Gebühr + monatliche Nutzung</div>
            </div>
            <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(74,222,128,0.4), transparent)" }} />
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
              {[
                "Anrufe entgegennehmen & Anliegen verstehen",
                "Häufige Fragen sofort beantworten",
                "Notfallprotokoll mit Weiterleitung",
                "Stimme, Name & Tonalität nach Wahl",
                "Individuelle Begrüßung & Verabschiedung",
                "Nur Praxisthemen — keine Diagnosen",
              ].map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "9px", fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: "1.5" }}>
                  <span style={{ color: "#4ade80", flexShrink: 0, marginTop: "1px" }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.getElementById("konfigurieren")?.scrollIntoView({ behavior: "smooth" })}
              style={{ width: "100%", padding: "13px 24px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}
            >
              Konfigurieren →
            </button>
          </div>

          {/* Karte 2: Buchungs-Modul (Empfohlen) */}
          <div style={{
            position: "relative",
            borderRadius: "20px",
            border: "1px solid rgba(96,165,250,0.5)",
            background: "rgba(96,165,250,0.06)",
            padding: "36px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            boxShadow: "0 0 60px rgba(96,165,250,0.1)",
          }}>
            <div style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", background: "#60a5fa", color: "#000", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 16px", borderRadius: "100px", whiteSpace: "nowrap" }}>
              Empfohlen
            </div>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#60a5fa", margin: "0 0 10px" }}>
                Kern + Buchungs-Modul
              </p>
              <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#ffffff", margin: "0 0 20px", letterSpacing: "-0.4px" }}>Mit Terminbuchung</h3>
              <div style={{ fontSize: "26px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>Auf Anfrage</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>Individuelles Angebot nach Konfiguration</div>
            </div>
            <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(96,165,250,0.4), transparent)" }} />
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
              {[
                { text: "Alles aus dem Kern", sub: true },
                { text: "Terminbuchung direkt in Ihren Kalender" },
                { text: "Terminverschiebung & Stornierung" },
                { text: "Google Calendar oder Outlook" },
                { text: "Automatische Feiertagserkennung" },
                { text: "Pufferzeit, Vorlauf & Stornofrist" },
              ].map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "9px", fontSize: "13px", color: f.sub ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.7)", lineHeight: "1.5", fontStyle: f.sub ? "italic" : "normal" }}>
                  <span style={{ color: "#60a5fa", flexShrink: 0, marginTop: "1px", opacity: f.sub ? 0.4 : 1 }}>✓</span>{f.text}
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.getElementById("konfigurieren")?.scrollIntoView({ behavior: "smooth" })}
              style={{ width: "100%", padding: "13px 24px", borderRadius: "100px", border: "none", background: "#60a5fa", color: "#000", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}
            >
              Konfigurieren →
            </button>
          </div>

          {/* Karte 3: Vollausbau */}
          <div style={{
            borderRadius: "20px",
            border: "1px solid rgba(167,139,250,0.25)",
            background: "rgba(167,139,250,0.04)",
            padding: "36px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a78bfa", margin: "0 0 10px" }}>
                Kern + Buchungs + Komfort
              </p>
              <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#ffffff", margin: "0 0 20px", letterSpacing: "-0.4px" }}>Vollausbau</h3>
              <div style={{ fontSize: "26px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>Auf Anfrage</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>Persönliches Beratungsgespräch</div>
            </div>
            <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(167,139,250,0.4), transparent)" }} />
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
              {[
                { text: "Alles aus Kern & Buchungs-Modul", sub: true },
                { text: "E-Mail-Benachrichtigung ans Team" },
                { text: "Rückrufwünsche vormerken & eintragen" },
                { text: "Doppelbuchungs-Erkennung" },
                { text: "Erweiterte Wissensdatenbank (FAQ)" },
                { text: "Behandlungsspezifische Buchungsregeln" },
              ].map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "9px", fontSize: "13px", color: f.sub ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.7)", lineHeight: "1.5", fontStyle: f.sub ? "italic" : "normal" }}>
                  <span style={{ color: "#a78bfa", flexShrink: 0, marginTop: "1px", opacity: f.sub ? 0.4 : 1 }}>✓</span>{f.text}
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.getElementById("konfigurieren")?.scrollIntoView({ behavior: "smooth" })}
              style={{ width: "100%", padding: "13px 24px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "rgba(255,255,255,0.8)", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}
            >
              Kontakt aufnehmen
            </button>
          </div>
        </div>

        {/* Premium Note */}
        <div style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          border: "1px solid rgba(245,158,11,0.15)",
          borderRadius: "16px",
          padding: "20px 28px",
          background: "rgba(245,158,11,0.03)",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}>
          <span style={{ fontSize: "16px" }}>★</span>
          <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.45)", flex: 1 }}>
            <strong style={{ color: "#f59e0b", fontWeight: 600 }}>Premium-Erweiterungen </strong>
            wie Mehrere Behandler, Caller-ID-Abgleich, SMS-Benachrichtigung und Akutsprechstunden sind individuell zubuchbar — wir beraten Sie im Erstgespräch.
          </p>
        </div>
      </div>

      {/* ── Konfigurator-Formular ── */}
      <div id="konfigurator-formular" className="bg-black border-t border-white/[0.05] py-20">
        <div className="max-w-2xl mx-auto px-6">
          <FormConfigurator />
        </div>
      </div>

    </section>
  );
}
