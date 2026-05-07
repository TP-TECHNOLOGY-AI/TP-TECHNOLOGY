"use client";

import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { ClipboardList, Bot, Rocket } from "lucide-react";

const howItWorksData = [
  {
    id: 1,
    title: "Konfiguration",
    date: "Schritt 1",
    content:
      "Sie füllen unseren Onboarding-Fragebogen aus — in etwa 20 Minuten. Wir erfahren alles Wichtige: Öffnungszeiten, Terminarten, Notfallprotokoll, FAQ und die gewünschte Persönlichkeit Ihres Assistenten.",
    category: "Setup",
    icon: ClipboardList,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Demo & Einrichtung",
    date: "Schritt 2",
    content:
      "Unser Team konfiguriert Ihren persönlichen Assistenten — abgestimmt auf Ihre Praxis, Ihren Kalender und Ihre Abläufe. Innerhalb von bis zu 3 Wochen erhalten Sie eine Demo-Version zum Testen.",
    category: "Development",
    icon: Bot,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 3,
    title: "Go-Live",
    date: "Schritt 3",
    content:
      "Nach Ihrer Freigabe geht der Assistent live. Er nimmt ab diesem Moment Anrufe entgegen, bucht Termine und entlastet Ihr Team. Wir begleiten Sie und optimieren bei Bedarf.",
    category: "Launch",
    icon: Rocket,
    relatedIds: [2],
    status: "pending" as const,
    energy: 30,
  },
];

export default function HowItWorks() {
  return (
    <section id="ablauf" className="relative bg-black section-glow">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-4">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[5px] text-[#7eb8d0]/60 font-medium mb-5">
            Ablauf
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Von der Anfrage zur Lösung.
            <br />
            <span className="text-[#7eb8d0]">In drei Schritten.</span>
          </h2>
          <p className="mt-5 text-white/75 text-sm font-light">
            Klicken Sie auf einen Schritt für Details.
          </p>
        </div>
      </div>
      {/* RadialOrbitalTimeline already has black bg — seamless */}
      <RadialOrbitalTimeline timelineData={howItWorksData} />
    </section>
  );
}
