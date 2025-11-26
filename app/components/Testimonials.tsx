const testimonials = [
  {
    quote:
      "The team at Meridian are true specialists. Their market knowledge and network are second to none, and they deliver with a level of care and transparency that is rare in the industry.",
    author: "Managing Partner",
    company: "Global Law Firm",
  },
  {
    quote:
      "A first-class service. They took the time to understand our needs and delivered a shortlist of exceptional candidates, making the entire process seamless and efficient.",
    author: "Head of Talent",
    company: "Investment Bank",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-14 animate-fade-up-soft">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-12 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.author} className="flex flex-col">
              <blockquote className="flex-1 text-slate-700">
                <p>"{testimonial.quote}"</p>
              </blockquote>
              <figcaption className="mt-4">
                <div className="font-display font-semibold text-slate-900">
                  {testimonial.author}
                </div>
                <div className="text-xs text-slate-500">
                  {testimonial.company}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
