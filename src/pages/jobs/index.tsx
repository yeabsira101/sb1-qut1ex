import { useState } from 'react';
import { JobFilters } from '@/components/jobs/job-filters';
import { JobCard } from '@/components/jobs/job-card';
import type { Job, JobFilters as JobFiltersType } from '@/lib/types/job';

// Mock data - Replace with API calls
const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'internship',
    salary: '$20-25/hr',
    description: 'Looking for a passionate frontend developer intern to join our team...',
    requirements: ['React', 'TypeScript', 'HTML/CSS', 'Git'],
    posted: new Date().toISOString(),
    deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
  // Add more mock jobs...
];

export function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>(MOCK_JOBS);

  const handleFilterChange = (filters: JobFiltersType) => {
    // Implement filtering logic
    console.log('Filters applied:', filters);
  };

  const handleApply = (jobId: string) => {
    // Implement apply logic
    console.log('Applied to job:', jobId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Find Your Next Opportunity</h1>
        <p className="mt-2 text-sm text-gray-600">
          Browse through hundreds of student-friendly positions
        </p>
      </div>

      <div className="mb-8">
        <JobFilters onFilterChange={handleFilterChange} />
      </div>

      <div className="space-y-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onApply={handleApply} />
        ))}
      </div>
    </div>
  );
}