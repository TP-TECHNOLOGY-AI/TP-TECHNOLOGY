"use client";

import { useState } from "react";
import React from "react";

// ─────────────────────────────────────────────────────────────
// DATEN
// ─────────────────────────────────────────────────────────────

const KERN_FEATURES = [
  "Anrufe entgegennehmen & Anliegen verstehen",
  "Häufige Fragen sofort beantworten",
  "Notfallprotokoll mit Weiterleitung",
  "Stimme, Name & Tonalität nach Wahl",
  "Individuelle Begrüßung & Verabschiedung",
  "Nur Praxisthemen — keine Diagnosen",
];

const BUCHUNG_FEATURES = [
  "Alles aus dem Kern",
  "Terminbuchung direkt in Ihren Kalender",
  "Terminverschiebung & Stornierung",
  "Google Calendar oder Outlook",
  "Automatische Feiertagserkennung",
  "Pufferzeit, Vorlauf & Stornofrist",
];

const KOMFORT_FEATURES = [
  "Alles aus Kern & Buchungs-Modul",
  "E-Mail-Benachrichtigung ans Team",
  "Rückrufwünsche vormerken & eintragen",
  "Doppelbuchungs-Erkennung",
  "Erweiterte Wissensdatenbank (FAQ)",
  "Behandlungsspezifische Buchungsregeln",
];

interface CardDef {
  id: string;
  label: string | null;
  title: string;
  subtitle: string;
  price: string;
  priceSub: string;
  features: string[];
  cta: string;
  ctaStyle: "filled" | "outline";
  accentColor: string;
  recommended: boolean;
}

const CARDS: CardDef[] = [
  {
    id: "kern",
    label: null,
    title: "Kern",
    subtitle: "Der Assistent, der Ihre Praxis kennt.",
    price: "Auf Anfrage",
    priceSub: "Einmalige Setup-Gebühr + monatliche Nutzung",
    features: KERN_FEATURES,
    cta: "Konfigurieren →",
    ctaStyle: "outline",
    accentColor: "#4ade80",
    recommended: false,
  },
  {
    id: "buchung",
    label: "Empfohlen",
    title: "Kern + Buchungs-Modul",
    subtitle: "Termine vollautomatisch.",
    price: "Auf Anfrage",
    priceSub: "Individuelles Angebot nach Konfiguration",
    features: BUCHUNG_FEATURES,
    cta: "Konfigurieren →",
    ctaStyle: "filled",
    accentColor: "#60a5fa",
    recommended: true,
  },
  {
    id: "komfort",
    label: null,
    title: "Vollausbau",
    subtitle: "Maximale Entlastung Ihres Teams.",
    price: "Auf Anfrage",
    priceSub: "Persönliches Beratungsgespräch",
    features: KOMFORT_FEATURES,
    cta: "Kontakt aufnehmen",
    ctaStyle: "outline",
    accentColor: "#a78bfa",
    recommended: false,
  },
];

// ─────────────────────────────────────────────────────────────
// PREISKARTEN
// ─────────────────────────────────────────────────────────────

