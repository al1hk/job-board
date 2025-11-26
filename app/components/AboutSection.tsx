export default function AboutSection() {
  return (
    <section className="animate-fade-up-soft">
      <div className="mx-auto max-w-5xl space-y-10 px-4 py-14">
        <div className="max-w-2xl">
          <h2 className="font-display text-xl font-semibold text-white">
            Welcome to Meridian Talent Partners
          </h2>
          <p className="mt-4 text-sm text-slate-300">
            At Meridian Talent Partners, we connect exceptional people with the
            right opportunities. We work across insurance, banking, investment,
            legal and finance, helping businesses build high-performing teams
            and talented professionals take confident next steps in their
            careers.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Our approach
            </h3>
            <p className="mt-4 text-sm text-slate-300">
              We take the time to understand each client and candidate in
              detail. This means learning where you have come from, where you
              want to go and what matters most to you. Whether you are making a
              key senior hire or exploring your next role, our advice is shaped
              around your goals.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Why choose us?
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>
                  Deep industry insight and networks across niche markets.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>
                  Relationship-led service that prioritises long-term fit.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>
                  Transparent, thoughtful guidance throughout each search.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
