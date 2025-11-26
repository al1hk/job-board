import { Suspense } from 'react';
import SearchJobs from "../components/SearchJobs";
import JobListings from '../components/JobListings';

export default function JobsPage() {
  return (
    <>
      <div className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="font-display text-3xl font-bold text-white">Job Listings</h1>
        </div>
      </div>

      {/* The SearchJobs component is wrapped in Suspense because it might use client-side hooks */}
      <Suspense fallback={<div>Loading search...</div>}>
        <SearchJobs />
      </Suspense>

      {/* The JobListings component contains all the dynamic logic and is wrapped in Suspense */}
      <Suspense fallback={<div className="text-center p-8 text-slate-300">Loading jobs...</div>}>
        <JobListings />
      </Suspense>
    </>
  );
}
