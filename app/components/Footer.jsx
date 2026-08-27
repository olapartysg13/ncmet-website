import { IconPin, IconPhone, IconFacebook, IconWhatsApp } from "./Icons";

const LINKS = [
  ["#about", "About"], ["#programmes", "Programmes"], ["#academic", "Academic"],
  ["#admission", "Admissions"], ["#support", "Student Support"], ["#gallery", "Campus"],
  ["#events", "Events"], ["#contact", "Contact"],
];

const PROGRAMMES = ["BCA", "MCA", "MBA", "O Level", "CCC", "DCA / PGDCA", "Tally ERP", "ITI Trades", "Digital Marketing", "Cyber Security"];

export default function Footer() {
  return (
    <footer className="bg-primary-deep text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="NCMET logo" width={46} height={46} className="w-11 h-11 rounded-full ring-1 ring-white/20" />
            <div>
              <p className="serif-heading text-lg">NICE COLLEGE</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
                of Management &amp; e-Technology
              </p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mt-4">
            Since 1999 — quality education, practical skills and career direction for the students
            of Ghazipur. <em className="text-amber-300 not-italic font-semibold">Learn · Lead · Transform.</em>
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://www.facebook.com/nicegzp/" target="_blank" rel="noopener noreferrer" aria-label="NCMET on Facebook"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
              <IconFacebook className="w-4.5 h-4.5 w-5 h-5" />
            </a>
            <a href="https://wa.me/918887244055" target="_blank" rel="noopener noreferrer" aria-label="NCMET on WhatsApp"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
              <IconWhatsApp className="w-5 h-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer quick links">
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-300">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {LINKS.map(([h, l]) => (
              <li key={h}>
                <a href={h} className="text-sm text-white/75 hover:text-white transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-300">Programmes</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {PROGRAMMES.map((p) => (
              <li key={p}>
                <a href="#programmes" className="text-sm text-white/75 hover:text-white transition-colors">{p}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-amber-300">Reach Us</h3>
          <p className="mt-4 text-sm text-white/75 leading-relaxed flex gap-2.5">
            <IconPin className="w-4 h-4 mt-0.5 shrink-0 text-amber-300" />
            In front of DM Residence, Bandhwa, Peer Nagar, Ghazipur, Uttar Pradesh – 233001
          </p>
          <p className="mt-3 text-sm text-white/75 flex gap-2.5">
            <IconPhone className="w-4 h-4 shrink-0 text-amber-300" />
            <span className="flex flex-wrap gap-x-3">
              <a href="tel:8887244055" className="hover:text-white">88872 44055</a>
              <a href="tel:9451187289" className="hover:text-white">94511 87289</a>
            </span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} NICE College of Management and e-Technology (NCMET), Ghazipur. All rights reserved.</p>
          <p className="font-semibold tracking-wide uppercase">Education · Skills · Career</p>
        </div>
      </div>
    </footer>
  );
}
