export default function ContactSection() {
  return (
    <section className="py-14 text-white animate-fade-up-soft">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto grid gap-10 rounded-2xl glass-card p-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <h2 className="font-display text-xl font-semibold">
              Ready to talk about your hiring or next move?
            </h2>
            <p className="text-sm text-slate-300">
              Share a few details and we will respond with tailored insight and
              opportunities aligned to your goals.
            </p>
            <div className="space-y-3 text-sm text-slate-200">
              <div>
                Call us
                <div className="font-semibold text-white">+1 (843) 939-4546</div>
              </div>
              <div>
                Email
                <div className="font-semibold text-white">
                  info@meridiantalent.com
                </div>
              </div>
              <div className="text-xs text-slate-400">
                Based in London, supporting clients and candidates across key
                global financial centres.
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-3 text-xs">
              <div className="space-y-1">
                <label htmlFor="name" className="text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="h-9 w-full rounded-md border border-slate-700 bg-slate-900 px-3 text-xs text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="h-9 w-full rounded-md border border-slate-700 bg-slate-900 px-3 text-xs text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="text-slate-200">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white outline-none placeholder:text-slate-500 focus:border-sky-400"
                  placeholder="Share a brief overview of your requirements."
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex h-9 items-center justify-center rounded-md bg-amber-500 px-4 text-xs font-medium text-amber-950 shadow-sm shadow-amber-500/40 transition hover:bg-amber-400"
              >
                Send message
              </button>
              <p className="text-[10px] text-slate-400">
                By submitting this form you agree that we may contact you about
                relevant opportunities and services.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
