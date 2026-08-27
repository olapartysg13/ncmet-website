import Reveal from "./Reveal";
import EnquiryForm from "./EnquiryForm";
import Portal from "./Portal";
import {
  IconPin, IconPhone, IconCap, IconBook, IconUsers, IconCalendar, IconArrowRight,
  IconCheck, IconEye, IconTarget, IconStar, IconMonitor, IconLandmark,
  IconDownload, IconLock, IconTrophy, IconBriefcase,
  IconClipboard, IconFileText, IconMessage, IconSun, IconFacebook,
  IconWhatsApp, IconSparkles,
} from "./Icons";

/* ------------------------------- HERO ------------------------------- */
export function Hero() {
  return (
    <section id="top" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-6 pt-14 md:pt-20 pb-14 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="kicker flex items-center gap-3">
              <span className="inline-block w-10 border-t-2 border-gold" aria-hidden="true" />
              Est. 1999 · Peer Nagar, Ghazipur (U.P.)
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display text-[52px] leading-[0.98] md:text-[84px] text-ink mt-6">
              Learn. Lead.
              <br />
              <em className="text-maroon">Transform.</em>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-xl text-ink-soft text-base md:text-lg leading-relaxed mt-7">
              NICE College of Management and e-Technology builds confident, capable and
              future-ready learners through quality education, practical exposure and a nurturing
              learning environment.
            </p>
          </Reveal>
          <Reveal delay={220} className="mt-9 flex flex-wrap gap-4">
            <a href="#admission"
              className="h-12 px-7 inline-flex items-center rounded-sm bg-maroon text-paper text-sm font-extrabold tracking-wide hover:bg-maroon-deep transition-colors">
              Start Admission
            </a>
            <a href="#programmes"
              className="h-12 px-7 inline-flex items-center rounded-sm border-2 border-ink text-ink text-sm font-extrabold hover:bg-ink hover:text-paper transition-colors">
              View Programmes
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={150}>
            <figure className="relative">
              <img src="/images/campus.jpg" alt="The NCMET campus building in Ghazipur — real photograph"
                width={1402} height={1122} fetchPriority="high"
                className="arch w-full h-auto object-cover ring-1 ring-line shadow-postcard" />
              <figcaption className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-ink text-paper text-[11px] font-extrabold uppercase tracking-[0.18em] px-5 py-2.5">
                The campus · Bandhwa, Peer Nagar
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>

      {/* facts strip */}
      <div className="rule-double">
        <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["1999", "Year the journey began"],
            ["14,000+", "Sq. ft. of campus"],
            ["Regular + Distance", "Two modes of study"],
            ["NIELIT · ITI · Degrees", "Government-recognised tracks"],
          ].map(([a, b]) => (
            <div key={b}>
              <p className="display text-2xl md:text-[26px] text-maroon">{a}</p>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-ink-soft mt-1">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- ABOUT ------------------------------ */
export function About() {
  const milestones = [
    ["1999", "Founded as Nuva Institute of Computer Education, in association with the Nuva Computer Education Society established by Mr. Ram Janam Singh."],
    ["Growth", "Steady growth across Information Technology, Computer Hardware & Networking, Accounts and professional areas — with practical, industry-relevant learning."],
    ["2026-27", "Admissions open across BCA, MCA, MBA, DCA, PGDCA, O Level, CCC and more — regular and distance modes."],
  ];
  return (
    <section id="about" className="py-20 md:py-28 bg-paper-deep/50 border-b border-line">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="kicker">01 · The institution</p>
            <h2 className="display text-4xl md:text-5xl text-ink mt-3">
              A quarter-century of computer education in Ghazipur.
            </h2>
          </Reveal>
          <Reveal delay={90} className="mt-8 space-y-3">
            {["Practical learning", "Skill development", "Personality development", "Industry orientation"].map((x) => (
              <p key={x} className="flex items-center gap-3 text-[15px] font-bold text-ink">
                <span className="w-6 h-6 rounded-full bg-green/10 text-green flex items-center justify-center shrink-0">
                  <IconCheck className="w-3.5 h-3.5" />
                </span>
                {x}
              </p>
            ))}
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <ol className="relative border-l-2 border-gold/60 ml-3 space-y-10">
            {milestones.map(([t, d], i) => (
              <Reveal key={t} delay={i * 90} as="li" className="pl-8 relative">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-maroon ring-4 ring-paper-deep" aria-hidden="true" />
                <p className="display text-2xl text-maroon">{t}</p>
                <p className="text-ink-soft leading-relaxed mt-2 max-w-xl">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- LEADERSHIP ----------------------------- */
export function Leadership() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="kicker">02 · Leadership</p>
          <h2 className="display text-4xl md:text-5xl text-ink mt-3">The people behind the college.</h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Reveal delay={60}>
            <figure className="postcard -rotate-1 max-w-md">
              <img src="/images/founder.jpg" alt="Mr. Ram Janam Singh, founder — real photograph"
                width={250} height={278} loading="lazy" className="w-full h-72 object-cover" />
              <figcaption className="pt-4">
                <p className="display text-2xl text-ink">Mr. Ram Janam Singh</p>
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-gold mt-1">
                  Founder · Nuva Computer Education Society
                </p>
                <p className="text-sm text-ink-soft leading-relaxed mt-3 italic">
                  "Our philosophy is growth through quality and productivity — molding young minds
                  into resourceful professionals, ready for challenging careers."
                </p>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <figure className="postcard rotate-1 max-w-md md:ml-auto">
              <img src="/images/director.jpg" alt="A. N. Singh, Director — real photograph"
                width={150} height={163} loading="lazy" className="w-full h-72 object-cover object-top" />
              <figcaption className="pt-4">
                <p className="display text-2xl text-ink">Amar N. Singh</p>
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-gold mt-1">Director</p>
                <p className="text-sm text-ink-soft leading-relaxed mt-3 italic">
                  "Our emphasis is on quality education, academic excellence and overall personality
                  development — with modern laboratories, qualified faculty and personal attention."
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- VALUES ------------------------------ */
export function Values() {
  const cards = [
    { icon: IconEye, t: "Vision", d: "To be a leading center of excellence in management and technology education, recognized for innovation, integrity, and impact, nurturing globally competent and ethically grounded professionals." },
    { icon: IconTarget, t: "Mission", d: "To inspire excellence in education and empower learners to become confident, ethical, and socially responsible leaders through innovative teaching, practical exposure and a nurturing environment." },
    { icon: IconStar, t: "Quality Policy", d: "To deliver high-quality education through continuous improvement in academic standards, infrastructure and teaching methodologies, with industry-oriented learning and personal attention." },
  ];
  return (
    <section id="vision" className="py-20 md:py-28 bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-gold-soft">03 · What drives us</p>
          <h2 className="display text-4xl md:text-5xl mt-3">Vision · Mission · Quality</h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-px bg-paper/15 border border-paper/15">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 80} className="bg-ink p-8">
              <c.icon className="w-6 h-6 text-gold-soft" />
              <h3 className="display text-2xl mt-5 text-paper">{c.t}</h3>
              <p className="text-sm text-paper/70 leading-relaxed mt-3">{c.d}</p>
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
    { icon: IconLandmark, t: "Modern learning spaces", d: "Spacious surroundings designed for focused learning and development." },
    { icon: IconMonitor, t: "Computer laboratories", d: "Modern labs supporting technology-oriented, practical learning." },
    { icon: IconBook, t: "Library & resources", d: "Books, journals and learning resources for continuous self-upgrade." },
    { icon: IconUsers, t: "Workshops & seminars", d: "Regular academic activities for practical exposure and interaction." },
  ];
  return (
    <section className="py-20 md:py-28 border-b border-line">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <p className="kicker">04 · Infrastructure</p>
            <h2 className="display text-4xl md:text-5xl text-ink mt-3">
              Built for
              <br />
              <span className="italic text-maroon">practical learning.</span>
            </h2>
            <figure className="mt-8">
              <img src="/images/library.jpg" alt="The NCMET library — real photograph of the book stacks"
                width={600} height={319} loading="lazy"
                className="w-full h-auto object-cover ring-1 ring-line shadow-plate" />
              <figcaption className="text-xs font-bold text-ink-soft mt-2">
                The college library — genuine photograph.
              </figcaption>
            </figure>
          </div>
        </Reveal>
        <div className="space-y-4">
          {feats.map((f, i) => (
            <Reveal key={f.t} delay={i * 70}>
              <div className="card-lift flex gap-5 rounded-sm border border-line bg-card p-6">
                <span className="num-outline text-4xl shrink-0">0{i + 1}</span>
                <div>
                  <h3 className="display text-xl text-ink flex items-center gap-2.5">
                    <f.icon className="w-4.5 h-4.5 w-5 h-5 text-maroon" /> {f.t}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed mt-2">{f.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ ACADEMIC ----------------------------- */
export function Academic() {
  const items = [
    { icon: IconCalendar, t: "Academic calendar", d: "Session schedule and holidays." },
    { icon: IconFileText, t: "Syllabus", d: "Programme-wise curriculum documents." },
    { icon: IconClipboard, t: "Examination", d: "Exam information and time-tables." },
    { icon: IconMonitor, t: "E-learning", d: "Approved digital learning support." },
    { icon: IconBook, t: "Assignments", d: "Notices and submission instructions." },
  ];
  return (
    <section id="academic" className="py-20 md:py-28 bg-paper-deep/50 border-b border-line">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">05 · Academic</p>
            <h2 className="display text-4xl md:text-5xl text-ink mt-3">Student resources, organised.</h2>
          </div>
          <p className="max-w-sm text-sm text-ink-soft">
            Documents are issued by the college office and will also be available on the student
            portal once it launches.
          </p>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((x, i) => (
            <Reveal key={x.t} delay={i * 60}>
              <div className="card-lift h-full rounded-sm border border-line bg-card p-5">
                <x.icon className="w-5 h-5 text-maroon" />
                <h3 className="display text-lg text-ink mt-4">{x.t}</h3>
                <p className="text-xs text-ink-soft leading-relaxed mt-1.5">{x.d}</p>
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
    ["Enquire", "Submit the enquiry form below, or call any helpline."],
    ["Counselling", "The admission team explains programme, fees, timings and documents."],
    ["Confirm", "Submit documents and fee — your seat is reserved."],
  ];
  const docs = ["10th & 12th marksheet", "Aadhaar card", "4 passport-size photos", "Admission fee"];
  return (
    <section id="admission" className="py-20 md:py-28 bg-maroon text-paper">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <Reveal>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-gold-soft">06 · Admissions</p>
            <h2 className="display text-4xl md:text-6xl mt-3">
              Session 2026-27
              <br />
              <em className="text-gold-soft">admissions are open.</em>
            </h2>
          </Reveal>
          <Reveal delay={90} className="mt-10 space-y-7">
            {steps.map(([t, d], i) => (
              <div key={t} className="flex gap-5">
                <span className="display text-4xl text-gold-soft/90 w-10 shrink-0">{i + 1}</span>
                <div>
                  <h3 className="display text-xl">{t}</h3>
                  <p className="text-sm text-paper/75 mt-1 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={140} className="mt-10 rounded-sm border border-paper/25 bg-maroon-deep/60 p-6">
            <h3 className="display text-lg flex items-center gap-2">
              <IconFileText className="w-4 h-4 text-gold-soft" /> Documents needed at admission
            </h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2.5">
              {docs.map((d) => (
                <li key={d} className="flex items-center gap-2 text-sm text-paper/85">
                  <IconCheck className="w-4 h-4 text-gold-soft shrink-0" /> {d}
                </li>
              ))}
            </ul>
            <p className="text-xs text-paper/60 mt-4">Scholarship facility available — terms apply.</p>
          </Reveal>
          <Reveal delay={180} className="mt-8 flex flex-wrap gap-3">
            {["8887244055", "9451187289", "9453785954"].map((n) => (
              <a key={n} href={`tel:${n}`}
                className="inline-flex items-center gap-2 rounded-sm border border-paper/30 px-4 py-2.5 text-sm font-extrabold hover:bg-paper hover:text-maroon transition-colors">
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
    { icon: IconMessage, t: "Enquiry / grievance", d: "Raise a question or complaint with the office.", href: "#contact" },
    { icon: IconDownload, t: "Downloads", d: "Forms & resources from the office for now.", href: "#portal" },
    { icon: IconLock, t: "Student login", d: "Portal access for enrolled students.", href: "#portal" },
    { icon: IconTrophy, t: "Results", d: "Via office today; portal when it launches.", href: "#portal" },
    { icon: IconSun, t: "Holiday list", d: "Session-wise academic holidays.", href: "#academic" },
  ];
  return (
    <section id="support" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3">
          <Reveal>
            <p className="kicker">07 · Student support</p>
            <h2 className="display text-4xl md:text-5xl text-ink mt-3">Services for enrolled students.</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 60}>
                <a href={c.href} className="card-lift flex gap-4 h-full rounded-sm border border-line bg-card p-5">
                  <c.icon className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
                  <span>
                    <span className="display block text-lg text-ink">{c.t}</span>
                    <span className="block text-xs text-ink-soft leading-relaxed mt-1">{c.d}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
        <div id="portal" className="lg:col-span-2 scroll-mt-32">
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
    <section id="gallery" className="py-20 md:py-28 bg-paper-deep/50 border-y border-line overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="kicker">08 · The campus, as it is</p>
          <h2 className="display text-4xl md:text-5xl text-ink mt-3">
            Real photographs.
            <br />
            <span className="italic text-maroon">No staging.</span>
          </h2>
          <p className="text-sm text-ink-soft mt-4 max-w-xl">
            Genuine photographs of the campus, library and leadership. New photographs are added
            here as the college shares them.
          </p>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <Reveal className="lg:col-span-2">
            <figure className="postcard rotate-[0.6deg]">
              <img src="/images/campus.jpg" alt="NCMET campus building — real photograph"
                width={1402} height={1122} loading="lazy" className="w-full h-80 object-cover" />
              <figcaption className="pt-3 text-sm font-bold text-ink">The campus, Peer Nagar.</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={80}>
            <figure className="postcard -rotate-[1.2deg]">
              <img src="/images/library.jpg" alt="NCMET library — real photograph"
                width={600} height={319} loading="lazy" className="w-full h-44 object-cover" />
              <figcaption className="pt-3 text-sm font-bold text-ink">The library stacks.</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={60}>
            <figure className="postcard rotate-[1deg]">
              <img src="/images/founder.jpg" alt="Founder Mr. Ram Janam Singh — real photograph"
                width={250} height={278} loading="lazy" className="w-full h-52 object-cover object-top" />
              <figcaption className="pt-3 text-sm font-bold text-ink">The founder.</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <figure className="postcard -rotate-[0.8deg]">
              <img src="/images/director.jpg" alt="Director Amar N. Singh — real photograph"
                width={150} height={163} loading="lazy" className="w-full h-52 object-cover" />
              <figcaption className="pt-3 text-sm font-bold text-ink">The director.</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={160}>
            <figure className="postcard rotate-[1.4deg]">
              <img src="/images/logo-brand.jpg" alt="Official NCMET emblem — Learn, Lead, Transform"
                width={200} height={200} loading="lazy" className="w-full h-52 object-contain bg-white p-6" />
              <figcaption className="pt-3 text-sm font-bold text-ink">The emblem — Learn · Lead · Transform.</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- EVENTS ------------------------------ */
export function Events() {
  const ev = [
    { icon: IconCap, t: "Orientation program", d: "Welcome and academic orientation for new batches." },
    { icon: IconBriefcase, t: "Industry interaction", d: "Practical exposure and interaction with professionals." },
    { icon: IconUsers, t: "Seminars & conferences", d: "Knowledge-sharing, workshops and group discussions." },
    { icon: IconSun, t: "Cultural celebrations", d: "Festivals celebrated together as one campus family." },
  ];
  return (
    <section id="events" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="kicker">09 · Events</p>
          <h2 className="display text-4xl md:text-5xl text-ink mt-3">Life at NCMET.</h2>
        </Reveal>
      </div>
      <Reveal delay={80}>
        <div className="rail mt-10 flex gap-5 px-6 max-w-7xl mx-auto pb-4">
          {ev.map((e, i) => (
            <article key={e.t} className="card-lift shrink-0 w-[280px] md:w-[340px] rounded-sm border border-line bg-card p-7">
              <span className="num-outline text-4xl">0{i + 1}</span>
              <e.icon className="w-6 h-6 text-maroon mt-6" />
              <h3 className="display text-2xl text-ink mt-4">{e.t}</h3>
              <p className="text-sm text-ink-soft leading-relaxed mt-2">{e.d}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------ CONTACT ------------------------------ */
export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-paper-deep/50 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14">
        <div>
          <Reveal>
            <p className="kicker">10 · Contact</p>
            <h2 className="display text-4xl md:text-6xl text-ink mt-3">
              Come,
              <br />
              <em className="text-maroon">meet us.</em>
            </h2>
            <p className="text-ink-soft mt-5 max-w-md leading-relaxed">
              The college office is open on working days. Walk in, call, or write on WhatsApp —
              the admission team responds quickly.
            </p>
          </Reveal>
          <Reveal delay={90} className="mt-9 space-y-4 max-w-md">
            <p className="flex gap-3 text-[15px] text-ink leading-relaxed">
              <IconPin className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
              NICE College of Management and e-Technology, in front of DM Residence, Bandhwa, Peer
              Nagar, Ghazipur, Uttar Pradesh – 233001
            </p>
            <p className="flex gap-3 text-[15px] font-bold text-ink flex-wrap">
              <IconPhone className="w-5 h-5 text-maroon shrink-0 mt-0.5" />
              <span className="flex gap-x-5 flex-wrap">
                <a className="u-ink hover:text-maroon" href="tel:8887244055">88872 44055</a>
                <a className="u-ink hover:text-maroon" href="tel:9451187289">94511 87289</a>
                <a className="u-ink hover:text-maroon" href="tel:9453785954">94537 85954</a>
              </span>
            </p>
          </Reveal>
        </div>
        <Reveal delay={120} className="grid gap-4">
          <a href="https://www.google.com/maps/search/?api=1&query=Nice+College+of+Management+and+E-Technology+Bandhwa+Peer+Nagar+Ghazipur+233001"
            target="_blank" rel="noopener noreferrer"
            className="card-lift min-h-[200px] rounded-sm border border-line bg-card flex flex-col items-center justify-center gap-3 p-8 text-center">
            <IconPin className="w-9 h-9 text-maroon" />
            <p className="display text-2xl text-ink">Open in Google Maps</p>
            <p className="text-xs font-bold text-ink-soft">Directions to the campus, Peer Nagar</p>
          </a>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://www.facebook.com/nicegzp/" target="_blank" rel="noopener noreferrer"
              className="card-lift rounded-sm border border-line bg-card p-5 flex items-center gap-3">
              <IconFacebook className="w-6 h-6 text-maroon" />
              <span className="text-sm font-extrabold text-ink">Facebook<br /><span className="text-[11px] font-bold text-ink-soft">/nicegzp — notices & updates</span></span>
            </a>
            <a href="https://wa.me/918887244055" target="_blank" rel="noopener noreferrer"
              className="card-lift rounded-sm border border-line bg-card p-5 flex items-center gap-3">
              <IconWhatsApp className="w-6 h-6 text-green" />
              <span className="text-sm font-extrabold text-ink">WhatsApp<br /><span className="text-[11px] font-bold text-ink-soft">instant admission help</span></span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
