"use client";

const trustItems = [
  {
    icon: "🔒",
    title: "DSGVO-konform",
    desc: "Der Assistent erhebt nur die Daten, die wirklich benötigt werden. Auf Wunsch weist er Anrufer zu Beginn auf die Verarbeitung hin. Ein AVV ist selbstverständlich.",
    accent: "#4ade80",
  },
  {
    icon: "🤖",
    title: "KI-Transparenz",
    desc: "Wir empfehlen Transparenz: Der Assistent kann sich aktiv als digitaler Assistent zu erkennen geben — im Sinne des EU AI Acts.",
    accent: "#60a5fa",
  },
  {
    icon: "🏥",
    title: "Nur Praxisthemen",
    desc: "Keine Diagnosen, keine Behandlungsempfehlungen. Klare Grenzen — klare Weiterleitung.",
    accent: "#a78bfa",
  },
  {
    icon: "🇩🇪",
    title: "Made in Germany",
    desc: "Deutschsprachig von Grund auf. Gesetzliche Feiertage, DSGVO, GKV und PKV — alles berücksichtigt.",
    accent: "#f59e0b",
  },
];

export default function Trust() {
  return (
    <section className="relative bg-black py-32 overflow-hidden section-glow grid-texture">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[5px] text-[#7eb8d0]/60 font-medium mb-5">
            Vertrauen
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Sicherheit und Datenschutz.
            <br />
            <span className="text-[#7eb8d0]">Von Anfang an mitgedacht.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 overflow-hidden transition-all duration-500"
              style={{ borderTopColor: `${item.accent}40` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${item.accent}35`;
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "";
                (e.currentTarget as HTMLDivElement).style.background = "";
              }}
            >
              {/* Coloured top line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, transparent, ${item.accent}80, transparent)` }}
              />
              {/* Bottom glow on hover */}
              <div
                className="absolute bottom-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${item.accent}40, transparent)` }}
              />
              {/* Inner glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at top, ${item.accent}07, transparent 65%)` }}
              />

              <div
                className="text-2xl mb-5 transition-all duration-300"
                style={{ filter: "grayscale(0.2)", opacity: 0.8 }}
              >
                {item.icon}
              </div>
              <h3
                className="text-[11px] font-semibold mb-3 uppercase tracking-[3px] transition-colors duration-300"
                style={{ color: `${item.accent}90` }}
              >
                {item.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
