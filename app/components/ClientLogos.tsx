const logos = [
  { name: "Company A", logo: "/logo-a.svg" },
  { name: "Company B", logo: "/logo-b.svg" },
  { name: "Company C", logo: "/logo-c.svg" },
  { name: "Company D", logo: "/logo-d.svg" },
  { name: "Company E", logo: "/logo-e.svg" },
];

export default function ClientLogos() {
  return (
    <section className="bg-slate-50 py-12 animate-fade-up-soft">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-slate-600">
          Trusted by leading firms in financial and professional services
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-5">
          {logos.map((company) => (
            <div key={company.name} className="flex justify-center">
              <div className="h-12 w-28 rounded-lg bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
