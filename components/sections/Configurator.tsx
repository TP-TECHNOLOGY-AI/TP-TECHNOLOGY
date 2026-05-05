"use client";

import { useState, useRef, useEffect } from "react";
import { ModernPricingPage, PricingCardProps } from "@/components/ui/animated-glassy-pricing";

const plans: PricingCardProps[] = [
  {
    planName: "Standard",
    description: "Alle Kernfunktionen für den täglichen Betrieb.",
    priceLabel: "Auf Anfrage",
    priceSub: "Einmalige Setup-Gebühr + monatliche Nutzung",
    features: [
      "Terminbuchung, -verschiebung, -stornierung",
      "Feiertagserkennung & Schließzeiten",
      "Individuelle Wissensdatenbank",
      "Notfallprotokoll mit Weiterleitung",
      "E-Mail-Benachrichtigung ans Team",
      "Stimme, Name & Tonalität nach Wahl",
      "Google Calendar oder Outlook",
    ],
    buttonText: "Konfigurieren →",
    buttonVariant: "secondary",
  },
  {
    planName: "Premium",
    description: "Standard plus erweiterte Funktionen für anspruchsvolle Praxen.",
    priceLabel: "Auf Anfrage",
    priceSub: "Individuelles Angebot nach Konfiguration",
    features: [
      "Alles aus Standard",
      "Bestandspatienten-Abgleich per Telefonnummer",
      "Akutsprechstunden-Buchung",
      "Mehrere Behandler mit getrennten Kalendern",
      "Automatisches Failover bei Weiterleitung",
      "SMS-Benachrichtigung ans Praxisteam",
    ],
    buttonText: "Konfigurieren →",
    isPopular: true,
    buttonVariant: "primary",
  },
  {
    planName: "Enterprise",
    description: "Für MVZ, Kliniken und große Praxisverbünde.",
    priceLabel: "Auf Anfrage",
    priceSub: "Persönliches Beratungsgespräch",
    features: [
      "Alles aus Premium",
      "Mehrere Standorte",
      "Dedizierter Ansprechpartner",
      "Individuelle Sonderfunktionen",
      "Prioritäts-Support",
    ],
    buttonText: "Kontakt aufnehmen",
    buttonVariant: "secondary",
  },
];

const steps = [
  { id: 1, title: "Ihre Praxis" },
  { id: 2, title: "Ihr Kalender" },
  { id: 3, title: "Funktionen" },
  { id: 4, title: "Erweiterungen" },
  { id: 5, title: "Stimme & Persönlichkeit" },
  { id: 6, title: "Kontaktdaten" },
];

