const painPoints = [
  {
    icon: "📞",
    title: "Verpasste Anrufe",
    stat: "30 %",
    statLabel: "aller Anrufe unbeantwortet",
    desc: "Durchschnittlich 30 % aller eingehenden Anrufe in Arztpraxen werden nicht angenommen — jeder davon ist ein potenziell verlorener Patient.",
  },
  {
    icon: "🔄",
    title: "Repetitive Anfragen",
    stat: "∞",
    statLabel: "dieselben Fragen täglich",
    desc: "Öffnungszeiten, Anfahrt, Wartezeiten, Leistungen — dieselben Fragen, täglich dutzendfach. Ihr Team kann mehr.",
  },
  {
    icon: "🌙",
    title: "Keine Erreichbarkeit",
    stat: "16 h",
    statLabel: "täglich nicht erreichbar",
    desc: "Patienten rufen auch abends und am Wochenende an. Ohne Lösung: kein Kontakt, keine Buchung, kein Rückruf.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative bg-black py-32 overflow-hidden section-glow">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7eb8d0]/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <p className="text-xs uppercase tracking-[5px] text-[#7eb8d0]/60 font-medium mb-5">
          Warum Praxen uns brauchen
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          Jeder Anruf zählt.
          <br />
          <span className="text-white/30">Aber wer nimmt ihn an?</span>
        </h2>
        <p className="text-base text-white/40 max-w-2xl leading-relaxed mb-4 font-light">
          Ihre Rezeptionskraft ist beschäftigt, eine Patientin liegt im Behandlungsstuhl, das
          Telefon klingelt — und niemand hebt ab. Der Anrufer legt auf und ruft die nächste
          Praxis an.
        </p>
        <p className="text-base text-white/40 max-w-2xl leading-relaxed mb-20 font-light">
          Verpasste Anrufe bedeuten verpasste Patienten. Gleichzeitig verbringt Ihr Team
          wertvolle Zeit damit, immer wieder dieselben Fragen zu beantworten — Zeit, die für
          echte Patientenbetreuung fehlt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 hover:border-[#7eb8d0]/30 hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7eb8d0]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-3xl mb-6">{point.icon}</div>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white/10 group-hover:text-[#7eb8d0]/20 transition-colors duration-500">
                    {point.stat}
                  </span>
                  <p className="text-xs text-white/25 mt-1 uppercase tracking-widest">{point.statLabel}</p>
                </div>
                <h3 className="text-base font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade out */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
