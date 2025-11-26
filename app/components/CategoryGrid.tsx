const categories = [
  "Accounting / Finance",
  "C-Suite Management",
  "Legal",
  "Investment",
  "Insolvency",
  "Banking",
  "Insurance",
  "Reinsurance",
];

export default function CategoryGrid() {
  return (
    <section className="animate-fade-up-soft">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-4 rounded-2xl glass-card p-5 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="glass-card flex flex-col items-start gap-3 rounded-xl px-4 py-4 text-xs text-slate-100"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <span className="text-[13px]">A</span>
              </div>
              <div className="text-[13px] font-medium leading-snug">{category}</div>
              <div className="text-[11px] text-slate-500">
                View roles and opportunities
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <button className="rounded-full bg-amber-500 px-6 py-2 text-xs font-medium text-amber-950 shadow-sm shadow-amber-500/40 transition hover:bg-amber-400">
            Load more listings
          </button>
        </div>
      </div>
    </section>
  );
}
