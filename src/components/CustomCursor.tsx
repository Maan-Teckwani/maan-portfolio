"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR = 'a, button, [role="button"], [data-cursor="hover"]';
const TEXT_SELECTOR = 'input, textarea, [contenteditable="true"]';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (coarse.matches || reduced.matches) return;

    const html = document.documentElement;
    html.classList.add("custom-cursor-active");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let visible = false;
    let hovering = false;
    let pressing = false;
    let onText = false;
    let raf = 0;

    const setVisible = (v: boolean) => {
      visible = v;
      const op = v ? (onText ? "0" : "1") : "0";
      dot.style.opacity = op;
      ring.style.opacity = v && !onText ? "1" : "0";
    };

    const applyState = () => {
      const dotScale = pressing ? 0.5 : hovering ? 2 : 1;
      const ringScale = pressing ? 0.8 : hovering ? 1.6 : 1;
      dot.style.setProperty("--s", String(dotScale));
      ring.style.setProperty("--s", String(ringScale));
      if (onText) {
        dot.style.opacity = "0";
        ring.style.opacity = "0";
      } else if (visible) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onDown = () => {
      pressing = true;
      applyState();
    };
    const onUp = () => {
      pressing = false;
      applyState();
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target || !(target instanceof Element)) return;
      const nextHovering = !!target.closest(HOVER_SELECTOR);
      const nextOnText = !!target.closest(TEXT_SELECTOR);
      if (nextHovering !== hovering || nextOnText !== onText) {
        hovering = nextHovering;
        onText = nextOnText;
        applyState();
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(var(--s, 1))`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(var(--s, 1))`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    applyState();
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      html.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-7 w-7 rounded-full border border-white opacity-0 transition-[opacity,border-color] duration-200 ease-out"
        style={{ mixBlendMode: "difference", willChange: "transform, opacity" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-white opacity-0 transition-opacity duration-150 ease-out"
        style={{ mixBlendMode: "difference", willChange: "transform, opacity" }}
      />
    </>
  );
}
