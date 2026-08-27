"use client";

import { useEffect, useState } from "react";
import { IconPhone, IconMenu, IconX, IconChevronUp, IconSparkles } from "./Icons";

const NAV = [
  ["#about", "About"],
  ["#programmes", "Programmes"],
  ["#academic", "Academic"],
  ["#admission", "Admissions"],
  ["/gallery", "Gallery"],
  ["#events", "Events"],
  ["#contact", "Contact"],
];

/* Verified notices only — official website + official Facebook announcements (2026) */
const NOTICES = [
  "Admissions open — Session 2026-27",
  "BCA: eligibility 12th pass, any stream",
  "O Level (NIELIT) batch begins 15 July 2026",
  "Scholarship facility available — terms apply",
  "Regular & distance modes",
  "Helpline: 88872 44055 · 94511 87289 · 94537 85954",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Notice board marquee */}
      <div className="marquee bg-maroon text-paper text-[12.5px] font-semibold" aria-label="College notices">
        <div className="marquee-track py-2">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
              {NOTICES.map((n) => (
                <span key={n + k} className="flex items-center gap-2 px-6 whitespace-nowrap">
                  <IconSparkles className="w-3 h-3 text-gold-soft" />
                  {n}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b border-line transition-shadow ${
          scrolled ? "bg-paper/95 backdrop-blur shadow-[0_8px_24px_-20px_rgba(33,26,21,.5)]" : "bg-paper"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 h-[76px] flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3 min-w-0">
            <img src="/images/logo.webp" alt="NCMET emblem" width={48} height={48}
              className="w-12 h-12 rounded-full ring-1 ring-line" />
            <span className="leading-none">
              <span className="display block text-[22px] text-ink">NCMET</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft mt-1">
                Nice College of Mgmt &amp; e-Technology · Ghazipur
              </span>
            </span>
          </a>

          <nav aria-label="Main" className="hidden lg:flex items-center gap-6">
            {NAV.map(([h, l]) => (
              <a key={h} href={h} className="u-ink text-[13.5px] font-bold text-ink/80 hover:text-maroon transition-colors">
                {l}
              </a>
            ))}
            <a href="#admission"
              className="h-11 px-5 inline-flex items-center rounded-sm bg-maroon text-paper text-[13.5px] font-extrabold tracking-wide hover:bg-maroon-deep transition-colors">
              APPLY 2026-27
            </a>
          </nav>

          <button type="button" onClick={() => setOpen((v) => !v)}
            aria-expanded={open} aria-controls="mnav" aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden w-11 h-11 rounded-sm border border-line bg-card text-ink flex items-center justify-center cursor-pointer">
            {open ? <IconX className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div id="mnav" className="lg:hidden border-t border-line bg-card">
            <div className="px-6 py-4 grid gap-1">
              {NAV.map(([h, l]) => (
                <a key={h} href={h} onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-sm text-[15px] font-bold text-ink/85 hover:bg-paper-deep">
                  {l}
                </a>
              ))}
              <a href="#admission" onClick={() => setOpen(false)}
                className="mt-2 h-12 rounded-sm bg-maroon text-paper text-sm font-extrabold flex items-center justify-center">
                APPLY 2026-27
              </a>
              <p className="mt-3 pb-1 text-center text-xs font-bold text-ink-soft flex items-center justify-center gap-2">
                <IconPhone className="w-3.5 h-3.5 text-maroon" />
                <a className="hover:text-maroon" href="tel:8887244055">88872 44055</a>
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button type="button" aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-ink text-paper shadow-plate flex items-center justify-center hover:bg-maroon transition-colors cursor-pointer">
      <IconChevronUp className="w-5 h-5" />
    </button>
  );
}
