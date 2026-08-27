import { IconPin, IconPhone, IconFacebook, IconWhatsApp } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/logo.webp" alt="NCMET emblem" width={44} height={44} className="w-11 h-11 rounded-full ring-1 ring-paper/25" />
            <div>
              <p className="display text-xl">NCMET, Ghazipur</p>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-paper/60 mt-0.5">
                Nice College of Management &amp; e-Technology
              </p>
            </div>
          </div>
          <p className="text-sm text-paper/70 leading-relaxed mt-5 max-w-xs">
            Established 1999. Quality education, practical skills and career direction for the
            students of Ghazipur.
          </p>
          <p className="display italic text-gold-soft text-lg mt-4">Learn · Lead · Transform</p>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold-soft">On this page</h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {[["#about","About"],["#programmes","Programmes"],["#academic","Academic"],["#admission","Admissions"],["#support","Support"],["/gallery","Gallery"],["#events","Events"],["#contact","Contact"]].map(([h,l]) => (
              <li key={h}><a href={h} className="u-ink text-sm font-bold text-paper/75 hover:text-paper">{l}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gold-soft">Reach us</h3>
          <p className="mt-5 text-sm text-paper/75 leading-relaxed flex gap-3">
            <IconPin className="w-4 h-4 mt-0.5 shrink-0 text-gold-soft" />
            In front of DM Residence, Bandhwa, Peer Nagar, Ghazipur, Uttar Pradesh – 233001
          </p>
          <p className="mt-4 text-sm text-paper/75 flex gap-3">
            <IconPhone className="w-4 h-4 shrink-0 text-gold-soft" />
            <span className="flex gap-x-4 flex-wrap">
              <a href="tel:8887244055" className="u-ink hover:text-paper">88872 44055</a>
              <a href="tel:9451187289" className="u-ink hover:text-paper">94511 87289</a>
            </span>
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://www.facebook.com/nicegzp/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-paper/10 hover:bg-paper/20 transition-colors flex items-center justify-center">
              <IconFacebook className="w-4 h-4" />
            </a>
            <a href="https://wa.me/918887244055" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-paper/10 hover:bg-paper/20 transition-colors flex items-center justify-center">
              <IconWhatsApp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <p className="mx-auto max-w-7xl px-6 py-5 text-xs text-paper/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} NICE College of Management and e-Technology (NCMET), Ghazipur.</span>
          <span className="font-extrabold tracking-wider uppercase">Education · Skills · Career</span>
        </p>
      </div>
    </footer>
  );
}
