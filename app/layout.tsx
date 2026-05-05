import type { Metadata } from "next";
import "./globals.css";
import { GlobalBackground } from "@/components/ui/global-background";
import { CursorWrapper } from "@/components/ui/cursor-wrapper";

export const metadata: Metadata = {
  title: "TP Technology — KI-Telefonassistent für Arztpraxen",
  description:
    "Der KI-Telefonassistent für Arztpraxen — bucht Termine, beantwortet Fragen und entlastet Ihr Team. Rund um die Uhr. Individuell konfigurierbar. Datenschutzkonform.",
  keywords: ["KI Telefonassistent", "Arztpraxis", "Terminbuchung", "Automatisierung"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black">
        <CursorWrapper>
        <GlobalBackground />
        <svg className="absolute h-0 w-0 overflow-hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="tpt-blue-glow" colorInterpolationFilters="sRGB" x="-50%" y="-200%" width="200%" height="500%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur4" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="19" result="blur19" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur9" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur30" />
              <feColorMatrix in="blur4" result="c0" type="matrix" values="0.85 0 0 0 0  0 0.95 0 0 0  0 0 1 0 0  0 0 0 0.8 0" />
              <feOffset in="c0" result="l0" dx="0" dy="0" />
              <feColorMatrix in="blur19" result="c1" type="matrix" values="0.494 0 0 0 0  0 0.722 0 0 0  0 0 0.816 0 0  0 0 0 1 0" />
              <feOffset in="c1" result="l1" dx="0" dy="2" />
              <feColorMatrix in="blur9" result="c2" type="matrix" values="0.6 0 0 0 0  0 0.8 0 0 0  0 0 0.9 0 0  0 0 0 0.65 0" />
              <feOffset in="c2" result="l2" dx="0" dy="2" />
              <feColorMatrix in="blur30" result="c3" type="matrix" values="0.494 0 0 0 0  0 0.722 0 0 0  0 0 0.816 0 0  0 0 0 1 0" />
              <feOffset in="c3" result="l3" dx="0" dy="2" />
              <feColorMatrix in="blur30" result="c4" type="matrix" values="0.25 0 0 0 0  0 0.36 0 0 0  0 0 0.41 0 0  0 0 0 1 0" />
              <feOffset in="c4" result="l4" dx="0" dy="16" />
              <feColorMatrix in="blur30" result="c5" type="matrix" values="0.2 0 0 0 0  0 0.3 0 0 0  0 0 0.35 0 0  0 0 0 1 0" />
              <feOffset in="c5" result="l5" dx="0" dy="64" />
              <feColorMatrix in="blur30" result="c6" type="matrix" values="0.1 0 0 0 0  0 0.15 0 0 0  0 0 0.18 0 0  0 0 0 1 0" />
              <feOffset in="c6" result="l6" dx="0" dy="64" />
              <feColorMatrix in="blur30" result="c7" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.68 0" />
              <feOffset in="c7" result="l7" dx="0" dy="64" />
              <feMerge>
                <feMergeNode in="l0" /><feMergeNode in="l1" /><feMergeNode in="l2" />
                <feMergeNode in="l3" /><feMergeNode in="l4" /><feMergeNode in="l5" />
                <feMergeNode in="l6" /><feMergeNode in="l7" /><feMergeNode in="l0" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
        {children}
        </CursorWrapper>
      </body>
    </html>
  );
}
