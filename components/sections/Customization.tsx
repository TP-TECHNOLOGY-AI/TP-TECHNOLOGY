const standardFeatures = [
  "Terminbuchung, -verschiebung, -stornierung",
  "Automatische Feiertagserkennung",
  "Pufferzeit, Vorlauf & Buchungsfenster konfigurierbar",
  "Stornofrist konfigurierbar",
  "Doppelbuchungs-Erkennung",
  "E-Mail-Benachrichtigung ans Team",
  "Individuelle Wissensdatenbank (FAQ)",
  "Notfallprotokoll mit Weiterleitung",
  "Rückrufwünsche vormerken & eintragen",
  "Stimme, Name & Tonalität nach Wahl",
  "Individuelle Begrüßung & Verabschiedung",
  "Datenschutz & KI-Transparenz konfigurierbar",
  "Anbindung Google Calendar oder Outlook",
];

const premiumFeatures = [
  "Automatischer Bestandspatienten-Abgleich per Telefonnummer",
  "Akutsprechstunden-Buchung (Termin innerhalb 60 Minuten)",
  "Mehrere Behandler mit getrennten Kalendern",
  "Automatisches Failover bei Weiterleitung (Backup-Nummern)",
  "SMS-Benachrichtigung ans Praxisteam",
];

export default function Customization() {
  return (
    <section id="individualisierung" className="relative bg-black py-32 overflow-hidden section-glow">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7eb8d0]/[0.04] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[5px] text-[#7eb8d0]/60 font-medium mb-5">
            Individualisierung
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
            Jede Praxis ist anders.
            <br />
            <span className="text-[#7eb8d0]">Ihr Assistent auch.</span>
          </h2>
          <p className="text-base text-white/35 max-w-xl mx-auto font-light leading-relaxed">
            Es gibt kein Einheitsprodukt. Jede Konfiguration ist individuell — und jede
            Praxis entscheidet selbst, welche Funktionen sie möchte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Standard */}
          <div className="relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7eb8d0]/30 to-transparent" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 rounded-full border border-[#7eb8d0]/30 flex items-center justify-center">
                <span className="text-[#7eb8d0] text-xs">✓</span>
              </div>
              <h3 className="text-base font-semibold text-white">Inklusive — im Standard</h3>
            </div>
            <p className="text-white/30 text-xs mb-6 font-light">
              Alles was eine Praxis für den täglichen Betrieb braucht:
            </p>
            <ul className="space-y-3">
              {standardFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-white/50 text-sm font-light">
                  <span className="text-[#7eb8d0]/60 mt-0.5 shrink-0 text-xs">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Premium */}
          <div className="relative bg-white/[0.05] border border-[#7eb8d0]/[0.15] rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7eb8d0]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#7eb8d0]/[0.04] to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-7 rounded-full bg-[#7eb8d0]/10 border border-[#7eb8d0]/30 flex items-center justify-center">
                  <span className="text-[#7eb8d0] text-xs">★</span>
                </div>
                <h3 className="text-base font-semibold text-white">Erweiterbar — Premium</h3>
              </div>
              <p className="text-white/30 text-xs mb-6 font-light">Für Praxen, die mehr wollen:</p>
              <ul className="space-y-4 mb-8">
                {premiumFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/60 text-sm font-light">
                    <span className="text-[#7eb8d0] mt-0.5 shrink-0 text-xs">★</span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-white/20 text-xs italic font-light">
                Premium-Optionen werden individuell nach Bedarf zusammengestellt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
