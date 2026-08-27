import Reveal from "./Reveal";
import EnquiryForm from "./EnquiryForm";
import Portal from "./Portal";
import {
  IconPin, IconPhone, IconCap, IconBook, IconUsers, IconCalendar, IconArrowRight,
  IconCheck, IconEye, IconTarget, IconStar, IconAward, IconMonitor, IconLandmark,
  IconClock, IconDownload, IconLock, IconTrophy, IconShield, IconBriefcase,
  IconImage, IconClipboard, IconFileText, IconMessage, IconSun, IconFacebook,
  IconWhatsApp, IconMail, IconSparkles,
} from "./Icons";

/* ------------------------------- HERO ------------------------------- */
export function Hero() {
  return (
    <section id="top" className="grid-lines border-b border-line">
      <div className="mx-auto max-w-7xl px-6 pt-14 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow">NCMET · Education · Skills · Career · Since 1999</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="serif-heading text-[42px] leading-[1.05] md:text-6xl xl:text-7xl text-primary mt-4">
              Learn. Lead.
              <br />
              <span className="italic text-accent">Transform.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-muted-fg text-base md:text-lg leading-relaxed mt-6 max-w-xl">
              Building confident, capable and future-ready learners through quality education,
              practical exposure and a nurturing learning environment — in the heart of Ghazipur,
              since 1999.
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-8 flex flex-wrap gap-3">
            <a href="#programmes"
              className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-primary hover:bg-primary-deep text-white text-[15px] font-bold transition-colors">
              Explore Programmes
            </a>
            <a href="#admission"
              className="inline-flex items-center justify-center h-12 px-6 rounded-xl border-2 border-accent text-accent hover:bg-accent hover:text-white text-[15px] font-bold transition-colors">
              Start Admission — 2026-27
            </a>
          </Reveal>
          <Reveal delay={260} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              ["1999", "Journey began"],
              ["14,000+", "Sq. ft. campus"],
              ["15+", "Career courses"],
              ["2", "Modes: Regular + Distance"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="serif-heading text-3xl text-primary">{n}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-fg mt-1">{l}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={150}>
            <figure className="hero-frame relative">
              <img
                src="/images/campus.jpg"
                alt="NCMET college campus building in Ghazipur"
                width={1402} height={1122}
                className="w-full h-auto rounded-2xl object-cover shadow-lift ring-1 ring-line"
                fetchPriority="high"
              />
              <figcaption className="absolute left-4 bottom-4 right-4 md:left-auto md:right-auto flex items-center gap-2 rounded-xl bg-white/95 backdrop-blur px-4 py-3 shadow-card">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 text-accent text-[11px] font-bold uppercase tracking-wide px-2.5 py-1">
                  <IconSparkles className="w-3 h-3" /> Admissions Open 2026–27
                </span>
                <span className="text-xs font-semibold text-muted-fg hidden sm:inline">
                  In front of DM Residence, Peer Nagar, Ghazipur
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- QUICK ACCESS --------------------------- */
export function QuickAccess() {
  const tiles = [
    { icon: IconCap, title: "Admissions", sub: "Apply online for 2026-27", href: "#admission" },
    { icon: IconBook, title: "Academic", sub: "Resources, syllabus & exams", href: "#academic" },
    { icon: IconUsers, title: "Student Support", sub: "Login, results & downloads", href: "#support" },
    { icon: IconCalendar, title: "Events", sub: "Activities & interactions", href: "#events" },
  ];
  return (
    <section className="bg-white border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((t, i) => (
          <Reveal key={t.title} delay={i * 70}>
            <a href={t.href} className="card-hover flex items-center gap-4 rounded-2xl border border-line bg-card p-5">
              <span className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <t.icon className="w-6 h-6" />
              </span>
              <span>
                <span className="block font-bold text-fg">{t.title}</span>
                <span className="block text-xs text-muted-fg mt-0.5">{t.sub}</span>
              </span>
              <IconArrowRight className="w-4 h-4 ml-auto text-muted-fg" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- ABOUT ------------------------------ */
export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">About NCMET</p>
            <h2 className="serif-heading text-3xl md:text-5xl text-primary mt-3">
              Education with purpose,
              <br className="hidden md:block" /> skills with direction.
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="text-muted-fg leading-relaxed mt-6">
              Nice College of Management and e-Technology (NCMET) was established in{" "}
              <strong className="text-fg">1999</strong> under the name{" "}
              <strong className="text-fg">Nuva Institute of Computer Education</strong>, in
              association with the Nuva Computer Education Society, founded by{" "}
              <strong className="text-fg">Mr. Ram Janam Singh</strong>.
            </p>
            <p className="text-muted-fg leading-relaxed mt-4">
              The institution has grown steadily in the education sector and focuses on practical,
              industry-relevant learning across Information Technology, Computer Hardware &amp;
              Networking, Accounts and other professional areas — recognised among students of
              Ghazipur for over two decades of trusted computer education.
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-8 grid sm:grid-cols-2 gap-3">
            {["Practical Learning", "Skill Development", "Personality Development", "Industry Orientation"].map((x) => (
              <p key={x} className="flex items-center gap-2.5 rounded-xl bg-white border border-line px-4 py-3 text-sm font-bold text-fg">
                <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                  <IconCheck className="w-3.5 h-3.5" />
                </span>
                {x}
              </p>
            ))}
          </Reveal>
          <Reveal delay={200} className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary text-white text-xs font-bold px-4 py-2">
              <IconAward className="w-4 h-4" /> ISO 9001:2000 Certified Institute
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-line text-primary text-xs font-bold px-4 py-2">
              <IconShield className="w-4 h-4" /> Regular &amp; Distance Learning
            </span>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <figure className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <img src="/images/founder.jpg" alt="Portrait of founder Mr. Ram Janam Singh"
                width={250} height={278} className="w-40 h-44 object-cover rounded-xl ring-1 ring-line mx-auto" />
              <figcaption className="text-center mt-4">
                <p className="serif-heading text-xl text-primary">Mr. Ram Janam Singh</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-fg mt-1">
                  Founder · Nuva Computer Education Society
                </p>
              </figcaption>
              <blockquote className="mt-5 border-t border-line pt-5 text-sm text-muted-fg leading-relaxed italic">
                "Our corporate philosophy is growth through quality and productivity — molding young
                minds into resourceful and perceptive professionals, ready to embark upon
                challenging careers."
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- DIRECTOR'S MESSAGE ------------------------ */
export function Director() {
  return (
    <section className="py-20 md:py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] grid-lines invert" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-start relative">
        <div className="lg:col-span-4">
          <Reveal>
            <figure className="rounded-2xl bg-white/10 border border-white/15 p-6 text-center">
              <img src="/images/director.jpg" alt="Portrait of Director A. N. Singh"
                width={150} height={163} className="w-32 h-36 object-cover rounded-xl mx-auto ring-2 ring-amber-400/70" />
              <figcaption className="mt-4">
                <p className="serif-heading text-2xl">A. N. Singh</p>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300 mt-1">
                  Director, NCMET
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">Director's Message</p>
            <h2 className="serif-heading text-3xl md:text-4xl mt-3">
              Preparing students for the challenges of tomorrow.
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <div className="mt-6 space-y-4 text-white/85 leading-relaxed text-[15px]">
              <p>
                It is my pleasure and privilege to take you around our Institute — Nice College of
                Management and e-Technology, at Ghazipur (U.P.). The Institute has a spacious
                building with outstanding infrastructure amidst excellent surroundings, and a track
                record of imparting quality education with an emphasis on preparing students as per
                the requirements of industry.
              </p>
              <p>
                We offer a challenging curriculum which provides opportunities for academic
                achievement while focusing on personal development. Modern computer laboratories,
                qualified faculty and personal attention to each student; a library equipped with
                up-to-date books and journals; and regular workshops, seminars and group discussions
                help students continuously upgrade themselves.
              </p>
              <p>
                Our great nation is at the threshold of leading the world with its IT and Management
                talent. We invite and welcome you to empower yourself by joining the winning team of
                NCMET's students and alumni, famous for their excellence.
              </p>
            </div>
          </Reveal>
          <Reveal delay={140} className="mt-8 flex flex-wrap gap-6">
            {[["Quality", "ISO-certified systems"], ["Faculty", "Qualified & experienced"], ["Care", "Personal attention"]].map(([t, s]) => (
              <div key={t}>
                <p className="serif-heading text-xl text-amber-300">{t}</p>
                <p className="text-xs text-white/70 font-semibold mt-0.5">{s}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- VISION ETC ----------------------------- */
export function Values() {
  const cards = [
    { icon: IconEye, t: "Vision", d: "To be a leading center of excellence in management and technology education, recognized for innovation, integrity, and impact, nurturing globally competent and ethically grounded professionals." },
    { icon: IconTarget, t: "Mission", d: "To inspire excellence in education and empower learners to become confident, ethical, and socially responsible leaders through innovative teaching, practical exposure and a nurturing environment." },
    { icon: IconStar, t: "Quality Policy", d: "To deliver high-quality education through continuous improvement in academic standards, infrastructure and teaching methodologies, with industry-oriented learning and personal attention." },
  ];
  return (
    <section id="vision" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Vision · Mission · Quality</p>
          <h2 className="serif-heading text-3xl md:text-5xl text-primary mt-3">What drives NCMET</h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 90}>
              <div className="card-hover h-full rounded-2xl border border-line bg-white p-7">
                <span className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <c.icon className="w-6 h-6" />
                </span>
                <h3 className="serif-heading text-2xl text-primary mt-5">{c.t}</h3>
                <p className="text-sm text-muted-fg leading-relaxed mt-3">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- INFRASTRUCTURE -------------------------- */
export function Infrastructure() {
  const feats = [
    { icon: IconLandmark, t: "Modern Learning Spaces", d: "Spacious, disciplined surroundings designed to support focused learning and development." },
    { icon: IconMonitor, t: "Computer Laboratories", d: "Modern computer laboratory facilities supporting technology-oriented, practical learning." },
    { icon: IconBook, t: "Library & Resources", d: "Up-to-date books, journals and learning resources so students continuously upgrade knowledge." },
    { icon: IconUsers, t: "Workshops & Seminars", d: "Regular academic activities — workshops, seminars and group discussions for real exposure." },
  ];
  return (
    <section className="py-20 md:py-28 bg-white border-y border-line">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <figure className="hero-frame">
            <img src="/images/library.jpg" alt="NCMET college library — real photograph of the book stacks"
              width={600} height={319} className="w-full h-auto rounded-2xl object-cover ring-1 ring-line shadow-card" />
            <figcaption className="mt-3 text-xs font-semibold text-muted-fg">
              The NCMET library — stocked with up-to-date books &amp; journals.
            </figcaption>
          </figure>
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow">Infrastructure</p>
            <h2 className="serif-heading text-3xl md:text-4xl text-primary mt-3">
              A learning environment designed for growth.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5">
            {feats.map((f, i) => (
              <Reveal key={f.t} delay={i * 70}>
                <div className="flex gap-4">
                  <span className="serif-heading text-xl text-line w-8 shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-fg flex items-center gap-2">
                      <f.icon className="w-4 h-4 text-accent" /> {f.t}
                    </h3>
                    <p className="text-sm text-muted-fg leading-relaxed mt-1">{f.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ ACADEMIC ----------------------------- */
export function Academic() {
  const items = [
    { icon: IconCalendar, t: "Academic Calendar", d: "Official academic schedule, batch dates & holidays for the session." },
    { icon: IconFileText, t: "Syllabus", d: "Programme-wise syllabus and curriculum documents for every course." },
    { icon: IconClipboard, t: "Examination", d: "Exam information, time-tables and instructions for students." },
    { icon: IconMonitor, t: "E-Learning Resources", d: "Digital learning support — approved videos, notes and links." },
    { icon: IconBook, t: "Assignments", d: "Assignment notices and submission instructions, per programme." },
  ];
  return (
    <section id="academic" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">Academic</p>
          <h2 className="serif-heading text-3xl md:text-5xl text-primary mt-3 max-w-2xl">
            Everything students need, in one place.
          </h2>
          <p className="text-muted-fg mt-4 max-w-2xl">
            Academic documents are provided by the college office and student portal. Ask for any
            resource at the office or over the admission helpline.
          </p>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((x, i) => (
            <Reveal key={x.t} delay={i * 60}>
              <div className="card-hover h-full rounded-2xl border border-line bg-white p-5">
                <span className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                  <x.icon className="w-5 h-5" />
                </span>
                <h3 className="font-bold text-fg mt-4 text-[15px]">{x.t}</h3>
                <p className="text-xs text-muted-fg leading-relaxed mt-1.5">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- ADMISSION ----------------------------- */
export function Admission() {
  const steps = [
    ["Enquire", "Submit the quick enquiry form or call the admission helpline."],
    ["Counselling", "Our team explains programmes, fees, timings & documents."],
    ["Confirm", "Submit documents and fees — your seat is reserved."],
  ];
  const docs = ["10th & 12th Marksheet", "Aadhaar Card", "4 Passport-size Photos", "Admission Fee"];
  return (
    <section id="admission" className="py-20 md:py-28 bg-white border-y border-line">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <Reveal>
            <p className="eyebrow">Admissions · Session 2026-27</p>
            <h2 className="serif-heading text-3xl md:text-5xl text-primary mt-3">
              Take the next step towards your career.
            </h2>
            <p className="text-muted-fg mt-4 leading-relaxed">
              Submit an enquiry online and our admission team will connect with you regarding
              programme information, fee structure, hostel information and the admission process.
              Scholarship facility available (terms &amp; conditions apply).
            </p>
          </Reveal>

          <Reveal delay={90} className="mt-8 space-y-4">
            {steps.map(([t, d], i) => (
              <div key={t} className="flex gap-4 items-start">
                <span className="w-10 h-10 shrink-0 rounded-full bg-primary text-white serif-heading text-lg flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-fg">{t}</h3>
                  <p className="text-sm text-muted-fg mt-0.5">{d}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={140} className="mt-8 rounded-2xl bg-muted border border-line p-5">
            <h3 className="font-bold text-fg text-sm flex items-center gap-2">
              <IconFileText className="w-4 h-4 text-accent" /> Documents required at admission
            </h3>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2">
              {docs.map((d) => (
                <li key={d} className="flex items-center gap-2 text-sm text-muted-fg">
                  <IconCheck className="w-4 h-4 text-green-700 shrink-0" /> {d}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180} className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-fg">Admission helpline:</span>
            {["8887244055", "9451187289", "9453785954"].map((n) => (
              <a key={n} href={`tel:${n}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-line px-4 py-2 text-sm font-bold text-primary hover:border-accent hover:text-accent transition-colors">
                <IconPhone className="w-3.5 h-3.5" /> {n}
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal delay={120}>
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ SUPPORT ------------------------------ */
export function Support() {
  const cards = [
    { icon: IconMessage, t: "Enquiry / Grievance", d: "Raise a question or complaint — office responds promptly.", href: "#contact" },
    { icon: IconDownload, t: "Downloads", d: "Forms & resources from the office until the portal launches.", href: "#portal" },
    { icon: IconLock, t: "Student Login", d: "Portal access for enrolled students.", href: "#portal" },
    { icon: IconTrophy, t: "Results", d: "Examination results via office & upcoming portal.", href: "#portal" },
    { icon: IconSun, t: "Holiday List", d: "Academic holiday schedule, each session.", href: "#academic" },
  ];
  return (
    <section id="support" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-3">
          <Reveal>
            <p className="eyebrow">Student Support</p>
            <h2 className="serif-heading text-3xl md:text-4xl text-primary mt-3">Student services</h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 60}>
                <a href={c.href} className="card-hover flex gap-4 h-full rounded-2xl border border-line bg-white p-5">
                  <span className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <c.icon className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block font-bold text-fg text-[15px]">{c.t}</span>
                    <span className="block text-xs text-muted-fg leading-relaxed mt-1">{c.d}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
        <div id="portal" className="lg:col-span-2 scroll-mt-28">
          <Reveal delay={100}>
            <Portal />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ GALLERY ------------------------------ */
export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white border-y border-line">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">Gallery</p>
          <h2 className="serif-heading text-3xl md:text-5xl text-primary mt-3">NCMET at a glance.</h2>
          <p className="text-muted-fg mt-4 max-w-2xl">
            Genuine photographs of our campus, library and leadership. More campus moments will be
            added here as the college shares them.
          </p>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          <Reveal className="md:col-span-2 md:row-span-2">
            <figure className="h-full">
              <img src="/images/campus.jpg" alt="NCMET campus building — real photograph"
                width={1402} height={1122} loading="lazy"
                className="w-full h-full min-h-[280px] object-cover rounded-2xl ring-1 ring-line shadow-card" />
              <figcaption className="text-xs font-semibold text-muted-fg mt-2">The NCMET campus, Peer Nagar, Ghazipur.</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={70}>
            <figure>
              <img src="/images/library.jpg" alt="NCMET library — real photograph"
                width={600} height={319} loading="lazy"
                className="w-full h-40 object-cover rounded-2xl ring-1 ring-line" />
              <figcaption className="text-xs font-semibold text-muted-fg mt-2">College library.</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <figure>
              <img src="/images/logo-brand.jpg" alt="Official NCMET emblem — Learn, Lead, Transform"
                width={200} height={200} loading="lazy"
                className="w-full h-40 object-contain rounded-2xl bg-white ring-1 ring-line p-4" />
              <figcaption className="text-xs font-semibold text-muted-fg mt-2">Our emblem — Learn · Lead · Transform.</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={90}>
            <figure className="flex items-center gap-4 rounded-2xl border border-line bg-card p-4">
              <img src="/images/founder.jpg" alt="Founder portrait" width={250} height={278} loading="lazy"
                className="w-20 h-24 object-cover rounded-xl ring-1 ring-line" />
              <figcaption className="text-sm">
                <span className="font-bold text-fg block">Mr. Ram Janam Singh</span>
                <span className="text-xs text-muted-fg">Founder, Nuva Computer Education Society</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={140}>
            <figure className="flex items-center gap-4 rounded-2xl border border-line bg-card p-4">
              <img src="/images/director.jpg" alt="Director portrait" width={150} height={163} loading="lazy"
                className="w-20 h-24 object-cover rounded-xl ring-1 ring-line" />
              <figcaption className="text-sm">
                <span className="font-bold text-fg block">A. N. Singh</span>
                <span className="text-xs text-muted-fg">Director, NCMET</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={180}>
            <div className="rounded-2xl bg-primary text-white p-5 flex flex-col justify-center gap-2 h-full">
              <p className="serif-heading text-xl leading-snug">"जहाँ शिक्षा बनती है करियर की पहचान।"</p>
              <p className="text-xs text-white/70 font-semibold">Placement activity & record — coming soon.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- EVENTS ------------------------------ */
export function Events() {
  const ev = [
    { t: "Orientation Program", d: "Welcome and academic orientation activities for new batches.", icon: IconCap },
    { t: "Industry Interaction", d: "Opportunities for practical exposure and interaction with professionals.", icon: IconBriefcase },
    { t: "Seminar / Conference", d: "Knowledge-sharing and engagement through seminars and group discussions.", icon: IconUsers },
    { t: "Cultural Celebrations", d: "Festivals and cultural days celebrated together as one campus family.", icon: IconSun },
  ];
  return (
    <section id="events" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">Events</p>
          <h2 className="serif-heading text-3xl md:text-5xl text-primary mt-3">Learning beyond the classroom.</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ev.map((e, i) => (
            <Reveal key={e.t} delay={i * 70}>
              <div className="card-hover h-full rounded-2xl border border-line bg-white p-6">
                <span className="serif-heading text-2xl text-line">0{i + 1}</span>
                <span className="block mt-3 w-11 h-11 rounded-xl bg-accent/10 text-accent items-center justify-center hidden sm:flex">
                  <e.icon className="w-5 h-5" />
                </span>
                <h3 className="font-bold text-fg mt-4">{e.t}</h3>
                <p className="text-sm text-muted-fg leading-relaxed mt-1.5">{e.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CONTACT ------------------------------ */
export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-line">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="serif-heading text-3xl md:text-5xl text-primary mt-3">Let's connect.</h2>
            <p className="text-muted-fg mt-4 max-w-md">
              Have a question about programmes or admissions? The college office is open on all
              working days.
            </p>
          </Reveal>
          <Reveal delay={90} className="mt-8 space-y-4">
            <div className="flex gap-4 items-start rounded-2xl border border-line bg-card p-5">
              <IconPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-fg">Address</h3>
                <p className="text-sm text-muted-fg mt-1">
                  NICE College of Management and e-Technology,
                  <br /> In front of DM Residence, Bandhwa, Peer Nagar,
                  <br /> Ghazipur, Uttar Pradesh – 233001
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start rounded-2xl border border-line bg-card p-5">
              <IconPhone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-fg">Phone</h3>
                <p className="text-sm text-muted-fg mt-1 flex flex-wrap gap-x-4 gap-y-1">
                  <a href="tel:8887244055" className="hover:text-accent font-semibold">88872 44055</a>
                  <a href="tel:9451187289" className="hover:text-accent font-semibold">94511 87289</a>
                  <a href="tel:9453785954" className="hover:text-accent font-semibold">94537 85954</a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120} className="flex flex-col gap-4">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Nice+College+of+Management+and+E-Technology+Bandhwa+Peer+Nagar+Ghazipur+233001"
            target="_blank" rel="noopener noreferrer"
            className="card-hover flex-1 min-h-[220px] rounded-2xl border border-line bg-muted grid-lines flex flex-col items-center justify-center gap-3 p-8 text-center"
          >
            <IconPin className="w-10 h-10 text-accent" />
            <p className="serif-heading text-2xl text-primary">Ghazipur, Uttar Pradesh</p>
            <p className="text-sm text-muted-fg">Open in Google Maps for directions to the campus.</p>
            <span className="inline-flex h-11 items-center rounded-xl bg-primary text-white px-6 text-sm font-bold">
              Open Map
            </span>
          </a>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://www.facebook.com/nicegzp/" target="_blank" rel="noopener noreferrer"
              className="card-hover rounded-2xl border border-line bg-card p-5 flex items-center gap-3">
              <IconFacebook className="w-6 h-6 text-secondary" />
              <span className="text-sm font-bold text-fg">Facebook Page<br /><span className="text-xs font-semibold text-muted-fg">/nicegzp — updates & notices</span></span>
            </a>
            <a href="https://wa.me/918887244055" target="_blank" rel="noopener noreferrer"
              className="card-hover rounded-2xl border border-line bg-card p-5 flex items-center gap-3">
              <IconWhatsApp className="w-6 h-6 text-green-600" />
              <span className="text-sm font-bold text-fg">WhatsApp<br /><span className="text-xs font-semibold text-muted-fg">Instant admission help</span></span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
