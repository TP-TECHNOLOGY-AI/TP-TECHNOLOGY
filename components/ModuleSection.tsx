"use client";

import { useState } from "react";

const KERN = [
  "Anrufe entgegennehmen & Anliegen verstehen",
  "Häufige Fragen sofort beantworten (Öffnungszeiten, Adresse, Leistungen)",
  "Notfallprotokoll mit Weiterleitung ans Praxisteam",
  "Stimme, Name & Tonalität nach Wahl",
  "Individuelle Begrüßung & Verabschiedung",
  "Spricht nur über praxisrelevante Themen — keine Diagnosen",
];

const BUCHUNG = [
  "Terminbuchung direkt in Ihren Kalender (Echtzeit)",
  "Terminverschiebung & Stornierung",
  "Kalender-Anbindung: Google Calendar oder Outlook",
  "Automatische Feiertagserkennung",
  "Pufferzeit zwischen Terminen konfigurierbar",
  "Mindestvorlauf & maximales Buchungsfenster konfigurierbar",
  "Stornofrist konfigurierbar",
];

const KOMFORT = [
  "E-Mail-Benachrichtigung ans Team nach jeder Buchung",
  "Rückrufwünsche vormerken & in Kalender eintragen",
  "Doppelbuchungs-Erkennung",
  "Erweiterte Wissensdatenbank mit praxisindividuellen FAQ",
  "Behandlungsspezifische Buchungsregeln (was direkt buchbar ist)",
];

const PREMIUM = [
  "Mehrere Behandler mit getrennten Kalendern",
  "Automatischer Bestandspatienten-Abgleich per Telefonnummer",
  "Akutsprechstunden-Buchung (Termin innerhalb 60 Minuten)",
  "Automatisches Failover bei Weiterleitung (Backup-Nummern)",
  "SMS-Benachrichtigung ans Praxisteam",
];

interface Module {
  id: string;
  badge: string;
  badgeColor: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  accentColor: string;
  borderColor: string;
  bgGlow: string;
}

