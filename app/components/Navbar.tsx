import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/jobs", label: "Jobs" },
  { href: "/post-a-job", label: "Post a Job" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/5 backdrop-blur-lg border-b border-white/10 text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <div>
          <div className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-300">
            Meridian Talent Partners Ltd
          </div>
          <div className="mt-1 text-[11px] text-slate-300">
            Trusted connections, lasting impact
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-xs font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-200 transition hover:text-amber-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
