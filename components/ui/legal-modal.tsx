"use client";

import { useState, useEffect, useCallback } from "react";

const CONFIG = {
  firmenname: "TP Technology",
  inhaber: "[VORNAME NACHNAME]",
  strasse: "[STRASSE HAUSNUMMER]",
  plz: "[PLZ]",
  ort: "[ORT]",
  email: "info@tptechnology.net",
  website: "www.tptechnology.de",
  handelsregister: "[HANDELSREGISTERNUMMER]",
  registergericht: "[REGISTERGERICHT]",
  ustId: "[UST-ID]",
  datenschutzEmail: "info@tptechnology.net",
  gruendungsjahr: "2025",
};

const Impressum = () => (
  <div>
    <h2>Impressum</h2>
    <p className="legal-subtitle">Angaben gemäß § 5 TMG</p>
    <section>
      <h3>Anbieter</h3>
      <p>{CONFIG.firmenname}<br />Inhaber: {CONFIG.inhaber}<br />{CONFIG.strasse}<br />{CONFIG.plz} {CONFIG.ort}<br />Deutschland</p>
    </section>
    <section>
      <h3>Kontakt</h3>
      <p>E-Mail: <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></p>
      <p className="legal-note">Wir antworten in der Regel innerhalb von 24 Stunden.</p>
    </section>
    <section>
      <h3>Unternehmensform</h3>
      <p>TP Technology ist ein Einzelunternehmen (nicht im Handelsregister eingetragen).</p>
    </section>
    <section>
      <h3>Umsatzsteuer-Identifikationsnummer</h3>
      <p className="legal-note">Gemäß § 27a Umsatzsteuergesetz: {CONFIG.ustId}</p>
    </section>
    <section>
      <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
      <p>{CONFIG.inhaber}<br />{CONFIG.strasse}<br />{CONFIG.plz} {CONFIG.ort}</p>
    </section>
    <section>
      <h3>EU-Streitschlichtung</h3>
      <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}<a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr/</a></p>
      <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
    </section>
    <section>
      <h3>Haftung für Inhalte</h3>
      <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
    </section>
    <section>
      <h3>Urheberrecht</h3>
      <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
    </section>
  </div>
);

const Datenschutz = () => (
  <div>
    <h2>Datenschutzerklärung</h2>
    <p className="legal-subtitle">Zuletzt aktualisiert: Mai {CONFIG.gruendungsjahr}</p>
    <section>
      <h3>1. Verantwortlicher</h3>
      <p>{CONFIG.firmenname}<br />Inhaber: {CONFIG.inhaber}<br />{CONFIG.strasse}<br />{CONFIG.plz} {CONFIG.ort}<br />E-Mail: <a href={`mailto:${CONFIG.datenschutzEmail}`}>{CONFIG.datenschutzEmail}</a></p>
    </section>
    <section>
      <h3>2. Allgemeines zur Datenverarbeitung</h3>
      <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
    </section>
    <section>
      <h3>3. Datenerfassung auf unserer Website</h3>
      <h4>3.1 Server-Log-Dateien</h4>
      <p>Der Provider dieser Website erhebt automatisch Informationen in Server-Log-Dateien: Browsertyp, Betriebssystem, Referrer-URL, IP-Adresse, Uhrzeit der Anfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
      <h4>3.2 Kontaktformular / Konfigurator</h4>
      <p>Verarbeitete Daten: Name, E-Mail-Adresse, optional Telefonnummer, Praxisname, Konfigurationswünsche. Rechtsgrundlage: Art. 6 Abs. 1 lit. b und f DSGVO.</p>
      <h4>3.3 E-Mail-Kontakt</h4>
      <p>Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage zum Zwecke der Bearbeitung gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
    </section>
    <section>
      <h3>4. KI-Telefonassistent — Datenverarbeitung im Auftrag</h3>
      <ul>
        <li>TP Technology agiert als <strong>Auftragsverarbeiter</strong> gemäß Art. 28 DSGVO für die jeweilige Praxis.</li>
        <li>Mit jeder Praxis wird ein <strong>Auftragsverarbeitungsvertrag (AVV)</strong> geschlossen.</li>
        <li>Verarbeitete Daten: Name, Telefonnummer, Terminwünsche, Anliegen.</li>
        <li>Patienten können ihre Rechte direkt bei der jeweiligen Praxis geltend machen.</li>
      </ul>
    </section>
    <section>
      <h3>5. Drittanbieter</h3>
      <h4>5.1 Retell AI</h4>
      <p>Für Sprachverarbeitung: Retell Inc., USA. Weitere Infos: <a href="https://www.retellai.com/privacy" target="_blank" rel="noopener noreferrer">retellai.com/privacy</a></p>
      <h4>5.2 Make (Integromat)</h4>
      <p>Für Workflow-Automatisierung: Celonis SE, Deutschland. <a href="https://www.make.com/en/privacy-notice" target="_blank" rel="noopener noreferrer">make.com/privacy</a></p>
      <h4>5.3 Google Calendar / Microsoft Outlook</h4>
      <p>Kalenderanbindung auf ausdrücklichen Wunsch und mit Genehmigung der Praxis.</p>
    </section>
    <section>
      <h3>6. Ihre Rechte</h3>
      <ul>
        <li><strong>Auskunft</strong> (Art. 15 DSGVO)</li>
        <li><strong>Berichtigung</strong> (Art. 16 DSGVO)</li>
        <li><strong>Löschung</strong> (Art. 17 DSGVO)</li>
        <li><strong>Einschränkung</strong> (Art. 18 DSGVO)</li>
        <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
        <li><strong>Widerspruch</strong> (Art. 21 DSGVO)</li>
      </ul>
      <p>Kontakt: <a href={`mailto:${CONFIG.datenschutzEmail}`}>{CONFIG.datenschutzEmail}</a></p>
    </section>
    <section>
      <h3>7. Cookies</h3>
      <p>Unsere Website verwendet keine Tracking-Cookies und keine Analyse-Tools von Drittanbietern.</p>
    </section>
  </div>
);

