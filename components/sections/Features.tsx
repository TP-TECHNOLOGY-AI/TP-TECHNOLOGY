"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const featureGroups = [
  {
    title: "Terminverwaltung",
    color: "#7eb8d0",
    items: [
      "Terminbuchung in Echtzeit",
      "Terminverschiebung & Stornierung",
      "Automatische Pufferzeit zwischen Terminen",
      "Doppelbuchungs-Erkennung",
      "E-Mail-Benachrichtigung ans Praxisteam",
    ],
  },
  {
    title: "Intelligente Verfügbarkeit",
    color: "#5ba3c9",
    items: [
      "Automatische Feiertagserkennung",
      "Konfigurierbarer Mindestvorlauf",
      "Konfigurierbares Buchungsfenster",
      "Behandlungsspezifische Buchungsregeln",
    ],
  },
  {
    title: "Patientenmanagement",
    color: "#9dd0e8",
    items: [
      "Unterscheidung Neu- und Bestandspatient",
      "Erfassung Name, Telefon, Versicherungsstatus",
      "Notizen direkt im Kalender-Eintrag",
      "Rückrufwünsche vormerken",
    ],
  },
  {
    title: "FAQ & Notfall",
    color: "#7eb8d0",
    items: [
      "Individuelle Wissensdatenbank",
      "Direktantworten ohne Rückrufschleife",
      "Notfallerkennung aus dem Gespräch",
      "Direkte Weiterleitung an Praxisteam",
    ],
  },
];

export default function Features() {
  return (
    <section id="funktionen" className="bg-black overflow-hidden section-glow">
      <ContainerScroll
        titleComponent={
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[5px] text-[#7eb8d0]/60 font-medium mb-5">
              Funktionen
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Alles, was Ihr Empfang kann.
              <br />
              <span className="glow-subheading">Und einiges mehr.</span>
            </h2>
          </div>
        }
      >
        {/* Dashboard card — dark, with blue accents */}
        <div className="w-full h-full bg-[#050505] p-5 md:p-8 overflow-auto">
          {/* Fake topbar */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.06]">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#7eb8d0]/40" />
            <span className="ml-3 text-xs text-white/20 font-mono">TP Technology · Assistenten-Dashboard</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[calc(100%-60px)]">
            {featureGroups.map((group) => (
              <div
                key={group.title}
                className="relative bg-white/[0.03] rounded-xl p-5 border border-white/[0.06] overflow-hidden group hover:border-[#7eb8d0]/20 transition-all duration-300"
              >
                <div
                  className="absolute top-0 left-0 w-full h-[2px] opacity-60"
                  style={{ background: `linear-gradient(90deg, ${group.color}, transparent)` }}
                />
                <h3
                  className="text-xs font-semibold mb-4 uppercase tracking-widest"
                  style={{ color: group.color }}
                >
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/75 text-[12px] font-light">
                      <span className="mt-0.5 text-[10px]" style={{ color: group.color }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
