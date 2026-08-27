"use client";

import { useEffect, useState } from "react";
import { IconPin, IconPhone, IconMenu, IconX, IconChevronUp, IconSparkles } from "./Icons";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#programmes", label: "Programmes" },
  { href: "#academic", label: "Academic" },
  { href: "#admission", label: "Admissions" },
  { href: "#gallery", label: "Campus" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top information bar */}
      <div className="hidden md:block bg-primary-deep text-white/90 text-[13px]">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-9">
          <p className="flex items-center gap-2">
            <IconPin className="w-3.5 h-3.5 text-amber-400" />
            Bandhwa, Peer Nagar, Ghazipur, Uttar Pradesh – 233001
          </p>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-amber-300">
              <IconSparkles className="w-3 h-3" /> ADMISSIONS OPEN 2026–27
            </span>
            <a
              href="tel:8887244055"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <IconPhone className="w-3.5 h-3.5" /> 88872 44055
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(203,213,225,.6),0_8px_24px_-16px_rgba(30,58,95,.25)]"
            : "bg-bg/80 backdrop-blur-sm"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto max-w-7xl px-6 flex items-center justify-between h-[72px]"
        >
          <a href="#top" className="flex items-center gap-3 min-w-0">
            <img
              src="/images/logo.png"
              alt="NCMET logo"
              width={46}
              height={46}
              className="w-[46px] h-[46px] rounded-full object-cover ring-1 ring-line"
            />
            <span className="leading-tight">
              <span className="block serif-heading text-lg text-primary">NICE COLLEGE</span>
              <span className="block text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted-fg">
                of Management &amp; e-Technology
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-[14px] font-semibold text-fg/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#admission"
              className="inline-flex items-center justify-center rounded-xl bg-accent hover:bg-accent-deep text-white text-sm font-bold px-5 h-11 transition-colors cursor-pointer"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-line bg-white text-primary cursor-pointer"
          >
            {open ? <IconX className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-line bg-white shadow-lift"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-[15px] font-semibold text-fg/85 hover:bg-muted hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#admission"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-accent text-white text-sm font-bold px-5 h-12"
              >
                Apply Now — Admissions Open 2026–27
              </a>
              <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-fg">
                <IconPhone className="w-3.5 h-3.5" />
                <a href="tel:8887244055" className="font-semibold text-primary">
                  88872 44055
                </a>
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
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-primary text-white shadow-lift flex items-center justify-center hover:bg-primary-deep transition-colors cursor-pointer"
    >
      <IconChevronUp className="w-5 h-5" />
    </button>
  );
}