const AGB = () => (
  <div>
    <h2>Allgemeine Geschäftsbedingungen (AGB)</h2>
    <p className="legal-subtitle">{CONFIG.firmenname} · Stand: Mai {CONFIG.gruendungsjahr}</p>
    <section>
      <h3>§ 1 Geltungsbereich</h3>
      <p>Diese AGB gelten für alle Verträge zwischen TP Technology und Kunden über die Bereitstellung von KI-Telefonassistenten.</p>
    </section>
    <section>
      <h3>§ 2 Leistungsbeschreibung</h3>
      <ul>
        <li>Konfiguration des KI-Assistenten nach Vorgaben des Auftraggebers</li>
        <li>Kalenderanbindung (Google Calendar oder Microsoft Outlook)</li>
        <li>Terminverwaltung (Buchung, Verschiebung, Stornierung)</li>
        <li>Praxisindividuelle Wissensdatenbank (FAQ)</li>
        <li>Team-Benachrichtigungen per E-Mail</li>
        <li>Notfallprotokolle und Weiterleitungen</li>
        <li>Technischer Support während der Vertragslaufzeit</li>
      </ul>
    </section>
    <section>
      <h3>§ 3 Vertragsschluss</h3>
      <ol>
        <li>Übermittlung einer Anfrage durch den Auftraggeber</li>
        <li>Erstellung eines individuellen Angebots durch den Anbieter</li>
        <li>Schriftliche Auftragsbestätigung per E-Mail</li>
      </ol>
    </section>
    <section>
      <h3>§ 4 Vergütung</h3>
      <ul>
        <li><strong>Einmalige Setup-Gebühr:</strong> Fällig nach Auftragsbestätigung, vor Go-Live.</li>
        <li><strong>Monatliche Nutzungsgebühr:</strong> Fällig monatlich im Voraus.</li>
      </ul>
      <p>Alle Preise zzgl. gesetzlicher Mehrwertsteuer. Zahlungsziel: 14 Tage netto.</p>
    </section>
    <section>
      <h3>§ 5 Mitwirkungspflichten</h3>
      <p>Der Auftraggeber stellt rechtzeitig alle notwendigen Informationen bereit und gewährt Zugang zum Kalender-System.</p>
    </section>
    <section>
      <h3>§ 6 Laufzeit und Kündigung</h3>
      <p>Mindestlaufzeit: 3 Monate ab Go-Live. Danach monatlich kündbar mit 30 Tagen Frist. Kündigung per E-Mail an {CONFIG.email}.</p>
    </section>
    <section>
      <h3>§ 7 Haftung</h3>
      <p>Unbeschränkte Haftung bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von Leib und Leben. Bei leichter Fahrlässigkeit Haftungsbeschränkung auf vertragstypischen Schaden.</p>
    </section>
    <section>
      <h3>§ 8 Datenschutz und Auftragsverarbeitung</h3>
      <p>Vor Go-Live wird ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO geschlossen. Ohne unterzeichneten AVV kein Betrieb.</p>
    </section>
    <section>
      <h3>§ 9 Schlussbestimmungen</h3>
      <p>Es gilt deutsches Recht. Gerichtsstand ist der Sitz des Anbieters, soweit gesetzlich zulässig.</p>
    </section>
  </div>
);

