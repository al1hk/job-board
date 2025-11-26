import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 text-slate-200">
      <div className="mx-auto max-w-5xl space-y-10 px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold tracking-[0.22em] uppercase font-display">
              <span className="text-amber-300">MTP</span>
            </div>
            <div className="text-xs text-slate-400">
              Meridian Talent Partners connects exceptional people with leading
              organisations across financial and professional services.
            </div>
            <div className="space-y-1 text-xs">
              <div>Call us</div>
              <div className="font-semibold text-white">+1 (843) 939-4546</div>
              <div className="mt-2">info@meridiantalent.com</div>
            </div>
          </div>
          <div className="grid flex-1 gap-8 text-xs md:grid-cols-2">
            <div>
              <div className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Helpful resources
              </div>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/jobs" className="hover:text-amber-300">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-amber-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Company
              </div>
              <ul className="mt-3 space-y-2">
                <li>Meridian Talent Partners Ltd</li>
                <li>Recruitment and search specialists</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-4 text-[11px] text-slate-500 md:flex-row">
          <div>Meridian Talent Partners Ltd 2025</div>
          <div>Designed by Designing Dose</div>
        </div>
      </div>
    </footer>
  );
}
