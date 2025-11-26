"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchJobsFromApi } from '../../lib/api';
import { supabase } from '../../lib/supabase';

export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  timing: 'Full-time' | 'Part-time' | 'Contract';
  experienceLevel: 'Entry' | 'Mid' | 'Senior';
  description: string;
  contactEmail: string;
  url?: string;
}

interface JobContextType {
  jobs: Job[];
  addJob: (job: Omit<Job, 'id'>) => Promise<void>;
  deleteJob: (id: string) => Promise<void>;
  loading: boolean;
}

const JobContext = createContext<JobContextType>({ jobs: [], addJob: async () => {}, deleteJob: async () => {}, loading: true });


export function JobProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      let customJobs: Job[] = [];

      try {
        const { data, error } = await supabase.from('jobs').select('*');
        if (error) {
          console.error('Error fetching custom jobs:', error);
        } else if (data) {
          customJobs = (data as any[]).map((row) => ({
            id: String((row as any).id),
            title: (row as any).title,
            location: (row as any).location,
            type: (row as any).type,
            salary: (row as any).salary,
            timing: (row as any).timing,
            experienceLevel: (row as any).experienceLevel,
            description: (row as any).description,
            contactEmail: (row as any).contactEmail ?? '',
            url: (row as any).url ?? undefined,
          }));
        }
      } catch (error) {
        console.error('Error fetching custom jobs:', error);
      }

      const apiJobs = await fetchJobsFromApi();
      setJobs([...customJobs, ...apiJobs]);
      setLoading(false);
    };

    loadJobs();
  }, []);

  const addJob = async (job: Omit<Job, 'id'>) => {
    const { data, error } = await supabase
      .from('jobs')
      .insert(job)
      .select()
      .single();

    if (error) {
      console.error('Error adding job:', error.message, (error as any).details, (error as any).hint);
      return;
    }

    if (data) {
      // The returned data is an array, so we need to get the first element
      const newJob: Job = {
        id: String((data as any).id),
        title: (data as any).title,
        location: (data as any).location,
        type: (data as any).type,
        salary: (data as any).salary,
        timing: (data as any).timing,
        experienceLevel: (data as any).experienceLevel,
        description: (data as any).description,
        contactEmail: (data as any).contactEmail ?? '',
        url: (data as any).url ?? undefined,
      };

      setJobs((prev) => [newJob, ...prev]);
    }
  };

  const deleteJob = async (id: string) => {
    const { error } = await supabase
      .from('jobs')
      .delete()
      .match({ id });

    if (error) {
      console.error('Error deleting job:', error.message);
      return;
    }

    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, deleteJob, loading }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJobs() {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
}