export default function Configurator() {
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [logoAnimDone, setLogoAnimDone] = useState(false);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const logoVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = logoContainerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          logoVideoRef.current?.play().catch(() => {});
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    praxisname: "", fachrichtung: "", plz: "", anrufe: "", kalender: "",
    standardFunktionen: {
      terminbuchung: true, feiertage: true, pufferzeit: true,
      doppelbuchung: true, email: true, faq: true, notfall: true, rueckruf: true,
    },
    premiumFunktionen: {
      bestandspatient: false, akut: false, mehrereBehandler: false, failover: false, sms: false,
    },
    stimmeGeschlecht: "", tonalitaet: "", assistentName: "",
    kontaktName: "", kontaktEmail: "", kontaktTelefon: "", anmerkungen: "", datenschutz: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); setSubmitted(true); };
  const handleOpenForm = () => setShowForm(true);
  const handleNext = () => { if (currentStep < 6) setCurrentStep(currentStep + 1); };
  const handleBack = () => { if (currentStep > 1) setCurrentStep(currentStep - 1); };

  const handlePlansButtonClick = () => {
    setShowForm(true);
    setTimeout(() => document.getElementById("konfigurator-formular")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const plansWithCallbacks = plans.map((p) => ({ ...p, onButtonClick: handlePlansButtonClick }));

  const inputCls = "w-full bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7eb8d0]/50 transition-colors";
  const radioLabelCls = "flex items-center gap-3 p-4 border border-white/[0.07] bg-white/[0.02] rounded-xl cursor-pointer hover:border-[#7eb8d0]/30 hover:bg-white/[0.05] transition-all duration-200";
  const checkLabelCls = "flex items-center gap-3 p-3 hover:bg-white/[0.03] rounded-lg cursor-pointer transition-colors";

  return (
    <section id="konfigurieren" className="scroll-mt-20">
      {/* Pricing cards with WebGL background */}
      <ModernPricingPage
        title={<>Ihr Assistent. <span className="text-[#7eb8d0]">Nach Ihren Wünschen.</span></>}
        subtitle="Konfigurieren Sie Ihren persönlichen KI-Assistenten. Wir melden uns innerhalb von 24 Stunden mit einem individuellen Angebot."
        plans={plansWithCallbacks}
        showAnimatedBackground={true}
      />

      {/* Wizard form */}
      <div id="konfigurator-formular" className="bg-black border-t border-white/[0.05] py-20">
        <div className="max-w-2xl mx-auto px-6">
          {!showForm && !submitted && (
            <div className="text-center">
              <p className="text-xs uppercase tracking-[5px] text-[#7eb8d0]/60 font-medium mb-5">
                Jetzt konfigurieren
              </p>
              <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">
                Bereit? Lassen Sie uns starten.
              </h3>

              {/* TPT → TP Technology animation */}
              <div
                ref={logoContainerRef}
                className="relative w-full mx-auto my-6"
                style={{ aspectRatio: "16/5" }}
              >
                <video
                  ref={logoVideoRef}
                  src="/tpt-zu-tp-technology.mp4"
                  muted
                  playsInline
                  onEnded={() => setLogoAnimDone(true)}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                    logoAnimDone ? "opacity-0" : "opacity-100"
                  }`}
                  style={{ mixBlendMode: "lighten" }}
                />
                <img
                  src="/tp-technology-logo.png"
                  alt="TP Technology"
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                    logoAnimDone ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ mixBlendMode: "lighten" }}
                />
              </div>

              <p className="text-white/35 mb-10 font-light leading-relaxed">
                In etwa 5 Minuten durch den Konfigurator — danach erhalten Sie innerhalb
                von 24 Stunden Ihr individuelles Angebot.
              </p>
              <button
                onClick={handleOpenForm}
                data-magnetic
                className="px-10 py-3.5 bg-white text-black rounded-full text-sm font-semibold hover:bg-[#7eb8d0] hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(126,184,208,0.3)]"
              >
                Konfigurator starten →
              </button>
            </div>
          )}

          {showForm && !submitted && (
            <div>
              {/* Progress */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-white/25 font-light">
                    Schritt {currentStep} von {steps.length}
                  </span>
                  <span className="text-xs font-medium text-[#7eb8d0]/70 uppercase tracking-widest">
                    {steps[currentStep - 1].title}
                  </span>
                </div>
                <div className="w-full bg-white/[0.06] rounded-full h-[2px]">
                  <div
                    className="bg-[#7eb8d0] h-[2px] rounded-full transition-all duration-500"
                    style={{ width: `${(currentStep / steps.length) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <div className="space-y-5">
                    <h3 className="text-2xl font-bold text-white mb-7 tracking-tight">
                      Erzählen Sie uns von Ihrer Praxis.
                    </h3>
                    <div>
                      <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest">Praxisname</label>
                      <input type="text" className={inputCls} value={formData.praxisname}
                        onChange={(e) => setFormData({ ...formData, praxisname: e.target.value })}
                        placeholder="z.B. Zahnarztpraxis Dr. Müller" />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest">Fachrichtung</label>
                      <select className={inputCls} value={formData.fachrichtung}
                        onChange={(e) => setFormData({ ...formData, fachrichtung: e.target.value })}>
                        <option value="">Bitte wählen</option>
                        <option>Zahnarztpraxis</option>
                        <option>Allgemeinmedizin</option>
                        <option>Facharztpraxis</option>
                        <option>Physiotherapie</option>
                        <option>Andere</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest">PLZ & Ort</label>
                      <input type="text" className={inputCls} value={formData.plz}
                        onChange={(e) => setFormData({ ...formData, plz: e.target.value })}
                        placeholder="z.B. 80331 München" />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest">Anrufe pro Tag</label>
                      <select className={inputCls} value={formData.anrufe}
                        onChange={(e) => setFormData({ ...formData, anrufe: e.target.value })}>
                        <option value="">Bitte wählen</option>
                        <option>unter 20</option>
                        <option>20–50</option>
                        <option>50–100</option>
                        <option>über 100</option>
                      </select>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-7 tracking-tight">
                      Womit verwalten Sie Ihre Termine?
                    </h3>
                    {["Google Calendar", "Microsoft Outlook / Office 365", "Noch keinen — ich brauche eine Empfehlung", "Andere (wird im Gespräch geklärt)"].map((k) => (
                      <label key={k} className={radioLabelCls}>
                        <input type="radio" name="kalender" value={k}
                          checked={formData.kalender === k}
                          onChange={(e) => setFormData({ ...formData, kalender: e.target.value })}
                          className="accent-[#7eb8d0]" />
                        <span className="text-sm text-white/60">{k}</span>
                      </label>
                    ))}
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                      Was soll Ihr Assistent können?
                    </h3>
                    <p className="text-sm text-white/30 mb-7 font-light">
                      Alle Funktionen sind im Standard enthalten. Entfernen Sie den Haken, wenn Sie eine Funktion nicht benötigen.
                    </p>
                    {Object.entries({
                      terminbuchung: "Terminbuchung, -verschiebung, -stornierung",
                      feiertage: "Feiertags- & Schließtagserkennung",
                      pufferzeit: "Pufferzeit & Vorlaufzeit konfigurieren",
                      doppelbuchung: "Doppelbuchungs-Erkennung",
                      email: "E-Mail-Benachrichtigung ans Team",
                      faq: "FAQ & Praxis-Wissensdatenbank",
                      notfall: "Notfallprotokoll mit Weiterleitung",
                      rueckruf: "Rückrufwünsche vormerken",
                    }).map(([key, label]) => (
                      <label key={key} className={checkLabelCls}>
                        <input type="checkbox" className="accent-[#7eb8d0] w-4 h-4"
                          checked={formData.standardFunktionen[key as keyof typeof formData.standardFunktionen]}
                          onChange={(e) => setFormData({ ...formData, standardFunktionen: { ...formData.standardFunktionen, [key]: e.target.checked } })} />
                        <span className="text-sm text-white/50 font-light">{label}</span>
                      </label>
                    ))}
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                      Möchten Sie Premium-Funktionen?
                    </h3>
                    <p className="text-sm text-white/30 mb-7 font-light">
                      Wir beraten Sie dazu im Erstgespräch.
                    </p>
                    {Object.entries({
                      bestandspatient: "Automatischer Bestandspatienten-Abgleich per Telefonnummer ★",
                      akut: "Akutsprechstunden-Buchung (Termin innerhalb 60 Minuten) ★",
                      mehrereBehandler: "Mehrere Behandler mit getrennten Kalendern ★",
                      failover: "Automatisches Failover bei Weiterleitung ★",
                      sms: "SMS-Benachrichtigung ans Praxisteam ★",
                    }).map(([key, label]) => (
                      <label key={key} className={checkLabelCls}>
                        <input type="checkbox" className="accent-[#7eb8d0] w-4 h-4"
                          checked={formData.premiumFunktionen[key as keyof typeof formData.premiumFunktionen]}
                          onChange={(e) => setFormData({ ...formData, premiumFunktionen: { ...formData.premiumFunktionen, [key]: e.target.checked } })} />
                        <span className="text-sm text-white/50 font-light">{label}</span>
                      </label>
                    ))}
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-7">
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                      Wie soll Ihr Assistent klingen?
                    </h3>
                    <div>
                      <label className="block text-xs text-white/40 mb-3 uppercase tracking-widest">Geschlecht der Stimme</label>
                      <div className="flex gap-3">
                        {["Weiblich", "Männlich", "Egal"].map((g) => (
                          <label key={g} className={`flex-1 ${radioLabelCls} justify-center`}>
                            <input type="radio" name="geschlecht" value={g}
                              checked={formData.stimmeGeschlecht === g}
                              onChange={(e) => setFormData({ ...formData, stimmeGeschlecht: e.target.value })}
                              className="accent-[#7eb8d0]" />
                            <span className="text-sm text-white/60">{g}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-3 uppercase tracking-widest">Tonalität</label>
                      <div className="grid grid-cols-2 gap-2">
                        {["Warm & herzlich", "Sachlich & professionell", "Premium & gehoben", "Empathisch & beruhigend"].map((t) => (
                          <label key={t} className={radioLabelCls}>
                            <input type="radio" name="tonalitaet" value={t}
                              checked={formData.tonalitaet === t}
                              onChange={(e) => setFormData({ ...formData, tonalitaet: e.target.value })}
                              className="accent-[#7eb8d0]" />
                            <span className="text-xs text-white/60">{t}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest">Name des Assistenten (optional)</label>
                      <input type="text" className={inputCls} placeholder='z.B. "Lisa", "Max"'
                        value={formData.assistentName}
                        onChange={(e) => setFormData({ ...formData, assistentName: e.target.value })} />
                    </div>
                  </div>
                )}

                {currentStep === 6 && (
                  <div className="space-y-5">
                    <h3 className="text-2xl font-bold text-white mb-7 tracking-tight">
                      Wie erreichen wir Sie?
                    </h3>
                    <div>
                      <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest">Ihr Name *</label>
                      <input type="text" required className={inputCls} value={formData.kontaktName}
                        onChange={(e) => setFormData({ ...formData, kontaktName: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest">E-Mail-Adresse *</label>
                      <input type="email" required className={inputCls} value={formData.kontaktEmail}
                        onChange={(e) => setFormData({ ...formData, kontaktEmail: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest">Telefonnummer (optional)</label>
                      <input type="tel" className={inputCls} value={formData.kontaktTelefon}
                        onChange={(e) => setFormData({ ...formData, kontaktTelefon: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-2 uppercase tracking-widest">Anmerkungen</label>
                      <textarea className={inputCls} rows={3} value={formData.anmerkungen}
                        onChange={(e) => setFormData({ ...formData, anmerkungen: e.target.value })} />
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" required className="accent-[#7eb8d0] mt-0.5"
                        checked={formData.datenschutz}
                        onChange={(e) => setFormData({ ...formData, datenschutz: e.target.checked })} />
                      <span className="text-xs text-white/30 font-light leading-relaxed">
                        Ich bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden.
                      </span>
                    </label>
                  </div>
                )}

                <div className="flex gap-3 mt-10">
                  {currentStep > 1 && (
                    <button type="button" onClick={handleBack}
                      className="flex-1 py-3 border border-white/[0.1] rounded-xl text-sm text-white/40 hover:text-white hover:border-white/20 transition-all duration-200 font-light">
                      ← Zurück
                    </button>
                  )}
                  {currentStep < 6 ? (
                    <button type="button" onClick={handleNext}
                      className="flex-1 py-3 bg-white text-black rounded-xl text-sm font-semibold hover:bg-[#7eb8d0] hover:text-white transition-all duration-300">
                      Weiter →
                    </button>
                  ) : (
                    <button type="submit"
                      className="flex-1 py-3 bg-white text-black rounded-xl text-sm font-semibold hover:bg-[#7eb8d0] hover:text-white transition-all duration-300">
                      Anfrage senden →
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}

          {submitted && (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full border border-[#7eb8d0]/30 flex items-center justify-center mx-auto mb-8">
                <span className="text-[#7eb8d0] text-2xl">✓</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                Vielen Dank — wir melden uns.
              </h3>
              <p className="text-white/35 mb-6 leading-relaxed font-light">
                Ihre Konfiguration ist bei uns eingegangen. Unser Team meldet sich
                innerhalb von 24 Stunden mit einem individuellen Angebot.
              </p>
              <a href="mailto:tptechnologyai@gmail.com"
                className="text-[#7eb8d0]/70 text-sm hover:text-[#7eb8d0] transition-colors duration-200">
                tptechnologyai@gmail.com
              </a>
            </div>
          )}
        </div>
      </div>

    </section>
  );
}