type LegalType = "impressum" | "datenschutz" | "agb";

const CONTENT: Record<LegalType, { title: string; component: React.ReactNode }> = {
  impressum: { title: "Impressum", component: <Impressum /> },
  datenschutz: { title: "Datenschutzerklärung", component: <Datenschutz /> },
  agb: { title: "AGB", component: <AGB /> },
};

interface LegalModalProps {
  type: LegalType;
  children: React.ReactNode;
}

export default function LegalModal({ type, children }: LegalModalProps) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const content = CONTENT[type];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-white/30 text-sm hover:text-white transition-colors duration-200 font-light bg-transparent border-0 p-0 cursor-pointer"
      >
        {children}
      </button>

      {open && (
        <div
          onClick={close}
          data-modal-overlay
          className="fixed inset-0 z-[9999] flex items-center justify-center p-6 modal-cursor-fix"
          style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(12px)", animation: "fadeIn 0.2s ease" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="rounded-2xl w-full flex flex-col overflow-hidden"
            style={{ maxWidth: "780px", maxHeight: "85vh", background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 32px 80px rgba(0,0,0,0.9)", animation: "slideUp 0.25s cubic-bezier(0.16,1,0.3,1)" }}
          >
            {/* Header */}
            <div className="px-8 py-5 flex justify-between items-center flex-shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <span className="text-xs font-semibold tracking-[0.1em] uppercase" style={{ color: "#7eb8d0" }}>TP Technology</span>
              <button
                onClick={close}
                className="w-8 h-8 rounded-full flex items-center justify-center text-lg leading-none cursor-pointer border-0 transition-colors"
                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}
                aria-label="Schließen"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div
              className="flex-1 overflow-y-auto px-10 py-8 text-[15px] leading-relaxed"
              style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(126,184,208,0.25) transparent", color: "rgba(255,255,255,0.65)" }}
            >
              <style>{`
                .legal-subtitle { color: rgba(255,255,255,0.3); font-size: 14px; margin-bottom: 28px; margin-top: -4px; }
                .legal-note { color: rgba(255,255,255,0.3); font-size: 13px; font-style: italic; }
                [data-legal] h2 { font-size: 26px; font-weight: 700; color: #ffffff; margin: 0 0 8px; letter-spacing: -0.3px; }
                [data-legal] h3 { font-size: 16px; font-weight: 600; color: #7eb8d0; margin: 28px 0 8px; padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.07); }
                [data-legal] h4 { font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.8); margin: 18px 0 4px; }
                [data-legal] p { margin: 0 0 10px; color: rgba(255,255,255,0.55); }
                [data-legal] ul, [data-legal] ol { padding-left: 20px; margin: 6px 0 14px; }
                [data-legal] li { margin-bottom: 5px; color: rgba(255,255,255,0.55); }
                [data-legal] a { color: #7eb8d0; text-decoration: underline; text-underline-offset: 3px; }
                [data-legal] section { margin-bottom: 4px; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { opacity: 0; transform: translateY(20px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
              `}</style>
              <div data-legal>{content.component}</div>
            </div>

            {/* Footer */}
            <div className="px-8 py-4 flex justify-end flex-shrink-0" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <button
                onClick={close}
                className="px-6 py-2.5 rounded-full text-sm font-medium cursor-pointer border-0 transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
