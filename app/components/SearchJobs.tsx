"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SearchJobs() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [type, setType] = useState(searchParams.get('type') || '');
  const [timing, setTiming] = useState(searchParams.get('timing') || '');
  const [experience, setExperience] = useState(searchParams.get('experience') || '');

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
    setLocation(searchParams.get('location') || '');
    setType(searchParams.get('type') || '');
    setTiming(searchParams.get('timing') || '');
    setExperience(searchParams.get('experience') || '');
  }, [searchParams]);
  return (
    <section className="animate-fade-up-soft">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-14 md:flex-row md:items-center">
        <div className="md:w-1/2">
          <h2 className="font-display text-xl font-semibold text-white">
            Search for jobs
          </h2>
          <p className="mt-4 text-sm text-slate-300">
            Explore live opportunities across accounting, banking, legal and
            other specialist disciplines. Filter roles to match your skills,
            ambitions and preferred working style.
          </p>
          <form
            className="mt-6 grid gap-3 rounded-xl glass-card p-4 text-xs shadow-sm md:grid-cols-2 lg:grid-cols-4"
            action="/jobs"
            method="get"
          >
            <input
              type="text"
              name="q"
              placeholder="Job title or keyword"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-9 rounded-md border-0 bg-white/10 px-3 text-xs text-white outline-none ring-0 placeholder:text-slate-400 focus:bg-white/20 focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="h-9 rounded-md border-0 bg-white/10 px-3 text-xs text-white outline-none ring-0 placeholder:text-slate-400 focus:bg-white/20 focus:ring-2 focus:ring-amber-400"
            />
            <select
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="h-9 rounded-md border-0 bg-white/10 px-3 text-xs text-white outline-none ring-0 placeholder:text-slate-400 focus:bg-white/20 focus:ring-2 focus:ring-amber-400"
            >
              <option value="" className="text-black">Job Type</option>
              <option value="Permanent" className="text-black">Permanent</option>
              <option value="Contract" className="text-black">Contract</option>
            </select>
            <select
              name="timing"
              value={timing}
              onChange={(e) => setTiming(e.target.value)}
              className="h-9 rounded-md border-0 bg-white/10 px-3 text-xs text-white outline-none ring-0 placeholder:text-slate-400 focus:bg-white/20 focus:ring-2 focus:ring-amber-400"
            >
              <option value="" className="text-black">Timing</option>
              <option value="Full-time" className="text-black">Full-time</option>
              <option value="Part-time" className="text-black">Part-time</option>
            </select>
            <select
              name="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="h-9 rounded-md border-0 bg-white/10 px-3 text-xs text-white outline-none ring-0 placeholder:text-slate-400 focus:bg-white/20 focus:ring-2 focus:ring-amber-400"
            >
              <option value="" className="text-black">Experience Level</option>
              <option value="Entry" className="text-black">Entry</option>
              <option value="Mid" className="text-black">Mid</option>
              <option value="Senior" className="text-black">Senior</option>
            </select>
            <button
              type="submit"
              className="h-9 rounded-md bg-amber-500 px-4 text-xs font-medium text-amber-950 shadow-sm shadow-amber-500/40 transition hover:bg-amber-400"
            >
              Search jobs
            </button>
          </form>
          <ul className="mt-6 space-y-2 text-xs text-slate-300">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>
                Industry-focused roles across banking, legal and financial
                services.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Personalised support at every stage of your search.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Long-term partnerships built on trust, insight and care.</span>
            </li>
          </ul>
          <div className="mt-6">
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white hover:bg-white/10"
            >
              Discover more
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="glass-card mx-auto max-w-sm rounded-2xl p-6">
            <Image
              src="/window.svg"
              width={400}
              height={280}
              alt="Professionals collaborating at a laptop"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
