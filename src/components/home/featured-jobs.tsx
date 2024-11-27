import { Briefcase, MapPin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FEATURED_JOBS = [
  {
    id: 1,
    title: 'Campus Ambassador',
    company: 'TechStart',
    location: 'Remote',
    salary: '$20/hr',
    type: 'Part-time',
  },
  {
    id: 2,
    title: 'Research Assistant',
    company: 'University Lab',
    location: 'On-campus',
    salary: '$18/hr',
    type: 'Flexible',
  },
  {
    id: 3,
    title: 'Social Media Manager',
    company: 'StartupHub',
    location: 'Hybrid',
    salary: '$22/hr',
    type: 'Part-time',
  },
];

export function FeaturedJobs() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Opportunities</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the latest part-time jobs and internships
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_JOBS.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {job.type}
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-500">
                  <Briefcase className="h-4 w-4 mr-2" />
                  {job.company}
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-500">
                  <DollarSign className="h-4 w-4 mr-2" />
                  {job.salary}
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}