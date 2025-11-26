"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import SearchJobs from "../components/SearchJobs";
import Link from "next/link";
import { useJobs } from "../context/JobContext";


export default function JobsPage() {
  const { jobs, loading } = useJobs();
  const searchParams = useSearchParams();

  const filteredJobs = jobs.filter((job) => {
    const query = searchParams.get('q')?.toLowerCase() || '';
    const location = searchParams.get('location')?.toLowerCase() || '';
    const type = searchParams.get('type') || '';
    const timing = searchParams.get('timing') || '';
    const experience = searchParams.get('experience') || '';

    return (
      (job.title.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query)) &&
      job.location.toLowerCase().includes(location) &&
      (type ? job.type === type : true) &&
      (timing ? job.timing === timing : true) &&
      (experience ? job.experienceLevel === experience : true)
    );
  });

  useEffect(() => {
    if (!loading) {
      console.log('Jobs from context:', jobs);
      console.log('Filtered jobs:', filteredJobs);
      if (jobs.length > 0 && filteredJobs.length === 0) {
        console.log('Warning: Jobs are available, but filters are hiding them.');
      }
    }
  }, [jobs, filteredJobs, loading]);
  if (loading) {
    return (
      <div className="py-12">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-white">Loading Jobs...</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="font-display text-3xl font-bold text-white">Job Listings</h1>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchJobs />
      </Suspense>
      <section>
        <div className="mx-auto max-w-5xl px-4 pb-16">
          <h2 className="font-display text-lg font-semibold text-white">
            Featured roles
          </h2>
          {filteredJobs.length === 0 ? (
            <p className="mt-6 text-sm text-slate-300">
              No jobs available at the moment.
            </p>
          ) : (
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {filteredJobs.map((job) => (
                <article
                  key={job.id}
                  className="card-elevated flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-800 shadow-sm"
                >
                  <div>
                    <h3 className="font-display text-sm font-semibold text-slate-900">
                      {job.title}
                    </h3>
                    <div className="mt-2 space-y-1 text-[11px] text-slate-500">
                      <p>{job.location} {" • "} {job.type}</p>
                      <p>{job.salary} {" • "} {job.experienceLevel} Level</p>
                    </div>
                  </div>
                  <Link href={`/jobs/${job.id}`} className="mt-4 inline-flex items-center justify-center rounded-full bg-amber-500 px-4 py-1.5 text-[11px] font-medium text-amber-950 hover:bg-amber-400 glow-on-hover">
                    View details
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