export function PricingCards({ onConfigure }: { onConfigure?: (id: string) => void }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "16px",
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {CARDS.map((card) => (
        <div
          key={card.id}
          style={{
            position: "relative",
            borderRadius: "20px",
            border: card.recommended
              ? "1px solid rgba(96, 165, 250, 0.5)"
              : "1px solid rgba(255,255,255,0.08)",
            background: card.recommended
              ? "rgba(96, 165, 250, 0.06)"
              : "rgba(255,255,255,0.02)",
            padding: "36px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            backdropFilter: "blur(12px)",
            boxShadow: card.recommended ? "0 0 60px rgba(96, 165, 250, 0.1)" : "none",
          }}
        >
          {card.label && (
            <div
              style={{
                position: "absolute",
                top: "-13px",
                left: "50%",
                transform: "translateX(-50%)",
                background: card.accentColor,
                color: "#000",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "4px 16px",
                borderRadius: "100px",
                whiteSpace: "nowrap",
              }}
            >
              {card.label}
            </div>
          )}

          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: card.accentColor,
                margin: "0 0 10px",
              }}
            >
              {card.subtitle}
            </p>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#ffffff",
                margin: 0,
                letterSpacing: "-0.4px",
              }}
            >
              {card.title}
            </h3>
          </div>

          <div>
            <div style={{ fontSize: "26px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>
              {card.price}
            </div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
              {card.priceSub}
            </div>
          </div>

          <div
            style={{
              height: "1px",
              background: `linear-gradient(90deg, ${card.accentColor}40, transparent)`,
            }}
          />

          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              flex: 1,
            }}
          >
            {card.features.map((feat, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "9px",
                  fontSize: "13px",
                  color:
                    i === 0 && card.id !== "kern"
                      ? "rgba(255,255,255,0.4)"
                      : "rgba(255,255,255,0.7)",
                  lineHeight: "1.5",
                  fontStyle: i === 0 && card.id !== "kern" ? "italic" : "normal",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                >
                  <circle
                    cx="7"
                    cy="7"
                    r="7"
                    fill={card.accentColor}
                    fillOpacity={i === 0 && card.id !== "kern" ? "0.08" : "0.15"}
                  />
                  <path
                    d="M4 7L6 9L10 5"
                    stroke={card.accentColor}
                    strokeOpacity={i === 0 && card.id !== "kern" ? "0.4" : "1"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {feat}
              </li>
            ))}
          </ul>

          <button
            onClick={() => onConfigure && onConfigure(card.id)}
            style={{
              width: "100%",
              padding: "13px 24px",
              borderRadius: "100px",
              border: card.ctaStyle === "filled" ? "none" : "1px solid rgba(255,255,255,0.2)",
              background: card.ctaStyle === "filled" ? card.accentColor : "transparent",
              color: card.ctaStyle === "filled" ? "#000" : "rgba(255,255,255,0.8)",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              if (card.ctaStyle === "filled") {
                e.currentTarget.style.opacity = "0.85";
              } else {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.color = "#fff";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color =
                card.ctaStyle === "filled" ? "#000" : "rgba(255,255,255,0.8)";
            }}
          >
            {card.cta}
          </button>
        </div>
      ))}

      {/* Premium Note — spans full width */}
      <div
        style={{
          gridColumn: "1 / -1",
          border: "1px solid rgba(245, 158, 11, 0.15)",
          borderRadius: "16px",
          padding: "20px 28px",
          background: "rgba(245, 158, 11, 0.03)",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: "16px" }}>★</span>
        <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.45)", flex: 1 }}>
          <strong style={{ color: "#f59e0b", fontWeight: 600 }}>Premium-Erweiterungen </strong>
          wie Mehrere Behandler, Caller-ID-Abgleich, SMS-Benachrichtigung oder Akutsprechstunden
          sind individuell zubuchbar — wir beraten Sie im Erstgespräch.
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// KONFIGURATOR
// ─────────────────────────────────────────────────────────────

const STEPS = [
  { id: "praxis", label: "Ihre Praxis" },
  { id: "module", label: "Module" },
  { id: "stimme", label: "Stimme" },
  { id: "kontakt", label: "Kontakt" },
];

const FACHRICHTUNGEN = [
  "Zahnarztpraxis",
  "Allgemeinmedizin",
  "Facharztpraxis",
  "Physiotherapie",
  "Andere",
];

const ANRUFVOLUMEN = [
  "Unter 20 Anrufe/Tag",
  "20–50 Anrufe/Tag",
  "50–100 Anrufe/Tag",
  "Über 100 Anrufe/Tag",
];

const KALENDER = [
  "Google Calendar",
  "Microsoft Outlook / Office 365",
  "Noch keinen — brauche Empfehlung",
  "Andere",
];

const TONALITAETEN = [
  "Warm & herzlich",
  "Sachlich & professionell",
  "Premium & gehoben",
  "Empathisch & beruhigend",
];

const GESCHLECHTER = ["Weiblich", "Männlich", "Keine Präferenz"];

type PremiumKey =
  | "premBestandspatient"
  | "premAkutsprechstunde"
  | "premMehrereBehandler"
  | "premFailover"
  | "premSms";

