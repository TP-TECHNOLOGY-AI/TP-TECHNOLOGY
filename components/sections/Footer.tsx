import LegalModal from "@/components/ui/legal-modal";

export default function Footer() {
  return (
    <footer id="kontakt" className="relative bg-black border-t border-white/[0.06] pt-16 pb-8 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#7eb8d0]/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="mb-5">
              <img
                src="/tp-technology-logo.jpeg"
                alt="TP Technology"
                className="h-6 w-auto object-contain object-left"
                style={{ mixBlendMode: "lighten" }}
              />
            </div>
            <p className="text-white/30 text-sm leading-relaxed mb-5 font-light">
              KI-Telefonassistenten für Arztpraxen
            </p>
            <a
              href="mailto:tptechnologyai@gmail.com"
              className="text-[#7eb8d0]/70 text-sm hover:text-[#7eb8d0] transition-colors duration-200"
            >
              tptechnologyai@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[4px] text-white/20 mb-5 font-medium">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Funktionen", href: "#funktionen" },
                { label: "So funktioniert's", href: "#ablauf" },
                { label: "Individualisierung", href: "#individualisierung" },
                { label: "Kontakt", href: "#kontakt" },
                { label: "Jetzt konfigurieren", href: "#konfigurieren" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/30 text-sm hover:text-white transition-colors duration-200 font-light"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[4px] text-white/20 mb-5 font-medium">
              Rechtliches
            </h4>
            <ul className="space-y-3 mb-8">
              <li><LegalModal type="impressum">Impressum</LegalModal></li>
              <li><LegalModal type="datenschutz">Datenschutzerklärung</LegalModal></li>
              <li><LegalModal type="agb">AGB</LegalModal></li>
            </ul>

            <div className="p-4 bg-white/[0.03] rounded-xl border border-white/[0.06]">
              <p className="text-white/40 text-xs mb-2 font-medium">Direkt schreiben?</p>
              <p className="text-white/20 text-xs mb-3 font-light">
                Wir antworten in der Regel innerhalb von 24 Stunden.
              </p>
              <a
                href="mailto:tptechnologyai@gmail.com"
                className="text-[#7eb8d0]/70 text-sm font-medium hover:text-[#7eb8d0] transition-colors duration-200"
              >
                tptechnologyai@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-6 text-center">
          <p className="text-white/15 text-xs tracking-widest">
            © 2025 TP Technology. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
