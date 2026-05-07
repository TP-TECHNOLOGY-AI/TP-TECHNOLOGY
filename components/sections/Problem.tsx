"use client";

const painPoints = [
  {
    icon: "📞",
    title: "Verpasste Anrufe",
    stat: "30 %",
    statLabel: "aller Anrufe unbeantwortet",
    desc: "Durchschnittlich 30 % aller eingehenden Anrufe in Arztpraxen werden nicht angenommen — jeder davon ist ein potenziell verlorener Patient.",
    accent: "#4ade80",
  },
  {
    icon: "🔄",
    title: "Repetitive Anfragen",
    stat: "∞",
    statLabel: "dieselben Fragen täglich",
    desc: "Öffnungszeiten, Anfahrt, Wartezeiten, Leistungen — dieselben Fragen, täglich dutzendfach. Ihr Team kann mehr.",
    accent: "#60a5fa",
  },
  {
    icon: "🌙",
    title: "Keine Erreichbarkeit",
    stat: "16 h",
    statLabel: "täglich nicht erreichbar",
    desc: "Patienten rufen auch abends und am Wochenende an. Ohne Lösung: kein Kontakt, keine Buchung, kein Rückruf.",
    accent: "#a78bfa",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative bg-black py-32 overflow-hidden section-glow">
      {/* Coloured background blobs per card position */}
      <div className="absolute top-0 left-[15%] w-[300px] h-[200px] rounded-full blur-[100px] pointer-events-none" style={{ background: "rgba(74,222,128,0.04)" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] rounded-full blur-[100px] pointer-events-none" style={{ background: "rgba(96,165,250,0.04)" }} />
      <div className="absolute top-0 right-[15%] w-[300px] h-[200px] rounded-full blur-[100px] pointer-events-none" style={{ background: "rgba(167,139,250,0.04)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <p className="text-xs uppercase tracking-[5px] text-[#7eb8d0]/60 font-medium mb-5">
          Warum Praxen uns brauchen
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          Jeder Anruf zählt.
          <br />
          <span className="glow-subheading">Aber wer nimmt ihn an?</span>
        </h2>
        <p className="text-base text-white/80 max-w-2xl leading-relaxed mb-4 font-light">
          Ihre Rezeptionskraft ist beschäftigt, eine Patientin liegt im Behandlungsstuhl, das
          Telefon klingelt — und niemand hebt ab. Der Anrufer legt auf und ruft die nächste
          Praxis an.
        </p>
        <p className="text-base text-white/80 max-w-2xl leading-relaxed mb-20 font-light">
          Verpasste Anrufe bedeuten verpasste Patienten. Gleichzeitig verbringt Ihr Team
          wertvolle Zeit damit, immer wieder dieselben Fragen zu beantworten — Zeit, die für
          echte Patientenbetreuung fehlt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 overflow-hidden transition-all duration-500"
              style={{ borderTopColor: `${point.accent}35` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${point.accent}40`;
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
                style={{ background: `linear-gradient(90deg, transparent, ${point.accent}70, transparent)` }}
              />
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at top, ${point.accent}08, transparent 70%)` }}
              />

              <div className="relative z-10">
                <div className="text-3xl mb-6">{point.icon}</div>
                <div className="mb-4">
                  <span
                    className="text-5xl font-bold transition-colors duration-500"
                    style={{ color: `${point.accent}25` }}
                    ref={(el) => {
                      if (!el) return;
                      const card = el.closest(".group") as HTMLElement;
                      card?.addEventListener("mouseenter", () => { el.style.color = `${point.accent}55`; });
                      card?.addEventListener("mouseleave", () => { el.style.color = `${point.accent}25`; });
                    }}
                  >
                    {point.stat}
                  </span>
                  <p className="text-xs text-white/70 mt-1 uppercase tracking-widest">{point.statLabel}</p>
                </div>
                <h3 className="text-base font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed font-light">{point.desc}</p>
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
