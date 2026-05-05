"use client";

import React, { useRef, useEffect, FC, ReactNode, useState } from "react";
import gsap from "gsap";
import { vec2 } from "vecteur";
type Vec2 = ReturnType<typeof vec2>;

interface MagneticCursorProps {
  children: ReactNode;
  magneticFactor?: number;
  lerpAmount?: number;
  hoverPadding?: number;
  hoverAttribute?: string;
  cursorSize?: number;
  cursorColor?: string;
  blendMode?: "difference" | "exclusion" | "normal" | "screen" | "overlay";
  shape?: "circle" | "square" | "rounded-square";
  disableOnTouch?: boolean;
  speedMultiplier?: number;
  maxScaleX?: number;
  maxScaleY?: number;
}

interface CursorState {
  el: HTMLDivElement | null;
  pos: { current: Vec2; target: Vec2; previous: Vec2 };
  hover: { isHovered: boolean };
  isDetaching: boolean;
}

export const MagneticCursor: FC<MagneticCursorProps> = ({
  children,
  lerpAmount = 0.12,
  magneticFactor = 0.3,
  hoverPadding = 10,
  hoverAttribute = "data-magnetic",
  cursorSize = 28,
  cursorColor = "white",
  blendMode = "exclusion",
  shape = "circle",
  disableOnTouch = true,
  speedMultiplier = 0.025,
  maxScaleX = 1,
  maxScaleY = 0.3,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<CursorState | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const configRef = useRef({ magneticFactor, speedMultiplier, maxScaleX, maxScaleY, cursorSize, lerpAmount, hoverPadding });
  useEffect(() => {
    configRef.current = { magneticFactor, speedMultiplier, maxScaleX, maxScaleY, cursorSize, lerpAmount, hoverPadding };
  }, [magneticFactor, speedMultiplier, maxScaleX, maxScaleY, cursorSize, lerpAmount, hoverPadding]);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (disableOnTouch && isTouchDevice) return;
    const el = cursorRef.current;
    if (!el) return;

    gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0 });
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const detachDuration = prefersReduced ? 0.1 : 0.35;

    stateRef.current = {
      el,
      pos: { current: vec2(-200, -200), target: vec2(-200, -200), previous: vec2(-200, -200) },
      hover: { isHovered: false },
      isDetaching: false,
    };

    const tick = () => {
      const s = stateRef.current;
      if (!s || s.hover.isHovered) return;
      const { speedMultiplier, maxScaleX, maxScaleY, lerpAmount } = configRef.current;
      const lerp = prefersReduced ? 1 : lerpAmount;
      s.pos.current.lerp(s.pos.target, lerp);
      const delta = s.pos.current.clone().sub(s.pos.previous);
      s.pos.previous.copy(s.pos.current);
      const speed = Math.sqrt(delta.x ** 2 + delta.y ** 2) * speedMultiplier;
      if (s.isDetaching) {
        gsap.set(el, { x: s.pos.current.x, y: s.pos.current.y, scaleX: 1, scaleY: 1, rotate: 0, overwrite: "auto" });
      } else {
        gsap.set(el, {
          x: s.pos.current.x, y: s.pos.current.y,
          rotate: Math.atan2(delta.y, delta.x) * (180 / Math.PI),
          scaleX: 1 + Math.min(speed, maxScaleX),
          scaleY: 1 - Math.min(speed, maxScaleY),
          overwrite: "auto",
        });
      }
    };

    const onMove = (e: PointerEvent) => {
      const s = stateRef.current;
      if (!s) return;
      s.pos.target.x = e.clientX;
      s.pos.target.y = e.clientY;
      const inView = e.clientX >= 0 && e.clientX <= window.innerWidth && e.clientY >= 0 && e.clientY <= window.innerHeight;
      gsap.to(el, { opacity: inView ? 1 : 0, duration: 0.2, overwrite: "auto" });
    };

    const initPos = (e: MouseEvent) => {
      const s = stateRef.current;
      if (!s) return;
      s.pos.current.x = s.pos.target.x = s.pos.previous.x = e.clientX;
      s.pos.current.y = s.pos.target.y = s.pos.previous.y = e.clientY;
      gsap.set(el, { x: e.clientX, y: e.clientY, opacity: 1 });
    };

    gsap.ticker.add(tick);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointermove", initPos as any, { once: true });
    document.addEventListener("mouseleave", () => gsap.to(el, { opacity: 0, duration: 0.3 }));
    document.addEventListener("mouseenter", () => gsap.to(el, { opacity: 1, duration: 0.3 }));

    const cleanups: (() => void)[] = [];
    const magnetics = gsap.utils.toArray<HTMLElement>(`[${hoverAttribute}]`);
    magnetics.forEach((target) => {
      const xTo = gsap.quickTo(target, "x", { duration: 1, ease: "elastic.out(1,0.3)" });
      const yTo = gsap.quickTo(target, "y", { duration: 1, ease: "elastic.out(1,0.3)" });

      const onEnter = () => {
        const s = stateRef.current;
        if (!s) return;
        s.hover.isHovered = true;
        s.isDetaching = false;
        const b = target.getBoundingClientRect();
        const pad = configRef.current.hoverPadding * (1 + configRef.current.magneticFactor);
        const color = target.getAttribute("data-magnetic-color") || cursorColor;
        gsap.killTweensOf(el);
        gsap.to(el, {
          x: b.left + b.width / 2, y: b.top + b.height / 2,
          width: b.width + pad * 2, height: b.height + pad * 2,
          borderRadius: window.getComputedStyle(target).borderRadius,
          backgroundColor: color,
          scaleX: 1, scaleY: 1, rotate: 0,
          duration: 0.3, ease: "power3.out", overwrite: true,
        });
      };

      const onLeave = () => {
        const s = stateRef.current;
        if (!s) return;
        s.pos.current.x = gsap.getProperty(el, "x") as number;
        s.pos.current.y = gsap.getProperty(el, "y") as number;
        s.pos.previous.copy(s.pos.current);
        s.hover.isHovered = false;
        s.isDetaching = true;
        const br = shape === "circle" ? "50%" : shape === "square" ? "0" : "8px";
        gsap.killTweensOf(el);
        gsap.to(el, {
          width: configRef.current.cursorSize, height: configRef.current.cursorSize,
          borderRadius: br, backgroundColor: cursorColor,
          scaleX: 1, scaleY: 1,
          duration: detachDuration, ease: "power3.out", overwrite: true,
          onComplete: () => { s.isDetaching = false; },
        });
      };

      let rafId: number | null = null;
      const onPointerMove = (e: PointerEvent) => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          const b = target.getBoundingClientRect();
          xTo((e.clientX - (b.left + b.width / 2)) * configRef.current.magneticFactor);
          yTo((e.clientY - (b.top + b.height / 2)) * configRef.current.magneticFactor);
          rafId = null;
        });
      };

      const onOut = () => { xTo(0); yTo(0); };

      target.addEventListener("pointerenter", onEnter);
      target.addEventListener("pointerleave", onLeave);
      target.addEventListener("pointermove", onPointerMove as any);
      target.addEventListener("pointerout", onOut);
      cleanups.push(() => {
        target.removeEventListener("pointerenter", onEnter);
        target.removeEventListener("pointerleave", onLeave);
        target.removeEventListener("pointermove", onPointerMove as any);
        target.removeEventListener("pointerout", onOut);
      });
    });

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("pointermove", onMove);
      cleanups.forEach((fn) => fn());
    };
  }, [disableOnTouch, isTouchDevice, hoverPadding, hoverAttribute, cursorColor, shape]);

  if (disableOnTouch && isTouchDevice) return <>{children}</>;

  const br = shape === "circle" ? "50%" : shape === "square" ? "0" : "8px";

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed", top: 0, left: 0, zIndex: 99999,
          pointerEvents: "none", willChange: "transform, width, height",
          backgroundColor: cursorColor,
          mixBlendMode: blendMode as React.CSSProperties["mixBlendMode"],
          width: cursorSize, height: cursorSize, borderRadius: br,
        }}
      />
      {children}
    </>
  );
};
