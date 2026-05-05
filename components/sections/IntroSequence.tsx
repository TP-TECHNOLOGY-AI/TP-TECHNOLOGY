"use client";

import { useEffect, useRef, useState } from "react";

export default function IntroSequence() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState(0); // 0 = video1, 1 = video2

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const scrolled = -rect.top;
      const totalScroll = wrapper.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

      if (progress >= 0.42 && phase === 0) {
        setPhase(1);
        video2Ref.current?.play().catch(() => {});
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [phase]);

  return (
    <div ref={wrapperRef} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {/* Video 1: TP Technology */}
        <video
          src="/tpt-intro-1.mp4"
          autoPlay
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ${
            phase >= 1 ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Video 2: → TPT */}
        <video
          ref={video2Ref}
          src="/tpt-intro-2.mp4"
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ${
            phase >= 1 ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Bottom gradient fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-700 ${
            phase >= 1 ? "opacity-0" : "opacity-70"
          }`}
        >
          <span className="text-white/40 text-[10px] tracking-[5px] uppercase font-light">
            Scrollen
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-bounce" />
        </div>
      </div>
    </div>
  );
}
