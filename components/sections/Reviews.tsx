import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Dr. med. Sabine Keller",
    role: "Allgemeinmedizin, Freiburg",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Seit wir den KI-Assistenten nutzen, entfallen fast alle verpassten Anrufe. Unsere MFAs können sich endlich wieder auf die Patienten im Wartezimmer konzentrieren — das ist unbezahlbar.",
  },
  {
    name: "Thomas Brandt",
    role: "Praxismanager, Zahnarztpraxis Brandt & Partner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Die Einrichtung war einfacher als erwartet. Innerhalb von zwei Wochen lief alles reibungslos. Die Patienten merken kaum einen Unterschied — außer dass sie jetzt auch abends noch Termine buchen können.",
  },
  {
    name: "Dr. med. Monika Schulze",
    role: "Internistin, Berlin-Mitte",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "Was mich überzeugt hat: Der Assistent klingt nicht wie ein Roboter. Er spricht ruhig, freundlich und kompetent — genau so, wie wir es von unserem Team erwarten.",
  },
  {
    name: "Dr. med. Jan Fischer",
    role: "Kinderarzt, Köln",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    quote:
      "Gerade in der Erkältungszeit ist das Telefon bei uns nicht still zu kriegen. Mit dem Assistenten werden alle Anrufe sofort entgegengenommen. Das hat unseren Stress erheblich reduziert.",
  },
  {
    name: "Melanie Weber",
    role: "MFA, Orthopädische Gemeinschaftspraxis",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    quote:
      "Als MFA war ich zunächst skeptisch, aber der Assistent nimmt uns keine Arbeit weg — er nimmt uns die lästigen Unterbrechungen weg. Wir können uns viel besser auf die wirklich wichtigen Aufgaben konzentrieren.",
  },
  {
    name: "Dr. med. Ursula König",
    role: "Dermatologin, München",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    quote:
      "Das Notfallprotokoll funktioniert zuverlässig. Dringende Anliegen werden korrekt erkannt und sofort weitergeleitet. Das gibt mir als Ärztin ein gutes Gefühl.",
  },
  {
    name: "Markus Braun",
    role: "Praxisinhaber, HNO-Praxis Hamburg",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    quote:
      "Wir haben den Assistenten jetzt seit vier Monaten im Einsatz. Die Anzahl der nicht-angenommenen Anrufe ist auf nahezu null gesunken. Die Patienten schätzen die Erreichbarkeit sehr.",
  },
  {
    name: "Dr. med. Christine Müller",
    role: "Gynäkologin, Frankfurt",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
    quote:
      "Besonders praktisch: Der Assistent kennt unsere Sprechzeiten, Feiertage und Sonderöffnungszeiten. Wir mussten das nur einmal einrichten und er hält sich immer daran.",
  },
  {
    name: "Peter Hoffmann",
    role: "Geschäftsführer, MVZ Hoffmann",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    quote:
      "Als MVZ mit mehreren Standorten war die Lösung für uns ideal. Jeder Standort hat seinen eigenen Kalender und der Assistent bucht korrekt nach Fachrichtung und Behandler.",
  },
];

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3));

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#7eb8d0" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function Reviews() {
  return (
    <section className="relative bg-black py-32 overflow-hidden section-glow">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#7eb8d0]/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[4px] text-[#7eb8d0]/60 mb-4 font-medium">
            Erfahrungen
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Das sagen unsere Praxen
          </h2>
          <p className="mt-4 text-base text-white/35 max-w-xl mx-auto font-light leading-relaxed">
            Praxisinhaber und -teams berichten über ihre Erfahrungen mit dem KI-Assistenten.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="space-y-3">
              {chunk.map(({ name, role, quote, image }, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#7eb8d0]/20 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>

                  <blockquote className="mb-4">
                    <p className="text-white/50 text-sm leading-relaxed font-light">
                      &ldquo;{quote}&rdquo;
                    </p>
                  </blockquote>

                  <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
                    <Avatar className="size-9 shrink-0">
                      <AvatarImage
                        alt={name}
                        src={image}
                        loading="lazy"
                        width={120}
                        height={120}
                      />
                      <AvatarFallback>
                        {name.split(" ").filter(w => /^[A-Z]/.test(w)).slice(-2).map(w => w[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white/70 text-sm font-medium">{name}</p>
                      <span className="text-white/25 text-xs font-light">{role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