const MODULES: Module[] = [
  {
    id: "kern",
    badge: "Immer inklusive",
    badgeColor: "#2d6a4f",
    icon: "◎",
    title: "Kern",
    subtitle: "Der Assistent, der Ihre Praxis kennt.",
    description:
      "Jede Konfiguration enthält diesen Kern. Er macht Ihren Assistenten zu einer echten Stimme Ihrer Praxis — kompetent, freundlich, immer erreichbar.",
    items: KERN,
    accentColor: "#4ade80",
    borderColor: "rgba(74, 222, 128, 0.25)",
    bgGlow: "rgba(74, 222, 128, 0.04)",
  },
  {
    id: "buchung",
    badge: "Modul zubuchbar",
    badgeColor: "#1a3a52",
    icon: "◈",
    title: "Buchungs-Modul",
    subtitle: "Termine — vollautomatisch.",
    description:
      "Für Praxen, die Terminbuchungen automatisieren wollen. Der Assistent bucht, verschiebt und storniert direkt in Ihrem Kalender — ohne Ihr Team zu belasten.",
    items: BUCHUNG,
    accentColor: "#60a5fa",
    borderColor: "rgba(96, 165, 250, 0.25)",
    bgGlow: "rgba(96, 165, 250, 0.04)",
  },
  {
    id: "komfort",
    badge: "Modul zubuchbar",
    badgeColor: "#1a3a52",
    icon: "◇",
    title: "Komfort-Modul",
    subtitle: "Mehr Automatisierung, weniger Aufwand.",
    description:
      "Für Praxen, die ihr Team maximal entlasten wollen. E-Mails, Rückrufe, erweiterte FAQ — alles läuft im Hintergrund.",
    items: KOMFORT,
    accentColor: "#a78bfa",
    borderColor: "rgba(167, 139, 250, 0.25)",
    bgGlow: "rgba(167, 139, 250, 0.04)",
  },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      style={{ flexShrink: 0, marginTop: "1px" }}
    >
      <circle cx="7.5" cy="7.5" r="7.5" fill={color} fillOpacity="0.15" />
      <path
        d="M4.5 7.5L6.5 9.5L10.5 5.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      style={{ flexShrink: 0, marginTop: "1px" }}
    >
      <path
        d="M7.5 1L9.18 5.27L13.73 5.64L10.46 8.47L11.55 12.91L7.5 10.4L3.45 12.91L4.54 8.47L1.27 5.64L5.82 5.27L7.5 1Z"
        fill="#f59e0b"
        fillOpacity="0.2"
        stroke="#f59e0b"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ModuleCard({ module, index }: { module: Module; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? module.accentColor.replace(")", ", 0.5)").replace("rgb", "rgba") : module.borderColor}`,
        borderRadius: "20px",
        padding: "36px",
        background: hovered ? module.bgGlow : "rgba(255,255,255,0.02)",
        backdropFilter: "blur(12px)",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px ${module.borderColor}`
          : "none",
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: module.accentColor,
            background: `${module.accentColor}18`,
            border: `1px solid ${module.accentColor}30`,
            borderRadius: "100px",
            padding: "4px 12px",
          }}
        >
          {module.badge}
        </span>
      </div>

      {/* Header */}
      <div>
        <div
          style={{
            fontSize: "32px",
            marginBottom: "8px",
            color: module.accentColor,
            lineHeight: 1,
          }}
        >
          {module.icon}
        </div>
        <h3
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#ffffff",
            margin: "0 0 6px",
            letterSpacing: "-0.3px",
          }}
        >
          {module.title}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: module.accentColor,
            margin: 0,
            fontWeight: 500,
          }}
        >
          {module.subtitle}
        </p>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "14px",
          lineHeight: "1.65",
          color: "rgba(255,255,255,0.5)",
          margin: 0,
        }}
      >
        {module.description}
      </p>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: `linear-gradient(90deg, ${module.accentColor}30, transparent)`,
        }}
      />

      {/* Feature List */}
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
        {module.items.map((item, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              fontSize: "13.5px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: "1.5",
            }}
          >
            <CheckIcon color={module.accentColor} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ModuleSection() {
  return (
    <section
      id="individualisierung"
      style={{
        padding: "120px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Section Label */}
      <p
        style={{
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#60a5fa",
          marginBottom: "16px",
          textAlign: "center",
        }}
      >
        Individualisierung
      </p>

      {/* Headline */}
      <h2
        style={{
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 700,
          color: "#ffffff",
          textAlign: "center",
          lineHeight: 1.15,
          letterSpacing: "-1px",
          marginBottom: "16px",
        }}
      >
        Jede Praxis ist anders.
        <br />
        <span style={{ color: "rgba(255,255,255,0.45)" }}>Ihr Assistent auch.</span>
      </h2>

      {/* Subline */}
      <p
        style={{
          fontSize: "17px",
          color: "rgba(255,255,255,0.5)",
          textAlign: "center",
          maxWidth: "560px",
          margin: "0 auto 64px",
          lineHeight: 1.65,
        }}
      >
        Wählen Sie nur, was Sie wirklich brauchen.
        Kein Einheitspaket — nur Funktionen, die zu Ihrer Praxis passen.
      </p>

      {/* 3 Module Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {MODULES.map((module, index) => (
          <ModuleCard key={module.id} module={module} index={index} />
        ))}
      </div>

      {/* Premium Block — full width, different style */}
      <div
        style={{
          border: "1px solid rgba(245, 158, 11, 0.2)",
          borderRadius: "20px",
          padding: "36px 40px",
          background: "rgba(245, 158, 11, 0.03)",
          backdropFilter: "blur(12px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Left: header */}
        <div>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#f59e0b",
              background: "rgba(245, 158, 11, 0.1)",
              border: "1px solid rgba(245, 158, 11, 0.2)",
              borderRadius: "100px",
              padding: "4px 12px",
              display: "inline-block",
              marginBottom: "20px",
            }}
          >
            Premium — auf Anfrage
          </span>

          <h3
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#ffffff",
              margin: "0 0 12px",
              letterSpacing: "-0.3px",
            }}
          >
            Für Praxen, die mehr wollen.
          </h3>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.65",
              color: "rgba(255,255,255,0.45)",
              margin: 0,
            }}
          >
            Premium-Funktionen werden individuell konfiguriert
            und nach Aufwand berechnet. Sie wählen nur, was Sie
            brauchen — wir beraten Sie im Erstgespräch.
          </p>
        </div>

        {/* Right: feature list */}
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {PREMIUM.map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                fontSize: "13.5px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: "1.5",
              }}
            >
              <StarIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Note */}
      <p
        style={{
          textAlign: "center",
          fontSize: "13px",
          color: "rgba(255,255,255,0.3)",
          marginTop: "32px",
        }}
      >
        Alle Module werden individuell konfiguriert — kein Baukastensystem von der Stange.
      </p>
    </section>
  );
}
