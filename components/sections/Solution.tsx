"use client";

import { SplineScene } from "@/components/ui/spline-scene";
import { Spotlight } from "@/components/ui/spotlight";

const features = [
  { icon: "🗣️", title: "Spricht wie ein Mensch", desc: "Natürliche, warme Konversation — in Deutsch, angepasst an den Stil Ihrer Praxis." },
  { icon: "⏰", title: "Arbeitet rund um die Uhr", desc: "Kein Feierabend, kein Urlaub, kein Krankheitstag." },
  { icon: "📅", title: "Bucht direkt in Ihren Kalender", desc: "Echtzeit-Buchung in Google Calendar oder Outlook — automatisch, ohne manuelle Arbeit." },
  { icon: "🧠", title: "Lernt Ihre Praxis kennen", desc: "Öffnungszeiten, Behandlungsangebote, Patientenfragen — vollständig auf Ihre Praxis zugeschnitten." },
];

export default function Solution() {
  return (
    <section id="loesung" className="relative bg-black py-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-[#7eb8d0]/[0.05] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[5px] text-[#7eb8d0]/60 font-medium mb-5">
            Die Lösung
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Ihr persönlicher KI-Assistent.
            <br />
            <span className="text-[#7eb8d0]">Von Ihrer Praxis. Für Ihre Patienten.</span>
          </h2>
        </div>

        {/* Card that blends with black bg via border only */}
        <div className="relative w-full border border-white/[0.07] rounded-3xl overflow-hidden min-h-[520px] bg-[#050505]">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(126,184,208,0.5)" />

          <div className="flex flex-col md:flex-row h-full min-h-[520px]">
            {/* Left: text */}
            <div className="flex-1 p-10 md:p-14 relative z-10 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[4px] text-[#7eb8d0]/50 font-medium mb-8">
                TP Technology entwickelt KI-Telefonassistenten,
                die klingen wie echte Menschen.
              </p>
              <div className="space-y-7">
                {features.map((f) => (
                  <div key={f.title} className="flex gap-4 items-start group">
                    <span className="text-2xl mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity">{f.icon}</span>
                    <div>
                      <h3 className="text-white font-semibold text-base mb-1">{f.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed font-light">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Spline */}
            <div className="flex-1 relative min-h-[320px] md:min-h-0">
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent z-10 pointer-events-none md:block hidden" />
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full min-h-[320px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
