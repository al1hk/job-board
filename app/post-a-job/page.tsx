"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useJobs, Job } from '../context/JobContext';

export default function PostAJobPage() {
  const { addJob } = useJobs();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Permanent');
  const [salary, setSalary] = useState('');
  const [timing, setTiming] = useState<Job['timing']>('Full-time');
  const [experienceLevel, setExperienceLevel] = useState<Job['experienceLevel']>('Mid');
  const [description, setDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addJob({ title, location, type, salary, timing, experienceLevel, description, contactEmail });

    // Clear the form
    setTitle('');
    setLocation('');
    setType('Permanent');
    setSalary('');
    setTiming('Full-time');
    setExperienceLevel('Mid');
    setDescription('');
    setContactEmail('');

    // Navigate back to the jobs listing so the new job is visible
    router.push('/jobs');
  };

  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div className="glass-card p-8 rounded-2xl">
          <h1 className="font-display text-3xl font-bold text-white">Post a New Job</h1>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-300">Job Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full h-9 rounded-md border-0 bg-white/10 px-3 text-white outline-none ring-0 focus:bg-white/20 focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-slate-300">Location</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 block w-full h-9 rounded-md border-0 bg-white/10 px-3 text-white outline-none ring-0 focus:bg-white/20 focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>
            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-slate-300">Salary</label>
              <input
                type="text"
                id="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="mt-1 block w-full h-9 rounded-md border-0 bg-white/10 px-3 text-white outline-none ring-0 focus:bg-white/20 focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-slate-300">Job Type</label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="mt-1 block w-full h-9 rounded-md border-0 bg-white/10 px-3 text-white outline-none ring-0 focus:bg-white/20 focus:ring-2 focus:ring-amber-400 text-black"
              >
                <option value="Permanent" className="text-black">Permanent</option>
                <option value="Contract" className="text-black">Contract</option>
              </select>
            </div>
            <div>
              <label htmlFor="timing" className="block text-sm font-medium text-slate-300">Timing</label>
              <select
                id="timing"
                value={timing}
                onChange={(e) => setTiming(e.target.value as Job['timing'])}
                className="mt-1 block w-full h-9 rounded-md border-0 bg-white/10 px-3 text-white outline-none ring-0 focus:bg-white/20 focus:ring-2 focus:ring-amber-400 text-black"
              >
                <option value="Full-time" className="text-black">Full-time</option>
                <option value="Part-time" className="text-black">Part-time</option>
              </select>
            </div>
            <div>
              <label htmlFor="experienceLevel" className="block text-sm font-medium text-slate-300">Experience Level</label>
              <select
                id="experienceLevel"
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value as Job['experienceLevel'])}
                className="mt-1 block w-full h-9 rounded-md border-0 bg-white/10 px-3 text-white outline-none ring-0 focus:bg-white/20 focus:ring-2 focus:ring-amber-400 text-black"
              >
                <option value="Entry" className="text-black">Entry</option>
                <option value="Mid" className="text-black">Mid</option>
                <option value="Senior" className="text-black">Senior</option>
              </select>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-slate-300">Job Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                className="mt-1 block w-full rounded-md border-0 bg-white/10 px-3 py-2 text-white outline-none ring-0 focus:bg-white/20 focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>
            <div>
              <label htmlFor="contactEmail" className="block text-sm font-medium text-slate-300">Contact email for applicants</label>
              <input
                type="email"
                id="contactEmail"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="mt-1 block w-full h-9 rounded-md border-0 bg-white/10 px-3 text-white outline-none ring-0 focus:bg-white/20 focus:ring-2 focus:ring-amber-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-md bg-amber-500 py-2.5 px-4 text-sm font-medium text-amber-950 shadow-sm hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 glow-on-hover"
            >
              Submit Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
