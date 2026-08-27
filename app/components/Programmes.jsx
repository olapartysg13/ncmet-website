"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { IconArrowRight } from "./Icons";

const CATS = ["All", "Information Technology", "Accounts", "ITI", "Professional"];

/* VERIFIED LIST ONLY:
   - ncomet.in (official, live): BCA, O Level, CCC, NCA, Tally ERP, Fitter, Electrician,
     Digital Marketing, Cyber Security, Fashion Design
   - official Facebook announcements 2026-27: MCA, MBA, DCA, PGDCA
*/
const DATA = [
  { n: "BCA", f: "Bachelor of Computer Applications", c: "Information Technology", m: "12th pass, any stream", s: "official site + 2026 admission notices", d: "Degree programme in programming, computers and applications with practical lab work and career guidance." },
  { n: "MCA", f: "Master of Computer Applications", c: "Information Technology", m: "Graduation", s: "2026 admission notices", d: "Postgraduate computer applications programme announced for session 2026-27." },
  { n: "O Level", f: "NIELIT O Level", c: "Information Technology", m: "Government-recognised", s: "official site + notices", d: "NIELIT certification with practical computer training; scholarship facility available (terms apply)." },
  { n: "CCC", f: "Course on Computer Concepts (NIELIT)", c: "Information Technology", m: "Computer literacy", s: "official site + notices", d: "Government-recognised foundation course in computer literacy." },
  { n: "DCA", f: "Diploma in Computer Applications", c: "Information Technology", m: "Diploma", s: "2026 admission notices", d: "Job-oriented computer applications diploma announced for session 2026-27." },
  { n: "PGDCA", f: "Post Graduate Diploma in Computer Applications", c: "Information Technology", m: "Post-graduate diploma", s: "2026 admission notices", d: "Post-graduate diploma announced for session 2026-27." },
  { n: "Cyber Security", f: "Cyber Security fundamentals", c: "Information Technology", m: "Certificate", s: "official site", d: "Foundation course in safe digital practice and security fundamentals." },
  { n: "NCA", f: "Accounts-focused programme", c: "Accounts", m: "Accountancy", s: "official site", d: "Accountancy programme building practical, job-ready accounts skills." },
  { n: "Tally ERP", f: "Tally ERP accounting software", c: "Accounts", m: "Practical training", s: "official site", d: "Hands-on training in the accounting software used by businesses." },
  { n: "Fitter", f: "ITI Fitter trade", c: "ITI", m: "ITI trade", s: "official site", d: "Trade programme with workshop practice for skilled technical careers." },
  { n: "Electrician", f: "ITI Electrician trade", c: "ITI", m: "ITI trade", s: "official site", d: "Electrical trade programme with practical exposure." },
  { n: "MBA", f: "Master of Business Administration", c: "Professional", m: "Graduation", s: "2026 admission notices", d: "Management programme announced for session 2026-27." },
  { n: "Digital Marketing", f: "Digital skills & marketing", c: "Professional", m: "Certificate", s: "official site", d: "Modern marketing skills for the digital economy." },
  { n: "Fashion Design", f: "Creative & design skills", c: "Professional", m: "Certificate", s: "official site", d: "Creative design programme for design-minded students." },
];

export default function Programmes() {
  const [cat, setCat] = useState("All");
  const rows = cat === "All" ? DATA : DATA.filter((p) => p.c === cat);

  return (
    <section id="programmes" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">02 · Programmes</p>
            <h2 className="display text-4xl md:text-6xl text-ink mt-3">
              Four streams.
              <br />
              <span className="italic text-maroon">One standard: employable skill.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-soft leading-relaxed">
            Every programme below is verified from the college's official website and its official
            2026-27 admission announcements.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-y border-line py-4">
          {CATS.map((c) => (
            <button key={c} type="button" onClick={() => setCat(c)} aria-pressed={cat === c}
              className={`u-ink text-sm font-extrabold transition-colors cursor-pointer ${
                cat === c ? "text-maroon" : "text-ink-soft hover:text-ink"
              }`}
              aria-current={cat === c}>
              {c}
            </button>
          ))}
        </Reveal>

        <div className="mt-2">
          {rows.map((p, i) => (
            <Reveal key={p.n} delay={Math.min(i, 6) * 40}>
              <a href="#admission"
                className="group grid md:grid-cols-[64px_1.1fr_1.6fr_auto] items-center gap-x-6 gap-y-2 border-b border-line py-5 px-2 hover:bg-card transition-colors">
                <span className="num-outline text-3xl">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="display block text-2xl text-ink group-hover:text-maroon transition-colors">{p.n}</span>
                  <span className="block text-xs font-bold text-ink-soft mt-0.5">{p.f}</span>
                </span>
                <span className="text-sm text-ink-soft leading-relaxed">
                  {p.d}
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-gold mt-1">
                    {p.c} · {p.m}
                  </span>
                </span>
                <IconArrowRight className="w-5 h-5 text-line group-hover:text-maroon group-hover:translate-x-1 transition-all" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={60} className="mt-6 text-xs font-bold text-ink-soft">
          Sources: ncomet.in (official website) · official Facebook announcements, 2026.
        </Reveal>
      </div>
    </section>
  );
}
