"use client";

import { useParams, useRouter } from 'next/navigation';
import { useJobs } from '../../context/JobContext';
import FormattedDescription from '../../components/FormattedDescription';

export default function JobDetailPage() {
  const params = useParams();
  const { jobs, loading, deleteJob } = useJobs();
  const router = useRouter();
  const job = jobs.find((j) => j.id === params.id);

  if (loading) {
    return (
      <div className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-white">Loading Job...</h1>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-white">Job Not Found</h1>
          <p className="mt-4 text-slate-300">Sorry, we couldn't find the job you're looking for.</p>
        </div>
      </div>
    );
  }

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      await deleteJob(job.id);
      router.push('/jobs');
    }
  };

  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="animate-fade-up-soft lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="glass-card p-8 rounded-2xl">
              <h1 className="font-display text-3xl font-bold text-white">{job.title}</h1>
              <p className="mt-2 text-slate-300">{job.location}</p>
              <div className="mt-8">
                <h2 className="font-display text-xl font-semibold text-white">Job Description</h2>
                <FormattedDescription description={job.description} />
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 space-y-6">
            <div className="glass-card p-6 rounded-2xl">
              <h2 className="font-display text-lg font-semibold text-white">Job Overview</h2>
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <h3 className="font-medium text-slate-400">Salary</h3>
                  <p className="mt-1 font-semibold text-white">{job.salary}</p>
                </div>
                <div>
                  <h3 className="font-medium text-slate-400">Job Type</h3>
                  <p className="mt-1 font-semibold text-white">{job.type}</p>
                </div>
                <div>
                  <h3 className="font-medium text-slate-400">Timing</h3>
                  <p className="mt-1 font-semibold text-white">{job.timing}</p>
                </div>
                <div>
                  <h3 className="font-medium text-slate-400">Experience</h3>
                  <p className="mt-1 font-semibold text-white">{job.experienceLevel}</p>
                </div>
                {job.contactEmail && (
                  <div>
                    <h3 className="font-medium text-slate-400">Contact</h3>
                    <p className="mt-1 font-semibold text-white">{job.contactEmail}</p>
                  </div>
                )}
              </div>
              {job.url ? (
                <div className="mt-6">
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center rounded-md bg-amber-500 py-2.5 px-4 text-sm font-medium text-amber-950 shadow-sm hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 glow-on-hover"
                  >
                    Apply Now
                  </a>
                </div>
              ) : (
                <div className="mt-6">
                  <button
                    onClick={handleDelete}
                    className="w-full inline-flex items-center justify-center rounded-md bg-rose-600 py-2.5 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                  >
                    Delete Job
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
