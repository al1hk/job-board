import { Job } from '../app/context/JobContext';

interface ApiJob {
  id: string;
  title: string;
  city: string;
  employment_type: string;
  salary_min: number;
  salary_max: number;
  description: string;
  url: string;
}

// Helper function to extract salary from the description text
function parseSalaryFromDescription(description: string): string {
  if (!description) return 'Not specified';

  // Regex to find patterns like $115,000 to $125,000 or $115k - $125k
  const salaryRegex = /\$(\d{1,3}(?:,\d{3})*|\d+k?)\s*(?:to|-)\s*\$(\d{1,3}(?:,\d{3})*|\d+k?)/i;
  const match = description.match(salaryRegex);

  if (match) {
    return `$${match[1]} - $${match[2]}`;
  }

  return 'Not specified';
}

export async function fetchJobsFromApi(query: string = '', location: string = ''): Promise<Job[]> {
  try {
    // Call our own Next.js backend instead of the external API directly
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, location }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(`Error from /api/jobs: ${response.status}`, errorData.error);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    // The new API route forwards the response, so we still need to find the jobs array.
    // This uses the more robust checking suggested by Gemini.
    const anyData: any = data;
    const jobsArray: ApiJob[] | null =
      Array.isArray(anyData.data) ? anyData.data :
      Array.isArray(anyData.jobs) ? anyData.jobs :
      Array.isArray(anyData.results) ? anyData.results :
      Array.isArray(anyData.hits) ? anyData.hits :
      null;

    if (!jobsArray) {
      console.warn('No jobs array found in response from /api/jobs. Keys found:', Object.keys(anyData));
      return [];
    }

    // Map the API response to the Job interface
    return jobsArray.map((apiJob: ApiJob) => {
      const salary = (apiJob.salary_min && apiJob.salary_max)
        ? `$${apiJob.salary_min} - $${apiJob.salary_max}`
        : parseSalaryFromDescription(apiJob.description);

      return {
        id: apiJob.id,
        title: apiJob.title,
        location: apiJob.city || location || 'Remote',
        type: apiJob.employment_type || 'Full-time',
        salary: salary,
        timing: 'Full-time',
        experienceLevel: 'Mid',
        description: apiJob.description,
        contactEmail: '',
        url: apiJob.url,
      };
    });
  } catch (error) {
    console.error('Error fetching jobs from internal API route:', error);
    return [];
  }
}
