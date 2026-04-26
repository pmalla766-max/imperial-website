import logoFooterUrl from "@/assets/logo-footer.png";

export default function SiteFooter() {
  return (
    <footer className="bg-brand-dark px-4 pb-7 pt-12 sm:px-6 sm:pt-14">
      <div className="mx-auto mb-11 grid max-w-[1280px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex items-center justify-center">
            <img
              src={logoFooterUrl}
              alt="Imperial Securities"
              className="h-12 w-auto sm:h-14 md:h-[60px] lg:h-16"
              decoding="async"
              loading="lazy"
            />
          </div>
          <p className="mt-7 max-w-[280px] text-[13.5px] leading-[1.75] text-white/60">
            Nepal's trusted stock broker since 1997. SEBON registered, NEPSE member broker No. 45.
          </p>
          <div className="mt-5 flex gap-2.5">
            {["𝕏", "f", "in", "📧"].map((s) => (
              <button key={s} className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-white/[.13] text-sm text-white/55 transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white">
                {s}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h5 className="mb-4 font-heading text-[13.5px] font-bold text-white">Quick Links</h5>
          <ul className="flex flex-col gap-2.5">
            {["About Us", "Services", "IPO Updates", "Research Reports", "Contact"].map((l) => (
              <li key={l}><a href="#" className="text-[13px] text-white/48 transition-colors hover:text-brand-green">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="mb-4 font-heading text-[13.5px] font-bold text-white">Investor Tools</h5>
          <ul className="flex flex-col gap-2.5">
            {["Brokerage Calculator", "Portfolio Tracker", "IPO Check", "Stock Screener", "Price Alerts"].map((l) => (
              <li key={l}><a href="#" className="text-[13px] text-white/48 transition-colors hover:text-brand-green">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="mb-4 font-heading text-[13.5px] font-bold text-white">Legal</h5>
          <ul className="flex flex-col gap-2.5">
            {["Privacy Policy", "Terms of Service", "Disclaimer", "SEBON Guidelines", "Grievance"].map((l) => (
              <li key={l}><a href="#" className="text-[13px] text-white/48 transition-colors hover:text-brand-green">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 border-t border-white/[.07] pt-5">
        <p className="text-xs text-white/30">© 2026 Imperial Securities Company Ltd. All rights reserved.</p>
        <div className="flex gap-2">
          {["SEBON Reg.", "CDSC Member", "NEPSE #45"].map((b) => (
            <span key={b} className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/38">{b}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
