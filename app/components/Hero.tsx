import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white animate-fade-in-soft">
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
          Meridian Talent Partners Ltd
        </p>
        <p className="mt-1 text-[11px] text-slate-300">
          Trusted connections, lasting impact
        </p>
        <h1 className="mt-6 font-display text-3xl font-semibold leading-tight md:text-4xl">
          Meridian Talent Partners sets a new standard in talent solutions,
          delivering superior recruitment services through deep industry
          knowledge and relationship-driven service.
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-300">
          We partner with specialist firms across insurance, banking and legal
          markets to unlock roles that move both businesses and careers
          forward.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/jobs"
            className="rounded-full bg-amber-500 px-5 py-2 text-xs font-medium text-amber-950 shadow-md shadow-amber-500/40 transition hover:bg-amber-400 glow-on-hover"
          >
            View job listings
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-slate-400/60 px-5 py-2 text-xs font-medium text-slate-100 hover:border-amber-400 hover:text-amber-200 glow-on-hover"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