interface FormState {
  praxisname: string;
  fachrichtung: string;
  plz: string;
  anrufvolumen: string;
  kalender: string;
  modBuchung: boolean;
  modKomfort: boolean;
  premBestandspatient: boolean;
  premAkutsprechstunde: boolean;
  premMehrereBehandler: boolean;
  premFailover: boolean;
  premSms: boolean;
  geschlecht: string;
  tonalitaet: string;
  assistentname: string;
  name: string;
  email: string;
  telefon: string;
  anmerkungen: string;
  datenschutz: boolean;
}

export function Configurator({ initialModule = null }: { initialModule?: string | null }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({
    praxisname: "",
    fachrichtung: "",
    plz: "",
    anrufvolumen: "",
    kalender: "",
    modBuchung: initialModule === "buchung" || initialModule === "komfort",
    modKomfort: initialModule === "komfort",
    premBestandspatient: false,
    premAkutsprechstunde: false,
    premMehrereBehandler: false,
    premFailover: false,
    premSms: false,
    geschlecht: "",
    tonalitaet: "",
    assistentname: "",
    name: "",
    email: "",
    telefon: "",
    anmerkungen: "",
    datenschutz: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (key: keyof FormState, val: string | boolean) =>
    setForm((f) => ({ ...f, [key]: val }));
  const toggle = (key: keyof FormState) =>
    setForm((f) => ({ ...f, [key]: !f[key] }));

  const canNext = () => {
    if (step === 0) return form.praxisname && form.fachrichtung;
    if (step === 3) return form.name && form.email && form.datenschutz;
    return true;
  };

  const handleSubmit = async () => {
    setLoading(true);
    const body = `
Neue Konfigurationsanfrage — TP Technology

PRAXIS
Name: ${form.praxisname}
Fachrichtung: ${form.fachrichtung}
PLZ: ${form.plz}
Anrufvolumen: ${form.anrufvolumen}

KALENDER
${form.kalender}

MODULE
Buchungs-Modul: ${form.modBuchung ? "Ja" : "Nein"}
Komfort-Modul: ${form.modKomfort ? "Ja" : "Nein"}
Premium - Bestandspatienten-Abgleich: ${form.premBestandspatient ? "Ja" : "Nein"}
Premium - Akutsprechstunde: ${form.premAkutsprechstunde ? "Ja" : "Nein"}
Premium - Mehrere Behandler: ${form.premMehrereBehandler ? "Ja" : "Nein"}
Premium - Failover: ${form.premFailover ? "Ja" : "Nein"}
Premium - SMS: ${form.premSms ? "Ja" : "Nein"}

STIMME
Geschlecht: ${form.geschlecht}
Tonalität: ${form.tonalitaet}
Name des Assistenten: ${form.assistentname || "—"}

KONTAKT
Name: ${form.name}
E-Mail: ${form.email}
Telefon: ${form.telefon || "—"}
Anmerkungen: ${form.anmerkungen || "—"}
    `.trim();

    window.location.href = `mailto:tptechnologyai@gmail.com?subject=Konfigurationsanfrage: ${encodeURIComponent(form.praxisname)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <div style={{ fontSize: "48px", marginBottom: "20px" }}>✓</div>
        <h3 style={{ fontSize: "26px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>
          Vielen Dank!
        </h3>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", maxWidth: "400px", margin: "0 auto" }}>
          Ihre Konfiguration wurde vorbereitet. Bitte senden Sie die geöffnete E-Mail ab —
          wir melden uns innerhalb von 24 Stunden.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "12px 16px",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
    cursor: "text",
    transition: "border-color 0.2s",
  };

  const checkboxItemStyle = (active: boolean, color = "#60a5fa"): React.CSSProperties => ({
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    padding: "14px 16px",
    borderRadius: "12px",
    border: `1px solid ${active ? color + "50" : "rgba(255,255,255,0.08)"}`,
    background: active ? `${color}10` : "rgba(255,255,255,0.02)",
    cursor: "pointer",
    transition: "all 0.2s",
    userSelect: "none",
  });

  const radioStyle = (active: boolean, color = "#60a5fa"): React.CSSProperties => ({
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    border: `2px solid ${active ? color : "rgba(255,255,255,0.2)"}`,
    background: active ? color : "transparent",
    flexShrink: 0,
    marginTop: "1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s",
  });

  const checkStyle = (active: boolean, color = "#60a5fa"): React.CSSProperties => ({
    width: "18px",
    height: "18px",
    borderRadius: "5px",
    border: `2px solid ${active ? color : "rgba(255,255,255,0.2)"}`,
    background: active ? color : "transparent",
    flexShrink: 0,
    marginTop: "1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    color: "#000",
    fontWeight: 700,
    transition: "all 0.2s",
  });

  const premItems: { key: PremiumKey; label: string }[] = [
    { key: "premBestandspatient", label: "Bestandspatienten-Abgleich per Telefonnummer" },
    { key: "premAkutsprechstunde", label: "Akutsprechstunden-Buchung (60 Min.)" },
    { key: "premMehrereBehandler", label: "Mehrere Behandler mit getrennten Kalendern" },
    { key: "premFailover", label: "Automatisches Failover (Backup-Nummern)" },
    { key: "premSms", label: "SMS-Benachrichtigung ans Praxisteam" },
  ];

  return (
    <div style={{ maxWidth: "620px", margin: "0 auto", cursor: "default" }}>
      {/* Progress Bar */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "40px" }}>
        {STEPS.map((s, i) => (
          <div key={s.id} style={{ flex: 1 }}>
            <div
              style={{
                height: "3px",
                borderRadius: "2px",
                background: i <= step ? "#60a5fa" : "rgba(255,255,255,0.1)",
                transition: "background 0.3s",
              }}
            />
            <p
              style={{
                margin: "6px 0 0",
                fontSize: "11px",
                color: i === step ? "#60a5fa" : "rgba(255,255,255,0.3)",
                fontWeight: i === step ? 600 : 400,
                transition: "color 0.3s",
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── SCHRITT 0: Praxis ── */}
      {step === 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", margin: "0 0 6px" }}>
              Erzählen Sie uns von Ihrer Praxis.
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", margin: 0 }}>
              Schritt 1 von 4
            </p>
          </div>

          <div>
            <label style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "6px" }}>
              Praxisname *
            </label>
            <input
              style={inputStyle}
              placeholder="z. B. Zahnarztpraxis Dr. Müller"
              value={form.praxisname}
              onChange={(e) => set("praxisname", e.target.value)}
              onFocus={(e) => (e.target.style.borderColor = "rgba(96,165,250,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </div>

          <div>
            <label style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "8px" }}>
              Fachrichtung *
            </label>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {FACHRICHTUNGEN.map((f) => (
                <div
                  key={f}
                  onClick={() => set("fachrichtung", f)}
                  style={checkboxItemStyle(form.fachrichtung === f)}
                >
                  <div style={radioStyle(form.fachrichtung === f)}>
                    {form.fachrichtung === f && (
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#000" }} />
                    )}
                  </div>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "6px" }}>
                PLZ (optional)
              </label>
              <input
                style={inputStyle}
                placeholder="z. B. 48153"
                value={form.plz}
                onChange={(e) => set("plz", e.target.value)}
                onFocus={(e) => (e.target.style.borderColor = "rgba(96,165,250,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
            <div>
              <label style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "6px" }}>
                Anrufvolumen (optional)
              </label>
              <select
                style={{ ...inputStyle, cursor: "pointer" }}
                value={form.anrufvolumen}
                onChange={(e) => set("anrufvolumen", e.target.value)}
              >
                <option value="" style={{ background: "#0a0a0a" }}>Bitte wählen</option>
                {ANRUFVOLUMEN.map((a) => (
                  <option key={a} value={a} style={{ background: "#0a0a0a" }}>{a}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* ── SCHRITT 1: Module ── */}
      {step === 1 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", margin: "0 0 6px" }}>
              Was soll Ihr Assistent können?
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", margin: 0 }}>
              Schritt 2 von 4 — Der Kern ist immer inklusive.
            </p>
          </div>

          {/* Kern — always active */}
          <div>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4ade80", marginBottom: "10px" }}>
              ◎ Kern — immer inklusive
            </p>
            <div style={{ padding: "16px", borderRadius: "12px", border: "1px solid rgba(74,222,128,0.2)", background: "rgba(74,222,128,0.04)" }}>
              {[
                "Anrufe entgegennehmen & Anliegen verstehen",
                "Häufige Fragen sofort beantworten",
                "Notfallprotokoll mit Weiterleitung",
                "Stimme, Name & Tonalität nach Wahl",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ color: "#4ade80", fontSize: "12px" }}>✓</span>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Buchungs-Modul */}
          <div>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#60a5fa", marginBottom: "10px" }}>
              ◈ Buchungs-Modul
            </p>
            <div onClick={() => toggle("modBuchung")} style={checkboxItemStyle(form.modBuchung, "#60a5fa")}>
              <div style={checkStyle(form.modBuchung, "#60a5fa")}>{form.modBuchung && "✓"}</div>
              <div>
                <div style={{ fontSize: "14px", color: "#fff", fontWeight: 500, marginBottom: "3px" }}>
                  Terminbuchung, -verschiebung & -stornierung
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                  Kalender-Anbindung, Feiertagserkennung, Pufferzeit & Stornofrist
                </div>
              </div>
            </div>

            {form.modBuchung && (
              <div style={{ marginTop: "8px", paddingLeft: "4px" }}>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginBottom: "8px" }}>
                  Welchen Kalender nutzen Sie?
                </p>
                {KALENDER.map((k) => (
                  <div
                    key={k}
                    onClick={() => set("kalender", k)}
                    style={{ ...checkboxItemStyle(form.kalender === k, "#60a5fa"), marginBottom: "6px" }}
                  >
                    <div style={radioStyle(form.kalender === k, "#60a5fa")}>
                      {form.kalender === k && (
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#000" }} />
                      )}
                    </div>
                    <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{k}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Komfort-Modul */}
          <div>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a78bfa", marginBottom: "10px" }}>
              ◇ Komfort-Modul
            </p>
            <div onClick={() => toggle("modKomfort")} style={checkboxItemStyle(form.modKomfort, "#a78bfa")}>
              <div style={checkStyle(form.modKomfort, "#a78bfa")}>{form.modKomfort && "✓"}</div>
              <div>
                <div style={{ fontSize: "14px", color: "#fff", fontWeight: 500, marginBottom: "3px" }}>
                  E-Mail-Benachrichtigungen, Rückrufe & erweitertes FAQ
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                  Doppelbuchungs-Erkennung, Behandlungsspezifische Regeln
                </div>
              </div>
            </div>
          </div>

          {/* Premium */}
          <div>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#f59e0b", marginBottom: "10px" }}>
              ★ Premium (optional, auf Anfrage)
            </p>
            {premItems.map((p) => (
              <div
                key={p.key}
                onClick={() => toggle(p.key)}
                style={{ ...checkboxItemStyle(form[p.key], "#f59e0b"), marginBottom: "6px" }}
              >
                <div style={checkStyle(form[p.key], "#f59e0b")}>{form[p.key] && "✓"}</div>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── SCHRITT 2: Stimme ── */}
      {step === 2 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", margin: "0 0 6px" }}>
              Wie soll Ihr Assistent klingen?
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", margin: 0 }}>
              Schritt 3 von 4
            </p>
          </div>

          <div>
            <label style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "8px" }}>
              Geschlecht der Stimme
            </label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {GESCHLECHTER.map((g) => (
                <div
                  key={g}
                  onClick={() => set("geschlecht", g)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "100px",
                    border: `1px solid ${form.geschlecht === g ? "rgba(96,165,250,0.6)" : "rgba(255,255,255,0.1)"}`,
                    background: form.geschlecht === g ? "rgba(96,165,250,0.12)" : "transparent",
                    color: form.geschlecht === g ? "#60a5fa" : "rgba(255,255,255,0.6)",
                    fontSize: "13px",
                    fontWeight: form.geschlecht === g ? 600 : 400,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    userSelect: "none",
                  }}
                >
                  {g}
                </div>
              ))}
            </div>
          </div>

          <div>
            <label style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "8px" }}>
              Tonalität
            </label>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {TONALITAETEN.map((t) => (
                <div key={t} onClick={() => set("tonalitaet", t)} style={checkboxItemStyle(form.tonalitaet === t)}>
                  <div style={radioStyle(form.tonalitaet === t)}>
                    {form.tonalitaet === t && (
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#000" }} />
                    )}
                  </div>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "6px" }}>
              Name des Assistenten (optional)
            </label>
            <input
              style={inputStyle}
              placeholder='z. B. "Lisa" oder "Eva" — leer = nur Praxisname'
              value={form.assistentname}
              onChange={(e) => set("assistentname", e.target.value)}
              onFocus={(e) => (e.target.style.borderColor = "rgba(96,165,250,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </div>
        </div>
      )}

      {/* ── SCHRITT 3: Kontakt ── */}
      {step === 3 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", margin: "0 0 6px" }}>
              Wie erreichen wir Sie?
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", margin: 0 }}>
              Schritt 4 von 4 — fast geschafft.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div>
              <label style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "6px" }}>
                Ihr Name *
              </label>
              <input
                style={inputStyle}
                placeholder="Vor- und Nachname"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                onFocus={(e) => (e.target.style.borderColor = "rgba(96,165,250,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
            <div>
              <label style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "6px" }}>
                Telefon (optional)
              </label>
              <input
                style={inputStyle}
                placeholder="+49 ..."
                value={form.telefon}
                onChange={(e) => set("telefon", e.target.value)}
                onFocus={(e) => (e.target.style.borderColor = "rgba(96,165,250,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
          </div>

          <div>
            <label style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "6px" }}>
              E-Mail-Adresse *
            </label>
            <input
              style={inputStyle}
              type="email"
              placeholder="praxis@beispiel.de"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              onFocus={(e) => (e.target.style.borderColor = "rgba(96,165,250,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </div>

          <div>
            <label style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: "6px" }}>
              Anmerkungen & besondere Wünsche (optional)
            </label>
            <textarea
              style={{ ...inputStyle, minHeight: "90px", resize: "vertical" }}
              placeholder="Was ist Ihnen besonders wichtig? Gibt es Sonderwünsche?"
              value={form.anmerkungen}
              onChange={(e) => set("anmerkungen", e.target.value)}
              onFocus={(e) => (e.target.style.borderColor = "rgba(96,165,250,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </div>

          <div
            onClick={() => toggle("datenschutz")}
            style={{ display: "flex", gap: "12px", cursor: "pointer", userSelect: "none" }}
          >
            <div style={checkStyle(form.datenschutz, "#60a5fa")}>{form.datenschutz && "✓"}</div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.5 }}>
              Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden. (
              <span style={{ color: "#60a5fa", textDecoration: "underline" }}>Datenschutzerklärung</span>) *
            </p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "36px",
          paddingTop: "24px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <button
          onClick={() => setStep((s) => s - 1)}
          disabled={step === 0}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "100px",
            padding: "11px 22px",
            color: step === 0 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.6)",
            fontSize: "14px",
            cursor: step === 0 ? "not-allowed" : "pointer",
            transition: "all 0.2s",
          }}
        >
          ← Zurück
        </button>

        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
          {step + 1} / {STEPS.length}
        </span>

        {step < STEPS.length - 1 ? (
          <button
            onClick={() => canNext() && setStep((s) => s + 1)}
            style={{
              background: canNext() ? "#60a5fa" : "rgba(96,165,250,0.2)",
              border: "none",
              borderRadius: "100px",
              padding: "11px 28px",
              color: canNext() ? "#000" : "rgba(255,255,255,0.3)",
              fontSize: "14px",
              fontWeight: 600,
              cursor: canNext() ? "pointer" : "not-allowed",
              transition: "all 0.2s",
            }}
          >
            Weiter →
          </button>
        ) : (
          <button
            onClick={canNext() ? handleSubmit : undefined}
            disabled={loading || !canNext()}
            style={{
              background: canNext() && !loading ? "#4ade80" : "rgba(74,222,128,0.2)",
              border: "none",
              borderRadius: "100px",
              padding: "11px 28px",
              color: canNext() && !loading ? "#000" : "rgba(255,255,255,0.3)",
              fontSize: "14px",
              fontWeight: 600,
              cursor: canNext() && !loading ? "pointer" : "not-allowed",
              transition: "all 0.2s",
            }}
          >
            {loading ? "Wird gesendet ..." : "Anfrage senden →"}
          </button>
        )}
      </div>
    </div>
  );
}
