"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Für welche Praxen ist der Assistent geeignet?",
    a: "Für alle Arztpraxen — von der Zahnarztpraxis über die Allgemeinmedizin bis zur Fachpraxis. Solange Sie Termine per Telefon vereinbaren, kann unser Assistent Ihnen helfen.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "In der Regel bis zu 3 Wochen von der ersten Anfrage bis zum Go-Live. Nach Ihrer Freigabe der Demo kann es auch schneller gehen.",
  },
  {
    q: "Muss ich etwas an meiner Telefonanlage ändern?",
    a: "Nicht zwingend. In den meisten Fällen wird eine Rufumleitung eingerichtet — entweder dauerhaft oder nur wenn der Anschluss besetzt ist oder nicht abgenommen wird. Wir beraten Sie dabei.",
  },
  {
    q: "Welchen Kalender brauche ich?",
    a: "Google Calendar oder Microsoft Outlook / Office 365. Andere Systeme auf Anfrage.",
  },
  {
    q: "Was kostet der Assistent?",
    a: "Es gibt eine einmalige Setup-Gebühr und eine monatliche Nutzungsgebühr. Die genaue Höhe hängt von der Konfiguration ab. Sprechen Sie uns an — wir erstellen Ihnen ein individuelles Angebot.",
  },
  {
    q: "Ist der Assistent DSGVO-konform?",
    a: "Ja. Wir schließen mit Ihnen einen Auftragsverarbeitungsvertrag (AVV) ab und erheben nur die Daten, die für die Terminverwaltung notwendig sind.",
  },
  {
    q: "Was passiert, wenn der Assistent eine Frage nicht beantworten kann?",
    a: "Er leitet den Anrufer freundlich weiter — entweder zu Ihrem Team oder er hinterlegt einen Rückrufwunsch.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-black py-32 overflow-hidden section-glow">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#7eb8d0]/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Häufige Fragen
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="group border border-white/[0.06] rounded-xl overflow-hidden hover:border-[#7eb8d0]/20 transition-all duration-300"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-white/70 text-[14px] group-hover:text-white transition-colors duration-200">
                  {faq.q}
                </span>
                <span
                  className={`text-[#7eb8d0]/60 text-xl font-light transition-transform duration-300 shrink-0 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 bg-white/[0.02]">
                  <div className="w-full h-[1px] bg-white/[0.06] mb-4" />
                  <p className="text-white/80 text-sm leading-relaxed font-light">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
