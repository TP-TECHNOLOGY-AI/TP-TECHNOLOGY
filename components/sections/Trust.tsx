const trustItems = [
  {
    icon: "🔒",
    title: "DSGVO-konform",
    desc: "Der Assistent erhebt nur die Daten, die wirklich benötigt werden. Auf Wunsch weist er Anrufer zu Beginn auf die Verarbeitung hin. Ein AVV ist selbstverständlich.",
  },
  {
    icon: "🤖",
    title: "KI-Transparenz",
    desc: "Wir empfehlen Transparenz: Der Assistent kann sich aktiv als digitaler Assistent zu erkennen geben — im Sinne des EU AI Acts.",
  },
  {
    icon: "🏥",
    title: "Nur Praxisthemen",
    desc: "Keine Diagnosen, keine Behandlungsempfehlungen. Klare Grenzen — klare Weiterleitung.",
  },
  {
    icon: "🇩🇪",
    title: "Made in Germany",
    desc: "Deutschsprachig von Grund auf. Gesetzliche Feiertage, DSGVO, GKV und PKV — alles berücksichtigt.",
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
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-[#7eb8d0]/20 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7eb8d0]/0 to-transparent group-hover:via-[#7eb8d0]/20 transition-all duration-500" />
              <div className="text-2xl mb-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {item.icon}
              </div>
              <h3 className="text-[11px] font-semibold text-white/60 mb-3 uppercase tracking-[3px]">
                {item.title}
              </h3>
              <p className="text-white/35 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
