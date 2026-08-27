"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { IconArrowRight, IconAward, IconShield } from "./Icons";

const CATEGORIES = ["All", "Information Technology", "Accounts", "ITI", "Professional"];

const PROGRAMMES = [
  { name: "BCA", full: "Bachelor of Computer Applications", cat: "Information Technology", meta: "3 Years · 10+2 (Any Stream)", desc: "Programming, AI, web development & databases — industry-oriented curriculum with practical labs and placement assistance.", badge: "Regular & Distance" },
  { name: "MCA", full: "Master of Computer Applications", cat: "Information Technology", meta: "3 Years · Graduation", desc: "Advanced computer applications for graduates aiming at senior IT roles and research-oriented careers." },
  { name: "O Level", full: "NIELIT O Level", cat: "Information Technology", meta: "NIELIT · Govt. Recognized", desc: "Practical computer training — MS Word, Excel, PowerPoint, Internet & Email with experienced trainers.", badge: "Scholarship Available" },
  { name: "CCC", full: "Course on Computer Concepts (NIELIT)", cat: "Information Technology", meta: "NIELIT · Computer Literacy", desc: "Government-recognized computer literacy programme — the first step towards the digital world." },
  { name: "PGDCA", full: "Post Graduate Diploma in Computer Applications", cat: "Information Technology", meta: "Post-Graduate Diploma · Graduation", desc: "Career-focused computer applications diploma for graduates across all streams." },
  { name: "DCA", full: "Diploma in Computer Applications", cat: "Information Technology", meta: "Diploma · 10+2", desc: "Job-oriented diploma covering office automation, programming basics and practical skills." },
  { name: "Cyber Security", full: "Cyber Security Fundamentals", cat: "Information Technology", meta: "Certificate · Practical", desc: "Security fundamentals, safe digital practices and hands-on exposure for tomorrow's security-aware professionals." },
  { name: "Hardware & Networking", full: "Nice Certified Hardware & Networking", cat: "Information Technology", meta: "8–15 Months · 10+2", desc: "Computer hardware engineering and networking professional certification with lab practice." },
  { name: "NCA", full: "Nice Certified Accountancy", cat: "Accounts", meta: "6 Months · 10+2", desc: "Accounts-focused professional programme building strong fundamentals in accountancy practice." },
  { name: "Tally ERP", full: "Tally ERP Accounting Software", cat: "Accounts", meta: "Certificate · Practical Training", desc: "Hands-on Tally ERP training — the accounting software skill businesses hire for." },
  { name: "Fitter", full: "ITI Fitter Trade", cat: "ITI", meta: "ITI Trade Programme", desc: "National trade certificate course with workshop practice for skilled technical careers." },
  { name: "Electrician", full: "ITI Electrician Trade", cat: "ITI", meta: "ITI Trade Programme", desc: "Electrical trade training with practical exposure — a high-demand technical qualification." },
  { name: "MBA", full: "Master of Business Administration", cat: "Professional", meta: "2 Years · Graduation", desc: "Management programme with specializations — Marketing, Finance & HRM — for future business leaders.", badge: "Regular & Distance" },
  { name: "Digital Marketing", full: "Digital Marketing & Online Skills", cat: "Professional", meta: "Certificate · Practical", desc: "Modern marketing skills — social media, SEO and online campaigns for the digital economy." },
  { name: "Fashion Design", full: "Fashion Design Programme", cat: "Professional", meta: "Certificate · Creative", desc: "Creative design skills and garment-industry fundamentals for design-minded students." },
];

export default function Programmes() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? PROGRAMMES : PROGRAMMES.filter((p) => p.cat === active);

  return (
    <section id="programmes" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">Programmes</p>
          <h2 className="serif-heading text-3xl md:text-5xl text-primary mt-3 max-w-2xl">
            Choose the path that fits your goals.
          </h2>
          <p className="text-muted-fg mt-4 max-w-2xl leading-relaxed">
            From NIELIT certifications and ITI trades to degrees in computers, management and
            professional skills — regular &amp; distance modes, practical learning and career
            guidance at every step.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`h-11 px-5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                active === c
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-fg hover:bg-line/60 hover:text-fg"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 70}>
              <article className="card-hover group h-full rounded-2xl border border-line bg-card p-6 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-secondary bg-secondary/10 rounded-full px-3 py-1">
                    {p.cat}
                  </span>
                  {p.badge && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-accent bg-accent/10 rounded-full px-3 py-1">
                      <IconAward className="w-3 h-3" /> {p.badge}
                    </span>
                  )}
                </div>
                <h3 className="serif-heading text-2xl text-fg mt-4">{p.name}</h3>
                <p className="text-sm font-semibold text-muted-fg">{p.full}</p>
                <p className="text-sm text-muted-fg leading-relaxed mt-3 flex-1">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                    <IconShield className="w-3.5 h-3.5" /> {p.meta}
                  </span>
                  <a
                    href="#admission"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:text-accent-deep transition-colors"
                  >
                    Enquire <IconArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
